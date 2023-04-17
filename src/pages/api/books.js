import axios from "axios";

export async function getBestSeller(id){
  const {data} = await axios.get(`https://assign-api.piton.com.tr/api/rest/products/1`)
  return data.product;
}

export async function getClassic(id){
  const {data} = await axios.get(`https://assign-api.piton.com.tr/api/rest/products/2`)
  return data;
}

export async function getChildren(){
  const {data} = await axios.get(`https://assign-api.piton.com.tr/api/rest/products/3`)
  return data;
}

