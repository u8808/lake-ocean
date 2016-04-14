import './App.less';
import React from 'react';
import scrollIntoView from 'dom-scroll-into-view';
import Header from './Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const scrollTo = this.props.location.query.scrollTo;
    if (scrollTo !== undefined) {
      const target = document.getElementById(scrollTo);

      if (target !== null) {
        scrollIntoView(
          target,
          document,
          { alignWithTop: true, onlyScrollIfNeeded: false }
        );
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Header {...this.props} />
        { this.props.children }
      </div>
    );
  }
}
