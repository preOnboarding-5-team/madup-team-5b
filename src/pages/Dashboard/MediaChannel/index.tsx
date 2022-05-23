import { Dot } from 'asset';
import styles from './mediaChannel.module.scss';
import Chart from './chart';
import Graph from './table';

function MediaChannel() {
  return (
    <div className={styles.block}>
      <p className={styles.title}>매체 현황</p>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Chart />
          <div className={styles.dots}>
            <Dot className={styles.dot} />
            <span>페이스북</span>

            <Dot className={styles.dot} />
            <span>네이버</span>

            <Dot className={styles.dot} />
            <span>구글</span>

            <Dot className={styles.dot} />
            <span>카카오</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default MediaChannel;
