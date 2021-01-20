import React from 'react'
import { observer } from 'startupjs'
import { Image, Text, View,  } from 'react-native'
import './index.styl'
import { PlainText } from 'components'

export default observer(function IconContent ({text, icon, title}) {

  return pug`
  View.root
    View.iconHolder
      View.iconHolder(styleName='innerHolder')
        Image.iconImage(
          source={uri: icon})
    Text.subTitle=title
    PlainText(text=text)
                           
  `
})