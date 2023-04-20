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
 * If you look in the DestinyInventoryItemDefinition's "sockets" property, you'll
 * see that there are two types of sockets: intrinsic, and "socketEntry."
 *
 * Unfortunately, because Intrinsic sockets are a whole separate array, it is no
 * longer sufficient to know the index into that array to know which socket we're
 * talking about. You have to know whether it's in the default "socketEntries" or
 * if it's in the "intrinsic" list.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinySocketArrayType}
*/
export enum DestinySocketArrayType {
  Default = 0,
  Intrinsic = 1
}
