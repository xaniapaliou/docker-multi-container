import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seeIndexes: [],
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seeIndexes = await axios.get('/api/values/all');
    this.setState({ seeIndexes: seeIndexes.data });
  }
}
