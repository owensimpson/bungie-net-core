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
//

import { EMailSettingLocalization } from './EMailSettingLocalization'
import { OptInFlags } from './OptInFlags'
import { EmailSubscriptionDefinition } from './EmailSubscriptionDefinition'

/** @see {@link https://bungie-net.github.io/#/components/schemas/User.EmailViewDefinitionSetting} */
export interface EmailViewDefinitionSetting {
  /**
   * The identifier for this UI Setting, which can be used to relate it to custom
   * strings or other data as desired.
  */
  readonly name: string;
  /** A dictionary of localized text for the EMail setting, keyed by the locale. */
  readonly localization: { [key: string]: EMailSettingLocalization };
  /**
   * If true, this setting should be set by default if the user hasn't chosen whether
   * it's set or cleared yet.
  */
  readonly setByDefault: boolean;
  /**
   * The OptInFlags value to set or clear if this setting is set or cleared in the UI.
   * It is the aggregate of all underlying opt-in flags related to this setting.
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
  */
  readonly optInAggregateValue: OptInFlags;
  /** The subscriptions to show as children of this setting, if any. */
  readonly subscriptions: EmailSubscriptionDefinition[];
}
