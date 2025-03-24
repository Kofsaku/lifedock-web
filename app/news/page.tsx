import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function News() {
  // Sample news data - in a real application, this would come from a database or CMS
  const newsItems = [
    {
      id: 1,
      date: "2024年3月1日",
      title: "春の健康診断キャンペーン実施中",
      content:
        "4月末まで健康診断が10%オフでご利用いただけます。この機会に年に一度の健康チェックを行いましょう。早期発見・早期治療が健康維持の鍵です。ご予約はお電話または受付にてお申し込みください。",
      category: "キャンペーン",
    },
    {
      id: 2,
      date: "2024年2月15日",
      title: "新しい検査機器を導入しました",
      content:
        "最新の血液検査機器を導入し、より正確な検査結果を提供します。従来よりも少ない採血量で多くの項目を検査できるようになりました。また、検査結果の出るスピードも向上し、より迅速な診断が可能になります。",
      category: "設備",
    },
    {
      id: 3,
      date: "2024年1月10日",
      title: "LifeDockサービス開始のお知らせ",
      content:
        "当クリニックでLifeDockサービスによる採血検査が可能になりました。最新のAI技術を活用した健康管理サービスで、より詳細な健康状態の把握が可能です。ぜひお試しください。",
      category: "サービス",
    },
    {
      id: 4,
      date: "2023年12月20日",
      title: "年末年始の診療時間について",
      content:
        "12月29日から1月3日まで休診とさせていただきます。緊急の場合は、近隣の救急医療機関をご利用ください。年始は1月4日から通常診療を再開いたします。皆様、良いお年をお迎えください。",
      category: "お知らせ",
    },
    {
      id: 5,
      date: "2023年11月5日",
      title: "インフルエンザ予防接種のご案内",
      content:
        "インフルエンザの流行シーズンを前に、予防接種を実施しております。ワクチンの在庫には限りがありますので、ご希望の方はお早めにご予約ください。料金は3,500円（税込）です。",
      category: "予防接種",
    },
    {
      id: 6,
      date: "2023年10月1日",
      title: "栄養相談サービスを開始しました",
      content:
        "健康的な食生活をサポートするため、管理栄養士による栄養相談サービスを開始しました。血液検査の結果に基づいた、あなたに最適な食事プランをご提案します。詳細は受付までお問い合わせください。",
      category: "サービス",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">お知らせ</h1>
          <p className="text-xl max-w-3xl mx-auto">広尾オレンジクリニックからの最新情報やお知らせをご覧いただけます。</p>
        </div>
      </section>

      {/* News List */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-6 max-w-4xl mx-auto">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <CardTitle className="text-xl mt-1">{item.title}</CardTitle>
                  </div>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                    {item.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="ghost" size="sm" className="text-primary">
                  <Link href={`/news/${item.id}`} className="flex items-center">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* LifeDock Banner */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">LifeDockサービスで健康管理を始めましょう</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            当クリニックはLifeDockサービスの提携医療機関です。 最新の技術で正確な検査結果をお届けします。
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50 font-semibold">
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

