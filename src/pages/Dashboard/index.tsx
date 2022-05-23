import styles from './dashboard.module.scss';
import MediaChannel from './MediaChannel';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <MediaChannel />
    </div>
  );
}

export default Dashboard;
