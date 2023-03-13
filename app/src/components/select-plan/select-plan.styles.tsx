import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const PlanSelection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;

  @media ${MEDIA_SIZES.mobileL} {
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2.4rem;
  }
`;

export const PlanCardContainer = styled.div`
  width: 13.8rem;
  height: 16rem;
  margin-bottom: 3.2rem;

  padding: 2rem 1.6rem;
  border: 1px solid hsl(231, 23%, 87%);
  border-radius: 8px;
  cursor: pointer;

  @media ${MEDIA_SIZES.mobileL} {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    width: 100%;
    height: 7.7rem;
    margin-bottom: 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }
  }


  &.selected {
    transition: all 0.3s;
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(231, 100%, 99%);
  }

  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
  }

`;

export const PlanCardIcon = styled.div<{ iconPath: string, color: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-bottom: 4rem;

  background-image: ${(props) => `url(${props.iconPath})`};
  background-color: ${(props) => props.color};

  @media ${MEDIA_SIZES.mobileL} {
    margin: 0;
  }
`;

export const TimeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  width: 100%;
  padding: 1.4rem 0;
  border-radius: 8px;
  background-color: hsl(231, 100%, 99%);

  span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: hsl(231, 11%, 63%);
    cursor: pointer;

    &.selected {
      color: hsl(213, 96%, 18%);
    }
  }

  @media ${MEDIA_SIZES.tablet} {
    width: 66%;
    margin: 0 auto;
  }

  @media ${MEDIA_SIZES.mobileL} {
    width: 100%;
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 3.8rem;
  height: 2rem;
  border-radius: 100px;
  background-color: hsl(213, 96%, 18%);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;

    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);

    .yearly & {
      left: 22px;
    }
  }
`;