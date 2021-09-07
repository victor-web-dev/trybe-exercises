const assert = require('assert');
const { copyFile } = require('fs');

assert.strictEqual(50,50); //return true, no error message.

assert.strictEqual(50,70); //return false, error message shown up


/* 
    Links da Documentação
    https://nodejs.org/api/assert.html#assert_assert_iferror_value

    link de exemplo
    https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html
*/