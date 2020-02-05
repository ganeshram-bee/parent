/*
 * childApp3
 *
 * This is the first thing users see of our App, at the '/childApp3' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

class childApp3 extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchScript(url) {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }

  componentDidMount() {
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.lodash.b5d1ba45f6b5cb633870.chunk.js'
    );
    // this.fetchScript("http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/15.cb54267d2c959f5e2cfd.chunk.js");
    // this.fetchScript("http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/13.932fa265fdb6d9fb7773.chunk.js");
    // this.fetchScript("http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/14.4439cbe5ae14dc6a3b09.chunk.js");
    // this.fetchScript("http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/16.7dadc8c35256a91e95b0.chunk.js");
    // this.fetchScript("http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/17.d6848cc7cc19eb7fbec4.chunk.js");
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/runtime.d992bb24ba6058df4ee8.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.redux-saga.73330e91205282f41978.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.webpack.68b1cf86149741bfe920.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.babel.a0d7d9e3402e40c7f179.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.react-app-polyfill.a512adaad14151170c55.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.react-redux.97e3c68cf48d6bcfd845.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.connected-react-router.420b72ed676c7813842c.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.intl-messageformat.1de3860bb6253e052c4a.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.intl-relativeformat.8dd32a5e5a16117331c4.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.react-intl.9b73b1821c03bf6c4c0c.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/npm.intl.62ffc0b470803cf6ab21.chunk.js'
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp3/main.eb47497d07431e271c88.chunk.js'
    );
  }

  render() {
    const app2Style = {
      width: '100%',
      height: '800px',
      float: 'left',
      background: '#F6E1DC',
    };
    return (
      <div>
        <h1>Hello From the Host of ChildApp 3</h1>

        <div id="app-1" style={app2Style} />

        <Link to="/childApp1">Go to childApp1</Link>
      </div>
    );
  }
}

export default childApp3;
