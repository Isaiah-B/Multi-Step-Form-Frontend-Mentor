import { ReactComponent as ThankYouIcon } from '../../assets/images/icon-thank-you.svg';

import { StepDescriptionText } from '../../index.styles';
import { ThanksContainer } from './thanks.styles';

function Thanks() {
  return (
    <ThanksContainer>
      <ThankYouIcon />

      <h1>Thank you!</h1>

      <StepDescriptionText>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </StepDescriptionText>
    </ThanksContainer>
  );
}

export default Thanks;
