import { useState, useEffect } from "react";
import Product from "../../components/Product";

const Store = () => {
  const [message, setMessage] = useState("");
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);

  //   if (query.get("success")) {
  //     setMessage("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     setMessage(
  //       "Order canceled -- continue to shop around and checkout when you're ready."
  //     );
  //   }
  // }, []);

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  return (
    <>
      <div className="  flex justify-center items-center">
        {message ? (
          <Message message={message} />
        ) : (
          <Product setMessage={setMessage} />
        )}
      </div>
    </>
  );
};

export default Store;
