/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * When a Graph needs to show active Progressions, this defines those objectives as
 * well as an identifier.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphDisplayProgressionDefinition}
 */

export interface DestinyActivityGraphDisplayProgressionDefinition {
  readonly id: number;
  readonly progressionHash: number;
}
