import { MediaChannelData } from 'utils';
import { DataItem, ITotalData } from 'types/global.d';
import { useRecoilValue } from 'recoil';
import { refinedDateRangeState } from 'states';
import { useEffect, useState } from 'react';
import styles from './mediaChannel.module.scss';
import Chart from './chart';
import Table from './table';

function MediaChannel() {
  const [start, end] = useRecoilValue(refinedDateRangeState);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (start && end) {
      setStartDate(start);
      setEndDate(end);
    }
  }, [end, start]);
  const dataWithSales = MediaChannelData.map((d: DataItem) => ({
    ...d,
    sales: (d.roas * d.cost) / 100,
  }));

  const totalData = dataWithSales
    .map((d: ITotalData) => {
      d.date = d.date.replaceAll('-', '');
      return d;
    })
    .filter(
      (d) =>
        Number(d.date) >= Number(startDate) && Number(d.date) <= Number(endDate)
    );

  return (
    <div className={styles.block}>
      <p className={styles.title}>매체 현황</p>
      <div className={styles.wrap}>
        {endDate && <Chart totalData={totalData} />}
        <Table totalData={totalData} />
      </div>
    </div>
  );
}

export default MediaChannel;
