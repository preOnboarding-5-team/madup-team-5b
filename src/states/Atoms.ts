import { atom } from 'recoil';

const adStatusSelectState = atom<string>({
  key: 'adSelectStatusState',
  default: '전체 광고',
});

export { adStatusSelectState };
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

const trendFirstState = atom({
  key: 'TrendFirstState',
  default: 'ROAS',
});

const trendSecondState = atom({
  key: 'TrendSecondState',
  default: '클릭수',
});

const trendTermState = atom({
  key: 'trendTermState',
  default: '주간',
});

const adListStatusState = atom({
  key: 'adListState',
  default: '전체 광고',
});

export {
  dateRangeState,
  selectedServiceState,
  serviceListState,
  trendFirstState,
  trendSecondState,
  trendTermState,
  adListStatusState,
};
