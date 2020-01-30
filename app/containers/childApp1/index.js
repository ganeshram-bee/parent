/*
 * childApp1
 *
 * This is the first thing users see of our App, at the '/childApp1' route
 *
 */

import React from 'react';
import Eev from 'eev';

class childApp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#FFFDD0',
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
    window.e = new Eev();
    const parentJS = this;
    window.e.on('goTo', function(data) {
      parentJS.props.history.push(data.pathName);
    });

    // for (var i = 0; i < jsFiles.length; i++) {
    // 	console.log(urlPrefix + jsFiles[i]);
    // }
    this.fetchScript(
      'http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp/static/js/runtime-main.094ee29f.js',
    );
    // this.fetchScript(
    //   'http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp/static/js/2.b9383955.chunk.js',
    // );
    this.fetchScript(
      'http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp/static/js/main.5a8af9e5.chunk.js',
    );
  }

  render() {
    const app1Style = {
      width: '100%',
      height: '100px',
      float: 'left',
      background: this.state.background,
    };

    return (
      <div>
        <h1>Hello From the Host of ChildApp 1</h1>

        <div id="app2-root" style={app1Style} />
      </div>
    );
  }
}

export default childApp1;
