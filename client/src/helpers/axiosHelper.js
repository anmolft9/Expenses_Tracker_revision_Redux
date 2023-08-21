import axios from "axios";
const rootUrl = "http://localhost:8000";
const userEP = rootUrl + "/api/v1/user";
const transactionEP = rootUrl + "/api/v1/transaction";

//user APIs

export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEP, obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEP + "/login", obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

/////transaction api

export const postNewTransaction = async (obj) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;
    const response = await axios.post(transactionEP, obj, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;

    const response = await axios.get(transactionEP, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

///delete transaction
export const deleteTransaction = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;

    const response = await axios.delete(transactionEP + "/" + _id, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
