import React from 'react';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import GettingStartedSection from './GettingStartedSection';
import SocialProofSection from './SocialProofSection';
import Footer from '../footer/footer';

const MainContainer = styled.div`
  background: #0A0A0A;
  color: #F5F5F5;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const CTASection = styled.section`
  background: #E84545; /* Using your primary red */
  padding: 6rem 2rem;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 1rem 0;
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 0 3rem 0;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAPrimaryButton = styled.button`
  background: white;
  color: #E84545; /* Using your primary red */
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    background: #f9fafb;
  }
`;

const CTASecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #E84545; /* Using your primary red */
    transform: translateY(-2px);
  }
`;

const MainLandingPage = ({ setCurrentPage }) => {
  return (
    <MainContainer>
      <LandingPage setCurrentPage={setCurrentPage} />
      <FeaturesSection />
      <GettingStartedSection setCurrentPage={setCurrentPage} />
      <SocialProofSection />
      
      <CTASection>
        <CTATitle>Build your next project with confidence</CTATitle>
        <CTASubtitle>
          Join thousands of developers who are shipping better UIs faster. 
          Get started with UI Heat today and transform your development workflow.
        </CTASubtitle>
        <CTAButtons>
          <CTAPrimaryButton onClick={() => setCurrentPage('introduction')}>
            🚀 Get Started Now
          </CTAPrimaryButton>
          <CTASecondaryButton onClick={() => setCurrentPage('installation')}>
            📚 Read Documentation
          </CTASecondaryButton>
        </CTAButtons>
      </CTASection>
      
      <Footer theme="dark" />
    </MainContainer>
  );
};

export default MainLandingPage;
