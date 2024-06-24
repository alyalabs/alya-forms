import React, { forwardRef } from 'react'

import type { AlyaFormData } from './index'
import useForm from './use-form'
import type { AlyaUseFormProps, AlyaForm } from './use-form'

export type AlyaFormProps = Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> & AlyaUseFormProps & {
  render: (form: AlyaForm) => React.ReactNode
  onSubmit?: (data: AlyaFormData) => void
  children?: React.ReactNode
  [key: string]: any
}

/**
 * Alya Forms - Form
 * A simple form component that uses the useForm hook.
 *
 * @param {AlyaFormProps} props - Props for the Form component.
 * @param {AlyaFormData} [props.initialData] - The initial data for the form.
 * @param {Function} [props.outputTo] - A function to output the form data.
 * @param {Function} props.render - The function where you will render the form inputs.
 * @param {Function} props.onSubmit - A function to handle the form submission.
 * @param {Object} props... - Other props to spread on the form element.
 * @return {ReactNode} An form component.
 */
const Form = forwardRef<HTMLFormElement, AlyaFormProps>(function ({
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
