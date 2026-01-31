import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Database,
  ReceiptText,
  LogOut,
  Calendar,
  Download,
  ChevronDown,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Search,
  Eye,
  Edit,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardComponent,
});

function DashboardComponent() {
  const [masterDataOpen, setMasterDataOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 min-h-screen flex">
      <aside className="w-64 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Grid3x3 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">GONKU</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <div>
            <button
              onClick={() => setMasterDataOpen(!masterDataOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5" />
                <span className="font-medium">Master Data</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${masterDataOpen ? `rotate-180` : ``}`}
              />
            </button>
            {masterDataOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-slate-800">
                <Link
                  to="/dashboard/category"
                  className="block px-8 py-2 text-sm text-gray-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Category
                </Link>
                <Link
                  to="/dashboard/product"
                  className="block px-8 py-2 text-sm text-gray-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Product
                </Link>
              </div>
            )}
          </div>

          <div>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400 transition-colors">
              <div className="flex items-center space-x-3">
                <ReceiptText className="w-5 h-5" />
                <span className="font-medium">Transaction</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-slate-800">
          <div className="flex items-center space-x-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
              <img
                alt="User Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYSLDLEVICxmXhy8cbnxplrwlCTNGzg74XNBGYk6z0eL3g6skvLZz45aeKStqn34LWp1Vo0yiZMOhIyUf0en9tnu0v8uUDMIpjIhTtDJMp1mUYEkOiOaixce_e9ywu1UYOxhMRXHku3nwwaACtONjaBDsOl0CttxKyiIprocVIayX6jG2T0EWpUhmW-2Dp10LnN68OW_uPxVSWevG70RTgthljK9zJYWQu4PQnUQVfSrhK35kl9LIy55nf6FwAg6jjgqWodYiMVb8"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@gonku.com</p>
            </div>
            <LogOut className="text-gray-400 w-4 h-4" />
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p className="text-gray-500 dark:text-slate-400">
              Welcome back to your business control center.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-800 text-sm font-medium flex items-center space-x-2">
              <Calendar className="text-gray-400 w-4 h-4" />
              <span>Oct 24, 2023 - Oct 30, 2023</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                +12% vs last month
              </span>
            </div>
            <h3 className="text-gray-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              Complete Order
            </h3>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-3xl font-bold">55</span>
            </div>
            <Link
              className="mt-4 flex items-center text-blue-500 text-sm font-medium group"
              to="/dashboard/order"
            >
              View details{" "}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Clock className="text-amber-600 dark:text-amber-400 w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                Action required
              </span>
            </div>
            <h3 className="text-gray-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              Pending Order
            </h3>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-3xl font-bold">12</span>
            </div>
            <Link
              className="mt-4 flex items-center text-blue-500 text-sm font-medium group"
              to="/dashboard/order"
            >
              Process orders{" "}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Users className="text-blue-600 dark:text-blue-400 w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                +5 new today
              </span>
            </div>
            <h3 className="text-gray-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              Total Customer
            </h3>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-3xl font-bold">102</span>
            </div>
            <Link
              className="mt-4 flex items-center text-blue-500 text-sm font-medium group"
              to="/dashboard"
            >
              Manage customers{" "}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Sales Analysis</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400">
                  Day
                </button>
                <button className="px-3 py-1 text-xs rounded-full bg-blue-500 text-white">
                  Week
                </button>
                <button className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400">
                  Month
                </button>
              </div>
            </div>
            <div className="relative h-64 w-full flex items-end space-x-2 px-2">
              {[40, 65, 35, 90, 55, 70, 45, 80].map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 hover:bg-blue-400/40 transition-all rounded-t-md ${index === 3 ? `bg-blue-500 hover:bg-blue-600` : `bg-blue-500/20`}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-400 dark:text-slate-500 font-medium uppercase px-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"].map(
                (day, index) => (
                  <span key={index}>{day}</span>
                ),
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Top Selling Products</h3>
            <div className="space-y-4">
              {[
                {
                  rank: 1,
                  name: "Classic Cotton T-Shirt",
                  category: "Apparel",
                  sold: 32,
                },
                {
                  rank: 2,
                  name: "Wireless Headphones",
                  category: "Electronics",
                  sold: 28,
                },
                {
                  rank: 3,
                  name: "Organic Coffee Beans",
                  category: "Groceries",
                  sold: 21,
                },
                {
                  rank: 4,
                  name: "Minimalist Desk Lamp",
                  category: "Home Decor",
                  sold: 19,
                },
                {
                  rank: 5,
                  name: "Suede Sneakers",
                  category: "Footwear",
                  sold: 14,
                },
              ].map((product) => (
                <div
                  key={product.rank}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-gray-100 dark:bg-slate-800 flex items-center justify-center font-bold text-gray-400">
                    {product.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold">{product.sold}</span>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                      sold
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-8 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 w-64"
                  placeholder="Search orders..."
                  type="text"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-slate-800/50 text-gray-500 dark:text-slate-400 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Order Code</th>
                  <th className="px-6 py-4">Total Price</th>
                  <th className="px-6 py-4">Order Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {[
                  {
                    code: "ORD-2023-001",
                    price: "$120.00",
                    date: "Oct 29, 2023",
                    status: "Complete",
                    statusColor: "green",
                  },
                  {
                    code: "ORD-2023-002",
                    price: "$45.50",
                    date: "Oct 28, 2023",
                    status: "Pending",
                    statusColor: "amber",
                  },
                ].map((order) => (
                  <tr
                    key={order.code}
                    className="hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{order.code}</td>
                    <td className="px-6 py-4">{order.price}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-slate-400">
                      {order.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          order.statusColor === "green"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                        } uppercase tracking-tighter`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                        <Eye className="text-gray-400 w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors ml-1">
                        <Edit className="text-gray-400 w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between text-sm text-gray-500">
            <span>Showing 2 of 10 orders</span>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <ChevronLeft className="w-4 h-4 inline" /> Prev
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Next <ChevronRight className="w-4 h-4 inline" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
