/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * Guided Game information for this activity.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityGuidedBlockDefinition}
 */
export interface DestinyActivityGuidedBlockDefinition {
    /** The maximum amount of people that can be in the waiting lobby. */
    readonly guidedMaxLobbySize: number;
    /** The minimum amount of people that can be in the waiting lobby. */
    readonly guidedMinLobbySize: number;
    /**
     * If -1, the guided group cannot be disbanded. Otherwise, take the total # of
     * players in the activity and subtract this number: that is the total # of votes
     * needed for the guided group to disband.
     */
    readonly guidedDisbandCount: number;
}
