import styles from './adManagement.module.scss';
import { IProps } from './index';

function ManagementItem(manageItem: IProps) {
  const convertMoney = (money: number) => {
    const tmpNum = Math.round(money / 1000);
    if (money >= 100_000) {
      const tmpNum2 = Math.round(tmpNum / 10)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      if (tmpNum % 10 === 0) return `${tmpNum2}만`;
      return `${tmpNum2}만 ${tmpNum % 10}천`;
    }
    return `${tmpNum}천`;
  };

  const { id, adType, title, budget, status, startDate, endDate, report } =
    manageItem;

  return (
    <div className={styles.adCard}>
      <p>
        {adType === 'web' ? '웹광고' : '앱광고'}_{title}
      </p>
      <dl>
        <div>
          <dt className={styles.title}>상태</dt>
          <dd className={styles.content}>
            {status === 'active' ? '진행중' : '중단됨'}
          </dd>
        </div>
        <div>
          <dt className={styles.title}>광고 생성일</dt>
          <dd className={styles.content}>
            {startDate.split('T')[0]}{' '}
            {endDate ? `(${endDate.split('T')[0]})` : ''}
          </dd>
        </div>
        <div>
          <dt className={styles.title}>일 희망 예산</dt>
          <dd className={styles.content}>{convertMoney(budget)}원</dd>
        </div>
        <div>
          <dt className={styles.title}>광고 수익률</dt>
          <dd className={styles.content}>{report.roas}%</dd>
        </div>
        <div>
          <dt className={styles.title}>매출</dt>
          <dd className={styles.content}>{convertMoney(report.convValue)}원</dd>
        </div>
        <div>
          <dt className={styles.title}>광고 비용</dt>
          <dd className={styles.content}>{convertMoney(report.cost)}원</dd>
        </div>
      </dl>
      <button type="button" className={styles.modifyButton} data-value={id}>
        수정하기
      </button>
    </div>
  );
}

export default ManagementItem;
