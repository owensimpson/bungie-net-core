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

import { DestinyStat } from '../../DestinyStat'

/**
 * If you want the stats on an item's instanced data, get this component.
 *
 * These are stats like Attack, Defense etc... and *not* historical stats.
 *
 * Note that some stats have additional computation in-game at runtime - for
 * instance, Magazine Size - and thus these stats might not be 100% accurate
 * compared to what you see in-game for some stats. I know, it sucks. I hate it too.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemStatsComponent}
*/
export interface DestinyItemStatsComponent {
  /**
   * If the item has stats that it provides (damage, defense, etc...), it will be
   * given here. Mapped to DestinyStatDefinition in the manifest.
  */
  readonly stats: { [key: number]: DestinyStat };
}
