/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 * 
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 * 
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * A Flags Enumeration/bitmask where each bit represents a different state that the
 * Collectible can be in. A collectible can be in any number of these states, and
 * you can choose to use or ignore any or all of them when making your own UI that
 * shows Collectible info. Our displays are going to honor them, but we're also the
 * kind of people who only pretend to inhale before quickly passing it to the left.
 * So, you know, do what you got to do.
 *
 * (All joking aside, please note the caveat I mention around the Invisible flag:
 * there are cases where it is in the best interest of your users to honor these
 * flags even if you're a "show all the data" person. Collector-oriented compulsion
 * is a very unfortunate and real thing, and I would hate to instill that
 * compulsion in others through showing them items that they cannot earn. Please
 * consider this when you are making your own apps/sites.)
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyCollectibleState}
*/
export enum DestinyCollectibleState {
  None = 0,
  /** If this flag is set, you have not yet obtained this collectible. */
  NotAcquired = 1,
  /**
   * If this flag is set, the item is "obscured" to you: you can/should use the
   * alternate item hash found in DestinyCollectibleDefinition.stateInfo.
   * obscuredOverrideItemHash when displaying this collectible instead of the default
   * display info.
  */
  Obscured = 2,
  /**
   * If this flag is set, the collectible should not be shown to the user.
   *
   * Please do consider honoring this flag. It is used - for example - to hide items
   * that a person didn't get from the Eververse. I can't prevent these from being
   * returned in definitions, because some people may have acquired them and thus
   * they should show up: but I would hate for people to start feeling some variant
   * of a Collector's Remorse about these items, and thus increasing their purchasing
   * based on that compulsion. That would be a very unfortunate outcome, and one that
   * I wouldn't like to see happen. So please, whether or not I'm your mom, consider
   * honoring this flag and don't show people invisible collectibles.
  */
  Invisible = 4,
  /**
   * If this flag is set, the collectible requires payment for creating an instance
   * of the item, and you are lacking in currency. Bring the benjamins next time. Or
   * spinmetal. Whatever.
  */
  CannotAffordMaterialRequirements = 8,
  /**
   * If this flag is set, you can't pull this item out of your collection because
   * there's no room left in your inventory.
  */
  InventorySpaceUnavailable = 16,
  /**
   * If this flag is set, you already have one of these items and can't have a second
   * one.
  */
  UniquenessViolation = 32,
  /**
   * If this flag is set, the ability to pull this item out of your collection has
   * been disabled.
  */
  PurchaseDisabled = 64
}
