/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { SearchResultOfContentItemPublicContract } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Content.SearchContentWithText} */
export declare type SearchContentWithTextParams = {
    /** Content type tag: Help, News, etc. Supply multiple ctypes separated by space. */
    ctype?: string;
    /** Page number for the search results, starting with page 1. */
    currentpage?: number;
    /** Not used. */
    head?: boolean;
    locale: string;
    /** Word or phrase for the search. */
    searchtext?: string;
    /** For analytics, hint at the part of the app that triggered the search. Optional. */
    source?: string;
    /** Tag used on the content to be searched. */
    tag?: string;
};
/**
 * Gets content based on querystring information passed in. Provides basic search
 * and text search capabilities.
 * @see {@link https://bungie-net.github.io/#Content.SearchContentWithText}
*/
export declare function searchContentWithText(this: InstancedImport | AccessTokenObject | void, params: SearchContentWithTextParams): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>>;
