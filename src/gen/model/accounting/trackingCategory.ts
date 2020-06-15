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

import { TrackingOption } from '././trackingOption';

export class TrackingCategory {
    /**
    * The Xero identifier for a tracking category e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'trackingCategoryID'?: string;
    /**
    * The Xero identifier for a tracking option e.g. dc54c220-0140-495a-b925-3246adc0075f
    */
    'trackingOptionID'?: string;
    /**
    * The name of the tracking category e.g. Department, Region (max length = 100)
    */
    'name'?: string;
    /**
    * The option name of the tracking option e.g. East, West (max length = 100)
    */
    'option'?: string;
    /**
    * The status of a tracking category
    */
    'status'?: TrackingCategory.StatusEnum;
    /**
    * See Tracking Options
    */
    'options'?: Array<TrackingOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingCategoryID",
            "baseName": "TrackingCategoryID",
            "type": "string"
        },
        {
            "name": "trackingOptionID",
            "baseName": "TrackingOptionID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "option",
            "baseName": "Option",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "TrackingCategory.StatusEnum"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "Array<TrackingOption>"
        }    ];

    static getAttributeTypeMap() {
        return TrackingCategory.attributeTypeMap;
    }
}

export namespace TrackingCategory {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        ARCHIVED = <any> 'ARCHIVED',
        DELETED = <any> 'DELETED'
    }
}
