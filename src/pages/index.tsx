import { VFC } from 'react';
import { Header } from '../components/header';
import styles from '../styles/Home.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
