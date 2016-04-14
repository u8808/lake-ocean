import './App.less';
import React from 'react';
import Header from './Header';

export default function App(props) {
  return (
    <div className="app">
      <Header {...props} />
      { props.children }
    </div>
  );
}
