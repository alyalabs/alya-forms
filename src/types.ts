
export type FormAttribute = {
  display: any;
  value: any;
}

export type FormData = Record<string, FormAttribute>

export type UseFormProps = {
  initialData?: FormData
  outputTo?: (data: FormData) => void
}

export type FormConnect = {
  name: string
  attribute: FormAttribute
  setAttribute: (attribute: FormAttribute) => void
  useAttribute: () => void
}

export type Form = {
  data: FormData
  connect: (name: string) => FormConnect
  update: (name: string, attribute: FormAttribute) => void
  reset: () => void
  clear: () => void
}

export type FormProps = Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> & UseFormProps & {
  render: (form: Form) => React.ReactNode
  onSubmit?: (data: FormData) => void
  children?: React.ReactNode
  [key: string]: any
}
