/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyEnergyType } from '../../DestinyEnergyType';
/**
 * Items can have Energy Capacity, and plugs can provide that capacity such as on a
 * piece of Armor in Armor 2.0. This is how much "Energy" can be spent on
 * activating plugs for this item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyEnergyCapacityEntry}
 */
export interface DestinyEnergyCapacityEntry {
    /** How much energy capacity this plug provides. */
    readonly capacityValue: number;
    /**
     * Energy provided by a plug is always of a specific type - this is the hash
     * identifier for the energy type for which it provides Capacity. Mapped to
     * DestinyEnergyTypeDefinition in the manifest.
     */
    readonly energyTypeHash: number;
    /** The Energy Type for this energy capacity, in enum form for easy use. */
    readonly energyType: DestinyEnergyType;
}
