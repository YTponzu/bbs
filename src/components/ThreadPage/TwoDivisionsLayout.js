import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  flex: ${(props) => props.width};
`;

const RightContent = styled.div`
  flex: ${(props) => props.width};
`;

const TwoDivisionsLayoutWrapper = ({ children: {left, right}, ratio: {lr, rr} }) => {
  return (
    <Wrapper>
      <LeftContent width={lr}>{left}</LeftContent>
      <RightContent width={rr}>{right}</RightContent>
    </Wrapper>
  );
};

export default TwoDivisionsLayoutWrapper;