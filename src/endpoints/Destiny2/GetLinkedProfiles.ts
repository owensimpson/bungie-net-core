/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieMembershipType } from '../../enums/BungieMembershipType';
import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { DestinyLinkedProfilesResponse } from '../../models/Destiny/Responses/DestinyLinkedProfilesResponse';

/**
 * Returns a summary information about all profiles linked to the requesting
 * membership type/membership ID that have valid Destiny information. The passed-in
 * Membership Type/Membership ID may be a Bungie.Net membership or a Destiny
 * membership. It only returns the minimal amount of data to begin making more
 * substantive requests, but will hopefully serve as a useful alternative to
 * UserServices for people who just care about Destiny data. Note that it will only
 * return linked accounts whose linkages you are allowed to view.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetLinkedProfiles}
 */
export async function getLinkedProfiles(
  params: {
    /**
     * (optional) if set to 'true', all memberships regardless of whether they're
     * obscured by overrides will be returned. Normal privacy restrictions on account
     * linking will still apply no matter what.
     */
    getAllMemberships?: boolean;
    /**
     * The ID of the membership whose linked Destiny accounts you want returned. Make
     * sure your membership ID matches its Membership Type: don't pass us a PSN
     * membership ID and the XBox membership type, it's not going to work!
     */
    membershipId: string;
    /** The type for the membership whose linked Destiny accounts you want returned. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<DestinyLinkedProfilesResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`
  );
  params.getAllMemberships !== undefined &&
    url.searchParams.set('getAllMemberships', String(params.getAllMemberships));
  return client.fetch({ method: 'GET', url });
}
