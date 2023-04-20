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
import { DestinyLoadoutActionRequest } from '../../schemas';
/**
 * Equip a loadout. You must have a valid Destiny Account, and either be in a
 * social space, in orbit, or offline.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.EquipLoadout}
*/
export declare function equipLoadout(this: AccessTokenObject | void, body: DestinyLoadoutActionRequest): Promise<BungieNetResponse<number>>;
