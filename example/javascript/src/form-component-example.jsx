import React, { useEffect, useState } from 'react'

import { Form } from '../../../dist'

import BaseInput from './base-input'

export default function UseFormExample() {
  const [initialData, setInitialData] = useState({
    name: { display: 'Initial name', value: 'Initial name value' },
  })

  function handlePostalCodeChange(event, attribute, form) {
    if (attribute.value.length > 2) {
      form.update('address', { display: 'Some address...', value: 'Some address value...' })
    } 
  }

  function handleSubmit(data) {
    console.log('data to submit:', data)
  }

  function handleReset(event, form) {
    form.reset()
  }

  return (
    <>
      <h1>Alya Forms</h1>
      <a href="/">Go back</a>
      <h2>Form Component Example</h2>
      <Form
        initialData={initialData}
        onSubmit={handleSubmit}
        render={(form) => (
          <>
            <BaseInput {...form.connect('name')} className="some-input-class" type="text" placeholder="Name"/>
            <BaseInput {...form.connect('postalCode')} className="some-input-class" type="text" placeholder="Postal Code" onChange={(event, attribute) => handlePostalCodeChange(event, attribute, form)}/>
            <BaseInput {...form.connect('address')} className="some-input-class" type="text" placeholder="Address"/>
            <button type="submit">Submit</button>
            <button type="button" onClick={(event) => handleReset(event, form)}>Reset</button>
          </>
        )}
      />
    </>
  )
}
