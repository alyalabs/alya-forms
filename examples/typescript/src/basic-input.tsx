import React, { forwardRef, memo } from 'react'

import type { AlyaForms } from 'alya-forms'

type BasicInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> & AlyaForms.Connect & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, attribute: AlyaForms.Attribute) => void
}

const BasicInput = memo(forwardRef<HTMLInputElement, BasicInputProps>(function ({
  name,
  attribute = {},
  setAttribute,
  useAttribute,
  onChange,
  ...props
}, ref) {

  useAttribute()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    const attribute = { display: inputValue, value: inputValue }

    setAttribute(attribute)

    if (onChange) onChange(event, attribute)
  }

  return (
    <input
      {...props}
      name={name}
      value={attribute.display || ''}
      onChange={handleChange}
      ref={ref}
    />
  )
}))

export default BasicInput
