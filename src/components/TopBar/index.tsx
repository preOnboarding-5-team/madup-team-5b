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
          <NoticeIcon className={styles.noticeIcon} />
          <CircleIcon className={styles.circleIcon} />
        </div>
        <SettingsIcon className={styles.settingsIcon} />
        <DefaultProfileIcon className={styles.profileIcon} />
        <span className={styles.userName}>Team 5B</span>
      </div>
    </header>
  );
}

export default TopBar;
