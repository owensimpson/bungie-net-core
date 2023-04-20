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

import { DestinyVendorItemQuantity } from './DestinyVendorItemQuantity';
import { DestinyVendorItemRefundPolicy } from '../DestinyVendorItemRefundPolicy';
import { DestinyItemCreationEntryLevelDefinition } from './DestinyItemCreationEntryLevelDefinition';
import { DestinyVendorSaleItemActionBlockDefinition } from './DestinyVendorSaleItemActionBlockDefinition';
import { DestinyGatingScope } from '../DestinyGatingScope';
import { BungieMembershipType } from '../../BungieMembershipType';
import { DestinyVendorItemSocketOverride } from './DestinyVendorItemSocketOverride';

/**
 * This represents an item being sold by the vendor.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorItemDefinition}
 */
export interface DestinyVendorItemDefinition {
  /**
   * The index into the DestinyVendorDefinition.saleList. This is what we use to
   * refer to items being sold throughout live and definition data.
   */
  readonly vendorItemIndex: number;
  /**
   * The hash identifier of the item being sold (DestinyInventoryItemDefinition).
   *
   * Note that a vendor can sell the same item in multiple ways, so don't assume that
   * itemHash is a unique identifier for this entity. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemHash: number;
  /**
   * The amount you will recieve of the item described in itemHash if you make the
   * purchase.
   */
  readonly quantity: number;
  /**
   * An list of indexes into the DestinyVendorDefinition.failureStrings array,
   * indicating the possible failure strings that can be relevant for this item.
   */
  readonly failureIndexes: number[];
  /**
   * This is a pre-compiled aggregation of item value and priceOverrideList, so that
   * we have one place to check for what the purchaser must pay for the item. Use
   * this instead of trying to piece together the price separately.
   *
   * The somewhat crappy part about this is that, now that item quantity overrides
   * have dynamic modifiers, this will not necessarily be statically true. If you
   * were using this instead of live data, switch to using live data.
   */
  readonly currencies: DestinyVendorItemQuantity[];
  /**
   * If this item can be refunded, this is the policy for what will be refundd, how,
   * and in what time period.
   */
  readonly refundPolicy: DestinyVendorItemRefundPolicy;
  /** The amount of time before refundability of the newly purchased item will expire. */
  readonly refundTimeLimit: number;
  /**
   * The Default level at which the item will spawn. Almost always driven by an
   * adjusto these days. Ideally should be singular. It's a long story how this ended
   * up as a list, but there is always either going to be 0:1 of these entities.
   */
  readonly creationLevels: DestinyItemCreationEntryLevelDefinition[];
  /**
   * This is an index specifically into the display category, as opposed to the
   * server-side Categories (which do not need to match or pair with each other in
   * any way: server side categories are really just structures for common validation.
   * Display Category will let us more easily categorize items visually)
   */
  readonly displayCategoryIndex: number;
  /**
   * The index into the DestinyVendorDefinition.categories array, so you can find the
   * category associated with this item.
   */
  readonly categoryIndex: number;
  /** Same as above, but for the original category indexes. */
  readonly originalCategoryIndex: number;
  /** The minimum character level at which this item is available for sale. */
  readonly minimumLevel: number;
  /** The maximum character level at which this item is available for sale. */
  readonly maximumLevel: number;
  /** The action to be performed when purchasing the item, if it's not just "buy". */
  readonly action: DestinyVendorSaleItemActionBlockDefinition;
  /** The string identifier for the category selling this item. */
  readonly displayCategory: string;
  /**
   * The inventory bucket into which this item will be placed upon purchase. Mapped
   * to DestinyInventoryBucketDefinition in the manifest.
   */
  readonly inventoryBucketHash: number;
  /**
   * The most restrictive scope that determines whether the item is available in the
   * Vendor's inventory. See DestinyGatingScope's documentation for more information.
   *
   * This can be determined by Unlock gating, or by whether or not the item has
   * purchase level requirements (minimumLevel and maximumLevel properties).
   */
  readonly visibilityScope: DestinyGatingScope;
  /**
   * Similar to visibilityScope, it represents the most restrictive scope that
   * determines whether the item can be purchased. It will at least be as restrictive
   * as visibilityScope, but could be more restrictive if the item has additional
   * purchase requirements beyond whether it is merely visible or not.
   *
   * See DestinyGatingScope's documentation for more information.
   */
  readonly purchasableScope: DestinyGatingScope;
  /**
   * If this item can only be purchased by a given platform, this indicates the
   * platform to which it is restricted.
   */
  readonly exclusivity: BungieMembershipType;
  /** If this sale can only be performed as the result of an offer check, this is true. */
  readonly isOffer?: boolean;
  /**
   * If this sale can only be performed as the result of receiving a CRM offer, this
   * is true.
   */
  readonly isCrm?: boolean;
  /**
   * *if* the category this item is in supports non-default sorting, this value
   * should represent the sorting value to use, pre-processed and ready to go.
   */
  readonly sortValue: number;
  /**
   * If this item can expire, this is the tooltip message to show with its expiration
   * info.
   */
  readonly expirationTooltip: string;
  /**
   * If this is populated, the purchase of this item should redirect to purchasing
   * these other items instead.
   */
  readonly redirectToSaleIndexes: number[];
  readonly socketOverrides: DestinyVendorItemSocketOverride[];
  /**
   * If true, this item is some sort of dummy sale item that cannot actually be
   * purchased. It may be a display only item, or some fluff left by a content
   * designer for testing purposes, or something that got disabled because it was a
   * terrible idea. You get the picture. We won't know *why* it can't be purchased,
   * only that it can't be. Sorry.
   *
   * This is also only whether it's unpurchasable as a static property according to
   * game content. There are other reasons why an item may or may not be purchasable
   * at runtime, so even if this isn't set to True you should trust the runtime value
   * for this sale item over the static definition if this is unset.
   */
  readonly unpurchasable?: boolean;
}
