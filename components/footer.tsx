import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/placeholder.svg?height=40&width=200"
                alt="LifeDockクリニック"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              最新の医療技術で皆様の健康をサポートします。 LifeDockサービスの提携医療機関として、
              質の高い医療サービスを提供しています。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">診療時間</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">平日</p>
                  <p className="text-sm text-muted-foreground">9:00 - 13:00 / 15:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">土曜</p>
                  <p className="text-sm text-muted-foreground">9:00 - 13:00</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">※日曜・祝日休診</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">アクセス</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">〒100-0001 東京都千代田区1-1-1</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">03-1234-5678</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">info@lifedock-clinic.example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  クリニック紹介
                </Link>
              </li>
              <li>
                <Link href="/access" className="text-sm hover:text-primary">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-sm hover:text-primary">
                  スタッフ募集
                </Link>
              </li>
              <li>
                <Link href="https://lifedock.jp" target="_blank" className="text-sm hover:text-primary">
                  LifeDockサービス
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LifeDockクリニック. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

