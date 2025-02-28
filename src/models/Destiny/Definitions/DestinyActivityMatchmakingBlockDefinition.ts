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
 * Information about matchmaking and party size for the activity.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityMatchmakingBlockDefinition}
 */

export interface DestinyActivityMatchmakingBlockDefinition {
  /**
   * If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a
   * party.
   */
  readonly isMatchmade: boolean;
  /** The minimum # of people in the fireteam for the activity to launch. */
  readonly minParty: number;
  /** The maximum # of people allowed in a Fireteam. */
  readonly maxParty: number;
  /** The maximum # of people allowed across all teams in the activity. */
  readonly maxPlayers: number;
  /** If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play. */
  readonly requiresGuardianOath: boolean;
}
