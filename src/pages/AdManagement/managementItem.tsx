import { useState, MouseEvent, FormEvent, Dispatch, ChangeEvent } from 'react';
import cx from 'classnames';
import { useRecoil } from 'hooks';
import { adManagementItemState } from 'states/Atoms';
import styles from './adManagement.module.scss';
import { IProps } from './index';
import {
  convertMoney,
  arrangeValue,
  replaceValue,
  convertDate,
  checkEndDate,
} from './convertValue';

interface IItem {
  manageItem: IProps;
  isNew: number;
  setIsNew: Dispatch<React.SetStateAction<number>>;
}

function ManagementItem({ manageItem, isNew, setIsNew }: IItem) {
  const [manageItemStatus, setManageItemStatus] = useRecoil(
    adManagementItemState
  );
  const { id, adType, title, budget, status, startDate, endDate, report } =
    manageItem;
  const [isModify, setIsModify] = useState(adType !== '');

  const [userInput, setUserInput] = useState({
    id: 0,
    title: '',
    status: '',
    budget: 0,
    roas: 0,
    convValue: 0,
    cost: 0,
    startDate: '',
    endDate: '',
  });

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset } = e.currentTarget;
    setUserInput({
      ...userInput,
      id: Number(dataset.id),
      [name]: value,
    });
  };
  const handleModifyBtn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    const item = manageItemStatus.ads[Number(id) - 1];

    if (isModify) {
      setIsModify((prev) => !prev);
      setUserInput({
        id: Number(id),
        title: `${replaceValue(item.status)}_${item.title}`,
        status: replaceValue(item.status),
        budget: item.budget,
        roas: item.report.roas,
        convValue: item.report.convValue,
        cost: item.report.cost,
        startDate: item.startDate,
        endDate: item.endDate || '',
      });
      return;
    }
    setIsModify((prev) => !prev);
    const newItem = {
      id: Number(id),
      adType: userInput.title.split('_')[0] === '웹광고' ? 'web' : 'app',
      title: userInput.title.split('_')[1],
      budget: Number(String(userInput.budget).replaceAll(',', '')),
      status: userInput.status === '진행중' ? 'active' : 'ended',
      startDate: userInput.startDate.split('(')[0],
      endDate: userInput.startDate.split('(')[1]?.slice(0, 10),
      report: {
        cost: userInput.cost,
        convValue: userInput.convValue,
        roas: userInput.roas,
      },
    };

    setManageItemStatus((manageItemStatus) => ({
      ...manageItemStatus,
      ads: [
        ...manageItemStatus.ads.slice(0, Number(userInput.id) - 1),
        newItem,
        ...manageItemStatus.ads.slice(Number(id)),
      ],
    }));
    setIsNew(0);
  };

  const handleCancelBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset;
    setIsModify((prev) => !prev);
    if (isNew !== Number(id)) return;
    setManageItemStatus((manageItemStatus) => ({
      ...manageItemStatus,
      ads: [
        ...manageItemStatus.ads.slice(0, Number(id) - 1),
        ...manageItemStatus.ads.slice(Number(id)),
      ],
      count: manageItemStatus.count - 1,
    }));
    setIsNew(0);
  };

  const refac = (
    title: string,
    value: string,
    defaultValue: string,
    placeholder: string,
    name: string
  ) => (
    <div>
      <dt className={styles.title}>{title}</dt>
      <dd className={styles.content}>
        {isModify ? (
          value
        ) : (
          <input
            type="text"
            className={styles.contentInput}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={handleInputValue}
            name={name}
            data-id={String(id) === '' ? isNew : id}
          />
        )}
      </dd>
    </div>
  );
  return (
    <form
      className={cx(styles.adCard, { [styles.isModify]: !isModify })}
      onSubmit={handleModifyBtn}
      data-id={String(id) === '' ? isNew : id}
    >
      <p>
        {isModify ? (
          `${replaceValue(adType)}_${title}`
        ) : (
          <input
            type="text"
            className={styles.adName}
            defaultValue={
              adType === '' ? '' : `${replaceValue(adType)}_${title}`
            }
            placeholder="웹광고/앱광고_제목"
            onChange={handleInputValue}
            name="title"
            data-id={String(id) === '' ? isNew : id}
          />
        )}
      </p>
      <dl>
        {refac(
          '상태',
          `${replaceValue(status)}`,
          status === '' ? '' : `${replaceValue(status)}`,
          '진행중/중단됨',
          'status'
        )}
        {refac(
          '광고 생성일',
          `${startDate.split('T')[0]}${
            endDate ? `(${endDate.split('T')[0]})` : ''
          }`,
          `${convertDate(startDate)}${checkEndDate(
            convertDate(endDate) || ''
          )}`,
          '2022-01-01',
          'startDate'
        )}
        {refac(
          '일 희망 예산',
          `${convertMoney(budget)}원`,
          budget === 0 ? '' : arrangeValue(budget),
          '0',
          'budget'
        )}
        {refac(
          '광고 수익률',
          `${arrangeValue(report.roas)}%`,
          report.roas === 0 ? '' : arrangeValue(report.roas),
          '0',
          'roas'
        )}
        {refac(
          '매출',
          `${convertMoney(report.convValue)}원`,
          report.convValue === 0 ? '' : arrangeValue(report.convValue),
          '0',
          'convValue'
        )}
        {refac(
          '광고 비용',
          `${convertMoney(report.cost)}원`,
          report.cost === 0 ? '' : arrangeValue(report.cost),
          '0',
          'cost'
        )}
      </dl>
      <div className={styles.btnWrapper}>
        <button
          type="submit"
          className={cx(styles.modifyButton, { [styles.modifying]: !isModify })}
        >
          {isModify ? '수정하기' : '저장'}
        </button>
        {!isModify && (
          <button
            type="button"
            className={styles.cancelButton}
            data-id={String(id) === '' ? isNew : id}
            onClick={handleCancelBtn}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
}

export default ManagementItem;
