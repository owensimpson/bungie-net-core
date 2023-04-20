/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyItemQuantity } from '../DestinyItemQuantity';
/**
 * Represents a reference to a Challenge, which for now is just an Objective.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityChallengeDefinition}
*/
export interface DestinyActivityChallengeDefinition {
    /**
     * The hash for the Objective that matches this challenge. Use it to look up the
     * DestinyObjectiveDefinition. Mapped to DestinyObjectiveDefinition in the manifest.
    */
    readonly objectiveHash: number;
    /**
     * The rewards as they're represented in the UI. Note that they generally link to "
     * dummy" items that give a summary of rewards rather than direct, real items
     * themselves.
     *
     * If the quantity is 0, don't show the quantity.
    */
    readonly dummyRewards: DestinyItemQuantity[];
}
