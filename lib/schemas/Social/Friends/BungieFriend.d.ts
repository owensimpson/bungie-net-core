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
import { BungieMembershipType } from '../../BungieMembershipType';
import { PresenceStatus } from './PresenceStatus';
import { PresenceOnlineStateFlags } from './PresenceOnlineStateFlags';
import { FriendRelationshipState } from './FriendRelationshipState';
import { GeneralUser } from '../../User/GeneralUser';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Social.Friends.BungieFriend} */
export interface BungieFriend {
    readonly lastSeenAsMembershipId: string;
    readonly lastSeenAsBungieMembershipType: BungieMembershipType;
    readonly bungieGlobalDisplayName: string;
    readonly bungieGlobalDisplayNameCode?: number;
    readonly onlineStatus: PresenceStatus;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly onlineTitle: PresenceOnlineStateFlags;
    readonly relationship: FriendRelationshipState;
    readonly bungieNetUser: GeneralUser;
}
