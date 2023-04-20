/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * Part of our dynamic, localized Milestone content is arbitrary categories of
 * items. These are built in our content management system, and thus aren't the
 * same as programmatically generated rewards.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneContentItemCategory}
 */
export interface DestinyMilestoneContentItemCategory {
  readonly title: string;
  /** Mapped to DestinyInventoryItemDefinition in the manifest. */
  readonly itemHashes: number[];
}
