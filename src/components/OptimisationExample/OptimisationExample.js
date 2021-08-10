import React from 'react'

class Child1 extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', {nextProps, nextState})

        // должны ли мы перерендерить
        return nextProps.text !== this.props.text
    }

    render () {
        console.log('rendered', { props: this.props })

        return <p>{this.props.text}</p>
    }
}

class Child2 extends React.PureComponent {
    render () {
        console.log('rendered', { props: this.props })

        return <p>{this.props.text}</p>
    }
}

const Child = (props) => {
    console.log('rendered', {props})

    return <p>{props.text}</p>
}

const Child3 = React.memo(Child, ((prevProps, nextProps) => {
    console.log('shouldComponentUpdate in memo', { prevProps, nextProps })

    // должны ли мы пропустить перерендер
    return prevProps.text === nextProps.text
}))

const Child4 = React.memo(Child)

const ChildrenWrapper = (props) => {
    console.log(props.count)

    return <div className="bordered optimisation-example">
        <Child text="Function component"/>
        <Child1 text="Class component with shouldComponentUpdate"/>
        <Child2 text="Class pure component"/>

        {/* компоненты ниже работают одинаково */}
        <Child3 text="Function component from React.memo" />
        <Child4 text="Function component from React.memo without shouldComponentUpdate" />
    </div>
}

const OptimisationExample = (props) => {
    const [count, setCount] = React.useState(0)
    const handleIncreaseCounter  = () => {
        setCount(count + 1)
    }

    return <React.Fragment>
        <button onClick={handleIncreaseCounter}>
            Increase counter
        </button>

        <ChildrenWrapper count={count} />
    </React.Fragment>
}

export default OptimisationExample