import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { PlainText, ContentTitle, Section, Button } from 'components'
import StatCard from './StatCard'

const text3 = `Donec imperdiet consequat consequat. Suspendisse feugiat congue \n posuere. Nulla massa urna, fermentum eget quam.`
const text4 = `Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.`

const BASE_URL = 'http://localhost:3010/public/'
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

export default observer(function Statistic () {

    const StatisticContent = pug`
      ContentTitle(title='Ipsum consequat')
      PlainText(text=text3, size='big')
      StatCard(items=items styles={width:'100%'})
      PlainText(text=text4, align='justify')
      View.btnWrapper
        Button
      `

  return pug`
    Section= StatisticContent
  `
})