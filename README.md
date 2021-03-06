![](https://img.shields.io/badge/Foundry-v0.9.0-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/johnnolan/fvtt-encounter-stats/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ffvtt-encounter-stats&colorB=4aa94a)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ffvtt-encounter-stats%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/fvtt-encounter-stats/)
[![Foundry Hub Comments](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ffvtt-encounter-stats%2Fshield%2Fcomments)](https://www.foundryvtt-hub.com/package/fvtt-encounter-stats/)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/johnnolan/fvtt-encounter-stats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/johnnolan/fvtt-encounter-stats/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/johnnolan/fvtt-encounter-stats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/johnnolan/fvtt-encounter-stats/context:javascript)
[![CodeFactor](https://www.codefactor.io/repository/github/johnnolan/fvtt-encounter-stats/badge)](https://www.codefactor.io/repository/github/johnnolan/fvtt-encounter-stats)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X354DCG)

# FVTT Encounter Stats

# THIS MODULE IS NOT ARCHIVED

Due to home life, rapid changes in modules and the upcoming V10 Foundry update, I am unable to keep this module up to date.

If in the future, the ability to capture roll stats is a part of the core functionality then it will be easier to maintain.

Should someone want to fork and carry on supporting this repo, please feel free to take the source code.

Thank you to everyone I got to speak to and for your support while building it.

## Individual Encounter

This module is designed to capture your 

- Players attacks
- Damage
- HP
- Round Damage
- Top stats
- Enemy data
- Healing
- Kills
- Support Actions
- Battlefield Actions

## Campaign Stats

It also stores your 

- Natural 1s
- Natural 20s
- Kills
- Heals

throughout your campaign currently split by day recorded. **Do not delete the 2 entries for this, you will lose your data!**

All this is stored in a Journal Entry with a summary of their stats for each after you end the Encounter. There is also a copy of the raw JSON data from each battle should you wish to do more analysis of the recorded data.

You have an option for AOE attacks to either use the dice roll damage or record the damage taken to creatures within the template area.

This can then be viewed post battle to look upon for the Players to analyse and celebrate their attacks and as a DM, give you a better idea of how to build your Encounters in the future.

The current module works on rolls from the following list.

* [Better Rolls for 5e](https://github.com/RedReign/FoundryVTT-BetterRolls5e)
* [Beyond20](https://foundryvtt.com/packages/beyond20/)
* [midi-qol](https://gitlab.com/tposney/midi-qol)
* [MARS 5e - Moerills alternative rolling style for 5e](https://github.com/Moerill/fvtt-mars-5e)
* Vanilla Foundry

If you would like to see another module supported that isn't above then feel free to add it as a feature to the issues list in Github.

[![Example](https://raw.githubusercontent.com/johnnolan/fvtt-encounter-stats/main/images/example.jpg)](https://raw.githubusercontent.com/johnnolan/fvtt-encounter-stats/main/images/example.jpg)


## Simple Calendar Integration

The module optionally supports [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar) dates for naming Journal entries and tracking Campaign Stats. This is enabled by default if the module is installed and can be turned off to use real dates from the settings.

## Installation

To install, follow these instructions:

- Inside Foundry, select the Game Modules tab in the Configuration and Setup menu.
- Click the Install Module button and enter the following URL: `https://github.com/johnnolan/fvtt-encounter-stats/releases/latest/download/module.json`
- Click Install and wait for installation to complete.

Alternatively, use the integrated module manager in Foundry.

Foundry modules page: [https://foundryvtt.com/packages/fvtt-encounter-stats](https://foundryvtt.com/packages/fvtt-encounter-stats)

## Dependencies

* `dnd5e` game system

## Contact

For issues, please raise a bug in Github and use the Report a Bug option in the settings to get debug information to help me reproduce the issue easily on my computer. I will try and fix things depending on fatherhood responsibilities [https://github.com/johnnolan/fvtt-encounter-stats/issues](https://github.com/johnnolan/fvtt-encounter-stats/issues)

You can also find me lurking around on the Foundry VTT Discord [https://discord.gg/foundryvtt](https://discord.gg/foundryvtt). My Discord Tag is `JB#2780`.
