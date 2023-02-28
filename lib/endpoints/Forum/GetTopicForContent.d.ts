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
/** @see {@link https://bungie-net.github.io/#Forum.GetTopicForContent} */
export declare type GetTopicForContentParams = {
    contentId: string;
};
/**
 * Gets the post Id for the given content item's comments, if it exists.
 * @see {@link https://bungie-net.github.io/#Forum.GetTopicForContent}
*/
export declare function getTopicForContent(this: InstancedImport | AccessTokenObject | void, params: GetTopicForContentParams): Promise<BungieNetResponse<string>>;
