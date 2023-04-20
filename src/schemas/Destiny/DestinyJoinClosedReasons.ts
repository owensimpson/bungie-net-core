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

/**
 * A Flags enumeration representing the reasons why a person can't join this user's
 * fireteam.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyJoinClosedReasons}
 */
export enum DestinyJoinClosedReasons {
  None = 0,
  /** The user is currently in matchmaking. */
  InMatchmaking = 1,
  /** The user is currently in a loading screen. */
  Loading = 2,
  /** The user is in an activity that requires solo play. */
  SoloMode = 4,
  /**
   * The user can't be joined for one of a variety of internal reasons. Basically,
   * the game can't let you join at this time, but for reasons that aren't under the
   * control of this user.
   */
  InternalReasons = 8,
  /**
   * The user's current activity/quest/other transitory game state is preventing
   * joining.
   */
  DisallowedByGameState = 16,
  /** The user appears to be offline. */
  Offline = 32768
}
