import React from 'react';
import SiteHeader from "./common/header";
import Leftside from "./common/leftPanel";
import { BrowserHistory } from 'react-router-dom';
import {withRouter} from "react-router-dom";

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
		this.signOrder = this.signOrder.bind(this);
	}
	
	loadData() {
		fetch('blogdata.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	signOrder(id) {
		let ids = [
			{ 'orderId': id }
		];
		this.props.history.push("/detail");
		
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {

		const blocks = this.state.data.map((item, i) => {

				const onClick = () => this.signOrder(item.name);
			
				return <div className="col s12 m9 l5" key={i}>
					<div className="card-panel">
							Name:  <span>{item.name}</span><br/>
							Description:	<span>{item.description}</span><br/>
							Details	<span>{item.detailed}</span><br/>
							<button onClick={onClick}>CLICK</button>
					</div>
				</div>;
				});

    return <div>
        <div className="row">
        	<Leftside />
        </div>
        <div className="row">
        	{blocks}
    		</div>
      </div>;

  }
}


export default withRouter(Home);