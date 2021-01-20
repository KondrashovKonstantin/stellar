import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import { PlainText, Section, ContentTitle, Button } from 'components'

const text3 = `Donec imperdiet consequat consequat. Suspendisse feugiat congue \n posuere. Nulla massa urna, fermentum eget quam.`

export default observer(function GetStarted ({text, icon, title}) {
  const Content = pug`
    ContentTitle(title='Congue imperdiet')
    PlainText(text=text3, size='big')
    View.btnsHolder
      View.btnWrapper(styleName='first')
        Button(text='Get Started', type='blue')
      View.btnWrapper
        Button
    `
  return pug`
    Section= Content                   
  `
})