import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image, Text, View,  } from 'react-native'
import './index.styl'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export default observer(function PHome () {

  return pug`
        ScrollView.wrapper
          Header
          MainContent
          Footer
  `
})
