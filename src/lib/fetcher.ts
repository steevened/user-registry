import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const BASE_URL = publicRuntimeConfig.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
