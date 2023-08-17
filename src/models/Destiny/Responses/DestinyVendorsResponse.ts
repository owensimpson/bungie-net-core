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

import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../interfaces/SingleComponentResponse';
import { DestinyVendorGroupComponent } from '../Components/Vendors/DestinyVendorGroupComponent';
import { DictionaryComponentResponse } from '../../../interfaces/DictionaryComponentResponse';
import { DestinyVendorComponent } from '../Entities/Vendors/DestinyVendorComponent';
import { DestinyVendorCategoriesComponent } from '../Entities/Vendors/DestinyVendorCategoriesComponent';
import { PersonalDestinyVendorSaleItemSetComponent } from './PersonalDestinyVendorSaleItemSetComponent';
import { DestinyItemComponentSet } from '../../../interfaces/DestinyItemComponentSet';
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';

/**
 * A response containing all of the components for all requested vendors.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyVendorsResponse}
 */

export interface DestinyVendorsResponse<T extends readonly DestinyComponentType[]> {
  /**
   * For Vendors being returned, this will give you the information you need to group
   * them and order them in the same way that the Bungie Companion app performs
   * grouping. It will automatically be returned if you request the Vendors component.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendorGroups: SingleComponentResponse<DestinyVendorGroupComponent, T, DestinyComponentType.Vendors>;
  /**
   * The base properties of the vendor. These are keyed by the Vendor Hash, so you
   * will get one Vendor Component per vendor returned.
   *
   * COMPONENT TYPE: Vendors
   */
  readonly vendors: DictionaryComponentResponse<number, DestinyVendorComponent, T, DestinyComponentType.Vendors>;
  /**
   * Categories that the vendor has available, and references to the sales therein.
   * These are keyed by the Vendor Hash, so you will get one Categories Component per
   * vendor returned.
   *
   * COMPONENT TYPE: VendorCategories
   */
  readonly categories: DictionaryComponentResponse<
    number,
    DestinyVendorCategoriesComponent,
    T,
    DestinyComponentType.VendorCategories
  >;
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
  readonly sales: DictionaryComponentResponse<
    number,
    PersonalDestinyVendorSaleItemSetComponent,
    T,
    DestinyComponentType.VendorSales
  >;
  /**
   * The set of item detail components, one set of item components per Vendor. These
   * are keyed by the Vendor Hash, so you will get one Item Component Set per vendor
   * returned.
   *
   * The components contained inside are themselves keyed by the vendorSaleIndex, and
   * will have whatever item-level components you requested (Sockets, Stats, Instance
   * data etc...) per item being sold by the vendor.
   */
  readonly itemComponents: { [key: number]: DestinyItemComponentSet<number, T> };
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   */
  readonly currencyLookups: SingleComponentResponse<
    DestinyCurrenciesComponent,
    T,
    DestinyComponentType.CurrencyLookups
  >;
  /**
   * A map of string variable values by hash for this character context.
   *
   * COMPONENT TYPE: StringVariables
   */
  readonly stringVariables: SingleComponentResponse<
    DestinyStringVariablesComponent,
    T,
    DestinyComponentType.StringVariables
  >;
}
