import React from 'react'
import { observer } from 'startupjs'
import {  Text, View, TouchableOpacity } from 'react-native'
import './index.styl'


export default observer(function CardHeader () {

  return pug`  
    View.cardHeader
        TouchableOpacity
            Text.headerItem(styleName='selected') Introduction
        TouchableOpacity
            Text.headerItem First Section
        TouchableOpacity
            Text.headerItem Second Section
        TouchableOpacity
            Text.headerItem Get Started
    `
})