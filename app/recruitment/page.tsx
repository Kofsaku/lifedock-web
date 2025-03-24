import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Recruitment() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">スタッフ募集</h1>
          <p className="text-xl max-w-3xl mx-auto">
            「広尾オレンジクリニック」および「LifeDock」では、日本の未来であるこども達の健康な将来をサポートする仲間を募集しています。
          </p>
        </div>
      </section>

      {/* Recruitment Message */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">募集職種</h2>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>小児の採血経験のある看護師</li>
                <li>検査技師</li>
                <li>管理栄養士</li>
                <li>WISC施行可能な臨床心理士</li>
              </ul>
            </div>

            <div className="text-lg">
              <p className="mb-4">
                私たちは日本の未来であるこども達の健康な将来をサポートすることに取り組んでいます。
                こども達の笑顔、健康を守り、明るい社会を作る。ぜひ皆様のお力をお貸し下さい。
                お待ちしております！
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <p className="text-lg">詳細は下記メールアドレスまでお問い合わせください。</p>
              <p className="text-lg mt-2">
                広尾オレンジクリニック　採用担当<br />
                <a href="mailto:k.o.oushuku@gmail.com" className="text-orange-500 hover:text-orange-600 hover:underline">
                  k.o.oushuku@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      {/* <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">募集職種</h2>

          <Tabs defaultValue="nurse" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nurse">看護師</TabsTrigger>
              <TabsTrigger value="nutritionist">栄養士</TabsTrigger>
              <TabsTrigger value="psychologist">臨床心理士</TabsTrigger>
            </TabsList>

            <TabsContent value="nurse" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>看護師募集</CardTitle>
                  <CardDescription>患者様の健康をサポートする看護師を募集しています</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">仕事内容</h3>
                    <p>
                      LifeDockサービスを利用した採血業務、患者様のケア、
                      医師のサポートなど、クリニックでの看護業務全般をお任せします。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">応募資格</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>看護師免許をお持ちの方</li>
                      <li>臨床経験1年以上（科目不問）</li>
                      <li>チームワークを大切にできる方</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">勤務条件</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>勤務時間: 8:30〜18:30（シフト制）</li>
                      <li>休日: 週休2日制（日曜・祝日、他シフトによる）</li>
                      <li>給与: 経験・能力に応じて決定</li>
                      <li>雇用形態: 正社員、パート（応相談）</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Link href="#contact" className="w-full">
                      応募する
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="nutritionist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>栄養士募集</CardTitle>
                  <CardDescription>健康的な食生活をサポートする栄養士を募集しています</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">仕事内容</h3>
                    <p>
                      LifeDockサービスの検査結果に基づいた栄養指導、
                      食事プランの作成、健康セミナーの企画・運営などをお任せします。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">応募資格</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>管理栄養士または栄養士の資格をお持ちの方</li>
                      <li>臨床現場での経験がある方（歓迎）</li>
                      <li>コミュニケーション能力の高い方</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">勤務条件</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>勤務時間: 9:00〜18:00（シフト制）</li>
                      <li>休日: 週休2日制（日曜・祝日、他シフトによる）</li>
                      <li>給与: 経験・能力に応じて決定</li>
                      <li>雇用形態: 正社員、パート（応相談）</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Link href="#contact" className="w-full">
                      応募する
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="psychologist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>臨床心理士募集</CardTitle>
                  <CardDescription>心理面からのサポートを行う臨床心理士を募集しています</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">仕事内容</h3>
                    <p>
                      患者様の心理カウンセリング、ストレスマネジメント指導、
                      健康増進のための心理的アプローチなどをお任せします。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">応募資格</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>臨床心理士または公認心理師の資格をお持ちの方</li>
                      <li>医療機関での勤務経験がある方（歓迎）</li>
                      <li>患者様に寄り添える温かい人柄の方</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">勤務条件</h3>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>勤務時間: 9:00〜18:00（シフト制）</li>
                      <li>休日: 週休2日制（日曜・祝日、他シフトによる）</li>
                      <li>給与: 経験・能力に応じて決定</li>
                      <li>雇用形態: 正社員、パート（応相談）</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Link href="#contact" className="w-full">
                      応募する
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Benefits */}
      {/* <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">働く魅力</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
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
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <CardTitle>充実した待遇</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                経験・能力に応じた給与体系、各種社会保険完備、 交通費支給、賞与年2回、有給休暇など、
                安心して働ける環境を整えています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <CardTitle>研修制度</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                LifeDockサービスに関する専門研修や、 スキルアップのための外部研修参加支援など、
                成長できる環境を提供しています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <CardTitle>働きやすい環境</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                ワークライフバランスを重視し、 残業少なめ、有給取得推進、 育児・介護との両立支援など、
                長く働ける環境づくりに取り組んでいます。
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Contact Form */}
      {/* <section id="contact" className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="text-center mb-6">
              採用に関するお問い合わせは、以下のフォームまたはお電話にてお気軽にご連絡ください。
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input id="name" type="text" className="w-full p-2 border rounded-md" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input id="email" type="email" className="w-full p-2 border rounded-md" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">
                  電話番号
                </label>
                <input id="phone" type="tel" className="w-full p-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="block font-medium">
                  希望職種 <span className="text-red-500">*</span>
                </label>
                <select id="position" className="w-full p-2 border rounded-md" required>
                  <option value="">選択してください</option>
                  <option value="nurse">看護師</option>
                  <option value="nutritionist">栄養士</option>
                  <option value="psychologist">臨床心理士</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea id="message" rows={5} className="w-full p-2 border rounded-md" required></textarea>
              </div>
              <Button type="submit" className="w-full">
                送信する
              </Button>
            </form>
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

