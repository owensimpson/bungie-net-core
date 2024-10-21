/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * The definition of a known, reusable plug that can be applied to a socket.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSocketEntryPlugItemDefinition}
 */

export interface DestinyItemSocketEntryPlugItemDefinition {
  /**
   * The hash identifier of a DestinyInventoryItemDefinition representing the plug
   * that can be inserted. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly plugItemHash: number;
}
