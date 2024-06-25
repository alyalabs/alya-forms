import React, { forwardRef, memo } from 'react'

const BasicInput = memo(forwardRef(function ({
  name,
  attribute = {},
  setAttribute,
  useAttribute,
  onChange,
  ...props
}, ref) {

  useAttribute()

  function handleChange(event) {
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
