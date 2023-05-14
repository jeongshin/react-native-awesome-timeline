export function toPxUnit(size: number | string, parent: number): number {
  if (typeof size === 'string') {
    const result = Number(
      (Number(size.replace('%', '')) * 0.01 * parent).toFixed(2),
    );
    if (Number.isNaN(result))
      throw new Error(
        `[react-native-awesome-timeline] ${size} is not valid. please use number in px or string including %`,
      );
    return result;
  }
  return size;
}

export function getAllDates(startDate: Date, endDate: Date) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const dates = [];

  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    dates.push(new Date(date));
  }

  return dates;
}
