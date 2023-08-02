<<<<<<< HEAD
=======
// import React from 'react';
// import './sidebar.module.css';
// import Logo from '../images/eliteLogo/alitesiteWR.png'
// import {
//   HouseFill,
//   QuestionCircleFill,
//   BriefcaseFill,
//   Building,
//   TelephoneFill,
//   PersonWorkspace,
//   BellFill,
//   PersonCircle
// } from 'react-bootstrap-icons';
// import style, { styled } from 'styled-components';

// const SideBarTag = styled.div`
//   position: fixed;
//   font-family: "Inter", sans-serif;
//   line-height: 1.5;
//   height: 100vh;
//   width: fit-content;
//   background-color: transparent;
//   z-index: 1;
// `

// const UlTag = styled.ul`
//   width: minmax(49.587px, 60px);
//   list-style: none;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   margin-left: auto;
//   margin-right: auto;
//   /* background-color: #05043e; */
//   backdrop-filter: blur(16px) saturate(149%);
//   -webkit-backdrop-filter: blur(16px) saturate(149%);
//   background-color: rgba(17, 25, 40, 0.28);
//   border-radius: 12px;
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   display: flex;
//   flex-direction: column;
//   /* justify-content: space-between; */
//   /* padding-left: 0% !important; */
//   padding: 0.75rem !important;
  
//   border-radius: 0px 10px 10px 0px;
//   box-shadow: 0 10px 50px 0 rgba(5, 4, 62, 0.25);

//   ${LiTag}:nth-child(7) {
//     margin-top: 5rem;
//     padding-top: 1.25rem;
//     border-top: 1px solid #ffffff73;
//   }

//   ${LiTag} + ${LiTag} {
//     margin-top: 0.75rem;
//   }

//   ${LiTag}:nth-child(9) {
//     margin-top: 2rem;
//     padding-top: 1.25rem;
//     border-top: 1px solid #ffffff73;
//   }

//   @media screen and (max-width: 916px) {
//     padding: 0.1rem !important;
//   }

//   @media screen and (max-width:916px){
//     padding: 0.1rem !important;
//   }
// `;

// const LiTag = styled.li`
//   @media screen and (max-width: 916px) {
//     &:nth-child(7) {
//       margin-top: 2rem;
//       padding-top: 1.25rem;
//       border-top: 1px solid #363664;
//     }

//     & + & {
//       margin-top: 5px;
//     }
// }`;

// const ATag = styled.a`
//   color: #FFF;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 3rem;
//   height: 3rem;
//   border-radius: 8px;
//   position: relative;
//   transition: background-color 0.15s ease, border 0.15s ease, outline 0.15s ease;

//   @media only screen and (max-width:916px){
//   &:hover,
//   &:focus,
//   &.active {
//     padding: 10px;
//     border-radius: 50%;
//     }
//   }

//   &:hover,
//   &:focus,
//   &.active {
//     background-color: #ffffff3a;
//     border: 1px solid #f2f5f7;
//     outline: 0;

//     span {
//       transform: scale(1);
//       opacity: 1;
//       color: #05155e;
//     }
//   }

//   i {
//     font-size: 1.375rem;
//   }

//   span {
//     position: absolute;
//     background-color: #ffffff;
//     white-space: nowrap;
//     padding: 0.5rem 1rem;
//     border-radius: 6px;
//     left: calc(100% + 1.5rem);
//     transform-origin: center left;
//     transform: scale(0);
//     opacity: 0;
//     transition: 0.15s ease;

//     &:before {
//       content: "";
//       display: block;
//       width: 12px;
//       height: 12px;
//       position: absolute;
//       background-color: #fff;
//       left: -5px;
//       top: 50%;
//       transform: translateY(-50%) rotate(45deg);
//       border-radius: 3px;
//     }
//   }
// `;

// const SideBarLogo = styled.img`
//   width: 3rem;
//   position: relative;

//   @media screen and (max-width:916px){
//     padding: 20%;
//   }
// `

// function SideBar() {
//   return (
//     <SideBarTag>
//       <UlTag>
//         <LiTag>
//           <ATag href="#">
//             <HouseFill className='iconsSide'/>
//             <span>Home</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//           <QuestionCircleFill className='iconsSide' />
//             <span>About Us</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <BriefcaseFill className='iconsSide' />
//             <span>Services</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <Building className='iconsSide' />
//             <span>Work</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <TelephoneFill className='iconsSide' />
//             <span>Contact Us</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <PersonWorkspace className='iconsSide' />
//             <span>Careers</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <BellFill className='iconsSide' />
//             <span>Notifications</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <ATag href="#">
//             <PersonCircle className='iconsSide' />
//             <span>Profile</span>
//           </ATag>
//         </LiTag>
//         <LiTag>
//           <SideBarLogo src={Logo}/>
//         </LiTag>
//       </UlTag>
//     {/* <img src={Logo} className='sideBarLogo'/> */}
//     </SideBarTag>
//   )
// }

// export default SideBar

