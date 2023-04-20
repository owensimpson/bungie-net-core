/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * An Unlock Value is an internal integer value, stored on the server and used in a
 * variety of ways, most frequently for the gating/requirement checks that the game
 * performs across all of its main features. They can also be used as the storage
 * data for mapped Progressions, Objectives, and other features that require
 * storage of variable numeric values.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyUnlockValueDefinition}
*/
export interface DestinyUnlockValueDefinition {
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
