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

import { DestinyItemVersionDefinition } from './DestinyItemVersionDefinition';

/**
 * An item's "Quality" determines its calculated stats. The Level at which the item
 * spawns is combined with its "qualityLevel" along with some additional
 * calculations to determine the value of those stats.
 *
 * In Destiny 2, most items don't have default item levels and quality, making this
 * property less useful: these apparently are almost always determined by the
 * complex mechanisms of the Reward system rather than statically. They are still
 * provided here in case they are still useful for people. This also contains some
 * information about Infusion.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemQualityBlockDefinition}
 */
export interface DestinyItemQualityBlockDefinition {
  /**
   * The "base" defined level of an item. This is a list because, in theory, each
   * Expansion could define its own base level for an item.
   *
   * In practice, not only was that never done in Destiny 1, but now this isn't even
   * populated at all. When it's not populated, the level at which it spawns has to
   * be inferred by Reward information, of which BNet receives an imperfect view and
   * will only be reliable on instanced data as a result.
   */
  readonly itemLevels: number[];
  /**
   * qualityLevel is used in combination with the item's level to calculate stats
   * like Attack and Defense. It plays a role in that calculation, but not nearly as
   * large as itemLevel does.
   */
  readonly qualityLevel: number;
  /**
   * The string identifier for this item's "infusability", if any.
   *
   * Items that match the same infusionCategoryName are allowed to infuse with each
   * other.
   *
   * DEPRECATED: Items can now have multiple infusion categories. Please use
   * infusionCategoryHashes instead.
   */
  readonly infusionCategoryName: string;
  /**
   * The hash identifier for the infusion. It does not map to a Definition entity.
   *
   * DEPRECATED: Items can now have multiple infusion categories. Please use
   * infusionCategoryHashes instead.
   */
  readonly infusionCategoryHash: number;
  /**
   * If any one of these hashes matches any value in another item's
   * infusionCategoryHashes, the two can infuse with each other.
   */
  readonly infusionCategoryHashes: number[];
  /**
   * An item can refer to pre-set level requirements. They are defined in
   * DestinyProgressionLevelRequirementDefinition, and you can use this hash to find
   * the appropriate definition. Mapped to
   * DestinyProgressionLevelRequirementDefinition in the manifest.
   */
  readonly progressionLevelRequirementHash: number;
  /** The latest version available for this item. */
  readonly currentVersion: number;
  /** The list of versions available for this item. */
  readonly versions: DestinyItemVersionDefinition[];
  /** Icon overlays to denote the item version and power cap status. */
  readonly displayVersionWatermarkIcons: string[];
}
