import fetchAPI from "./axios.instance";

export const createPassenger = ({ name, flight_code }) =>
  fetchAPI({ method: "post", url: "/passengers", body: { name, flight_code } })
    .then(({ data }) => data.data)
    .catch((err) => err);

export const fetchPassenger = (id) =>
  fetchAPI({ method: "get", url: `/passengers/${id}` })
    .then(({ data }) => data.data)
    .catch((err) => {
      throw err;
    });

export const deletePassenger = (id) =>
  fetchAPI({ method: "delete", url: `/passengers/${id}` })
    .then(({ data }) => data.message)
    .catch((err) => err);

export const fetchPassengers = () =>
  fetchAPI({ method: "get", url: "/passengers" })
    .then(({ data }) => data.data)
    .catch((err) => err);

export const createPackage = ({ passengerId, category, description }) =>
  fetchAPI({
    method: "post",
    url: "/packages",
    body: { passengerId, category, description },
  })
    .then(({ data }) => data.data)
    .catch((err) => err);
