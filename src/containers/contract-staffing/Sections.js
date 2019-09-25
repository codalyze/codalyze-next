import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import * as Styled from "./styles";

const sections = [
  {
    stickyImage: Styled.WebDevImage,
    id: "key-benefits",
    h2: "Key Benefits",
    p:
      "We build modern web applications of all shapes and sizes using the latest technologies.",
    list: [
      {
        heading: "Quick setup process",
        p1:
          "Avoid lengthy placement cycles, we strive to find your right employee in less than 15 days",
        image: Styled.PerformanceImage
      },
      {
        heading: "Flexibility",
        p1:
          "Option to terminate contract placement any time on a month’s notice",
        p2:
          "Option to exchange a non-performing candidate on a month’s notice at no extra costs",
        image: Styled.ReusableImage
      },
      {
        heading: "Reduce administrative responsibilities",
        image: Styled.ResponsiveImage
      },
      {
        heading: "Access to skilled resources nationwide",
        image: Styled.ResponsiveImage
      }
    ]
  }
];

export default () => (
  <React.Fragment>
    {sections.map(section => {
      return (
        <Styled.section key={section.id} id={section.id}>
          <div className="abs">
            {/* <Styled.WebDevImageContainer
              isRightAligned={section.isRightAligned}
            >
              <section.stickyImage
                width="400"
                height="400"
                viewBox="0 0 586 586"
              />
            </Styled.WebDevImageContainer> */}
            <Styled.h2>{section.h2}</Styled.h2>
            <Styled.p>{section.p}</Styled.p>
            <Styled.ul>
              {Array.isArray(section.list) &&
                section.list.map(Item => (
                  <Fade key={Item.heading}>
                    <Styled.li>
                      <Styled.liImage>
                        <Item.image />
                      </Styled.liImage>
                      <Styled.liContent>
                        <Styled.h3>{Item.heading}</Styled.h3>
                        <Styled.p>{Item.p1}</Styled.p>
                        <Styled.p>{Item.p2}</Styled.p>
                      </Styled.liContent>
                    </Styled.li>
                  </Fade>
                ))}
            </Styled.ul>
          </div>
        </Styled.section>
      );
    })}
  </React.Fragment>
);
