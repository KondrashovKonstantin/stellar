import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import { PlainText, Section, ContentTitle, ButtonG } from '../../../../../components'

const text3 = `Donec imperdiet consequat consequat. Suspendisse feugiat congue \n posuere. Nulla massa urna, fermentum eget quam.`

export default observer(function GetStarted ({text, icon, title}) {
  const Content =  () => {
      return pug`
        ContentTitle(title='Congue imperdiet')
        PlainText(text=text3, size='big')
        View.btns-holder
          View.btn-wrapper(styleName='first')
            ButtonG(text='Get Started', type='blue')
          View.btn-wrapper
            ButtonG
      `
  } 
  return pug`
    Section(Children=Content)                    
  `
})