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
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyEnergyType } from '../../DestinyEnergyType';
/**
 * Represents types of Energy that can be used for costs and payments related to
 * Armor 2.0 mods.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.EnergyTypes.DestinyEnergyTypeDefinition}
*/
export interface DestinyEnergyTypeDefinition {
    /** The description of the energy type, icon etc... */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /** A variant of the icon that is transparent and colorless. */
    readonly transparentIconPath: string;
    /**
     * If TRUE, the game shows this Energy type's icon. Otherwise, it doesn't. Whether
     * you show it or not is up to you.
    */
    readonly showIcon: boolean;
    /**
     * We have an enumeration for Energy types for quick reference. This is the current
     * definition's Energy type enum value.
    */
    readonly enumValue: DestinyEnergyType;
    /**
     * If this Energy Type can be used for determining the Type of Energy that an item
     * can consume, this is the hash for the DestinyInvestmentStatDefinition that
     * represents the stat which holds the Capacity for that energy type. (Note that
     * this is optional because "Any" is a valid cost, but not valid for Capacity - an
     * Armor must have a specific Energy Type for determining the energy type that the
     * Armor is restricted to use) Mapped to DestinyStatDefinition in the manifest.
    */
    readonly capacityStatHash?: number;
    /**
     * If this Energy Type can be used as a cost to pay for socketing Armor 2.0 items,
     * this is the hash for the DestinyInvestmentStatDefinition that stores the plug's
     * raw cost. Mapped to DestinyStatDefinition in the manifest.
    */
    readonly costStatHash: number;
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
