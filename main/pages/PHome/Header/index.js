import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native'
import './index.styl'

const BASE_URL = 'http://localhost:3010'
const rocketLogo = BASE_URL + '/public/logo.png'

export default observer(function PHome () {

  return pug`  
          View.header
            Image.logo(
              source={uri: rocketLogo})
            Text.title Stellar
            View.textholder
              Text.simple Just another free, fully responsive site template built by 
                Text.href @ajlkn
                Text.simple  for 
                Text.href HTML5 UP. 
    `
})