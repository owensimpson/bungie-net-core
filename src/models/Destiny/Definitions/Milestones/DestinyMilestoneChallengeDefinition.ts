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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneChallengeDefinition} */

export interface DestinyMilestoneChallengeDefinition {
  /**
   * The challenge related to this milestone. Mapped to DestinyObjectiveDefinition in
   * the manifest.
   */
  readonly challengeObjectiveHash: number;
}
