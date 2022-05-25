import TrendDataBoard from 'pages/Dashboard/TrendDataBoard';
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
<<<<<<< HEAD
      <TrendDataBoard />
=======
      <div className={styles.titleContainer}>
        <div className={styles.title}>대시보드</div>
        <DatePicker />
      </div>
>>>>>>> d4cc662f453c08abba371d74661b04870b8859ac
      <MediaChannel />
    </div>
  );
}

export default Dashboard;
