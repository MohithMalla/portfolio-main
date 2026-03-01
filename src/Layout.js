import styled from 'styled-components';
import { device } from '../styles/breakpoints';

export const Section = styled.section`
  padding: 40px 20px; /* Small padding for mobile */
  width: 100%;
  max-width: 100vw;

  @media ${device.tablet} {
    padding: 60px 40px;
  }

  @media ${device.laptop} {
    padding: 80px 10%; /* Comfortable margins for desktop */
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 column on mobile */
  gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
  }
`;