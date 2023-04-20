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
//

import { ContentPropertyDataTypeEnum } from './ContentPropertyDataTypeEnum';
import { ContentTypeDefaultValue } from './ContentTypeDefaultValue';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Content.Models.ContentTypeProperty} */
export interface ContentTypeProperty {
  readonly name: string;
  readonly rootPropertyName: string;
  readonly readableName: string;
  readonly value: string;
  readonly propertyDescription: string;
  readonly localizable: boolean;
  readonly fallback: boolean;
  readonly enabled: boolean;
  readonly order: number;
  readonly visible: boolean;
  readonly isTitle: boolean;
  readonly required: boolean;
  readonly maxLength: number;
  readonly maxByteLength: number;
  readonly maxFileSize: number;
  readonly regexp: string;
  readonly validateAs: string;
  readonly rssAttribute: string;
  readonly visibleDependency: string;
  readonly visibleOn: string;
  readonly datatype: ContentPropertyDataTypeEnum;
  readonly attributes: { [key: string]: string };
  readonly childProperties: ContentTypeProperty[];
  readonly contentTypeAllowed: string;
  readonly bindToProperty: string;
  readonly boundRegex: string;
  readonly representationSelection: { [key: string]: string };
  readonly defaultValues: ContentTypeDefaultValue[];
  readonly isExternalAllowed: boolean;
  readonly propertySection: string;
  readonly weight: number;
  readonly entitytype: string;
  readonly isCombo: boolean;
  readonly suppressProperty: boolean;
  readonly legalContentTypes: string[];
  readonly representationValidationString: string;
  readonly minWidth: number;
  readonly maxWidth: number;
  readonly minHeight: number;
  readonly maxHeight: number;
  readonly isVideo: boolean;
  readonly isImage: boolean;
}
