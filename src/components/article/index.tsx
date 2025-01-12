import moment from 'moment';
import styles from './index.module.scss';
import Props from '../types';
import Image from 'next/image';

const Article: React.VFC<Props> = ({ articles, title }) => {
  return (
    <section className={styles.article}>
      <div className={styles.article__heading}>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div>
      {articles.map((article, index) => {
        const time = moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1);
        return (
          <a
            href={article.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className={styles.article__main}>
              <div className={styles.article__title}>
                <p>{article.title}</p>
                <p className={styles.article__time}>{time}時間前</p>
              </div>
              {article.urlToImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  src={article.urlToImage}
                  className={styles.article__img}
                  alt={`${article.title} image`}
                />
              )}
            </article>
          </a>
        );
      })}
    </section>
  );
};

export default Article;
