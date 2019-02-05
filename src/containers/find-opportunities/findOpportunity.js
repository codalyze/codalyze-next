import React, {Component} from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import OpportunityBg from "./images/OpportunityBg";
import OpportunityRight from "./images/findOpportunity-right";

  export const Pagination = props => {     
    const {arr, onClickFirst, onClickLast} = props;
    const paginationItems = new Array(Math.ceil(arr.length/6)).fill(0);   
      return(
          <Styled.paginationUl>
            <Styled.paginationLi onClick={onClickFirst}>
            {"<<"}
            </Styled.paginationLi>
            {
                paginationItems.map((item, index) => {
                    return(
                        <Styled.paginationLi key={index}>
                           {index+1}
                        </Styled.paginationLi>
                    )
                    }
                )  
            }     
            <Styled.paginationLi onClick={onClickLast}>
                {">>"}
        </Styled.paginationLi>
    </Styled.paginationUl>
      )
  }

export default class FindOpportunities extends Component {    

   openings = [
        {
          designation: "Web Development",
          experience: "2+ years of experience in UI Development"
        },
        {
          designation: "UI design",
          experience: "2+ years of experience in UI Development"
        },
        {
          designation: "App development",
          experience: "2+ years of experience in UI Development"
        },
        {
          designation: "Web Development",
          experience: "2+ years of experience in UI Development"
        },
        {
          designation: "UI design",
          experience: "2+ years of experience in UI Development"
        },
        {
          designation: "App development",
          experience: "2+ years of experience in UI Development"
        },
        {
            designation: "Rakesh Hari Master",
            experience: "2+ years of experience in UI Development"
          },
          {
            designation: "Master Hari Bahubali ",
            experience: "2+ years of experience in UI Development"
          },
          {
            designation: "Aishwary the great",
            experience: "2+ years of experience in UI Development"
          }
      ];

      state = {
        first:0,
        last:this.openings.length,
        splicedArray:[]
    }

    componentDidMount(){
        this.onClickFirst();
    }
    

    onClickFirst = () => {
        console.log("First clicked");
       let openingsArray = [...this.openings];
       console.log("opeming",openingsArray);
       const splArray = openingsArray.slice(this.state.first, 6);
       console.log("splArray",splArray);
       this.setState({splicedArray:splArray});
    }

    onClickLast = () => {
        console.log("last clicked", this.state.last);
        let openingsArray = [...this.openings];
        const splArray  = openingsArray.slice(this.state.last - 3, this.state.last );
        console.log("splArray", splArray);
        this.setState({splicedArray:splArray});
    }

    onClickPagination = () => {
       
    }

    
    render(){      
        return(
            <Styled.pageWrapper>
                <Styled.rightImage>
                <OpportunityRight width="100%" height="100%" viewBox="0 0 436.789 448.256" />
                    </Styled.rightImage>
                <Styled.HomeBannerWrap>
                 <HomeBanner
                    title="Find opportunities"         
        />
                </Styled.HomeBannerWrap>
                <Styled.openingsRow>
                <Styled.CareerBg>
            <OpportunityBg
              width="100%"
              height="100%"
              viewBox="0 0 1920.998 1200"/>
          </Styled.CareerBg>
          <Styled.openingSection>
            <Styled.FlexContainer>
              <Styled.title>Opportunities listing</Styled.title>
              <Styled.openingsList>
                {this.state.splicedArray.map((list, index) => (
                  <Styled.openingsBlock key={index}>
                  <Styled.designationTitle>
                    {list.designation}
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    {list.experience}
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                ))}
              </Styled.openingsList>
              <Styled.paginationWrap>
                 <Pagination arr={this.openings} onClickFirst={this.onClickFirst} onClickLast={this.onClickLast} />
                  </Styled.paginationWrap>
            </Styled.FlexContainer>
          </Styled.openingSection>
          </Styled.openingsRow>
             </Styled.pageWrapper>
        )
    }
}