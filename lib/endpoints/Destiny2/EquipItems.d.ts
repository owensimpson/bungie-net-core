/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { DestinyItemSetActionRequest } from '../../schemas/index.js';
import { DestinyEquipItemResults } from '../../schemas/index.js';
/**
 * Equip a list of items by itemInstanceIds. You must have a valid Destiny Account,
 * and either be in a social space, in orbit, or offline. Any items not found on
 * your character will be ignored.
 *
 * Wait at least 0.1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.EquipItems}
*/
export declare function equipItems(this: InstancedImport | AccessTokenObject | void, body: DestinyItemSetActionRequest): Promise<BungieNetResponse<DestinyEquipItemResults>>;
