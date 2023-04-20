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
/**
 * This component contains essential/summary information about the vendor from the
 * perspective of a character-agnostic view.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Vendors.DestinyPublicVendorComponent}
*/
export interface DestinyPublicVendorComponent {
    /**
     * The unique identifier for the vendor. Use it to look up their
     * DestinyVendorDefinition. Mapped to DestinyVendorDefinition in the manifest.
    */
    readonly vendorHash: number;
    /**
     * The date when this vendor's inventory will next rotate/refresh.
     *
     * Note that this is distinct from the date ranges that the vendor is visible/
     * available in-game: this field indicates the specific time when the vendor's
     * available items refresh and rotate, regardless of whether the vendor is actually
     * available at that time. Unfortunately, these two values may be (and are, for the
     * case of important vendors like Xur) different.
     *
     * Issue https://github.com/Bungie-net/api/issues/353 is tracking a fix to start
     * providing visibility date ranges where possible in addition to this refresh date,
     * so that all important dates for vendors are available for use.
    */
    readonly nextRefreshDate: string;
    /**
     * If True, the Vendor is currently accessible.
     *
     * If False, they may not actually be visible in the world at the moment.
    */
    readonly enabled: boolean;
}
