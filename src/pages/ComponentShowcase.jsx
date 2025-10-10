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
  NavLink,
  MobileMenuButton,
  MobileMenu
} from '../components/DesignSystem';

const ComponentShowcase = ({ theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <DesignSystemBase theme={theme}>
      {/* Navigation */}
      <Nav>
        <NavContainer>
          <Logo />
          <NavLinks>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/components">Components</NavLink>
            <NavLink href="/docs">Documentation</NavLink>
          </NavLinks>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button variant="primary" size="sm">Download</Button>
            <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              ☰
            </MobileMenuButton>
          </div>
          <MobileMenu isOpen={mobileMenuOpen}>
            <NavLink href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink>
            <NavLink href="/components" onClick={() => setMobileMenuOpen(false)}>Components</NavLink>
            <NavLink href="/docs" onClick={() => setMobileMenuOpen(false)}>Documentation</NavLink>
            <Button variant="primary" size="sm" style={{ marginTop: '0.5rem' }}>Download</Button>
          </MobileMenu>
        </NavContainer>
      </Nav>

      <Container style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Heading level={1} style={{ marginBottom: '1rem' }}>
            Component Library
          </Heading>
          <Text size="lg" muted style={{ maxWidth: '600px', margin: '0 auto' }}>
            A complete collection of beautifully designed, accessible components 
            built with your existing color palette and design principles.
          </Text>
        </div>

        {/* Button Showcase */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Buttons</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Versatile button components in multiple variants and sizes
          </Text>
          
          <Grid cols={1} mdCols={2} style={{ gap: '2rem' }}>
            <Card>
              <CardHeader>
                <Heading level={4}>Button Variants</Heading>
                <Text size="sm" muted>Different styles for different contexts</Text>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading level={4}>Button Sizes</Heading>
                <Text size="sm" muted>Consistent sizing for all use cases</Text>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </CardBody>
            </Card>
          </Grid>
        </section>

        {/* Form Components */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Form Elements</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Accessible form components with proper focus states
          </Text>

          <Card>
            <CardHeader>
              <Heading level={4}>Contact Form Example</Heading>
              <Text size="sm" muted>Showcasing form components in action</Text>
            </CardHeader>
            <CardBody>
              <Grid cols={1} mdCols={2} style={{ gap: '1rem' }}>
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Enter your message..."
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.375rem',
                      backgroundColor: 'var(--surface-raised)',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </Grid>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <Button variant="ghost">Cancel</Button>
                <Button variant="primary">Send Message</Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        {/* Card Variations */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Cards</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Flexible card components for organizing content
          </Text>

          <Grid cols={1} mdCols={2} lgCols={3}>
            {/* Feature Card */}
            <Card>
              <CardHeader>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-100)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '4px'
                  }}></div>
                </div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>
                  Easy to Use
                </Heading>
                <Text size="sm" muted>
                  Simple, intuitive components that work out of the box
                </Text>
              </CardHeader>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <Text size="sm" muted style={{ marginBottom: '0.5rem' }}>
                  Monthly Downloads
                </Text>
                <Heading level={2} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  12.4K
                </Heading>
                <Text size="sm" style={{ color: 'var(--success)' }}>
                  ↗ +18% from last month
                </Text>
              </CardHeader>
              <CardBody>
                <div style={{
                  height: '60px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text size="sm" muted>📈 Chart placeholder</Text>
                </div>
              </CardBody>
            </Card>

            {/* Profile Card */}
            <Card>
              <CardHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>DH</Text>
                  </div>
                  <div>
                    <Heading level={5} style={{ marginBottom: '0.25rem' }}>
                      Dominique Hosea
                    </Heading>
                    <Text size="sm" muted>UI Designer</Text>
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <Button variant="secondary" style={{ width: '100%' }}>
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          </Grid>
        </section>

        {/* Typography Showcase */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Typography</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Consistent typographic hierarchy for clear communication
          </Text>

          <Card>
            <CardBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <Heading level={1}>Heading 1 - Hero Title</Heading>
                  <Text size="sm" muted>2.25rem / 36px - Used for main page titles</Text>
                </div>
                <div>
                  <Heading level={2}>Heading 2 - Section Title</Heading>
                  <Text size="sm" muted>1.875rem / 30px - Used for major sections</Text>
                </div>
                <div>
                  <Heading level={3}>Heading 3 - Subsection</Heading>
                  <Text size="sm" muted>1.5rem / 24px - Used for subsections</Text>
                </div>
                <div>
                  <Text primary>Body text - Primary content</Text>
                  <Text size="sm" muted>1rem / 16px - Main body text for content</Text>
                </div>
                <div>
                  <Text muted>Secondary text - Supporting information</Text>
                  <Text size="sm" muted>1rem / 16px - Muted color for secondary content</Text>
                </div>
                <div>
                  <Text size="sm">Small text - Captions and metadata</Text>
                  <Text size="sm" muted>0.875rem / 14px - For captions and fine print</Text>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Color Palette */}
        <section>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Color System</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Your existing color palette extended into a complete design system
          </Text>

          <Grid cols={1} mdCols={2}>
            <Card>
              <CardHeader>
                <Heading level={4}>Light Theme</Heading>
                <Text size="sm" muted>Clean, bright interface for day use</Text>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#E84545',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Primary</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#fbbf24',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Accent</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Surface</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#000000',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Text</Text>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading level={4}>Dark Theme</Heading>
                <Text size="sm" muted>Comfortable interface for low-light environments</Text>
              </CardHeader>
              <CardBody>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#d1d5db',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Primary</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Accent</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Surface</Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      height: '60px',
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <Text size="xs">Text</Text>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Grid>
        </section>

        {/* Additional Test Content for Scrolling */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Accessibility Features</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Built-in accessibility features for inclusive design
          </Text>

          <Grid cols={1} mdCols={2} style={{ gap: '2rem' }}>
            {Array.from({ length: 6 }, (_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Heading level={4}>Feature {index + 1}</Heading>
                  <Text size="sm" muted>
                    Accessibility feature description that explains how this component
                    ensures inclusive design and usability for all users.
                  </Text>
                </CardHeader>
                <CardBody>
                  <Text>
                    This section contains detailed information about the accessibility
                    features, keyboard navigation, screen reader support, and ARIA
                    attributes that make this component accessible to everyone.
                  </Text>
                  <div style={{ marginTop: '1rem' }}>
                    <Button variant="primary" size="sm">Learn More</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </section>

        {/* More Test Content */}
        <section style={{ marginBottom: '3rem' }}>
          <Heading level={2} style={{ marginBottom: '1rem' }}>Performance & Optimization</Heading>
          <Text muted style={{ marginBottom: '1.5rem' }}>
            Optimized components for better performance
          </Text>

          <Grid cols={1} style={{ gap: '2rem' }}>
            {Array.from({ length: 4 }, (_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Heading level={4}>Optimization Topic {index + 1}</Heading>
                </CardHeader>
                <CardBody>
                  <Text style={{ marginBottom: '1rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Text style={{ marginBottom: '1rem' }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </section>
      </Container>
    </DesignSystemBase>
  );
};

export default ComponentShowcase;
