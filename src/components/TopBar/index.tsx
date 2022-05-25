import {
  CircleIcon,
  DefaultProfileIcon,
  NoticeIcon,
  SettingsIcon,
} from 'assets';
import styles from './topbar.module.scss';

function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.notice}>
          <NoticeIcon
            width="1.5rem"
            height="1.5rem"
            className={styles.noticeIcon}
          />
          <CircleIcon
            width="0.3125rem"
            height="0.3125rem"
            fill="#ea3a4b"
            className={styles.circleIcon}
          />
        </div>
        <SettingsIcon
          width="1.5rem"
          height="1.5rem"
          className={styles.settingsIcon}
        />
        <DefaultProfileIcon
          width="2.5rem"
          height="2.5rem"
          className={styles.profileIcon}
        />
        <span className={styles.userName}>Team 5B</span>
      </div>
    </header>
  );
}

export default TopBar;
