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
import { GroupsForMemberFilter } from '../../schemas/index.js';
import { GroupType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { GetGroupsForMemberResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember} */
export declare type GetGroupsForMemberParams = {
    /** Filter apply to list of joined groups. */
    filter: GroupsForMemberFilter;
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Get information about the groups that a given member has joined.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
*/
export declare function getGroupsForMember(this: InstancedImport | AccessTokenObject | void, params: GetGroupsForMemberParams): Promise<BungieNetResponse<GetGroupsForMemberResponse>>;
