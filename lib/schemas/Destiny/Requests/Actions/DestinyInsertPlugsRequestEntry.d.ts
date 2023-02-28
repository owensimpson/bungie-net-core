/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinySocketArrayType } from './DestinySocketArrayType';
/**
 * Represents all of the data related to a single plug to be inserted.
 *
 * Note that, while you *can* point to a socket that represents infusion, you will
 * receive an error if you attempt to do so. Come on guys, let's play nice.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyInsertPlugsRequestEntry}
*/
export interface DestinyInsertPlugsRequestEntry {
    /**
     * The index into the socket array, which identifies the specific socket being
     * operated on. We also need to know the socketArrayType in order to uniquely
     * identify the socket.
     *
     * Don't point to or try to insert a plug into an infusion socket. It won't work.
    */
    readonly socketIndex: number;
    /**
     * This property, combined with the socketIndex, tells us which socket we are
     * referring to (since operations can be performed on both Intrinsic and "default"
     * sockets, and they occupy different arrays in the Inventory Item Definition). I
     * know, I know. Don't give me that look.
    */
    readonly socketArrayType: DestinySocketArrayType;
    /**
     * Plugs are never instanced (except in infusion). So with the hash alone, we
     * should be able to: 1) Infer whether the player actually needs to have the item,
     * or if it's a reusable plug 2) Perform any operation needed to use the Plug,
     * including removing the plug item and running reward sheets.
    */
    readonly plugItemHash: number;
}
