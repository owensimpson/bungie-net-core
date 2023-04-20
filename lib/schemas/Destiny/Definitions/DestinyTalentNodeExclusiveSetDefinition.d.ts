/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * The list of indexes into the Talent Grid's "nodes" property for nodes in this
 * exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeExclusiveSetDefinition}
*/
export interface DestinyTalentNodeExclusiveSetDefinition {
    /**
     * The list of node indexes for the exclusive set. Historically, these were indexes.
     * I would have liked to replace this with nodeHashes for consistency, but it's
     * way too late for that. (9:09 PM, he's right!)
    */
    readonly nodeIndexes: number[];
}
