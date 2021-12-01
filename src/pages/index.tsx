import Head from 'next/head';
import MainLayout from '../layouts';
import styles from '../styles/Home.module.scss';
import Article from '../components/article';
import Nav from '../components/nav';

const Home = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>

      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="headlines" articles={props.topArticles} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
