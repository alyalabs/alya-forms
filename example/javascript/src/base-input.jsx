import React, { forwardRef, memo } from 'react'
import clsx from 'clsx'

const BaseInput = memo(forwardRef(function ({
  className,
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
    <div className={clsx('input', className)}>
      <input
        {...props}
        name={name}
        value={attribute.display || ''}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  )
}))

export default BaseInput
