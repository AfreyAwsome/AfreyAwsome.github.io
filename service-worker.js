/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "10bfe6c8178572c2fb840081e7a3884a"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2356bf96.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.c76b71d0.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.df0b42a0.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.19b224a3.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.d5f3f67e.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.62cd6b00.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.8e195926.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.35fdb9f0.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.3a516922.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
  },
  {
    "url": "assets/js/4.869f9644.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.90418627.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.4fbfe6b6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.ecce5d03.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.763ad6a8.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.2c732680.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.d0cf9c6a.js",
    "revision": "3dc0f83421e39d40af57238c041916c7"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c115b601a5382ac441290e2f8f8596b3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f2518ea5d12c3b6702358154259f27f7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e26228b0d9a6822ded9fcfe8ad787a30"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3aa446f6c5b1f7d47ff341c5cd8a8fbe"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "efe6ca367194cde8d9e97b49deb61f7a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "895a9a87d82bdd69bb5496df4ac75c5c"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "3c54384ca731e0a3a3fe081d473e0f40"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7a3dcbc731e56aa6b63e2561bab2f820"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "79820ef80f1d039aa8c429b8e3e8588f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6077393bb70cc4cb01d736469d5f227a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "768c2780c3befbe584ad33b9237f2490"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "24b87ccc3014041d1d92a36ebc4c0f4b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "84615c1d8e1df0292fc9a981e47fca2e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1b8463113dc8f2accab2d568cc0af708"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9834406917fe058b985d5bc3ad00b4c6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ecf51d78fb959a46e134a8e96e7078ea"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f6882c1a3faeb048a6c18895740ad7da"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e357ef1f572a750b968e301b2f062e1f"
  },
  {
    "url": "timeline/index.html",
    "revision": "264ae957d2559fa857c417b351d746a5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "665c6f17c3606247ce97593acc8fcbef"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "08c574da4e4a69df75b0b42895e06c37"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e994d718d55a6b56710f9f79c46ffd27"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "762fa8446fca00eae6696fb574c2bb06"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4690e07e7338fd752d25f70ee9f478cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
