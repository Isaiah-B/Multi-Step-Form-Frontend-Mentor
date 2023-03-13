import { useState, useContext } from 'react';

import NavButtons from '../nav-buttons/nav-buttons.component';

import { infoContext } from '../../context/context';

import {
  NavButtonsMobilePosition,
  StepContainerForm,
  StepDescriptionText,
} from '../../index.styles';

import {
  Input,
  InputFieldContainer,
  InputSection,
  InputLabel,
  InvalidText,
} from './personal-info.styles';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string,
}

function InputField({ title, ...props }: InputFieldProps) {
  return (
    <InputFieldContainer>
      <InputLabel>
        {title}
        <Input {...props} />
        <InvalidText>This field is required</InvalidText>
      </InputLabel>
    </InputFieldContainer>
  );
}


function PersonalInfo() {
  const {
    personalInfo,
    setPersonalInfo,
    currentStep,
    setStep
  } = useContext(infoContext);

  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);

  const [submitted, setSubmitted] = useState(false);

  const onClickSubmitButton = () => {
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName(name.trim());
    setEmail(email.trim());
    setPhone(phone.trim());

    setPersonalInfo({ name, email, phone });
    setStep(currentStep + 1);
  };

  return (
    <StepContainerForm
      className={submitted ? 'submitted' : ''}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h1>Personal Info</h1>
        <StepDescriptionText>Please provide your name, email address, and phone number.</StepDescriptionText>

        <InputSection>
          <InputField
            title="Name"
            value={name}
            placeholder="e.g. Stephen King"
            onChange={({ target }) => setName(target.value)}
            required
          />
          <InputField
            title="Email Address"
            value={email}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <InputField
            title="Phone Number"
            value={phone}
            placeholder="e.g. +1 234 567 8901"
            pattern="(\+([1-9]-)?(\d){1,4}[\s-]?)?\d{3}[\s-]?\d{3}[\s-]?\d{4}"
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </InputSection>
      </div>

      <NavButtonsMobilePosition>
        <NavButtons
          isFormSubmit={true}
          handleFormSubmit={onClickSubmitButton}  
        />
      </NavButtonsMobilePosition>
    </StepContainerForm>
  );
}

export default PersonalInfo;
