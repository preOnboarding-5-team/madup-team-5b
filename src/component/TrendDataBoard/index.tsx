import { useState } from 'react';
import { TrendData } from 'utils';
import DataBox from './DataBox';
import TrendChart from './TrendChrat';

import styles from './trendDataBoard.module.scss';

function TrendDataBoard() {
  const getData = TrendData.report.daily;

  const [selectFristValue, setSelectFristValue] = useState('roas');
  const [selectSecondValue, setSelectSecondValue] = useState('클릭수');

  const startDate = '2022-04-02';
  const endDate = '2022-04-08';

  const filteredData = getData.filter(
    (el) => el.date >= startDate && el.date <= endDate
  );

  return (
    <div className={styles.trandDataBoardWrapper}>
      <h2>통합 광고 현황</h2>
      <div className={styles.trandDataBoard}>
        <div className={styles.dataBoxWrapper}>
          <DataBox />
        </div>
        <div className={styles.chratBox}>
          <TrendChart filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default TrendDataBoard;
