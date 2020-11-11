import React from 'react'
import { observer,} from 'startupjs'
import './index.styl'
import { Row, Div} from '@startupjs/ui'




export default function ({ children }) {
  return pug`
    Div.body= children
  `
}
