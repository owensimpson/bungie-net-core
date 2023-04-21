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
 * Represents a socket that has a plug associated with it intrinsically. This is
 * useful for situations where the weapon needs to have a visual plug/Mod on it,
 * but that plug/Mod should never change.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemIntrinsicSocketEntryDefinition}
 */
export interface DestinyItemIntrinsicSocketEntryDefinition {
  /**
   * Indicates the plug that is intrinsically inserted into this socket. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly plugItemHash: number;
  /**
   * Indicates the type of this intrinsic socket. Mapped to
   * DestinySocketTypeDefinition in the manifest.
   */
  readonly socketTypeHash: number;
  /**
   * If true, then this socket is visible in the item's "default" state. If you have
   * an instance, you should always check the runtime state, as that can override
   * this visibility setting: but if you're looking at the item on a conceptual level,
   * this property can be useful for hiding data such as legacy sockets - which
   * remain defined on items for infrastructure purposes, but can be confusing for
   * users to see.
   */
  readonly defaultVisible: boolean;
}
