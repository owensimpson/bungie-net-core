/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyPublicMilestone } from '../Destiny/Milestones/DestinyPublicMilestone';
import { DestinyMilestoneContent } from '../Destiny/Milestones/DestinyMilestoneContent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Trending.TrendingEntryDestinyRitual} */
export interface TrendingEntryDestinyRitual {
  readonly image: string;
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly dateStart?: string;
  readonly dateEnd?: string;
  /**
   * A destiny event does not necessarily have a related Milestone, but if it does
   * the details will be returned here.
   */
  readonly milestoneDetails: DestinyPublicMilestone;
  /**
   * A destiny event will not necessarily have milestone "custom content", but if it
   * does the details will be here.
   */
  readonly eventContent: DestinyMilestoneContent;
}
