import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledThreadList = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 800px;  
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  background-color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: #333 1px solid;
  padding: 1rem 1rem 2rem 1rem;

  &:hover {
    background-color: #ddd;
  }
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;