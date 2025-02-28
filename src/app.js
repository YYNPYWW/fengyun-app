
import { Component } from 'react'
import './app.css'

class App extends Component {
  componentDidMount() {
    console.log('App launched.')
  }

  render() {
    // children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
