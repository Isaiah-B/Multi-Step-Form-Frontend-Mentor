import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 27.4rem;
  height: 100%;
  
  border-radius: 10px;
  padding: 4rem 3.2rem;

  background-color: hsl(243, 100%, 62%);
  background-image: url(assets/images/bg-sidebar-desktop.svg);
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media ${MEDIA_SIZES.labtopS} {
    width: 25.4rem;
  }

  @media ${MEDIA_SIZES.tablet} {
    /* display: flex;
    align-items: center;
    justify-content: center; */

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    
    width: 100%;
    height: 17.2rem;
    border-radius: 0;

    background-image: url(assets/images/bg-sidebar-mobile.svg);
    background-position: top;
  }

  @media ${MEDIA_SIZES.mobileL} {
    padding: 3.2rem 0;

  }
`;

export const SidebarStepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media ${MEDIA_SIZES.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 24em) {
    gap: 1.6rem;
  }
`;