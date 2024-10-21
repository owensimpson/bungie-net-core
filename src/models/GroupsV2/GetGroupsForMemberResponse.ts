/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { GroupMembership } from './GroupMembership';
import { PagedQuery } from '../Queries/PagedQuery';

/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GetGroupsForMemberResponse} */

export interface GetGroupsForMemberResponse {
  /**
   * A convenience property that indicates if every membership this user has that is
   * a part of this group are part of an account that is considered inactive - for
   * example, overridden accounts in Cross Save.
   *
   * The key is the Group ID for the group being checked, and the value is true if
   * the users' memberships for that group are all inactive.
   */
  readonly areAllMembershipsInactive: { [key: string]: boolean };
  readonly results: GroupMembership[];
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
