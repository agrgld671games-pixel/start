import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function StopOvereatingPost() {
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
              Emotional Eating
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              December 15, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />8 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            5 Steps to Stop Overeating and Take Control of Your Eating Habits
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Discover practical strategies to break the cycle of overeating and develop a healthier relationship with
            food.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Overeating is one of the most common challenges people face when trying to maintain a healthy lifestyle.
              It's not about willpower or self-control – it's about understanding the underlying patterns and triggers
              that lead to eating beyond our body's needs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Step 1: Identify Your Triggers
            </h2>
            <p>The first step to stopping overeating is understanding what triggers it. Common triggers include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emotional stress or anxiety</li>
              <li>Boredom or loneliness</li>
              <li>Certain environments or situations</li>
              <li>Specific times of day</li>
              <li>Social situations</li>
            </ul>
            <p>
              Keep a food and mood journal for a week to identify patterns. Note what you eat, when you eat it, and how
              you're feeling before and after eating.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Step 2: Practice Mindful Eating
            </h2>
            <p>Mindful eating means paying full attention to your food and eating experience. This helps you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recognize hunger and fullness cues</li>
              <li>Enjoy your food more</li>
              <li>Eat more slowly</li>
              <li>Make conscious food choices</li>
            </ul>
            <p>
              Try eating without distractions like TV or phones. Focus on the taste, texture, and aroma of your food.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Step 3: Create a Structured Eating Schedule
            </h2>
            <p>
              Having regular meal times helps regulate your hunger hormones and prevents extreme hunger that can lead to
              overeating. Aim for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Three balanced meals per day</li>
              <li>1-2 planned snacks if needed</li>
              <li>Consistent meal timing</li>
              <li>Adequate protein at each meal</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Step 4: Manage Emotional Triggers
            </h2>
            <p>
              Since many people overeat in response to emotions, it's crucial to develop alternative coping strategies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Practice deep breathing or meditation</li>
              <li>Go for a walk or do light exercise</li>
              <li>Call a friend or family member</li>
              <li>Engage in a hobby you enjoy</li>
              <li>Write in a journal</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Step 5: Focus on Progress, Not Perfection
            </h2>
            <p>
              Remember that changing eating habits takes time. Be patient with yourself and celebrate small victories.
              If you have a setback, don't give up – just get back on track with your next meal.
            </p>
            <p>
              Consider working with a nutrition professional who can provide personalized guidance and support
              throughout your journey.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                Key Takeaways
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify your personal overeating triggers</li>
                <li>Practice mindful eating techniques</li>
                <li>Establish regular meal times</li>
                <li>Develop healthy coping strategies for emotions</li>
                <li>Be patient and focus on progress</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Need More Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join my Telegram community for more tips on overcoming overeating and building healthy habits.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Join My Community
          </Button>
        </div>
      </section>
    </div>
  )
}
