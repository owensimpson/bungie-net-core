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

import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../interfaces/SingleComponentResponse';
import { DestinyVendorGroupComponent } from '../Components/Vendors/DestinyVendorGroupComponent';
import { DictionaryComponentResponse } from '../../../interfaces/DictionaryComponentResponse';
import { DestinyPublicVendorComponent } from '../Components/Vendors/DestinyPublicVendorComponent';
import { DestinyVendorCategoriesComponent } from '../Entities/Vendors/DestinyVendorCategoriesComponent';
import { PublicDestinyVendorSaleItemSetComponent } from './PublicDestinyVendorSaleItemSetComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';

/**
 * A response containing all valid components for the public Vendors endpoint.
 *
 * It is a decisively smaller subset of data compared to what we can get when we
 * know the specific user making the request.
 *
 * If you want any of the other data - item details, whether or not you can buy it,
 * etc... you'll have to call in the context of a character. I know, sad but true.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyPublicVendorsResponse}
 */

export interface DestinyPublicVendorsResponse<T extends readonly DestinyComponentType[]> {
  /**
   * For Vendors being returned, this will give you the information you need to group
   * them and order them in the same way that the Bungie Companion app performs
   * grouping. It will automatically be returned if you request the Vendors component.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendorGroups: SingleComponentResponse<DestinyVendorGroupComponent, 'Vendors', T>;
  /**
   * The base properties of the vendor. These are keyed by the Vendor Hash, so you
   * will get one Vendor Component per vendor returned.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendors: DictionaryComponentResponse<number, DestinyPublicVendorComponent, 'Vendors', T>;
  /**
   * Categories that the vendor has available, and references to the sales therein.
   * These are keyed by the Vendor Hash, so you will get one Categories Component per
   * vendor returned.
   *
   * COMPONENT TYPE: VendorCategories
   */
  readonly categories: DictionaryComponentResponse<number, DestinyVendorCategoriesComponent, 'VendorCategories', T>;
  /**
   * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by
   * the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
   *
   * Note that within the Sale Item Set component, the sales are themselves keyed by
   * the vendorSaleIndex, so you can relate it to the corrent sale item definition
   * within the Vendor's definition.
   *
   * COMPONENT TYPE: VendorSales
   */
  readonly sales: DictionaryComponentResponse<number, PublicDestinyVendorSaleItemSetComponent, 'VendorSales', T>;
  /**
   * A set of string variable values by hash for a public vendors context.
   *
   * COMPONENT TYPE: StringVariables
   */
  readonly stringVariables: SingleComponentResponse<DestinyStringVariablesComponent, 'StringVariables', T>;
}
