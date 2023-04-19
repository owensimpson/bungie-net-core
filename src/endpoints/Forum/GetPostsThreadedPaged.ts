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
//

import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { ForumPostSortEnum } from '../../schemas'
import { PostSearchResponse } from '../../schemas'
/** @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPaged} */
export type GetPostsThreadedPagedParams = {
  getParentPost: boolean;
  page: number;
  pageSize: number;
  parentPostId: string;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
}

/**
 * Returns a thread of posts at the given parent, optionally returning replies to
 * those posts as well as the original parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPaged}
*/
export async function getPostsThreadedPaged(this: InstancedImport | AccessTokenObject | void, params: GetPostsThreadedPagedParams): Promise<BungieNetResponse<PostSearchResponse>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<PostSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`  ,
      params: {
        showbanned: params.showbanned
      }  
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
