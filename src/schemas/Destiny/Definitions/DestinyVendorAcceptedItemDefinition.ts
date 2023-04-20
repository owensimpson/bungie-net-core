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

/**
 * If you ever wondered how the Vault works, here it is.
 *
 * The Vault is merely a set of inventory buckets that exist on your Profile/
 * Account level. When you transfer items in the Vault, the game is using the Vault
 * Vendor's DestinyVendorAcceptedItemDefinitions to see where the appropriate
 * destination bucket is for the source bucket from whence your item is moving. If
 * it finds such an entry, it transfers the item to the other bucket.
 *
 * The mechanics for Postmaster works similarly, which is also a vendor. All driven
 * by Accepted Items.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorAcceptedItemDefinition}
*/
export interface DestinyVendorAcceptedItemDefinition {
  /**
   * The "source" bucket for a transfer. When a user wants to transfer an item, the
   * appropriate DestinyVendorDefinition's acceptedItems property is evaluated,
   * looking for an entry where acceptedInventoryBucketHash matches the bucket that
   * the item being transferred is currently located. If it exists, the item will be
   * transferred into whatever bucket is defined by destinationInventoryBucketHash.
   * Mapped to DestinyInventoryBucketDefinition in the manifest.
  */
  readonly acceptedInventoryBucketHash: number;
  /**
   * This is the bucket where the item being transferred will be put, given that it
   * was being transferred *from* the bucket defined in acceptedInventoryBucketHash.
   * Mapped to DestinyInventoryBucketDefinition in the manifest.
  */
  readonly destinationInventoryBucketHash: number;
}
