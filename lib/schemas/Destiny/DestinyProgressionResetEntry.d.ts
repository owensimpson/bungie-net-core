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
/**
 * Represents a season and the number of resets you had in that season.
 *
 * We do not necessarily - even for progressions with resets - track it over all
 * seasons. So be careful and check the season numbers being returned.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionResetEntry}
*/
export interface DestinyProgressionResetEntry {
    readonly season: number;
    readonly resets: number;
}
