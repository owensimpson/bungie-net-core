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
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyFactionVendorDefinition } from './DestinyFactionVendorDefinition';
/**
 * These definitions represent Factions in the game. Factions have ended up
 * unilaterally being related to Vendors that represent them, but that need not
 * necessarily be the case.
 *
 * A Faction is really just an entity that has a related progression for which a
 * character can gain experience. In Destiny 1, Dead Orbit was an example of a
 * Faction: there happens to be a Vendor that represents Dead Orbit (and indeed,
 * DestinyVendorDefinition.factionHash defines to this relationship), but Dead
 * Orbit could theoretically exist without the Vendor that provides rewards.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyFactionDefinition}
*/
export interface DestinyFactionDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * The hash identifier for the DestinyProgressionDefinition that indicates the
     * character's relationship with this faction in terms of experience and levels.
     * Mapped to DestinyProgressionDefinition in the manifest.
    */
    readonly progressionHash: number;
    /** The faction token item hashes, and their respective progression values. */
    readonly tokenValues: {
        [key: number]: number;
    };
    /**
     * The faction reward item hash, usually an engram. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
    */
    readonly rewardItemHash: number;
    /**
     * The faction reward vendor hash, used for faction engram previews. Mapped to
     * DestinyVendorDefinition in the manifest.
    */
    readonly rewardVendorHash: number;
    /**
     * List of vendors that are associated with this faction. The last vendor that
     * passes the unlock flag checks is the one that should be shown.
    */
    readonly vendors: DestinyFactionVendorDefinition[];
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
