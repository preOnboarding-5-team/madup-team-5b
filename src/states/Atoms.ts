import { atom } from 'recoil';

type TDataRangeState = {
  start: Date | null;
  end: Date | null;
};
const dateRangeState = atom<TDataRangeState>({
  key: 'dateRangeState',
  default: { start: new Date(), end: new Date() },
});

export { dateRangeState };
