import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Lose weight without diets or food restrictions.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            A flexible, science-based approach to healthy eating that works with your life, not against it.
          </p>

          {/* Lead Magnet */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--olive-green)" }}>
              Free Guide: How to Lose Weight Without Diets or Restrictions
            </h2>
            <Button
              size="lg"
              className="text-lg px-8 py-4 mb-4"
              style={{
                backgroundColor: "var(--soft-pink)",
                color: "var(--dark-green)",
              }}
            >
              Get the Free Guide in Telegram
            </Button>
            <p className="text-sm text-gray-500 mb-4">or get it via email</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button variant="outline" style={{ borderColor: "var(--olive-green)", color: "var(--olive-green)" }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Nutrition Guidance</h3>
                <p className="text-gray-600">
                  Personalized nutrition advice that fits your lifestyle and preferences without restrictive rules.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Overcome Overeating</h3>
                <p className="text-gray-600">
                  Break free from emotional eating patterns and develop a healthy relationship with food.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Flexible Plans</h3>
                <p className="text-gray-600">
                  Sustainable eating plans that adapt to your busy schedule and social life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Join my Telegram</h3>
              <p className="text-gray-600">
                Connect with our supportive community and get instant access to resources.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Download your guide</h3>
              <p className="text-gray-600">Get your free comprehensive guide to weight loss without restrictions.</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                style={{ backgroundColor: "var(--olive-green)" }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start your journey</h3>
              <p className="text-gray-600">Begin implementing the strategies and see real, lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            Why Choose This Approach?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 mt-1" style={{ color: "var(--olive-green)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Psychological Comfort</h3>
                <p className="text-gray-600">
                  No guilt, shame, or stress around food choices. Develop a positive mindset towards eating.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 mt-1" style={{ color: "var(--olive-green)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">No Calorie Counting</h3>
                <p className="text-gray-600">
                  Learn intuitive eating principles that work naturally with your body's signals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 mt-1" style={{ color: "var(--olive-green)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Keep Your Favorite Foods</h3>
                <p className="text-gray-600">
                  No foods are off-limits. Learn how to enjoy everything in a balanced way.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 mt-1" style={{ color: "var(--olive-green)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Long-term Results</h3>
                <p className="text-gray-600">Sustainable changes that last a lifetime, not just a few weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "I finally found an approach that doesn't make me feel deprived. Lost 25 pounds without giving up
                  pizza nights with friends!"
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "No more guilt around food. I've learned to trust my body and the weight came off naturally. This
                  changed my life."
                </p>
                <p className="font-semibold">- Jennifer K.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Ready to Transform Your Relationship with Food?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands who have already started their journey to sustainable weight loss.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Join my Telegram and get the free guide today
          </Button>
        </div>
      </section>
    </div>
  )
}
