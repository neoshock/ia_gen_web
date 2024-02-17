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
"index.html": "1b4b517b925a4569620b96a2b8b574b3",
"/": "1b4b517b925a4569620b96a2b8b574b3",
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
".git/config": "55e451354bf82b9c4002d36236bd0ffa",
".git/objects/61/43fa6c9e5443db8472d122c14f5ec2e0f91925": "5b6fd95a8205bb74093cbc5e66d403bc",
".git/objects/95/c13157e4388ab459a67fa7510374f048afb867": "78ff59eda2eb3d7bd48622e9bc9834fb",
".git/objects/66/c3b28f1b8df46f765e8853bf76e618888fd6f6": "a88d1de393372397a66a98b188a6fb4d",
".git/objects/50/d7b08d991eeee710dcace91aba8aed13f37c4a": "28cef75eaac194aad81dad8c9859c668",
".git/objects/57/f30e34e9b57721a59acb09b3e4c9c2ff157908": "2169f741ccc6b97cb7c42ba616051d85",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/9987b4d4e6c9bb2e27bb6c93b4f0860aebe400": "f4547b9bf65158403d04d6dea30b50dd",
".git/objects/9e/7a41cfe6a4c4e303527c90feb77857f31d9d2a": "23050cbc8e042f68bebeaedc0ce5f679",
".git/objects/6a/5816b30c145855a436c77e0fcd4f398568e0e0": "c5a18df9b42b0bd65e184e983984bbe0",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/3c/5553d147b4b8a3d2d947b347665b1f8a867124": "0ef31ddc31888822fec1d711e113d49e",
".git/objects/51/bb75b229bc092051e0de28d97fe3db4ee8ceca": "552f7b12d0d29bc0a95247f83f509c86",
".git/objects/3d/371284c40717b2cc72ed5298d60d39f48423d2": "82482d2f676c168470005b2d00fd8804",
".git/objects/0b/e35daee71b45f8ff861e310ddb0ebf934c9f48": "8394eb8fb1a30b4cbee0ab90b2868923",
".git/objects/93/957a97706a116714154bddca4d02559e274955": "0bf1abb4bf64dd14d993cf4d0861ee71",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/564f4fdbe405d79a573309cbf7e6bc26347406": "924ff373727eb3f7581fc51f44a70519",
".git/objects/34/600b75b0d48b4b0c73851c77a6059cb9370267": "99c7847e8cf171a7f11c727067d3ef70",
".git/objects/5a/5489b5885e97391126bfddc9ec6548a9aa50fc": "4ce21a6f0003635201f517a6b82b1fad",
".git/objects/9d/ae58cb3478888182ba6dbd070f37cfe7f2e01f": "9692d5a51de1739aee9d84ef7c70f88c",
".git/objects/a4/203f0d06ccc719923cd24b5b20b8076c1b494d": "a40149bb6fd9ff8f3fb9ea899c397b84",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/fc09045a08628a47ee4a2f530fe036fd82787e": "da6fdb80a1b64f98d3df4959bcefb743",
".git/objects/ad/dd9ca46cc0a0dd19d0c22b720e62bdef663d8d": "1baf1b612d85e562972f7fcf18cde494",
".git/objects/bb/b14615f44b51e9c9002d634595695ee8bb5605": "c1ac1ed887d2df08bcb81cd400763655",
".git/objects/bb/5a8ecdd586138319638c178680af3dfed5b631": "9843516cad2c8b3575bd8c97dbd9b949",
".git/objects/b3/4f1ff43fbadf04d74a702eebe36cca5927095d": "13c1c33655d81554615c1164b40c07db",
".git/objects/df/3901c85336113eced9cf80528426dae1f4469a": "187ec4fea5fc80d8f5f22c143d86640c",
".git/objects/a2/b74cd3939bc2e37996690a1b0c228189d4bc18": "33661bebe3189469a5b7ab1da9520858",
".git/objects/a2/1fdcea13e968808530518a759149bfbebee650": "f3aee45206dfde11f39677bb434d027d",
".git/objects/bd/b75200801f7b1f3ce4c312669ae33ba28cd3ee": "1bf59fa0347ea07357a057b5d2f75386",
".git/objects/d6/7d3c37a5e7cb3ec78abae2fff39cfbc2f1fd79": "89735cc280cb03a5a648c077fac4e63d",
".git/objects/d8/58cc3b5c805cb7ef550ffbe78d3f72d9214efc": "74cff6c0fbd2a1bf11c0945aa42f1b2e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/244dca11b0b122eea25c2ca3a32ec065e32efc": "5653f6c59f7162f4627959c682e96bcd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/74c145eb44b641224af13d14768c000dcaa730": "7285bd5cd48383c27aec4a17fedd241a",
".git/objects/f2/77e63dad4bac2076a731581d901c6e2f1bab5c": "3896300e2212e5761a9ff414392427bf",
".git/objects/cf/2f32ff211bc67a41412ced8006eb0d08f83898": "1d9ff4d401be5332725e11b0e8b23f4b",
".git/objects/fb/1d23f8a8e6215963d76f58becb3282b859b5ab": "507d3453fa4b6fbff147410088bb1266",
".git/objects/c1/60ff09171efea1c2df6166eb6552bdaf84b48e": "4b704ed07bf7fefdf5725ce1e007fb76",
".git/objects/ec/e0ac11b65f5ccb9135b79939723ee865a021ed": "6b455268a2247574717d90300fee19ef",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/922f433b74c11ab214e1a4cec56bb99bde2555": "18b567c45aa40a05d5d4a67bf6b3c9df",
".git/objects/29/7b2feab887c1233fb0cf976bf37d98f1a04705": "3cedbd6264abf02ca4813b1566683e82",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/fc95b3341d1b62b3a2d1d77c4dbb2c22c9a807": "8ff85ba4684dcde20fd0a6768aab4a19",
".git/objects/89/80a57be0e34622bee6be30fe31f4cf837dbee0": "9145674250efc5a642fa362d4e6cae9a",
".git/objects/45/a01a269cf9d0607c26041ee774e57670357516": "b80b9db4448966775004ca14e19c12d0",
".git/objects/45/4fee49c5ffe3137920384693976ec09b9dca3a": "25485ff75cb46145280798c7dd87f0ba",
".git/objects/74/c5b5f507b45c6d0cf5adb62af8683c7bd8808c": "ed69c24e186f7f57242e842ebc1f1605",
".git/objects/1a/4c07df7119a22ed16215bb08e52423bd17788c": "6ab6d172c3300d01b3aa050fd10ee40d",
".git/objects/28/672406d39d33591210cd6330d1264859953460": "497c60b8dc026e83f125a55db05d47fd",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/7e/6d8f2fe7746a80e900c394272441f2eecb8f68": "34ae9eb8ca61816137c5b5ad0a5067e6",
".git/objects/7e/e61fd4ddedb6d521dce04741ca9c2768ead680": "adfd401fed4f6a11c0bf1ffb516de9a1",
".git/objects/4c/557b15c00534a04de486126ad1b63abf9e2f95": "d60821371d37f9467caced22f169f5f9",
".git/objects/26/7b6fb5fe3bb1dd922659e93fd1f3167d0b9748": "ab844c11fd18231d391e702d107cd5e4",
".git/objects/21/5a88c80533a2e13abc3adcdf170525bd1de40f": "aeb85469d2564b1fba6240ddb5b23920",
".git/objects/21/a6aa957bce7f233919f205c3950b238057f7a2": "68b8b2e1a220d1ff65de3ec87de1b752",
".git/objects/4d/9b66c5df180e63cb1cdf5372e28f528f00ee0f": "4785a7d2a9a682ff163b5fea8936cd55",
".git/objects/81/7848bcc226d0c49b68e3c9327bc1dbe959da33": "b309cc5243f3c82448240afe29844c20",
".git/objects/86/f141a11533dcb1cfa04dfa92442bdf12f63dca": "634c835ed0a5953a38d85dceefefdf59",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/9273612e3340d2a19a1d2086dcf9c5a13573ad": "46c4f0c59fdca6f0481212ad9ca02aea",
".git/objects/5c/ce7a5a42f2277002e6a1cfe0bdb128204534af": "99a382e935064d679758a1ec941c8771",
".git/objects/5d/b618fac9c692ef8569ddd337503601c1c95517": "e0f46a3a69f5210f679321d4e26aacf1",
".git/objects/5d/c9a5519796aa70a89a7367b92689b0e72603da": "e2910beeb24dd22516e831cd53b54104",
".git/objects/31/7cf9e535c4a7691fe992167b38cee54c0e0e80": "1aff038d211cde357b93c3a82b02d895",
".git/objects/31/71c7663b7a077eb8dc952595c13f99b206dca5": "dfd0221b536b24eb9e065740823ae646",
".git/objects/91/a918a43eed5c1b8579cea5d056ed105dca28d9": "9cf6cacf0d4090f5d61ce45fb09bbae7",
".git/objects/62/995ed73db7dbf96abb18f185c92d01676c69dd": "65cd979533c87949ce616ec256097834",
".git/objects/98/e782e7af209f9f3acbca0c858b7e9a3b53912b": "3447124fd633e3c94f118d565507b70d",
".git/objects/5b/4c9e5c9566cd88ad854c5586db31373cab3567": "d6687b4dcf68707d4531d2028c77596f",
".git/objects/5b/60e82722985028f7101944b4c96156342db26e": "6202b07b594c770460d0a201bd1cf79b",
".git/objects/01/413a37f31a9c926e7ecd48609b0b5819a0ff58": "ce352d9de04b031272306a5fac217f75",
".git/objects/6c/a664f2e7c2a561a34e393e632ef911825c07ec": "b46f20e8317a1db0725bb774dae732c4",
".git/objects/39/76e22f57f4f20f91e00e4f3fa245d76699f180": "4ab6e9a65b49dcc39e57e846995a780e",
".git/objects/39/4850cd66f5d69abccd69472dedcc1c18dad8d3": "5731b74c2b65678892f43d7bf015886a",
".git/objects/0f/6c0a3430c24e7617d51f651c58684fbb03f687": "f539766b81c9cdaa2088fbf2c9aac3d5",
".git/objects/90/18d33e8f9dea1dca38436def2cdc4cbcfc9cdd": "167cedc1784b7ec4bc7527cdab2fef2f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/898153f4fa0bd28dd5e24d7a220c2b6b6432a8": "47f28c52fe6474c8200de166ed7aeb25",
".git/objects/dd/a6df51d03941355052716cd7fb5ae762889e1f": "321118fbbba92f366ee83fc1f7297f0e",
".git/objects/aa/033eefe2f397288ab0da4cb9808caa5940dbe8": "0f9595be2ebf8e2c583086d251772564",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/164fe6756173846b92e7bd9c83833ba238e872": "70d62aafe7c41c58cf0c42f47be79880",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/08c30da0d442e09c82a1de8de01f45752d39cd": "619ff2ef90c90faa1b27e7898dd20d50",
".git/objects/c4/b007497040e265e66d37f2069c554981e76c58": "c56c68868caa06698a79d0bdc280a2c1",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/40ceea27e876f71497be7cb4acfeaa5b7b243b": "bea3575ef71f673f28536eeaef0f7b0c",
".git/objects/cc/f233210333a04d998d7606ce49a7b3ac1efccf": "55b619037e1402c468d61ddb763d718b",
".git/objects/e6/982ac0d9f664dcb1d13c24d109dda690d92325": "1f9a41f468da42cde7cb1ccdb3beea6b",
".git/objects/e6/f51c760651b9dceebd612b31e21b6db6ac1009": "ceeaa2720b3ebb17e50ce6b942cc1e80",
".git/objects/f9/e01f9fd257bd1cbec433ce0a6c478718e6191a": "bea5fa541798dca2ead482ab99738fdd",
".git/objects/f0/e1da19832ddc86d652fc7e3c8d79e301fa127a": "74f99cb90ef6ba032ba02637ce836465",
".git/objects/f0/af8f8b3e432b5af4fbf987a5a7f2ab49663a8c": "24b948deab6918a1b57853e2dbb82d36",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/9617aeec21d49e8c250f0234326b4f4e3b7c40": "10e25aa84204a26ebaf8a511520b2c7d",
".git/objects/fa/4afd71bc7a15e8ddce51c59c3aae5938e2a887": "a64b570c308cf3fa4eddbdef0131a760",
".git/objects/ff/1464408bcca14f1dc575ddf2e4b79b01f9997a": "420bf429b3b25f66dbd3df2571d6fb11",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/abb2a8e263f8945b5711f95971ed0ef6200368": "e731c0c4a28a8029d08ef7c9dbd02321",
".git/objects/e9/4015859287fd5e22bbd79bb5e0803cedc79f8b": "0647d961e158d70300f41c95cd759e4b",
".git/objects/f1/15fdfa64090ed9a6d491a14a964cef800a7075": "7d1c7d5a81ea65f24a1591ee48025072",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d91ac522e91a5725cd8277aa4d35342492b8cc": "3bf4cfc6e8448e09142e6827354c8529",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/71bf07ef04bb1eae37a4a521eeaf4d74f70fe6": "7af48132c33db7fa688452084cceb252",
".git/objects/84/35e643dfa627d3e486a1423d59382a5906b48f": "153a051626052c2a6c4e791a01c5951d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/2293a34cd8e5b690c048bd2a3bc83d6fdaea2e": "08e5b00a3e73d76a13aedccd08b29183",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/f647be88d6499660d8c2f9344dae21cdb3012b": "443034dd9a11a6dd51c97d5187e95c14",
".git/objects/49/4b8c2ce3be5c1dba10ec3f5e924ac3238638a1": "4c5927aa1671093c20e91438d9ab8850",
".git/objects/2e/96c0caf771f93112d2260015a7317027fd93a2": "4136832bc5c25f0729a8320dbb1f25e0",
".git/objects/2b/f4fce4af8db579df15fdeab2c1fcc6b80cec3c": "32d27a56c895a90a82089fcbf603d79a",
".git/objects/78/467ae2a10d3807654b92669e5dd9156687c044": "956388f936ee4e0c2cb528a9e17a6ace",
".git/objects/7f/0bfcc79fa898afdaf2ac83575a9a0c1cb2ca8a": "fdb50fb437a6dadc2ef7d70614943080",
".git/objects/7a/a00e87aadf4cb2cd4f37c8fdb0d76dbce76644": "0bd42044f3bb5e56c9e71bd53a802ae2",
".git/objects/25/f3f08100c4bbbed645b81808de196ef5938911": "3b191bb7a5f6a21cc6dcad7d66ff495d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44e9269498e45b068af1d6de60b99d3b",
".git/logs/refs/heads/main": "d7241c19975ca0f4e677a995ecba4bcb",
".git/logs/refs/remotes/origin/main": "bd7c37902f6c303aa075b7ca232c06dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d867574a68776581893eb2b26d1efd29",
".git/refs/remotes/origin/main": "d867574a68776581893eb2b26d1efd29",
".git/index": "0c7441d31e76f8388bc65893a9cf8c1c",
".git/COMMIT_EDITMSG": "7c897c2167f77748644493434066ae04",
".git/FETCH_HEAD": "268ba610f44e8f12d98a87e6640239dd",
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
