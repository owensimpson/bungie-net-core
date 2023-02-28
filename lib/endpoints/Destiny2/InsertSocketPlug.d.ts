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
import { DestinyInsertPlugsActionRequest } from '../../schemas/index.js';
import { DestinyItemChangeResponse } from '../../schemas/index.js';
/**
 * Insert a plug into a socketed item. I know how it sounds, but I assure you it's
 * much more G-rated than you might be guessing. We haven't decided yet whether
 * this will be able to insert plugs that have side effects, but if we do it will
 * require special scope permission for an application attempting to do so. You
 * must have a valid Destiny Account, and either be in a social space, in orbit, or
 * offline. Request must include proof of permission for 'InsertPlugs' from the
 * account owner.
 *
 * Wait at least 0.5s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.InsertSocketPlug}
*/
export declare function insertSocketPlug(this: InstancedImport | AccessTokenObject | void, body: DestinyInsertPlugsActionRequest): Promise<BungieNetResponse<DestinyItemChangeResponse>>;
