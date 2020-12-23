import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native'
import './index.styl'
import { ButtonG } from '../../../../components'

const BASE_URL = 'http://localhost:3010/public/'
const lind = BASE_URL + 'linkedin.png'
const git = BASE_URL + 'github-logo.png'
const fb = BASE_URL + 'facebook.png'
const inst = BASE_URL + 'instagram.png'
const tel = BASE_URL + 'telegram.png' 

const text = `Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.`

export default observer(function Footer () {
    
  return pug`  
    View.root
        View.wrapp-chld
            Text.subtitle Aliquam sed mauris
            Text(styleName='text') #{text}
            View.btn-wrapper
                ButtonG(type='dark')
        View.wrapp-chld
            Text.subtitle(styleName='second-line') Etiam feugiat
            View.contacts-wrapper
                View.contacts-wrapper__line(styleName='first')
                    Text.contacts-wrapper__element Address
                    Text.contacts-wrapper__element(styleName='detailed') 1234 Somewhere Road • Nashville, TN 00000 • USA
                View.contacts-wrapper__line
                    Text.contacts-wrapper__element Phone
                    Text.contacts-wrapper__element(styleName='detailed') (000) 000-0000 x 0000
                View.contacts-wrapper__line
                    Text.contacts-wrapper__element Email
                    Text.contacts-wrapper__element(styleName='detailed') information@untitled.tld
            View.social-wrapper
                TouchableOpacity.social-wrapper__element(styleName='first')
                    Image.snicon(source={uri:inst})
                TouchableOpacity.social-wrapper__element
                    Image.snicon(source={uri:tel})
                TouchableOpacity.social-wrapper__element
                    Image.snicon(source={uri:git})
                TouchableOpacity.social-wrapper__element
                    Image.snicon(source={uri:fb})
                TouchableOpacity.social-wrapper__element
                    Image.snicon(source={uri:lind})
        Text.cprt © Untitled. Design: HTML5 UP. Demo Images: Unsplash.

  `
})