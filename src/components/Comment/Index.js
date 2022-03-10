import React, { Component } from 'react';

class Index extends Component {
  render() {
    const { body, user } = this.props.comment;
    return (
      <div className='skill-comment-comment'>
        <div dangerouslySetInnerHTML={{ __html: unescape(body) }} />
        {this.props.user && (
          <p>user: {user.name}</p>
        )}
      </div>
    );
  }
}

export default Index;
