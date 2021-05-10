import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  fetchPassenger,
  fetchPassengers,
  deletePassenger,
} from "../config/api/axios.requests";

import { Button } from "antd";

import List from "../components/list";
import Profile from "../components/profile";
import Packages from "../components/packages";
import AddPackage from "../components/addPackage";

const passengerEmpty = {
  id: null,
  name: "",
  flight_code: null,
  packages: [],
};

const Passengers = () => {
  const history = useHistory();
  const { id } = useParams();
  const [passengers, setPassengers] = useState([]);
  const [passenger, setPassenger] = useState(passengerEmpty);

  const getPassenger = async (id) => {
    try {
      const passenger = await fetchPassenger(id);
      setPassenger(passenger);
    } catch (err) {
      console.log(err);
      history.push("/passengers");
    }
  };

  const removePassenger = async (id) => {
    try {
      await deletePassenger(id);
      setPassenger(passengerEmpty);
      setPassengers(passengers.filter((p) => p.id != id));
      history.push("/passengers");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPassengers()
      .then((dbPassengers) => {
        setPassengers(dbPassengers);
        if (id) getPassenger(id);
      })
      .catch(console.log);
  }, [id]);

  return (
    <div className="mainContainer">
      <List passengers={passengers} fetchPassenger={getPassenger} />

      <div className="userContainer">
        <Profile name={passenger.name} flight_code={passenger.flight_code} />
        <Packages packages={passenger.packages} />

        <div className="buttonsContainer">
          <AddPackage passenger={passenger} setPassenger={setPassenger} />
          <Button
            type="danger"
            disabled={!passenger.id}
            onClick={() => removePassenger(passenger.id)}
          >
            Remove Baggage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
