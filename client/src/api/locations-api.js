import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/locations";

const getAll = async () => {
  const result = await request.get(BASE_URL);

  const events = Object.values(result);
  console.log(events);
  return events;
};

const getOne = async (locationId) => {
  return request.get(`${BASE_URL}/${locationId}`);
};

const getNames = async () => {
  const result = await request.get(`${BASE_URL}/select=name`);
  console.log(result);
  const names = Object.values(result);
  return names;
};

const locationsAPI = {
  getAll,
  getNames,
  getOne,
};

export default locationsAPI;
