import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const InputWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  color: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--iconSize);
  width: var(--iconSize);
`;

const TextInput = styled.input`
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  padding-block: var(--paddingY);
  padding-inline-start: var(--paddingLeft);
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  width: ${(p) => p.width};
  min-width: fit-content;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const SIZES = {
  small: {
    "--fontSize": `${14 / 16}rem`,
    "--paddingY": "4px",
    "--paddingLeft": "24px",
    "--iconSize": "16px",
    "--borderSize": "1px",
  },
  large: {
    "--fontSize": `${18 / 16}rem`,
    "--paddingY": "8px",
    "--paddingLeft": "36px",
    "--iconSize": "24px",
    "--borderSize": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <InputWrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={size === "small" ? 16 : 24} />
      </IconWrapper>
      <TextInput placeholder={placeholder} width={`${width}px`} />
    </InputWrapper>
  );
};

export default IconInput;
