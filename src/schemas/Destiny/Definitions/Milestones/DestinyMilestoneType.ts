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
//

/**
 * The type of milestone. Milestones can be Tutorials, one-time/triggered/non-
 * repeating but not necessarily tutorials, or Repeating Milestones.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneType}
 */
export enum DestinyMilestoneType {
  Unknown = 0,
  /**
   * One-time milestones that are specifically oriented toward teaching players about
   * new mechanics and gameplay modes.
   */
  Tutorial = 1,
  /** Milestones that, once completed a single time, can never be repeated. */
  OneTime = 2,
  /**
   * Milestones that repeat/reset on a weekly basis. They need not all reset on the
   * same day or time, but do need to reset weekly to qualify for this type.
   */
  Weekly = 3,
  /** Milestones that repeat or reset on a daily basis. */
  Daily = 4,
  /**
   * Special indicates that the event is not on a daily/weekly cadence, but does
   * occur more than once. For instance, Iron Banner in Destiny 1 or the Dawning were
   * examples of what could be termed "Special" events.
   */
  Special = 5
}
