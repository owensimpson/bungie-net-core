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
 * Represents that a vendor could sell this item, and provides a quick link to that
 * vendor and sale item.
 *
 * Note that we do not and cannot make a guarantee that the vendor will ever *
 * actually* sell this item, only that the Vendor has a definition that indicates
 * it *could* be sold.
 *
 * Note also that a vendor may sell the same item in multiple "ways", which means
 * there may be multiple vendorItemIndexes for a single Vendor hash.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemVendorSourceReference}
 */

export interface DestinyItemVendorSourceReference {
  /**
   * The identifier for the vendor that may sell this item. Mapped to
   * DestinyVendorDefinition in the manifest.
   */
  readonly vendorHash: number;
  /**
   * The Vendor sale item indexes that represent the sale information for this item.
   * The same vendor may sell an item in multiple "ways", hence why this is a list. (
   * for instance, a weapon may be "sold" as a reward in a quest, for Glimmer, and
   * for Masterwork Cores: each of those ways would be represented by a different
   * vendor sale item with a different index)
   */
  readonly vendorItemIndexes: number[];
}
