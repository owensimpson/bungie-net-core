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
import { AccessTokenObject } from '../../util/client';
import { ForumPostSortEnum } from '../../schemas';
import { PostSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild} */
export declare type GetPostsThreadedPagedFromChildParams = {
    childPostId: string;
    page: number;
    pageSize: number;
    replySize: number;
    rootThreadMode: boolean;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
    sortMode: ForumPostSortEnum;
};
/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild}
*/
export declare function getPostsThreadedPagedFromChild(this: AccessTokenObject | void, params: GetPostsThreadedPagedFromChildParams): Promise<BungieNetResponse<PostSearchResponse>>;
