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
import { DestinyProgressionResetEntry } from './DestinyProgressionResetEntry';
import { DestinyProgressionRewardItemState } from './DestinyProgressionRewardItemState';
/**
 * Information about a current character's status with a Progression. A progression
 * is a value that can increase with activity and has levels. Think Character Level
 * and Reputation Levels. Combine this "live" data with the related
 * DestinyProgressionDefinition for a full picture of the Progression.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgression}
*/
export interface DestinyProgression {
    /**
     * The hash identifier of the Progression in question. Use it to look up the
     * DestinyProgressionDefinition in static data. Mapped to
     * DestinyProgressionDefinition in the manifest.
    */
    readonly progressionHash: number;
    /** The amount of progress earned today for this progression. */
    readonly dailyProgress: number;
    /** If this progression has a daily limit, this is that limit. */
    readonly dailyLimit: number;
    /** The amount of progress earned toward this progression in the current week. */
    readonly weeklyProgress: number;
    /** If this progression has a weekly limit, this is that limit. */
    readonly weeklyLimit: number;
    /**
     * This is the total amount of progress obtained overall for this progression (for
     * instance, the total amount of Character Level experience earned)
    */
    readonly currentProgress: number;
    /** This is the level of the progression (for instance, the Character Level). */
    readonly level: number;
    /**
     * This is the maximum possible level you can achieve for this progression (for
     * example, the maximum character level obtainable)
    */
    readonly levelCap: number;
    /**
     * Progressions define their levels in "steps". Since the last step may be
     * repeatable, the user may be at a higher level than the actual Step achieved in
     * the progression. Not necessarily useful, but potentially interesting for those
     * cruising the API. Relate this to the "steps" property of the DestinyProgression
     * to see which step the user is on, if you care about that. (Note that this is
     * Content Version dependent since it refers to indexes.)
    */
    readonly stepIndex: number;
    /**
     * The amount of progression (i.e. "Experience") needed to reach the next level of
     * this Progression. Jeez, progression is such an overloaded word.
    */
    readonly progressToNextLevel: number;
    /**
     * The total amount of progression (i.e. "Experience") needed in order to reach the
     * next level.
    */
    readonly nextLevelAt: number;
    /**
     * The number of resets of this progression you've executed this season, if
     * applicable to this progression.
    */
    readonly currentResetCount?: number;
    /**
     * Information about historical resets of this progression, if there is any data
     * for it.
    */
    readonly seasonResets: DestinyProgressionResetEntry[];
    /**
     * Information about historical rewards for this progression, if there is any data
     * for it.
    */
    readonly rewardItemStates: DestinyProgressionRewardItemState[];
}
