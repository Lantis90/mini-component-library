/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--borderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBarContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarFill = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: var(--height);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trims off corners when progress is almost full */
  overflow: clip;
`;

const ProgressBar = ({ value = 0, size = "medium" }) => {
  const styles = SIZES[size];

  return (
    <ProgressBarContainer
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <ProgressBarFill style={styles} value={value} />
      </BarWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
