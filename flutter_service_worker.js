'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9dc66a8ed06782304265e9814712320b",
"codemirror/codemirror.js": "60ce926a3813af7556c2af436dc28c1d",
"codemirror/LICENSE": "d935e58dfcf97600708f61e6da346b61",
"codemirror/css/codemirror.css": "05d0504a0124d330548b08ce840c7821",
"codemirror/codemirror.css": "a416d3257f5ca8dae10ad890495a7865",
"codemirror/theme/icecoder.css": "304b1789dfea59c5b6a7ae49505e4d72",
"codemirror/theme/material-ocean.css": "1021a73b3688d7b3620c8af3257e7986",
"codemirror/theme/xq-light.css": "2a73a08248af3b90d97b81060957ec90",
"codemirror/theme/the-matrix.css": "aa7fbf9e76ffefdf5220a3bd75a7db98",
"codemirror/theme/neo.css": "e5206a0a0dd891c5fe3bccca068e47a7",
"codemirror/theme/lesser-dark.css": "066b44bc0c950bad1cbdf85c2f25f403",
"codemirror/theme/3024-day.css": "809c06b08e65e01698c010f7396c9866",
"codemirror/theme/hopscotch.css": "11c59fa5b724adf417a70a8e3b713a17",
"codemirror/theme/liquibyte.css": "38b581bab764e921c3e321f35f113851",
"codemirror/theme/midnight.css": "38be0d1c538142de0f566bca0c10cc89",
"codemirror/theme/duotone-light.css": "76527b913f3ee205d603c4668a123724",
"codemirror/theme/elegant.css": "6442b9f6b54273942c25674563b52995",
"codemirror/theme/mbo.css": "82cad89898e4f7576215e3babbe9af53",
"codemirror/theme/nord.css": "46338d935f679ea79c102834c444d727",
"codemirror/theme/material.css": "409bab9cc973b67f595f820631d0afd6",
"codemirror/theme/ttcn.css": "067e901bdb3d0aed96a2a5f5f2d132b3",
"codemirror/theme/mdn-like.css": "b5d6a9bae3d0f269971e4827c311e602",
"codemirror/theme/xq-dark.css": "1bedf56ecde937a44c99336f1f2a2761",
"codemirror/theme/base16-light.css": "9cb57b1bf12ca9cbb7e882cae64e85bc",
"codemirror/theme/yonce.css": "27f3e6778c48b22be97290435e9fdf4e",
"codemirror/theme/gruvbox-dark.css": "03eec2aa698a08df46cf43d0b9cac7cb",
"codemirror/theme/isotope.css": "ca42178303980d1f9a95b7218eeb1c9d",
"codemirror/theme/material-darker.css": "2076ef4aad34626673721fc043b738de",
"codemirror/theme/ambiance.css": "def747a39af712b9ab53491971043713",
"codemirror/theme/darcula.css": "24aeb5024249824f30e872722fb10284",
"codemirror/theme/paraiso-dark.css": "f504ec692de44f7a8acdc31f95d4a59a",
"codemirror/theme/lucario.css": "053bc5f838d6228570da9b5b654d3d23",
"codemirror/theme/erlang-dark.css": "8c486ba7c2e0e9a4e142a64744b888f9",
"codemirror/theme/colorforth.css": "bd68141414846cd61ab7296ff9034d67",
"codemirror/theme/abbott.css": "f78fe539541452562a34c5a4b3802541",
"codemirror/theme/twilight.css": "ce31f30e876b33761f07247950313e62",
"codemirror/theme/3024-night.css": "e1b7e3d4b7ef2ebfd3305c87c6b0758e",
"codemirror/theme/vibrant-ink.css": "a44f43f2825040253df8f8e4a9918ebd",
"codemirror/theme/monokai.css": "6cb64c5347235494cdc346527fc0e35d",
"codemirror/theme/idea.css": "09595bcc5c32b7cc7b2935c387c7e049",
"codemirror/theme/dracula.css": "19d0dc0eb99d49abba3a33f0f8af6bec",
"codemirror/theme/base16-dark.css": "6ceae78e0f683d0fa530bab3c72020c6",
"codemirror/theme/zenburn.css": "99dcdd332e89610fb2822d2e7462653e",
"codemirror/theme/shadowfox.css": "01d3609c1ba2cd452cec990c02e57b23",
"codemirror/theme/neat.css": "3e9802e3a70b43adb6790092e0ae0f37",
"codemirror/theme/blackboard.css": "8207d64b395e839a76188fd0303bf1e6",
"codemirror/theme/moxer.css": "0ce62b2db6dece03c94cfd625e0fcc6b",
"codemirror/theme/tomorrow-night-eighties.css": "a052904e618f31f41e6f1d1fb4cdad17",
"codemirror/theme/night.css": "d229bd2977dee0122334aa0533586051",
"codemirror/theme/paraiso-light.css": "58d32265b2f4a158f1f195f4b9480bec",
"codemirror/theme/eclipse.css": "2788afd830284dbe92c6772c0d2b988f",
"codemirror/theme/railscasts.css": "33f50297d9cad0a99ddd9644b4c51343",
"codemirror/theme/tomorrow-night-bright.css": "0b5520cf574b3bc5766a64781d56c305",
"codemirror/theme/solarized.css": "c3f83c91b27c17c8eb1f897517933b9d",
"codemirror/theme/seti.css": "022e14c68ad8ae59530c3e394ef77393",
"codemirror/theme/ayu-dark.css": "741c43b57bc4c5c729795ed7b5633bd9",
"codemirror/theme/panda-syntax.css": "1fedde272470c75f6cf31b96c0286584",
"codemirror/theme/abcdef.css": "dba02e70dd5f7d190fa869206196f5ec",
"codemirror/theme/duotone-dark.css": "3c247c998f097ec2c60985c42fc44819",
"codemirror/theme/cobalt.css": "0a61c89990bfa31c5114db9385b20e40",
"codemirror/theme/ayu-mirage.css": "1941a347646fb48a6b89acfc71911043",
"codemirror/theme/rubyblue.css": "67e7edd9caca4ffb8f839cf936531051",
"codemirror/theme/pastel-on-dark.css": "e3020244994dfbd3b824a49f36d57175",
"codemirror/theme/juejin.css": "0e03e24f993ed4c26a98a83ebf469cc8",
"codemirror/theme/ambiance-mobile.css": "75d6e3e84df3d2d0fd6263587900a9f2",
"codemirror/theme/material-palenight.css": "832bab2eacce5b17a2c5a6c4c519dd0d",
"codemirror/theme/bespin.css": "76a40bc65042455bec9a5af8572fc0db",
"codemirror/theme/yeti.css": "0db6e4dc130d0e1ac9174ce3d10b5e03",
"codemirror/theme/oceanic-next.css": "154860c33b0ee348801832bcb94d0358",
"codemirror/theme/ssms.css": "f3babbacd9a3d92a0f385d9336061e60",
"index.html": "058cd0d7a1ca093bcc95d4e19b32c44c",
"/": "058cd0d7a1ca093bcc95d4e19b32c44c",
"embed_demo.html": "95c714e7845def6d5b6a8bd20971c07f",
"frame.html": "0b79a9d6169a7c06fbd67dc94ed01ec5",
"main.dart.js": "227b8a49f5cbd29c8ba597701744540e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"styles/cm-dartpad-light.css": "6a94f3eb3e9e7166eef8276779ac98c7",
"styles/cm-dartpad-dark.css": "2a72a54d7e4bf68f66ded1d639aba80f",
"require.js": "1565af44b896bc4c641f238fd800fc83",
"favicon.png": "c3ce0cac0f74c34597ce4275b2f9f4e4",
"icons/Icon-192.png": "56f4de7eb9e876f9d70dc2d527531991",
"icons/Icon-maskable-192.png": "9dec69d424d0bf8be2a6fd90d9d156b2",
"icons/Icon-maskable-512.png": "6b35299d4fc50fcebb73eb932c4602df",
"icons/Icon-512.png": "4ee3f1d738227093fc70d663f91e5892",
"manifest.json": "36b3d9b6e98ac3d26b1292c6a261ea72",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "8dabd604765f1fd948416356ebeb1e30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5ce2c66625225683e9c8778a66358637",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/flutter_logo_192.png": "6ba940675e2cd74bde86ba0bd4201309",
"assets/assets/dart_logo_128.png": "27d4ebccf5b5f50a612c6923ffce11d0",
"assets/assets/animations/success_animation.json": "36ba0c9961f80adb7c58ef450fbcd79b",
"assets/assets/animations/load_animation.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/animations/warning_animation.json": "4366cdf894bb4e1215d09af413abb437",
"frame.js": "a8646be80396d315b6006c6e1c9606c1",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
