import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/with-redux-store'
import Router, {withRouter} from 'next/router'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head';
import createStore from '../store/index';
import './index.less'
import '../static/fonts/iconfont.css'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const warn = (value) =>{
  alert(value)
}
class MyApp extends App {
  constructor (props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }
  componentDidMount(){
    console.log(Router.router.query)
    if(Router.router.query=='请登录后再进行操作.'){
      warn(Router.router.query)
    }
  }

  render() {
    const { Component, pageProps, router, reduxStore } = this.props;
    
    return (
      <Container>
        <Head>
          <title>SACC of Integrated system</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji&display=swap" rel="stylesheet" />
        </Head>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={this.persistor}
            router={router}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp)
