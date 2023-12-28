const API_URL = "https://dogsapi.origamid.dev/json";

const TOKEN_POST = (body) => {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

const USER_GET = (token) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

const USER_POST = (body) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const PHOTO_POST = (formData, token) => {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
};

const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

const PHOTO_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
};

// const PHOTO_GET = (id) => {
//   return {
//     url: `${API_URL}/api/photo/${id}`,
//     options: {
//       method: "GET",
//       cache: "no-store",
//     },
//   };
// };

const COMMENT_POST = (id, body) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
};

const PHOTO_DELETE = (id) => {
  return {
    url: `${API_URL}/api/delete/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
};

export {
  TOKEN_POST,
  USER_GET,
  TOKEN_VALIDATE_POST,
  USER_POST,
  PHOTO_POST,
  PHOTOS_GET,
  PHOTO_GET,
  COMMENT_POST,
  PHOTO_DELETE,
};
