import SidebarItem from '../sidebar-item/sidebar-item.component';

import { SidebarContainer, SidebarStepList } from './sidebar.styles';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarStepList>
        <SidebarItem
          stepNumber={1}
          title="Your Info"
        />
        <SidebarItem
          stepNumber={2}
          title="Select Plan"
        />
        <SidebarItem
          stepNumber={3}
          title="Add-ons"
        />
        <SidebarItem
          stepNumber={4}
          title="Summary"
        />
      </SidebarStepList>
    </SidebarContainer>
  );
}

export default Sidebar;
