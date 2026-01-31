import { createFileRoute } from "@tanstack/react-router";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  BarChart3,
  HelpCircle,
  Phone,
  KeyRound,
  Building,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen  text-gray-900 flex flex-col font-sans">
      <header className="flex items-center justify-between px-6 py-4 lg:px-10 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="size-8 text-blue-600">
            <Building className="w-8 h-8" />
          </div>
          <h2 className="text-gray-900 text-xl font-bold">Gonku BackOffice</h2>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1"
              href="#"
            >
              <HelpCircle className="w-4 h-4" />
              Help Center
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              href="#"
            >
              Support
            </a>
          </nav>

          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-md">
            <Phone className="w-4 h-4 mr-2" />
            Contact Sales
          </button>
        </div>
      </header>

      <main className="">
        <div className="flex flex-row justify-between px-20 py-14">
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 w-fit">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Enterprise Grade Control
                </span>
              </div>

              <h1 className="text-gray-900 text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Operational Excellence{" "}
                <span className="text-blue-600">Defined.</span>
              </h1>

              <p className="text-gray-600 text-lg lg:text-xl font-normal leading-relaxed">
                Streamline your business workflows, manage enterprise data, and
                scale your operations with the industry-leading admin dashboard.
                Designed for speed, built for security.
              </p>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Real-time Analytics
                    </p>
                    <p className="text-gray-500 text-sm">
                      Live insights and data visualization
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <KeyRound className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">RBAC Security</p>
                    <p className="text-gray-500 text-sm">
                      Role-based access control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-120">
            <div className=" border border-gray-200 rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-gray-900 text-3xl font-bold mb-2">
                  Sign In
                </h3>
                <p className="text-gray-500 text-sm">
                  Access your secure admin environment
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-semibold">
                    Username or Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="email"
                      type="text"
                      placeholder="e.g. admin@gonku.com"
                      className="w-full rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 pl-12 pr-4 py-4 placeholder:text-gray-400 transition-all outline-none"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 text-sm font-semibold">
                      Password
                    </label>
                    <a
                      className="text-blue-600 text-xs font-semibold hover:underline"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900 pl-12 pr-12 py-4 placeholder:text-gray-400 transition-all outline-none"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="text-gray-600 text-sm">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Sign into Dashboard
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col gap-4">
                <p className="text-gray-500 text-sm text-center">
                  Don't have an account?{" "}
                  <a
                    className="text-blue-600 font-semibold hover:underline"
                    href="#"
                  >
                    Request Access
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-10 py-6 border-t border-gray-200 bg-white/80 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <span className="text-gray-500 text-sm">
            © 2026 Gonku Systems Inc.
          </span>
          <div className="flex gap-4">
            <a
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-500 text-sm font-medium">
            All systems operational
          </span>
        </div>
      </footer>
    </div>
  );
}
