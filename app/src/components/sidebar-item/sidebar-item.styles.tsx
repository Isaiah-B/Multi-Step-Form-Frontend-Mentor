import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const ItemContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  @media ${MEDIA_SIZES.tablet} {
    flex-direction: column;
  }
`;

const ItemTextBase = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;
`
export const ItemNumberCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.3rem;
  height: 3.3rem;
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 50%;

  color: hsl(0, 0%, 100%);
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;

  .selected & {
    border: 1px solid hsl(206, 94%, 87%);
    color: hsl(213, 96%, 18%);
    background-color: hsl(206, 94%, 87%);
  }
`;

export const ItemNumber = styled(ItemTextBase)`
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media ${MEDIA_SIZES.mobileL} {
    display: none;
  }
`;

export const ItemTitle = styled(ItemTextBase)`
  letter-spacing: 1px;
  color: hsl(0, 0%, 100%);
`;
