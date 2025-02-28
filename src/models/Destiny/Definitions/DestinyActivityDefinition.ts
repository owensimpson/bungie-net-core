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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyActivityRewardDefinition } from './DestinyActivityRewardDefinition';
import { DestinyActivityModifierReferenceDefinition } from './DestinyActivityModifierReferenceDefinition';
import { DestinyActivityChallengeDefinition } from './DestinyActivityChallengeDefinition';
import { DestinyActivityUnlockStringDefinition } from './DestinyActivityUnlockStringDefinition';
import { DestinyActivityRequirementsBlock } from './DestinyActivityRequirementsBlock';
import { DestinyActivityPlaylistItemDefinition } from './DestinyActivityPlaylistItemDefinition';
import { DestinyActivityGraphListEntryDefinition } from './DestinyActivityGraphListEntryDefinition';
import { DestinyActivityMatchmakingBlockDefinition } from './DestinyActivityMatchmakingBlockDefinition';
import { DestinyActivityGuidedBlockDefinition } from './DestinyActivityGuidedBlockDefinition';
import { DestinyActivityLoadoutRequirementSet } from './DestinyActivityLoadoutRequirementSet';
import { DestinyActivityModeType } from '../HistoricalStats/Definitions/DestinyActivityModeType';
import { DestinyActivityInsertionPointDefinition } from './DestinyActivityInsertionPointDefinition';
import { DestinyEnvironmentLocationMapping } from '../Constants/DestinyEnvironmentLocationMapping';

/**
 * The static data about Activities in Destiny 2.
 *
 * Note that an Activity must be combined with an ActivityMode to know - from a
 * Gameplay perspective - what the user is "Playing".
 *
 * In most PvE activities, this is fairly straightforward. A Story Activity can
 * only be played in the Story Activity Mode.
 *
 * However, in PvP activities, the Activity alone only tells you the map being
 * played, or the Playlist that the user chose to enter. You'll need to know the
 * Activity Mode they're playing to know that they're playing Mode X on Map Y.
 *
 * Activity Definitions tell a great deal of information about what *could* be
 * relevant to a user: what rewards they can earn, what challenges could be
 * performed, what modifiers could be applied. To figure out which of these
 * properties is actually live, you'll need to combine the definition with "Live"
 * data from one of the Destiny endpoints.
 *
 * Activities also have Activity Types, but unfortunately in Destiny 2 these are
 * even less reliable of a source of information than they were in Destiny 1. I
 * will be looking into ways to provide more reliable sources for type information
 * as time goes on, but for now we're going to have to deal with the limitations.
 * See DestinyActivityTypeDefinition for more information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityDefinition}
 */

