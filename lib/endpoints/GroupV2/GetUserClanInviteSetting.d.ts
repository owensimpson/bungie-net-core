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
import { BungieMembershipType } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting} */
export declare type GetUserClanInviteSettingParams = {
    /** The Destiny membership type of the account we wish to access settings. */
    mType: BungieMembershipType;
};
/**
 * Gets the state of the user's clan invite preferences for a particular membership
 * type - true if they wish to be invited to clans, false otherwise.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting}
 */
export declare function getUserClanInviteSetting(
    this: InstancedImport | AccessTokenObject | void,
    params: GetUserClanInviteSettingParams
): Promise<BungieNetResponse<boolean>>;
