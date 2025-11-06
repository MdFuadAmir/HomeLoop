import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const CheckoutForm = ({ bookingInfo }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingInfo.totalAmount > 0) {
      getClientSecret({ price: bookingInfo?.totalAmount });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingInfo?.totalAmount]);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    console.log("client secret =========>", data.clientSecret);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setCardError("");
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      setProcessing(false);
      return;
    }
    // 1creat payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: user?.displayName || "Anonymous",
        email: user?.email || "unknown@example.com",
      },
    });
    console.log("pay method=======>", paymentMethod);

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    }
    // 2️⃣ Confirm Payment Intent
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }
    if (!paymentIntent) {
      setCardError("Payment failed. Please try again.");
      setProcessing(false);
      return;
    }
    // 3️⃣ If success
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        ...bookingInfo,
        roomId:bookingInfo._id,
        date: new Date(),
        transactionId: paymentIntent.id,
        paymentMethod
      };
      delete paymentInfo._id
      console.log("pay info",paymentInfo);
      setCardError("");
      try{
        const {data} = await axiosSecure.post('/bookings',paymentInfo);
        console.log(data);
        toast.success('Payment Seccessfull & your Room Reserved Successfull')
        navigate('/dashboard/my-bookings')

      }catch(error){
        console.log(error);
      }
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <span className="loading loading-ring loading-xl px-6 py-2 w-full hover:bg-teal-500 bg-teal-600 rounded btn"></span>
        ) : (
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="px-6 py-2 w-full hover:bg-teal-500 bg-teal-600 text-white rounded"
          >
            Pay Now{" "}
            <span className="font-bold text-gray-200">
              ৳{bookingInfo.totalAmount}
            </span>
          </button>
        )}
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
