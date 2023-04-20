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
/**
 * In addition to item quantity information for vendor prices, this also has any
 * optional information that may exist about how the item's quantity can be
 * modified. (unfortunately not information that is able to be read outside of the
 * BNet servers, but it's there)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorItemQuantity}
*/
export interface DestinyVendorItemQuantity {
    /**
     * The hash identifier for the item in question. Use it to look up the item's
     * DestinyInventoryItemDefinition. Mapped to DestinyInventoryItemDefinition in the
     * manifest.
    */
    readonly itemHash: number;
    /**
     * If this quantity is referring to a specific instance of an item, this will have
     * the item's instance ID. Normally, this will be null.
    */
    readonly itemInstanceId?: string;
    /**
     * The amount of the item needed/available depending on the context of where
     * DestinyItemQuantity is being used.
    */
    readonly quantity: number;
    /**
     * Indicates that this item quantity may be conditionally shown or hidden, based on
     * various sources of state. For example: server flags, account state, or character
     * progress.
    */
    readonly hasConditionalVisibility: boolean;
}
