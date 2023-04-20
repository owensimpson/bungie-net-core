/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieMembershipType } from '../../schemas';
import { DestinyActivityModeType } from '../../schemas';
import { DestinyActivityHistoryResults } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetActivityHistory} */
export declare type GetActivityHistoryParams = {
    /** The id of the character to retrieve. */
    characterId: string;
    /** Number of rows to return */
    count?: number;
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
    /**
     * A filter for the activity mode to be returned. None returns all activities. See
     * the documentation for DestinyActivityModeType for valid values, and pass in
     * string representation.
    */
    mode?: DestinyActivityModeType;
    /** Page number to return, starting with 0. */
    page?: number;
};
/**
 * Gets activity history stats for indicated character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetActivityHistory}
*/
export declare function getActivityHistory(this: AccessTokenObject | void, params: GetActivityHistoryParams): Promise<BungieNetResponse<DestinyActivityHistoryResults>>;
