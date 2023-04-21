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
import { DestinyActivityGraphNodeDefinition } from './DestinyActivityGraphNodeDefinition';
import { DestinyActivityGraphArtElementDefinition } from './DestinyActivityGraphArtElementDefinition';
import { DestinyActivityGraphConnectionDefinition } from './DestinyActivityGraphConnectionDefinition';
import { DestinyActivityGraphDisplayObjectiveDefinition } from './DestinyActivityGraphDisplayObjectiveDefinition';
import { DestinyActivityGraphDisplayProgressionDefinition } from './DestinyActivityGraphDisplayProgressionDefinition';
import { DestinyLinkedGraphDefinition } from './DestinyLinkedGraphDefinition';
/**
 * Represents a Map View in the director: be them overview views, destination views,
 * or other.
 *
 * They have nodes which map to activities, and other various visual elements that
 * we (or others) may or may not be able to use.
 *
 * Activity graphs, most importantly, have nodes which can have activities in
 * various states of playability.
 *
 * Unfortunately, activity graphs are combined at runtime with Game UI-only assets
 * such as fragments of map images, various in-game special effects, decals etc...
 * that we don't get in these definitions.
 *
 * If we end up having time, we may end up trying to manually populate those here:
 * but the last time we tried that, before the lead-up to D1, it proved to be
 * unmaintainable as the game's content changed. So don't bet the farm on us
 * providing that content in this definition.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphDefinition}
*/
export interface DestinyActivityGraphDefinition {
    /**
     * These represent the visual "nodes" on the map's view. These are the activities
     * you can click on in the map.
    */
    readonly nodes: DestinyActivityGraphNodeDefinition[];
    /** Represents one-off/special UI elements that appear on the map. */
    readonly artElements: DestinyActivityGraphArtElementDefinition[];
    /**
     * Represents connections between graph nodes. However, it lacks context that we'd
     * need to make good use of it.
    */
    readonly connections: DestinyActivityGraphConnectionDefinition[];
    /**
     * Objectives can display on maps, and this is supposedly metadata for that. I have
     * not had the time to analyze the details of what is useful within however: we
     * could be missing important data to make this work. Expect this property to be
     * expanded on later if possible.
    */
    readonly displayObjectives: DestinyActivityGraphDisplayObjectiveDefinition[];
    /**
     * Progressions can also display on maps, but similarly to displayObjectives we
     * appear to lack some required information and context right now. We will have to
     * look into it later and add more data if possible.
    */
    readonly displayProgressions: DestinyActivityGraphDisplayProgressionDefinition[];
    /** Represents links between this Activity Graph and other ones. */
    readonly linkedGraphs: DestinyLinkedGraphDefinition[];
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of
     * entity, but not globally.
     *
     * When entities refer to each other in Destiny content, it is this hash that they
     * are referring to.
    */
    readonly hash: number;
    /** The index of the entity as it was found in the investment tables. */
    readonly index: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination,
     * but BNet is not yet allowed to show it. Sorry!
    */
    readonly redacted: boolean;
}
