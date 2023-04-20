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
import { DestinyItemPlug } from '../../Sockets/DestinyItemPlug';
/**
 * Sockets may refer to a "Plug Set": a set of reusable plugs that may be shared
 * across multiple sockets (or even, in theory, multiple sockets over multiple
 * items).
 *
 * This is the set of those plugs that we came across in the users' inventory,
 * along with the values for plugs in the set. Any given set in this component may
 * be represented in Character and Profile-level, as some plugs may be Profile-
 * level restricted, and some character-level restricted. (note that the ones that
 * are even more specific will remain on the actual socket component itself, as
 * they cannot be reused)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.PlugSets.DestinyPlugSetsComponent}
*/
export interface DestinyPlugSetsComponent {
    /**
     * The shared list of plugs for each relevant PlugSet, keyed by the hash identifier
     * of the PlugSet (DestinyPlugSetDefinition). Mapped to DestinyPlugSetDefinition in
     * the manifest.
    */
    readonly plugs: {
        [key: number]: DestinyItemPlug[];
    };
}
