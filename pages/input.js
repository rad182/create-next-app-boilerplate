import React from 'react';
import Head from '../components/head';
import 'isomorphic-unfetch';

export default class Input extends React.Component {
  state = {
    value: '',
    userAgent: null
  };

  static async getInitialProps({ req }) {
    const posts = await fetch(
      'https://next.json-generator.com/api/json/get/NkGzLjtWB'
    ).then(response => response.json());

    return { posts, req };
  }

  componentDidMount = () => {
    let userAgent = null;
    if (this.props.req != null && this.props.req.headers != null) {
      userAgent = this.props.req.headers['user-agent'];
    } else if (navigator) {
      userAgent = navigator.userAgent;
    }
    this.setState({ userAgent });
  };

  onChangeText = event => {
    this.setState({ value: event.target.value });
  };

  render = () => {
    return (
      <div>
        <Head title="input" />
        <input type="text" onChange={this.onChangeText} />
        <p>{this.state.value}</p>
        <p>Hello World {this.state.userAgent}</p>

        {this.props.posts.map(post => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    );
  };
}
