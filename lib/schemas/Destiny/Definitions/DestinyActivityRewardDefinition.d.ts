/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyItemQuantity } from '../DestinyItemQuantity';
/**
 * Activities can refer to one or more sets of tooltip-friendly reward data. These
 * are the definitions for those tooltip friendly rewards.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityRewardDefinition}
*/
export interface DestinyActivityRewardDefinition {
    /** The header for the reward set, if any. */
    readonly rewardText: string;
    /**
     * The "Items provided" in the reward. This is almost always a pointer to a
     * DestinyInventoryItemDefintion for an item that you can't actually earn in-game,
     * but that has name/description/icon information for the vague concept of the
     * rewards you will receive. This is because the actual reward generation is non-
     * deterministic and extremely complicated, so the best the game can do is tell you
     * what you'll get in vague terms. And so too shall we.
     *
     * Interesting trivia: you actually *do* earn these items when you complete the
     * activity. They go into a single-slot bucket on your profile, which is how you
     * see the pop-ups of these rewards when you complete an activity that match these "
     * dummy" items. You can even see them if you look at the last one you earned in
     * your profile-level inventory through the BNet API! Who said reading
     * documentation is a waste of time?
    */
    readonly rewardItems: DestinyItemQuantity[];
}
