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

import { DestinyDerivedItemDefinition } from './DestinyDerivedItemDefinition';

/**
 * A shortcut for the fact that some items have a "Preview Vendor" - See
 * DestinyInventoryItemDefinition.preview.previewVendorHash - that is intended to
 * be used to show what items you can get as a result of acquiring or using this
 * item.
 *
 * A common example of this in Destiny 1 was Eververse "Boxes," which could have
 * many possible items. This "Preview Vendor" is not a vendor you can actually see
 * in the game, but it defines categories and sale items for all of the possible
 * items you could get from the Box so that the game can show them to you. We
 * summarize that info here so that you don't have to do that Vendor lookup and
 * aggregation manually.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyDerivedItemCategoryDefinition}
 */
export interface DestinyDerivedItemCategoryDefinition {
  /**
   * The localized string for the category title. This will be something describing
   * the items you can get as a group, or your likelihood/the quantity you'll get.
   */
  readonly categoryDescription: string;
  /**
   * This is the list of all of the items for this category and the basic properties
   * we'll know about them.
   */
  readonly items: DestinyDerivedItemDefinition[];
}
