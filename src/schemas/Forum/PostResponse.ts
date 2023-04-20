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

import { ForumMediaType } from './ForumMediaType';
import { ForumPostPopularity } from './ForumPostPopularity';
import { IgnoreResponse } from '../Ignores/IgnoreResponse';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Forum.PostResponse} */
export interface PostResponse {
  readonly lastReplyTimestamp: string;
  readonly IsPinned: boolean;
  readonly urlMediaType: ForumMediaType;
  readonly thumbnail: string;
  readonly popularity: ForumPostPopularity;
  readonly isActive: boolean;
  readonly isAnnouncement: boolean;
  readonly userRating: number;
  readonly userHasRated: boolean;
  readonly userHasMutedPost: boolean;
  readonly latestReplyPostId: string;
  readonly latestReplyAuthorId: string;
  readonly ignoreStatus: IgnoreResponse;
  readonly locale: string;
}
