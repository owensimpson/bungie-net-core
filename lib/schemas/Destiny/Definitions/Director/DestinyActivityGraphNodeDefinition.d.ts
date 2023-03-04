/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyPositionDefinition } from '../Common/DestinyPositionDefinition';
import { DestinyActivityGraphNodeFeaturingStateDefinition } from './DestinyActivityGraphNodeFeaturingStateDefinition';
import { DestinyActivityGraphNodeActivityDefinition } from './DestinyActivityGraphNodeActivityDefinition';
import { DestinyActivityGraphNodeStateEntry } from './DestinyActivityGraphNodeStateEntry';
/**
 * This is the position and other data related to nodes in the activity graph that
 * you can click to launch activities. An Activity Graph node will only have one
 * active Activity at a time, which will determine the activity to be launched (and,
 * unless overrideDisplay information is provided, will also determine the tooltip
 * and other UI related to the node)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphNodeDefinition}
 */
export interface DestinyActivityGraphNodeDefinition {
    /**
     * An identifier for the Activity Graph Node, only guaranteed to be unique within
     * its parent Activity Graph.
     */
    readonly nodeId: number;
    /**
     * The node *may* have display properties that override the active Activity's
     * display properties.
     */
    readonly overrideDisplay: DestinyDisplayPropertiesDefinition;
    /** The position on the map for this node. */
    readonly position: DestinyPositionDefinition;
    /**
     * The node may have various visual accents placed on it, or styles applied. These
     * are the list of possible styles that the Node can have. The game iterates
     * through each, looking for the first one that passes a check of the required game/
     * character/account state in order to show that style, and then renders the node
     * in that style.
     */
    readonly featuringStates: DestinyActivityGraphNodeFeaturingStateDefinition[];
    /**
     * The node may have various possible activities that could be active for it,
     * however only one may be active at a time. See the
     * DestinyActivityGraphNodeActivityDefinition for details.
     */
    readonly activities: DestinyActivityGraphNodeActivityDefinition[];
    /**
     * Represents possible states that the graph node can be in. These are combined
     * with some checking that happens in the game client and server to determine which
     * state is actually active at any given time.
     */
    readonly states: DestinyActivityGraphNodeStateEntry[];
}
