import React from 'react';
import {Link} from 'react-router';

class GithubUser extends React.Component {

  componentDidMount() {
    console.log('this props', this.props)
  }

  render() {
    return(
      <div style={{verticalAlign: "baseline"}}>
        <Link style={{display: "flex"}} to={"/user/" + this.props.user.login}>
          <img style={{borderRadius: 500, width: 50, height: 50, marginBottom: 10}} src={`${this.props.user.avatar_url}`}/>
          <p>{this.props.user.login}</p>
        </Link>
      </div>
    )
  }
}

export default GithubUser;
