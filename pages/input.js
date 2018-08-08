import React from 'react';
import Head from '../components/head';
import 'isomorphic-unfetch';

export default class Input extends React.Component {
  state = {
    value: ''
  };

  static async getInitialProps() {
    const posts = await fetch(
      'https://next.json-generator.com/api/json/get/NkGzLjtWB'
    ).then(response => response.json());
    return { posts };
  }

  onChangeText = event => {
    this.setState({ value: event.target.value });
  };

  render = () => {
    return (
      <div>
        <Head title="Home" />
        <input type="text" onChange={this.onChangeText} />
        <p>{this.state.value}</p>
        {this.props.posts.map(post => {
          return <p>{post.title}</p>;
        })}
      </div>
    );
  };
}
