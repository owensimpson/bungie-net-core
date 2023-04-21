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

/**
 * Indicates the status of an "Unlock Flag" on a Character or Profile.
 *
 * These are individual bits of state that can be either set or not set, and
 * sometimes provide interesting human-readable information in their related
 * DestinyUnlockDefinition.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyUnlockStatus}
 */
export interface DestinyUnlockStatus {
  /**
   * The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition
   * for static data. Not all unlocks have human readable data - in fact, most don't.
   * But when they do, it can be very useful to show. Even if they don't have human
   * readable data, you might be able to infer the meaning of an unlock flag with a
   * bit of experimentation... Mapped to DestinyUnlockDefinition in the manifest.
   */
  readonly unlockHash: number;
  /** Whether the unlock flag is set. */
  readonly isSet: boolean;
}
