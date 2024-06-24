
export type AlyaFormAttribute = {
  display: any;
  value: any;
}

export type AlyaFormData = Record<string, AlyaFormAttribute>

import useForm from './use-form'
export { useForm }
import type { AlyaUseFormProps, AlyaFormConnect, AlyaForm } from './use-form'
export type { AlyaUseFormProps, AlyaFormConnect, AlyaForm }

import Form from './form'
export { Form }
import type { AlyaFormProps } from './form'
export type { AlyaFormProps }
