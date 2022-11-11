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
import { BungieNetResponse } from '../../util/server-response.js';
import { BungieClient } from '../../util/client.js';
import { DestinyItemActionRequest } from '../../schemas/index.js';
/**
 * Equip an item. You must have a valid Destiny Account, and either be in a social
 * space, in orbit, or offline.
 *
 * Wait at least 0.1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.EquipItem}
*/
export declare function EquipItem(this: BungieClient, body: DestinyItemActionRequest): Promise<BungieNetResponse<number>>;
