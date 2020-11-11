import React from 'react'
import { observer } from 'startupjs'
import {Text, View,  } from 'react-native'
import './index.styl'



export default observer(function PHome ({text, size='small', align='center'}) {

  return pug`  
    View.text-holder
      if size=='small'
        Text.plaintext(styleName=align) #{text}
      else
        Text.bigtext(styleName='plaintext #{align}') #{text}
  `
})