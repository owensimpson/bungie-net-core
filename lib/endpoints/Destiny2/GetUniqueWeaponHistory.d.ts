/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieMembershipType } from '../../schemas';
import { DestinyHistoricalWeaponStatsData } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory} */
export declare type GetUniqueWeaponHistoryParams = {
    /** The id of the character to retrieve. */
    characterId: string;
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Gets details about unique weapon usage, including all exotic weapons.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory}
*/
export declare function getUniqueWeaponHistory(this: AccessTokenObject | void, params: GetUniqueWeaponHistoryParams): Promise<BungieNetResponse<DestinyHistoricalWeaponStatsData>>;
