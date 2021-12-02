import Head from 'next/head';
import MainLayout from '../layouts';
import styles from '../styles/Home.module.scss';
import Article from '../components/article';
import Nav from '../components/nav';
import WeatherNews from '../components/weather-news';

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
        <div className={styles.aside}>
          <WeatherNews weatherNews={props.weatherNews} />
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

  const lat = 35.4122;
  const lon = 139.413;
  const exclude = 'hourly,minutely';
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_WEATHER_APIKEY}`
  );
  const weatherJson = await weatherRes.json();
  const weatherNews = weatherJson;
  return {
    props: {
      topArticles,
      weatherNews,
    },
    revalidate: 60 * 10,
  };
};
