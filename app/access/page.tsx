import Image from "next/image"
import { MapPin, Phone, Clock, Bus, Train } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Access() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">アクセス</h1>
          <p className="text-xl max-w-3xl mx-auto">
            LifeDockクリニックへのアクセス情報をご案内します。 便利な立地で、皆様のご来院をお待ちしております。
          </p>
        </div>
      </section>

      {/* Map and Address */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  住所
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg">〒100-0001</p>
                <p className="text-lg">東京都千代田区1-1-1</p>
                <p className="text-lg">LifeDockビル 2階</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  お問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg">電話番号: 03-1234-5678</p>
                <p className="text-sm text-muted-foreground">※お電話でのお問い合わせは診療時間内にお願いいたします。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  診療時間
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>平日</span>
                    <span>9:00 - 13:00 / 15:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土曜</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>日曜・祝日</span>
                    <span>休診</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden border">
              {/* This would be replaced with an actual Google Map embed */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Google Mapが表示されます</p>
              </div>
            </div>
            <Button className="w-full">
              <a
                href="https://maps.google.com/?q=東京都千代田区1-1-1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Google Mapで見る
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">交通アクセス</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Train className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">電車でお越しの場合</h3>
              </div>
              <ul className="space-y-2 ml-8 list-disc">
                <li>東京メトロ丸の内線「東京駅」から徒歩5分</li>
                <li>JR「東京駅」八重洲北口から徒歩7分</li>
                <li>東京メトロ銀座線「京橋駅」から徒歩3分</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Bus className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">バスでお越しの場合</h3>
              </div>
              <ul className="space-y-2 ml-8 list-disc">
                <li>都営バス「東京駅八重洲口」下車 徒歩3分</li>
                <li>東京シャトル「東京駅」下車 徒歩5分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">駐車場のご案内</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted p-6 rounded-lg">
            <p className="mb-4">
              当クリニックには専用駐車場がございません。 お車でお越しの際は、近隣のコインパーキングをご利用ください。
            </p>
            <h3 className="font-semibold mb-2">近隣のコインパーキング</h3>
            <ul className="space-y-2 ml-8 list-disc">
              <li>LifeDockパーキング（当ビル隣）</li>
              <li>八重洲パーキング（徒歩2分）</li>
              <li>東京中央パーキング（徒歩5分）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Surrounding Area */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">周辺案内</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=400" alt="周辺の様子1" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">東京駅方面</h3>
                  <p>クリニックから徒歩5分</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=400" alt="周辺の様子2" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">八重洲地下街</h3>
                  <p>クリニックから徒歩3分</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=400" alt="周辺の様子3" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">日本橋方面</h3>
                  <p>クリニックから徒歩10分</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

