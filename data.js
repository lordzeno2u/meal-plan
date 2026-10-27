// ===== EDIT THIS FILE EACH WEEK =====
// Stores: Natural Grocers, Whole Foods, Sprouts ONLY. Checked Mon Oct 26, 2026 7:30 PM MT (Denver 80238).
// Never invent prices: unknown = null. Previous weeks are in git history.
const NG = "https://naturalgrocers.cld.bz/Health-Hotline-Magazine-November-2026/6/";
const NG_MAG = "https://naturalgrocers.cld.bz/Health-Hotline-Magazine-November-2026";
const WF = "https://www.wholefoodsmarket.com/sales-flyer?store-id=10746";
const SP = "https://shop.sprouts.com/store/sprouts/flyers/view/weekly/print";
window.MEAL_PLAN = {
  week: "Batch cook Sat Oct 31 / Sun Nov 1 → dinners Mon Nov 2 – Sun Nov 8, 2026",
  notes: "2 people · 14 dinners · gluten-free · no fish · Natural Grocers / Whole Foods / Sprouts only. ⚠️ PRELIMINARY: the Wed Oct 28 Sprouts and Whole Foods ads weren't published yet, so meat prices are blank. Recheck Wednesday.",
  deals: [
    { store: "Natural Grocers", item: "Muir Glen Organic Tomatoes 14.5 oz", price: "$1.79 each ({N}power, 55% off)", regular: "$3.59–$3.99 Always Affordable", dates: "Oct 31 – Nov 3, 2026 (4 days)", url: NG },
    { store: "Natural Grocers", item: "Nancy's Organic Sour Cream 8 oz", price: "$1.89 ({N}power, 34% off)", regular: "$2.89", dates: "Oct 31 – Nov 3, 2026", url: NG },
    { store: "Natural Grocers", item: "Nancy's Organic Cream Cheese 8 oz", price: "$3.25 ({N}power, 29% off)", regular: "$4.59", dates: "Oct 31 – Nov 3, 2026", url: NG },
    { store: "Natural Grocers", item: "Bulk herbs & spices", price: "15% off ({N}power)", regular: "shelf price", dates: "Oct 30 – Nov 28, 2026", url: NG_MAG },
    { store: "Natural Grocers", item: "Free-range brown eggs 1 doz (limit 2)", price: "$2.99 (everyday Always Affordable price)", regular: null, dates: "through Nov 30, 2026", url: NG_MAG },
    { store: "Whole Foods (Capitol Hill)", item: "Recheck Wed Oct 28: new sales flyer (meat & produce)", price: "not published yet", regular: null, dates: "Oct 28 – Nov 3 expected", url: WF },
    { store: "Sprouts", item: "Recheck Wed Oct 28: new weekly ad (ground beef, chicken, produce)", price: "not published yet", regular: null, dates: "Oct 28 – Nov 3 expected", url: SP }
  ],
  dealGaps: "Natural Grocers' {N}power prices need the free {N}power rewards membership (use Christian's own account if he has one; I didn't make one). Whole Foods' current flyer ends Tue Oct 27, so its regular prices below come from that flyer's 'regular' field and might change. Sprouts' Oct 21–27 ad ends Tuesday. Flipp, GroshMe and the Whole Foods page showed no Oct 28 ads as of Mon 7:30 PM MT. Flyva's Sprouts page shows Houston prices, not Denver. The Sprouts Instacart page loads for 80238 but shows no prices without JavaScript. Circular and Dishcount are JavaScript-only. Recheck the meat prices on Wednesday.",
  dishes: [
    { id: "lasagna", name: "Spicy Sausage & Beef Lasagna (GF noodles)", portions: 6, color: "#c0392b",
      ingredients: ["1 lb ground beef + 1 lb Italian sausage (check GF), price TBD Wed", "4 cans Muir Glen organic tomatoes (NG deal)", "1 box GF lasagna noodles", "Nancy's organic cream cheese 8 oz + 1 egg (creamy layer)", "12 oz mozzarella + Parmesan", "1 onion, 6 cloves garlic, 2 tsp chile flakes, oregano/basil (NG bulk spices)"],
      steps: ["Brown the beef and sausage with the onion and garlic. Add the tomatoes, chile flakes and herbs, then simmer 25 min.", "Mix the cream cheese, egg and half the Parmesan.", "Layer sauce, noodles, cream mix and mozzarella ×3 in a 9×13 pan. Cover with foil.", "Bake 375°F for 45 min covered, then 15 min uncovered. Rest 20 min and cut into 6."] },
    { id: "tinga", name: "Chipotle Chicken Tinga Bowls", portions: 4, color: "#d35400",
      ingredients: ["2.5 lb chicken thighs, price TBD Wed", "2 cans Muir Glen organic tomatoes (NG deal)", "3–4 chipotles in adobo (check GF)", "1 onion, 4 cloves garlic, cumin and oregano", "2 lb organic sweet potatoes (WF)", "2 cups rice, 1 can black beans", "Nancy's organic sour cream (NG deal), 2 avocados, limes, cilantro"],
      steps: ["Simmer the chicken with the tomatoes, chipotles, onion, garlic and spices for 30 min, then shred.", "Roast cubed sweet potatoes at 425°F for 25 min.", "Cook the rice and warm the beans.", "Portion into 4 bowls. Keep the sour cream and avocado separate."] },
    { id: "krapow", name: "Thai Basil Pork Stir-Fry (pad krapow)", portions: 4, color: "#7d3c98",
      ingredients: ["2 lb ground pork, price TBD Wed", "1/3 cup tamari + 2 tbsp GF fish-free oyster-style sauce or extra tamari + 1 tbsp honey", "6 Thai chiles or 2 tsp chile flakes, 8 cloves garlic", "1 large bunch Thai or Italian basil", "1 head organic cauliflower (WF) + 1 red bell pepper", "2 cups jasmine rice", "4 eggs to fry fresh when serving"],
      steps: ["Pound the garlic and chiles. Fry 1 min on high heat.", "Add the pork and cook until crispy, 8 min. Add the tamari and honey.", "Stir-fry the cauliflower florets and pepper in a separate pan for 6 min, then combine and fold in the basil.", "Serve over rice in 4 portions. Fry an egg fresh each night."] }
  ],
  days: [
    { day: "Mon Nov 2", dish: "lasagna", from: "fridge" },
    { day: "Tue Nov 3", dish: "tinga", from: "fridge" },
    { day: "Wed Nov 4", dish: "krapow", from: "fridge" },
    { day: "Thu Nov 5", dish: "lasagna", from: "fridge" },
    { day: "Fri Nov 6", dish: "tinga", from: "freezer (thaw in the fridge Thu night)" },
    { day: "Sat Nov 7", dish: "krapow", from: "freezer (thaw in the fridge Fri night)" },
    { day: "Sun Nov 8", dish: "lasagna", from: "freezer (thaw in the fridge Sat night)" }
  ],
  reheat: {
    lasagna: "Oven 375°F covered for 25 min, or microwave 3–4 min. To 165°F.",
    tinga: "Microwave covered 2–3 min. Add the sour cream and avocado after heating.",
    krapow: "Skillet 4 min or microwave 2 min. Fry an egg on top."
  },
  // price = line total (number) or null if not verified; regular = same item at regular price.
  grocery: {
    "Natural Grocers (shop Sat Oct 31, {N}power deals)": [
      { item: "Muir Glen organic tomatoes 14.5 oz ×6 @ $1.79", price: 10.74, sale: true, regular: 21.54, regSrc: "NG regular $3.59+ each" },
      { item: "Nancy's organic cream cheese 8 oz", price: 3.25, sale: true, regular: 4.59, regSrc: "NG regular" },
      { item: "Nancy's organic sour cream 8 oz", price: 1.89, sale: true, regular: 2.89, regSrc: "NG regular" },
      { item: "Free-range brown eggs 1 doz", price: 2.99 },
      { item: "Bulk spices: chile flakes, oregano, cumin, basil (15% off)", price: null }
    ],
    "Whole Foods Capitol Hill (regular price from the Oct 21–27 flyer)": [
      { item: "Organic sweet potatoes ~2 lb @ $2.99/lb", price: 5.98 },
      { item: "Organic large avocados ×2 @ $2.99", price: 5.98 },
      { item: "Organic cauliflower ×1", price: 5.49 },
      { item: "Chicken thighs 2.5 lb (check the Wed ad)", price: null }
    ],
    "Sprouts (check the Wed Oct 28 ad first)": [
      { item: "Ground beef 1 lb + Italian sausage 1 lb (GF)", price: null },
      { item: "Ground pork 2 lb", price: null },
      { item: "Mozzarella 12 oz + Parmesan", price: null },
      { item: "GF lasagna noodles", price: null },
      { item: "Onions ×3, garlic ×2 heads, limes, cilantro, Thai basil, red bell pepper", price: null },
      { item: "Jasmine rice, black beans, chipotles in adobo, tamari", price: null }
    ]
  },
  totals: {
    note: "Verified total so far is $36.32 (NG $18.87 + WF $17.45). Sprouts $0 verified. Meat, cheese and staples aren't priced yet, so the real bill will be higher; recheck Wednesday.",
    savings: "$13.14 off regular on the NG deals (tomatoes $10.80, cream cheese $1.34, sour cream $1.00), at NG's own regular prices. WF items are bought at regular price, so no savings.",
    usualSpend: "Placeholder until Christian sends receipts."
  },
  schedule: {
    "Wed Oct 28": ["Recheck the Sprouts and Whole Foods ads for meat; fill in the prices here"],
    "Sat Oct 31 — shop + cook": ["Natural Grocers (deals run Oct 31 – Nov 3), then WF and Sprouts", "Make the lasagna sauce and bake the lasagna", "Simmer the chicken tinga"],
    "Sun Nov 1 — cook": ["Roast sweet potatoes, cook rice ×2", "Make the pad krapow", "Portion and label. Freeze the Fri–Sun meals"]
  },
  storage: ["Cool within 2 hours in shallow containers.", "Fridge: eat Mon–Thu meals within 4 days.", "Freeze the Fri–Sun portions right away (up to 3 months). Thaw in the fridge overnight and reheat to 165°F.", "Keep avocado, sour cream and basil garnish separate.", "Check GF labels on sausage, chipotles, tamari and noodles."]
};
