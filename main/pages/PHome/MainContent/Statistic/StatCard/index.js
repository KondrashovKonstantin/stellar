import React from 'react'
import { Image, Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

export default observer(function StatCard ({ items }) {
  return pug`
    View.statistic
      each val,index in items
        View.stat(
          key=val.uri
          style={backgroundColor: val.color}
          styleName={first:!index, last:index === items.length-1}
        )
          Image.iconWht(source = {uri: val.uri})
          Text.statCounter= val.counter
          Text.statTxt= val.text
  `
})
