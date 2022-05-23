import {
  AdManagementIcon,
  ArrowDownIcon,
  DashboardIcon,
  GuideIcon,
  LeverLogo,
} from 'assets';

import AdCenterItem from './AdCenterItem';

import styles from './snb.module.scss';

function SNB() {
  const items = [
    { icon: <DashboardIcon />, name: '대시보드', link: '/' },
    { icon: <AdManagementIcon />, name: '광고관리', link: 'admanagement' },
  ];

  return (
    <nav className={styles.snb}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <LeverLogo />
        </div>
        <div className={styles.line} />
        <div className={styles.menu}>
          <div className={styles.service}>
            <div className={styles.label}>서비스</div>
            <div className={styles.select}>
              <div className={styles.name}>매드업</div>
              <ArrowDownIcon />
            </div>
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
          <GuideIcon width="40" height="40" />
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
