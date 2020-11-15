import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import { Section, ContentTitle, ButtonG } from '../../../../../components'
import IconContent from './IconContent'

const BASE_URL = 'http://localhost:3010/public/'

const text2 = `Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.`

const java = BASE_URL + 'java.png'
const ver = BASE_URL + 'version.png'
const bug = BASE_URL + 'debug.png'

export default observer(function Cards ({text, icon, title}) {
    const Card = () => {
        return pug`
            ContentTitle(title='Magna veroeros')  
            View.content-wrapper
                IconContent(text=text2, title = 'Ipsum consequat', icon = java)
                IconContent(text=text2, title = 'Amet sed feugiat', icon = ver)
                IconContent(text=text2, title = 'Dolor nullam', icon = bug)
            ButtonG
        `
    }
  return pug`
    Section(Children=Card)
  `
})