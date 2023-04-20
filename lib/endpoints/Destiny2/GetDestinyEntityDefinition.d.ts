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
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { DestinyDefinition } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetDestinyEntityDefinition} */
export declare type GetDestinyEntityDefinitionParams = {
    /**
     * The type of entity for whom you would like results. These correspond to the
     * entity's definition contract name. For instance, if you are looking for items,
     * this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint
     * is still in beta, and may experience rough edges. The schema is tentatively in
     * final form, but there may be bugs that prevent desirable operation.
    */
    entityType: string;
    /** The hash identifier for the specific Entity you want returned. */
    hashIdentifier: number;
};
/**
 * Returns the static definition of an entity of the given Type and hash identifier.
 * Examine the API Documentation for the Type Names of entities that have their
 * own definitions. Note that the return type will always *inherit from*
 * DestinyDefinition, but the specific type returned will be the requested entity
 * type if it can be found. Please don't use this as a chatty alternative to the
 * Manifest database if you require large sets of data, but for simple and one-off
 * accesses this should be handy.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetDestinyEntityDefinition}
*/
export declare function getDestinyEntityDefinition(this: AccessTokenObject | void, params: GetDestinyEntityDefinitionParams): Promise<BungieNetResponse<DestinyDefinition>>;
