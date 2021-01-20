import React from 'react'
import { observer } from 'startupjs'
import {Text, TouchableOpacity,  } from 'react-native'
import './index.styl'



export default observer(function Button ({type='grey', text='Learn More', width='100%'}) {

  return pug`
    if type === 'blue'
      TouchableOpacity.button(styleName='blue', style={width:width})
        Text.buttonText(styleName='blue blueText')=text
    else if type === 'dark'
      TouchableOpacity.button(style={width:width})
        Text.buttonText(styleName='dark')=text
    else
      TouchableOpacity.button(style={width:width})
        Text.buttonText=text
  `
})