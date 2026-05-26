import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Diamond, LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { API_ENDPOINTS } from "@/config";
import SEO from "@/components/SEO";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_auth", "true");
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Use diamondresort@gmail.com / Diamondresortadmin@2026");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <SEO 
        title="Admin Login | Diamond Resort & Spa"
        description="Secure access to the Diamond Resort administration portal."
        keywords="admin login, resort management, Diamond Resort portal"
        noindex={true}
      />
      <div className="w-full max-w-md">
        <Link to="/" className="text-center mb-10 block group hover:opacity-90 transition-opacity">
          <img src="/DiamondResort.png" alt="Diamond Resort" className="w-40 h-40 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-700 ease-luxury" />
          <h1 className="font-display text-3xl text-primary-foreground tracking-tight mb-2">Admin Portal</h1>
          <p className="font-body text-primary-foreground/60">Diamond Resort Management</p>
        </Link>

        <form onSubmit={handleLogin} className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-3xl p-8 space-y-6">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-xl p-3 text-sm font-body text-center">
              {error}
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ring/60" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin Email"
              required
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-12 pr-4 py-4 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-300"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ring/60 group-focus-within:text-ring transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-12 pr-12 py-4 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/30 hover:text-ring transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ring text-primary font-label font-semibold text-xs tracking-[0.2em] py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-300 ease-luxury flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
          >
            <LogIn className="w-4 h-4" />
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
