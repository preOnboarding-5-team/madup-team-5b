import SNB from 'components/SNB';
import TopBar from 'components/TopBar';
import { Outlet } from 'react-router-dom';

import styles from './mainLayout.module.scss';

function MainLayout() {
  return (
    <main className={styles.layout}>
      <SNB />
      <section className={styles.section}>
        <TopBar />
        <div className={styles.line} />
        <Outlet />
      </section>
    </main>
  );
}
export default MainLayout;
