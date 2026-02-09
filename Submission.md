# Jest Workshop Submission

## Student Details
- Name: [Your Name]
- Roll Number: [Your Roll Number]
- GitHub Username: [Your GitHub Username]

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: example: sanity check
**What it protects against:** This test makes sure that the simple case of no coupon works fine and doesn't accidentally trigger any discounts it shouldn't.

---

### 2. Test Name: Check for invalid sub total
**What it protects against:** It prevents using negative numbers for the subtotal which would break the math of the pricing system.

---

### 3. Test Name: SAVE10 coupon
**What it protects against:** Makes sure the 10% discount from the SAVE10 coupon is actually applied correctly to the total.

---

### 4. Test Name: FLAT50 boundary case
**What it protects against:** Specifically tests the edge case of using a flat discount that could potentially bring the price down to zero, ensuring it's handled safely.

---

### 5. Test Name: case-insensitive coupon
**What it protects against:** Makes the code more user-friendly by allowing "save10" in lowercase to work just as well as the uppercase version.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
I realized how useful automated tests are for catching silly mistakes early, and how CI makes the whole process of checking your code Much more reliable.
