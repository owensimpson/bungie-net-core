/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes}
 */
export enum DestinyTalentNodeStepGuardianAttributes {
  None = 0,
  Stats = 1,
  Shields = 2,
  Health = 4,
  Revive = 8,
  AimUnderFire = 16,
  Radar = 32,
  Invisibility = 64,
  Reputations = 128,
  All = 255
}
