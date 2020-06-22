import React from 'react';
import PropTypes from 'prop-types';

import {AD} from '../../features/AD/AD';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const data =
  {
    id: 1,
    name: 'Title 1',
    description: 'Lorem ipsum',
    email: 'morormo@gmail.com',
  };

const Component = ({id, name, description, email}) => (
  <div className={styles.root}>
    <h1>Details</h1>
    <AD
      id={id}
      name={data.name}
      description={data.description}
      email={data.email}
    />
  </div>
);

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
