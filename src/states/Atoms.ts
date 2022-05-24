import { atom } from 'recoil';

const adStatusSelectState = atom<string>({
  key: 'adSelectStatusState',
  default: '전체 광고',
});

export { adStatusSelectState };
