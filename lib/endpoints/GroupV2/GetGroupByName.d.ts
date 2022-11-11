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
import { GroupType } from '../../schemas/index.js';
import { GroupResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName} */
export declare type GetGroupByNameParams = {
    /** Exact name of the group to find. */
    groupName: string;
    /** Type of group to find. */
    groupType: GroupType;
};
/**
 * Get information about a specific group with the given name and type.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName}
*/
export declare function GetGroupByName(this: BungieClient, params: GetGroupByNameParams): Promise<BungieNetResponse<GroupResponse>>;
