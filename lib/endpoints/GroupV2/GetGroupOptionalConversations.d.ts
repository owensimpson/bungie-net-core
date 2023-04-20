/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { GroupOptionalConversation } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetGroupOptionalConversations} */
export declare type GetGroupOptionalConversationsParams = {
    /** Requested group's id. */
    groupId: string;
};
/**
 * Gets a list of available optional conversation channels and their settings.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupOptionalConversations}
*/
export declare function getGroupOptionalConversations(this: AccessTokenObject | void, params: GetGroupOptionalConversationsParams): Promise<BungieNetResponse<GroupOptionalConversation[]>>;
