/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition'
import { DamageType } from '../DamageType'
import { DestinyColor } from '../Misc/DestinyColor'

/**
 * All damage types that are possible in the game are defined here, along with
 * localized info and icons as needed.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyDamageTypeDefinition}
*/
export interface DestinyDamageTypeDefinition {
  /** The description of the damage type, icon etc... */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** A variant of the icon that is transparent and colorless. */
  readonly transparentIconPath: string;
  /**
   * If TRUE, the game shows this damage type's icon. Otherwise, it doesn't. Whether
   * you show it or not is up to you.
  */
  readonly showIcon: boolean;
  /**
   * We have an enumeration for damage types for quick reference. This is the current
   * definition's damage type enum value.
  */
  readonly enumValue: DamageType;
  /**
   * A color associated with the damage type. The displayProperties icon is tinted
   * with a color close to this.
  */
  readonly color: DestinyColor;
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
