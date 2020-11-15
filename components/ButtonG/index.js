import React from 'react'
import { observer } from 'startupjs'
import {Text, TouchableOpacity,  } from 'react-native'
import './index.styl'



export default observer(function ButtonG ({type='grey', text='Learn More', width='100%'}) {

  return pug`
  if type === 'blue'
    TouchableOpacity.button(styleName='blue', style={width:width})
      Text.button__text(styleName='blue__text') #{text}
  else if type === 'dark'
    TouchableOpacity.button(style={width:width})
      Text.button__text(styleName='dark') #{text}
  else
    TouchableOpacity.button(style={width:width})
      Text.button__text #{text}
  `
})