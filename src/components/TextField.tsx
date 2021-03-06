import React from 'react'
import { FieldProps } from 'formik'
import { FormValues } from '../pages/questions'
import styled from 'styled-components'

export const Title = styled.h4`
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  border-color: gray;
  border: 1px solid;
  padding: 5px 5px;
  margin-bottom: 2em;
`

export const InputError = styled.div`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px 0;
`

interface Props {
  title: string
  index: number
}

type OwnProps = FieldProps<FormValues> & Props

export const TextField: React.SFC<OwnProps> = ({ title, field, form, index }) => (
  <label htmlFor={field.name}>
    <Title>{title}</Title>
    <FormInput type="text" {...field} />
  </label>
)
