/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyDerivedItemCategoryDefinition } from './Items/DestinyDerivedItemCategoryDefinition';

/**
 * Items like Sacks or Boxes can have items that it shows in-game when you view
 * details that represent the items you can obtain if you use or acquire the item.
 *
 * This defines those categories, and gives some insights into that data's source.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemPreviewBlockDefinition}
 */
export interface DestinyItemPreviewBlockDefinition {
  /**
   * A string that the game UI uses as a hint for which detail screen to show for the
   * item. You, too, can leverage this for your own custom screen detail views. Note,
   * however, that these are arbitrarily defined by designers: there's no guarantees
   * of a fixed, known number of these - so fall back to something reasonable if you
   * don't recognize it.
   */
  readonly screenStyle: string;
  /**
   * If the preview data is derived from a fake "Preview" Vendor, this will be the
   * hash identifier for the DestinyVendorDefinition of that fake vendor. Mapped to
   * DestinyVendorDefinition in the manifest.
   */
  readonly previewVendorHash: number;
  /**
   * If this item should show you Artifact information when you preview it, this is
   * the hash identifier of the DestinyArtifactDefinition for the artifact whose data
   * should be shown. Mapped to DestinyArtifactDefinition in the manifest.
   */
  readonly artifactHash?: number;
  /**
   * If the preview has an associated action (like "Open"), this will be the
   * localized string for that action.
   */
  readonly previewActionString: string;
  /**
   * This is a list of the items being previewed, categorized in the same way as they
   * are in the preview UI.
   */
  readonly derivedItemCategories: DestinyDerivedItemCategoryDefinition[];
}
