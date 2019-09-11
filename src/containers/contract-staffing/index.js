import React from "react";
import StaffingContent from "./StaffingContent";
import PageWrapper from "../../utils/PageWrapper";

const ContractStaffing = props => {
  return <StaffingContent {...props} />;
};

export default PageWrapper(ContractStaffing);
