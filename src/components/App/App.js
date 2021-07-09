import React from 'react';
import Example from "../ExampleFunctionComponent/ExampleFunctionComponent";
import ExampleClass from "../ExampleClassComponent/ExampleClassComponent";
import './App.css';

function App() {
  const [showChild, setShowChild] = React.useState(true)
  const messages = ['1', '2', '3', '4']

  const handleToggleShowChild = () => {
      setShowChild(!showChild)
  }

  // Рендер с использованием фрагментов
  // return (
  //     <>
  //         <p>Text</p>
  //         {messages.map((message, index) => <React.Fragment key={index}>{message}</React.Fragment>)}
  //     </>
  // )

  return (
    <div className="app">
      <div className="app__content">
        <button onClick={handleToggleShowChild}>Toggle showChild</button>

        {/* Условный рендер */}
        {showChild ? <Example text="Welcome!" /> : null}
        {showChild && <ExampleClass text="Welcome!" />}

        <input className="bordered" placeholder="Инпут для примера" onChange={e => console.log(e)} />
      </div>
    </div>
  );
}

export default App;
