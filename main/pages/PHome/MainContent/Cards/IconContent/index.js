import React from 'react'
import { Image, Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { PlainText } from 'components'

export default observer(function IconContent ({ text, icon, title }) {
  return pug`
    View.root
      View.iconHolder
        Image.iconImage(
          source={uri: icon})
      Text.subTitle=title
      PlainText(text=text)               
  `
})
