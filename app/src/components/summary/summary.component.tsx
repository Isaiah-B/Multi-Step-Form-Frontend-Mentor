import { useContext } from 'react';

import { infoContext } from '../../context/context';

import NavButtons from '../nav-buttons/nav-buttons.component';

import {
  NavButtonsMobilePosition,
  StepContainerDiv,
  StepDescriptionText,
  SubText
} from '../../index.styles';

import {
  SummaryAddonRowContainer,
  SummaryAddonsList,
  SummaryBox,
  SummaryPlan,
  SummaryTotal
} from './summary.styles';

interface SummaryAddonRowProps {
  addonType: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
    selected: boolean,
  }
}

function SummaryAddonRow({ addonType }: SummaryAddonRowProps) {
  const { plan } = useContext(infoContext);
  const { name, priceMonthly, priceYearly } = addonType;

  const price = plan.time === 'monthly' ? priceMonthly : priceYearly;
  const time = plan.time === 'monthly' ? 'mo': 'yr';

  return (
    <SummaryAddonRowContainer>
      <SubText>{name}</SubText>
      <span>{`+$${price}/${time}`}</span>
  </SummaryAddonRowContainer>
  );
};

function Summary() {
  const { plan, addons, setStep } = useContext(infoContext);
  const isMonthly = plan.time === 'monthly';
  const planPrice = isMonthly ? plan.type.priceMonthly : plan.type.priceYearly;
  const timeShort = isMonthly ? 'mo' : 'yr';
  const totalTime = isMonthly ? 'month' : 'year';

  const selectedAddonsTotal = Object.entries(addons).reduce((prev, acc) => {
    if (acc[1].selected) {
      const valToAdd = isMonthly ? acc[1].priceMonthly : acc[1].priceYearly;
      return prev + valToAdd;
    } else {
      return prev;
    }
  }, 0);

  console.log(selectedAddonsTotal);
  let total = planPrice + selectedAddonsTotal;

  return (
    <StepContainerDiv>
      <div>
        <h1>Finishing up</h1>
        <StepDescriptionText>Double-check everything looks OK before confirming</StepDescriptionText>

        <SummaryBox>
          <SummaryPlan>
            <div>
              <h2>{`${plan.type.name} (${plan.time})`}</h2>
              <SubText onClick={() => setStep(2)}>Change</SubText>
            </div>
            <h2>{`$${planPrice}/${timeShort}`}</h2>
          </SummaryPlan>

          <SummaryAddonsList>
            {
              Object.entries(addons).map((addon) => {
                if (addon[1].selected) {
                  return <SummaryAddonRow key={addon[1].name} addonType={addon[1]} />;
                }
                return;
              })
            }
          </SummaryAddonsList>
        </SummaryBox>

        <SummaryTotal>
          <SubText>{`Total (per ${totalTime})`}</SubText>
          <span>{`+$${total}/${timeShort}`}</span>
        </SummaryTotal>
      </div>

      <NavButtonsMobilePosition>
        <NavButtons />
      </NavButtonsMobilePosition>
    </StepContainerDiv>
  );
};

export default Summary;
