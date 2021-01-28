import React, { useEffect, useState } from "react";
import axios from "./axios";
import { StateValue } from "./contextAPI/cartContext";
import "./Pagination.css";

function Pagination() {
  let {
    state: { items },
    dispatch,
  } = StateValue();
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pageLinks, setPageLinks] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/products");
        let links = data.meta.links.slice(1, -1);
        setTotalPages(data.data.length);
        setCurrentPage(data.meta.current_page);
        setNextPage(data.links.next);
        setPrevPage(data.links.prev);
        setPageLinks(links);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const getNextPage = async () => {
    try {
      const info = await axios.get(`${nextPage}`);
      dispatch({
        type: "SET_PRODUCTS",
        products: info.data.data,
      });
      setCurrentPage(info.data.meta.current_page);
      setNextPage(info.data.links.next);
      setPrevPage(info.data.links.prev);
    } catch (error) {}
  };
  const getPrevPage = async () => {
    try {
      const info = await axios.get(`${prevPage}`);
      dispatch({
        type: "SET_PRODUCTS",
        products: info.data.data,
      });
      setCurrentPage(info.data.meta.current_page);
      setNextPage(info.data.links.next);
      setPrevPage(info.data.links.prev);
      console.log(info.data);
    } catch (error) {}
  };
  
  return (
    <div className="pagination">
      <ul>
      <li onClick={getPrevPage}>prev</li>
        {pageLinks?.map((link) => (
          <li key={pageLinks.indexOf(link)}
            onClick={async () => {
              let products = await axios.get(link.url);
              dispatch({
                type: "SET_PRODUCTS",
                products: products.data.data,
              });
            }}
          >
            {pageLinks.indexOf(link) + 1}
          </li>
        ))}
        <li  onClick={getNextPage}>next</li>
      </ul>
    </div>
  );
}

export default Pagination;
