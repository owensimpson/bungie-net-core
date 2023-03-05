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
import { PartnerOfferHistoryResponse } from './PartnerOfferHistoryResponse';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Tokens.PartnerOfferSkuHistoryResponse} */
export interface PartnerOfferSkuHistoryResponse {
    readonly SkuIdentifier: string;
    readonly LocalizedName: string;
    readonly LocalizedDescription: string;
    readonly ClaimDate: string;
    readonly AllOffersApplied: boolean;
    readonly TransactionId: string;
    readonly SkuOffers: PartnerOfferHistoryResponse[];
}
