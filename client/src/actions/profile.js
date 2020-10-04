import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { setAlert } from "../actions/alert";
import {
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  SET_LOADING,
} from "./types";

export const createProfile = ({
  name,
  age,
  sex,
  preferenceMale,
  preferenceFemale,
  photo,
  description,
}) => async (dispatch) => {
  try {
    const body = {
      name,
      age,
      sex,
      preferenceMale,
      preferenceFemale,
      photo,
      description,
    };
    const config = { headers: { "Content-Type": "application/json" } };
    await axios.post("/api/profile", body, config);
    dispatch(setAlert("Profile updated", "success"));
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    errors.map((error) => dispatch(setAlert(error.msg, "danger")));
  }
};
export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("api/profile/me");
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get("api/profile");
    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const clearProfile = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
};
