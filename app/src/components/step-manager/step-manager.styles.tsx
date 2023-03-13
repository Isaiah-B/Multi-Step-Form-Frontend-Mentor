import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const StepAreaContainer = styled.div`
  padding: 5.6rem 0 1.6rem;
  margin: 0 auto;
  width: 45rem;

  @media ${MEDIA_SIZES.labtopS} {
    width: 41rem;
  }

  @media ${MEDIA_SIZES.tablet} {
    width: 95%;
    padding: 0;
  }

  @media ${MEDIA_SIZES.mobileL} {
    margin-top: 9.6rem;
  }
`;
