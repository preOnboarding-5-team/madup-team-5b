export const convertMoney = (money: number) => {
  if (money < 1000) return money;
  const tmpNum = Math.round(money / 1000);
  if (money >= 100_000) {
    const tmpNum2 = Math.round(tmpNum / 10)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    if (tmpNum % 10 === 0) return `${tmpNum2}만`;
    return `${tmpNum2}만 ${tmpNum % 10}천`;
  }
  return `${tmpNum}천`;
};

export const arrangeValue = (value: number) =>
  value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

export const replaceValue = (content: string) => {
  if (content === 'web') return '웹광고';
  if (content === 'app') return '앱광고';
  if (content === 'active') return '진행중';
  if (content === 'ended') return '중단됨';
  return '';
};

export const convertDate = (date: string | null) =>
  date === '' ? '' : date?.split('T')[0];

export const checkEndDate = (date: string) => {
  if (date === undefined || date === '') return '';
  return `(${date})`;
};
