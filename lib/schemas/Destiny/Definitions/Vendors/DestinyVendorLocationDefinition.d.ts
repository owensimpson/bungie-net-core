/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * These definitions represent vendors' locations and relevant display information
 * at different times in the game.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Vendors.DestinyVendorLocationDefinition}
 */
export interface DestinyVendorLocationDefinition {
    /**
     * The hash identifier for a Destination at which this vendor may be located. Each
     * destination where a Vendor may exist will only ever have a single entry. Mapped
     * to DestinyDestinationDefinition in the manifest.
     */
    readonly destinationHash: number;
    /**
     * The relative path to the background image representing this Vendor at this
     * location, for use in a banner.
     */
    readonly backgroundImagePath: string;
}
