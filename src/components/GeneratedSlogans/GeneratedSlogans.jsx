import React from "react";
import { slogansData } from "../../db";
import { HiOutlineChevronRight } from "react-icons/hi";
import "./GeneratedSlogans.css";

export const GeneratedSlogans = () => {
  return (
    <>
      <div className="generated-slogans-header my-5">
        <div className="fs-lg">We have generated 1,023 slogans for “cozy”</div>
        <button className="btn primary-outline-btn">Download all</button>
      </div>
      <div className="generated-slogans app-max-width">
        {slogansData.map(({ id, slogan }) => {
          return (
            <div className="slogan" key={id}>
              {slogan}
            </div>
          );
        })}
      </div>
      <hr className="divider my-5" />
      <div className="pagination">
        <ul className="pagination-btn-wrapper">
          <li>
            <button className="pagination-btn">1</button>
          </li>
          <li>
            <button className="pagination-btn">2</button>
          </li>
          <li>
            <button className="pagination-btn">3</button>
          </li>
          <li>
            <button className="pagination-btn">...</button>
          </li>
          <li>
            <button className="pagination-btn">21</button>
          </li>
        </ul>
        <button className="btn next-btn">
          Next <HiOutlineChevronRight />
        </button>
      </div>
    </>
  );
};
