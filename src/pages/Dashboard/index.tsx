import DatePicker from 'components/common/DatePicker';
import { useRecoilValue } from 'recoil';
import { refinedDateRangeState } from 'states';
import TrendDataBoard from 'pages/Dashboard/TrendDataBoard';

import styles from './dashboard.module.scss';
import MediaChannel from './MediaChannel';

function Dashboard() {
  const [start, end] = useRecoilValue(refinedDateRangeState);
  console.log(start, end);
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
