import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

import { AD } from '../../features/AD/AD';

const Component = ({posts}) => (
  <div className={styles.root}>
    {posts.data.map(post => (
      <AD
        key={post.id}
        name={post.name}
        description={post.description}
        email={post.email}
        id={post.id}
      />
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.object,
};

const mapStateToProps = state => ({
 posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
