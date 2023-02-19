/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * Whether you can transfer an item, and why not if you can't.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.TransferStatuses}
*/
export declare enum TransferStatuses {
    /** The item can be transferred. */
    CanTransfer = 0,
    /** You can't transfer the item because it is equipped on a character. */
    ItemIsEquipped = 1,
    /**
     * The item is defined as not transferrable in its DestinyInventoryItemDefinition.
     * nonTransferrable property.
    */
    NotTransferrable = 2,
    /**
     * You could transfer the item, but the place you're trying to put it has run out
     * of room! Check your remaining Vault and/or character space.
    */
    NoRoomInDestination = 4
}
