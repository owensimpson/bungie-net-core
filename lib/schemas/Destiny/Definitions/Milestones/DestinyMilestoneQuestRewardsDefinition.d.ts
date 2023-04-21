/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyMilestoneQuestRewardItem } from './DestinyMilestoneQuestRewardItem';
/**
 * If rewards are given in a quest - as opposed to overall in the entire Milestone -
 * there's way less to track. We're going to simplify this contract as a result.
 * However, this also gives us the opportunity to potentially put more than just
 * item information into the reward data if we're able to mine it out in the future.
 * Remember this if you come back and ask "why are quest reward items nested
 * inside of their own class?"
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardsDefinition}
*/
export interface DestinyMilestoneQuestRewardsDefinition {
    /**
     * The items that represent your reward for completing the quest.
     *
     * Be warned, these could be "dummy" items: items that are only used to render a
     * good-looking in-game tooltip, but aren't the actual items themselves.
     *
     * For instance, when experience is given there's often a dummy item representing "
     * experience", with quantity being the amount of experience you got. We don't have
     * a programmatic association between those and whatever Progression is actually
     * getting that experience... yet.
    */
    readonly items: DestinyMilestoneQuestRewardItem[];
}
