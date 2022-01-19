import React, { useState } from "react";
import Card from "../../components/Card";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Dropdown from "../../components/Dropdown";
import { staticConst } from "../../static/staticConst";
import InputPrice from "../../components/InputPrice";
import Radio from "@material-tailwind/react/radio";

const ProductPage = () => {
  const [filterDefault, setFilterDefault] = useState(["All Product"]);
  const handleChange = (e, name) => {
    if (filterDefault.includes("All Product")) {
      setFilterDefault([]);
    }

    if (
      !filterDefault.includes(
        name === "lowerPrice" ? "Lower Price" : "Higher Price"
      )
    ) {
      setFilterDefault((old) => [
        ...old,
        name === "lowerPrice" ? "Lower Price" : "Higher Price",
      ]);
    }

    console.log(e.target.value);
  };

  const handleRadioChange = (e, name) => {
    if (filterDefault.includes("All Product")) {
      setFilterDefault([]);
    }
    if (!filterDefault.includes(name)) {
      setFilterDefault((old) => [...old, name]);
    }
    console.log(e.target.id);
  };

  return (
    <div className="mt-3">
      <div
        className="mycontainer mobile:mycontainerfull grid py-7 gap-x-7"
        style={{ gridTemplateColumns: "1.2fr 5fr" }}
      >
        <div className="rounded-lg __montserat-text  shadow border border-gray-200 bg-white max-h-screen p-5">
          <div>
            <div>
              <p className="font-semibold text-subtitle">Price :</p>
              <InputPrice
                placeHolder="Lower Price"
                handleChange={(e) => handleChange(e, "lowerPrice")}
              />
              <InputPrice
                placeHolder="Higher Price"
                handleChange={(e) => handleChange(e, "higherPrice")}
              />
            </div>
            <div>
              <p className="font-semibold text-subtitle mt-5">Location :</p>
              <div class="form-control mt-2">
                <form onChange={(e) => handleRadioChange(e, "location")}>
                  <div className="mt-2">
                    <Radio
                      color="lightBlue"
                      text="all"
                      id="semua"
                      name="location"
                    />
                  </div>
                  <div className="mt-2">
                    <Radio
                      color="lightBlue"
                      text="Jabodetabek"
                      id="jabodetabek"
                      name="location"
                    />
                  </div>
                  <div className="mt-2">
                    <Radio
                      color="lightBlue"
                      text="Surabaya"
                      id="surabaya"
                      name="location"
                    />
                  </div>
                  <div className="mt-2">
                    <Radio
                      color="lightBlue"
                      text="Bandung"
                      id="bandung"
                      name="location"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mycontainer mobile:mycontainerfull min-h-screen">
            <div className="grid" style={{ gridTemplateColumns: "1fr 120px" }}>
              <div className="__montserat-text text-sm text-subtitle flex item-center">
                {filterDefault.map((el, ind) => (
                  <button
                    key={ind}
                    className="font-medium mr-1 py-1.5 px-4 rounded-full hover:text-textDefault border flex items-center"
                  >
                    {el}{" "}
                    {el !== "All Product" && (
                      <AiOutlineCloseCircle className="ml-5 text-xl" />
                    )}
                  </button>
                ))}
              </div>
              <Dropdown
                title="Sort by"
                viewMore={true}
                dropdownOpts={staticConst.sortOptions}
              />
            </div>
            <div
              className="mt-5 grid justify-between"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 12rem))",
                gap: "25px 15px",
              }}
            >
              {staticConst.stasticCardData.map((el, indx) => (
                <div key={indx}>
                  <Card data={el} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
