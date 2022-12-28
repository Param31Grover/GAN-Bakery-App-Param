import React from "react";
import data from "./List";
import { FaCartPlus } from "react-icons/fa";
import payload from "./Payload";

function Home() {
  const [cartCount, setCartCount] = React.useState(0);

  const deleteFromBag = (product) => {
    payload.delete(product.index);
    if (product.added) {
      setCartCount(cartCount - 1);
      product.added = false;
    } else {
      console.log(`${product.name} already deleted from  the cart`);
    }
  };

  const addToBag = (product) => {
    payload.set(product.index, product);
    if (!product.added) {
      setCartCount(cartCount + 1);
      product.added = true;
      console.log(`${product.name}  added in the cart`);
    } else {
      console.log(`${product.name} already added in the cart`);
    }
  };

  return (
    <div style={{}}>
      <div key={"header"} style={{ backgroundColor: "#fff" }}>
        <div>
          <div
            style={{
              padding: "16px 200px",
              backgroundColor: "#fff",
              borderBottom: "1px solid #D9D8D8",
              position: "sticky",
              zIndex: 20,
              top: 0,
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  lineHeight: "1.25",
                  display: "flex",
                  fontWeight: "500",
                  flexFlow: "column",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    textTransform: "capitalize",
                    color: "#1A181E",
                    fontSize: "30px",
                    fontFamily: "cursive",
                    fontWeight: "700",
                  }}
                >
                  Jassi's Bakery
                </span>
              </div>
              <div
                style={{
                  flex: 4,
                }}
              >
                <div
                  style={{
                    marginLeft: "32px",
                    width: "100%",
                    borderRadius: 4,
                    flexDirection: "row",
                    display: "flex",
                    background: "#fff",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#181a13",
                        marginLeft: "24px",
                        fontWeight: "600",
                        fontSize: "17px",
                        fontFamily: "unset",
                      }}
                    >
                      Donuts
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#181a13",
                        marginLeft: "24px",
                        fontWeight: "600",
                        fontSize: "17px",
                        fontFamily: "unset",
                      }}
                    >
                      Breads
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#181a13",
                        marginLeft: "24px",
                        fontWeight: "600",
                        fontSize: "17px",
                        fontFamily: "unset",
                      }}
                    >
                      Pastries
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#181a13",
                        marginLeft: "24px",
                        fontWeight: "600",
                        fontSize: "17px",
                        fontFamily: "unset",
                      }}
                    >
                      Snacks
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "#181a13",
                        marginLeft: "24px",
                        fontWeight: "600",
                        fontSize: "17px",
                        fontFamily: "unset",
                      }}
                    >
                      Cheese Cakes
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "black",
                        fontSize: 24,
                      }}
                    >
                      <FaCartPlus />
                    </div>
                    <span
                      style={{
                        marginTop: -8,
                        marginLeft: 4,
                        color: "red",
                        fontWeight: "600",
                        fontFamily: "unset",
                        fontSize: 18,
                      }}
                    >
                      {cartCount}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={() => {
                      console.log(payload);
                    }}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      fontSize: "15px",
                      padding: "6px",
                    }}
                  >
                    CHECKOUT
                  </button>
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* <MaterialCommunityIcons
                  glyphNumber={987605}
                  size={24}
                  color="#1A181E"
                  style={{}}
                /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#fff",
          }}
        />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "10%",
        }}
      >
        {data.map((product, index) => {
          const quantity = product.quantity;
          const discount = product.mrp - product.price;
          return (
            <>
              <div
                style={{
                  alignSelf: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
                key={index}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 12,
                    }}
                  >
                    <div style={{ margin: "8px 8px" }}>
                      <div
                        style={{
                          border: "2px solid #DCDCDC",
                          display: "flex",
                        }}
                      >
                        <img
                          alt=""
                          style={{
                            width: 220,
                            height: 275,
                            alignSelf: "center",
                            justifyContent: "center",
                          }}
                          src={product.image}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        textTransform: "uppercase",
                        marginTop: 12,
                        fontSize: "16px",
                        fontWeight: "600",
                        margin: "8px 8px",
                        color: "#1A181E",
                      }}
                    >
                      {product.name.length < 18
                        ? product.name
                        : product.name.substring(0, 18) + "..."}
                    </div>

                    <div
                      style={{
                        margin: "0px 8px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize:
                            product.price.toString().length > 4 ? 10 : 16,
                          color: "rgb(26,24,30)",
                          marginRight: 6,
                        }}
                      >
                        ₹{product.price}
                      </div>
                      {product.mrp > product.price && (
                        <div
                          style={{
                            fontSize:
                              product.price.toString().length > 4 ? 10 : 14,
                            color: "#808080",
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                            fontWeight: "600",
                          }}
                        >
                          ₹{product.mrp}
                        </div>
                      )}
                      {product.mrp > product.price && (
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: 14,
                            marginLeft: 8,
                            color: "rgb(22,178,26)",
                          }}
                        >
                          (
                          {parseInt(
                            parseFloat(
                              (product.mrp - product.price) / product.mrp,
                              10
                            ).toFixed(2) * 100,
                            10
                          )}
                          % off)
                        </div>
                      )}
                      {quantity > 0 && (
                        <div
                          style={{
                            color: "black",
                          }}
                        >
                          {" "}
                          Qty: {quantity}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <button
                    onClick={() => addToBag(product)}
                    style={{
                      marginBottom: 12,
                      marginLeft: "8px",
                      marginRight: "8px",
                      width: 100,
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      display: "flex",
                      fontSize: "14px",
                      backgroundColor: "white",
                      border: "1px solid #1A181E",
                      color: "#1A181E",
                      fontWeight: "600",
                    }}
                  >
                    Add
                  </button>

                  <button
                    disabled={cartCount === 0}
                    onClick={() => deleteFromBag(product)}
                    style={{
                      marginBottom: 12,
                      marginLeft: "8px",
                      marginRight: "8px",
                      width: 100,
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      display: "flex",
                      fontSize: "14px",
                      backgroundColor: "white",
                      border: "1px solid #1A181E",
                      color: "#1A181E",
                      fontWeight: "600",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
