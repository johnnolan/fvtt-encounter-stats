import {
  MODULE_ID,
  OPT_ENABLE,
  OPT_ENABLE_AOE_DAMAGE,
  OPT_REPORT_BUG,
  OPT_ENABLE_MONSTER_STATS,
  OPT_ENABLE_JOURNAL_NOTIFICATION,
  OPT_TOGGLE_CAMPAIGN_TRACKING,
  OPT_ENABLE_SIMPLE_CALENDAR_INTEGRATION,
} from "./Settings.js";
import { CreateFolder } from "./Folder.js";
import { SetupHooks } from "./Hooks.js";
import { ConfigPanel } from "./panels/ConfigPanel.js";

Hooks.once("init", async function () {
  game.settings.register(`${MODULE_ID}`, `${OPT_ENABLE}`, {
    name: game.i18n.format("FVTTEncounterStats.opt_enable_name"),
    hint: game.i18n.format("FVTTEncounterStats.opt_enable_hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(`${MODULE_ID}`, `${OPT_ENABLE_AOE_DAMAGE}`, {
    name: game.i18n.format("FVTTEncounterStats.enable_aoe_damage_name"),
    hint: game.i18n.format("FVTTEncounterStats.enable_aoe_damage_hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => window.location.reload(),
  });
  game.settings.registerMenu(`${MODULE_ID}`, `${OPT_REPORT_BUG}`, {
    name: game.i18n.format("FVTTEncounterStats.config.debug"),
    label: game.i18n.format("FVTTEncounterStats.config.debug"),
    icon: "fas fa-bug",
    scope: "world",
    type: ConfigPanel,
    restricted: true,
  });
  game.settings.register(`${MODULE_ID}`, `${OPT_ENABLE_MONSTER_STATS}`, {
    name: game.i18n.format("FVTTEncounterStats.enable_monster_stats_name"),
    hint: game.i18n.format("FVTTEncounterStats.enable_monster_stats_hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(`${MODULE_ID}`, `${OPT_ENABLE_JOURNAL_NOTIFICATION}`, {
    name: game.i18n.format("FVTTEncounterStats.opt_notification_created_name"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(`${MODULE_ID}`, `${OPT_TOGGLE_CAMPAIGN_TRACKING}`, {
    name: game.i18n.format(
      "FVTTEncounterStats.opt_toggle_campaign_tracking_name"
    ),
    hint: game.i18n.format(
      "FVTTEncounterStats.opt_toggle_campaign_tracking_hint"
    ),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(
    `${MODULE_ID}`,
    `${OPT_ENABLE_SIMPLE_CALENDAR_INTEGRATION}`,
    {
      name: game.i18n.format(
        "FVTTEncounterStats.opt_enable_simple_calendar_integration_name"
      ),
      hint: game.i18n.format(
        "FVTTEncounterStats.opt_enable_simple_calendar_integration_hint"
      ),
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
    }
  );
});

Hooks.once("ready", async function () {
  if (!game.settings.get(`${MODULE_ID}`, `${OPT_ENABLE}`)) {
    return;
  }

  if (game.user.isGM) {
    CreateFolder();
  }
  SetupHooks();
});
