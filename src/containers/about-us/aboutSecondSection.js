import React from "react";
import * as Styled from './styles';
import TeamMemberBg from "./images/teamMemberBg";
import LoveStatUpsBg from "./images/loveStartups";
import HitechBg from "./images/HiTechBg";


export const HiTech = () => {
    return(
        <Styled.HitechMain>
            <Styled.HitechBanner>
                <HitechBg width="100%" height="100%" viewBox="0 0 2165.792 2143.35"/>
            </Styled.HitechBanner>
        </Styled.HitechMain>
    )
}

const TeamMembers = [{
    id:1,
    image: "/static/images/about-us/Team/1.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
{
    id:2,
    image: "/static/images/about-us/Team/2.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
{
    id:3,
    image: "/static/images/about-us/Team/3.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
{
    id:4,
    image: "/static/images/about-us/Team/4.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
{
    id:5,
    image: "/static/images/about-us/Team/5.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
{
    id:6,
    image: "/static/images/about-us/Team/6.png",
    name: "Naisheel verdhan",
    position: "Ceo & Founder"
},
]

export const TeamMember = () => {
    return(
        <Styled.TeamMain>
            <Styled.TeamBg>
            <TeamMemberBg width="100%" height="100%" viewBox="0 0 1920.998 700"/>
            </Styled.TeamBg>
            <Styled.FlexContainer>
                    <Styled.h2>
                    The team that makes <br/>it all possible
                    </Styled.h2>                
                     <Styled.TeamPhotowrapper>
                     { TeamMembers.map(member => (
                     <Styled.Photo key={member.id}>
                         <Styled.WrapperBlock>
                         <Styled.TeamMemberImage src={member.image}/>
                         <Styled.TeamMemberName>
                             {member.name}
                         </Styled.TeamMemberName>
                         <Styled.TeamPosition>
                             {member.position}
                         </Styled.TeamPosition>
                         </Styled.WrapperBlock>
                     </Styled.Photo>
                    ))  }
                     </Styled.TeamPhotowrapper>
                <Styled.ButtonWrapper><Styled.Button>START A PROJECT</Styled.Button></Styled.ButtonWrapper>
                </Styled.FlexContainer>
            </Styled.TeamMain>
    )
}

export const LoveStatUps = () => {
return(
    <Styled.LoveStartupsDiv>        
            <Styled.LoveBanner>
                <LoveStatUpsBg width="100%" height="100%" viewBox="0 0 1920.997 1275.951"/>
            </Styled.LoveBanner>             
        <Styled.FlexContainer>  
                   
            <Styled.devisonDiv>
                     <Styled.leftDiv>
                     <Styled.imageRight src="/static/images/about-us/Artboard-6.png" />
                     </Styled.leftDiv>
                     <Styled.rightDiv>
                     <Styled.h2>We Love Start-Ups</Styled.h2>
                        
                        <Styled.listUl>
                            <Styled.li>
                                <Styled.circleDiv></Styled.circleDiv>
                                We share your passion for changing the world</Styled.li>
                            <Styled.li>
                            <Styled.circleDiv></Styled.circleDiv>
                                We've helped ideas grow in the past and it feels beautiful</Styled.li>
                            <Styled.li>
                            <Styled.circleDiv></Styled.circleDiv>
                                If you run a start-up and are looking for a tech partner, please say Hi!</Styled.li>
                        </Styled.listUl>
                                                                        
                     </Styled.rightDiv>
                 </Styled.devisonDiv>
              
        </Styled.FlexContainer>
    </Styled.LoveStartupsDiv>
)
}

const sections = [{
    id:"Optimize Approach",
    heading:"Optimize Approach",
    smallText:"We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises.",
    image:"/static/images/about-us/Artboard-4.png",
    isReverse : false
},
{
    id:"High Tech, Low Risk",
    heading:"High Tech, Low Risk",
    smallText:"Building custom software is risky and hard, but there’s a way to stack those odds in your favour. It’s all about the right people and process. We create hands-on partnerships with our clients and share a proven process we’ve honed over successful software projects.",
    image:"/static/images/about-us/Artboard-7.png",
    isReverse : true
},
{
    id:"Focused Product Teams",
    heading:"Focused Product Teams",
    smallText:"You’ll be working with a small, dedicated team built to fit the needs of your project. Enjoy deep focus and productive relationships. Partner with us and we'll make your code and team better.",
    image:"/static/images/about-us/Artboard-5.png",
    isReverse : false
},
{
    id:"We Love Start-Ups",
    heading:"Focused Product Teams",
    smallText:"You’ll be working with a small, dedicated team built to fit the needs of your project. Enjoy deep focus and productive relationships. Partner with us and we'll make your code and team better.",
    image:"/static/images/about-us/Artboard-5.png",
    isReverse : false
}
]


const AboutSecond = () => {
    return(
        <Styled.mainDiv>
            {/* <Styled.FlexContainer>
                 <Styled.devisonDiv>
                     <Styled.leftDiv>
                        <Styled.h2>Optimize Approach</Styled.h2>
                        <Styled.para>
                        We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises.
                        </Styled.para>
                     </Styled.leftDiv>
                     <Styled.rightDiv>
                         <Styled.imageRight src="/static/images/about-us/Artboard-4.png" />                         
                     </Styled.rightDiv>
                 </Styled.devisonDiv>
            </Styled.FlexContainer> */}
            <HiTech/>
            <LoveStatUps/>
            <TeamMember/>
        </Styled.mainDiv>
        
    )      
    
}

export default AboutSecond;