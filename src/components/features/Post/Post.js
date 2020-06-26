import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';


import styles from './Post.module.scss';

import { AD } from '../../features/AD/AD';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;

    fetchPublishedPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={styles.root}>
          {posts.map(post => (
          <AD
            key={post._id}
            title={post.title}
            text={post.text}
            author={post.author}
            updated={post.updated}
            created={post.created}
            status={post.status}
          />
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
};

const mapStateToProps = state => ({
 posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
