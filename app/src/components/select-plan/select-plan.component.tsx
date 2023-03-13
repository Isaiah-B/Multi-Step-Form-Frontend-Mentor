import { useContext } from 'react';

import { infoContext, PLAN_TYPES } from '../../context/context';

import NavButtons from '../nav-buttons/nav-buttons.component';

import {
  StepDescriptionText,
  StepContainerDiv,
  SubText,
  NavButtonsMobilePosition,
} from "../../index.styles";

import {
  PlanCardContainer,
  PlanCardIcon,
  PlanSelection,
  Switch,
  TimeSwitcherContainer
} from "./select-plan.styles";

interface PlanCardProps {
  planType: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
  }
  iconPath: string,
  color: string,
}

function PlanCard({ planType, iconPath, color }: PlanCardProps) {
  const { plan, setPlanInfo } = useContext(infoContext);

  const price = plan.time === 'monthly' ? planType.priceMonthly : planType.priceYearly;
  const time = plan.time === 'monthly' ? 'mo' : 'yr';
  
  return (
    <PlanCardContainer
      className={plan.type.name === planType.name ? 'selected' : ''}
      onClick={() => setPlanInfo({ ...plan, type: planType })}
    >
      <PlanCardIcon iconPath={iconPath} color={color} />
      <div>
        <h2>{planType.name}</h2>
        <SubText>{`$${price}/${time}`}</SubText>
      </div>
    </PlanCardContainer>
  );
}

function SelectPlan() {
  const { plan, setPlanInfo } = useContext(infoContext);

  const togglePlanTime = () => {
    if (plan.time === 'monthly') {
      setPlanInfo({ ...plan, time: 'yearly'});
    } else {
      setPlanInfo({ ...plan, time: 'monthly'});
    }
  }

  return (
    <StepContainerDiv>
      <div>
        <h1>Select your plan</h1>
        <StepDescriptionText>You have the option of monthly or yearly billing</StepDescriptionText>

        <PlanSelection>
          <PlanCard
            planType={PLAN_TYPES.arcade}
            iconPath={'assets/images/icon-arcade.svg'}
            color={'hsl(23, 100%, 75%)'}
          />
          <PlanCard
            planType={PLAN_TYPES.advanced}
            iconPath={'assets/images/icon-advanced.svg'}
            color={'hsl(354, 91%, 74%)'}
          />
          <PlanCard
            planType={PLAN_TYPES.pro}
            iconPath={'assets/images/icon-pro.svg'}
            color={'hsl(243, 100%, 62%)'}
          />
        </PlanSelection>

        <TimeSwitcherContainer className={plan.time === 'monthly' ? 'monthly' : 'yearly'}>
          <span
            className={plan.time === 'monthly' ? 'selected' : ''}
            onClick={() => setPlanInfo({ ...plan, time: 'monthly'})}
          >
            Monthly
          </span>

          <Switch onClick={() => togglePlanTime()} />

          <span
            className={plan.time === 'yearly' ? 'selected' : ''}
            onClick={() => setPlanInfo({ ...plan, time: 'yearly'})}
          >
            Yearly
          </span>
        </TimeSwitcherContainer>
      </div>

      <NavButtonsMobilePosition>
        <NavButtons />
      </NavButtonsMobilePosition>
    </StepContainerDiv>
  );
}

export default SelectPlan;
