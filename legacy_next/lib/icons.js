import {
  FileCheck,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Users,
  MessageSquare,
  Gem,
  Scale,
  Building2,
  Scan,
  ClipboardList,
  Database,
  GraduationCap,
  Rocket,
  Sparkles,
  Image as ImageIcon,
  Video,
  Cpu,
  Smartphone,
} from 'lucide-react';

// Single outline icon set. Sections reference icons by string name so every
// card/badge pulls from one consistent library and accent color.
export const iconMap = {
  FileCheck,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Users,
  MessageSquare,
  Gem,
  Scale,
  Building2,
  Scan,
  ClipboardList,
  Database,
  GraduationCap,
  Rocket,
  Sparkles,
  ImageIcon,
  Video,
  Cpu,
  Smartphone,
};

export function getIcon(name) {
  return iconMap[name] || Sparkles;
}
