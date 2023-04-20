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
/**
 * If the Milestone or a component has vendors whose inventories could/should be
 * displayed that are relevant to it, this will return the vendor in question.
 *
 * It also contains information we need to determine whether that vendor is
 * actually relevant at the moment, given the user's current state.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneVendorDefinition}
*/
export interface DestinyMilestoneVendorDefinition {
    /**
     * The hash of the vendor whose wares should be shown as associated with the
     * Milestone. Mapped to DestinyVendorDefinition in the manifest.
    */
    readonly vendorHash: number;
}
