'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "7769fd348089ecd9617dc46a2f64c9c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20647a8e9829e40d8f1ab48b3db4500c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8cb4eeec83829ac460543f8a5c87dfc",
".git/logs/refs/heads/master": "d8cb4eeec83829ac460543f8a5c87dfc",
".git/logs/refs/remotes/origin/master": "98cf6395bb67358c45ee1d1558ffb7d3",
".git/objects/03/6e0a61bf161ff4331933b764e6d404b753b44c": "af2c907ee79d43f783a2f9a48ac476c9",
".git/objects/07/737fc16049e23d8261e83493131705c380eb6f": "7d7180868899c93ac301deecc5a13df2",
".git/objects/0b/dd56c32f19ceb3ae9751f412c65a043dda7a8b": "eeed86c5ccac304777974c1cb9f6b483",
".git/objects/0f/ef327905304f52849dcb05b30631359be65aef": "158ca9d1d1583bc96e0243b32e76aaff",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/6075b402b57db5c1b057ffd56b624ac817e8f2": "47d9ddf66f691687c1e02217fee6bb4d",
".git/objects/1b/93e9eba7badfe24113b2df4ce44056f0fe0a0a": "f9c09aa0c1d7c5d57d6aacf76da5f2db",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/4e/34e6e5d5e5ad88ddabeff3d6851da9b044769c": "b76b7508c938c199ab23268695916e80",
".git/objects/4f/8c711accad71c0c804efdb10eca1ceeaa074b1": "b15862c829dc7f5a900003a562027302",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/61/5fe50f2e083b6dc6c0427c756f210b2593bfa4": "1fa718885f6f5b3775d54caf74ad4b1f",
".git/objects/62/2fa145b8b6e1af65947b94d0286333ccab4d4e": "a1692d865af865f70ba7f79da85ba1ff",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/71/8c2fa959eb04666b9b388652ba2f804b40a4b3": "62e8f93d4213761a499d3a44853d2d7f",
".git/objects/73/2182d77b2f41715b65076227e3ebb65674dbca": "dfba914f00d530bc50c522b963f65881",
".git/objects/77/ebf8eb7c970f1c64464acefdbaa3ebd69fda09": "1b6de86e61c3ac8bf08b654104959d04",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/be03edf6ad69dad07abcb72ef34019fb64292b": "36498a4a203335be478ae94ad91e96df",
".git/objects/7c/5b119fd53f62837839fcb31db0b9ca87008306": "b0aeb9366109314e68ccc294aa22007a",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/85/c705061d33f6fea0a54c25d4506ba08980f317": "7eeeb31a5a425e0c5328737a41371b50",
".git/objects/86/3841a8de44f65026f358705a3129c6d2e87b9d": "840317793e2b0ee0fd9ae7ba4db37e5a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/29671054c3bbe9453346d9d4ff91a5cc595797": "bf887d58476e9e330b01b601ddd156bb",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/ab37067ab4ed102a51264fde142bc8d81d10d0": "b9c2f3e15963066ca0e6e45d46eb9546",
".git/objects/99/f75b243fe6be68c8a66935796a91b7c0a6417b": "e5ebe209ceeb6ca4b941e087617b7fc2",
".git/objects/9c/fd72c278f2be85e3cccc9178c6714182e182d3": "fc6b314e19480635c4d217ac19a051c5",
".git/objects/9d/dbc31584fa92ce19fe8817d777f3e7f2c7e999": "ca9296f9a6c0ab5936faa17b687e6c3f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/d6cb82d088562193882562a38b1ce8017e940e": "0357747e833d437c034d37d343044a27",
".git/objects/af/1bb5098ac7e819a8eaebca129135f2cdf3944b": "31abe68411b03d0e2492230aa0b6e65a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a6bcb4f1e0ec24741611a00674f748ca05fe77": "e811ea4a58f5c4e90a4ad3b1d6efc4b7",
".git/objects/b9/db19a3fd01ecaa76317435b3f4d2d4f26ed319": "1cfcb0ff8af17c9e45cf302364ec37f7",
".git/objects/bf/ab254081c104926b7675144da0f06087599949": "4b160ab08a0e191be50ae5f8138067aa",
".git/objects/c2/2baf4d12091e9d1c5b38e5dca7bcc666b16767": "610799af89246a7db6bff77a3d4b1e6a",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cb/787ea9a0aa128c5ae8f3ff1d97013e0b3a00ca": "29d8ed8b74d44926b4d1dd5331c33c68",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/ac29457faa3725d75ee6bda3882c937cab8c38": "5596a2638a1456a02e3bff4fbccfca9b",
".git/objects/d5/dde290bbafeb3fbf48362c0802f59ba294df5a": "d36fb766812cb02408f38ad67d0749fe",
".git/objects/d6/f4acd96d68996cfaa206da3702af356a5e01ca": "087fb5d249b013127b046ddbe7951f0e",
".git/objects/de/4488a3f7a907eb6b581d9ee9ea4d83af208e82": "a40c421a38c2eca7e8ee3dba67e654bf",
".git/objects/e2/5eafa303418213ac0caa2c6e0e1d33e324e2d9": "942fe4397ed4c85dbc25c8ffb294fbc8",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/bf588c754da8817cad71ab0a4486b3672153b3": "3ff848d8d111f91b25583b888696fd99",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/f0/506205e540bb4be9d588d205f832e1c07afe39": "beca60b79b2a4ec758b866a23feb748c",
".git/objects/f0/d774353ca0d68f50347fd528e191edd7ce420c": "27130e800b6ba788097c038f3e68fdb7",
".git/objects/f2/f49b8778937713247941b596712d5f0fe9f3ef": "d2911d0a70ea333f544d450a9cfd55d4",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f5/ec356039d9ce7f83820b56c8c7e665acdaeac2": "529f820affe986807c4f7e8197565931",
".git/objects/f6/8211730793ab23ee071c7ea1aa90a866c0caeb": "fe31512366452f4a55a3d8caf17ed618",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/refs/heads/master": "c9d3be67cf6b6ed234854b7799ab8338",
".git/refs/remotes/origin/master": "a484885951833f60b459fa9b1e920371",
"assets/AssetManifest.json": "3d973f761d3a5880aece5811df4d7db5",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/person.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/assets/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5ce265cae5025d3f4128fb8252e4bc54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "221bf0953ba1eac11cca9d9950253470",
"/": "221bf0953ba1eac11cca9d9950253470",
"loader.css": "f61841a48de5b79316184d950976284a",
"main.dart.js": "65c97fff069ed084ecd2512a0fc24f5b",
"manifest.json": "33f800ebfef064613f8dec323b266c5b",
"version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
