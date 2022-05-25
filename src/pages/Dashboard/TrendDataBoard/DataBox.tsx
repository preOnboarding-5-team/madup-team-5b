import { HigherValueIcon, LowerValueIcon } from 'assets';
import styles from './trendDataBoard.module.scss';
import { FilteredData } from './TrendChart';

interface IProps {
  filteredData: FilteredData[];
  filteredBeforeData: FilteredData[];
}

const convertNumber = (value: number) => {
  const regex = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  if (value < 10_000) return Math.round(value).toString().replace(regex, ',');
  if (value < 100_000_000) {
    return `${Math.round(value / 10_000)
      .toString()
      .replace(regex, ',')}만`;
  }
  return `${Math.round(value / 100_000_000)
    .toString()
    .replace(regex, ',')}억`;
};

function DataBox({ filteredData, filteredBeforeData }: IProps) {
  const getSumData = (data: FilteredData[]) => {
    const info: Record<string, number> = {
      roas: 0, // roas
      cost: 0, // 광고비
      imp: 0, // 노출수
      click: 0, // click
      cvr: 0, // 전환율이지만 전환수 = cvr(전환율) / 100 * click (클릭수) 들어감
      total: 0, // 매출 = roas / 100 * cost
    };

    data.forEach((d) => {
      info.imp += d.imp;
      info.click += d.click;
      info.cost += d.cost;
      info.cvr += (d.cvr / 100) * d.click;
      info.roas += d.roas;
      info.total += (d.roas / 100) * d.cost;
    });

    return info;
  };

  const sumPickDatesValue = getSumData(filteredData);
  const sumBeforeDatesValue = getSumData(filteredBeforeData);

  const compareValue = (now: number, before: number) => {
    const value = now - before;

    return value > 0 ? (
      <>
        <HigherValueIcon style={{ marginRight: '0.3125rem' }} />
        {convertNumber(Math.abs(value))}
      </>
    ) : (
      <>
        <LowerValueIcon style={{ marginRight: '0.3125rem' }} />
        {convertNumber(Math.abs(value))}
      </>
    );
  };
  // 아래 dl, dt, dd 넣을 지
  return (
    <ul>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>ROAS</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.roas)} %
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.roas, sumBeforeDatesValue.roas)} %
        </div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>광고비</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.cost)} 원
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.cost, sumBeforeDatesValue.cost)} 원
        </div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>노출 수</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.imp)} 회
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.imp, sumBeforeDatesValue.imp)} 회
        </div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>클릭수</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.click)} 회
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.click, sumBeforeDatesValue.click)} 회
        </div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>전환 수</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.cvr)} 회
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.cvr, sumBeforeDatesValue.cvr)} 회
        </div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>매출</div>
          <div className={styles.dataValue}>
            {convertNumber(sumPickDatesValue.total)} 원
          </div>
        </div>
        <div className={styles.transeData}>
          {compareValue(sumPickDatesValue.total, sumBeforeDatesValue.total)} 원
        </div>
      </li>
    </ul>
  );
}

export default DataBox;
