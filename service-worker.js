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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "371fe8c776f8a253609c10ca109ae398"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d5a225ae.css",
    "revision": "5c751da82c69a535bd3371d173af2789"
  },
  {
    "url": "assets/img/authorization.2c526884.png",
    "revision": "2c526884ebb1b2eb737ddb924b142c23"
  },
  {
    "url": "assets/img/delete_user.77096912.png",
    "revision": "77096912a6cbbc2d9871d4fd0896623e"
  },
  {
    "url": "assets/img/findalluser_after_change.b7c93dde.png",
    "revision": "b7c93ddeab9d1fe88d18c0bbd498410a"
  },
  {
    "url": "assets/img/findallusers_after_delete.f9bb6804.png",
    "revision": "f9bb6804a0b924640ec71258bf7e7d71"
  },
  {
    "url": "assets/img/findallusers.ac953770.png",
    "revision": "ac953770e8e567e230a9aded37dbbdad"
  },
  {
    "url": "assets/img/registration.c7e8ebf2.png",
    "revision": "c7e8ebf226ec3119f80cf40c990dafcd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_change.f6c3111a.png",
    "revision": "f6c3111aeb534b82622a9a70e649d1ea"
  },
  {
    "url": "assets/img/version7.8e5d3cf5.png",
    "revision": "8e5d3cf5010f9245e60ae4aa5cd2e9f8"
  },
  {
    "url": "assets/js/1.9a814581.js",
    "revision": "edbb085ee5de550907a03b615573b503"
  },
  {
    "url": "assets/js/10.18d0454f.js",
    "revision": "397439c0d60f2e5ed5a6e63fe443034f"
  },
  {
    "url": "assets/js/13.143540f4.js",
    "revision": "587a2c05dac4f80aca8285fc00cb2533"
  },
  {
    "url": "assets/js/14.deb64674.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.570e3662.js",
    "revision": "7e2cc312c499a1ed3b307bd693943c0b"
  },
  {
    "url": "assets/js/16.e3a26f5c.js",
    "revision": "6181d9e85d66f2551b1d1712cb3dfb44"
  },
  {
    "url": "assets/js/17.6db2bb35.js",
    "revision": "76aa97537cc23020296e6f31a7af9fa9"
  },
  {
    "url": "assets/js/18.d1703199.js",
    "revision": "b4217399ef0beb24f9e9f20e5cc82979"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.67c1117a.js",
    "revision": "08954b6d7a02b61a971f2f9304c0aa5b"
  },
  {
    "url": "assets/js/20.f7e7d252.js",
    "revision": "98adac9ec6092fee1673e22f83708220"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.264b580c.js",
    "revision": "b7be6cd6ee8a65ba01a391df6c2d23c0"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.84e10a7b.js",
    "revision": "98d08495e987a161f1dc711fb707f84e"
  },
  {
    "url": "assets/js/28.ac04402a.js",
    "revision": "9c6f12028a123a5a1a0685d4f0a3deb7"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.e581ea92.js",
    "revision": "9194392e79e7c50513bc2dc620888ca8"
  },
  {
    "url": "assets/js/31.64a3875b.js",
    "revision": "914180587179d6149d11a66bb619a9fa"
  },
  {
    "url": "assets/js/32.837166b3.js",
    "revision": "38660f80b17ccd8ea9eb39ce5e76f0a7"
  },
  {
    "url": "assets/js/33.a2c9d0d7.js",
    "revision": "442dfcfe044bc8995b03e20d839a67f9"
  },
  {
    "url": "assets/js/34.e50c5a58.js",
    "revision": "fdbdb247bc48a6fbdfb6a03dd522a040"
  },
  {
    "url": "assets/js/35.a3b93646.js",
    "revision": "6e2b752c3b396e9b25984c5188e1d8e0"
  },
  {
    "url": "assets/js/36.d81ce918.js",
    "revision": "ae79f5017c8831c226c9ad2a5d55dd46"
  },
  {
    "url": "assets/js/37.6d9237bb.js",
    "revision": "e52524f7c6cac630a8abf06702427ef5"
  },
  {
    "url": "assets/js/38.cc606836.js",
    "revision": "2ba4180e36e655262b34207c178a9f01"
  },
  {
    "url": "assets/js/39.dc9869fe.js",
    "revision": "68d083cd65a60873a32d81aa9549d014"
  },
  {
    "url": "assets/js/4.e73eb8b5.js",
    "revision": "5e5d09359ac4e80c7fc39d4c17ba068f"
  },
  {
    "url": "assets/js/41.120d8f64.js",
    "revision": "eccf621964ff631050f6675ae29f37c8"
  },
  {
    "url": "assets/js/5.92d116c4.js",
    "revision": "33540034dceeb69a51452733fc364175"
  },
  {
    "url": "assets/js/6.41f466c2.js",
    "revision": "6963cdc73f5c8dd244b79057db1889ef"
  },
  {
    "url": "assets/js/7.cbe6357d.js",
    "revision": "7eb5a6ca25a657cfb6c68caca679a2bb"
  },
  {
    "url": "assets/js/8.0a77a665.js",
    "revision": "1f83d1d2a8cb7e45a3d2d331dca3fe0b"
  },
  {
    "url": "assets/js/9.6f7210ce.js",
    "revision": "4495cc92fbbdbf65a6b2b5bcf8ac233a"
  },
  {
    "url": "assets/js/app.9edf9f75.js",
    "revision": "3e9cce5e9945e754213c59f617c103d2"
  },
  {
    "url": "assets/js/vendors~docsearch.784e33e4.js",
    "revision": "f129e06c6647255e79f5e79fedd11fc3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "47310bd3efa89e1d375a20515a2e745f"
  },
  {
    "url": "design/index.html",
    "revision": "8f75964e9398cc3d009dd0bbd8a1114a"
  },
  {
    "url": "index.html",
    "revision": "49281a4c2bb40680f1089ecc0e439002"
  },
  {
    "url": "intro/index.html",
    "revision": "6311581ff9eca81a5c708728c93a4379"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "efc90716729761eac87f59632e6cf4db"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "072a583dec8512ba7109d3d358dcbe0f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2275889bcf5955c3ac933fdecf84f061"
  },
  {
    "url": "software/index.html",
    "revision": "723ce7693a0f47b37e5cc1b5ab5f27b5"
  },
  {
    "url": "test/index.html",
    "revision": "e5a99d82c7bc197fc9f98a28af37abd8"
  },
  {
    "url": "use cases/index.html",
    "revision": "0314e47db50808b691aec982ffa64fb1"
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
