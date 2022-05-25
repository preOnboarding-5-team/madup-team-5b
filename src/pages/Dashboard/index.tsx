import TrendDataBoard from 'pages/Dashboard/TrendDataBoard';

import styles from './dashboard.module.scss';
import MediaChannel from './MediaChannel';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <TrendDataBoard />
      <MediaChannel />
    </div>
  );
}

export default Dashboard;
