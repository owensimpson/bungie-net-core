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
import { PartnerRewardHistoryResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory} */
export declare type GetPartnerRewardHistoryParams = {
    /** The partner application identifier. */
    partnerApplicationId: number;
    /** The bungie.net user to return reward history for. */
    targetBnetMembershipId: string;
};
/**
 * Returns the partner rewards history of the targeted user, both partner offers
 * and Twitch drops.
 * @see {@link https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory}
*/
export declare function getPartnerRewardHistory(this: AccessTokenObject | void, params: GetPartnerRewardHistoryParams): Promise<BungieNetResponse<PartnerRewardHistoryResponse>>;
