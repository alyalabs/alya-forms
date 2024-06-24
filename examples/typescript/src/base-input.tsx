import React, { forwardRef, memo } from 'react'
import clsx from 'clsx'

import type { AlyaFormConnect, AlyaFormAttribute } from '../../../dist'

type BaseInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> & AlyaFormConnect & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, attribute: AlyaFormAttribute) => void
}

const BaseInput = memo(forwardRef<HTMLInputElement, BaseInputProps>(function ({
  className,
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
