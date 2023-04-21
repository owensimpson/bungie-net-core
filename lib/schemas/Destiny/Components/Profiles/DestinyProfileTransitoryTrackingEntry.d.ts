/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * This represents a single "thing" being tracked by the player.
 *
 * This can point to many types of entities, but only a subset of them will
 * actually have a valid hash identifier for whatever it is being pointed to.
 *
 * It's up to you to interpret what it means when various combinations of these
 * entries have values being tracked.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileTransitoryTrackingEntry}
*/
export interface DestinyProfileTransitoryTrackingEntry {
    /**
     * OPTIONAL - If this is tracking a DestinyLocationDefinition, this is the
     * identifier for that location. Mapped to DestinyLocationDefinition in the
     * manifest.
    */
    readonly locationHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a DestinyInventoryItemDefinition,
     * this is the identifier for that item. Mapped to DestinyInventoryItemDefinition
     * in the manifest.
    */
    readonly itemHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a DestinyObjectiveDefinition, this
     * is the identifier for that objective. Mapped to DestinyObjectiveDefinition in
     * the manifest.
    */
    readonly objectiveHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a DestinyActivityDefinition, this
     * is the identifier for that activity. Mapped to DestinyActivityDefinition in the
     * manifest.
    */
    readonly activityHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a quest, this is the identifier for
     * the DestinyInventoryItemDefinition that containst that questline data. Mapped to
     * DestinyInventoryItemDefinition in the manifest.
    */
    readonly questlineItemHash?: number;
    /**
     * OPTIONAL - I've got to level with you, I don't really know what this is. Is it
     * when you started tracking it? Is it only populated for tracked items that have
     * time limits?
     *
     * I don't know, but we can get at it - when I get time to actually test what it is,
     * I'll update this. In the meantime, bask in the mysterious data.
    */
    readonly trackedDate?: string;
}
