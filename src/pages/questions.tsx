import React from 'react'
import Layout from '../components/layout'

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

export const initialValues = {
  q1: '',
  q2: '',
  q3: '',
  q4: ['', '', '', ''],
  q5: ['', '', '', '', ''],
  q6: ['', '']
}

const Questions = () => {
  return (
    <Layout>
      <div>I'm some questions!</div>
      <Formik></Formik>
    </Layout>
  )
}

export default Questions
