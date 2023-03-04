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
import { DestinyProgressionResetEntry } from '../DestinyProgressionResetEntry';
import { DestinyProgressionRewardItemState } from '../DestinyProgressionRewardItemState';
/**
 * Mostly for historical purposes, we segregate Faction progressions from other
 * progressions. This is just a DestinyProgression with a shortcut for finding the
 * DestinyFactionDefinition of the faction related to the progression.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Progression.DestinyFactionProgression}
 */
export interface DestinyFactionProgression {
    /**
     * The hash identifier of the Faction related to this progression. Use it to look
     * up the DestinyFactionDefinition for more rendering info. Mapped to
     * DestinyFactionDefinition in the manifest.
     */
    readonly factionHash: number;
    /**
     * The index of the Faction vendor that is currently available. Will be set to -1
     * if no vendors are available.
     */
    readonly factionVendorIndex: number;
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
