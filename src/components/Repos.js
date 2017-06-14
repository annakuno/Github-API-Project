import React, {PropTypes} from 'react';
import GithubRepo from './GithubRepo.js'

class Repos extends React.Component {
  state={
    repos: []
  }

  componentDidMount(){
    return fetch(`https://api.github.com/users/${this.props.params.username}/repos`, {
      headers: {
        'Authorization': 'token b23d3b9612c17c8de7d448959b7152f6f3bf2145'
      }
    })
    .then(function(data){
      return data.json()
    }).then((body) => {
      console.log(body)
      this.setState({
        repos: body,
      });
    }
  )};

  render(){
    if (!this.state.repos) {
      return <div>LOADING REPOSITORIES...</div>
    }
    return (
    <div className="repo-page" style={{marginLeft: "40px", paddingTop: "20px"}}>
        <h2>{this.props.params.username}'s repos</h2>
        <ul>
            {this.state.repos.map(function(repo) {
              return <GithubRepo repo={repo}/>
            })}
        </ul>
    </div>
    );
  }
}

export default Repos;
