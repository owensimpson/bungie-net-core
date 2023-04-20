/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyRecordComponent } from './DestinyRecordComponent';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Records.DestinyCharacterRecordsComponent} */
export interface DestinyCharacterRecordsComponent {
    /** Mapped to DestinyRecordDefinition in the manifest. */
    readonly featuredRecordHashes: number[];
    readonly records: {
        [key: number]: DestinyRecordComponent;
    };
    /**
     * The hash for the root presentation node definition of Triumph categories. Mapped
     * to DestinyPresentationNodeDefinition in the manifest.
    */
    readonly recordCategoriesRootNodeHash: number;
    /**
     * The hash for the root presentation node definition of Triumph Seals. Mapped to
     * DestinyPresentationNodeDefinition in the manifest.
    */
    readonly recordSealsRootNodeHash: number;
}
