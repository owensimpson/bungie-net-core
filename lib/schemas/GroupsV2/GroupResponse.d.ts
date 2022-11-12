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
import { GroupV2 } from './GroupV2';
import { GroupMember } from './GroupMember';
import { GroupAllianceStatus } from './GroupAllianceStatus';
import { BungieMembershipType } from '../BungieMembershipType';
import { GroupPotentialMember } from './GroupPotentialMember';
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupResponse} */
export interface GroupResponse {
    readonly detail: GroupV2;
    readonly founder: GroupMember;
    readonly alliedIds: string[];
    readonly parentGroup: GroupV2;
    readonly allianceStatus: GroupAllianceStatus;
    readonly groupJoinInviteCount: number;
    /**
     * A convenience property that indicates if every membership you (the current user)
     * have that is a part of this group are part of an account that is considered
     * inactive - for example, overridden accounts in Cross Save.
    */
    readonly currentUserMembershipsInactiveForDestiny: boolean;
    /**
     * This property will be populated if the authenticated user is a member of the
     * group. Note that because of account linking, a user can sometimes be part of a
     * clan more than once. As such, this returns the highest member type available.
    */
    readonly currentUserMemberMap: {
        [key in BungieMembershipType]: GroupMember;
    };
    /**
     * This property will be populated if the authenticated user is an applicant or has
     * an outstanding invitation to join. Note that because of account linking, a user
     * can sometimes be part of a clan more than once.
    */
    readonly currentUserPotentialMemberMap: {
        [key in BungieMembershipType]: GroupPotentialMember;
    };
}
