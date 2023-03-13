import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const NavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavButtonContainer = styled.button`
  border: none;
  background: none;
  border-radius: 8px;
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.8rem;
  display: inline-flex;

  @media ${MEDIA_SIZES.mobileL} {
    padding: 1.2rem 1.6rem;
    border-radius: 4px;
    
    font-size: 1.4rem;
  }

  &.back {
    color: hsl(231, 11%, 63%);
    
    &:hover {
      color: hsl(213, 96%, 18%);
    }
  }

  &.next {
    color: hsl(0, 0%, 100%);
    background-color: hsl(213, 96%, 18%);
    margin-left: auto;

    &:hover {
      background-color:hsl(213, 72%, 31%);
    }
  }

  &.confirm {
    color: hsl(0, 0%, 100%);
    background-color: hsl(243, 100%, 62%);
    margin-left: auto;
    padding: 1.4rem 3.2rem;
    
    &:hover {
      background-color: hsl(243, 100%, 77%);
    }
  }
`;
