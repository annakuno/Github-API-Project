import React from 'react';
import {Link} from 'react-router';

class GithubRepo extends React.Component {

  componentDidMount() {
    console.log('this props', this.props)
  }

  render() {
    return(
      <div style={{verticalAlign: "baseline", marginBottom: "15px", display: "flex"}}>
        <a style={{textDecoration: "none", color: "black"}}
          href={this.props.repo.html_url}>{this.props.repo.full_name}</a>
        <div className="box"
          style={{marginLeft: "10px", border:"thin solid black", paddingLeft: "5px", paddingRight: "5px"}}>
          {this.props.repo.stargazers_count}
        </div>
      </div>
    )
  }
}

export default GithubRepo;
