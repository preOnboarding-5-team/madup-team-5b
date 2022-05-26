import { MouseEvent, useEffect, useState } from 'react';
import { adListStatusState, adManagementItemState } from 'states/Atoms';
import { useRecoil } from 'hooks';

import Dropdown from 'components/common/Dropdown';
import Spinner from 'components/common/Spinner';
import ManagementItem from './managementItem';
import styles from './adManagement.module.scss';

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
  const [managementItemStatus, setManagementItemStatus] = useRecoil(
    adManagementItemState
  );
  const [isNew, setIsNew] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [adListStatus, setAdListStatus] = useRecoil(adListStatusState);

  const SHOW_STATUS = ['전체 광고', '진행중', '중단됨'];

  const cardStructure = managementItemStatus.ads
    .filter((data) => {
      if (adListStatus === '진행중') return data.status === 'active';
      if (adListStatus === '중단됨') return data.status === 'ended';
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.adManagement}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>광고 관리</div>
      </div>
      <div className={styles.container}>
        <div className={styles.topContents}>
          <Dropdown
            type="medium"
            selected={adListStatus}
            setSelected={setAdListStatus}
            list={SHOW_STATUS}
          />
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
    </div>
  );
}

export default AdManagement;
