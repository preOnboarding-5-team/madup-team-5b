import { ArrowDownIcon, CircleIcon } from 'assets';
import cx from 'classnames';
import { useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import DropdownList from './DropdownList';

import styles from './dropdown.module.scss';

type TDropdown = {
  type: string;
  selected: string;
  setSelected: SetterOrUpdater<string>;
  list: string[];
  setList: SetterOrUpdater<string[]>;
  color?: string;
  itemAdder?: boolean;
};

function Dropdown({
  type,
  selected,
  setSelected,
  list,
  setList,
  color = undefined,
  itemAdder = false,
}: TDropdown) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        className={cx(styles.button, styles.dropdown, styles[type])}
        onClick={toggleList}
      >
        {color && (
          <CircleIcon width="0.3125rem" height="0.3125rem" fill={color} />
        )}
        <span className={styles.name}>{selected}</span>
        <ArrowDownIcon className={styles.icon} width=".75rem" height=".5rem" />
      </button>
      <DropdownList
        type={type}
        setSelected={setSelected}
        list={list}
        setList={setList}
        itemAdder={itemAdder}
        isOpen={isOpen}
        toggleList={toggleList}
      />
    </>
  );
}

export default Dropdown;
