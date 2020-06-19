import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

import { AD } from '../../features/AD/AD'

export const Data = [
 {
   id: 1,
   name: 'Daniel Stokłosa',
   description: 'Lorem ipsum',
   email: 'morormo@gmail.com',
 },
 {
  id: 2,
  name: 'Daniel Stokłosa1',
  description: 'Lorem ipsum',
  email: 'morormo@gmail.com',
},
{
  id: 3,
  name: 'Daniel Stokłosa2',
  description: 'Lorem ipsum',
  email: 'morormo@gmail.com',
},
{
  id: 4,
  name: 'Daniel Stokłosa3',
  description: 'Lorem ipsum',
  email: 'morormo@gmail.com',
},

];

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {Data.map(post => (
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
  post: PropTypes.array,
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
