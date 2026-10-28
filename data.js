// ===== EDIT THIS FILE EACH WEEK =====
// Stores: Natural Grocers, Whole Foods (Capitol Hill 10746), Sprouts, Costco. Checked Wed Oct 28, 2026 ~10:40 AM MT (Denver 80238).
// Sources: Sprouts Oct 28–Nov 3 ad via Flipp (backflipp, 80238); WF Capitol Hill sales flyer page; shop.sprouts.com product pages (store set to 80238);
// costco.com "New Lower Prices on Chicken" warehouse page + Costco Oct 26–Nov 1 flyers via Flipp. Never invent prices: unknown = null. Previous weeks are in git history.
const NG = "https://naturalgrocers.cld.bz/Health-Hotline-Magazine-November-2026/6/";
const NG_MAG = "https://naturalgrocers.cld.bz/Health-Hotline-Magazine-November-2026";
const WF = "https://www.wholefoodsmarket.com/sales-flyer?store-id=10746";
const SP = "https://shop.sprouts.com/store/sprouts/flyers/view/weekly/print";
const SP_BEEF = "https://shop.sprouts.com/store/sprouts/products/21293339-the-butcher-shop-85-lean15-fat-grass-fed-ground-beef-value-pack-32-oz";
const SP_MOZZ = "https://shop.sprouts.com/store/sprouts/products/19078021-sprouts-shredded-mozzarella-cheese-8-oz";
const CO_CHX = "https://www.costco.com/chicken-lower-prices.html";
window.MEAL_PLAN = {
  week: "Batch cook Sat Oct 31 / Sun Nov 1 → dinners Mon Nov 2 – Sun Nov 8, 2026",
  notes: "2 people · 14 dinners · gluten-free · no fish · Natural Grocers / Whole Foods / Sprouts / Costco. Built on the Oct 28 – Nov 3 Sprouts and Whole Foods ads. Shop Sat Oct 31; every deal below is valid that day.",
  deals: [
    { store: "Sprouts", item: "Sprouts 100% Grass-Fed 85% Lean Ground Beef, 32 oz value pack (mix & match with St. Louis ribs)", price: "Buy 1 Get 1 50% off → 2 packs (4 lb) for $28.47 ($7.12/lb)", regular: "$18.98 per 32 oz pack (shop.sprouts.com, 80238)", dates: "Oct 28 – Nov 3, 2026", url: SP },
    { store: "Sprouts", item: "Sprouts Shredded Mozzarella 8 oz", price: "$2.99 (online sale price, 80238)", regular: "$4.99", dates: "current as of Oct 28 (end date not shown)", url: SP_MOZZ },
    { store: "Sprouts", item: "Sprouts Organic Low Sodium Black Beans 15.5 oz", price: "$1.39 (online sale price)", regular: "$1.67", dates: "current as of Oct 28", url: "https://shop.sprouts.com/store/sprouts/products/17855436-sprouts-organic-low-sodium-black-beans-15-oz" },
    { store: "Sprouts", item: "Organic Hass avocado bags (6 ct / 5 ct), Bako organic baby sweet potatoes 1.5 lb, Earthbound organic salads, Carbone sauces, DeLallo, Sprouts meatballs/patties", price: "Buy 1 Get 1 50% off (ad shows no base price)", regular: null, dates: "Oct 28 – Nov 3, 2026", url: SP },
    { store: "Whole Foods (Capitol Hill)", item: "Organic large Hass avocados", price: "2 for $5.56 (2 for $5 with Prime)", regular: "$2.99 each", dates: "Oct 28 – Nov 3, 2026", url: WF },
    { store: "Whole Foods (Capitol Hill)", item: "Organic orange or red sweet potatoes", price: "$2.54/lb ($2.29/lb with Prime)", regular: "$2.99/lb", dates: "Oct 28 – Nov 3, 2026", url: WF },
    { store: "Whole Foods (Capitol Hill)", item: "Organic cauliflower", price: "$4.43 each ($3.99 with Prime)", regular: "$5.49", dates: "Oct 28 – Nov 3, 2026", url: WF },
    { store: "Whole Foods (Capitol Hill)", item: "Rao's pasta sauce 24 oz (backup if you skip homemade sauce)", price: "22% off ≈ $6.47 (30% off ≈ $5.80 with Prime)", regular: "$8.29", dates: "Oct 28 – Nov 3, 2026", url: WF },
    { store: "Whole Foods (Capitol Hill)", item: "Vital Farms organic large eggs 1 doz", price: "16% off (25% off with Prime)", regular: "$7.49–$11.49", dates: "Oct 28 – Nov 3, 2026", url: WF },
    { store: "Costco", item: "Kirkland Signature Chicken Breast 6.5 lb bag", price: "$18.99 ($2.92/lb), new lower warehouse price", regular: "same everyday warehouse price (no coupon)", dates: "ongoing (price varies only in AK/HI/PR)", url: CO_CHX },
    { store: "Natural Grocers", item: "Muir Glen Organic Tomatoes 14.5 oz", price: "$1.79 each ({N}power, 55% off)", regular: "$3.59–$3.99 Always Affordable", dates: "Oct 31 – Nov 3, 2026 (4 days)", url: NG },
    { store: "Natural Grocers", item: "Nancy's Organic Sour Cream 8 oz", price: "$1.89 ({N}power, 34% off)", regular: "$2.89", dates: "Oct 31 – Nov 3, 2026", url: NG },
    { store: "Natural Grocers", item: "Nancy's Organic Cream Cheese 8 oz", price: "$3.25 ({N}power, 29% off)", regular: "$4.59", dates: "Oct 31 – Nov 3, 2026", url: NG },
    { store: "Natural Grocers", item: "Bulk herbs & spices", price: "15% off ({N}power)", regular: "shelf price", dates: "Oct 30 – Nov 28, 2026", url: NG_MAG },
    { store: "Natural Grocers", item: "Free-range brown eggs 1 doz (limit 2)", price: "$2.99 (everyday Always Affordable price)", regular: null, dates: "through Nov 30, 2026", url: NG_MAG }
  ],
  dealGaps: "Checked Wed Oct 28 ~10:40 AM MT. Sprouts Oct 28 – Nov 3 ad (Flipp, 80238) is mostly Buy 1 Get 1 50% off with no base prices, so the base prices here come from shop.sprouts.com product pages set to 80238. Sprouts says online prices can differ from in-store. No chicken thighs, ground pork, Italian sausage or cheese are in the Sprouts or WF ads. Whole Foods prices are the non-Prime sale prices; Prime prices are lower and shown in Deals. Costco: the Oct 26 – Nov 1 flyer and coupon book have no meat, produce, cheese or rice deals (only Swanson broth $9.99/6-pack and freezer bags). The chicken price comes from costco.com's warehouse-price page. Costco doesn't post warehouse prices for mozzarella, Parmesan, rice or ground beef, so those are bought at Sprouts. Not priced (null): GF lasagna noodles (out of stock on Sprouts and WF Denver online; WF online showed Jovial 9 oz at $4.49 only for an Austin store, which isn't valid for Denver), NG bulk spices, and the base prices on Sprouts' BOGO avocado and sweet potato bags. Sprouts organic garlic and Thai basil are out of stock online, so the list uses conventional garlic and organic Italian basil. Flyva's Sprouts page is Houston prices (rejected). Circular and Dishcount need JavaScript; GroshMe needs sign-in. Natural Grocers {N}power prices need the free {N}power rewards account.",
  dishes: [
    { id: "lasagna", name: "Spicy Grass-Fed Beef & Sausage Lasagna (GF noodles)", portions: 6, color: "#c0392b",
      ingredients: ["1 pack (2 lb) Sprouts grass-fed 85% ground beef (BOGO deal)", "1 lb Sprouts sweet Italian pork sausage, ground (check GF label) + 2 tsp chile flakes and 1 tsp fennel for heat", "4 cans Muir Glen organic tomatoes (NG deal)", "1 box (9–10 oz) GF lasagna noodles (Jovial or Tinkyada)", "Nancy's organic cream cheese 8 oz + 1 egg (creamy layer)", "16 oz shredded mozzarella (2 Sprouts bags) + 1/2 cup grated Parmesan", "1 onion, 6 cloves garlic, oregano/basil (NG bulk spices)"],
      steps: ["Brown the beef and sausage with the onion and garlic and drain some fat. Add the tomatoes, chile flakes, fennel and herbs, then simmer 25 min.", "Mix the cream cheese, egg and half the Parmesan.", "Layer sauce, noodles, cream mix and mozzarella ×3 in a 9×13 pan. Cover with foil.", "Bake 375°F for 45 min covered, then 15 min uncovered. Rest 20 min and cut into 6."] },
    { id: "tinga", name: "Chipotle Chicken Tinga Bowls", portions: 4, color: "#d35400",
      ingredients: ["2.5 lb Kirkland chicken breast from the Costco 6.5 lb bag (thaw Fri night). Freeze the other ~4 lb for next week", "2 cans Muir Glen organic tomatoes (NG deal)", "3–4 Embasa chipotles in adobo (labeled GF)", "1 onion, 4 cloves garlic, cumin and oregano", "2 lb organic sweet potatoes (WF sale)", "2 cups jasmine rice, 1 can organic black beans", "Nancy's organic sour cream (NG deal), 2 organic avocados (WF sale), 3 limes, cilantro"],
      steps: ["Simmer the chicken with the blended tomatoes, chipotles, onion, garlic and spices, covered, for 20–25 min until 165°F, then shred back into the sauce. Breast dries out, so don't overcook it.", "Roast cubed sweet potatoes at 425°F for 25 min.", "Cook the rice with lime and cilantro. Warm the beans.", "Portion into 4 bowls. Keep the sour cream and avocado separate."] },
    { id: "krapow", name: "Thai Basil Grass-Fed Beef Stir-Fry (pad krapow neua)", portions: 4, color: "#7d3c98",
      ingredients: ["1 pack (2 lb) Sprouts grass-fed 85% ground beef (2nd BOGO pack, replaces the ground pork)", "1/3 cup San-J tamari (GF) + 1 tbsp honey", "2 tsp chile flakes (NG bulk) or fresh Thai chiles, 8 cloves garlic", "2 packs organic basil (Thai if the store has it)", "1 head organic cauliflower (WF sale) + 1 organic red bell pepper", "2 cups jasmine rice", "4 eggs to fry fresh when serving"],
      steps: ["Pound the garlic and chiles. Fry 1 min on high heat.", "Add the beef and cook until crispy, 8–10 min. Drain the extra fat, then add the tamari and honey.", "Stir-fry the cauliflower florets and pepper in a separate pan for 6 min, then combine and fold in the basil.", "Serve over rice in 4 portions. Fry an egg fresh each night."] }
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
      { item: "GF lasagna noodles 9–10 oz (Jovial/Tinkyada; check here first)", price: null },
      { item: "Bulk spices: chile flakes, fennel, oregano, cumin, basil (15% off)", price: null }
    ],
    "Whole Foods Capitol Hill (Oct 28 – Nov 3 sale, non-Prime prices)": [
      { item: "Organic sweet potatoes ~2 lb @ $2.54/lb", price: 5.08, sale: true, regular: 5.98, regSrc: "WF regular $2.99/lb" },
      { item: "Organic large avocados ×2 (2 for $5.56)", price: 5.56, sale: true, regular: 5.98, regSrc: "WF regular $2.99 each" },
      { item: "Organic cauliflower ×1", price: 4.43, sale: true, regular: 5.49, regSrc: "WF regular" }
    ],
    "Sprouts (Oct 28 – Nov 3 ad + shop.sprouts.com prices, 80238)": [
      { item: "Grass-fed 85% ground beef 32 oz ×2 (BOGO 50%: $18.98 + $9.49)", price: 28.47, sale: true, regular: 37.96, regSrc: "2 × $18.98" },
      { item: "Sweet Italian pork sausage, ground, 16 oz (check GF label)", price: 6.99 },
      { item: "Sprouts shredded mozzarella 8 oz ×2 @ $2.99", price: 5.98, sale: true, regular: 9.98, regSrc: "Sprouts $4.99 each" },
      { item: "Sprouts grated Parmesan 8 oz", price: 5.49 },
      { item: "Sprouts organic white jasmine rice 16 oz ×2", price: 8.58 },
      { item: "Sprouts organic low-sodium black beans 15.5 oz ×1", price: 1.39, sale: true, regular: 1.67, regSrc: "Sprouts regular" },
      { item: "Embasa chipotles in adobo 7 oz (GF)", price: 2.99 },
      { item: "San-J tamari (GF) 10 oz", price: 4.79 },
      { item: "Organic yellow onions ×3 (~$1.94 each est. @ $2.69/lb)", price: 5.82 },
      { item: "Garlic ×3 heads @ $0.79 (organic out of stock online)", price: 2.37 },
      { item: "Limes ×3 @ $0.55", price: 1.65, sale: true, regular: 2.01, regSrc: "Sprouts $0.67 each" },
      { item: "Organic cilantro bunch", price: 1.69 },
      { item: "Organic red bell pepper ×1", price: 2.49 },
      { item: "Organic basil 0.66 oz ×2 @ $2.79 (Duncan Family Farms)", price: 5.58 }
    ],
    "Costco (warehouse price)": [
      { item: "Kirkland Signature chicken breast 6.5 lb bag ($2.92/lb). Use 2.5 lb, freeze ~4 lb for next week", price: 18.99 }
    ]
  },
  totals: {
    note: "Estimated total is $137.21: Natural Grocers $18.87 + Whole Foods $15.07 + Sprouts $84.28 + Costco $18.99, before tax. GF lasagna noodles and bulk spices aren't priced, so add about $5–10. About $11.68 of the Costco chicken (~4 lb) carries over to next week, so this week's dinners really cost about $125.50. With Prime at Whole Foods, take off another $1.50.",
    savings: "$29.65 off regular prices: Natural Grocers $13.14 (tomatoes $10.80, cream cheese $1.34, sour cream $1.00), Whole Foods $2.38 (sweet potatoes $0.90, avocados $0.42, cauliflower $1.06), Sprouts $14.13 (BOGO grass-fed beef $9.49, mozzarella $4.00, limes $0.36, beans $0.28). Each is measured against the same store's regular price.",
    usualSpend: "Usual spend is still a placeholder until Christian sends receipts."
  },
  schedule: {
    "Sat Oct 31 — shop + cook": ["Natural Grocers (deals run Oct 31 – Nov 3; grab the GF lasagna noodles), then Sprouts, Whole Foods and Costco", "Put ~2.5 lb Costco chicken in the fridge to thaw and freeze the rest", "Make the lasagna sauce and bake the lasagna"],
    "Sun Nov 1 — cook": ["Simmer the chicken tinga and roast the sweet potatoes", "Cook rice ×2 (4 cups dry)", "Make the Thai basil beef", "Portion and label. Freeze the Fri–Sun meals"]
  },
  storage: ["Cool within 2 hours in shallow containers.", "Fridge: eat Mon–Thu meals within 4 days.", "Freeze the Fri–Sun portions right away (up to 3 months). Thaw in the fridge overnight and reheat to 165°F.", "Keep avocado, sour cream and basil garnish separate.", "Leftover Costco chicken (~4 lb) stays frozen for next week's plan.", "Check GF labels on sausage, chipotles, tamari and noodles."]
};
