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
import { GroupApplicationRequest } from '../../schemas/index.js';
import { EntityActionResult } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.ApproveAllPending} */
export declare type ApproveAllPendingParams = {
    /** ID of the group. */
    groupId: string;
};
/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApproveAllPending}
 */
export declare function approveAllPending(
    this: InstancedImport | AccessTokenObject | void,
    params: ApproveAllPendingParams,
    body: GroupApplicationRequest
): Promise<BungieNetResponse<EntityActionResult[]>>;
