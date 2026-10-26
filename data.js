// ===== EDIT THIS FILE EACH WEEK =====
// Deals pulled Oct 25, 2026 from the King Soopers & Sprouts weekly ads (Denver 80238) via the Flipp flyer feed.
// Prices are "with card" / digital coupon where noted. Never invent prices: unknown = null.
const KS_AD = "https://www.kingsoopers.com/weeklyad/weeklyad";
const SP_AD = "https://shop.sprouts.com/store/sprouts/flyers/view/weekly/print";
window.MEAL_PLAN = {
  week: "Week of Oct 26 – Nov 1, 2026 (deals-first)",
  notes: "2 people · 14 dinners · gluten-free · no fish · built on King Soopers + Sprouts sales that END TUE OCT 27 — shop Mon Oct 26 or Tue Oct 27",
  deals: [
    { store: "King Soopers", item: "Pork Shoulder Roast", price: "$2.49/lb with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "93% Lean Ground Beef, 3 lb tray", price: "$6.99/lb ($20.97 tray) with card", regular: "1 lb tray $7.99 (same ad)", dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Jennie-O 93% Lean Ground Turkey 16 oz", price: "$3.99 with digital coupon", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Johnsonville Dinner or Ground Sausage 16–19 oz", price: "$3.99 with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Rao's Pasta Sauce 15–24 oz", price: "$5.99 with digital coupon", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Acorn, Butternut or Spaghetti Squash", price: "$1.49/lb with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Private Selection Mini Sweet Peppers 1 lb", price: "2 for $7 with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Kroger Cheese 6–8 oz (select)", price: "$1.49 with digital coupon", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Kroger Cage Free Eggs 12 ct", price: "$1.49 with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "King Soopers", item: "Simple Truth Organic Spices", price: "Buy 1 Get 1 Free with card", regular: null, dates: "Oct 21–27, 2026", url: KS_AD },
    { store: "Sprouts", item: "Organic Large Hass Avocados", price: "2 for $4", regular: null, dates: "Oct 21–27, 2026", url: SP_AD }
  ],
  dealGaps: "Couldn't get usable item prices for this window from: Whole Foods (only national highlights, mostly fish/bacon, % off without Denver base prices), Natural Grocers (flyer is image-only, no item prices), Aldi (10/28 ad text lists only non-food Finds; grocery ad image-only), Costco (Oct 19–Nov 15 book has no fresh protein/produce we'd use). Next week's ads (Oct 28–Nov 3) weren't published in text yet.",
  dishes: [
    { id: "carnitas", name: "Spicy Chipotle Pork Carnitas Bowls", portions: 6, color: "#b03a2e",
      ingredients: ["4 lb pork shoulder roast (KS sale), cut into 2-inch chunks", "1 large yellow onion, quartered", "8 cloves garlic", "2–3 chipotles in adobo + 2 tbsp adobo (check GF label)", "1 tbsp cumin, 1 tbsp chili powder, 2 tsp oregano, 2 tsp salt", "Juice of 2 oranges + 2 limes", "2 lb mini sweet peppers (KS sale), sliced", "2 cans (15 oz) organic black beans", "2 cups dry rice (≈6 cups cooked)", "Cilantro, pickled jalapeños, salsa", "Avocados (Sprouts sale) — slice fresh on the day"],
      steps: ["Rub pork with spices and salt. Put in Dutch oven/slow cooker with onion, garlic, chipotles, adobo, citrus juice.", "Oven 300°F covered 3–3.5 hrs (or slow cooker low 8 hrs) until it shreds.", "Shred, then spread on a sheet pan with a ladle of juices; broil 4–6 min until crispy edges.", "Roast sliced peppers at 425°F with oil and salt, 20 min.", "Cook rice with lime + cilantro; warm beans with cumin.", "Divide into 6 containers: rice, beans, peppers, pork. Salsa/avocado added when eating."] },
    { id: "meatballs", name: "Spicy Beef-Turkey-Sausage Meatballs in Rao's over Spaghetti Squash", portions: 4, color: "#7d3c98",
      ingredients: ["1 lb 93% lean ground beef (from the 3 lb KS tray)", "1 lb Jennie-O ground turkey (KS)", "1 pkg Johnsonville ground Italian sausage, hot if available (KS; check GF label)", "2 eggs (KS)", "1/2 cup grated Parmesan or 1 pkg Kroger cheese (KS)", "1/3 cup GF breadcrumbs or almond flour", "4 cloves garlic, 1 tbsp Italian seasoning, 1–2 tsp red pepper flakes", "2 jars Rao's marinara (KS) + 1 tbsp tamari", "2 spaghetti squash (≈6 lb, KS sale)", "1 pkg shredded mozzarella (Kroger cheese, KS)"],
      steps: ["Halve squash, scoop seeds, oil and salt; roast cut-side down 400°F 40–45 min. Fork into strands.", "Mix meats, eggs, Parmesan, crumbs, garlic, seasoning, pepper flakes. Roll ~24 meatballs.", "Bake meatballs at 425°F 15 min.", "Simmer Rao's with tamari and extra pepper flakes; add meatballs, simmer 10 min.", "Portion squash into 4 containers, top with meatballs + sauce + mozzarella (pizza-style; broil when reheating if you like)."] },
    { id: "beef", name: "Spicy Korean-Style Beef & Pepper Stir-Fry", portions: 4, color: "#ca6f1e",
      ingredients: ["2 lb 93% lean ground beef (rest of the KS 3 lb tray)", "1/2 cup tamari (GF)", "3 tbsp honey or brown sugar", "2 tbsp sriracha (check GF) + 1 tsp red pepper flakes", "2 tbsp grated ginger, 6 cloves garlic", "1 tbsp toasted sesame oil, 1 tbsp rice vinegar", "1 lb frozen or fresh broccoli", "Any remaining mini sweet peppers + 1 bunch green onions", "2 cups dry rice (≈6 cups cooked)", "Sesame seeds"],
      steps: ["Cook rice.", "Brown beef in a large skillet on high, breaking up, until crispy, 8–10 min. Drain fat.", "Add garlic, ginger 1 min. Add tamari, honey, sriracha, vinegar; simmer 2 min.", "In a separate pan stir-fry broccoli and peppers 5 min.", "Combine, finish with sesame oil, green onions, sesame seeds. Portion over rice into 4 containers."] }
  ],
  days: [
    { day: "Mon", dish: "carnitas", from: "fridge" },
    { day: "Tue", dish: "beef", from: "fridge" },
    { day: "Wed", dish: "meatballs", from: "fridge" },
    { day: "Thu", dish: "carnitas", from: "fridge" },
    { day: "Fri", dish: "beef", from: "freezer (thaw in fridge Thu night)" },
    { day: "Sat", dish: "meatballs", from: "freezer (thaw in fridge Fri night)" },
    { day: "Sun", dish: "carnitas", from: "freezer (thaw in fridge Sat night)" }
  ],
  reheat: {
    carnitas: "Microwave covered with a splash of water 2–3 min (or skillet to re-crisp). Add salsa + fresh avocado.",
    meatballs: "Microwave covered 3 min, or oven 375°F 15 min; broil 2 min to melt cheese. To 165°F.",
    beef: "Microwave covered with 1 tbsp water 2–3 min, stirring halfway; or skillet 4 min."
  },
  // price: number (total for the line) or null if not verified. sale: true = from this week's ad.
  grocery: {
    "King Soopers (sale items)": [
      { item: "Pork shoulder roast, ~4 lb @ $2.49/lb", price: 9.96, sale: true },
      { item: "93% lean ground beef, 3 lb tray", price: 20.97, sale: true },
      { item: "Jennie-O 93% ground turkey 16 oz (clip digital coupon)", price: 3.99, sale: true },
      { item: "Johnsonville ground sausage 16 oz", price: 3.99, sale: true },
      { item: "Rao's marinara ×2 (clip digital coupon)", price: 11.98, sale: true },
      { item: "Spaghetti squash ×2, ~6 lb @ $1.49/lb", price: 8.94, sale: true },
      { item: "Mini sweet peppers 1 lb ×2 (2/$7)", price: 7.00, sale: true },
      { item: "Kroger cheese ×2 (shredded mozzarella + Parmesan; clip coupon)", price: 2.98, sale: true },
      { item: "Kroger cage-free eggs 12 ct", price: 1.49, sale: true },
      { item: "Simple Truth Organic cumin + chili powder (BOGO)", price: null, sale: true }
    ],
    "Sprouts (sale items)": [
      { item: "Organic large Hass avocados ×4 (2/$4)", price: 8.00, sale: true }
    ],
    "Staples — regular price, not verified (buy wherever)": [
      { item: "Rice, 4 cups dry (or use pantry)", price: null },
      { item: "Organic black beans ×2 cans", price: null },
      { item: "Chipotles in adobo (GF)", price: null },
      { item: "Yellow onion, 2 heads garlic, ginger, green onions, cilantro", price: null },
      { item: "Oranges ×2, limes ×3, jalapeños", price: null },
      { item: "Broccoli 1 lb (frozen or fresh)", price: null },
      { item: "Tamari, honey, sriracha, rice vinegar, sesame oil/seeds (check pantry)", price: null },
      { item: "GF breadcrumbs or almond flour", price: null },
      { item: "Salsa", price: null }
    ]
  },
  totals: {
    note: "Totals include ONLY verified sale prices. Staples are unpriced because I couldn't verify Denver shelf prices — they'll add to the real total.",
    savings: "Regular prices weren't printed for these items, so I can't calculate savings vs. regular. The only comparisons the ad shows: 93% beef 3-lb tray $6.99/lb vs. 1-lb tray $7.99; BOGO spices save 1 jar's price.",
    usualSpend: "PLACEHOLDER — usual weekly grocery spend: TBD from Christian's receipts (not known yet)."
  },
  schedule: {
    "Mon Oct 26 — shop + cook (≈3.5 hrs, mostly hands-off)": ["Shop King Soopers (clip digital coupons first) + Sprouts for avocados.", "Start the carnitas in the oven (3–3.5 hrs).", "While it braises: cook all 4 cups rice, roast peppers, warm beans.", "Shred, crisp and portion carnitas (6). Eat one tonight."],
    "Tue Oct 27 — cook (≈1.5 hrs)": ["Roast spaghetti squash; bake meatballs at the same time.", "Simmer meatballs in Rao's; portion over squash (4).", "Stir-fry Korean beef + veg; portion over rice (4). Eat one tonight.", "Freeze Fri–Sun portions right away."],
    "Future weeks": ["Normally shop the Wed–Tue ads and batch cook Sat/Sun."]
  },
  storage: ["Cool within 2 hours in shallow containers.", "Fridge (≤40°F): eat within 4 days — Mon–Thu meals.", "Freeze Fri–Sun portions immediately; all three dishes freeze well up to 3 months.", "Thaw in the fridge overnight; reheat to 165°F.", "Keep avocados whole and salsa separate until serving.", "Check GF labels on sausage, chipotles in adobo, sriracha and breadcrumbs; label containers with dish + date."]
};
