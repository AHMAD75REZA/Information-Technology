// import React from "react";
// import styled from "styled-components";

// function Navbar() {
//     const pages=[
//         "home", "services", "projects","blog","pricing","contact"
//     ]
//   return (
//     <>
//       <nav style={{
//         display:'flex',
//         justifyContent:'space-around',
//         alignItems:'center',
//       }}>
//         <div style={{display:"flex"  ,marginLeft:50, padding:5}}>

//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30"  viewBox="0 0 27 40"><g data-name="Group 101" transform="translate(-375 -21)"><rect data-name="Rectangle 16" width="13" height="8" rx="4" transform="translate(375 53)" fill="#f40051"></rect><rect data-name="Rectangle 11" width="20" height="8" rx="4" transform="translate(382 21)" fill="#f2b300"></rect><rect data-name="Rectangle 15" width="20" height="8" rx="4" transform="translate(382 37)" fill="#7620ff"></rect><rect data-name="Rectangle 12" width="8" height="8" rx="4" transform="translate(375 29)" fill="#4cd5c5"></rect></g></svg>
//         <h2 style={{marginTop:10}}>Fanatic</h2>
//         </div>

//         <ul style={{
//             listStyle:'none',
//             display:'flex',
//             justifyContent:'space-between',
//             gap:10,
//             textTransform:"capitalize"
//         }}>
//             {pages.map((list, i)=>(

//                 <li key={i} style={{
//                     cursor:'pointer',
//                 }}>
//             <a style={{textDecoration:'none'}} href={`${list}`}>{list}</a>
//           </li>
//             ))

//             }
          
          
         
//         </ul>
//         <div style={{marginRight:40}}>

//         <button style={{margin:10, color:"blue", padding:5,}} >Login</button>
//         <button style={{margin:10, color:"ActiveBorder", padding:5}}>Get Started</button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
 import Sidebar from "../Nav/Sidebar";
 import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              VYNX GROUP
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;




