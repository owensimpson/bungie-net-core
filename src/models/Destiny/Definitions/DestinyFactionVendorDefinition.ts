/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * These definitions represent faction vendors at different points in the game.
 *
 * A single faction may contain multiple vendors, or the same vendor available at
 * two different locations.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyFactionVendorDefinition}
 */

export interface DestinyFactionVendorDefinition {
  /** The faction vendor hash. Mapped to DestinyVendorDefinition in the manifest. */
  readonly vendorHash: number;
  /**
   * The hash identifier for a Destination at which this vendor may be located. Each
   * destination where a Vendor may exist will only ever have a single entry. Mapped
   * to DestinyDestinationDefinition in the manifest.
   */
  readonly destinationHash: number;
  /**
   * The relative path to the background image representing this Vendor at this
   * location, for use in a banner.
   */
  readonly backgroundImagePath: string;
}
