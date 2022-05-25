import { TrendData } from 'utils';
import DataBox from './DataBox';
import TrendChart from './TrendChart';
import { ConvertDate } from './convertDate';

import styles from './trendDataBoard.module.scss';

function TrendDataBoard() {
  const getData = TrendData.report.daily;

  const startDate = '20220402';
  const endDate = '20220408';

  const filteredData = getData.filter(
    (el) =>
      el.date.replaceAll('-', '') >= startDate &&
      el.date.replaceAll('-', '') <= endDate
  );

  const beforeDate = ConvertDate(startDate, endDate);

  const filteredBeforeData = getData.filter(
    (el) =>
      el.date.replaceAll('-', '') >= beforeDate.start &&
      el.date.replaceAll('-', '') <= beforeDate.end
  );

  return (
    <div className={styles.trandDataBoardWrapper}>
      <h2>통합 광고 현황</h2>
      <div className={styles.trandDataBoard}>
        <DataBox
          filteredData={filteredData}
          filteredBeforeData={filteredBeforeData}
        />
        <TrendChart filteredData={filteredData} />
      </div>
    </div>
  );
}

export default TrendDataBoard;
