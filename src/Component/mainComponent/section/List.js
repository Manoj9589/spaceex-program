import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";
import { withRouter } from "react-router";

const List = (props) => {
  const [isLoading, setisLoading] = useState(true);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios
        .get(
          "https://api.spaceXdata.com/v3/launches?limit=100&" +
            String(props.routes).toLowerCase()
        )
        .then((response) => {
          setItemList(response.data);
          // console.log(response.data);
          if (response.data.length > 0) {
            setisLoading(false);
          }
          // console.log("Date Found");
        })
        .catch((error) => {
          console.log(error);
        });

      return requests;
    }

    fetchData();
  }, [props.routes]);
  return (
    <div className="item-list-wrapper">
      {itemList.length > 0 ? (
        itemList.map((items, index) => (
          <div className="items-box" key={index}>
            <img
              src={items.links.mission_patch_small}
              alt={items.mission_name}
            />
            <h3>
              {items.mission_name} #{items.flight_number}
            </h3>
            <label>Mission Ids</label>
            <ul>
              <li>{items.launch_site.site_id}</li>
            </ul>
            <div className="list-element">
              <label>
                Launch Year : <span>{items.launch_year}</span>
              </label>
            </div>
            <div className="list-element">
              <label>
                Successful Launch: <span>{String(items.launch_success)}</span>
              </label>
            </div>
            <div className="list-element">
              <label>
                Successful Landing :{" "}
                <span>
                  {String(items.rocket.first_stage.cores[0].land_success)}
                </span>
              </label>
            </div>
          </div>
        ))
      ) : (
        <h3 className="loadingBox">
          {isLoading ? "Loading ..." : "No Data avaliable"}
        </h3>
      )}
    </div>
  );
};
export default withRouter(List);
