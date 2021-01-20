import React from 'react'
import { observer } from 'startupjs'
import {Text, View } from 'react-native'
import './index.styl'



export default observer(function Section ({children}) {
  console.log(children)
  return pug`  
    View.root.section= children
  `
})