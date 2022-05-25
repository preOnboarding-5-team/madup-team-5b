import { AdListData } from 'utils';
import { useRecoil } from 'hooks';
import { adListStatusState } from 'states';

import Dropdown from 'components/common/Dropdown';
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
  const [adListStatus, setAdListStatus] = useRecoil(adListStatusState);

  const SHOW_STATUS = ['전체 광고', '진행중', '중단됨'];

  const cardStructure = AdListData.ads
    .filter((data) => {
      if (adListStatus === '진행중') return data.status === 'active';
      if (adListStatus === '중단됨') return data.status === 'ended';
      return data;
    })
    .map((manageItem) => {
      return <ManagementItem {...manageItem} key={manageItem.id} />;
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
        <button type="button" className={styles.btnMakeAd} data-value="create">
          광고 만들기
        </button>
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
