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
//

/**
 * Inventory Items can reward progression when actions are performed on them. A
 * common example of this in Destiny 1 was Bounties, which would reward Experience
 * on your Character and the like when you completed the bounty.
 *
 * Note that this maps to a DestinyProgressionMappingDefinition, and *not* a
 * DestinyProgressionDefinition directly. This is apparently so that multiple
 * progressions can be granted progression points/experience at the same time.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyProgressionRewardDefinition}
 */
export interface DestinyProgressionRewardDefinition {
  /**
   * The hash identifier of the DestinyProgressionMappingDefinition that contains the
   * progressions for which experience should be applied. Mapped to
   * DestinyProgressionMappingDefinition in the manifest.
   */
  readonly progressionMappingHash: number;
  /** The amount of experience to give to each of the mapped progressions. */
  readonly amount: number;
  /**
   * If true, the game's internal mechanisms to throttle progression should be
   * applied.
   */
  readonly applyThrottles: boolean;
}
