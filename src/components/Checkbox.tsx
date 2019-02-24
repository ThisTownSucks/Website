// https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
// ☝️reference article

import React, { FunctionComponent, ChangeEvent } from 'react'
import styled, { StyledComponentBase } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

interface HidCheckProps { onChange: any } // TODO: Figure out the type

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// TODO: How to type style-components with additional component-level props ?
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<HidCheckProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

interface StyledCBProps { checked: boolean }

const StyledCheckbox = styled.div<StyledCBProps>`
  display: inline-block;
  width: 26px;
  height: 26px;
  background: ${(props) =>
    props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

interface CBProps {
  className: string
  name: string
  checked: boolean
  onChange: ChangeEvent
}

export const Checkbox: FunctionComponent<CBProps> = ({
  className,
  checked,
  // name,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)