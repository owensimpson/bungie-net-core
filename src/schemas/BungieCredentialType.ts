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
 * The types of credentials the Accounts system supports. This is the external
 * facing enum used in place of the internal-only Bungie.SharedDefinitions.
 * CredentialType.
 * @see {@link https://bungie-net.github.io/#/components/schemas/BungieCredentialType}
 */
export enum BungieCredentialType {
  None = 0,
  Xuid = 1,
  Psnid = 2,
  Wlid = 3,
  Fake = 4,
  Facebook = 5,
  Google = 8,
  Windows = 9,
  DemonId = 10,
  SteamId = 12,
  BattleNetId = 14,
  StadiaId = 16,
  TwitchId = 18,
  EgsId = 20
}
