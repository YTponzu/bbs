import styled from "styled-components";

const StyledHeader = styled.header`
  background: #66D48B;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
`;

const StyledHeaderTitle = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 40px;
`;

const StyledNewThreadBtn = styled.a`
  color: #fff;
  hover: { color: #ddd; }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle href=".">掲示板</StyledHeaderTitle>
      <StyledNewThreadBtn href="create-thread">スレッドをたてる</StyledNewThreadBtn>
    </StyledHeader>
  )
};

export default Header;
