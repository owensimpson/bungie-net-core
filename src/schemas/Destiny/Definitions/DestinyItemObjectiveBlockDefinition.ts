/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyObjectiveDisplayProperties } from './DestinyObjectiveDisplayProperties';

/**
 * An item can have objectives on it. In practice, these are the exclusive purview
 * of "Quest Step" items: DestinyInventoryItemDefinitions that represent a specific
 * step in a Quest.
 *
 * Quest steps have 1:M objectives that we end up processing and returning in live
 * data as DestinyQuestStatus data, and other useful information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemObjectiveBlockDefinition}
 */
export interface DestinyItemObjectiveBlockDefinition {
  /**
   * The hashes to Objectives (DestinyObjectiveDefinition) that are part of this
   * Quest Step, in the order that they should be rendered. Mapped to
   * DestinyObjectiveDefinition in the manifest.
   */
  readonly objectiveHashes: number[];
  /**
   * For every entry in objectiveHashes, there is a corresponding entry in this array
   * at the same index. If the objective is meant to be associated with a specific
   * DestinyActivityDefinition, there will be a valid hash at that index. Otherwise,
   * it will be invalid (0).
   *
   * Rendered somewhat obsolete by perObjectiveDisplayProperties, which currently has
   * much the same information but may end up with more info in the future. Mapped to
   * DestinyActivityDefinition in the manifest.
   */
  readonly displayActivityHashes: number[];
  /**
   * If True, all objectives must be completed for the step to be completed. If False,
   * any one objective can be completed for the step to be completed.
   */
  readonly requireFullObjectiveCompletion: boolean;
  /**
   * The hash for the DestinyInventoryItemDefinition representing the Quest to which
   * this Quest Step belongs. Mapped to DestinyInventoryItemDefinition in the
   * manifest.
   */
  readonly questlineItemHash: number;
  /** The localized string for narrative text related to this quest step, if any. */
  readonly narrative: string;
  /**
   * The localized string describing an action to be performed associated with the
   * objectives, if any.
   */
  readonly objectiveVerbName: string;
  /**
   * The identifier for the type of quest being performed, if any. Not associated
   * with any fixed definition, yet.
   */
  readonly questTypeIdentifier: string;
  /**
   * A hashed value for the questTypeIdentifier, because apparently I like to be
   * redundant.
   */
  readonly questTypeHash: number;
  /** One entry per Objective on the item, it will have related display information. */
  readonly perObjectiveDisplayProperties: DestinyObjectiveDisplayProperties[];
  readonly displayAsStatTracker: boolean;
}
