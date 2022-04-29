/**
 * This file is used for local development (serve) only.
 */
import { supressorBuilder } from "./main";

import "./styles-wrapper.scss";

document.addEventListener("DOMContentLoaded", () => { supressorBuilder(document.body); });
