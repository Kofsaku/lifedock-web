import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="w-full relative">
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="クリニックの外観"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">
                健康をサポートする
                <br />
                LifeDockクリニック
              </h1>
              <p className="text-xl mb-6">最新の医療技術で皆様の健康をサポートします</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="https://lifedock.jp" target="_blank" className="flex items-center">
                  LifeDockサービスを見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements & Hours */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                お知らせ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b pb-2">
                <p className="text-sm text-muted-foreground">2024年3月1日</p>
                <h3 className="font-medium">春の健康診断キャンペーン実施中</h3>
                <p>4月末まで健康診断が10%オフでご利用いただけます。</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm text-muted-foreground">2024年2月15日</p>
                <h3 className="font-medium">新しい検査機器を導入しました</h3>
                <p>最新の血液検査機器を導入し、より正確な検査結果を提供します。</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">2024年1月10日</p>
                <h3 className="font-medium">LifeDockサービス開始のお知らせ</h3>
                <p>当クリニックでLifeDockサービスによる採血検査が可能になりました。</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/news" className="text-primary hover:underline flex items-center">
                お知らせ一覧へ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Hours & Access */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  診療時間
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>診療時間</TableHead>
                      <TableHead>月</TableHead>
                      <TableHead>火</TableHead>
                      <TableHead>水</TableHead>
                      <TableHead>木</TableHead>
                      <TableHead>金</TableHead>
                      <TableHead>土</TableHead>
                      <TableHead>日</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>9:00-13:00</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15:00-18:00</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-2">※祝日は休診</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  アクセス
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>〒100-0001 東京都千代田区1-1-1</p>
                <p>東京メトロ丸の内線「東京駅」から徒歩5分</p>
                <Link href="/access" className="text-primary hover:underline flex items-center">
                  詳しいアクセス情報
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">クリニック写真</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="クリニック受付"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="診察室"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="待合室"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Director's Greeting */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=300&width=300" alt="院長写真" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">院長挨拶</h2>
            <p className="text-lg mb-4">
              当クリニックでは、最新の医療技術を活用し、患者様一人ひとりに合わせた最適な医療サービスを提供することを目指しています。
              特にLifeDockサービスを導入し、より正確で迅速な血液検査を実現しました。
            </p>
            <p className="text-lg mb-6">
              皆様の健康を第一に考え、安心して受診いただける環境づくりに努めてまいります。
              どうぞお気軽にご来院ください。
            </p>
            <p className="text-right font-semibold">院長 山田 太郎</p>
          </div>
        </div>
      </section>

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

