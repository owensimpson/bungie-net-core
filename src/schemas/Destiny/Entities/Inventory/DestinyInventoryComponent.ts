/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyItemComponent } from '../Items/DestinyItemComponent';

/**
 * A list of minimal information for items in an inventory: be it a character's
 * inventory, or a Profile's inventory. (Note that the Vault is a collection of
 * inventory buckets in the Profile's inventory)
 *
 * Inventory Items returned here are in a flat list, but importantly they have a
 * bucketHash property that indicates the specific inventory bucket that is holding
 * them. These buckets constitute things like the separate sections of the Vault,
 * the user's inventory slots, etc. See DestinyInventoryBucketDefinition for more
 * info.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Inventory.DestinyInventoryComponent}
 */
export interface DestinyInventoryComponent {
  /**
   * The items in this inventory. If you care to bucket them, use the item's
   * bucketHash property to group them.
   */
  readonly items: DestinyItemComponent[];
}
