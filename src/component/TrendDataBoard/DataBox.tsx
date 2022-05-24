import styles from './trendDataBoard.module.scss';

function DataBox() {
  return (
    <ul>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>ROAS</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>광고비</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>노출 수</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>클릭수</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>전환 수</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
      <li className={styles.dataBox}>
        <div className={styles.dataWrap}>
          <div className={styles.dataTitle}>매출</div>
          <div className={styles.dataValue}>result</div>
        </div>
        <div className={styles.transeData}>transe</div>
      </li>
    </ul>
  );
}

export default DataBox;
