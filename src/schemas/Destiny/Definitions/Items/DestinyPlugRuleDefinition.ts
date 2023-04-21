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
//

/**
 * Dictates a rule around whether the plug is enabled or insertable.
 *
 * In practice, the live Destiny data will refer to these entries by index. You can
 * then look up that index in the appropriate property (enabledRules or
 * insertionRules) to get the localized string for the failure message if it failed.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyPlugRuleDefinition}
 */
export interface DestinyPlugRuleDefinition {
  /** The localized string to show if this rule fails. */
  readonly failureMessage: string;
}
