import Loader from 'react-loader-spinner';
import React, { Component } from 'react';
import s from './Loader.module.css';
export default class Loaders extends Component {
  //other logic
  render() {
    return (
      <div className={s.loaderStyle}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={18}
          width={50}
          timeout={2000} //2 secs
        />
      </div>
    );
  }
}
