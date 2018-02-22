import { AccountingResponse, Currency, CurrenciesResponse } from '../../interfaces/AccountingResponse';
import { XeroAPIClient } from '../../XeroAPIClient';
import * as path from 'path';
import * as fs from 'fs';
import { isUUID } from '../test-helpers';
import { allCurrenciesResponse, createResponse } from './response-examples/currencies.response.examples';
import { InMemoryOAuth } from './InMenoryOAuth';

const privateKeyFile = path.resolve(__dirname + '/test-privatekey.pem');
const privateKey = fs.readFileSync(privateKeyFile, 'utf8');

describe('/contactgroups', () => {
	describe('and getting', () => {
		describe('all contact groups', () => {
			let result: CurrenciesResponse;
			const inMemoryOAuth = new InMemoryOAuth();

			beforeAll(async () => {
				inMemoryOAuth.callbackResultsForNextCall(null, JSON.stringify(allCurrenciesResponse), { statusCode: 200 });

				const xeroClient = new XeroAPIClient({
					appType: 'private',
					consumerKey: 'RDGDV41TRLQZDFSDX96TKQ2KRJIW4C',
					consumerSecret: 'DJ3CMGDB0DIIA9DNEEJMRLZG0BWE7Y',
					privateKey: privateKey
				}, null, inMemoryOAuth);

				result = await xeroClient.currencies.get();
			});

			it('the response is defined', () => {
				expect(result).not.toBeNull();
			});

			it('matches the expected response', () => {
				expect(result).toMatchObject(allCurrenciesResponse);
			});

			it('called the correct URL', () => {
				inMemoryOAuth.lastCalledThisURL('https://api.xero.com/api.xro/2.0/currencies');
			});
		});

	});

	// describe('and creating', () => {
	// 	describe('a contact groups', () => {
	// 		let result: ContactGroupsResponse;
	// 		const inMemoryOAuth = new InMemoryOAuth();

	// 		beforeAll(async () => {
	// 			inMemoryOAuth.callbackResultsForNextCall(null, JSON.stringify(createResponse), {stausCode: 200});

	// 			const xeroClient = new XeroAPIClient({
	// 				appType: 'private',
	// 				consumerKey: 'RDGDV41TRLQZDFSDX96TKQ2KRJIW4C',
	// 				consumerSecret: 'DJ3CMGDB0DIIA9DNEEJMRLZG0BWE7Y',
	// 				privateKey: privateKey
	// 			}, null, inMemoryOAuth);

	// 			const contactGroup: ContactGroup = {
	// 				Name: 'NewContactGroup',
	// 				Status: 'ACTIVE'
	// 			};

	// 			result = await xeroClient.contactgroups.create(contactGroup);
	// 		});

	// 		it('the response is defined', () => {
	// 			expect(result).not.toBeNull();
	// 		});

	// 		it('matches the expected response', () => {
	// 			expect(result).toMatchObject(createResponse);
	// 		});

	// 		it('called the correct URL', () => {
	// 			inMemoryOAuth.lastCalledThisURL('https://api.xero.com/api.xro/2.0/contactgroups?summarizeErrors=false');
	// 		});
	// 	});

	// });
});
