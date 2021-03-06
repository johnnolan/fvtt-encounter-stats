import {
  MODULE_ID,
  OPT_ENABLE_SIMPLE_CALENDAR_INTEGRATION,
} from "../Settings.js";

export default class SimpleCalendarIntegration {
  constructor() {}

  IsEnabled() {
    return (
      window.SimpleCalendar !== undefined &&
      game.settings.get(
        `${MODULE_ID}`,
        `${OPT_ENABLE_SIMPLE_CALENDAR_INTEGRATION}`
      )
    );
  }

  GetCurrentDate() {
    return {
      day: window.SimpleCalendar.api.getCurrentDay().name,
      month: window.SimpleCalendar.api.getCurrentMonth().name,
      year: `${
        window.SimpleCalendar.api.getCurrentYear().numericRepresentation
      } ${window.SimpleCalendar.api.getCurrentYear().postfix}`,
    };
  }

  GetCurrentDateToString() {
    const d = this.GetCurrentDate();
    return `${d.day} ${d.month} ${d.year}`;
  }
}
