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
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyVendorInventoryFlyoutBucketDefinition } from './DestinyVendorInventoryFlyoutBucketDefinition';
/**
 * The definition for an "inventory flyout": a UI screen where we show you part of
 * an otherwise hidden vendor inventory: like the Vault inventory buckets.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorInventoryFlyoutDefinition}
*/
export interface DestinyVendorInventoryFlyoutDefinition {
    /** If the flyout is locked, this is the reason why. */
    readonly lockedDescription: string;
    /** The title and other common properties of the flyout. */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /** A list of inventory buckets and other metadata to show on the screen. */
    readonly buckets: DestinyVendorInventoryFlyoutBucketDefinition[];
    /** An identifier for the flyout, in case anything else needs to refer to them. */
    readonly flyoutId: number;
    /**
     * If this is true, don't show any of the glistening "this is a new item" UI
     * elements, like we show on the inventory items themselves in in-game UI.
    */
    readonly suppressNewness: boolean;
    /**
     * If this flyout is meant to show you the contents of the player's equipment slot,
     * this is the slot to show.
    */
    readonly equipmentSlotHash?: number;
}
