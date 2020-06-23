import React from 'react';
import PropTypes from 'prop-types';

import {AD} from '../../features/AD/AD';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';


const Component = ({ posts, match, userLogged}) => {
  const post = posts.data[match.params.id];

  return(
    <div className={styles.root}>
    <h1>Details</h1>
    <AD
      id={post.id}
      name={post.name}
      description={post.description}
      email={post.email}
    />

    { userLogged === true
      ?
      <div className={styles.link}>
        <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + `/post/${post.id}/edit`} activeClassName='active'>Edit</Button>
      </div>
      :
      ''
    }
  </div>
  );
};

Component.propTypes = {
  posts: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  userLogged: state.userLogged,
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const PostContainer = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  PostContainer as Post,
  Component as PostComponent,
};
