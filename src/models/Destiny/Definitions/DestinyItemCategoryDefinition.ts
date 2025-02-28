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
import { DestinyBreakerType } from '../DestinyBreakerType';
import { DestinyItemType } from '../DestinyItemType';
import { DestinyItemSubType } from '../DestinyItemSubType';
import { DestinyClass } from '../DestinyClass';

/**
 * In an attempt to categorize items by type, usage, and other interesting
 * properties, we created DestinyItemCategoryDefinition: information about types
 * that is assembled using a set of heuristics that examine the properties of an
 * item such as what inventory bucket it's in, its item type name, and whether it
 * has or is missing certain blocks of data.
 *
 * This heuristic is imperfect, however. If you find an item miscategorized, let us
 * know on the Bungie API forums!
 *
 * We then populate all of the categories that we think an item belongs to in its
 * DestinyInventoryItemDefinition.itemCategoryHashes property. You can use that to
 * provide your own custom item filtering, sorting, aggregating... go nuts on it!
 * And let us know if you see more categories that you wish would be added!
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemCategoryDefinition}
 */

export interface DestinyItemCategoryDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * If True, this category should be visible in UI. Sometimes we make categories
   * that we don't think are interesting externally. It's up to you if you want to
   * skip on showing them.
   */
  readonly visible: boolean;
  /**
   * If True, this category has been deprecated: it may have no items left, or there
   * may be only legacy items that remain in it which are no longer relevant to the
   * game.
   */
  readonly deprecated: boolean;
  /**
   * A shortened version of the title. The reason why we have this is because the
   * Armory in German had titles that were too long to display in our UI, so these
   * were localized abbreviated versions of those categories. The property still
   * exists today, even though the Armory doesn't exist for D2... yet.
   */
  readonly shortTitle: string;
  /**
   * The janky regular expression we used against the item type to try and discern
   * whether the item belongs to this category.
   */
  readonly itemTypeRegex: string;
  /** If the item in question has this category, it also should have this breaker type. */
  readonly grantDestinyBreakerType: DestinyBreakerType;
  /**
   * If the item is a plug, this is the identifier we expect to find associated with
   * it if it is in this category.
   */
  readonly plugCategoryIdentifier: string;
  /** If the item type matches this janky regex, it does *not* belong to this category. */
  readonly itemTypeRegexNot: string;
  /** If the item belongs to this bucket, it does belong to this category. */
  readonly originBucketIdentifier: string;
  /**
   * If an item belongs to this category, it will also receive this item type. This
   * is now how DestinyItemType is populated for items: it used to be an even jankier
   * process, but that's a story that requires more alcohol.
   */
  readonly grantDestinyItemType: DestinyItemType;
  /**
   * If an item belongs to this category, it will also receive this subtype enum
   * value.
   *
   * I know what you're thinking - what if it belongs to multiple categories that
   * provide sub-types?
   *
   * The last one processed wins, as is the case with all of these "grant" enums. Now
   * you can see one reason why we moved away from these enums... but they're so
   * convenient when they work, aren't they?
   */
  readonly grantDestinySubType: DestinyItemSubType;
  /**
   * If an item belongs to this category, it will also get this class restriction
   * enum value.
   *
   * See the other "grant"-prefixed properties on this definition for my color
   * commentary.
   */
  readonly grantDestinyClass: DestinyClass;
  /** The traitId that can be found on items that belong to this category. */
  readonly traitId: string;
  /**
   * If this category is a "parent" category of other categories, those children will
   * have their hashes listed in rendering order here, and can be looked up using
   * these hashes against DestinyItemCategoryDefinition.
   *
   * In this way, you can build up a visual hierarchy of item categories. That's what
   * we did, and you can do it too. I believe in you. Yes, you, Carl.
   *
   * (I hope someone named Carl reads this someday) Mapped to
   * DestinyItemCategoryDefinition in the manifest.
   */
  readonly groupedCategoryHashes: number[];
  /**
   * All item category hashes of "parent" categories: categories that contain this as
   * a child through the hierarchy of groupedCategoryHashes. It's a bit redundant,
   * but having this child-centric list speeds up some calculations.
   */
  readonly parentCategoryHashes: number[];
  /**
   * If true, this category is only used for grouping, and should not be evaluated
   * with its own checks. Rather, the item only has this category if it has one of
   * its child categories.
   */
  readonly groupCategoryOnly: boolean;
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