export interface DestinyActivityDefinition {
  /**
   * The title, subtitle, and icon for the activity. We do a little post-processing
   * on this to try and account for Activities where the designers have left this
   * data too minimal to determine what activity is actually being played.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * The unadulterated form of the display properties, as they ought to be shown in
   * the Director (if the activity appears in the director).
   */
  readonly originalDisplayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * The title, subtitle, and icon for the activity as determined by Selection Screen
   * data, if there is any for this activity. There won't be data in this field if
   * the activity is never shown in a selection/options screen.
   */
  readonly selectionScreenDisplayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * If the activity has an icon associated with a specific release (such as a DLC),
   * this is the path to that release's icon.
   */
  readonly releaseIcon: string;
  /**
   * If the activity will not be visible until a specific and known time, this will
   * be the seconds since the Epoch when it will become visible.
   */
  readonly releaseTime: number;
  /** The recommended light level for this activity. */
  readonly activityLightLevel: number;
  /**
   * The hash identifier for the Destination on which this Activity is played. Use it
   * to look up the DestinyDestinationDefinition for human readable info about the
   * destination. A Destination can be thought of as a more specific location than a "
   * Place". For instance, if the "Place" is Earth, the "Destination" would be a
   * specific city or region on Earth. Mapped to DestinyDestinationDefinition in the
   * manifest.
   */
  readonly destinationHash: number;
  /**
   * The hash identifier for the "Place" on which this Activity is played. Use it to
   * look up the DestinyPlaceDefinition for human readable info about the Place. A
   * Place is the largest-scoped concept for location information. For instance, if
   * the "Place" is Earth, the "Destination" would be a specific city or region on
   * Earth. Mapped to DestinyPlaceDefinition in the manifest.
   */
  readonly placeHash: number;
  /**
   * The hash identifier for the Activity Type of this Activity. You may use it to
   * look up the DestinyActivityTypeDefinition for human readable info, but be
   * forewarned: Playlists and many PVP Map Activities will map to generic Activity
   * Types. You'll have to use your knowledge of the Activity Mode being played to
   * get more specific information about what the user is playing. Mapped to
   * DestinyActivityTypeDefinition in the manifest.
   */
  readonly activityTypeHash: number;
  /** The difficulty tier of the activity. */
  readonly tier: number;
  /**
   * When Activities are completed, we generate a "Post-Game Carnage Report", or PGCR,
   * with details about what happened in that activity (how many kills someone got,
   * which team won, etc...) We use this image as the background when displaying PGCR
   * information, and often use it when we refer to the Activity in general.
   */
  readonly pgcrImage: string;
  /**
   * The expected possible rewards for the activity. These rewards may or may not be
   * accessible for an individual player based on their character state, the account
   * state, and even the game's state overall. But it is a useful reference for
   * possible rewards you can earn in the activity. These match up to rewards
   * displayed when you hover over the Activity in the in-game Director, and often
   * refer to Placeholder or "Dummy" items: items that tell you what you can earn in
   * vague terms rather than what you'll specifically be earning (partly because the
   * game doesn't even know what you'll earn specifically until you roll for it at
   * the end)
   */
  readonly rewards: DestinyActivityRewardDefinition[];
  /**
   * Activities can have Modifiers, as defined in DestinyActivityModifierDefinition.
   * These are references to the modifiers that *can* be applied to that activity,
   * along with data that we use to determine if that modifier is actually active at
   * any given point in time.
   */
  readonly modifiers: DestinyActivityModifierReferenceDefinition[];
  /**
   * If True, this Activity is actually a Playlist that refers to multiple possible
   * specific Activities and Activity Modes. For instance, a Crucible Playlist may
   * have references to multiple Activities (Maps) with multiple Activity Modes (
   * specific PvP gameplay modes). If this is true, refer to the playlistItems
   * property for the specific entries in the playlist.
   */
  readonly isPlaylist: boolean;
  /**
   * An activity can have many Challenges, of which any subset of them may be active
   * for play at any given period of time. This gives the information about the
   * challenges and data that we use to understand when they're active and what
   * rewards they provide. Sadly, at the moment there's no central definition for
   * challenges: much like "Skulls" were in Destiny 1, these are defined on
   * individual activities and there can be many duplicates/near duplicates across
   * the Destiny 2 ecosystem. I have it in mind to centralize these in a future
   * revision of the API, but we are out of time.
   */
  readonly challenges: DestinyActivityChallengeDefinition[];
  /**
   * If there are status strings related to the activity and based on internal state
   * of the game, account, or character, then this will be the definition of those
   * strings and the states needed in order for the strings to be shown.
   */
  readonly optionalUnlockStrings: DestinyActivityUnlockStringDefinition[];
  readonly requirements: DestinyActivityRequirementsBlock;
  /**
   * Represents all of the possible activities that could be played in the Playlist,
   * along with information that we can use to determine if they are active at the
   * present time.
   */
  readonly playlistItems: DestinyActivityPlaylistItemDefinition[];
  /**
   * Unfortunately, in practice this is almost never populated. In theory, this is
   * supposed to tell which Activity Graph to show if you bring up the director while
   * in this activity.
   */
  readonly activityGraphList: DestinyActivityGraphListEntryDefinition[];
  /**
   * This block of data provides information about the Activity's matchmaking
   * attributes: how many people can join and such.
   */
  readonly matchmaking: DestinyActivityMatchmakingBlockDefinition;
  /**
   * This block of data, if it exists, provides information about the guided game
   * experience and restrictions for this activity. If it doesn't exist, the game is
   * not able to be played as a guided game.
   */
  readonly guidedGame: DestinyActivityGuidedBlockDefinition;
  /**
   * If this activity had an activity mode directly defined on it, this will be the
   * hash of that mode. Mapped to DestinyActivityModeDefinition in the manifest.
   */
  readonly directActivityModeHash?: number;
  /**
   * If the activity had an activity mode directly defined on it, this will be the
   * enum value of that mode.
   */
  readonly directActivityModeType?: number;
  /**
   * The set of all possible loadout requirements that could be active for this
   * activity. Only one will be active at any given time, and you can discover which
   * one through activity-associated data such as Milestones that have activity info
   * on them.
   */
  readonly loadouts: DestinyActivityLoadoutRequirementSet[];
  /**
   * The hash identifiers for Activity Modes relevant to this activity.  Note that if
   * this is a playlist, the specific playlist entry chosen will determine the actual
   * activity modes that end up being relevant. Mapped to
   * DestinyActivityModeDefinition in the manifest.
   */
  readonly activityModeHashes: number[];
  /**
   * The activity modes - if any - in enum form. Because we can't seem to escape the
   * enums.
   */
  readonly activityModeTypes: DestinyActivityModeType[];
  /** If true, this activity is a PVP activity or playlist. */
  readonly isPvP: boolean;
  /**
   * The list of phases or points of entry into an activity, along with information
   * we can use to determine their gating and availability.
   */
  readonly insertionPoints: DestinyActivityInsertionPointDefinition[];
  /**
   * A list of location mappings that are affected by this activity. Pulled out of
   * DestinyLocationDefinitions for our/your lookup convenience.
   */
  readonly activityLocationMappings: DestinyEnvironmentLocationMapping[];
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
