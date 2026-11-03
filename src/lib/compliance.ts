/**
 * Shared compliance copy.
 *
 * WellaraMD does NOT compound or manufacture any medication. Every compounded
 * product shows the COMPOUNDED_LABEL pill plus the COMPOUNDER_NOTE naming the
 * dispensing pharmacy, and no product image may depict a branded "Wellara" label
 * (see components/Visuals). Keep this the single source of truth so cards stay
 * consistent.
 *
 * LegitScript history: round 2 (Oct 2026) asked us to identify the compounder on
 * products and we named both pharmacies; question 14 (Nov 2026) asked us to remove
 * Striker specifically. The note now names ONLY The Pharmacy Hub LLC (the
 * LegitScript-certified pharmacy WellaraMD scripts route to). Do not re-add Striker
 * unless MDSide routing and LegitScript both change.
 */

export const COMPOUNDED_LABEL = "Compounded · Not FDA-approved";

export const COMPOUNDER_NOTE =
  "Compounded and dispensed by a licensed 503A pharmacy (The Pharmacy Hub LLC, Miami, FL). WellaraMD does not compound medications.";
