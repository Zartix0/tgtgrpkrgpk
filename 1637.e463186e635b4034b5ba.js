(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([[1637], {
  18171: (e,t,s)=>{
      "use strict";
      s.d(t, {
          Z: ()=>n
      });
      class n {
          constructor(e) {
              this.isUpload = e
          }
      }
  }
  ,
  78058: (e,t,s)=>{
      "use strict";
      s.d(t, {
          k: ()=>i
      });
      var n = s(59187)
        , a = s(9668);

      function i(e, t) {
          if (e.text)
              return !t && 1 === Object.keys(e).length && !e.text.entities?.some((e=>e.type !== n.Vv.CustomEmoji)) && (0,
              a.Z)(e.text.text) || void 0
      }
  }
  ,
  89618: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(24736)
        , i = s(66842);

      function r(e, t=!0, s=!1) {
          let i = n.from(e);
          const r = i.length;
          t && (i = i.reverse());
          let o = a(i.toString("hex"), 16);
          return s && Math.floor(o.toString(2).length / 8) >= r && (o = o.subtract(a(2).pow(a(8 * r)))),
          o
      }

      function o(e, t=8) {
          const s = a(e)
            , i = [];
          for (let e = 0; e < t; e++)
              i[e] = s.shiftRight(8 * e).and(255);
          return n.from(i)
      }

      function l(e, t, s=!0, i=!1) {
          const r = (e = a(e)).bitLength().toJSNumber();
          if (t < Math.ceil(r / 8))
              throw new Error("OverflowError: int too big to convert");
          if (!i && e.lesser(a(0)))
              throw new Error("Cannot convert to unsigned");
          let o = !1;
          e.lesser(a(0)) && (o = !0,
          e = e.abs());
          const l = e.toString(16).padStart(2 * t, "0");
          let c = n.from(l, "hex");
          if (i && o) {
              c[c.length - 1] = 256 - c[c.length - 1];
              for (let e = 0; e < c.length - 1; e++)
                  c[e] = 255 - c[e]
          }
          return s && (c = c.reverse()),
          c
      }

      function c(e) {
          return n.from(i.randomBytes(e))
      }

      function d(e) {
          const t = i.createHash("sha1");
          return t.update(e),
          t.digest()
      }
      let g;
      e.exports = {
          readBigIntFromBuffer: r,
          readBufferFromBigInt: l,
          generateRandomLong: function(e=!0) {
              return r(c(8), !0, e)
          },
          mod: function(e, t) {
              return (e % t + t) % t
          },
          crc32: function(e) {
              g || (g = function() {
                  let e;
                  const t = [];
                  for (let s = 0; s < 256; s++) {
                      e = s;
                      for (let t = 0; t < 8; t++)
                          e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                      t[s] = e
                  }
                  return t
              }()),
              n.isBuffer(e) || (e = n.from(e));
              let t = -1;
              for (let s = 0; s < e.length; s++) {
                  const n = e[s];
                  t = g[255 & (t ^ n)] ^ t >>> 8
              }
              return (-1 ^ t) >>> 0
          },
          generateRandomBytes: c,
          generateKeyDataFromNonce: async function(e, t) {
              e = o(e, 16),
              t = o(t, 32);
              const [s,a,i] = await Promise.all([d(n.concat([t, e])), d(n.concat([e, t])), d(n.concat([t, t]))]);
              return {
                  key: n.concat([s, a.slice(0, 12)]),
                  iv: n.concat([a.slice(12, 20), i, t.slice(0, 4)])
              }
          },
          sha1: d,
          sha256: function(e) {
              const t = i.createHash("sha256");
              return t.update(e),
              t.digest()
          },
          bigIntMod: function(e, t) {
              return e.remainder(t).add(t).remainder(t)
          },
          modExp: function(e, t, s) {
              e = e.remainder(s);
              let n = a.one
                , i = e;
              for (; t.greater(a.zero); ) {
                  const e = t.remainder(a(2));
                  t = t.divide(a(2)),
                  e.eq(a.one) && (n = n.multiply(i),
                  n = n.remainder(s)),
                  i = i.multiply(i),
                  i = i.remainder(s)
              }
              return n
          },
          getRandomInt: function(e, t) {
              return e = Math.ceil(e),
              t = Math.floor(t),
              Math.floor(Math.random() * (t - e + 1)) + e
          },
          sleep: e=>new Promise((t=>{
              setTimeout(t, e)
          }
          )),
          getByteArray: function(e, t=!1) {
              const s = e.toString(2).length
                , n = Math.floor((s + 8 - 1) / 8);
              return l(a(e), n, !1, t)
          },
          toSignedLittleBuffer: o,
          convertToLittle: function(e) {
              const t = n.alloc(4 * e.length);
              for (let s = 0; s < e.length; s++)
                  t.writeUInt32BE(e[s], 4 * s);
              return t
          },
          bufferXor: function(e, t) {
              const s = [];
              for (let n = 0; n < e.length; n++)
                  s.push(e[n] ^ t[n]);
              return n.from(s)
          }
      }
  }
  ,
  59674: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(24736)
        , {constructors: i} = s(57404)
        , {readBigIntFromBuffer: r, readBufferFromBigInt: o, sha256: l, bigIntMod: c, modExp: d, generateRandomBytes: g} = s(89618)
        , u = s(66842);

      function p(e, t) {
          if (!n.from([199, 28, 174, 185, 198, 177, 201, 4, 142, 108, 82, 47, 112, 241, 63, 115, 152, 13, 64, 35, 142, 62, 33, 193, 73, 52, 208, 55, 86, 61, 147, 15, 72, 25, 138, 10, 167, 193, 64, 88, 34, 148, 147, 210, 37, 48, 244, 219, 250, 51, 111, 110, 10, 201, 37, 19, 149, 67, 174, 212, 76, 206, 124, 55, 32, 253, 81, 246, 148, 88, 112, 90, 198, 140, 212, 254, 107, 107, 19, 171, 220, 151, 70, 81, 41, 105, 50, 132, 84, 241, 143, 175, 140, 89, 95, 100, 36, 119, 254, 150, 187, 42, 148, 29, 91, 205, 29, 74, 200, 204, 73, 136, 7, 8, 250, 155, 55, 142, 60, 79, 58, 144, 96, 190, 230, 124, 249, 164, 164, 166, 149, 129, 16, 81, 144, 126, 22, 39, 83, 181, 107, 15, 107, 65, 13, 186, 116, 216, 168, 75, 42, 20, 179, 20, 78, 14, 241, 40, 71, 84, 253, 23, 237, 149, 13, 89, 101, 180, 185, 221, 70, 88, 45, 177, 23, 141, 22, 156, 107, 196, 101, 176, 214, 255, 156, 163, 146, 143, 239, 91, 154, 228, 228, 24, 252, 21, 232, 62, 190, 160, 248, 127, 169, 255, 94, 237, 112, 5, 13, 237, 40, 73, 244, 123, 249, 89, 217, 86, 133, 12, 233, 41, 133, 31, 13, 129, 21, 246, 53, 177, 5, 238, 46, 78, 21, 208, 75, 36, 84, 191, 111, 79, 173, 240, 52, 177, 4, 3, 17, 156, 216, 227, 185, 47, 204, 91]).equals(e) || ![3, 4, 5, 7].includes(t))
              throw new Error("Changing passwords unsupported")
      }

      function f(e) {
          return n.concat([n.alloc(256 - e.length), e])
      }

      function h(e) {
          return o(e, 256, !1)
      }

      function _(e, t) {
          const s = t.subtract(e);
          return !(s.lesser(a(0)) || s.bitLength() < 1984 || e.bitLength() < 1984 || Math.floor((e.bitLength() + 7) / 8) > 256)
      }

      function m(e, t) {
          const s = Math.min(e.length, t.length);
          for (let n = 0; n < s; n++)
              e[n] ^= t[n];
          return e
      }
      async function b(e, t) {
          const s = await l(n.concat([e.salt1, n.from(t, "utf-8"), e.salt1]))
            , a = await l(n.concat([e.salt2, s, e.salt2]))
            , i = await function(e, t, s) {
              return u.pbkdf2(e, t, 1e5, 64, "sha512")
          }(a, e.salt1);
          return l(n.concat([e.salt2, i, e.salt2]))
      }
      e.exports = {
          computeCheck: async function(e, t) {
              const s = e.currentAlgo;
              if (!(s instanceof i.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow))
                  throw new Error(`Unsupported password algorithm ${s.className}`);
              const o = await b(s, t)
                , u = r(s.p, !1)
                , {g: y} = s
                , v = r(e.srp_B, !1);
              try {
                  p(s.p, y)
              } catch (e) {
                  throw new Error("bad /g in password")
              }
              if (!function(e, t) {
                  return e.greater(a(0)) && t.subtract(e).greater(a(0))
              }(v, u))
                  throw new Error("bad b in check");
              const w = r(o, !1)
                , S = f(s.p)
                , P = h(y)
                , C = f(e.srp_B)
                , I = d(a(y), w, u)
                , k = r(await l(n.concat([S, P])), !1)
                , M = c(k.multiply(I), u)
                , [R,A,E] = await (async()=>{
                  for (; ; ) {
                      const e = g(256)
                        , t = r(e, !1)
                        , s = d(a(y), t, u);
                      if (_(s, u)) {
                          const e = h(s)
                            , i = r(await l(n.concat([e, C])), !1);
                          if (i.greater(a(0)))
                              return [t, e, i]
                      }
                  }
              }
              )()
                , V = c(v.subtract(M), u);
              if (!_(V, u))
                  throw new Error("bad gB");
              const T = E.multiply(w)
                , B = R.add(T)
                , x = d(V, B, u)
                , [D,U,F,q,L] = await Promise.all([l(h(x)), l(S), l(P), l(s.salt1), l(s.salt2)])
                , N = await l(n.concat([m(U, F), q, L, A, C, D]));
              return new i.InputCheckPasswordSRP({
                  srpId: e.srpId,
                  A: n.from(A),
                  M1: N
              })
          },
          computeDigest: async function(e, t) {
              try {
                  p(e.p, e.g)
              } catch (e) {
                  throw new Error("bad p/g in password")
              }
              return h(d(a(e.g), r(await b(e, t), !1), r(e.p, !1)))
          }
      }
  }
  ,
  61472: e=>{
      e.exports = "0.0.2"
  }
  ,
  70243: (e,t,s)=>{
      "use strict";
      s.r(t),
      s.d(t, {
          getTmpPassword: ()=>g,
          updateTwoFaSettings: ()=>d
      });
      var n = s(77150)
        , a = s.n(n)
        , i = s(89618)
        , r = s(59674)
        , o = s(87873)
        , l = s.n(o)
        , c = s(48764).lW;
      async function d(e, {isCheckPassword: t, currentPassword: s, newPassword: n, hint: o="", email: d, emailCodeCallback: g, onEmailCodeError: u}) {
          if (!n && !s)
              throw new Error("Neither `currentPassword` nor `newPassword` is present");
          if (d && (!g || !u))
              throw new Error("`email` present without `emailCodeCallback` and `onEmailCodeError`");
          const p = await e.invoke(new (a().account.GetPassword));
          p.newAlgo instanceof a().PasswordKdfAlgoUnknown || (p.newAlgo.salt1 = c.concat([p.newAlgo.salt1, (0,
          i.generateRandomBytes)(32)])),
          !p.hasPassword && s && (s = void 0);
          const f = s ? await (0,
          r.computeCheck)(p, s) : new (a().InputCheckPasswordEmpty);
          if (t)
              await e.invoke(new (a().auth.CheckPassword)({
                  password: f
              }));
          else
              try {
                  await e.invoke(new (a().account.UpdatePasswordSettings)({
                      password: f,
                      newSettings: new (a().account.PasswordInputSettings)({
                          newAlgo: p.newAlgo,
                          newPasswordHash: n ? await (0,
                          r.computeDigest)(p.newAlgo, n) : c.alloc(0),
                          hint: o,
                          email: d,
                          newSecureSettings: void 0
                      })
                  }))
              } catch (t) {
                  if (!(t instanceof l().EmailUnconfirmedError))
                      throw t;
                  for (; ; )
                      try {
                          const s = await g(t.codeLength);
                          if (!s)
                              throw new Error("Code is empty");
                          await e.invoke(new (a().account.ConfirmPasswordEmail)({
                              code: s
                          }));
                          break
                      } catch (e) {
                          u(e)
                      }
              }
      }
      async function g(e, t, s=60) {
          const n = await e.invoke(new (a().account.GetPassword));
          console.log("TF", new (a().account.GetPassword));
          console.log("nigga?", n, e);
          if (!n)
              return;
          const i = await (0,
          r.computeCheck)(n, t);

          try {
              return await e.invoke(new (a().account.GetTmpPassword)({
                  password: i,
                  period: s
              }))
          } catch (e) {
              console.log("niggas?", e);

              if ("PASSWORD_HASH_INVALID" === e.message)
                  return {
                      error: e.message
                  };
              throw e
          }
      }
  }
  ,
  78742: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(67435)
        , i = s(96748)
        , {sleep: r} = s(89618)
        , o = s(87873)
        , l = s(33995)
        , c = s(89618)
        , d = s(48960)
        , g = s(59270)
        , {LAYER: u} = s(70845)
        , {constructors: p, requests: f} = s(57404)
        , {ConnectionTCPObfuscated: h, MTProtoSender: _, UpdateConnectionState: m, HttpConnection: b} = s(18415)
        , {authFlow: y, checkAuthorization: v} = s(21545)
        , {downloadFile: w} = s(52288)
        , {uploadFile: S} = s(74766)
        , {updateTwoFaSettings: P, getTmpPassword: C} = s(70243)
        , I = s(44287)
        , k = s(46586).Z
        , M = 131072
        , R = ["u", "v", "w", "y", "d", "x", "c", "m", "b", "a", "s", "f"];
      class A {
          constructor(e, t, s, n=A.DEFAULT_OPTIONS) {
              if (!t || !s)
                  throw Error('Your API ID or Hash are invalid. Please read "Requirements" on README.md');
              const r = {
                  ...A.DEFAULT_OPTIONS,
                  ...n
              };
              if (this.apiId = t,
              this.apiHash = s,
              this.defaultDcId = r.dcId || 2,
              this._useIPV6 = r.useIPV6,
              this._shouldForceHttpTransport = r.shouldForceHttpTransport,
              this._shouldAllowHttpTransport = r.shouldAllowHttpTransport,
              this._shouldDebugExportedSenders = r.shouldDebugExportedSenders,
              "string" == typeof r.baseLogger ? this._log = new i : this._log = r.baseLogger,
              "string" != typeof e && e) {
                  if (!(e instanceof g))
                      throw new Error("The given session must be str or a session instance")
              } else
                  try {
                      throw new Error("not implemented")
                  } catch (t) {
                      e = new l
                  }
              this.floodSleepLimit = r.floodSleepLimit,
              this._eventBuilders = [],
              this._phoneCodeHash = {},
              this.session = e,
              this.apiId = parseInt(t, 10),
              this.apiHash = s,
              this._requestRetries = r.requestRetries,
              this._connectionRetries = r.connectionRetries,
              this._connectionRetriesToFallback = r.connectionRetriesToFallback,
              this._retryDelay = r.retryDelay || 0,
              this._retryMainConnectionDelay = r.retryMainConnectionDelay || 0,
              r.proxy && this._log.warn("proxies are not supported"),
              this._proxy = r.proxy,
              this._timeout = r.timeout,
              this._autoReconnect = r.autoReconnect,
              this._connection = r.connection,
              this._fallbackConnection = r.fallbackConnection,
              this._floodWaitedRequests = {},
              this._initWith = e=>new f.InvokeWithLayer({
                  layer: u,
                  query: new f.InitConnection({
                      apiId: this.apiId,
                      deviceModel: r.deviceModel || a.type().toString() || "Unknown",
                      systemVersion: r.systemVersion || a.release().toString() || "1.0",
                      appVersion: r.appVersion || "1.0",
                      langCode: r.langCode,
                      langPack: "weba",
                      systemLangCode: r.systemLangCode,
                      query: e,
                      proxy: void 0
                  })
              }),
              this._args = r,
              this._config = void 0,
              this.phoneCodeHashes = [],
              this._exportedSenderPromises = {},
              this._exportedSenderRefCounter = {},
              this._waitingForAuthKey = {},
              this._exportedSenderReleaseTimeouts = {},
              this._additionalDcsDisabled = r.additionalDcsDisabled,
              this._loopStarted = !1,
              this._isSwitchingDc = !1,
              this._destroyed = !1,
              this._connectedDeferred = new k
          }
          async connect() {
              await this._initSession(),
              void 0 === this._sender && (this._sender = new _(this.session.getAuthKey(),{
                  logger: this._log,
                  dcId: this.session.dcId,
                  retries: this._connectionRetries,
                  retriesToFallback: this._connectionRetriesToFallback,
                  shouldForceHttpTransport: this._shouldForceHttpTransport,
                  shouldAllowHttpTransport: this._shouldAllowHttpTransport,
                  delay: this._retryDelay,
                  retryMainConnectionDelay: this._retryMainConnectionDelay,
                  autoReconnect: this._autoReconnect,
                  connectTimeout: this._timeout,
                  authKeyCallback: this._authKeyCallback.bind(this),
                  updateCallback: this._handleUpdate.bind(this),
                  getShouldDebugExportedSenders: this.getShouldDebugExportedSenders.bind(this),
                  isMainSender: !0
              })),
              this._sender.userDisconnected = !1,
              this._sender._user_connected = !1,
              this._sender.isReconnecting = !1,
              this._sender._disconnected = !0;
              const e = new this._connection(this.session.serverAddress,this.session.port,this.session.dcId,this._log,this._args.testServers)
                , t = new this._fallbackConnection(this.session.serverAddress,this.session.port,this.session.dcId,this._log,this._args.testServers);
              await this._sender.connect(e, void 0, t) ? (this.session.setAuthKey(this._sender.authKey),
              await this._sender.send(this._initWith(new f.help.GetConfig({}))),
              this._loopStarted || (this._updateLoop(),
              this._loopStarted = !0),
              this._connectedDeferred.resolve(),
              this._isSwitchingDc = !1) : this._loopStarted || (this._updateLoop(),
              this._loopStarted = !0)
          }
          async _initSession() {
              if (await this.session.load(),
              !this.session.serverAddress || this.session.serverAddress.includes(":") !== this._useIPV6) {
                  const e = d.getDC(this.defaultDcId);
                  this.session.setDC(this.defaultDcId, e.ipAddress, this._args.useWSS ? 443 : 80)
              }
          }
          setPingCallback(e) {
              this.pingCallback = e
          }
          async setForceHttpTransport(e) {
              this._shouldForceHttpTransport = e,
              await this.disconnect(),
              this._sender = void 0,
              await this.connect()
          }
          async setAllowHttpTransport(e) {
              this._shouldAllowHttpTransport = e,
              await this.disconnect(),
              this._sender = void 0,
              await this.connect()
          }
          setShouldDebugExportedSenders(e) {
              this._shouldDebugExportedSenders = e
          }
          getShouldDebugExportedSenders() {
              return this._shouldDebugExportedSenders
          }
          async _updateLoop() {
              let e;
              for (; !this._destroyed; )
                  if (await c.sleep(3e3),
                  this._sender.isReconnecting || this._isSwitchingDc)
                      e = void 0;
                  else {
                      try {
                          const t = ()=>{
                              if (!this._destroyed)
                                  return this._sender.send(new f.PingDelayDisconnect({
                                      pingId: c.getRandomInt(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
                                      disconnectDelay: 6e4
                                  }))
                          }
                            , s = Date.now()
                            , n = e ? s - e : void 0;
                          if (!n || n < 5e3)
                              await D((()=>x(t, 5e3)), 3, 100);
                          else {
                              let e = setTimeout((()=>{
                                  this._handleUpdate(new m(m.disconnected)),
                                  e = void 0
                              }
                              ), 1e3);
                              await x(t, 3e3),
                              e && (clearTimeout(e),
                              e = void 0),
                              this._handleUpdate(new m(m.connected))
                          }
                          e = Date.now()
                      } catch (t) {
                          if (console.warn(t),
                          e = void 0,
                          this._sender.isReconnecting || this._isSwitchingDc)
                              continue;
                          if (this._destroyed)
                              break;
                          this._sender.reconnect()
                      }
                      if (Date.now() - this._lastRequest > 18e5) {
                          try {
                              await this.pingCallback()
                          } catch (e) {}
                          e = void 0
                      }
                  }
              await this.disconnect()
          }
          async disconnect() {
              this._sender && await this._sender.disconnect(),
              await Promise.all(Object.values(this._exportedSenderPromises).map((e=>Object.values(e).map((e=>e && e.then((e=>{
                  if (e)
                      return e.disconnect()
              }
              )))))).flat()),
              Object.values(this._exportedSenderReleaseTimeouts).forEach((e=>{
                  Object.values(e).forEach((e=>{
                      clearTimeout(e)
                  }
                  ))
              }
              )),
              this._exportedSenderRefCounter = {},
              this._exportedSenderPromises = {},
              this._waitingForAuthKey = {}
          }
          async destroy() {
              this._destroyed = !0;
              try {
                  await this.disconnect(),
                  this._sender.destroy()
              } catch (e) {}
              this.session.delete(),
              this._eventBuilders = []
          }
          async _switchDC(e) {
              this._log.info(`Reconnecting to new data center ${e}`);
              const t = d.getDC(e);
              return this.session.setDC(e, t.ipAddress, t.port),
              await this._sender.authKey.setKey(void 0),
              this.session.setAuthKey(void 0),
              this._isSwitchingDc = !0,
              await this.disconnect(),
              this._sender = void 0,
              this.connect()
          }
          _authKeyCallback(e, t) {
              this.session.setAuthKey(e, t)
          }
          async _cleanupExportedSender(e, t) {
              this.session.dcId !== e && this.session.setAuthKey(void 0, e),
              this._shouldDebugExportedSenders && console.log(`🧹 Cleanup idx=${t} dcId=${e}`);
              const s = await this._exportedSenderPromises[e][t];
              delete this._exportedSenderPromises[e][t],
              delete this._exportedSenderRefCounter[e][t],
              await s.disconnect()
          }
          async _cleanupExportedSenders(e) {
              const t = Object.values(this._exportedSenderPromises[e]);
              t.length && (this.session.dcId !== e && this.session.setAuthKey(void 0, e),
              this._exportedSenderPromises[e] = {},
              this._exportedSenderRefCounter[e] = {},
              await Promise.all(t.map((async e=>{
                  const t = await e;
                  await t.disconnect()
              }
              ))))
          }
          async _connectSender(e, t, s, n=!1) {
              let a, i = Boolean(e.authKey.getKey());
              if (!i)
                  if (this._waitingForAuthKey[t]) {
                      await this._waitingForAuthKey[t];
                      const s = this.session.getAuthKey(t);
                      await e.authKey.setKey(s.getKey()),
                      i = Boolean(e.authKey.getKey())
                  } else
                      this._waitingForAuthKey[t] = new Promise((e=>{
                          a = e
                      }
                      ));
              const r = d.getDC(t, i);
              for (; ; )
                  try {
                      if (await e.connect(new this._connection(r.ipAddress,r.port,t,this._log,this._args.testServers,!!i && n), void 0, new this._fallbackConnection(r.ipAddress,r.port,t,this._log,this._args.testServers,!!i && n)),
                      this.session.dcId !== t && !e._authenticated) {
                          this._log.info(`Exporting authorization for data center ${r.ipAddress}`);
                          const s = await this.invoke(new f.auth.ExportAuthorization({
                              dcId: t
                          }))
                            , n = this._initWith(new f.auth.ImportAuthorization({
                              id: s.id,
                              bytes: s.bytes
                          }));
                          await e.send(n),
                          e._authenticated = !0
                      }
                      return e.dcId = t,
                      e.userDisconnected = !1,
                      a && (a(),
                      delete this._waitingForAuthKey[t]),
                      this._shouldDebugExportedSenders && console.warn(`✅ Connected to exported sender idx=${s} dc=${t}`),
                      e
                  } catch (n) {
                      this._shouldDebugExportedSenders && console.error(`☠️ ERROR! idx=${s} dcId=${t} ${n.message}`),
                      console.error(n),
                      await c.sleep(1e3),
                      await e.disconnect()
                  }
          }
          releaseExportedSender(e) {
              const t = e._dcId
                , s = e._senderIndex;
              this._exportedSenderRefCounter[t] && this._exportedSenderRefCounter[t][s] && (this._exportedSenderRefCounter[t][s] -= 1,
              this._exportedSenderRefCounter[t][s] <= 0 && (this._exportedSenderReleaseTimeouts[t] || (this._exportedSenderReleaseTimeouts[t] = {}),
              this._exportedSenderReleaseTimeouts[t][s] = setTimeout((()=>{
                  this._shouldDebugExportedSenders && console.log(`[CC] [idx=${s} dcId=${t}] 🚪 Release`),
                  e.disconnect(),
                  this._exportedSenderReleaseTimeouts[t][s] = void 0,
                  this._exportedSenderPromises[t][s] = void 0
              }
              ), 3e4)))
          }
          async _borrowExportedSender(e, t, s, n, a) {
              if (this._additionalDcsDisabled)
                  return;
              const i = n || 0;
              let r;
              this._exportedSenderPromises[e] || (this._exportedSenderPromises[e] = {}),
              this._exportedSenderRefCounter[e] || (this._exportedSenderRefCounter[e] = {}),
              this._exportedSenderPromises[e][i] && !t || (this._shouldDebugExportedSenders && console.warn(`🕒 Connecting to exported sender idx=${i} dc=${e} ` + (t ? "(reconnect)" : "")),
              this._exportedSenderRefCounter[e][i] = 0,
              this._exportedSenderPromises[e][i] = this._connectSender(s || this._createExportedSender(e, i), e, n, a));
              try {
                  if (r = await this._exportedSenderPromises[e][i],
                  !r.isConnected())
                      return r.isConnecting ? (await c.sleep(1e3),
                      this._borrowExportedSender(e, !1, r, i, a)) : this._borrowExportedSender(e, !0, r, i, a)
              } catch (t) {
                  return console.error(t),
                  this._borrowExportedSender(e, !0, void 0, i, a)
              }
              return this._exportedSenderRefCounter[e][i] += 1,
              this._exportedSenderReleaseTimeouts[e] || (this._exportedSenderReleaseTimeouts[e] = {}),
              this._exportedSenderReleaseTimeouts[e][i] && (clearTimeout(this._exportedSenderReleaseTimeouts[e][i]),
              this._exportedSenderReleaseTimeouts[e][i] = void 0),
              r
          }
          _createExportedSender(e, t) {
              return new _(this.session.getAuthKey(e),{
                  logger: this._log,
                  dcId: e,
                  senderIndex: t,
                  retries: this._connectionRetries,
                  retriesToFallback: this._connectionRetriesToFallback,
                  delay: this._retryDelay,
                  retryMainConnectionDelay: this._retryMainConnectionDelay,
                  shouldForceHttpTransport: this._shouldForceHttpTransport,
                  shouldAllowHttpTransport: this._shouldAllowHttpTransport,
                  autoReconnect: this._autoReconnect,
                  connectTimeout: this._timeout,
                  authKeyCallback: this._authKeyCallback.bind(this),
                  isMainSender: e === this.session.dcId,
                  isExported: !0,
                  updateCallback: this._handleUpdate.bind(this),
                  getShouldDebugExportedSenders: this.getShouldDebugExportedSenders.bind(this),
                  onConnectionBreak: ()=>this._cleanupExportedSender(e, t)
              })
          }
          getSender(e, t, s) {
              return e ? this._borrowExportedSender(e, void 0, void 0, t, s) : Promise.resolve(this._sender)
          }
          downloadFile(e, t={}) {
              return w(this, e, t, this._shouldDebugExportedSenders)
          }
          downloadMedia(e, t) {
              let s;
              if (s = e instanceof p.Message || e instanceof p.StoryItem ? e.media : e instanceof p.MessageService ? e.action.photo : e,
              "string" == typeof s)
                  throw new Error("not implemented");
              return s instanceof p.MessageMediaWebPage && s.webpage instanceof p.WebPage && (s = s.webpage.document || s.webpage.photo),
              s instanceof p.MessageMediaPhoto || s instanceof p.Photo ? this._downloadPhoto(s, t) : s instanceof p.MessageMediaDocument || s instanceof p.Document ? this._downloadDocument(s, t) : s instanceof p.MessageMediaContact ? this._downloadContact(s, t) : s instanceof p.WebDocument || s instanceof p.WebDocumentNoProxy ? this._downloadWebDocument(s, t) : void 0
          }
          downloadProfilePhoto(e, t=!1) {
              const s = t ? "x" : "m";
              let n, a, i;
              if ([765557111, 3316604308, 524706233, 3566872215].includes(e.SUBCLASS_OF_ID)) {
                  if (!e.photo) {
                      if (!e.chatPhoto)
                          return;
                      return this._downloadPhoto(e.chatPhoto, {
                          sizeType: s
                      })
                  }
                  n = e.photo
              } else
                  n = e;
              if (n instanceof p.UserProfilePhoto || n instanceof p.ChatPhoto)
                  return a = n.dcId,
                  i = new p.InputPeerPhotoFileLocation({
                      peer: d.getInputPeer(e),
                      photoId: n.photoId,
                      big: t
                  }),
                  this.downloadFile(i, {
                      dcId: a
                  })
          }
          downloadStickerSetThumb(e) {
              if (!e.thumbs?.length && !e.thumbDocumentId)
                  return;
              const {thumbVersion: t} = e;
              return e.thumbDocumentId ? this.invoke(new p.messages.GetCustomEmojiDocuments({
                  documentId: [e.thumbDocumentId]
              })).then((e=>{
                  const t = e[0];
                  return this.downloadFile(new p.InputDocumentFileLocation({
                      id: t.id,
                      accessHash: t.accessHash,
                      fileReference: t.fileReference,
                      thumbSize: ""
                  }), {
                      fileSize: t.size.toJSNumber(),
                      dcId: t.dcId
                  })
              }
              )) : this.downloadFile(new p.InputStickerSetThumb({
                  stickerset: new p.InputStickerSetID({
                      id: e.id,
                      accessHash: e.accessHash
                  }),
                  thumbVersion: t
              }), {
                  dcId: e.thumbDcId
              })
          }
          _pickFileSize(e, t) {
              if (!t || !e || !e.length)
                  return;
              let s;
              for (let n = R.indexOf(t); n < R.length; n++)
                  if (s = e.find((e=>e.type === R[n])),
                  s)
                      return s
          }
          _downloadCachedPhotoSize(e) {
              let t;
              return t = e instanceof p.PhotoStrippedSize ? d.strippedPhotoToJpg(e.bytes) : e.bytes,
              t
          }
          _downloadPhoto(e, t) {
              if (e instanceof p.MessageMediaPhoto && (e = e.photo),
              !(e instanceof p.Photo))
                  return;
              const s = "u" === t.sizeType || "v" === t.sizeType
                , n = this._pickFileSize(s ? [...e.videoSizes, ...e.sizes] : e.sizes, t.sizeType);
              return !n || n instanceof p.PhotoSizeEmpty ? void 0 : n instanceof p.PhotoCachedSize || n instanceof p.PhotoStrippedSize ? this._downloadCachedPhotoSize(n) : this.downloadFile(new p.InputPhotoFileLocation({
                  id: e.id,
                  accessHash: e.accessHash,
                  fileReference: e.fileReference,
                  thumbSize: n.type
              }), {
                  dcId: e.dcId,
                  fileSize: n.size || Math.max(...n.sizes || []),
                  progressCallback: t.progressCallback
              })
          }
          _downloadDocument(e, t) {
              if (e instanceof p.MessageMediaDocument && (e = e.document),
              !(e instanceof p.Document))
                  return;
              let s;
              if (t.sizeType) {
                  if (s = e.thumbs ? this._pickFileSize([...e.videoThumbs || [], ...e.thumbs], t.sizeType) : void 0,
                  !s && e.mimeType.startsWith("video/"))
                      return;
                  if (s && (s instanceof p.PhotoCachedSize || s instanceof p.PhotoStrippedSize))
                      return this._downloadCachedPhotoSize(s)
              }
              return this.downloadFile(new p.InputDocumentFileLocation({
                  id: e.id,
                  accessHash: e.accessHash,
                  fileReference: e.fileReference,
                  thumbSize: s ? s.type : ""
              }), {
                  fileSize: s ? s.size : e.size.toJSNumber(),
                  progressCallback: t.progressCallback,
                  start: t.start,
                  end: t.end,
                  dcId: e.dcId,
                  workers: t.workers
              })
          }
          _downloadContact(e, t) {
              throw new Error("not implemented")
          }
          async _downloadWebDocument(e) {
              if (e.url && !("accessHash"in e)) {
                  const t = await fetch(e.url).then((e=>e.arrayBuffer()));
                  return n.from(t)
              }
              try {
                  const t = [];
                  let s = 0;
                  for (; ; ) {
                      const n = new f.upload.GetWebFile({
                          location: new p.InputWebFileLocation({
                              url: e.url,
                              accessHash: e.accessHash
                          }),
                          offset: s,
                          limit: M
                      })
                        , a = await this._borrowExportedSender(4)
                        , i = await a.send(n);
                      if (this.releaseExportedSender(a),
                      s += 131072,
                      !i.bytes.length)
                          break;
                      if (t.push(i.bytes),
                      i.bytes.length < M)
                          break
                  }
                  return n.concat(t)
              } catch (e) {
                  if ("WEBFILE_NOT_AVAILABLE" === e.message)
                      return n.alloc(0);
                  throw e
              }
          }
          async downloadStaticMap(e, t, s, a, i, l, c, d) {
              try {
                  const g = [];
                  let u = 0;
                  for (; ; )
                      try {
                          const n = new f.upload.GetWebFile({
                              location: new p.InputWebFileGeoPointLocation({
                                  geoPoint: new p.InputGeoPoint({
                                      lat: s,
                                      long: t,
                                      accuracyRadius: d
                                  }),
                                  accessHash: e,
                                  w: a,
                                  h: i,
                                  zoom: l,
                                  scale: c
                              }),
                              offset: u,
                              limit: M
                          })
                            , r = await this._borrowExportedSender(4)
                            , o = await r.send(n);
                          if (this.releaseExportedSender(r),
                          u += 131072,
                          !o.bytes.length)
                              break;
                          if (g.push(o.bytes),
                          o.bytes.length < M)
                              break
                      } catch (e) {
                          if (e instanceof o.FloodWaitError) {
                              console.warn(`getWebFile: sleeping for ${e.seconds}s on flood wait`),
                              await r(1e3 * e.seconds);
                              continue
                          }
                      }
                  return n.concat(g)
              } catch (e) {
                  if ("WEBFILE_NOT_AVAILABLE" === e.message)
                      return n.alloc(0);
                  throw e
              }
          }
          async invoke(e, t, s, n=!1) {
              if ("request" !== e.classType)
                  throw new Error("You can only invoke MTProtoRequests");
              const a = void 0 !== t;
              let i = a ? await this.getSender(t) : this._sender;
              this._lastRequest = Date.now(),
              await this._connectedDeferred.promise;
              const l = new I(e,s);
              let c = 0;
              for (c = 0; c < this._requestRetries; c++) {
                  i.addStateToQueue(l);
                  try {
                      const e = await l.promise;
                      return l.finished.resolve(),
                      a && this.releaseExportedSender(i),
                      e
                  } catch (e) {
                      if (e instanceof o.ServerError || "RPC_CALL_FAIL" === e.message || "RPC_MCGET_FAIL" === e.message)
                          this._log.warn(`Telegram is having internal issues ${e.constructor.name}`),
                          await r(2e3);
                      else if (e instanceof o.FloodWaitError || e instanceof o.FloodTestPhoneWaitError) {
                          if (!(e.seconds <= this.floodSleepLimit))
                              throw l.finished.resolve(),
                              a && this.releaseExportedSender(i),
                              e;
                          this._log.info(`Sleeping for ${e.seconds}s on flood wait`),
                          await r(1e3 * e.seconds)
                      } else if (e instanceof o.PhoneMigrateError || e instanceof o.NetworkMigrateError || e instanceof o.UserMigrateError) {
                          if (this._log.info(`Phone migrated to ${e.newDc}`),
                          (e instanceof o.PhoneMigrateError || e instanceof o.NetworkMigrateError) && await v(this))
                              throw l.finished.resolve(),
                              a && this.releaseExportedSender(i),
                              e;
                          await this._switchDC(e.newDc),
                          a && this.releaseExportedSender(i),
                          i = void 0 === t ? this._sender : await this.getSender(t)
                      } else if (e instanceof o.MsgWaitError)
                          await l.isReady(),
                          l.after = void 0;
                      else if ("CONNECTION_NOT_INITED" === e.message)
                          await this.disconnect(),
                          await r(2e3),
                          await this.connect();
                      else {
                          if (!(e instanceof o.TimedOutError))
                              throw l.finished.resolve(),
                              a && this.releaseExportedSender(i),
                              e;
                          if (!n)
                              throw l.finished.resolve(),
                              a && this.releaseExportedSender(i),
                              e
                      }
                  }
                  l.resetPromise()
              }
              throw a && this.releaseExportedSender(i),
              new Error(`Request was unsuccessful ${c} time(s)`)
          }
          async invokeBeacon(e, t) {
              if ("request" !== e.classType)
                  throw new Error("You can only invoke MTProtoRequests");
              const s = void 0 !== t
                , n = s ? await this.getSender(t) : this._sender;
              n.sendBeacon(e),
              s && this.releaseExportedSender(n)
          }
          setIsPremium(e) {
              this.isPremium = e
          }
          async getMe() {
              try {
                  return (await this.invoke(new f.users.GetUsers({
                      id: [new p.InputUserSelf]
                  })))[0]
              } catch (e) {
                  this._log.warn("error while getting me"),
                  this._log.warn(e)
              }
          }
          async start(e) {
              if (this.isConnected() || await this.connect(),
              await v(this, e.shouldThrowIfUnauthorized))
                  return;
              const t = {
                  apiId: this.apiId,
                  apiHash: this.apiHash
              };
              await y(this, t, e)
          }
          uploadFile(e) {
              return S(this, e, this._shouldDebugExportedSenders)
          }
          updateTwoFaSettings(e) {
              return P(this, e)
          }
          getTmpPassword(e, t) {
              return C(this, e, t)
          }
          addEventHandler(e, t) {
              this._eventBuilders.push([t, e])
          }
          _handleUpdate(e) {
              if (e instanceof p.Updates || e instanceof p.UpdatesCombined) {
                  const t = [];
                  for (const s of [...e.users, ...e.chats])
                      t.push(s);
                  this._processUpdate(e, t)
              } else
                  e instanceof p.UpdateShort ? this._processUpdate(e.update, void 0) : this._processUpdate(e, void 0)
          }
          _processUpdate(e, t) {
              e._entities = t || [];
              const s = {
                  update: e
              };
              this._dispatchUpdate(s)
          }
          async _dispatchUpdate(e={
              update: void 0
          }) {
              for (const [t,s] of this._eventBuilders) {
                  const n = t.build(e.update);
                  n && await s(n)
              }
          }
          isConnected() {
              return !(!this._sender || !this._sender.isConnected())
          }
      }
      var E, V, T, B;

      function x(e, t) {
          let s = !1;
          return Promise.race([e(), c.sleep(t).then((()=>s ? void 0 : Promise.reject(new Error("TIMEOUT"))))]).finally((()=>{
              s = !0
          }
          ))
      }
      async function D(e, t, s) {
          for (let n = 0; n < t; n++)
              try {
                  return await e()
              } catch (e) {
                  if (n === t - 1)
                      throw e;
                  await c.sleep(s)
              }
      }
      E = A,
      T = {
          connection: h,
          fallbackConnection: b,
          useIPV6: !1,
          proxy: void 0,
          timeout: 10,
          requestRetries: 5,
          connectionRetries: 1 / 0,
          connectionRetriesToFallback: 1,
          retryDelay: 1e3,
          retryMainConnectionDelay: 1e4,
          autoReconnect: !0,
          sequentialUpdates: !1,
          floodSleepLimit: 60,
          deviceModel: void 0,
          systemVersion: void 0,
          appVersion: void 0,
          langCode: "en",
          systemLangCode: "en",
          baseLogger: "gramjs",
          useWSS: !1,
          additionalDcsDisabled: !1,
          testServers: !1,
          dcId: 2,
          shouldAllowHttpTransport: !1,
          shouldForceHttpTransport: !1,
          shouldDebugExportedSenders: !1
      },
      (V = "symbol" == typeof (B = function(e, t) {
          if ("object" != typeof e || !e)
              return e;
          var s = e[Symbol.toPrimitive];
          if (void 0 !== s) {
              var n = s.call(e, "string");
              if ("object" != typeof n)
                  return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
      }(V = "DEFAULT_OPTIONS")) ? B : String(B))in E ? Object.defineProperty(E, V, {
          value: T,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : E[V] = T,
      e.exports = A
  }
  ,
  21545: (e,t,s)=>{
      "use strict";
      s.r(t),
      s.d(t, {
          authFlow: ()=>g,
          checkAuthorization: ()=>p,
          signInUserWithPreferredMethod: ()=>u
      });
      var n = s(77150)
        , a = s.n(n)
        , i = s(48960)
        , r = s.n(i)
        , o = s(89618)
        , l = s(59674);
      const c = "phoneNumber"
        , d = 3e4;
      async function g(e, t, s) {
          let n;
          n = "botAuthToken"in s ? await async function(e, t, s) {
              const {apiId: n, apiHash: i} = t
                , {botAuthToken: r} = s
                , {user: o} = await e.invoke(new (a().auth.ImportBotAuthorization)({
                  apiId: n,
                  apiHash: i,
                  botAuthToken: r
              }));
              return o
          }(e, t, s) : "webAuthToken"in s && s.webAuthToken ? await async function(e, t, s) {
              try {
                  const {apiId: n, apiHash: i} = t
                    , r = await e.invoke(new (a().auth.ImportWebTokenAuthorization)({
                      webAuthToken: s.webAuthToken,
                      apiId: n,
                      apiHash: i
                  }));
                  if (r instanceof a().auth.Authorization)
                      return r.user;
                  throw new Error("SIGN_UP_REQUIRED")
              } catch (n) {
                  return "SESSION_PASSWORD_NEEDED" === n.message ? m(e, 0, s, !0) : (e._log.error(`Failed to login with web token: ${n}`),
                  s.webAuthTokenFailed(),
                  u(e, t, {
                      ...s,
                      webAuthToken: void 0
                  }))
              }
          }(e, t, s) : await u(e, t, s),
          e._log.info("Signed in successfully as", r().getDisplayName(n))
      }

      function u(e, t, s) {
          const {initialMethod: n=c} = s;
          return "phoneNumber" === n ? f(e, t, s) : h(e, t, s)
      }
      async function p(e, t=!1) {
          try {
              return await e.invoke(new (a().updates.GetState)),
              !0
          } catch (e) {
              if ("Disconnect" === e.message || t)
                  throw e;
              return !1
          }
      }
      async function f(e, t, s) {
          let n, i, r, o = !1;
          for (; ; )
              try {
                  if ("function" == typeof s.phoneNumber)
                      try {
                          n = await s.phoneNumber()
                      } catch (n) {
                          if ("RESTART_AUTH_WITH_QR" === n.message)
                              return h(e, t, s);
                          throw n
                      }
                  else
                      n = s.phoneNumber;
                  const a = await _(e, t, n, s.forceSMS);
                  if (i = a.phoneCodeHash,
                  o = a.isCodeViaApp,
                  "string" != typeof i)
                      throw new Error("Failed to retrieve phone code hash");
                  break
              } catch (e) {
                  if ("function" != typeof s.phoneNumber)
                      throw e;
                  s.onError(e)
              }
          let l, c = !1;
          for (; ; )
              try {
                  try {
                      r = await s.phoneCode(o)
                  } catch (n) {
                      if ("RESTART_AUTH" === n.message)
                          return f(e, t, s)
                  }
                  if (!r)
                      throw new Error("Code is empty");
                  const d = await e.invoke(new (a().auth.SignIn)({
                      phoneNumber: n,
                      phoneCodeHash: i,
                      phoneCode: r
                  }));
                  if (d instanceof a().auth.AuthorizationSignUpRequired) {
                      c = !0,
                      l = d.termsOfService;
                      break
                  }
                  return d.user
              } catch (t) {
                  if ("SESSION_PASSWORD_NEEDED" === t.message)
                      return m(e, 0, s);
                  s.onError(t)
              }
          if (c)
              for (; ; )
                  try {
                      const [t,r] = await s.firstAndLastNames();
                      if (!t)
                          throw new Error("First name is required");
                      const {user: o} = await e.invoke(new (a().auth.SignUp)({
                          phoneNumber: n,
                          phoneCodeHash: i,
                          firstName: t,
                          lastName: r
                      }));
                      return l && await e.invoke(new (a().help.AcceptTermsOfService)({
                          id: l.id
                      })),
                      o
                  } catch (e) {
                      s.onError(e)
                  }
          return s.onError(new Error("Auth failed")),
          f(e, t, s)
      }
      async function h(e, t, s) {
          let n = !1;
          const i = (async()=>{
              for (; !n; ) {
                  const t = await e.invoke(new (a().auth.ExportLoginToken)({
                      apiId: Number("2496"),
                      apiHash: "8da85b0d5bfe62527e5b244c209159c3",
                      exceptIds: []
                  }));
                  if (!(t instanceof a().auth.LoginToken))
                      throw new Error("Unexpected");
                  const {token: n, expires: i} = t;
                  await Promise.race([s.qrCode({
                      token: n,
                      expires: i
                  }), (0,
                  o.sleep)(d)])
              }
          }
          )()
            , r = new Promise((t=>{
              e.addEventHandler((e=>{
                  e instanceof a().UpdateLoginToken && t()
              }
              ), {
                  build: e=>e
              })
          }
          ));
          try {
              await Promise.race([r, i])
          } catch (n) {
              if ("RESTART_AUTH" === n.message)
                  return await f(e, t, s);
              throw n
          } finally {
              n = !0
          }
          try {
              const t = await e.invoke(new (a().auth.ExportLoginToken)({
                  apiId: Number("2496"),
                  apiHash: "8da85b0d5bfe62527e5b244c209159c3",
                  exceptIds: []
              }));
              if (t instanceof a().auth.LoginTokenSuccess && t.authorization instanceof a().auth.Authorization)
                  return t.authorization.user;
              if (t instanceof a().auth.LoginTokenMigrateTo) {
                  await e._switchDC(t.dcId);
                  const s = await e.invoke(new (a().auth.ImportLoginToken)({
                      token: t.token
                  }));
                  if (s instanceof a().auth.LoginTokenSuccess && s.authorization instanceof a().auth.Authorization)
                      return s.authorization.user
              }
          } catch (t) {
              if ("SESSION_PASSWORD_NEEDED" === t.message)
                  return m(e, 0, s);
              throw t
          }
          throw void 0
      }
      async function _(e, t, s, n=!1) {
          try {
              const {apiId: i, apiHash: r} = t
                , o = await e.invoke(new (a().auth.SendCode)({
                  phoneNumber: s,
                  apiId: i,
                  apiHash: r,
                  settings: new (a().CodeSettings)
              }));
              if (!(o instanceof a().auth.SentCode))
                  throw Error("Unexpected SentCodeSuccess");
              if (!n || o.type instanceof a().auth.SentCodeTypeSms)
                  return {
                      phoneCodeHash: o.phoneCodeHash,
                      isCodeViaApp: o.type instanceof a().auth.SentCodeTypeApp
                  };
              const l = await e.invoke(new (a().auth.ResendCode)({
                  phoneNumber: s,
                  phoneCodeHash: o.phoneCodeHash
              }));
              if (!(l instanceof a().auth.SentCode))
                  throw Error("Unexpected SentCodeSuccess");
              return {
                  phoneCodeHash: l.phoneCodeHash,
                  isCodeViaApp: l.type instanceof a().auth.SentCodeTypeApp
              }
          } catch (a) {
              if ("AUTH_RESTART" === a.message)
                  return _(e, t, s, n);
              throw a
          }
      }
      async function m(e, t, s, n=!1) {
          for (; ; )
              try {
                  const t = await e.invoke(new (a().account.GetPassword))
                    , i = await s.password(t.hint, n);
                  if (!i)
                      throw new Error("Password is empty");
                  const r = await (0,
                  l.computeCheck)(t, i)
                    , {user: o} = await e.invoke(new (a().auth.CheckPassword)({
                      password: r
                  }));
                  return o
              } catch (e) {
                  s.onError(e)
              }
      }
  }
  ,
  52288: (e,t,s)=>{
      "use strict";
      s.r(t),
      s.d(t, {
          downloadFile: ()=>P
      });
      var n = s(24736)
        , a = s.n(n)
        , i = s(46586)
        , r = s(16039)
        , o = s(87873)
        , l = s.n(o)
        , c = s(77150)
        , d = s.n(c)
        , g = s(18171)
        , u = s(89618)
        , p = s(48960)
        , f = s(48764).lW;

      function h(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const _ = 4096
        , m = 64
        , b = 1048576
        , y = 1e3
        , v = 6e4
        , w = 5;
      class S {
          constructor(e) {
              h(this, "type", void 0),
              h(this, "size", void 0),
              h(this, "buffer", void 0),
              h(this, "largeFile", void 0),
              h(this, "largeFileAccessHandle", void 0),
              this.size = e,
              this.type = e && e > self.maxBufferSize ? "opfs" : "memory"
          }
          async init() {
              if ("opfs" === this.type) {
                  if (!FileSystemFileHandle?.prototype.createSyncAccessHandle)
                      throw new Error("`createSyncAccessHandle` is not available. Cannot download files larger than 2GB.");
                  const e = await navigator.storage.getDirectory()
                    , t = await e.getDirectoryHandle("downloads", {
                      create: !0
                  });
                  this.largeFile = await t.getFileHandle(Math.random().toString(), {
                      create: !0
                  }),
                  this.largeFileAccessHandle = await this.largeFile.createSyncAccessHandle()
              } else
                  this.buffer = this.size ? f.alloc(this.size) : f.alloc(0)
          }
          write(e, t) {
              if ("opfs" === this.type)
                  this.largeFileAccessHandle.write(e, {
                      at: t
                  });
              else if (this.size)
                  for (let s = 0; s < e.length; s++) {
                      if (t + s >= this.buffer.length)
                          return;
                      this.buffer.writeUInt8(e[s], t + s)
                  }
              else
                  this.buffer = f.concat([this.buffer, e])
          }
          getData() {
              return "opfs" === this.type ? this.largeFile.getFile() : Promise.resolve(this.buffer)
          }
      }
      async function P(e, t, s, n) {
          const {dcId: a} = s;
          for (let i = 0; i < w; i++)
              try {
                  return await R(e, t, s, n)
              } catch (t) {
                  if (!((t.message.startsWith("SESSION_REVOKED") || t.message.startsWith("CONNECTION_NOT_INITED")) && i < w - 1))
                      throw t;
                  await e._cleanupExportedSenders(a)
              }
      }
      const C = 3
        , I = 6
        , k = 10485760
        , M = Array(I).fill(void 0).map((()=>new r.J(10)));
      async function R(e, t, s, n) {
          let {partSizeKb: r, end: o} = s;
          const {fileSize: c} = s
            , f = "id"in t ? t.id : void 0
            , h = (...e)=>{
              n && console.log(`⬇️ [${f}/${s.dcId}]`, ...e)
          }
          ;
          h("Downloading file...");
          const w = Boolean(e.isPremium)
            , {dcId: P, progressCallback: R, start: A=0} = s;
          o = o && o < c ? o : c - 1,
          r || (r = c ? (0,
          p.getDownloadPartSize)(A ? o - A + 1 : c) : m);
          const E = 1024 * r
            , V = o ? Math.ceil((o + 1 - A + 1) / E) : 1
            , T = !o
            , B = c && c >= k && !T;
          let x;
          if (E % _ != 0)
              throw new Error(`The part size must be evenly divisible by ${_}`);
          e._log.info(`Downloading file in chunks of ${E} bytes`);
          const D = new S(o - A + 1)
            , U = [];
          let F = A;
          const q = M.map((({activeWorkers: e})=>e));
          let L = q.indexOf(Math.min(...q))
            , N = !1
            , O = 0;
          R && R(O);
          let G = !1;
          for (await D.init(); ; ) {
              let s = E
                , r = !1;
              Math.floor(F / b) !== Math.floor((F + s - 1) / b) && (s = b - F % b,
              r = !0),
              F % _ == 0 && s % _ == 0 || (r = !0);
              const c = B ? L % (w ? I : C) : 0;
              if (await M[c].requestWorker(),
              x && await x.promise,
              T && (x = new i.Z),
              N) {
                  M[c].releaseWorker();
                  break
              }
              const p = (...e)=>{
                  h(`[${c}/${P}]`, ...e)
              }
              ;
              if (U.push((async i=>{
                  for (; ; ) {
                      let f;
                      try {
                          let l = !1;
                          n && setTimeout((()=>{
                              l || p(`❗️️ getSender took too long ${i}`)
                          }
                          ), 8e3),
                          f = await e.getSender(P, c, w),
                          l = !0;
                          let g = !1;
                          n && setTimeout((()=>{
                              g || p(`❗️️ sender.send took too long ${i}`)
                          }
                          ), 6e3);
                          const h = await Promise.race([f.send(new (d().upload.GetFile)({
                              location: t,
                              offset: a()(i),
                              limit: s,
                              precise: r || void 0
                          })), (0,
                          u.sleep)(v).then((()=>P === e.session.dcId ? (p(`Download timed out ${i}`),
                          Promise.reject(new Error("USER_CANCELED"))) : (p(`Download timed out [not main] ${i}`),
                          Promise.reject(new Error("SESSION_REVOKED")))))]);
                          if (e.releaseExportedSender(f),
                          g = !0,
                          R) {
                              if (R.isCanceled)
                                  throw new Error("USER_CANCELED");
                              O += 1 / V,
                              p(`⬇️️ ${100 * O}%`),
                              R(O)
                          }
                          return !o && h.bytes.length < s && (N = !0),
                          M[c].releaseWorker(),
                          x && x.resolve(),
                          void D.write(h.bytes, i - A)
                      } catch (t) {
                          if (f && !f.isConnected()) {
                              await (0,
                              u.sleep)(y);
                              continue
                          }
                          if (t instanceof l().FloodWaitError) {
                              t instanceof l().FloodPremiumWaitError && !G && (f?._updateCallback(new g.Z(!1)),
                              G = !0),
                              await (0,
                              u.sleep)(1e3 * t.seconds);
                              continue
                          }
                          throw p(`Ended not gracefully ${i}`),
                          M[c].releaseWorker(),
                          x && x.resolve(),
                          N = !0,
                          e.releaseExportedSender(f),
                          t
                      }
                  }
              }
              )(F)),
              F += s,
              L++,
              o && F > o)
                  break
          }
          return await Promise.all(U),
          D.getData()
      }
  }
  ,
  74766: (e,t,s)=>{
      "use strict";
      s.r(t),
      s.d(t, {
          uploadFile: ()=>b
      });
      var n = s(16039)
        , a = s(87873)
        , i = s.n(a)
        , r = s(77150)
        , o = s.n(r)
        , l = s(18171)
        , c = s(89618)
        , d = s(48960)
        , g = s(48764).lW;
      const u = 1024
        , p = 10485760
        , f = 1e3
        , h = 3
        , _ = 6
        , m = Array(_).fill(void 0).map((()=>new n.J(10)));
      async function b(e, t, s) {
          const {file: n, onProgress: a} = t
            , r = Boolean(e.isPremium)
            , {name: b, size: y} = n
            , v = (0,
          c.readBigIntFromBuffer)((0,
          c.generateRandomBytes)(8), !0, !0)
            , w = y > p
            , S = (...e)=>{
              s && console.log(`⬆️ [${v}]`, ...e)
          }
          ;
          S("Uploading file...");
          const P = (0,
          d.getUploadPartSize)(y) * u
            , C = Math.floor((y + P - 1) / P)
            , I = m.map((({activeWorkers: e})=>e));
          let k = I.indexOf(Math.min(...I))
            , M = 0;
          a && a(M);
          let R = !1;
          const A = [];
          for (let t = 0; t < C; t++) {
              const d = k % (r ? _ : h);
              if (await m[d].requestWorker(),
              a?.isCanceled) {
                  m[d].releaseWorker();
                  break
              }
              const u = (...e)=>{
                  S(`[${d}]`, ...e)
              }
                , p = n.slice(t * P, (t + 1) * P);
              A.push((async(t,n)=>{
                  for (; ; ) {
                      let p;
                      try {
                          let a = !1;
                          s && setTimeout((()=>{
                              a || u(`❗️️ getSender took too long j=${t}`)
                          }
                          ), 8e3),
                          p = await e.getSender(e.session.dcId, d, r),
                          a = !0;
                          let i = !1;
                          const l = await n.arrayBuffer();
                          s && setTimeout((()=>{
                              i || u(`❗️️ sender.send took too long j=${t}`)
                          }
                          ), 6e3),
                          await p.send(w ? new (o().upload.SaveBigFilePart)({
                              fileId: v,
                              filePart: t,
                              fileTotalParts: C,
                              bytes: g.from(l)
                          }) : new (o().upload.SaveFilePart)({
                              fileId: v,
                              filePart: t,
                              bytes: g.from(l)
                          })),
                          e.releaseExportedSender(p),
                          i = !0
                      } catch (s) {
                          if (u(`❗️️️Upload part failed ${s?.toString()} j=${t}`),
                          p && !p.isConnected()) {
                              await (0,
                              c.sleep)(f);
                              continue
                          }
                          if (s instanceof i().FloodWaitError) {
                              s instanceof i().FloodPremiumWaitError && !R && (p?._updateCallback(new l.Z(!0)),
                              R = !0),
                              await (0,
                              c.sleep)(1e3 * s.seconds);
                              continue
                          }
                          throw m[d].releaseWorker(),
                          e.releaseExportedSender(p),
                          s
                      }
                      if (m[d].releaseWorker(),
                      a) {
                          if (a.isCanceled)
                              throw new Error("USER_CANCELED");
                          M += 1 / C,
                          u(100 * M + "%"),
                          a(M)
                      }
                      break
                  }
              }
              )(t, p)),
              k++
          }
          return await Promise.all(A),
          w ? new (o().InputFileBig)({
              id: v,
              parts: C,
              name: b
          }) : new (o().InputFile)({
              id: v,
              parts: C,
              name: b,
              md5Checksum: ""
          })
      }
  }
  ,
  13302: (e,t,s)=>{
      var n = s(48764).lW;
      const {sha1: a, toSignedLittleBuffer: i, readBufferFromBigInt: r, readBigIntFromBuffer: o} = s(89618)
        , l = s(35544)
        , {sleep: c} = s(89618);
      class d {
          constructor(e, t) {
              if (!t || !e)
                  return;
              this._key = e,
              this._hash = t;
              const s = new l(t);
              this.auxHash = s.readLong(!1),
              s.read(4),
              this.keyId = s.readLong(!1)
          }
          async setKey(e) {
              if (!e)
                  return this._key = void 0,
                  this.auxHash = void 0,
                  this.keyId = void 0,
                  void (this._hash = void 0);
              if (e instanceof d)
                  return this._key = e._key,
                  this.auxHash = e.auxHash,
                  this.keyId = e.keyId,
                  void (this._hash = e._hash);
              this._key = e,
              this._hash = await a(this._key);
              const t = new l(this._hash);
              this.auxHash = t.readLong(!1),
              t.read(4),
              this.keyId = t.readLong(!1)
          }
          async waitForKey() {
              for (; !this.keyId; )
                  await c(20)
          }
          getKey() {
              return this._key
          }
          async calcNewNonceHash(e, t) {
              e = i(e, 32);
              const s = n.alloc(1);
              s.writeUInt8(t, 0);
              const l = n.concat([e, n.concat([s, r(this.auxHash, 8, !0)])])
                , c = (await a(l)).slice(4, 20);
              return o(c, !0, !0)
          }
          equals(e) {
              return e instanceof this.constructor && this._key && e.getKey() && e.getKey().equals(this._key)
          }
      }
      e.exports = d
  }
  ,
  55830: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(66842);
      e.exports = class {
          constructor(e, t) {
              if (!n.isBuffer(e) || !n.isBuffer(t) || 16 !== t.length)
                  throw new Error("Key and iv need to be a buffer");
              this.cipher = a.createCipheriv("AES-256-CTR", e, t)
          }
          encrypt(e) {
              return n.from(this.cipher.update(e))
          }
      }
  }
  ,
  89636: (e,t,s)=>{
      const n = s(24736)
        , {modExp: a} = s(89618);
      class i {
          static gcd(e, t) {
              for (; t.neq(n.zero); ) {
                  const s = t;
                  t = e.remainder(t),
                  e = s
              }
              return e
          }
          static factorize(e) {
              if (e.remainder(2).equals(n.zero))
                  return {
                      p: n(2),
                      q: e.divide(n(2))
                  };
              let t = n.randBetween(n(1), e.minus(1));
              const s = n.randBetween(n(1), e.minus(1))
                , r = n.randBetween(n(1), e.minus(1));
              let o, l = n.one, c = n.one, d = n.one, g = n.zero, u = n.zero;
              for (; l.eq(n.one); ) {
                  g = t;
                  for (let i = 0; n(i).lesser(c); i++)
                      t = a(t, n(2), e).add(s).remainder(e);
                  for (o = n.zero; o.lesser(c) && l.eq(n.one); ) {
                      u = t;
                      const p = n.min(r, c.minus(o));
                      for (let i = 0; n(i).lesser(p); i++)
                          t = a(t, n(2), e).add(s).remainder(e),
                          d = d.multiply(g.minus(t).abs()).remainder(e);
                      l = i.gcd(d, e),
                      o = o.add(r)
                  }
                  c = c.multiply(2)
              }
              if (l.eq(e))
                  for (; u = a(u, n(2), e).add(s).remainder(e),
                  l = i.gcd(g.minus(u).abs(), e),
                  !l.greater(1); )
                      ;
              const p = l;
              return d = e.divide(l),
              p < d ? {
                  p,
                  q: d
              } : {
                  p: d,
                  q: p
              }
          }
      }
      e.exports = i
  }
  ,
  32608: (e,t,s)=>{
      var n = s(48764).lW;
      const {IGE: a} = s(28136)
        , i = s(89618);
      e.exports = class {
          constructor(e, t) {
              this.ige = new a(e,t)
          }
          decryptIge(e) {
              return i.convertToLittle(this.ige.decrypt(e))
          }
          encryptIge(e) {
              const t = e.length % 16;
              return t && (e = n.concat([e, i.generateRandomBytes(16 - t)])),
              i.convertToLittle(this.ige.encrypt(e))
          }
      }
  }
  ,
  74121: (e,t,s)=>{
      "use strict";

      function n(e) {
          const t = new Uint8Array(4 * e.length);
          let s = 0;
          for (let n = 0; n < e.length; n++) {
              const a = e[n];
              t[s++] = a >>> 24,
              t[s++] = a >> 16 & 255,
              t[s++] = a >> 8 & 255,
              t[s++] = 255 & a
          }
          return t.buffer
      }

      function a(e) {
          return e.buffer
      }

      function i(e) {
          const t = new Uint8Array(e)
            , s = new Uint32Array(t.length / 4);
          for (let e = 0; e < t.length; e += 4)
              s[e / 4] = t[e] << 24 ^ t[e + 1] << 16 ^ t[e + 2] << 8 ^ t[e + 3];
          return s
      }

      function r(e) {
          return new Uint32Array(e)
      }
      s.r(t),
      s.d(t, {
          ab2i: ()=>c,
          ab2iBig: ()=>r,
          ab2iLow: ()=>i,
          i2ab: ()=>l,
          i2abBig: ()=>a,
          i2abLow: ()=>n,
          isBigEndian: ()=>o
      });
      const o = 1 === new Uint8Array(new Uint32Array([16909060]))[0]
        , l = o ? a : n
        , c = o ? r : i
  }
  ,
  66842: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(28136).default
        , {i2ab: i, ab2i: r} = s(74121)
        , {getWords: o} = s(77760);
      class l {
          constructor(e) {
              this.setBytes(e)
          }
          setBytes(e) {
              e = n.from(e),
              this._counter = e
          }
          increment() {
              for (let e = 15; e >= 0; e--) {
                  if (255 !== this._counter[e]) {
                      this._counter[e]++;
                      break
                  }
                  this._counter[e] = 0
              }
          }
      }
      class c {
          constructor(e, t) {
              t instanceof l || (t = new l(t)),
              this._counter = t,
              this._remainingCounter = void 0,
              this._remainingCounterIndex = 16,
              this._aes = new a(o(e))
          }
          update(e) {
              return this.encrypt(e)
          }
          encrypt(e) {
              const t = n.from(e);
              for (let e = 0; e < t.length; e++)
                  16 === this._remainingCounterIndex && (this._remainingCounter = n.from(i(this._aes.encrypt(r(this._counter._counter)))),
                  this._remainingCounterIndex = 0,
                  this._counter.increment()),
                  t[e] ^= this._remainingCounter[this._remainingCounterIndex++];
              return t
          }
      }
      class d {
          constructor(e) {
              this.algorithm = e
          }
          update(e) {
              this.data = new Uint8Array(e)
          }
          async digest() {
              return "sha1" === this.algorithm ? n.from(await self.crypto.subtle.digest("SHA-1", this.data)) : "sha256" === this.algorithm ? n.from(await self.crypto.subtle.digest("SHA-256", this.data)) : void 0
          }
      }
      e.exports = {
          createCipheriv: function(e, t, s) {
              if (e.includes("ECB"))
                  throw new Error("Not supported");
              return new c(t,s)
          },
          createDecipheriv: function(e, t, s) {
              if (e.includes("ECB"))
                  throw new Error("Not supported");
              return new c(t,s)
          },
          randomBytes: function(e) {
              const t = new Uint8Array(e);
              return crypto.getRandomValues(t),
              t
          },
          createHash: function(e) {
              return new d(e)
          },
          pbkdf2: async function(e, t, s) {
              const a = await crypto.subtle.importKey("raw", e, {
                  name: "PBKDF2"
              }, !1, ["deriveBits"]);
              return n.from(await crypto.subtle.deriveBits({
                  name: "PBKDF2",
                  hash: "SHA-512",
                  salt: t,
                  iterations: s
              }, a, 512))
          }
      }
  }
  ,
  77760: (e,t,s)=>{
      "use strict";

      function n(e, t) {
          return e.charCodeAt(t) << 24 ^ e.charCodeAt(t + 1) << 16 ^ e.charCodeAt(t + 2) << 8 ^ e.charCodeAt(t + 3)
      }

      function a(e) {
          if (e instanceof Uint32Array)
              return e;
          if ("string" == typeof e) {
              if (e.length % 4 != 0)
                  for (let t = e.length % 4; t <= 4; t++)
                      e += "\0x00";
              const t = new Uint32Array(e.length / 4);
              for (let s = 0; s < e.length; s += 4)
                  t[s / 4] = n(e, s);
              return t
          }
          if (e instanceof Uint8Array) {
              const t = new Uint32Array(e.length / 4);
              for (let s = 0; s < e.length; s += 4)
                  t[s / 4] = e[s] << 24 ^ e[s + 1] << 16 ^ e[s + 2] << 8 ^ e[s + 3];
              return t
          }
          throw new Error("Unable to create 32-bit words")
      }

      function i(e, t, s=e) {
          for (let n = 0; n < e.length; n++)
              s[n] = e[n] ^ t[n]
      }
      s.r(t),
      s.d(t, {
          getWords: ()=>a,
          s2i: ()=>n,
          xor: ()=>i
      })
  }
  ,
  48187: e=>{
      class t extends Error {
          constructor() {
              super("The read operation was cancelled.")
          }
      }
      class s extends Error {
          constructor(e, t) {
              super(`Could not find a matching Constructor ID for the TLObject that was supposed to be\n        read with ID ${e}. Most likely, a TLObject was trying to be read when\n         it should not be read. Remaining bytes: ${t.length}`),
              "undefined" != typeof alert && alert(`Missing MTProto Entity: Please, make sure to add TL definition for ID ${e}`),
              this.invalidConstructorId = e,
              this.remaining = t
          }
      }
      class n extends Error {
          constructor(e, t) {
              super(`Invalid checksum (${e} when ${t} was expected). This packet should be skipped.`),
              this.checksum = e,
              this.validChecksum = t
          }
      }
      class a extends Error {
          constructor(e) {
              let t;
              4 === e.length ? (t = -e.readInt32LE(0),
              super(`Invalid response buffer (HTTP code ${t})`)) : super(`Invalid response buffer (too short ${e})`),
              this.code = t,
              this.payload = e
          }
      }
      class i extends Error {
          constructor(...e) {
              e.length || (e = ["A security check failed."]),
              super(...e)
          }
      }
      class r extends Error {
          constructor(e, t) {
              let s = r.ErrorMessages[t] || `Unknown error code (this should not happen): ${t}.`;
              s += `  Caused by ${e.className}`,
              super(s),
              this.message = s,
              this.code = t
          }
      }
      var o, l, c, d;
      o = r,
      c = {
          16: "msg_id too low (most likely, client time is wrong it would be worthwhile to synchronize it using msg_id notifications and re-send the original message with the “correct” msg_id or wrap it in a container with a new msg_id if the original message had waited too long on the client to be transmitted).",
          17: "msg_id too high (similar to the previous case, the client time has to be synchronized, and the message re-sent with the correct msg_id).",
          18: "Incorrect two lower order msg_id bits (the server expects client message msg_id to be divisible by 4).",
          19: "Container msg_id is the same as msg_id of a previously received message (this must never happen).",
          20: "Message too old, and it cannot be verified whether the server has received a message with this msg_id or not.",
          32: "msg_seqno too low (the server has already received a message with a lower msg_id but with either a higher or an equal and odd seqno).",
          33: "msg_seqno too high (similarly, there is a message with a higher msg_id but with either a lower or an equal and odd seqno).",
          34: "An even msg_seqno expected (irrelevant message), but odd received.",
          35: "Odd msg_seqno expected (relevant message), but even received.",
          48: "Incorrect server salt (in this case, the bad_server_salt response is received with the correct salt, and the message is to be re-sent with it).",
          64: "Invalid container."
      },
      (l = "symbol" == typeof (d = function(e, t) {
          if ("object" != typeof e || !e)
              return e;
          var s = e[Symbol.toPrimitive];
          if (void 0 !== s) {
              var n = s.call(e, "string");
              if ("object" != typeof n)
                  return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
      }(l = "ErrorMessages")) ? d : String(d))in o ? Object.defineProperty(o, l, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : o[l] = c,
      e.exports = {
          ReadCancelledError: t,
          TypeNotFoundError: s,
          InvalidChecksumError: n,
          InvalidBufferError: a,
          SecurityError: i,
          CdnFileTamperedError: class extends i {
              constructor() {
                  super("The CDN file has been altered and its download cancelled.")
              }
          }
          ,
          BadMessageError: r
      }
  }
  ,
  86952: e=>{
      function t(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      class s extends Error {
          constructor(e, t, n=void 0) {
              super("RPCError {0}: {1}{2}".replace("{0}", n).replace("{1}", e).replace("{2}", s._fmtRequest(t))),
              this.code = n,
              this.message = e
          }
          static _fmtRequest(e) {
              return e ? ` (caused by ${e.className})` : ""
          }
      }
      e.exports = {
          RPCError: s,
          InvalidDCError: class extends s {
              constructor(e, t, s) {
                  super(t, e, s),
                  this.code = s || 303,
                  this.message = t || "ERROR_SEE_OTHER"
              }
          }
          ,
          BadRequestError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 400),
                  t(this, "message", "BAD_REQUEST")
              }
          }
          ,
          UnauthorizedError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 401),
                  t(this, "message", "UNAUTHORIZED")
              }
          }
          ,
          ForbiddenError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 403),
                  t(this, "message", "FORBIDDEN")
              }
          }
          ,
          NotFoundError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 404),
                  t(this, "message", "NOT_FOUND")
              }
          }
          ,
          AuthKeyError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 406),
                  t(this, "message", "AUTH_KEY")
              }
          }
          ,
          FloodError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 420),
                  t(this, "message", "FLOOD")
              }
          }
          ,
          ServerError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 500),
                  t(this, "message", "INTERNAL")
              }
          }
          ,
          TimedOutError: class extends s {
              constructor(...e) {
                  super(...e),
                  t(this, "code", 503),
                  t(this, "message", "Timeout")
              }
          }
      }
  }
  ,
  65651: (e,t,s)=>{
      const {RPCError: n, InvalidDCError: a, FloodError: i, BadRequestError: r, TimedOutError: o} = s(86952);
      class l extends a {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`The user whose identity is being used to execute queries is associated with DC ${t}${n._fmtRequest(e.request)}`),
              this.message = `The user whose identity is being used to execute queries is associated with DC ${t}${n._fmtRequest(e.request)}`,
              this.newDc = t
          }
      }
      class c extends a {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`The phone number a user is trying to use for authorization is associated with DC ${t}${n._fmtRequest(e.request)}`),
              this.message = `The phone number a user is trying to use for authorization is associated with DC ${t}${n._fmtRequest(e.request)}`,
              this.newDc = t
          }
      }
      class d extends i {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`A wait of ${t} seconds is required before sending another message in this chat${n._fmtRequest(e.request)}`),
              this.message = `A wait of ${t} seconds is required before sending another message in this chat${n._fmtRequest(e.request)}`,
              this.seconds = t
          }
      }
      class g extends i {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`A wait of ${t} seconds is required${n._fmtRequest(e.request)}`),
              this.message = `A wait of ${t} seconds is required${n._fmtRequest(e.request)}`,
              this.seconds = t
          }
      }
      class u extends g {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`A wait of ${t} seconds is required${n._fmtRequest(e.request)}`),
              this.message = `A wait of ${t} seconds is required${n._fmtRequest(e.request)}`,
              this.seconds = t
          }
      }
      class p extends i {
          constructor(e) {
              super(`Message failed to be sent.${n._fmtRequest(e.request)}`),
              this.message = `Message failed to be sent.${n._fmtRequest(e.request)}`
          }
      }
      class f extends i {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`A wait of ${t} seconds is required in the test servers${n._fmtRequest(e.request)}`),
              this.message = `A wait of ${t} seconds is required in the test servers${n._fmtRequest(e.request)}`,
              this.seconds = t
          }
      }
      class h extends a {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`The file to be accessed is currently stored in DC ${t}${n._fmtRequest(e.request)}`),
              this.message = `The file to be accessed is currently stored in DC ${t}${n._fmtRequest(e.request)}`,
              this.newDc = t
          }
      }
      class _ extends a {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`The source IP address is associated with DC ${t}${n._fmtRequest(e.request)}`),
              this.message = `The source IP address is associated with DC ${t}${n._fmtRequest(e.request)}`,
              this.newDc = t
          }
      }
      class m extends r {
          constructor(e) {
              const t = Number(e.capture || 0);
              super(`Email unconfirmed, the length of the code must be ${t}${n._fmtRequest(e.request)}`),
              this.message = `Email unconfirmed, the length of the code must be ${t}${n._fmtRequest(e.request)}`,
              this.codeLength = t
          }
      }
      const b = [[/FILE_MIGRATE_(\d+)/, h], [/FLOOD_TEST_PHONE_WAIT_(\d+)/, f], [/FLOOD_WAIT_(\d+)/, g], [/FLOOD_PREMIUM_WAIT_(\d+)/, u], [/MSG_WAIT_(.*)/, p], [/PHONE_MIGRATE_(\d+)/, c], [/SLOWMODE_WAIT_(\d+)/, d], [/USER_MIGRATE_(\d+)/, l], [/NETWORK_MIGRATE_(\d+)/, _], [/EMAIL_UNCONFIRMED_(\d+)/, m], [/^Timeout$/, o]];
      e.exports = {
          rpcErrorRe: b,
          FileMigrateError: h,
          FloodTestPhoneWaitError: f,
          FloodWaitError: g,
          FloodPremiumWaitError: u,
          PhoneMigrateError: c,
          SlowModeWaitError: d,
          UserMigrateError: l,
          NetworkMigrateError: _,
          MsgWaitError: p,
          EmailUnconfirmedError: m
      }
  }
  ,
  87873: (e,t,s)=>{
      const {RPCError: n} = s(86952)
        , {rpcErrorRe: a} = s(65651)
        , i = s(48187)
        , r = s(86952)
        , o = s(65651);
      e.exports = {
          RPCMessageToError: function(e, t) {
              for (const [s,n] of a) {
                  const a = e.errorMessage.match(s);
                  if (a)
                      return new n({
                          request: t,
                          capture: 2 === a.length ? parseInt(a[1], 10) : void 0
                      })
              }
              return new n(e.errorMessage,t)
          },
          ...i,
          ...r,
          ...o
      }
  }
  ,
  26316: ()=>{}
  ,
  43903: (e,t,s)=>{
      const {EventBuilder: n} = s(80663);
      e.exports = class extends n {
          constructor(e={
              types: void 0,
              func: void 0
          }) {
              super(),
              e.types ? this.types = e.types : this.types = !0
          }
          build(e) {
              return e
          }
      }
  }
  ,
  80663: e=>{
      e.exports = {
          EventBuilder: class {
              constructor(e={
                  chats: void 0,
                  blacklistChats: void 0,
                  func: void 0
              }) {
                  this.chats = e.chats,
                  this.blacklistChats = Boolean(e.blacklistChats),
                  this.resolved = !1,
                  this.func = e.func
              }
              build(e) {}
          }
      }
  }
  ,
  33182: (e,t,s)=>{
      const n = s(26316)
        , a = s(43903);
      class i extends Error {
      }
      e.exports = {
          NewMessage: n,
          StopPropagation: i,
          Raw: a
      }
  }
  ,
  16151: e=>{
      e.exports = class {
          constructor() {
              this._queue = [],
              this.canGet = new Promise((e=>{
                  this.resolveGet = e
              }
              )),
              this.canPush = !0
          }
          async push(e) {
              await this.canPush,
              this._queue.push(e),
              this.resolveGet(!0),
              this.canPush = new Promise((e=>{
                  this.resolvePush = e
              }
              ))
          }
          async pop() {
              await this.canGet;
              const e = this._queue.pop();
              return this.resolvePush(!0),
              this.canGet = new Promise((e=>{
                  this.resolveGet = e
              }
              )),
              e
          }
      }
  }
  ,
  35544: (e,t,s)=>{
      const {TypeNotFoundError: n} = s(48187)
        , {coreObjects: a} = s(92058)
        , {tlobjects: i} = s(70845)
        , {readBigIntFromBuffer: r} = s(89618);
      e.exports = class {
          constructor(e) {
              this.stream = e,
              this._last = void 0,
              this.offset = 0
          }
          readByte() {
              return this.read(1)[0]
          }
          readInt(e=!0) {
              let t;
              return t = e ? this.stream.readInt32LE(this.offset) : this.stream.readUInt32LE(this.offset),
              this.offset += 4,
              t
          }
          readLong(e=!0) {
              return this.readLargeInt(64, e)
          }
          readFloat() {
              return this.read(4).readFloatLE(0)
          }
          readDouble() {
              return this.read(8).readDoubleLE(0)
          }
          readLargeInt(e, t=!0) {
              const s = this.read(Math.floor(e / 8));
              return r(s, !0, t)
          }
          read(e=-1) {
              -1 === e && (e = this.stream.length - this.offset);
              const t = this.stream.slice(this.offset, this.offset + e);
              if (this.offset += e,
              t.length !== e)
                  throw Error(`No more data left to read (need ${e}, got ${t.length}: ${t}); last read ${this._last}`);
              return this._last = t,
              t
          }
          getBuffer() {
              return this.stream
          }
          tgReadBytes() {
              const e = this.readByte();
              let t, s;
              254 === e ? (s = this.readByte() | this.readByte() << 8 | this.readByte() << 16,
              t = s % 4) : (s = e,
              t = (s + 1) % 4);
              const n = this.read(s);
              return t > 0 && (t = 4 - t,
              this.read(t)),
              n
          }
          tgReadString() {
              return this.tgReadBytes().toString("utf-8")
          }
          tgReadBool() {
              const e = this.readInt(!1);
              if (2574415285 === e)
                  return !0;
              if (3162085175 === e)
                  return !1;
              throw new Error(`Invalid boolean code ${e.toString("16")}`)
          }
          tgReadDate() {
              const e = this.readInt();
              return new Date(1e3 * e)
          }
          tgReadObject() {
              const e = this.readInt(!1);
              let t = i[e];
              if (void 0 === t) {
                  if (2574415285 === e)
                      return !0;
                  if (3162085175 === e)
                      return !1;
                  if (481674261 === e) {
                      const e = []
                        , t = this.readInt();
                      for (let s = 0; s < t; s++)
                          e.push(this.tgReadObject());
                      return e
                  }
                  if (t = a[e],
                  void 0 === t) {
                      this.seek(-4);
                      const t = this.tellPosition()
                        , s = new n(e,this.read());
                      throw this.setPosition(t),
                      s
                  }
              }
              return t.fromReader(this)
          }
          tgReadVector() {
              if (481674261 !== this.readInt(!1))
                  throw new Error("Invalid constructor code, vector was expected");
              const e = this.readInt()
                , t = [];
              for (let s = 0; s < e; s++)
                  t.push(this.tgReadObject());
              return t
          }
          close() {
              this.stream = void 0
          }
          tellPosition() {
              return this.offset
          }
          setPosition(e) {
              this.offset = e
          }
          seek(e) {
              this.offset += e
          }
      }
  }
  ,
  96472: (e,t,s)=>{
      var n = s(48764).lW;
      e.exports = class {
          constructor(e) {
              this._stream = e
          }
          write(e) {
              this._stream = n.concat([this._stream, e])
          }
          getValue() {
              return this._stream
          }
      }
  }
  ,
  33673: (e,t,s)=>{
      "use strict";
      s.d(t, {
          Z: ()=>l
      });
      var n, a = s(48764).lW;

      function i(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const r = new Error("HttpStream was closed");
      (n = AbortSignal).timeout ?? (n.timeout = function(e) {
          const t = new AbortController;
          return setTimeout((()=>t.abort()), e),
          t.signal
      }
      );
      class o {
          constructor(e) {
              i(this, "url", void 0),
              i(this, "isClosed", void 0),
              i(this, "stream", []),
              i(this, "canRead", Promise.resolve()),
              i(this, "resolveRead", void 0),
              i(this, "rejectRead", void 0),
              i(this, "disconnectedCallback", void 0),
              this.isClosed = !0,
              this.disconnectedCallback = e
          }
          async read() {
              await this.canRead;
              const e = this.stream.shift();
              return 0 === this.stream.length && (this.canRead = new Promise(((e,t)=>{
                  this.resolveRead = e,
                  this.rejectRead = t
              }
              ))),
              e
          }
          static getURL(e, t, s, n) {
              return 443 === t ? `https://${e}:${t}/apiw1${s ? "_test" : ""}${n ? "_premium" : ""}` : `http://${e}:${t}/apiw1${s ? "_test" : ""}${n ? "_premium" : ""}`
          }
          async connect(e, t, s=!1, n=!1) {
              this.stream = [],
              this.canRead = new Promise(((e,t)=>{
                  this.resolveRead = e,
                  this.rejectRead = t
              }
              )),
              this.url = o.getURL(t, e, s, n),
              await fetch(this.url, {
                  method: "POST",
                  body: a.from([]),
                  mode: "cors",
                  signal: AbortSignal.timeout(1e4)
              }),
              this.isClosed = !1
          }
          write(e) {
              if (this.isClosed || !this.url)
                  throw this.handleDisconnect(),
                  r;
              return fetch(this.url, {
                  method: "POST",
                  body: e,
                  mode: "cors",
                  signal: AbortSignal.timeout(1e4)
              }).then((async e=>{
                  if (this.isClosed)
                      return void this.handleDisconnect();
                  if (200 !== e.status)
                      throw r;
                  const t = await e.arrayBuffer();
                  this.stream = this.stream.concat(a.from(t)),
                  this.resolveRead && !this.isClosed && this.resolveRead()
              }
              )).catch((e=>{
                  throw this.handleDisconnect(),
                  e
              }
              ))
          }
          handleDisconnect() {
              this.disconnectedCallback?.(),
              this.rejectRead && this.rejectRead()
          }
          close() {
              this.isClosed = !0,
              this.handleDisconnect(),
              this.disconnectedCallback = void 0
          }
      }
      const l = o
  }
  ,
  96748: e=>{
      let t;
      class s {
          constructor(e) {
              t || (t = e || "debug"),
              this.colors = {
                  start: "%c",
                  warn: "color : #ff00ff",
                  info: "color : #ffff00",
                  debug: "color : #00ffff",
                  error: "color : #ff0000",
                  end: ""
              },
              this.messageFormat = "[%t] [%l] - [%m]"
          }
          static setLevel(e) {
              t = e
          }
          canSend(e) {
              return s.LEVEL_MAP.get(t).has(e)
          }
          warn(e) {
              this._log("warn", e, this.colors.warn)
          }
          info(e) {
              this._log("info", e, this.colors.info)
          }
          debug(e) {
              this._log("debug", e, this.colors.debug)
          }
          error(e) {
              this._log("error", e, this.colors.error)
          }
          format(e, t) {
              return this.messageFormat.replace("%t", (new Date).toISOString()).replace("%l", t.toUpperCase()).replace("%m", e)
          }
          _log(e, s, n) {
              t && this.canSend(e) && console.log(this.colors.start + this.format(s, e), n)
          }
      }
      var n, a, i, r;
      n = s,
      a = "LEVEL_MAP",
      i = new Map([["error", new Set(["error"])], ["warn", new Set(["error", "warn"])], ["info", new Set(["error", "warn", "info"])], ["debug", new Set(["error", "warn", "info", "debug"])]]),
      (a = "symbol" == typeof (r = function(e, t) {
          if ("object" != typeof e || !e)
              return e;
          var s = e[Symbol.toPrimitive];
          if (void 0 !== s) {
              var n = s.call(e, "string");
              if ("object" != typeof n)
                  return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
      }(a)) ? r : String(r))in n ? Object.defineProperty(n, a, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : n[a] = i,
      e.exports = s
  }
  ,
  36411: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(63254)
        , i = s(40355)
        , r = s(96472)
        , o = new Set(["messages.SendMessage", "messages.SendMedia", "messages.SendMultiMedia", "messages.ForwardMessages", "messages.SendInlineBotResult"]);
      e.exports = class {
          constructor(e, t) {
              this._state = e,
              this._queue = [],
              this._pendingStates = [],
              this._ready = new Promise((e=>{
                  this.setReady = e
              }
              )),
              this._log = t
          }
          values() {
              return this._queue
          }
          clear() {
              this._queue = [],
              this.append(void 0)
          }
          append(e, t=!0, s=!1) {
              if (e && o.has(e.request.className))
                  if (s) {
                      for (let t = 0; t < this._queue.length; t++)
                          if (o.has(this._queue[t]?.request.className)) {
                              this._queue[t].after = e;
                              break
                          }
                  } else
                      for (let t = this._queue.length - 1; t >= 0; t--)
                          if (o.has(this._queue[t]?.request.className)) {
                              e.after = this._queue[t];
                              break
                          }
              s ? this._queue.unshift(e) : this._queue.push(e),
              t && this.setReady(!0),
              e && 1658238041 !== e.request.CONSTRUCTOR_ID && (this._pendingStates.push(e),
              e.promise.catch((()=>{}
              )).finally((()=>{
                  this._pendingStates = this._pendingStates.filter((t=>t !== e))
              }
              )))
          }
          prepend(e) {
              e.reverse().forEach((e=>{
                  this.append(e, !1, !0)
              }
              )),
              this.setReady(!0)
          }
          extend(e) {
              e.forEach((e=>{
                  this.append(e, !1)
              }
              )),
              this.setReady(!0)
          }
          async getBeacon(e) {
              const t = new r(n.alloc(0));
              if (e.data.length + i.SIZE_OVERHEAD <= a.MAXIMUM_SIZE) {
                  let s;
                  return e.after && (s = e.after.msgId),
                  e.msgId = await this._state.writeDataAsMessage(t, e.data, "request" === e.request.classType, s),
                  this._log.debug(`Assigned msgId = ${e.msgId} to ${e.request.className || e.request.constructor.name}`),
                  t.getValue()
              }
              this._log.warn(`Message payload for ${e.request.className || e.request.constructor.name} is too long ${e.data.length} and cannot be sent`),
              e.reject("Request Payload is too big")
          }
          async wait() {
              this._queue.length || (this._ready = new Promise((e=>{
                  this.setReady = e
              }
              )),
              await this._ready)
          }
          async get() {
              if (!this._queue[this._queue.length - 1])
                  return void (this._queue = this._queue.filter(Boolean));
              let e, t = new r(n.alloc(0));
              const s = [];
              let o = 0;
              for (; this._queue.length && s.length <= a.MAXIMUM_LENGTH; ) {
                  const e = this._queue.shift();
                  if (e)
                      if (e.abortSignal?.aborted)
                          e.reject(new Error("Request aborted"));
                      else if (o += e.data.length + i.SIZE_OVERHEAD,
                      o <= a.MAXIMUM_SIZE) {
                          let n;
                          e.after && (n = e.after.msgId),
                          e.msgId = await this._state.writeDataAsMessage(t, e.data, "request" === e.request.classType, n),
                          this._log.debug(`Assigned msgId = ${e.msgId} to ${e.request.className || e.request.constructor.name}`),
                          s.push(e)
                      } else {
                          if (s.length) {
                              this._queue.unshift(e);
                              break
                          }
                          this._log.warn(`Message payload for ${e.request.className || e.request.constructor.name} is too long ${e.data.length} and cannot be sent`),
                          e.reject("Request Payload is too big"),
                          o = 0
                      }
              }
              if (s.length) {
                  if (s.length > 1) {
                      const i = n.alloc(8);
                      i.writeUInt32LE(a.CONSTRUCTOR_ID, 0),
                      i.writeInt32LE(s.length, 4),
                      e = n.concat([i, t.getValue()]),
                      t = new r(n.alloc(0));
                      const o = await this._state.writeDataAsMessage(t, e, !1);
                      for (const e of s)
                          e.containerId = o
                  }
                  return e = t.getValue(),
                  {
                      batch: s,
                      data: e
                  }
              }
          }
      }
  }
  ,
  71721: e=>{
      e.exports = class {
          constructor() {
              this._pending = new Map
          }
          set(e, t) {
              this._pending.set(e.toString(), t)
          }
          get(e) {
              return this._pending.get(e.toString())
          }
          getAndDelete(e) {
              const t = this.get(e);
              return this.delete(e),
              t
          }
          values() {
              return Array.from(this._pending.values())
          }
          delete(e) {
              this._pending.delete(e.toString())
          }
          clear() {
              this._pending.clear()
          }
      }
  }
  ,
  7214: (e,t,s)=>{
      var n = s(48764).lW;
      const {Mutex: a} = s(48125)
        , i = new a
        , r = new Error("WebSocket was closed");
      e.exports = class {
          constructor(e) {
              this.client = void 0,
              this.closed = !0,
              this.disconnectedCallback = e,
              this.timeout = 3e3
          }
          async readExactly(e) {
              let t = n.alloc(0);
              for (; ; ) {
                  const s = await this.read(e);
                  if (t = n.concat([t, s]),
                  !(e -= s.length))
                      return t
              }
          }
          async read(e) {
              if (this.closed)
                  throw r;
              if (await this.canRead,
              this.closed)
                  throw r;
              const t = this.stream.slice(0, e);
              return this.stream = this.stream.slice(e),
              0 === this.stream.length && (this.canRead = new Promise((e=>{
                  this.resolveRead = e
              }
              ))),
              t
          }
          async readAll() {
              if (this.closed || !await this.canRead)
                  throw r;
              const e = this.stream;
              return this.stream = n.alloc(0),
              this.canRead = new Promise((e=>{
                  this.resolveRead = e
              }
              )),
              e
          }
          getWebSocketLink(e, t, s, n) {
              return 443 === t ? `wss://${e}:${t}/apiws${s ? "_test" : ""}${n ? "_premium" : ""}` : `ws://${e}:${t}/apiws${s ? "_test" : ""}${n ? "_premium" : ""}`
          }
          connect(e, t, s=!1, a=!1) {
              return this.stream = n.alloc(0),
              this.canRead = new Promise((e=>{
                  this.resolveRead = e
              }
              )),
              this.closed = !1,
              this.website = this.getWebSocketLink(t, e, s, a),
              this.client = new WebSocket(this.website,"binary"),
              new Promise(((e,s)=>{
                  let n, a = !1;
                  this.client.onopen = ()=>{
                      this.receive(),
                      e(this),
                      a = !0,
                      n && clearTimeout(n)
                  }
                  ,
                  this.client.onerror = e=>{
                      console.error("WebSocket error", e),
                      s(e),
                      a = !0,
                      n && clearTimeout(n)
                  }
                  ,
                  this.client.onclose = e=>{
                      const {code: s, reason: i, wasClean: r} = e;
                      1e3 !== s && console.error(`Socket ${t} closed. Code: ${s}, reason: ${i}, was clean: ${r}`),
                      this.resolveRead(!1),
                      this.closed = !0,
                      this.disconnectedCallback && this.disconnectedCallback(),
                      a = !0,
                      n && clearTimeout(n)
                  }
                  ,
                  n = setTimeout((()=>{
                      a || (s(new Error("WebSocket connection timeout")),
                      this.resolveRead(!1),
                      this.closed = !0,
                      this.disconnectedCallback && this.disconnectedCallback(),
                      this.client.close(),
                      this.timeout *= 2,
                      this.timeout = Math.min(this.timeout, 3e4),
                      n = void 0)
                  }
                  ), this.timeout),
                  self.addEventListener("offline", (async()=>{
                      await this.close(),
                      this.resolveRead(!1)
                  }
                  ))
              }
              ))
          }
          write(e) {
              if (this.closed)
                  throw r;
              this.client.send(e)
          }
          async close() {
              await this.client.close(),
              this.closed = !0
          }
          receive() {
              this.client.onmessage = async e=>{
                  await i.runExclusive((async()=>{
                      const t = e.data instanceof ArrayBuffer ? n.from(e.data) : n.from(await new Response(e.data).arrayBuffer());
                      this.stream = n.concat([this.stream, t]),
                      this.resolveRead(!0)
                  }
                  ))
              }
          }
      }
  }
  ,
  89832: (e,t,s)=>{
      const n = s(96748)
        , a = s(96472)
        , i = s(35544)
        , r = s(7214)
        , o = s(36411)
        , l = s(16151);
      e.exports = {
          BinaryWriter: a,
          BinaryReader: i,
          MessagePacker: o,
          AsyncQueue: l,
          Logger: n,
          PromisedWebSockets: r
      }
  }
  ,
  13522: (e,t,s)=>{
      const n = s(77150)
        , a = s(78742)
        , i = s(18415)
        , r = s(57404)
        , o = s(61472)
        , l = s(33182)
        , c = s(48960)
        , d = s(87873)
        , g = s(15886)
        , u = s(89832)
        , p = s(89618);
      e.exports = {
          Api: n,
          TelegramClient: a,
          sessions: g,
          connection: i,
          extensions: u,
          tl: r,
          version: o,
          events: l,
          utils: c,
          errors: d,
          helpers: p
      }
  }
  ,
  59870: (e,t,s)=>{
      "use strict";
      s.r(t),
      s.d(t, {
          doAuthentication: ()=>m
      });
      var n = s(77150)
        , a = s.n(n)
        , i = s(87873)
        , r = s(24736)
        , o = s.n(r);
      s(89618),
      s(48764).lW;
      const l = [{
          fingerprint: o()("-3414540481677951611"),
          n: o()("29379598170669337022986177149456128565388431120058863768162556424047512191330847455146576344487764408661701890505066208632169112269581063774293102577308490531282748465986139880977280302242772832972539403531316010870401287642763009136156734339538042419388722777357134487746169093539093850251243897188928735903389451772730245253062963384108812842079887538976360465290946139638691491496062099570836476454855996319192747663615955633778034897140982517446405334423701359108810182097749467210509584293428076654573384828809574217079944388301239431309115013843331317877374435868468779972014486325557807783825502498215169806323"),
          e: 65537
      }, {
          fingerprint: o()("-5595554452916591101"),
          n: o()("25342889448840415564971689590713473206898847759084779052582026594546022463853940585885215951168491965708222649399180603818074200620463776135424884632162512403163793083921641631564740959529419359595852941166848940585952337613333022396096584117954892216031229237302943701877588456738335398602461675225081791820393153757504952636234951323237820036543581047826906120927972487366805292115792231423684261262330394324750785450942589751755390156647751460719351439969059949569615302809050721500330239005077889855323917509948255722081644689442127297605422579707142646660768825302832201908302295573257427896031830742328565032949"),
          e: 65537
      }].reduce(((e,{fingerprint: t, ...s})=>(e.set(t.toString(), s),
      e)), new Map);
      var c = s(48764).lW;
      const d = s(24736)
        , g = s(32608)
        , u = s(13302)
        , p = s(89636)
        , f = s(89618)
        , h = s(35544)
        , _ = 20;
      async function m(e, t) {
          let s = f.generateRandomBytes(16);
          const n = f.readBigIntFromBuffer(s, !1, !0)
            , r = await e.send(new (a().ReqPqMulti)({
              nonce: n
          }));
          if (t.debug("Starting authKey generation step 1"),
          !(r instanceof a().ResPQ))
              throw new i.SecurityError(`Step 1 answer was ${r}`);
          if (r.nonce.neq(n))
              throw new i.SecurityError("Step 1 invalid nonce from server");
          const o = f.readBigIntFromBuffer(r.pq, !1, !0);
          t.debug("Finished authKey generation step 1");
          const {p: m, q: b} = p.factorize(o)
            , y = f.getByteArray(m)
            , v = f.getByteArray(b);
          s = f.generateRandomBytes(32);
          const w = f.readBigIntFromBuffer(s, !0, !0)
            , S = new (a().PQInnerData)({
              pq: f.getByteArray(o),
              p: y,
              q: v,
              nonce: r.nonce,
              serverNonce: r.serverNonce,
              newNonce: w
          }).getBytes();
          if (S.length > 144)
              throw new i.SecurityError("Step 1 invalid nonce from server");
          let P, C;
          for (const e of r.serverPublicKeyFingerprints)
              if (C = l.get(e.toString()),
              void 0 !== C) {
                  P = e;
                  break
              }
          if (void 0 === P || void 0 === C)
              throw new i.SecurityError("Step 2 could not find a valid key for fingerprints");
          const I = f.generateRandomBytes(192 - S.length)
            , k = c.concat([S, I])
            , M = c.from(k).reverse();
          let R;
          for (let e = 0; e < _; e++) {
              const e = f.generateRandomBytes(32)
                , s = await f.sha256(c.concat([e, k]))
                , n = c.concat([M, s])
                , a = new g(e,c.alloc(32)).encryptIge(n)
                , i = f.bufferXor(e, await f.sha256(a))
                , r = c.concat([i, a])
                , o = f.readBigIntFromBuffer(r, !1, !1);
              if (o.greaterOrEquals(C.n)) {
                  t.debug("Aes key greater than RSA. retrying");
                  continue
              }
              const l = f.modExp(o, d(C.e), C.n);
              R = f.readBufferFromBigInt(l, 256, !1, !1);
              break
          }
          if (void 0 === R)
              throw new i.SecurityError("Step 2 could create a secure encrypted key");
          t.debug("Step 2 : Generated a secure aes encrypted data");
          const A = await e.send(new (a().ReqDHParams)({
              nonce: r.nonce,
              serverNonce: r.serverNonce,
              p: y,
              q: v,
              publicKeyFingerprint: P,
              encryptedData: R
          }));
          if (!(A instanceof a().ServerDHParamsOk || A instanceof a().ServerDHParamsFail))
              throw new Error(`Step 2.1 answer was ${A}`);
          if (A.nonce.neq(r.nonce))
              throw new i.SecurityError("Step 2 invalid nonce from server");
          if (A.serverNonce.neq(r.serverNonce))
              throw new i.SecurityError("Step 2 invalid server nonce from server");
          if (A instanceof a().ServerDHParamsFail) {
              const e = await f.sha1(f.toSignedLittleBuffer(w, 32).slice(4, 20))
                , t = f.readBigIntFromBuffer(e, !0, !0);
              if (A.newNonceHash.neq(t))
                  throw new i.SecurityError("Step 2 invalid DH fail nonce from server")
          }
          if (!(A instanceof a().ServerDHParamsOk))
              throw new Error(`Step 2.2 answer was ${A}`);
          t.debug("Finished authKey generation step 2"),
          t.debug("Starting authKey generation step 3");
          const {key: E, iv: V} = await f.generateKeyDataFromNonce(r.serverNonce, w);
          if (A.encryptedAnswer.length % 16 != 0)
              throw new i.SecurityError("Step 3 AES block size mismatch");
          const T = new g(E,V)
            , B = T.decryptIge(A.encryptedAnswer)
            , x = new h(B)
            , D = x.read(20)
            , U = x.tgReadObject();
          if (!(U instanceof a().ServerDHInnerData))
              throw new Error(`Step 3 answer was ${U}`);
          const F = await f.sha1(U.getBytes());
          if (!D.equals(F))
              throw new i.SecurityError("Step 3 Invalid hash answer");
          if (U.nonce.neq(r.nonce))
              throw new i.SecurityError("Step 3 Invalid nonce in encrypted answer");
          if (U.serverNonce.neq(r.serverNonce))
              throw new i.SecurityError("Step 3 Invalid server nonce in encrypted answer");
          if (3 !== U.g || "c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d930f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f69458705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4ac8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba74d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9ca3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b" !== U.dhPrime.toString("hex"))
              throw new i.SecurityError("Step 3 invalid dhPrime or g");
          const q = f.readBigIntFromBuffer(U.dhPrime, !1, !1)
            , L = f.readBigIntFromBuffer(U.gA, !1, !1)
            , N = U.serverTime - Math.floor(Date.now() / 1e3)
            , O = f.readBigIntFromBuffer(f.generateRandomBytes(256), !1, !1)
            , G = f.modExp(d(U.g), O, q)
            , W = f.modExp(L, O, q);
          if (L.lesserOrEquals(1))
              throw new i.SecurityError("Step 3 failed ga > 1 check");
          if (G.lesserOrEquals(1))
              throw new i.SecurityError("Step 3 failed gb > 1 check");
          if (L.greater(q.minus(1)))
              throw new i.SecurityError("Step 3 failed ga > dh_prime - 1 check");
          const K = d(2).pow(1984);
          if (!L.greaterOrEquals(K) || !L.lesserOrEquals(q.minus(K)))
              throw new i.SecurityError("Step 3 failed dh_prime - 2^{2048-64} < ga < 2^{2048-64} check");
          if (!G.greaterOrEquals(K) || !G.lesserOrEquals(q.minus(K)))
              throw new i.SecurityError("Step 3 failed dh_prime - 2^{2048-64} < gb < 2^{2048-64} check");
          const j = new (a().ClientDHInnerData)({
              nonce: r.nonce,
              serverNonce: r.serverNonce,
              retryId: d.zero,
              gB: f.getByteArray(G, !1)
          }).getBytes()
            , H = c.concat([await f.sha1(j), j])
            , z = T.encryptIge(H)
            , $ = await e.send(new (a().SetClientDHParams)({
              nonce: r.nonce,
              serverNonce: r.serverNonce,
              encryptedData: z
          }))
            , J = [a().DhGenOk, a().DhGenRetry, a().DhGenFail];
          if (!($ instanceof J[0] || $ instanceof J[1] || $ instanceof J[2]))
              throw new Error(`Step 3.1 answer was ${$}`);
          const {name: Q} = $.constructor;
          if ($.nonce.neq(r.nonce))
              throw new i.SecurityError(`Step 3 invalid ${Q} nonce from server`);
          if ($.serverNonce.neq(r.serverNonce))
              throw new i.SecurityError(`Step 3 invalid ${Q} server nonce from server`);
          const Z = new u;
          await Z.setKey(f.getByteArray(W));
          const X = 1 + ["DhGenOk", "DhGenRetry", "DhGenFail"].indexOf($.className)
            , Y = await Z.calcNewNonceHash(w, X);
          if ($[`newNonceHash${X}`].neq(Y))
              throw new i.SecurityError("Step 3 invalid new nonce hash");
          if (!($ instanceof a().DhGenOk))
              throw new Error(`Step 3.2 answer was ${$}`);
          return t.debug("Finished authKey generation step 3"),
          {
              authKey: Z,
              timeOffset: N
          }
      }
  }
  ,
  45585: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(24736)
        , i = s(59109)
        , r = s(35544)
        , {InvalidBufferError: o} = s(48187)
        , {toSignedLittleBuffer: l} = s(89618);
      e.exports = class {
          constructor(e, t) {
              this._state = new i(e,t),
              this._connection = e
          }
          async send(e) {
              let t = e.getBytes()
                , s = this._state._getNewMsgId();
              const i = l(s, 8)
                , c = n.alloc(4);
              c.writeInt32LE(t.length, 0);
              const d = n.concat([n.concat([n.alloc(8), i, c]), t]);
              if (await this._connection.send(d),
              t = await this._connection.recv(),
              t.length < 8)
                  throw new o(t);
              const g = new r(t);
              if (g.readLong().neq(a(0)))
                  throw new Error("Bad authKeyId");
              if (s = g.readLong(),
              s.eq(a(0)))
                  throw new Error("Bad msgId");
              if (g.readInt() <= 0)
                  throw new Error("Bad length");
              return g.tgReadObject()
          }
      }
  }
  ,
  74046: (e,t,s)=>{
      function n(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const {RPCError: a} = s(87873)
        , i = s(45585)
        , r = s(59109)
        , o = s(89618)
        , l = s(13302)
        , {doAuthentication: c} = s(59870)
        , d = s(52301)
        , g = s(63254)
        , u = s(68963)
        , p = s(44287)
        , {MsgsAck: f, upload: h, MsgsStateInfo: _, Pong: m} = s(57404).constructors
        , b = s(36411)
        , y = s(35544)
        , v = s(71721)
        , {UpdateConnectionState: w, UpdateServerTimeOffset: S} = s(68744)
        , {BadMessageError: P} = s(48187)
        , {BadServerSalt: C, BadMsgNotification: I, MsgDetailedInfo: k, MsgNewDetailedInfo: M, NewSessionCreated: R, FutureSalts: A, MsgsStateReq: E, MsgResendReq: V, MsgsAllInfo: T, HttpWait: B} = s(57404).constructors
        , {SecurityError: x} = s(48187)
        , {InvalidBufferError: D} = s(48187)
        , {RPCMessageToError: U} = s(87873)
        , {TypeNotFoundError: F} = s(48187);
      class q {
          constructor(e, t) {
              n(this, "logWithIndex", {
                  debug: this.logWithIndexCallback("debug"),
                  log: this.logWithIndexCallback("log"),
                  warn: this.logWithIndexCallback("warn"),
                  error: this.logWithIndexCallback("error")
              });
              const s = {
                  ...q.DEFAULT_OPTIONS,
                  ...t
              };
              this._connection = void 0,
              this._fallbackConnection = void 0,
              this._shouldForceHttpTransport = s.shouldForceHttpTransport,
              this._shouldAllowHttpTransport = s.shouldAllowHttpTransport,
              this._log = s.logger,
              this._dcId = s.dcId,
              this._senderIndex = s.senderIndex,
              this._retries = s.retries,
              this._retriesToFallback = s.retriesToFallback,
              this._delay = s.delay,
              this._retryMainConnectionDelay = s.retryMainConnectionDelay,
              this._autoReconnect = s.autoReconnect,
              this._connectTimeout = s.connectTimeout,
              this._authKeyCallback = s.authKeyCallback,
              this._updateCallback = s.updateCallback,
              this._autoReconnectCallback = s.autoReconnectCallback,
              this._isMainSender = s.isMainSender,
              this._isExported = s.isExported,
              this._onConnectionBreak = s.onConnectionBreak,
              this._isFallback = !1,
              this._getShouldDebugExportedSenders = s.getShouldDebugExportedSenders,
              this.userDisconnected = !1,
              this._user_connected = !1,
              this.isReconnecting = !1,
              this._disconnected = !0,
              this._send_loop_handle = void 0,
              this._long_poll_loop_handle = void 0,
              this._recv_loop_handle = void 0,
              this.authKey = e || new l,
              this._state = new r(this.authKey,this._log),
              this._send_queue = new b(this._state,this._log),
              this._send_queue_long_poll = new b(this._state,this._log),
              this._pending_state = new v,
              this._pending_ack = new Set,
              this._last_acks = [],
              this._handlers = {
                  [d.CONSTRUCTOR_ID]: this._handleRPCResult.bind(this),
                  [g.CONSTRUCTOR_ID]: this._handleContainer.bind(this),
                  [u.CONSTRUCTOR_ID]: this._handleGzipPacked.bind(this),
                  [m.CONSTRUCTOR_ID]: this._handlePong.bind(this),
                  [C.CONSTRUCTOR_ID]: this._handleBadServerSalt.bind(this),
                  [I.CONSTRUCTOR_ID]: this._handleBadNotification.bind(this),
                  [k.CONSTRUCTOR_ID]: this._handleDetailedInfo.bind(this),
                  [M.CONSTRUCTOR_ID]: this._handleNewDetailedInfo.bind(this),
                  [R.CONSTRUCTOR_ID]: this._handleNewSessionCreated.bind(this),
                  [f.CONSTRUCTOR_ID]: this._handleAck.bind(this),
                  [A.CONSTRUCTOR_ID]: this._handleFutureSalts.bind(this),
                  [E.CONSTRUCTOR_ID]: this._handleStateForgotten.bind(this),
                  [V.CONSTRUCTOR_ID]: this._handleStateForgotten.bind(this),
                  [T.CONSTRUCTOR_ID]: this._handleMsgAll.bind(this)
              }
          }
          logWithIndexCallback(e) {
              return (...t)=>{
                  this._getShouldDebugExportedSenders && this._getShouldDebugExportedSenders() && console[e](`[${this._isExported ? `idx=${this._senderIndex} ` : "M "}dcId=${this._dcId}]`, ...t)
              }
          }
          getConnection() {
              return this._isFallback ? this._fallbackConnection : this._connection
          }
          async connect(e, t, s) {
              if (this.userDisconnected = !1,
              this._user_connected && !t)
                  return this._log.info("User is already connected!"),
                  !1;
              this.isConnecting = !0,
              this._isFallback = this._shouldForceHttpTransport && this._shouldAllowHttpTransport,
              this._connection = e,
              this._fallbackConnection = s;
              for (let e = 0; e < this._retries + this._retriesToFallback; e++)
                  try {
                      e >= this._retriesToFallback && this._shouldAllowHttpTransport && (this._isFallback = !0,
                      this.logWithIndex.warn("Using fallback connection"),
                      this._log.warn("Using fallback connection")),
                      this.logWithIndex.warn("Connecting..."),
                      await this._connect(this.getConnection()),
                      this.logWithIndex.warn("Connected!"),
                      this._isExported || this._updateCallback?.(new w(w.connected));
                      break
                  } catch (t) {
                      this._isExported || 0 !== e || this._updateCallback?.(new w(w.disconnected)),
                      this._log.error(`${this._isFallback ? "HTTP" : "WebSocket"} connection failed attempt: ${e + 1}`),
                      console.error(t),
                      await o.sleep(this._delay)
                  }
              return this.isConnecting = !1,
              this._isFallback && !this._shouldForceHttpTransport && this.tryReconnectToMain(),
              !0
          }
          async tryReconnectToMain() {
              if (this.isConnecting || !this._isFallback || this._isReconnectingToMain || this.isReconnecting || this._shouldForceHttpTransport || this._isExported)
                  await o.sleep(this._retryMainConnectionDelay);
              else {
                  this._log.debug("Trying to reconnect to main connection"),
                  this._isReconnectingToMain = !0;
                  try {
                      await this._connection.connect(),
                      this._log.info("Reconnected to main connection"),
                      this.logWithIndex.warn("Reconnected to main connection"),
                      this.isReconnecting = !0,
                      await this._disconnect(this._fallbackConnection),
                      await this.connect(this._connection, !0, this._fallbackConnection),
                      this.isReconnecting = !1,
                      this._isReconnectingToMain = !1
                  } catch (e) {
                      this.isReconnecting = !1,
                      this._isReconnectingToMain = !1,
                      this._log.error(`Failed to reconnect to main connection, retrying in ${this._retryMainConnectionDelay}ms`),
                      await o.sleep(this._retryMainConnectionDelay),
                      this.tryReconnectToMain()
                  }
              }
          }
          isConnected() {
              return this._user_connected
          }
          async disconnect() {
              this.userDisconnected = !0,
              this.logWithIndex.warn("Disconnecting..."),
              await this._disconnect(this.getConnection())
          }
          destroy() {
              this._send_queue.clear()
          }
          send(e, t, s=!1) {
              const n = new p(e,t);
              return s ? this._send_queue_long_poll.append(n) : (this.logWithIndex.debug(`Send ${e.className}`),
              this._send_queue.append(n)),
              n.promise
          }
          addStateToQueue(e) {
              this._send_queue.append(e)
          }
          async sendBeacon(e) {
              if (!this._user_connected)
                  throw new Error("Cannot send requests while disconnected");
              const t = new p(e,void 0)
                , s = await this._send_queue.getBeacon(t)
                , n = await this._state.encryptMessageData(s);
              postMessage({
                  type: "sendBeacon",
                  data: n,
                  url: this._fallbackConnection.href
              })
          }
          async _connect(e) {
              if (e.isConnected() || (this._log.info("Connecting to {0}...".replace("{0}", e)),
              await e.connect(),
              this._log.debug("Connection success!")),
              this.authKey.getKey())
                  this._authenticated = !0,
                  this._log.debug("Already have an auth key ...");
              else {
                  const t = new i(e,this._log);
                  this._log.debug("New auth_key attempt ...");
                  const s = await c(t, this._log);
                  this._log.debug("Generated new auth_key successfully"),
                  await this.authKey.setKey(s.authKey),
                  this._state.timeOffset = s.timeOffset,
                  this._isExported || this._updateCallback?.(new S(this._state.timeOffset)),
                  this._authKeyCallback && await this._authKeyCallback(this.authKey, this._dcId)
              }
              this._user_connected = !0,
              this.isReconnecting = !1,
              this._send_loop_handle || (this._log.debug("Starting send loop"),
              this._send_loop_handle = this._sendLoop()),
              this._recv_loop_handle || (this._log.debug("Starting receive loop"),
              this._recv_loop_handle = this._recvLoop()),
              !this._long_poll_loop_handle && e.shouldLongPoll && (this._log.debug("Starting long-poll loop"),
              this._long_poll_loop_handle = this._longPollLoop()),
              this._log.info("Connection to %s complete!".replace("%s", e.toString()))
          }
          async _disconnect(e) {
              this._isExported || this._updateCallback?.(new w(w.disconnected)),
              void 0 !== e ? (this._log.info("Disconnecting from %s...".replace("%s", e.toString())),
              this._user_connected = !1,
              this._log.debug("Closing current connection..."),
              this.logWithIndex.warn("Disconnecting"),
              await e.disconnect()) : this._log.info("Not disconnecting (already have no connection)")
          }
          async _longPollLoop() {
              for (; this._user_connected && !this.isReconnecting && this._isFallback && this.getConnection().shouldLongPoll; ) {
                  await this._send_queue_long_poll.wait();
                  const e = await this._send_queue_long_poll.get();
                  if (this.isReconnecting || !this._isFallback)
                      return void (this._long_poll_loop_handle = void 0);
                  if (!e)
                      continue;
                  let {data: t} = e;
                  const {batch: s} = e;
                  this._log.debug(`Encrypting ${s.length} message(s) in ${t.length} bytes for sending`),
                  t = await this._state.encryptMessageData(t);
                  try {
                      await this._fallbackConnection.send(t)
                  } catch (e) {
                      return this._log.error(e),
                      this._log.info("Connection closed while sending data"),
                      this._long_poll_loop_handle = void 0,
                      this.isSendingLongPoll = !1,
                      void (this.userDisconnected || this.reconnect())
                  }
                  this.isSendingLongPoll = !1,
                  this.checkLongPoll()
              }
              this._long_poll_loop_handle = void 0
          }
          async _sendLoop() {
              for (this._send_queue.prepend(this._pending_state.values()),
              this._pending_state.clear(); this._user_connected && !this.isReconnecting; ) {
                  const e = ()=>{
                      if (this._pending_ack.size) {
                          const e = new p(new f({
                              msgIds: Array(...this._pending_ack)
                          }));
                          this._send_queue.append(e),
                          this._last_acks.push(e),
                          this._last_acks.length >= 10 && this._last_acks.shift(),
                          this._pending_ack.clear()
                      }
                  }
                  ;
                  e(),
                  this.logWithIndex.debug(`Waiting for messages to send... ${this.isReconnecting}`),
                  this._log.debug(`Waiting for messages to send... ${this.isReconnecting}`),
                  await this._send_queue.wait(),
                  this._isFallback && this.send(new B({
                      maxDelay: 0,
                      waitAfter: 0,
                      maxWait: 0
                  })),
                  e();
                  const t = await this._send_queue.get();
                  if (this.logWithIndex.debug(`Got ${t?.batch.length} message(s) to send`),
                  !t)
                      continue;
                  let {data: s} = t;
                  const {batch: n} = t;
                  for (const e of n)
                      if (Array.isArray(e))
                          for (const t of e)
                              "request" === t.request.classType && "HttpWait" !== t.request.className && this._pending_state.set(t.msgId, t);
                      else
                          "request" === e.request.classType && "HttpWait" !== e.request.className && this._pending_state.set(e.msgId, e);
                  if (this.isReconnecting)
                      return this.logWithIndex.debug("Reconnecting :("),
                      void (this._send_loop_handle = void 0);
                  this._log.debug(`Encrypting ${n.length} message(s) in ${s.length} bytes for sending`),
                  this.logWithIndex.debug("Sending", n.map((e=>e.request.className))),
                  s = await this._state.encryptMessageData(s);
                  try {
                      await this.getConnection().send(s)
                  } catch (e) {
                      return this.logWithIndex.debug(`Connection closed while sending data ${e}`),
                      this._log.error(e),
                      this._log.info("Connection closed while sending data"),
                      this._send_loop_handle = void 0,
                      void (this.userDisconnected || this.reconnect())
                  } finally {
                      for (const e of n)
                          if (Array.isArray(e))
                              for (const t of e)
                                  "HttpWait" === t.request.className && e.resolve();
                          else
                              "HttpWait" === e.request.className && e.resolve();
                      this.logWithIndex.debug("Encrypted messages put in a queue to be sent"),
                      this._log.debug("Encrypted messages put in a queue to be sent")
                  }
              }
              this._send_loop_handle = void 0
          }
          async _recvLoop() {
              let e, t;
              for (; this._user_connected && !this.isReconnecting; ) {
                  this._log.debug("Receiving items from the network..."),
                  this.logWithIndex.debug("Receiving items from the network...");
                  try {
                      e = await this.getConnection().recv()
                  } catch (e) {
                      return this.userDisconnected || (this._log.error(e),
                      this._log.warn("Connection closed while receiving data"),
                      this.reconnect()),
                      void (this._recv_loop_handle = void 0)
                  }
                  try {
                      t = await this._state.decryptMessageData(e)
                  } catch (e) {
                      if (this.logWithIndex.debug(`Error while receiving items from the network ${e.toString()}`),
                      e instanceof F) {
                          this._log.info(`Type ${e.invalidConstructorId} not found, remaining data ${e.remaining}`);
                          continue
                      }
                      if (e instanceof x) {
                          this._log.warn(`Security error while unpacking a received message: ${e}`);
                          continue
                      }
                      return e instanceof D ? (404 === e.code ? this._handleBadAuthKey() : (this._log.warn(`Invalid buffer ${e.code} for dc ${this._dcId}`),
                      this.reconnect()),
                      void (this._recv_loop_handle = void 0)) : (this._log.error("Unhandled error while receiving data"),
                      this._log.error(e),
                      this.reconnect(),
                      void (this._recv_loop_handle = void 0))
                  }
                  try {
                      await this._processMessage(t)
                  } catch (e) {
                      e instanceof a ? "AUTH_KEY_UNREGISTERED" !== e.message && "SESSION_REVOKED" !== e.message || this._handleBadAuthKey(!0) : (this._log.error("Unhandled error while receiving data"),
                      this._log.error(e))
                  }
                  this.checkLongPoll()
              }
              this._recv_loop_handle = void 0
          }
          checkLongPoll() {
              !this.isSendingLongPoll && this._isFallback && (this.isSendingLongPoll = !0,
              this.send(new B({
                  maxDelay: 500,
                  waitAfter: 150,
                  maxWait: 3e3
              }), void 0, !0))
          }
          _handleBadAuthKey(e) {
              e && this._isMainSender || (this._log.warn(`Broken authorization key for dc ${this._dcId}, resetting...`),
              this._isMainSender && !this._isExported ? this._updateCallback?.(new w(w.broken)) : !this._isMainSender && this._onConnectionBreak && this._onConnectionBreak(this._dcId))
          }
          async _processMessage(e) {
              if ("MsgsAck" === e.obj.className)
                  return;
              this.logWithIndex.debug(`Process message ${e.obj.className}`),
              this._pending_ack.add(e.msgId),
              this.getConnection().shouldLongPoll && this._send_queue.setReady(!0),
              e.obj = await e.obj;
              let t = this._handlers[e.obj.CONSTRUCTOR_ID];
              t || (t = this._handleUpdate.bind(this)),
              await t(e)
          }
          _popStates(e) {
              const t = this._pending_state.getAndDelete(e);
              if (t)
                  return [t];
              const s = [];
              for (const t of this._pending_state.values())
                  t.containerId?.equals(e) && s.push(t.msgId);
              if (s.length) {
                  const e = [];
                  for (const t of s)
                      e.push(this._pending_state.getAndDelete(t));
                  return e
              }
              for (const t of this._last_acks)
                  if (t.msgId === e)
                      return [t];
              return []
          }
          _handleRPCResult(e) {
              const t = e.obj
                , s = this._pending_state.getAndDelete(t.reqMsgId);
              if (this._log.debug(`Handling RPC result for message ${t.reqMsgId}`),
              s) {
                  if (t.error) {
                      const e = U(t.error, s.request);
                      throw this._send_queue.append(new p(new f({
                          msgIds: [s.msgId]
                      }))),
                      s.reject(e),
                      e
                  }
                  try {
                      const e = new y(t.body)
                        , n = s.request.readResult(e);
                      this.logWithIndex.debug("Handling RPC result", n),
                      s.resolve(n)
                  } catch (e) {
                      throw s.reject(e),
                      e
                  }
              } else
                  try {
                      if (!(new y(t.body).tgReadObject()instanceof h.File))
                          throw new F("Not an upload.File")
                  } catch (e) {
                      if (e instanceof F)
                          return void this._log.info(`Received response without parent request: ${t.body}`);
                      if (this._isFallback)
                          return;
                      throw e
                  }
          }
          async _handleContainer(e) {
              this._log.debug("Handling container");
              for (const t of e.obj.messages)
                  await this._processMessage(t)
          }
          async _handleGzipPacked(e) {
              this._log.debug("Handling gzipped data");
              const t = new y(e.obj.data);
              e.obj = t.tgReadObject(),
              await this._processMessage(e)
          }
          _handleUpdate(e) {
              2331323052 === e.obj.SUBCLASS_OF_ID ? (this._log.debug(`Handling update ${e.obj.className}`),
              this._isExported || this._updateCallback?.(e.obj)) : this._log.warn(`Note: ${e.obj.className} is not an update, not dispatching it`)
          }
          _handlePong(e) {
              const t = e.obj
                , s = this._state.updateTimeOffset(e.msgId);
              this._isExported || this._updateCallback?.(new S(s)),
              this._log.debug(`Handling pong for message ${t.msgId}`);
              const n = this._pending_state.getAndDelete(t.msgId);
              n && n.resolve(t)
          }
          _handleBadServerSalt(e) {
              const t = e.obj;
              this._log.debug(`Handling bad salt for message ${t.badMsgId}`),
              this._state.salt = t.newServerSalt;
              const s = this._popStates(t.badMsgId);
              this._send_queue.extend(s),
              this._log.debug(`${s.length} message(s) will be resent`)
          }
          _handleBadNotification(e) {
              const t = e.obj
                , s = this._popStates(t.badMsgId);
              if (this._log.debug(`Handling bad msg ${JSON.stringify(t)}`),
              [16, 17].includes(t.errorCode)) {
                  const t = this._state.updateTimeOffset(e.msgId);
                  this._isExported || this._updateCallback?.(new S(t)),
                  this._log.info(`System clock is wrong, set time offset to ${t}s`)
              } else if (32 === t.errorCode)
                  this._state._sequence += 64;
              else {
                  if (33 !== t.errorCode) {
                      for (const e of s)
                          e.reject(new P(e.request,t.errorCode));
                      return
                  }
                  this._state._sequence -= 16
              }
              this._send_queue.extend(s),
              this._log.debug(`${s.length} messages will be resent due to bad msg`)
          }
          _handleDetailedInfo(e) {
              const t = e.obj.answerMsgId;
              this._log.debug(`Handling detailed info for message ${t}`),
              this._pending_ack.add(t)
          }
          _handleNewDetailedInfo(e) {
              const t = e.obj.answerMsgId;
              this._log.debug(`Handling new detailed info for message ${t}`),
              this._pending_ack.add(t)
          }
          _handleNewSessionCreated(e) {
              this._log.debug("Handling new session created"),
              this._state.salt = e.obj.serverSalt
          }
          _handleAck() {}
          _handleFutureSalts(e) {
              this._log.debug(`Handling future salts for message ${e.msgId}`);
              const t = this._pending_state.getAndDelete(e.msgId);
              t && t.resolve(e.obj)
          }
          _handleStateForgotten(e) {
              this._send_queue.append(new p(new _({
                  msgId: e.msgId,
                  query: String.fromCharCode(1).repeat(e.obj.msgIds)
              })))
          }
          _handleMsgAll(e) {}
          reconnect() {
              this._user_connected && !this.isReconnecting && (this.isReconnecting = !0,
              o.sleep(1e3).then((()=>{
                  this.logWithIndex.log("Reconnecting..."),
                  this._log.info("Started reconnecting"),
                  this._reconnect()
              }
              )))
          }
          async _reconnect() {
              this._log.debug("Closing current connection...");
              try {
                  this.logWithIndex.warn("[Reconnect] Closing current connection..."),
                  await this._disconnect(this.getConnection())
              } catch (e) {
                  this._log.warn(e)
              }
              this._send_queue.append(void 0),
              this._state.reset();
              const e = new this._connection.constructor(this._connection._ip,this._connection._port,this._connection._dcId,this._connection._log,this._connection._testServers)
                , t = new this._fallbackConnection.constructor(this._connection._ip,this._connection._port,this._connection._dcId,this._connection._log,this._connection._testServers);
              await this.connect(e, !0, t),
              this.isReconnecting = !1,
              this._send_queue.prepend(this._pending_state.values()),
              this._pending_state.clear(),
              this._autoReconnectCallback && await this._autoReconnectCallback()
          }
      }
      n(q, "DEFAULT_OPTIONS", {
          logger: void 0,
          retries: 1 / 0,
          retriesToFallback: 1,
          delay: 2e3,
          retryMainConnectionDelay: 1e4,
          shouldForceHttpTransport: !1,
          shouldAllowHttpTransport: !1,
          autoReconnect: !0,
          connectTimeout: void 0,
          authKeyCallback: void 0,
          updateCallback: void 0,
          autoReconnectCallback: void 0,
          isMainSender: void 0,
          onConnectionBreak: void 0,
          isExported: void 0,
          getShouldDebugExportedSenders: void 0
      }),
      e.exports = q
  }
  ,
  59109: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(24736)
        , i = s(28136)
        , r = s(89618)
        , o = s(32608)
        , l = s(35544)
        , c = s(68963)
        , {TLMessage: d} = s(92058)
        , {SecurityError: g, InvalidBufferError: u} = s(48187)
        , {InvokeAfterMsg: p} = s(57404).requests
        , {toSignedLittleBuffer: f} = s(89618);
      e.exports = class {
          constructor(e, t, s=!1, n=!1) {
              this.authKey = e,
              this._log = t,
              this._isCall = s,
              this._isOutgoing = n,
              this.timeOffset = 0,
              this.salt = 0,
              this.id = void 0,
              this._sequence = void 0,
              this._lastMsgId = void 0,
              this.msgIds = [],
              this.reset()
          }
          reset() {
              this.id = r.generateRandomLong(!0),
              this._sequence = 0,
              this._lastMsgId = a(0),
              this.msgIds = []
          }
          updateMessageId(e) {
              e.msgId = this._getNewMsgId()
          }
          async _calcKey(e, t, s) {
              const a = this._isCall ? 128 + (this._isOutgoing ^ s ? 8 : 0) : !0 === s ? 0 : 8
                , [i,o] = await Promise.all([r.sha256(n.concat([t, e.slice(a, a + 36)])), r.sha256(n.concat([e.slice(a + 40, a + 76), t]))])
                , l = n.concat([i.slice(0, 8), o.slice(8, 24), i.slice(24, 32)]);
              return this._isCall ? {
                  key: l,
                  iv: n.concat([o.slice(0, 4), i.slice(8, 16), o.slice(24, 28)])
              } : {
                  key: l,
                  iv: n.concat([o.slice(0, 8), i.slice(8, 24), o.slice(24, 32)])
              }
          }
          async writeDataAsMessage(e, t, s, a) {
              const i = this._getNewMsgId()
                , r = this._getSeqNo(s);
              let o;
              o = a ? await c.gzipIfSmaller(s, new p({
                  msgId: a,
                  query: {
                      getBytes: ()=>t
                  }
              }).getBytes()) : await c.gzipIfSmaller(s, t);
              const l = n.alloc(4);
              l.writeInt32LE(r, 0);
              const d = n.alloc(4);
              d.writeInt32LE(o.length, 0);
              const g = f(i, 8);
              return e.write(n.concat([g, l, d])),
              e.write(o),
              i
          }
          async encryptMessageData(e) {
              if (await this.authKey.waitForKey(),
              this._isCall) {
                  const t = 128 + (this._isOutgoing ? 0 : 8)
                    , s = e.length;
                  e = n.from(e),
                  s % 4 != 0 && (e = n.concat([e, n.from(new Array(4 - s % 4).fill(32))]));
                  const a = (await r.sha256(n.concat([this.authKey.getKey().slice(88 + t, 88 + t + 32), n.from(e)]))).slice(8, 24)
                    , {iv: o, key: l} = await this._calcKey(this.authKey.getKey(), a, !0);
                  return e = r.convertToLittle(new i.CTR(l,o).encrypt(e)),
                  n.concat([a, e])
              }
              {
                  const t = f(this.salt, 8)
                    , s = f(this.id, 8);
                  e = n.concat([n.concat([t, s]), e]);
                  const a = r.generateRandomBytes(r.mod(-(e.length + 12), 16) + 12)
                    , i = (await r.sha256(n.concat([this.authKey.getKey().slice(88, 120), e, a]))).slice(8, 24)
                    , {iv: l, key: c} = await this._calcKey(this.authKey.getKey(), i, !0)
                    , d = r.readBufferFromBigInt(this.authKey.keyId, 8);
                  return n.concat([d, i, new o(c,l).encryptIge(n.concat([e, a]))])
              }
          }
          async decryptMessageData(e) {
              if (e.length < 8)
                  throw new u(e);
              if (e.length < 0)
                  throw new g("Server replied with negative length");
              if (e.length % 4 != 0 && !this._isCall)
                  throw new g("Server replied with length not divisible by 4");
              if (!this._isCall && r.readBigIntFromBuffer(e.slice(0, 8)).neq(this.authKey.keyId))
                  throw new g("Server replied with an invalid auth key");
              const t = this._isCall ? e.slice(0, 16) : e.slice(8, 24)
                , s = this._isCall ? 128 + (this.isOutgoing ? 8 : 0) : void 0
                , {iv: a, key: c} = await this._calcKey(this.authKey.getKey(), t, !1);
              if (this._isCall) {
                  const t = (e = e.slice(16)).length;
                  e = n.concat([e, n.from(new Array(4 - t % 4).fill(0))]),
                  e = (e = r.convertToLittle(new i.CTR(c,a).decrypt(e))).slice(0, t)
              } else
                  e = new o(c,a).decryptIge(this._isCall ? e.slice(16) : e.slice(24));
              const p = this._isCall ? await r.sha256(n.concat([this.authKey.getKey().slice(88 + s, 88 + s + 32), e])) : await r.sha256(n.concat([this.authKey.getKey().slice(96, 128), e]));
              if (!this._isCall && !t.equals(p.slice(8, 24)))
                  throw new g("Received msg_key doesn't match with expected one");
              const f = new l(e);
              if (this._isCall)
                  return f.readInt(!1),
                  f.read(e.length - 4);
              {
                  if (f.readLong(),
                  !f.readLong().eq(this.id))
                      throw new g("Server replied with a wrong session ID");
                  const t = f.readLong();
                  if (this.msgIds.includes(t.toString()))
                      throw new g("Duplicate msgIds");
                  this.msgIds.length > 500 && this.msgIds.shift();
                  const s = f.readInt()
                    , n = f.readInt()
                    , a = e.length - n;
                  if (a < 12 || a > 1024)
                      throw new g("Server replied with the wrong message padding");
                  const i = await f.tgReadObject();
                  if (i?.className?.startsWith("Update")) {
                      const e = Math.floor(Date.now() / 1e3)
                        , s = this.getMsgIdTimeLocal(t);
                      if (s && (s - e > 30 || e - s > 300))
                          throw new g("The message time is incorrect.")
                  }
                  return i && !("errorCode"in i) && this.msgIds.push(t.toString()),
                  new d(t,s,i)
              }
          }
          _getNewMsgId() {
              const e = Date.now() / 1e3 + this.timeOffset
                , t = Math.floor(1e9 * (e - Math.floor(e)));
              let s = a(Math.floor(e)).shiftLeft(a(32)).or(a(t).shiftLeft(a(2)));
              return this._lastMsgId.greaterOrEquals(s) && (s = this._lastMsgId.add(a(4))),
              this._lastMsgId = s,
              s
          }
          getMsgIdTimeLocal(e) {
              return !this._lastMsgId.eq(0) && e.shiftRight(a(32)).toJSNumber() - this.timeOffset
          }
          updateTimeOffset(e) {
              const t = this._getNewMsgId()
                , s = this.timeOffset
                , n = Math.floor(Date.now() / 1e3)
                , i = e.shiftRight(a(32));
              return this.timeOffset = i - n,
              this.timeOffset !== s && (this._lastMsgId = a(0),
              this._log.debug(`Updated time offset (old offset ${s}, bad ${t}, good ${e}, new ${this.timeOffset})`)),
              this.timeOffset
          }
          _getSeqNo(e) {
              if (e) {
                  const e = 2 * this._sequence + 1;
                  return this._sequence += 1,
                  e
              }
              return 2 * this._sequence
          }
      }
  }
  ,
  44287: (e,t,s)=>{
      const n = s(46586).Z;
      e.exports = class {
          constructor(e, t=void 0) {
              this.containerId = void 0,
              this.msgId = void 0,
              this.request = e,
              this.data = e.getBytes(),
              this.after = void 0,
              this.result = void 0,
              this.abortSignal = t,
              this.finished = new n,
              this.resetPromise()
          }
          isReady() {
              return !this.after || this.after.finished.promise
          }
          resetPromise() {
              this.reject?.(),
              this.promise = new Promise(((e,t)=>{
                  this.resolve = e,
                  this.reject = t
              }
              ))
          }
      }
  }
  ,
  34353: (e,t,s)=>{
      function n(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const a = s(7214)
        , i = s(33673).Z
        , r = s(16151);
      class o {
          constructor(e, t, s, i, o, l) {
              n(this, "PacketCodecClass", void 0),
              this._ip = e,
              this._port = t,
              this._dcId = s,
              this._log = i,
              this._testServers = o,
              this._isPremium = l,
              this._connected = !1,
              this._sendTask = void 0,
              this._recvTask = void 0,
              this._codec = void 0,
              this._obfuscation = void 0,
              this._sendArray = new r,
              this._recvArray = new r,
              this.shouldLongPoll = !1,
              this.socket = new a(this.disconnectCallback.bind(this))
          }
          isConnected() {
              return this._connected
          }
          async disconnectCallback() {
              await this.disconnect(!0)
          }
          async _connect() {
              this._log.debug("Connecting"),
              this._codec = new this.PacketCodecClass(this),
              await this.socket.connect(this._port, this._ip, this._testServers, this._isPremium),
              this._log.debug("Finished connecting"),
              await this._initConn()
          }
          async connect() {
              await this._connect(),
              this._connected = !0,
              this._sendTask || (this._sendTask = this._sendLoop()),
              this._recvTask = this._recvLoop()
          }
          async disconnect(e=!1) {
              this._connected && (this._connected = !1,
              this._recvArray.push(void 0),
              e || await this.socket.close())
          }
          async send(e) {
              if (!this._connected)
                  throw new Error("Not connected");
              await this._sendArray.push(e)
          }
          async recv() {
              for (; this._connected; ) {
                  const e = await this._recvArray.pop();
                  if (e)
                      return e
              }
              throw new Error("Not connected")
          }
          async _sendLoop() {
              try {
                  for (; this._connected; ) {
                      const e = await this._sendArray.pop();
                      if (!e)
                          return void (this._sendTask = void 0);
                      await this._send(e)
                  }
              } catch (e) {
                  this._log.info("The server closed the connection while sending")
              }
          }
          async _recvLoop() {
              let e;
              for (; this._connected; ) {
                  try {
                      if (e = await this._recv(),
                      !e)
                          throw new Error("no data received")
                  } catch (e) {
                      return this._log.info("connection closed"),
                      void this.disconnect()
                  }
                  await this._recvArray.push(e)
              }
          }
          async _initConn() {
              this._codec.tag && await this.socket.write(this._codec.tag)
          }
          _send(e) {
              const t = this._codec.encodePacket(e);
              this.socket.write(t)
          }
          _recv() {
              return this._codec.readPacket(this.socket)
          }
          toString() {
              return `${this._ip}:${this._port}/${this.constructor.name.replace("Connection", "")}`
          }
      }
      e.exports = {
          Connection: o,
          PacketCodec: class {
              constructor(e) {
                  this._conn = e
              }
              encodePacket(e) {
                  throw new Error("Not Implemented")
              }
              readPacket(e) {
                  throw new Error("Not Implemented")
              }
          }
          ,
          ObfuscatedConnection: class extends o {
              constructor(...e) {
                  super(...e),
                  n(this, "ObfuscatedIO", void 0)
              }
              _initConn() {
                  this._obfuscation = new this.ObfuscatedIO(this),
                  this.socket.write(this._obfuscation.header)
              }
              _send(e) {
                  this._obfuscation.write(this._codec.encodePacket(e))
              }
              _recv() {
                  return this._codec.readPacket(this._obfuscation)
              }
          }
          ,
          HttpConnection: class extends o {
              constructor(e, t, s, n, a, r) {
                  super(e, t, s, n, a, r),
                  this.shouldLongPoll = !0,
                  this.socket = new i(this.disconnectCallback.bind(this)),
                  this.href = i.getURL(this._ip, this._port, this._testServers, this._isPremium)
              }
              send(e) {
                  return this.socket.write(e)
              }
              recv() {
                  return this.socket.read()
              }
              async _connect() {
                  this._log.debug("Connecting"),
                  await this.socket.connect(this._port, this._ip, this._testServers, this._isPremium),
                  this._log.debug("Finished connecting")
              }
              async connect() {
                  await this._connect(),
                  this._connected = !0
              }
          }
      }
  }
  ,
  26302: (e,t,s)=>{
      var n = s(48764).lW;

      function a(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const i = s(24736)
        , {readBufferFromBigInt: r} = s(89618)
        , {Connection: o, PacketCodec: l} = s(34353);
      class c extends l {
          constructor(e) {
              super(e),
              this.tag = c.tag,
              this.obfuscateTag = c.obfuscateTag
          }
          encodePacket(e) {
              let t = e.length >> 2;
              if (t < 127) {
                  const e = n.alloc(1);
                  e.writeUInt8(t, 0),
                  t = e
              } else
                  t = n.concat([n.from("7f", "hex"), r(i(t), 3)]);
              return n.concat([t, e])
          }
          async readPacket(e) {
              let t = (await e.read(1))[0];
              return t >= 127 && (t = n.concat([await e.read(3), n.alloc(1)]).readInt32LE(0)),
              e.read(t << 2)
          }
      }
      a(c, "tag", n.from("ef", "hex")),
      a(c, "obfuscateTag", n.from("efefefef", "hex")),
      e.exports = {
          ConnectionTCPAbridged: class extends o {
              constructor(...e) {
                  super(...e),
                  a(this, "PacketCodecClass", c)
              }
          }
          ,
          AbridgedPacketCodec: c
      }
  }
  ,
  5484: ()=>{}
  ,
  72986: (e,t,s)=>{
      var n = s(48764).lW;

      function a(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const {generateRandomBytes: i} = s(89618)
        , {ObfuscatedConnection: r} = s(34353)
        , {AbridgedPacketCodec: o} = s(26302)
        , l = s(55830);
      class c {
          constructor(e) {
              a(this, "header", void 0),
              this.connection = e.socket;
              const t = this.initHeader(e.PacketCodecClass);
              this.header = t.random,
              this._encrypt = t.encryptor,
              this._decrypt = t.decryptor
          }
          initHeader(e) {
              const t = [n.from("50567247", "hex"), n.from("474554", "hex"), n.from("504f5354", "hex"), n.from("eeeeeeee", "hex")];
              let s;
              for (; ; )
                  if (s = i(64),
                  239 !== s[0] && !s.slice(4, 8).equals(n.alloc(4))) {
                      let e = !0;
                      for (const n of t)
                          if (n.equals(s.slice(0, 4))) {
                              e = !1;
                              break
                          }
                      if (e)
                          break
                  }
              s = s.toJSON().data;
              const a = n.from(s.slice(8, 56)).reverse()
                , r = n.from(s.slice(8, 40))
                , o = n.from(s.slice(40, 56))
                , c = n.from(a.slice(0, 32))
                , d = n.from(a.slice(32, 48))
                , g = new l(r,o)
                , u = new l(c,d);
              return s = n.concat([n.from(s.slice(0, 56)), e.obfuscateTag, n.from(s.slice(60))]),
              s = n.concat([n.from(s.slice(0, 56)), n.from(g.encrypt(s).slice(56, 64)), n.from(s.slice(64))]),
              {
                  random: s,
                  encryptor: g,
                  decryptor: u
              }
          }
          async read(e) {
              const t = await this.connection.readExactly(e);
              return this._decrypt.encrypt(t)
          }
          write(e) {
              this.connection.write(this._encrypt.encrypt(e))
          }
      }
      e.exports = {
          ConnectionTCPObfuscated: class extends r {
              constructor(...e) {
                  super(...e),
                  a(this, "ObfuscatedIO", c),
                  a(this, "PacketCodecClass", o)
              }
          }
      }
  }
  ,
  30417: (e,t,s)=>{
      const {Connection: n, HttpConnection: a} = s(34353)
        , {ConnectionTCPFull: i} = s(5484)
        , {ConnectionTCPAbridged: r} = s(26302)
        , {ConnectionTCPObfuscated: o} = s(72986);
      e.exports = {
          Connection: n,
          HttpConnection: a,
          ConnectionTCPFull: i,
          ConnectionTCPAbridged: r,
          ConnectionTCPObfuscated: o
      }
  }
  ,
  18415: (e,t,s)=>{
      const n = s(45585)
        , a = s(74046)
        , {Connection: i, ConnectionTCPFull: r, ConnectionTCPAbridged: o, ConnectionTCPObfuscated: l, HttpConnection: c} = s(30417)
        , {UpdateConnectionState: d, UpdateServerTimeOffset: g} = s(68744);
      e.exports = {
          Connection: i,
          HttpConnection: c,
          ConnectionTCPFull: r,
          ConnectionTCPAbridged: o,
          ConnectionTCPObfuscated: l,
          MTProtoPlainSender: n,
          MTProtoSender: a,
          UpdateConnectionState: d,
          UpdateServerTimeOffset: g
      }
  }
  ,
  68744: e=>{
      function t(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      class s {
          constructor(e, t) {
              this.state = e,
              this.origin = t
          }
      }
      t(s, "disconnected", -1),
      t(s, "connected", 1),
      t(s, "broken", 0),
      e.exports = {
          UpdateConnectionState: s,
          UpdateServerTimeOffset: class {
              constructor(e) {
                  this.timeOffset = e
              }
          }
      }
  }
  ,
  59270: e=>{
      e.exports = class {
          get dcId() {
              throw new Error("Not Implemented")
          }
          get serverAddress() {
              throw new Error("Not Implemented")
          }
          get port() {
              throw new Error("Not Implemented")
          }
          get authKey() {
              throw new Error("Not Implemented")
          }
          set authKey(e) {
              throw new Error("Not Implemented")
          }
          setDC(e, t, s) {
              throw new Error("Not implemented")
          }
          save() {
              throw new Error("Not Implemented")
          }
          delete() {
              throw new Error("Not Implemented")
          }
      }
  }
  ,
  926: (e,t,s)=>{
      const n = s(28753)
        , a = "GramJs";
      e.exports = class extends n {
          async _delete() {
              const e = new Request(this._storageKey);
              return (await self.caches.open(a)).delete(e)
          }
          async _fetchFromCache() {
              const e = new Request(this._storageKey)
                , t = await self.caches.open(a)
                , s = await t.match(e);
              return s ? s.text() : void 0
          }
          async _saveToCache(e) {
              const t = new Request(this._storageKey)
                , s = new Response(e);
              return (await self.caches.open(a)).put(t, s)
          }
      }
  }
  ,
  80007: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(33995)
        , i = s(13302)
        , r = s(48960);
      e.exports = class extends a {
          constructor(e, t) {
              super(),
              this._sessionData = e,
              this._callback = t,
              this._authKeys = {}
          }
          get authKey() {
              throw new Error("Not supported")
          }
          set authKey(e) {
              throw new Error("Not supported")
          }
          async load() {
              if (!this._sessionData)
                  return;
              const {mainDcId: e, keys: t, hashes: s} = this._sessionData
                , {ipAddress: a, port: o} = r.getDC(e);
              this.setDC(e, a, o, !0),
              await Promise.all(Object.keys(t).map((async e=>{
                  const a = "string" == typeof t[e] ? n.from(t[e], "hex") : n.from(t[e]);
                  if (s[e]) {
                      const t = "string" == typeof s[e] ? n.from(s[e], "hex") : n.from(s[e]);
                      this._authKeys[e] = new i(a,t)
                  } else
                      this._authKeys[e] = new i,
                      await this._authKeys[e].setKey(a, !0)
              }
              )))
          }
          setDC(e, t, s, n=!1) {
              this._dcId = e,
              this._serverAddress = t,
              this._port = s,
              delete this._authKeys[e],
              n || this._onUpdate()
          }
          getAuthKey(e=this._dcId) {
              return this._authKeys[e]
          }
          setAuthKey(e, t=this._dcId) {
              this._authKeys[t] = e,
              this._onUpdate()
          }
          getSessionData() {
              const e = {
                  mainDcId: this._dcId,
                  keys: {},
                  hashes: {}
              };
              return Object.keys(this._authKeys).forEach((t=>{
                  const s = this._authKeys[t];
                  s && s._key && (e.keys[t] = s._key.toString("hex"),
                  e.hashes[t] = s._hash.toString("hex"))
              }
              )),
              e
          }
          _onUpdate() {
              this._callback(this.getSessionData())
          }
          delete() {
              this._callback(void 0)
          }
      }
  }
  ,
  45945: (e,t,s)=>{
      const n = s(24678)
        , a = s(28753)
        , i = "GramJs";
      e.exports = class extends a {
          _delete() {
              return n.del(`${i}:${this._storageKey}`)
          }
          _fetchFromCache() {
              return n.get(`${i}:${this._storageKey}`)
          }
          _saveToCache(e) {
              return n.set(`${i}:${this._storageKey}`, e)
          }
      }
  }
  ,
  31753: (e,t,s)=>{
      const n = s(28753);
      e.exports = class extends n {
          _delete() {
              return localStorage.removeItem(this._storageKey)
          }
          _fetchFromCache() {
              return localStorage.getItem(this._storageKey)
          }
          _saveToCache(e) {
              return localStorage.setItem(this._storageKey, e)
          }
      }
  }
  ,
  33995: (e,t,s)=>{
      const n = s(59270);
      e.exports = class extends n {
          constructor() {
              super(),
              this._serverAddress = void 0,
              this._dcId = 0,
              this._port = void 0,
              this._takeoutId = void 0,
              this._entities = new Set,
              this._updateStates = {}
          }
          get dcId() {
              return this._dcId
          }
          get serverAddress() {
              return this._serverAddress
          }
          get port() {
              return this._port
          }
          get authKey() {
              return this._authKey
          }
          set authKey(e) {
              this._authKey = e
          }
          setDC(e, t, s) {
              this._dcId = 0 | e,
              this._serverAddress = t,
              this._port = s
          }
      }
  }
  ,
  28753: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(33995)
        , i = s(13302)
        , r = s(48960);
      e.exports = class extends a {
          constructor(e) {
              super(),
              this._authKeys = {},
              e && e.startsWith("session:") ? this._sessionString = e : e && (this._storageKey = e)
          }
          get authKey() {
              throw new Error("Not supported")
          }
          set authKey(e) {
              throw new Error("Not supported")
          }
          async load() {
              if (this._sessionString)
                  await this._loadFromSessionString();
              else if (this._storageKey)
                  try {
                      const e = await this._fetchFromCache()
                        , {mainDcId: t, keys: s, hashes: a} = JSON.parse(e)
                        , {ipAddress: o, port: l} = r.getDC(t);
                      this.setDC(t, o, l, !0),
                      Object.keys(s).forEach((e=>{
                          s[e] && a[e] && (this._authKeys[e] = new i(n.from(s[e].data),n.from(a[e].data)))
                      }
                      ))
                  } catch (e) {
                      console.warn("Failed to retrieve or parse session from storage"),
                      console.warn(e)
                  }
          }
          setDC(e, t, s, n=!1) {
              this._dcId = e,
              this._serverAddress = t,
              this._port = s,
              delete this._authKeys[e],
              n || this._updateStorage()
          }
          async save() {
              return this._storageKey || (this._storageKey = `GramJs-session-${Date.now()}`),
              await this._updateStorage(),
              this._storageKey
          }
          getAuthKey(e=this._dcId) {
              return this._authKeys[e]
          }
          setAuthKey(e, t=this._dcId) {
              this._authKeys[t] = e,
              this._updateStorage()
          }
          getSessionData(e) {
              const t = {
                  mainDcId: this._dcId,
                  keys: {},
                  hashes: {}
              };
              return Object.keys(this._authKeys).forEach((s=>{
                  const n = this._authKeys[s];
                  n._key && (t.keys[s] = e ? n._key.toString("hex") : n._key,
                  t.hashes[s] = e ? n._hash.toString("hex") : n._hash)
              }
              )),
              t
          }
          async _loadFromSessionString() {
              const [,e,t] = this._sessionString.split(":")
                , s = Number(e)
                , {ipAddress: a, port: o} = r.getDC(s);
              this.setDC(s, a, o);
              const l = new i;
              await l.setKey(n.from(t, "hex"), !0),
              this.setAuthKey(l, s)
          }
          async _updateStorage() {
              if (this._storageKey)
                  try {
                      await this._saveToCache(JSON.stringify(this.getSessionData()))
                  } catch (e) {
                      console.warn("Failed to update session in storage"),
                      console.warn(e)
                  }
          }
          async delete() {
              try {
                  return await this._delete()
              } catch (e) {
                  console.warn("Failed to delete session from storage"),
                  console.warn(e)
              }
          }
          _delete() {
              throw new Error("Not Implemented")
          }
          _fetchFromCache() {
              throw new Error("Not Implemented")
          }
          _saveToCache(e) {
              throw new Error("Not Implemented")
          }
      }
  }
  ,
  12433: (e,t,s)=>{
      var n = s(48764).lW;
      const a = s(33995)
        , i = s(13302)
        , r = s(35544);
      class o extends a {
          constructor(e=void 0) {
              if (super(),
              e) {
                  if ("1" !== e[0])
                      throw new Error("Not a valid string");
                  e = e.slice(1);
                  const t = o.decode(e)
                    , s = new r(t);
                  this._dcId = s.read(1).readUInt8(0);
                  const n = s.read(2).readInt16BE(0);
                  this._serverAddress = String(s.read(n)),
                  this._port = s.read(2).readInt16BE(0),
                  this._key = s.read(-1)
              }
          }
          static encode(e) {
              return e.toString("base64")
          }
          static decode(e) {
              return n.from(e, "base64")
          }
          async load() {
              this._key && (this._authKey = new i,
              await this._authKey.setKey(this._key))
          }
          save() {
              if (!this.authKey)
                  return "";
              const e = n.from([this.dcId])
                , t = n.from(this.serverAddress)
                , s = n.alloc(2);
              s.writeInt16BE(t.length, 0);
              const a = n.alloc(2);
              return a.writeInt16BE(this.port, 0),
              "1" + o.encode(n.concat([e, s, t, a, this.authKey.getKey()]))
          }
          getAuthKey(e) {
              if (!e || e === this.dcId)
                  return this.authKey
          }
          setAuthKey(e, t) {
              t && t !== this.dcId || (this.authKey = e)
          }
      }
      e.exports = o
  }
  ,
  15886: (e,t,s)=>{
      const n = s(33995)
        , a = s(12433)
        , i = s(926)
        , r = s(31753)
        , o = s(45945)
        , l = s(80007);
      e.exports = {
          Memory: n,
          StringSession: a,
          CacheApiSession: i,
          LocalStorageSession: r,
          IdbSession: o,
          CallbackSession: l
      }
  }
  ,
  70845: (e,t,s)=>{
      const n = s(77150)
        , a = {};
      for (const e of Object.values(n))
          if (e.CONSTRUCTOR_ID)
              a[e.CONSTRUCTOR_ID] = e;
          else
              for (const t of Object.values(e))
                  a[t.CONSTRUCTOR_ID] = t;
      e.exports = {
          LAYER: 177,
          tlobjects: a
      }
  }
  ,
  77150: (e,t,s)=>{
      var n = s(48764).lW;

      function a(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const {parseTl: i, serializeBytes: r, serializeDate: o} = s(51436)
        , {toSignedLittleBuffer: l} = s(89618)
        , c = s(84779)
        , d = s(48106)
        , g = "undefined" != typeof self && void 0 !== self.localStorage
        , u = "GramJs:apiCache";

      function p(e) {
          const t = i(e)
            , s = []
            , n = [];
          for (const e of t)
              e.isFunction ? n.push(e) : s.push(e);
          return [s, n]
      }

      function f(e, t) {
          switch (t) {
          case "int":
              {
                  const t = n.alloc(4);
                  return t.writeInt32LE(e, 0),
                  t
              }
          case "long":
              return l(e, 8);
          case "int128":
              return l(e, 16);
          case "int256":
              return l(e, 32);
          case "double":
              {
                  const t = n.alloc(8);
                  return t.writeDoubleLE(e, 0),
                  t
              }
          case "string":
          case "bytes":
              return r(e);
          case "Bool":
              return e ? n.from("b5757299", "hex") : n.from("379779bc", "hex");
          case "true":
              return n.alloc(0);
          case "date":
              return o(e);
          default:
              return e.getBytes()
          }
      }

      function h(e, t) {
          if (t.isVector) {
              t.useVectorId && e.readInt();
              const s = []
                , n = e.readInt();
              t.isVector = !1;
              for (let a = 0; a < n; a++)
                  s.push(h(e, t));
              return t.isVector = !0,
              s
          }
          if (t.flagIndicator)
              return e.readInt();
          switch (t.type) {
          case "int":
              return e.readInt();
          case "long":
              return e.readLong();
          case "int128":
              return e.readLargeInt(128);
          case "int256":
              return e.readLargeInt(256);
          case "double":
              return e.readDouble();
          case "string":
              return e.tgReadString();
          case "Bool":
              return e.tgReadBool();
          case "true":
              return !0;
          case "bytes":
              return e.tgReadBytes();
          case "date":
              return e.tgReadDate();
          default:
              if (t.skipConstructorId)
                  throw new Error(`Unknown type ${t}`);
              return e.tgReadObject()
          }
      }

      function _(e, t) {
          const s = {};
          for (const i of t) {
              const {name: t, constructorId: r, subclassOfId: o, argsConfig: l, namespace: c, result: d} = i
                , g = [c, t].join(".").replace(/^\./, "");
              class u {
                  constructor(t) {
                      a(this, "CONSTRUCTOR_ID", r),
                      a(this, "SUBCLASS_OF_ID", o),
                      a(this, "className", g),
                      a(this, "classType", e),
                      t = t || {},
                      Object.keys(t).forEach((e=>{
                          this[e] = t[e]
                      }
                      ))
                  }
                  static fromReader(e) {
                      const t = {};
                      for (const s in l)
                          if (l.hasOwnProperty(s)) {
                              const n = l[s];
                              if (n.isFlag) {
                                  const a = t[`flags${n.flagGroup > 1 ? n.flagGroup : ""}`] & 1 << n.flagIndex;
                                  if ("true" === n.type) {
                                      t[s] = Boolean(a);
                                      continue
                                  }
                                  t[s] = a ? h(e, n) : void 0
                              } else
                                  t[s] = h(e, n)
                          }
                      return new u(t)
                  }
                  getBytes() {
                      const e = this.CONSTRUCTOR_ID
                        , t = n.alloc(4);
                      t.writeUInt32LE(e, 0);
                      const s = [t];
                      for (const e in l)
                          if (l.hasOwnProperty(e)) {
                              if (l[e].isFlag && (!1 === this[e] && "true" === l[e].type || void 0 === this[e]))
                                  continue;
                              if (l[e].isVector) {
                                  l[e].useVectorId && s.push(n.from("15c4b51c", "hex"));
                                  const t = n.alloc(4);
                                  t.writeInt32LE(this[e].length, 0),
                                  s.push(t, n.concat(this[e].map((t=>f(t, l[e].type)))))
                              } else if (l[e].flagIndicator)
                                  if (Object.values(l).some((e=>e.isFlag))) {
                                      let e = 0;
                                      for (const t in l)
                                          l[t].isFlag && (!1 === this[t] && "true" === l[t].type || void 0 === this[t] ? e |= 0 : e |= 1 << l[t].flagIndex);
                                      const t = n.alloc(4);
                                      t.writeUInt32LE(e, 0),
                                      s.push(t)
                                  } else
                                      s.push(n.alloc(4));
                              else if (s.push(f(this[e], l[e].type)),
                              this[e] && "function" == typeof this[e].getBytes) {
                                  let t = l[e].type.charAt(l[e].type.indexOf(".") + 1);
                                  t = t === t.toUpperCase(),
                                  t || s.shift()
                              }
                          }
                      return n.concat(s)
                  }
                  readResult(t) {
                      if ("request" !== e)
                          throw new Error("`readResult()` called for non-request instance");
                      const s = d.match(/Vector<(int|long)>/);
                      if (s) {
                          t.readInt();
                          const e = []
                            , n = t.readInt();
                          if ("int" === s[1])
                              for (let s = 0; s < n; s++)
                                  e.push(t.readInt());
                          else
                              for (let s = 0; s < n; s++)
                                  e.push(t.readLong());
                          return e
                      }
                      return t.tgReadObject()
                  }
              }
              a(u, "CONSTRUCTOR_ID", r),
              a(u, "SUBCLASS_OF_ID", o),
              a(u, "className", g),
              a(u, "classType", e),
              c ? (s[c] || (s[c] = {}),
              s[c][t] = u) : s[t] = u
          }
          return s
      }
      e.exports = function() {
          let e;
          const t = g && function() {
              const e = localStorage.getItem(u);
              return e && JSON.parse(e)
          }();
          return t ? e = t : (e = function() {
              const [e,t] = p(c)
                , [s,n] = p(d);
              return {
                  constructors: [].concat(e, s),
                  requests: [].concat(t, n)
              }
          }(),
          g && localStorage.setItem(u, JSON.stringify(e))),
          function(e, t) {
              const s = {
                  ...e
              };
              return Object.keys(t).forEach((e=>{
                  "function" != typeof t[e] && s[e] ? Object.assign(s[e], t[e]) : s[e] = t[e]
              }
              )),
              s
          }(_("constructor", e.constructors), _("request", e.requests))
      }()
  }
  ,
  84779: e=>{
      e.exports = "boolFalse#bc799737 = Bool;\nboolTrue#997275b5 = Bool;\ntrue#3fedd339 = True;\nvector#1cb5c415 {t:Type} # [ t ] = Vector t;\nerror#c4b9f9bb code:int text:string = Error;\nnull#56730bcc = Null;\ninputPeerEmpty#7f3b18ea = InputPeer;\ninputPeerSelf#7da07ec9 = InputPeer;\ninputPeerChat#35a95cb9 chat_id:long = InputPeer;\ninputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;\ninputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;\ninputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;\ninputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;\ninputUserEmpty#b98886cf = InputUser;\ninputUserSelf#f7c1b13f = InputUser;\ninputUser#f21158c6 user_id:long access_hash:long = InputUser;\ninputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;\ninputPhoneContact#f392b7f4 client_id:long phone:string first_name:string last_name:string = InputContact;\ninputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;\ninputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;\ninputMediaEmpty#9664f57f = InputMedia;\ninputMediaUploadedPhoto#1e287d04 flags:# spoiler:flags.2?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;\ninputMediaPhoto#b3ba0635 flags:# spoiler:flags.1?true id:InputPhoto ttl_seconds:flags.0?int = InputMedia;\ninputMediaGeoPoint#f9c44144 geo_point:InputGeoPoint = InputMedia;\ninputMediaContact#f8ab7dfb phone_number:string first_name:string last_name:string vcard:string = InputMedia;\ninputMediaUploadedDocument#5b38c6c1 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;\ninputMediaDocument#33473058 flags:# spoiler:flags.2?true id:InputDocument ttl_seconds:flags.0?int query:flags.1?string = InputMedia;\ninputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;\ninputMediaPhotoExternal#e5bbfe1a flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;\ninputMediaDocumentExternal#fb52dc99 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;\ninputMediaGame#d33f43f3 id:InputGame = InputMedia;\ninputMediaInvoice#8eb5a6d5 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;\ninputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;\ninputMediaPoll#f94e5f1 flags:# poll:Poll correct_answers:flags.0?Vector<bytes> solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> = InputMedia;\ninputMediaDice#e66fbf7b emoticon:string = InputMedia;\ninputMediaStory#89fdd778 peer:InputPeer id:int = InputMedia;\ninputMediaWebPage#c21b8849 flags:# force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:string = InputMedia;\ninputChatPhotoEmpty#1ca48f57 = InputChatPhoto;\ninputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;\ninputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;\ninputGeoPointEmpty#e4c123d6 = InputGeoPoint;\ninputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;\ninputPhotoEmpty#1cd7bf0d = InputPhoto;\ninputPhoto#3bb3b94a id:long access_hash:long file_reference:bytes = InputPhoto;\ninputFileLocation#dfdaabe1 volume_id:long local_id:int secret:long file_reference:bytes = InputFileLocation;\ninputEncryptedFileLocation#f5235d55 id:long access_hash:long = InputFileLocation;\ninputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;\ninputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;\ninputTakeoutFileLocation#29be5899 = InputFileLocation;\ninputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;\ninputPhotoLegacyFileLocation#d83466f3 id:long access_hash:long file_reference:bytes volume_id:long local_id:int secret:long = InputFileLocation;\ninputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;\ninputStickerSetThumb#9d84f3db stickerset:InputStickerSet thumb_version:int = InputFileLocation;\ninputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;\npeerUser#59511722 user_id:long = Peer;\npeerChat#36c6019a chat_id:long = Peer;\npeerChannel#a2a5371e channel_id:long = Peer;\nstorage.fileUnknown#aa963b05 = storage.FileType;\nstorage.filePartial#40bc6f52 = storage.FileType;\nstorage.fileJpeg#7efe0e = storage.FileType;\nstorage.fileGif#cae1aadf = storage.FileType;\nstorage.filePng#a4f63c0 = storage.FileType;\nstorage.filePdf#ae1e508d = storage.FileType;\nstorage.fileMp3#528a0677 = storage.FileType;\nstorage.fileMov#4b09ebbc = storage.FileType;\nstorage.fileMp4#b3cea0e4 = storage.FileType;\nstorage.fileWebp#1081464c = storage.FileType;\nuserEmpty#d3bc4b7a id:long = User;\nuser#215c4438 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor = User;\nuserProfilePhotoEmpty#4f11bae1 = UserProfilePhoto;\nuserProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;\nuserStatusEmpty#9d05049 = UserStatus;\nuserStatusOnline#edb93949 expires:int = UserStatus;\nuserStatusOffline#8c703f was_online:int = UserStatus;\nuserStatusRecently#7b197dc8 flags:# by_me:flags.0?true = UserStatus;\nuserStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;\nuserStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;\nchatEmpty#29562865 id:long = Chat;\nchat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;\nchatForbidden#6592a1a7 id:long title:string = Chat;\nchannel#aadfc8f flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int = Chat;\nchannelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true id:long access_hash:long title:string until_date:flags.16?int = Chat;\nchatFull#c9d31138 flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions = ChatFull;\nchannelFull#44c054a7 flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet = ChatFull;\nchatParticipant#c02d4007 user_id:long inviter_id:long date:int = ChatParticipant;\nchatParticipantCreator#e46bcee4 user_id:long = ChatParticipant;\nchatParticipantAdmin#a0933f5b user_id:long inviter_id:long date:int = ChatParticipant;\nchatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;\nchatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;\nchatPhotoEmpty#37c1011c = ChatPhoto;\nchatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;\nmessageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;\nmessage#2357bf25 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int = Message;\nmessageService#2b085862 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction ttl_period:flags.25?int = Message;\nmessageMediaEmpty#3ded6320 = MessageMedia;\nmessageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;\nmessageMediaGeo#56e0d474 geo:GeoPoint = MessageMedia;\nmessageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;\nmessageMediaUnsupported#9f84f49e = MessageMedia;\nmessageMediaDocument#4cf4d72d flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_document:flags.5?Document ttl_seconds:flags.2?int = MessageMedia;\nmessageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;\nmessageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;\nmessageMediaGame#fdb19008 game:Game = MessageMedia;\nmessageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;\nmessageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;\nmessageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;\nmessageMediaDice#3f7ee58b value:int emoticon:string = MessageMedia;\nmessageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;\nmessageMediaGiveaway#daad85b0 flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:int until_date:int = MessageMedia;\nmessageMediaGiveawayResults#c6991068 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:int prize_description:flags.1?string until_date:int = MessageMedia;\nmessageActionEmpty#b6aef7b0 = MessageAction;\nmessageActionChatCreate#bd47cbad title:string users:Vector<long> = MessageAction;\nmessageActionChatEditTitle#b5a1ce5a title:string = MessageAction;\nmessageActionChatEditPhoto#7fcb13a8 photo:Photo = MessageAction;\nmessageActionChatDeletePhoto#95e3fbef = MessageAction;\nmessageActionChatAddUser#15cefd00 users:Vector<long> = MessageAction;\nmessageActionChatDeleteUser#a43f30cc user_id:long = MessageAction;\nmessageActionChatJoinedByLink#31224c3 inviter_id:long = MessageAction;\nmessageActionChannelCreate#95d2ac92 title:string = MessageAction;\nmessageActionChatMigrateTo#e1037f92 channel_id:long = MessageAction;\nmessageActionChannelMigrateFrom#ea3948e9 title:string chat_id:long = MessageAction;\nmessageActionPinMessage#94bd38ed = MessageAction;\nmessageActionHistoryClear#9fbab604 = MessageAction;\nmessageActionGameScore#92a72876 game_id:long score:int = MessageAction;\nmessageActionPaymentSentMe#8f31b327 flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge = MessageAction;\nmessageActionPaymentSent#96163f56 flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long invoice_slug:flags.0?string = MessageAction;\nmessageActionPhoneCall#80e11a7f flags:# video:flags.2?true call_id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = MessageAction;\nmessageActionScreenshotTaken#4792929b = MessageAction;\nmessageActionCustomAction#fae69f56 message:string = MessageAction;\nmessageActionBotAllowed#c516d679 flags:# attach_menu:flags.1?true from_request:flags.3?true domain:flags.0?string app:flags.2?BotApp = MessageAction;\nmessageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;\nmessageActionSecureValuesSent#d95c6154 types:Vector<SecureValueType> = MessageAction;\nmessageActionContactSignUp#f3f25f76 = MessageAction;\nmessageActionGeoProximityReached#98e0d697 from_id:Peer to_id:Peer distance:int = MessageAction;\nmessageActionGroupCall#7a0d7f42 flags:# call:InputGroupCall duration:flags.0?int = MessageAction;\nmessageActionInviteToGroupCall#502f92f7 call:InputGroupCall users:Vector<long> = MessageAction;\nmessageActionSetMessagesTTL#3c134d7b flags:# period:int auto_setting_from:flags.0?long = MessageAction;\nmessageActionGroupCallScheduled#b3a07661 call:InputGroupCall schedule_date:int = MessageAction;\nmessageActionSetChatTheme#aa786345 emoticon:string = MessageAction;\nmessageActionChatJoinedByRequest#ebbca3cb = MessageAction;\nmessageActionWebViewDataSentMe#47dd8079 text:string data:string = MessageAction;\nmessageActionWebViewDataSent#b4c38cb5 text:string = MessageAction;\nmessageActionGiftPremium#c83d6aec flags:# currency:string amount:long months:int crypto_currency:flags.0?string crypto_amount:flags.0?long = MessageAction;\nmessageActionTopicCreate#d999256 flags:# title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;\nmessageActionTopicEdit#c0944820 flags:# title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = MessageAction;\nmessageActionSuggestProfilePhoto#57de635e photo:Photo = MessageAction;\nmessageActionRequestedPeer#31518e9b button_id:int peers:Vector<Peer> = MessageAction;\nmessageActionSetChatWallPaper#5060a3f4 flags:# same:flags.0?true for_both:flags.1?true wallpaper:WallPaper = MessageAction;\nmessageActionGiftCode#678c2e09 flags:# via_giveaway:flags.0?true unclaimed:flags.2?true boost_peer:flags.1?Peer months:int slug:string currency:flags.2?string amount:flags.2?long crypto_currency:flags.3?string crypto_amount:flags.3?long = MessageAction;\nmessageActionGiveawayLaunch#332ba9ed = MessageAction;\nmessageActionGiveawayResults#2a9fadc5 winners_count:int unclaimed_count:int = MessageAction;\nmessageActionBoostApply#cc02aa6d boosts:int = MessageAction;\nmessageActionRequestedPeerSentMe#93b31848 button_id:int peers:Vector<RequestedPeer> = MessageAction;\ndialog#d58a08c6 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;\ndialogFolder#71bd134c flags:# pinned:flags.2?true folder:Folder peer:Peer top_message:int unread_muted_peers_count:int unread_unmuted_peers_count:int unread_muted_messages_count:int unread_unmuted_messages_count:int = Dialog;\nphotoEmpty#2331b22d id:long = Photo;\nphoto#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;\nphotoSizeEmpty#e17e23c type:string = PhotoSize;\nphotoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;\nphotoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;\nphotoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;\nphotoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;\nphotoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;\ngeoPointEmpty#1117dd5f = GeoPoint;\ngeoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;\nauth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;\nauth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;\nauth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;\nauth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;\nauth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;\ninputNotifyPeer#b8bc5b0c peer:InputPeer = InputNotifyPeer;\ninputNotifyUsers#193b4417 = InputNotifyPeer;\ninputNotifyChats#4a95e84e = InputNotifyPeer;\ninputNotifyBroadcasts#b1db7c7e = InputNotifyPeer;\ninputNotifyForumTopic#5c467992 peer:InputPeer top_msg_id:int = InputNotifyPeer;\ninputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;\npeerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;\npeerSettings#acd66c5e flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string = PeerSettings;\nwallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;\nwallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;\ninputReportReasonSpam#58dbcab8 = ReportReason;\ninputReportReasonViolence#1e22c78d = ReportReason;\ninputReportReasonPornography#2e59d922 = ReportReason;\ninputReportReasonChildAbuse#adf44ee3 = ReportReason;\ninputReportReasonOther#c1e4a2b1 = ReportReason;\ninputReportReasonCopyright#9b89f93a = ReportReason;\ninputReportReasonGeoIrrelevant#dbd4feed = ReportReason;\ninputReportReasonFake#f5ddd6e7 = ReportReason;\ninputReportReasonIllegalDrugs#a8eb2be = ReportReason;\ninputReportReasonPersonalDetails#9ec7863d = ReportReason;\nuserFull#cc997720 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights premium_gifts:flags.19?Vector<PremiumGiftOption> wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int = UserFull;\ncontact#145ade0b user_id:long mutual:Bool = Contact;\nimportedContact#c13e3c50 user_id:long client_id:long = ImportedContact;\ncontactStatus#16d9703b user_id:long status:UserStatus = ContactStatus;\ncontacts.contactsNotModified#b74ba9d2 = contacts.Contacts;\ncontacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;\ncontacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;\ncontacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;\ncontacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;\nmessages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;\nmessages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;\nmessages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;\nmessages.messages#8c718e87 messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.messagesSlice#3a54685e flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.messagesNotModified#74535f21 count:int = messages.Messages;\nmessages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;\nmessages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;\nmessages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;\nmessages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;\ninputMessagesFilterEmpty#57e2f66c = MessagesFilter;\ninputMessagesFilterPhotos#9609a51c = MessagesFilter;\ninputMessagesFilterVideo#9fc00e65 = MessagesFilter;\ninputMessagesFilterPhotoVideo#56e9f0e4 = MessagesFilter;\ninputMessagesFilterDocument#9eddf188 = MessagesFilter;\ninputMessagesFilterUrl#7ef0dd87 = MessagesFilter;\ninputMessagesFilterGif#ffc86587 = MessagesFilter;\ninputMessagesFilterVoice#50f5c392 = MessagesFilter;\ninputMessagesFilterMusic#3751b49e = MessagesFilter;\ninputMessagesFilterChatPhotos#3a20ecb8 = MessagesFilter;\ninputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;\ninputMessagesFilterRoundVoice#7a7c17a4 = MessagesFilter;\ninputMessagesFilterRoundVideo#b549da53 = MessagesFilter;\ninputMessagesFilterMyMentions#c1f8e69a = MessagesFilter;\ninputMessagesFilterGeo#e7026d0d = MessagesFilter;\ninputMessagesFilterContacts#e062db83 = MessagesFilter;\ninputMessagesFilterPinned#1bb00451 = MessagesFilter;\nupdateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;\nupdateMessageID#4e90bfd6 id:int random_id:long = Update;\nupdateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;\nupdateUserTyping#c01e857f user_id:long action:SendMessageAction = Update;\nupdateChatUserTyping#83487af0 chat_id:long from_id:Peer action:SendMessageAction = Update;\nupdateChatParticipants#7761198 participants:ChatParticipants = Update;\nupdateUserStatus#e5bdf8de user_id:long status:UserStatus = Update;\nupdateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;\nupdateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;\nupdateNewEncryptedMessage#12bcbd9a message:EncryptedMessage qts:int = Update;\nupdateEncryptedChatTyping#1710f156 chat_id:int = Update;\nupdateEncryption#b4a2e88d chat:EncryptedChat date:int = Update;\nupdateEncryptedMessagesRead#38fe25b7 chat_id:int max_date:int date:int = Update;\nupdateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;\nupdateChatParticipantDelete#e32f3d77 chat_id:long user_id:long version:int = Update;\nupdateDcOptions#8e5e9873 dc_options:Vector<DcOption> = Update;\nupdateNotifySettings#bec268ef peer:NotifyPeer notify_settings:PeerNotifySettings = Update;\nupdateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;\nupdatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;\nupdateUserPhone#5492a13 user_id:long phone:string = Update;\nupdateReadHistoryInbox#9c974fdf flags:# folder_id:flags.0?int peer:Peer max_id:int still_unread_count:int pts:int pts_count:int = Update;\nupdateReadHistoryOutbox#2f2f21bf peer:Peer max_id:int pts:int pts_count:int = Update;\nupdateWebPage#7f891213 webpage:WebPage pts:int pts_count:int = Update;\nupdateReadMessagesContents#f8227181 flags:# messages:Vector<int> pts:int pts_count:int date:flags.0?int = Update;\nupdateChannelTooLong#108d941f flags:# channel_id:long pts:flags.0?int = Update;\nupdateChannel#635b4c09 channel_id:long = Update;\nupdateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;\nupdateReadChannelInbox#922e6e10 flags:# folder_id:flags.0?int channel_id:long max_id:int still_unread_count:int pts:int = Update;\nupdateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;\nupdateChannelMessageViews#f226ac08 channel_id:long id:int views:int = Update;\nupdateChatParticipantAdmin#d7ca61a2 chat_id:long user_id:long is_admin:Bool version:int = Update;\nupdateNewStickerSet#688a30aa stickerset:messages.StickerSet = Update;\nupdateStickerSetsOrder#bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;\nupdateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;\nupdateSavedGifs#9375341e = Update;\nupdateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;\nupdateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;\nupdateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;\nupdateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;\nupdateEditMessage#e40370a3 message:Message pts:int pts_count:int = Update;\nupdateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;\nupdateReadChannelOutbox#b75f99a9 channel_id:long max_id:int = Update;\nupdateDraftMessage#1b49ec6d flags:# peer:Peer top_msg_id:flags.0?int draft:DraftMessage = Update;\nupdateReadFeaturedStickers#571d2742 = Update;\nupdateRecentStickers#9a422c20 = Update;\nupdateConfig#a229dd06 = Update;\nupdatePtsChanged#3354678f = Update;\nupdateChannelWebPage#2f2ba99f channel_id:long webpage:WebPage pts:int pts_count:int = Update;\nupdateDialogPinned#6e6fe51c flags:# pinned:flags.0?true folder_id:flags.1?int peer:DialogPeer = Update;\nupdatePinnedDialogs#fa0f3ca2 flags:# folder_id:flags.1?int order:flags.0?Vector<DialogPeer> = Update;\nupdateBotWebhookJSON#8317c0c3 data:DataJSON = Update;\nupdateBotWebhookJSONQuery#9b9240a6 query_id:long data:DataJSON timeout:int = Update;\nupdateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;\nupdateBotPrecheckoutQuery#8caa9a96 flags:# query_id:long user_id:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string currency:string total_amount:long = Update;\nupdatePhoneCall#ab0f6b1e phone_call:PhoneCall = Update;\nupdateLangPackTooLong#46560264 lang_code:string = Update;\nupdateLangPack#56022f4d difference:LangPackDifference = Update;\nupdateFavedStickers#e511996d = Update;\nupdateChannelReadMessagesContents#ea29055d flags:# channel_id:long top_msg_id:flags.0?int messages:Vector<int> = Update;\nupdateContactsReset#7084a7be = Update;\nupdateChannelAvailableMessages#b23fc698 channel_id:long available_min_id:int = Update;\nupdateDialogUnreadMark#e16459c3 flags:# unread:flags.0?true peer:DialogPeer = Update;\nupdateMessagePoll#aca1657b flags:# poll_id:long poll:flags.0?Poll results:PollResults = Update;\nupdateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;\nupdateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;\nupdatePeerSettings#6a7e7366 peer:Peer settings:PeerSettings = Update;\nupdatePeerLocated#b4afcfb0 peers:Vector<PeerLocated> = Update;\nupdateNewScheduledMessage#39a51dfb message:Message = Update;\nupdateDeleteScheduledMessages#90866cee peer:Peer messages:Vector<int> = Update;\nupdateTheme#8216fba3 theme:Theme = Update;\nupdateGeoLiveViewed#871fb939 peer:Peer msg_id:int = Update;\nupdateLoginToken#564fe691 = Update;\nupdateMessagePollVote#24f40e77 poll_id:long peer:Peer options:Vector<bytes> qts:int = Update;\nupdateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;\nupdateDialogFilterOrder#a5d72105 order:Vector<int> = Update;\nupdateDialogFilters#3504914f = Update;\nupdatePhoneCallSignalingData#2661bf09 phone_call_id:long data:bytes = Update;\nupdateChannelMessageForwards#d29a27f4 channel_id:long id:int forwards:int = Update;\nupdateReadChannelDiscussionInbox#d6b19546 flags:# channel_id:long top_msg_id:int read_max_id:int broadcast_id:flags.0?long broadcast_post:flags.0?int = Update;\nupdateReadChannelDiscussionOutbox#695c9e7c channel_id:long top_msg_id:int read_max_id:int = Update;\nupdatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;\nupdateChannelUserTyping#8c88c923 flags:# channel_id:long top_msg_id:flags.0?int from_id:Peer action:SendMessageAction = Update;\nupdatePinnedMessages#ed85eab5 flags:# pinned:flags.0?true peer:Peer messages:Vector<int> pts:int pts_count:int = Update;\nupdatePinnedChannelMessages#5bb98608 flags:# pinned:flags.0?true channel_id:long messages:Vector<int> pts:int pts_count:int = Update;\nupdateChat#f89a6a4e chat_id:long = Update;\nupdateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;\nupdateGroupCall#14b24500 chat_id:long call:GroupCall = Update;\nupdatePeerHistoryTTL#bb9bb9a5 flags:# peer:Peer ttl_period:flags.0?int = Update;\nupdateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;\nupdateChannelParticipant#985d3abb flags:# via_chatlist:flags.3?true channel_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChannelParticipant new_participant:flags.1?ChannelParticipant invite:flags.2?ExportedChatInvite qts:int = Update;\nupdateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;\nupdateGroupCallConnection#b783982 flags:# presentation:flags.0?true params:DataJSON = Update;\nupdateBotCommands#4d712f2e peer:Peer bot_id:long commands:Vector<BotCommand> = Update;\nupdatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;\nupdateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;\nupdateMessageReactions#5e1b3cb8 flags:# peer:Peer msg_id:int top_msg_id:flags.0?int reactions:MessageReactions = Update;\nupdateAttachMenuBots#17b7a20b = Update;\nupdateWebViewResultSent#1592b79d query_id:long = Update;\nupdateBotMenuButton#14b85813 bot_id:long button:BotMenuButton = Update;\nupdateSavedRingtones#74d8be99 = Update;\nupdateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;\nupdateReadFeaturedEmojiStickers#fb4c496c = Update;\nupdateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;\nupdateRecentEmojiStatuses#30f443db = Update;\nupdateRecentReactions#6f7863f4 = Update;\nupdateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;\nupdateMessageExtendedMedia#5a73a98c peer:Peer msg_id:int extended_media:MessageExtendedMedia = Update;\nupdateChannelPinnedTopic#192efbe3 flags:# pinned:flags.0?true channel_id:long topic_id:int = Update;\nupdateChannelPinnedTopics#fe198602 flags:# channel_id:long order:flags.0?Vector<int> = Update;\nupdateUser#20529438 user_id:long = Update;\nupdateAutoSaveSettings#ec05b097 = Update;\nupdateStory#75b3b798 peer:Peer story:StoryItem = Update;\nupdateReadStories#f74e932b peer:Peer max_id:int = Update;\nupdateStoryID#1bf335b9 id:int random_id:long = Update;\nupdateStoriesStealthMode#2c084dc1 stealth_mode:StoriesStealthMode = Update;\nupdateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;\nupdateBotChatBoost#904dd49c peer:Peer boost:Boost qts:int = Update;\nupdateChannelViewForumAsMessages#7b68920 channel_id:long enabled:Bool = Update;\nupdatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;\nupdateBotMessageReaction#ac21d3ce peer:Peer msg_id:int date:int actor:Peer old_reactions:Vector<Reaction> new_reactions:Vector<Reaction> qts:int = Update;\nupdateBotMessageReactions#9cb7759 peer:Peer msg_id:int date:int reactions:Vector<ReactionCount> qts:int = Update;\nupdateSavedDialogPinned#aeaf9e74 flags:# pinned:flags.0?true peer:DialogPeer = Update;\nupdatePinnedSavedDialogs#686c85a6 flags:# order:flags.0?Vector<DialogPeer> = Update;\nupdateSavedReactionTags#39c67432 = Update;\nupdateSmsJob#f16269d4 job_id:string = Update;\nupdateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;\nupdateNewQuickReply#f53da717 quick_reply:QuickReply = Update;\nupdateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;\nupdateQuickReplyMessage#3e050d0f message:Message = Update;\nupdateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;\nupdateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;\nupdateBotNewBusinessMessage#9ddb347c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;\nupdateBotEditBusinessMessage#7df587c flags:# connection_id:string message:Message reply_to_message:flags.0?Message qts:int = Update;\nupdateBotDeleteBusinessMessage#a02a982e connection_id:string peer:Peer messages:Vector<int> qts:int = Update;\nupdates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;\nupdates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;\nupdates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;\nupdates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;\nupdates.differenceTooLong#4afe8f6d pts:int = updates.Difference;\nupdatesTooLong#e317af7e = Updates;\nupdateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nupdateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nupdateShort#78d4dec1 update:Update date:int = Updates;\nupdatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;\nupdates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;\nupdateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nphotos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;\nphotos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;\nphotos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;\nupload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;\nupload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;\ndcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;\nconfig#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;\nnearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;\nhelp.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;\nhelp.noAppUpdate#c45a6536 = help.AppUpdate;\nhelp.inviteText#18cb9f78 message:string = help.InviteText;\nencryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;\nencryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;\nencryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;\nencryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;\nencryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;\ninputEncryptedChat#f141b5e1 chat_id:int access_hash:long = InputEncryptedChat;\nencryptedFileEmpty#c21f497e = EncryptedFile;\nencryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;\ninputEncryptedFileEmpty#1837c364 = InputEncryptedFile;\ninputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;\ninputEncryptedFile#5a17b5e5 id:long access_hash:long = InputEncryptedFile;\ninputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;\nencryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;\nencryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;\nmessages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;\nmessages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;\nmessages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;\nmessages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;\ninputDocumentEmpty#72f0eaae = InputDocument;\ninputDocument#1abfb575 id:long access_hash:long file_reference:bytes = InputDocument;\ndocumentEmpty#36f8c871 id:long = Document;\ndocument#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;\nhelp.support#17c6b5f6 phone_number:string user:User = help.Support;\nnotifyPeer#9fd40bd8 peer:Peer = NotifyPeer;\nnotifyUsers#b4c83b4c = NotifyPeer;\nnotifyChats#c007cec3 = NotifyPeer;\nnotifyBroadcasts#d612e8ef = NotifyPeer;\nnotifyForumTopic#226e6308 peer:Peer top_msg_id:int = NotifyPeer;\nsendMessageTypingAction#16bf744e = SendMessageAction;\nsendMessageCancelAction#fd5ec8f5 = SendMessageAction;\nsendMessageRecordVideoAction#a187d66f = SendMessageAction;\nsendMessageUploadVideoAction#e9763aec progress:int = SendMessageAction;\nsendMessageRecordAudioAction#d52f73f7 = SendMessageAction;\nsendMessageUploadAudioAction#f351d7ab progress:int = SendMessageAction;\nsendMessageUploadPhotoAction#d1d34a26 progress:int = SendMessageAction;\nsendMessageUploadDocumentAction#aa0cd9e4 progress:int = SendMessageAction;\nsendMessageGeoLocationAction#176f8ba1 = SendMessageAction;\nsendMessageChooseContactAction#628cbc6f = SendMessageAction;\nsendMessageGamePlayAction#dd6a8f48 = SendMessageAction;\nsendMessageRecordRoundAction#88f27fbc = SendMessageAction;\nsendMessageUploadRoundAction#243e1c66 progress:int = SendMessageAction;\nspeakingInGroupCallAction#d92c2285 = SendMessageAction;\nsendMessageHistoryImportAction#dbda9246 progress:int = SendMessageAction;\nsendMessageChooseStickerAction#b05ac6b1 = SendMessageAction;\nsendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;\nsendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;\ncontacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;\ninputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;\ninputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;\ninputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;\ninputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;\ninputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;\ninputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;\ninputPrivacyKeyPhoneNumber#352dafa = InputPrivacyKey;\ninputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;\ninputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;\ninputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;\ninputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;\nprivacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;\nprivacyKeyChatInvite#500e6dfa = PrivacyKey;\nprivacyKeyPhoneCall#3d662b7b = PrivacyKey;\nprivacyKeyPhoneP2P#39491cc8 = PrivacyKey;\nprivacyKeyForwards#69ec56a3 = PrivacyKey;\nprivacyKeyProfilePhoto#96151fed = PrivacyKey;\nprivacyKeyPhoneNumber#d19ae46d = PrivacyKey;\nprivacyKeyAddedByPhone#42ffd42b = PrivacyKey;\nprivacyKeyVoiceMessages#697f414 = PrivacyKey;\nprivacyKeyAbout#a486b761 = PrivacyKey;\nprivacyKeyBirthday#2000a518 = PrivacyKey;\ninputPrivacyValueAllowContacts#d09e07b = InputPrivacyRule;\ninputPrivacyValueAllowAll#184b35ce = InputPrivacyRule;\ninputPrivacyValueAllowUsers#131cc67f users:Vector<InputUser> = InputPrivacyRule;\ninputPrivacyValueDisallowContacts#ba52007 = InputPrivacyRule;\ninputPrivacyValueDisallowAll#d66b66c9 = InputPrivacyRule;\ninputPrivacyValueDisallowUsers#90110467 users:Vector<InputUser> = InputPrivacyRule;\ninputPrivacyValueAllowChatParticipants#840649cf chats:Vector<long> = InputPrivacyRule;\ninputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;\ninputPrivacyValueAllowCloseFriends#2f453e49 = InputPrivacyRule;\ninputPrivacyValueAllowPremium#77cdc9f1 = InputPrivacyRule;\nprivacyValueAllowContacts#fffe1bac = PrivacyRule;\nprivacyValueAllowAll#65427b82 = PrivacyRule;\nprivacyValueAllowUsers#b8905fb2 users:Vector<long> = PrivacyRule;\nprivacyValueDisallowContacts#f888fa1a = PrivacyRule;\nprivacyValueDisallowAll#8b73e763 = PrivacyRule;\nprivacyValueDisallowUsers#e4621141 users:Vector<long> = PrivacyRule;\nprivacyValueAllowChatParticipants#6b134e8e chats:Vector<long> = PrivacyRule;\nprivacyValueDisallowChatParticipants#41c87565 chats:Vector<long> = PrivacyRule;\nprivacyValueAllowCloseFriends#f7e8d89b = PrivacyRule;\nprivacyValueAllowPremium#ece9814b = PrivacyRule;\naccount.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;\naccountDaysTTL#b8d0afdf days:int = AccountDaysTTL;\ndocumentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;\ndocumentAttributeAnimated#11b58939 = DocumentAttribute;\ndocumentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;\ndocumentAttributeVideo#d38ff1c2 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int = DocumentAttribute;\ndocumentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;\ndocumentAttributeFilename#15590068 file_name:string = DocumentAttribute;\ndocumentAttributeHasStickers#9801d2f7 = DocumentAttribute;\ndocumentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;\nmessages.stickersNotModified#f1749a22 = messages.Stickers;\nmessages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;\nstickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;\nmessages.allStickersNotModified#e86602c3 = messages.AllStickers;\nmessages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;\nmessages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;\nwebPageEmpty#211a1788 flags:# id:long url:flags.0?string = WebPage;\nwebPagePending#b0d13e47 flags:# id:long url:flags.0?string date:int = WebPage;\nwebPage#e89c45b2 flags:# has_large_media:flags.13?true id:long url:string display_url:string hash:int type:flags.0?string site_name:flags.1?string title:flags.2?string description:flags.3?string photo:flags.4?Photo embed_url:flags.5?string embed_type:flags.5?string embed_width:flags.6?int embed_height:flags.6?int duration:flags.7?int author:flags.8?string document:flags.9?Document cached_page:flags.10?Page attributes:flags.12?Vector<WebPageAttribute> = WebPage;\nwebPageNotModified#7311ca11 flags:# cached_page_views:flags.0?int = WebPage;\nauthorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;\naccount.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;\naccount.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;\naccount.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;\naccount.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;\nauth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;\nreceivedNotifyMessage#a384b779 id:int flags:int = ReceivedNotifyMessage;\nchatInviteExported#ab4a819 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int title:flags.8?string = ExportedChatInvite;\nchatInvitePublicJoinRequests#ed107ab7 = ExportedChatInvite;\nchatInviteAlready#5a686d7c chat:Chat = ChatInvite;\nchatInvite#cde0ec40 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int = ChatInvite;\nchatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;\ninputStickerSetEmpty#ffb62b95 = InputStickerSet;\ninputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;\ninputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;\ninputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;\ninputStickerSetDice#e67f520e emoticon:string = InputStickerSet;\ninputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;\ninputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;\ninputStickerSetEmojiGenericAnimations#4c4d4ce = InputStickerSet;\ninputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;\ninputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;\ninputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;\nstickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;\nmessages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;\nmessages.stickerSetNotModified#d3f924eb = messages.StickerSet;\nbotCommand#c27ac8c7 command:string description:string = BotCommand;\nbotInfo#8f300b57 flags:# user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton = BotInfo;\nkeyboardButton#a2fa4880 text:string = KeyboardButton;\nkeyboardButtonUrl#258aff05 text:string url:string = KeyboardButton;\nkeyboardButtonCallback#35bbdb6b flags:# requires_password:flags.0?true text:string data:bytes = KeyboardButton;\nkeyboardButtonRequestPhone#b16a6c29 text:string = KeyboardButton;\nkeyboardButtonRequestGeoLocation#fc796b3f text:string = KeyboardButton;\nkeyboardButtonSwitchInline#93b9fbb5 flags:# same_peer:flags.0?true text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;\nkeyboardButtonGame#50f41ccf text:string = KeyboardButton;\nkeyboardButtonBuy#afd93fbb text:string = KeyboardButton;\nkeyboardButtonUrlAuth#10b78d29 flags:# text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;\ninputKeyboardButtonUrlAuth#d02e7fd4 flags:# request_write_access:flags.0?true text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;\nkeyboardButtonRequestPoll#bbc7515d flags:# quiz:flags.0?Bool text:string = KeyboardButton;\ninputKeyboardButtonUserProfile#e988037b text:string user_id:InputUser = KeyboardButton;\nkeyboardButtonUserProfile#308660c1 text:string user_id:long = KeyboardButton;\nkeyboardButtonWebView#13767230 text:string url:string = KeyboardButton;\nkeyboardButtonSimpleWebView#a0c0505c text:string url:string = KeyboardButton;\nkeyboardButtonRequestPeer#53d7bfd8 text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;\ninputKeyboardButtonRequestPeer#c9662d05 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;\nkeyboardButtonRow#77608b83 buttons:Vector<KeyboardButton> = KeyboardButtonRow;\nreplyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;\nreplyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;\nreplyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;\nreplyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;\nmessageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;\nmessageEntityMention#fa04579d offset:int length:int = MessageEntity;\nmessageEntityHashtag#6f635b0d offset:int length:int = MessageEntity;\nmessageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity;\nmessageEntityUrl#6ed02538 offset:int length:int = MessageEntity;\nmessageEntityEmail#64e475c2 offset:int length:int = MessageEntity;\nmessageEntityBold#bd610bc9 offset:int length:int = MessageEntity;\nmessageEntityItalic#826f8b60 offset:int length:int = MessageEntity;\nmessageEntityCode#28a20571 offset:int length:int = MessageEntity;\nmessageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;\nmessageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;\nmessageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;\ninputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;\nmessageEntityPhone#9b69e34b offset:int length:int = MessageEntity;\nmessageEntityCashtag#4c4e743f offset:int length:int = MessageEntity;\nmessageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;\nmessageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;\nmessageEntityBankCard#761e6af4 offset:int length:int = MessageEntity;\nmessageEntitySpoiler#32ca960f offset:int length:int = MessageEntity;\nmessageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;\nmessageEntityBlockquote#20df5d0 offset:int length:int = MessageEntity;\ninputChannelEmpty#ee8c1e86 = InputChannel;\ninputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;\ninputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;\ncontacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;\nmessageRange#ae30253 min_id:int max_id:int = MessageRange;\nupdates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;\nupdates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;\nupdates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;\nchannelMessagesFilterEmpty#94d42ee7 = ChannelMessagesFilter;\nchannelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;\nchannelParticipant#c00c07c0 user_id:long date:int = ChannelParticipant;\nchannelParticipantSelf#35a8bfa7 flags:# via_request:flags.0?true user_id:long inviter_id:long date:int = ChannelParticipant;\nchannelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;\nchannelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;\nchannelParticipantBanned#6df8014e flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights = ChannelParticipant;\nchannelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;\nchannelParticipantsRecent#de3f3c79 = ChannelParticipantsFilter;\nchannelParticipantsAdmins#b4608969 = ChannelParticipantsFilter;\nchannelParticipantsKicked#a3b54985 q:string = ChannelParticipantsFilter;\nchannelParticipantsBots#b0d1865b = ChannelParticipantsFilter;\nchannelParticipantsBanned#1427a5e1 q:string = ChannelParticipantsFilter;\nchannelParticipantsSearch#656ac4b q:string = ChannelParticipantsFilter;\nchannelParticipantsContacts#bb6ae88d q:string = ChannelParticipantsFilter;\nchannelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;\nchannels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;\nchannels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;\nchannels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;\nhelp.termsOfService#780a0310 flags:# popup:flags.0?true id:DataJSON text:string entities:Vector<MessageEntity> min_age_confirm:flags.1?int = help.TermsOfService;\nmessages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;\nmessages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;\ninputBotInlineMessageMediaAuto#3380c786 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageText#3dcd7a87 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaGeo#96929a85 flags:# geo_point:InputGeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaVenue#417bbf11 flags:# geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaContact#a6edbffd flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageGame#4b425864 flags:# reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaInvoice#d7e78225 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaWebPage#bddcc510 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true optional:flags.6?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;\nbotInlineMessageMediaAuto#764cf810 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageText#8c7f65e2 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaGeo#51846fd flags:# geo:GeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaVenue#8a86659c flags:# geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaInvoice#354a9b09 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument currency:string total_amount:long reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaWebPage#809ad9a6 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true manual:flags.7?true safe:flags.8?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;\nbotInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;\nmessages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;\nexportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;\nmessageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;\nauth.codeTypeSms#72a3158c = auth.CodeType;\nauth.codeTypeCall#741cd3e3 = auth.CodeType;\nauth.codeTypeFlashCall#226ccefb = auth.CodeType;\nauth.codeTypeMissedCall#d61ad6ee = auth.CodeType;\nauth.codeTypeFragmentSms#6ed998c = auth.CodeType;\nauth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;\nauth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;\nauth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;\nauth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;\nauth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;\nauth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;\nauth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;\nauth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;\nauth.sentCodeTypeFirebaseSms#e57b1432 flags:# nonce:flags.0?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;\nmessages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;\nmessages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;\ninputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;\ninputBotInlineMessageID64#b6d915d7 dc_id:int owner_id:long id:int access_hash:long = InputBotInlineMessageID;\ninlineBotSwitchPM#3c20629f text:string start_param:string = InlineBotSwitchPM;\nmessages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;\ntopPeer#edcdc05b peer:Peer rating:double = TopPeer;\ntopPeerCategoryBotsPM#ab661b5b = TopPeerCategory;\ntopPeerCategoryBotsInline#148677e2 = TopPeerCategory;\ntopPeerCategoryCorrespondents#637b7ed = TopPeerCategory;\ntopPeerCategoryGroups#bd17a14a = TopPeerCategory;\ntopPeerCategoryChannels#161d9628 = TopPeerCategory;\ntopPeerCategoryPhoneCalls#1e76a78c = TopPeerCategory;\ntopPeerCategoryForwardUsers#a8406ca9 = TopPeerCategory;\ntopPeerCategoryForwardChats#fbeec0f0 = TopPeerCategory;\ntopPeerCategoryPeers#fb834291 category:TopPeerCategory count:int peers:Vector<TopPeer> = TopPeerCategoryPeers;\ncontacts.topPeersNotModified#de266ef5 = contacts.TopPeers;\ncontacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;\ncontacts.topPeersDisabled#b52c939d = contacts.TopPeers;\ndraftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;\ndraftMessage#3fccf7ef flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int = DraftMessage;\nmessages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;\nmessages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;\nmessages.recentStickersNotModified#b17f890 = messages.RecentStickers;\nmessages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;\nmessages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;\nmessages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;\nmessages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;\nstickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;\nstickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;\nstickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;\nstickerSetNoCovered#77b15d1c set:StickerSet = StickerSetCovered;\nmaskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;\ninputStickeredMediaPhoto#4a992157 id:InputPhoto = InputStickeredMedia;\ninputStickeredMediaDocument#438865b id:InputDocument = InputStickeredMedia;\ngame#bdf9653b flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document = Game;\ninputGameID#32c3e77 id:long access_hash:long = InputGame;\ninputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;\nhighScore#73a379eb pos:int user_id:long score:int = HighScore;\nmessages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;\ntextEmpty#dc3d824f = RichText;\ntextPlain#744694e0 text:string = RichText;\ntextBold#6724abc4 text:RichText = RichText;\ntextItalic#d912a59c text:RichText = RichText;\ntextUnderline#c12622c4 text:RichText = RichText;\ntextStrike#9bf8bb95 text:RichText = RichText;\ntextFixed#6c3f19b9 text:RichText = RichText;\ntextUrl#3c2884c1 text:RichText url:string webpage_id:long = RichText;\ntextEmail#de5a0dd6 text:RichText email:string = RichText;\ntextConcat#7e6260d7 texts:Vector<RichText> = RichText;\ntextSubscript#ed6a8504 text:RichText = RichText;\ntextSuperscript#c7fb5e01 text:RichText = RichText;\ntextMarked#34b8621 text:RichText = RichText;\ntextPhone#1ccb966a text:RichText phone:string = RichText;\ntextImage#81ccf4f document_id:long w:int h:int = RichText;\ntextAnchor#35553762 text:RichText name:string = RichText;\npageBlockUnsupported#13567e8a = PageBlock;\npageBlockTitle#70abc3fd text:RichText = PageBlock;\npageBlockSubtitle#8ffa9a1f text:RichText = PageBlock;\npageBlockAuthorDate#baafe5e0 author:RichText published_date:int = PageBlock;\npageBlockHeader#bfd064ec text:RichText = PageBlock;\npageBlockSubheader#f12bb6e1 text:RichText = PageBlock;\npageBlockParagraph#467a0766 text:RichText = PageBlock;\npageBlockPreformatted#c070d93e text:RichText language:string = PageBlock;\npageBlockFooter#48870999 text:RichText = PageBlock;\npageBlockDivider#db20b188 = PageBlock;\npageBlockAnchor#ce0d37b0 name:string = PageBlock;\npageBlockList#e4e88011 items:Vector<PageListItem> = PageBlock;\npageBlockBlockquote#263d7c26 text:RichText caption:RichText = PageBlock;\npageBlockPullquote#4f4456d3 text:RichText caption:RichText = PageBlock;\npageBlockPhoto#1759c560 flags:# photo_id:long caption:PageCaption url:flags.0?string webpage_id:flags.0?long = PageBlock;\npageBlockVideo#7c8fe7b6 flags:# autoplay:flags.0?true loop:flags.1?true video_id:long caption:PageCaption = PageBlock;\npageBlockCover#39f23300 cover:PageBlock = PageBlock;\npageBlockEmbed#a8718dc5 flags:# full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?string html:flags.2?string poster_photo_id:flags.4?long w:flags.5?int h:flags.5?int caption:PageCaption = PageBlock;\npageBlockEmbedPost#f259a80b url:string webpage_id:long author_photo_id:long author:string date:int blocks:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockCollage#65a0fa4d items:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockSlideshow#31f9590 items:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockChannel#ef1751b5 channel:Chat = PageBlock;\npageBlockAudio#804361ea audio_id:long caption:PageCaption = PageBlock;\npageBlockKicker#1e148390 text:RichText = PageBlock;\npageBlockTable#bf4dea82 flags:# bordered:flags.0?true striped:flags.1?true title:RichText rows:Vector<PageTableRow> = PageBlock;\npageBlockOrderedList#9a8ae1e1 items:Vector<PageListOrderedItem> = PageBlock;\npageBlockDetails#76768bed flags:# open:flags.0?true blocks:Vector<PageBlock> title:RichText = PageBlock;\npageBlockRelatedArticles#16115a96 title:RichText articles:Vector<PageRelatedArticle> = PageBlock;\npageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;\nphoneCallDiscardReasonMissed#85e42301 = PhoneCallDiscardReason;\nphoneCallDiscardReasonDisconnect#e095c1a0 = PhoneCallDiscardReason;\nphoneCallDiscardReasonHangup#57adc690 = PhoneCallDiscardReason;\nphoneCallDiscardReasonBusy#faf7e8c9 = PhoneCallDiscardReason;\ndataJSON#7d748d04 data:string = DataJSON;\nlabeledPrice#cb296bf8 label:string amount:long = LabeledPrice;\ninvoice#5db95a15 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string = Invoice;\npaymentCharge#ea02c27e id:string provider_charge_id:string = PaymentCharge;\npostAddress#1e8caaeb street_line1:string street_line2:string city:string state:string country_iso2:string post_code:string = PostAddress;\npaymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;\npaymentSavedCredentialsCard#cdc27a1f id:string title:string = PaymentSavedCredentials;\nwebDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;\nwebDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;\ninputWebDocument#9bed434d url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = InputWebDocument;\ninputWebFileLocation#c239d686 url:string access_hash:long = InputWebFileLocation;\ninputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;\ninputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;\nupload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;\npayments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;\npayments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;\npayments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;\npayments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;\npayments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;\npayments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;\ninputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;\ninputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;\ninputPaymentCredentialsApplePay#aa1c39f payment_data:DataJSON = InputPaymentCredentials;\ninputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;\naccount.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;\nshippingOption#b6213cdf id:string title:string prices:Vector<LabeledPrice> = ShippingOption;\ninputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;\ninputPhoneCall#1e36fded id:long access_hash:long = InputPhoneCall;\nphoneCallEmpty#5366c915 id:long = PhoneCall;\nphoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;\nphoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;\nphoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;\nphoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;\nphoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;\nphoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;\nphoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;\nphoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;\nphone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;\nupload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;\nupload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;\ncdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;\ncdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;\nlangPackString#cad181f6 key:string value:string = LangPackString;\nlangPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;\nlangPackStringDeleted#2979eeb2 key:string = LangPackString;\nlangPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;\nlangPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;\nchannelAdminLogEventActionChangeTitle#e6dfb825 prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeAbout#55188a2e prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeUsername#6a4afc38 prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangePhoto#434bd2af prev_photo:Photo new_photo:Photo = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleInvites#1b7907ae new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleSignatures#26ae0971 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionUpdatePinned#e9e82c18 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionEditMessage#709b2405 prev_message:Message new_message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDeleteMessage#42e047bb message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoin#183040d3 = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantLeave#f89777f2 = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantInvite#e31c34d8 participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantToggleBan#e6d83d7e prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantToggleAdmin#d5676710 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeStickerSet#b1c3caa7 prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;\nchannelAdminLogEventActionTogglePreHistoryHidden#5f5c95f1 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDefaultBannedRights#2df5fc0a prev_banned_rights:ChatBannedRights new_banned_rights:ChatBannedRights = ChannelAdminLogEventAction;\nchannelAdminLogEventActionStopPoll#8f079643 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeLinkedChat#50c7ac8 prev_value:long new_value:long = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeLocation#e6b76ae prev_value:ChannelLocation new_value:ChannelLocation = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleSlowMode#53909779 prev_value:int new_value:int = ChannelAdminLogEventAction;\nchannelAdminLogEventActionStartGroupCall#23209745 call:InputGroupCall = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDiscardGroupCall#db9f9140 call:InputGroupCall = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantMute#f92424d2 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantUnmute#e64429c0 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleGroupCallSetting#56d6a247 join_muted:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoinByInvite#fe9fc158 flags:# via_chatlist:flags.0?true invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteDelete#5a50fca4 invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteRevoke#410a134e invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteEdit#e90ebb59 prev_invite:ExportedChatInvite new_invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantVolume#3e7f6847 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeHistoryTTL#6e941a38 prev_value:int new_value:int = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoinByRequest#afb6144a invite:ExportedChatInvite approved_by:long = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleNoForwards#cb2ac766 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionSendMessage#278f2868 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeUsernames#f04fb3a9 prev_value:Vector<string> new_value:Vector<string> = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleForum#2cc6383 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionCreateTopic#58707d28 topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDeleteTopic#ae168909 topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionPinTopic#5d8d353b flags:# prev_topic:flags.0?ForumTopic new_topic:flags.1?ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleAntiSpam#64f36dfc new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangePeerColor#5796e780 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeProfilePeerColor#5e477b25 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeWallpaper#31bb5d52 prev_value:WallPaper new_value:WallPaper = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeEmojiStatus#3ea9feb1 prev_value:EmojiStatus new_value:EmojiStatus = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeEmojiStickerSet#46d840ab prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;\nchannelAdminLogEvent#1fad68cd id:long date:int user_id:long action:ChannelAdminLogEventAction = ChannelAdminLogEvent;\nchannels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;\nchannelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true = ChannelAdminLogEventsFilter;\npopularContact#5ce14175 client_id:long importers:int = PopularContact;\nmessages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;\nmessages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;\nrecentMeUrlUnknown#46e1d13d url:string = RecentMeUrl;\nrecentMeUrlUser#b92c09e2 url:string user_id:long = RecentMeUrl;\nrecentMeUrlChat#b2da71d2 url:string chat_id:long = RecentMeUrl;\nrecentMeUrlChatInvite#eb49081d url:string chat_invite:ChatInvite = RecentMeUrl;\nrecentMeUrlStickerSet#bc0a57dc url:string set:StickerSetCovered = RecentMeUrl;\nhelp.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;\ninputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;\nwebAuthorization#a6f8f452 hash:long bot_id:long domain:string browser:string platform:string date_created:int date_active:int ip:string region:string = WebAuthorization;\naccount.webAuthorizations#ed56c9fc authorizations:Vector<WebAuthorization> users:Vector<User> = account.WebAuthorizations;\ninputMessageID#a676a322 id:int = InputMessage;\ninputMessageReplyTo#bad88395 id:int = InputMessage;\ninputMessagePinned#86872538 = InputMessage;\ninputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;\ninputDialogPeer#fcaafeb7 peer:InputPeer = InputDialogPeer;\ninputDialogPeerFolder#64600527 folder_id:int = InputDialogPeer;\ndialogPeer#e56dbf05 peer:Peer = DialogPeer;\ndialogPeerFolder#514519e2 folder_id:int = DialogPeer;\nmessages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;\nmessages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;\nfileHash#f39b035c offset:long limit:int hash:bytes = FileHash;\ninputClientProxy#75588b3f address:string port:int = InputClientProxy;\nhelp.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;\nhelp.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;\ninputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;\ninputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;\nsecureFileEmpty#64199744 = SecureFile;\nsecureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;\nsecureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;\nsecurePlainPhone#7d6099dd phone:string = SecurePlainData;\nsecurePlainEmail#21ec5a5f email:string = SecurePlainData;\nsecureValueTypePersonalDetails#9d2a81e3 = SecureValueType;\nsecureValueTypePassport#3dac6a00 = SecureValueType;\nsecureValueTypeDriverLicense#6e425c4 = SecureValueType;\nsecureValueTypeIdentityCard#a0d0744b = SecureValueType;\nsecureValueTypeInternalPassport#99a48f23 = SecureValueType;\nsecureValueTypeAddress#cbe31e26 = SecureValueType;\nsecureValueTypeUtilityBill#fc36954e = SecureValueType;\nsecureValueTypeBankStatement#89137c0d = SecureValueType;\nsecureValueTypeRentalAgreement#8b883488 = SecureValueType;\nsecureValueTypePassportRegistration#99e3806a = SecureValueType;\nsecureValueTypeTemporaryRegistration#ea02ec33 = SecureValueType;\nsecureValueTypePhone#b320aadb = SecureValueType;\nsecureValueTypeEmail#8e3ca7ee = SecureValueType;\nsecureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;\ninputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;\nsecureValueHash#ed1ecdb0 type:SecureValueType hash:bytes = SecureValueHash;\nsecureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;\nsecureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;\nsecureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;\nsecureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;\nsecureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;\naccount.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;\naccount.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;\nhelp.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;\nhelp.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;\nsavedPhoneContact#1142bd56 phone:string first_name:string last_name:string date:int = SavedContact;\naccount.takeout#4dba4501 id:long = account.Takeout;\npasswordKdfAlgoUnknown#d45ab096 = PasswordKdfAlgo;\npasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;\nsecurePasswordKdfAlgoUnknown#4a8537 = SecurePasswordKdfAlgo;\nsecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000#bbf2dda0 salt:bytes = SecurePasswordKdfAlgo;\nsecurePasswordKdfAlgoSHA512#86471d92 salt:bytes = SecurePasswordKdfAlgo;\nsecureSecretSettings#1527bcac secure_algo:SecurePasswordKdfAlgo secure_secret:bytes secure_secret_id:long = SecureSecretSettings;\ninputCheckPasswordEmpty#9880f658 = InputCheckPasswordSRP;\ninputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;\nsecureRequiredType#829d99da flags:# native_names:flags.0?true selfie_required:flags.1?true translation_required:flags.2?true type:SecureValueType = SecureRequiredType;\nsecureRequiredTypeOneOf#27477b4 types:Vector<SecureRequiredType> = SecureRequiredType;\nhelp.passportConfigNotModified#bfb9f457 = help.PassportConfig;\nhelp.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;\ninputAppEvent#1d1b1245 time:double type:string peer:long data:JSONValue = InputAppEvent;\njsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue;\njsonNull#3f6d7b68 = JSONValue;\njsonBool#c7345e6a value:Bool = JSONValue;\njsonNumber#2be0dfa4 value:double = JSONValue;\njsonString#b71e767a value:string = JSONValue;\njsonArray#f7444763 value:Vector<JSONValue> = JSONValue;\njsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;\npageTableCell#34566b6a flags:# header:flags.0?true align_center:flags.3?true align_right:flags.4?true valign_middle:flags.5?true valign_bottom:flags.6?true text:flags.7?RichText colspan:flags.1?int rowspan:flags.2?int = PageTableCell;\npageTableRow#e0c0c5e5 cells:Vector<PageTableCell> = PageTableRow;\npageCaption#6f747657 text:RichText credit:RichText = PageCaption;\npageListItemText#b92fb6cd text:RichText = PageListItem;\npageListItemBlocks#25e073fc blocks:Vector<PageBlock> = PageListItem;\npageListOrderedItemText#5e068047 num:string text:RichText = PageListOrderedItem;\npageListOrderedItemBlocks#98dd8936 num:string blocks:Vector<PageBlock> = PageListOrderedItem;\npageRelatedArticle#b390dc08 flags:# url:string webpage_id:long title:flags.0?string description:flags.1?string photo_id:flags.2?long author:flags.3?string published_date:flags.4?int = PageRelatedArticle;\npage#98657f0d flags:# part:flags.0?true rtl:flags.1?true v2:flags.2?true url:string blocks:Vector<PageBlock> photos:Vector<Photo> documents:Vector<Document> views:flags.3?int = Page;\nhelp.supportName#8c05f1c9 name:string = help.SupportName;\nhelp.userInfoEmpty#f3ae2eed = help.UserInfo;\nhelp.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;\npollAnswer#6ca9c2e9 text:string option:bytes = PollAnswer;\npoll#86e18161 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:string answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;\npollAnswerVoters#3b6ddad2 flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:int = PollAnswerVoters;\npollResults#7adf2420 flags:# min:flags.0?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> = PollResults;\nchatOnlines#f041e250 onlines:int = ChatOnlines;\nstatsURL#47a971e0 url:string = StatsURL;\nchatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true = ChatAdminRights;\nchatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true until_date:int = ChatBannedRights;\ninputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;\ninputWallPaperSlug#72091c80 slug:string = InputWallPaper;\ninputWallPaperNoFile#967a462e id:long = InputWallPaper;\naccount.wallPapersNotModified#1c199183 = account.WallPapers;\naccount.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;\ncodeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;\nwallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;\nautoDownloadSettings#baa57628 flags:# disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:int video_size_max:long file_size_max:long video_upload_maxbitrate:int small_queue_active_operations_max:int large_queue_active_operations_max:int = AutoDownloadSettings;\naccount.autoDownloadSettings#63cacf26 low:AutoDownloadSettings medium:AutoDownloadSettings high:AutoDownloadSettings = account.AutoDownloadSettings;\nemojiKeyword#d5b3b9f9 keyword:string emoticons:Vector<string> = EmojiKeyword;\nemojiKeywordDeleted#236df622 keyword:string emoticons:Vector<string> = EmojiKeyword;\nemojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;\nemojiURL#a575739d url:string = EmojiURL;\nemojiLanguage#b3fb5361 lang_code:string = EmojiLanguage;\nfolder#ff544e65 flags:# autofill_new_broadcasts:flags.0?true autofill_public_groups:flags.1?true autofill_new_correspondents:flags.2?true id:int title:string photo:flags.3?ChatPhoto = Folder;\ninputFolderPeer#fbd2c296 peer:InputPeer folder_id:int = InputFolderPeer;\nfolderPeer#e9baa668 peer:Peer folder_id:int = FolderPeer;\nmessages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;\nurlAuthResultRequest#92d33a0e flags:# request_write_access:flags.0?true bot:User domain:string = UrlAuthResult;\nurlAuthResultAccepted#8f8c0e4e url:string = UrlAuthResult;\nurlAuthResultDefault#a9d6db1f = UrlAuthResult;\nchannelLocationEmpty#bfb5ad8b = ChannelLocation;\nchannelLocation#209b82db geo_point:GeoPoint address:string = ChannelLocation;\npeerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;\npeerSelfLocated#f8ec284b expires:int = PeerLocated;\nrestrictionReason#d072acb4 platform:string reason:string text:string = RestrictionReason;\ninputTheme#3c5693e9 id:long access_hash:long = InputTheme;\ninputThemeSlug#f5890df1 slug:string = InputTheme;\ntheme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;\naccount.themesNotModified#f41eb622 = account.Themes;\naccount.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;\nauth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;\nauth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;\nauth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;\naccount.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;\nmessages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;\nbaseThemeClassic#c3a12462 = BaseTheme;\nbaseThemeDay#fbd81688 = BaseTheme;\nbaseThemeNight#b7b31ea8 = BaseTheme;\nbaseThemeTinted#6d5f77ee = BaseTheme;\nbaseThemeArctic#5b11125a = BaseTheme;\ninputThemeSettings#8fde504f flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?InputWallPaper wallpaper_settings:flags.1?WallPaperSettings = InputThemeSettings;\nthemeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;\nwebPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;\nwebPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;\nmessages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;\nbankCardOpenUrl#f568028a url:string name:string = BankCardOpenUrl;\npayments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;\ndialogFilter#5fb5523b flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true id:int title:string emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;\ndialogFilterDefault#363293ae = DialogFilter;\ndialogFilterChatlist#9fe28ea4 flags:# has_my_invites:flags.26?true id:int title:string emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;\ndialogFilterSuggested#77744d4a filter:DialogFilter description:string = DialogFilterSuggested;\nstatsDateRangeDays#b637edaf min_date:int max_date:int = StatsDateRangeDays;\nstatsAbsValueAndPrev#cb43acde current:double previous:double = StatsAbsValueAndPrev;\nstatsPercentValue#cbce2fe0 part:double total:double = StatsPercentValue;\nstatsGraphAsync#4a27eb2d token:string = StatsGraph;\nstatsGraphError#bedc9822 error:string = StatsGraph;\nstatsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;\nstats.broadcastStats#396ca5fc period:StatsDateRangeDays followers:StatsAbsValueAndPrev views_per_post:StatsAbsValueAndPrev shares_per_post:StatsAbsValueAndPrev reactions_per_post:StatsAbsValueAndPrev views_per_story:StatsAbsValueAndPrev shares_per_story:StatsAbsValueAndPrev reactions_per_story:StatsAbsValueAndPrev enabled_notifications:StatsPercentValue growth_graph:StatsGraph followers_graph:StatsGraph mute_graph:StatsGraph top_hours_graph:StatsGraph interactions_graph:StatsGraph iv_interactions_graph:StatsGraph views_by_source_graph:StatsGraph new_followers_by_source_graph:StatsGraph languages_graph:StatsGraph reactions_by_emotion_graph:StatsGraph story_interactions_graph:StatsGraph story_reactions_by_emotion_graph:StatsGraph recent_posts_interactions:Vector<PostInteractionCounters> = stats.BroadcastStats;\nhelp.promoDataEmpty#98f6ac75 expires:int = help.PromoData;\nhelp.promoData#8c39793f flags:# proxy:flags.0?true expires:int peer:Peer chats:Vector<Chat> users:Vector<User> psa_type:flags.1?string psa_message:flags.2?string = help.PromoData;\nvideoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;\nvideoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;\nvideoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;\nstatsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;\nstatsGroupTopAdmin#d7584c87 user_id:long deleted:int kicked:int banned:int = StatsGroupTopAdmin;\nstatsGroupTopInviter#535f779d user_id:long invitations:int = StatsGroupTopInviter;\nstats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;\nglobalPrivacySettings#734c4ccb flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true = GlobalPrivacySettings;\nhelp.countryCode#4203c5ef flags:# country_code:string prefixes:flags.0?Vector<string> patterns:flags.1?Vector<string> = help.CountryCode;\nhelp.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;\nhelp.countriesListNotModified#93cc1f32 = help.CountriesList;\nhelp.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;\nmessageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;\nmessages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;\nmessages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;\nmessageReplyHeader#afbc09db flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int = MessageReplyHeader;\nmessageReplyStoryHeader#e5af939 peer:Peer story_id:int = MessageReplyHeader;\nmessageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;\npeerBlocked#e8fd8014 peer_id:Peer date:int = PeerBlocked;\nstats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;\ngroupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;\ngroupCall#d597650c flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int = GroupCall;\ninputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;\ngroupCallParticipant#eba636fe flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo = GroupCallParticipant;\nphone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;\nphone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;\ninlineQueryPeerTypeSameBotPM#3081ed9d = InlineQueryPeerType;\ninlineQueryPeerTypePM#833c0fac = InlineQueryPeerType;\ninlineQueryPeerTypeChat#d766c50a = InlineQueryPeerType;\ninlineQueryPeerTypeMegagroup#5ec4be43 = InlineQueryPeerType;\ninlineQueryPeerTypeBroadcast#6334ee9a = InlineQueryPeerType;\ninlineQueryPeerTypeBotPM#e3b2d0c = InlineQueryPeerType;\nmessages.historyImport#1662af0b id:long = messages.HistoryImport;\nmessages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;\nmessages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;\nchatInviteImporter#8c5adfd9 flags:# requested:flags.0?true via_chatlist:flags.3?true user_id:long date:int about:flags.2?string approved_by:flags.1?long = ChatInviteImporter;\nmessages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;\nmessages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;\nmessages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;\nmessages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;\nchatAdminWithInvites#f2ecef23 admin_id:long invites_count:int revoked_invites_count:int = ChatAdminWithInvites;\nmessages.chatAdminsWithInvites#b69b72d7 admins:Vector<ChatAdminWithInvites> users:Vector<User> = messages.ChatAdminsWithInvites;\nmessages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;\nphone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;\nphone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;\ngroupCallParticipantVideoSourceGroup#dcb118b7 semantics:string sources:Vector<int> = GroupCallParticipantVideoSourceGroup;\ngroupCallParticipantVideo#67753ac8 flags:# paused:flags.0?true endpoint:string source_groups:Vector<GroupCallParticipantVideoSourceGroup> audio_source:flags.1?int = GroupCallParticipantVideo;\nstickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;\nbotCommandScopeDefault#2f6cb2ab = BotCommandScope;\nbotCommandScopeUsers#3c4f04d8 = BotCommandScope;\nbotCommandScopeChats#6fe1a881 = BotCommandScope;\nbotCommandScopeChatAdmins#b9aa606a = BotCommandScope;\nbotCommandScopePeer#db9d897d peer:InputPeer = BotCommandScope;\nbotCommandScopePeerAdmins#3fd863d1 peer:InputPeer = BotCommandScope;\nbotCommandScopePeerUser#a1321f3 peer:InputPeer user_id:InputUser = BotCommandScope;\naccount.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;\naccount.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;\naccount.resetPasswordOk#e926d63e = account.ResetPasswordResult;\nsponsoredMessage#ed5383f7 flags:# recommended:flags.5?true show_peer_photo:flags.6?true can_report:flags.12?true random_id:bytes from_id:flags.3?Peer chat_invite:flags.4?ChatInvite chat_invite_hash:flags.4?string channel_post:flags.2?int start_param:flags.0?string webpage:flags.9?SponsoredWebPage app:flags.10?BotApp message:string entities:flags.1?Vector<MessageEntity> button_text:flags.11?string sponsor_info:flags.7?string additional_info:flags.8?string = SponsoredMessage;\nmessages.sponsoredMessages#c9ee1d87 flags:# posts_between:flags.0?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;\nmessages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;\nsearchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;\nmessages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;\nsearchResultPosition#7f648b67 msg_id:int date:int offset:int = SearchResultsPosition;\nmessages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;\nchannels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;\nusers.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;\nmessages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;\nauth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;\nreactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;\nmessageReactions#4f2b9479 flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> = MessageReactions;\nmessages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;\navailableReaction#c077ec01 flags:# inactive:flags.0?true premium:flags.2?true reaction:string title:string static_icon:Document appear_animation:Document select_animation:Document activate_animation:Document effect_animation:Document around_animation:flags.1?Document center_icon:flags.1?Document = AvailableReaction;\nmessages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;\nmessages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;\nmessagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;\ngroupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;\nphone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;\nphone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;\nattachMenuBotIconColor#4576f3f0 name:string color:int = AttachMenuBotIconColor;\nattachMenuBotIcon#b2a7386b flags:# name:string icon:Document colors:flags.0?Vector<AttachMenuBotIconColor> = AttachMenuBotIcon;\nattachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;\nattachMenuBotsNotModified#f1d88a5c = AttachMenuBots;\nattachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;\nattachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;\nwebViewResultUrl#c14557c query_id:long url:string = WebViewResult;\nsimpleWebViewResultUrl#882f76bb url:string = SimpleWebViewResult;\nwebViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;\nbotMenuButtonDefault#7533a588 = BotMenuButton;\nbotMenuButtonCommands#4258c205 = BotMenuButton;\nbotMenuButton#c7b57ce6 text:string url:string = BotMenuButton;\naccount.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;\naccount.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;\nnotificationSoundDefault#97e8bebe = NotificationSound;\nnotificationSoundNone#6f0c34df = NotificationSound;\nnotificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;\nnotificationSoundRingtone#ff6c8049 id:long = NotificationSound;\naccount.savedRingtone#b7263f6d = account.SavedRingtone;\naccount.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;\nattachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;\nattachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;\nattachMenuPeerTypePM#f146d31f = AttachMenuPeerType;\nattachMenuPeerTypeChat#509113f = AttachMenuPeerType;\nattachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;\ninputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;\ninputInvoiceSlug#c326caef slug:string = InputInvoice;\ninputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;\npayments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;\nmessages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;\nhelp.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;\ninputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;\ninputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;\ninputStorePaymentPremiumGiftCode#a3805f3f flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long = InputStorePaymentPurpose;\ninputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;\npremiumGiftOption#74c34319 flags:# months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumGiftOption;\npaymentFormMethod#88f8f21b url:string title:string = PaymentFormMethod;\nemojiStatusEmpty#2de11aae = EmojiStatus;\nemojiStatus#929b619d document_id:long = EmojiStatus;\nemojiStatusUntil#fa30a8c7 document_id:long until:int = EmojiStatus;\naccount.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;\naccount.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;\nreactionEmpty#79f5d419 = Reaction;\nreactionEmoji#1b2286b8 emoticon:string = Reaction;\nreactionCustomEmoji#8935fc73 document_id:long = Reaction;\nchatReactionsNone#eafc32bc = ChatReactions;\nchatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;\nchatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;\nmessages.reactionsNotModified#b06fdbdf = messages.Reactions;\nmessages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;\nemailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;\nemailVerifyPurposeLoginChange#527d22eb = EmailVerifyPurpose;\nemailVerifyPurposePassport#bbf51685 = EmailVerifyPurpose;\nemailVerificationCode#922e55a9 code:string = EmailVerification;\nemailVerificationGoogle#db909ec2 token:string = EmailVerification;\nemailVerificationApple#96d074fd token:string = EmailVerification;\naccount.emailVerified#2b96cd1b email:string = account.EmailVerified;\naccount.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;\npremiumSubscriptionOption#5f2d1df2 flags:# current:flags.1?true can_purchase_upgrade:flags.2?true transaction:flags.3?string months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumSubscriptionOption;\nsendAsPeer#b81c7034 flags:# premium_required:flags.0?true peer:Peer = SendAsPeer;\nmessageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;\nmessageExtendedMedia#ee479c64 media:MessageMedia = MessageExtendedMedia;\nstickerKeyword#fcfeb29c document_id:long keyword:Vector<string> = StickerKeyword;\nusername#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;\nforumTopicDeleted#23f109b id:int = ForumTopic;\nforumTopic#71701da9 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true id:int date:int title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;\nmessages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;\ndefaultHistoryTTL#43b46b20 period:int = DefaultHistoryTTL;\nexportedContactToken#41bf109b url:string expires:int = ExportedContactToken;\nrequestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;\nrequestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;\nrequestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;\nemojiListNotModified#481eadfa = EmojiList;\nemojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;\nemojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;\nmessages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;\nmessages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;\ntextWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;\nmessages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;\nautoSaveSettings#c84834ce flags:# photos:flags.0?true videos:flags.1?true video_max_size:flags.2?long = AutoSaveSettings;\nautoSaveException#81602d47 peer:Peer settings:AutoSaveSettings = AutoSaveException;\naccount.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;\nhelp.appConfigNotModified#7cde641d = help.AppConfig;\nhelp.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;\ninputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;\ninputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;\nbotAppNotModified#5da674b7 = BotApp;\nbotApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;\nmessages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;\nappWebViewResultUrl#3c1b4f0d url:string = AppWebViewResult;\ninlineBotWebView#b57295d5 text:string url:string = InlineBotWebView;\nreadParticipantDate#4a4ff172 user_id:long date:int = ReadParticipantDate;\ninputChatlistDialogFilter#f3e0da33 filter_id:int = InputChatlist;\nexportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;\nchatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;\nchatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;\nchatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;\nchatlists.chatlistInvite#1dcd839d flags:# title:string emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;\nchatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;\nbots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;\nmessagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;\nmessagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;\nmessagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;\nsponsoredWebPage#3db8ec63 flags:# url:string site_name:string photo:flags.0?Photo = SponsoredWebPage;\nstoryViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;\nstoryItemDeleted#51e6ee4f id:int = StoryItem;\nstoryItemSkipped#ffadc913 flags:# close_friends:flags.8?true id:int date:int expire_date:int = StoryItem;\nstoryItem#79b26a24 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction = StoryItem;\nstories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;\nstories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;\nstories.stories#5dd8c3c8 count:int stories:Vector<StoryItem> chats:Vector<Chat> users:Vector<User> = stories.Stories;\nstoryView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;\nstoryViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;\nstoryViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;\nstories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;\nstories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;\ninputReplyToMessage#22c0f6d5 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int = InputReplyTo;\ninputReplyToStory#5881323a peer:InputPeer story_id:int = InputReplyTo;\nexportedStoryLink#3fc9053b link:string = ExportedStoryLink;\nstoriesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;\nmediaAreaCoordinates#3d1ea4e x:double y:double w:double h:double rotation:double = MediaAreaCoordinates;\nmediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;\ninputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;\nmediaAreaGeoPoint#df8b3b22 coordinates:MediaAreaCoordinates geo:GeoPoint = MediaArea;\nmediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;\nmediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;\ninputMediaAreaChannelPost#2271f2bf coordinates:MediaAreaCoordinates channel:InputChannel msg_id:int = MediaArea;\npeerStories#9a35e999 flags:# peer:Peer max_read_id:flags.0?int stories:Vector<StoryItem> = PeerStories;\nstories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;\nmessages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;\npremiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;\npayments.checkedGiftCode#284a1096 flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int months:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;\npayments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;\npayments.giveawayInfoResults#cd5570 flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.0?string finish_date:int winners_count:int activated_count:int = payments.GiveawayInfo;\nprepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;\nboost#2a1c8c71 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int = Boost;\npremium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;\nmyBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;\npremium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;\npremium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;\nstoryFwdHeader#b826e150 flags:# modified:flags.3?true from:flags.0?Peer from_name:flags.1?string story_id:flags.2?int = StoryFwdHeader;\npostInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;\npostInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;\nstats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;\npublicForwardMessage#1f2bf4a message:Message = PublicForward;\npublicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;\nstats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;\npeerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;\nhelp.peerColorSet#26219a58 colors:Vector<int> = help.PeerColorSet;\nhelp.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;\nhelp.peerColorOption#adec6ebe flags:# hidden:flags.0?true color_id:int colors:flags.1?help.PeerColorSet dark_colors:flags.2?help.PeerColorSet channel_min_level:flags.3?int group_min_level:flags.4?int = help.PeerColorOption;\nhelp.peerColorsNotModified#2ba1f5ce = help.PeerColors;\nhelp.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;\nstoryReaction#6090d6d5 peer_id:Peer date:int reaction:Reaction = StoryReaction;\nstoryReactionPublicForward#bbab2643 message:Message = StoryReaction;\nstoryReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;\nstories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;\nsavedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;\nmessages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;\nmessages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;\nmessages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;\nsavedReactionTag#cb6ff828 flags:# reaction:Reaction title:flags.0?string count:int = SavedReactionTag;\nmessages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;\nmessages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;\noutboxReadDate#3bb842ac date:int = OutboxReadDate;\nsmsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;\nsmsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;\nsmsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;\nbusinessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;\nbusinessWorkHours#8c92b098 flags:# open_now:flags.0?true timezone_id:string weekly_open:Vector<BusinessWeeklyOpen> = BusinessWorkHours;\nbusinessLocation#ac5c1af7 flags:# geo_point:flags.0?GeoPoint address:string = BusinessLocation;\ninputBusinessRecipients#6f8b32aa flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> = InputBusinessRecipients;\nbusinessRecipients#21108ff7 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> = BusinessRecipients;\nbusinessAwayMessageScheduleAlways#c9b9e2b9 = BusinessAwayMessageSchedule;\nbusinessAwayMessageScheduleOutsideWorkHours#c3f2f501 = BusinessAwayMessageSchedule;\nbusinessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;\ninputBusinessGreetingMessage#194cb3b shortcut_id:int recipients:InputBusinessRecipients no_activity_days:int = InputBusinessGreetingMessage;\nbusinessGreetingMessage#e519abab shortcut_id:int recipients:BusinessRecipients no_activity_days:int = BusinessGreetingMessage;\ninputBusinessAwayMessage#832175e0 flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:InputBusinessRecipients = InputBusinessAwayMessage;\nbusinessAwayMessage#ef156a5c flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:BusinessRecipients = BusinessAwayMessage;\ntimezone#ff9289f5 id:string name:string utc_offset:int = Timezone;\nhelp.timezonesListNotModified#970708cc = help.TimezonesList;\nhelp.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;\nquickReply#697102b shortcut_id:int shortcut:string top_message:int count:int = QuickReply;\ninputQuickReplyShortcut#24596d41 shortcut:string = InputQuickReplyShortcut;\ninputQuickReplyShortcutId#1190cf1 shortcut_id:int = InputQuickReplyShortcut;\nmessages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;\nmessages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;\nconnectedBot#bd068601 flags:# can_reply:flags.0?true bot_id:long recipients:BusinessBotRecipients = ConnectedBot;\naccount.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;\nmessages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;\nbirthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;\nbotBusinessConnection#896433b4 flags:# can_reply:flags.0?true disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int = BotBusinessConnection;\ninputBusinessIntro#9c469cd flags:# title:string description:string sticker:flags.0?InputDocument = InputBusinessIntro;\nbusinessIntro#5a0a066d flags:# title:string description:string sticker:flags.0?Document = BusinessIntro;\nmessages.myStickers#faff629d count:int sets:Vector<StickerSetCovered> = messages.MyStickers;\ninputCollectibleUsername#e39460a9 username:string = InputCollectible;\ninputCollectiblePhone#a2e214a4 phone:string = InputCollectible;\nfragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;\ninputBusinessBotRecipients#c4e5921e flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> exclude_users:flags.6?Vector<InputUser> = InputBusinessBotRecipients;\nbusinessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;\ncontactBirthday#1d998733 contact_id:long birthday:Birthday = ContactBirthday;\ncontacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;\nmissingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;\nmessages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;\ninputBusinessChatLink#11679fa7 flags:# message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string = InputBusinessChatLink;\nbusinessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;\naccount.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;\naccount.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;\nrequestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;\nrequestedPeerChat#7307544f flags:# chat_id:long title:flags.0?string photo:flags.2?Photo = RequestedPeer;\nrequestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;\nsponsoredMessageReportOption#430d3150 text:string option:bytes = SponsoredMessageReportOption;\nchannels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;\nchannels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;\nchannels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;\nstats.broadcastRevenueStats#d07b4bad top_hours_graph:StatsGraph revenue_graph:StatsGraph current_balance:long available_balance:long overall_revenue:long usd_rate:double = stats.BroadcastRevenueStats;\nstats.broadcastRevenueWithdrawalUrl#ec659737 url:string = stats.BroadcastRevenueWithdrawalUrl;\nbroadcastRevenueTransactionProceeds#557e2cc4 amount:long from_date:int to_date:int = BroadcastRevenueTransaction;\nbroadcastRevenueTransactionWithdrawal#5a590978 flags:# pending:flags.0?true failed:flags.2?true amount:long date:int provider:string transaction_date:flags.1?int transaction_url:flags.1?string = BroadcastRevenueTransaction;\nbroadcastRevenueTransactionRefund#42d30d2e amount:long date:int provider:string = BroadcastRevenueTransaction;\nstats.broadcastRevenueTransactions#87158466 count:int transactions:Vector<BroadcastRevenueTransaction> = stats.BroadcastRevenueTransactions;\n---functions---\ninvokeAfterMsg#cb9f372d {X:Type} msg_id:long query:!X = X;\ninitConnection#c1cd5ea9 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy params:flags.1?JSONValue query:!X = X;\ninvokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;\nauth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;\nauth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;\nauth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;\nauth.logOut#3e72ba19 = auth.LoggedOut;\nauth.resetAuthorizations#9fab0d1a = Bool;\nauth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;\nauth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;\nauth.bindTempAuthKey#cdd42a05 perm_auth_key_id:long nonce:long expires_at:int encrypted_message:bytes = Bool;\nauth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;\nauth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;\nauth.resendCode#3ef1a9bf phone_number:string phone_code_hash:string = auth.SentCode;\nauth.cancelCode#1f040578 phone_number:string phone_code_hash:string = Bool;\nauth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;\nauth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;\nauth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;\nauth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;\naccount.registerDevice#ec86017a flags:# no_muted:flags.0?true token_type:int token:string app_sandbox:Bool secret:bytes other_uids:Vector<long> = Bool;\naccount.unregisterDevice#6a0d3206 token_type:int token:string other_uids:Vector<long> = Bool;\naccount.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;\naccount.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;\naccount.updateProfile#78515775 flags:# first_name:flags.0?string last_name:flags.1?string about:flags.2?string = User;\naccount.updateStatus#6628562c offline:Bool = Bool;\naccount.getWallPapers#7967d36 hash:long = account.WallPapers;\naccount.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;\naccount.checkUsername#2714d86c username:string = Bool;\naccount.updateUsername#3e0bdd7c username:string = User;\naccount.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;\naccount.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;\naccount.getAuthorizations#e320c158 = account.Authorizations;\naccount.resetAuthorization#df77f3bc hash:long = Bool;\naccount.getPassword#548a30f5 = account.Password;\naccount.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;\naccount.updatePasswordSettings#a59b102f password:InputCheckPasswordSRP new_settings:account.PasswordInputSettings = Bool;\naccount.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;\naccount.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;\naccount.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;\naccount.getWebAuthorizations#182e6d6f = account.WebAuthorizations;\naccount.resetWebAuthorization#2d01b9ef hash:long = Bool;\naccount.resetWebAuthorizations#682d2594 = Bool;\naccount.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;\naccount.confirmPasswordEmail#8fdf1920 code:string = Bool;\naccount.getContactSignUpNotification#9f07c728 = Bool;\naccount.setContactSignUpNotification#cff43f61 silent:Bool = Bool;\naccount.getNotifyExceptions#53577479 flags:# compare_sound:flags.1?true compare_stories:flags.2?true peer:flags.0?InputNotifyPeer = Updates;\naccount.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;\naccount.setContentSettings#b574b16b flags:# sensitive_enabled:flags.0?true = Bool;\naccount.getContentSettings#8b9b4dae = account.ContentSettings;\naccount.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;\naccount.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;\naccount.reportProfilePhoto#fa8cc6f5 peer:InputPeer photo_id:InputPhoto reason:ReportReason message:string = Bool;\naccount.setAuthorizationTTL#bf899aa0 authorization_ttl_days:int = Bool;\naccount.changeAuthorizationSettings#40f48462 flags:# confirmed:flags.3?true hash:long encrypted_requests_disabled:flags.0?Bool call_requests_disabled:flags.1?Bool = Bool;\naccount.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;\naccount.getRecentEmojiStatuses#f578105 hash:long = account.EmojiStatuses;\naccount.reorderUsernames#ef500eab order:Vector<string> = Bool;\naccount.toggleUsername#58d6b376 username:string active:Bool = Bool;\naccount.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;\nusers.getUsers#d91a548 id:Vector<InputUser> = Vector<User>;\nusers.getFullUser#b60f5918 id:InputUser = users.UserFull;\ncontacts.getContacts#5dd69e12 hash:long = contacts.Contacts;\ncontacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;\ncontacts.deleteContacts#96a0e00 id:Vector<InputUser> = Updates;\ncontacts.block#2e2e8734 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;\ncontacts.unblock#b550d328 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;\ncontacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;\ncontacts.search#11f812d8 q:string limit:int = contacts.Found;\ncontacts.resolveUsername#f93ccba3 username:string = contacts.ResolvedPeer;\ncontacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true offset:int limit:int hash:long = contacts.TopPeers;\ncontacts.addContact#e8f463d0 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string = Updates;\ncontacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;\ncontacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;\nmessages.getMessages#63c66506 id:Vector<InputMessage> = messages.Messages;\nmessages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;\nmessages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;\nmessages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;\nmessages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;\nmessages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;\nmessages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;\nmessages.sendMessage#dff8042c flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut = Updates;\nmessages.sendMedia#7bd66041 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut = Updates;\nmessages.forwardMessages#d5039208 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut = Updates;\nmessages.reportSpam#cf1592db peer:InputPeer = Bool;\nmessages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;\nmessages.report#8953ab4e peer:InputPeer id:Vector<int> reason:ReportReason message:string = Bool;\nmessages.getChats#49e9528f id:Vector<long> = messages.Chats;\nmessages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;\nmessages.editChatTitle#73783ffd chat_id:long title:string = Updates;\nmessages.editChatPhoto#35ddd674 chat_id:long photo:InputChatPhoto = Updates;\nmessages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;\nmessages.deleteChatUser#a2185cab flags:# revoke_history:flags.0?true chat_id:long user_id:InputUser = Updates;\nmessages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;\nmessages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;\nmessages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;\nmessages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;\nmessages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;\nmessages.getWebPagePreview#8b68b0cc flags:# message:string entities:flags.3?Vector<MessageEntity> = MessageMedia;\nmessages.exportChatInvite#a02ce5d5 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string = ExportedChatInvite;\nmessages.checkChatInvite#3eadb1bb hash:string = ChatInvite;\nmessages.importChatInvite#6c50051c hash:string = Updates;\nmessages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;\nmessages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;\nmessages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;\nmessages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;\nmessages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;\nmessages.migrateChat#a2875319 chat_id:long = Updates;\nmessages.searchGlobal#4bc6589a flags:# folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;\nmessages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;\nmessages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;\nmessages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;\nmessages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;\nmessages.sendInlineBotResult#3ebee86a flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut = Updates;\nmessages.editMessage#dfd14005 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int quick_reply_shortcut_id:flags.17?int = Updates;\nmessages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;\nmessages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;\nmessages.saveDraft#7ff3b806 flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia = Bool;\nmessages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;\nmessages.readFeaturedStickers#5b118126 id:Vector<long> = Bool;\nmessages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;\nmessages.saveRecentSticker#392718f8 flags:# attached:flags.0?true id:InputDocument unsave:Bool = Bool;\nmessages.clearRecentStickers#8999602d flags:# attached:flags.0?true = Bool;\nmessages.getCommonChats#e40ca104 user_id:InputUser max_id:long limit:int = messages.Chats;\nmessages.getWebPage#8d9692a3 url:string hash:int = messages.WebPage;\nmessages.toggleDialogPin#a731e257 flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;\nmessages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;\nmessages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;\nmessages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;\nmessages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;\nmessages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;\nmessages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.sendMultiMedia#c964709 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut = Updates;\nmessages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;\nmessages.markDialogUnread#c286d98f flags:# unread:flags.0?true peer:InputDialogPeer = Bool;\nmessages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;\nmessages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;\nmessages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;\nmessages.editChatAbout#def60797 peer:InputPeer about:string = Bool;\nmessages.editChatDefaultBannedRights#a5866b41 peer:InputPeer banned_rights:ChatBannedRights = Updates;\nmessages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;\nmessages.requestUrlAuth#198fb446 flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string = UrlAuthResult;\nmessages.acceptUrlAuth#b12c7125 flags:# write_allowed:flags.0?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string = UrlAuthResult;\nmessages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;\nmessages.getScheduledHistory#f516760b peer:InputPeer hash:long = messages.Messages;\nmessages.sendScheduledMessages#bd38850a peer:InputPeer id:Vector<int> = Updates;\nmessages.deleteScheduledMessages#59ae2b16 peer:InputPeer id:Vector<int> = Updates;\nmessages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;\nmessages.getDialogFilters#efd48c89 = messages.DialogFilters;\nmessages.getSuggestedDialogFilters#a29cd42c = Vector<DialogFilterSuggested>;\nmessages.updateDialogFilter#1ad4a04a flags:# id:int filter:flags.0?DialogFilter = Bool;\nmessages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;\nmessages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;\nmessages.readDiscussion#f731a9f4 peer:InputPeer msg_id:int read_max_id:int = Bool;\nmessages.unpinAllMessages#ee22b9a8 flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.deleteChat#5bd0ee50 chat_id:long = Bool;\nmessages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;\nmessages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;\nmessages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;\nmessages.deleteExportedChatInvite#d464a42b peer:InputPeer link:string = Bool;\nmessages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;\nmessages.getMessageReadParticipants#31c1c44f peer:InputPeer msg_id:int = Vector<ReadParticipantDate>;\nmessages.hideChatJoinRequest#7fe7e815 flags:# approved:flags.0?true peer:InputPeer user_id:InputUser = Updates;\nmessages.hideAllChatJoinRequests#e085f4ea flags:# approved:flags.0?true peer:InputPeer link:flags.1?string = Updates;\nmessages.toggleNoForwards#b11eafa2 peer:InputPeer enabled:Bool = Updates;\nmessages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;\nmessages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;\nmessages.getMessagesReactions#8bba90e6 peer:InputPeer id:Vector<int> = Updates;\nmessages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;\nmessages.setChatAvailableReactions#feb16771 peer:InputPeer available_reactions:ChatReactions = Updates;\nmessages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;\nmessages.setDefaultReaction#4f47a016 reaction:Reaction = Bool;\nmessages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;\nmessages.getUnreadReactions#3223495b flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;\nmessages.readReactions#54aa7f8e flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;\nmessages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;\nmessages.toggleBotInAttachMenu#69f59d69 flags:# write_allowed:flags.0?true bot:InputUser enabled:Bool = Bool;\nmessages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;\nmessages.prolongWebView#b0d81a83 flags:# silent:flags.5?true peer:InputPeer bot:InputUser query_id:long reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = Bool;\nmessages.requestSimpleWebView#1a46500a flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = SimpleWebViewResult;\nmessages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;\nmessages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;\nmessages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;\nmessages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;\nmessages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;\nmessages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;\nmessages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;\nmessages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;\nmessages.clearRecentReactions#9dfeefb4 = Bool;\nmessages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;\nmessages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;\nmessages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;\nmessages.requestAppWebView#8c5a3b3c flags:# write_allowed:flags.0?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = AppWebViewResult;\nmessages.getSavedDialogs#5381d21a flags:# exclude_pinned:flags.0?true offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;\nmessages.getSavedHistory#3d9a414d peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.deleteSavedHistory#6e98102b flags:# peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;\nmessages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;\nmessages.toggleSavedDialogPin#ac81bbde flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;\nmessages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;\nmessages.updateSavedReactionTag#60297dec flags:# reaction:Reaction title:flags.0?string = Bool;\nmessages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;\nmessages.getOutboxReadDate#8c4bfe5d peer:InputPeer msg_id:int = OutboxReadDate;\nmessages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;\nmessages.getQuickReplyMessages#94a495c3 flags:# shortcut_id:int id:flags.0?Vector<int> hash:long = messages.Messages;\nmessages.sendQuickReplyMessages#6c750de1 peer:InputPeer shortcut_id:int id:Vector<int> random_id:Vector<long> = Updates;\nupdates.getState#edd4882a = updates.State;\nupdates.getDifference#19c2f763 flags:# pts:int pts_limit:flags.1?int pts_total_limit:flags.0?int date:int qts:int qts_limit:flags.2?int = updates.Difference;\nupdates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;\nphotos.updateProfilePhoto#9e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;\nphotos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;\nphotos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;\nphotos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;\nphotos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;\nupload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;\nupload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;\nupload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;\nupload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;\nhelp.getConfig#c4f9186b = Config;\nhelp.getNearestDc#1fb33026 = NearestDc;\nhelp.getSupport#9cdf08cd = help.Support;\nhelp.acceptTermsOfService#ee72f79a id:DataJSON = Bool;\nhelp.getAppConfig#61e3f854 hash:int = help.AppConfig;\nhelp.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;\nhelp.getPremiumPromo#b81b93d4 = help.PremiumPromo;\nhelp.getPeerColors#da80f42f hash:int = help.PeerColors;\nhelp.getTimezonesList#49b30240 hash:int = help.TimezonesList;\nchannels.readHistory#cc104937 channel:InputChannel max_id:int = Bool;\nchannels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;\nchannels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;\nchannels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;\nchannels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;\nchannels.getChannels#a7f6bbb id:Vector<InputChannel> = messages.Chats;\nchannels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;\nchannels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;\nchannels.editAdmin#d33c8902 channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:string = Updates;\nchannels.editTitle#566decd0 channel:InputChannel title:string = Updates;\nchannels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;\nchannels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;\nchannels.updateUsername#3514b3de channel:InputChannel username:string = Bool;\nchannels.joinChannel#24b524c5 channel:InputChannel = Updates;\nchannels.leaveChannel#f836aa95 channel:InputChannel = Updates;\nchannels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;\nchannels.deleteChannel#c0111fe3 channel:InputChannel = Updates;\nchannels.exportMessageLink#e63fadeb flags:# grouped:flags.0?true thread:flags.1?true channel:InputChannel id:int = ExportedMessageLink;\nchannels.toggleSignatures#1f69b606 channel:InputChannel enabled:Bool = Updates;\nchannels.editBanned#96e6cd81 channel:InputChannel participant:InputPeer banned_rights:ChatBannedRights = Updates;\nchannels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;\nchannels.togglePreHistoryHidden#eabbb94c channel:InputChannel enabled:Bool = Updates;\nchannels.getGroupsForDiscussion#f5dad378 = messages.Chats;\nchannels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;\nchannels.viewSponsoredMessage#beaedb94 channel:InputChannel random_id:bytes = Bool;\nchannels.getSponsoredMessages#ec210fbf channel:InputChannel = messages.SponsoredMessages;\nchannels.getSendAs#dc770ee peer:InputPeer = channels.SendAsPeers;\nchannels.toggleJoinToSend#e4cb9580 channel:InputChannel enabled:Bool = Updates;\nchannels.toggleJoinRequest#4c2985b6 channel:InputChannel enabled:Bool = Updates;\nchannels.reorderUsernames#b45ced1d channel:InputChannel order:Vector<string> = Bool;\nchannels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;\nchannels.deactivateAllUsernames#a245dd3 channel:InputChannel = Bool;\nchannels.toggleForum#a4298b29 channel:InputChannel enabled:Bool = Updates;\nchannels.createForumTopic#f40c0224 flags:# channel:InputChannel title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;\nchannels.getForumTopics#de560d1 flags:# channel:InputChannel q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;\nchannels.getForumTopicsByID#b0831eb9 channel:InputChannel topics:Vector<int> = messages.ForumTopics;\nchannels.editForumTopic#f4dfa185 flags:# channel:InputChannel topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;\nchannels.updatePinnedForumTopic#6c2d9026 channel:InputChannel topic_id:int pinned:Bool = Updates;\nchannels.deleteTopicHistory#34435f2d channel:InputChannel top_msg_id:int = messages.AffectedHistory;\nchannels.toggleParticipantsHidden#6a6e7854 channel:InputChannel enabled:Bool = Updates;\nchannels.clickSponsoredMessage#18afbc93 channel:InputChannel random_id:bytes = Bool;\nchannels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;\nchannels.getChannelRecommendations#83b70d97 channel:InputChannel = messages.Chats;\nbots.setBotInfo#10cf3123 flags:# bot:flags.2?InputUser lang_code:string name:flags.3?string about:flags.0?string description:flags.1?string = Bool;\nbots.canSendMessage#1359f4e6 bot:InputUser = Bool;\nbots.allowSendMessage#f132e3ef bot:InputUser = Updates;\nbots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;\npayments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;\npayments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;\npayments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;\npayments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;\npayments.getSavedInfo#227d824b = payments.SavedInfo;\npayments.getPremiumGiftCodeOptions#2757ba54 flags:# boost_peer:flags.0?InputPeer = Vector<PremiumGiftCodeOption>;\npayments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;\npayments.applyGiftCode#f6e26854 slug:string = Updates;\npayments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;\npayments.launchPrepaidGiveaway#5ff58f20 peer:InputPeer giveaway_id:long purpose:InputStorePaymentPurpose = Updates;\nphone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;\nphone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;\nphone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;\nphone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;\nphone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;\nphone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;\nphone.joinGroupCall#b132ff7b flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string params:DataJSON = Updates;\nphone.leaveGroupCall#500377f9 call:InputGroupCall source:int = Updates;\nphone.discardGroupCall#7a777135 call:InputGroupCall = Updates;\nphone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;\nphone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;\nphone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;\nphone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;\nphone.toggleGroupCallStartSubscription#219c34e6 call:InputGroupCall subscribed:Bool = Updates;\nphone.joinGroupCallPresentation#cbea6bc4 call:InputGroupCall params:DataJSON = Updates;\nphone.leaveGroupCallPresentation#1c50d144 call:InputGroupCall = Updates;\nlangpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;\nlangpack.getStrings#efea3803 lang_pack:string lang_code:string keys:Vector<string> = Vector<LangPackString>;\nlangpack.getLanguages#42c6978f lang_pack:string = Vector<LangPackLanguage>;\nfolders.editPeerFolders#6847d0ab folder_peers:Vector<InputFolderPeer> = Updates;\nstats.getBroadcastStats#ab42441a flags:# dark:flags.0?true channel:InputChannel = stats.BroadcastStats;\nstats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;\nstats.getMegagroupStats#dcdf8607 flags:# dark:flags.0?true channel:InputChannel = stats.MegagroupStats;\nstats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;\nstats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;\nstats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;\nstats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;\nchatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;\nchatlists.deleteExportedInvite#719c5c5e chatlist:InputChatlist slug:string = Bool;\nchatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;\nchatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;\nchatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;\nchatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;\nchatlists.getLeaveChatlistSuggestions#fdbcd714 chatlist:InputChatlist = Vector<Peer>;\nchatlists.leaveChatlist#74fae13a chatlist:InputChatlist peers:Vector<InputPeer> = Updates;\nstories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;\nstories.deleteStories#ae59db5f peer:InputPeer id:Vector<int> = Vector<int>;\nstories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;\nstories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;\nstories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;\nstories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;\nstories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;\nstories.readStories#a556dac8 peer:InputPeer max_id:int = Vector<int>;\nstories.incrementStoryViews#b2028afb peer:InputPeer id:Vector<int> = Bool;\nstories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;\nstories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;\nstories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;\nstories.report#1923fa8c peer:InputPeer id:Vector<int> reason:ReportReason message:string = Bool;\nstories.activateStealthMode#57bbd166 flags:# past:flags.0?true future:flags.1?true = Updates;\nstories.sendReaction#7fd736b2 flags:# add_to_recent:flags.0?true peer:InputPeer story_id:int reaction:Reaction = Updates;\nstories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;\nstories.getPeerMaxIDs#535983c3 id:Vector<InputPeer> = Vector<int>;\nstories.togglePeerStoriesHidden#bd0415c4 peer:InputPeer hidden:Bool = Bool;\npremium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;\npremium.getMyBoosts#be77b4a = premium.MyBoosts;\npremium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;\npremium.getBoostsStatus#42f1f61 peer:InputPeer = premium.BoostsStatus;"
  }
  ,
  68963: (e,t,s)=>{
      var n = s(48764).lW;

      function a(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const {inflate: i} = s(35802)
        , {serializeBytes: r} = s(57404);
      class o {
          constructor(e) {
              this.data = e,
              this.CONSTRUCTOR_ID = 812830625,
              this.classType = "constructor"
          }
          static async gzipIfSmaller(e, t) {
              if (e && t.length > 512) {
                  const e = await new o(t).toBytes();
                  if (e.length < t.length)
                      return e
              }
              return t
          }
          static gzip(e) {
              return n.from(e)
          }
          static ungzip(e) {
              return n.from(i(e))
          }
          static read(e) {
              if (e.readInt(!1) !== o.CONSTRUCTOR_ID)
                  throw new Error("not equal");
              return o.gzip(e.tgReadBytes())
          }
          static async fromReader(e) {
              return new o(await o.ungzip(e.tgReadBytes()))
          }
          async toBytes() {
              const e = n.alloc(4);
              return e.writeUInt32LE(o.CONSTRUCTOR_ID, 0),
              n.concat([e, r(await o.gzip(this.data))])
          }
      }
      a(o, "CONSTRUCTOR_ID", 812830625),
      a(o, "classType", "constructor"),
      e.exports = o
  }
  ,
  63254: (e,t,s)=>{
      function n(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const a = s(40355);
      class i {
          constructor(e) {
              this.CONSTRUCTOR_ID = 1945237724,
              this.messages = e,
              this.classType = "constructor"
          }
          static fromReader(e) {
              const t = []
                , s = e.readInt();
              for (let n = 0; n < s; n++) {
                  const s = e.readLong()
                    , n = e.readInt()
                    , i = e.readInt()
                    , r = e.tellPosition()
                    , o = e.tgReadObject();
                  e.setPosition(r + i);
                  const l = new a(s,n,o);
                  t.push(l)
              }
              return new i(t)
          }
      }
      n(i, "CONSTRUCTOR_ID", 1945237724),
      n(i, "classType", "constructor"),
      n(i, "MAXIMUM_SIZE", 1044448),
      n(i, "MAXIMUM_LENGTH", 100),
      e.exports = i
  }
  ,
  52301: (e,t,s)=>{
      function n(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      const {RpcError: a} = s(57404).constructors
        , i = s(68963);
      class r {
          constructor(e, t, s) {
              this.CONSTRUCTOR_ID = 4082920705,
              this.reqMsgId = e,
              this.body = t,
              this.error = s,
              this.classType = "constructor"
          }
          static async fromReader(e) {
              const t = e.readLong()
                , s = e.readInt(!1);
              return s === a.CONSTRUCTOR_ID ? new r(t,void 0,a.fromReader(e)) : s === i.CONSTRUCTOR_ID ? new r(t,(await i.fromReader(e)).data) : (e.seek(-4),
              new r(t,e.read(),void 0))
          }
      }
      n(r, "CONSTRUCTOR_ID", 4082920705),
      n(r, "classType", "constructor"),
      e.exports = r
  }
  ,
  40355: e=>{
      function t(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      class s {
          constructor(e, t, s) {
              this.msgId = e,
              this.seqNo = t,
              this.obj = s,
              this.classType = "constructor"
          }
      }
      t(s, "SIZE_OVERHEAD", 12),
      t(s, "classType", "constructor"),
      e.exports = s
  }
  ,
  92058: (e,t,s)=>{
      const n = s(40355)
        , a = s(52301)
        , i = s(63254)
        , r = s(68963)
        , o = {
          [a.CONSTRUCTOR_ID]: a,
          [r.CONSTRUCTOR_ID]: r,
          [i.CONSTRUCTOR_ID]: i
      };
      e.exports = {
          TLMessage: n,
          RPCResult: a,
          MessageContainer: i,
          GZIPPacked: r,
          coreObjects: o
      }
  }
  ,
  51436: (e,t,s)=>{
      var n = s(48764).lW;
      const a = e=>e.replace(/(?:^|_)([a-z])/g, ((e,t)=>t.toUpperCase())).replace(/_/g, "")
        , i = e=>e.replace(/([-_][a-z])/g, (e=>e.toUpperCase().replace("-", "").replace("_", "")))
        , r = new Set([3162085175, 2574415285, 1072550713, 3300522427, 1450380236])
        , o = new Set([85337187, 2211011308, 2851430293, 1013613780, 1459478408, 3504867164, 3045658042, 1715713620, 3608339646, 4110704415, 812830625]);
      let l;

      function c(e) {
          l || (l = function() {
              let e;
              const t = [];
              for (let s = 0; s < 256; s++) {
                  e = s;
                  for (let t = 0; t < 8; t++)
                      e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                  t[s] = e
              }
              return t
          }()),
          n.isBuffer(e) || (e = n.from(e));
          let t = -1;
          for (let s = 0; s < e.length; s++) {
              const n = e[s];
              t = l[255 & (t ^ n)] ^ t >>> 8
          }
          return (-1 ^ t) >>> 0
      }
      const d = (e,t,s=[])=>{
          e.flags.includes("g") || (e = new RegExp(e.source,"g"));
          const n = e.exec(t);
          return n && (s.push(n.slice(1)),
          d(e, t, s)),
          s
      }
        , g = (e,t)=>{
          const s = e.match(/([\w.]+)(?:#([0-9a-fA-F]+))?(?:\s{?\w+:[\w\d<>#.?!]+}?)*\s=\s([\w\d<>#.?]+);$/);
          if (!s)
              throw new Error(`Cannot parse TLObject ${e}`);
          const r = d(/({)?(\w+):([\w\d<>#.?!]+)}?/, e)
            , o = {
              name: s[1],
              constructorId: parseInt(s[2], 16),
              argsConfig: {},
              subclassOfId: c(s[3]),
              result: s[3],
              isFunction: t,
              namespace: void 0
          };
          if (!o.constructorId) {
              const e = "";
              let t;
              t = Object.values(o.argsConfig).length ? ` ${Object.keys(o.argsConfig).map((e=>e.toString())).join(" ")}` : "";
              const s = `${o.name}${e}${t} = ${o.result}`.replace(/(:|\?)bytes /g, "$1string ").replace(/</g, " ").replace(/>|{|}/g, "").replace(/ \w+:flags\d*\.\d+\?true/g, "");
              "inputMediaInvoice" === o.name && o.name,
              o.constructorId = c(n.from(s, "utf8"))
          }
          for (const [e,t,s] of r)
              void 0 === e && (o.argsConfig[i(t)] = u(t, s));
          return o.name.includes(".") && ([o.namespace,o.name] = o.name.split(/\.(.+)/)),
          o.name = a(o.name),
          o
      }
      ;

      function u(e, t) {
          e = "self" === e ? "is_self" : e;
          const s = {
              isVector: !1,
              isFlag: !1,
              skipConstructorId: !1,
              flagGroup: 0,
              flagIndex: -1,
              flagIndicator: !0,
              type: void 0,
              useVectorId: void 0
          };
          if ("#" !== t) {
              s.flagIndicator = !1,
              s.type = t.replace(/^!+/, "");
              const e = s.type.match(/flags(\d*)\.(\d+)\?([\w<>.]+)/);
              e && (s.isFlag = !0,
              s.flagGroup = Number(e[1] || 1),
              s.flagIndex = Number(e[2]),
              [,,,s.type] = e);
              const n = s.type.match(/[Vv]ector<([\w\d.]+)>/);
              n && (s.isVector = !0,
              s.useVectorId = "V" === s.type.charAt(0),
              [,s.type] = n),
              /^[a-z]$/.test(s.type.split(".").pop().charAt(0)) && (s.skipConstructorId = !0)
          }
          return s
      }
      e.exports = {
          findAll: d,
          parseTl: function*(e, t=[], s=r) {
              (t || []).reduce(((e,t)=>({
                  ...e,
                  [t.name]: t
              })), {});
              const n = []
                , a = {}
                , i = {}
                , l = e;
              let c = !1;
              for (let e of l.split("\n")) {
                  const t = e.indexOf("//");
                  if (-1 !== t && (e = e.slice(0, t)),
                  e = e.trim(),
                  !e)
                      continue;
                  const r = e.match(/---(\w+)---/);
                  if (r) {
                      const [,e] = r;
                      c = "functions" === e
                  } else
                      try {
                          const t = g(e, c);
                          if (s.has(t.constructorId))
                              continue;
                          n.push(t),
                          t.isFunction || (i[t.result] || (i[t.result] = []),
                          a[t.name] = t,
                          i[t.result].push(t))
                      } catch (e) {
                          if (!e.toString().includes("vector#1cb5c415"))
                              throw e
                      }
              }
              for (const e of n)
                  if (o.has(e.constructorId))
                      for (const t in e.argsConfig)
                          "string" === e.argsConfig[t].type && (e.argsConfig[t].type = "bytes");
              for (const e of n)
                  yield e
          },
          buildArgConfig: u,
          fromLine: g,
          CORE_TYPES: r,
          serializeDate: function(e) {
              if (!e)
                  return n.alloc(4).fill(0);
              if (e instanceof Date && (e = Math.floor((Date.now() - e.getTime()) / 1e3)),
              "number" == typeof e) {
                  const t = n.alloc(4);
                  return t.writeInt32LE(e, 0),
                  t
              }
              throw Error(`Cannot interpret "${e}" as a date`)
          },
          serializeBytes: function(e) {
              if (!(e instanceof n)) {
                  if ("string" != typeof e)
                      throw Error(`Bytes or str expected, not ${e.constructor.name}`);
                  e = n.from(e)
              }
              const t = [];
              let s;
              return e.length < 254 ? (s = (e.length + 1) % 4,
              0 !== s && (s = 4 - s),
              t.push(n.from([e.length])),
              t.push(e)) : (s = e.length % 4,
              0 !== s && (s = 4 - s),
              t.push(n.from([254, e.length % 256, (e.length >> 8) % 256, (e.length >> 16) % 256])),
              t.push(e)),
              t.push(n.alloc(s).fill(0)),
              n.concat(t)
          },
          snakeToCamelCase: a,
          variableSnakeToCamelCase: i
      }
  }
  ,
  57404: (e,t,s)=>{
      const n = s(77150)
        , {serializeBytes: a, serializeDate: i} = s(51436);
      e.exports = {
          constructors: n,
          requests: n,
          serializeBytes: a,
          serializeDate: i
      }
  }
  ,
  48106: e=>{
      e.exports = "resPQ#05162463 nonce:int128 server_nonce:int128 pq:string server_public_key_fingerprints:Vector<long> = ResPQ;\np_q_inner_data#83c95aec pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 = P_Q_inner_data;\np_q_inner_data_dc#a9f55f95 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 dc:int = P_Q_inner_data;\np_q_inner_data_temp#3c6a84d4 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 expires_in:int = P_Q_inner_data;\np_q_inner_data_temp_dc#56fddf88 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 dc:int expires_in:int = P_Q_inner_data;\nserver_DH_params_fail#79cb045d nonce:int128 server_nonce:int128 new_nonce_hash:int128 = Server_DH_Params;\nserver_DH_params_ok#d0e8075c nonce:int128 server_nonce:int128 encrypted_answer:string = Server_DH_Params;\nserver_DH_inner_data#b5890dba nonce:int128 server_nonce:int128 g:int dh_prime:string g_a:string server_time:int = Server_DH_inner_data;\nclient_DH_inner_data#6643b654 nonce:int128 server_nonce:int128 retry_id:long g_b:string = Client_DH_Inner_Data;\ndh_gen_ok#3bcbf734 nonce:int128 server_nonce:int128 new_nonce_hash1:int128 = Set_client_DH_params_answer;\ndh_gen_retry#46dc1fb9 nonce:int128 server_nonce:int128 new_nonce_hash2:int128 = Set_client_DH_params_answer;\ndh_gen_fail#a69dae02 nonce:int128 server_nonce:int128 new_nonce_hash3:int128 = Set_client_DH_params_answer;\ndestroy_auth_key_ok#f660e1d4 = DestroyAuthKeyRes;\ndestroy_auth_key_none#0a9f2259 = DestroyAuthKeyRes;\ndestroy_auth_key_fail#ea109b13 = DestroyAuthKeyRes;\n---functions---\nreq_pq#60469778 nonce:int128 = ResPQ;\nreq_pq_multi#be7e8ef1 nonce:int128 = ResPQ;\nreq_pq_multi_new#51b410fd nonce:int128 = ResPQ;\nreq_DH_params#d712e4be nonce:int128 server_nonce:int128 p:string q:string public_key_fingerprint:long encrypted_data:string = Server_DH_Params;\nset_client_DH_params#f5045f1f nonce:int128 server_nonce:int128 encrypted_data:string = Set_client_DH_params_answer;\ndestroy_auth_key#d1435160 = DestroyAuthKeyRes;\n---types---\nmsgs_ack#62d6b459 msg_ids:Vector<long> = MsgsAck;\nbad_msg_notification#a7eff811 bad_msg_id:long bad_msg_seqno:int error_code:int = BadMsgNotification;\nbad_server_salt#edab447b bad_msg_id:long bad_msg_seqno:int error_code:int new_server_salt:long = BadMsgNotification;\nmsgs_state_req#da69fb52 msg_ids:Vector<long> = MsgsStateReq;\nmsgs_state_info#04deb57d req_msg_id:long info:string = MsgsStateInfo;\nmsgs_all_info#8cc0d131 msg_ids:Vector<long> info:string = MsgsAllInfo;\nmsg_detailed_info#276d3ec6 msg_id:long answer_msg_id:long bytes:int status:int = MsgDetailedInfo;\nmsg_new_detailed_info#809db6df answer_msg_id:long bytes:int status:int = MsgDetailedInfo;\nmsg_resend_req#7d861a08 msg_ids:Vector<long> = MsgResendReq;\nrpc_error#2144ca19 error_code:int error_message:string = RpcError;\nrpc_answer_unknown#5e2ad36e = RpcDropAnswer;\nrpc_answer_dropped_running#cd78e586 = RpcDropAnswer;\nrpc_answer_dropped#a43ad8b7 msg_id:long seq_no:int bytes:int = RpcDropAnswer;\nfuture_salt#0949d9dc valid_since:int valid_until:int salt:long = FutureSalt;\nfuture_salts#ae500895 req_msg_id:long now:int salts:vector<future_salt> = FutureSalts;\npong#347773c5 msg_id:long ping_id:long = Pong;\ndestroy_session_ok#e22045fc session_id:long = DestroySessionRes;\ndestroy_session_none#62d350c9 session_id:long = DestroySessionRes;\nnew_session_created#9ec20908 first_msg_id:long unique_id:long server_salt:long = NewSession;\nhttp_wait#9299359f max_delay:int wait_after:int max_wait:int = HttpWait;\nipPort#d433ad73 ipv4:int port:int = IpPort;\nipPortSecret#37982646 ipv4:int port:int secret:bytes = IpPort;\naccessPointRule#4679b65f phone_prefix_rules:string dc_id:int ips:vector<IpPort> = AccessPointRule;\nhelp.configSimple#5a592a6c date:int expires:int rules:vector<AccessPointRule> = help.ConfigSimple;\ntlsClientHello blocks:vector<TlsBlock> = TlsClientHello;\ntlsBlockString data:string = TlsBlock;\ntlsBlockRandom length:int = TlsBlock;\ntlsBlockZero length:int = TlsBlock;\ntlsBlockDomain = TlsBlock;\ntlsBlockGrease seed:int = TlsBlock;\ntlsBlockScope entries:Vector<TlsBlock> = TlsBlock;\n---functions---\nping#7abe77ec ping_id:long = Pong;\nping_delay_disconnect#f3427b8c ping_id:long disconnect_delay:int = Pong;"
  }
  ,
  16039: (e,t,s)=>{
      "use strict";
      s.d(t, {
          J: ()=>i
      });
      var n = s(46586);

      function a(e, t, s) {
          var n;
          return (t = "symbol" == typeof (n = function(e, t) {
              if ("object" != typeof e || !e)
                  return e;
              var s = e[Symbol.toPrimitive];
              if (void 0 !== s) {
                  var n = s.call(e, "string");
                  if ("object" != typeof n)
                      return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
          }(t)) ? n : String(n))in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = s,
          e
      }
      class i {
          constructor(e) {
              this.maxWorkers = e,
              a(this, "deferreds", []),
              a(this, "activeWorkers", 0)
          }
          requestWorker() {
              if (this.activeWorkers === this.maxWorkers) {
                  const e = new n.Z;
                  return this.deferreds.push(e),
                  e.promise
              }
              return this.activeWorkers++,
              Promise.resolve()
          }
          releaseWorker() {
              this.deferreds.length && this.activeWorkers === this.maxWorkers ? this.deferreds.shift().resolve() : this.activeWorkers--
          }
      }
  }
}]);
//# sourceMappingURL=1637.e463186e635b4034b5ba.js.map
