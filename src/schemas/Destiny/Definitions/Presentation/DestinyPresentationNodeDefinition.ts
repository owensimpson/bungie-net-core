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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyPresentationNodeType } from '../../DestinyPresentationNodeType';
import { DestinyScope } from '../../DestinyScope';
import { DestinyPresentationNodeChildrenBlock } from './DestinyPresentationNodeChildrenBlock';
import { DestinyPresentationDisplayStyle } from '../../DestinyPresentationDisplayStyle';
import { DestinyPresentationScreenStyle } from '../../DestinyPresentationScreenStyle';
import { DestinyPresentationNodeRequirementsBlock } from './DestinyPresentationNodeRequirementsBlock';

/**
 * A PresentationNode is an entity that represents a logical grouping of other
 * entities visually/organizationally.
 *
 * For now, Presentation Nodes may contain the following... but it may be used for
 * more in the future:
 *
 * - Collectibles - Records (Or, as the public will call them, "Triumphs." Don't
 * ask me why we're overloading the term "Triumph", it still hurts me to think
 * about it) - Metrics (aka Stat Trackers) - Other Presentation Nodes, allowing a
 * tree of Presentation Nodes to be created
 *
 * Part of me wants to break these into conceptual definitions per entity being
 * collected, but the possibility of these different types being mixed in the same
 * UI and the possibility that it could actually be more useful to return the "bare
 * metal" presentation node concept has resulted in me deciding against that for
 * the time being.
 *
 * We'll see if I come to regret this as well.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Presentation.DestinyPresentationNodeDefinition}
 */
export interface DestinyPresentationNodeDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** The original icon for this presentation node, before we futzed with it. */
  readonly originalIcon: string;
  /**
   * Some presentation nodes are meant to be explicitly shown on the "root" or "entry"
   * screens for the feature to which they are related. You should use this icon
   * when showing them on such a view, if you have a similar "entry point" view in
   * your UI. If you don't have a UI, then I guess it doesn't matter either way does
   * it?
   */
  readonly rootViewIcon: string;
  readonly nodeType: DestinyPresentationNodeType;
  /**
   * Indicates whether this presentation node's state is determined on a per-
   * character or on an account-wide basis.
   */
  readonly scope: DestinyScope;
  /**
   * If this presentation node shows a related objective (for instance, if it tracks
   * the progress of its children), the objective being tracked is indicated here.
   * Mapped to DestinyObjectiveDefinition in the manifest.
   */
  readonly objectiveHash?: number;
  /**
   * If this presentation node has an associated "Record" that you can accomplish for
   * completing its children, this is the identifier of that Record. Mapped to
   * DestinyRecordDefinition in the manifest.
   */
  readonly completionRecordHash?: number;
  /** The child entities contained by this presentation node. */
  readonly children: DestinyPresentationNodeChildrenBlock;
  /** A hint for how to display this presentation node when it's shown in a list. */
  readonly displayStyle: DestinyPresentationDisplayStyle;
  /**
   * A hint for how to display this presentation node when it's shown in its own
   * detail screen.
   */
  readonly screenStyle: DestinyPresentationScreenStyle;
  /**
   * The requirements for being able to interact with this presentation node and its
   * children.
   */
  readonly requirements: DestinyPresentationNodeRequirementsBlock;
  /**
   * If this presentation node has children, but the game doesn't let you inspect the
   * details of those children, that is indicated here.
   */
  readonly disableChildSubscreenNavigation: boolean;
  readonly maxCategoryRecordScore: number;
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
