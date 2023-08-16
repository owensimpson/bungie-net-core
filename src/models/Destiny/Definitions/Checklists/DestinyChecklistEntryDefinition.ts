/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyScope } from '../../../../enums/Destiny/DestinyScope';

/**
 * The properties of an individual checklist item. Note that almost everything is
 * optional: it is *highly* variable what kind of data we'll actually be able to
 * return: at times we may have no other relationships to entities at all.
 *
 * Whatever UI you build, do it with the knowledge that any given entry might not
 * actually be able to be associated with some other Destiny entity.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Checklists.DestinyChecklistEntryDefinition}
 */

export interface DestinyChecklistEntryDefinition {
  /**
   * The identifier for this Checklist entry. Guaranteed unique only within this
   * Checklist Definition, and not globally/for all checklists.
   */
  readonly hash: number;
  /**
   * Even if no other associations exist, we will give you *something* for display
   * properties. In cases where we have no associated entities, it may be as simple
   * as a numerical identifier.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** Mapped to DestinyDestinationDefinition in the manifest. */
  readonly destinationHash?: number;
  /** Mapped to DestinyLocationDefinition in the manifest. */
  readonly locationHash?: number;
  /**
   * Note that a Bubble's hash doesn't uniquely identify a "top level" entity in
   * Destiny. Only the combination of location and bubble can uniquely identify a
   * place in the world of Destiny: so if bubbleHash is populated, locationHash must
   * too be populated for it to have any meaning.
   *
   * You can use this property if it is populated to look up the
   * DestinyLocationDefinition's associated .locationReleases[].activityBubbleName
   * property.
   */
  readonly bubbleHash?: number;
  /** Mapped to DestinyActivityDefinition in the manifest. */
  readonly activityHash?: number;
  /** Mapped to DestinyInventoryItemDefinition in the manifest. */
  readonly itemHash?: number;
  /** Mapped to DestinyVendorDefinition in the manifest. */
  readonly vendorHash?: number;
  readonly vendorInteractionIndex?: number;
  /** The scope at which this specific entry can be computed. */
  readonly scope: DestinyScope;
}
