import {
  Home, RefreshCw, Hammer, KeyRound, PiggyBank, Building, UserRound, Briefcase, Car, Layers,
  TrendingUp, Building2, Users, FileText, Search, BadgeCheck, Gauge, FileX, Coins, Layers3,
  HeartHandshake, UserCog, LineChart, Globe, Plus, FileCheck, BarChart3, CalendarClock, Wallet,
  HandCoins, UserCheck, Zap, LayoutGrid, BadgePercent, Clock, Check, Phone, Mail, MapPin,
  ArrowRight, Calculator, ChevronRight, Send,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  "home": Home, "refresh-cw": RefreshCw, "hammer": Hammer, "key-round": KeyRound, "piggy-bank": PiggyBank,
  "building": Building, "user-round": UserRound, "briefcase": Briefcase, "car": Car, "layers": Layers,
  "trending-up": TrendingUp, "building-2": Building2, "users": Users, "file-text": FileText, "search": Search,
  "badge-check": BadgeCheck, "gauge": Gauge, "file-x": FileX, "coins": Coins, "layers-3": Layers3,
  "heart-handshake": HeartHandshake, "user-cog": UserCog, "line-chart": LineChart, "globe": Globe, "plus": Plus,
  "file-check": FileCheck, "bar-chart-3": BarChart3, "calendar-clock": CalendarClock, "wallet": Wallet,
  "hand-coins": HandCoins, "user-check": UserCheck, "zap": Zap, "layout-grid": LayoutGrid,
  "badge-percent": BadgePercent, "clock": Clock, "check": Check, "phone": Phone, "mail": Mail,
  "map-pin": MapPin, "arrow-right": ArrowRight, "calculator": Calculator, "chevron-right": ChevronRight, "send": Send,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = MAP[name] ?? Home;
  return <Cmp {...props} />;
}
