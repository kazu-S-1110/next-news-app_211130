import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Twirl as Hamburger } from 'hamburger-react';

export const Header = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <Hamburger size={20} rounded duration={0.5} />
        </div>
        <h1
          style={{
            letterSpacing: '1px',
            textAlign: 'left',
            marginLeft: '30px',
          }}
        >
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
};
