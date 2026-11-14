import { multiLocation } from "./multi-location";
import { optometrists } from "./optometrists";
import { startups } from "./startups";
import type { AudienceContent } from "./types";

export { hub } from "./hub";
export { multiLocation, optometrists, startups };
export type * from "./types";

/** Every audience page, in navigation order. */
export const audiencePages: AudienceContent[] = [optometrists, startups, multiLocation];

/**
 * The one place tax is mentioned on an audience page: a single line under the
 * list of services. Approved wording; do not expand on it.
 */
export const taxLine = "We don’t prepare tax returns. We hand your CPA clean, reviewed books.";
