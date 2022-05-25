import cx from 'classnames';
import { FormEvent, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { trendItem } from 'types/global.d';

import styles from './dropdown.module.scss';

type TItemAdder = {
  type: string;
  label: string;
  list: string[] | trendItem[];
  setList?: SetterOrUpdater<string[]>;
};

function ItemAdder({ type, label, list, setList }: TItemAdder) {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const toggleIsAdding = () => {
    setIsAdding((prev) => !prev);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget[0] as HTMLInputElement;
    if (list.findIndex((service) => service === target.value) !== -1) {
      e.currentTarget.classList.add(styles.invalid);
    } else {
      const newList = [...list, target.value] as string[];
      if (setList) {
        setList(newList);
      }
      toggleIsAdding();
      e.currentTarget.reset();
    }
  };

  const adder = () => {
    return isAdding ? (
      <li className={cx(styles[type], styles.inputContainer)}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className={cx(styles.name, styles.input)}
            placeholder="서비스 이름을 입력하세요."
          />
        </form>
      </li>
    ) : (
      <li role="menuitem" className={styles[type]} onClick={toggleIsAdding}>
        <span className={styles.name}>{label}</span>
      </li>
    );
  };

  return adder();
}

export default ItemAdder;
