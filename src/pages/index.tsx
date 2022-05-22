import { Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import AdManagement from './AdManagement';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="admanagement" element={<AdManagement />} />
      </Routes>
    </div>
  );
}

export default App;
