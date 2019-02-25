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
  width: 60px;
  height: 60px;
  /* background: ${props => (props.checked ? 'salmon' : 'papayawhip')}; */
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px tomato;
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
              <Icon viewBox="0 0 62 62">
                {value ? (
                  <path
                    d="M44.5 3L2 12V53.5H44.5L57 29.5L44.5 3Z"
                    fill="#423E3E"
                    stroke="black"
                    strokeWidth="4"
                  />
                ) : (
                  <path
                    d="M44.5 2.5L2 11.5V53H44.5L57 29L44.5 2.5Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                  />
                )}
                {/* <polyline points="20 6 9 17 4 12" /> */}
              </Icon>
            </StyledCheckbox>
          </CheckboxContainer>
        </label>
      )}
    </Field>
  )
}
