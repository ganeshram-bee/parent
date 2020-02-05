/*
 * childApp2
 *
 * This is the first thing users see of our App, at the '/childApp2' route
 *
 */

import React from 'react';

class childApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#F6E1DC',
    };
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
    // for (var i = 0; i < jsFiles.length; i++) {
    // 	console.log(urlPrefix + jsFiles[i]);
    // }
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp2/static/js/2.5599f84a.chunk.js',
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp2/static/js/main.5f643eb3.chunk.js',
    );
    this.fetchScript(
      'http://mi-dummy.s3-website.ap-south-1.amazonaws.com/childApp2/static/js/runtime-main.a0b27682.js',
    );
  }

  render() {
    const app2Style = {
      width: '100%',
      height: '100px',
      float: 'left',
      background: this.state.background,
    };
    return (
      <div>
        <h1>Hello From the Host of ChildApp 2</h1>

        <div id="app3-root" style={app2Style} />
      </div>
    );
  }
}

export default childApp2;
