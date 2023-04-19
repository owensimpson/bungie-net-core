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

import { DestinyPresentationNodeState } from '../../DestinyPresentationNodeState'
import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress'

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Presentation.DestinyPresentationNodeComponent} */
export interface DestinyPresentationNodeComponent {
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
  */
  readonly state: DestinyPresentationNodeState;
  /**
   * An optional property: presentation nodes MAY have objectives, which can be used
   * to infer more human readable data about the progress. However, progressValue and
   * completionValue ought to be considered the canonical values for progress on
   * Progression Nodes.
  */
  readonly objective: DestinyObjectiveProgress;
  /**
   * How much of the presentation node is considered to be completed so far by the
   * given character/profile.
  */
  readonly progressValue: number;
  /** The value at which the presentation node is considered to be completed. */
  readonly completionValue: number;
  /**
   * If available, this is the current score for the record category that this node
   * represents.
  */
  readonly recordCategoryScore?: number;
}
