export const ConvertDate = (startDate: string, endDate: string) => {
  const convertStartDate = new Date(
    [startDate.slice(0, 4), startDate.slice(4, 6), startDate.slice(6, 8)].join(
      '-'
    )
  );

  const convertEndDate = new Date(
    [endDate.slice(0, 4), endDate.slice(4, 6), endDate.slice(6, 8)].join('-')
  );

  const dateDays = Math.abs(
    (convertEndDate.getTime() - convertStartDate.getTime()) /
      (1000 * 3600 * 24) +
      1
  );

  const beforeStartDate = new Date(
    convertStartDate.setDate(convertStartDate.getDate() - dateDays)
  );

  const beforeEndDate = new Date(
    convertEndDate.setDate(convertEndDate.getDate() - dateDays)
  );

  const changeDateFormat = (date: Date) => {
    return `${date.getFullYear()}${
      date.getMonth() + 1 > 9
        ? (date.getMonth() + 1).toString()
        : `0${date.getMonth() + 1}`
    }${
      date.getDate() > 9
        ? date.getDate().toString()
        : `0${date.getDate().toString()}`
    }`;
  };

  return {
    start: changeDateFormat(beforeStartDate),
    end: changeDateFormat(beforeEndDate),
  };
};
