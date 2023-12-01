import React from "react";
import OrderCard from "./components/orderCard";
import getOrderDetail from "@/actions/get-orders";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const fakeOrder = [
  {
    orderId: "784342798374283473894",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
    ],
    totalPrice: 250,
  },
  {
    orderId: "784342798374283473894",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
    ],
    totalPrice: 250,
  },
  {
    orderId: "784342798374283473894",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
    ],
    totalPrice: 250,
  },
  {
    orderId: "784342798374283473894",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
      {
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocI85FPs9X1Jf4GpzPODvnBW1Q3VK1j2-K5PLIx3LFamVQ=s96-c",
        name: "Ice Cream",
        quantity: 1,
        price: 25,
      },
    ],
    totalPrice: 250,
  },
];

const page = async () => {
  const session = await getServerSession(authOptions);

  const orders = await getOrderDetail(session.user.email);
  console.log(orders);

  return (
    <div className="px-12 rounded-xl border max-h-[80%] overflow-y-scroll m-7">
      {orders.map((order, key) => (
        <OrderCard order={order} key={key} />
      ))}
    </div>
  );
};

export default page;
