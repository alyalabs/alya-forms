import React from 'react'
import { createRoot } from 'react-dom/client'

import UseFormHookExample from './use-form-hook-example'
import FormComponentExample from './form-component-example'

function main() {
  const container = document.getElementById('root')
  
  if (container) {
    const root = createRoot(container)

    if (window.location.pathname === '/hook-example') {
      return root.render(<UseFormHookExample/>)
    }

    if (window.location.pathname === '/component-example') {
      return root.render(<FormComponentExample/>)
    }

    return root.render(
      <>
        <h1>Alya Forms</h1>
        <a href="/hook-example">useForm Hook Example</a> | <a href="/component-example">Form Component Example</a>
      </>
    )
  }
}

main()
