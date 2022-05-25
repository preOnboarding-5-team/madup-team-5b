import { DataItem } from 'types/global.d';
import { MediaChannelData } from 'utils';
import styles from './table.module.scss';

const columns = [
  '',
  '광고비',
  '매출',
  'ROAS',
  '노출수',
  '클릭 수',
  '클릭률(CTR)',
  '클릭당비용(CPC)',
];
const data: Record<string, DataItem> = {
  google: {
    channel: 'google',
    date: '',
    cost: 0,
    convValue: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
  },
  facebook: {
    channel: 'facebook',
    date: '',
    cost: 0,
    convValue: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
  },
  naver: {
    channel: 'naver',
    date: '',
    cost: 0,
    convValue: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
  },
  kakao: {
    channel: 'kakao',
    date: '',
    cost: 0,
    convValue: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
  },
};

const totalData = MediaChannelData.map((d: DataItem) => {
  d.date = d.date.replaceAll('-', '');
  return d;
});

function cal() {
  totalData.forEach((d) => {
    data[d.channel].imp += d.imp;
    data[d.channel].click += d.click;
    data[d.channel].cost += d.cost;
    data[d.channel].convValue += d.convValue;
    data[d.channel].ctr += d.ctr;
    data[d.channel].cpc += d.cpc;
    data[d.channel].roas += d.roas;
  });

  return data;
}

const { google, facebook, naver, kakao } = cal();

function Table() {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table} cellSpacing={0} cellPadding={0}>
        <thead>
          <tr className={styles.tr}>
            {columns.map((column) => (
              <th className={styles.th} key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>페이스북</td>
            {Object.values(facebook)
              .slice(2)
              .map((d) => {
                return (
                  <td className={styles.td} key={d}>
                    {Math.round(d).toLocaleString()}
                  </td>
                );
              })}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>네이버</td>
            {Object.values(naver)
              .slice(2)
              .map((d) => {
                return (
                  <td className={styles.td} key={d}>
                    {Math.round(d).toLocaleString()}
                  </td>
                );
              })}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>구글</td>
            {Object.values(google)
              .slice(2)
              .map((d) => {
                return (
                  <td className={styles.td} key={d}>
                    {Math.round(d).toLocaleString()}
                  </td>
                );
              })}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>카카오</td>
            {Object.values(kakao)
              .slice(2)
              .map((d) => {
                return (
                  <td className={styles.td} key={d}>
                    {Math.round(d).toLocaleString()}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
