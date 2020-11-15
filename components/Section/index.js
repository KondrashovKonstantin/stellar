import React from 'react'
import { observer } from 'startupjs'
import {Text, View,  } from 'react-native'
import './index.styl'



export default observer(function Section ({Children}) {

  return pug`  
    View.holder.section
      Children
  `
})