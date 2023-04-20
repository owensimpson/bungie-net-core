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
 * Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSetBlockEntryDefinition}
*/
export interface DestinyItemSetBlockEntryDefinition {
    /**
     * Used for tracking which step a user reached. These values will be populated in
     * the user's internal state, which we expose externally as a more usable
     * DestinyQuestStatus object. If this item has been obtained, this value will be
     * set in trackingUnlockValueHash.
    */
    readonly trackingValue: number;
    /**
     * This is the hash identifier for a DestinyInventoryItemDefinition representing
     * this quest step. Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly itemHash: number;
}
