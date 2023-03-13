import { useContext } from 'react';

import Addons from '../add-ons/addons.component';
import PersonalInfo from '../personal-info/personal-info.component';
import SelectPlan from '../select-plan/select-plan.component';
import Summary from '../summary/summary.component';
import Thanks from '../thanks/thanks.component';

import { infoContext } from '../../context/context';

import { StepAreaContainer } from './step-manager.styles';

function StepManager() {
  const { currentStep } = useContext(infoContext);

  const getComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <SelectPlan />
      case 3:
        return <Addons />
      case 4:
        return <Summary />
      case 5:
        return <Thanks />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <StepAreaContainer>
      { getComponent() }
    </StepAreaContainer>
  );
}

export default StepManager;
