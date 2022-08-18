import styled from "styled-components";

const Input = styled.input.attrs((props) => {
  type: props.type || "text";
})`
  padding: 0.5rem;
  border-radius: 7.5px;
  border: 1px solid;
  margin: 0 0.5rem;
  min-width: ${(props) => props.minWidth || "auto"};
`;

export default Input;
