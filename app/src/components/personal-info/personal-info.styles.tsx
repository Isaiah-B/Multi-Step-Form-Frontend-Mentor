import styled from 'styled-components';
import { MEDIA_SIZES, StepContentNavBtnContainer } from '../../index.styles';

export const PersonalInfoFormContainer = styled.form`
  ${StepContentNavBtnContainer};
`;

export const InputFieldContainer = styled.div`

`;

export const InputLabel = styled.label`
  position: relative;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: hsl(213, 96%, 18%);

  @media ${MEDIA_SIZES.mobileL} {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  display: block;
  
  font-family: inherit;
  
  width: 100%;
  border: 1px solid hsl(231, 23%, 87%);
  border-radius: 8px;
  margin-top: 0.8rem;
  padding: 1.2rem 1.6rem;
  background: none;
  outline: none;
  cursor: pointer;
  
  @media ${MEDIA_SIZES.mobileL} {
    margin-top: 0.3rem;
  }

  &::placeholder {
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: hsl(231, 11%, 63%);

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.5rem;
    }
  }

  &:focus {
    border: 1px solid hsl(243, 100%, 62%);
  }
  
  .submitted &:invalid {
    border: 1px solid hsl(353, 84%, 57%);
  }

`;

export const InvalidText = styled.span`
  display: none;
  position: absolute;
  right: 0;
  top: 0;

  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6rem;
  color: hsl(353, 84%, 57%);

  @media (max-width: 20em) {
    top: auto;
  }
  
  .submitted input:invalid ~ & {
    display: block;
  }

  @-moz-document url-prefix() {
    position: relative;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media ${MEDIA_SIZES.mobileL} {
    gap: 1.6rem;
  }
`;