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
import { BungieMembershipType } from '../../schemas';
import { BungieRewardDisplay } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Tokens.GetBungieRewardsForPlatformUser} */
export declare type GetBungieRewardsForPlatformUserParams = {
    /**
     * users platform membershipId for requested user rewards. If not self, elevated
     * permissions are required.
    */
    membershipId: string;
    /** The target Destiny 2 membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Returns the bungie rewards for the targeted user when a platform membership Id
 * and Type are used.
 * @see {@link https://bungie-net.github.io/#Tokens.GetBungieRewardsForPlatformUser}
*/
export declare function getBungieRewardsForPlatformUser(this: AccessTokenObject | void, params: GetBungieRewardsForPlatformUserParams): Promise<BungieNetResponse<{
    [key: string]: BungieRewardDisplay;
}>>;
