import React from 'react';

class Detail extends React.Component {

  constructor(props) {

    super(props)
    this.state = { data: [] }
    this.increaseLike = this.increaseLike.bind(this);
  }
 
  loadData() {

    fetch('blogdata.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data })

      })
      .catch(err => console.error(this.props.url, err.toString()))
  }
  componentDidMount() {
    this.loadData()
  }
  increaseLike(count) {
    console.log(this.count++)
  }
  render() {
    const projectName = this.props.match.params.name;
   
    const block = () => {
    
    const item = this.state.data.find((item) => item.Name == projectName);

    let foundItem =  item || 'Not available';

    const renderReplies = (replies) => replies ? replies.map((rep, j) => <div key={j}>{rep.user}{rep.des}</div>) : 'No replies';

    const renderComments = (comments) => comments ? comments.map((cmm, i) => <div className="row" key={i}>
              <div className="portfolio-item">
                <span className="desc">User:</span> <span>{cmm.user}<i className="material-icons" >thumb_up</i></span><br />
                <span>{cmm.desc}</span>
                <span>{cmm.like}</span>

                {renderReplies(cmm.replies)}

              </div>
            </div>
          ): 'No Comments'

    return (<div className="row">
                  <div className="col l1 m1">&nbsp;</div>
                  <div className="col s12 m10 l10"><div className="card" >
                  <div className="card-content">
                        <div className="title">
                          <h1>{foundItem.Name}</h1><br />
                        </div>
                          <div>{foundItem.detail}</div><br />

                          <h3>Comments ({foundItem.comments && foundItem.comments.length})</h3>
                          <div className="comment-block">
                              
                            {renderComments(foundItem.comments)}
                                
                          </div>
                        </div>
                    
              </div> 
          </div>  
      </div>)

    }

    return <div>
      {block()}
    </div>

  }

}


export default Detail;