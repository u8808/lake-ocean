import './App.less';
import React from 'react';
import Header from './Header';
import Footer from './Footer'

export default function App(props) {
  return (
    <div className="app">
      <Header {...props} />
      { props.children }
      <Footer {...props}/>
    </div>
  );
}
