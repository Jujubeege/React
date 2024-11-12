import PropTypes from 'prop-types';
//import './BlogPost.css';
import styles from './BlogPost.module.css';

function BlogPost({ title, content, author, date, readTime }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.blogPostMeta}>
          <span className={styles.blogPostAuthor}>By {author}</span>
          <time className="blog-post__date">{date}</time>
          <span className="blog-post__read-time">{readTime} min read</span>
        </div>
      </div>
      
      <div className={styles.content}>
        {content}
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.required,
  content: PropTypes.string.required,
  author: PropTypes.string.required,
  date: PropTypes.string.required,
  readTime: PropTypes.number.required
};

export default BlogPost;