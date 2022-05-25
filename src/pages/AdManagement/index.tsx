import { MouseEvent, useEffect, useState } from 'react';
import { AdListData } from 'utils';
import { ArrowDownIcon, CheckIcon } from 'assets';
import cx from 'classnames';
import { adListState, adManagementItemState } from 'states/Atoms';
import { useRecoil } from 'hooks/useRecoil';
import styles from './adManagement.module.scss';

import ManagementItem from './managementItem';

const SHOW_STATUS = ['전체', '진행중', '중단됨'];

export interface IProps {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  };
}

function AdManagement() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectStatus, setSelectStatus] = useRecoil(adListState);
  const [managementItemStatus, setManagementItemStatus] = useRecoil(
    adManagementItemState
  );
  const [isNew, setIsNew] = useState(0);

  const handledropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectStatus = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectStatus(e.currentTarget.dataset.value || '');
    setIsDropdownOpen((prev) => !prev);
  };

  const cardStructure = managementItemStatus.ads
    .filter((data) => {
      if (selectStatus === '진행중') return data.status === 'active';
      if (selectStatus === '중단됨') return data.status === 'ended';
      return data;
    })
    .map((manageItem) => {
      return (
        <ManagementItem
          manageItem={manageItem}
          key={manageItem.id}
          isNew={isNew}
          setIsNew={setIsNew}
        />
      );
    });

  const newItem = {
    id: managementItemStatus.count + 1,
    adType: '',
    title: '',
    budget: 0,
    status: '',
    startDate: '',
    endDate: '',
    report: {
      cost: 0,
      convValue: 0,
      roas: 0,
    },
  };

  const handleAddBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setManagementItemStatus((managementItemStatus) => ({
      ...managementItemStatus,
      ads: [...managementItemStatus.ads, newItem],
      count: managementItemStatus.count + 1,
    }));
    setIsNew(managementItemStatus.count + 1);
  };
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
          <ul
            className={cx(styles.selectList, {
              [styles.isOpen]: isDropdownOpen,
            })}
          >
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
          data-value="create"
          onClick={handleAddBtn}
        >
          광고 만들기
        </button>
      </div>
      <div className={styles.bottomContents}>{cardStructure}</div>
    </div>
  );
}

export default AdManagement;
