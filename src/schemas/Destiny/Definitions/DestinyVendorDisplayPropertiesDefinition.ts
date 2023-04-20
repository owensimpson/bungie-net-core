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

import { DestinyVendorRequirementDisplayEntryDefinition } from './DestinyVendorRequirementDisplayEntryDefinition';
import { DestinyIconSequenceDefinition } from './Common/DestinyIconSequenceDefinition';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorDisplayPropertiesDefinition} */
export interface DestinyVendorDisplayPropertiesDefinition {
  /**
   * I regret calling this a "large icon". It's more like a medium-sized image with a
   * picture of the vendor's mug on it, trying their best to look cool. Not what one
   * would call an icon.
   */
  readonly largeIcon: string;
  readonly subtitle: string;
  /**
   * If we replaced the icon with something more glitzy, this is the original icon
   * that the vendor had according to the game's content. It may be more lame and/or
   * have less razzle-dazzle. But who am I to tell you which icon to use.
   */
  readonly originalIcon: string;
  /**
   * Vendors, in addition to expected display property data, may also show some "
   * common requirements" as statically defined definition data. This might be when a
   * vendor accepts a single type of currency, or when the currency is unique to the
   * vendor and the designers wanted to show that currency when you interact with the
   * vendor.
   */
  readonly requirementsDisplay: DestinyVendorRequirementDisplayEntryDefinition[];
  /** This is the icon used in parts of the game UI such as the vendor's waypoint. */
  readonly smallTransparentIcon: string;
  /** This is the icon used in the map overview, when the vendor is located on the map. */
  readonly mapIcon: string;
  /**
   * This is apparently the "Watermark". I am not certain offhand where this is
   * actually used in the Game UI, but some people may find it useful.
   */
  readonly largeTransparentIcon: string;
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
