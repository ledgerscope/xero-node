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

import { SettingsTrackingCategoriesEmployeeGroups } from '././settingsTrackingCategoriesEmployeeGroups';
import { SettingsTrackingCategoriesTimesheetCategories } from '././settingsTrackingCategoriesTimesheetCategories';

/**
* Tracking categories for Employees and Timesheets
*/
export class SettingsTrackingCategories {
    'employeeGroups'?: SettingsTrackingCategoriesEmployeeGroups;
    'timesheetCategories'?: SettingsTrackingCategoriesTimesheetCategories;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeGroups",
            "baseName": "EmployeeGroups",
            "type": "SettingsTrackingCategoriesEmployeeGroups"
        },
        {
            "name": "timesheetCategories",
            "baseName": "TimesheetCategories",
            "type": "SettingsTrackingCategoriesTimesheetCategories"
        }    ];

    static getAttributeTypeMap() {
        return SettingsTrackingCategories.attributeTypeMap;
    }
}

