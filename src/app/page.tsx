import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample job listings data
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=techcorp",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "1 day ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=startupxyz",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $110k",
      posted: "3 days ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=designstudio",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "1 week ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisolutions",
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "Growth Co.",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$90k - $120k",
      posted: "4 days ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=growthco",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "5 days ago",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=cloudtech",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Featured Jobs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 uppercase">
                Dodaj oglas potpuno BESPLATNO
              </span>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover hand-picked positions from top companies looking for
              talented professionals like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg bg-gray-100"
                      />
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.posted}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.salary}</Badge>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Jobs
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Job Seekers Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to connecting talented professionals with their
              ideal career opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "High-Quality Jobs",
                description: "Curated positions from verified companies",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Trusted Platform",
                description: "Secure and reliable job search experience",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Support",
                description: "Career guidance from industry professionals",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Success Stories",
                description: "Thousands of successful job placements",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Job Seekers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their perfect career
            match through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Briefcase className="mr-2 w-4 h-4" />
              Browse Jobs
            </Button>
            <Button size="lg" variant="outline">
              Post a Job
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
