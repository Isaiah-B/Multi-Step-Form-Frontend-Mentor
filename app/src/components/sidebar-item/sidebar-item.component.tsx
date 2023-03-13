import { useContext } from 'react';

import { infoContext } from '../../context/context';

import {
  ItemContainer,
  ItemInfo,
  ItemNumber,
  ItemNumberCircle,
  ItemTitle,
} from './sidebar-item.styles';

interface SidebarItemProps {
  stepNumber: number,
  title: string,
}

function SidebarItem({ stepNumber, title }: SidebarItemProps) {
  const { currentStep } = useContext(infoContext)
  
  return (
    <ItemContainer className={currentStep === stepNumber ? 'selected' : ''}>
      <ItemNumberCircle>
        <ItemNumber>{`${stepNumber}`}</ItemNumber>
      </ItemNumberCircle>
      <ItemInfo>
        <h3>{`Step ${stepNumber}`}</h3>
        <ItemTitle>{title}</ItemTitle>
      </ItemInfo>
    </ItemContainer>
  );
}

export default SidebarItem;
