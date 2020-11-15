import React from 'react'
import { observer } from 'startupjs'
import {  Text, View, TouchableOpacity } from 'react-native'
import './index.styl'


export default observer(function CardHeader () {

  return pug`  
    View.card-header
        TouchableOpacity
            Text(styleName='header-item') Introduction
        TouchableOpacity
            Text(styleName='header-item') First Section
        TouchableOpacity
            Text(styleName='header-item') Second Section
        TouchableOpacity
            Text(styleName='header-item') Get Started
    `
})