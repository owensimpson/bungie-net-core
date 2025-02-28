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

/**
 * Activity Modes are grouped into a few possible broad categories.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityModeCategory}
 */
export declare enum DestinyActivityModeCategory {
  /** Activities that are neither PVP nor PVE, such as social activities. */
  None = 0,
  /** PvE activities, where you shoot aliens in the face. */
  PvE = 1,
  /** PvP activities, where you shoot your "friends". */
  PvP = 2,
  /**
   * PVE competitive activities, where you shoot whoever you want whenever you want.
   * Or run around collecting small glowing triangles.
   */
  PvECompetitive = 3
}
