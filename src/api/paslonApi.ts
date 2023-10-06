import axios from "axios";

const paslonAPI = axios.create({
  baseURL: "http://localhost:9000/",
});

export default paslonAPI;

// export const createPaslon = async (paslon) => {
//   return await paslonApi.post("/tasks", paslon);
// };
// export const updatePaslon = async (paslon) => {
//   return await paslonApi.patch(`/tasks/${paslon.id}`, paslon);
// };
// export const deletePaslon = async ({ id }) => {
//   return await paslonApi.delete(`/tasks/${id}`, id);
//};