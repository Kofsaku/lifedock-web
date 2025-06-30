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
            src="/0519_003.jpg?height=800&width=1200"
            alt="クリニックの外観"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">
                広尾オレンジクリニック
              </h1>
              <p className="text-xl mb-6">お子さまの未来の健康をサポートします。</p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="https://life-dock.jp" target="_blank" className="flex items-center">
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
                <p className="text-sm text-muted-foreground">2025年4月1日</p>
                <h3 className="font-medium">LifeDockサービス　2025.6.30からサービス開始！！</h3>
                {/* <p>4月末まで健康診断が10%オフでご利用いただけます。</p> */}
              </div>
              {/* <div className="border-b pb-2">
                <p className="text-sm text-muted-foreground">2024年2月15日</p>
                <h3 className="font-medium">新しい検査機器を導入しました</h3>
                <p>最新の血液検査機器を導入し、より正確な検査結果を提供します。</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">2024年1月10日</p>
                <h3 className="font-medium">LifeDockサービス開始のお知らせ</h3>
                <p>当クリニックでLifeDockサービスによる採血検査が可能になりました。</p>
              </div> */}
            </CardContent>
            <CardFooter>
              {/* <Link href="/news" className="text-primary hover:underline flex items-center">
                お知らせ一覧へ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link> */}
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
                      <TableCell>10:00-20:00</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                    </TableRow>
                    {/* <TableRow>
                      <TableCell>15:00-18:00</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>○</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow> */}
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-2">※休診日: 水曜日</p>
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
                <p> 〒150-0012 東京都渋谷区広尾５丁目3-13 バルビゾン86 ４階</p>
                <p>メトロ日比谷線　広尾駅　出口１から徒歩３分　ブルーボトルコーヒーから商店街を50mほど進んだ右側のビル（１階に全面ガラス張りの薬局さんがあるビル）　バルビゾン86 の４階です。</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/0519_002.jpg?height=300&width=400"
                alt="クリニック受付"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/0519_008.JPG?height=300&width=400"
                alt="通路"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/0519_007.JPG?height=300&width=400"
                alt="診療室"
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
              <Image src="/B19D2570-BEA8-42FC-AE5E-4668184D216F.jpg?height=300&width=300" alt="院長写真" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">院長挨拶</h2>
            <p className="text-lg mb-4">
              私は脳外科医として手足が動かない、呂律が回らない等の症状で搬送される、超急性期脳卒中の診療をしておりました。その脳卒中の大きな原因を占めているのは生活習慣病関連のものです。
            </p>
            <p className="text-lg mb-4">
              現在の医療保健制度では若く、元気なうちは病院には行きません。そして50、60歳になって会社の検診で高血圧や高血糖、高脂血症などの生活習慣病を指摘されてから、病院に通院される方がほとんどです。脳や心臓などの血管がつまってしまってからでは手遅れです。
            </p>
            <p className="text-lg mb-4">生活習慣病になるリスクはある程度分かっています。若いうちから自分のリスクを知り、生活習慣病にならないように気をつける。予防をすることが大切です。
              様々な健康情報がインターネットやテレビ、SNSに溢れる現代では、自分のお子さんに合った育て方や食事の方法を保護者が調べることは時間がかかります。
            </p>

            <p className="text-lg mb-4">
              病気にならないための仕組み作り、良い子育ての方法を各専門家から直接聞けるサービスがあったら、、、そんな想いからこのプラットフォーム事業を立ち上げました。
            </p>
            <p className="text-lg mb-4">
              「広尾オレンジクリニック」、「LifeDock」ではこどもを心身ともに健康に育てる。そのための様々なサービスを提供します。
            </p>
            <p className="text-right font-semibold">広尾オレンジクリニック　院長　　 川出 智大</p>
          </div>
        </div>
      </section>

      {/* LifeDock Banner */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">LifeDockはこどものための予防医学プラットフォームサービスです。</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            当クリニックはLifeDockの提携医療機関です。 
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50 font-semibold">
            <Link href="https://life-dock.jp" target="_blank" className="flex items-center">
              LifeDockサービスについて詳しく
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

