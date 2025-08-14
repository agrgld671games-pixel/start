import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            I help busy people improve their eating habits without diets, calorie counting, or guilt.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  After years of watching people struggle with restrictive diets and yo-yo weight loss, I knew there had
                  to be a better way. Traditional dieting approaches often leave people feeling deprived, guilty, and
                  ultimately unsuccessful in the long term.
                </p>
                <p>
                  That's when I discovered the power of intuitive eating and flexible nutrition. This science-based
                  approach focuses on building a healthy relationship with food rather than following rigid rules that
                  don't fit real life.
                </p>
                <p>
                  Today, I'm passionate about helping others break free from diet culture and discover sustainable ways
                  to nourish their bodies while still enjoying the foods they love.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <img
                  src="/placeholder-2ykmd.png"
                  alt="Nutritionist portrait"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            My Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Freedom in Eating</h3>
                <p className="text-gray-600">
                  No forbidden foods or strict meal plans. Learn to make choices that nourish your body while satisfying
                  your cravings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Science-Based</h3>
                <p className="text-gray-600">
                  Every recommendation is backed by current nutrition research and evidence-based practices that
                  actually work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--olive-green)" }} />
                <h3 className="text-xl font-semibold mb-3">Long-term Results</h3>
                <p className="text-gray-600">
                  Focus on sustainable lifestyle changes that create lasting transformation, not quick fixes that don't
                  last.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--dark-green)" }}>
            Proven Experience
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16" style={{ color: "var(--olive-green)" }} />
            </div>
            <p className="text-2xl font-semibold mb-4" style={{ color: "var(--dark-green)" }}>
              Worked with 100+ clients worldwide to restore a healthy relationship with food.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From busy professionals to parents juggling multiple responsibilities, I've helped people from all walks
              of life achieve their health goals without sacrificing their lifestyle or happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--dark-green)" }}>
            What I Believe
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--olive-green)" }}>
                  Food Should Be Enjoyable
                </h3>
                <p className="text-gray-600">
                  Eating is one of life's great pleasures. My approach ensures you can enjoy meals without guilt or
                  anxiety.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--olive-green)" }}>
                  Every Body is Different
                </h3>
                <p className="text-gray-600">
                  There's no one-size-fits-all solution. I work with you to find what works best for your unique
                  lifestyle and preferences.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--olive-green)" }}>
                  Progress Over Perfection
                </h3>
                <p className="text-gray-600">
                  Small, consistent changes lead to big results. We focus on progress, not perfection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--olive-green)" }}>
                  Sustainable is Key
                </h3>
                <p className="text-gray-600">
                  Quick fixes don't work. I help you build habits that will serve you for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join my community and start your journey to a healthier relationship with food today.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Join my Telegram Community
          </Button>
        </div>
      </section>
    </div>
  )
}
