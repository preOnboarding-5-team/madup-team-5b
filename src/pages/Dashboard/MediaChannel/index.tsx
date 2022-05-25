import { MediaChannelData } from 'utils';
import { DataItem } from 'types/global.d';
import styles from './mediaChannel.module.scss';
import Chart from './chart';
import Table from './table';

const startDate = Number('20220201');
const endDate = Number('20220202');

const totalData = MediaChannelData.map((d: DataItem) => {
  d.date = d.date.replaceAll('-', '');
  return d;
}).filter((d) => Number(d.date) >= startDate && Number(d.date) <= endDate);

function MediaChannel() {
  return (
    <div className={styles.block}>
      <p className={styles.title}>매체 현황</p>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Chart totalData={totalData} />
        </div>
        <div className={styles.bottom}>
          <Table totalData={totalData} />
        </div>
      </div>
    </div>
  );
}

export default MediaChannel;
