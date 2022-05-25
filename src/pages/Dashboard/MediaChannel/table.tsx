import { DataItem } from 'types/global.d';
import styles from './table.module.scss';

const columns = [
  '',
  '노출(imp)',
  '클릭 수',
  '비용',
  'convValue',
  '클릭율(ctr)',
  '전환율(cvr)',
  '클릭당비용(cpc)',
  'cpa',
  'ROAS',
];

function cal(totalData: DataItem[]) {
  const data: Record<string, DataItem> = {
    facebook: {
      channel: 'facebook',
      date: '',
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
    },
    naver: {
      channel: 'naver',
      date: '',
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
    },
    google: {
      channel: 'google',
      date: '',
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
    },
    kakao: {
      channel: 'kakao',
      date: '',
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
    },
  };

  totalData.forEach((d) => {
    data[d.channel].imp += d.imp;
    data[d.channel].click += d.click;
    data[d.channel].cost += d.cost;
    data[d.channel].convValue += d.convValue;
    data[d.channel].ctr += d.ctr;
    data[d.channel].cvr += d.cvr;
    data[d.channel].cpc += d.cpc;
    data[d.channel].cpa += d.cpa;
    data[d.channel].roas += d.roas;
  });

  return data;
}

interface Props {
  totalData: DataItem[];
}

function Table({ totalData }: Props) {
  const { facebook, naver, google, kakao } = cal(totalData);
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
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
            {Object.entries(facebook)
              .slice(2)
              .map((entry) => (
                <td className={styles.td} key={`facebook+${entry[0]}`}>
                  {Math.round(entry[1]).toLocaleString()}
                </td>
              ))}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>네이버</td>
            {Object.entries(naver)
              .slice(2)
              .map((entry) => (
                <td className={styles.td} key={`naver+${entry[0]}`}>
                  {Math.round(entry[1]).toLocaleString()}
                </td>
              ))}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>구글</td>
            {Object.entries(google)
              .slice(2)
              .map((entry) => (
                <td className={styles.td} key={`google+${entry[0]}`}>
                  {Math.round(entry[1]).toLocaleString()}
                </td>
              ))}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.rowHead}>카카오</td>
            {Object.entries(kakao)
              .slice(2)
              .map((entry) => (
                <td className={styles.td} key={`kakao+${entry[0]}`}>
                  {Math.round(entry[1]).toLocaleString()}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
