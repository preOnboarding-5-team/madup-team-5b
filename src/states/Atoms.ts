import { atom } from 'recoil';
import { AdListData } from 'utils';

type TDataRangeState = {
  start: Date | null;
  end: Date | null;
};
const dateRangeState = atom<TDataRangeState>({
  key: 'dateRangeState',
  default: { start: new Date('2022-02-01'), end: new Date('2022-02-01') },
});

const selectedServiceState = atom({
  key: 'selectedServiceState',
  default: '매드업',
});

const serviceListState = atom({
  key: 'serviceListState',
  default: ['매드업'],
});

const firstTrendState = atom({
  key: 'firstTrendState',
  default: { name: 'ROAS', color: '#4fadf7' },
});

const secondTrendState = atom({
  key: 'secondTrendState',
  default: { name: '선택안함', color: '' },
});

const trendTermState = atom({
  key: 'trendTermState',
  default: '주간',
});

const adListStatusState = atom({
  key: 'adListState',
  default: '전체 광고',
});

const themeState = atom({
  key: 'themeState',
  default: 'light',
});

const adManagementItemState = atom({
  key: 'adManagementItemState',
  default: AdListData,
});

export {
  dateRangeState,
  selectedServiceState,
  serviceListState,
  firstTrendState,
  secondTrendState,
  trendTermState,
  adManagementItemState,
  themeState,
  adListStatusState,
};
