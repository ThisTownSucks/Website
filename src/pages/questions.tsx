import React from 'react'
import { Formik, Form, FieldArray, Field, FieldProps } from 'formik'
import Layout from '../components/layout'
import { TextField, Checkbox, Title, FormInput } from '../components'

export interface NestedQuestion {
  title: string
  followUp: string[]
}

export interface SurveyQuestions {
  q1: string
  q2: string
  q3: string
  q4: NestedQuestion
  q5: NestedQuestion
  q6: NestedQuestion
}

const surveyQuestions: SurveyQuestions = {
  q1: 'How often do you go to shows?',
  q2:
    'Are you satisfied with the number and and diversity of venues in your town?',
  q3:
    'Do you feel like you miss shows because you find out in time or get a reminder?',
  q4: {
    title: 'Are you in a band?',
    followUp: [
      'How often does your band play shows?',
      'How often do you tour?',
      'What services/websites do you use to help book shows?',
      'Do you use a booking agent or do it yourself?',
    ],
  },
  q5: {
    title: 'Are you a venue owner (house venues count!)',
    followUp: [
      'How many people does your venue hold?',
      'Do you have a process for bands to get added to shows? (please explain…)',
      'Do you employ a booking agent?',
      'How often do bands drop-off?',
      'Do you have trouble finding new bands to play on short notice?',
    ],
  },
  q6: {
    title: 'Do you book shows?',
    followUp: [
      'Do you feel like you have sufficient audience reach for the shows that you book?',
      'How far in advance do you start promoting?',
    ],
  },
}

export interface FormValues {
  q1: string
  q2: string
  q3: string
  q4: {
    answer: boolean
    followUp: string[]
  }
  q5: {
    answer: boolean
    followUp: string[]
  }
  q6: {
    answer: boolean
    followUp: string[]
  }
}

export const initialValues: FormValues = {
  q1: '',
  q2: '',
  q3: '',
  q4: { answer: false, followUp: ['', '', '', ''] },
  q5: { answer: false, followUp: ['', '', '', '', ''] },
  q6: { answer: false, followUp: ['', ''] },
}

const Questions = () => {
  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValues) => console.log(values)}
        render={({ handleSubmit, errors, touched, values, handleChange }) => (
          <Form>
            <FieldArray
              name="questions"
              render={helpers => (
                <div>
                  <label htmlFor="q1">
                    <Title>{surveyQuestions['q1']}</Title>
                    <Field name={'q1'} />
                    <Title>{surveyQuestions['q2']}</Title>
                    <Field name={'q2'} />
                    <Title>{surveyQuestions['q3']}</Title>
                    <Field name={'q3'} />
                  </label>
                  <label htmlFor="q4">
                    <Title>{surveyQuestions['q4']['title']}</Title>
                    <Checkbox name="q4.answer" value={values.q4.answer} />
                  </label>
                  {values.q4.answer &&
                    values.q4.followUp.map((_value, index) => (
                      <React.Fragment key={`q4.${index}`}>
                        <Field
                          name={`q4.${index}`}
                          render={(innerProps: FieldProps) => (
                            <TextField
                              {...innerProps}
                              title={surveyQuestions['q4']['followUp'][index]}
                              index={index}
                            />
                          )}
                        />
                      </React.Fragment>
                    ))}
                  <br />
                  <button type="submit">Submit</button>
                </div>
              )}
            />
          </Form>
        )}
      />
    </Layout>
  )
}

export default Questions
