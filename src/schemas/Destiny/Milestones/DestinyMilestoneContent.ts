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

import { DestinyMilestoneContentItemCategory } from './DestinyMilestoneContentItemCategory'

/**
 * Represents localized, extended content related to Milestones. This is
 * intentionally returned by a separate endpoint and not with Character-level
 * Milestone data because we do not put localized data into standard Destiny
 * responses, both for brevity of response and for caching purposes. If you really
 * need this data, hit the Milestone Content endpoint.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneContent}
*/
export interface DestinyMilestoneContent {
  /** The "About this Milestone" text from the Firehose. */
  readonly about: string;
  /** The Current Status of the Milestone, as driven by the Firehose. */
  readonly status: string;
  /** A list of tips, provided by the Firehose. */
  readonly tips: string[];
  /**
   * If DPS has defined items related to this Milestone, they can categorize those
   * items in the Firehose. That data will then be returned as item categories here.
  */
  readonly itemCategories: DestinyMilestoneContentItemCategory[];
}
