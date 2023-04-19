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

import { ContentTypeProperty } from './ContentTypeProperty'
import { TagMetadataDefinition } from './TagMetadataDefinition'
import { TagMetadataItem } from './TagMetadataItem'
import { ContentPreview } from './ContentPreview'
import { ContentTypePropertySection } from './ContentTypePropertySection'

/** @see {@link https://bungie-net.github.io/#/components/schemas/Content.Models.ContentTypeDescription} */
export interface ContentTypeDescription {
  readonly cType: string;
  readonly name: string;
  readonly contentDescription: string;
  readonly previewImage: string;
  readonly priority: number;
  readonly reminder: string;
  readonly properties: ContentTypeProperty[];
  readonly tagMetadata: TagMetadataDefinition[];
  readonly tagMetadataItems: { [key: string]: TagMetadataItem };
  readonly usageExamples: string[];
  readonly showInContentEditor: boolean;
  readonly typeOf: string;
  readonly bindIdentifierToProperty: string;
  readonly boundRegex: string;
  readonly forceIdentifierBinding: boolean;
  readonly allowComments: boolean;
  readonly autoEnglishPropertyFallback: boolean;
  readonly bulkUploadable: boolean;
  readonly previews: ContentPreview[];
  readonly suppressCmsPath: boolean;
  readonly propertySections: ContentTypePropertySection[];
}
