import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Container } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { PageNav } from '../../layout/PageNav/PageNav';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, userLogged}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar className = {styles.component}>
      <Container>
        <Toolbar disableGutters>
          <PageNav userLogged = {userLogged}/>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar/>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  userLogged: state.userLogged
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const HeaderContainer = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  HeaderContainer as Header,
  Component as HeaderComponent,
};
