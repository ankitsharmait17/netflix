import { handleResponse, handleError } from "./apiUtils";

export function getImdbRating(id) {
  const apiKey = "1181fcb0";
  const url = "http://www.omdbapi.com";
  return fetch(`${url}/?apiKey=${apiKey}&i=${id}`)
    .then(handleResponse)
    .catch(handleError);
}
