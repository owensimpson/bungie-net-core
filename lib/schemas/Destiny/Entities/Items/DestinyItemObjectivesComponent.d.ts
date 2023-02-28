/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';
/**
 * Items can have objectives and progression. When you request this block, you will
 * obtain information about any Objectives and progression tied to this item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemObjectivesComponent}
*/
export interface DestinyItemObjectivesComponent {
    /**
     * If the item has a hard association with objectives, your progress on them will
     * be defined here.
     *
     * Objectives are our standard way to describe a series of tasks that have to be
     * completed for a reward.
    */
    readonly objectives: DestinyObjectiveProgress[];
    /**
     * I may regret naming it this way - but this represents when an item has an
     * objective that doesn't serve a beneficial purpose, but rather is used for "
     * flavor" or additional information. For instance, when Emblems track specific
     * stats, those stats are represented as Objectives on the item.
    */
    readonly flavorObjective: DestinyObjectiveProgress;
    /**
     * If we have any information on when these objectives were completed, this will be
     * the date of that completion. This won't be on many items, but could be
     * interesting for some items that do store this information.
    */
    readonly dateCompleted?: string;
}
