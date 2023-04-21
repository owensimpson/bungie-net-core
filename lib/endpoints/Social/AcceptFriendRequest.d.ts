/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
/** @see {@link https://bungie-net.github.io/#Social.AcceptFriendRequest} */
export declare type AcceptFriendRequestParams = {
    /** The membership id of the user you wish to accept. */
    membershipId: string;
};
/**
 * Accepts a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.AcceptFriendRequest}
*/
export declare function acceptFriendRequest(this: AccessTokenObject | void, params: AcceptFriendRequestParams): Promise<BungieNetResponse<boolean>>;
