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

import { GroupOptionalConversationEditRequest } from '../../models/GroupsV2/GroupOptionalConversationEditRequest';
import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';

/**
 * Edit the settings of an optional conversation/chat channel. Requires admin
 * permissions to the group.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditOptionalConversation}
 */
export async function editOptionalConversation(
  params: {
    /** Conversation Id of the channel being edited. */
    conversationId: string;
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionalConversationEditRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<unknown>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`
  );

  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}
