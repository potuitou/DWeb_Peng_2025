import React from 'react'
import Accordion from '../components/AccordionFancy'

const ITEMS = [
  {
    id: 'q1',
    label: 'How do I create an account?',
    content:
      'Click the "Sign Up" button in the top right corner and follow the registration process.',
    gradient: 'from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600',
  },
  {
    id: 'q2',
    label: 'I forgot my password. What should I do?',
    content:
      'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    gradient: 'from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500',
  },
  {
    id: 'q3',
    label: 'How do I update my profile information?',
    content:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
    gradient: 'from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600',
  },

  {
    id: 'q4',
    label: 'Default',
    content:
      'Default',
    // gradient: 'from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600',
  },

]

const AccordionPage = () => {
  return (
    <div>
      {/* <h1>Accordion Page</h1> */}
      <Accordion items={ITEMS} />
    </div>
  )
}

export default AccordionPage
