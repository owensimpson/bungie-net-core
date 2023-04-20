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
import { BungieMembershipType } from '../../schemas';
import { DestinyAggregateActivityResults } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetDestinyAggregateActivityStats} */
export declare type GetDestinyAggregateActivityStatsParams = {
    /** The specific character whose activities should be returned. */
    characterId: string;
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Gets all activities the character has participated in together with aggregate
 * statistics for those activities.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetDestinyAggregateActivityStats}
*/
export declare function getDestinyAggregateActivityStats(this: AccessTokenObject | void, params: GetDestinyAggregateActivityStatsParams): Promise<BungieNetResponse<DestinyAggregateActivityResults>>;
