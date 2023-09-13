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

import { DestinyProgressionDefinition } from '../models/Destiny/Definitions/DestinyProgressionDefinition';
import { DestinyInventoryItemDefinition } from '../models/Destiny/Definitions/DestinyInventoryItemDefinition';
import { DestinyCollectibleDefinition } from '../models/Destiny/Definitions/Collectibles/DestinyCollectibleDefinition';
import { DestinyMaterialRequirementSetDefinition } from '../models/Destiny/Definitions/DestinyMaterialRequirementSetDefinition';
import { DestinyPresentationNodeDefinition } from '../models/Destiny/Definitions/Presentation/DestinyPresentationNodeDefinition';
import { DestinyObjectiveDefinition } from '../models/Destiny/Definitions/DestinyObjectiveDefinition';
import { DestinyLocationDefinition } from '../models/Destiny/Definitions/DestinyLocationDefinition';
import { DestinyVendorDefinition } from '../models/Destiny/Definitions/DestinyVendorDefinition';
import { DestinyFactionDefinition } from '../models/Destiny/Definitions/DestinyFactionDefinition';
import { DestinyDestinationDefinition } from '../models/Destiny/Definitions/DestinyDestinationDefinition';
import { DestinyPlaceDefinition } from '../models/Destiny/Definitions/DestinyPlaceDefinition';
import { DestinyActivityDefinition } from '../models/Destiny/Definitions/DestinyActivityDefinition';
import { DestinyActivityTypeDefinition } from '../models/Destiny/Definitions/DestinyActivityTypeDefinition';
import { DestinyActivityModifierDefinition } from '../models/Destiny/Definitions/ActivityModifiers/DestinyActivityModifierDefinition';
import { DestinyActivityModeDefinition } from '../models/Destiny/Definitions/DestinyActivityModeDefinition';
import { DestinyActivityGraphDefinition } from '../models/Destiny/Definitions/Director/DestinyActivityGraphDefinition';
import { DestinyEquipmentSlotDefinition } from '../models/Destiny/Definitions/DestinyEquipmentSlotDefinition';
import { DestinyInventoryBucketDefinition } from '../models/Destiny/Definitions/DestinyInventoryBucketDefinition';
import { DestinySocketTypeDefinition } from '../models/Destiny/Definitions/Sockets/DestinySocketTypeDefinition';
import { DestinySocketCategoryDefinition } from '../models/Destiny/Definitions/Sockets/DestinySocketCategoryDefinition';
import { DestinyVendorGroupDefinition } from '../models/Destiny/Definitions/DestinyVendorGroupDefinition';
import { DestinySandboxPerkDefinition } from '../models/Destiny/Definitions/DestinySandboxPerkDefinition';
import { DestinyDamageTypeDefinition } from '../models/Destiny/Definitions/DestinyDamageTypeDefinition';
import { DestinyStatDefinition } from '../models/Destiny/Definitions/DestinyStatDefinition';
import { DestinyRecordDefinition } from '../models/Destiny/Definitions/Records/DestinyRecordDefinition';
import { DestinyLoreDefinition } from '../models/Destiny/Definitions/Lore/DestinyLoreDefinition';
import { DestinyGenderDefinition } from '../models/Destiny/Definitions/DestinyGenderDefinition';
import { DestinyTraitDefinition } from '../models/Destiny/Definitions/Traits/DestinyTraitDefinition';
import { DestinyMetricDefinition } from '../models/Destiny/Definitions/Metrics/DestinyMetricDefinition';
import { DestinyItemTierTypeDefinition } from '../models/Destiny/Definitions/Items/DestinyItemTierTypeDefinition';
import { DestinyStatGroupDefinition } from '../models/Destiny/Definitions/DestinyStatGroupDefinition';
import { DestinySandboxPatternDefinition } from '../models/Destiny/Definitions/DestinySandboxPatternDefinition';
import { DestinyClassDefinition } from '../models/Destiny/Definitions/DestinyClassDefinition';
import { DestinyArtifactDefinition } from '../models/Destiny/Definitions/Artifacts/DestinyArtifactDefinition';
import { DestinyProgressionLevelRequirementDefinition } from '../models/Destiny/Definitions/Progression/DestinyProgressionLevelRequirementDefinition';
import { DestinyPowerCapDefinition } from '../models/Destiny/Definitions/PowerCaps/DestinyPowerCapDefinition';
import { DestinyRewardSourceDefinition } from '../models/Destiny/Definitions/DestinyRewardSourceDefinition';
import { DestinyEnergyTypeDefinition } from '../models/Destiny/Definitions/EnergyTypes/DestinyEnergyTypeDefinition';
import { DestinyPlugSetDefinition } from '../models/Destiny/Definitions/Sockets/DestinyPlugSetDefinition';
import { DestinyTalentGridDefinition } from '../models/Destiny/Definitions/DestinyTalentGridDefinition';
import { DestinyItemCategoryDefinition } from '../models/Destiny/Definitions/DestinyItemCategoryDefinition';
import { DestinyBreakerTypeDefinition } from '../models/Destiny/Definitions/BreakerTypes/DestinyBreakerTypeDefinition';
import { DestinySeasonDefinition } from '../models/Destiny/Definitions/Seasons/DestinySeasonDefinition';
import { DestinySeasonPassDefinition } from '../models/Destiny/Definitions/Seasons/DestinySeasonPassDefinition';
import { DestinyEventCardDefinition } from '../models/Destiny/Definitions/Seasons/DestinyEventCardDefinition';
import { DestinyGuardianRankDefinition } from '../models/Destiny/Definitions/GuardianRanks/DestinyGuardianRankDefinition';
import { DestinyChecklistDefinition } from '../models/Destiny/Definitions/Checklists/DestinyChecklistDefinition';
import { DestinySocialCommendationNodeDefinition } from '../models/Destiny/Definitions/Social/DestinySocialCommendationNodeDefinition';
import { DestinySocialCommendationDefinition } from '../models/Destiny/Definitions/Social/DestinySocialCommendationDefinition';
import { DestinyRaceDefinition } from '../models/Destiny/Definitions/DestinyRaceDefinition';
import { DestinyLoadoutColorDefinition } from '../models/Destiny/Definitions/Loadouts/DestinyLoadoutColorDefinition';
import { DestinyLoadoutIconDefinition } from '../models/Destiny/Definitions/Loadouts/DestinyLoadoutIconDefinition';
import { DestinyLoadoutNameDefinition } from '../models/Destiny/Definitions/Loadouts/DestinyLoadoutNameDefinition';
import { DestinyMilestoneDefinition } from '../models/Destiny/Definitions/Milestones/DestinyMilestoneDefinition';
import { DestinyUnlockDefinition } from '../models/Destiny/Definitions/DestinyUnlockDefinition';
import { DestinyReportReasonCategoryDefinition } from '../models/Destiny/Definitions/Reporting/DestinyReportReasonCategoryDefinition';
import { DestinyMedalTierDefinition } from '../models/Destiny/Definitions/DestinyMedalTierDefinition';
import { DestinyLoadoutConstantsDefinition } from '../models/Destiny/Definitions/Loadouts/DestinyLoadoutConstantsDefinition';
import { DestinyGuardianRankConstantsDefinition } from '../models/Destiny/Definitions/GuardianRanks/DestinyGuardianRankConstantsDefinition';
import { DestinyDefinition } from '../interfaces';

