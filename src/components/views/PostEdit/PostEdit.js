import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Component =  ({posts, match, className, editPost}) => {
  const editedPostId = match.params.id;
  const editedPost = posts.data.find(item => item._id === editedPostId);

  const [post, updatePost] = React.useState ({
    name: '',
    description: '',
    email: '',
  });
  const handleChange = (e, name) => {
    updatePost ({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
  e.preventDefault();
  editPost({...editedPost, post});
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.header}>Post Edit</div>
      <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <TextField className={styles.textfield} id="outlined-basic" label="Name" variant="outlined" onChange = {e => handleChange(e, 'title')}/>
        <TextField className={styles.textfield} id="outlined-basic" label="Description" variant="outlined" multiline="true" onChange = {e => handleChange(e, 'text')} />
        <TextField className={styles.textfield} id="outlined-basic" label="E-mail" variant="outlined" onChange = {e => handleChange(e, 'author')} />
        <Button type="submit" className={styles.link} to={process.env.PUBLIC_URL + '/post/:id'}>Submit</Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.object,
  match: PropTypes.shape ({
    params: PropTypes.shape ({
      id: PropTypes.string,
    }),
  }),
  editPost: PropTypes.func,
};

const mapStateToProps = state => ({
posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const PostEditContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostEdit,
  PostEditContainer as PostEdit,
  Component as PostEditComponent,
};
