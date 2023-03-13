import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  text-align: center;

  svg {
    margin-bottom: 3.2rem;

    @media ${MEDIA_SIZES.mobileL} {
      width: 56px;
      height: 56px;
    }
  }
  
  h1 {
    margin-bottom: 1.4rem;
  }

  @media ${MEDIA_SIZES.tablet} {
    border-radius: 10px;
    height: 40rem;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 25px 40px -20px hsla(0, 0%, 0%, 0.095);
  }
`;

export const ThanksIconMarginWrapper = styled.div`
  margin-bottom: 3.2rem;
`;
