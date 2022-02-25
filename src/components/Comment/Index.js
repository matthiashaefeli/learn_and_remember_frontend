import React, { Component } from 'react';

class Index extends Component {
  render() {
    const { body, user } = this.props.comment;
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: unescape(body) }} />
        <p>user: {user.name}</p>
      </div>
    );
  }
}

export default Index;
