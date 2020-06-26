import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, addRequest } from '../../../redux/postsRedux'

import styles from './PostAdd.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Component = ({className, addRequestPost}) => {
  const [post, newPost] = React.useState({
    author: '',
    created: '',
    updated: '',
    status: '',
    title: '',
    text: '',
    photo: '',
    price: '',
    phone: '',
    location: '',
  });

  const handleChange = (e, name) => {
    newPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequestPost(post);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.header}>Add Post</div>
      <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <TextField className={styles.textfield} id="outlined-basic" label="Title" variant="outlined" onChange={e => handleChange(e, 'title')} value={post.title} />
        <TextField className={styles.textfield} id="outlined-basic" label="Description" variant="outlined" multiline="true" onChange={e => handleChange(e, 'text')} value={post.text} />
        <TextField className={styles.textfield} id="outlined-basic" label="E-mail" variant="outlined" onChange={e => handleChange(e, 'author')} value={post.author} />
        <Button type="submit" className={styles.link} to={process.env.PUBLIC_URL + '/post/:id'}>Submit</Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addRequestPost:PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addRequestPost: post => dispatch(addRequest(post)),
});

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  PostAddContainer as PostAdd,
  Component as PostAddComponent,
};
