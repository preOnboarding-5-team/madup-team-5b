import { AdManagementIcon, DashboardIcon, GuideIcon, LeverLogo } from 'assets';
import Dropdown from 'components/common/Dropdown';
import { useRecoil } from 'hooks';
import { selectedServiceState, serviceListState } from 'states';

import AdCenterItem from './AdCenterItem';

import styles from './snb.module.scss';

function SNB() {
  const [selectedService, setSelectedService] = useRecoil(selectedServiceState);
  const [serviceList, setServiceList] = useRecoil(serviceListState);

  const items = [
    {
      icon: <DashboardIcon width="1.25rem" height="1.25rem" />,
      name: '대시보드',
      link: '/',
    },
    {
      icon: <AdManagementIcon width="1.25rem" height="1.25rem" />,
      name: '광고관리',
      link: 'admanagement',
    },
  ];

  return (
    <nav className={styles.snb}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LeverLogo width="7.75rem" height="1.875rem" />
        </div>
        <div className={styles.line} />
        <div className={styles.menu}>
          <div className={styles.service}>
            <div className={styles.label}>서비스</div>
            <Dropdown
              type="large"
              selected={selectedService}
              setSelected={setSelectedService}
              list={serviceList}
              setList={setServiceList}
              itemAdder
            />
          </div>
          <div className={styles.adCenter}>
            <div className={styles.label}>광고 센터</div>
            {items.map((item) => {
              return (
                <AdCenterItem
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.guide}>
          <GuideIcon width="2.5rem" height="2.5rem" />
          <div className={styles.content}>
            <span>레버 이용 가이드</span>
            <small>시작하기 전에 알아보기</small>
          </div>
        </div>
        <div className={styles.terms}>
          <span>레버는 함께 만들어갑니다.</span>
          <a href="/">이용약관</a>
        </div>
      </div>
    </nav>
  );
}

export default SNB;
