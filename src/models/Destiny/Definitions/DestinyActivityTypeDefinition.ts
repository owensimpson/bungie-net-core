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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';

/**
 * The definition for an Activity Type.
 *
 * In Destiny 2, an Activity Type represents a conceptual categorization of
 * Activities.
 *
 * These are most commonly used in the game for the subtitle under Activities, but
 * BNet uses them extensively to identify and group activities by their common
 * properties.
 *
 * Unfortunately, there has been a movement away from providing the richer data in
 * Destiny 2 that we used to get in Destiny 1 for Activity Types. For instance,
 * Nightfalls are grouped under the same Activity Type as regular Strikes.
 *
 * For this reason, BNet will eventually migrate toward Activity Modes as a better
 * indicator of activity category. But for the time being, it is still referred to
 * in many places across our codebase.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityTypeDefinition}
 */

export interface DestinyActivityTypeDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
