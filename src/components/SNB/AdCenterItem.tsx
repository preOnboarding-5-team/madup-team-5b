import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './snb.module.scss';

type Props = {
  icon: JSX.Element;
  name: string;
  link: string;
};
function AdCenterItem({ icon, name, link }: Props) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        cx(styles.item, { [styles.active]: isActive })
      }
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
    </NavLink>
  );
}

export default AdCenterItem;
