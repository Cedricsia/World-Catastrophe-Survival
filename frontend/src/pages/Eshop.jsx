/*eslint-disable*/
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import shop from "../assets/shop.svg";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrowDown.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import AI from "../assets/image5.svg";
function Eshop({ chatModal, setChatModal }) {
  const [visibleFilter, setVisibleFilter] = useState(true);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  const removeFromCart = (itemName) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== itemName);
    setCart(updatedCart);

    const removedItem = cart.find((cartItem) => cartItem.name === itemName);
    if (removedItem) {
      setTotalPrice(
        totalPrice - removedItem.price * (itemQuantities[itemName] || 1)
      );
    }
  };

  const updateItemQuantity = (itemName, newQuantity) => {
    setItemQuantities({
      ...itemQuantities,
      [itemName]: newQuantity,
    });
  };

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategory("");
    setFilteredData(data);
  };

  const checkout = () => {
    toast.success(
      "Your order has been placed successfully!!, be ready to pay the delivery guy!! Thank you for shopping with us!! 😊 Your Total is gona be : " +
        totalPrice.toFixed(2) +
        "€"
    );
    setTotalPrice(0);
  };
  const applyFilters = () => {
    let filteredItems = data.filter((item) => {
      let categoryMatch = true;
      let minPriceMatch = true;
      let maxPriceMatch = true;

      if (selectedCategory && item.category !== selectedCategory) {
        categoryMatch = false;
      }

      if (minPrice && item.price < parseFloat(minPrice)) {
        minPriceMatch = false;
      }

      if (maxPrice && item.price > parseFloat(maxPrice)) {
        maxPriceMatch = false;
      }

      return categoryMatch && minPriceMatch && maxPriceMatch;
    });
    setFilteredData(filteredItems);
  };

  const filterItems = (item) => {
    const minPriceNum = parseFloat(minPrice);
    const itemPriceNum = parseFloat(item.price);
    if (selectedCategory && item.category !== selectedCategory) {
      return false;
    }
    if (minPriceNum && itemPriceNum < parseFloat(minPriceNum)) {
      return false;
    }
    if (maxPrice && item.price > parseFloat(maxPrice)) {
      return false;
    }
    return true;
  };

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += itemQuantities[item.name] || 1;
      updatedCart[itemIndex].price += item.price;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          name: item.name,
          picture: item.picture,
          quantity: itemQuantities[item.name] || 1,
          price: item.price,
          category: item.category,
        },
      ]);
    }

    setTotalPrice(
      totalPrice + Number(item.price) * (itemQuantities[item.name] || 1)
    );
  };

  const changeView = () => {
    setVisibleCart(!visibleCart);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/items`)
      .then((res) => {
        setData(res.data);
        const categories = new Set(res.data.map((item) => item.category));
        setCategories(Array.from(categories));

        setFilteredData(res.data);
      })
      .catch((err) => console.error(err));
  }, [cart, selectedCategory, visibleFilter]);

  return (
    <div className="flex flex-col mt-7 w-screen md:w-full">
      <div className="bg-primary flex justify-end px-2  md:h-[160px] md:bg-inherit">
        <h1 className="bg-primary text-secondary text-3xl md:text-5xl md:mt-10 md:hidden p-2">
          eShop
        </h1>
        <button type="button" onClick={changeView}>
          <img src={shop} alt="shop-icon" className="h-20 m-2 hidden md:flex" />
        </button>
      </div>
      <div className="md:mt-5">
        <div className="bg-accent   border-2  border-b-neutral md:bg-base-100 md:hidden ">
          <h1 className="text-3xl text-neutral">
            My Basket{" "}
            <button type="button" onClick={changeView}>
              <img src={shop} alt="shop-icon" className="h-10 pt-1" />
            </button>
          </h1>
        </div>
        <div className="flex bg-accent p-2 md:hidden">
          <h1 className="text-3xl text-neutral">Filters</h1>
          {visibleFilter ? (
            <button type="button" onClick={() => setVisibleFilter(false)}>
              <img src={arrowUp} alt="arrow-up" className="h-8 ml-2" />
            </button>
          ) : (
            <button type="button" onClick={() => setVisibleFilter(true)}>
              <img src={arrowDown} alt="arrow-down" className="h-8 ml-2" />
            </button>
          )}
        </div>
        {visibleFilter && (
          <div className="bg-accent md:bg-base-100  md:my-4">
            <div className="hidden md:flex md:mb-10 md:ml-10">
              {!chatModal && (
                <div className="hidden md:flex flex-row md:ml-96">
                  <img src={AI} alt="AI" />
                  <h1 className="ml-10 text-4xl p-3 rounded bg-accent w-[660px]">
                    We are using AI to detect your mood and suggest you the
                    best!!
                    <button
                      onClick={() => setChatModal(true)}
                      type="button"
                      className="p-1 mt-4 w-[150px] h-24 text-2xl bg-primary text-secondary rounded-lg ml-[450px]"
                    >
                      UNLOCK IT!
                    </button>
                  </h1>
                </div>
              )}
            </div>
            <h1 className="text-2xl text-neutral md:hidden">Categories:</h1>
            <div className="flex flex-col gap-1 md:flex-wrap md:flex-row md:gap-3 md:justify-center p-2">
              {categories &&
                categories.map((cat) => (
                  <div className="ml-3 md:ml-0" key={uuidv4()}>
                    <button
                      type="button"
                      className="btn btn-primary w-36 h-10 md:flex text-secondary md:text-xl md:w-40"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  </div>
                ))}
            </div>
            <div className="border border-t-neutral flex flex-wrap md:justify-center border-none">
              <div className="flex flex-row bg-primary rounded w-[100px] md:w-[150px] mt-2 ml-5 md:text-2xl">
                <p className="text-secondary text-lg p-1 md:text-2xl md:p-3">
                  Min:
                </p>
                <input
                  type="text"
                  className="w-12 h-6 rounded mt-1 md:p-1 md:mt-4 md:w-[56px] md:h-8 md:text-2xl"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row bg-primary rounded w-[100px] md:w-[150px]  mt-2 ml-28 md:mr-4">
                <p className="text-secondary text-lg p-1 md:text-2xl md:p-3 ">
                  Max:
                </p>
                <input
                  type="text"
                  className="w-12 h-6 rounded  mt-1 md:p-1 md:w-18 md:mt-4 md:w-[56px] md:h-8 md:text-2xl"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <div className="flex ml-5 mt-3 w-[100px] mb-2 md:w-[150px]">
                <button
                  type="button"
                  className="btn btn-primary text-secondary font-bold w-[100px] md:w-[150px] md:h-[50px] md:text-2xl"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
              <div className="flex ml-28 mt-3 w-[100px] mb-2">
                <button
                  type="button"
                  className="btn btn-primary text-secondary font-bold w-[100px] md:w-[150px] md:h-[50px] md:text-2xl"
                  onClick={applyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mb-2 md:grid md:grid-cols-3">
          {!visibleCart &&
            filteredData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col  border rounded p-2  border-black  mx-2 mt-2 md:w-76 "
              >
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-primary text-xl font-bold m-1">
                      {item.name}
                    </h3>

                    <h4 className="text-neutral font-bold text-xl">
                      Category: {item.category}
                    </h4>
                  </div>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/items/${
                      item.picture
                    }`}
                    alt={item.name}
                    className=" hidden md:flex  m-2"
                  />
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/items/${
                      item.picture
                    }`}
                    alt={item.name}
                    className=" w-20 md:hidden m-2"
                  />
                </div>
                <p className="mt-2">Description: {item.description}</p>

                <div className="flex items-center justify-between mx-2">
                  <p className="text-primary text-lg font-bold">Quantity:</p>
                  <p className="text-2xl font-bold">
                    {" "}
                    {itemQuantities[item.name] || 1}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      updateItemQuantity(
                        item.name,
                        (itemQuantities[item.name] || 1) + 1
                      )
                    }
                  >
                    <img src={plus} alt="plus-icon" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      updateItemQuantity(
                        item.name,
                        (itemQuantities[item.name] || 1) - 1
                      )
                    }
                  >
                    <img src={minus} alt="minus-icon" />
                  </button>
                </div>
                <div className="flex justify-between mx-2">
                  <p>Price:</p>
                  <p className="text-2xl text-neutral font-bold pr-14">
                    {item.price} €
                  </p>
                  <div className="flex flex-col">
                    <div></div>
                    <button
                      className="bg-primary mt-1 border rounded-lg h-10 w-28 text-lg text-secondary"
                      type="button"
                      onClick={() => addToCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {visibleCart && (
          <div>
            <div className="md: flex flex-row flex-wrap">
              {cart.map((item) => (
                <div
                  key={uuidv4()}
                  className="flex flex-col border-2 rounded border-neutral m-2 p-2 md:w-[460px] "
                >
                  <div className="flex ">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/items/${
                        item.picture
                      }`}
                      alt={item.name}
                      className="w-1/4 object-contain"
                    />
                    <div className="flex flex-col justify-around">
                      <h3 className="text-primary font-bold text-2xl">
                        {item.name}
                      </h3>
                      <p className="text-neutral font-bold text-xl">
                        Category :{item.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row mt-1">
                    <p className="text-primary font-bold text-xl ">Quantity:</p>
                    <p className="text-neutral font-bold text-2xl ml-5">
                      {itemQuantities[item.name] || 1}
                    </p>
                  </div>
                  <div className="flex flex-row mt-1">
                    <p className="text-primary font-bold text-xl">Price :</p>
                    <p className="text-neutral font-bold text-2xl ml-5">
                      {item.price} €
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-primary mt-1 border rounded-lg h-10 w-28 text-lg text-secondary"
                      type="button"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-2 rounded border-gray-300 m-2 p-4">
              <h1 className="text-primary font-bold text-xl mb-4">
                Delivery address :
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Street name"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 rounded border-gray-300 m-2 p-4">
              <h1 className="text-primary font-bold text-xl mb-4">Payment :</h1>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Card owner"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Card Code"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="Expiration"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-200 placeholder-gray-400 p-2 rounded w-full"
                    type="text"
                    placeholder="CCV"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:mb-2">
              <p className="text-2xl mx-2 my-2 md:text-4xl">
                Total Price:{" "}
                <span className="font-bold text-primary  text-3xl md:text-5xl">
                  {totalPrice ? totalPrice.toFixed(2) : "0"} €
                </span>
              </p>
              <button
                onClick={checkout}
                type="button"
                className="mt-2 mx-2 my-3 bg-primary  border rounded-lg h-12 w-32 text-2xl text-secondary md:text-5xl md:h-20 md:w-80"
              >
                CheckOut
              </button>
              <ToastContainer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Eshop;
/*esl-int-disable*/
