import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Domestic extends Component {
  componentDidMount() {
    console.log('Domestic enterprises page loaded.')
  }

  render() {
    return (
      <View className='domestic'>
        <Text>国内企业</Text>
      </View>
    )
  }
}
