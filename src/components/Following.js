import React, {PropTypes} from 'react';
import GithubUser from './GithubUser.js'

class Following extends React.Component {
  state={
    following: []
  }

  componentDidMount(){
    return fetch(`https://api.github.com/users/${this.props.params.username}/following`, {
      headers: {
        'Authorization': 'token b23d3b9612c17c8de7d448959b7152f6f3bf2145'
      }
    })
    .then(function(data){
      return data.json()
    }).then((body) => {
      console.log(body)
      this.setState({
        following: body,
      });
    }
  )};

  render(){
    if (!this.state.following) {
      return <div>LOADING FOLLOWING...</div>
    }

    return (
    <div className="following-page">
        <h2>Following {this.props.params.username}</h2>
        <ul>
            {this.state.following.map(function(follower) {
              return <GithubUser user={follower}/>
            })}
        </ul>
    </div>
    );
  }
}

export default Following;
