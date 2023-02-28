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
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { DestinyMilestoneContent } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetPublicMilestoneContent} */
export declare type GetPublicMilestoneContentParams = {
    /** The identifier for the milestone to be returned. */
    milestoneHash: number;
};
/**
 * Gets custom localized content for the milestone of the given hash, if it exists.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetPublicMilestoneContent}
*/
export declare function getPublicMilestoneContent(this: InstancedImport | AccessTokenObject | void, params: GetPublicMilestoneContentParams): Promise<BungieNetResponse<DestinyMilestoneContent>>;
