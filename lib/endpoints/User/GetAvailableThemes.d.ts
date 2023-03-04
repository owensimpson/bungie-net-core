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
import { UserTheme } from '../../schemas/index.js';
/**
 * Returns a list of all available user themes.
 * @see {@link https://bungie-net.github.io/#User.GetAvailableThemes}
 */
export declare function getAvailableThemes(
    this: InstancedImport | AccessTokenObject | void
): Promise<BungieNetResponse<UserTheme[]>>;
