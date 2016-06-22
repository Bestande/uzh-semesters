import test from 'ava';
import {isValid, next, last} from '../';

test('HS15 should be a valid semester', t => t.is(isValid('HS15'), true));
test('KS15 should not be a valid semester', t => t.is(isValid('KS15'), false));
test('WS15 should not be a valid semester', t => t.is(isValid('WS15'), false));
test('SS06 should be a valid semester', t => t.is(isValid('SS06'), true));
test('WS0506 should be a valid semester', t => t.is(isValid('WS0506'), true));

test('Next semester after SS07 should be HS07', t => t.is(next('SS07'), 'HS07'));
test('Next semester after WS0607 should be SS07', t => t.is(next('WS0607'), 'SS07'));
test('Next semester after SS06 should be Ws0607', t => t.is(next('WS0607'), 'SS07'));
test('Next semester after FS00 should be null', t => t.is(next('FS00'), null));

test('Previous semester before FS14 should be HS13', t => t.is(last('FS14'), 'HS13'));
test('Previous semester before HS14 should be FS14', t => t.is(last('HS14'), 'FS14'));
test('Previous semester before FS00 should be null', t => t.is(last('FS00'), null));
