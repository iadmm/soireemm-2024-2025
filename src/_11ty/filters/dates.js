import { format } from "date-fns";

/**
 * Display formatted date
 * @param {*} date - js date or string
 * @returns Formatted date for display
 */
function dateDisplay(date) {
  let jsDate = new Date(date);
  return format(jsDate, "dd.MM.yyyy");
}

function dateISO(date) {
  let jsDate = new Date(date);
  return format(jsDate, "yyyy-MM-dd");
}

export { dateDisplay, dateISO };
