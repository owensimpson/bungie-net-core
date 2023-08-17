/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyProgressionRewardItemAcquisitionBehavior } from '../DestinyProgressionRewardItemAcquisitionBehavior';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyProgressionRewardItemQuantity} */

export interface DestinyProgressionRewardItemQuantity {
  readonly rewardedAtProgressionLevel: number;
  readonly acquisitionBehavior: DestinyProgressionRewardItemAcquisitionBehavior;
  readonly uiDisplayStyle: string;
  readonly claimUnlockDisplayStrings: string[];
  /**
   * The hash identifier for the item in question. Use it to look up the item's
   * DestinyInventoryItemDefinition. Mapped to DestinyInventoryItemDefinition in the
   * manifest.
   */
  readonly itemHash: number;
  /**
   * If this quantity is referring to a specific instance of an item, this will have
   * the item's instance ID. Normally, this will be null.
   */
  readonly itemInstanceId?: string;
  /**
   * The amount of the item needed/available depending on the context of where
   * DestinyItemQuantity is being used.
   */
  readonly quantity: number;
  /**
   * Indicates that this item quantity may be conditionally shown or hidden, based on
   * various sources of state. For example: server flags, account state, or character
   * progress.
   */
  readonly hasConditionalVisibility: boolean;
}
