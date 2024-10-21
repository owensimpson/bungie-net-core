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
 * The character-specific data for a milestone's reward entry. See
 * DestinyMilestoneDefinition for more information about Reward Entries.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneRewardEntry}
 */

export interface DestinyMilestoneRewardEntry {
  /**
   * The identifier for the reward entry in question. It is important to look up the
   * related DestinyMilestoneRewardEntryDefinition to get the static details about
   * the reward, which you can do by looking up the milestone's
   * DestinyMilestoneDefinition and examining the DestinyMilestoneDefinition.rewards[
   * rewardCategoryHash].rewardEntries[rewardEntryHash] data.
   */
  readonly rewardEntryHash: number;
  /** If TRUE, the player has earned this reward. */
  readonly earned: boolean;
  /**
   * If TRUE, the player has redeemed/picked up/obtained this reward. Feel free to
   * alias this to "gotTheShinyBauble" in your own codebase.
   */
  readonly redeemed: boolean;
}
