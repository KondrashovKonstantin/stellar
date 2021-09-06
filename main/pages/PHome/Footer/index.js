import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { Button } from 'components'

const BASE_URL = 'http://localhost:3010/public/'
const socials = ['linkedin.png', 'github-logo.png', 'facebook.png', 'instagram.png', 'telegram.png']
const text = 'Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.'

export default observer(function Footer () {
  const data = [
    { key: 'Address', value: '1234 Somewhere Road • Nashville, TN 00000 • USA' },
    { key: 'Phone', value: '(000) 000-0000 x 0000' },
    { key: 'Email', value: 'information@untitled.tld' }
  ]
  return pug`  
    View.root
      View.wrappChld
        Text.subtitle Aliquam sed mauris
        Text.text= text
        View.btnWrapper
          Button(type='dark')
        View.wrappChld(styleName='second')
          Text.subtitle(styleName='secondLine') Etiam feugiat
          View.contactsWrapper
            each item, index in data
              View.contactsWrapperLine(styleName={first:!index} key=item.key)
                Text.contactsWrapperElement= item.key
                Text.contactsWrapperElement(styleName=['detailed', {email:item.key==='Email'}])= item.value
            View.socialWrapper
              each item, index in socials
                TouchableOpacity.socialWrapperElement(styleName={first:!index} key=index)
                  Image.snicon(source={uri:BASE_URL+item})
        Text.cprt © Untitled. Design: 
          Text.cprt.link HTML5 UP. 
          Text.cprtDemo Images: 
            Text.cprt.link Unsplash.

  `
})
