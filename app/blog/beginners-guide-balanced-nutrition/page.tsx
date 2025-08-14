import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BalancedNutritionPost() {
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
              Nutrition Basics
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              December 5, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Beginner's Guide to Balanced Nutrition
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about creating balanced, nutritious meals without complicated rules.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Balanced nutrition doesn't have to be complicated. Despite what diet culture tells us, eating well is
              about nourishing your body with a variety of foods that make you feel energized and satisfied. This guide
              will help you understand the basics without overwhelming rules or restrictions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              What Does "Balanced" Really Mean?
            </h2>
            <p>A balanced diet includes all the nutrients your body needs to function optimally:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Macronutrients:</strong> Carbohydrates, proteins, and fats
              </li>
              <li>
                <strong>Micronutrients:</strong> Vitamins and minerals
              </li>
              <li>
                <strong>Water:</strong> For hydration and bodily functions
              </li>
              <li>
                <strong>Fiber:</strong> For digestive health
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              The Building Blocks of Nutrition
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Carbohydrates: Your Body's Main Energy Source
            </h3>
            <p>Carbs aren't the enemy! They fuel your brain and muscles. Focus on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Whole grains:</strong> Brown rice, quinoa, oats, whole wheat bread
              </li>
              <li>
                <strong>Fruits:</strong> All varieties, fresh or frozen
              </li>
              <li>
                <strong>Vegetables:</strong> Especially starchy ones like sweet potatoes
              </li>
              <li>
                <strong>Legumes:</strong> Beans, lentils, chickpeas
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Proteins: Building and Repairing Your Body
            </h3>
            <p>Protein helps build muscle, supports immune function, and keeps you satisfied:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Animal sources:</strong> Chicken, fish, eggs, dairy, lean meats
              </li>
              <li>
                <strong>Plant sources:</strong> Beans, lentils, tofu, nuts, seeds
              </li>
              <li>
                <strong>Aim for:</strong> A palm-sized portion at each meal
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Fats: Essential for Health
            </h3>
            <p>Healthy fats support brain function, hormone production, and nutrient absorption:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Monounsaturated:</strong> Olive oil, avocados, nuts
              </li>
              <li>
                <strong>Polyunsaturated:</strong> Fatty fish, walnuts, flaxseeds
              </li>
              <li>
                <strong>Saturated (in moderation):</strong> Coconut oil, butter
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              The Simple Plate Method
            </h2>
            <p>Forget complicated meal plans. Use this visual guide for balanced meals:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>1/2 of your plate:</strong> Non-starchy vegetables (broccoli, spinach, peppers)
              </li>
              <li>
                <strong>1/4 of your plate:</strong> Lean protein
              </li>
              <li>
                <strong>1/4 of your plate:</strong> Complex carbohydrates
              </li>
              <li>
                <strong>Add:</strong> A thumb-sized portion of healthy fats
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Hydration Matters
            </h2>
            <p>Water is crucial for every bodily function:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aim for 8-10 glasses of water daily</li>
              <li>More if you're active or in hot weather</li>
              <li>Listen to your thirst cues</li>
              <li>Include water-rich foods like fruits and vegetables</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Practical Tips for Balanced Eating
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Meal Planning Made Simple
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plan 3-4 meals for the week</li>
              <li>Prep ingredients in advance</li>
              <li>Keep healthy snacks on hand</li>
              <li>Batch cook grains and proteins</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Smart Shopping Tips
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shop the perimeter of the store first</li>
              <li>Buy seasonal produce</li>
              <li>Read ingredient lists, not just nutrition labels</li>
              <li>Don't shop when hungry</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--olive-green)" }}>
              Eating Out Strategies
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Look at menus online beforehand</li>
              <li>Ask for dressings and sauces on the side</li>
              <li>Choose grilled, baked, or steamed options</li>
              <li>Don't be afraid to make modifications</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Common Nutrition Myths Debunked
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Myth:</strong> Carbs make you gain weight → <strong>Truth:</strong> Excess calories do, not
                carbs specifically
              </li>
              <li>
                <strong>Myth:</strong> You need expensive superfoods → <strong>Truth:</strong> Basic whole foods are
                just as nutritious
              </li>
              <li>
                <strong>Myth:</strong> Eating fat makes you fat → <strong>Truth:</strong> Healthy fats are essential for
                health
              </li>
              <li>
                <strong>Myth:</strong> You must eat 6 small meals → <strong>Truth:</strong> Meal frequency is personal
                preference
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--dark-green)" }}>
              Starting Your Balanced Nutrition Journey
            </h2>
            <p>Remember, perfect nutrition doesn't exist. Focus on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Making gradual, sustainable changes</li>
              <li>Including foods you enjoy</li>
              <li>Listening to your body's needs</li>
              <li>Being flexible and forgiving with yourself</li>
              <li>Focusing on how food makes you feel</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                Your Next Steps
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start with one balanced meal per day</li>
                <li>Add more vegetables to your current meals</li>
                <li>Stay hydrated throughout the day</li>
                <li>Practice mindful eating</li>
                <li>Be patient with yourself as you learn</li>
              </ol>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Want More Nutrition Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join my community for personalized tips and support on your nutrition journey.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            style={{
              backgroundColor: "var(--soft-pink)",
              color: "var(--dark-green)",
            }}
          >
            Join My Telegram Community
          </Button>
        </div>
      </section>
    </div>
  )
}