export type AllManifestComponents = {
  DestinyProgressionDefinition: DestinyProgressionDefinition;
  DestinyInventoryItemDefinition: DestinyInventoryItemDefinition;
  DestinyCollectibleDefinition: DestinyCollectibleDefinition;
  DestinyMaterialRequirementSetDefinition: DestinyMaterialRequirementSetDefinition;
  DestinyPresentationNodeDefinition: DestinyPresentationNodeDefinition;
  DestinyObjectiveDefinition: DestinyObjectiveDefinition;
  DestinyLocationDefinition: DestinyLocationDefinition;
  DestinyVendorDefinition: DestinyVendorDefinition;
  DestinyFactionDefinition: DestinyFactionDefinition;
  DestinyDestinationDefinition: DestinyDestinationDefinition;
  DestinyPlaceDefinition: DestinyPlaceDefinition;
  DestinyActivityDefinition: DestinyActivityDefinition;
  DestinyActivityTypeDefinition: DestinyActivityTypeDefinition;
  DestinyActivityModifierDefinition: DestinyActivityModifierDefinition;
  DestinyActivityModeDefinition: DestinyActivityModeDefinition;
  DestinyActivityGraphDefinition: DestinyActivityGraphDefinition;
  DestinyEquipmentSlotDefinition: DestinyEquipmentSlotDefinition;
  DestinyInventoryBucketDefinition: DestinyInventoryBucketDefinition;
  DestinySocketTypeDefinition: DestinySocketTypeDefinition;
  DestinySocketCategoryDefinition: DestinySocketCategoryDefinition;
  DestinyVendorGroupDefinition: DestinyVendorGroupDefinition;
  DestinySandboxPerkDefinition: DestinySandboxPerkDefinition;
  DestinyDamageTypeDefinition: DestinyDamageTypeDefinition;
  DestinyStatDefinition: DestinyStatDefinition;
  DestinyRecordDefinition: DestinyRecordDefinition;
  DestinyLoreDefinition: DestinyLoreDefinition;
  DestinyGenderDefinition: DestinyGenderDefinition;
  DestinyTraitDefinition: DestinyTraitDefinition;
  DestinyMetricDefinition: DestinyMetricDefinition;
  DestinyItemTierTypeDefinition: DestinyItemTierTypeDefinition;
  DestinyStatGroupDefinition: DestinyStatGroupDefinition;
  DestinySandboxPatternDefinition: DestinySandboxPatternDefinition;
  DestinyClassDefinition: DestinyClassDefinition;
  DestinyArtifactDefinition: DestinyArtifactDefinition;
  DestinyProgressionLevelRequirementDefinition: DestinyProgressionLevelRequirementDefinition;
  DestinyPowerCapDefinition: DestinyPowerCapDefinition;
  DestinyRewardSourceDefinition: DestinyRewardSourceDefinition;
  DestinyEnergyTypeDefinition: DestinyEnergyTypeDefinition;
  DestinyPlugSetDefinition: DestinyPlugSetDefinition;
  DestinyTalentGridDefinition: DestinyTalentGridDefinition;
  DestinyItemCategoryDefinition: DestinyItemCategoryDefinition;
  DestinyBreakerTypeDefinition: DestinyBreakerTypeDefinition;
  DestinySeasonDefinition: DestinySeasonDefinition;
  DestinySeasonPassDefinition: DestinySeasonPassDefinition;
  DestinyEventCardDefinition: DestinyEventCardDefinition;
  DestinyGuardianRankDefinition: DestinyGuardianRankDefinition;
  DestinyChecklistDefinition: DestinyChecklistDefinition;
  DestinySocialCommendationNodeDefinition: DestinySocialCommendationNodeDefinition;
  DestinySocialCommendationDefinition: DestinySocialCommendationDefinition;
  DestinyRaceDefinition: DestinyRaceDefinition;
  DestinyLoadoutColorDefinition: DestinyLoadoutColorDefinition;
  DestinyLoadoutIconDefinition: DestinyLoadoutIconDefinition;
  DestinyLoadoutNameDefinition: DestinyLoadoutNameDefinition;
  DestinyMilestoneDefinition: DestinyMilestoneDefinition;
  DestinyUnlockDefinition: DestinyUnlockDefinition;
  DestinyReportReasonCategoryDefinition: DestinyReportReasonCategoryDefinition;
  DestinyMedalTierDefinition: DestinyMedalTierDefinition;
  DestinyLoadoutConstantsDefinition: DestinyLoadoutConstantsDefinition;
  DestinyGuardianRankConstantsDefinition: DestinyGuardianRankConstantsDefinition;
  DestinyNodeStepSummaryDefinition: DestinyDefinition<unknown>;
  DestinyArtDyeChannelDefinition: DestinyDefinition<unknown>;
  DestinyArtDyeReferenceDefinition: DestinyDefinition<unknown>;
  DestinyProgressionMappingDefinition: DestinyDefinition<unknown>;
  DestinyUnlockValueDefinition: DestinyDefinition<unknown>;
  DestinyRewardMappingDefinition: DestinyDefinition<unknown>;
  DestinyRewardSheetDefinition: DestinyDefinition<unknown>;
  DestinyAchievementDefinition: DestinyDefinition<unknown>;
  DestinyActivityInteractableDefinition: DestinyDefinition<unknown>;
  DestinyBondDefinition: DestinyDefinition<unknown>;
  DestinyCharacterCustomizationCategoryDefinition: DestinyDefinition<unknown>;
  DestinyCharacterCustomizationOptionDefinition: DestinyDefinition<unknown>;
  DestinyEntitlementOfferDefinition: DestinyDefinition<unknown>;
  DestinyPlatformBucketMappingDefinition: DestinyDefinition<unknown>;
  DestinyRewardAdjusterPointerDefinition: DestinyDefinition<unknown>;
  DestinyRewardAdjusterProgressionMapDefinition: DestinyDefinition<unknown>;
  DestinyRewardItemListDefinition: DestinyDefinition<unknown>;
  DestinySackRewardItemListDefinition: DestinyDefinition<unknown>;
  DestinyUnlockCountMappingDefinition: DestinyDefinition<unknown>;
  DestinyUnlockEventDefinition: DestinyDefinition<unknown>;
  DestinyUnlockExpressionMappingDefinition: DestinyDefinition<unknown>;
  DestinyInventoryItemLiteDefinition: DestinyDefinition<DestinyInventoryItemDefinition> & { hash: never };
};

export type ManifestLanguage =
  | 'de'
  | 'en'
  | 'es'
  | 'es-mx'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'pt-br'
  | 'ru'
  | 'zh-chs'
  | 'zh-cht';
