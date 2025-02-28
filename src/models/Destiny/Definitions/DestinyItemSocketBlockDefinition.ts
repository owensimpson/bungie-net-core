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

import { DestinyItemSocketEntryDefinition } from './DestinyItemSocketEntryDefinition';
import { DestinyItemIntrinsicSocketEntryDefinition } from './DestinyItemIntrinsicSocketEntryDefinition';
import { DestinyItemSocketCategoryDefinition } from './DestinyItemSocketCategoryDefinition';

/**
 * If defined, the item has at least one socket.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSocketBlockDefinition}
 */

export interface DestinyItemSocketBlockDefinition {
  /**
   * This was supposed to be a string that would give per-item details about sockets.
   * In practice, it turns out that all this ever has is the localized word "details".
   * ... that's lame, but perhaps it will become something cool in the future.
   */
  readonly detail: string;
  /**
   * Each non-intrinsic (or mutable) socket on an item is defined here. Check inside
   * for more info.
   */
  readonly socketEntries: DestinyItemSocketEntryDefinition[];
  /**
   * Each intrinsic (or immutable/permanent) socket on an item is defined here, along
   * with the plug that is permanently affixed to the socket.
   */
  readonly intrinsicSockets: DestinyItemIntrinsicSocketEntryDefinition[];
  /**
   * A convenience property, that refers to the sockets in the "sockets" property,
   * pre-grouped by category and ordered in the manner that they should be grouped in
   * the UI. You could form this yourself with the existing data, but why would you
   * want to? Enjoy life man.
   */
  readonly socketCategories: DestinyItemSocketCategoryDefinition[];
}
