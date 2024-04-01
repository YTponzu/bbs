import styled from 'styled-components';

const StyledH1 = styled.h1`
  width: 80%;
  max-width: 800px;
  font-weight: 400;
  margin: 32px auto;
  padding: 0 1rem;

`;

const Title = ({ title }) => {
  return <StyledH1>{title}</StyledH1>;
}

export default Title;