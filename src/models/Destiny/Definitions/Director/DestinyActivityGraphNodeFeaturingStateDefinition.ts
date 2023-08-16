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

import { ActivityGraphNodeHighlightType } from '../../../../enums/Destiny/ActivityGraphNodeHighlightType';

/**
 * Nodes can have different visual states. This object represents a single visual
 * state ("highlight type") that a node can be in, and the unlock expression
 * condition to determine whether it should be set.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphNodeFeaturingStateDefinition}
 */

export interface DestinyActivityGraphNodeFeaturingStateDefinition {
  /**
   * The node can be highlighted in a variety of ways - the game iterates through
   * these and finds the first FeaturingState that is valid at the present moment
   * given the Game, Account, and Character state, and renders the node in that state.
   * See the ActivityGraphNodeHighlightType enum for possible values.
   */
  readonly highlightType: ActivityGraphNodeHighlightType;
}
