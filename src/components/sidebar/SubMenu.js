import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
  display: flex;
  color: #ebebeb;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #2aa198;
    cursor: pointer;
  }
`;
const DropdownLink = styled(Link)`
display: flex;
color: #ebebeb;
gap: 5px ;
align-items: center;
text-transform: capitalize;
padding: 35px;
list-style: none;
height: 35px;
text-decoration: none;
font-size: 16px;
&:hover {
  background: #252831;
  border-left: 4px solid #2aa198;
  cursor: pointer;
}
  }
`;
const SideBarLabel = styled.div`
  margin-left: 16px;
  color: rgb(187, 187, 187);
  display: ${({ sidebar }) => (sidebar ? 'none' : 'inline-block')}; ;
`;

const SubMenu = ({ item, sidebar }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  return (
    <>
      <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SideBarLabel sidebar={sidebar}>{item.title}</SideBarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SideBarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SideBarLabel sidebar={sidebar}>{item.title}</SideBarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
