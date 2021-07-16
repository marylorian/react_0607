import React from 'react'

export default class ExampleClass extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor')

        this.state = { count: 0 }
        this.timer = null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', { prevProps, prevState })

        this.timer = setTimeout(() => console.log('time is out'), 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')

        clearTimeout(this.timer)
    }

    handleClick = () => {
        this.setState(
            (currentState) => {
                return { count: currentState.count + 1 }
            },
            () => {
                console.log('updated')
            }
        )
    }

    render() {
        console.log('render')

        return (
            <div className="bordered">
                <p>Example Class Component - {this.props.text}</p>
                <p>Counter - {this.state.count}</p>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}
