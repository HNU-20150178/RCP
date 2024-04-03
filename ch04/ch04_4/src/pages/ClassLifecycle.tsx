import { Component } from 'react'
import { Title } from '../components'
export default class ClassLifecycle extends Component {
  // 컴포넌트가 마운트되는 시점에 시계를 만듬 componentDidMount() 메서드에서 setInterval() 함수를 호출
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer, // 타입스크립트가 요구하는 구현 방식
  }
  componentDidMount() {
    const duration = 1000
    const intervalId = setInterval(
      () => this.setState({ today: new Date() }),
      duration
    )
    this.setState({ intervalId })
  }
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }
  render() {
    const { today } = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
