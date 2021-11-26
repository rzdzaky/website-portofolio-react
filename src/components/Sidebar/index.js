import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarRoute,
    SidebarBtnWrap,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen,toogle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper >
        <SidebarMenu>
          <SidebarLink to="about" onClick={toogle}>
            About Me
          </SidebarLink>
          <SidebarLink to="discover" onClick={toogle}>
            Projects
          </SidebarLink>
          <SidebarLink to="services" onClick={toogle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toogle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">My Portofolio</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
