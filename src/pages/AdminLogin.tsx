import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Diamond, LogIn, Mail, Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Mock Login Logic
    setTimeout(() => {
      if (email === "admin@diamondresort.com" && password === "admin123") {
        localStorage.setItem("admin_auth", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials. Use admin@diamondresort.com / admin123");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Diamond className="w-12 h-12 text-ring mx-auto mb-4" />
          <h1 className="font-display text-3xl text-primary-foreground tracking-tight mb-2">Admin Portal</h1>
          <p className="font-body text-primary-foreground/60">The Diamond Resort Management</p>
        </div>

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

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ring/60" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-12 pr-4 py-4 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all duration-300"
            />
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
