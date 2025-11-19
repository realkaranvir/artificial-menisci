import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft, ChevronRight, Activity, AlertCircle, Hammer, Users, Stethoscope, Scale } from 'lucide-react'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 0,
      title: "Artificial Meniscus Replacements",
      subtitle: "Click through to learn about synthetic meniscus technology",
      icon: Activity,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-center">
            This presentation explores artificial meniscus replacements - what they are, why they're needed, and how they work.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentSlide(1)}>
              <CardHeader className="pb-3">
                <AlertCircle className="h-8 w-8 mb-2 text-red-500" />
                <CardTitle className="text-lg">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">What needs fixing?</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentSlide(2)}>
              <CardHeader className="pb-3">
                <Stethoscope className="h-8 w-8 mb-2 text-blue-500" />
                <CardTitle className="text-lg">Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">How the meniscus works</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentSlide(3)}>
              <CardHeader className="pb-3">
                <Scale className="h-8 w-8 mb-2 text-orange-500" />
                <CardTitle className="text-lg">Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Artificial vs donor</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentSlide(4)}>
              <CardHeader className="pb-3">
                <Hammer className="h-8 w-8 mb-2 text-green-500" />
                <CardTitle className="text-lg">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">How it's made</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentSlide(5)}>
              <CardHeader className="pb-3">
                <Users className="h-8 w-8 mb-2 text-purple-500" />
                <CardTitle className="text-lg">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Who does this help?</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Problem to be Solved",
      subtitle: "Why do we need artificial meniscus replacements?",
      icon: AlertCircle,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What happens to the meniscus?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The meniscus can get severely worn out from long-term stress, like lots of running or heavy use. This wear and tear causes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chronic knee pain</li>
                <li>Loss of function</li>
                <li>Eventually, arthritis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why can't it heal itself?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The meniscus is the knee's natural shock absorber, but it has <strong>very little blood flow</strong>. Without blood flow, it <strong>cannot heal or regrow on its own</strong> once it's damaged.
              </p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 2,
      title: "Biological Aspects",
      subtitle: "Understanding the natural meniscus",
      icon: Stethoscope,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What does the meniscus do?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The natural meniscus is a <strong>C-shaped piece of tough cartilage</strong>. It has three main jobs:
              </p>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Shock Absorber</h4>
                  <p className="text-sm">Cushions the knee during impact</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Weight Distribution</h4>
                  <p className="text-sm">Spreads out body weight</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold mb-2">3. Stability</h4>
                  <p className="text-sm">Keeps the joint stable</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What are the other options?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Non-Surgical Options:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Physical therapy</li>
                    <li>Losing weight</li>
                    <li>Pain-managing shots like corticosteroids</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Surgical Options:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Removing just the damaged part of the meniscus</li>
                    <li>Transplanting a new meniscus from a donor</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 3,
      title: "Artificial vs Donor Meniscus",
      subtitle: "Comparing synthetic implants with donor transplants",
      icon: Scale,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Two Surgical Approaches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500">Artificial Meniscus</Badge>
                  </div>
                  <p className="text-sm font-semibold">What is it?</p>
                  <p className="text-sm">
                    A synthetic implant made from medical-grade materials like polyurethane or collagen scaffolds.
                  </p>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Advantages:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>✓ No need to wait for donor availability</li>
                      <li>✓ No risk of tissue rejection</li>
                      <li>✓ Consistent size and quality</li>
                      <li>✓ No disease transmission risk</li>
                      <li>✓ Can be customized to patient</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Disadvantages:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>✗ Less long-term data on durability</li>
                      <li>✗ May not fully replicate natural tissue</li>
                      <li>✗ Higher upfront cost</li>
                      <li>✗ Limited insurance coverage</li>
                      <li>✗ Risk of implant shrinkage or failure</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-500">Donor Meniscus</Badge>
                  </div>
                  <p className="text-sm font-semibold">What is it?</p>
                  <p className="text-sm">
                    A meniscus transplanted from a deceased donor (allograft), matched to the patient's size.
                  </p>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Advantages:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>✓ Natural biological tissue</li>
                      <li>✓ More established procedure</li>
                      <li>✓ Better long-term data available</li>
                      <li>✓ Can integrate with body's tissues</li>
                      <li>✓ More insurance coverage</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Disadvantages:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>✗ Limited donor availability</li>
                      <li>✗ Waiting list required</li>
                      <li>✗ Small risk of disease transmission</li>
                      <li>✗ Possible immune response</li>
                      <li>✗ Size matching challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 4,
      title: "Design Choices",
      subtitle: "How artificial menisci are made",
      icon: Hammer,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Two Types of Artificial Menisci</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Type 1: Scaffold</h4>
                  <p className="text-sm">
                    A <strong>porous, dissolving scaffold</strong> that your own cells grow into and rebuild over time.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Type 2: Permanent Implant</h4>
                  <p className="text-sm">
                    A <strong>solid, permanent implant</strong> made of medical-grade plastic that replaces the original meniscus.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Can relieve pain</li>
                  <li>✓ Help the knee work better</li>
                  <li>✓ Let a person get back to an active life</li>
                  <li>✓ Stop or delay the need for a total knee replacement surgery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">Drawbacks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✗ Cost a lot of money</li>
                  <li>✗ Surgery is very hard to perform correctly</li>
                  <li>✗ Recovery can take a long time</li>
                  <li>✗ The implant might fail or shrink</li>
                  <li>✗ Not guaranteed to stop arthritis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Ecological & Societal Impacts",
      subtitle: "Who benefits and what's the process?",
      icon: Users,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Societal Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Who benefits?</h4>
                <p>
                  These devices can greatly improve life for <strong>active, younger patients</strong> who are too young for a total knee replacement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">The challenge:</h4>
                <p>
                  The <strong>high cost and limited insurance coverage</strong> make it hard for many people to get this technology.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Surgery Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Step 1</Badge>
                    <h4 className="font-semibold">Consultation</h4>
                  </div>
                  <p className="text-sm ml-16">
                    A surgeon uses MRI and X-ray images to see the damage and decide if an implant is the right choice.
                  </p>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Step 2</Badge>
                    <h4 className="font-semibold">Surgery</h4>
                  </div>
                  <p className="text-sm ml-16">
                    The doctor uses small cuts and a camera to do the surgery. They will clean out the damaged area and sew the new implant into place.
                  </p>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Step 3</Badge>
                    <h4 className="font-semibold">Recovery</h4>
                  </div>
                  <p className="text-sm ml-16 mb-2">
                    Recovery takes a long time:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-20">
                    <li>Knee brace and crutches for <strong>4 to 6 weeks</strong></li>
                    <li>Many months of <strong>physical therapy</strong> to get strength back</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]
  const Icon = currentSlideData.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          {/* Slide Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-1">{currentSlideData.title}</h2>
              <p className="text-muted-foreground">{currentSlideData.subtitle}</p>
            </div>
          </div>

          {/* Slide Content */}
          <div className="animate-in fade-in duration-500">
            {currentSlideData.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Page indicator */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentSlide + 1} of {slides.length}
        </div>
      </main>
    </div>
  )
}

export default App
