/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyIconSequenceDefinition } from './DestinyIconSequenceDefinition';

/**
 * Many Destiny*Definition contracts - the "first order" entities of Destiny that
 * have their own tables in the Manifest Database - also have displayable
 * information. This is the base class for that display information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Common.DestinyDisplayPropertiesDefinition}
 */
export interface DestinyDisplayPropertiesDefinition {
  readonly description: string;
  readonly name: string;
  /**
   * Note that "icon" is sometimes misleading, and should be interpreted in the
   * context of the entity. For instance, in Destiny 1 the
   * DestinyRecordBookDefinition's icon was a big picture of a book.
   *
   * But usually, it will be a small square image that you can use as... well, an
   * icon.
   *
   * They are currently represented as 96px x 96px images.
   */
  readonly icon: string;
  readonly iconSequences: DestinyIconSequenceDefinition[];
  /**
   * If this item has a high-res icon (at least for now, many things won't), then the
   * path to that icon will be here.
   */
  readonly highResIcon: string;
  readonly hasIcon: boolean;
}
