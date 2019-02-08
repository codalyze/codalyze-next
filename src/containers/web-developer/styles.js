import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const h2 = styled.h2`
  ${global.fontFreightDispBold}
  margin: 0 0;
  padding: 273px 0 25px;
  border-bottom: 3px solid #656565;
  font-size: 60px;
`;

export const listingContent = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const descriptionBlock = styled.div`
&:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 60%;
  }
`;

export const h3 = styled.h3`
  ${global.fontRobotoLight}
  font-size: 34px;
  margin: 0 0;
`;

export const p = styled.p`
  ${global.fontRobotoLight}
  font-size: 24px;
  margin: 0 0;
  line-height: 30px;
`;

export const JobDescriptionRow = styled.div`
  margin: 50px 0;
`;

export const formRow = styled.div`
  
`;

export const Input = styled.input`
  border-bottom: 1px solid #242424;
  ${global.fontRobotoLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding: 15px 0px;
  width: 46%;
  background: transparent;
  min-height: 30px;
  ::placeholder {
    ${global.fontRobotoLight};
    color: #929292;
    font-size: 24px;
  }
  &:focus {
    outline-color: transparent;
  }
`;

export const inputDiv = styled.div`
  margin: 0 0 50px;
`;

export const button = styled.button`
  ${global.mainButton}
  margin-top: 20px;
`;