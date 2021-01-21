import React from 'react'
import { observer } from 'startupjs'
import {Text, View } from 'react-native'
import './index.styl'



export default observer(function Section ({children, isLast}) {
  console.log(isLast)

  return pug`  
    View.root(styleName={last:isLast})= children
  `
})