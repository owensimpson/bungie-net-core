/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue'

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyHistoricalWeaponStats} */
export interface DestinyHistoricalWeaponStats {
  /**
   * The hash ID of the item definition that describes the weapon. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
  */
  readonly referenceId: number;
  /** Collection of stats for the period. */
  readonly values: { [key: string]: DestinyHistoricalStatsValue };
}
