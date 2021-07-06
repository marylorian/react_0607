import React from 'react';
import './App.css';

class ExampleClass extends React.Component {
    render () {
        return <p className="example__bordered">Example Class Component - {this.props.text} {this.props.text1}</p>
    }
}

function Example(props) {
    console.log(props)

    return <p style={{ border: '2px solid red', borderRadius: '8px'}}>Example - {props.text} {props.text1}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world!
        </p>
        <Example text="Welcome!" text1="This is text 1" />
        <ExampleClass text="Welcome!" text1="This is text 1" />
      </header>
    </div>
  );
}

export default App;
