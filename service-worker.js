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
    "revision": "3eb6031ee0316a7c1c9f6152936b3129"
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
    "url": "assets/js/12.8e2eed03.js",
    "revision": "05b38751e842897cc6c68a24d7c5732c"
  },
  {
    "url": "assets/js/13.298e0f3c.js",
    "revision": "e5a5ae4e374b0c7ac5b4dc09d0ab8947"
  },
  {
    "url": "assets/js/14.aa283520.js",
    "revision": "730e4139a30d67ea051dc58189e3abeb"
  },
  {
    "url": "assets/js/15.797c24d8.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.8e195926.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.027c155b.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.1c1c216b.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.6ddd81b6.js",
    "revision": "680c13613f67a49f15f949e1983954d2"
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
    "revision": "d8123598064806050d429f55a36ee0da"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1f490393837a0e519f6ee2119640a4f8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "92950c939974f47e62996a2399c93080"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3e18998496e910eead47df400089fb2c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f7e95aa4ab83f7c29c489ac99f4ba2da"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9c8a2d65850aaf618e6048bfe2e06a78"
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
    "revision": "abd40d51815b24ef25449d304ececa27"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e4a6255063afd4e41836fdb80511f97a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a6b2437ba75ef02abe32535a4222dd8e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a48a0d649ae0d9a535e16223f1346f80"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0cc968f0c9ece3a56552463569e9d9cd"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b9a84c6c352e571c1a139a90527c368c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ad379053c1c2c618409e8e4a618d246f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "87117a7d16c75419a3149c33ccd1cd0b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5d10e29c4cc08c7f9b09d9bb93f7aa4b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4ee74866d6284a9f2d62c9c85a989bf9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6e2b1210e02b83d604de6749d70a831a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "68d84fdc4899977c8e817c9c3907df92"
  },
  {
    "url": "timeline/index.html",
    "revision": "b526f12b755bb5ee0dbe3aa94c36ce9a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ee926988e6130a631aa3f68356a45ebd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "93f4d98a0c2c55d83131dc5316c82be3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "272430f874d4420a19a12095f2ab24d3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f895e660a2ac4922b4d9475142af4709"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7c8fcfd24a78b4cca784f13ff7cf56da"
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
