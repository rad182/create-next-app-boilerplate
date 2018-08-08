import React from 'react';
import Head from '../components/head';

export default class Input extends React.Component {
  state = {
    value: ''
  };

  onChangeText = event => {
    this.setState({ value: event.target.value });
  };

  render = () => {
    return (
      <div>
        <Head title="Home" />
        <input type="text" onChange={this.onChangeText} />
        <p>{this.state.value}</p>
      </div>
    );
  };
}
