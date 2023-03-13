import styled, { createGlobalStyle, css }from 'styled-components';

export const MEDIA_SIZES = {
  labtopS: '(max-width: 52em)',
  tablet: '(max-width: 48em)',
  mobileL: '(max-width: 32em)',
}

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Ubuntu';
      src: url(assets/fonts/Ubuntu-Regular.ttf);
      font-weight: 400;
    }
    @font-face {
      font-family: 'Ubuntu';
      src: url(assets/fonts/Ubuntu-Medium.ttf);
      font-weight: 500;
    }
    @font-face {
      font-family: 'Ubuntu';
      src: url(assets/fonts/Ubuntu-Bold.ttf);
      font-weight: 700;
    }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
    height: 100%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;

    max-height: 100%;
    height: 100%;
    background-color: hsl(218, 100%, 97%);
  }
  
  #root {
    display: flex;
    height: 100%;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.7rem;
    color: hsl(213, 96%, 18%);
    margin-bottom: 1.1rem;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }
  }
  
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: hsl(213, 96%, 18%);
    margin-bottom: 0.8rem;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    text-transform: uppercase;
    color: hsl(228, 100%, 83%);
  }
`;

export const StepDescriptionText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: hsl(231, 11%, 63%);
  margin-bottom: 3.5rem;

  @media ${MEDIA_SIZES.mobileL} {
    margin-bottom: 2.2rem;
  }
`;

export const SubText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: hsl(231, 11%, 63%);
`;

export const StepContentNavBtnContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${MEDIA_SIZES.tablet} {
    padding: 3.2rem 2.4rem;
    border-radius: 10px;
    justify-content: initial;
    height: auto;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 25px 40px -20px hsla(0, 0%, 0%, 0.095);
  }
`;

export const StepContainerDiv = styled.div`
  ${StepContentNavBtnContainer};
`;

export const StepContainerForm = styled.form`
  ${StepContentNavBtnContainer};
`;

export const NavButtonsMobilePosition = styled.div`
  @media ${MEDIA_SIZES.tablet} {
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 1.6rem;
    width: 100%;
    background-color: hsl(0, 0%, 100%);
  }
`;