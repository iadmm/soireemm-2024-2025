import { DateTime } from "luxon";

/**
 * Format date
 * @param {*} date - js date or string
 * @returns Formatted date: display
 */
function dateDisplay(date) {
  let jsDate = new Date(date);
  let dt = DateTime.fromJSDate(jsDate);
  return dt.toFormat("dd.LL.yyyy");
}

/**
 * Full date
 * @param {*} date - js date or string
 * @returns Formatted date: full
 */
function dateFull(date, locale = "en") {
  let jsDate = new Date(date);
  let dt = DateTime.fromJSDate(jsDate);
  return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL);
}

/**
 * ISO date
 * @param {*} date - js date or string
 * @returns Formatted date: ISO
 */
function dateISO(date) {
  let jsDate = new Date(date);
  let dt = DateTime.fromJSDate(jsDate);
  return dt.toISODate();
}

export { dateDisplay, dateISO, dateFull };
