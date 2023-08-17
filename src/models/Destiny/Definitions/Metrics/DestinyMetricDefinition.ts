/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyPresentationNodeType } from '../../DestinyPresentationNodeType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Metrics.DestinyMetricDefinition} */

export interface DestinyMetricDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** Mapped to DestinyObjectiveDefinition in the manifest. */
  readonly trackingObjectiveHash: number;
  readonly lowerValueIsBetter: boolean;
  readonly presentationNodeType: DestinyPresentationNodeType;
  readonly traitIds: string[];
  /** Mapped to DestinyTraitDefinition in the manifest. */
  readonly traitHashes: number[];
  /**
   * A quick reference to presentation nodes that have this node as a child.
   * Presentation nodes can be parented under multiple parents. Mapped to
   * DestinyPresentationNodeDefinition in the manifest.
   */
  readonly parentNodeHashes: number[];
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
