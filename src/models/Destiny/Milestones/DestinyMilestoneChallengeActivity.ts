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

import { DestinyChallengeStatus } from '../Challenges/DestinyChallengeStatus';
import { DestinyMilestoneActivityPhase } from './DestinyMilestoneActivityPhase';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneChallengeActivity} */

export interface DestinyMilestoneChallengeActivity {
  /** Mapped to DestinyActivityDefinition in the manifest. */
  readonly activityHash: number;
  readonly challenges: DestinyChallengeStatus[];
  /**
   * If the activity has modifiers, this will be the list of modifiers that all
   * variants have in common. Perform lookups against
   * DestinyActivityModifierDefinition which defines the modifier being applied to
   * get at the modifier data.
   *
   * Note that, in the DestiyActivityDefinition, you will see many more modifiers
   * than this being referred to: those are all *possible* modifiers for the activity,
   * not the active ones. Use only the active ones to match what's really live.
   * Mapped to DestinyActivityModifierDefinition in the manifest.
   */
  readonly modifierHashes: number[];
  /**
   * The set of activity options for this activity, keyed by an identifier that's
   * unique for this activity (not guaranteed to be unique between or across all
   * activities, though should be unique for every *variant* of a given *conceptual*
   * activity: for instance, the original D2 Raid has many variant
   * DestinyActivityDefinitions. While other activities could potentially have the
   * same option hashes, for any given D2 base Raid variant the hash will be unique).
   *
   * As a concrete example of this data, the hashes you get for Raids will correspond
   * to the currently active "Challenge Mode".
   *
   * We don't have any human readable information for these, but saavy 3rd party app
   * users could manually associate the key (a hash identifier for the "option" that
   * is enabled/disabled) and the value (whether it's enabled or disabled presently)
   *
   * On our side, we don't necessarily even know what these are used for (the game
   * designers know, but we don't), and we have no human readable data for them. In
   * order to use them, you will have to do some experimentation.
   */
  readonly booleanActivityOptions: { [key: number]: boolean };
  /**
   * If returned, this is the index into the DestinyActivityDefinition's "loadouts"
   * property, indicating the currently active loadout requirements.
   */
  readonly loadoutRequirementIndex?: number;
  /**
   * If the Activity has discrete "phases" that we can track, that info will be here.
   * Otherwise, this value will be NULL. Note that this is a list and not a
   * dictionary: the order implies the ascending order of phases or progression in
   * this activity.
   */
  readonly phases?: DestinyMilestoneActivityPhase[];
}
