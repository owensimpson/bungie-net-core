/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyMilestoneActivityVariant } from './DestinyMilestoneActivityVariant';

/**
 * Sometimes, we know the specific activity that the Milestone wants you to play.
 * This entity provides additional information about that Activity and all of its
 * variants. (sometimes there's only one variant, but I think you get the point)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneActivity}
 */
export interface DestinyMilestoneActivity {
  /**
   * The hash of an arbitrarily chosen variant of this activity. We'll go ahead and
   * call that the "canonical" activity, because if you're using this value you
   * should only use it for properties that are common across the variants: things
   * like the name of the activity, it's location, etc... Use this hash to look up
   * the DestinyActivityDefinition of this activity for rendering data. Mapped to
   * DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
  /**
   * The hash identifier of the most specific Activity Mode under which this activity
   * is played. This is useful for situations where the activity in question is - for
   * instance - a PVP map, but it's not clear what mode the PVP map is being played
   * under. If it's a playlist, this will be less specific: but hopefully useful in
   * some way. Mapped to DestinyActivityModeDefinition in the manifest.
   */
  readonly activityModeHash?: number;
  /**
   * The enumeration equivalent of the most specific Activity Mode under which this
   * activity is played.
   */
  readonly activityModeType?: number;
  /**
   * If the activity has modifiers, this will be the list of modifiers that all
   * variants have in common. Perform lookups against
   * DestinyActivityModifierDefinition which defines the modifier being applied to
   * get at the modifier data. Note that, in the DestiyActivityDefinition, you will
   * see many more modifiers than this being referred to: those are all *possible*
   * modifiers for the activity, not the active ones. Use only the active ones to
   * match what's really live. Mapped to DestinyActivityModifierDefinition in the
   * manifest.
   */
  readonly modifierHashes: number[];
  /**
   * If you want more than just name/location/etc... you're going to have to dig into
   * and show the variants of the conceptual activity. These will differ in seemingly
   * arbitrary ways, like difficulty level and modifiers applied. Show it in whatever
   * way tickles your fancy.
   */
  readonly variants: DestinyMilestoneActivityVariant[];
}
