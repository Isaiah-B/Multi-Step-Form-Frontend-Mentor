import styled from 'styled-components';
import { MEDIA_SIZES } from './index.styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 94rem;
  height: 60rem;
  margin: auto;
  padding: 1.6rem 0 1.6rem 1.6rem;
  border-radius: 15px;

  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 25px 40px -20px hsla(0, 0%, 0%, 0.095);
  
  @media (max-width: 61em) {
    width: 95%;
  }

  @media ${MEDIA_SIZES.tablet} {
    height: auto;
    padding: 0;
    background: none;
  }

  @media ${MEDIA_SIZES.mobileL} {
    margin: 0 auto;
  }
`;
