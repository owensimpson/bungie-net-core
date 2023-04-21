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
 * Indicates how a socket is populated, and where you should look for valid plug
 * data.
 *
 * This is a flags enumeration/bitmask field, as you may have to look in multiple
 * sources across multiple components for valid plugs.
 *
 * For instance, a socket could have plugs that are sourced from its own
 * definition, as well as plugs that are sourced from Character-scoped AND profile-
 * scoped Plug Sets. Only by combining plug data for every indicated source will
 * you be able to know all of the plugs available for a socket.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.SocketPlugSources}
 */
export enum SocketPlugSources {
  /** If there's no way we can detect to insert new plugs. */
  None = 0,
  /**
   * Use plugs found in the player's inventory, based on the socket type rules (see
   * DestinySocketTypeDefinition for more info)
   *
   * Note that a socket - like Shaders - can have *both* reusable plugs and inventory
   * items inserted theoretically.
   */
  InventorySourced = 1,
  /**
   * Use the DestinyItemSocketsComponent.sockets.reusablePlugs property to determine
   * which plugs are valid for this socket. This may have to be combined with other
   * sources, such as plug sets, if those flags are set.
   *
   * Note that "Reusable" plugs may not necessarily come from a plug set, nor from
   * the "reusablePlugItems" in the socket's Definition data. They can sometimes be "
   * randomized" in which case the only source of truth at the moment is still the
   * runtime DestinyItemSocketsComponent.sockets.reusablePlugs property.
   */
  ReusablePlugItems = 2,
  /**
   * Use the ProfilePlugSets (DestinyProfileResponse.profilePlugSets) component data
   * to determine which plugs are valid for this socket.
   */
  ProfilePlugSet = 4,
  /**
   * Use the CharacterPlugSets (DestinyProfileResponse.characterPlugSets) component
   * data to determine which plugs are valid for this socket.
   */
  CharacterPlugSet = 8
}
