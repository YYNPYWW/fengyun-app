import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  componentDidMount() {
    console.log('Page loaded.')
  }

  render() {
    return (
      <View className='index'>
        <Text>首页</Text>
      </View>
    )
  }
}
