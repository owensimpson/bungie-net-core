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
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.VendorItemStatus}
 */
export declare enum VendorItemStatus {
  Success = 0,
  NoInventorySpace = 1,
  NoFunds = 2,
  NoProgression = 4,
  NoUnlock = 8,
  NoQuantity = 16,
  OutsidePurchaseWindow = 32,
  NotAvailable = 64,
  UniquenessViolation = 128,
  UnknownError = 256,
  AlreadySelling = 512,
  Unsellable = 1024,
  SellingInhibited = 2048,
  AlreadyOwned = 4096,
  DisplayOnly = 8192
}
