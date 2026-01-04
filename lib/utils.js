import { holidays } from "./holidays.js";

export function getHoliday(date) {
  if (!date) date = new Date();

  const datakey = date.toISOString().slice(5, 10);
  let template = holidays[datakey];
  if (!template) return "";
  const title =
    template?.title
      ?.replace("{year}", date.getFullYear())
        ?.replace("{nextyear}", date.getFullYear() + 1)
        ?.replace("{lastyear}", date.getFullYear() - 1) ?? "error";
  const description =
    template?.description
      ?.replace("{year}", date.getFullYear())
        ?.replace("{nextyear}", date.getFullYear() + 1)
        ?.replace("{lastyear}", date.getFullYear() - 1) ?? "error";

  return { title, description };
}
