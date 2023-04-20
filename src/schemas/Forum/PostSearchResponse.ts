/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { PostResponse } from './PostResponse';
import { GeneralUser } from '../User/GeneralUser';
import { GroupResponse } from '../GroupsV2/GroupResponse';
import { TagResponse } from '../Tags/Models/Contracts/TagResponse';
import { PollResponse } from './PollResponse';
import { ForumRecruitmentDetail } from './ForumRecruitmentDetail';
import { PagedQuery } from '../Queries/PagedQuery';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Forum.PostSearchResponse} */
export interface PostSearchResponse {
  readonly relatedPosts: PostResponse[];
  readonly authors: GeneralUser[];
  readonly groups: GroupResponse[];
  readonly searchedTags: TagResponse[];
  readonly polls: PollResponse[];
  readonly recruitmentDetails: ForumRecruitmentDetail[];
  readonly availablePages?: number;
  readonly results: PostResponse[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
