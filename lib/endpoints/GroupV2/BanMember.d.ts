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
import { BungieMembershipType } from '../../schemas/index.js';
import { GroupBanRequest } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.BanMember} */
export declare type BanMemberParams = {
    /** Group ID that has the member to ban. */
    groupId: string;
    /** Membership ID of the member to ban from the group. */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Bans the requested member from the requested group for the specified period of
 * time.
 * @see {@link https://bungie-net.github.io/#GroupV2.BanMember}
*/
export declare function banMember(this: InstancedImport | AccessTokenObject | void, params: BanMemberParams, body: GroupBanRequest): Promise<BungieNetResponse<number>>;
