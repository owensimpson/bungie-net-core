/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyGatingScope } from '../DestinyGatingScope';
/**
 * Where the sausage gets made. Unlock Expressions are the foundation of the game's
 * gating mechanics and investment-related restrictions. They can test Unlock Flags
 * and Unlock Values for certain states, using a sufficient amount of logical
 * operators such that unlock expressions are effectively Turing complete.
 *
 * Use UnlockExpressionParser to evaluate expressions using an IUnlockContext
 * parsed from Babel.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyUnlockExpressionDefinition}
*/
export interface DestinyUnlockExpressionDefinition {
    /**
     * A shortcut for determining the most restrictive gating that this expression
     * performs. See the DestinyGatingScope enum's documentation for more details.
    */
    readonly scope: DestinyGatingScope;
}
