import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Styled Components
const SocialProofContainer = styled.section`
  background: #262626; /* Using your dark theme surface */
  padding: 6rem 2rem;
  color: white; /* Using your dark theme text color */
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #FFFFFF;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #d1d5db; /* Using your dark theme text-secondary */
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const TestimonialCard = styled.div`
  background: #404040; /* Using your dark theme surface-raised */
  border: 1px solid #525252; /* Using your dark theme border */
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #FF6B6B; /* Using your light-coral */
    box-shadow: 0 12px 30px rgba(255, 107, 107, 0.1);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 2rem;
    font-size: 4rem;
    color: #FF6B6B; /* Using your light-coral */
    font-family: Georgia, serif;
    padding: 0 0.5rem;
  }
`;

const TestimonialText = styled.p`
  color: white;
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #E84545; /* Using your primary red */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 1rem;
`;

const AuthorRole = styled.div`
  color: #d1d5db; /* Using your dark theme text-secondary */
  font-size: 0.875rem;
`;

const FrameworkSupport = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FrameworkTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  color: #FFFFFF;
`;

const FrameworkLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FrameworkLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  
  svg {
    width: 48px;
    height: 48px;
  }
  
  span {
    color: #d1d5db; /* Using your dark theme text-secondary */
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const StatsContainer = styled.div`
  background: #1a1a1a; /* Using your dark theme background */
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #FF6B6B; /* Using your light-coral */
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #d1d5db; /* Using your dark theme text-secondary */
  font-size: 0.875rem;
  line-height: 1.4;
`;

const SocialProofSection = () => {
  const testimonials = [
    {
      text: "UI Heat completely transformed our development workflow. We went from maintaining 3 separate component libraries to just one.",
      author: "Sarah Chen",
      role: "Senior Frontend Developer at TechCorp",
      avatar: "SC"
    },
    {
      text: "Finally, a component library that actually works across frameworks. The documentation is incredible and the performance is unmatched.",
      author: "Mike Rodriguez", 
      role: "Lead Developer at StartupXYZ",
      avatar: "MR"
    },
    {
      text: "The customization options are endless. We were able to match our exact brand guidelines without writing any custom CSS.",
      author: "Alex Thompson",
      role: "Design System Lead at Enterprise Co",
      avatar: "AT"
    }
  ];

  const frameworks = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="#61DAFB">
          <path d="M12 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      )
    },
    // {
    //   name: "Vue",
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="#4FC08D">
    //       <path d="M2 3h3.5L12 15 18.5 3H22L12 21z"/>
    //     </svg>
    //   )
    // },
    {
      name: "Angular",
      icon: (
        <svg viewBox="0 0 24 24" fill="#DD0031">
          <path d="M12 2L2 6.09 3.26 17.74 12 22 20.74 17.74 22 6.09z"/>
        </svg>
      )
    },
    // {
    //   name: "Svelte",
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="#FF3E00">
    //       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    //     </svg>
    //   )
    // },
    {
      name: "Vanilla JS",
      icon: (
        <svg viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-.971l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
        </svg>
      )
    }
  ];

  return (
    <SocialProofContainer>
      <SectionHeader>
        <SectionTitle>Loved by developers worldwide</SectionTitle>
        <SectionSubtitle>
          Join thousands of developers who are building better UIs faster with UI Heat.
        </SectionSubtitle>
      </SectionHeader>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>
              {testimonial.text}
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                {testimonial.avatar}
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      <FrameworkSupport>
        <FrameworkTitle>Works with your favorite tools</FrameworkTitle>
        <FrameworkLogos>
          {frameworks.map((framework, index) => (
            <FrameworkLogo key={index}>
              {framework.icon}
              <span>{framework.name}</span>
            </FrameworkLogo>
          ))}
        </FrameworkLogos>
      </FrameworkSupport>

      {/* <StatsContainer>
        <StatsGrid>
          <StatItem>
            <StatNumber>50K+</StatNumber>
            <StatLabel>Active developers using UI Heat</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2.1M</StatNumber>
            <StatLabel>Weekly npm downloads</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>45.2K</StatNumber>
            <StatLabel>GitHub stars and growing</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsContainer> */}
    </SocialProofContainer>
  );
};

export default SocialProofSection;
