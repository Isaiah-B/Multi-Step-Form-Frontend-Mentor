import { useContext } from 'react';

import NavButtons from '../nav-buttons/nav-buttons.component';

import { infoContext } from '../../context/context';

import {
  NavButtonsMobilePosition,
  StepContainerDiv,
  StepDescriptionText,
  SubText,
} from '../../index.styles';

import {
  AddonItemContainer,
  AddonItemInfo,
  AddonItemLeft,
  AddonsList,
  CustomCheckbox,
} from './addons.styles';

interface AddonItemProps {
  addonType: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
    selected: boolean,
  }
  description: string,
  handleCheck: () => void,
}

function AddonItem({ addonType, description, handleCheck }: AddonItemProps) {
  const { plan } = useContext(infoContext);

  const price = plan.time === 'monthly' ? addonType.priceMonthly : addonType.priceYearly;
  const time = plan.time === 'monthly' ? 'mo' : 'yr';

  return (
    <AddonItemContainer>
      <AddonItemLeft>
        <input type="checkbox" onChange={handleCheck} checked={addonType.selected}/>
        <CustomCheckbox />

        <AddonItemInfo>
          <h2>{addonType.name}</h2>
          <SubText>{description}</SubText>
        </AddonItemInfo>

      </AddonItemLeft>

      <span>{`+$${price}/${time}`}</span>
    </AddonItemContainer>
  );
}

function Addons() {
  const { addons, setAddonsInfo } = useContext(infoContext);
  const { service, storage, profile } = addons;

  return (
    <StepContainerDiv>
      <div>
        <h1>Pick add-ons</h1>
        <StepDescriptionText>Add-ons help enhance your gaming experience</StepDescriptionText>

        <AddonsList>
          <AddonItem
            addonType={addons.service}
            description="Access to multiplayer games"
            handleCheck={() => setAddonsInfo({
              ...addons, service: { ...service, selected: !service.selected }
            })}
          />
          <AddonItem
            addonType={addons.storage}
            description="Extra 1TB of cloud save"
            handleCheck={() => setAddonsInfo({
               ...addons, storage: { ...storage, selected: !storage.selected }
            })}
          />
          <AddonItem
            addonType={addons.profile}
            description="Custom theme on your profile"
            handleCheck={() => setAddonsInfo({
               ...addons, profile: { ...profile, selected: !profile.selected }
            })}
          />
        </AddonsList>
      </div>
      
      <NavButtonsMobilePosition>
        <NavButtons />
      </NavButtonsMobilePosition>
    </StepContainerDiv>
  );
}

export default Addons;
