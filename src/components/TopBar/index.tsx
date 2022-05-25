import {
  CircleIcon,
  DefaultProfileIcon,
  NoticeIcon,
  SettingsIcon,
} from 'assets';
import { useRecoil } from 'hooks';
import { useRecoilValue } from 'recoil';
import { themeState, toggleTheme } from 'states';
import styles from './topbar.module.scss';

function TopBar() {
  const [theme, settheme] = useRecoil(themeState);
  const handleThemeClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    settheme(newTheme);
  };
  return (
    <header className={styles.topBar}>
      <div className={styles.container}>
        <div>
          <button
            type="button"
            onClick={handleThemeClick}
            className={styles.theme}
          >
            {theme}
          </button>
        </div>
        <div className={styles.notice}>
          <NoticeIcon
            width="1.5rem"
            height="1.5rem"
            className={styles.noticeIcon}
          />
          <CircleIcon
            width="0.3125rem"
            height="0.3125rem"
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
