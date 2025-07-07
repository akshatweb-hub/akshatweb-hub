// # Retry by hardcoding the Dashboard.jsx content from the previous generated code

// dashboard_code = ""
import { Card, CardContent } from "../Landing/Component/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { MdStore } from "react-icons/md";

const data = [
  { year: "2014", sales: 1000, expenses: 400, profit: 200 },
  { year: "2015", sales: 1200, expenses: 450, profit: 250 },
  { year: "2016", sales: 650, expenses: 1100, profit: 300 },
  { year: "2017", sales: 1020, expenses: 540, profit: 350 },
  { year: "2018", sales: 250, expenses: 400, profit: 300 },
  { year: "2020", sales: 450, expenses: 1200, profit: 320 },
  { year: "2021", sales: 1200, expenses: 250, profit: 240 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card className="bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
          <CardContent>
            <div className="flex items-center justify-between">
              <FaDollarSign className="text-2xl" />
              <div className="text-right">
                <h4 className="text-sm">Total Earning</h4>
                <p className ="text-xl font-bold">$500</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-700 to-teal-500 text-white">
          <CardContent>
            <div className="flex items-center justify-between">
              <FaShoppingBag className="text-2xl" />
              <div className="text-right">
                <h4 className="text-sm">Total Order</h4>
                <p className="text-xl font-bold">$900</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-emerald-500 to-lime-400 text-white">
          <CardContent>
            <div className="flex items-center justify-between">
              <MdStore className="text-2xl" />
              <div className="text-right">
                <h4 className="text-sm">Total Income</h4>
                <p className="text-xl font-bold">$203k</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Company Performance</h2>
          <p className="text-sm text-gray-500 mb-4">
            Sales, Expenses, and Profit: 2023-2024
          </p>
          <BarChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#00bcd4" />
            <Bar dataKey="expenses" fill="#3f51b5" />
            <Bar dataKey="profit" fill="#4caf50" />
          </BarChart>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Popular Products</h2>
          
        </CardContent>
      </Card>
    </div>
  );
}
