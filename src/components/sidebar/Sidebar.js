import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import { FaBars, FaBackward } from 'react-icons/fa';
import { SideBarData } from './Sidebardata';
import SubMenu from './SubMenu';
import './style/sidebar.scss';

///For Routes
import Home from '../../screens/Home';
import AddProducts from '../../screens/AddProducts';
import Users from '../../screens/Users';
import SellProducts from '../../screens/SellProducts';
import Advanced from '../../screens/Advanced';
import Support from '../../screens/Support';

//////////////////////////////////
/////////////////////////////////

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Router>
      <MainDiv>
        <div className="main-flex">
          <SideBarNav sidebar={sidebar}>
            <SideBarWrap>
              {sidebar ? (
                <NavIcon>
                  <FaBars onClick={showSidebar} />
                </NavIcon>
              ) : (
                <NavIconClosed sidebar={sidebar}>
                  <FaBackward onClick={showSidebar} />
                </NavIconClosed>
              )}
              {SideBarData.map((item, index) => {
                return <SubMenu item={item} key={index} sidebar={sidebar} />;
              })}
            </SideBarWrap>
            {/* <CopyrightParent>
            <AiIcons.AiFillGithub />
            <Copyrights sidebar={sidebar}>Copyright &copy; Zharrane</Copyrights>
          </CopyrightParent> */}
          </SideBarNav>

          <main className="MainPage">
            <Route path="/" component={Home} exact />
            <Route path="/manageproducts" component={AddProducts} />
            <Route path="/sellproducts" component={SellProducts} />
            <Route path="/users" component={Users} />
            <Route path="/advanced" component={Advanced} />
            <Route path="/support" component={Support} />
          </main>
        </div>
      </MainDiv>
    </Router>
  );
};
/** Styled**/
const MainDiv = styled.div`
  display: flex;
`;
const NavIcon = styled.div`
  color: #2aa198;
  margin-left: 1.5rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIconClosed = styled.div`
  color: #2aa198;
  margin-left: 1.5rem;
  font-size: 2rem;
  height: 80px;
  width: ${({ sidebar }) => (sidebar ? '0px' : '30px')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SideBarNav = styled.nav`
  background: #073642;
  width: ${({ sidebar }) => (sidebar ? 'auto' : '250px')};
  height: 100vh;
  position: relative;
  transition: 350ms;
  overflow-y: auto;
  overflow-x: hidden;
`;
const SideBarWrap = styled.div``;

// const Copyrights = styled.span`
//   text-align: center;
//   width: 100%;
//   font-size: 13px;
//   color: grey;
//   display: ${({ sidebar }) => (sidebar ? 'none' : 'inline-block')}; ;
// `;
// const CopyrightParent = styled.div`
//   display: flex;
//   color: #ebebeb;
//   gap: 5px;
//   text-transform: capitalize;
//   align-items: center;
//   padding: 35px;
//   list-style: none;
//   height: 35px;

//   text-decoration: none;
//   align-self: flex-end;
//   display: flex;
//   height: 100%;
//   width: 100%;
//   align-content: center;
//   flex-direction: column;
//   justify-content: flex-end;
// `;

export default Sidebar;
