import DatePicker from 'components/common/DatePicker';
import { useRecoilValue } from 'recoil';
import { refinedDateRangeState } from 'states';

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
      <MediaChannel />
    </div>
  );
}

export default Dashboard;
