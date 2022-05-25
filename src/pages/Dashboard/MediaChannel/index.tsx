import { Dot } from 'asset';
import { MediaChannelData } from 'utils';
import styles from './mediaChannel.module.scss';
import Chart from './chart';
import Table from './table';

const totalData = MediaChannelData.map((d) => {
  d.date = d.date.replaceAll('-', '');
  return d;
});

function MediaChannel() {
  return (
    <div className={styles.block}>
      <p className={styles.title}>매체 현황</p>
      <div className={styles.wrap}>
        <Chart />
        <Table />
      </div>
    </div>
  );
}

export default MediaChannel;
