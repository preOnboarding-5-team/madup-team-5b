import { atom } from 'recoil';

const exampleState = atom<any>({
  key: 'exampleState',
  default: undefined,
});

export { exampleState };
