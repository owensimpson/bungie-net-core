/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyInventoryItemStatDefinition } from '../DestinyInventoryItemStatDefinition';
/**
 * Properties of a DestinyInventoryItemDefinition that store all of the information
 * we were able to discern about how the item spawns, and where you can find the
 * item.
 *
 * Items will have many of these sources, one per level at which it spawns, to try
 * and give more granular data about where items spawn for specific level ranges.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Sources.DestinyItemSourceDefinition}
*/
export interface DestinyItemSourceDefinition {
    /**
     * The level at which the item spawns. Essentially the Primary Key for this source
     * data: there will be multiple of these source entries per item that has source
     * data, grouped by the level at which the item spawns.
    */
    readonly level: number;
    /**
     * The minimum Quality at which the item spawns for this level. Examine
     * DestinyInventoryItemDefinition for more information about what Quality means.
     * Just don't ask Phaedrus about it, he'll never stop talking and you'll have to
     * write a book about it.
    */
    readonly minQuality: number;
    /** The maximum quality at which the item spawns for this level. */
    readonly maxQuality: number;
    /**
     * The minimum Character Level required for equipping the item when the item spawns
     * at the item level defined on this DestinyItemSourceDefinition, as far as we saw
     * in our processing.
    */
    readonly minLevelRequired: number;
    /**
     * The maximum Character Level required for equipping the item when the item spawns
     * at the item level defined on this DestinyItemSourceDefinition, as far as we saw
     * in our processing.
    */
    readonly maxLevelRequired: number;
    /** The stats computed for this level/quality range. */
    readonly computedStats: {
        [key: number]: DestinyInventoryItemStatDefinition;
    };
    /**
     * The DestinyRewardSourceDefinitions found that can spawn the item at this level.
     * Mapped to DestinyRewardSourceDefinition in the manifest.
    */
    readonly sourceHashes: number[];
}
