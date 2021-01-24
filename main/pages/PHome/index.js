import React from 'react'
import { ScrollView } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Header
      MainContent
      Footer
  `
})
