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
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { ForumTopicsCategoryFiltersEnum } from '../../schemas';
import { CommunityContentSortMode } from '../../schemas';
import { PostSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#CommunityContent.GetCommunityContent} */
export type GetCommunityContentParams = {
  /** The type of media to get */
  mediaFilter: ForumTopicsCategoryFiltersEnum;
  /** Zero based page */
  page: number;
  /** The sort mode. */
  sort: CommunityContentSortMode;
};

/**
 * Returns community content.
 * @see {@link https://bungie-net.github.io/#CommunityContent.GetCommunityContent}
 */
export async function getCommunityContent(
  this: AccessTokenObject | void,
  params: GetCommunityContentParams
): Promise<BungieNetResponse<PostSearchResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<PostSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
