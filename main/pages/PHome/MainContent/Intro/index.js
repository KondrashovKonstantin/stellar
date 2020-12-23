import React from 'react'
import { observer } from 'startupjs'
import { Image, Text, View,  } from 'react-native'
import './index.styl'
import { PlainText, Section, ContentTitle, ButtonG } from '../../../../../components'

const BASE_URL = 'http://localhost:3010/public/'
const pic = BASE_URL + 'pic01.jpg'

const text1 = `Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.`


export default observer(function Intro ({text, icon, title}) {
  const IntroContent =  () => {
      return pug`
        View.wrap-cont
            View.wrap-child.right
                View.image-holder
                    Image.image(
                        source={uri: pic})
            View.wrap-child.left
              ContentTitle(title='Ipsum sed adipiscing', align='left')
              PlainText(text=text1, align='left')
              View.btn-wrapper
                ButtonG
      `
  } 
  return pug`
    Section(Children=IntroContent)                    
  `
})