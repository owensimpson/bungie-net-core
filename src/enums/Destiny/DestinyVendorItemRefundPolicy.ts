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
 * The action that happens when the user attempts to refund an item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorItemRefundPolicy}
 */
export const enum DestinyVendorItemRefundPolicy {
  NotRefundable = 0,
  DeletesItem = 1,
  RevokesLicense = 2
}
