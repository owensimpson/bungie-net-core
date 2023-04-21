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
/**
 * A hint for the UI as to what display information ought to be shown. Defaults to
 * showing the static MilestoneDefinition's display properties.
 *
 * If for some reason the indicated property is not populated, fall back to the
 * MilestoneDefinition.displayProperties.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneDisplayPreference}
*/
export declare enum DestinyMilestoneDisplayPreference {
    /**
     * Indicates you should show DestinyMilestoneDefinition.displayProperties for this
     * Milestone.
    */
    MilestoneDefinition = 0,
    /**
     * Indicates you should show the displayProperties for any currently active Quest
     * Steps in DestinyMilestone.availableQuests.
    */
    CurrentQuestSteps = 1,
    /**
     * Indicates you should show the displayProperties for any currently active
     * Activities and their Challenges in DestinyMilestone.activities.
    */
    CurrentActivityChallenges = 2
}
