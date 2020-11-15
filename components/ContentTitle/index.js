import React from 'react'
import { observer } from 'startupjs'
import {Text, View,  } from 'react-native'
import './index.styl'



export default observer(function ContentTitle ({title, align}) {
    console.log(align, title)
  return pug`  
        View.content-title(styleName=align==='left'?'left-title':null)
            Text.content-title_text #{title}
  `
})