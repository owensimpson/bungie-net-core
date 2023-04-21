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

import { DestinyKioskItem } from './DestinyKioskItem';

/**
 * A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether
 * you have already acquired that item before.
 *
 * This component returns information about what Kiosk items are available to you
 * on a *Profile* level. It is theoretically possible for Kiosks to have items
 * gated by specific Character as well. If you ever have those, you will find them
 * on the individual character's DestinyCharacterKiosksComponent.
 *
 * Note that, because this component returns vendorItemIndexes (that is to say,
 * indexes into the Kiosk Vendor's itemList property), these results are
 * necessarily content version dependent. Make sure that you have the latest
 * version of the content manifest databases before using this data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Kiosks.DestinyKiosksComponent}
 */
export interface DestinyKiosksComponent {
  /**
   * A dictionary keyed by the Kiosk Vendor's hash identifier (use it to look up the
   * DestinyVendorDefinition for the relevant kiosk vendor), and whose value is a
   * list of all the items that the user can "see" in the Kiosk, and any other
   * interesting metadata. Mapped to DestinyVendorDefinition in the manifest.
   */
  readonly kioskItems: { [key: number]: DestinyKioskItem[] };
}
