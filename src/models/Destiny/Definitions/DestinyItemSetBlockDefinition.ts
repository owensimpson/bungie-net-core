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

import { DestinyItemSetBlockEntryDefinition } from './DestinyItemSetBlockEntryDefinition';

/**
 * Primarily for Quests, this is the definition of properties related to the item
 * if it is a quest and its various quest steps.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSetBlockDefinition}
 */

export interface DestinyItemSetBlockDefinition {
  /**
   * A collection of hashes of set items, for items such as Quest Metadata items that
   * possess this data.
   */
  readonly itemList: DestinyItemSetBlockEntryDefinition[];
  /**
   * If true, items in the set can only be added in increasing order, and adding an
   * item will remove any previous item. For Quests, this is by necessity true. Only
   * one quest step is present at a time, and previous steps are removed as you
   * advance in the quest.
   */
  readonly requireOrderedSetItemAdd: boolean;
  /** If true, the UI should treat this quest as "featured" */
  readonly setIsFeatured: boolean;
  /** A string identifier we can use to attempt to identify the category of the Quest. */
  readonly setType: string;
  /** The name of the quest line that this quest step is a part of. */
  readonly questLineName: string;
  /** The description of the quest line that this quest step is a part of. */
  readonly questLineDescription: string;
  /** An additional summary of this step in the quest line. */
  readonly questStepSummary: string;
}
