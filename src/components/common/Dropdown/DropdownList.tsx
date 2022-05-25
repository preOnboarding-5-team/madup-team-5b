import { MouseEvent } from 'react';
import { SetterOrUpdater } from 'recoil';

import ItemAdder from './ItemAdder';

import styles from './dropdown.module.scss';

type TDropdownList = {
  type: string;
  setSelected: SetterOrUpdater<string>;
  list: string[];
  setList?: SetterOrUpdater<string[]>;
  itemAdder: boolean;
  isOpen: boolean;
  toggleList: () => void;
};

function DropdownList({
  type,
  setSelected,
  list,
  setList,
  itemAdder,
  isOpen,
  toggleList,
}: TDropdownList) {
  const dropdownList = list.map((item, idx) => {
    const key = `dropdownlist-key-${item}-${idx}`;

    const onClick = (e: MouseEvent<HTMLLIElement>) => {
      const name = e.currentTarget.dataset.name as string;
      setSelected(name);
      toggleList();
    };

    return (
      <li
        key={key}
        role="menuitem"
        tabIndex={0}
        data-name={item}
        className={styles[type]}
        onClick={onClick}
      >
        <span className={styles.name}>{item}</span>
      </li>
    );
  });

  if (!isOpen) return null;
  return (
    <ul className={styles.listContainer}>
      {dropdownList}
      {itemAdder && (
        <ItemAdder
          type={type}
          label="서비스 추가하기"
          list={list}
          setList={setList}
        />
      )}
    </ul>
  );
}

export default DropdownList;
