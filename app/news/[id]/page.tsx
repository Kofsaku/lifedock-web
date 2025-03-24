import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// この関数は実際のアプリケーションではデータベースやCMSからデータを取得します
function getNewsItem(id: string) {
  // サンプルニュースデータ
  const newsItems = [
    {
      id: 1,
      date: "2024年3月1日",
      title: "春の健康診断キャンペーン実施中",
      content: `4月末まで健康診断が10%オフでご利用いただけます。この機会に年に一度の健康チェックを行いましょう。早期発見・早期治療が健康維持の鍵です。

ご予約はお電話または受付にてお申し込みください。

【キャンペーン詳細】
・期間: 2024年3月1日〜4月30日
・対象: 全ての健康診断コース
・割引: 通常料金より10%オフ
・予約方法: 電話または受付にて

健康診断では以下の項目を検査します：
・身体測定（身長、体重、BMI）
・血圧測定
・血液検査（血糖値、コレステロール、肝機能など）
・尿検査
・心電図検査
・胸部レントゲン検査

オプション検査も各種ご用意しております。詳しくは受付スタッフにお尋ねください。`,
      category: "キャンペーン",
    },
    {
      id: 2,
      date: "2024年2月15日",
      title: "新しい検査機器を導入しました",
      content: `最新の血液検査機器を導入し、より正確な検査結果を提供します。従来よりも少ない採血量で多くの項目を検査できるようになりました。また、検査結果の出るスピードも向上し、より迅速な診断が可能になります。

【新機器の特徴】
・少量の血液で多項目検査が可能
・検査時間の短縮（従来の約半分）
・より高精度な検査結果
・患者様の負担軽減

この新しい検査機器の導入により、より快適で正確な医療サービスを提供できるようになりました。検査に関するご質問は、医師または看護師にお気軽にお尋ねください。

今後も最新の医療技術を積極的に取り入れ、皆様の健康をサポートしてまいります。`,
      category: "設備",
    },
    {
      id: 3,
      date: "2024年1月10日",
      title: "LifeDockサービス開始のお知らせ",
      content: `当クリニックでLifeDockサービスによる採血検査が可能になりました。最新のAI技術を活用した健康管理サービスで、より詳細な健康状態の把握が可能です。

【LifeDockサービスとは】
LifeDockは、最新のAI技術と医療の知見を組み合わせた革新的な健康管理サービスです。少量の血液から多くの健康指標を分析し、あなたの健康状態を詳細に把握します。

【サービスの特徴】
・一回の採血で約20項目以上の検査が可能
・AIによる健康リスク予測
・専用アプリで結果を確認可能
・過去の検査結果との比較分析
・個別化された健康アドバイス

【ご利用方法】
1. 受付でLifeDockサービスの利用をお申し込みください
2. 採血を行います（通常の健康診断と同時に行うことも可能です）
3. 検査結果は約1週間後に専用アプリで確認できます
4. 結果に基づいた医師の診察を受けることができます

詳しくは受付またはお電話でお問い合わせください。`,
      category: "サービス",
    },
    {
      id: 4,
      date: "2023年12月20日",
      title: "年末年始の診療時間について",
      content: `12月29日から1月3日まで休診とさせていただきます。緊急の場合は、近隣の救急医療機関をご利用ください。年始は1月4日から通常診療を再開いたします。

【年末年始の診療スケジュール】
・12月28日（木）：通常診療（9:00-13:00、15:00-18:00）
・12月29日（金）～1月3日（水）：休診
・1月4日（木）：通常診療再開（9:00-13:00、15:00-18:00）

【緊急時の連絡先】
・東京中央病院 救急外来：03-XXXX-XXXX
・東京都医療機関案内サービス「ひまわり」：03-XXXX-XXXX

処方箋が必要な方は、お早めにご来院ください。年末は混雑が予想されますので、ご予約をおすすめいたします。

皆様、良いお年をお迎えください。`,
      category: "お知らせ",
    },
    {
      id: 5,
      date: "2023年11月5日",
      title: "インフルエンザ予防接種のご案内",
      content: `インフルエンザの流行シーズンを前に、予防接種を実施しております。ワクチンの在庫には限りがありますので、ご希望の方はお早めにご予約ください。

【予防接種詳細】
・期間：2023年11月5日～ワクチンがなくなり次第終了
・対象：生後6ヶ月以上の方
・料金：3,500円（税込）
・予約方法：電話または受付にて

【接種当日の注意事項】
・体調の良い日にお越しください
・発熱（37.5℃以上）がある場合は接種できません
・予診票は事前にご記入いただくとスムーズです
・接種後は15分程度院内で安静にしていただきます

インフルエンザ予防接種と新型コロナワクチンの接種は、原則として2週間以上の間隔を空けることが推奨されています。

ご不明な点がございましたら、お気軽にお問い合わせください。`,
      category: "予防接種",
    },
    {
      id: 6,
      date: "2023年10月1日",
      title: "栄養相談サービスを開始しました",
      content: `健康的な食生活をサポートするため、管理栄養士による栄養相談サービスを開始しました。血液検査の結果に基づいた、あなたに最適な食事プランをご提案します。

【サービス内容】
・血液検査結果に基づく栄養評価
・個別の食事プラン作成
・生活習慣病予防のための食事指導
・体重管理のためのアドバイス
・食事記録の分析と改善提案

【ご利用方法】
・初回相談（60分）：5,000円（税込）
・フォローアップ相談（30分）：3,000円（税込）
・予約制：電話または受付にてご予約ください

管理栄養士の栄養相談は、毎週火曜日と金曜日の午後に実施しています。
LifeDockサービスをご利用の方は、検査結果と連携した詳細な栄養アドバイスを受けることができます。

健康的な食生活は、病気の予防と健康維持の基本です。この機会にぜひご利用ください。`,
      category: "サービス",
    },
  ]

  return newsItems.find((item) => item.id === Number.parseInt(id)) || null
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const newsItem = getNewsItem(params.id)

  // 記事が見つからない場合
  if (!newsItem) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">お知らせが見つかりませんでした</h1>
        <p className="mb-6">お探しのお知らせは存在しないか、削除された可能性があります。</p>
        <Button>
          <Link href="/news">お知らせ一覧に戻る</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-2">
            <Button variant="ghost" size="sm" className="pl-0">
              <Link href="/news" className="flex items-center text-primary">
                <ChevronLeft className="h-4 w-4 mr-1" />
                お知らせ一覧に戻る
              </Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-bold">{newsItem.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{newsItem.date}</span>
              </div>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                {newsItem.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="container mx-auto py-8 px-4 md:px-6">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              {newsItem.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline">
              <Link href="/news" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                お知らせ一覧に戻る
              </Link>
            </Button>
            <Button>
              <Link href="/" className="flex items-center">
                ホームに戻る
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Related News */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">関連するお知らせ</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 同じカテゴリの他のニュース2件を表示（実際のアプリではデータベースから取得） */}
            {getNewsItem("1").id !== newsItem.id && (
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{getNewsItem("1").date}</span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                      {getNewsItem("1").category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{getNewsItem("1").title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Link href={`/news/1`} className="flex items-center text-primary">
                      詳細を見る
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
            {getNewsItem("3").id !== newsItem.id && (
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{getNewsItem("3").date}</span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                      {getNewsItem("3").category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{getNewsItem("3").title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Link href={`/news/3`} className="flex items-center text-primary">
                      詳細を見る
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
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

