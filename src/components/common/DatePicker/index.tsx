import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';

import { ArrowDownIcon } from 'assets';
import { useRecoil } from 'hooks';
import { dateRangeState } from 'states';

import './react-datepicker.scss';
import styles from './datePicker.module.scss';

function DatePicker() {
  const [dataRange, setDataRangeState] = useRecoil(dateRangeState);

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setDataRangeState({ ...dataRange, start, end });
  };

  const onCalendarClose = () => {
    if (!dataRange.end) {
      setDataRangeState({ ...dataRange, end: new Date('2022-04-20') });
    }
  };

  return (
    <div className={styles.datePicker}>
      <div className={styles.pickers}>
        <ReactDatePicker
          dateFormat="yyyy년 MM월 dd일"
          wrapperClassName={styles.dateWrapper}
          selected={dataRange.start}
          onChange={onChange}
          onCalendarClose={onCalendarClose}
          startDate={dataRange.start}
          endDate={dataRange.end}
          selectsRange
          minDate={new Date('2022-02-01')}
          maxDate={new Date('2022-04-20')}
          locale={ko}
        />
      </div>
      <div className={styles.arrow}>
        <ArrowDownIcon width=".75rem" height=".5rem" className={styles.arrow} />
      </div>
    </div>
  );
}

export default DatePicker;
