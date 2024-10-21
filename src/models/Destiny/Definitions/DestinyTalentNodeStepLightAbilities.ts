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

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepLightAbilities}
 */
export declare enum DestinyTalentNodeStepLightAbilities {
  None = 0,
  Grenades = 1,
  Melee = 2,
  MovementModes = 4,
  Orbs = 8,
  SuperEnergy = 16,
  SuperMods = 32,
  All = 63
}
