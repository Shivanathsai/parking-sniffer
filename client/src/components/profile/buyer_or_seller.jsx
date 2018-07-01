import React from "react";
import { Link } from "react-router-dom";
import EmptyProfilePage from "./empty_profile_page";
import SpotsIndexPage from "./spots_index_page";
// import ReservationsIndexPage from "./reservations_index_page";
import VehiclesIndexPage from "./vehicles_index_page";
import SearchListContainer from "../search_list/search_list_container";

class BuyerOrSeller extends React.Component {
  render() {
    let user = this.props.user;

    if (!user.spots && !user.vehicles) {
      return (
        <div>
          <SearchListContainer />
          <EmptyProfilePage />;
        </div>
      );
    } else if (!user.spots) {
      return (
        <div>
          <div>
            <SearchListContainer />
            <VehiclesIndexPage vehicles={user.vehicles} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <SearchListContainer />

          <div className="index-wrapper">
            <SpotsIndexPage spots={user.spots}/>
          </div>
          <div>
            <VehiclesIndexPage vehicles={user.vehicles} />
          </div>

        </div>
      );
    }
  }
}

export default BuyerOrSeller;
