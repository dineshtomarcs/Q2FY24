import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FunComp } from './FunComp';


// this is text component
const Text = ({ className, children }: any) => {
  return <p className={className}>{children}</p>;
}

// an example of high order components
function HOC(WrappedComponent: any) {
  return class ab extends React.PureComponent {
    render(): React.ReactNode {
      return <WrappedComponent />
    }
  }
}

// this is class based component
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'test'
    }
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log({ state })
    console.log({ props })
  }

  render(): React.ReactNode {
    return React.createElement(
      'div', { className: 'container' }, [React.createElement('h1', { className: 'danger' }, 'Hello React '), React.createElement(Text, { className: 'danger' }, 'This is another component being called.')]
    );
  }

}

export default HOC(FunComp);
