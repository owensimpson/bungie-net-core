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
 * Indicates how a perk should be shown, or if it should be, in the game UI. Maybe
 * useful for those of you trying to filter out internal-use-only perks (or for
 * those of you trying to figure out what they do!)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.ItemPerkVisibility}
*/
export declare enum ItemPerkVisibility {
    Visible = 0,
    Disabled = 1,
    Hidden = 2
}
