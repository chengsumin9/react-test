import { Card, Col, Row, Statistic, Progress, Divider } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import './index.less';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-icon user-icon">
              <UserOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-title">用户数</div>
              <div className="stat-value">1,128</div>
              <div className="stat-footer">
                <span className="stat-label">较昨日</span>
                <span className="stat-change increase">+12.5%</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-icon order-icon">
              <ShoppingCartOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-title">订单数</div>
              <div className="stat-value">930</div>
              <div className="stat-footer">
                <span className="stat-label">较昨日</span>
                <span className="stat-change increase">+5.2%</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-icon revenue-icon">
              <DollarOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-title">收入</div>
              <div className="stat-value">¥7,265</div>
              <div className="stat-footer">
                <span className="stat-label">较昨日</span>
                <span className="stat-change increase">+8.4%</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-icon growth-icon">
              <BarChartOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-title">增长率</div>
              <div className="stat-value">28%</div>
              <div className="stat-footer">
                <span className="stat-label">较昨日</span>
                <span className="stat-change decrease">-2.3%</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[24, 24]} className="dashboard-row">
        <Col span={12}>
          <Card title="任务完成情况" className="task-card">
            <div className="task-item">
              <div className="task-info">
                <div className="task-name">用户增长目标</div>
                <div className="task-progress-text">80%</div>
              </div>
              <Progress percent={80} strokeColor="#165DFF" trailColor="#e8f3ff" />
            </div>
            <Divider style={{ margin: '16px 0' }} />
            <div className="task-item">
              <div className="task-info">
                <div className="task-name">销售目标</div>
                <div className="task-progress-text">65%</div>
              </div>
              <Progress percent={65} strokeColor="#36CFC9" trailColor="#e8f7f7" />
            </div>
            <Divider style={{ margin: '16px 0' }} />
            <div className="task-item">
              <div className="task-info">
                <div className="task-name">客户满意度</div>
                <div className="task-progress-text">92%</div>
              </div>
              <Progress percent={92} strokeColor="#52C41A" trailColor="#f0f9eb" />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="系统公告" className="notice-card">
            <div className="notice-item">
              <div className="notice-title">系统更新通知</div>
              <div className="notice-time">2023-07-15</div>
              <div className="notice-content">系统将于本周六凌晨2点进行例行维护，预计2小时内完成。</div>
            </div>
            <Divider style={{ margin: '16px 0' }} />
            <div className="notice-item">
              <div className="notice-title">新功能发布</div>
              <div className="notice-time">2023-07-10</div>
              <div className="notice-content">数据分析模块已更新，新增多维度数据可视化功能，欢迎体验。</div>
            </div>
            <Divider style={{ margin: '16px 0' }} />
            <div className="notice-item">
              <div className="notice-title">安全提醒</div>
              <div className="notice-time">2023-07-05</div>
              <div className="notice-content">请定期修改密码，确保账号安全。</div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
