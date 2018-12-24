import React from "react";
import Link from "next/link";
import * as Styled from "./styles";

const footerNav = [
    {
      name: "Work",
      href: "work"
    },
    {
      name: "Services",
      href: "services"
    },
    {
      name: "About",
      href: "about-us"
    },
    {
      name: "Career",
      href: "career"
    },
    {
      name: "Start a project",
      href: "start-a-project"
    }
  ];

  const FooterLink = ({ href, name }) => (
    <Link href={href} passHref prefetch>
      <Styled.HeaderA>{name}</Styled.HeaderA>
    </Link>
  );

export default () => (
   <Styled.Flex>
       <Styled.FlexContainer>
           <Styled.FooterNavLinks>
           {footerNav.map((x, index) => {
          return <FooterLink href={`/${x.href}`} name={x.name} key={index} />;
        })}
               </Styled.FooterNavLinks>
               <Styled.FooterNavLinks>
           footer
               </Styled.FooterNavLinks> 
       </Styled.FlexContainer>
   </Styled.Flex>
        
    
);