import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { Section, ContentTitle, Button } from 'components'
import IconContent from './IconContent'

const BASE_URL = 'http://localhost:3010/public/'

const text2 = 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'

const imgs = ['java.png', 'version.png', 'debug.png']

export default observer(function Cards ({ text, icon, title }) {
  return pug`
    Section
      ContentTitle(title='Magna veroeros')  
      View.contentWrapper
        each item in imgs
          IconContent(text=text2, title = 'Ipsum consequat', icon =BASE_URL + item)
      View.btnWrapper
        Button
  `
})
