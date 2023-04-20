/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyPublicMilestoneActivity } from './DestinyPublicMilestoneActivity';
import { DestinyPublicMilestoneChallenge } from './DestinyPublicMilestoneChallenge';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestoneQuest} */
export interface DestinyPublicMilestoneQuest {
    /**
     * Quests are defined as Items in content. As such, this is the hash identifier of
     * the DestinyInventoryItemDefinition that represents this quest. It will have
     * pointers to all of the steps in the quest, and display information for the quest
     * (title, description, icon etc) Individual steps will be referred to in the Quest
     * item's DestinyInventoryItemDefinition.setData property, and themselves are Items
     * with their own renderable data. Mapped to DestinyMilestoneDefinition in the
     * manifest.
    */
    readonly questItemHash: number;
    /**
     * A milestone need not have an active activity, but if there is one it will be
     * returned here, along with any variant and additional information.
    */
    readonly activity: DestinyPublicMilestoneActivity;
    /**
     * For the given quest there could be 0-to-Many challenges: mini quests that you
     * can perform in the course of doing this quest, that may grant you rewards and
     * benefits.
    */
    readonly challenges: DestinyPublicMilestoneChallenge[];
}
