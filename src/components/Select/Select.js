import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  isolation: isolate;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  z-index: 1;
`;

const Presentation = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-inline-end: 52px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const iconSize = 24;

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation aria-hidden aria-atomic>
        {displayedValue}
        <IconWrapper style={{ "--size": `${iconSize}px` }}>
          <Icon id={"chevron-down"} size={iconSize} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

export default Select;
