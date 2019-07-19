import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import Head from 'next/head';

import createStore from '../store';

import './index.less'

class MyApp extends App {

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <title>SACC of Integrated system</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji&display=swap" rel="stylesheet" />
        </Head>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);