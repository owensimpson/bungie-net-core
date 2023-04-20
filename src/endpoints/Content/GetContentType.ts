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
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { ContentTypeDescription } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Content.GetContentType} */
export type GetContentTypeParams = {
  type: string;
};

/**
 * Gets an object describing a particular variant of content.
 * @see {@link https://bungie-net.github.io/#Content.GetContentType}
 */
export async function getContentType(
  this: AccessTokenObject | void,
  params: GetContentTypeParams
): Promise<BungieNetResponse<ContentTypeDescription>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<ContentTypeDescription>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Content/GetContentType/${params.type}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
