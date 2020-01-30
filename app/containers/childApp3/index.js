/*
 * childApp2
 *
 * This is the first thing users see of our App, at the '/childApp2' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

class childApp2 extends React.Component {
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
    // for (var i = 0; i < jsFiles.length; i++) {
    // 	console.log(urlPrefix + jsFiles[i]);
    // }
    // this.fetchScript("http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp3/static/js/2.eda550df.chunk.js");
    // this.fetchScript("http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp3/static/js/main.cb315fd9.chunk.js");
    // this.fetchScript("http://mf-dummy-app.s3.ap-south-1.amazonaws.com/childApp3/static/js/runtime-main.845bb339.js");
  }

  render() {
    const app2Style = {
      width: '100%',
      height: '100px',
      float: 'left',
      background: '#F6E1DC',
    };
    return (
      <div>
        <h1>Hello From the Host of ChildApp 3</h1>

        <div id="app4-root" style={app2Style} />

        <Link to="/childApp1">Go to childApp1</Link>
      </div>
    );
  }
}

export default childApp2;
