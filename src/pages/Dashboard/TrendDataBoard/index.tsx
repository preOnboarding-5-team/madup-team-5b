import { useEffect, useState } from 'react';

import { TrendData } from 'utils';
import { useRecoilValue } from 'recoil';
import {
  firstTrendState,
  refinedDateRangeState,
  secondTrendState,
  trendTermState,
} from 'states';
import { useRecoil } from 'hooks';

import Dropdown from 'components/common/Dropdown';
import DataBox from './DataBox';
import TrendChart from './TrendChart';
import { ConvertDate } from './convertDate';

import styles from './trendDataBoard.module.scss';

function TrendDataBoard() {
  const [firstTrend, setFirstTrend] = useRecoil(firstTrendState);
  const [secondTrend, setSecondTrend] = useRecoil(secondTrendState);
  const [trendTerm, setTrendTerm] = useRecoil(trendTermState);
  const [start, end] = useRecoilValue(refinedDateRangeState);

  const trendsName = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출'];
  const trendColor = [
    '#4fadf7',
    '#85da45',
    '#ac8af8',
    '#ffeb00',
    '#586cf5',
    '#ea3a4b',
  ];

  const list = trendsName.map((trend, idx) => ({
    name: trend,
    color: trendColor[idx],
  }));

  const terms = ['주간', '일별'];

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getData = TrendData.report.daily;

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

  useEffect(() => {
    if (start && end) {
      setStartDate(start);
      setEndDate(end);
    }
  }, [end, start]);

  return (
    <div className={styles.trandDataBoardWrapper}>
      <h2>통합 광고 현황</h2>
      <div className={styles.trandDataBoard}>
        <DataBox
          filteredData={filteredData}
          filteredBeforeData={filteredBeforeData}
        />
        <div className={styles.dropdowns}>
          <div className={styles.categories}>
            <Dropdown
              type="medium"
              selected={firstTrend.name}
              setSelected={setFirstTrend}
              list={list}
              color={firstTrend.color}
            />
            <Dropdown
              type="medium"
              selected={secondTrend.name}
              setSelected={setSecondTrend}
              list={list}
              color={secondTrend.color}
            />
          </div>
          <Dropdown
            type="small"
            selected={trendTerm}
            setSelected={setTrendTerm}
            list={terms}
          />
        </div>
        <TrendChart filteredData={filteredData} />
      </div>
    </div>
  );
}

export default TrendDataBoard;
