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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Seasons.DestinySeasonPassDefinition} */

export interface DestinySeasonPassDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * This is the progression definition related to the progression for the initial
   * levels 1-100 that provide item rewards for the Season pass. Further experience
   * after you reach the limit is provided in the "Prestige" progression referred to
   * by prestigeProgressionHash. Mapped to DestinyProgressionDefinition in the
   * manifest.
   */
  readonly rewardProgressionHash: number;
  /**
   * I know what you're thinking, but I promise we're not going to duplicate and
   * drown you. Instead, we're giving you sweet, sweet power bonuses.
   *
   * Prestige progression is further progression that you can make on the Season
   * pass after you gain max ranks, that will ultimately increase your power/light
   * level over the theoretical limit. Mapped to DestinyProgressionDefinition in the
   * manifest.
   */
  readonly prestigeProgressionHash: number;
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
