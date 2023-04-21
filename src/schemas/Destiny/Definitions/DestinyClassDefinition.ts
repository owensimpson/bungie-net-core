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

import { DestinyClass } from '../DestinyClass';
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyGender } from '../DestinyGender';

/**
 * Defines a Character Class in Destiny 2. These are types of characters you can
 * play, like Titan, Warlock, and Hunter.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyClassDefinition}
 */
export interface DestinyClassDefinition {
  /**
   * In Destiny 1, we added a convenience Enumeration for referring to classes. We've
   * kept it, though mostly for posterity. This is the enum value for this definition'
   * s class.
   */
  readonly classType: DestinyClass;
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * A localized string referring to the singular form of the Class's name when
   * referred to in gendered form. Keyed by the DestinyGender.
   */
  readonly genderedClassNames: { [key in DestinyGender]: string };
  /** Mapped to DestinyGenderDefinition in the manifest. */
  readonly genderedClassNamesByGenderHash: { [key: number]: string };
  /**
   * Mentors don't really mean anything anymore. Don't expect this to be populated.
   * Mapped to DestinyVendorDefinition in the manifest.
   */
  readonly mentorVendorHash?: number;
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
