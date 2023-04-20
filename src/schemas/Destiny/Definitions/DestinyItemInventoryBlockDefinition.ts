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

import { TierType } from '../TierType';

/**
 * If the item can exist in an inventory - the overwhelming majority of them can
 * and do - then this is the basic properties regarding the item's relationship
 * with the inventory.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemInventoryBlockDefinition}
 */
export interface DestinyItemInventoryBlockDefinition {
  /**
   * If this string is populated, you can't have more than one stack with this label
   * in a given inventory. Note that this is different from the equipping block's
   * unique label, which is used for equipping uniqueness.
   */
  readonly stackUniqueLabel: string;
  /** The maximum quantity of this item that can exist in a stack. */
  readonly maxStackSize: number;
  /**
   * The hash identifier for the DestinyInventoryBucketDefinition to which this item
   * belongs. I should have named this "bucketHash", but too many things refer to it
   * now. Sigh. Mapped to DestinyInventoryBucketDefinition in the manifest.
   */
  readonly bucketTypeHash: number;
  /**
   * If the item is picked up by the lost loot queue, this is the hash identifier for
   * the DestinyInventoryBucketDefinition into which it will be placed. Again, I
   * should have named this recoveryBucketHash instead. Mapped to
   * DestinyInventoryBucketDefinition in the manifest.
   */
  readonly recoveryBucketTypeHash: number;
  /**
   * The hash identifier for the Tier Type of the item, use to look up its
   * DestinyItemTierTypeDefinition if you need to show localized data for the item's
   * tier. Mapped to DestinyItemTierTypeDefinition in the manifest.
   */
  readonly tierTypeHash: number;
  /**
   * If TRUE, this item is instanced. Otherwise, it is a generic item that merely has
   * a quantity in a stack (like Glimmer).
   */
  readonly isInstanceItem: boolean;
  /**
   * The localized name of the tier type, which is a useful shortcut so you don't
   * have to look up the definition every time. However, it's mostly a holdover from
   * days before we had a DestinyItemTierTypeDefinition to refer to.
   */
  readonly tierTypeName: string;
  /**
   * The enumeration matching the tier type of the item to known values, again for
   * convenience sake.
   */
  readonly tierType: TierType;
  /** The tooltip message to show, if any, when the item expires. */
  readonly expirationTooltip: string;
  /** If the item expires while playing in an activity, we show a different message. */
  readonly expiredInActivityMessage: string;
  /**
   * If the item expires in orbit, we show a... more different message. ("Consummate
   * V's, consummate!")
   */
  readonly expiredInOrbitMessage: string;
  readonly suppressExpirationWhenObjectivesComplete: boolean;
  /**
   * A reference to the associated crafting 'recipe' item definition, if this item
   * can be crafted. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly recipeItemHash?: number;
}
