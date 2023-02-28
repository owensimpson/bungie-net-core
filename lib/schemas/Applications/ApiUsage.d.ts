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
import { Series } from './Series';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Applications.ApiUsage} */
export interface ApiUsage {
    /** Counts for on API calls made for the time range. */
    readonly apiCalls: Series[];
    /**
     * Instances of blocked requests or requests that crossed the warn threshold during
     * the time range.
    */
    readonly throttledRequests: Series[];
}
