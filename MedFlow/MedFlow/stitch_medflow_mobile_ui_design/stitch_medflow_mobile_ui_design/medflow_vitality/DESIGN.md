# Design System: Editorial Wellness

## 1. Overview & Creative North Star: "The Digital Sanctuary"
This design system moves healthcare away from the sterile, clinical coldness of traditional medical apps and toward a "Digital Sanctuary." Our goal is to blend the authority of a high-end medical journal with the soothing tactile nature of a wellness retreat. 

**The Creative North Star** is defined by **Soft Editorial Minimalism**. We break the "template" look by utilizing intentional white space (breathing room), sophisticated serif-to-sans-serif transitions, and an asymmetrical layout logic. Instead of rigid boxes, elements flow like a well-curated magazine, using overlapping surfaces and tonal depth to guide the eye. We prioritize the user’s emotional state—calm, clarity, and trust—over dense data visualization.

---

## 2. Colors: Tonal Depth & Warmth
Our palette moves away from "Medical Blue" into a human-centric Coral and Cream spectrum. This creates an immediate sense of warmth and accessibility.

### The Palette
*   **Primary (#a33817):** Our authoritative Coral. Use for high-priority actions and brand moments.
*   **Secondary (#85532e):** Warm Sand. Used for supportive elements and grounding the interface.
*   **Tertiary (#006672):** A deep teal used sparingly for "Trust" indicators or health-positive metrics.
*   **Neutrals:** A sophisticated range from `surface-container-lowest` (#ffffff) to `surface-dim` (#e2d8d2).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting on a `surface` background.
2.  **Tonal Transitions:** Subtle shifts in hue to denote change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-stock paper. 
*   **Base Layer:** `background` (#fff8f5).
*   **Intermediate Layer:** `surface-container` (#f6ece6) for grouping related content.
*   **Top Layer:** `surface-container-lowest` (#ffffff) for the most interactive elements (cards/inputs).
Nesting must follow a logical flow: an inner container must always be a "higher" or "lower" tier than its parent to define importance without lines.

### The "Glass & Gradient" Rule
For floating elements (modals, bottom sheets), use **Glassmorphism**. Apply `surface` colors at 80% opacity with a `20px` backdrop blur. 
**Signature Textures:** Use subtle linear gradients transitioning from `primary` (#a33817) to `primary_container` (#c4502d) for main CTAs to provide a "lit-from-within" glow that flat colors cannot replicate.

---

## 3. Typography: The Editorial Voice
We use a high-contrast scale to create an authoritative yet friendly hierarchy.

*   **Display & Headlines (Epilogue):** Our "Voice." The wide, geometric nature of Epilogue feels modern and architectural. Use `display-lg` through `headline-sm` for hero moments and section starts.
*   **Body & Labels (Plus Jakarta Sans):** Our "Utility." Plus Jakarta Sans offers exceptional legibility at small sizes. 
    *   **Body-lg (1rem):** Standard reading text.
    *   **Label-md (0.75rem):** Used for metadata, system labels, and secondary information.
*   **Hierarchy Logic:** Large headings should use tight letter-spacing (-2%) to feel "custom," while body text should have generous line-height (1.6) to ensure a stress-free reading experience.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often a sign of "lazy" design. In this system, we prioritize **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift via color contrast alone.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Quick Action" button), use an extra-diffused shadow:
    *   *Y: 8px, Blur: 24px, Color: #1f1b17 at 6% opacity.* 
    *   The shadow must be tinted with the `on-surface` color to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a **Ghost Border**: Use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.

---

## 5. Components: Intentional Primitives

### Buttons (Pill Shape)
*   **Primary:** `primary` background with `on_primary` text. Use a subtle gradient to `primary_container`. High-gloss, pill-shaped (`9999px`).
*   **Secondary:** `secondary_container` background with `on_secondary_container` text. No border.
*   **Tertiary:** No background. Text-only using `primary` color, bold weight.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Separation:** Use vertical white space (using the 8px grid—increments of 16px, 24px, 32px) or subtle shifts from `surface` to `surface-container`. 
*   **Cards:** Use `md` (1.5rem) or `lg` (2rem) corner radii. Cards should feel like soft, rounded pebbles.

### Input Fields
*   **Style:** Minimalist. Use `surface-container-highest` as a subtle fill rather than an outline.
*   **States:** On focus, the background transitions to `surface-container-lowest` with a 1px "Ghost Border" in `primary`.

### Health-Specific Components
*   **Progress Rings:** Use `tertiary` for positive health metrics. Use non-rounded "butt" caps for a more architectural, precise look.
*   **Vitals Micro-Cards:** Small, `surface-container-low` squares with `display-sm` numbers to highlight critical patient data instantly.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align headings to the left while keeping CTAs floating or slightly offset to create a custom, high-end feel.
*   **Use "Air":** If a screen feels crowded, increase the spacing between sections by 8px before reducing font size.
*   **Tone-on-Tone:** Use `on-surface-variant` for secondary text to keep the contrast soft and readable.

### Don’t:
*   **No Pure Black:** Never use #000000. Use `on-surface` (#1f1b17) for all dark elements.
*   **No Standard Shadows:** Avoid the default "Drop Shadow" presets in design tools.
*   **No Default Icons:** Ensure all icons are 1.5px or 2px stroke weight (outline style) to match the weight of the typography. Avoid solid-fill icons unless they are in an active state.

### Accessibility Note:
While we utilize soft contrasts, ensure all primary "Actionable" text meets WCAG AA standards against their respective background surfaces. Use the `primary` and `on_primary_container` tokens to guarantee legibility.