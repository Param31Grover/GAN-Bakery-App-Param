import React from "react";
import payload from "./Payload";
import Home from "./Home";

function Header(props) {
  const consoleDetails = () => {
    console.log("Product details going to payment page");
    console.log(payload);
  };
  console.log(props.cartCount);
  return (
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
                <i class="cis-cart"></i>
                {/* <MaterialCommunityIcons
                  glyphNumber={983765}
                  size={24}
                  color="#1A181E"
                  style={{ marginRight: 4 }}
                /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  onClick={consoleDetails}
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
  );
}

export default Header;
