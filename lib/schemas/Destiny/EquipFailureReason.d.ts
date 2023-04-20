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
 * The reasons why an item cannot be equipped, if any. Many flags can be set, or "
 * None" if
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.EquipFailureReason}
*/
export declare enum EquipFailureReason {
    /** The item is/was able to be equipped. */
    None = 0,
    /**
     * This is not the kind of item that can be equipped. Did you try equipping Glimmer
     * or something?
    */
    ItemUnequippable = 1,
    /**
     * This item is part of a "unique set", and you can't have more than one item of
     * that same set type equipped at once. For instance, if you already have an Exotic
     * Weapon equipped, you can't equip a second one in another weapon slot.
    */
    ItemUniqueEquipRestricted = 2,
    /**
     * This item has state-based gating that prevents it from being equipped in certain
     * circumstances. For instance, an item might be for Warlocks only and you're a
     * Titan, or it might require you to have beaten some special quest that you haven'
     * t beaten yet. Use the additional failure data passed on the item itself to get
     * more information about what the specific failure case was (See
     * DestinyInventoryItemDefinition and DestinyItemInstanceComponent)
    */
    ItemFailedUnlockCheck = 4,
    /**
     * This item requires you to have reached a specific character level in order to
     * equip it, and you haven't reached that level yet.
    */
    ItemFailedLevelCheck = 8,
    /**
     * This item is 'wrapped' and must be unwrapped before being equipped. NOTE: This
     * value used to be called ItemNotOnCharacter but that is no longer accurate.
    */
    ItemWrapped = 16,
    /** This item is not yet loaded and cannot be equipped yet. */
    ItemNotLoaded = 32,
    /** This item is block-listed and cannot be equipped. */
    ItemEquipBlocklisted = 64,
    /** This item does not meet the loadout requirements for the current activity */
    ItemLoadoutRequirementNotMet = 128
}
