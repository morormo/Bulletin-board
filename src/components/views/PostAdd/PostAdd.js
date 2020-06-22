import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.header}>Add Post</div>
    <form className={styles.form} noValidate autoComplete="off">
      <TextField className={styles.textfield} id="outlined-basic" label="ID" variant="outlined" />
      <TextField className={styles.textfield} id="outlined-basic" label="Name" variant="outlined" />
      <TextField className={styles.textfield} id="outlined-basic" label="Description" variant="outlined" multiline="true" />
      <TextField className={styles.textfield} id="outlined-basic" label="E-mail" variant="outlined" />
      <Button type="submit" className={styles.link} to={process.env.PUBLIC_URL + '/post/:id'}>Submit</Button>
    </form>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
