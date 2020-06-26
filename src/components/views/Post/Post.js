import React from 'react';
import PropTypes from 'prop-types';

import {AD} from '../../features/AD/AD';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';


const Component = ({ posts, match, userLogged}) => {
  const postId = match.params.id;
  const post = posts.find(item => item._id === postId);

  return(
    <div className={styles.root}>
    <h1>Details</h1>
    <AD
      title={post.title}
      text={post.text}
      author={post.author}
      id={post._id}
      created={post.created}
      updated={post.updated}
      status={post.status}
    />

    { userLogged === true
      ?
      <div className={styles.link}>
         <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + `/post/${post._id}/edit`} activeClassName='active'>Edit</Button>
      </div>
      :
      ''
    }
  </div>
  );
};

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  userLogged: state.userLogged,
  posts: getAll(state),
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
