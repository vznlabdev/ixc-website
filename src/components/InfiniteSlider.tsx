import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ClipboardCheck, 
  Smartphone, 
  Camera, 
  MapPin, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  Wrench, 
  Search, 
  Receipt 
} from 'lucide-react'

interface SliderItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const sliderItems: SliderItem[] = [
  {
    icon: ClipboardCheck,
    title: "Smart Work Orders",
    description: "Pre-filled templates with photos, budgets, and timelines."
  },
  {
    icon: Smartphone,
    title: "SMS-Powered Contractor Alerts",
    description: "No app required. Contractors reply via mobile instantly."
  },
  {
    icon: Camera,
    title: "Photo-Verified Documentation",
    description: "GPS, time-stamps, and before/after photos included."
  },
  {
    icon: MapPin,
    title: "Real-Time Job Tracking",
    description: "From Assigned → In Progress → Complete. Always up to date."
  },
  {
    icon: MessageCircle,
    title: "Built-In Messaging",
    description: "Organized threads with photo, voice, and quick replies."
  },
  {
    icon: TrendingUp,
    title: "Contractor Performance Insights",
    description: "Track response rates, completion times, and quality metrics."
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Keep sensitive info limited to the right people."
  },
  {
    icon: Wrench,
    title: "Emergency Response Tools",
    description: "Instant contact override for urgent maintenance issues."
  },
  {
    icon: Search,
    title: "Fully Searchable Job History",
    description: "Never lose a maintenance record again."
  },
  {
    icon: Receipt,
    title: "Instant Invoice & Completion Log",
    description: "Contractors upload invoices and photos in one step."
  }
];

const blueShades = [
  'bg-blue-400',
  'bg-blue-500', 
  'bg-blue-600',
  'bg-blue-700',
  'bg-blue-800',
  'bg-blue-900',
  'bg-blue-400',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700'
];

export default function InfiniteSlider() {
  return (
    <div className="w-full overflow-hidden bg-background pt-12 pb-32">
      <div className="relative">
        <div className="animate-infinite-scroll flex gap-6">
          {/* First set */}
          {sliderItems.map((item, index) => (
            <Card key={`first-${index}`} className={`w-64 h-80 hover:shadow-md transition-shadow flex flex-col ${blueShades[index % blueShades.length]}`}>
              <CardHeader className="pb-3">
                <div className="mb-2">
                  <item.icon className="w-8 h-8 text-blue-50" />
                </div>
                <CardTitle className="text-base font-medium text-blue-50" style={{ fontSize: '1.5rem' }}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex items-end">
                <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
          {/* Second set for seamless loop */}
          {sliderItems.map((item, index) => (
            <Card key={`second-${index}`} className={`w-64 h-80 hover:shadow-md transition-shadow flex flex-col ${blueShades[index % blueShades.length]}`}>
              <CardHeader className="pb-3">
                <div className="mb-2">
                  <item.icon className="w-8 h-8 text-blue-50" />
                </div>
                <CardTitle className="text-base font-medium text-blue-50" style={{ fontSize: '1.5rem' }}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex items-end">
                <p className="text-blue-50 leading-relaxed" style={{ fontSize: '14px' }}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 