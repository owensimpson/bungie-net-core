/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { SearchResultOfDestinyEntitySearchResultItem } from '../../SearchResultOfDestinyEntitySearchResultItem';
/**
 * The results of a search for Destiny content. This will be improved on over time,
 * I've been doing some experimenting to see what might be useful.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyEntitySearchResult}
*/
export interface DestinyEntitySearchResult {
    /**
     * A list of suggested words that might make for better search results, based on
     * the text searched for.
    */
    readonly suggestedWords: string[];
    /**
     * The items found that are matches/near matches for the searched-for term, sorted
     * by something vaguely resembling "relevance". Hopefully this will get better in
     * the future.
    */
    readonly results: SearchResultOfDestinyEntitySearchResultItem;
}
