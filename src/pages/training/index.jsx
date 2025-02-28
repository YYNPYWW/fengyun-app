import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Training extends Component {
  componentDidMount() {
    console.log('Training page loaded.')
  }

  render() {
    return (
      <View className='training'>
        <Text>培训活动</Text>
      </View>
    )
  }
}
