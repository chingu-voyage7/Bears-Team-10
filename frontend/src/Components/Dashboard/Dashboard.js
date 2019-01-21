import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon, Row, Col } from 'antd';

const Dashboard = props => (
  <div className="dashboard">
    <Row>
      <Col
        offset={6}
        span={6}
        style={{ marginRight: '1em', marginBottom: '1em' }}
      >
        <Card
          hoverable
          className="dashboard-card"
          cover={
            <Icon type="edit" style={{ fontSize: '40px', marginTop: '24px' }} />
          }
          onClick={() => props.history.push('/create-project')}
        >
          <Card.Meta
            title="Create a new project"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card
          hoverable
          className="dashboard-card"
          cover={
            <Icon type="user" style={{ fontSize: '40px', marginTop: '24px' }} />
          }
          onClick={() => props.history.push('/profile')}
        >
          <Card.Meta
            title="Your Profile"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Card>
      </Col>
    </Row>
    <Row>
      <Col
        offset={6}
        span={6}
        style={{ marginRight: '1em', marginBottom: '1em' }}
      >
        <Card
          hoverable
          className="dashboard-card"
          cover={
            <Icon
              type="global"
              style={{ fontSize: '40px', marginTop: '24px' }}
            />
          }
          onClick={() => props.history.push('/community-projects')}
        >
          <Card.Meta
            title="All Projects"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card
          hoverable
          className="dashboard-card"
          cover={
            <Icon
              type="profile"
              style={{ fontSize: '40px', marginTop: '24px' }}
            />
          }
          onClick={() => props.history.push('/user-projects')}
        >
          <Card.Meta
            title="My Projects"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default withRouter(Dashboard);
