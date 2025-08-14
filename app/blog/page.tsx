import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "5-steps-stop-overeating",
    title: "5 Steps to Stop Overeating and Take Control of Your Eating Habits",
    excerpt:
      "Discover practical strategies to break the cycle of overeating and develop a healthier relationship with food.",
    readTime: "8 min read",
    date: "December 15, 2024",
    category: "Emotional Eating",
  },
  {
    slug: "lose-weight-without-dieting",
    title: "How to Lose Weight Without Dieting: A Practical Guide",
    excerpt: "Learn sustainable weight loss strategies that don't involve restrictive diets or calorie counting.",
    readTime: "10 min read",
    date: "December 10, 2024",
    category: "Weight Loss",
  },
  {
    slug: "beginners-guide-balanced-nutrition",
    title: "Beginner's Guide to Balanced Nutrition",
    excerpt: "Everything you need to know about creating balanced, nutritious meals without complicated rules.",
    readTime: "12 min read",
    date: "December 5, 2024",
    category: "Nutrition Basics",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Evidence-based insights and practical tips for sustainable healthy eating.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <img
                        src={`/article-text.png?height=300&width=400&text=Article ${index + 1}`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "var(--soft-pink)",
                            color: "var(--dark-green)",
                          }}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3" style={{ color: "var(--dark-green)" }}>
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="group bg-transparent"
                          style={{
                            borderColor: "var(--olive-green)",
                            color: "var(--olive-green)",
                          }}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-green)" }}>
            Get More Tips & Resources
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join my Telegram community for exclusive content, tips, and support on your health journey.
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
