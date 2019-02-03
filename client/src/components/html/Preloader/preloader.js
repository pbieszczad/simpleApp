import React, { Component } from 'react';

import styles from './preloader.module.scss'

import classNames from 'classnames'

class Preloader extends Component{

    render(){
        return (
            <div className={classNames(styles.preloader,{[styles.active]:this.props.active},{[styles.absolute]:this.props.absolute})}>
                <div className={styles.loader}></div>
            </div>
        )
    }
}

export default Preloader;