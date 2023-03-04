/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { DestinyMilestone } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetClanWeeklyRewardState} */
export declare type GetClanWeeklyRewardStateParams = {
    /** A valid group id of clan. */
    groupId: string;
};
/**
 * Returns information on the weekly clan rewards and if the clan has earned them
 * or not. Note that this will always report rewards as not redeemed.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanWeeklyRewardState}
 */
export declare function getClanWeeklyRewardState(
    this: InstancedImport | AccessTokenObject | void,
    params: GetClanWeeklyRewardStateParams
): Promise<BungieNetResponse<DestinyMilestone>>;
