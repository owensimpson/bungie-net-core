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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyObjectiveDisplayProperties} */
export interface DestinyObjectiveDisplayProperties {
  /**
   * The activity associated with this objective in the context of this item, if any.
   * Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash?: number;
  /** If true, the game shows this objective on item preview screens. */
  readonly displayOnItemPreviewScreen: boolean;
}
