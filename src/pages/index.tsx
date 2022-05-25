import { Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import { themeState } from 'states';
import { useEffect } from 'react';
import { useRecoil } from 'hooks';
import Dashboard from './Dashboard';
import AdManagement from './AdManagement';

import styles from './app.module.scss';

function App() {
  const [theme, settheme] = useRecoil(themeState);

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme);
    settheme(theme);
  }, [settheme, theme]);
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admanagement" element={<AdManagement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
