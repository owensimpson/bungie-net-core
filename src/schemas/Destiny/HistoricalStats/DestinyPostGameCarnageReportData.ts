/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyHistoricalStatsActivity } from './DestinyHistoricalStatsActivity'
import { DestinyPostGameCarnageReportEntry } from './DestinyPostGameCarnageReportEntry'
import { DestinyPostGameCarnageReportTeamEntry } from './DestinyPostGameCarnageReportTeamEntry'

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyPostGameCarnageReportData} */
export interface DestinyPostGameCarnageReportData {
  /** Date and time for the activity. */
  readonly period: string;
  /**
   * If this activity has "phases", this is the phase at which the activity was
   * started. This value is only valid for activities before the Beyond Light
   * expansion shipped. Subsequent activities will not have a valid value here.
  */
  readonly startingPhaseIndex?: number;
  /**
   * True if the activity was started from the beginning, if that information is
   * available and the activity was played post Witch Queen release.
  */
  readonly activityWasStartedFromBeginning?: boolean;
  /** Details about the activity. */
  readonly activityDetails: DestinyHistoricalStatsActivity;
  /** Collection of players and their data for this activity. */
  readonly entries: DestinyPostGameCarnageReportEntry[];
  /** Collection of stats for the player in this activity. */
  readonly teams: DestinyPostGameCarnageReportTeamEntry[];
}
