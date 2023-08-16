/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Kiosks.DestinyKioskItem} */

export interface DestinyKioskItem {
  /**
   * The index of the item in the related DestinyVendorDefintion's itemList property,
   * representing the sale.
   */
  readonly index: number;
  /**
   * If true, the user can not only see the item, but they can acquire it. It is
   * possible that a user can see a kiosk item and not be able to acquire it.
   */
  readonly canAcquire: boolean;
  /**
   * Indexes into failureStrings for the Vendor, indicating the reasons why it failed
   * if any.
   */
  readonly failureIndexes: number[];
  /**
   * I may regret naming it this way - but this represents when an item has an
   * objective that doesn't serve a beneficial purpose, but rather is used for "
   * flavor" or additional information. For instance, when Emblems track specific
   * stats, those stats are represented as Objectives on the item.
   */
  readonly flavorObjective: DestinyObjectiveProgress;
}
