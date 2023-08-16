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

import { DestinyLocationReleaseDefinition } from './DestinyLocationReleaseDefinition';

/**
 * A "Location" is a sort of shortcut for referring to a specific combination of
 * Activity, Destination, Place, and even Bubble or NavPoint within a space.
 *
 * Most of this data isn't intrinsically useful to us, but Objectives refer to
 * locations, and through that we can at least infer the Activity, Destination, and
 * Place being referred to by the Objective.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyLocationDefinition}
 */

export interface DestinyLocationDefinition {
  /**
   * If the location has a Vendor on it, this is the hash identifier for that Vendor.
   * Look them up with DestinyVendorDefinition. Mapped to DestinyVendorDefinition in
   * the manifest.
   */
  readonly vendorHash: number;
  /**
   * A Location may refer to different specific spots in the world based on the world'
   * s current state. This is a list of those potential spots, and the data we can
   * use at runtime to determine which one of the spots is the currently valid one.
   */
  readonly locationReleases: DestinyLocationReleaseDefinition[];
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
