import { USER_FINGERPRINT , USER_SESSION } from "@/utils/constants";
export const GET = (path) => {
    return new Promise((resolve, reject) => {
      
      fetch(basePrefix + path, {
        method: "GET",
        mode: "cors",
        headers: getHeaders()
      }, {next:{revalidate: 600}})
        .then((response) => response.json())
        .then(resolve)
        .catch(reject);
    });
  };
  
  export const POST = (path, data) => {
    return new Promise((resolve, reject) => {
      fetch(path, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
  };
   export const POST_TRACK = (path, data) => {
    return new Promise((resolve, reject) => {
      
      fetch(path, {
        method: "POST",
        headers: getHeaders(),
        mode: "cors",
        body: JSON.stringify(data),
      })
      .then((response) => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
    });
  };
  export const UPLOAD_POST = (path, data) => {
    return new Promise((resolve, reject) => {
      fetch(baseUploadPrefix + path, {
        method: "POST",
        mode: "cors",
        headers: getHeaders(),
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
  };
  
  export const POSTFILE = (path, file) => {
    const formData = new FormData();
    formData.append("file", file);
    return new Promise((resolve, reject) => {
      fetch(basePrefix + path, {
        method: "POST",
        headers: { ...getHeaders(), "Content-Type": "multipart/form-data" },
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
  };
  
  export const PUT = (path, data) => {
    return new Promise(async (resolve, reject) => {
      fetch(basePrefix + path, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
  };
  
  export const DELETE = (path, data) => {
    return new Promise(async (resolve, reject) => {
      fetch(basePrefix + path, {
        method: "DELETE",
        headers: getHeaders(),
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
  };
   function getHeaders() {
    return {userfingerprint: JSON.parse(localStorage.getItem(USER_FINGERPRINT)), usersession: JSON.parse(localStorage.getItem(USER_SESSION ))}
  }