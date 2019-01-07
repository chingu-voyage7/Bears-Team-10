import React from 'react';
// import './NewPost.css';

class NewPost extends React.Component {
  onButtonSubmit = () => {
    // save to database
    // re-render post list
    // clear input field
  };

  render() {
    return (
      <div className="form center pa4 br3 shadow-5">
        <textarea className="newPost" />
        <button
          className="submit button"
          type="button"
          onClick={this.onButtonSubmit}
        >
          Submit Post
        </button>
      </div>
    );
  }
}

export default NewPost;
