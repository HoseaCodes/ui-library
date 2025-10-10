import React, { useState } from 'react';
import {
  DesignSystemBase,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Label,
  Container,
  Grid,
  Heading,
  Text,
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink
} from '../components/DesignSystem';

const DashboardDemo = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DesignSystemBase theme={theme}>
      {/* Navigation */}
      <Nav>
        <NavContainer>
          <Logo />
          <NavLinks>
            <NavLink href="#" onClick={() => setActiveTab('overview')}>Dashboard</NavLink>
            <NavLink href="#" onClick={() => setActiveTab('components')}>Components</NavLink>
            <NavLink href="#" onClick={() => setActiveTab('analytics')}>Analytics</NavLink>
            <NavLink href="#" onClick={() => setActiveTab('settings')}>Settings</NavLink>
          </NavLinks>
          <Button variant="primary" size="sm">Get Started</Button>
        </NavContainer>
      </Nav>

      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '2rem' }}>
          <Heading level={1} style={{ marginBottom: '0.5rem' }}>
            Dashboard
          </Heading>
          <Text size="lg" muted>
            Welcome back! Here's what's happening with your UI components.
          </Text>
        </div>

        {/* Stats Cards */}
        <Grid cols={1} mdCols={2} lgCols={4} style={{ marginBottom: '2rem' }}>
          <Card>
            <CardBody>
              <Text size="sm" muted style={{ marginBottom: '0.5rem' }}>Total Components</Text>
              <Heading level={2} style={{ color: 'var(--primary)' }}>24</Heading>
              <Text size="xs" style={{ color: 'var(--success)', marginTop: '0.5rem' }}>
                +12% from last month
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Text size="sm" muted style={{ marginBottom: '0.5rem' }}>Active Projects</Text>
              <Heading level={2} style={{ color: 'var(--primary)' }}>8</Heading>
              <Text size="xs" style={{ color: 'var(--success)', marginTop: '0.5rem' }}>
                +2 new this week
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Text size="sm" muted style={{ marginBottom: '0.5rem' }}>Downloads</Text>
              <Heading level={2} style={{ color: 'var(--primary)' }}>1,234</Heading>
              <Text size="xs" style={{ color: 'var(--success)', marginTop: '0.5rem' }}>
                +24% this month
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Text size="sm" muted style={{ marginBottom: '0.5rem' }}>User Rating</Text>
              <Heading level={2} style={{ color: 'var(--primary)' }}>4.8</Heading>
              <Text size="xs" style={{ color: 'var(--success)', marginTop: '0.5rem' }}>
                ⭐⭐⭐⭐⭐ 98% positive
              </Text>
            </CardBody>
          </Card>
        </Grid>

        {/* Main Content Grid */}
        <Grid cols={1} lgCols={3} style={{ gap: '2rem' }}>
          {/* Recent Activity */}
          <div style={{ gridColumn: 'span 2' }}>
            <Card>
              <CardHeader>
                <Heading level={3} style={{ marginBottom: '0.5rem' }}>
                  Recent Activity
                </Heading>
                <Text muted>Latest updates to your component library</Text>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { action: 'Button component updated', time: '2 hours ago', type: 'update' },
                    { action: 'New Card variant added', time: '5 hours ago', type: 'new' },
                    { action: 'Form components refactored', time: '1 day ago', type: 'refactor' },
                    { action: 'Navigation accessibility improved', time: '2 days ago', type: 'improvement' }
                  ].map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      padding: '0.75rem',
                      backgroundColor: 'var(--surface)',
                      borderRadius: '0.375rem'
                    }}>
                      <Text primary>{item.action}</Text>
                      <Text size="sm" muted>{item.time}</Text>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <Heading level={3}>Quick Actions</Heading>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Button variant="primary" style={{ width: '100%' }}>
                    Create Component
                  </Button>
                  <Button variant="secondary" style={{ width: '100%' }}>
                    View Documentation
                  </Button>
                  <Button variant="ghost" style={{ width: '100%' }}>
                    Export Library
                  </Button>
                </div>
              </CardBody>
            </Card>

            {/* Component Usage */}
            <Card style={{ marginTop: '1rem' }}>
              <CardHeader>
                <Heading level={4}>Most Used Components</Heading>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { name: 'Button', usage: '89%' },
                    { name: 'Card', usage: '76%' },
                    { name: 'Input', usage: '65%' },
                    { name: 'Navigation', usage: '54%' }
                  ].map((component, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text size="sm" primary>{component.name}</Text>
                      <Text size="sm" style={{ color: 'var(--primary)' }}>{component.usage}</Text>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </Grid>
      </Container>
    </DesignSystemBase>
  );
};

export default DashboardDemo;
