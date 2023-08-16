/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * When a Vendor Interaction provides rewards, they'll either let you choose one or
 * let you have all of them. This determines which it will be.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorInteractionRewardSelection}
 */
export const enum DestinyVendorInteractionRewardSelection {
  None = 0,
  One = 1,
  All = 2
}
