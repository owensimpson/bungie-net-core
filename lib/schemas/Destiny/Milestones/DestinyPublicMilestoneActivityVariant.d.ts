/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * Represents a variant of an activity that's relevant to a milestone.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestoneActivityVariant}
*/
export interface DestinyPublicMilestoneActivityVariant {
    /**
     * The hash identifier of this activity variant. Examine the activity's definition
     * in the Manifest database to determine what makes it a distinct variant. Usually
     * it will be difficulty level or whether or not it is a guided game variant of the
     * activity, but theoretically it could be distinguished in any arbitrary way.
     * Mapped to DestinyActivityDefinition in the manifest.
    */
    readonly activityHash: number;
    /**
     * The hash identifier of the most specific Activity Mode under which this activity
     * is played. This is useful for situations where the activity in question is - for
     * instance - a PVP map, but it's not clear what mode the PVP map is being played
     * under. If it's a playlist, this will be less specific: but hopefully useful in
     * some way. Mapped to DestinyActivityModeDefinition in the manifest.
    */
    readonly activityModeHash?: number;
    /**
     * The enumeration equivalent of the most specific Activity Mode under which this
     * activity is played.
    */
    readonly activityModeType?: number;
}
