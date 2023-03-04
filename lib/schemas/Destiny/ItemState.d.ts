/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * A flags enumeration/bitmask where each bit represents a different possible state
 * that the item can be in that may effect how the item is displayed to the user
 * and what actions can be performed against it.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.ItemState}
 */
export declare enum ItemState {
    None = 0,
    /**
     * If this bit is set, the item has been "locked" by the user and cannot be deleted.
     * You may want to represent this visually with a "lock" icon.
     */
    Locked = 1,
    /**
     * If this bit is set, the item is a quest that's being tracked by the user. You
     * may want a visual indicator to show that this is a tracked quest.
     */
    Tracked = 2,
    /**
     * If this bit is set, the item has a Masterwork plug inserted. This usually
     * coincides with having a special "glowing" effect applied to the item's icon.
     */
    Masterwork = 4,
    /**
     * If this bit is set, the item has been 'crafted' by the player. You may want to
     * represent this visually with a "crafted" icon overlay.
     */
    Crafted = 8,
    /**
     * If this bit is set, the item has a 'highlighted' objective. You may want to
     * represent this with an orange-red icon border color.
     */
    HighlightedObjective = 16
}
