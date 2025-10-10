import React, { useState } from 'react';
import {
  DesignSystemBase,
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Label,
  Container,
  Heading,
  Text
} from '../components/DesignSystem';

const LoginDemo = ({ theme }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <DesignSystemBase theme={theme}>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <Container style={{ maxWidth: '400px' }}>
          <Card style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader style={{ textAlign: 'center', paddingBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <Text style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  UH
                </Text>
              </div>
              <Heading level={2} style={{ marginBottom: '0.5rem' }}>
                Welcome back
              </Heading>
              <Text muted>
                Sign in to your UI Heat account
              </Text>
            </CardHeader>

            <CardBody>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      style={{
                        accentColor: 'var(--primary)',
                        transform: 'scale(1.1)'
                      }}
                    />
                    Remember me
                  </label>
                  <a href="#" style={{
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  style={{ width: '100%', marginBottom: '1rem' }}
                >
                  Sign in
                </Button>

                <div style={{ textAlign: 'center' }}>
                  <Text size="sm" muted>
                    Don't have an account?{' '}
                    <a href="#" style={{
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}>
                      Sign up
                    </a>
                  </Text>
                </div>
              </form>

              {/* Social Login Options */}
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: 'var(--border)'
                  }}></div>
                  <Text size="sm" muted style={{
                    backgroundColor: 'var(--surface-raised)',
                    padding: '0 1rem',
                    position: 'relative'
                  }}>
                    Or continue with
                  </Text>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                  gap: '0.75rem' 
                }}>
                  <Button variant="secondary" style={{ padding: '0.75rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="secondary" style={{ padding: '0.75rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                      <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </DesignSystemBase>
  );
};

export default LoginDemo;
