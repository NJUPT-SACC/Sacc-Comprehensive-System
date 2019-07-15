import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import Head from 'next/head';

import createStore from '../store';

import './index.less'

class MyApp extends App {
  static async getInitialProps({pageProps}) {

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji&display=swap" rel="stylesheet" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);