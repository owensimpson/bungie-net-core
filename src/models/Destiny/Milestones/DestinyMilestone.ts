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

import { DestinyMilestoneQuest } from './DestinyMilestoneQuest';
import { DestinyMilestoneChallengeActivity } from './DestinyMilestoneChallengeActivity';
import { DestinyMilestoneVendor } from './DestinyMilestoneVendor';
import { DestinyMilestoneRewardCategory } from './DestinyMilestoneRewardCategory';

/**
 * Represents a runtime instance of a user's milestone status. Live Milestone data
 * should be combined with DestinyMilestoneDefinition data to show the user a
 * picture of what is available for them to do in the game, and their status in
 * regards to said "things to do." Consider it a big, wonky to-do list, or Advisors
 * 3.0 for those who remember the Destiny 1 API.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestone}
 */

export interface DestinyMilestone {
  /**
   * The unique identifier for the Milestone. Use it to look up the
   * DestinyMilestoneDefinition, so you can combine the other data in this contract
   * with static definition data. Mapped to DestinyMilestoneDefinition in the
   * manifest.
   */
  readonly milestoneHash: number;
  /**
   * Indicates what quests are available for this Milestone. Usually this will be
   * only a single Quest, but some quests have multiple available that you can choose
   * from at any given time. All possible quests for a milestone can be found in the
   * DestinyMilestoneDefinition, but they must be combined with this Live data to
   * determine which one(s) are actually active right now. It is possible for
   * Milestones to not have any quests.
   */
  readonly availableQuests: DestinyMilestoneQuest[];
  /**
   * The currently active Activities in this milestone, when the Milestone is driven
   * by Challenges.
   *
   * Not all Milestones have Challenges, but when they do this will indicate the
   * Activities and Challenges under those Activities related to this Milestone.
   */
  readonly activities: DestinyMilestoneChallengeActivity[];
  /**
   * Milestones may have arbitrary key/value pairs associated with them, for data
   * that users will want to know about but that doesn't fit neatly into any of the
   * common components such as Quests. A good example of this would be - if this
   * existed in Destiny 1 - the number of wins you currently have on your Trials of
   * Osiris ticket. Looking in the DestinyMilestoneDefinition, you can use the string
   * identifier of this dictionary to look up more info about the value, including
   * localized string content for displaying the value. The value in the dictionary
   * is the floating point number. The definition will tell you how to format this
   * number.
   */
  readonly values: { [key: string]: number };
  /**
   * A milestone may have one or more active vendors that are "related" to it (that
   * provide rewards, or that are the initiators of the Milestone). I already regret
   * this, even as I'm typing it. [I told you I'd regret this] You see, sometimes a
   * milestone may be directly correlated with a set of vendors that provide varying
   * tiers of rewards. The player may not be able to interact with one or more of
   * those vendors. This will return the hashes of the Vendors that the player *can*
   * interact with, allowing you to show their current inventory as rewards or
   * related items to the Milestone or its activities.
   *
   * Before we even use it, it's already deprecated! How much of a bummer is that? We
   * need more data. Mapped to DestinyVendorDefinition in the manifest.
   */
  readonly vendorHashes: number[];
  /**
   * Replaces vendorHashes, which I knew was going to be trouble the day it walked in
   * the door. This will return not only what Vendors are active and relevant to the
   * activity (in an implied order that you can choose to ignore), but also other
   * data - for example, if the Vendor is featuring a specific item relevant to this
   * event that you should show with them.
   */
  readonly vendors: DestinyMilestoneVendor[];
  /**
   * If the entity to which this component is attached has known active Rewards for
   * the player, this will detail information about those rewards, keyed by the
   * RewardEntry Hash. (See DestinyMilestoneDefinition for more information about
   * Reward Entries) Note that these rewards are not for the Quests related to the
   * Milestone. Think of these as "overview/checklist" rewards that may be provided
   * for Milestones that may provide rewards for performing a variety of tasks that
   * aren't under a specific Quest.
   */
  readonly rewards: DestinyMilestoneRewardCategory[];
  /**
   * If known, this is the date when the event last began or refreshed. It will only
   * be populated for events with fixed and repeating start and end dates.
   */
  readonly startDate?: string;
  /**
   * If known, this is the date when the event will next end or repeat. It will only
   * be populated for events with fixed and repeating start and end dates.
   */
  readonly endDate?: string;
  /**
   * Used for ordering milestones in a display to match how we order them in BNet.
   * May pull from static data, or possibly in the future from dynamic information.
   */
  readonly order: number;
}
