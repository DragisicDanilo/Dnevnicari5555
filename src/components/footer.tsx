import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Job Seekers Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/salary-guide"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/career-advice"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/post-job"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/talent-search"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Search Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/employer-resources"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} JobSearch. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
