import TrendDataBoard from 'component/TrendDataBoard';

import styles from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <TrendDataBoard />
    </div>
  );
}

export default Dashboard;
