/**
 * Rounds a given date to the nearest 5-minute interval.
 * @param {Date} date - The date to round.
 * @returns {Date} - The rounded date.
 */

export const roundToNearest5Minutes = (date) => {
  const minute = Math.ceil(date.getMinutes() / 5) * 5;
  date.setMinutes(minute);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

/**
 * Sets the max time to 11:55 PM today.
 * @returns {Date} - The max time set to 11:55 PM.
 */

export const getMaxTime = () => {
  const maxTime = new Date();
  maxTime.setHours(23, 55, 0, 0); // Set max time to 11:55 PM
  return maxTime;
};
