import { format } from 'date-fns';
import { selector } from 'recoil';
import { dateRangeState, themeState } from './Atoms';

const refinedDateRangeState = selector({
  key: 'refinedDateRangeState',
  get: ({ get }) => {
    const dateRange = get(dateRangeState);

    const refineDate = (date: Date | null) => {
      if (!date) return null;
      const refined = format(date, 'yyyyMMdd');
      return refined;
    };

    const start = refineDate(dateRange.start);
    const end = refineDate(dateRange.end);

    return [start, end];
  },
});

const getTheme = selector({
  key: 'getTheme',
  get: ({ get }) => {
    const theme = get(themeState);
    return theme;
  },
});

export { refinedDateRangeState, getTheme };
