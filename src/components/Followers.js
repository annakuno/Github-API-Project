import React, {PropTypes} from 'react';
import GithubUser from './GithubUser.js'

class Followers extends React.Component {
  state={
    followers: []
  }

  componentDidMount(){
    return fetch(`https://api.github.com/users/${this.props.params.username}/followers`, {
      headers: {
        'Authorization': 'token b23d3b9612c17c8de7d448959b7152f6f3bf2145'
      }
    })
    .then(function(data){
      return data.json()
    }).then((body) => {
      console.log(body)
      this.setState({
        followers: body,
      });
    }
  )};

  render(){
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
    }

    return (
    <div className="followers-page">
        <h2>Followers of {this.props.params.username}</h2>
        <ul>
            {this.state.followers.map(function(follower) {
              return <GithubUser user={follower}/>
            })}
        </ul>
    </div>
    );
  }
}

export default Followers;
