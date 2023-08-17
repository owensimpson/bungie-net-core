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
import { DestinyScope } from '../../DestinyScope';
import { DestinyCollectibleAcquisitionBlock } from './DestinyCollectibleAcquisitionBlock';
import { DestinyCollectibleStateBlock } from './DestinyCollectibleStateBlock';
import { DestinyPresentationChildBlock } from '../Presentation/DestinyPresentationChildBlock';
import { DestinyPresentationNodeType } from '../../DestinyPresentationNodeType';

/**
 * Defines a
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Collectibles.DestinyCollectibleDefinition}
 */

export interface DestinyCollectibleDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * Indicates whether the state of this Collectible is determined on a per-character
   * or on an account-wide basis.
   */
  readonly scope: DestinyScope;
  /** A human readable string for a hint about how to acquire the item. */
  readonly sourceString: string;
  /**
   * This is a hash identifier we are building on the BNet side in an attempt to let
   * people group collectibles by similar sources.
   *
   * I can't promise that it's going to be 100% accurate, but if the designers were
   * consistent in assigning the same source strings to items with the same sources,
   * it *ought to* be. No promises though.
   *
   * This hash also doesn't relate to an actual definition, just to note: we've got
   * nothing useful other than the source string for this data.
   */
  readonly sourceHash?: number;
  /** Mapped to DestinyInventoryItemDefinition in the manifest. */
  readonly itemHash: number;
  readonly acquisitionInfo: DestinyCollectibleAcquisitionBlock;
  readonly stateInfo: DestinyCollectibleStateBlock;
  readonly presentationInfo: DestinyPresentationChildBlock;
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
