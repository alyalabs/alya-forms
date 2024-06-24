import React, { useEffect, useState } from 'react'

import { useForm } from '../../../dist'

import BaseInput from './base-input'

export default function UseFormHookExample() {
  const [initialData, setInitialData] = useState({
    name: { display: 'Initial name', value: 'Initial name value' },
  })

  const {
    data,
    connect,
    update,
    reset
  } = useForm({
    initialData: initialData,
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  function handlePostalCodeChange(event, attribute) {
    if (attribute.value.length > 2) {
      update('address', { display: 'Some address...', value: 'Some address value...' })
    } 
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log('data to submit:', data)
  }

  function handleReset() {
    reset()
  }

  return (
    <>
      <h1>Alya Forms</h1>
      <a href="/">Go back</a>
      <h2>useForm Hook Example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <BaseInput {...connect('name')} className="some-input-class" type="text" placeholder="Name"/>
        <BaseInput {...connect('postalCode')} className="some-input-class" type="text" placeholder="Postal Code" onChange={handlePostalCodeChange}/>
        <BaseInput {...connect('address')} className="some-input-class" type="text" placeholder="Address"/>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </>
  )
}
