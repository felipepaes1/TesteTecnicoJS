"use strict";

import { answer } from "./functions.js";
import assert from "assert";

try {
  assert.equal(answer(), 2);
  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error);
}
