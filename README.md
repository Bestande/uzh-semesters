# UZH Semesters

Library for navigating and validating semester short codes from the University of Zurich.

````
var uzhSemesters = require('@jonny/uzh-semesters');
uzhSemesters.next('FS14') // => HS14
uzhSemesters.last('HS07') // => FS07
uzhSemesters.last('WS0607') // => SS06
uzhSemesters.last('DSAFASKFNSAD') // => null
uzhSemesters.isValid('WS0607') // => true
uzhSemesters.isValid('HS15') // => true
uzhSemesters.isValid('HS05') // => false
````

## Test
Run test suite using `npm test`.
