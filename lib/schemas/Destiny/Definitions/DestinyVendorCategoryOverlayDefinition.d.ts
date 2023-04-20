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
/**
 * The details of an overlay prompt to show to a user. They are all fairly self-
 * explanatory localized strings that can be shown.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorCategoryOverlayDefinition}
*/
export interface DestinyVendorCategoryOverlayDefinition {
    readonly choiceDescription: string;
    readonly description: string;
    readonly icon: string;
    readonly title: string;
    /**
     * If this overlay has a currency item that it features, this is said featured item.
     * Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly currencyItemHash?: number;
}
