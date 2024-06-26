
export type Attribute = {
  display: any;
  value: any;
}

export type Data = Record<string, Attribute>

export type Connect = {
  name: string
  attribute: Attribute
  setAttribute: (attribute: Attribute) => void
  useAttribute: () => void
}

export type Form = {
  data: Data
  connect: (name: string) => Connect
  update: (name: string, attribute: Attribute) => void
  reset: () => void
  clear: () => void
}

export type UseFormProps = {
  initialData?: Data
  outputTo?: (data: Data) => void
}

export type FormProps = Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> & UseFormProps & {
  render: (form: Form) => React.ReactNode
  onSubmit?: (data: Data) => void
  children?: React.ReactNode
  [key: string]: any
}
