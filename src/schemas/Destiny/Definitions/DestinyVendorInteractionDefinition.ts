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

import { DestinyVendorInteractionReplyDefinition } from './DestinyVendorInteractionReplyDefinition'
import { DestinyVendorInteractionSackEntryDefinition } from './DestinyVendorInteractionSackEntryDefinition'
import { VendorInteractionType } from '../VendorInteractionType'
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition'

/**
 * A Vendor Interaction is a dialog shown by the vendor other than sale items or
 * transfer screens. The vendor is showing you something, and asking you to reply
 * to it by choosing an option or reward.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorInteractionDefinition}
*/
export interface DestinyVendorInteractionDefinition {
  /**
   * The position of this interaction in its parent array. Note that this is NOT
   * content agnostic, and should not be used as such.
  */
  readonly interactionIndex: number;
  /** The potential replies that the user can make to the interaction. */
  readonly replies: DestinyVendorInteractionReplyDefinition[];
  /**
   * If >= 0, this is the category of sale items to show along with this interaction
   * dialog.
  */
  readonly vendorCategoryIndex: number;
  /**
   * If this interaction dialog is about a quest, this is the questline related to
   * the interaction. You can use this to show the quest overview, or even the
   * character's status with the quest if you use it to find the character's current
   * Quest Step by checking their inventory against this questlineItemHash's
   * DestinyInventoryItemDefinition.setData. Mapped to DestinyInventoryItemDefinition
   * in the manifest.
  */
  readonly questlineItemHash: number;
  /**
   * If this interaction is meant to show you sacks, this is the list of types of
   * sacks to be shown. If empty, the interaction is not meant to show sacks.
  */
  readonly sackInteractionList: DestinyVendorInteractionSackEntryDefinition[];
  /**
   * A UI hint for the behavior of the interaction screen. This is useful to
   * determine what type of interaction is occurring, such as a prompt to receive a
   * rank up reward or a prompt to choose a reward for completing a quest. The hash
   * isn't as useful as the Enum in retrospect, well what can you do. Try using
   * interactionType instead.
  */
  readonly uiInteractionType: number;
  /**
   * The enumerated version of the possible UI hints for vendor interactions, which
   * is a little easier to grok than the hash found in uiInteractionType.
  */
  readonly interactionType: VendorInteractionType;
  /**
   * If this interaction is displaying rewards, this is the text to use for the
   * header of the reward-displaying section of the interaction.
  */
  readonly rewardBlockLabel: string;
  /**
   * If the vendor's reward list is sourced from one of his categories, this is the
   * index into the category array of items to show.
  */
  readonly rewardVendorCategoryIndex: number;
  /** If the vendor interaction has flavor text, this is some of it. */
  readonly flavorLineOne: string;
  /** If the vendor interaction has flavor text, this is the rest of it. */
  readonly flavorLineTwo: string;
  /** The header for the interaction dialog. */
  readonly headerDisplayProperties: DestinyDisplayPropertiesDefinition;
  /** The localized text telling the player what to do when they see this dialog. */
  readonly instructions: string;
}
