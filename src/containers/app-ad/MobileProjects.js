import React, { Component } from "react";
import * as Styled from "./styles";

const ProjectData = [
  {
    title: "Instarem",
    image: "/static/images/mobile/work/Instarem.png",
    button: "TAKE A LOOK",
    href: "/#",
    description: "Instarem makes global money transfers easy.",
    position: "Left"
  },
  {
    title: "Ecommerce App - Citymall",
    image: "/static/images/mobile/work/CityMall.png",
    button: "TAKE A LOOK",
    href: "https://radframe.com/#!/",
    description: "This is an ecom app",
    position: "Right"
  },
  {
    title: "Bitsafe",
    image: "/static/images/mobile/work/bitsafe.png",
    button: "TAKE A LOOK",
    href: "/#",
    description: "Bitsafe is a great company",
    position: "Left"
  },
  {
    title: "HPCA",
    image: "/static/images/mobile/work/HPCA.png",
    button: "TAKE A LOOK",
    href: "/#",
    description: "HPCA App is your destination to follow all district and state level cricket at Himachal Pradesh Cricket Association",
    position: "Right"
  },
  {
    title: "KheloMore",
    image: "/static/images/mobile/work/Khelomore.png",
    button: "TAKE A LOOK",
    href: "https://www.khelomore.com/",
    description: "Khelomore more about khelo more",
    position: "Left"
  },

];

export default class MobileProjects extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {ProjectData.map(project => (
          <div
            key={project.title}
            style={{
              display: "flex",
              flexDirection:
                project.position === "Left" ? "row" : "row-reverse",
            }}
          >
            <Styled.projectDetails>
              <Styled.title>{project.title}</Styled.title>
              <Styled.description>{project.description}</Styled.description>
            </Styled.projectDetails>
            <Styled.image>
              <img
                src={project.image}
                style={{
                  width: this.props.mq === "desktop" ? "250px" : "100px"
                }}
              />
            </Styled.image>
          </div>
          // </Styled.projectContainer>
        ))}
      </div>
    );
  }
}
