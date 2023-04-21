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

import { DestinyCollectibleComponent } from './DestinyCollectibleComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Collectibles.DestinyProfileCollectiblesComponent} */
export interface DestinyProfileCollectiblesComponent {
  /**
   * The list of collectibles determined by the game as having been "recently"
   * acquired. Mapped to DestinyCollectibleDefinition in the manifest.
   */
  readonly recentCollectibleHashes: number[];
  /**
   * The list of collectibles determined by the game as having been "recently"
   * acquired.
   *
   * The game client itself actually controls this data, so I personally question
   * whether anyone will get much use out of this: because we can't edit this value
   * through the API. But in case anyone finds it useful, here it is. Mapped to
   * DestinyCollectibleDefinition in the manifest.
   */
  readonly newnessFlaggedCollectibleHashes: number[];
  /** Mapped to DestinyCollectibleDefinition in the manifest. */
  readonly collectibles: { [key: number]: DestinyCollectibleComponent };
  /**
   * The hash for the root presentation node definition of Collection categories.
   * Mapped to DestinyPresentationNodeDefinition in the manifest.
   */
  readonly collectionCategoriesRootNodeHash: number;
  /**
   * The hash for the root presentation node definition of Collection Badges. Mapped
   * to DestinyPresentationNodeDefinition in the manifest.
   */
  readonly collectionBadgesRootNodeHash: number;
}
