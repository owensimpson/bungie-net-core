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
import { DestinyItemTransferRequest } from '../../schemas/index.js';
/**
 * Transfer an item to/from your vault. You must have a valid Destiny account. You
 * must also pass BOTH a reference AND an instance ID if it's an instanced item.
 * itshappening.gif
 *
 * Wait at least 0.1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.TransferItem}
 */
export declare function transferItem(
    this: InstancedImport | AccessTokenObject | void,
    body: DestinyItemTransferRequest
): Promise<BungieNetResponse<number>>;
