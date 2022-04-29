/**
 * This file is used for local development (serve) only.
 */
import { supressorBuilder } from "./main";

document.addEventListener("DOMContentLoaded", () => { supressorBuilder(document.body); });
