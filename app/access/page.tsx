import Image from "next/image"
import { MapPin, Phone, Clock, Bus, Train, ChevronRight } from "lucide-react"
import Link from "next/link"

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
          広尾オレンジクリニックへのアクセス情報をご案内します。 便利な立地で、皆様のご来院をお待ちしております。
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
                <p className="text-lg">〒150-0012</p>
                <p className="text-lg">東京都渋谷区広尾５丁目3-13</p>
                <p className="text-lg">バルビゾン86 ４階</p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  お問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg">メールアドレス: k.o.oushuku@gmail.com</p>
              </CardContent>
            </Card> */}

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
                    <span>月 - 日</span>
                    <span>10:00 - 20:00</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>土曜</span>
                    <span>9:00 - 13:00</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span>水曜日</span>
                    <span>休診</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.072200812918!2d139.71855547589584!3d35.650592731656324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6d43451e7d%3A0xdb8b7ce2d629bdc!2z44CSMTUwLTAwMTIg5p2x5Lqs6YO95riL6LC35Yy65bqD5bC-77yV5LiB55uu77yT4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1742269595021!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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

      {/* Transportation and Map */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">アクセス方法</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Access Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Train className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">電車でお越しの場合</h3>
              </div>
              <div className="space-y-4 text-lg">
                <p>東京メトロ日比谷線「広尾駅」出口1から徒歩3分</p>
                <p>ブルーボトルコーヒーから商店街を50mほど進んだ右側のビル</p>
                <p>（1階に全面ガラス張りの薬局さんがあるビル）「バルビゾン86」の4階です</p>
              </div>
            </div>
            {/* Access Guide Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/image9.png"
                alt="広尾駅からの案内図"
                fill
                className="object-contain bg-white"
                priority
              />
            </div>
          </div>
          
          {/* Google Map */}
          {/* <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.072200812918!2d139.71855547589584!3d35.650592731656324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6d43451e7d%3A0xdb8b7ce2d629bdc!2z44CSMTUwLTAwMTIg5p2x5Lqs6YO95riL6LC35Yy65bqD5bC-77yV5LiB55uu77yT4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1742269595021!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" size="lg" className="font-semibold">
                <a
                  href="https://maps.google.com/?q=東京都渋谷区広尾5-3-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Google Mapで見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Parking */}
      {/* <section className="container mx-auto py-12 px-4 md:px-6">
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
      </section> */}

      {/* Surrounding Area */}
      {/* <section className="bg-muted py-12">
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
      </section> */}
        {/* LifeDock Banner */}
        <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">LifeDockサービスで健康管理を始めましょう</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            当クリニックはLifeDockサービスの提携医療機関です。 最新の技術で正確な検査結果をお届けします。
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

