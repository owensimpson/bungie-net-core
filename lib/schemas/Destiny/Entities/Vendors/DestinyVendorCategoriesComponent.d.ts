/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyVendorCategory } from './DestinyVendorCategory';
/**
 * A vendor can have many categories of items that they sell. This component will
 * return the category information for available items, as well as the index into
 * those items in the user's sale item list.
 *
 * Note that, since both the category and items are indexes, this data is Content
 * Version dependent. Be sure to check that your content is up to date before using
 * this data. This is an unfortunate, but permanent, limitation of Vendor data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Vendors.DestinyVendorCategoriesComponent}
*/
export interface DestinyVendorCategoriesComponent {
    /**
     * The list of categories for items that the vendor sells, in rendering order.
     *
     * These categories each point to a "display category" in the displayCategories
     * property of the DestinyVendorDefinition, as opposed to the other categories.
    */
    readonly categories: DestinyVendorCategory[];
}
