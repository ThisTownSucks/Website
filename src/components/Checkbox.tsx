import React, { FunctionComponent, ChangeEvent } from 'react'
import styled, { StyledComponentBase, StyledComponent } from 'styled-components'
import { Field } from 'formik'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide checkbox visually but remain accessible to screen readers.
     Source: https://polished.js.org/docs/#hidevisually */
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

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

type Props = {
  name: string
  value: boolean
}

export const Checkbox: FunctionComponent<Props> = ({ name, value }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <label>
          <CheckboxContainer>
            <HiddenCheckbox
              checked={value}
              onChange={() => {
                form.setFieldValue(name, !value)
              }}
            />
            <StyledCheckbox
              checked={value}
              onChange={() => {
                form.setFieldValue(name, !value)
              }}
            >
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            </StyledCheckbox>
          </CheckboxContainer>
        </label>
      )}
    </Field>
  )
}
