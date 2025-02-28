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
 * A reference to an Activity Modifier from another entity, such as an Activity (
 * for now, just Activities).
 *
 * This defines some
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityModifierReferenceDefinition}
 */

export interface DestinyActivityModifierReferenceDefinition {
  /**
   * The hash identifier for the DestinyActivityModifierDefinition referenced by this
   * activity. Mapped to DestinyActivityModifierDefinition in the manifest.
   */
  readonly activityModifierHash: number;
}
