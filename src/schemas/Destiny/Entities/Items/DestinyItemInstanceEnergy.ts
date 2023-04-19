/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyEnergyType } from '../../DestinyEnergyType'

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemInstanceEnergy} */
export interface DestinyItemInstanceEnergy {
  /**
   * The type of energy for this item. Plugs that require Energy can only be inserted
   * if they have the "Any" Energy Type or the matching energy type of this item.
   * This is a reference to the DestinyEnergyTypeDefinition for the energy type,
   * where you can find extended info about it. Mapped to DestinyEnergyTypeDefinition
   * in the manifest.
  */
  readonly energyTypeHash: number;
  /** This is the enum version of the Energy Type value, for convenience. */
  readonly energyType: DestinyEnergyType;
  /**
   * The total capacity of Energy that the item currently has, regardless of if it is
   * currently being used.
  */
  readonly energyCapacity: number;
  /** The amount of Energy currently in use by inserted plugs. */
  readonly energyUsed: number;
  /** The amount of energy still available for inserting new plugs. */
  readonly energyUnused: number;
}
