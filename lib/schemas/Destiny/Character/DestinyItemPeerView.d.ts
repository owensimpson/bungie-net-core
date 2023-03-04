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
import { DyeReference } from '../DyeReference';
/**
 * Bare minimum summary information for an item, for the sake of 3D rendering the
 * item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Character.DestinyItemPeerView}
 */
export interface DestinyItemPeerView {
    /**
     * The hash identifier of the item in question. Use it to look up the
     * DestinyInventoryItemDefinition of the item for static rendering data. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
     */
    readonly itemHash: number;
    /** The list of dyes that have been applied to this item. */
    readonly dyes: DyeReference[];
}
