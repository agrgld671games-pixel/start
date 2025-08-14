import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, Users, Clock, MessageCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Work With Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Transform your relationship with food through personalized support and proven strategies.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personalized Coaching */}
            <Card className="h-full">
              <CardHeader>
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: "var(--soft-pink)" }}
                >
                  <Target className="w-8 h-8" style={{ color: "var(--dark-green)" }} />
                </div>
                <CardTitle className="text-2xl text-center" style={{ color: "var(--dark-green)" }}>
                  Personalized Coaching
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  One-on-one guidance tailored specifically to your lifestyle, preferences, and goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Custom nutrition plan that fits your schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Weekly check-ins and progress tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Meal planning and recipe suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">24/7 support via messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Flexible approach that adapts to your life</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Emotional Eating Support */}
            <Card className="h-full">
              <CardHeader>
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: "var(--soft-pink)" }}
                >
                  <Heart className="w-8 h-8" style={{ color: "var(--dark-green)" }} />
                </div>
                <CardTitle className="text-2xl text-center" style={{ color: "var(--dark-green)" }}>
                  Emotional Eating Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Break free from emotional eating patterns and develop a healthy relationship with food.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Identify emotional eating triggers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Develop healthy coping strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Mindful eating techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Stress management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Build confidence around food choices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Healthy Habits Program */}
            <Card className="h-full">
              <CardHeader>
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: "var(--soft-pink)" }}
                >
                  <Users className="w-8 h-8" style={{ color: "var(--dark-green)" }} />
                </div>
                <CardTitle className="text-2xl text-center" style={{ color: "var(--dark-green)" }}>
                  Healthy Habits Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Build sustainable habits that support long-term health and weight management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Step-by-step habit formation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Meal prep and planning strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Intuitive eating principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Lifestyle integration techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{ color: "var(--olive-green)" }} />
                    <span className="text-sm text-gray-600">Community support and accountability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            How We'll Work Together
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-sm text-gray-600">
                We'll discuss your goals, challenges, and create a personalized plan.
              </p>
            </div>
            <div className="text-center">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Strategy</h3>
              <p className="text-sm text-gray-600">Receive your tailored nutrition and lifestyle plan.</p>
            </div>
            <div className="text-center">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-sm text-gray-600">Regular check-ins and adjustments to keep you on track.</p>
            </div>
            <div className="text-center">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lasting Results</h3>
              <p className="text-sm text-gray-600">Achieve sustainable changes that last a lifetime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "The personalized coaching changed everything for me. I lost 30 pounds without feeling like I was on a
                  diet. The support was incredible!"
                </p>
                <p className="font-semibold">- Maria T.</p>
                <p className="text-sm text-gray-500">Personalized Coaching Client</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "I finally overcame my emotional eating patterns. The tools I learned have transformed not just my
                  eating, but my entire relationship with stress."
                </p>
                <p className="font-semibold">- David K.</p>
                <p className="text-sm text-gray-500">Emotional Eating Support Client</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Investment in Your Health
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every program is customized to your needs and goals. Pricing varies based on the level of support and
            duration you choose.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-6 h-6" style={{ color: "var(--olive-green)" }} />
              <span className="text-lg font-semibold">Free 15-minute consultation</span>
            </div>
            <p className="text-gray-600">Let's discuss your goals and see if we're a good fit to work together.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join my Telegram community to learn more about my services and get started on your journey.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Join my Telegram to learn more
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Get instant access to free resources and connect with our supportive community.
          </p>
        </div>
      </section>
    </div>
  )
}
