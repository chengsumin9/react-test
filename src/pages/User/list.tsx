import { Table, Space, Button, Popconfirm, message } from 'antd';
import { useEffect, useState } from 'react';
import { UserOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getUserList } from '../../api/user';

interface UserType {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createTime: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUserList();
      setUsers(res.data.list);
    } catch (error) {
      message.error('获取用户列表失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: number) => {
    message.success('用户删除成功');
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns: ColumnsType<UserType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Space>
          <UserOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} />
          <Popconfirm
            title="确定要删除这个用户吗？"
            onConfirm={() => handleDelete(record.id)}
            okText="是"
            cancelText="否"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="user-list">
      <div className="user-list-header">
        <Button type="primary">添加用户</Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default UserList;
