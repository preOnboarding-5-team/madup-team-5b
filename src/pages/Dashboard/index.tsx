import TrendDataBoard from 'pages/Dashboard/TrendDataBoard';

import styles from './dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <TrendDataBoard />
    </div>
  );
}

export default Dashboard;
