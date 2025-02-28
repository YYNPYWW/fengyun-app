import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class My extends Component {
  componentDidMount() {
    console.log('My page loaded.')
  }

  render() {
    return (
      <View className='my'>
        <Text>我的页面</Text>
      </View>
    )
  }
}
