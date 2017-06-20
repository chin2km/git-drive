import React from 'react';
import SiteHeader from "./common/header";
import Leftside from "./common/leftPanel";

class App extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return <div>
			{this.props.children}
      </div>;

  }
}


export default App;