import React, { forwardRef } from 'react'

import useForm from './use-form'

import type { AlyaForms } from '.'

/**
 * Alya Forms - Form
 * A simple form component that uses the useForm hook.
 *
 * @param {AlyaForms.FormProps} props - Props for the Form component.
 * @param {AlyaForms.FormData} [props.initialData] - The initial data for the form.
 * @param {Function} [props.outputTo] - A function to output the form data.
 * @param {Function} props.render - The function where you will render the form inputs.
 * @param {Function} props.onSubmit - A function to handle the form submission.
 * @param {Object} props... - Other props to spread on the form element.
 * @return {ReactNode} An form component.
 */
const Form = forwardRef<HTMLFormElement, AlyaForms.FormProps>(function ({
  initialData,
  outputTo,
  render,
  onSubmit,
  children,
  ...props
}, ref) {

  const form = useForm({
    initialData,
    outputTo
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (onSubmit) {
      onSubmit(form.data)
    }
    
    form.reset()
  }

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      ref={ref}
    >
      {render(form)}
    </form>
  )
})

export default Form
