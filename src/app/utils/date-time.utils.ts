import { DatePipe } from '@angular/common';

export function getLocaleTime() {
  const now = Date.now();
  const pipe = new DatePipe('en-IL');
  return pipe.transform(now, 'short');
}

function getCurrentHour() {
  const dateTime = getLocaleTime();
  const time = dateTime.slice(dateTime.indexOf(',') + 1).trim();
  return parseInt(time.slice(0, time.indexOf(':')), 10);
}

function isAM() {
  const dateTime = getLocaleTime();
  return dateTime.indexOf('AM') !== -1;
}

function isPM() {
  const dateTime = getLocaleTime();
  return dateTime.indexOf('PM') !== -1;
}

export function isMorning() {
  const hour = getCurrentHour();
  return isAM() ? hour >= 5 && hour < 12 : false;
}

export function isAfternoon() {
  const hour = getCurrentHour();
  return isPM() ? hour >= 12 && hour <= 17 : false;
}

export function isEvening() {
  const hour = getCurrentHour();
  return isPM() ? hour > 17 && hour <= 21 : false;
}

export function isNigth() {
  const hour = getCurrentHour();
  const isBeforeMidnigth = isPM() ? hour > 21 : false;
  const isAfterMidnigth = isAM() ? hour < 5 : false;
  return isBeforeMidnigth || isAfterMidnigth;
}
