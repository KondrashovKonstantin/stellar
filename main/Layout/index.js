import React from 'react'
import './index.styl'
import { Div } from '@startupjs/ui'

export default function ({ children }) {
  return pug`
    Div.root= children
  `
}
