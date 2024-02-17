import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";
import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Home() {
  const Recent_order_head = ["Order id", "Name", "Date", "Total Cost"];

  const Recent_order_data = [
    {
      id: "1234",
      name: "xyz",
      date: "30/2/2024",
      cost: "49₹",
    },
    {
      id: "1234",
      name: "xyz",
      date: "30/2/2024",
      cost: "49₹",
    },
    {
      id: "1234",
      name: "xyz",
      date: "30/2/2024",
      cost: "49₹",
    },
    {
      id: "1234",
      name: "xyz",
      date: "30/2/2024",
      cost: "49₹",
    },
    {
      id: "1234",
      name: "xyz",
      date: "30/2/2024",
      cost: "49₹",
    },
  ];

  const data = [
    {
      name: "Mon",
      Sales: 590,
      Orders: 900,
      amt: 1400,
    },
    {
      name: "Tue",
      Sales: 868,
      Orders: 967,
      amt: 1506,
    },
    {
      name: "Wed",
      Sales: 397,
      Orders: 1098,
      amt: 989,
    },
    {
      name: "Thus",
      Sales: 480,
      Orders: 1200,
      amt: 1228,
    },
    {
      name: "Fri",
      Sales: 520,
      Orders: 1108,
      amt: 1100,
    },
    {
      name: "Sat",
      Sales: 400,
      Orders: 680,
      amt: 1700,
    },
    {
      name: "Sun",
      Sales: 500,
      Orders: 700,
      amt: 1500,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <motion.div
        className="flex p-10 justify-evenly"
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: "calc(100vw - 100%)" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        <a
          href="#"
          class="block max-w-full w-80 justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
        >
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            0
          </p>
          <p class="font-normal text-gray-900 dark:text-gray-800">Units Sold</p>
        </a>

        <a
          href="#"
          class="block max-w-full w-80 justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
        >
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ₹ 0
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-800">Sales</p>
        </a>

        <a
          href="#"
          class="block max-w-full w-80 justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
        >
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            0
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-800">New Orders</p>
        </a>

        <a
          href="#"
          class="block max-w-full w-80 justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
        >
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            10
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-800">
            Active Listings
          </p>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            width={500}
            height={800}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Orders"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Sales"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div>
        <p className="font-normal leading-none opacity-70 text-center text-[50px] p-6 text-black">
          Recent <span className="text-orange-500">Orders</span>
        </p>
        <Card className="h-full w-full overflow-scroll text-center">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {Recent_order_head.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Recent_order_data.map(({ id, name, date, cost }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {cost}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </motion.div>
  );
}
