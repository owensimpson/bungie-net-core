/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { VendorDisplayCategorySortOrder } from '../VendorDisplayCategorySortOrder';

/**
 * Display Categories are different from "categories" in that these are
 * specifically for visual grouping and display of categories in Vendor UI. The "
 * categories" structure is for validation of the contained items, and can be
 * categorized entirely separately from "Display Categories", there need be and
 * often will be no meaningful relationship between the two.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyDisplayCategoryDefinition}
 */
export interface DestinyDisplayCategoryDefinition {
  readonly index: number;
  /** A string identifier for the display category. */
  readonly identifier: string;
  readonly displayCategoryHash: number;
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * If true, this category should be displayed in the "Banner" section of the vendor'
   * s UI.
   */
  readonly displayInBanner: boolean;
  /**
   * If it exists, this is the hash identifier of a DestinyProgressionDefinition that
   * represents the progression to show on this display category.
   *
   * Specific categories can now have thier own distinct progression, apparently. So
   * that's cool. Mapped to DestinyProgressionDefinition in the manifest.
   */
  readonly progressionHash?: number;
  /** If this category sorts items in a nonstandard way, this will be the way we sort. */
  readonly sortOrder: VendorDisplayCategorySortOrder;
  /**
   * An indicator of how the category will be displayed in the UI. It's up to you to
   * do something cool or interesting in response to this, or just to treat it as a
   * normal category.
   */
  readonly displayStyleHash?: number;
  /**
   * An indicator of how the category will be displayed in the UI. It's up to you to
   * do something cool or interesting in response to this, or just to treat it as a
   * normal category.
   */
  readonly displayStyleIdentifier: string;
}
