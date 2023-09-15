// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StripeCheckout from "react-stripe-checkout";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { API } from "../config/api";
const Product = () => {
  console.log();
  const product = {
    name: "Apple iPhone 14 (128 GB)-Yellow",
    price: "₹65,999",
  };
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    return API.post("/payment/createCharge", body)
      .then((res) => console.log("res", res))
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="flex justify-center items-center bg-[#136F63] h-[28rem] w-[28rem] rounded-xl shadow-lg shadow-[#1f3e3a]">
      <div className="ml-2">
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-[15rem] rounded-xl h-[20rem]  "
        >
          <SwiperSlide>
            <img src="iphone14.png" alt="" className=" " />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/64/54/e6/6454e66486997871f8eb2892bedfd286.jpg"
              alt=""
              className=" "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="iphone14.png" alt="" className=" " />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/64/54/e6/6454e66486997871f8eb2892bedfd286.jpg"
              alt=""
              className=" "
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col ml-5">
        <div className="text-slate-100 text-xl font-bold  ">
          Apple iPhone 14 (128 GB)-Yellow
        </div>

        <div className="text-slate-200 3 text-sm">₹65,999</div>

        <StripeCheckout
          stripeKey={process.env.REACT_APP_TESTKEY}
          token={makePayment}
          name={product.name}
          amount={product.price}
        >
          <button className="button w-[8rem] m-[15px] ">Buy Now</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default Product;
