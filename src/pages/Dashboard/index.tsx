import DatePicker from 'components/common/DatePicker';
import Spinner from 'components/common/Spinner';
import TrendDataBoard from 'pages/Dashboard/TrendDataBoard';
import { useEffect, useState } from 'react';

import styles from './dashboard.module.scss';
import MediaChannel from './MediaChannel';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.dashboard}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>대시보드</div>
        <DatePicker />
      </div>
      <TrendDataBoard />
      <MediaChannel />
    </div>
  );
}

export default Dashboard;
