/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { GroupType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { GroupMembershipSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder} */
export declare type RecoverGroupForFounderParams = {
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 * @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder}
 */
export declare function recoverGroupForFounder(
    this: InstancedImport | AccessTokenObject | void,
    params: RecoverGroupForFounderParams
): Promise<BungieNetResponse<GroupMembershipSearchResponse>>;
