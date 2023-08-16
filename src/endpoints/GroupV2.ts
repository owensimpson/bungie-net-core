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

import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { GroupTheme } from '../models/Config/GroupTheme';
import { BungieMembershipType } from '../enums/BungieMembershipType';
import { GroupDateRange } from '../enums/GroupsV2/GroupDateRange';
import { GroupType } from '../enums/GroupsV2/GroupType';
import { GroupV2Card } from '../models/GroupsV2/GroupV2Card';
import { GroupQuery } from '../models/GroupsV2/GroupQuery';
import { GroupSearchResponse } from '../models/GroupsV2/GroupSearchResponse';
import { GroupResponse } from '../models/GroupsV2/GroupResponse';
import { GroupNameSearchRequest } from '../models/GroupsV2/GroupNameSearchRequest';
import { GroupOptionalConversation } from '../models/GroupsV2/GroupOptionalConversation';
import { GroupEditAction } from '../models/GroupsV2/GroupEditAction';
import { ClanBanner } from '../models/GroupsV2/ClanBanner';
import { GroupOptionsEditAction } from '../models/GroupsV2/GroupOptionsEditAction';
import { GroupOptionalConversationAddRequest } from '../models/GroupsV2/GroupOptionalConversationAddRequest';
import { GroupOptionalConversationEditRequest } from '../models/GroupsV2/GroupOptionalConversationEditRequest';
import { RuntimeGroupMemberType } from '../enums/GroupsV2/RuntimeGroupMemberType';
import { addParam } from '../util';
import { SearchResultOfGroupMember } from '../models/SearchResultOfGroupMember';
import { GroupMemberLeaveResult } from '../models/GroupsV2/GroupMemberLeaveResult';
import { GroupBanRequest } from '../models/GroupsV2/GroupBanRequest';
import { SearchResultOfGroupBan } from '../models/SearchResultOfGroupBan';
import { SearchResultOfGroupMemberApplication } from '../models/SearchResultOfGroupMemberApplication';
import { GroupApplicationRequest } from '../models/GroupsV2/GroupApplicationRequest';
import { EntityActionResult } from '../models/Entities/EntityActionResult';
import { GroupApplicationListRequest } from '../models/GroupsV2/GroupApplicationListRequest';
import { GroupsForMemberFilter } from '../enums/GroupsV2/GroupsForMemberFilter';
import { GetGroupsForMemberResponse } from '../models/GroupsV2/GetGroupsForMemberResponse';
import { GroupMembershipSearchResponse } from '../models/GroupsV2/GroupMembershipSearchResponse';
import { GroupPotentialMemberStatus } from '../enums/GroupsV2/GroupPotentialMemberStatus';
import { GroupPotentialMembershipSearchResponse } from '../models/GroupsV2/GroupPotentialMembershipSearchResponse';
import { GroupApplicationResponse } from '../models/GroupsV2/GroupApplicationResponse';

/**
 * Returns a list of all available group avatars for the signed-in user.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAvailableAvatars}
 */
export async function getAvailableAvatars(
  client: BungieClientProtocol
): Promise<BungieNetResponse<{ [key: number]: string }>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/GetAvailableAvatars/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns a list of all available group themes.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAvailableThemes}
 */
