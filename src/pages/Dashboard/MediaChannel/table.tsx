import { ITotalData } from 'types/global.d';
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

interface ITableData {
  channel: string;
  date: string;
  cost: number;
  sales: number;
  roas: number;
  imp: number;
  click: number;
  ctr: number;
  cpc: number;
}
function cal(totalData: ITotalData[]) {
  const data: Record<string, ITableData> = {
    facebook: {
      channel: 'facebook',
      date: '',
      cost: 0,
      sales: 0,
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
      sales: 0,
      roas: 0,
      imp: 0,
      click: 0,
      ctr: 0,
      cpc: 0,
    },
    google: {
      channel: 'google',
      date: '',
      cost: 0,
      sales: 0,
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
      sales: 0,
      roas: 0,
      imp: 0,
      click: 0,
      ctr: 0,
      cpc: 0,
    },
  };

  totalData.forEach((d) => {
    data[d.channel].imp += d.imp;
    data[d.channel].click += d.click;
    data[d.channel].cost += d.cost;
    data[d.channel].ctr += d.ctr;
    data[d.channel].cpc += d.cpc;
    data[d.channel].roas += d.roas;
    data[d.channel].sales += d.sales;
  });
  return data;
}

interface Props {
  totalData: ITotalData[];
}

function Table({ totalData }: Props) {
  const { facebook, naver, google, kakao } = cal(totalData);
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
