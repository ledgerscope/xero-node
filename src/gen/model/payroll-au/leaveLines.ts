/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LeaveLine } from '././leaveLine';

/**
* The leave type lines
*/
export class LeaveLines {
    'employee'?: Array<LeaveLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employee",
            "baseName": "Employee",
            "type": "Array<LeaveLine>"
        }    ];

    static getAttributeTypeMap() {
        return LeaveLines.attributeTypeMap;
    }
}

