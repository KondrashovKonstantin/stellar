import React from 'react'
import { Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

export default observer(function ContentTitle ({ title, align }) {
  return pug`  
    View.contentTitle(styleName=align==='left'?'leftTitle':null)
      Text.contentTitleText=title
  `
})
