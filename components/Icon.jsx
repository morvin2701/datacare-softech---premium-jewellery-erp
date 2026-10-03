import {
  ArrowLeftRight, BadgeCheck, Barcode, BookOpenCheck, Building2, CalendarRange, ClipboardList,
  Crown, DatabaseBackup, Factory, FileCheck2, FileStack, Flame, Gem, HandCoins, Hammer, Handshake,
  Heart, History, Hourglass, Images, Landmark, Laptop, Layers, Layers3, LayoutGrid, LineChart, Lock,
  MapPin, MessageCircle, Network, PackageSearch, PiggyBank, Printer, Radar, ReceiptIndianRupee,
  Recycle, Scale, ScanBarcode, ScanSearch, Settings2, ShieldCheck, ShoppingCart, Smartphone,
  Sparkles, SplitSquareHorizontal, Store, Tags, Timer, TrendingUp, Truck, Undo2, UserRoundSearch,
  Users, Wallet, Wrench, Zap, Globe,
} from 'lucide-react';

// Content files reference icons by name so copy stays plain data.
const icons = {
  ArrowLeftRight, BadgeCheck, Barcode, BookOpenCheck, Building2, CalendarRange, ClipboardList,
  Crown, DatabaseBackup, Factory, FileCheck2, FileStack, Flame, Gem, HandCoins, Hammer, Handshake,
  Heart, History, Hourglass, Images, Landmark, Laptop, Layers, Layers3, LayoutGrid, LineChart, Lock,
  MapPin, MessageCircle, Network, PackageSearch, PiggyBank, Printer, Radar, ReceiptIndianRupee,
  Recycle, Scale, ScanBarcode, ScanSearch, Settings2, ShieldCheck, ShoppingCart, Smartphone,
  Sparkles, SplitSquareHorizontal, Store, Tags, Timer, TrendingUp, Truck, Undo2, UserRoundSearch,
  Users, Wallet, Wrench, Zap, Globe,
};

export default function Icon({ name, size = 20, className, strokeWidth = 1.75 }) {
  const Cmp = icons[name] || Sparkles;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
