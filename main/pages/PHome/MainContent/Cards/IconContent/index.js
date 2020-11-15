import React from 'react'
import { observer } from 'startupjs'
import { Image, Text, View,  } from 'react-native'
import './index.styl'
import { PlainText } from '../../../../../../components'

export default observer(function IconContent ({text, icon, title}) {

  return pug`
  View.icon-wrapper
    View.icon-holder
      View.icon-holder(styleName='inner-holder')
        Image.icon-image(
          source={uri: icon})
    Text.sub-title #{title}
    PlainText(text=text)
                           
  `
})