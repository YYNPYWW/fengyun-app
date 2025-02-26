import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
// import 'taro-ui/dist/style/index.scss'
import './index.css'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })


  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button type='primary' >点击一下</Button>
      <AtButton type='primary'>另一种点击</AtButton>
    </View>
  )
}
