import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Diamond, LogOut, Search, Filter, Trash2, Download,
  Calendar, Users, Mail, Phone, Clock, CheckCircle2,
  XCircle, AlertCircle, ChevronDown,
} from "lucide-react";

interface Enquiry {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  event_type: string | null;
  guest_count: number | null;
  message: string | null;
  status: string;
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  contacted: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  confirmed: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  cancelled: "bg-red-500/20 text-red-300 border-red-500/30",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  useEffect(() => {
    checkAuth();
    fetchEnquiries();
  }, []);

  const checkAuth = async () => {
    const isAdmin = localStorage.getItem("admin_auth") === "true";
    if (!isAdmin) {
      navigate("/admin");
    }
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    // Mock simulation
    setTimeout(() => {
      const mockData: Enquiry[] = [
        {
          id: "1",
          type: "event",
          name: "Amit Kumar",
          email: "amit@example.com",
          phone: "+91 9876543210",
          event_type: "Wedding",
          guest_count: 500,
          message: "Looking for premium decor.",
          status: "new",
          created_at: new Date().toISOString(),
        },
        {
          id: "2",
          type: "event",
          name: "Shashank Manohar",
          email: "shashank@example.com",
          phone: "+91 8765432109",
          event_type: "Corporate",
          guest_count: 150,
          message: "Conference room required.",
          status: "contacted",
          created_at: new Date(Date.now() - 86400000).toISOString(),
        },
      ];
      setEnquiries(mockData);
      setLoading(false);
    }, 800);
  };

  const updateStatus = async (id: string, status: string) => {
    // Mock update
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    // Mock delete
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  const handleLogout = async () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin");
  };

  const filtered = useMemo(() => {
    let result = [...enquiries];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(term) ||
          e.email.toLowerCase().includes(term) ||
          (e.phone && e.phone.includes(term))
      );
    }
    if (filterType !== "all") result = result.filter((e) => e.type === filterType);
    if (filterStatus !== "all") result = result.filter((e) => e.status === filterStatus);
    result.sort((a, b) => {
      const da = new Date(a.created_at).getTime();
      const db = new Date(b.created_at).getTime();
      return sortOrder === "desc" ? db - da : da - db;
    });
    return result;
  }, [enquiries, searchTerm, filterType, filterStatus, sortOrder]);

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Type", "Event", "Guests", "Status", "Date", "Message"];
    const rows = filtered.map((e) => [
      e.name, e.email, e.phone, e.type, e.event_type || "", e.guest_count || "",
      e.status, new Date(e.created_at).toLocaleDateString(), e.message || "",
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const stats = useMemo(() => ({
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "new").length,
    contacted: enquiries.filter((e) => e.status === "contacted").length,
    confirmed: enquiries.filter((e) => e.status === "confirmed").length,
  }), [enquiries]);

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-primary-foreground/10 px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Diamond className="w-6 h-6 text-ring" />
          <span className="font-label font-medium text-xs tracking-[0.2em] text-ring">ADMIN DASHBOARD</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-primary-foreground/60 hover:text-ring transition-colors duration-300 font-label text-xs tracking-wider">
          <LogOut className="w-4 h-4" /> LOGOUT
        </button>
      </header>

      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, icon: <Users className="w-5 h-5" />, color: "text-primary-foreground" },
            { label: "New", value: stats.new, icon: <AlertCircle className="w-5 h-5" />, color: "text-blue-400" },
            { label: "Contacted", value: stats.contacted, icon: <Clock className="w-5 h-5" />, color: "text-amber-400" },
            { label: "Confirmed", value: stats.confirmed, icon: <CheckCircle2 className="w-5 h-5" />, color: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-5">
              <div className={`${s.color} mb-2`}>{s.icon}</div>
              <div className="font-display text-2xl text-primary-foreground">{s.value}</div>
              <div className="font-label text-xs text-primary-foreground/50 tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, phone..."
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-11 pr-4 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-ring transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-4 py-3 font-body text-sm text-primary-foreground focus:outline-none focus:border-ring appearance-none cursor-pointer">
              <option value="all">All Types</option>
              <option value="room">Room</option>
              <option value="event">Event</option>
              <option value="general">General</option>
            </select>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-4 py-3 font-body text-sm text-primary-foreground focus:outline-none focus:border-ring appearance-none cursor-pointer">
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button onClick={() => setSortOrder((s) => (s === "desc" ? "asc" : "desc"))} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-4 py-3 hover:border-ring transition-colors" title="Toggle sort order">
              <ChevronDown className={`w-4 h-4 text-primary-foreground/60 transition-transform duration-300 ${sortOrder === "asc" ? "rotate-180" : ""}`} />
            </button>
            <button onClick={exportCSV} className="bg-ring text-primary font-label text-xs tracking-wider px-5 py-3 rounded-xl hover:-translate-y-[1px] hover:shadow-[0_4px_15px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-300 flex items-center gap-2">
              <Download className="w-4 h-4" /> EXPORT
            </button>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-ring border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-primary-foreground/40 font-body">
            <XCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
            No enquiries found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-primary-foreground/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-foreground/10 bg-primary-foreground/5">
                  <th className="text-left font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3">Name</th>
                  <th className="text-left font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3 hidden lg:table-cell">Contact</th>
                  <th className="text-left font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3">Type</th>
                  <th className="text-left font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3 hidden md:table-cell">Date</th>
                  <th className="text-left font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3">Status</th>
                  <th className="text-right font-label text-xs tracking-wider text-primary-foreground/50 uppercase px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr key={e.id} className="border-b border-primary-foreground/5 hover:bg-primary-foreground/5 transition-colors duration-200">
                    <td className="px-4 py-4">
                      <div className="font-body text-sm text-primary-foreground">{e.name}</div>
                      <div className="font-body text-xs text-primary-foreground/40 lg:hidden">{e.email}</div>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-1 text-xs text-primary-foreground/60 font-body"><Mail className="w-3 h-3" /> {e.email}</div>
                      <div className="flex items-center gap-1 text-xs text-primary-foreground/40 font-body mt-1"><Phone className="w-3 h-3" /> {e.phone}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-label text-xs tracking-wider uppercase text-ring">{e.type}</span>
                      {e.event_type && <div className="text-xs text-primary-foreground/40 font-body mt-1">{e.event_type}</div>}
                      {e.guest_count && <div className="text-xs text-primary-foreground/40 font-body">{e.guest_count} guests</div>}
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1 text-xs text-primary-foreground/50 font-body">
                        <Calendar className="w-3 h-3" /> {new Date(e.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <select
                        value={e.status}
                        onChange={(ev) => updateStatus(e.id, ev.target.value)}
                        className={`text-xs font-label tracking-wider uppercase border rounded-full px-3 py-1.5 bg-transparent cursor-pointer focus:outline-none ${STATUS_COLORS[e.status] || ""}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button onClick={() => deleteEnquiry(e.id)} className="text-primary-foreground/30 hover:text-destructive transition-colors duration-200" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
