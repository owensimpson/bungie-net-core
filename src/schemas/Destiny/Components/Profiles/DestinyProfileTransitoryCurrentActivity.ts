/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * If you are playing in an activity, this is some information about it.
 *
 * Note that we cannot guarantee any of this resembles what ends up in the PGCR in
 * any way. They are sourced by two entirely separate systems with their own logic,
 * and the one we source this data from should be considered non-authoritative in
 * comparison.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileTransitoryCurrentActivity}
 */
export interface DestinyProfileTransitoryCurrentActivity {
  /** When the activity started. */
  readonly startTime?: string;
  /**
   * If you're still in it but it "ended" (like when folks are dancing around the
   * loot after they beat a boss), this is when the activity ended.
   */
  readonly endTime?: string;
  /** This is what our non-authoritative source thought the score was. */
  readonly score: number;
  /** If you have human opponents, this is the highest opposing team's score. */
  readonly highestOpposingFactionScore: number;
  /** This is how many human or poorly crafted aimbot opponents you have. */
  readonly numberOfOpponents: number;
  /** This is how many human or poorly crafted aimbots are on your team. */
  readonly numberOfPlayers: number;
}
