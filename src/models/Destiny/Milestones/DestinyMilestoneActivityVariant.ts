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

import { DestinyMilestoneActivityCompletionStatus } from './DestinyMilestoneActivityCompletionStatus';

/**
 * Represents custom data that we know about an individual variant of an activity.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneActivityVariant}
 */

export interface DestinyMilestoneActivityVariant {
  /**
   * The hash for the specific variant of the activity related to this milestone. You
   * can pull more detailed static info from the DestinyActivityDefinition, such as
   * difficulty level. Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
  /**
   * An OPTIONAL component: if it makes sense to talk about this activity variant in
   * terms of whether or not it has been completed or what progress you have made in
   * it, this will be returned. Otherwise, this will be NULL.
   */
  readonly completionStatus?: DestinyMilestoneActivityCompletionStatus;
  /**
   * The hash identifier of the most specific Activity Mode under which this activity
   * is played. This is useful for situations where the activity in question is - for
   * instance - a PVP map, but it's not clear what mode the PVP map is being played
   * under. If it's a playlist, this will be less specific: but hopefully useful in
   * some way. Mapped to DestinyActivityModeDefinition in the manifest.
   */
  readonly activityModeHash?: number;
  /**
   * The enumeration equivalent of the most specific Activity Mode under which this
   * activity is played.
   */
  readonly activityModeType?: number;
}
