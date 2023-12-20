"use client";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { appendToOrders } from "@/app/redux/slice/locationSlice";
import { db } from "../../../firebase/clientApp";
import dataBase from "../../../dummy_crop.json";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";

export interface ICrop {
  name: string;
  url: string;
}
export interface ICropDetail {
  companyName: string;
  quntity: number;
}
export interface IOrder {
  companyName: string;
  quntity: number;
  name: string;
  url: string;
  id?: string;
}
export function SuperSupplyFirst() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [placeOrder, setPlaceOrder] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoadin] = useState<boolean>(false);
  const [orderHistory, setOrderHistory] = useState<boolean>(false);
  const [selected, setSelected] = useState<ICrop>({
    name: "",
    url: "",
  });
  const [details, setDetails] = useState<ICropDetail>({
    companyName: "",
    quntity: 0,
  });
  useEffect(() => {
    const q = query(collection(db, "orders"));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          orders.push({ ...(change.doc.data() as IOrder), id: change.doc.id });
          setOrders(orders);
          console.log("addedl", change.doc.data());
        }
        if (change.type === "modified") {
          const updatedOrdres = orders.map((order) => {
            if (order.id === change.doc.id) {
              return change.doc.data() as IOrder;
            }
            return order;
          });
          console.log(updatedOrdres);
          setOrders(updatedOrdres);
        }
      });
    });
  }, []);
  useEffect(() => {
    async function x() {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders: IOrder[] = [];
      querySnapshot.forEach((doc) => {
        orders.push({ ...(doc.data() as IOrder), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      setOrders(orders);
    }
    x();
  }, []);
  const handlePlaceOrder = async () => {
    setLoadin(true);
    const uid = v4();
    setDoc(doc(db, "orders", uid), {
      ...selected,
      ...details,
    });
    dispatch(appendToOrders(uid));
    setLoadin(true);
    setTimeout(() => {
      setPlaceOrder(false);
      setStep(0);
      setDetails({ companyName: "", quntity: 0 });
      setSelected({
        name: "",
        url: "",
      });
    }, 1000);
  };
  return (
    <div className="bg-white p-0 ">
      <div className="bg-green-500 mb-o text-white p-4 flex items-center justify-between">
        <ArrowLeftIcon
          onClick={() => router.back()}
          className="text-white h-6 w-6"
        />
        <h1 className="text-xl font-bold">Super Supply</h1>
        <button
          className="bg-white px-2 text-green-500 py-1 rounded-md"
          onClick={() => {
            setSelected({
              name: "",
              url: "",
            });
            setPlaceOrder(!placeOrder);
          }}
        >
          {placeOrder ? "View Listings" : "Place a order"}
        </button>
      </div>
      {placeOrder ? (
        step == 0 ? (
          <>
            <h1 className="text-center text-2xl font-bold mb-6">Select Crop</h1>
            <div className="grid grid-cols-2 gap-4">
              {dataBase["crops"].map((crop, index) => {
                return (
                  <div key={index}>
                    <OrderListings
                      name={crop.name}
                      url={crop.url}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center  mt-4 items-center w-full">
              <button
                className="px-12  py-2 text-white font-bold rounded bg-green-500 disabled:bg-gray-500 "
                disabled={!(selected.name != "")}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                {step == 0 ? "Proceed" : "Place order"}
              </button>
            </div>
          </>
        ) : step == 1 ? (
          <>
            <div className="flex flex-col px-5 mt-5">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-black text-2xl font-bold ">
                  Order Details
                </h1>
                <button
                  className="py-1 px-2 bg-green-400 text-white border-2 rounded-md"
                  onClick={() => {
                    setStep(0);
                    setSelected({ url: "", name: "" });
                  }}
                >
                  Chnage Crop
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <img
                  src={selected.url}
                  className="h-[200px] w-[300px] object-fill"
                />
                <p className="font-semibold ">{selected.name}</p>
              </div>
              <div className="flex flex-col  mt-10 gap-3 ">
                <p className="font-semibold">Company name</p>
                <input
                  type="text"
                  className="border-2 border-green-400 rounded-sm outline-none py-1 px-2"
                  placeholder="Company name"
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      companyName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <p className="font-semibold ">required quntity (in Kgs)</p>
                <input
                  type="number"
                  className="border-2 border-green-400 rounded-sm outline-none py-1 px-2"
                  placeholder="quntity in Kgs"
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      quntity: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
              <button
                className="px-12  py-2 text-white font-bold rounded bg-green-500 disabled:bg-gray-500 mt-8  "
                disabled={!(details.companyName != "" && details.quntity > 0)}
                onClick={handlePlaceOrder}
              >
                {loading ? "Placing the order ..." : "Place order"}
              </button>
            </div>
          </>
        ) : (
          ""
        )
      ) : (
        <>
          <div className="flex flex-col">
            <div className="flex justify-around bg-green-500 py-1 ">
              <p
                className={` cursor-pointer ${!orderHistory && "text-white"
                  } font-bold`}
                onClick={() => {
                  setOrderHistory(false);
                }}
              >
                Open orders
              </p>
              <p
                onClick={() => {
                  setOrderHistory(true);
                }}
                className={` cursor-pointer ${orderHistory && "text-white"
                  } font-bold`}
              >
                My orders
              </p>
            </div>
            <div className="flex flex-col gap-4 px-5 mt-5">
              {orders.map((order, index) => {
                return (
                  <div key={index}>
                    <ListingCard order={order} orderHistory={orderHistory} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface IProps {
  order: IOrder;
  orderHistory: boolean;
}
function ListingCard({ order, orderHistory }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [quanity, setQuantity] = useState<number>(0);
  const fullfillOrder = async () => {
    setLoading(true);
    const orderRef = doc(db, "orders", order.id || "");
    await setDoc(orderRef, {
      ...order,
      quntity: order.quntity - quanity,
    });
    setLoading(false);
  };
  return (
    <div className="w-full rounded-lg flex flex-col bg-[#E8ECF4] py-8 px-8">
      <div className="flex gap-4 items-center">
        <img className="w-[100px] fill" src={order.url} />
        {orderHistory ? (
          <p className="font-bold">
            Remaning quntity
            <p>{order.quntity} Kg</p>
          </p>
        ) : (
          <p className="font-bold">
            Market Demand:{order.quntity} kg of {order.name}
          </p>
        )}
      </div>
      {!orderHistory && (
        <div className="flex justify-between items-center mt-3">
          <input
            type="number"
            className=" border-2  border-green-400 outline-none rounded-md py-1 px-2 w-1/2"
            onChange={(e) => {
              setQuantity(parseInt(e.target.value));
            }}
            value={quanity}
          />
          <button
            className=" bg-green-500 text-white outline-none py-1 px-2 rounded-md disabled:bg-gray-400"
            disabled={!(quanity > 0 && quanity <= order.quntity)}
            onClick={fullfillOrder}
          >
            {loading ? "Loading" : "Fullfill order"}
          </button>
        </div>
      )}
    </div>
  );
}
const OrderListings = ({
  name,
  url,
  selected,
  setSelected,
}: {
  name: string;
  url: string;
  selected: ICrop;
  setSelected: (x: ICrop) => void;
}) => {
  return (
    <div
      className={`flex flex-col items-center border-2  cursor-pointer ${selected.name === name
          ? "border-green-600 rounded-lg  bg-green-300"
          : "border-transparent"
        }`}
      onClick={() => {
        setSelected({ name: name, url: url });
      }}
    >
      <img
        alt={name}
        className="rounded-full mb-2 bg-blue-200"
        height="150"
        src={url}
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="150"
      />
      <span className="bold font-medium ">{name}</span>
    </div>
  );
};
function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function MicroscopeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
