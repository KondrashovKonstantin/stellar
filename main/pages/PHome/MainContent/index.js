import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native'
import './index.styl'
import { ButtonG, PlainText } from '../../../../components'
import IconContent from './IconContent'
import StatCard from './StatCard'

const BASE_URL = 'http://localhost:3010/public/'
const pic = BASE_URL + 'pic01.jpg'
const java = BASE_URL + 'java.png'
const ver = BASE_URL + 'version.png'
const bug = BASE_URL + 'debug.png'
const glob = BASE_URL + 'globe.png'
const folder = BASE_URL + 'folder.png'
const cloud = BASE_URL + 'cloud-computing.png'
const diamond = BASE_URL + 'diamond.png'
const diagram = BASE_URL + 'diagram.png'


const items = [
  {uri:glob, counter: '16,384', text:'Etiam', color:'#efa8b0'},
  {uri:folder, counter: '8,192', text:'Magna', color:'#c79cc8'},
  {uri:cloud, counter: '4,096', text:'Tempus', color:'#a89cc8'},
  {uri:diamond, counter: '2,048', text:'Aliquam', color:'#9bb2e1'},
  {uri:diagram, counter: '1,024', text:'Nullam', color:'#8cc9f0'},
]
const text1 = `Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.`
const text2 = `Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.`
const text3 = `Donec imperdiet consequat consequat. Suspendisse feugiat congue \n posuere. Nulla massa urna, fermentum eget quam.`
const text4 = `Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.`

export default observer(function PHome () {

  return pug`
        View.wrapper
          View.card-header
            TouchableOpacity
              Text(styleName='header-item') Introduction
            TouchableOpacity
              Text(styleName='header-item') First Section
            TouchableOpacity
              Text(styleName='header-item') Second Section
            TouchableOpacity
              Text(styleName='header-item') Get Started
          View.holder.section
            View.wrap-cont
              View.wrap-child.right
                View.image-holder
                  Image.image(
                    source={uri: pic})
              View.wrap-child.left
                View.content-title(styleName='left-title')
                  Text.content-title_text Ipsum sed adipiscing
                PlainText(text=text1, align='left')
                ButtonG
          View.holder.section
            View.content-title
              Text.content-title_text Magna veroeros  
            View.content-wrapper
              IconContent(text=text2, title = 'Ipsum consequat', icon = java)
              IconContent(text=text2, title = 'Amet sed feugiat', icon = ver)
              IconContent(text=text2, title = 'Dolor nullam', icon = bug)
            ButtonG
          View.holder.section
            View.content-title
              Text.content-title_text Ipsum consequat
            PlainText(text=text3, size='big')
            StatCard(items=items styles={width:'100%'})
            PlainText(text=text4, align='left')
            ButtonG
          View.holder.section
            View.content-title
              Text.content-title_text Congue imperdiet
            PlainText(text=text3, size='big')
            View.btns-holder
              ButtonG(text='Get Started', type='blue')
              ButtonG
                `
})