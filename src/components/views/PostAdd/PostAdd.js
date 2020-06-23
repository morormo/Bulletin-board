import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Component = ({className, addPost}) => {
  const [post, newPost] = React.useState({
    id: '',
    name: '',
    descripion: '',
    email: '',
  });

  const handleChange = (e, name) => {
    newPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.header}>Add Post</div>
      <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <TextField className={styles.textfield} id="outlined-basic" label="Name" variant="outlined" onChange={e => handleChange(e, 'name')} />
        <TextField className={styles.textfield} id="outlined-basic" label="Description" variant="outlined" multiline="true" onChange={e => handleChange(e, 'description')} />
        <TextField className={styles.textfield} id="outlined-basic" label="E-mail" variant="outlined" onChange={e => handleChange(e, 'email')} />
        <Button type="submit" className={styles.link} to={process.env.PUBLIC_URL + '/post/:id'}>Submit</Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  PostAddContainer as PostAdd,
  Component as PostAddComponent,
};
