import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log("Child Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sumit-narwani");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Child componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  render() {
    console.log("Child render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;

/**
 * Parent constructor
 * Parent render
 * Child constructor
 * Child render
 *
 * DOM is updated
 * json is logged in console
 *
 *
 *
 * child componentDidMount
 *
 * Parent componentDidMount
 * child render
 *
 */
