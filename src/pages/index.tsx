import { Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import Dashboard from './Dashboard';
import AdManagement from './AdManagement';

import styles from './app.module.scss';

function App() {
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
