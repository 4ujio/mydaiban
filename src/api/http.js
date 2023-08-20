import { apiGet, apiPost } from "./api";

export function getarr() {
  return new Promise((resolve, reject) => {
    apiGet("/api")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getlxc() {
  return new Promise((resolve, reject) => {
    apiPost()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
