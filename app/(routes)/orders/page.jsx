import React from "react";
import OrderCard from "./components/orderCard";
import getOrderDetail from "@/actions/get-orders";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }
  const orders = await getOrderDetail(session?.user?.email);

  return (
    <div className="px-12 rounded-xl border max-h-[80%] m-7">
      {orders.map((order, key) => (
        <OrderCard order={order} key={key} />
      ))}
    </div>
  );
};

export default page;
