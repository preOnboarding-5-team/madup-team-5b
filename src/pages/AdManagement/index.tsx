import { MouseEvent, useState } from 'react';
import { AdListData } from 'utils';
import { ArrowDownIcon, CheckIcon } from 'assets';
import cx from 'classnames';
import { adStatusSelectState } from 'states/Atoms';
import useRecoil from 'hooks/useRecoil';
import styles from './adManagement.module.scss';

const SHOW_STATUS = ['전체 광고', '진행중', '중단됨'];

function AdManagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectStatus, setSelectStatus] = useRecoil(adStatusSelectState);

  const handledropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectStatus = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectStatus(e.currentTarget.dataset.value || '');
    setIsOpen((prev) => !prev);
  };

  const handleUpdateAdManagement = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.value === 'create') {
      console.log(e);
    }
    console.log(e);
  };

  const convertMoney = (money: number) => {
    const tmpNum = Math.floor(money / 1000);
    if (String(money).length > 5) {
      const tmpNum2 = Math.floor(tmpNum / 10)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      if (tmpNum % 10 === 0) return `${tmpNum2}만`;
      return `${tmpNum2}만 ${tmpNum % 10}천`;
    }
    return `${tmpNum}천`;
  };

  const cardStructure = AdListData.ads
    .filter((data) => {
      if (selectStatus === '진행중') return data.status === 'active';
      if (selectStatus === '중단됨') return data.status === 'ended';
      return data;
    })
    .map((item) => {
      return (
        <div className={styles.adCard} key={item.id}>
          <p>
            {item.adType === 'web' ? '웹광고' : '앱광고'}_{item.title}
          </p>
          <ul>
            <li>
              <dt className={styles.title}>상태</dt>
              <dl className={styles.content}>
                {item.status === 'active' ? '진행중' : '중단됨'}
              </dl>
            </li>
            <li>
              <dt className={styles.title}>광고 생성일</dt>
              <dl className={styles.content}>
                {item.startDate.split('T')[0]}{' '}
                {item.endDate ? `(${item.endDate.split('T')[0]})` : ''}
              </dl>
            </li>
            <li>
              <dt className={styles.title}>일 희망 예산</dt>
              <dl className={styles.content}>{convertMoney(item.budget)}원</dl>
            </li>
            <li>
              <dt className={styles.title}>광고 수익률</dt>
              <dl className={styles.content}>{item.report.roas}%</dl>
            </li>
            <li>
              <dt className={styles.title}>매출</dt>
              <dl className={styles.content}>
                {convertMoney(item.report.convValue)}원
              </dl>
            </li>
            <li>
              <dt className={styles.title}>광고 비용</dt>
              <dl className={styles.content}>
                {convertMoney(item.report.cost)}원
              </dl>
            </li>
          </ul>
          <button
            type="button"
            className={styles.btnModify}
            data-value={item.id}
          >
            수정하기
          </button>
        </div>
      );
    });

  return (
    <div className={styles.adManagement}>
      <div className={styles.topContents}>
        <div className={styles.selectWrapper}>
          <button
            type="button"
            className={styles.select}
            onClick={handledropdown}
          >
            <span>{selectStatus}</span>
            <ArrowDownIcon className={styles.selectIcon} />
          </button>
          <ul className={cx(styles.selectList, { [styles.isOpen]: isOpen })}>
            {SHOW_STATUS.map((item: string) => {
              return (
                <li key={item}>
                  <button
                    type="button"
                    className={styles.selectContent}
                    onClick={handleSelectStatus}
                    data-value={item}
                  >
                    <span>{item}</span>
                    {selectStatus === item && (
                      <CheckIcon className={styles.selectContentIcon} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type="button"
          className={styles.btnMakeAd}
          onClick={handleUpdateAdManagement}
          data-value="create"
        >
          광고 만들기
        </button>
      </div>
      <div className={styles.bottomContents}>{cardStructure}</div>
    </div>
  );
}

export default AdManagement;
