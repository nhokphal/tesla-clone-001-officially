import React from "react";
import "../../Containers/TeslaBattery.css";
import TeslaNotice from "../../Components/TeslaNotice/TeslaNotice";
import TeslaCar from "../../Components/TeslaCar/TeslaCar";

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1 style={{ color: "white" }}>Welcome to Bookstore </h1>
        <div1>
          <li>
            <>
              <strong>Why you here? </strong>
              {
                "Bookselling helps you sell textbooks and used books for the most money by comparing offers from over 30 book buyback vendors with a single search "
              }
              .
            </>{" "}
          </li>
          <li>
            <>
              <strong>Why us ? </strong>
              {
                "Bookselling helps you sell textbooks and used books for the most money by comparing offers from over 30 book buyback vendors with a single search "
              }
              .
            </>{" "}
          </li>
        </div1>

        <TeslaNotice />
      </form>
    );
  }
}
export default TeslaBattery;
