import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: 2rem;
`;

export const HeroImage = styled.div<{ $src: string }>`
  width: 100%;
  background-image: url(${(props) => props.$src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  aspect-ratio: 16 / 9;
  @media (min-width: 768px) {
    aspect-ratio: auto;
    height: 600px;
    max-height: 80vh;
  }
`;

export const OverlayButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  z-index: 2;
`;

export const OverlayButton = styled.a`
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.surface};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent2};
    color: ${({ theme }) => theme.colors.surface}; // <-- add this line
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const Tagline = styled.p`
  margin: 1.5rem 0 0.5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  max-width: 800px;
  padding: 0 1rem;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 0.9rem;
  padding: 0 1rem;
  max-width: 800px;
`;

export const InfoItem = styled.li`
  list-style: none;
`;
