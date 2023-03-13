import styled from 'styled-components';
import { MEDIA_SIZES, SubText } from '../../index.styles';

export const SummaryBox = styled.div`
  padding: 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: hsl(231, 100%, 99%);
  margin-bottom: 2.4rem;
`;

export const SummaryPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 2.4rem;
  border-bottom: 1px solid hsla(231, 11%, 63%, 0.2);
  
  @media ${MEDIA_SIZES} {
    padding-bottom: 1.2rem;
  }

  div {
    text-transform: capitalize;
  }
  
  ${SubText} {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: hsl(243, 100%, 62%);
    }
  }
`;

export const SummaryAddonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 1.6rem;
`;

export const SummaryAddonRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: hsl(213, 96%, 18%);
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4rem;
  
  span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    color: hsl(243, 100%, 62%);

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.6rem;
    }
  }
`;
