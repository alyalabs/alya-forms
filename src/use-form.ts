import { useState, useEffect, useMemo } from 'react'

import type { AlyaForms } from '.'

export default function useForm(props: AlyaForms.UseFormProps = {}): AlyaForms.Form {
  const { initialData, outputTo } = props

  const [data, setData] = useState<AlyaForms.Data>({})

  useEffect(() => {
    if (initialData && typeof initialData === 'object') {
      setData((data) => ({
        ...data,
        ...initialData
      }))
    }
  }, [initialData])

  useEffect(() => {
    if (outputTo && typeof outputTo === 'function') {
      outputTo(data)
    }
  }, [data, outputTo])

  /**
   * Updates the value of a specific attribute in the data object.
   *
   * @param {string} name - The name of the attribute to update.
   * @param {AlyaForms.Attribute} attribute - The new value for the attribute.
   * @return {void}
   */
  function setAttribute(name: string, attribute: AlyaForms.Attribute) {
    setData((data) => ({
      ...data,
      [name]: attribute
    }))
  }

  /**
   * Initializes the attribute in the data object with display and value properties.
   *
   * @param {string} name - The name of the attribute to initialize.
   * @return {void}
   */
  function useAttribute(name: string) {
    useEffect(() => {
      setData((data) => ({
        ...data,
        [name]: { display: '', value: '' }
      }))
    }, [])
  }

  /**
   * Connects to a specific attribute in the data object and returns an object with methods to interact with it.
   *
   * @param {string} name - The name of the attribute to connect to.
   * @return {AlyaForms.Connect} An object with the following properties:
   *   - name: The name of the attribute.
   *   - attribute: The value of the attribute in the data object.
   *   - setAttribute: A function to set the value of the attribute.
   *     - @param {AlyaForms.Attribute} attribute - The new value for the attribute.
   *   - useAttribute: A function to initialize the attribute in the data object.
   */
  function connect(name: string): AlyaForms.Connect {
    const memo = useMemo(() => {
      return {
        name: name,
        attribute: data[name] as AlyaForms.Attribute,
        setAttribute: (attribute: AlyaForms.Attribute) => setAttribute(name, attribute),
        useAttribute: () => useAttribute(name)
      }
    }, [data[name]])

    return memo
  }

  /**
   * Updates the value of a specific attribute.
   *
   * @param {string} name - The name of the attribute to update.
   * @param {AlyaForms.Attribute} attribute - The new value for the attribute.
   * @return {void}
   */
  function update(name: string, attribute: AlyaForms.Attribute) {
    return setAttribute(name, attribute)
  }

  /**
   * Resets the data object by setting the display and value properties of each attribute to an empty string.
   *
   * @return {void}
   */
  function reset() {
    setData((data) => {
      return Object.fromEntries(
        Object.entries(data).map(([key]) => [
          key, 
          { display: '', value: '' }
        ])
      )
    })
  }

  /**
   * Clears the data object by setting it to an empty object.
   *
   * @return {void}
   */
  function clear() {
    setData({})
  }

  return {
    data,
    connect,
    update,
    reset,
    clear
  }
}
