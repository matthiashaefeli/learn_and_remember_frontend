import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, user } = this.props.comment;
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: unescape(body) }} />
        {this.props.user && (
          <p>user: {user.name}</p>
        )}
      </div>
    );
  }
}

export default Index;
