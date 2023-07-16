import { styled } from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCompanyInfo>Company Information</StyledCompanyInfo>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: #070b5c;
  text-align: center;
`;

const StyledCompanyInfo = styled.p`
  margin: 0;
  font-size: 14px;
  color: black;
`;
