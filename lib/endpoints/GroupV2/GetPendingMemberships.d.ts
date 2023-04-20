/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { SearchResultOfGroupMemberApplication } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetPendingMemberships} */
export declare type GetPendingMembershipsParams = {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** ID of the group. */
    groupId: string;
};
/**
 * Get the list of users who are awaiting a decision on their application to join a
 * given group. Modified to include application info.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPendingMemberships}
*/
export declare function getPendingMemberships(this: AccessTokenObject | void, params: GetPendingMembershipsParams): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>>;
