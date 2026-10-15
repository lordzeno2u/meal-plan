// ===== EDIT THIS FILE EACH WEEK =====
window.MEAL_PLAN = {
  week: "Week of Oct 19–25, 2026 (batch cook Sat Oct 17 – Sun Oct 18)",
  notes: "2 people · 1 dinner each per day = 14 portions · 100% gluten-free · no fish · organic where possible",
  dishes: [
    { id: "lasagna", name: "Turkey-Beef Lasagna", portions: 6, color: "#c0392b",
      ingredients: ["1 lb organic ground beef (85/15)", "1 lb organic ground turkey", "1 box (10 oz) gluten-free lasagna noodles (oven-ready or boil per box)", "1 large yellow onion, diced", "6 cloves garlic, minced", "16 oz cremini mushrooms, sliced", "5 oz baby spinach", "1 can (6 oz) tomato paste", "2 jars (24 oz each) GF marinara, or 2 cans (28 oz) crushed tomatoes", "1 tbsp dried Italian seasoning", "1–2 tsp red pepper flakes", "1 tbsp tamari (GF) for umami", "15 oz whole-milk ricotta", "1 egg", "16 oz shredded mozzarella", "1/2 cup grated Parmesan", "2 tbsp olive oil, salt & pepper"],
      steps: ["Heat oven to 375°F. Cook noodles per box if not oven-ready.", "In a large pot, heat olive oil; brown beef and turkey with onion, 7–8 min. Drain excess fat.", "Add mushrooms; cook until browned and liquid evaporates, 6–8 min. Add garlic, tomato paste, red pepper flakes; stir 2 min until paste darkens.", "Add marinara/tomatoes, Italian seasoning, tamari; simmer 15 min. Stir in spinach until wilted. Season.", "Mix ricotta, egg, half the Parmesan, pinch of salt.", "In a 9×13 pan: thin layer sauce → noodles → ricotta → sauce → mozzarella. Repeat 3 layers, ending with sauce, mozzarella, Parmesan.", "Cover with foil; bake 40 min. Uncover; bake 15 min until bubbling. Rest 20 min, cut into 6 portions."] },
    { id: "burrito", name: "Chipotle Chicken Burrito Bowls", portions: 4, color: "#d35400",
      ingredients: ["2 lb organic boneless skinless chicken thighs", "2–3 chipotle peppers in adobo + 2 tbsp adobo sauce (check label GF)", "1 tbsp cumin, 1 tsp smoked paprika, 1 tsp oregano", "2 limes (juice) + 4 cloves garlic", "2 tbsp olive or avocado oil, 1 tsp salt", "1.5 cups dry white or brown rice (≈4.5 cups cooked)", "2 cans (15 oz) organic black beans, drained & rinsed", "3 bell peppers + 1 red onion, sliced", "1 jar (16 oz) salsa (GF)", "Cilantro", "2 avocados — add fresh on the day you eat it"],
      steps: ["Blend chipotles, adobo, lime juice, garlic, spices, oil, salt. Marinate chicken 30 min (or overnight).", "Heat oven to 425°F. Toss peppers and onion with oil and salt on a sheet pan; roast 25 min.", "Roast or grill chicken on another pan at 425°F, 20–25 min to 165°F internal. Rest 5 min, slice.", "Cook rice; stir in lime juice + chopped cilantro.", "Warm beans with a pinch of cumin and salt.", "Divide into 4 containers: rice, beans, peppers, chicken. Pack salsa separately. Add sliced avocado when serving."] },
    { id: "orange", name: "Orange Chicken Stir-Fry", portions: 4, color: "#e67e22",
      ingredients: ["2 lb organic boneless skinless chicken thighs, 1-inch pieces", "1/3 cup cornstarch (+1 tbsp for sauce)", "3 tbsp avocado oil", "2 lb frozen organic broccoli florets", "1 cup fresh orange juice (≈3 oranges) + zest of 2 oranges", "1/3 cup tamari (GF)", "2 tbsp honey", "1 tbsp rice vinegar", "2 tbsp fresh ginger, grated", "5 cloves garlic, minced", "1–2 tsp chili flakes or 1 tbsp sriracha (check GF)", "1 tsp toasted sesame oil", "1.5 cups dry rice (≈4.5 cups cooked)", "Green onions & sesame seeds"],
      steps: ["Cook rice.", "Toss chicken with salt and 1/3 cup cornstarch until dusted.", "Heat 2 tbsp oil in a large skillet/wok on high; cook chicken in 2 batches, 5–6 min each until crisp and 165°F. Set aside.", "Add 1 tbsp oil; stir-fry broccoli from frozen 5–6 min until bright and just tender.", "Whisk OJ, zest, tamari, honey, vinegar, ginger, garlic, chili, 1 tbsp cornstarch. Pour into pan; simmer 2–3 min until glossy.", "Return chicken, toss, finish with sesame oil, green onions, sesame seeds. Divide over rice into 4 containers."] }
  ],
  // Reheat order: freshest-sensitive first, freezer items later in the week
  days: [
    { day: "Mon", dish: "orange", from: "fridge" },
    { day: "Tue", dish: "burrito", from: "fridge" },
    { day: "Wed", dish: "lasagna", from: "fridge" },
    { day: "Thu", dish: "orange", from: "fridge" },
    { day: "Fri", dish: "lasagna", from: "freezer (thaw in fridge Thu night)" },
    { day: "Sat", dish: "burrito", from: "freezer (thaw in fridge Fri night)" },
    { day: "Sun", dish: "lasagna", from: "freezer (thaw in fridge Sat night)" }
  ],
  reheat: {
    lasagna: "Microwave covered 2.5–3.5 min, or oven 350°F covered 20–25 min, to 165°F.",
    burrito: "Remove salsa; microwave covered with a splash of water 2–3 min. Top with salsa + fresh avocado.",
    orange: "Microwave covered with 1 tbsp water 2–3 min, stirring halfway; or skillet 4–5 min."
  },
  grocery: {
    "Costco": ["Organic boneless skinless chicken thighs (≈4 lb)", "Organic ground beef (1 lb)", "Organic ground turkey (1 lb)", "Organic rice (3 cups dry)", "Organic frozen broccoli (2 lb)", "Avocados (2)", "Organic eggs", "Organic baby spinach", "Organic marinara (2 jars, check GF)", "Organic black beans (2 cans)", "Shredded mozzarella (16 oz)", "Avocado oil / olive oil", "Organic salsa", "Limes / oranges (bag)"],
    "Whole Foods / Natural Grocers": ["Gluten-free lasagna noodles (10 oz)", "Cremini mushrooms (16 oz)", "Organic tomato paste (6 oz)", "Whole-milk ricotta (15 oz)", "Parmesan", "Organic yellow onion + red onion", "Organic bell peppers (3)", "Garlic (2 heads)", "Fresh ginger", "Cilantro + green onions", "Chipotle peppers in adobo (GF)", "Tamari (gluten-free)", "Organic cornstarch", "Honey", "Rice vinegar", "Toasted sesame oil + sesame seeds", "Spices: cumin, smoked paprika, oregano, Italian seasoning, red pepper flakes", "Oranges (3–4) if not from Costco"]
  },
  schedule: {
    "Saturday (≈2.5 hrs) — Lasagna": ["Make chipotle marinade; marinate burrito chicken overnight in fridge.", "Brown meats, build meat-mushroom sauce.", "Assemble and bake lasagna (55 min) — clean up while it bakes.", "Rest 20 min, cut into 6, cool completely, then portion: 2 fridge, 4 freezer (or 1 fridge + per plan)."],
    "Sunday (≈2 hrs) — Burrito Bowls + Orange Chicken": ["Start a big pot/rice cooker with all 3 cups dry rice.", "Roast peppers/onion and chipotle chicken at 425°F.", "Meanwhile prep orange sauce and cut/dust orange chicken.", "Stir-fry orange chicken and broccoli; portion over rice.", "Assemble burrito bowls; cool, label, fridge/freezer per plan."]
  },
  storage: ["Cool food within 2 hours of cooking; spread in shallow containers to cool fast.", "Fridge (≤40°F): eat within 4 days — Mon–Thu meals go in the fridge.", "Freeze everything for Fri–Sun right away. Lasagna and burrito bowls freeze well up to 3 months.", "Thaw frozen meals in the fridge overnight; reheat to 165°F.", "Keep avocado whole until the day you eat it; pack salsa separately.", "Label every container with dish + date. Use separate GF-only pans/utensils to avoid cross-contact."]
};
