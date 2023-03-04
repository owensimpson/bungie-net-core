/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyItemQuantity } from '../../DestinyItemQuantity';
/**
 * Has character-agnostic information about an item being sold by a vendor.
 *
 * Note that if you want instance, stats, etc... data for the item, you'll have to
 * request additional components such as ItemInstances, ItemPerks etc... and
 * acquire them from the DestinyVendorResponse's "items" property. For most of
 * these, however, you'll have to ask for it in context of a specific character.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Vendors.DestinyPublicVendorSaleItemComponent}
 */
export interface DestinyPublicVendorSaleItemComponent {
    /**
     * The index into the DestinyVendorDefinition.itemList property. Note that this
     * means Vendor data *is* Content Version dependent: make sure you have the latest
     * content before you use Vendor data, or these indexes may mismatch.
     *
     * Most systems avoid this problem, but Vendors is one area where we are unable to
     * reasonably avoid content dependency at the moment.
     */
    readonly vendorItemIndex: number;
    /**
     * The hash of the item being sold, as a quick shortcut for looking up the
     * DestinyInventoryItemDefinition of the sale item. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
     */
    readonly itemHash: number;
    /**
     * If populated, this is the hash of the item whose icon (and other secondary
     * styles, but *not* the human readable strings) should override whatever icons/
     * styles are on the item being sold.
     *
     * If you don't do this, certain items whose styles are being overridden by
     * socketed items - such as the "Recycle Shader" item - would show whatever their
     * default icon/style is, and it wouldn't be pretty or look accurate. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
     */
    readonly overrideStyleItemHash?: number;
    /** How much of the item you'll be getting. */
    readonly quantity: number;
    /** A summary of the current costs of the item. */
    readonly costs: DestinyItemQuantity[];
    /**
     * If this item has its own custom date where it may be removed from the Vendor's
     * rotation, this is that date.
     *
     * Note that there's not actually any guarantee that it will go away: it could be
     * chosen again and end up still being in the Vendor's sale items! But this is the
     * next date where that test will occur, and is also the date that the game shows
     * for availability on things like Bounties being sold. So it's the best we can
     * give.
     */
    readonly overrideNextRefreshDate?: string;
    /** If true, this item can be purchased through the Bungie.net API. */
    readonly apiPurchasable?: boolean;
}
