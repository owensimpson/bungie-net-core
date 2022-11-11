/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { BungieClient } from '../../util/client.js';
import { DestinyPostGameCarnageReportData } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport} */
export declare type GetPostGameCarnageReportParams = {
    /** The ID of the activity whose PGCR is requested. */
    activityId: string;
};
/**
 * Gets the available post game carnage report for the activity ID.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport}
*/
export declare function GetPostGameCarnageReport(this: BungieClient, params: GetPostGameCarnageReportParams): Promise<BungieNetResponse<DestinyPostGameCarnageReportData>>;
