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

/**
 * As of Destiny 2, nodes can exist as part of "Exclusive Groups". These differ
 * from exclusive sets in that, within the group, many nodes can be activated. But
 * the act of activating any node in the group will cause "opposing" nodes (nodes
 * in groups that are not allowed to be activated at the same time as this group)
 * to deactivate.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentExclusiveGroup}
 */

export interface DestinyTalentExclusiveGroup {
  /**
   * The identifier for this exclusive group. Only guaranteed unique within the
   * talent grid, not globally.
   */
  readonly groupHash: number;
  /**
   * If this group has an associated piece of lore to show next to it, this will be
   * the identifier for that DestinyLoreDefinition. Mapped to DestinyLoreDefinition
   * in the manifest.
   */
  readonly loreHash?: number;
  /**
   * A quick reference of the talent nodes that are part of this group, by their
   * Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
   */
  readonly nodeHashes: number[];
  /**
   * A quick reference of Groups whose nodes will be deactivated if any node in this
   * group is activated.
   */
  readonly opposingGroupHashes: number[];
  /**
   * A quick reference of Nodes that will be deactivated if any node in this group is
   * activated, by their Talent Node hashes. (See DestinyTalentNodeDefinition.
   * nodeHash)
   */
  readonly opposingNodeHashes: number[];
}
