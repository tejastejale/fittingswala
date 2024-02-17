import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
const TABLE_HEAD = ["Name", "Mobile", "Employed", "Position"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Admin",
    date: "23/04/18",
    mobile: "1234567890",
  },
  {
    name: "Alexa Liras",
    job: "Manager",
    date: "23/04/18",
    mobile: "1234567890",
  },
  {
    name: "Laurent Perrier",
    job: "Admin",
    date: "19/09/17",
    mobile: "1234567890",
  },
  {
    name: "Michael Levi",
    job: "Manager",
    date: "24/12/08",
    mobile: "1234567890",
  },
  {
    name: "Richard Gran",
    job: "Admin",
    date: "04/10/21",
    mobile: "1234567890",
  },
];

export function Users() {
  const [jobFilter, setJobFilter] = useState("all");
  const [filterText, setFilterText] = useState("");

  const filteredRows = TABLE_ROWS.filter(
    (row) =>
      row.name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.job.toLowerCase().includes(filterText.toLowerCase()) ||
      row.date.toLowerCase().includes(filterText.toLowerCase()) ||
      row.mobile.toLowerCase().includes(filterText.toLowerCase())
  ).filter((row) => jobFilter === "all" || row.job === jobFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "ease", duration: 1 }}
      className="h-full w-full overflow-scroll"
    >
      <motion.p
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: "calc(10vw - 10%)" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="font-normal leading-none opacity-70 text-center text-[50px] p-6 text-black"
      >
        Fittings<span className="text-orange-500">Wala</span> Users
      </motion.p>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="float-left p-1 mb-4 ml-10 mx-auto block rounded-lg border-gray-300 focus:outline-none shadow-md w-100%"
      />
      <div>
        <select
          value={jobFilter}
          onChange={(e) => setJobFilter(e.target.value)}
          className="p-1 h-8 ml-5 justify-around mx-auto block rounded-lg
          border-gray-300 focus:outline-none focus:border-blue-500 float-left shadow-md"
        >
          <option value="all">All</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
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
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-center"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(({ name, job, date, mobile }, index) => {
            const isLast = index === filteredRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name} className="text-center">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {mobile}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
