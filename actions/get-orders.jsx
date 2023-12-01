const URL = `${process.env.NEXT_PUBLIC_API_URL}/userId`;

const getOrderDetail = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getOrderDetail;
