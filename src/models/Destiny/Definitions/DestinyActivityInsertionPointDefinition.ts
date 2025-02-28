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
 * A point of entry into an activity, gated by an unlock flag and with some more-or-
 * less useless (for our purposes) phase information. I'm including it in case we
 * end up being able to bolt more useful information onto it in the future.
 *
 * UPDATE: Turns out this information isn't actually useless, and is in fact
 * actually useful for people. Who would have thought? We still don't have
 * localized info for it, but at least this will help people when they're looking
 * at phase indexes in stats data, or when they want to know what phases have been
 * completed on a weekly achievement.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityInsertionPointDefinition}
 */

export interface DestinyActivityInsertionPointDefinition {
  /**
   * A unique hash value representing the phase. This can be useful for, for example,
   * comparing how different instances of Raids have phases in different orders!
   */
  readonly phaseHash: number;
}
