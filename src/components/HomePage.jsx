"use client"

import { useState } from "react"
import { Check, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  // Pricing data
  const prices = {
    starter: {
      monthly: 0,
      annual: 0
    },
    achiever: {
      monthly: 20,
      annual: 16 // 20% discount from $20
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation - unchanged */}
      <nav className="flex items-center justify-between p-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="text-xl font-bold text-purple-700 flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-700 mr-2"></div>
            BetterTasks
          </div>
          <div className="hidden md:flex ml-8 space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Why BetterTasks?</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2">Login</Link>
          <Link to="/register" className="text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">Sign Up Free</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Budget-friendly pricing alternatives</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started free or upgrade to share your impact for all completed tasks with multiple people
          </p>
        </div>

        {/* Billing Toggle - Fixed overlapping elements */}
        <div className="flex justify-center items-center mb-8 space-x-2">
          <span className={`text-sm ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>MONTHLY</span>
          <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
              billingCycle === "annual" ? "bg-purple-600" : "bg-gray-200"
            }`}
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm ${billingCycle === "annual" ? "text-gray-900" : "text-gray-500"}`}>ANNUAL</span>
          <span className="text-xs text-purple-600 ml-1">SAVE 20%</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter Plan - Updated pricing */}
          <div className="border rounded-lg p-6 bg-white col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-2">STARTER</div>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">${prices.starter[billingCycle]}</span>
                  <span className="text-gray-500 ml-1">/{billingCycle === "monthly" ? "Month" : "Month, Billed Annually"}</span>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm mb-4">
                  Get Started Now
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Unlimited focused sessions</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Share my impact (Completed high priority tasks only)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Share my impact with my manager (1 email address)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Dedicated work workspace</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Card - unchanged */}
          <div className="bg-purple-600 rounded-lg p-6 text-white flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Contact Us</h3>
            <p className="text-sm text-center mb-6">
              Help your team and organization plan better, collaborate more effectively, and deliver the results.
            </p>
            <button className="bg-white text-purple-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 mb-2">
              Contact Us
            </button>
            <p className="text-xs text-center">For enterprise-level purchasers</p>
          </div>

          {/* Achiever Plan - Updated pricing */}
          <div className="border rounded-lg p-6 bg-white col-span-2 relative">
            <div className="absolute -top-3 right-8 bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-2">ACHIEVER</div>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">${prices.achiever[billingCycle]}</span>
                  <span className="text-gray-500 ml-1">/{billingCycle === "monthly" ? "Month" : "Month, Billed Annually"}</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md text-sm mb-4">
                  Buy Now
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Everything in starter</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Share my impact (Any completed task)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Share my impact with my team (Multiple email addresses)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">Work + Personal workspace</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-sm">All Assets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          All plans feature unlimited To-dos, focused sessions and lists.
        </div>
      </main>
    </div>
  )
}