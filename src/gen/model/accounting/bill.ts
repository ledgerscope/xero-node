/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PaymentTermType } from '././paymentTermType';

export class Bill {
    /**
    * Day of Month (0-31)
    */
    'day'?: number;
    'type'?: PaymentTermType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "day",
            "baseName": "Day",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "PaymentTermType"
        }    ];

    static getAttributeTypeMap() {
        return Bill.attributeTypeMap;
    }
}

