// Some tests will be done here
import {execSync} from 'child_process';

/**
 * Main function
 */
function main() {
  const tests = [
    testLint(),
  ];
  if (tests.every((test)=>test)) {
    console.log('Tests all passed successfully');
    process.exit(0);
  } else {
    console.log('Some Tests Failed...');
    process.exit(1);
  }
}

/**
 * Tests lint
 * @return {Boolean}
 */
function testLint() {
  try {
    execSync(`eslint ${process.cwd()}`);
    return true;
  } catch (e) {
    console.error(e.stdout.toString());
    return false;
  }
}


main();
