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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Loadouts.DestinyLoadoutConstantsDefinition} */
export interface DestinyLoadoutConstantsDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * This is the same icon as the one in the display properties, offered here as well
   * with a more descriptive name.
   */
  readonly whiteIconImagePath: string;
  /** This is a color-inverted version of the whiteIconImagePath. */
  readonly blackIconImagePath: string;
  /**
   * The maximum number of loadouts available to each character. The loadouts
   * component API response can return fewer loadouts than this, as more loadouts are
   * unlocked by reaching higher Guardian Ranks.
   */
  readonly loadoutCountPerCharacter: number;
  /**
   * A list of the socket category hashes to be filtered out of loadout item preview
   * displays. Mapped to DestinySocketCategoryDefinition in the manifest.
   */
  readonly loadoutPreviewFilterOutSocketCategoryHashes: number[];
  /**
   * A list of the socket type hashes to be filtered out of loadout item preview
   * displays. Mapped to DestinySocketTypeDefinition in the manifest.
   */
  readonly loadoutPreviewFilterOutSocketTypeHashes: number[];
  /**
   * A list of the loadout name hashes in index order, for convenience. Mapped to
   * DestinyLoadoutNameDefinition in the manifest.
   */
  readonly loadoutNameHashes: number[];
  /**
   * A list of the loadout icon hashes in index order, for convenience. Mapped to
   * DestinyLoadoutIconDefinition in the manifest.
   */
  readonly loadoutIconHashes: number[];
  /**
   * A list of the loadout color hashes in index order, for convenience. Mapped to
   * DestinyLoadoutColorDefinition in the manifest.
   */
  readonly loadoutColorHashes: number[];
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
