import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
const TABLE_HEAD = ["Product Name", "Product Id", "Stock", "Status"];
const ok = (
  <img src="/ok.jpg" className="w-5 h-5 m-auto" alt="Activated_image" />
);
const notok = (
  <img className="w-5 h-5 m-auto" src="/notok.jpg" alt="Disactivated_image" />
);
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    stock: "20",
    id: "1234567890",
    status: true,
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    stock: "20",
    id: "1234567891",
    status: false,
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    stock: "20",
    id: "1234567892",
    status: true,
  },
  {
    name: "Michael Levi",
    job: "Developer",
    stock: "20",
    id: "1234567893",
    status: true,
  },
  {
    name: "Richard Gran",
    job: "Manager",
    stock: "10",
    id: "1234567894",
    status: false,
  },
  {
    name: "Alex forry",
    job: "Developer",
    stock: "10",
    id: "1234567895",
    status: true,
  },
  {
    name: "Holy Shit",
    job: "Executive",
    stock: "10",
    id: "1234567896",
    status: true,
  },
  {
    name: "OH YEAH",
    job: "Developer",
    stock: "10",
    id: "1234567897",
    status: false,
  },
  {
    name: "Am loving it",
    job: "Manager",
    stock: "10",
    id: "1234567898",
    status: true,
  },
];

export default function Products() {
  const location = useLocation();
  console.log(location);
  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRows = TABLE_ROWS.filter(
    (row) =>
      row.name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.job.toLowerCase().includes(filterText.toLowerCase()) ||
      row.stock.toLowerCase().includes(filterText.toLowerCase()) ||
      row.id.toLowerCase().includes(filterText.toLowerCase())
  ).filter((row) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "notok") return row.status;
    if (statusFilter === "ok") return !row.status;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "ease", duration: 1 }}
      className="h-full overflow-scroll m-auto"
    >
      <motion.p
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: "calc(10vw - 10%)" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="font-normal leading-none opacity-70 text-center text-[50px] p-6 text-black"
      >
        Fittings<span className="text-orange-500">Wala</span> Products
      </motion.p>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="float-left p-1 mb-4 ml-10 mx-auto block rounded-lg border-gray-300 focus:outline-none shadow-md w-100%"
      />
      <div className="float-left">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 ml-5 h-9 justify-around mx-auto block rounded-lg border-gray-300 focus:outline-none shadow-md focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="ok">Available</option>
          <option value="notok">Not Available</option>
        </select>
      </div>
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(({ name, status, stock, id }, index) => {
            const isLast = index === filteredRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Link
                    to={`/products/${id}`}
                    className="font-normal text-center"
                  >
                    {name}
                  </Link>
                </td>
                <td className={classes}>{id}</td>
                <td className={classes}>{stock}</td>
                <td className={classes}>{status === true ? notok : ok}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
