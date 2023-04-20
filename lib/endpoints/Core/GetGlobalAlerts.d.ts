/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { GlobalAlert } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#.GetGlobalAlerts} */
export declare type GetGlobalAlertsParams = {
    /** Determines whether Streaming Alerts are included in results */
    includestreaming?: boolean;
};
/**
 * Gets any active global alert for display in the forum banners, help pages, etc.
 * Usually used for DOC alerts.
 * @see {@link https://bungie-net.github.io/#.GetGlobalAlerts}
*/
export declare function getGlobalAlerts(this: AccessTokenObject | void, params: GetGlobalAlertsParams): Promise<BungieNetResponse<GlobalAlert[]>>;
