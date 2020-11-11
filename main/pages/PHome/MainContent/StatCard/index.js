import React from 'react'
import { observer } from 'startupjs'
import { Image, Text, View,  } from 'react-native'
import './index.styl'
import { PlainText } from '../../../../../components'

export default observer(function PHome ({items}) {
  return pug`
  View.statistic
    each val,index in items
        View.stat(
        key=val.uri,
        style={backgroundColor: val.color}, 
        styleName=index===0?'first': index===items.length-1?'last':null)
            Image.icon-wht(source = {uri: val.uri})
            Text.stat__counter #{val.counter}
            Text.stat__txt #{val.text}
  `
})