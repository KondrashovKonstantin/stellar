import React from 'react'
import { observer } from 'startupjs'
import { Text, TouchableOpacity } from 'react-native'
import './index.styl'



export default observer(function Button ({type='grey', text='Learn More', width='100%'}) {

  return pug`
      TouchableOpacity.button(styleName=type, style={width:width})
        Text.buttonText(styleName=type)=text
  `
})