>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
import React from 'react';
import { HouseFill, QuestionCircleFill, BriefcaseFill, Building, TelephoneFill, PersonWorkspace, BellFill, PersonCircle } from 'react-bootstrap-icons';
import style, { styled } from 'styled-components';
import Logo from '../images/eliteLogo/alitesiteWR.png';
<<<<<<< HEAD
import { NavLink, useLocation } from 'react-router-dom';
=======
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226

const SideBarTag = styled.div`
  position: fixed;
  font-family: "Inter", sans-serif;
  line-height: 1.5;
  height: 100vh;
  width: fit-content;
  background-color: transparent;
  z-index: 1;
`;

const LiTag = styled.li`
  @media screen and (max-width: 916px){
    &:nth-child(7) {
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px solid #363664;
    }

    & + & {
      margin-top: 5px;
    }
  }
`;

const UlTag = styled.ul`
  width: minmax(49.587px, 60px);
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(16px) saturate(149%);
  -webkit-backdrop-filter: blur(16px) saturate(149%);
  background-color: rgba(17, 25, 40, 0.28);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
  flex-direction: column;
  padding: 0.75rem !important;
  
  border-radius: 0px 10px 10px 0px;
  box-shadow: 0 10px 50px 0 rgba(5, 4, 62, 0.25);

  ${LiTag}:nth-child(7) {
    margin-top: 5rem;
    padding-top: 1.25rem;
    border-top: 1px solid #ffffff73;
  }

  ${LiTag} + ${LiTag} {
    margin-top: 0.75rem;
  }

  ${LiTag}:nth-child(9) {
    margin-top: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid #ffffff73;
  }

  @media screen and (max-width: 916px){
    padding: 0.1rem !important;
  }
`;

const ATag = styled.a`
  color: #FFF;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  position: relative;
  transition: background-color 0.15s ease, border 0.15s ease, outline 0.15s ease;

  @media only screen and (max-width: 916px){
    &:hover, 
    &:focus, 
    &.active {
      padding: 10px;
      border-radius: 50%;
    }
  }

  &:hover,
  &:focus,
  &.active {
    background-color: #ffffff3a;
    border: 1px solid #f2f5f7;
    outline: 0;

    span {
      transform: scale(1);
      opacity: 1;
      color: #05155e;
    }
  }

  i {
    font-size: 1.375rem;
  }

  span {
    position: absolute;
    background-color: #ffffff;
    white-space: nowrap;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    left: calc(100% + 1.5rem);
    transform-origin: center left;
    transform: scale(0);
    opacity: 0;
    transition: 0.15s ease;

    &:before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      position: absolute;
      background-color: #fff;
      left: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      border-radius: 3px;
    }
  }
`;

const SideBarLogo = styled.img`
  width: 3rem;
  position: relative;

  @media screen and (max-width: 916px){
    padding: 20%;
  }
`;

const IconsSideTag = styled.div`
  color: #f2f5f7;
  font-size: calc(15px + 1.5vw); // Base size for mobile view

  @media screen and (min-width: 768px) {
    font-size: calc(13px + 1vw); // Increase the size for desktop view
  }

  @media screen and (min-width: 1024px) {
    font-size: calc(15px + 1vw); // Further increase the size for larger desktops
  }
`;

function SideBar() {
  return (
    <SideBarTag>
      <UlTag>
        <LiTag>
          <ATag href="#">
            <IconsSideTag>
              <HouseFill className='iconsSide'/>
            </IconsSideTag>
<<<<<<< HEAD
            <span>Dashboard</span>
          </ATag>
        </LiTag>
        <LiTag>
        <NavLink to='/about'>
          <ATag>
=======
            <span>Home</span>
          </ATag>
        </LiTag>
        <LiTag>
          <ATag href="#">
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
            <IconsSideTag>
              <QuestionCircleFill className='iconsSide' />
            </IconsSideTag>
            <span>About Us</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Services'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <BriefcaseFill className='iconsSide' />
            </IconsSideTag>
            <span>Services</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Work'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <Building className='iconsSide' />
            </IconsSideTag>
            <span>Work</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Services'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <TelephoneFill className='iconsSide' />
            </IconsSideTag>
            <span>Contact Us</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Services'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <PersonWorkspace className='iconsSide' />
            </IconsSideTag>
            <span>Careers</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Services'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <BellFill className='iconsSide' />
            </IconsSideTag>
            <span>Notifications</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
        </LiTag>
        <LiTag>
        <NavLink to='/Services'>
=======
        </LiTag>
        <LiTag>
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
          <ATag href="#">
            <IconsSideTag>
              <PersonCircle className='iconsSide' />
            </IconsSideTag>
            <span>Profile</span>
          </ATag>
<<<<<<< HEAD
        </NavLink>
=======
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
        </LiTag>
        <LiTag>
          <SideBarLogo src={Logo}/>
        </LiTag>
      </UlTag>
<<<<<<< HEAD
=======
    {/* <img src={Logo} className='sideBarLogo'/> */}
>>>>>>> 92c8aa93f5de1811a8cde1cebac32fc208d6b226
    </SideBarTag>
  )
}

export default SideBar;
