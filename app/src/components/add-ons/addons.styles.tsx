import styled from 'styled-components';
import { MEDIA_SIZES, SubText } from '../../index.styles';

export const AddonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const AddonItemContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid hsl(231, 23%, 87%);
  border-radius: 8px;
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  @media ${MEDIA_SIZES.mobileL} {
    padding: 1.2rem 1.6rem;

    ${SubText} {
      font-size: 1.2rem;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    color: hsl(243, 100%, 62%);

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.2rem;
    }
  }

  input[type="checkbox"] {
    position: absolute;
    width: 0px;
    height: 0px;
    opacity: 0;
  }

  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
  }

  &:has(input[type="checkbox"]:checked) {
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(231, 100%, 99%);
  }
`;

export const CustomCheckbox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 1px solid hsl(229, 24%, 87%);

  @media ${MEDIA_SIZES.mobileL} {

  }

  &::before {
    content: url(assets/images/icon-checkmark.svg);
    display: none;
  }

  input[type="checkbox"]:checked ~ & {
    background-color: hsl(243, 100%, 62%);

    &::before {
      display: block;
    }
  }
`;

export const AddonItemLeft = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const AddonItemInfo = styled.div`
  margin-left: 4.4rem;
`;
