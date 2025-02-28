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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Constants.DestinyEnvironmentLocationMapping} */

export interface DestinyEnvironmentLocationMapping {
  /**
   * The location that is revealed on the director by this mapping. Mapped to
   * DestinyLocationDefinition in the manifest.
   */
  readonly locationHash: number;
  /**
   * A hint that the UI uses to figure out how this location is activated by the
   * player.
   */
  readonly activationSource: string;
  /**
   * If this is populated, it is the item that you must possess for this location to
   * be active because of this mapping. (theoretically, a location can have multiple
   * mappings, and some might require an item while others don't) Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemHash?: number;
  /**
   * If this is populated, this is an objective related to the location. Mapped to
   * DestinyObjectiveDefinition in the manifest.
   */
  readonly objectiveHash?: number;
  /**
   * If this is populated, this is the activity you have to be playing in order to
   * see this location appear because of this mapping. (theoretically, a location can
   * have multiple mappings, and some might require you to be in a specific activity
   * when others don't) Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash?: number;
}
