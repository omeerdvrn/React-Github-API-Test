import React, { Component } from "react";
class User extends Component {
  render() {
    const data = this.props.data;
    return (
      <React.Fragment>
        <img src={data.avatar_url} width="100px" height="100px" alt="pp"></img>
        <h1>{data.name}</h1>
        <h2>{data.bio}</h2>
        <h3>public repository count: {data.public_repos}</h3>
        <img src={"http://ghchart.rshah.org/" + data.login} alt={data.login} />
      </React.Fragment>
    );
  }
}

export default User;
