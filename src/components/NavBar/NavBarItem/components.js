import styled from "styled-components"

export const Wrapper = styled.li`
  padding: 0 1em;
  
  a {
    line-height: 1.5em;
    text-decoration: none;
    color: ${props => (props.disabled ? "#66696D" : "#9b9d9f")};
    ${props =>
      !props.disabled &&
      `&:hover {
        color: #ffffff;
        cursor: pointer;
      }
    `}
`
