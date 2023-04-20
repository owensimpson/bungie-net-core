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
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { GroupApplicationListRequest } from '../../schemas';
import { EntityActionResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList} */
export declare type DenyPendingForListParams = {
    /** ID of the group. */
    groupId: string;
};
/**
 * Deny all of the pending users for the given group that match the passed-in .
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList}
*/
export declare function denyPendingForList(this: AccessTokenObject | void, params: DenyPendingForListParams, body: GroupApplicationListRequest): Promise<BungieNetResponse<EntityActionResult[]>>;
