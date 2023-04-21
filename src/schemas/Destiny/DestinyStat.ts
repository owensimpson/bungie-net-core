/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a
 * physical attribute stat like Attack, Defense etc...)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStat}
 */
export interface DestinyStat {
  /**
   * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition
   * for static data about the stat. Mapped to DestinyStatDefinition in the manifest.
   */
  readonly statHash: number;
  /** The current value of the Stat. */
  readonly value: number;
}
