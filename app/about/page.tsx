import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">クリニック紹介</h1>
          <p className="text-xl max-w-3xl mx-auto">
            LifeDockクリニックは、最新の医療技術を活用し、 皆様の健康をサポートする医療機関です。
          </p>
        </div>
      </section>

      {/* About LifeDock Service */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">LifeDockサービスについて</h2>
            <p className="text-lg mb-4">
              「広尾オレンジクリニック」はこどもが心身ともに健康に成長できる環境作りを目的とした予防医学プラットフォームサービス「LifeDock」の各サービスを提供するクリニックです。
            </p>
            <p className="text-lg mb-4">
              採血室とカウンセリングルームを備えており、血液検査や栄養指導、心理検査指導を行なっています。
              予約制のため、基本的に混み合うことも、長時間待つこともありません。小さなお子さんやお母さんも安心して来院できる設備が整った、温かい雰囲気のクリニックです。
            </p>
            <p className="text-lg mb-6">
              こどもの将来の健康ための予防医学を提供しています。ぜひLifeDockのホームページからサービス内容、予約方法をご確認ください。
            </p>
            <Button size="lg" className="font-semibold">
              <Link href="https://lifedock.jp" target="_blank" className="flex items-center">
                LifeDockサービスについて詳しく
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/IMG_2084.JPG?height=400&width=600"
              alt="LifeDockサービスイメージ"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      {/* <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">クリニックの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">患者様中心の医療</h3>
              <p className="text-center">患者様一人ひとりに寄り添い、丁寧な説明と最適な医療を提供します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">最新の医療技術</h3>
              <p className="text-center">
                LifeDockサービスをはじめとする最新の医療技術を導入し、質の高い医療を提供します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">予防医療の推進</h3>
              <p className="text-center">病気の早期発見・予防に力を入れ、健康的な生活をサポートします。</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Clinic Facilities */}
      {/* <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">施設紹介</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="受付" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">受付</h3>
            <p>明るく清潔な受付スペースで、スタッフが丁寧に対応いたします。 初めての方も安心してご来院いただけます。</p>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="診察室" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">診察室</h3>
            <p>
              プライバシーに配慮した診察室で、安心して診察を受けていただけます。
              最新の医療機器を備え、正確な診断を行います。
            </p>
          </div>
        </div>
      </section> */}

      {/* LifeDock Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">LifeDockサービスで健康管理を始めましょう</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            当クリニックはLifeDockサービスの提携医療機関です。 最新の技術で正確な検査結果をお届けします。
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            <Link href="https://lifedock.jp" target="_blank" className="flex items-center">
              LifeDockサービスについて詳しく
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

