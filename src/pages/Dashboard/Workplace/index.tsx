import { useEffect, useRef } from 'react';
import { Card, Row, Col } from 'antd';
import * as echarts from 'echarts';

const Workplace = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  // 初始化柱状图
  useEffect(() => {
    const chartDom = barChartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: '近七日销售额',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    option && myChart.setOption(option);

    // 响应式调整图表大小
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  // 初始化饼图
  useEffect(() => {
    const chartDom = pieChartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: '访问来源',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);

    // 响应式调整图表大小
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  // 初始化折线图
  useEffect(() => {
    const chartDom = lineChartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: '月度用户增长趋势',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260, 270, 320, 350, 400, 420],
          type: 'line',
          smooth: true
        }
      ]
    };

    option && myChart.setOption(option);

    // 响应式调整图表大小
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="workplace">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="工作台数据概览" bordered={false}>
            <div ref={barChartRef} style={{ height: '300px' }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="用户访问来源分析" bordered={false}>
            <div ref={pieChartRef} style={{ height: '300px' }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="年度用户增长趋势" bordered={false}>
            <div ref={lineChartRef} style={{ height: '300px' }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Workplace;