export async function getAvailableThemes(
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupTheme[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/GetAvailableThemes/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets the state of the user's clan invite preferences for a particular membership
 * type - true if they wish to be invited to clans, false otherwise.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting}
 */
export async function getUserClanInviteSetting(
  params: {
    /** The Destiny membership type of the account we wish to access settings. */
    mType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/${params.mType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets groups recommended for you based on the groups to whom those you follow
 * belong.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups}
 */
export async function getRecommendedGroups(
  params: {
    /** Requested range in which to pull recommended groups */
    createDateRange: GroupDateRange;
    /** Type of groups requested */
    groupType: GroupType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupV2Card[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/Recommended/${params.groupType}/${params.createDateRange}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Search for Groups.
 * @see {@link https://bungie-net.github.io/#GroupV2.GroupSearch}
 */
export async function groupSearch(
  body: GroupQuery,
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupSearchResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/GroupV2/Search/`);
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Get information about a specific group of the given ID.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroup}
 */
export async function getGroup(
  params: {
    /** Requested group's id. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Get information about a specific group with the given name and type.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName}
 */
export async function getGroupByName(
  params: {
    /** Exact name of the group to find. */
    groupName: string;
    /** Type of group to find. */
    groupType: GroupType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/Name/${params.groupName}/${params.groupType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Get information about a specific group with the given name and type. The POST
 * version.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByNameV2}
 */
export async function getGroupByNameV2(
  body: GroupNameSearchRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupResponse>> {
  const url = new URL(`https://www.bungie.net/Platform/GroupV2/NameV2/`);
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Gets a list of available optional conversation channels and their settings.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupOptionalConversations}
 */
export async function getGroupOptionalConversations(
  params: {
    /** Requested group's id. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupOptionalConversation[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Edit an existing group. You must have suitable permissions in the group to
 * perform this operation. This latest revision will only edit the fields you pass
 * in - pass null for properties you want to leave unaltered.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditGroup}
 */
export async function editGroup(
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupEditAction,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Edit/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Edit an existing group's clan banner. You must have suitable permissions in the
 * group to perform this operation. All fields are required.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditClanBanner}
 */
export async function editClanBanner(
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: ClanBanner,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditClanBanner/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Edit group options only available to a founder. You must have suitable
 * permissions in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditFounderOptions}
 */
export async function editFounderOptions(
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionsEditAction,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditFounderOptions/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Add a new optional conversation/chat channel. Requires admin permissions to the
 * group.
 * @see {@link https://bungie-net.github.io/#GroupV2.AddOptionalConversation}
 */
export async function addOptionalConversation(
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionalConversationAddRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<string>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Add/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

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
): Promise<BungieNetResponse<string>> {
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

/**
 * Get the list of members in a given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup}
 */
export async function getMembersOfGroup(
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** The ID of the group. */
    groupId: string;
    /** Filter out other member types. Use None for all members. */
    memberType?: RuntimeGroupMemberType;
    /**
     * The name fragment upon which a search should be executed for members with
     * matching display or unique names.
     */
    nameSearch?: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`
  );
  addParam(url, params['currentpage'], 'currentpage');
  addParam(url, params['memberType'], 'memberType');
  addParam(url, params['nameSearch'], 'nameSearch');
  return client.fetch({ method: 'GET', url });
}

/**
 * Get the list of members in a given group who are of admin level or higher.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAdminsAndFounderOfGroup}
 */
export async function getAdminsAndFounderOfGroup(
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** The ID of the group. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/AdminsAndFounder/`
  );
  addParam(url, params['currentpage'], 'currentpage');
  return client.fetch({ method: 'GET', url });
}

/**
 * Edit the membership type of a given member. You must have suitable permissions
 * in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditGroupMembership}
 */
export async function editGroupMembership(
  params: {
    /** ID of the group to which the member belongs. */
    groupId: string;
    /** Membership ID to modify. */
    membershipId: string;
    /** Membership type of the provide membership ID. */
    membershipType: BungieMembershipType;
    /** New membertype for the specified member. */
    memberType: RuntimeGroupMemberType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/SetMembershipType/${params.memberType}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Kick a member from the given group, forcing them to reapply if they wish to re-
 * join the group. You must have suitable permissions in the group to perform this
 * operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.KickMember}
 */
export async function kickMember(
  params: {
    /** Group ID to kick the user from. */
    groupId: string;
    /** Membership ID to kick. */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupMemberLeaveResult>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Kick/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Bans the requested member from the requested group for the specified period of
 * time.
 * @see {@link https://bungie-net.github.io/#GroupV2.BanMember}
 */
export async function banMember(
  params: {
    /** Group ID that has the member to ban. */
    groupId: string;
    /** Membership ID of the member to ban from the group. */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  },
  body: GroupBanRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Ban/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Unbans the requested member, allowing them to re-apply for membership.
 * @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember}
 */
export async function unbanMember(
  params: {
    groupId: string;
    /** Membership ID of the member to unban from the group */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Get the list of banned members in a given group. Only accessible to group Admins
 * and above. Not applicable to all groups. Check group features.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup}
 */
export async function getBannedMembersOfGroup(
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
    currentpage: number;
    /** Group ID whose banned members you are fetching */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupBan>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Banned/`
  );
  addParam(url, params['currentpage'], 'currentpage');
  return client.fetch({ method: 'GET', url });
}

/**
 * An administrative method to allow the founder of a group or clan to give up
 * their position to another admin permanently.
 * @see {@link https://bungie-net.github.io/#GroupV2.AbdicateFoundership}
 */
export async function abdicateFoundership(
  params: {
    /** The new founder for this group. Must already be a group admin. */
    founderIdNew: string;
    /** The target group id. */
    groupId: string;
    /** Membership type of the provided founderIdNew. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`
  );
  return client.fetch({ method: 'POST', url });
}

/**
 * Get the list of users who are awaiting a decision on their application to join a
 * given group. Modified to include application info.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPendingMemberships}
 */
export async function getPendingMemberships(
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** ID of the group. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Pending/`
  );
  addParam(url, params['currentpage'], 'currentpage');
  return client.fetch({ method: 'GET', url });
}

/**
 * Get the list of users who have been invited into the group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetInvitedIndividuals}
 */
export async function getInvitedIndividuals(
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** ID of the group. */
    groupId: string;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/InvitedIndividuals/`
  );
  addParam(url, params['currentpage'], 'currentpage');
  return client.fetch({ method: 'GET', url });
}

/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApproveAllPending}
 */
export async function approveAllPending(
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveAll/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Deny all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyAllPending}
 */
export async function denyAllPending(
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyAll/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePendingForList}
 */
export async function approvePendingForList(
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationListRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveList/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Approve the given membershipId to join the group/clan as long as they have
 * applied.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending}
 */
export async function approvePending(
  params: {
    /** ID of the group. */
    groupId: string;
    /** The membership id being approved. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  },
  body: GroupApplicationRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<boolean>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Approve/${params.membershipType}/${params.membershipId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Deny all of the pending users for the given group that match the passed-in .
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList}
 */
export async function denyPendingForList(
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationListRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyList/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Get information about the groups that a given member has joined.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
 */
export async function getGroupsForMember(
  params: {
    /** Filter apply to list of joined groups. */
    filter: GroupsForMemberFilter;
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GetGroupsForMemberResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 * @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder}
 */
export async function recoverGroupForFounder(
  params: {
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupMembershipSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Get information about the groups that a given member has applied to or been
 * invited to.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPotentialGroupsForMember}
 */
export async function getPotentialGroupsForMember(
  params: {
    /** Filter apply to list of potential joined groups. */
    filter: GroupPotentialMemberStatus;
    /** Type of group the supplied member applied. */
    groupType: GroupType;
    /** Membership ID to for which to find applied groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupPotentialMembershipSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/User/Potential/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Invite a user to join this group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInvite}
 */
export async function individualGroupInvite(
  params: {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being invited. */
    membershipId: string;
    /** MembershipType of the account being invited. */
    membershipType: BungieMembershipType;
  },
  body: GroupApplicationRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupApplicationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInvite/${params.membershipType}/${params.membershipId}/`
  );
  return client.fetch({
    method: 'POST',
    url,
    body,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Cancels a pending invitation to join a group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel}
 */
export async function individualGroupInviteCancel(
  params: {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being cancelled. */
    membershipId: string;
    /** MembershipType of the account being cancelled. */
    membershipType: BungieMembershipType;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<GroupApplicationResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`
  );
  return client.fetch({ method: 'POST', url });
}
