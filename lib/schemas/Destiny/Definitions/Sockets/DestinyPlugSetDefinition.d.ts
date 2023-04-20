/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyItemSocketEntryPlugItemRandomizedDefinition } from '../DestinyItemSocketEntryPlugItemRandomizedDefinition';
/**
 * Sometimes, we have large sets of reusable plugs that are defined identically and
 * thus can (and in some cases, are so large that they *must*) be shared across the
 * places where they are used. These are the definitions for those reusable sets of
 * plugs.
 *
 * See DestinyItemSocketEntryDefinition.plugSource and reusablePlugSetHash for the
 * relationship between these reusable plug sets and the sockets that leverage them
 * (for starters, Emotes).
 *
 * As of the release of Shadowkeep (Late 2019), these will begin to be sourced
 * from game content directly - which means there will be many more of them, but it
 * also means we may not get all data that we used to get for them.
 *
 * DisplayProperties, in particular, will no longer be guaranteed to contain valid
 * information. We will make a best effort to guess what ought to be populated
 * there where possible, but it will be invalid for many/most plug sets.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Sockets.DestinyPlugSetDefinition}
*/
export interface DestinyPlugSetDefinition {
    /**
     * If you want to show these plugs in isolation, these are the display properties
     * for them.
    */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * This is a list of pre-determined plugs that can be plugged into this socket,
     * without the character having the plug in their inventory.
     *
     * If this list is populated, you will not be allowed to plug an arbitrary item in
     * the socket: you will only be able to choose from one of these reusable plugs.
    */
    readonly reusablePlugItems: DestinyItemSocketEntryPlugItemRandomizedDefinition[];
    /**
     * Mostly for our debugging or reporting bugs, BNet is making "fake" plug sets in a
     * desperate effort to reduce socket sizes.
     *
     * If this is true, the plug set was generated by BNet: if it looks wrong, that's
     * a good indicator that it's bungie.net that fucked this up.
    */
    readonly isFakePlugSet: boolean;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of
     * entity, but not globally.
     *
     * When entities refer to each other in Destiny content, it is this hash that they
     * are referring to.
    */
    readonly hash: number;
    /** The index of the entity as it was found in the investment tables. */
    readonly index: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination,
     * but BNet is not yet allowed to show it. Sorry!
    */
    readonly redacted: boolean;
}
