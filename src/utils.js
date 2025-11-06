import dayjs from 'dayjs';

const DATE_FORMAT = 'DD MM YY';

const DateMap = new Map([
  ['MonthDay', 'MMM D'],
  ['DayMonthYear', 'DD/MM/YY'],
  ['HoursMinutes', 'HH:mm'],
  ['DateTime', 'DD/MM/YY HH:mm']
]);

const humanizeDueDate = function (dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

export { getRandomArrayElement, getRandomInteger, DateMap, humanizeDueDate, DATE_FORMAT };
