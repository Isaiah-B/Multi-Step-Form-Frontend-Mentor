import { useContext } from 'react';

import { infoContext } from '../../context/context';

import { NavButtonContainer, NavButtonsContainer} from './nav-buttons.styles';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "back" | "next" | "confirm",
  children: React.ReactNode,
}

function NavButton({ buttonType = "next", children, ...props }: NavButtonProps) {
  return (
    <NavButtonContainer
    className={buttonType}
    {...props}
    >
      {children}
    </NavButtonContainer>
  );
}

interface NavButtonsProps {
  isFormSubmit?: boolean,
  handleFormSubmit?: () => void,
}

function NavButtons({ isFormSubmit = false, handleFormSubmit }: NavButtonsProps) {
  const { currentStep, setStep } = useContext(infoContext);

  return (
    <NavButtonsContainer>
      {
        currentStep > 1
        &&
        <NavButton
          buttonType="back"
          onClick={() => setStep(currentStep - 1)}
        >
          Go Back
        </NavButton>
      }
      {
        currentStep < 4
        && 
        <NavButton
          buttonType="next"
          type="submit"
          onClick={
            isFormSubmit
              ? handleFormSubmit
              : () => setStep(currentStep + 1)
          }
        >
          Next Step
        </NavButton>
      }
      {
        currentStep === 4
        && 
        <NavButton
          buttonType="confirm"
          onClick={() => setStep(currentStep + 1)}
        >
          Confirm
        </NavButton>
      }
    </NavButtonsContainer>
  );
};

export default NavButtons;
