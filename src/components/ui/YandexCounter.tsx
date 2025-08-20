import Script from 'next/script';
import { memo } from 'react';

interface YandexCounterProps {
  counterId?: string;
}

const YandexCounter = memo(({ counterId = '70102144' }: YandexCounterProps) => {
  return (
    <>
      <Script
        id="yandex-counter"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${counterId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />
      <noscript>
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <div 
            style={{
              backgroundImage: `url(https://mc.yandex.ru/watch/${counterId})`,
              width: '1px',
              height: '1px',
              display: 'inline-block'
            }}
            role="img"
            aria-label="Yandex Metrika"
          />
        </div>
      </noscript>
    </>
  );
});

YandexCounter.displayName = 'YandexCounter';

export default YandexCounter;