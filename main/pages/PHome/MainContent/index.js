import React from 'react'
import { View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import CardHeader from './CardHeader'
import Intro from './Intro'
import Cards from './Cards'
import Statistic from './Statistic'
import GetStarted from './GetStarted'

export default observer(function MainContent () {
  return pug`
    View.root
      CardHeader
      Intro
      Cards
      Statistic
      GetStarted
  `
})
