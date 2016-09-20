'use strict';

var _ = require('underscore');

const OLD_SEMSTERS = ['SS05', 'WS0506', 'SS06', 'WS0607', 'SS07'];
const NEW_SEMESTERS = _.range(7, 25).map(n => [`HS${('00' + n).slice(-2)}`, `FS${('00' + (n + 1)).slice(-2)}`]);

const ALL_SEMESTERS = _.flatten([...OLD_SEMSTERS, ...NEW_SEMESTERS]);

const SEMESTER_REGEX = /([F|S|H|W]S[0-9]{2,4})/

module.exports.isValid = semester => {
	return ALL_SEMESTERS.indexOf(semester) !== -1;
};

module.exports.next = semester => {
	let index = ALL_SEMESTERS.indexOf(semester);
	if (index === -1) {
		return null;
	}
	return ALL_SEMESTERS[index + 1];
};

module.exports.last = semester => {
	let index = ALL_SEMESTERS.indexOf(semester);
	if (index === -1) {
		return null;
	}
	return ALL_SEMESTERS[index - 1];
};

module.exports.regex = SEMESTER_REGEX;

module.exports.all = ALL_SEMESTERS;
