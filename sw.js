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

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

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
    "url": "0.df7e9631.png",
    "revision": "0b9969551f167d445d0f05c2d7fc4106"
  },
  {
    "url": "3W.d9078951.png",
    "revision": "e563742f5184e50d72f3cf829cf8a727"
  },
  {
    "url": "BaiCiZhan.4d85a7a1.png",
    "revision": "d178d58dbd30f03b28b99be33f4244ff"
  },
  {
    "url": "BBD.a09174e2.png",
    "revision": "1a459662d000d6376ba6ab54a21f499c"
  },
  {
    "url": "bg.154fe990.png",
    "revision": "5f0df94575ac34117cce65250419f0df"
  },
  {
    "url": "BG.68db3bc8.png",
    "revision": "99dffeba4c500b40174258e23cc677e8"
  },
  {
    "url": "bg2.08f6facb.png",
    "revision": "1ad1b8ec783c20a39c36a2f4c48b35bd"
  },
  {
    "url": "bootstrap.10165185.css",
    "revision": "7087bea4ece5ad47cb1a43a753d674e3"
  },
  {
    "url": "BuyCode.e47e31b0.png",
    "revision": "38010e8277cd0e2c1f6cadc0a7dbfd18"
  },
  {
    "url": "BW.0e22e5f6.png",
    "revision": "4baaa802904b03852dd0c031e7394dfd"
  },
  {
    "url": "CD-LUG.602e5d56.png",
    "revision": "3d3dd2a9dbd3495d2795622ba18b95b2"
  },
  {
    "url": "cdht.8e3f9c45.png",
    "revision": "0e5e58f173b7e2f027914c59f28c8307"
  },
  {
    "url": "cdhttv.c5dba2d5.png",
    "revision": "f7c7d0cc184b8600aced1ce999b95400"
  },
  {
    "url": "cdkfx.b3bcd8d4.png",
    "revision": "366564cca225a487ee66e386e6dc0941"
  },
  {
    "url": "cdtv.332ac803.png",
    "revision": "f9af88a77213d87fde0f70b97d55e3f5"
  },
  {
    "url": "cocoet.437517d6.png",
    "revision": "1aaa764ba8859eb118e98d5e2e4991e0"
  },
  {
    "url": "Covariant Script.2cc164b5.png",
    "revision": "58683bde55f5faaba37296d00d14cd33"
  },
  {
    "url": "Deepin.e431141d.png",
    "revision": "ca02d1a296df24286f2ef8c3616b9bcf"
  },
  {
    "url": "DKS.4c301145.png",
    "revision": "1003537ba94071e71da1cb2874b66455"
  },
  {
    "url": "en-US.e6eef422.js",
    "revision": "d1ca123ce773cf3e4644881fe2411049"
  },
  {
    "url": "epubit.71ba58b1.png",
    "revision": "343e15b14171adbacccbf10c282c2a87"
  },
  {
    "url": "favicon.2e5df053.ico",
    "revision": "23bc83bb26c6a505a5e98a405e6e84f2"
  },
  {
    "url": "FCC-CDC-v1-1.9b8a958e.png",
    "revision": "33f22a607d9d66efc35997e5dfd53e84"
  },
  {
    "url": "FCC-CDG-WeChat.43b4dd59.png",
    "revision": "1bb9ad3529d3805f0ac7d2b1303f459b"
  },
  {
    "url": "FCC-CDG.34d96b2e.png",
    "revision": "8cc9e34b4b26cf1168319a67b169b0b9"
  },
  {
    "url": "fezaoduke.fc5aaabf.png",
    "revision": "0e2dc061659c8fe19f8dc581df53ae48"
  },
  {
    "url": "first.53ac42d7.png",
    "revision": "17f02a464231099dcc5150fa861c0b12"
  },
  {
    "url": "fm940.a49f0b0a.png",
    "revision": "b1cb8ba0adbac54516bd69756711b932"
  },
  {
    "url": "Fun loading.682bc808.png",
    "revision": "df469e178937e7152a43da5c8797c887"
  },
  {
    "url": "GDG.8f588319.png",
    "revision": "b1755ae7c2a00d5014d2ad33d73b9b35"
  },
  {
    "url": "github.585cef3f.png",
    "revision": "9b298a02de6909b60e79519b581bdf6c"
  },
  {
    "url": "GT.799d762a.png",
    "revision": "9da0a3dcbd4e2a7395dd3b69c7986647"
  },
  {
    "url": "Guo DaFeng.bee2cdd4.png",
    "revision": "2121af37b4dd9ec91bb527ecc942e667"
  },
  {
    "url": "Guo LinShuo.69f64553.png",
    "revision": "6b1f79130fa07c99adc4a3943f68a84e"
  },
  {
    "url": "H5DS.2221a19c.png",
    "revision": "b350c1196d09b0d2bd6b35b1d2f596f5"
  },
  {
    "url": "HCXY.556b1455.png",
    "revision": "246d8de5f83efccdea7df0c6a42decd3"
  },
  {
    "url": "Huang Yi.de38b0d5.png",
    "revision": "1929add89ad29ee5c6013f80d67de6c6"
  },
  {
    "url": "jintai.89c46b23.png",
    "revision": "da5e9d7a57a3310862930e0fa2cfefa7"
  },
  {
    "url": "JRsquare.f9099a91.png",
    "revision": "35eeaea4757aa77e7bda640882bfd0bb"
  },
  {
    "url": "KaiYuanShe.db7cd55b.png",
    "revision": "4454c2b7a205c14a38e08e8beac2b0c7"
  },
  {
    "url": "kct.4ecc4c58.png",
    "revision": "bc6fbd6215f435f86fbb3ef35030e737"
  },
  {
    "url": "liangtongming.7dd19b4e.png",
    "revision": "90dc79f7bda5a7588a2a549964e86f6a"
  },
  {
    "url": "liwanpeng.0ff3231a.png",
    "revision": "87fa881ea2baa8cce5f4bb05d245dbea"
  },
  {
    "url": "lvs.42d1fd23.png",
    "revision": "8403d197e7ed27169003d6a6cbb61e00"
  },
  {
    "url": "lvyan.53f215b3.png",
    "revision": "c0c6b7e6c02cfc03ae7785c4576d2d0f"
  },
  {
    "url": "maoyufeng.340843c5.png",
    "revision": "bad0edda663a317aff5ecd1e45697dc5"
  },
  {
    "url": "Microsoft.47b48d27.png",
    "revision": "9f922e13f6fc572b998b9a0ad2918a3b"
  },
  {
    "url": "mikecrm.52b9464b.png",
    "revision": "a15f6ca3bf2710d4fbad9c486671c164"
  },
  {
    "url": "mikecrm.b60cca15.png",
    "revision": "33759fe5e71f40e98064846e1b2cae77"
  },
  {
    "url": "Monstarlab.a7a6b8e8.png",
    "revision": "21a312feea51487dadc85bc099742cc4"
  },
  {
    "url": "MZ.98123258.png",
    "revision": "78a081527873bfbe291bf5a2c3c13685"
  },
  {
    "url": "OpenSource.b982e467.png",
    "revision": "7cc0b7b553e5c418c2bec7e4d990fc2f"
  },
  {
    "url": "OS.6ffb7af8.png",
    "revision": "e572cd39a5af3c7f825b1b4a7220ac19"
  },
  {
    "url": "PI6.70fb1d6b.png",
    "revision": "f02a2ab4ab1437d41c95ec477cafc08f"
  },
  {
    "url": "poster.e09fd0fd.png",
    "revision": "25e3e2457a3db60eeddebe2b69cd841a"
  },
  {
    "url": "QE.961d4df2.png",
    "revision": "8e372436cefdc3996c39da0fc4a7f64a"
  },
  {
    "url": "qinglinbo.6cc006f5.png",
    "revision": "e91c475e9df649ea1421888a70b380bc"
  },
  {
    "url": "QRGJ.a0100231.png",
    "revision": "c8db5e10132bc37f00f457b64770ada6"
  },
  {
    "url": "Quincy Larson.492cd7fc.png",
    "revision": "c1de2807ea81c61987414a3ba733802a"
  },
  {
    "url": "React Admin.26d3f349.png",
    "revision": "add20f87056f2c521cdb073774ead9b6"
  },
  {
    "url": "scdaily.eec3b47e.png",
    "revision": "d6b6d63cb89342b9b62dede75df4f070"
  },
  {
    "url": "sctv.9b257b56.png",
    "revision": "8a290b0d639c1fa8151049cd3d225c90"
  },
  {
    "url": "SegmentFault.70cab6df.png",
    "revision": "ef50daaf48b70f1fc812802d70a1aa6c"
  },
  {
    "url": "SF.f7583955.png",
    "revision": "087316dbdaa3e0460edaaf96e0a46129"
  },
  {
    "url": "shenchangkun.e2a6e60c.png",
    "revision": "02b308a385fb895fa579552ad2249049"
  },
  {
    "url": "Si Yue.bc578f5d.png",
    "revision": "837f0091c841830684f71dc5de8b3be4"
  },
  {
    "url": "sinasc.669073d3.png",
    "revision": "48867e7f6d42f2ada7982504490933f7"
  },
  {
    "url": "source.0e7ef271.js",
    "revision": "cde1a2ab688c3895aa592186114315b6"
  },
  {
    "url": "source.5759307e.css",
    "revision": "bad7ebec2923e1596cb7222c65d6a8b3"
  },
  {
    "url": "sponsor-bg.4ee151f0.png",
    "revision": "840d7e403cf3adca2bdd9d2c44236499"
  },
  {
    "url": "SYL.c7839c66.png",
    "revision": "1f38dfbe2d7ec0363ff65067451f857f"
  },
  {
    "url": "tap4fun.78d756d4.png",
    "revision": "8069eff3e27196251df3ef85fdfe82bd"
  },
  {
    "url": "tedxChengDu.bfe110c9.png",
    "revision": "da1c31824376e5bcc9bda5f96dc1f52a"
  },
  {
    "url": "TH.2feb476e.png",
    "revision": "77df5bc10277559425cd0bf29f609396"
  },
  {
    "url": "ThoughtWorks.428ee058.png",
    "revision": "1a7b197731340c9a924f32c0ef560adf"
  },
  {
    "url": "TW.2bd42661.png",
    "revision": "cf0b393c2cedac701843b091df97c0bb"
  },
  {
    "url": "UKylin.44794a63.png",
    "revision": "f4265f91dc2bc018121d75fc870ad70d"
  },
  {
    "url": "undraw_01.c29a23f9.png",
    "revision": "897255c2d3086c1348eaf1e8a8c4e26c"
  },
  {
    "url": "undraw_02.c9918202.png",
    "revision": "32c66205d2b7a2faf4d2f27678fa1cc1"
  },
  {
    "url": "undraw_04.212cb820.png",
    "revision": "0e87d2bffbfcdec56cb3df8e4aa632b0"
  },
  {
    "url": "Vena Network.3abb864c.png",
    "revision": "622579387a8be98e8f54fae32f1d641a"
  },
  {
    "url": "WebCell.fb612fdb.png",
    "revision": "8b65bb1489bd2f9065519c9f446e542d"
  },
  {
    "url": "WORK.6f937897.png",
    "revision": "b5788a75d9351f23b6222e44890a8c66"
  },
  {
    "url": "XinYaoHang.d76877e6.png",
    "revision": "45a2c29448c68381f15dbfeedafefddb"
  },
  {
    "url": "Xiong Jie.a7cb6fdd.png",
    "revision": "bcab8a2fcaa5c94d4235f6e8d8054e87"
  },
  {
    "url": "young.3e1da8cf.png",
    "revision": "a161aa16a97f075b7d42fafe59f51a06"
  },
  {
    "url": "Yu Che.a609d608.png",
    "revision": "e460f35c5a94022691cc005153d73695"
  },
  {
    "url": "yunpian.0181c0ee.png",
    "revision": "2e5f193691b715bd5a05ef5fb8354535"
  },
  {
    "url": "ZDK.fc5aaabf.png",
    "revision": "0e2dc061659c8fe19f8dc581df53ae48"
  },
  {
    "url": "zh-CN.82999ab1.js",
    "revision": "7b9cadc5c1b940c1b9730c864432c0c2"
  },
  {
    "url": "zhangwei.58451c21.png",
    "revision": "a7b2f86d2c698acf841db8d35b905171"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
