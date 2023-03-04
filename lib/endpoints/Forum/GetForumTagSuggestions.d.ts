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
import { TagResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Forum.GetForumTagSuggestions} */
export declare type GetForumTagSuggestionsParams = {
    /** The partial tag input to generate suggestions from. */
    partialtag?: string;
};
/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 * @see {@link https://bungie-net.github.io/#Forum.GetForumTagSuggestions}
 */
export declare function getForumTagSuggestions(
    this: InstancedImport | AccessTokenObject | void,
    params: GetForumTagSuggestionsParams
): Promise<BungieNetResponse<TagResponse[]>>;
