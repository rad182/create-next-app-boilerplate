import React from 'react';
import Head from '../components/head';

export default class Input extends React.Component {
  state = {
    value: '',
    posts: []
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch('https://next.json-generator.com/api/json/get/NkGzLjtWB')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data, isLoading: false });
      });
  };

  onChangeText = event => {
    this.setState({ value: event.target.value });
  };

  onClickButton = () => {
    this.fetchData();
  };

  render = () => {
    return (
      <div>
        <Head title="Home" />
        <input type="text" onChange={this.onChangeText} />
        <p>{this.state.value}</p>
        <button onClick={this.onClickButton}>click me</button>
        {this.state.posts.map(post => {
          return <p>{post.title}</p>;
        })}
      </div>
    );
  };
}
