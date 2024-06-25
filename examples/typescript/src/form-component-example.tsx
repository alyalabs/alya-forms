import React, { useEffect, useState } from 'react'

import { Form } from '../../../dist'
import type { AlyaForm, AlyaFormData, AlyaFormAttribute } from '../../../dist'

import BasicInput from './basic-input'

export default function UseFormExample() {
  const [initialData, setInitialData] = useState<AlyaFormData>({
    name: { display: 'Initial name', value: 'Initial name value' },
  })

  function handlePostalCodeChange(event: React.ChangeEvent<HTMLInputElement>, attribute: AlyaFormAttribute, form: AlyaForm) {
    if (attribute.value.length > 2) {
      form.update('address', { display: 'Some address...', value: 'Some address value...' })
    } 
  }

  function handleSubmit(data: AlyaFormData) {
    console.log('data to submit:', data)
  }

  function handleReset(event: React.MouseEvent<HTMLButtonElement>, form: AlyaForm) {
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
        render={(form: AlyaForm) => (
          <>
            <BasicInput {...form.connect('name')} type="text" placeholder="Name"/>
            <BasicInput {...form.connect('postalCode')} type="text" placeholder="Postal Code" onChange={(event, attribute) => handlePostalCodeChange(event, attribute, form)}/>
            <BasicInput {...form.connect('address')} type="text" placeholder="Address"/>
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={(event) => handleReset(event, form)}>Reset</button>
            </div>
          </>
        )}
        style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start' }}
      />
    </>
  )
}
