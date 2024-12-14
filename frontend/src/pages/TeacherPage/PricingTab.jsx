import React, { useState } from "react";

const PricingTab = () => {
  const [price, setPrice] = useState("");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pricing</h2>
      <form>
        <input
          type="number"
          placeholder="Course Price (USD)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-3 border rounded"
          min="0"
          required
        />
        <p className="mt-2">
          Set the price students need to pay to join this course.
        </p>
      </form>
    </div>
  );
};

export default PricingTab;
