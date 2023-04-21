/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * Information about the category and items currently sold in that category.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Vendors.DestinyVendorCategory}
*/
export interface DestinyVendorCategory {
    /**
     * An index into the DestinyVendorDefinition.displayCategories property, so you can
     * grab the display data for this category.
    */
    readonly displayCategoryIndex: number;
    /**
     * An ordered list of indexes into items being sold in this category (
     * DestinyVendorDefinition.itemList) which will contain more information about the
     * items being sold themselves. Can also be used to index into
     * DestinyVendorSaleItemComponent data, if you asked for that data to be returned.
    */
    readonly itemIndexes: number[];
}
