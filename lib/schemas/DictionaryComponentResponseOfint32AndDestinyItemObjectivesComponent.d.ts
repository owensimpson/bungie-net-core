/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyItemObjectivesComponent } from './Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { ComponentPrivacySetting } from './Components/ComponentPrivacySetting';
/** @see {@link https://bungie-net.github.io/#/components/schemas/DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent} */
export interface DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent {
    readonly data: {
        [key: number]: DestinyItemObjectivesComponent;
    };
    readonly privacy: ComponentPrivacySetting;
    /** If true, this component is disabled. */
    readonly disabled?: boolean;
}
