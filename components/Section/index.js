import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

export default observer(function Section ({ children, isLast }) {
  return pug`  
    View.root(styleName={last:isLast})= children
  `
})
