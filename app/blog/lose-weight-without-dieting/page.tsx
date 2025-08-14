import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function LoseWeightWithoutDietingPost() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--soft-pink)",
                color: "var(--dark-green)",
              }}
            >
              Weight Loss
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              December 10, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            How to Lose Weight Without Dieting: A Practical Guide
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Learn sustainable weight loss strategies that don't involve restrictive diets or calorie counting.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Traditional dieting has a 95% failure rate. The reason? Restrictive diets are unsustainable and often lead
              to a cycle of weight loss and regain. But there's a better way to lose weight that doesn't involve
              counting calories, eliminating food groups, or feeling deprived.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Why Diets Don't Work Long-Term
            </h2>
            <p>Diets fail because they:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an unhealthy relationship with food</li>
              <li>Slow down your metabolism</li>
              <li>Increase cravings and hunger</li>
              <li>Are impossible to maintain forever</li>
              <li>Don't address underlying habits</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              The Non-Diet Approach to Weight Loss
            </h2>
            <p>Instead of dieting, focus on building sustainable habits that naturally lead to weight loss:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              1. Listen to Your Body's Hunger Cues
            </h3>
            <p>Your body has natural mechanisms to regulate weight. Learn to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eat when you're hungry</li>
              <li>Stop when you're satisfied (not stuffed)</li>
              <li>Distinguish between physical and emotional hunger</li>
              <li>Trust your body's signals</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              2. Focus on Nutrient-Dense Foods
            </h3>
            <p>Instead of restricting foods, focus on adding more nutritious options:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill half your plate with vegetables</li>
              <li>Include protein at every meal</li>
              <li>Choose whole grains over refined ones</li>
              <li>Stay hydrated with water</li>
              <li>Include healthy fats like avocados and nuts</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              3. Practice Portion Awareness
            </h3>
            <p>You don't need to measure everything, but being aware of portions helps:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use smaller plates and bowls</li>
              <li>Eat slowly and mindfully</li>
              <li>Check in with your hunger halfway through meals</li>
              <li>Learn what appropriate portions look like</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              4. Move Your Body Regularly
            </h3>
            <p>Exercise doesn't have to be intense to be effective:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Find activities you enjoy</li>
              <li>Start with 10-15 minutes daily</li>
              <li>Include both cardio and strength training</li>
              <li>Take the stairs, park farther away</li>
              <li>Make movement a part of your routine</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              5. Manage Stress and Sleep
            </h3>
            <p>Poor sleep and high stress can sabotage weight loss efforts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aim for 7-9 hours of quality sleep</li>
              <li>Practice stress-reduction techniques</li>
              <li>Limit caffeine late in the day</li>
              <li>Create a relaxing bedtime routine</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Making It Sustainable
            </h2>
            <p>The key to lasting weight loss is making changes you can maintain forever:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start with small, manageable changes</li>
              <li>Focus on one habit at a time</li>
              <li>Allow flexibility and imperfection</li>
              <li>Celebrate non-scale victories</li>
              <li>Be patient with the process</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                Remember
              </h3>
              <p>
                Sustainable weight loss is about creating a lifestyle you love, not following rules you hate. Focus on
                how you feel, not just the number on the scale. Health and happiness should go hand in hand.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Ready to Start Your Non-Diet Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get my free guide and join a community of people losing weight without dieting.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Get Your Free Guide
          </Button>
        </div>
      </section>
    </div>
  )
}
