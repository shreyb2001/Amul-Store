"use client";
import React, { useState } from "react";

import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import useCart from "@/hooks/use-cart";
import usePreviewModel from "@/hooks/use-preview-modal";
import Counter from "./ui/counter";

const Info = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModel();
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const increaseCounter = () => {
    setQuantity(quantity + 1);
  };

  const decreaseCounter = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setDisabled(true);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const onAddToCart = (e) => {
    const updatedData = { quantity, ...data };
    e.stopPropagation();
    cart.addItem(updatedData);
    setQuantity(1);
    previewModal.onClose();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size: </h3>
          <div>{data?.sizeId?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Quantity: </h3>
          <Counter
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
            disabled={disabled}
            quantity={quantity}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
