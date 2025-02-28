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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.UnitType} */
export declare enum UnitType {
  None = 0,
  /** Indicates the statistic is a simple count of something. */
  Count = 1,
  /** Indicates the statistic is a per game average. */
  PerGame = 2,
  /** Indicates the number of seconds */
  Seconds = 3,
  /** Indicates the number of points earned */
  Points = 4,
  /** Values represents a team ID */
  Team = 5,
  /** Values represents a distance (units to-be-determined) */
  Distance = 6,
  /** Ratio represented as a whole value from 0 to 100. */
  Percent = 7,
  /** Ratio of something, shown with decimal places */
  Ratio = 8,
  /** True or false */
  Boolean = 9,
  /** The stat is actually a weapon type. */
  WeaponType = 10,
  /** Indicates victory, defeat, or something in between. */
  Standing = 11,
  /** Number of milliseconds some event spanned. For example, race time, or lap time. */
  Milliseconds = 12,
  /** The value is a enumeration of the Completion Reason type. */
  CompletionReason = 13
}
