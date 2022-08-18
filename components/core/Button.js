import styled, { css } from "styled-components";

const defaultColor = {
  background: "var(--clr-primary)",
  color: "var(--clr-secondary)",
};
const primaryColor = {
  background: "var(--clr-accent)",
  color: "var(--clr-secondary)",
};
const dangerColor = {
  background: "red",
  color: "var(--clr-secondary)",
};
const secondaryColor = {
  background: "var(--clr-blue)",
  color: "var(--clr-secondary)",
};

const Button = styled.button`
  background-color: ${defaultColor.background};
  color: ${defaultColor.color};
  padding: 0.5rem;
  border: none;
  border-radius: 7.5px;
  margin: 0.5rem;
  cursor: pointer;

  ${(props) => {
    if (props.primary) {
      return css`
        background-color: ${primaryColor.background};
        color: ${primaryColor.color};
      `;
    }
    if (props.danger) {
      return css`
        background-color: ${dangerColor.background};
        color: ${dangerColor.color};
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${secondaryColor.background};
        color: ${secondaryColor.color};
      `;
    }
  }}
`;

export default Button;
