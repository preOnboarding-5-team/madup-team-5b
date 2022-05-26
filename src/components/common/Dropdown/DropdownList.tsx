import { MouseEvent } from 'react';

import { IDropdownList } from 'types/global.d';
import { ArrowDownIcon, CircleIcon } from 'assets';
import { useRecoil } from 'hooks';
import { firstTrendState, secondTrendState } from 'states';
import ItemAdder from './ItemAdder';

import styles from './dropdown.module.scss';

function DropdownList({
  type,
  selected,
  setSelected,
  list,
  setList,
  itemAdder,
  isOpen,
  toggleList,
}: IDropdownList) {
  const [firstTrend] = useRecoil(firstTrendState);
  const [secondTrend] = useRecoil(secondTrendState);
  const dropdownList = list.map((item, idx) => {
    const key = `dropdownlist-key-${item}-${idx}`;

    if (typeof item === 'string') {
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
    }
    const onClick = (e: MouseEvent<HTMLLIElement>) => {
      const name = e.currentTarget.dataset.name as string;
      if (name !== firstTrend.name && name !== secondTrend.name) {
        setSelected({ name, color: item.color });
        toggleList();
      }
    };
    return (
      <li
        key={key}
        role="menuitem"
        tabIndex={0}
        data-name={item.name}
        className={styles[type]}
        onClick={onClick}
      >
        <CircleIcon width="0.3125rem" height="0.3125rem" fill={item.color} />
        <span className={styles.name}>{item.name}</span>
        <ArrowDownIcon style={{ visibility: 'hidden' }} />
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
