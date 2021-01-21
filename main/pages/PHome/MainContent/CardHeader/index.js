import React from 'react'
import { observer } from 'startupjs'
import {  Text, View, TouchableOpacity } from 'react-native'
import './index.styl'


export default observer(function CardHeader () {

    const options = [
        {selected: true, value: 'Introduction'},
        {value:'First Section'},
        {value:'Second Section'},
        {value:'Get Started'}
    ]

  return pug`  
    View.cardHeader
        each item in options
            TouchableOpacity
                Text.headerItem(styleName={selected:item.selected})= item.value
    `
})