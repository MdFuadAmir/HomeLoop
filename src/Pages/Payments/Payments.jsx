import { useLocation } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Components/Form/CheckoutForm";
import { differenceInCalendarDays } from "date-fns";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUCLIC_KEY);

const Payments = () => {
  const location = useLocation();
  const { room } = location.state || {};
  const totalDays = parseInt(
    differenceInCalendarDays(
      new Date(room.availableTo),
      new Date(room.availableFrom)
    )
  );
  const totalAmount =
    room?.rent?.type === "month"
      ? room?.rent?.amount
      : room?.rent?.amount * totalDays;

  if (!room) {
    return (
      <p className="text-red-500">No room data found. Please Relode Page</p>
    );
  }
  return (
    <div className="h-screen items-center flex">
      <div className="p-6 rounded-xl bg-linear-to-b fron-teal-50 via-teal-100 to-teal-200 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row justify-between w-full">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-teal-700 mb-4">Payment Now </h1>
        <div className="space-y-2  text-gray-600">
          <p>
            <span className="text-black font-bold">Title:</span> {room.title}
          </p>
          <p>
            <span className="text-black font-bold">Location:</span>{" "}
            {room.location}
          </p>
          <p>
            <span className="text-black font-bold">Rent:</span> $
            {room.rent.amount} / {room.rent.type}
          </p>
          <p>
            <span className="text-black font-bold">Available From:</span>{" "}
            {room.availableFrom}
          </p>
          <p>
            <span className="text-black font-bold">Available To:</span>{" "}
            {room.availableTo}
          </p>
        </div>
      </div>
      <div className="mt-6 w-full md:w-1/2">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            bookingInfo={{
              ...room,
              totalAmount,
            }}
          />
        </Elements>
      </div>
    </div>
    </div>
  );
};

export default Payments;
