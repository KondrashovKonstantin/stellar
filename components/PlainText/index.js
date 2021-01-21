import React from 'react'
import { observer } from 'startupjs'
import {Text, View,  } from 'react-native'
import './index.styl'



export default observer(function PlainText ({text, size='small', align='center'}) {

  return pug`  
    View.root
        Text.plaintext(styleName=[align, size])=text
  `
})