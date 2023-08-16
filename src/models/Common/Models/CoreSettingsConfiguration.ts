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

import { CoreSystem } from './CoreSystem';
import { CoreSetting } from './CoreSetting';
import { Destiny2CoreSettings } from './Destiny2CoreSettings';
import { EmailSettings } from '../../User/EmailSettings';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Common.Models.CoreSettingsConfiguration} */

export interface CoreSettingsConfiguration {
  readonly environment: string;
  readonly systems: { [key: string]: CoreSystem };
  readonly ignoreReasons: CoreSetting[];
  readonly forumCategories: CoreSetting[];
  readonly groupAvatars: CoreSetting[];
  readonly defaultGroupTheme: CoreSetting;
  readonly destinyMembershipTypes: CoreSetting[];
  readonly recruitmentPlatformTags: CoreSetting[];
  readonly recruitmentMiscTags: CoreSetting[];
  readonly recruitmentActivities: CoreSetting[];
  readonly userContentLocales: CoreSetting[];
  readonly systemContentLocales: CoreSetting[];
  readonly clanBannerDecals: CoreSetting[];
  readonly clanBannerDecalColors: CoreSetting[];
  readonly clanBannerGonfalons: CoreSetting[];
  readonly clanBannerGonfalonColors: CoreSetting[];
  readonly clanBannerGonfalonDetails: CoreSetting[];
  readonly clanBannerGonfalonDetailColors: CoreSetting[];
  readonly clanBannerStandards: CoreSetting[];
  readonly destiny2CoreSettings: Destiny2CoreSettings;
  readonly emailSettings: EmailSettings;
  readonly fireteamActivities: CoreSetting[];
}
