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
//

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyScope } from '../../DestinyScope';
import { DestinyPresentationChildBlock } from '../Presentation/DestinyPresentationChildBlock';
import { DestinyRecordValueStyle } from '../../DestinyRecordValueStyle';
import { DestinyRecordTitleBlock } from './DestinyRecordTitleBlock';
import { DestinyRecordCompletionBlock } from './DestinyRecordCompletionBlock';
import { SchemaRecordStateBlock } from './SchemaRecordStateBlock';
import { DestinyPresentationNodeRequirementsBlock } from '../Presentation/DestinyPresentationNodeRequirementsBlock';
import { DestinyRecordExpirationBlock } from './DestinyRecordExpirationBlock';
import { DestinyRecordIntervalBlock } from './DestinyRecordIntervalBlock';
import { DestinyItemQuantity } from '../../DestinyItemQuantity';
import { DestinyPresentationNodeType } from '../../DestinyPresentationNodeType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Records.DestinyRecordDefinition} */
export interface DestinyRecordDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * Indicates whether this Record's state is determined on a per-character or on an
   * account-wide basis.
   */
  readonly scope: DestinyScope;
  readonly presentationInfo: DestinyPresentationChildBlock;
  /** Mapped to DestinyLoreDefinition in the manifest. */
  readonly loreHash?: number;
  /** Mapped to DestinyObjectiveDefinition in the manifest. */
  readonly objectiveHashes: number[];
  readonly recordValueStyle: DestinyRecordValueStyle;
  readonly forTitleGilding: boolean;
  /** A hint to show a large icon for a reward */
  readonly shouldShowLargeIcons: boolean;
  readonly titleInfo: DestinyRecordTitleBlock;
  readonly completionInfo: DestinyRecordCompletionBlock;
  readonly stateInfo: SchemaRecordStateBlock;
  readonly requirements: DestinyPresentationNodeRequirementsBlock;
  readonly expirationInfo: DestinyRecordExpirationBlock;
  /**
   * Some records have multiple 'interval' objectives, and the record may be claimed
   * at each completed interval
   */
  readonly intervalInfo: DestinyRecordIntervalBlock;
  /**
   * If there is any publicly available information about rewards earned for
   * achieving this record, this is the list of those items.
   *
   * However, note that some records intentionally have "hidden" rewards. These will
   * not be returned in this list.
   */
  readonly rewardItems: DestinyItemQuantity[];
  readonly presentationNodeType: DestinyPresentationNodeType;
  readonly traitIds: string[];
  /** Mapped to DestinyTraitDefinition in the manifest. */
  readonly traitHashes: number[];
  /**
   * A quick reference to presentation nodes that have this node as a child.
   * Presentation nodes can be parented under multiple parents. Mapped to
   * DestinyPresentationNodeDefinition in the manifest.
   */
  readonly parentNodeHashes: number[];
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
