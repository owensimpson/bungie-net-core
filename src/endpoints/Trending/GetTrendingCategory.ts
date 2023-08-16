/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { SearchResultOfTrendingEntry } from '../../models/SearchResultOfTrendingEntry';

/**
 * Returns paginated lists of trending items for a category.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory}
 */
export async function getTrendingCategory(
  params: {
    /** The ID of the category for whom you want additional results. */
    categoryId: string;
    /** The page # of results to return. */
    pageNumber: number;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfTrendingEntry>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
  );

  return client.fetch({ method: 'GET', url });
}
