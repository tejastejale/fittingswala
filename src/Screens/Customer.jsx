import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
const TABLE_HEAD = ["Name", "Email", "Role", "Trusty"];

const TABLE_ROWS = [
  {
    name: "Alice Johnson",
    job: "accountant",
    date: "Customer",
    mobile: "alice.johnson@example.com",
    status: true,
  },
  {
    name: "Bob Smith",
    job: "developer",
    date: "Business",
    mobile: "bob.smith@example.com",
    status: false,
  },
  {
    name: "Emily Davis",
    job: "designer",
    date: "Interior",
    mobile: "emily.davis@example.com",
    status: true,
  },
  {
    name: "James Brown",
    job: "manager",
    date: "Customer",
    mobile: "james.brown@example.com",
    status: false,
  },
  {
    name: "Emma Wilson",
    job: "marketing",
    date: "Customer",
    mobile: "emma.wilson@example.com",
    status: true,
  },
  {
    name: "Michael Johnson",
    job: "engineer",
    date: "Interiar",
    mobile: "michael.johnson@example.com",
    status: false,
  },
  {
    name: "Sophia Miller",
    job: "analyst",
    date: "Business",
    mobile: "sophia.miller@example.com",
    status: true,
  },
  {
    name: "Oliver Davis",
    job: "architect",
    date: "Customer",
    mobile: "oliver.davis@example.com",
    status: false,
  },
  {
    name: "Isabella Wilson",
    job: "consultant",
    date: "Business",
    mobile: "isabella.wilson@example.com",
    status: true,
  },
];

const ok = (
  <img src="/ok.jpg" className="w-5 h-5 m-auto" alt="Activated_image" />
);
const notok = (
  <img src="/notok.jpg" className="w-5 h-5 m-auto" alt="Disactivated_image" />
);

export function Customers() {
  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRows = TABLE_ROWS.filter(
    (row) =>
      row.name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.mobile.toLowerCase().includes(filterText.toLowerCase()) ||
      row.date.toLowerCase().includes(filterText.toLowerCase())
  ).filter((row) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "ok") return row.status;
    if (statusFilter === "notok") return !row.status;
  });
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
        Fittings<span className="text-orange-500">Wala</span> Customers
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
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-1 ml-5 h-8 float-left justify-around mx-auto block rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 shadow-md"
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
          {filteredRows.map(({ name, status, date, mobile }, index) => {
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
                    {status ? (
                      <img
                        src="/ok.jpg"
                        className="w-5 h-5 m-auto"
                        alt="Activated_image"
                      />
                    ) : (
                      <img
                        src="/notok.jpg"
                        className="w-5 h-5 m-auto"
                        alt="Disactivated_image"
                      />
                    )}
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
