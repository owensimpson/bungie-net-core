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

import { DestinyItemSubType } from '../../../enums/Destiny/DestinyItemSubType';
import { DestinyArrangementRegionFilterDefinition } from './DestinyArrangementRegionFilterDefinition';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinySandboxPatternDefinition} */

export interface DestinySandboxPatternDefinition {
  readonly patternHash: number;
  readonly patternGlobalTagIdHash: number;
  readonly weaponContentGroupHash: number;
  readonly weaponTranslationGroupHash: number;
  readonly weaponTypeHash?: number;
  readonly weaponType: DestinyItemSubType;
  readonly filters: DestinyArrangementRegionFilterDefinition[];
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
