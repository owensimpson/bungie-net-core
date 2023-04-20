/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyPlayer } from './DestinyPlayer';
import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyLeaderboardEntry} */
export interface DestinyLeaderboardEntry {
    /** Where this player ranks on the leaderboard. A value of 1 is the top rank. */
    readonly rank: number;
    /** Identity details of the player */
    readonly player: DestinyPlayer;
    /** ID of the player's best character for the reported stat. */
    readonly characterId: string;
    /** Value of the stat for this player */
    readonly value: DestinyHistoricalStatsValue;
}
