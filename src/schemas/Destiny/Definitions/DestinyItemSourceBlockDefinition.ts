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

import { DestinyItemSourceDefinition } from './Sources/DestinyItemSourceDefinition'
import { BungieMembershipType } from '../../BungieMembershipType'
import { DestinyItemVendorSourceReference } from './DestinyItemVendorSourceReference'

/**
 * Data about an item's "sources": ways that the item can be obtained.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSourceBlockDefinition}
*/
export interface DestinyItemSourceBlockDefinition {
  /**
   * The list of hash identifiers for Reward Sources that hint where the item can be
   * found (DestinyRewardSourceDefinition). Mapped to DestinyRewardSourceDefinition
   * in the manifest.
  */
  readonly sourceHashes: number[];
  /**
   * A collection of details about the stats that were computed for the ways we found
   * that the item could be spawned.
  */
  readonly sources: DestinyItemSourceDefinition[];
  /**
   * If we found that this item is exclusive to a specific platform, this will be set
   * to the BungieMembershipType enumeration that matches that platform.
  */
  readonly exclusive: BungieMembershipType;
  /** A denormalized reference back to vendors that potentially sell this item. */
  readonly vendorSources: DestinyItemVendorSourceReference[];
}
