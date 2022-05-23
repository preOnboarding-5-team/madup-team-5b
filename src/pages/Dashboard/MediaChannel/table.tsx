import { useTable } from 'react-table';
import styles from './table.module.scss';

const columns = [
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
function Table() {
  return <table className={styles.table} />;
}

export default Table;
