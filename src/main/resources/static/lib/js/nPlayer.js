"undefined" != typeof window && function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.nPlayer = t() : e.nPlayer = t()
}(this, function() {
    return function(e) {
        var t = {};
        function r(i) {
            if (t[i])
                return t[i].exports;
            var a = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, r),
            a.l = !0,
            a.exports
        }
        return r.m = e,
        r.c = t,
        r.d = function(e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(e, t) {
            if (1 & t && (e = r(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (r.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var a in e)
                    r.d(i, a, function(t) {
                        return e[t]
                    }
                    .bind(null, a));
            return i
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "/dist/",
        r(r.s = 13)
    }([function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return d
        }),
        r.d(t, "b", function() {
            return u
        });
        var i = r(5);
        function a() {}
        var n = {
            trace: a,
            debug: a,
            log: a,
            warn: a,
            info: a,
            error: a
        }
          , s = n;
        var o = Object(i.a)();
        function l(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                r[i - 1] = arguments[i];
            r.forEach(function(t) {
                s[t] = e[t] ? e[t].bind(e) : function(e) {
                    var t = o.console[e];
                    return t ? function() {
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                            i[a] = arguments[a];
                        i[0] && (i[0] = function(e, t) {
                            return t = "[" + e + "] > " + t
                        }(e, i[0])),
                        t.apply(o.console, i)
                    }
                    : a
                }(t)
            })
        }
        var d = function(e) {
            if (o.console && !0 === e || "object" == typeof e) {
                l(e, "debug", "log", "info", "warn", "error");
                try {
                    s.log()
                } catch (e) {
                    s = n
                }
            } else
                s = n
        }
          , u = s
    }
    , function(e, t, r) {
        "use strict";
        t.a = {
            MEDIA_ATTACHING: "hlsMediaAttaching",
            MEDIA_ATTACHED: "hlsMediaAttached",
            MEDIA_DETACHING: "hlsMediaDetaching",
            MEDIA_DETACHED: "hlsMediaDetached",
            BUFFER_RESET: "hlsBufferReset",
            BUFFER_CODECS: "hlsBufferCodecs",
            BUFFER_CREATED: "hlsBufferCreated",
            BUFFER_APPENDING: "hlsBufferAppending",
            BUFFER_APPENDED: "hlsBufferAppended",
            BUFFER_EOS: "hlsBufferEos",
            BUFFER_FLUSHING: "hlsBufferFlushing",
            BUFFER_FLUSHED: "hlsBufferFlushed",
            MANIFEST_LOADING: "hlsManifestLoading",
            MANIFEST_LOADED: "hlsManifestLoaded",
            MANIFEST_PARSED: "hlsManifestParsed",
            LEVEL_SWITCHING: "hlsLevelSwitching",
            LEVEL_SWITCHED: "hlsLevelSwitched",
            LEVEL_LOADING: "hlsLevelLoading",
            LEVEL_LOADED: "hlsLevelLoaded",
            LEVEL_UPDATED: "hlsLevelUpdated",
            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
            AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
            AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
            SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
            SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
            SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
            SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
            SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
            INIT_PTS_FOUND: "hlsInitPtsFound",
            FRAG_LOADING: "hlsFragLoading",
            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
            FRAG_LOADED: "hlsFragLoaded",
            FRAG_DECRYPTED: "hlsFragDecrypted",
            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
            FRAG_PARSING_DATA: "hlsFragParsingData",
            FRAG_PARSED: "hlsFragParsed",
            FRAG_BUFFERED: "hlsFragBuffered",
            FRAG_CHANGED: "hlsFragChanged",
            FPS_DROP: "hlsFpsDrop",
            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
            ERROR: "hlsError",
            DESTROYING: "hlsDestroying",
            KEY_LOADING: "hlsKeyLoading",
            KEY_LOADED: "hlsKeyLoaded",
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
            LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
        }
    }
    , function(e, t, r) {
        "use strict";
        var i, a;
        r.d(t, "b", function() {
            return i
        }),
        r.d(t, "a", function() {
            return a
        }),
        function(e) {
            e.NETWORK_ERROR = "networkError",
            e.MEDIA_ERROR = "mediaError",
            e.KEY_SYSTEM_ERROR = "keySystemError",
            e.MUX_ERROR = "muxError",
            e.OTHER_ERROR = "otherError"
        }(i || (i = {})),
        function(e) {
            e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
            e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
            e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
            e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
            e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
            e.MANIFEST_LOAD_ERROR = "manifestLoadError",
            e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
            e.MANIFEST_PARSING_ERROR = "manifestParsingError",
            e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
            e.LEVEL_LOAD_ERROR = "levelLoadError",
            e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
            e.LEVEL_SWITCH_ERROR = "levelSwitchError",
            e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
            e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
            e.FRAG_LOAD_ERROR = "fragLoadError",
            e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
            e.FRAG_DECRYPT_ERROR = "fragDecryptError",
            e.FRAG_PARSING_ERROR = "fragParsingError",
            e.REMUX_ALLOC_ERROR = "remuxAllocError",
            e.KEY_LOAD_ERROR = "keyLoadError",
            e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
            e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
            e.BUFFER_APPEND_ERROR = "bufferAppendError",
            e.BUFFER_APPENDING_ERROR = "bufferAppendingError",
            e.BUFFER_STALLED_ERROR = "bufferStalledError",
            e.BUFFER_FULL_ERROR = "bufferFullError",
            e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
            e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
            e.INTERNAL_EXCEPTION = "internalException"
        }(a || (a = {}))
    }
    , function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i = Number.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }
    }
    , function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return o
        });
        var i, a = r(5), n = function() {
            function e() {}
            return e.isHeader = function(e, t) {
                return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            }
            ,
            e.isFooter = function(e, t) {
                return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            }
            ,
            e.getID3Data = function(t, r) {
                for (var i = r, a = 0; e.isHeader(t, r); ) {
                    a += 10,
                    a += e._readSize(t, r + 6),
                    e.isFooter(t, r + 10) && (a += 10),
                    r += a
                }
                if (a > 0)
                    return t.subarray(i, i + a)
            }
            ,
            e._readSize = function(e, t) {
                var r = 0;
                return r = (127 & e[t]) << 21,
                r |= (127 & e[t + 1]) << 14,
                r |= (127 & e[t + 2]) << 7,
                r |= 127 & e[t + 3]
            }
            ,
            e.getTimeStamp = function(t) {
                for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (e.isTimeStampFrame(a))
                        return e._readTimeStamp(a)
                }
            }
            ,
            e.isTimeStampFrame = function(e) {
                return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
            }
            ,
            e._getFrameData = function(t) {
                var r = String.fromCharCode(t[0], t[1], t[2], t[3])
                  , i = e._readSize(t, 4);
                return {
                    type: r,
                    size: i,
                    data: t.subarray(10, 10 + i)
                }
            }
            ,
            e.getID3Frames = function(t) {
                for (var r = 0, i = []; e.isHeader(t, r); ) {
                    for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n; ) {
                        var s = e._getFrameData(t.subarray(r))
                          , o = e._decodeFrame(s);
                        o && i.push(o),
                        r += s.size + 10
                    }
                    e.isFooter(t, r) && (r += 10)
                }
                return i
            }
            ,
            e._decodeFrame = function(t) {
                return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
            }
            ,
            e._readTimeStamp = function(e) {
                if (8 === e.data.byteLength) {
                    var t = new Uint8Array(e.data)
                      , r = 1 & t[3]
                      , i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                    return i /= 45,
                    r && (i += 47721858.84),
                    Math.round(i)
                }
            }
            ,
            e._decodePrivFrame = function(t) {
                if (!(t.size < 2)) {
                    var r = e._utf8ArrayToStr(t.data, !0)
                      , i = new Uint8Array(t.data.subarray(r.length + 1));
                    return {
                        key: t.type,
                        info: r,
                        data: i.buffer
                    }
                }
            }
            ,
            e._decodeTextFrame = function(t) {
                if (!(t.size < 2)) {
                    if ("TXXX" === t.type) {
                        var r = 1
                          , i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                        r += i.length + 1;
                        var a = e._utf8ArrayToStr(t.data.subarray(r));
                        return {
                            key: t.type,
                            info: i,
                            data: a
                        }
                    }
                    var n = e._utf8ArrayToStr(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: n
                    }
                }
            }
            ,
            e._decodeURLFrame = function(t) {
                if ("WXXX" === t.type) {
                    if (t.size < 2)
                        return;
                    var r = 1
                      , i = e._utf8ArrayToStr(t.data.subarray(r));
                    r += i.length + 1;
                    var a = e._utf8ArrayToStr(t.data.subarray(r));
                    return {
                        key: t.type,
                        info: i,
                        data: a
                    }
                }
                var n = e._utf8ArrayToStr(t.data);
                return {
                    key: t.type,
                    data: n
                }
            }
            ,
            e._utf8ArrayToStr = function(e, t) {
                void 0 === t && (t = !1);
                var r = s();
                if (r) {
                    var i = r.decode(e);
                    if (t) {
                        var a = i.indexOf("\0");
                        return -1 !== a ? i.substring(0, a) : i
                    }
                    return i.replace(/\0/g, "")
                }
                for (var n, o, l, d = e.length, u = "", c = 0; c < d; ) {
                    if (0 === (n = e[c++]) && t)
                        return u;
                    if (0 !== n && 3 !== n)
                        switch (n >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            u += String.fromCharCode(n);
                            break;
                        case 12:
                        case 13:
                            o = e[c++],
                            u += String.fromCharCode((31 & n) << 6 | 63 & o);
                            break;
                        case 14:
                            o = e[c++],
                            l = e[c++],
                            u += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & l) << 0)
                        }
                }
                return u
            }
            ,
            e
        }();
        function s() {
            var e = Object(a.a)();
            return i || void 0 === e.TextDecoder || (i = new e.TextDecoder("utf-8")),
            i
        }
        var o = n._utf8ArrayToStr;
        t.a = n
    }
    , function(e, t, r) {
        "use strict";
        function i() {
            return "undefined" == typeof window ? self : window
        }
        r.d(t, "a", function() {
            return i
        })
    }
    , function(e, t, r) {
        var i, a, n, s, o;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
        a = /^([^\/?#]*)(.*)$/,
        n = /(?:\/|^)\.(?=\/)/g,
        s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
        o = {
            buildAbsoluteURL: function(e, t, r) {
                if (r = r || {},
                e = e.trim(),
                !(t = t.trim())) {
                    if (!r.alwaysNormalize)
                        return e;
                    var i = o.parseURL(e);
                    if (!i)
                        throw new Error("Error trying to parse base URL.");
                    return i.path = o.normalizePath(i.path),
                    o.buildURLFromParts(i)
                }
                var n = o.parseURL(t);
                if (!n)
                    throw new Error("Error trying to parse relative URL.");
                if (n.scheme)
                    return r.alwaysNormalize ? (n.path = o.normalizePath(n.path),
                    o.buildURLFromParts(n)) : t;
                var s = o.parseURL(e);
                if (!s)
                    throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var l = a.exec(s.path);
                    s.netLoc = l[1],
                    s.path = l[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var d = {
                    scheme: s.scheme,
                    netLoc: n.netLoc,
                    path: null,
                    params: n.params,
                    query: n.query,
                    fragment: n.fragment
                };
                if (!n.netLoc && (d.netLoc = s.netLoc,
                "/" !== n.path[0]))
                    if (n.path) {
                        var u = s.path
                          , c = u.substring(0, u.lastIndexOf("/") + 1) + n.path;
                        d.path = o.normalizePath(c)
                    } else
                        d.path = s.path,
                        n.params || (d.params = s.params,
                        n.query || (d.query = s.query));
                return null === d.path && (d.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path),
                o.buildURLFromParts(d)
            },
            parseURL: function(e) {
                var t = i.exec(e);
                return t ? {
                    scheme: t[1] || "",
                    netLoc: t[2] || "",
                    path: t[3] || "",
                    params: t[4] || "",
                    query: t[5] || "",
                    fragment: t[6] || ""
                } : null
            },
            normalizePath: function(e) {
                for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(s, "")).length; )
                    ;
                return e.split("").reverse().join("")
            },
            buildURLFromParts: function(e) {
                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            }
        },
        e.exports = o
    }
    , function(e, t, r) {
        "use strict";
        var i = function() {
            function e(e, t) {
                this.subtle = e,
                this.aesIV = t
            }
            return e.prototype.decrypt = function(e, t) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                }, t, e)
            }
            ,
            e
        }()
          , a = function() {
            function e(e, t) {
                this.subtle = e,
                this.key = t
            }
            return e.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"])
            }
            ,
            e
        }();
        var n = function() {
            function e() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.sBox = new Uint32Array(256),
                this.invSBox = new Uint32Array(256),
                this.key = new Uint32Array(0),
                this.initTable()
            }
            var t = e.prototype;
            return t.uint8ArrayToUint32Array_ = function(e) {
                for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++)
                    r[i] = t.getUint32(4 * i);
                return r
            }
            ,
            t.initTable = function() {
                var e = this.sBox
                  , t = this.invSBox
                  , r = this.subMix
                  , i = r[0]
                  , a = r[1]
                  , n = r[2]
                  , s = r[3]
                  , o = this.invSubMix
                  , l = o[0]
                  , d = o[1]
                  , u = o[2]
                  , c = o[3]
                  , h = new Uint32Array(256)
                  , f = 0
                  , g = 0
                  , p = 0;
                for (p = 0; p < 256; p++)
                    h[p] = p < 128 ? p << 1 : p << 1 ^ 283;
                for (p = 0; p < 256; p++) {
                    var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                    v = v >>> 8 ^ 255 & v ^ 99,
                    e[f] = v,
                    t[v] = f;
                    var m = h[f]
                      , y = h[m]
                      , b = h[y]
                      , E = 257 * h[v] ^ 16843008 * v;
                    i[f] = E << 24 | E >>> 8,
                    a[f] = E << 16 | E >>> 16,
                    n[f] = E << 8 | E >>> 24,
                    s[f] = E,
                    E = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * f,
                    l[v] = E << 24 | E >>> 8,
                    d[v] = E << 16 | E >>> 16,
                    u[v] = E << 8 | E >>> 24,
                    c[v] = E,
                    f ? (f = m ^ h[h[h[b ^ m]]],
                    g ^= h[h[g]]) : f = g = 1
                }
            }
            ,
            t.expandKey = function(e) {
                for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r; )
                    r = t[i] === this.key[i],
                    i++;
                if (!r) {
                    this.key = t;
                    var a = this.keySize = t.length;
                    if (4 !== a && 6 !== a && 8 !== a)
                        throw new Error("Invalid aes key size=" + a);
                    var n, s, o, l, d = this.ksRows = 4 * (a + 6 + 1), u = this.keySchedule = new Uint32Array(d), c = this.invKeySchedule = new Uint32Array(d), h = this.sBox, f = this.rcon, g = this.invSubMix, p = g[0], v = g[1], m = g[2], y = g[3];
                    for (n = 0; n < d; n++)
                        n < a ? o = u[n] = t[n] : (l = o,
                        n % a == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l],
                        l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]),
                        u[n] = o = (u[n - a] ^ l) >>> 0);
                    for (s = 0; s < d; s++)
                        n = d - s,
                        l = 3 & s ? u[n] : u[n - 4],
                        c[s] = s < 4 || n <= 4 ? l : p[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]],
                        c[s] = c[s] >>> 0
                }
            }
            ,
            t.networkToHostOrderSwap = function(e) {
                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
            }
            ,
            t.decrypt = function(e, t, r, i) {
                for (var a, n, s, o, l, d, u, c, h, f, g, p, v, m, y, b, E, T = this.keySize + 6, S = this.invKeySchedule, _ = this.invSBox, A = this.invSubMix, R = A[0], L = A[1], D = A[2], w = A[3], k = this.uint8ArrayToUint32Array_(r), I = k[0], O = k[1], C = k[2], P = k[3], x = new Int32Array(e), F = new Int32Array(x.length), M = this.networkToHostOrderSwap; t < x.length; ) {
                    for (h = M(x[t]),
                    f = M(x[t + 1]),
                    g = M(x[t + 2]),
                    p = M(x[t + 3]),
                    l = h ^ S[0],
                    d = p ^ S[1],
                    u = g ^ S[2],
                    c = f ^ S[3],
                    v = 4,
                    m = 1; m < T; m++)
                        a = R[l >>> 24] ^ L[d >> 16 & 255] ^ D[u >> 8 & 255] ^ w[255 & c] ^ S[v],
                        n = R[d >>> 24] ^ L[u >> 16 & 255] ^ D[c >> 8 & 255] ^ w[255 & l] ^ S[v + 1],
                        s = R[u >>> 24] ^ L[c >> 16 & 255] ^ D[l >> 8 & 255] ^ w[255 & d] ^ S[v + 2],
                        o = R[c >>> 24] ^ L[l >> 16 & 255] ^ D[d >> 8 & 255] ^ w[255 & u] ^ S[v + 3],
                        l = a,
                        d = n,
                        u = s,
                        c = o,
                        v += 4;
                    a = _[l >>> 24] << 24 ^ _[d >> 16 & 255] << 16 ^ _[u >> 8 & 255] << 8 ^ _[255 & c] ^ S[v],
                    n = _[d >>> 24] << 24 ^ _[u >> 16 & 255] << 16 ^ _[c >> 8 & 255] << 8 ^ _[255 & l] ^ S[v + 1],
                    s = _[u >>> 24] << 24 ^ _[c >> 16 & 255] << 16 ^ _[l >> 8 & 255] << 8 ^ _[255 & d] ^ S[v + 2],
                    o = _[c >>> 24] << 24 ^ _[l >> 16 & 255] << 16 ^ _[d >> 8 & 255] << 8 ^ _[255 & u] ^ S[v + 3],
                    v += 3,
                    F[t] = M(a ^ I),
                    F[t + 1] = M(o ^ O),
                    F[t + 2] = M(s ^ C),
                    F[t + 3] = M(n ^ P),
                    I = h,
                    O = f,
                    C = g,
                    P = p,
                    t += 4
                }
                return i ? (y = F.buffer,
                b = y.byteLength,
                (E = b && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - E) : y) : F.buffer
            }
            ,
            t.destroy = function() {
                this.key = void 0,
                this.keySize = void 0,
                this.ksRows = void 0,
                this.sBox = void 0,
                this.invSBox = void 0,
                this.subMix = void 0,
                this.invSubMix = void 0,
                this.keySchedule = void 0,
                this.invKeySchedule = void 0,
                this.rcon = void 0
            }
            ,
            e
        }()
          , s = r(2)
          , o = r(0)
          , l = r(1)
          , d = r(5)
          , u = Object(d.a)()
          , c = function() {
            function e(e, t, r) {
                var i = (void 0 === r ? {} : r).removePKCS7Padding
                  , a = void 0 === i || i;
                if (this.logEnabled = !0,
                this.observer = e,
                this.config = t,
                this.removePKCS7Padding = a,
                a)
                    try {
                        var n = u.crypto;
                        n && (this.subtle = n.subtle || n.webkitSubtle)
                    } catch (e) {}
                this.disableWebCrypto = !this.subtle
            }
            var t = e.prototype;
            return t.isSync = function() {
                return this.disableWebCrypto && this.config.enableSoftwareAES
            }
            ,
            t.decrypt = function(e, t, r, s) {
                var l = this;
                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                    this.logEnabled && (o.b.log("JS AES decrypt"),
                    this.logEnabled = !1);
                    var d = this.decryptor;
                    d || (this.decryptor = d = new n),
                    d.expandKey(t),
                    s(d.decrypt(e, 0, r, this.removePKCS7Padding))
                } else {
                    this.logEnabled && (o.b.log("WebCrypto AES decrypt"),
                    this.logEnabled = !1);
                    var u = this.subtle;
                    this.key !== t && (this.key = t,
                    this.fastAesKey = new a(u,t)),
                    this.fastAesKey.expandKey().then(function(a) {
                        new i(u,r).decrypt(e, a).catch(function(i) {
                            l.onWebCryptoError(i, e, t, r, s)
                        }).then(function(e) {
                            s(e)
                        })
                    }).catch(function(i) {
                        l.onWebCryptoError(i, e, t, r, s)
                    })
                }
            }
            ,
            t.onWebCryptoError = function(e, t, r, i, a) {
                this.config.enableSoftwareAES ? (o.b.log("WebCrypto Error, disable WebCrypto API"),
                this.disableWebCrypto = !0,
                this.logEnabled = !0,
                this.decrypt(t, r, i, a)) : (o.b.error("decrypting error : " + e.message),
                this.observer.trigger(l.a.ERROR, {
                    type: s.b.MEDIA_ERROR,
                    details: s.a.FRAG_DECRYPT_ERROR,
                    fatal: !0,
                    reason: e.message
                }))
            }
            ,
            t.destroy = function() {
                var e = this.decryptor;
                e && (e.destroy(),
                this.decryptor = void 0)
            }
            ,
            e
        }();
        t.a = c
    }
    , function(e, t, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty
          , a = "~";
        function n() {}
        function s(e, t, r) {
            this.fn = e,
            this.context = t,
            this.once = r || !1
        }
        function o(e, t, r, i, n) {
            if ("function" != typeof r)
                throw new TypeError("The listener must be a function");
            var o = new s(r,i || e,n)
              , l = a ? a + t : t;
            return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o,
            e._eventsCount++),
            e
        }
        function l(e, t) {
            0 == --e._eventsCount ? e._events = new n : delete e._events[t]
        }
        function d() {
            this._events = new n,
            this._eventsCount = 0
        }
        Object.create && (n.prototype = Object.create(null),
        (new n).__proto__ || (a = !1)),
        d.prototype.eventNames = function() {
            var e, t, r = [];
            if (0 === this._eventsCount)
                return r;
            for (t in e = this._events)
                i.call(e, t) && r.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        }
        ,
        d.prototype.listeners = function(e) {
            var t = a ? a + e : e
              , r = this._events[t];
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var i = 0, n = r.length, s = new Array(n); i < n; i++)
                s[i] = r[i].fn;
            return s
        }
        ,
        d.prototype.listenerCount = function(e) {
            var t = a ? a + e : e
              , r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }
        ,
        d.prototype.emit = function(e, t, r, i, n, s) {
            var o = a ? a + e : e;
            if (!this._events[o])
                return !1;
            var l, d, u = this._events[o], c = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0),
                c) {
                case 1:
                    return u.fn.call(u.context),
                    !0;
                case 2:
                    return u.fn.call(u.context, t),
                    !0;
                case 3:
                    return u.fn.call(u.context, t, r),
                    !0;
                case 4:
                    return u.fn.call(u.context, t, r, i),
                    !0;
                case 5:
                    return u.fn.call(u.context, t, r, i, n),
                    !0;
                case 6:
                    return u.fn.call(u.context, t, r, i, n, s),
                    !0
                }
                for (d = 1,
                l = new Array(c - 1); d < c; d++)
                    l[d - 1] = arguments[d];
                u.fn.apply(u.context, l)
            } else {
                var h, f = u.length;
                for (d = 0; d < f; d++)
                    switch (u[d].once && this.removeListener(e, u[d].fn, void 0, !0),
                    c) {
                    case 1:
                        u[d].fn.call(u[d].context);
                        break;
                    case 2:
                        u[d].fn.call(u[d].context, t);
                        break;
                    case 3:
                        u[d].fn.call(u[d].context, t, r);
                        break;
                    case 4:
                        u[d].fn.call(u[d].context, t, r, i);
                        break;
                    default:
                        if (!l)
                            for (h = 1,
                            l = new Array(c - 1); h < c; h++)
                                l[h - 1] = arguments[h];
                        u[d].fn.apply(u[d].context, l)
                    }
            }
            return !0
        }
        ,
        d.prototype.on = function(e, t, r) {
            return o(this, e, t, r, !1)
        }
        ,
        d.prototype.once = function(e, t, r) {
            return o(this, e, t, r, !0)
        }
        ,
        d.prototype.removeListener = function(e, t, r, i) {
            var n = a ? a + e : e;
            if (!this._events[n])
                return this;
            if (!t)
                return l(this, n),
                this;
            var s = this._events[n];
            if (s.fn)
                s.fn !== t || i && !s.once || r && s.context !== r || l(this, n);
            else {
                for (var o = 0, d = [], u = s.length; o < u; o++)
                    (s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && d.push(s[o]);
                d.length ? this._events[n] = 1 === d.length ? d[0] : d : l(this, n)
            }
            return this
        }
        ,
        d.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e : e,
            this._events[t] && l(this, t)) : (this._events = new n,
            this._eventsCount = 0),
            this
        }
        ,
        d.prototype.off = d.prototype.removeListener,
        d.prototype.addListener = d.prototype.on,
        d.prefixed = a,
        d.EventEmitter = d,
        e.exports = d
    }
    , function(e, t, r) {
        "use strict";
        var i = r(1)
          , a = r(2)
          , n = r(7)
          , s = r(3)
          , o = r(0)
          , l = r(5);
        function d(e, t) {
            return 255 === e[t] && 240 == (246 & e[t + 1])
        }
        function u(e, t) {
            return 1 & e[t + 1] ? 7 : 9
        }
        function c(e, t) {
            return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
        }
        function h(e, t) {
            return !!(t + 1 < e.length && d(e, t))
        }
        function f(e, t) {
            if (h(e, t)) {
                var r = u(e, t);
                t + 5 < e.length && (r = c(e, t));
                var i = t + r;
                if (i === e.length || i + 1 < e.length && d(e, i))
                    return !0
            }
            return !1
        }
        function g(e, t, r, n, s) {
            if (!e.samplerate) {
                var l = function(e, t, r, n) {
                    var s, l, d, u, c, h = navigator.userAgent.toLowerCase(), f = n, g = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    if (s = 1 + ((192 & t[r + 2]) >>> 6),
                    !((l = (60 & t[r + 2]) >>> 2) > g.length - 1))
                        return u = (1 & t[r + 2]) << 2,
                        u |= (192 & t[r + 3]) >>> 6,
                        o.b.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + g[l] + "Hz],channelConfig:" + u),
                        /firefox/i.test(h) ? l >= 6 ? (s = 5,
                        c = new Array(4),
                        d = l - 3) : (s = 2,
                        c = new Array(2),
                        d = l) : -1 !== h.indexOf("android") ? (s = 2,
                        c = new Array(2),
                        d = l) : (s = 5,
                        c = new Array(4),
                        n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && l >= 6 ? d = l - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (l >= 6 && 1 === u || /vivaldi/i.test(h)) || !n && 1 === u) && (s = 2,
                        c = new Array(2)),
                        d = l)),
                        c[0] = s << 3,
                        c[0] |= (14 & l) >> 1,
                        c[1] |= (1 & l) << 7,
                        c[1] |= u << 3,
                        5 === s && (c[1] |= (14 & d) >> 1,
                        c[2] = (1 & d) << 7,
                        c[2] |= 8,
                        c[3] = 0),
                        {
                            config: c,
                            samplerate: g[l],
                            channelCount: u,
                            codec: "mp4a.40." + s,
                            manifestCodec: f
                        };
                    e.trigger(i.a.ERROR, {
                        type: a.b.MEDIA_ERROR,
                        details: a.a.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + l
                    })
                }(t, r, n, s);
                e.config = l.config,
                e.samplerate = l.samplerate,
                e.channelCount = l.channelCount,
                e.codec = l.codec,
                e.manifestCodec = l.manifestCodec,
                o.b.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
            }
        }
        function p(e) {
            return 9216e4 / e
        }
        function v(e, t, r, i, a) {
            var n = function(e, t, r, i, a) {
                var n, s, o = e.length;
                if (n = u(e, t),
                s = c(e, t),
                (s -= n) > 0 && t + n + s <= o)
                    return {
                        headerLength: n,
                        frameLength: s,
                        stamp: r + i * a
                    }
            }(t, r, i, a, p(e.samplerate));
            if (n) {
                var s = n.stamp
                  , o = n.headerLength
                  , l = n.frameLength
                  , d = {
                    unit: t.subarray(r + o, r + o + l),
                    pts: s,
                    dts: s
                };
                return e.samples.push(d),
                {
                    sample: d,
                    length: l + o
                }
            }
        }
        var m = r(4)
          , y = function() {
            function e(e, t, r) {
                this.observer = e,
                this.config = r,
                this.remuxer = t
            }
            var t = e.prototype;
            return t.resetInitSegment = function(e, t, r, i) {
                this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 0,
                    sequenceNumber: 0,
                    isAAC: !0,
                    samples: [],
                    len: 0,
                    manifestCodec: t,
                    duration: i,
                    inputTimeScale: 9e4
                }
            }
            ,
            t.resetTimeStamp = function() {}
            ,
            e.probe = function(e) {
                if (!e)
                    return !1;
                for (var t = (m.a.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
                    if (f(e, t))
                        return o.b.log("ADTS sync word found !"),
                        !0;
                return !1
            }
            ,
            t.append = function(e, t, r, i) {
                for (var a = this._audioTrack, n = m.a.getID3Data(e, 0) || [], l = m.a.getTimeStamp(n), d = Object(s.a)(l) ? 90 * l : 9e4 * t, u = 0, c = d, f = e.length, p = n.length, y = [{
                    pts: c,
                    dts: c,
                    data: n
                }]; p < f - 1; )
                    if (h(e, p) && p + 5 < f) {
                        g(a, this.observer, e, p, a.manifestCodec);
                        var b = v(a, e, p, d, u);
                        if (!b) {
                            o.b.log("Unable to parse AAC frame");
                            break
                        }
                        p += b.length,
                        c = b.sample.pts,
                        u++
                    } else
                        m.a.isHeader(e, p) ? (n = m.a.getID3Data(e, p),
                        y.push({
                            pts: c,
                            dts: c,
                            data: n
                        }),
                        p += n.length) : p++;
                this.remuxer.remux(a, {
                    samples: []
                }, {
                    samples: y,
                    inputTimeScale: 9e4
                }, {
                    samples: []
                }, t, r, i)
            }
            ,
            t.destroy = function() {}
            ,
            e
        }()
          , b = r(10)
          , E = {
            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
            BytesInSlot: [0, 1, 1, 4],
            appendFrame: function(e, t, r, i, a) {
                if (!(r + 24 > t.length)) {
                    var n = this.parseHeader(t, r);
                    if (n && r + n.frameLength <= t.length) {
                        var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate)
                          , o = {
                            unit: t.subarray(r, r + n.frameLength),
                            pts: s,
                            dts: s
                        };
                        return e.config = [],
                        e.channelCount = n.channelCount,
                        e.samplerate = n.sampleRate,
                        e.samples.push(o),
                        {
                            sample: o,
                            length: n.frameLength
                        }
                    }
                }
            },
            parseHeader: function(e, t) {
                var r = e[t + 1] >> 3 & 3
                  , i = e[t + 1] >> 1 & 3
                  , a = e[t + 2] >> 4 & 15
                  , n = e[t + 2] >> 2 & 3
                  , s = e[t + 2] >> 1 & 1;
                if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
                    var o = 3 === r ? 3 - i : 3 === i ? 3 : 4
                      , l = 1e3 * E.BitratesMap[14 * o + a - 1]
                      , d = 3 === r ? 0 : 2 === r ? 1 : 2
                      , u = E.SamplingRateMap[3 * d + n]
                      , c = e[t + 3] >> 6 == 3 ? 1 : 2
                      , h = E.SamplesCoefficients[r][i]
                      , f = E.BytesInSlot[i]
                      , g = 8 * h * f;
                    return {
                        sampleRate: u,
                        channelCount: c,
                        frameLength: parseInt(h * l / u + s, 10) * f,
                        samplesPerFrame: g
                    }
                }
            },
            isHeaderPattern: function(e, t) {
                return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
            },
            isHeader: function(e, t) {
                return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
            },
            probe: function(e, t) {
                if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                    var r = this.parseHeader(e, t)
                      , i = 4;
                    r && r.frameLength && (i = r.frameLength);
                    var a = t + i;
                    if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a))
                        return !0
                }
                return !1
            }
        }
          , T = E
          , S = function() {
            function e(e) {
                this.data = e,
                this.bytesAvailable = e.byteLength,
                this.word = 0,
                this.bitsAvailable = 0
            }
            var t = e.prototype;
            return t.loadWord = function() {
                var e = this.data
                  , t = this.bytesAvailable
                  , r = e.byteLength - t
                  , i = new Uint8Array(4)
                  , a = Math.min(4, t);
                if (0 === a)
                    throw new Error("no bytes available");
                i.set(e.subarray(r, r + a)),
                this.word = new DataView(i.buffer).getUint32(0),
                this.bitsAvailable = 8 * a,
                this.bytesAvailable -= a
            }
            ,
            t.skipBits = function(e) {
                var t;
                this.bitsAvailable > e ? (this.word <<= e,
                this.bitsAvailable -= e) : (e -= this.bitsAvailable,
                e -= (t = e >> 3) >> 3,
                this.bytesAvailable -= t,
                this.loadWord(),
                this.word <<= e,
                this.bitsAvailable -= e)
            }
            ,
            t.readBits = function(e) {
                var t = Math.min(this.bitsAvailable, e)
                  , r = this.word >>> 32 - t;
                return e > 32 && o.b.error("Cannot read more than 32 bits at a time"),
                this.bitsAvailable -= t,
                this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(),
                (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
            }
            ,
            t.skipLZ = function() {
                var e;
                for (e = 0; e < this.bitsAvailable; ++e)
                    if (0 != (this.word & 2147483648 >>> e))
                        return this.word <<= e,
                        this.bitsAvailable -= e,
                        e;
                return this.loadWord(),
                e + this.skipLZ()
            }
            ,
            t.skipUEG = function() {
                this.skipBits(1 + this.skipLZ())
            }
            ,
            t.skipEG = function() {
                this.skipBits(1 + this.skipLZ())
            }
            ,
            t.readUEG = function() {
                var e = this.skipLZ();
                return this.readBits(e + 1) - 1
            }
            ,
            t.readEG = function() {
                var e = this.readUEG();
                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
            }
            ,
            t.readBoolean = function() {
                return 1 === this.readBits(1)
            }
            ,
            t.readUByte = function() {
                return this.readBits(8)
            }
            ,
            t.readUShort = function() {
                return this.readBits(16)
            }
            ,
            t.readUInt = function() {
                return this.readBits(32)
            }
            ,
            t.skipScalingList = function(e) {
                var t, r = 8, i = 8;
                for (t = 0; t < e; t++)
                    0 !== i && (i = (r + this.readEG() + 256) % 256),
                    r = 0 === i ? r : i
            }
            ,
            t.readSPS = function() {
                var e, t, r, i, a, n, s, o = 0, l = 0, d = 0, u = 0, c = this.readUByte.bind(this), h = this.readBits.bind(this), f = this.readUEG.bind(this), g = this.readBoolean.bind(this), p = this.skipBits.bind(this), v = this.skipEG.bind(this), m = this.skipUEG.bind(this), y = this.skipScalingList.bind(this);
                if (c(),
                e = c(),
                h(5),
                p(3),
                c(),
                m(),
                100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                    var b = f();
                    if (3 === b && p(1),
                    m(),
                    m(),
                    p(1),
                    g())
                        for (n = 3 !== b ? 8 : 12,
                        s = 0; s < n; s++)
                            g() && y(s < 6 ? 16 : 64)
                }
                m();
                var E = f();
                if (0 === E)
                    f();
                else if (1 === E)
                    for (p(1),
                    v(),
                    v(),
                    t = f(),
                    s = 0; s < t; s++)
                        v();
                m(),
                p(1),
                r = f(),
                i = f(),
                0 === (a = h(1)) && p(1),
                p(1),
                g() && (o = f(),
                l = f(),
                d = f(),
                u = f());
                var T = [1, 1];
                if (g() && g())
                    switch (c()) {
                    case 1:
                        T = [1, 1];
                        break;
                    case 2:
                        T = [12, 11];
                        break;
                    case 3:
                        T = [10, 11];
                        break;
                    case 4:
                        T = [16, 11];
                        break;
                    case 5:
                        T = [40, 33];
                        break;
                    case 6:
                        T = [24, 11];
                        break;
                    case 7:
                        T = [20, 11];
                        break;
                    case 8:
                        T = [32, 11];
                        break;
                    case 9:
                        T = [80, 33];
                        break;
                    case 10:
                        T = [18, 11];
                        break;
                    case 11:
                        T = [15, 11];
                        break;
                    case 12:
                        T = [64, 33];
                        break;
                    case 13:
                        T = [160, 99];
                        break;
                    case 14:
                        T = [4, 3];
                        break;
                    case 15:
                        T = [3, 2];
                        break;
                    case 16:
                        T = [2, 1];
                        break;
                    case 255:
                        T = [c() << 8 | c(), c() << 8 | c()]
                    }
                return {
                    width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
                    height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (d + u),
                    pixelRatio: T
                }
            }
            ,
            t.readSliceType = function() {
                return this.readUByte(),
                this.readUEG(),
                this.readUEG()
            }
            ,
            e
        }()
          , _ = function() {
            function e(e, t, r, i) {
                this.decryptdata = r,
                this.discardEPB = i,
                this.decrypter = new n.a(e,t,{
                    removePKCS7Padding: !1
                })
            }
            var t = e.prototype;
            return t.decryptBuffer = function(e, t) {
                this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
            }
            ,
            t.decryptAacSample = function(e, t, r, i) {
                var a = e[t].unit
                  , n = a.subarray(16, a.length - a.length % 16)
                  , s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length)
                  , o = this;
                this.decryptBuffer(s, function(n) {
                    n = new Uint8Array(n),
                    a.set(n, 16),
                    i || o.decryptAacSamples(e, t + 1, r)
                })
            }
            ,
            t.decryptAacSamples = function(e, t, r) {
                for (; ; t++) {
                    if (t >= e.length)
                        return void r();
                    if (!(e[t].unit.length < 32)) {
                        var i = this.decrypter.isSync();
                        if (this.decryptAacSample(e, t, r, i),
                        !i)
                            return
                    }
                }
            }
            ,
            t.getAvcEncryptedData = function(e) {
                for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160,
                i += 16)
                    r.set(e.subarray(a, a + 16), i);
                return r
            }
            ,
            t.getAvcDecryptedUnit = function(e, t) {
                t = new Uint8Array(t);
                for (var r = 0, i = 32; i <= e.length - 16; i += 160,
                r += 16)
                    e.set(t.subarray(r, r + 16), i);
                return e
            }
            ,
            t.decryptAvcSample = function(e, t, r, i, a, n) {
                var s = this.discardEPB(a.data)
                  , o = this.getAvcEncryptedData(s)
                  , l = this;
                this.decryptBuffer(o.buffer, function(o) {
                    a.data = l.getAvcDecryptedUnit(s, o),
                    n || l.decryptAvcSamples(e, t, r + 1, i)
                })
            }
            ,
            t.decryptAvcSamples = function(e, t, r, i) {
                for (; ; t++,
                r = 0) {
                    if (t >= e.length)
                        return void i();
                    for (var a = e[t].units; !(r >= a.length); r++) {
                        var n = a[r];
                        if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                            var s = this.decrypter.isSync();
                            if (this.decryptAvcSample(e, t, r, i, n, s),
                            !s)
                                return
                        }
                    }
                }
            }
            ,
            e
        }()
          , A = {
            video: 1,
            audio: 2,
            id3: 3,
            text: 4
        }
          , R = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.config = r,
                this.typeSupported = i,
                this.remuxer = t,
                this.sampleAes = null
            }
            var t = e.prototype;
            return t.setDecryptData = function(e) {
                null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new _(this.observer,this.config,e,this.discardEPB) : this.sampleAes = null
            }
            ,
            e.probe = function(t) {
                var r = e._syncOffset(t);
                return !(r < 0) && (r && o.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"),
                !0)
            }
            ,
            e._syncOffset = function(e) {
                for (var t = Math.min(1e3, e.length - 564), r = 0; r < t; ) {
                    if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376])
                        return r;
                    r++
                }
                return -1
            }
            ,
            e.createTrack = function(e, t) {
                return {
                    container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                    type: e,
                    id: A[e],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: "video" === e ? 0 : void 0,
                    isAAC: "audio" === e || void 0,
                    duration: "audio" === e ? t : void 0
                }
            }
            ,
            t.resetInitSegment = function(t, r, i, a) {
                this.pmtParsed = !1,
                this._pmtId = -1,
                this._avcTrack = e.createTrack("video", a),
                this._audioTrack = e.createTrack("audio", a),
                this._id3Track = e.createTrack("id3", a),
                this._txtTrack = e.createTrack("text", a),
                this.aacOverFlow = null,
                this.aacLastPTS = null,
                this.avcSample = null,
                this.audioCodec = r,
                this.videoCodec = i,
                this._duration = a
            }
            ,
            t.resetTimeStamp = function() {}
            ,
            t.append = function(t, r, n, s) {
                var l, d, u, c, h, f = t.length, g = !1;
                this.contiguous = n;
                var p = this.pmtParsed
                  , v = this._avcTrack
                  , m = this._audioTrack
                  , y = this._id3Track
                  , b = v.pid
                  , E = m.pid
                  , T = y.pid
                  , S = this._pmtId
                  , _ = v.pesData
                  , A = m.pesData
                  , R = y.pesData
                  , L = this._parsePAT
                  , D = this._parsePMT
                  , w = this._parsePES
                  , k = this._parseAVCPES.bind(this)
                  , I = this._parseAACPES.bind(this)
                  , O = this._parseMPEGPES.bind(this)
                  , C = this._parseID3PES.bind(this)
                  , P = e._syncOffset(t);
                for (f -= (f + P) % 188,
                l = P; l < f; l += 188)
                    if (71 === t[l]) {
                        if (d = !!(64 & t[l + 1]),
                        u = ((31 & t[l + 1]) << 8) + t[l + 2],
                        (48 & t[l + 3]) >> 4 > 1) {
                            if ((c = l + 5 + t[l + 4]) === l + 188)
                                continue
                        } else
                            c = l + 4;
                        switch (u) {
                        case b:
                            d && (_ && (h = w(_)) && void 0 !== h.pts && k(h, !1),
                            _ = {
                                data: [],
                                size: 0
                            }),
                            _ && (_.data.push(t.subarray(c, l + 188)),
                            _.size += l + 188 - c);
                            break;
                        case E:
                            d && (A && (h = w(A)) && void 0 !== h.pts && (m.isAAC ? I(h) : O(h)),
                            A = {
                                data: [],
                                size: 0
                            }),
                            A && (A.data.push(t.subarray(c, l + 188)),
                            A.size += l + 188 - c);
                            break;
                        case T:
                            d && (R && (h = w(R)) && void 0 !== h.pts && C(h),
                            R = {
                                data: [],
                                size: 0
                            }),
                            R && (R.data.push(t.subarray(c, l + 188)),
                            R.size += l + 188 - c);
                            break;
                        case 0:
                            d && (c += t[c] + 1),
                            S = this._pmtId = L(t, c);
                            break;
                        case S:
                            d && (c += t[c] + 1);
                            var x = D(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                            (b = x.avc) > 0 && (v.pid = b),
                            (E = x.audio) > 0 && (m.pid = E,
                            m.isAAC = x.isAAC),
                            (T = x.id3) > 0 && (y.pid = T),
                            g && !p && (o.b.log("reparse from beginning"),
                            g = !1,
                            l = P - 188),
                            p = this.pmtParsed = !0;
                            break;
                        case 17:
                        case 8191:
                            break;
                        default:
                            g = !0
                        }
                    } else
                        this.observer.trigger(i.a.ERROR, {
                            type: a.b.MEDIA_ERROR,
                            details: a.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                _ && (h = w(_)) && void 0 !== h.pts ? (k(h, !0),
                v.pesData = null) : v.pesData = _,
                A && (h = w(A)) && void 0 !== h.pts ? (m.isAAC ? I(h) : O(h),
                m.pesData = null) : (A && A.size && o.b.log("last AAC PES packet truncated,might overlap between fragments"),
                m.pesData = A),
                R && (h = w(R)) && void 0 !== h.pts ? (C(h),
                y.pesData = null) : y.pesData = R,
                null == this.sampleAes ? this.remuxer.remux(m, v, y, this._txtTrack, r, n, s) : this.decryptAndRemux(m, v, y, this._txtTrack, r, n, s)
            }
            ,
            t.decryptAndRemux = function(e, t, r, i, a, n, s) {
                if (e.samples && e.isAAC) {
                    var o = this;
                    this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                        o.decryptAndRemuxAvc(e, t, r, i, a, n, s)
                    })
                } else
                    this.decryptAndRemuxAvc(e, t, r, i, a, n, s)
            }
            ,
            t.decryptAndRemuxAvc = function(e, t, r, i, a, n, s) {
                if (t.samples) {
                    var o = this;
                    this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() {
                        o.remuxer.remux(e, t, r, i, a, n, s)
                    })
                } else
                    this.remuxer.remux(e, t, r, i, a, n, s)
            }
            ,
            t.destroy = function() {
                this._initPTS = this._initDTS = void 0,
                this._duration = 0
            }
            ,
            t._parsePAT = function(e, t) {
                return (31 & e[t + 10]) << 8 | e[t + 11]
            }
            ,
            t._parsePMT = function(e, t, r, i) {
                var a, n, s = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    isAAC: !0
                };
                for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4,
                t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a; ) {
                    switch (n = (31 & e[t + 1]) << 8 | e[t + 2],
                    e[t]) {
                    case 207:
                        if (!i) {
                            o.b.log("unknown stream type:" + e[t]);
                            break
                        }
                    case 15:
                        -1 === s.audio && (s.audio = n);
                        break;
                    case 21:
                        -1 === s.id3 && (s.id3 = n);
                        break;
                    case 219:
                        if (!i) {
                            o.b.log("unknown stream type:" + e[t]);
                            break
                        }
                    case 27:
                        -1 === s.avc && (s.avc = n);
                        break;
                    case 3:
                    case 4:
                        r ? -1 === s.audio && (s.audio = n,
                        s.isAAC = !1) : o.b.log("MPEG audio found, not supported in this browser for now");
                        break;
                    case 36:
                        o.b.warn("HEVC stream type found, not supported for now");
                        break;
                    default:
                        o.b.log("unknown stream type:" + e[t])
                    }
                    t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                }
                return s
            }
            ,
            t._parsePES = function(e) {
                var t, r, i, a, n, s, l, d, u = 0, c = e.data;
                if (!e || 0 === e.size)
                    return null;
                for (; c[0].length < 19 && c.length > 1; ) {
                    var h = new Uint8Array(c[0].length + c[1].length);
                    h.set(c[0]),
                    h.set(c[1], c[0].length),
                    c[0] = h,
                    c.splice(1, 1)
                }
                if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
                    if ((i = (t[4] << 8) + t[5]) && i > e.size - 6)
                        return null;
                    if (192 & (r = t[7]) && ((s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (s -= 8589934592),
                    64 & r ? ((l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (l -= 8589934592),
                    s - l > 54e5 && (o.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"),
                    s = l)) : l = s),
                    d = (a = t[8]) + 9,
                    e.size <= d)
                        return null;
                    e.size -= d,
                    n = new Uint8Array(e.size);
                    for (var f = 0, g = c.length; f < g; f++) {
                        var p = (t = c[f]).byteLength;
                        if (d) {
                            if (d > p) {
                                d -= p;
                                continue
                            }
                            t = t.subarray(d),
                            p -= d,
                            d = 0
                        }
                        n.set(t, u),
                        u += p
                    }
                    return i && (i -= a + 3),
                    {
                        data: n,
                        pts: s,
                        dts: l,
                        len: i
                    }
                }
                return null
            }
            ,
            t.pushAccesUnit = function(e, t) {
                if (e.units.length && e.frame) {
                    var r = t.samples
                      , i = r.length;
                    !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i,
                    r.push(e)) : t.dropped++
                }
                e.debug.length && o.b.log(e.pts + "/" + e.dts + ":" + e.debug)
            }
            ,
            t._parseAVCPES = function(e, t) {
                var r, i, a, n = this, s = this._avcTrack, o = this._parseAVCNALu(e.data), l = this.avcSample, d = !1, u = this.pushAccesUnit.bind(this), c = function(e, t, r, i) {
                    return {
                        key: e,
                        pts: t,
                        dts: r,
                        units: [],
                        debug: i
                    }
                };
                e.data = null,
                l && o.length && !s.audFound && (u(l, s),
                l = this.avcSample = c(!1, e.pts, e.dts, "")),
                o.forEach(function(t) {
                    switch (t.type) {
                    case 1:
                        i = !0,
                        l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
                        l.frame = !0;
                        var o = t.data;
                        if (d && o.length > 4) {
                            var h = new S(o).readSliceType();
                            2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
                        }
                        break;
                    case 5:
                        i = !0,
                        l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
                        l.key = !0,
                        l.frame = !0;
                        break;
                    case 6:
                        i = !0,
                        (r = new S(n.discardEPB(t.data))).readUByte();
                        for (var f = 0, g = 0, p = !1, v = 0; !p && r.bytesAvailable > 1; ) {
                            f = 0;
                            do {
                                f += v = r.readUByte()
                            } while (255 === v);
                            g = 0;
                            do {
                                g += v = r.readUByte()
                            } while (255 === v);
                            if (4 === f && 0 !== r.bytesAvailable) {
                                if (p = !0,
                                181 === r.readUByte())
                                    if (49 === r.readUShort())
                                        if (1195456820 === r.readUInt())
                                            if (3 === r.readUByte()) {
                                                var y = r.readUByte()
                                                  , b = 31 & y
                                                  , E = [y, r.readUByte()];
                                                for (a = 0; a < b; a++)
                                                    E.push(r.readUByte()),
                                                    E.push(r.readUByte()),
                                                    E.push(r.readUByte());
                                                n._insertSampleInOrder(n._txtTrack.samples, {
                                                    type: 3,
                                                    pts: e.pts,
                                                    bytes: E
                                                })
                                            }
                            } else if (5 === f && 0 !== r.bytesAvailable) {
                                if (p = !0,
                                g > 16) {
                                    var T = [];
                                    for (a = 0; a < 16; a++)
                                        T.push(r.readUByte().toString(16)),
                                        3 !== a && 5 !== a && 7 !== a && 9 !== a || T.push("-");
                                    var _ = g - 16
                                      , A = new Uint8Array(_);
                                    for (a = 0; a < _; a++)
                                        A[a] = r.readUByte();
                                    n._insertSampleInOrder(n._txtTrack.samples, {
                                        pts: e.pts,
                                        payloadType: f,
                                        uuid: T.join(""),
                                        userDataBytes: A,
                                        userData: Object(m.b)(A.buffer)
                                    })
                                }
                            } else if (g < r.bytesAvailable)
                                for (a = 0; a < g; a++)
                                    r.readUByte()
                        }
                        break;
                    case 7:
                        if (i = !0,
                        d = !0,
                        !s.sps) {
                            var R = (r = new S(t.data)).readSPS();
                            s.width = R.width,
                            s.height = R.height,
                            s.pixelRatio = R.pixelRatio,
                            s.sps = [t.data],
                            s.duration = n._duration;
                            var L = t.data.subarray(1, 4)
                              , D = "avc1.";
                            for (a = 0; a < 3; a++) {
                                var w = L[a].toString(16);
                                w.length < 2 && (w = "0" + w),
                                D += w
                            }
                            s.codec = D
                        }
                        break;
                    case 8:
                        i = !0,
                        s.pps || (s.pps = [t.data]);
                        break;
                    case 9:
                        i = !1,
                        s.audFound = !0,
                        l && u(l, s),
                        l = n.avcSample = c(!1, e.pts, e.dts, "");
                        break;
                    case 12:
                        i = !1;
                        break;
                    default:
                        i = !1,
                        l && (l.debug += "unknown NAL " + t.type + " ")
                    }
                    l && i && l.units.push(t)
                }),
                t && l && (u(l, s),
                this.avcSample = null)
            }
            ,
            t._insertSampleInOrder = function(e, t) {
                var r = e.length;
                if (r > 0) {
                    if (t.pts >= e[r - 1].pts)
                        e.push(t);
                    else
                        for (var i = r - 1; i >= 0; i--)
                            if (t.pts < e[i].pts) {
                                e.splice(i, 0, t);
                                break
                            }
                } else
                    e.push(t)
            }
            ,
            t._getLastNalUnit = function() {
                var e, t = this.avcSample;
                if (!t || 0 === t.units.length) {
                    var r = this._avcTrack.samples;
                    t = r[r.length - 1]
                }
                if (t) {
                    var i = t.units;
                    e = i[i.length - 1]
                }
                return e
            }
            ,
            t._parseAVCNALu = function(e) {
                var t, r, i, a, n = 0, s = e.byteLength, o = this._avcTrack, l = o.naluState || 0, d = l, u = [], c = -1;
                for (-1 === l && (c = 0,
                a = 31 & e[0],
                l = 0,
                n = 1); n < s; )
                    if (t = e[n++],
                    l)
                        if (1 !== l)
                            if (t)
                                if (1 === t) {
                                    if (c >= 0)
                                        i = {
                                            data: e.subarray(c, n - l - 1),
                                            type: a
                                        },
                                        u.push(i);
                                    else {
                                        var h = this._getLastNalUnit();
                                        if (h && (d && n <= 4 - d && h.state && (h.data = h.data.subarray(0, h.data.byteLength - d)),
                                        (r = n - l - 1) > 0)) {
                                            var f = new Uint8Array(h.data.byteLength + r);
                                            f.set(h.data, 0),
                                            f.set(e.subarray(0, r), h.data.byteLength),
                                            h.data = f
                                        }
                                    }
                                    n < s ? (c = n,
                                    a = 31 & e[n],
                                    l = 0) : l = -1
                                } else
                                    l = 0;
                            else
                                l = 3;
                        else
                            l = t ? 0 : 2;
                    else
                        l = t ? 0 : 1;
                if (c >= 0 && l >= 0 && (i = {
                    data: e.subarray(c, s),
                    type: a,
                    state: l
                },
                u.push(i)),
                0 === u.length) {
                    var g = this._getLastNalUnit();
                    if (g) {
                        var p = new Uint8Array(g.data.byteLength + e.byteLength);
                        p.set(g.data, 0),
                        p.set(e, g.data.byteLength),
                        g.data = p
                    }
                }
                return o.naluState = l,
                u
            }
            ,
            t.discardEPB = function(e) {
                for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2; )
                    0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2),
                    n += 2) : n++;
                if (0 === a.length)
                    return e;
                t = i - a.length,
                r = new Uint8Array(t);
                var s = 0;
                for (n = 0; n < t; s++,
                n++)
                    s === a[0] && (s++,
                    a.shift()),
                    r[n] = e[s];
                return r
            }
            ,
            t._parseAACPES = function(e) {
                var t, r, n, s, l, d, u, c = this._audioTrack, f = e.data, m = e.pts, y = this.aacOverFlow, b = this.aacLastPTS;
                if (y) {
                    var E = new Uint8Array(y.byteLength + f.byteLength);
                    E.set(y, 0),
                    E.set(f, y.byteLength),
                    f = E
                }
                for (n = 0,
                l = f.length; n < l - 1 && !h(f, n); n++)
                    ;
                if (n && (n < l - 1 ? (d = "AAC PES did not start with ADTS header,offset:" + n,
                u = !1) : (d = "no ADTS header found in AAC PES",
                u = !0),
                o.b.warn("parsing error:" + d),
                this.observer.trigger(i.a.ERROR, {
                    type: a.b.MEDIA_ERROR,
                    details: a.a.FRAG_PARSING_ERROR,
                    fatal: u,
                    reason: d
                }),
                u))
                    return;
                if (g(c, this.observer, f, n, this.audioCodec),
                r = 0,
                t = p(c.samplerate),
                y && b) {
                    var T = b + t;
                    Math.abs(T - m) > 1 && (o.b.log("AAC: align PTS for overlapping frames by " + Math.round((T - m) / 90)),
                    m = T)
                }
                for (; n < l; )
                    if (h(f, n) && n + 5 < l) {
                        var S = v(c, f, n, m, r);
                        if (!S)
                            break;
                        n += S.length,
                        s = S.sample.pts,
                        r++
                    } else
                        n++;
                y = n < l ? f.subarray(n, l) : null,
                this.aacOverFlow = y,
                this.aacLastPTS = s
            }
            ,
            t._parseMPEGPES = function(e) {
                for (var t = e.data, r = t.length, i = 0, a = 0, n = e.pts; a < r; )
                    if (T.isHeader(t, a)) {
                        var s = T.appendFrame(this._audioTrack, t, a, n, i);
                        if (!s)
                            break;
                        a += s.length,
                        i++
                    } else
                        a++
            }
            ,
            t._parseID3PES = function(e) {
                this._id3Track.samples.push(e)
            }
            ,
            e
        }()
          , L = function() {
            function e(e, t, r) {
                this.observer = e,
                this.config = r,
                this.remuxer = t
            }
            var t = e.prototype;
            return t.resetInitSegment = function(e, t, r, i) {
                this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    len: 0,
                    manifestCodec: t,
                    duration: i,
                    inputTimeScale: 9e4
                }
            }
            ,
            t.resetTimeStamp = function() {}
            ,
            e.probe = function(e) {
                var t, r, i = m.a.getID3Data(e, 0);
                if (i && void 0 !== m.a.getTimeStamp(i))
                    for (t = i.length,
                    r = Math.min(e.length - 1, t + 100); t < r; t++)
                        if (T.probe(e, t))
                            return o.b.log("MPEG Audio sync word found !"),
                            !0;
                return !1
            }
            ,
            t.append = function(e, t, r, i) {
                for (var a = m.a.getID3Data(e, 0), n = m.a.getTimeStamp(a), s = n ? 90 * n : 9e4 * t, o = a.length, l = e.length, d = 0, u = 0, c = this._audioTrack, h = [{
                    pts: s,
                    dts: s,
                    data: a
                }]; o < l; )
                    if (T.isHeader(e, o)) {
                        var f = T.appendFrame(c, e, o, s, d);
                        if (!f)
                            break;
                        o += f.length,
                        u = f.sample.pts,
                        d++
                    } else
                        m.a.isHeader(e, o) ? (a = m.a.getID3Data(e, o),
                        h.push({
                            pts: u,
                            dts: u,
                            data: a
                        }),
                        o += a.length) : o++;
                this.remuxer.remux(c, {
                    samples: []
                }, {
                    samples: h,
                    inputTimeScale: 9e4
                }, {
                    samples: []
                }, t, r, i)
            }
            ,
            t.destroy = function() {}
            ,
            e
        }()
          , D = function() {
            function e() {}
            return e.getSilentFrame = function(e, t) {
                switch (e) {
                case "mp4a.40.2":
                    if (1 === t)
                        return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === t)
                        return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === t)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === t)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === t)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === t)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    break;
                default:
                    if (1 === t)
                        return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === t)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === t)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
                return null
            }
            ,
            e
        }()
          , w = Math.pow(2, 32) - 1
          , k = function() {
            function e() {}
            return e.init = function() {
                var t;
                for (t in e.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                },
                e.types)
                    e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])
                  , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                e.HDLR_TYPES = {
                    video: r,
                    audio: i
                };
                var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                  , n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                e.STTS = e.STSC = e.STCO = n,
                e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var s = new Uint8Array([105, 115, 111, 109])
                  , o = new Uint8Array([97, 118, 99, 49])
                  , l = new Uint8Array([0, 0, 0, 1]);
                e.FTYP = e.box(e.types.ftyp, s, l, s, o),
                e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
            }
            ,
            e.box = function(e) {
                for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--; )
                    i += r[a].byteLength;
                for ((t = new Uint8Array(i))[0] = i >> 24 & 255,
                t[1] = i >> 16 & 255,
                t[2] = i >> 8 & 255,
                t[3] = 255 & i,
                t.set(e, 4),
                a = 0,
                i = 8; a < n; a++)
                    t.set(r[a], i),
                    i += r[a].byteLength;
                return t
            }
            ,
            e.hdlr = function(t) {
                return e.box(e.types.hdlr, e.HDLR_TYPES[t])
            }
            ,
            e.mdat = function(t) {
                return e.box(e.types.mdat, t)
            }
            ,
            e.mdhd = function(t, r) {
                r *= t;
                var i = Math.floor(r / (w + 1))
                  , a = Math.floor(r % (w + 1));
                return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
            }
            ,
            e.mdia = function(t) {
                return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
            }
            ,
            e.mfhd = function(t) {
                return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
            }
            ,
            e.minf = function(t) {
                return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
            }
            ,
            e.moof = function(t, r, i) {
                return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
            }
            ,
            e.moov = function(t) {
                for (var r = t.length, i = []; r--; )
                    i[r] = e.trak(t[r]);
                return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
            }
            ,
            e.mvex = function(t) {
                for (var r = t.length, i = []; r--; )
                    i[r] = e.trex(t[r]);
                return e.box.apply(null, [e.types.mvex].concat(i))
            }
            ,
            e.mvhd = function(t, r) {
                r *= t;
                var i = Math.floor(r / (w + 1))
                  , a = Math.floor(r % (w + 1))
                  , n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return e.box(e.types.mvhd, n)
            }
            ,
            e.sdtp = function(t) {
                var r, i, a = t.samples || [], n = new Uint8Array(4 + a.length);
                for (i = 0; i < a.length; i++)
                    r = a[i].flags,
                    n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                return e.box(e.types.sdtp, n)
            }
            ,
            e.stbl = function(t) {
                return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
            }
            ,
            e.avc1 = function(t) {
                var r, i, a, n = [], s = [];
                for (r = 0; r < t.sps.length; r++)
                    a = (i = t.sps[r]).byteLength,
                    n.push(a >>> 8 & 255),
                    n.push(255 & a),
                    n = n.concat(Array.prototype.slice.call(i));
                for (r = 0; r < t.pps.length; r++)
                    a = (i = t.pps[r]).byteLength,
                    s.push(a >>> 8 & 255),
                    s.push(255 & a),
                    s = s.concat(Array.prototype.slice.call(i));
                var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s)))
                  , l = t.width
                  , d = t.height
                  , u = t.pixelRatio[0]
                  , c = t.pixelRatio[1];
                return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
            }
            ,
            e.esds = function(e) {
                var t = e.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
            }
            ,
            e.mp4a = function(t) {
                var r = t.samplerate;
                return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
            }
            ,
            e.mp3 = function(t) {
                var r = t.samplerate;
                return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
            }
            ,
            e.stsd = function(t) {
                return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
            }
            ,
            e.tkhd = function(t) {
                var r = t.id
                  , i = t.duration * t.timescale
                  , a = t.width
                  , n = t.height
                  , s = Math.floor(i / (w + 1))
                  , o = Math.floor(i % (w + 1));
                return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
            }
            ,
            e.traf = function(t, r) {
                var i = e.sdtp(t)
                  , a = t.id
                  , n = Math.floor(r / (w + 1))
                  , s = Math.floor(r % (w + 1));
                return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
            }
            ,
            e.trak = function(t) {
                return t.duration = t.duration || 4294967295,
                e.box(e.types.trak, e.tkhd(t), e.mdia(t))
            }
            ,
            e.trex = function(t) {
                var r = t.id;
                return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            }
            ,
            e.trun = function(t, r) {
                var i, a, n, s, o, l, d = t.samples || [], u = d.length, c = 12 + 16 * u, h = new Uint8Array(c);
                for (r += 8 + c,
                h.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0),
                i = 0; i < u; i++)
                    n = (a = d[i]).duration,
                    s = a.size,
                    o = a.flags,
                    l = a.cts,
                    h.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                return e.box(e.types.trun, h)
            }
            ,
            e.initSegment = function(t) {
                e.types || e.init();
                var r, i = e.moov(t);
                return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP),
                r.set(i, e.FTYP.byteLength),
                r
            }
            ,
            e
        }()
          , I = 9e4;
        function O(e, t, r, i) {
            void 0 === r && (r = 1),
            void 0 === i && (i = !1);
            var a = e * t * r;
            return i ? Math.round(a) : a
        }
        function C(e, t) {
            return void 0 === t && (t = !1),
            O(e, 1e3, 1 / I, t)
        }
        function P(e, t) {
            return void 0 === t && (t = 1),
            O(e, I, 1 / t)
        }
        var x, F = P(10), M = P(.2), N = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.config = t,
                this.typeSupported = r;
                var a = navigator.userAgent;
                this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"),
                this.ISGenerated = !1
            }
            var t = e.prototype;
            return t.destroy = function() {}
            ,
            t.resetTimeStamp = function(e) {
                this._initPTS = this._initDTS = e
            }
            ,
            t.resetInitSegment = function() {
                this.ISGenerated = !1
            }
            ,
            t.remux = function(e, t, r, a, n, s, l) {
                if (this.ISGenerated || this.generateIS(e, t, n),
                this.ISGenerated) {
                    var d = e.samples.length
                      , u = t.samples.length
                      , c = n
                      , h = n;
                    if (d && u) {
                        var f = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                        c += Math.max(0, f),
                        h += Math.max(0, -f)
                    }
                    if (d) {
                        e.timescale || (o.b.warn("regenerate InitSegment as audio detected"),
                        this.generateIS(e, t, n));
                        var g, p = this.remuxAudio(e, c, s, l);
                        if (u)
                            p && (g = p.endPTS - p.startPTS),
                            t.timescale || (o.b.warn("regenerate InitSegment as video detected"),
                            this.generateIS(e, t, n)),
                            this.remuxVideo(t, h, s, g, l)
                    } else if (u) {
                        var v = this.remuxVideo(t, h, s, 0, l);
                        v && e.codec && this.remuxEmptyAudio(e, c, s, v)
                    }
                }
                r.samples.length && this.remuxID3(r, n),
                a.samples.length && this.remuxText(a, n),
                this.observer.trigger(i.a.FRAG_PARSED)
            }
            ,
            t.generateIS = function(e, t, r) {
                var n, s, l = this.observer, d = e.samples, u = t.samples, c = this.typeSupported, h = "audio/mp4", f = {}, g = {
                    tracks: f
                }, p = void 0 === this._initPTS;
                if (p && (n = s = 1 / 0),
                e.config && d.length && (e.timescale = e.samplerate,
                o.b.log("audio sampling rate : " + e.samplerate),
                e.isAAC || (c.mpeg ? (h = "audio/mpeg",
                e.codec = "") : c.mp3 && (e.codec = "mp3")),
                f.audio = {
                    container: h,
                    codec: e.codec,
                    initSegment: !e.isAAC && c.mpeg ? new Uint8Array : k.initSegment([e]),
                    metadata: {
                        channelCount: e.channelCount
                    }
                },
                p && (n = s = d[0].pts - e.inputTimeScale * r)),
                t.sps && t.pps && u.length) {
                    var v = t.inputTimeScale;
                    t.timescale = v,
                    f.video = {
                        container: "video/mp4",
                        codec: t.codec,
                        initSegment: k.initSegment([t]),
                        metadata: {
                            width: t.width,
                            height: t.height
                        }
                    },
                    p && (n = Math.min(n, u[0].pts - v * r),
                    s = Math.min(s, u[0].dts - v * r),
                    this.observer.trigger(i.a.INIT_PTS_FOUND, {
                        initPTS: n
                    }))
                }
                Object.keys(f).length ? (l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, g),
                this.ISGenerated = !0,
                p && (this._initPTS = n,
                this._initDTS = s)) : l.trigger(i.a.ERROR, {
                    type: a.b.MEDIA_ERROR,
                    details: a.a.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "no audio/video samples found"
                })
            }
            ,
            t.remuxVideo = function(e, t, r, n, s) {
                var l, d, u, c, h, f, g, p = 8, v = e.timescale, m = e.samples, y = [], b = m.length, E = this._PTSNormalize, T = this._initPTS, S = this.nextAvcDts, _ = this.isSafari;
                if (0 !== b) {
                    _ && (r |= m.length && S && (s && Math.abs(t - S / v) < .1 || Math.abs(m[0].pts - S - T) < v / 5)),
                    r || (S = t * v),
                    m.forEach(function(e) {
                        e.pts = E(e.pts - T, S),
                        e.dts = E(e.dts - T, S)
                    }),
                    m.sort(function(e, t) {
                        var r = e.dts - t.dts
                          , i = e.pts - t.pts;
                        return r || i || e.id - t.id
                    });
                    var A = m.reduce(function(e, t) {
                        return Math.max(Math.min(e, t.pts - t.dts), -1 * M)
                    }, 0);
                    if (A < 0) {
                        o.b.warn("PTS < DTS detected in video samples, shifting DTS by " + C(A, !0) + " ms to overcome this issue");
                        for (var R = 0; R < m.length; R++)
                            m[R].dts += A
                    }
                    var L = m[0];
                    h = Math.max(L.dts, 0),
                    c = Math.max(L.pts, 0);
                    var D = h - S;
                    r && D && (D > 1 ? o.b.log("AVC: " + C(D, !0) + " ms hole between fragments detected,filling it") : D < -1 && o.b.log("AVC: " + C(-D, !0) + " ms overlapping between fragments detected"),
                    h = S,
                    m[0].dts = h,
                    c = Math.max(c - D, S),
                    m[0].pts = c,
                    o.b.log("Video: PTS/DTS adjusted: " + C(c, !0) + "/" + C(h, !0) + ", delta: " + C(D, !0) + " ms")),
                    L = m[m.length - 1],
                    g = Math.max(L.dts, 0),
                    f = Math.max(L.pts, 0, g),
                    _ && (l = Math.round((g - h) / (m.length - 1)));
                    for (var w = 0, I = 0, O = 0; O < b; O++) {
                        for (var P = m[O], x = P.units, F = x.length, N = 0, U = 0; U < F; U++)
                            N += x[U].data.length;
                        I += N,
                        w += F,
                        P.length = N,
                        P.dts = _ ? h + O * l : Math.max(P.dts, h),
                        P.pts = Math.max(P.pts, P.dts)
                    }
                    var B = I + 4 * w + 8;
                    try {
                        d = new Uint8Array(B)
                    } catch (e) {
                        return void this.observer.trigger(i.a.ERROR, {
                            type: a.b.MUX_ERROR,
                            details: a.a.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: B,
                            reason: "fail allocating video mdat " + B
                        })
                    }
                    var G = new DataView(d.buffer);
                    G.setUint32(0, B),
                    d.set(k.types.mdat, 4);
                    for (var K = 0; K < b; K++) {
                        for (var j = m[K], H = j.units, V = 0, W = void 0, Y = 0, q = H.length; Y < q; Y++) {
                            var z = H[Y]
                              , X = z.data
                              , Q = z.data.byteLength;
                            G.setUint32(p, Q),
                            p += 4,
                            d.set(X, p),
                            p += Q,
                            V += 4 + Q
                        }
                        if (_)
                            W = Math.max(0, l * Math.round((j.pts - j.dts) / l));
                        else {
                            if (K < b - 1)
                                l = m[K + 1].dts - j.dts;
                            else {
                                var $ = this.config
                                  , J = j.dts - m[K > 0 ? K - 1 : K].dts;
                                if ($.stretchShortVideoTrack) {
                                    var Z = $.maxBufferHole
                                      , ee = Math.floor(Z * v)
                                      , te = (n ? c + n * v : this.nextAudioPts) - j.pts;
                                    te > ee ? ((l = te - J) < 0 && (l = J),
                                    o.b.log("It is approximately " + C(te, !1) + " ms to the next segment; using duration " + C(l, !1) + " ms for the last video frame.")) : l = J
                                } else
                                    l = J
                            }
                            W = Math.round(j.pts - j.dts)
                        }
                        y.push({
                            size: V,
                            duration: l,
                            cts: W,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: j.key ? 2 : 1,
                                isNonSync: j.key ? 0 : 1
                            }
                        })
                    }
                    this.nextAvcDts = g + l;
                    var re = e.dropped;
                    if (e.nbNalu = 0,
                    e.dropped = 0,
                    y.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var ie = y[0].flags;
                        ie.dependsOn = 2,
                        ie.isNonSync = 0
                    }
                    e.samples = y,
                    u = k.moof(e.sequenceNumber++, h, e),
                    e.samples = [];
                    var ae = {
                        data1: u,
                        data2: d,
                        startPTS: c / v,
                        endPTS: (f + l) / v,
                        startDTS: h / v,
                        endDTS: this.nextAvcDts / v,
                        type: "video",
                        hasAudio: !1,
                        hasVideo: !0,
                        nb: y.length,
                        dropped: re
                    };
                    return this.observer.trigger(i.a.FRAG_PARSING_DATA, ae),
                    ae
                }
            }
            ,
            t.remuxAudio = function(e, t, r, n) {
                var s, l, d, u, c, h, f = e.inputTimeScale, g = e.timescale, p = f / g, v = (e.isAAC ? 1024 : 1152) * p, m = this._PTSNormalize, y = this._initPTS, b = !e.isAAC && this.typeSupported.mpeg, E = b ? 0 : 8, T = e.samples, S = [], _ = this.nextAudioPts;
                if (r |= T.length && _ && (n && Math.abs(t - _ / f) < .1 || Math.abs(T[0].pts - _ - y) < 20 * v),
                T.forEach(function(e) {
                    e.pts = e.dts = m(e.pts - y, t * f)
                }),
                0 !== (T = T.filter(function(e) {
                    return e.pts >= 0
                })).length) {
                    if (r || (_ = n ? t * f : T[0].pts),
                    e.isAAC)
                        for (var A = this.config.maxAudioFramesDrift, R = 0, L = _; R < T.length; ) {
                            var w, I = T[R];
                            if ((w = I.pts - L) <= -A * v)
                                o.b.warn("Dropping 1 audio frame @ " + C(L, !0) + " ms due to " + C(w, !0) + " ms overlap."),
                                T.splice(R, 1);
                            else if (w >= A * v && w < F && L) {
                                var O = Math.round(w / v);
                                o.b.warn("Injecting " + O + " audio frames @ " + C(L, !0) + " ms due to " + C(L, !0) + " ms gap.");
                                for (var P = 0; P < O; P++) {
                                    var x = Math.max(L, 0);
                                    (l = D.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                    l = I.unit.subarray()),
                                    T.splice(R, 0, {
                                        unit: l,
                                        pts: x,
                                        dts: x
                                    }),
                                    L += v,
                                    R++
                                }
                                I.pts = I.dts = L,
                                L += v,
                                R++
                            } else
                                Math.abs(w),
                                I.pts = I.dts = L,
                                L += v,
                                R++
                        }
                    for (var M = T.length, N = 0; M--; )
                        N += T[M].unit.byteLength;
                    for (var U = 0, B = T.length; U < B; U++) {
                        var G = T[U]
                          , K = G.unit
                          , j = G.pts;
                        if (void 0 !== h)
                            s.duration = Math.round((j - h) / p);
                        else {
                            var H = j - _
                              , V = 0;
                            if (r && e.isAAC && H) {
                                if (H > 0 && H < F)
                                    V = Math.round((j - _) / v),
                                    o.b.log(C(H, !0) + " ms hole between AAC samples detected,filling it"),
                                    V > 0 && ((l = D.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = K.subarray()),
                                    N += V * l.length);
                                else if (H < -12) {
                                    o.b.log("drop overlapping AAC sample, expected/parsed/delta: " + C(_, !0) + " ms / " + C(j, !0) + " ms / " + C(-H, !0) + " ms"),
                                    N -= K.byteLength;
                                    continue
                                }
                                j = _
                            }
                            if (c = j,
                            !(N > 0))
                                return;
                            N += E;
                            try {
                                d = new Uint8Array(N)
                            } catch (e) {
                                return void this.observer.trigger(i.a.ERROR, {
                                    type: a.b.MUX_ERROR,
                                    details: a.a.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: N,
                                    reason: "fail allocating audio mdat " + N
                                })
                            }
                            b || (new DataView(d.buffer).setUint32(0, N),
                            d.set(k.types.mdat, 4));
                            for (var W = 0; W < V; W++)
                                (l = D.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),
                                l = K.subarray()),
                                d.set(l, E),
                                E += l.byteLength,
                                s = {
                                    size: l.byteLength,
                                    cts: 0,
                                    duration: 1024,
                                    flags: {
                                        isLeading: 0,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradPrio: 0,
                                        dependsOn: 1
                                    }
                                },
                                S.push(s)
                        }
                        d.set(K, E);
                        var Y = K.byteLength;
                        E += Y,
                        s = {
                            size: Y,
                            cts: 0,
                            duration: 0,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1
                            }
                        },
                        S.push(s),
                        h = j
                    }
                    var q = 0;
                    if ((M = S.length) >= 2 && (q = S[M - 2].duration,
                    s.duration = q),
                    M) {
                        this.nextAudioPts = _ = h + p * q,
                        e.samples = S,
                        u = b ? new Uint8Array : k.moof(e.sequenceNumber++, c / p, e),
                        e.samples = [];
                        var z = c / f
                          , X = _ / f
                          , Q = {
                            data1: u,
                            data2: d,
                            startPTS: z,
                            endPTS: X,
                            startDTS: z,
                            endDTS: X,
                            type: "audio",
                            hasAudio: !0,
                            hasVideo: !1,
                            nb: M
                        };
                        return this.observer.trigger(i.a.FRAG_PARSING_DATA, Q),
                        Q
                    }
                    return null
                }
            }
            ,
            t.remuxEmptyAudio = function(e, t, r, i) {
                var a = e.inputTimeScale
                  , n = a / (e.samplerate ? e.samplerate : a)
                  , s = this.nextAudioPts
                  , l = (void 0 !== s ? s : i.startDTS * a) + this._initDTS
                  , d = i.endDTS * a + this._initDTS
                  , u = 1024 * n
                  , c = Math.ceil((d - l) / u)
                  , h = D.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                if (o.b.warn("remux empty Audio"),
                h) {
                    for (var f = [], g = 0; g < c; g++) {
                        var p = l + g * u;
                        f.push({
                            unit: h,
                            pts: p,
                            dts: p
                        })
                    }
                    e.samples = f,
                    this.remuxAudio(e, t, r)
                } else
                    o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
            }
            ,
            t.remuxID3 = function(e) {
                var t, r = e.samples.length, a = e.inputTimeScale, n = this._initPTS, s = this._initDTS;
                if (r) {
                    for (var o = 0; o < r; o++)
                        (t = e.samples[o]).pts = (t.pts - n) / a,
                        t.dts = (t.dts - s) / a;
                    this.observer.trigger(i.a.FRAG_PARSING_METADATA, {
                        samples: e.samples
                    })
                }
                e.samples = []
            }
            ,
            t.remuxText = function(e) {
                e.samples.sort(function(e, t) {
                    return e.pts - t.pts
                });
                var t, r = e.samples.length, a = e.inputTimeScale, n = this._initPTS;
                if (r) {
                    for (var s = 0; s < r; s++)
                        (t = e.samples[s]).pts = (t.pts - n) / a;
                    this.observer.trigger(i.a.FRAG_PARSING_USERDATA, {
                        samples: e.samples
                    })
                }
                e.samples = []
            }
            ,
            t._PTSNormalize = function(e, t) {
                var r;
                if (void 0 === t)
                    return e;
                for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296; )
                    e += r;
                return e
            }
            ,
            e
        }(), U = function() {
            function e(e) {
                this.observer = e
            }
            var t = e.prototype;
            return t.destroy = function() {}
            ,
            t.resetTimeStamp = function() {}
            ,
            t.resetInitSegment = function() {}
            ,
            t.remux = function(e, t, r, a, n, s, o, l) {
                var d = this.observer
                  , u = "";
                e && (u += "audio"),
                t && (u += "video"),
                d.trigger(i.a.FRAG_PARSING_DATA, {
                    data1: l,
                    startPTS: n,
                    startDTS: n,
                    type: u,
                    hasAudio: !!e,
                    hasVideo: !!t,
                    nb: 1,
                    dropped: 0
                }),
                d.trigger(i.a.FRAG_PARSED)
            }
            ,
            e
        }(), B = Object(l.a)();
        try {
            x = B.performance.now.bind(B.performance)
        } catch (e) {
            o.b.debug("Unable to use Performance API on this environment"),
            x = B.Date.now
        }
        var G = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.typeSupported = t,
                this.config = r,
                this.vendor = i
            }
            var t = e.prototype;
            return t.destroy = function() {
                var e = this.demuxer;
                e && e.destroy()
            }
            ,
            t.push = function(e, t, r, a, s, o, l, d, u, c, h, f) {
                var g = this;
                if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                    var p = this.decrypter;
                    null == p && (p = this.decrypter = new n.a(this.observer,this.config));
                    var v = x();
                    p.decrypt(e, t.key.buffer, t.iv.buffer, function(e) {
                        var n = x();
                        g.observer.trigger(i.a.FRAG_DECRYPTED, {
                            stats: {
                                tstart: v,
                                tdecrypt: n
                            }
                        }),
                        g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
                    })
                } else
                    this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
            }
            ,
            t.pushDecrypted = function(e, t, r, n, s, o, l, d, u, c, h, f) {
                var g = this.demuxer;
                if (!g || (l || d) && !this.probe(e)) {
                    for (var p = this.observer, v = this.typeSupported, m = this.config, E = [{
                        demux: R,
                        remux: N
                    }, {
                        demux: b.a,
                        remux: U
                    }, {
                        demux: y,
                        remux: N
                    }, {
                        demux: L,
                        remux: N
                    }], T = 0, S = E.length; T < S; T++) {
                        var _ = E[T]
                          , A = _.demux.probe;
                        if (A(e)) {
                            var D = this.remuxer = new _.remux(p,m,v,this.vendor);
                            g = new _.demux(p,D,m,v),
                            this.probe = A;
                            break
                        }
                    }
                    if (!g)
                        return void p.trigger(i.a.ERROR, {
                            type: a.b.MEDIA_ERROR,
                            details: a.a.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "no demux matching with content found"
                        });
                    this.demuxer = g
                }
                var w = this.remuxer;
                (l || d) && (g.resetInitSegment(r, n, s, c),
                w.resetInitSegment()),
                l && (g.resetTimeStamp(f),
                w.resetTimeStamp(f)),
                "function" == typeof g.setDecryptData && g.setDecryptData(t),
                g.append(e, o, u, h)
            }
            ,
            e
        }();
        t.a = G
    }
    , function(e, t, r) {
        "use strict";
        var i = r(0)
          , a = r(1)
          , n = Math.pow(2, 32) - 1
          , s = function() {
            function e(e, t) {
                this.observer = e,
                this.remuxer = t
            }
            var t = e.prototype;
            return t.resetTimeStamp = function(e) {
                this.initPTS = e
            }
            ,
            t.resetInitSegment = function(t, r, i, n) {
                if (t && t.byteLength) {
                    var s = this.initData = e.parseInitSegment(t);
                    null == r && (r = "mp4a.40.5"),
                    null == i && (i = "avc1.42e01e");
                    var o = {};
                    s.audio && s.video ? o.audiovideo = {
                        container: "video/mp4",
                        codec: r + "," + i,
                        initSegment: n ? t : null
                    } : (s.audio && (o.audio = {
                        container: "audio/mp4",
                        codec: r,
                        initSegment: n ? t : null
                    }),
                    s.video && (o.video = {
                        container: "video/mp4",
                        codec: i,
                        initSegment: n ? t : null
                    })),
                    this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, {
                        tracks: o
                    })
                } else
                    r && (this.audioCodec = r),
                    i && (this.videoCodec = i)
            }
            ,
            e.probe = function(t) {
                return e.findBox({
                    data: t,
                    start: 0,
                    end: Math.min(t.length, 16384)
                }, ["moof"]).length > 0
            }
            ,
            e.bin2str = function(e) {
                return String.fromCharCode.apply(null, e)
            }
            ,
            e.readUint16 = function(e, t) {
                e.data && (t += e.start,
                e = e.data);
                var r = e[t] << 8 | e[t + 1];
                return r < 0 ? 65536 + r : r
            }
            ,
            e.readUint32 = function(e, t) {
                e.data && (t += e.start,
                e = e.data);
                var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                return r < 0 ? 4294967296 + r : r
            }
            ,
            e.writeUint32 = function(e, t, r) {
                e.data && (t += e.start,
                e = e.data),
                e[t] = r >> 24,
                e[t + 1] = r >> 16 & 255,
                e[t + 2] = r >> 8 & 255,
                e[t + 3] = 255 & r
            }
            ,
            e.findBox = function(t, r) {
                var i, a, n, s, o, l, d = [];
                if (t.data ? (o = t.start,
                n = t.end,
                t = t.data) : (o = 0,
                n = t.byteLength),
                !r.length)
                    return null;
                for (i = o; i < n; )
                    l = (a = e.readUint32(t, i)) > 1 ? i + a : n,
                    e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? d.push({
                        data: t,
                        start: i + 8,
                        end: l
                    }) : (s = e.findBox({
                        data: t,
                        start: i + 8,
                        end: l
                    }, r.slice(1))).length && (d = d.concat(s))),
                    i = l;
                return d
            }
            ,
            e.parseSegmentIndex = function(t) {
                var r, i = e.findBox(t, ["moov"])[0], a = i ? i.end : null, n = 0, s = e.findBox(t, ["sidx"]);
                if (!s || !s[0])
                    return null;
                r = [];
                var o = (s = s[0]).data[0];
                n = 0 === o ? 8 : 16;
                var l = e.readUint32(s, n);
                n += 4;
                n += 0 === o ? 8 : 16,
                n += 2;
                var d = s.end + 0
                  , u = e.readUint16(s, n);
                n += 2;
                for (var c = 0; c < u; c++) {
                    var h = n
                      , f = e.readUint32(s, h);
                    h += 4;
                    var g = 2147483647 & f;
                    if (1 === (2147483648 & f) >>> 31)
                        return void console.warn("SIDX has hierarchical references (not supported)");
                    var p = e.readUint32(s, h);
                    h += 4,
                    r.push({
                        referenceSize: g,
                        subsegmentDuration: p,
                        info: {
                            duration: p / l,
                            start: d,
                            end: d + g - 1
                        }
                    }),
                    d += g,
                    n = h += 4
                }
                return {
                    earliestPresentationTime: 0,
                    timescale: l,
                    version: o,
                    referencesCount: u,
                    references: r,
                    moovEndOffset: a
                }
            }
            ,
            e.parseInitSegment = function(t) {
                var r = [];
                return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
                    var a = e.findBox(t, ["tkhd"])[0];
                    if (a) {
                        var n = a.data[a.start]
                          , s = 0 === n ? 12 : 20
                          , o = e.readUint32(a, s)
                          , l = e.findBox(t, ["mdia", "mdhd"])[0];
                        if (l) {
                            s = 0 === (n = l.data[l.start]) ? 12 : 20;
                            var d = e.readUint32(l, s)
                              , u = e.findBox(t, ["mdia", "hdlr"])[0];
                            if (u) {
                                var c = {
                                    soun: "audio",
                                    vide: "video"
                                }[e.bin2str(u.data.subarray(u.start + 8, u.start + 12))];
                                if (c) {
                                    var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                    if (h.length) {
                                        h = h[0];
                                        var f = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                        i.b.log("MP4Demuxer:" + c + ":" + f + " found")
                                    }
                                    r[o] = {
                                        timescale: d,
                                        type: c
                                    },
                                    r[c] = {
                                        timescale: d,
                                        id: o
                                    }
                                }
                            }
                        }
                    }
                }),
                r
            }
            ,
            e.getStartDTS = function(t, r) {
                var i, a, n;
                return i = e.findBox(r, ["moof", "traf"]),
                a = [].concat.apply([], i.map(function(r) {
                    return e.findBox(r, ["tfhd"]).map(function(i) {
                        var a, n;
                        return a = e.readUint32(i, 4),
                        n = t[a].timescale || 9e4,
                        e.findBox(r, ["tfdt"]).map(function(t) {
                            var r, i;
                            return r = t.data[t.start],
                            i = e.readUint32(t, 4),
                            1 === r && (i *= Math.pow(2, 32),
                            i += e.readUint32(t, 8)),
                            i
                        })[0] / n
                    })
                })),
                n = Math.min.apply(null, a),
                isFinite(n) ? n : 0
            }
            ,
            e.offsetStartDTS = function(t, r, i) {
                e.findBox(r, ["moof", "traf"]).map(function(r) {
                    return e.findBox(r, ["tfhd"]).map(function(a) {
                        var s = e.readUint32(a, 4)
                          , o = t[s].timescale || 9e4;
                        e.findBox(r, ["tfdt"]).map(function(t) {
                            var r = t.data[t.start]
                              , a = e.readUint32(t, 4);
                            if (0 === r)
                                e.writeUint32(t, 4, a - i * o);
                            else {
                                a *= Math.pow(2, 32),
                                a += e.readUint32(t, 8),
                                a -= i * o,
                                a = Math.max(a, 0);
                                var s = Math.floor(a / (n + 1))
                                  , l = Math.floor(a % (n + 1));
                                e.writeUint32(t, 4, s),
                                e.writeUint32(t, 8, l)
                            }
                        })
                    })
                })
            }
            ,
            t.append = function(t, r, i, n) {
                var s = this.initData;
                s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1),
                s = this.initData);
                var o, l = this.initPTS;
                if (void 0 === l) {
                    var d = e.getStartDTS(s, t);
                    this.initPTS = l = d - r,
                    this.observer.trigger(a.a.INIT_PTS_FOUND, {
                        initPTS: l
                    })
                }
                e.offsetStartDTS(s, t, l),
                o = e.getStartDTS(s, t),
                this.remuxer.remux(s.audio, s.video, null, null, o, i, n, t)
            }
            ,
            t.destroy = function() {}
            ,
            e
        }();
        t.a = s
    }
    , function(e, t, r) {
        function i(e) {
            var t = {};
            function r(i) {
                if (t[i])
                    return t[i].exports;
                var a = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(a.exports, a, a.exports, r),
                a.l = !0,
                a.exports
            }
            r.m = e,
            r.c = t,
            r.i = function(e) {
                return e
            }
            ,
            r.d = function(e, t, i) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }
            ,
            r.r = function(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return r.d(t, "a", t),
                t
            }
            ,
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            r.p = "/",
            r.oe = function(e) {
                throw console.error(e),
                e
            }
            ;
            var i = r(r.s = ENTRY_MODULE);
            return i.default || i
        }
        var a = "[\\.|\\-|\\+|\\w|/|@]+"
          , n = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + a + ").*?\\)";
        function s(e) {
            return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        function o(e, t, i) {
            var o = {};
            o[i] = [];
            var l = t.toString()
              , d = l.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!d)
                return o;
            for (var u, c = d[1], h = new RegExp("(\\\\n|\\W)" + s(c) + n,"g"); u = h.exec(l); )
                "dll-reference" !== u[3] && o[i].push(u[3]);
            for (h = new RegExp("\\(" + s(c) + '\\("(dll-reference\\s(' + a + '))"\\)\\)' + n,"g"); u = h.exec(l); )
                e[u[2]] || (o[i].push(u[1]),
                e[u[2]] = r(u[1]).m),
                o[u[2]] = o[u[2]] || [],
                o[u[2]].push(u[4]);
            for (var f, g = Object.keys(o), p = 0; p < g.length; p++)
                for (var v = 0; v < o[g[p]].length; v++)
                    f = o[g[p]][v],
                    isNaN(1 * f) || (o[g[p]][v] = 1 * o[g[p]][v]);
            return o
        }
        function l(e) {
            return Object.keys(e).reduce(function(t, r) {
                return t || e[r].length > 0
            }, !1)
        }
        e.exports = function(e, t) {
            t = t || {};
            var a = {
                main: r.m
            }
              , n = t.all ? {
                main: Object.keys(a.main)
            } : function(e, t) {
                for (var r = {
                    main: [t]
                }, i = {
                    main: []
                }, a = {
                    main: {}
                }; l(r); )
                    for (var n = Object.keys(r), s = 0; s < n.length; s++) {
                        var d = n[s]
                          , u = r[d].pop();
                        if (a[d] = a[d] || {},
                        !a[d][u] && e[d][u]) {
                            a[d][u] = !0,
                            i[d] = i[d] || [],
                            i[d].push(u);
                            for (var c = o(e, e[d][u], d), h = Object.keys(c), f = 0; f < h.length; f++)
                                r[h[f]] = r[h[f]] || [],
                                r[h[f]] = r[h[f]].concat(c[h[f]])
                        }
                    }
                return i
            }(a, e)
              , s = "";
            Object.keys(n).filter(function(e) {
                return "main" !== e
            }).forEach(function(e) {
                for (var t = 0; n[e][t]; )
                    t++;
                n[e].push(t),
                a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                s = s + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n[e].map(function(t) {
                    return JSON.stringify(t) + ": " + a[e][t].toString()
                }).join(",") + "});\n"
            }),
            s = s + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n.main.map(function(e) {
                return JSON.stringify(e) + ": " + a.main[e].toString()
            }).join(",") + "}))(self);";
            var d = new window.Blob([s],{
                type: "text/javascript"
            });
            if (t.bare)
                return d;
            var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(d)
              , c = new window.Worker(u);
            return c.objectURL = u,
            c
        }
    }
    , function(e, t, r) {
        "use strict";
        r.r(t);
        var i = r(9)
          , a = r(1)
          , n = r(0)
          , s = r(8);
        t.default = function(e) {
            var t = new s.EventEmitter;
            t.trigger = function(e) {
                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                    i[a - 1] = arguments[a];
                t.emit.apply(t, [e, e].concat(i))
            }
            ,
            t.off = function(e) {
                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                    i[a - 1] = arguments[a];
                t.removeListener.apply(t, [e].concat(i))
            }
            ;
            var r = function(t, r) {
                e.postMessage({
                    event: t,
                    data: r
                })
            };
            e.addEventListener("message", function(a) {
                var s = a.data;
                switch (s.cmd) {
                case "init":
                    var o = JSON.parse(s.config);
                    e.demuxer = new i.a(t,s.typeSupported,o,s.vendor),
                    Object(n.a)(o.debug),
                    r("init", null);
                    break;
                case "demux":
                    e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
                }
            }),
            t.on(a.a.FRAG_DECRYPTED, r),
            t.on(a.a.FRAG_PARSING_INIT_SEGMENT, r),
            t.on(a.a.FRAG_PARSED, r),
            t.on(a.a.ERROR, r),
            t.on(a.a.FRAG_PARSING_METADATA, r),
            t.on(a.a.FRAG_PARSING_USERDATA, r),
            t.on(a.a.INIT_PTS_FOUND, r),
            t.on(a.a.FRAG_PARSING_DATA, function(t, r) {
                var i = []
                  , a = {
                    event: t,
                    data: r
                };
                r.data1 && (a.data1 = r.data1.buffer,
                i.push(r.data1.buffer),
                delete r.data1),
                r.data2 && (a.data2 = r.data2.buffer,
                i.push(r.data2.buffer),
                delete r.data2),
                e.postMessage(a, i)
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        r.r(t);
        var i = {};
        r.r(i),
        r.d(i, "newCue", function() {
            return tt
        });
        var a, n, s = r(6), o = r(2), l = r(3), d = r(1), u = r(0), c = {
            hlsEventGeneric: !0,
            hlsHandlerDestroying: !0,
            hlsHandlerDestroyed: !0
        }, h = function() {
            function e(e) {
                this.hls = void 0,
                this.handledEvents = void 0,
                this.useGenericHandler = void 0,
                this.hls = e,
                this.onEvent = this.onEvent.bind(this);
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    r[i - 1] = arguments[i];
                this.handledEvents = r,
                this.useGenericHandler = !0,
                this.registerListeners()
            }
            var t = e.prototype;
            return t.destroy = function() {
                this.onHandlerDestroying(),
                this.unregisterListeners(),
                this.onHandlerDestroyed()
            }
            ,
            t.onHandlerDestroying = function() {}
            ,
            t.onHandlerDestroyed = function() {}
            ,
            t.isEventHandler = function() {
                return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
            }
            ,
            t.registerListeners = function() {
                this.isEventHandler() && this.handledEvents.forEach(function(e) {
                    if (c[e])
                        throw new Error("Forbidden event-name: " + e);
                    this.hls.on(e, this.onEvent)
                }, this)
            }
            ,
            t.unregisterListeners = function() {
                this.isEventHandler() && this.handledEvents.forEach(function(e) {
                    this.hls.off(e, this.onEvent)
                }, this)
            }
            ,
            t.onEvent = function(e, t) {
                this.onEventGeneric(e, t)
            }
            ,
            t.onEventGeneric = function(e, t) {
                try {
                    (function(e, t) {
                        var r = "on" + e.replace("hls", "");
                        if ("function" != typeof this[r])
                            throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                        return this[r].bind(this, t)
                    }
                    ).call(this, e, t).call()
                } catch (t) {
                    u.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
                    this.hls.trigger(d.a.ERROR, {
                        type: o.b.OTHER_ERROR,
                        details: o.a.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: e,
                        err: t
                    })
                }
            }
            ,
            e
        }();
        !function(e) {
            e.MANIFEST = "manifest",
            e.LEVEL = "level",
            e.AUDIO_TRACK = "audioTrack",
            e.SUBTITLE_TRACK = "subtitleTrack"
        }(a || (a = {})),
        function(e) {
            e.MAIN = "main",
            e.AUDIO = "audio",
            e.SUBTITLE = "subtitle"
        }(n || (n = {}));
        var f = r(10);
        function g(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var p, v = function() {
            function e(e, t) {
                this._uri = null,
                this.baseuri = void 0,
                this.reluri = void 0,
                this.method = null,
                this.key = null,
                this.iv = null,
                this.baseuri = e,
                this.reluri = t
            }
            var t, r, i;
            return t = e,
            (r = [{
                key: "uri",
                get: function() {
                    return !this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, {
                        alwaysNormalize: !0
                    })),
                    this._uri
                }
            }]) && g(t.prototype, r),
            i && g(t, i),
            e
        }();
        function m(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        !function(e) {
            e.AUDIO = "audio",
            e.VIDEO = "video"
        }(p || (p = {}));
        var y = function() {
            function e() {
                var e;
                this._url = null,
                this._byteRange = null,
                this._decryptdata = null,
                this._elementaryStreams = ((e = {})[p.AUDIO] = !1,
                e[p.VIDEO] = !1,
                e),
                this.deltaPTS = 0,
                this.rawProgramDateTime = null,
                this.programDateTime = null,
                this.title = null,
                this.tagList = [],
                this.cc = void 0,
                this.type = void 0,
                this.relurl = void 0,
                this.baseurl = void 0,
                this.duration = void 0,
                this.start = void 0,
                this.sn = 0,
                this.urlId = 0,
                this.level = 0,
                this.levelkey = void 0,
                this.loader = void 0
            }
            var t, r, i, a = e.prototype;
            return a.setByteRange = function(e, t) {
                var r = e.split("@", 2)
                  , i = [];
                1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]),
                i[1] = parseInt(r[0]) + i[0],
                this._byteRange = i
            }
            ,
            a.addElementaryStream = function(e) {
                this._elementaryStreams[e] = !0
            }
            ,
            a.hasElementaryStream = function(e) {
                return !0 === this._elementaryStreams[e]
            }
            ,
            a.createInitializationVector = function(e) {
                for (var t = new Uint8Array(16), r = 12; r < 16; r++)
                    t[r] = e >> 8 * (15 - r) & 255;
                return t
            }
            ,
            a.setDecryptDataFromLevelKey = function(e, t) {
                var r = e;
                return e && e.method && e.uri && !e.iv && ((r = new v(e.baseuri,e.reluri)).method = e.method,
                r.iv = this.createInitializationVector(t)),
                r
            }
            ,
            t = e,
            (r = [{
                key: "url",
                get: function() {
                    return !this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
                        alwaysNormalize: !0
                    })),
                    this._url
                },
                set: function(e) {
                    this._url = e
                }
            }, {
                key: "byteRange",
                get: function() {
                    return this._byteRange ? this._byteRange : []
                }
            }, {
                key: "byteRangeStartOffset",
                get: function() {
                    return this.byteRange[0]
                }
            }, {
                key: "byteRangeEndOffset",
                get: function() {
                    return this.byteRange[1]
                }
            }, {
                key: "decryptdata",
                get: function() {
                    if (!this.levelkey && !this._decryptdata)
                        return null;
                    if (!this._decryptdata && this.levelkey) {
                        var e = this.sn;
                        "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && u.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'),
                        e = 0),
                        this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
                    }
                    return this._decryptdata
                }
            }, {
                key: "endProgramDateTime",
                get: function() {
                    if (null === this.programDateTime)
                        return null;
                    if (!Object(l.a)(this.programDateTime))
                        return null;
                    var e = Object(l.a)(this.duration) ? this.duration : 0;
                    return this.programDateTime + 1e3 * e
                }
            }, {
                key: "encrypted",
                get: function() {
                    return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                }
            }]) && m(t.prototype, r),
            i && m(t, i),
            e
        }();
        function b(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var E = function() {
            function e(e) {
                this.endCC = 0,
                this.endSN = 0,
                this.fragments = [],
                this.initSegment = null,
                this.live = !0,
                this.needSidxRanges = !1,
                this.startCC = 0,
                this.startSN = 0,
                this.startTimeOffset = null,
                this.targetduration = 0,
                this.totalduration = 0,
                this.type = null,
                this.url = e,
                this.version = null
            }
            var t, r, i;
            return t = e,
            (r = [{
                key: "hasProgramDateTime",
                get: function() {
                    return !(!this.fragments[0] || !Object(l.a)(this.fragments[0].programDateTime))
                }
            }]) && b(t.prototype, r),
            i && b(t, i),
            e
        }()
          , T = /^(\d+)x(\d+)$/
          , S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g
          , _ = function() {
            function e(t) {
                for (var r in "string" == typeof t && (t = e.parseAttrList(t)),
                t)
                    t.hasOwnProperty(r) && (this[r] = t[r])
            }
            var t = e.prototype;
            return t.decimalInteger = function(e) {
                var t = parseInt(this[e], 10);
                return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
            }
            ,
            t.hexadecimalInteger = function(e) {
                if (this[e]) {
                    var t = (this[e] || "0x").slice(2);
                    t = (1 & t.length ? "0" : "") + t;
                    for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++)
                        r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                    return r
                }
                return null
            }
            ,
            t.hexadecimalIntegerAsNumber = function(e) {
                var t = parseInt(this[e], 16);
                return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
            }
            ,
            t.decimalFloatingPoint = function(e) {
                return parseFloat(this[e])
            }
            ,
            t.enumeratedString = function(e) {
                return this[e]
            }
            ,
            t.decimalResolution = function(e) {
                var t = T.exec(this[e]);
                if (null !== t)
                    return {
                        width: parseInt(t[1], 10),
                        height: parseInt(t[2], 10)
                    }
            }
            ,
            e.parseAttrList = function(e) {
                var t, r = {};
                for (S.lastIndex = 0; null !== (t = S.exec(e)); ) {
                    var i = t[2];
                    0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
                    r[t[1]] = i
                }
                return r
            }
            ,
            e
        }()
          , A = {
            audio: {
                a3ds: !0,
                "ac-3": !0,
                "ac-4": !0,
                alac: !0,
                alaw: !0,
                dra1: !0,
                "dts+": !0,
                "dts-": !0,
                dtsc: !0,
                dtse: !0,
                dtsh: !0,
                "ec-3": !0,
                enca: !0,
                g719: !0,
                g726: !0,
                m4ae: !0,
                mha1: !0,
                mha2: !0,
                mhm1: !0,
                mhm2: !0,
                mlpa: !0,
                mp4a: !0,
                "raw ": !0,
                Opus: !0,
                samr: !0,
                sawb: !0,
                sawp: !0,
                sevc: !0,
                sqcp: !0,
                ssmv: !0,
                twos: !0,
                ulaw: !0
            },
            video: {
                avc1: !0,
                avc2: !0,
                avc3: !0,
                avc4: !0,
                avcp: !0,
                drac: !0,
                dvav: !0,
                dvhe: !0,
                encv: !0,
                hev1: !0,
                hvc1: !0,
                mjp2: !0,
                mp4v: !0,
                mvc1: !0,
                mvc2: !0,
                mvc3: !0,
                mvc4: !0,
                resv: !0,
                rv60: !0,
                s263: !0,
                svc1: !0,
                svc2: !0,
                "vc-1": !0,
                vp08: !0,
                vp09: !0
            }
        };
        function R(e, t) {
            return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
        }
        var L = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g
          , D = /#EXT-X-MEDIA:(.*)/g
          , w = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""),"g")
          , k = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/
          , I = /\.(mp4|m4s|m4v|m4a)$/i
          , O = function() {
            function e() {}
            return e.findGroup = function(e, t) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (i.id === t)
                        return i
                }
            }
            ,
            e.convertAVC1ToAVCOTI = function(e) {
                var t, r = e.split(".");
                return r.length > 2 ? (t = r.shift() + ".",
                t += parseInt(r.shift()).toString(16),
                t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e,
                t
            }
            ,
            e.resolve = function(e, t) {
                return s.buildAbsoluteURL(t, e, {
                    alwaysNormalize: !0
                })
            }
            ,
            e.parseMasterPlaylist = function(t, r) {
                var i, a = [];
                function n(e, t) {
                    ["video", "audio"].forEach(function(r) {
                        var i = e.filter(function(e) {
                            return function(e, t) {
                                var r = A[t];
                                return !!r && !0 === r[e.slice(0, 4)]
                            }(e, r)
                        });
                        if (i.length) {
                            var a = i.filter(function(e) {
                                return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                            });
                            t[r + "Codec"] = a.length > 0 ? a[0] : i[0],
                            e = e.filter(function(e) {
                                return -1 === i.indexOf(e)
                            })
                        }
                    }),
                    t.unknownCodecs = e
                }
                for (L.lastIndex = 0; null != (i = L.exec(t)); ) {
                    var s = {}
                      , o = s.attrs = new _(i[1]);
                    s.url = e.resolve(i[2], r);
                    var l = o.decimalResolution("RESOLUTION");
                    l && (s.width = l.width,
                    s.height = l.height),
                    s.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                    s.name = o.NAME,
                    n([].concat((o.CODECS || "").split(/[ ,]+/)), s),
                    s.videoCodec && -1 !== s.videoCodec.indexOf("avc1") && (s.videoCodec = e.convertAVC1ToAVCOTI(s.videoCodec)),
                    a.push(s)
                }
                return a
            }
            ,
            e.parseMasterPlaylistMedia = function(t, r, i, a) {
                var n;
                void 0 === a && (a = []);
                var s = []
                  , o = 0;
                for (D.lastIndex = 0; null !== (n = D.exec(t)); ) {
                    var l = new _(n[1]);
                    if (l.TYPE === i) {
                        var d = {
                            id: o++,
                            groupId: l["GROUP-ID"],
                            name: l.NAME || l.LANGUAGE,
                            type: i,
                            default: "YES" === l.DEFAULT,
                            autoselect: "YES" === l.AUTOSELECT,
                            forced: "YES" === l.FORCED,
                            lang: l.LANGUAGE
                        };
                        if (l.URI && (d.url = e.resolve(l.URI, r)),
                        a.length) {
                            var u = e.findGroup(a, d.groupId);
                            d.audioCodec = u ? u.codec : a[0].codec
                        }
                        s.push(d)
                    }
                }
                return s
            }
            ,
            e.parseLevelPlaylist = function(e, t, r, i, a) {
                var n, s, o, d = 0, c = 0, h = new E(t), f = 0, g = null, p = new y, m = null;
                for (w.lastIndex = 0; null !== (n = w.exec(e)); ) {
                    var b = n[1];
                    if (b) {
                        p.duration = parseFloat(b);
                        var T = (" " + n[2]).slice(1);
                        p.title = T || null,
                        p.tagList.push(T ? ["INF", b, T] : ["INF", b])
                    } else if (n[3]) {
                        if (Object(l.a)(p.duration)) {
                            var S = d++;
                            p.type = i,
                            p.start = c,
                            o && (p.levelkey = o),
                            p.sn = S,
                            p.level = r,
                            p.cc = f,
                            p.urlId = a,
                            p.baseurl = t,
                            p.relurl = (" " + n[3]).slice(1),
                            C(p, g),
                            h.fragments.push(p),
                            g = p,
                            c += p.duration,
                            p = new y
                        }
                    } else if (n[4]) {
                        var A = (" " + n[4]).slice(1);
                        g ? p.setByteRange(A, g) : p.setByteRange(A)
                    } else if (n[5])
                        p.rawProgramDateTime = (" " + n[5]).slice(1),
                        p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]),
                        null === m && (m = h.fragments.length);
                    else {
                        if (!(n = n[0].match(k))) {
                            u.b.warn("No matches on slow regex match for level playlist!");
                            continue
                        }
                        for (s = 1; s < n.length && void 0 === n[s]; s++)
                            ;
                        var R = (" " + n[s + 1]).slice(1)
                          , L = (" " + n[s + 2]).slice(1);
                        switch (n[s]) {
                        case "#":
                            p.tagList.push(L ? [R, L] : [R]);
                            break;
                        case "PLAYLIST-TYPE":
                            h.type = R.toUpperCase();
                            break;
                        case "MEDIA-SEQUENCE":
                            d = h.startSN = parseInt(R);
                            break;
                        case "TARGETDURATION":
                            h.targetduration = parseFloat(R);
                            break;
                        case "VERSION":
                            h.version = parseInt(R);
                            break;
                        case "EXTM3U":
                            break;
                        case "ENDLIST":
                            h.live = !1;
                            break;
                        case "DIS":
                            f++,
                            p.tagList.push(["DIS"]);
                            break;
                        case "DISCONTINUITY-SEQ":
                            f = parseInt(R);
                            break;
                        case "KEY":
                            var D = new _(R)
                              , O = D.enumeratedString("METHOD")
                              , P = D.URI
                              , x = D.hexadecimalInteger("IV");
                            O && (o = new v(t,P),
                            P && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(O) >= 0 && (o.method = O,
                            o.key = null,
                            o.iv = x));
                            break;
                        case "START":
                            var F = new _(R).decimalFloatingPoint("TIME-OFFSET");
                            Object(l.a)(F) && (h.startTimeOffset = F);
                            break;
                        case "MAP":
                            var M = new _(R);
                            p.relurl = M.URI,
                            M.BYTERANGE && p.setByteRange(M.BYTERANGE),
                            p.baseurl = t,
                            p.level = r,
                            p.type = i,
                            p.sn = "initSegment",
                            h.initSegment = p,
                            (p = new y).rawProgramDateTime = h.initSegment.rawProgramDateTime;
                            break;
                        default:
                            u.b.warn("line parsed but not handled: " + n)
                        }
                    }
                }
                return (p = g) && !p.relurl && (h.fragments.pop(),
                c -= p.duration),
                h.totalduration = c,
                h.averagetargetduration = c / h.fragments.length,
                h.endSN = d - 1,
                h.startCC = h.fragments[0] ? h.fragments[0].cc : 0,
                h.endCC = f,
                !h.initSegment && h.fragments.length && h.fragments.every(function(e) {
                    return I.test(e.relurl)
                }) && (u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                (p = new y).relurl = h.fragments[0].relurl,
                p.baseurl = t,
                p.level = r,
                p.type = i,
                p.sn = "initSegment",
                h.initSegment = p,
                h.needSidxRanges = !0),
                m && function(e, t) {
                    for (var r = e[t], i = t - 1; i >= 0; i--) {
                        var a = e[i];
                        a.programDateTime = r.programDateTime - 1e3 * a.duration,
                        r = a
                    }
                }(h.fragments, m),
                h
            }
            ,
            e
        }();
        function C(e, t) {
            e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime),
            Object(l.a)(e.programDateTime) || (e.programDateTime = null,
            e.rawProgramDateTime = null)
        }
        var P = window.performance
          , x = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.LEVEL_LOADING, d.a.AUDIO_TRACK_LOADING, d.a.SUBTITLE_TRACK_LOADING) || this).loaders = {},
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r,
            i.canHaveQualityLevels = function(e) {
                return e !== a.AUDIO_TRACK && e !== a.SUBTITLE_TRACK
            }
            ,
            i.mapContextToLevelType = function(e) {
                switch (e.type) {
                case a.AUDIO_TRACK:
                    return n.AUDIO;
                case a.SUBTITLE_TRACK:
                    return n.SUBTITLE;
                default:
                    return n.MAIN
                }
            }
            ,
            i.getResponseUrl = function(e, t) {
                var r = e.url;
                return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url),
                r
            }
            ;
            var s = i.prototype;
            return s.createInternalLoader = function(e) {
                var t = this.hls.config
                  , r = t.pLoader
                  , i = t.loader
                  , a = new (r || i)(t);
                return e.loader = a,
                this.loaders[e.type] = a,
                a
            }
            ,
            s.getInternalLoader = function(e) {
                return this.loaders[e.type]
            }
            ,
            s.resetInternalLoader = function(e) {
                this.loaders[e] && delete this.loaders[e]
            }
            ,
            s.destroyInternalLoaders = function() {
                for (var e in this.loaders) {
                    var t = this.loaders[e];
                    t && t.destroy(),
                    this.resetInternalLoader(e)
                }
            }
            ,
            s.destroy = function() {
                this.destroyInternalLoaders(),
                e.prototype.destroy.call(this)
            }
            ,
            s.onManifestLoading = function(e) {
                this.load({
                    url: e.url,
                    type: a.MANIFEST,
                    level: 0,
                    id: null,
                    responseType: "text"
                })
            }
            ,
            s.onLevelLoading = function(e) {
                this.load({
                    url: e.url,
                    type: a.LEVEL,
                    level: e.level,
                    id: e.id,
                    responseType: "text"
                })
            }
            ,
            s.onAudioTrackLoading = function(e) {
                this.load({
                    url: e.url,
                    type: a.AUDIO_TRACK,
                    level: null,
                    id: e.id,
                    responseType: "text"
                })
            }
            ,
            s.onSubtitleTrackLoading = function(e) {
                this.load({
                    url: e.url,
                    type: a.SUBTITLE_TRACK,
                    level: null,
                    id: e.id,
                    responseType: "text"
                })
            }
            ,
            s.load = function(e) {
                var t = this.hls.config;
                u.b.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
                var r, i, n, s, o = this.getInternalLoader(e);
                if (o) {
                    var l = o.context;
                    if (l && l.url === e.url)
                        return u.b.trace("playlist request ongoing"),
                        !1;
                    u.b.warn("aborting previous loader for type: " + e.type),
                    o.abort()
                }
                switch (e.type) {
                case a.MANIFEST:
                    r = t.manifestLoadingMaxRetry,
                    i = t.manifestLoadingTimeOut,
                    n = t.manifestLoadingRetryDelay,
                    s = t.manifestLoadingMaxRetryTimeout;
                    break;
                case a.LEVEL:
                    r = 0,
                    s = 0,
                    n = 0,
                    i = t.levelLoadingTimeOut;
                    break;
                default:
                    r = t.levelLoadingMaxRetry,
                    i = t.levelLoadingTimeOut,
                    n = t.levelLoadingRetryDelay,
                    s = t.levelLoadingMaxRetryTimeout
                }
                o = this.createInternalLoader(e);
                var d = {
                    timeout: i,
                    maxRetry: r,
                    retryDelay: n,
                    maxRetryDelay: s
                }
                  , c = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this)
                };
                return u.b.debug("Calling internal loader delegate for URL: " + e.url),
                o.load(e, d, c),
                !0
            }
            ,
            s.loadsuccess = function(e, t, r, i) {
                if (void 0 === i && (i = null),
                r.isSidxRequest)
                    return this._handleSidxRequest(e, r),
                    void this._handlePlaylistLoaded(e, t, r, i);
                if (this.resetInternalLoader(r.type),
                "string" != typeof e.data)
                    throw new Error('expected responseType of "text" for PlaylistLoader');
                var a = e.data;
                t.tload = P.now(),
                0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
            }
            ,
            s.loaderror = function(e, t, r) {
                void 0 === r && (r = null),
                this._handleNetworkError(t, r, !1, e)
            }
            ,
            s.loadtimeout = function(e, t, r) {
                void 0 === r && (r = null),
                this._handleNetworkError(t, r, !0)
            }
            ,
            s._handleMasterPlaylist = function(e, t, r, a) {
                var n = this.hls
                  , s = e.data
                  , o = i.getResponseUrl(e, r)
                  , l = O.parseMasterPlaylist(s, o);
                if (l.length) {
                    var c = l.map(function(e) {
                        return {
                            id: e.attrs.AUDIO,
                            codec: e.audioCodec
                        }
                    })
                      , h = O.parseMasterPlaylistMedia(s, o, "AUDIO", c)
                      , f = O.parseMasterPlaylistMedia(s, o, "SUBTITLES");
                    if (h.length) {
                        var g = !1;
                        h.forEach(function(e) {
                            e.url || (g = !0)
                        }),
                        !1 === g && l[0].audioCodec && !l[0].attrs.AUDIO && (u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                        h.unshift({
                            type: "main",
                            name: "main",
                            default: !1,
                            autoselect: !1,
                            forced: !1,
                            id: -1
                        }))
                    }
                    n.trigger(d.a.MANIFEST_LOADED, {
                        levels: l,
                        audioTracks: h,
                        subtitles: f,
                        url: o,
                        stats: t,
                        networkDetails: a
                    })
                } else
                    this._handleManifestParsingError(e, r, "no level found in manifest", a)
            }
            ,
            s._handleTrackOrLevelPlaylist = function(e, t, r, n) {
                var s = this.hls
                  , o = r.id
                  , u = r.level
                  , c = r.type
                  , h = i.getResponseUrl(e, r)
                  , f = Object(l.a)(o) ? o : 0
                  , g = Object(l.a)(u) ? u : f
                  , p = i.mapContextToLevelType(r)
                  , v = O.parseLevelPlaylist(e.data, h, g, p, f);
                if (v.tload = t.tload,
                c === a.MANIFEST) {
                    var m = {
                        url: h,
                        details: v
                    };
                    s.trigger(d.a.MANIFEST_LOADED, {
                        levels: [m],
                        audioTracks: [],
                        url: h,
                        stats: t,
                        networkDetails: n
                    })
                }
                if (t.tparsed = P.now(),
                v.needSidxRanges) {
                    var y = v.initSegment.url;
                    this.load({
                        url: y,
                        isSidxRequest: !0,
                        type: c,
                        level: u,
                        levelDetails: v,
                        id: o,
                        rangeStart: 0,
                        rangeEnd: 2048,
                        responseType: "arraybuffer"
                    })
                } else
                    r.levelDetails = v,
                    this._handlePlaylistLoaded(e, t, r, n)
            }
            ,
            s._handleSidxRequest = function(e, t) {
                if ("string" == typeof e.data)
                    throw new Error("sidx request must be made with responseType of array buffer");
                var r = f.a.parseSegmentIndex(new Uint8Array(e.data));
                if (r) {
                    var i = r.references
                      , a = t.levelDetails;
                    i.forEach(function(e, t) {
                        var r = e.info;
                        if (a) {
                            var i = a.fragments[t];
                            0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                        }
                    }),
                    a && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                }
            }
            ,
            s._handleManifestParsingError = function(e, t, r, i) {
                this.hls.trigger(d.a.ERROR, {
                    type: o.b.NETWORK_ERROR,
                    details: o.a.MANIFEST_PARSING_ERROR,
                    fatal: !0,
                    url: e.url,
                    reason: r,
                    networkDetails: i
                })
            }
            ,
            s._handleNetworkError = function(e, t, r, i) {
                var n, s;
                void 0 === r && (r = !1),
                void 0 === i && (i = null),
                u.b.info("A network error occured while loading a " + e.type + "-type playlist");
                var l = this.getInternalLoader(e);
                switch (e.type) {
                case a.MANIFEST:
                    n = r ? o.a.MANIFEST_LOAD_TIMEOUT : o.a.MANIFEST_LOAD_ERROR,
                    s = !0;
                    break;
                case a.LEVEL:
                    n = r ? o.a.LEVEL_LOAD_TIMEOUT : o.a.LEVEL_LOAD_ERROR,
                    s = !1;
                    break;
                case a.AUDIO_TRACK:
                    n = r ? o.a.AUDIO_TRACK_LOAD_TIMEOUT : o.a.AUDIO_TRACK_LOAD_ERROR,
                    s = !1;
                    break;
                default:
                    s = !1
                }
                l && (l.abort(),
                this.resetInternalLoader(e.type));
                var c = {
                    type: o.b.NETWORK_ERROR,
                    details: n,
                    fatal: s,
                    url: e.url,
                    loader: l,
                    context: e,
                    networkDetails: t
                };
                i && (c.response = i),
                this.hls.trigger(d.a.ERROR, c)
            }
            ,
            s._handlePlaylistLoaded = function(e, t, r, n) {
                var s = r.type
                  , o = r.level
                  , l = r.id
                  , u = r.levelDetails;
                if (u && u.targetduration)
                    if (i.canHaveQualityLevels(r.type))
                        this.hls.trigger(d.a.LEVEL_LOADED, {
                            details: u,
                            level: o || 0,
                            id: l || 0,
                            stats: t,
                            networkDetails: n
                        });
                    else
                        switch (s) {
                        case a.AUDIO_TRACK:
                            this.hls.trigger(d.a.AUDIO_TRACK_LOADED, {
                                details: u,
                                id: l,
                                stats: t,
                                networkDetails: n
                            });
                            break;
                        case a.SUBTITLE_TRACK:
                            this.hls.trigger(d.a.SUBTITLE_TRACK_LOADED, {
                                details: u,
                                id: l,
                                stats: t,
                                networkDetails: n
                            })
                        }
                else
                    this._handleManifestParsingError(e, r, "invalid target duration", n)
            }
            ,
            i
        }(h);
        var F = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.FRAG_LOADING) || this).loaders = {},
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                var t = this.loaders;
                for (var r in t) {
                    var i = t[r];
                    i && i.destroy()
                }
                this.loaders = {},
                e.prototype.destroy.call(this)
            }
            ,
            a.onFragLoading = function(e) {
                var t = e.frag
                  , r = t.type
                  , i = this.loaders
                  , a = this.hls.config
                  , n = a.fLoader
                  , s = a.loader;
                t.loaded = 0;
                var o, d, c, h = i[r];
                h && (u.b.warn("abort previous fragment loader for type: " + r),
                h.abort()),
                h = i[r] = t.loader = a.fLoader ? new n(a) : new s(a),
                o = {
                    url: t.url,
                    frag: t,
                    responseType: "arraybuffer",
                    progressData: !1
                };
                var f = t.byteRangeStartOffset
                  , g = t.byteRangeEndOffset;
                Object(l.a)(f) && Object(l.a)(g) && (o.rangeStart = f,
                o.rangeEnd = g),
                d = {
                    timeout: a.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: a.fragLoadingMaxRetryTimeout
                },
                c = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this),
                    onProgress: this.loadprogress.bind(this)
                },
                h.load(o, d, c)
            }
            ,
            a.loadsuccess = function(e, t, r, i) {
                void 0 === i && (i = null);
                var a = e.data
                  , n = r.frag;
                n.loader = void 0,
                this.loaders[n.type] = void 0,
                this.hls.trigger(d.a.FRAG_LOADED, {
                    payload: a,
                    frag: n,
                    stats: t,
                    networkDetails: i
                })
            }
            ,
            a.loaderror = function(e, t, r) {
                void 0 === r && (r = null);
                var i = t.frag
                  , a = i.loader;
                a && a.abort(),
                this.loaders[i.type] = void 0,
                this.hls.trigger(d.a.ERROR, {
                    type: o.b.NETWORK_ERROR,
                    details: o.a.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: t.frag,
                    response: e,
                    networkDetails: r
                })
            }
            ,
            a.loadtimeout = function(e, t, r) {
                void 0 === r && (r = null);
                var i = t.frag
                  , a = i.loader;
                a && a.abort(),
                this.loaders[i.type] = void 0,
                this.hls.trigger(d.a.ERROR, {
                    type: o.b.NETWORK_ERROR,
                    details: o.a.FRAG_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: t.frag,
                    networkDetails: r
                })
            }
            ,
            a.loadprogress = function(e, t, r, i) {
                void 0 === i && (i = null);
                var a = t.frag;
                a.loaded = e.loaded,
                this.hls.trigger(d.a.FRAG_LOAD_PROGRESS, {
                    frag: a,
                    stats: e,
                    networkDetails: i
                })
            }
            ,
            i
        }(h);
        var M = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.KEY_LOADING) || this).loaders = {},
                r.decryptkey = null,
                r.decrypturl = null,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                for (var t in this.loaders) {
                    var r = this.loaders[t];
                    r && r.destroy()
                }
                this.loaders = {},
                e.prototype.destroy.call(this)
            }
            ,
            a.onKeyLoading = function(e) {
                var t = e.frag
                  , r = t.type
                  , i = this.loaders[r];
                if (t.decryptdata) {
                    var a = t.decryptdata.uri;
                    if (a !== this.decrypturl || null === this.decryptkey) {
                        var n = this.hls.config;
                        if (i && (u.b.warn("abort previous key loader for type:" + r),
                        i.abort()),
                        !a)
                            return void u.b.warn("key uri is falsy");
                        t.loader = this.loaders[r] = new n.loader(n),
                        this.decrypturl = a,
                        this.decryptkey = null;
                        var s = {
                            url: a,
                            frag: t,
                            responseType: "arraybuffer"
                        }
                          , o = {
                            timeout: n.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: n.fragLoadingRetryDelay,
                            maxRetryDelay: n.fragLoadingMaxRetryTimeout
                        }
                          , l = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        };
                        t.loader.load(s, o, l)
                    } else
                        this.decryptkey && (t.decryptdata.key = this.decryptkey,
                        this.hls.trigger(d.a.KEY_LOADED, {
                            frag: t
                        }))
                } else
                    u.b.warn("Missing decryption data on fragment in onKeyLoading")
            }
            ,
            a.loadsuccess = function(e, t, r) {
                var i = r.frag;
                i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data),
                i.loader = void 0,
                delete this.loaders[i.type],
                this.hls.trigger(d.a.KEY_LOADED, {
                    frag: i
                })) : u.b.error("after key load, decryptdata unset")
            }
            ,
            a.loaderror = function(e, t) {
                var r = t.frag
                  , i = r.loader;
                i && i.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(d.a.ERROR, {
                    type: o.b.NETWORK_ERROR,
                    details: o.a.KEY_LOAD_ERROR,
                    fatal: !1,
                    frag: r,
                    response: e
                })
            }
            ,
            a.loadtimeout = function(e, t) {
                var r = t.frag
                  , i = r.loader;
                i && i.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(d.a.ERROR, {
                    type: o.b.NETWORK_ERROR,
                    details: o.a.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: r
                })
            }
            ,
            i
        }(h);
        var N = "NOT_LOADED"
          , U = "APPENDING"
          , B = "PARTIAL"
          , G = "OK"
          , K = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.BUFFER_APPENDED, d.a.FRAG_BUFFERED, d.a.FRAG_LOADED) || this).bufferPadding = .2,
                r.fragments = Object.create(null),
                r.timeRanges = Object.create(null),
                r.config = t.config,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                this.fragments = Object.create(null),
                this.timeRanges = Object.create(null),
                this.config = null,
                h.prototype.destroy.call(this),
                e.prototype.destroy.call(this)
            }
            ,
            a.getBufferedFrag = function(e, t) {
                var r = this.fragments
                  , i = Object.keys(r).filter(function(i) {
                    var a = r[i];
                    if (a.body.type !== t)
                        return !1;
                    if (!a.buffered)
                        return !1;
                    var n = a.body;
                    return n.startPTS <= e && e <= n.endPTS
                });
                if (0 === i.length)
                    return null;
                var a = i.pop();
                return r[a].body
            }
            ,
            a.detectEvictedFragments = function(e, t) {
                var r, i, a = this;
                Object.keys(this.fragments).forEach(function(n) {
                    var s = a.fragments[n];
                    if (!0 === s.buffered) {
                        var o = s.range[e];
                        if (o) {
                            r = o.time;
                            for (var l = 0; l < r.length; l++)
                                if (i = r[l],
                                !1 === a.isTimeBuffered(i.startPTS, i.endPTS, t)) {
                                    a.removeFragment(s.body);
                                    break
                                }
                        }
                    }
                })
            }
            ,
            a.detectPartialFragments = function(e) {
                var t = this
                  , r = this.getFragmentKey(e)
                  , i = this.fragments[r];
                i && (i.buffered = !0,
                Object.keys(this.timeRanges).forEach(function(r) {
                    if (e.hasElementaryStream(r)) {
                        var a = t.timeRanges[r];
                        i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
                    }
                }))
            }
            ,
            a.getBufferedTimes = function(e, t, r) {
                for (var i, a, n = [], s = !1, o = 0; o < r.length; o++) {
                    if (i = r.start(o) - this.bufferPadding,
                    a = r.end(o) + this.bufferPadding,
                    e >= i && t <= a) {
                        n.push({
                            startPTS: Math.max(e, r.start(o)),
                            endPTS: Math.min(t, r.end(o))
                        });
                        break
                    }
                    if (e < a && t > i)
                        n.push({
                            startPTS: Math.max(e, r.start(o)),
                            endPTS: Math.min(t, r.end(o))
                        }),
                        s = !0;
                    else if (t <= i)
                        break
                }
                return {
                    time: n,
                    partial: s
                }
            }
            ,
            a.getFragmentKey = function(e) {
                return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
            }
            ,
            a.getPartialFragment = function(e) {
                var t, r, i, a = this, n = null, s = 0;
                return Object.keys(this.fragments).forEach(function(o) {
                    var l = a.fragments[o];
                    a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding,
                    i = l.body.endPTS + a.bufferPadding,
                    e >= r && e <= i && (t = Math.min(e - r, i - e),
                    s <= t && (n = l.body,
                    s = t)))
                }),
                n
            }
            ,
            a.getState = function(e) {
                var t = this.getFragmentKey(e)
                  , r = this.fragments[t]
                  , i = N;
                return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? B : G : U),
                i
            }
            ,
            a.isPartial = function(e) {
                return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
            }
            ,
            a.isTimeBuffered = function(e, t, r) {
                for (var i, a, n = 0; n < r.length; n++) {
                    if (i = r.start(n) - this.bufferPadding,
                    a = r.end(n) + this.bufferPadding,
                    e >= i && t <= a)
                        return !0;
                    if (t <= i)
                        return !1
                }
                return !1
            }
            ,
            a.onFragLoaded = function(e) {
                var t = e.frag;
                Object(l.a)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
                    body: t,
                    range: Object.create(null),
                    buffered: !1
                })
            }
            ,
            a.onBufferAppended = function(e) {
                var t = this;
                this.timeRanges = e.timeRanges,
                Object.keys(this.timeRanges).forEach(function(e) {
                    var r = t.timeRanges[e];
                    t.detectEvictedFragments(e, r)
                })
            }
            ,
            a.onFragBuffered = function(e) {
                this.detectPartialFragments(e.frag)
            }
            ,
            a.hasFragment = function(e) {
                var t = this.getFragmentKey(e);
                return void 0 !== this.fragments[t]
            }
            ,
            a.removeFragment = function(e) {
                var t = this.getFragmentKey(e);
                delete this.fragments[t]
            }
            ,
            a.removeAllFragments = function() {
                this.fragments = Object.create(null)
            }
            ,
            i
        }(h)
          , j = {
            search: function(e, t) {
                for (var r = 0, i = e.length - 1, a = null, n = null; r <= i; ) {
                    var s = t(n = e[a = (r + i) / 2 | 0]);
                    if (s > 0)
                        r = a + 1;
                    else {
                        if (!(s < 0))
                            return n;
                        i = a - 1
                    }
                }
                return null
            }
        }
          , H = function() {
            function e() {}
            return e.isBuffered = function(e, t) {
                try {
                    if (e)
                        for (var r = e.buffered, i = 0; i < r.length; i++)
                            if (t >= r.start(i) && t <= r.end(i))
                                return !0
                } catch (e) {}
                return !1
            }
            ,
            e.bufferInfo = function(e, t, r) {
                try {
                    if (e) {
                        var i, a = e.buffered, n = [];
                        for (i = 0; i < a.length; i++)
                            n.push({
                                start: a.start(i),
                                end: a.end(i)
                            });
                        return this.bufferedInfo(n, t, r)
                    }
                } catch (e) {}
                return {
                    len: 0,
                    start: t,
                    end: t,
                    nextStart: void 0
                }
            }
            ,
            e.bufferedInfo = function(e, t, r) {
                e.sort(function(e, t) {
                    var r = e.start - t.start;
                    return r || t.end - e.end
                });
                var i = [];
                if (r)
                    for (var a = 0; a < e.length; a++) {
                        var n = i.length;
                        if (n) {
                            var s = i[n - 1].end;
                            e[a].start - s < r ? e[a].end > s && (i[n - 1].end = e[a].end) : i.push(e[a])
                        } else
                            i.push(e[a])
                    }
                else
                    i = e;
                for (var o, l = 0, d = t, u = t, c = 0; c < i.length; c++) {
                    var h = i[c].start
                      , f = i[c].end;
                    if (t + r >= h && t < f)
                        d = h,
                        l = (u = f) - t;
                    else if (t + r < h) {
                        o = h;
                        break
                    }
                }
                return {
                    len: l,
                    start: d,
                    end: u,
                    nextStart: o
                }
            }
            ,
            e
        }()
          , V = r(8)
          , W = r(11)
          , Y = r(9);
        function q() {
            return window.MediaSource || window.WebKitMediaSource
        }
        var z = r(5);
        var X = function(e) {
            var t, r;
            function i() {
                return e.apply(this, arguments) || this
            }
            return r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r,
            i.prototype.trigger = function(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    r[i - 1] = arguments[i];
                this.emit.apply(this, [e, e].concat(r))
            }
            ,
            i
        }(V.EventEmitter)
          , Q = Object(z.a)()
          , $ = q() || {
            isTypeSupported: function() {
                return !1
            }
        }
          , J = function() {
            function e(e, t) {
                var r = this;
                this.hls = e,
                this.id = t;
                var i = this.observer = new X
                  , a = e.config
                  , n = function(t, i) {
                    (i = i || {}).frag = r.frag,
                    i.id = r.id,
                    e.trigger(t, i)
                };
                i.on(d.a.FRAG_DECRYPTED, n),
                i.on(d.a.FRAG_PARSING_INIT_SEGMENT, n),
                i.on(d.a.FRAG_PARSING_DATA, n),
                i.on(d.a.FRAG_PARSED, n),
                i.on(d.a.ERROR, n),
                i.on(d.a.FRAG_PARSING_METADATA, n),
                i.on(d.a.FRAG_PARSING_USERDATA, n),
                i.on(d.a.INIT_PTS_FOUND, n);
                var s = {
                    mp4: $.isTypeSupported("video/mp4"),
                    mpeg: $.isTypeSupported("audio/mpeg"),
                    mp3: $.isTypeSupported('audio/mp4; codecs="mp3"')
                }
                  , l = navigator.vendor;
                if (a.enableWorker && "undefined" != typeof Worker) {
                    var c;
                    u.b.log("demuxing in webworker");
                    try {
                        c = this.w = W(12),
                        this.onwmsg = this.onWorkerMessage.bind(this),
                        c.addEventListener("message", this.onwmsg),
                        c.onerror = function(t) {
                            e.trigger(d.a.ERROR, {
                                type: o.b.OTHER_ERROR,
                                details: o.a.INTERNAL_EXCEPTION,
                                fatal: !0,
                                event: "demuxerWorker",
                                err: {
                                    message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                }
                            })
                        }
                        ,
                        c.postMessage({
                            cmd: "init",
                            typeSupported: s,
                            vendor: l,
                            id: t,
                            config: JSON.stringify(a)
                        })
                    } catch (e) {
                        u.b.warn("Error in worker:", e),
                        u.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                        c && Q.URL.revokeObjectURL(c.objectURL),
                        this.demuxer = new Y.a(i,s,a,l),
                        this.w = void 0
                    }
                } else
                    this.demuxer = new Y.a(i,s,a,l)
            }
            var t = e.prototype;
            return t.destroy = function() {
                var e = this.w;
                if (e)
                    e.removeEventListener("message", this.onwmsg),
                    e.terminate(),
                    this.w = null;
                else {
                    var t = this.demuxer;
                    t && (t.destroy(),
                    this.demuxer = null)
                }
                var r = this.observer;
                r && (r.removeAllListeners(),
                this.observer = null)
            }
            ,
            t.push = function(e, t, r, i, a, n, s, o) {
                var d = this.w
                  , c = Object(l.a)(a.startPTS) ? a.startPTS : a.start
                  , h = a.decryptdata
                  , f = this.frag
                  , g = !(f && a.cc === f.cc)
                  , p = !(f && a.level === f.level)
                  , v = f && a.sn === f.sn + 1
                  , m = !p && v;
                if (g && u.b.log(this.id + ":discontinuity detected"),
                p && u.b.log(this.id + ":switch detected"),
                this.frag = a,
                d)
                    d.postMessage({
                        cmd: "demux",
                        data: e,
                        decryptdata: h,
                        initSegment: t,
                        audioCodec: r,
                        videoCodec: i,
                        timeOffset: c,
                        discontinuity: g,
                        trackSwitch: p,
                        contiguous: m,
                        duration: n,
                        accurateTimeOffset: s,
                        defaultInitPTS: o
                    }, e instanceof ArrayBuffer ? [e] : []);
                else {
                    var y = this.demuxer;
                    y && y.push(e, h, t, r, i, c, g, p, m, n, s, o)
                }
            }
            ,
            t.onWorkerMessage = function(e) {
                var t = e.data
                  , r = this.hls;
                switch (t.event) {
                case "init":
                    Q.URL.revokeObjectURL(this.w.objectURL);
                    break;
                case d.a.FRAG_PARSING_DATA:
                    t.data.data1 = new Uint8Array(t.data1),
                    t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                default:
                    t.data = t.data || {},
                    t.data.frag = this.frag,
                    t.data.id = this.id,
                    r.trigger(t.event, t.data)
                }
            }
            ,
            e
        }();
        function Z(e, t, r) {
            switch (t) {
            case "audio":
                e.audioGroupIds || (e.audioGroupIds = []),
                e.audioGroupIds.push(r);
                break;
            case "text":
                e.textGroupIds || (e.textGroupIds = []),
                e.textGroupIds.push(r)
            }
        }
        function ee(e, t, r) {
            var i = e[t]
              , a = e[r]
              , n = a.startPTS;
            Object(l.a)(n) ? r > t ? (i.duration = n - i.start,
            i.duration < 0 && u.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (a.duration = i.start - n,
            a.duration < 0 && u.b.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!")) : a.start = r > t ? i.start + i.duration : Math.max(i.start - a.duration, 0)
        }
        function te(e, t, r, i, a, n) {
            var s = r;
            if (Object(l.a)(t.startPTS)) {
                var o = Math.abs(t.startPTS - r);
                Object(l.a)(t.deltaPTS) ? t.deltaPTS = Math.max(o, t.deltaPTS) : t.deltaPTS = o,
                s = Math.max(r, t.startPTS),
                r = Math.min(r, t.startPTS),
                i = Math.max(i, t.endPTS),
                a = Math.min(a, t.startDTS),
                n = Math.max(n, t.endDTS)
            }
            var d = r - t.start;
            t.start = t.startPTS = r,
            t.maxStartPTS = s,
            t.endPTS = i,
            t.startDTS = a,
            t.endDTS = n,
            t.duration = i - r;
            var u, c, h, f = t.sn;
            if (!e || f < e.startSN || f > e.endSN)
                return 0;
            for (u = f - e.startSN,
            (c = e.fragments)[u] = t,
            h = u; h > 0; h--)
                ee(c, h, h - 1);
            for (h = u; h < c.length - 1; h++)
                ee(c, h, h + 1);
            return e.PTSKnown = !0,
            d
        }
        function re(e, t) {
            t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
            var r, i = 0;
            if (ie(e, t, function(e, a) {
                i = e.cc - a.cc,
                Object(l.a)(e.startPTS) && (a.start = a.startPTS = e.startPTS,
                a.endPTS = e.endPTS,
                a.duration = e.duration,
                a.backtracked = e.backtracked,
                a.dropped = e.dropped,
                r = a),
                t.PTSKnown = !0
            }),
            t.PTSKnown) {
                if (i) {
                    u.b.log("discontinuity sliding from playlist, take drift into account");
                    for (var a = t.fragments, n = 0; n < a.length; n++)
                        a[n].cc += i
                }
                r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function(e, t) {
                    var r = t.startSN - e.startSN
                      , i = e.fragments
                      , a = t.fragments;
                    if (r < 0 || r > i.length)
                        return;
                    for (var n = 0; n < a.length; n++)
                        a[n].start += i[r].start
                }(e, t),
                t.PTSKnown = e.PTSKnown
            }
        }
        function ie(e, t, r) {
            if (e && t)
                for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, s = i; s <= a; s++) {
                    var o = e.fragments[n + s]
                      , l = t.fragments[s];
                    if (!o || !l)
                        break;
                    r(o, l, s)
                }
        }
        function ae(e, t, r) {
            var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration)
              , a = i / 2;
            return e && t.endSN === e.endSN && (i = a),
            r && (i = Math.max(a, i - (window.performance.now() - r))),
            Math.round(i)
        }
        var ne = {
            toString: function(e) {
                for (var t = "", r = e.length, i = 0; i < r; i++)
                    t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
                return t
            }
        };
        function se(e, t) {
            t.fragments.forEach(function(t) {
                if (t) {
                    var r = t.start + e;
                    t.start = t.startPTS = r,
                    t.endPTS = r + t.duration
                }
            }),
            t.PTSKnown = !0
        }
        function oe(e, t, r) {
            !function(e, t, r) {
                if (function(e, t, r) {
                    var i = !1;
                    return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0),
                    i
                }(e, r, t)) {
                    var i = function(e, t) {
                        var r = e.fragments
                          , i = t.fragments;
                        if (i.length && r.length) {
                            var a = function(e, t) {
                                for (var r = null, i = 0; i < e.length; i += 1) {
                                    var a = e[i];
                                    if (a && a.cc === t) {
                                        r = a;
                                        break
                                    }
                                }
                                return r
                            }(r, i[0].cc);
                            if (a && (!a || a.startPTS))
                                return a;
                            u.b.log("No frag in previous level to align on")
                        } else
                            u.b.log("No fragments to align")
                    }(r.details, t);
                    i && (u.b.log("Adjusting PTS using last level due to CC increase within current level"),
                    se(i.start, t))
                }
            }(e, r, t),
            !r.PTSKnown && t && function(e, t) {
                if (t && t.fragments.length) {
                    if (!e.hasProgramDateTime || !t.hasProgramDateTime)
                        return;
                    var r = t.fragments[0].programDateTime
                      , i = e.fragments[0].programDateTime
                      , a = (i - r) / 1e3 + t.fragments[0].start;
                    Object(l.a)(a) && (u.b.log("adjusting PTS using programDateTime delta, sliding:" + a.toFixed(3)),
                    se(a, e))
                }
            }(r, t.details)
        }
        function le(e, t, r) {
            if (null === t || !Array.isArray(e) || !e.length || !Object(l.a)(t))
                return null;
            if (t < (e[0].programDateTime || 0))
                return null;
            if (t >= (e[e.length - 1].endProgramDateTime || 0))
                return null;
            r = r || 0;
            for (var i = 0; i < e.length; ++i) {
                var a = e[i];
                if (ce(t, r, a))
                    return a
            }
            return null
        }
        function de(e, t, r, i) {
            void 0 === r && (r = 0),
            void 0 === i && (i = 0);
            var a = e ? t[e.sn - t[0].sn + 1] : null;
            return a && !ue(r, i, a) ? a : j.search(t, ue.bind(null, r, i))
        }
        function ue(e, t, r) {
            void 0 === e && (e = 0),
            void 0 === t && (t = 0);
            var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
        }
        function ce(e, t, r) {
            var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > e
        }
        var he = function() {
            function e(e, t, r, i) {
                this.config = e,
                this.media = t,
                this.fragmentTracker = r,
                this.hls = i,
                this.nudgeRetry = 0,
                this.stallReported = !1,
                this.stalled = null,
                this.moved = !1,
                this.seeking = !1
            }
            var t = e.prototype;
            return t.poll = function(e) {
                var t = this.config
                  , r = this.media
                  , i = this.stalled
                  , a = r.currentTime
                  , n = r.seeking
                  , s = this.seeking && !n
                  , o = !this.seeking && n;
                if (this.seeking = n,
                a === e) {
                    if ((o || s) && (this.stalled = null),
                    !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
                        var l = H.bufferInfo(r, a, 0)
                          , d = l.len > 0
                          , c = l.nextStart || 0;
                        if (d || c) {
                            if (n) {
                                if (l.len > 2 || (!c || c - a > 2))
                                    return;
                                this.moved = !1
                            }
                            if (!this.moved && this.stalled) {
                                var h = Math.max(c, l.start || 0) - a;
                                if (h > 0 && h <= 2)
                                    return void this._trySkipBufferHole(null)
                            }
                            var f = self.performance.now();
                            if (null !== i) {
                                var g = f - i;
                                !n && g >= 250 && this._reportStall(l.len);
                                var p = H.bufferInfo(r, a, t.maxBufferHole);
                                this._tryFixBufferStall(p, g)
                            } else
                                this.stalled = f
                        }
                    }
                } else if (this.moved = !0,
                null !== i) {
                    if (this.stallReported) {
                        var v = self.performance.now() - i;
                        u.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(v) + "ms"),
                        this.stallReported = !1
                    }
                    this.stalled = null,
                    this.nudgeRetry = 0
                }
            }
            ,
            t._tryFixBufferStall = function(e, t) {
                var r = this.config
                  , i = this.fragmentTracker
                  , a = this.media.currentTime
                  , n = i.getPartialFragment(a);
                if (n && this._trySkipBufferHole(n))
                    return;
                e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (u.b.warn("Trying to nudge playhead over buffer-hole"),
                this.stalled = null,
                this._tryNudgeBuffer())
            }
            ,
            t._reportStall = function(e) {
                var t = this.hls
                  , r = this.media;
                this.stallReported || (this.stallReported = !0,
                u.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer"),
                t.trigger(d.a.ERROR, {
                    type: o.b.MEDIA_ERROR,
                    details: o.a.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    buffer: e
                }))
            }
            ,
            t._trySkipBufferHole = function(e) {
                for (var t = this.config, r = this.hls, i = this.media, a = i.currentTime, n = 0, s = 0; s < i.buffered.length; s++) {
                    var l = i.buffered.start(s);
                    if (a + t.maxBufferHole >= n && a < l) {
                        var c = Math.max(l + .05, i.currentTime + .1);
                        return u.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c),
                        this.moved = !0,
                        this.stalled = null,
                        i.currentTime = c,
                        e && r.trigger(d.a.ERROR, {
                            type: o.b.MEDIA_ERROR,
                            details: o.a.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c,
                            frag: e
                        }),
                        c
                    }
                    n = i.buffered.end(s)
                }
                return 0
            }
            ,
            t._tryNudgeBuffer = function() {
                var e = this.config
                  , t = this.hls
                  , r = this.media
                  , i = r.currentTime
                  , a = (this.nudgeRetry || 0) + 1;
                if (this.nudgeRetry = a,
                a < e.nudgeMaxRetry) {
                    var n = i + a * e.nudgeOffset;
                    u.b.warn("Nudging 'currentTime' from " + i + " to " + n),
                    r.currentTime = n,
                    t.trigger(d.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.BUFFER_NUDGE_ON_STALL,
                        fatal: !1
                    })
                } else
                    u.b.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"),
                    t.trigger(d.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.BUFFER_STALLED_ERROR,
                        fatal: !0
                    })
            }
            ,
            e
        }();
        var fe = function(e) {
            var t, r;
            function i(t) {
                for (var r, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                    a[n - 1] = arguments[n];
                return (r = e.call.apply(e, [this, t].concat(a)) || this)._boundTick = void 0,
                r._tickTimer = null,
                r._tickInterval = null,
                r._tickCallCount = 0,
                r._boundTick = r.tick.bind(function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(r)),
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.onHandlerDestroying = function() {
                this.clearNextTick(),
                this.clearInterval()
            }
            ,
            a.hasInterval = function() {
                return !!this._tickInterval
            }
            ,
            a.hasNextTick = function() {
                return !!this._tickTimer
            }
            ,
            a.setInterval = function(e) {
                return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e),
                !0)
            }
            ,
            a.clearInterval = function() {
                return !!this._tickInterval && (self.clearInterval(this._tickInterval),
                this._tickInterval = null,
                !0)
            }
            ,
            a.clearNextTick = function() {
                return !!this._tickTimer && (self.clearTimeout(this._tickTimer),
                this._tickTimer = null,
                !0)
            }
            ,
            a.tick = function() {
                this._tickCallCount++,
                1 === this._tickCallCount && (this.doTick(),
                this._tickCallCount > 1 && (this.clearNextTick(),
                this._tickTimer = self.setTimeout(this._boundTick, 0)),
                this._tickCallCount = 0)
            }
            ,
            a.doTick = function() {}
            ,
            i
        }(h);
        var ge = {
            STOPPED: "STOPPED",
            STARTING: "STARTING",
            IDLE: "IDLE",
            PAUSED: "PAUSED",
            KEY_LOADING: "KEY_LOADING",
            FRAG_LOADING: "FRAG_LOADING",
            FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
            WAITING_TRACK: "WAITING_TRACK",
            PARSING: "PARSING",
            PARSED: "PARSED",
            BUFFER_FLUSHING: "BUFFER_FLUSHING",
            ENDED: "ENDED",
            ERROR: "ERROR",
            WAITING_INIT_PTS: "WAITING_INIT_PTS",
            WAITING_LEVEL: "WAITING_LEVEL"
        }
          , pe = function(e) {
            var t, r;
            function i() {
                return e.apply(this, arguments) || this
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.doTick = function() {}
            ,
            a.startLoad = function() {}
            ,
            a.stopLoad = function() {
                var e = this.fragCurrent;
                e && (e.loader && e.loader.abort(),
                this.fragmentTracker.removeFragment(e)),
                this.demuxer && (this.demuxer.destroy(),
                this.demuxer = null),
                this.fragCurrent = null,
                this.fragPrevious = null,
                this.clearInterval(),
                this.clearNextTick(),
                this.state = ge.STOPPED
            }
            ,
            a._streamEnded = function(e, t) {
                var r = this.fragCurrent
                  , i = this.fragmentTracker;
                if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
                    var a = i.getState(r);
                    return a === B || a === G
                }
                return !1
            }
            ,
            a.onMediaSeeking = function() {
                var e = this.config
                  , t = this.media
                  , r = this.mediaBuffer
                  , i = this.state
                  , a = t ? t.currentTime : null
                  , n = H.bufferInfo(r || t, a, this.config.maxBufferHole);
                if (Object(l.a)(a) && u.b.log("media seeking to " + a.toFixed(3)),
                i === ge.FRAG_LOADING) {
                    var s = this.fragCurrent;
                    if (0 === n.len && s) {
                        var o = e.maxFragLookUpTolerance
                          , d = s.start - o
                          , c = s.start + s.duration + o;
                        a < d || a > c ? (s.loader && (u.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                        s.loader.abort()),
                        this.fragCurrent = null,
                        this.fragPrevious = null,
                        this.state = ge.IDLE) : u.b.log("seeking outside of buffer but within currently loaded fragment range")
                    }
                } else
                    i === ge.ENDED && (0 === n.len && (this.fragPrevious = null,
                    this.fragCurrent = null),
                    this.state = ge.IDLE);
                t && (this.lastCurrentTime = a),
                this.loadedmetadata || (this.nextLoadPosition = this.startPosition = a),
                this.tick()
            }
            ,
            a.onMediaEnded = function() {
                this.startPosition = this.lastCurrentTime = 0
            }
            ,
            a.onHandlerDestroying = function() {
                this.stopLoad(),
                e.prototype.onHandlerDestroying.call(this)
            }
            ,
            a.onHandlerDestroyed = function() {
                this.state = ge.STOPPED,
                this.fragmentTracker = null
            }
            ,
            a.computeLivePosition = function(e, t) {
                var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                return e + Math.max(0, t.totalduration - r)
            }
            ,
            i
        }(fe);
        function ve(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var me = function(e) {
            var t, r;
            function i(t, r) {
                var i;
                return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.LEVEL_LOADED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_LOAD_EMERGENCY_ABORTED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_SWITCHED, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED) || this).fragmentTracker = r,
                i.config = t.config,
                i.audioCodecSwap = !1,
                i._state = ge.STOPPED,
                i.stallReported = !1,
                i.gapController = null,
                i.altAudio = !1,
                i
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, s, c, h = i.prototype;
            return h.startLoad = function(e) {
                if (this.levels) {
                    var t = this.lastCurrentTime
                      , r = this.hls;
                    if (this.stopLoad(),
                    this.setInterval(100),
                    this.level = -1,
                    this.fragLoadError = 0,
                    !this.startFragRequested) {
                        var i = r.startLevel;
                        -1 === i && (i = 0,
                        this.bitrateTest = !0),
                        this.level = r.nextLoadLevel = i,
                        this.loadedmetadata = !1
                    }
                    t > 0 && -1 === e && (u.b.log("override startPosition with lastCurrentTime @" + t.toFixed(3)),
                    e = t),
                    this.state = ge.IDLE,
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
                    this.tick()
                } else
                    this.forceStartLoad = !0,
                    this.state = ge.STOPPED
            }
            ,
            h.stopLoad = function() {
                this.forceStartLoad = !1,
                e.prototype.stopLoad.call(this)
            }
            ,
            h.doTick = function() {
                switch (this.state) {
                case ge.BUFFER_FLUSHING:
                    this.fragLoadError = 0;
                    break;
                case ge.IDLE:
                    this._doTickIdle();
                    break;
                case ge.WAITING_LEVEL:
                    var e = this.levels[this.level];
                    e && e.details && (this.state = ge.IDLE);
                    break;
                case ge.FRAG_LOADING_WAITING_RETRY:
                    var t = window.performance.now()
                      , r = this.retryDate;
                    (!r || t >= r || this.media && this.media.seeking) && (u.b.log("mediaController: retryDate reached, switch back to IDLE state"),
                    this.state = ge.IDLE);
                    break;
                case ge.ERROR:
                case ge.STOPPED:
                case ge.FRAG_LOADING:
                case ge.PARSING:
                case ge.PARSED:
                case ge.ENDED:
                }
                this._checkBuffer(),
                this._checkFragmentChanged()
            }
            ,
            h._doTickIdle = function() {
                var e = this.hls
                  , t = e.config
                  , r = this.media;
                if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
                    var i;
                    i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                    var a = e.nextLoadLevel
                      , n = this.levels[a];
                    if (n) {
                        var s, o = n.bitrate;
                        s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength,
                        s = Math.min(s, t.maxMaxBufferLength);
                        var l = H.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, t.maxBufferHole)
                          , c = l.len;
                        if (!(c >= s)) {
                            u.b.trace("buffer length of " + c.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."),
                            this.level = e.nextLoadLevel = a;
                            var h = n.details;
                            if (!h || h.live && this.levelLastLoaded !== a)
                                this.state = ge.WAITING_LEVEL;
                            else {
                                if (this._streamEnded(l, h)) {
                                    var f = {};
                                    return this.altAudio && (f.type = "video"),
                                    this.hls.trigger(d.a.BUFFER_EOS, f),
                                    void (this.state = ge.ENDED)
                                }
                                this._fetchPayloadOrEos(i, l, h)
                            }
                        }
                    }
                }
            }
            ,
            h._fetchPayloadOrEos = function(e, t, r) {
                var i = this.fragPrevious
                  , a = this.level
                  , n = r.fragments
                  , s = n.length;
                if (0 !== s) {
                    var o, l = n[0].start, d = n[s - 1].start + n[s - 1].duration, c = t.end;
                    if (r.initSegment && !r.initSegment.data)
                        o = r.initSegment;
                    else if (r.live) {
                        var h = this.config.initialLiveManifestSize;
                        if (s < h)
                            return void u.b.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + h);
                        if (null === (o = this._ensureFragmentAtLivePoint(r, c, l, d, i, n, s)))
                            return
                    } else
                        c < l && (o = n[0]);
                    o || (o = this._findFragment(l, i, s, n, c, d, r)),
                    o && (o.encrypted ? (u.b.log("Loading key for " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a),
                    this._loadKey(o)) : (u.b.log("Loading " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + c.toFixed(3)),
                    this._loadFragment(o)))
                }
            }
            ,
            h._ensureFragmentAtLivePoint = function(e, t, r, i, a, n, s) {
                var o, l = this.hls.config, d = this.media, c = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * e.targetduration;
                if (t < Math.max(r - l.maxFragLookUpTolerance, i - c)) {
                    var h = this.liveSyncPosition = this.computeLivePosition(r, e);
                    u.b.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)),
                    t = h,
                    d && !d.paused && d.readyState && d.duration > h && (d.currentTime = h),
                    this.nextLoadPosition = h
                }
                if (e.PTSKnown && t > i && d && d.readyState)
                    return null;
                if (this.startFragRequested && !e.PTSKnown) {
                    if (a)
                        if (e.hasProgramDateTime)
                            u.b.log("live playlist, switching playlist, load frag with same PDT: " + a.programDateTime),
                            o = le(n, a.endProgramDateTime, l.maxFragLookUpTolerance);
                        else {
                            var f = a.sn + 1;
                            if (f >= e.startSN && f <= e.endSN) {
                                var g = n[f - e.startSN];
                                a.cc === g.cc && (o = g,
                                u.b.log("live playlist, switching playlist, load frag with next SN: " + o.sn))
                            }
                            o || (o = j.search(n, function(e) {
                                return a.cc - e.cc
                            })) && u.b.log("live playlist, switching playlist, load frag with same CC: " + o.sn)
                        }
                    o || (o = n[Math.min(s - 1, Math.round(s / 2))],
                    u.b.log("live playlist, switching playlist, unknown, load middle frag : " + o.sn))
                }
                return o
            }
            ,
            h._findFragment = function(e, t, r, i, a, n, s) {
                var o, l = this.hls.config;
                a < n ? o = de(t, i, a, a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : o = i[r - 1];
                if (o) {
                    var d = o.sn - s.startSN
                      , c = t && o.level === t.level
                      , h = i[d - 1]
                      , f = i[d + 1];
                    if (t && o.sn === t.sn)
                        if (c && !o.backtracked)
                            if (o.sn < s.endSN) {
                                var g = t.deltaPTS;
                                g && g > l.maxBufferHole && t.dropped && d ? (o = h,
                                u.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f,
                                u.b.log("Re-loading fragment with SN: " + o.sn))
                            } else
                                o = null;
                        else
                            o.backtracked && (f && f.backtracked ? (u.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn),
                            o = f) : (u.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),
                            o.dropped = 0,
                            h ? (o = h).backtracked = !0 : d && (o = null)))
                }
                return o
            }
            ,
            h._loadKey = function(e) {
                this.state = ge.KEY_LOADING,
                this.hls.trigger(d.a.KEY_LOADING, {
                    frag: e
                })
            }
            ,
            h._loadFragment = function(e) {
                var t = this.fragmentTracker.getState(e);
                this.fragCurrent = e,
                "initSegment" !== e.sn && (this.startFragRequested = !0),
                Object(l.a)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
                e.backtracked || t === N || t === B ? (e.autoLevel = this.hls.autoLevelEnabled,
                e.bitrateTest = this.bitrateTest,
                this.hls.trigger(d.a.FRAG_LOADING, {
                    frag: e
                }),
                this.demuxer || (this.demuxer = new J(this.hls,"main")),
                this.state = ge.FRAG_LOADING) : t === U && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
            }
            ,
            h.getBufferedFrag = function(e) {
                return this.fragmentTracker.getBufferedFrag(e, n.MAIN)
            }
            ,
            h.followingBufferedFrag = function(e) {
                return e ? this.getBufferedFrag(e.endPTS + .5) : null
            }
            ,
            h._checkFragmentChanged = function() {
                var e, t, r = this.media;
                if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t),
                H.isBuffered(r, t) ? e = this.getBufferedFrag(t) : H.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)),
                e)) {
                    var i = e;
                    if (i !== this.fragPlaying) {
                        this.hls.trigger(d.a.FRAG_CHANGED, {
                            frag: i
                        });
                        var a = i.level;
                        this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(d.a.LEVEL_SWITCHED, {
                            level: a
                        }),
                        this.fragPlaying = i
                    }
                }
            }
            ,
            h.immediateLevelSwitch = function() {
                if (u.b.log("immediateLevelSwitch"),
                !this.immediateSwitch) {
                    this.immediateSwitch = !0;
                    var e, t = this.media;
                    t ? (e = t.paused,
                    t.pause()) : e = !0,
                    this.previouslyPaused = e
                }
                var r = this.fragCurrent;
                r && r.loader && r.loader.abort(),
                this.fragCurrent = null,
                this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
            }
            ,
            h.immediateLevelSwitchEnd = function() {
                var e = this.media;
                e && e.buffered.length && (this.immediateSwitch = !1,
                H.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4),
                this.previouslyPaused || e.play())
            }
            ,
            h.nextLevelSwitch = function() {
                var e = this.media;
                if (e && e.readyState) {
                    var t, r, i;
                    if ((r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1),
                    e.paused)
                        t = 0;
                    else {
                        var a = this.hls.nextLoadLevel
                          , n = this.levels[a]
                          , s = this.fragLastKbps;
                        t = s && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * s) + 1 : 0
                    }
                    if ((i = this.getBufferedFrag(e.currentTime + t)) && (i = this.followingBufferedFrag(i))) {
                        var o = this.fragCurrent;
                        o && o.loader && o.loader.abort(),
                        this.fragCurrent = null,
                        this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
                    }
                }
            }
            ,
            h.flushMainBuffer = function(e, t) {
                this.state = ge.BUFFER_FLUSHING;
                var r = {
                    startOffset: e,
                    endOffset: t
                };
                this.altAudio && (r.type = "video"),
                this.hls.trigger(d.a.BUFFER_FLUSHING, r)
            }
            ,
            h.onMediaAttached = function(e) {
                var t = this.media = this.mediaBuffer = e.media;
                this.onvseeking = this.onMediaSeeking.bind(this),
                this.onvseeked = this.onMediaSeeked.bind(this),
                this.onvended = this.onMediaEnded.bind(this),
                t.addEventListener("seeking", this.onvseeking),
                t.addEventListener("seeked", this.onvseeked),
                t.addEventListener("ended", this.onvended);
                var r = this.config;
                this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition),
                this.gapController = new he(r,t,this.fragmentTracker,this.hls)
            }
            ,
            h.onMediaDetaching = function() {
                var e = this.media;
                e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"),
                this.startPosition = this.lastCurrentTime = 0);
                var t = this.levels;
                t && t.forEach(function(e) {
                    e.details && e.details.fragments.forEach(function(e) {
                        e.backtracked = void 0
                    })
                }),
                e && (e.removeEventListener("seeking", this.onvseeking),
                e.removeEventListener("seeked", this.onvseeked),
                e.removeEventListener("ended", this.onvended),
                this.onvseeking = this.onvseeked = this.onvended = null),
                this.fragmentTracker.removeAllFragments(),
                this.media = this.mediaBuffer = null,
                this.loadedmetadata = !1,
                this.stopLoad()
            }
            ,
            h.onMediaSeeked = function() {
                var e = this.media
                  , t = e ? e.currentTime : void 0;
                Object(l.a)(t) && u.b.log("media seeked to " + t.toFixed(3)),
                this.tick()
            }
            ,
            h.onManifestLoading = function() {
                u.b.log("trigger BUFFER_RESET"),
                this.hls.trigger(d.a.BUFFER_RESET),
                this.fragmentTracker.removeAllFragments(),
                this.stalled = !1,
                this.startPosition = this.lastCurrentTime = 0
            }
            ,
            h.onManifestParsed = function(e) {
                var t, r = !1, i = !1;
                e.levels.forEach(function(e) {
                    (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0),
                    -1 !== t.indexOf("mp4a.40.5") && (i = !0))
                }),
                this.audioCodecSwitch = r && i,
                this.audioCodecSwitch && u.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                this.altAudio = e.altAudio,
                this.levels = e.levels,
                this.startFragRequested = !1;
                var a = this.config;
                (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
            }
            ,
            h.onLevelLoaded = function(e) {
                var t = e.details
                  , r = e.level
                  , i = this.levels[this.levelLastLoaded]
                  , a = this.levels[r]
                  , n = t.totalduration
                  , s = 0;
                if (u.b.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n),
                t.live) {
                    var o = a.details;
                    o && t.fragments.length > 0 ? (re(o, t),
                    s = t.fragments[0].start,
                    this.liveSyncPosition = this.computeLivePosition(s, o),
                    t.PTSKnown && Object(l.a)(s) ? u.b.log("live playlist sliding:" + s.toFixed(3)) : (u.b.log("live playlist - outdated PTS, unknown sliding"),
                    oe(this.fragPrevious, i, t))) : (u.b.log("live playlist - first load, unknown sliding"),
                    t.PTSKnown = !1,
                    oe(this.fragPrevious, i, t))
                } else
                    t.PTSKnown = !1;
                if (a.details = t,
                this.levelLastLoaded = r,
                this.hls.trigger(d.a.LEVEL_UPDATED, {
                    details: t,
                    level: r
                }),
                !1 === this.startFragRequested) {
                    if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                        var c = t.startTimeOffset;
                        Object(l.a)(c) ? (c < 0 && (u.b.log("negative start time offset " + c + ", count from end of last fragment"),
                        c = s + n + c),
                        u.b.log("start time offset found in playlist, adjust startPosition to " + c),
                        this.startPosition = c) : t.live ? (this.startPosition = this.computeLivePosition(s, t),
                        u.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
                        this.lastCurrentTime = this.startPosition
                    }
                    this.nextLoadPosition = this.startPosition
                }
                this.state === ge.WAITING_LEVEL && (this.state = ge.IDLE),
                this.tick()
            }
            ,
            h.onKeyLoaded = function() {
                this.state === ge.KEY_LOADING && (this.state = ge.IDLE,
                this.tick())
            }
            ,
            h.onFragLoaded = function(e) {
                var t = this.fragCurrent
                  , r = this.hls
                  , i = this.levels
                  , a = this.media
                  , n = e.frag;
                if (this.state === ge.FRAG_LOADING && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
                    var s = e.stats
                      , o = i[t.level]
                      , l = o.details;
                    if (this.bitrateTest = !1,
                    this.stats = s,
                    u.b.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level),
                    n.bitrateTest && r.nextLoadLevel)
                        this.state = ge.IDLE,
                        this.startFragRequested = !1,
                        s.tparsed = s.tbuffered = window.performance.now(),
                        r.trigger(d.a.FRAG_BUFFERED, {
                            stats: s,
                            frag: t,
                            id: "main"
                        }),
                        this.tick();
                    else if ("initSegment" === n.sn)
                        this.state = ge.IDLE,
                        s.tparsed = s.tbuffered = window.performance.now(),
                        l.initSegment.data = e.payload,
                        r.trigger(d.a.FRAG_BUFFERED, {
                            stats: s,
                            frag: t,
                            id: "main"
                        }),
                        this.tick();
                    else {
                        u.b.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc),
                        this.state = ge.PARSING,
                        this.pendingBuffering = !0,
                        this.appended = !1,
                        n.bitrateTest && (n.bitrateTest = !1,
                        this.fragmentTracker.onFragLoaded({
                            frag: n
                        }));
                        var c = !(a && a.seeking) && (l.PTSKnown || !l.live)
                          , h = l.initSegment ? l.initSegment.data : []
                          , f = this._getAudioCodec(o);
                        (this.demuxer = this.demuxer || new J(this.hls,"main")).push(e.payload, h, f, o.videoCodec, t, l.totalduration, c)
                    }
                }
                this.fragLoadError = 0
            }
            ,
            h.onFragParsingInitSegment = function(e) {
                var t = this.fragCurrent
                  , r = e.frag;
                if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === ge.PARSING) {
                    var i, a, n = e.tracks;
                    if (n.audio && this.altAudio && delete n.audio,
                    a = n.audio) {
                        var s = this.levels[this.level].audioCodec
                          , o = navigator.userAgent.toLowerCase();
                        s && this.audioCodecSwap && (u.b.log("swapping playlist audio codec"),
                        s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                        this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"),
                        -1 !== o.indexOf("android") && "audio/mpeg" !== a.container && (s = "mp4a.40.2",
                        u.b.log("Android: force audio codec to " + s)),
                        a.levelCodec = s,
                        a.id = e.id
                    }
                    for (i in (a = n.video) && (a.levelCodec = this.levels[this.level].videoCodec,
                    a.id = e.id),
                    this.hls.trigger(d.a.BUFFER_CODECS, n),
                    n) {
                        a = n[i],
                        u.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                        var l = a.initSegment;
                        l && (this.appended = !0,
                        this.pendingBuffering = !0,
                        this.hls.trigger(d.a.BUFFER_APPENDING, {
                            type: i,
                            data: l,
                            parent: "main",
                            content: "initSegment"
                        }))
                    }
                    this.tick()
                }
            }
            ,
            h.onFragParsingData = function(e) {
                var t = this
                  , r = this.fragCurrent
                  , i = e.frag;
                if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === ge.PARSING) {
                    var a = this.levels[this.level]
                      , n = r;
                    if (Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration,
                    e.endDTS = e.startDTS + r.duration),
                    !0 === e.hasAudio && n.addElementaryStream(p.AUDIO),
                    !0 === e.hasVideo && n.addElementaryStream(p.VIDEO),
                    u.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)),
                    "video" === e.type)
                        if (n.dropped = e.dropped,
                        n.dropped)
                            if (n.backtracked)
                                u.b.warn("Already backtracked on this fragment, appending with the gap", n.sn);
                            else {
                                var s = a.details;
                                if (!s || n.sn !== s.startSN)
                                    return u.b.warn("missing video frame(s), backtracking fragment", n.sn),
                                    this.fragmentTracker.removeFragment(n),
                                    n.backtracked = !0,
                                    this.nextLoadPosition = e.startPTS,
                                    this.state = ge.IDLE,
                                    this.fragPrevious = n,
                                    void this.tick();
                                u.b.warn("missing video frame(s) on first frag, appending with gap", n.sn)
                            }
                        else
                            n.backtracked = !1;
                    var o = te(a.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS)
                      , c = this.hls;
                    c.trigger(d.a.LEVEL_PTS_UPDATED, {
                        details: a.details,
                        level: this.level,
                        drift: o,
                        type: e.type,
                        start: e.startPTS,
                        end: e.endPTS
                    }),
                    [e.data1, e.data2].forEach(function(r) {
                        r && r.length && t.state === ge.PARSING && (t.appended = !0,
                        t.pendingBuffering = !0,
                        c.trigger(d.a.BUFFER_APPENDING, {
                            type: e.type,
                            data: r,
                            parent: "main",
                            content: "data"
                        }))
                    }),
                    this.tick()
                }
            }
            ,
            h.onFragParsed = function(e) {
                var t = this.fragCurrent
                  , r = e.frag;
                t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === ge.PARSING && (this.stats.tparsed = window.performance.now(),
                this.state = ge.PARSED,
                this._checkAppendedParsed())
            }
            ,
            h.onAudioTrackSwitching = function(e) {
                var t = !!e.url
                  , r = e.id;
                if (!t) {
                    if (this.mediaBuffer !== this.media) {
                        u.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                        this.mediaBuffer = this.media;
                        var i = this.fragCurrent;
                        i.loader && (u.b.log("switching to main audio track, cancel main fragment load"),
                        i.loader.abort()),
                        this.fragCurrent = null,
                        this.fragPrevious = null,
                        this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        this.state = ge.IDLE
                    }
                    var a = this.hls;
                    a.trigger(d.a.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio"
                    }),
                    a.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                        id: r
                    }),
                    this.altAudio = !1
                }
            }
            ,
            h.onAudioTrackSwitched = function(e) {
                var t = e.id
                  , r = !!this.hls.audioTracks[t].url;
                if (r) {
                    var i = this.videoBuffer;
                    i && this.mediaBuffer !== i && (u.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),
                    this.mediaBuffer = i)
                }
                this.altAudio = r,
                this.tick()
            }
            ,
            h.onBufferCreated = function(e) {
                var t, r, i = e.tracks, a = !1;
                for (var n in i) {
                    var s = i[n];
                    "main" === s.id ? (r = n,
                    t = s,
                    "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0
                }
                a && t ? (u.b.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"),
                this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
            }
            ,
            h.onBufferAppended = function(e) {
                if ("main" === e.parent) {
                    var t = this.state;
                    t !== ge.PARSING && t !== ge.PARSED || (this.pendingBuffering = e.pending > 0,
                    this._checkAppendedParsed())
                }
            }
            ,
            h._checkAppendedParsed = function() {
                if (!(this.state !== ge.PARSED || this.appended && this.pendingBuffering)) {
                    var e = this.fragCurrent;
                    if (e) {
                        var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                        u.b.log("main buffered : " + ne.toString(t.buffered)),
                        this.fragPrevious = e;
                        var r = this.stats;
                        r.tbuffered = window.performance.now(),
                        this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
                        this.hls.trigger(d.a.FRAG_BUFFERED, {
                            stats: r,
                            frag: e,
                            id: "main"
                        }),
                        this.state = ge.IDLE
                    }
                    this.tick()
                }
            }
            ,
            h.onError = function(e) {
                var t = e.frag || this.fragCurrent;
                if (!t || "main" === t.type) {
                    var r = !!this.media && H.isBuffered(this.media, this.media.currentTime) && H.isBuffered(this.media, this.media.currentTime + .5);
                    switch (e.details) {
                    case o.a.FRAG_LOAD_ERROR:
                    case o.a.FRAG_LOAD_TIMEOUT:
                    case o.a.KEY_LOAD_ERROR:
                    case o.a.KEY_LOAD_TIMEOUT:
                        if (!e.fatal)
                            if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                u.b.warn("mediaController: frag loading failed, retry in " + i + " ms"),
                                this.retryDate = window.performance.now() + i,
                                this.loadedmetadata || (this.startFragRequested = !1,
                                this.nextLoadPosition = this.startPosition),
                                this.fragLoadError++,
                                this.state = ge.FRAG_LOADING_WAITING_RETRY
                            } else
                                u.b.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."),
                                e.fatal = !0,
                                this.state = ge.ERROR;
                        break;
                    case o.a.LEVEL_LOAD_ERROR:
                    case o.a.LEVEL_LOAD_TIMEOUT:
                        this.state !== ge.ERROR && (e.fatal ? (this.state = ge.ERROR,
                        u.b.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== ge.WAITING_LEVEL || (this.state = ge.IDLE));
                        break;
                    case o.a.BUFFER_FULL_ERROR:
                        "main" !== e.parent || this.state !== ge.PARSING && this.state !== ge.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength),
                        this.state = ge.IDLE) : (u.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),
                        this.fragCurrent = null,
                        this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                    }
                }
            }
            ,
            h._reduceMaxBufferLength = function(e) {
                var t = this.config;
                return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2,
                u.b.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"),
                !0)
            }
            ,
            h._checkBuffer = function() {
                var e = this.media;
                if (e && 0 !== e.readyState) {
                    var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
                    !this.loadedmetadata && t.length ? (this.loadedmetadata = !0,
                    this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
                }
            }
            ,
            h.onFragLoadEmergencyAborted = function() {
                this.state = ge.IDLE,
                this.loadedmetadata || (this.startFragRequested = !1,
                this.nextLoadPosition = this.startPosition),
                this.tick()
            }
            ,
            h.onBufferFlushed = function() {
                var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                e && this.fragmentTracker.detectEvictedFragments(p.VIDEO, e.buffered),
                this.state = ge.IDLE,
                this.fragPrevious = null
            }
            ,
            h.swapAudioCodec = function() {
                this.audioCodecSwap = !this.audioCodecSwap
            }
            ,
            h._seekToStartPos = function() {
                var e = this.media
                  , t = e.currentTime
                  , r = e.seeking ? t : this.startPosition;
                t !== r && r >= 0 && (u.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "),
                e.currentTime = r)
            }
            ,
            h._getAudioCodec = function(e) {
                var t = this.config.defaultAudioCodec || e.audioCodec;
                return this.audioCodecSwap && (u.b.log("swapping playlist audio codec"),
                t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
                t
            }
            ,
            a = i,
            (s = [{
                key: "state",
                set: function(e) {
                    if (this.state !== e) {
                        var t = this.state;
                        this._state = e,
                        u.b.log("main stream-controller: " + t + "->" + e),
                        this.hls.trigger(d.a.STREAM_STATE_TRANSITION, {
                            previousState: t,
                            nextState: e
                        })
                    }
                },
                get: function() {
                    return this._state
                }
            }, {
                key: "currentLevel",
                get: function() {
                    var e = this.media;
                    if (e) {
                        var t = this.getBufferedFrag(e.currentTime);
                        if (t)
                            return t.level
                    }
                    return -1
                }
            }, {
                key: "nextBufferedFrag",
                get: function() {
                    var e = this.media;
                    return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                }
            }, {
                key: "nextLevel",
                get: function() {
                    var e = this.nextBufferedFrag;
                    return e ? e.level : -1
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this._liveSyncPosition
                },
                set: function(e) {
                    this._liveSyncPosition = e
                }
            }]) && ve(a.prototype, s),
            c && ve(a, c),
            i
        }(pe);
        function ye(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        window.performance;
        var be, Ee = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MANIFEST_LOADED, d.a.LEVEL_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.FRAG_LOADED, d.a.ERROR) || this).canload = !1,
                r.currentLevelIndex = null,
                r.manualLevelIndex = -1,
                r.timer = null,
                be = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, l = i.prototype;
            return l.onHandlerDestroying = function() {
                this.clearTimer(),
                this.manualLevelIndex = -1
            }
            ,
            l.clearTimer = function() {
                null !== this.timer && (clearTimeout(this.timer),
                this.timer = null)
            }
            ,
            l.startLoad = function() {
                var e = this._levels;
                this.canload = !0,
                this.levelRetryCount = 0,
                e && e.forEach(function(e) {
                    e.loadError = 0;
                    var t = e.details;
                    t && t.live && (e.details = void 0)
                }),
                null !== this.timer && this.loadLevel()
            }
            ,
            l.stopLoad = function() {
                this.canload = !1
            }
            ,
            l.onManifestLoaded = function(e) {
                var t, r = [], i = [], a = {}, n = null, s = !1, l = !1;
                if (e.levels.forEach(function(e) {
                    var t = e.attrs;
                    e.loadError = 0,
                    e.fragmentError = !1,
                    s = s || !!e.videoCodec,
                    l = l || !!e.audioCodec,
                    be && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0),
                    (n = a[e.bitrate]) ? n.url.push(e.url) : (e.url = [e.url],
                    e.urlId = 0,
                    a[e.bitrate] = e,
                    r.push(e)),
                    t && (t.AUDIO && (l = !0,
                    Z(n || e, "audio", t.AUDIO)),
                    t.SUBTITLES && Z(n || e, "text", t.SUBTITLES))
                }),
                s && l && (r = r.filter(function(e) {
                    return !!e.videoCodec
                })),
                r = r.filter(function(e) {
                    var t = e.audioCodec
                      , r = e.videoCodec;
                    return (!t || R(t, "audio")) && (!r || R(r, "video"))
                }),
                e.audioTracks && (i = e.audioTracks.filter(function(e) {
                    return !e.audioCodec || R(e.audioCodec, "audio")
                })).forEach(function(e, t) {
                    e.id = t
                }),
                r.length > 0) {
                    t = r[0].bitrate,
                    r.sort(function(e, t) {
                        return e.bitrate - t.bitrate
                    }),
                    this._levels = r;
                    for (var c = 0; c < r.length; c++)
                        if (r[c].bitrate === t) {
                            this._firstLevel = c,
                            u.b.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                            break
                        }
                    this.hls.trigger(d.a.MANIFEST_PARSED, {
                        levels: r,
                        audioTracks: i,
                        firstLevel: this._firstLevel,
                        stats: e.stats,
                        audio: l,
                        video: s,
                        altAudio: i.some(function(e) {
                            return !!e.url
                        })
                    })
                } else
                    this.hls.trigger(d.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: this.hls.url,
                        reason: "no level with compatible codecs found in manifest"
                    })
            }
            ,
            l.setLevelInternal = function(e) {
                var t = this._levels
                  , r = this.hls;
                if (e >= 0 && e < t.length) {
                    if (this.clearTimer(),
                    this.currentLevelIndex !== e) {
                        u.b.log("switching to level " + e),
                        this.currentLevelIndex = e;
                        var i = t[e];
                        i.level = e,
                        r.trigger(d.a.LEVEL_SWITCHING, i)
                    }
                    var a = t[e]
                      , n = a.details;
                    if (!n || n.live) {
                        var s = a.urlId;
                        r.trigger(d.a.LEVEL_LOADING, {
                            url: a.url[s],
                            level: e,
                            id: s
                        })
                    }
                } else
                    r.trigger(d.a.ERROR, {
                        type: o.b.OTHER_ERROR,
                        details: o.a.LEVEL_SWITCH_ERROR,
                        level: e,
                        fatal: !1,
                        reason: "invalid level idx"
                    })
            }
            ,
            l.onError = function(e) {
                if (e.fatal)
                    e.type === o.b.NETWORK_ERROR && this.clearTimer();
                else {
                    var t, r = !1, i = !1;
                    switch (e.details) {
                    case o.a.FRAG_LOAD_ERROR:
                    case o.a.FRAG_LOAD_TIMEOUT:
                    case o.a.KEY_LOAD_ERROR:
                    case o.a.KEY_LOAD_TIMEOUT:
                        t = e.frag.level,
                        i = !0;
                        break;
                    case o.a.LEVEL_LOAD_ERROR:
                    case o.a.LEVEL_LOAD_TIMEOUT:
                        t = e.context.level,
                        r = !0;
                        break;
                    case o.a.REMUX_ALLOC_ERROR:
                        t = e.level,
                        r = !0
                    }
                    void 0 !== t && this.recoverLevel(e, t, r, i)
                }
            }
            ,
            l.recoverLevel = function(e, t, r, i) {
                var a, n, s, o = this, l = this.hls.config, d = e.details, c = this._levels[t];
                if (c.loadError++,
                c.fragmentError = i,
                r) {
                    if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry))
                        return u.b.error("level controller, cannot recover from " + d + " error"),
                        this.currentLevelIndex = null,
                        this.clearTimer(),
                        void (e.fatal = !0);
                    n = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout),
                    this.timer = setTimeout(function() {
                        return o.loadLevel()
                    }, n),
                    e.levelRetry = !0,
                    this.levelRetryCount++,
                    u.b.warn("level controller, " + d + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
                }
                (r || i) && ((a = c.url.length) > 1 && c.loadError < a ? (c.urlId = (c.urlId + 1) % a,
                c.details = void 0,
                u.b.warn("level controller, " + d + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1,
                u.b.warn("level controller, " + d + ": switch to " + s),
                this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (u.b.warn("level controller, " + d + ": reload a fragment"),
                this.currentLevelIndex = null))
            }
            ,
            l.onFragLoaded = function(e) {
                var t = e.frag;
                if (void 0 !== t && "main" === t.type) {
                    var r = this._levels[t.level];
                    void 0 !== r && (r.fragmentError = !1,
                    r.loadError = 0,
                    this.levelRetryCount = 0)
                }
            }
            ,
            l.onLevelLoaded = function(e) {
                var t = this
                  , r = e.level
                  , i = e.details;
                if (r === this.currentLevelIndex) {
                    var a = this._levels[r];
                    if (a.fragmentError || (a.loadError = 0,
                    this.levelRetryCount = 0),
                    i.live) {
                        var n = ae(a.details, i, e.stats.trequest);
                        u.b.log("live playlist, reload in " + Math.round(n) + " ms"),
                        this.timer = setTimeout(function() {
                            return t.loadLevel()
                        }, n)
                    } else
                        this.clearTimer()
                }
            }
            ,
            l.onAudioTrackSwitched = function(e) {
                var t = this.hls.audioTracks[e.id].groupId
                  , r = this.hls.levels[this.currentLevelIndex];
                if (r && r.audioGroupIds) {
                    for (var i = -1, a = 0; a < r.audioGroupIds.length; a++)
                        if (r.audioGroupIds[a] === t) {
                            i = a;
                            break
                        }
                    i !== r.urlId && (r.urlId = i,
                    this.startLoad())
                }
            }
            ,
            l.loadLevel = function() {
                if (u.b.debug("call to loadLevel"),
                null !== this.currentLevelIndex && this.canload) {
                    var e = this._levels[this.currentLevelIndex];
                    if ("object" == typeof e && e.url.length > 0) {
                        var t = this.currentLevelIndex
                          , r = e.urlId
                          , i = e.url[r];
                        u.b.log("Attempt loading level index " + t + " with URL-id " + r),
                        this.hls.trigger(d.a.LEVEL_LOADING, {
                            url: i,
                            level: t,
                            id: r
                        })
                    }
                }
            }
            ,
            a = i,
            (n = [{
                key: "levels",
                get: function() {
                    return this._levels
                }
            }, {
                key: "level",
                get: function() {
                    return this.currentLevelIndex
                },
                set: function(e) {
                    var t = this._levels;
                    t && (e = Math.min(e, t.length - 1),
                    this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.manualLevelIndex
                },
                set: function(e) {
                    this.manualLevelIndex = e,
                    void 0 === this._startLevel && (this._startLevel = e),
                    -1 !== e && (this.level = e)
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return this._firstLevel
                },
                set: function(e) {
                    this._firstLevel = e
                }
            }, {
                key: "startLevel",
                get: function() {
                    if (void 0 === this._startLevel) {
                        var e = this.hls.config.startLevel;
                        return void 0 !== e ? e : this._firstLevel
                    }
                    return this._startLevel
                },
                set: function(e) {
                    this._startLevel = e
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                },
                set: function(e) {
                    this.level = e,
                    -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                }
            }]) && ye(a.prototype, n),
            s && ye(a, s),
            i
        }(h), Te = r(4);
        function Se(e, t) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (e) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = e,
            t.dispatchEvent(r)
        }
        function _e(e) {
            if (e && e.cues)
                for (; e.cues.length > 0; )
                    e.removeCue(e.cues[0])
        }
        var Ae = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_METADATA, d.a.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0,
                r.media = void 0,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                h.prototype.destroy.call(this)
            }
            ,
            a.onMediaAttached = function(e) {
                this.media = e.media,
                this.media
            }
            ,
            a.onMediaDetaching = function() {
                _e(this.id3Track),
                this.id3Track = void 0,
                this.media = void 0
            }
            ,
            a.getID3Track = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    if ("metadata" === r.kind && "id3" === r.label)
                        return Se(r, this.media),
                        r
                }
                return this.media.addTextTrack("metadata", "id3")
            }
            ,
            a.onFragParsingMetadata = function(e) {
                var t = e.frag
                  , r = e.samples;
                this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks),
                this.id3Track.mode = "hidden");
                for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, a = 0; a < r.length; a++) {
                    var n = Te.a.getID3Frames(r[a].data);
                    if (n) {
                        var s = r[a].pts
                          , o = a < r.length - 1 ? r[a + 1].pts : t.endPTS;
                        s === o ? o += 1e-4 : s > o && (u.b.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"),
                        o = s + .25);
                        for (var l = 0; l < n.length; l++) {
                            var d = n[l];
                            if (!Te.a.isTimeStampFrame(d)) {
                                var c = new i(s,o,"");
                                c.value = d,
                                this.id3Track.addCue(c)
                            }
                        }
                    }
                }
            }
            ,
            a.onLiveBackBufferReached = function(e) {
                var t = e.bufferEnd
                  , r = this.id3Track;
                if (r && r.cues && r.cues.length) {
                    var i = function(e, t) {
                        if (t < e[0].endTime)
                            return e[0];
                        if (t > e[e.length - 1].endTime)
                            return e[e.length - 1];
                        for (var r = 0, i = e.length - 1; r <= i; ) {
                            var a = Math.floor((i + r) / 2);
                            if (t < e[a].endTime)
                                i = a - 1;
                            else {
                                if (!(t > e[a].endTime))
                                    return e[a];
                                r = a + 1
                            }
                        }
                        return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i]
                    }(r.cues, t);
                    if (i)
                        for (; r.cues[0] !== i; )
                            r.removeCue(r.cues[0])
                }
            }
            ,
            i
        }(h);
        var Re = function() {
            function e(e) {
                this.alpha_ = void 0,
                this.estimate_ = void 0,
                this.totalWeight_ = void 0,
                this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
                this.estimate_ = 0,
                this.totalWeight_ = 0
            }
            var t = e.prototype;
            return t.sample = function(e, t) {
                var r = Math.pow(this.alpha_, e);
                this.estimate_ = t * (1 - r) + r * this.estimate_,
                this.totalWeight_ += e
            }
            ,
            t.getTotalWeight = function() {
                return this.totalWeight_
            }
            ,
            t.getEstimate = function() {
                if (this.alpha_) {
                    var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    return this.estimate_ / e
                }
                return this.estimate_
            }
            ,
            e
        }()
          , Le = function() {
            function e(e, t, r, i) {
                this.hls = void 0,
                this.defaultEstimate_ = void 0,
                this.minWeight_ = void 0,
                this.minDelayMs_ = void 0,
                this.slow_ = void 0,
                this.fast_ = void 0,
                this.hls = e,
                this.defaultEstimate_ = i,
                this.minWeight_ = .001,
                this.minDelayMs_ = 50,
                this.slow_ = new Re(t),
                this.fast_ = new Re(r)
            }
            var t = e.prototype;
            return t.sample = function(e, t) {
                var r = (e = Math.max(e, this.minDelayMs_)) / 1e3
                  , i = 8 * t / r;
                this.fast_.sample(r, i),
                this.slow_.sample(r, i)
            }
            ,
            t.canEstimate = function() {
                var e = this.fast_;
                return e && e.getTotalWeight() >= this.minWeight_
            }
            ,
            t.getEstimate = function() {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
            }
            ,
            t.destroy = function() {}
            ,
            e
        }();
        function De(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var we = window.performance
          , ke = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.FRAG_LOADING, d.a.FRAG_LOADED, d.a.FRAG_BUFFERED, d.a.ERROR) || this).lastLoadedFragLevel = 0,
                r._nextAutoLevel = -1,
                r.hls = t,
                r.timer = null,
                r._bwEstimator = null,
                r.onCheck = r._abandonRulesCheck.bind(function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(r)),
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, c = i.prototype;
            return c.destroy = function() {
                this.clearTimer(),
                h.prototype.destroy.call(this)
            }
            ,
            c.onFragLoading = function(e) {
                var t = e.frag;
                if ("main" === t.type && (this.timer || (this.fragCurrent = t,
                this.timer = setInterval(this.onCheck, 100)),
                !this._bwEstimator)) {
                    var r, i, a = this.hls, n = a.config, s = t.level;
                    a.levels[s].details.live ? (r = n.abrEwmaFastLive,
                    i = n.abrEwmaSlowLive) : (r = n.abrEwmaFastVoD,
                    i = n.abrEwmaSlowVoD),
                    this._bwEstimator = new Le(a,i,r,n.abrEwmaDefaultEstimate)
                }
            }
            ,
            c._abandonRulesCheck = function() {
                var e = this.hls
                  , t = e.media
                  , r = this.fragCurrent;
                if (r) {
                    var i = r.loader
                      , a = e.minAutoLevel;
                    if (!i || i.stats && i.stats.aborted)
                        return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),
                        this.clearTimer(),
                        void (this._nextAutoLevel = -1);
                    var n = i.stats;
                    if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                        var s = we.now() - n.trequest
                          , o = Math.abs(t.playbackRate);
                        if (s > 500 * r.duration / o) {
                            var l = e.levels
                              , c = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / s)
                              , h = l[r.level]
                              , f = h.realBitrate ? Math.max(h.realBitrate, h.bitrate) : h.bitrate
                              , g = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * f / 8))
                              , p = t.currentTime
                              , v = (g - n.loaded) / c
                              , m = (H.bufferInfo(t, p, e.config.maxBufferHole).end - p) / o;
                            if (m < 2 * r.duration / o && v > m) {
                                var y;
                                for (y = r.level - 1; y > a; y--) {
                                    var b = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
                                    if (r.duration * b / (6.4 * c) < m)
                                        break
                                }
                                void 0 < v && (u.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + v.toFixed(1) + ":" + m.toFixed(1)),
                                e.nextLoadLevel = y,
                                this._bwEstimator.sample(s, n.loaded),
                                i.abort(),
                                this.clearTimer(),
                                e.trigger(d.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                    frag: r,
                                    stats: n
                                }))
                            }
                        }
                    }
                }
            }
            ,
            c.onFragLoaded = function(e) {
                var t = e.frag;
                if ("main" === t.type && Object(l.a)(t.sn)) {
                    if (this.clearTimer(),
                    this.lastLoadedFragLevel = t.level,
                    this._nextAutoLevel = -1,
                    this.hls.config.abrMaxWithRealBitrate) {
                        var r = this.hls.levels[t.level]
                          , i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded
                          , a = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                        r.loaded = {
                            bytes: i,
                            duration: a
                        },
                        r.realBitrate = Math.round(8 * i / a)
                    }
                    if (e.frag.bitrateTest) {
                        var n = e.stats;
                        n.tparsed = n.tbuffered = n.tload,
                        this.onFragBuffered(e)
                    }
                }
            }
            ,
            c.onFragBuffered = function(e) {
                var t = e.stats
                  , r = e.frag;
                if (!0 !== t.aborted && "main" === r.type && Object(l.a)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
                    var i = t.tparsed - t.trequest;
                    u.b.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))),
                    this._bwEstimator.sample(i, t.loaded),
                    t.bwEstimate = this._bwEstimator.getEstimate(),
                    r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                }
            }
            ,
            c.onError = function(e) {
                switch (e.details) {
                case o.a.FRAG_LOAD_ERROR:
                case o.a.FRAG_LOAD_TIMEOUT:
                    this.clearTimer()
                }
            }
            ,
            c.clearTimer = function() {
                clearInterval(this.timer),
                this.timer = null
            }
            ,
            c._findBestLevel = function(e, t, r, i, a, n, s, o, l) {
                for (var d = a; d >= i; d--) {
                    var c = l[d];
                    if (c) {
                        var h = c.details
                          , f = h ? h.totalduration / h.fragments.length : t
                          , g = !!h && h.live
                          , p = void 0;
                        p = d <= e ? s * r : o * r;
                        var v = l[d].realBitrate ? Math.max(l[d].realBitrate, l[d].bitrate) : l[d].bitrate
                          , m = v * f / p;
                        if (u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(p) + "/" + v + "/" + f + "/" + n + "/" + m),
                        p > v && (!m || g && !this.bitrateTestDelay || m < n))
                            return d
                    }
                }
                return -1
            }
            ,
            a = i,
            (n = [{
                key: "nextAutoLevel",
                get: function() {
                    var e = this._nextAutoLevel
                      , t = this._bwEstimator;
                    if (!(-1 === e || t && t.canEstimate()))
                        return e;
                    var r = this._nextABRAutoLevel;
                    return -1 !== e && (r = Math.min(e, r)),
                    r
                },
                set: function(e) {
                    this._nextAutoLevel = e
                }
            }, {
                key: "_nextABRAutoLevel",
                get: function() {
                    var e = this.hls
                      , t = e.maxAutoLevel
                      , r = e.levels
                      , i = e.config
                      , a = e.minAutoLevel
                      , n = e.media
                      , s = this.lastLoadedFragLevel
                      , o = this.fragCurrent ? this.fragCurrent.duration : 0
                      , l = n ? n.currentTime : 0
                      , d = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1
                      , c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate
                      , h = (H.bufferInfo(n, l, i.maxBufferHole).end - l) / d
                      , f = this._findBestLevel(s, o, c, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                    if (f >= 0)
                        return f;
                    u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                    var g = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay
                      , p = i.abrBandWidthFactor
                      , v = i.abrBandWidthUpFactor;
                    if (0 === h) {
                        var m = this.bitrateTestDelay;
                        if (m)
                            g = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m,
                            u.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"),
                            p = v = 1
                    }
                    return f = this._findBestLevel(s, o, c, a, t, h + g, p, v, r),
                    Math.max(f, 0)
                }
            }]) && De(a.prototype, n),
            s && De(a, s),
            i
        }(h);
        var Ie = q()
          , Oe = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.MANIFEST_PARSED, d.a.BUFFER_RESET, d.a.BUFFER_APPENDING, d.a.BUFFER_CODECS, d.a.BUFFER_EOS, d.a.BUFFER_FLUSHING, d.a.LEVEL_PTS_UPDATED, d.a.LEVEL_UPDATED) || this)._msDuration = null,
                r._levelDuration = null,
                r._levelTargetDuration = 10,
                r._live = null,
                r._objectUrl = null,
                r._needsFlush = !1,
                r._needsEos = !1,
                r.config = void 0,
                r.audioTimestampOffset = void 0,
                r.bufferCodecEventsExpected = 0,
                r._bufferCodecEventsTotal = 0,
                r.media = null,
                r.mediaSource = null,
                r.segments = [],
                r.parent = void 0,
                r.appending = !1,
                r.appended = 0,
                r.appendError = 0,
                r.flushBufferCounter = 0,
                r.tracks = {},
                r.pendingTracks = {},
                r.sourceBuffer = {},
                r.flushRange = [],
                r._onMediaSourceOpen = function() {
                    u.b.log("media source opened"),
                    r.hls.trigger(d.a.MEDIA_ATTACHED, {
                        media: r.media
                    });
                    var e = r.mediaSource;
                    e && e.removeEventListener("sourceopen", r._onMediaSourceOpen),
                    r.checkPendingTracks()
                }
                ,
                r._onMediaSourceClose = function() {
                    u.b.log("media source closed")
                }
                ,
                r._onMediaSourceEnded = function() {
                    u.b.log("media source ended")
                }
                ,
                r._onSBUpdateEnd = function() {
                    if (r.audioTimestampOffset && r.sourceBuffer.audio) {
                        var e = r.sourceBuffer.audio;
                        u.b.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset),
                        e.timestampOffset = r.audioTimestampOffset,
                        delete r.audioTimestampOffset
                    }
                    r._needsFlush && r.doFlush(),
                    r._needsEos && r.checkEos(),
                    r.appending = !1;
                    var t = r.parent
                      , i = r.segments.reduce(function(e, r) {
                        return r.parent === t ? e + 1 : e
                    }, 0)
                      , a = {}
                      , n = r.sourceBuffer;
                    for (var s in n) {
                        var o = n[s];
                        if (!o)
                            throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
                        a[s] = o.buffered
                    }
                    r.hls.trigger(d.a.BUFFER_APPENDED, {
                        parent: t,
                        pending: i,
                        timeRanges: a
                    }),
                    r._needsFlush || r.doAppending(),
                    r.updateMediaElementDuration(),
                    0 === i && r.flushLiveBackBuffer()
                }
                ,
                r._onSBUpdateError = function(e) {
                    u.b.error("sourceBuffer error:", e),
                    r.hls.trigger(d.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                }
                ,
                r.config = t.config,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                h.prototype.destroy.call(this)
            }
            ,
            a.onLevelPtsUpdated = function(e) {
                var t = e.type
                  , r = this.tracks.audio;
                if ("audio" === t && r && "audio/mpeg" === r.container) {
                    var i = this.sourceBuffer.audio;
                    if (!i)
                        throw Error("Level PTS Updated and source buffer for audio uninitalized");
                    if (Math.abs(i.timestampOffset - e.start) > .1) {
                        var a = i.updating;
                        try {
                            i.abort()
                        } catch (e) {
                            u.b.warn("can not abort audio buffer: " + e)
                        }
                        a ? this.audioTimestampOffset = e.start : (u.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start),
                        i.timestampOffset = e.start)
                    }
                }
            }
            ,
            a.onManifestParsed = function(e) {
                this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e.altAudio ? 2 : 1,
                u.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
            }
            ,
            a.onMediaAttaching = function(e) {
                var t = this.media = e.media;
                if (t && Ie) {
                    var r = this.mediaSource = new Ie;
                    r.addEventListener("sourceopen", this._onMediaSourceOpen),
                    r.addEventListener("sourceended", this._onMediaSourceEnded),
                    r.addEventListener("sourceclose", this._onMediaSourceClose),
                    t.src = window.URL.createObjectURL(r),
                    this._objectUrl = t.src
                }
            }
            ,
            a.onMediaDetaching = function() {
                u.b.log("media source detaching");
                var e = this.mediaSource;
                if (e) {
                    if ("open" === e.readyState)
                        try {
                            e.endOfStream()
                        } catch (e) {
                            u.b.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                        }
                    e.removeEventListener("sourceopen", this._onMediaSourceOpen),
                    e.removeEventListener("sourceended", this._onMediaSourceEnded),
                    e.removeEventListener("sourceclose", this._onMediaSourceClose),
                    this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl),
                    this.media.src === this._objectUrl ? (this.media.removeAttribute("src"),
                    this.media.load()) : u.b.warn("media.src was changed by a third party - skip cleanup")),
                    this.mediaSource = null,
                    this.media = null,
                    this._objectUrl = null,
                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
                    this.pendingTracks = {},
                    this.tracks = {},
                    this.sourceBuffer = {},
                    this.flushRange = [],
                    this.segments = [],
                    this.appended = 0
                }
                this.hls.trigger(d.a.MEDIA_DETACHED)
            }
            ,
            a.checkPendingTracks = function() {
                var e = this.bufferCodecEventsExpected
                  , t = this.pendingTracks
                  , r = Object.keys(t).length;
                (r && !e || 2 === r) && (this.createSourceBuffers(t),
                this.pendingTracks = {},
                this.doAppending())
            }
            ,
            a.onBufferReset = function() {
                var e = this.sourceBuffer;
                for (var t in e) {
                    var r = e[t];
                    try {
                        r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r),
                        r.removeEventListener("updateend", this._onSBUpdateEnd),
                        r.removeEventListener("error", this._onSBUpdateError))
                    } catch (e) {}
                }
                this.sourceBuffer = {},
                this.flushRange = [],
                this.segments = [],
                this.appended = 0
            }
            ,
            a.onBufferCodecs = function(e) {
                var t = this;
                Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach(function(r) {
                    t.pendingTracks[r] = e[r]
                }),
                this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0),
                this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
            }
            ,
            a.createSourceBuffers = function(e) {
                var t = this.sourceBuffer
                  , r = this.mediaSource;
                if (!r)
                    throw Error("createSourceBuffers called when mediaSource was null");
                for (var i in e)
                    if (!t[i]) {
                        var a = e[i];
                        if (!a)
                            throw Error("source buffer exists for track " + i + ", however track does not");
                        var n = a.levelCodec || a.codec
                          , s = a.container + ";codecs=" + n;
                        u.b.log("creating sourceBuffer(" + s + ")");
                        try {
                            var l = t[i] = r.addSourceBuffer(s);
                            l.addEventListener("updateend", this._onSBUpdateEnd),
                            l.addEventListener("error", this._onSBUpdateError),
                            this.tracks[i] = {
                                buffer: l,
                                codec: n,
                                id: a.id,
                                container: a.container,
                                levelCodec: a.levelCodec
                            }
                        } catch (e) {
                            u.b.error("error while trying to add sourceBuffer:" + e.message),
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.MEDIA_ERROR,
                                details: o.a.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                err: e,
                                mimeType: s
                            })
                        }
                    }
                this.hls.trigger(d.a.BUFFER_CREATED, {
                    tracks: this.tracks
                })
            }
            ,
            a.onBufferAppending = function(e) {
                this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e],
                this.doAppending())
            }
            ,
            a.onBufferEos = function(e) {
                for (var t in this.sourceBuffer)
                    if (!e.type || e.type === t) {
                        var r = this.sourceBuffer[t];
                        r && !r.ended && (r.ended = !0,
                        u.b.log(t + " sourceBuffer now EOS"))
                    }
                this.checkEos()
            }
            ,
            a.checkEos = function() {
                var e = this.sourceBuffer
                  , t = this.mediaSource;
                if (t && "open" === t.readyState) {
                    for (var r in e) {
                        var i = e[r];
                        if (i) {
                            if (!i.ended)
                                return;
                            if (i.updating)
                                return void (this._needsEos = !0)
                        }
                    }
                    u.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                    try {
                        t.endOfStream()
                    } catch (e) {
                        u.b.warn("exception while calling mediaSource.endOfStream()")
                    }
                    this._needsEos = !1
                } else
                    this._needsEos = !1
            }
            ,
            a.onBufferFlushing = function(e) {
                e.type ? this.flushRange.push({
                    start: e.startOffset,
                    end: e.endOffset,
                    type: e.type
                }) : (this.flushRange.push({
                    start: e.startOffset,
                    end: e.endOffset,
                    type: "video"
                }),
                this.flushRange.push({
                    start: e.startOffset,
                    end: e.endOffset,
                    type: "audio"
                })),
                this.flushBufferCounter = 0,
                this.doFlush()
            }
            ,
            a.flushLiveBackBuffer = function() {
                if (this._live) {
                    var e = this.config.liveBackBufferLength;
                    if (isFinite(e) && !(e < 0))
                        if (this.media)
                            for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
                                var s = i[n]
                                  , o = r[s];
                                if (o) {
                                    var l = o.buffered;
                                    l.length > 0 && a > l.start(0) && this.removeBufferRange(s, o, 0, a) && this.hls.trigger(d.a.LIVE_BACK_BUFFER_REACHED, {
                                        bufferEnd: a
                                    })
                                }
                            }
                        else
                            u.b.error("flushLiveBackBuffer called without attaching media")
                }
            }
            ,
            a.onLevelUpdated = function(e) {
                var t = e.details;
                t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start,
                this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10,
                this._live = t.live,
                this.updateMediaElementDuration())
            }
            ,
            a.updateMediaElementDuration = function() {
                var e, t = this.config;
                if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                    for (var r in this.sourceBuffer) {
                        var i = this.sourceBuffer[r];
                        if (i && !0 === i.updating)
                            return
                    }
                    e = this.media.duration,
                    null === this._msDuration && (this._msDuration = this.mediaSource.duration),
                    !0 === this._live && !0 === t.liveDurationInfinity ? (u.b.log("Media Source duration is set to Infinity"),
                    this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.a)(e)) && (u.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)),
                    this._msDuration = this.mediaSource.duration = this._levelDuration)
                }
            }
            ,
            a.doFlush = function() {
                for (; this.flushRange.length; ) {
                    var e = this.flushRange[0];
                    if (!this.flushBuffer(e.start, e.end, e.type))
                        return void (this._needsFlush = !0);
                    this.flushRange.shift(),
                    this.flushBufferCounter = 0
                }
                if (0 === this.flushRange.length) {
                    this._needsFlush = !1;
                    var t = 0
                      , r = this.sourceBuffer;
                    try {
                        for (var i in r) {
                            var a = r[i];
                            a && (t += a.buffered.length)
                        }
                    } catch (e) {
                        u.b.error("error while accessing sourceBuffer.buffered")
                    }
                    this.appended = t,
                    this.hls.trigger(d.a.BUFFER_FLUSHED)
                }
            }
            ,
            a.doAppending = function() {
                var e = this.config
                  , t = this.hls
                  , r = this.segments
                  , i = this.sourceBuffer;
                if (Object.keys(i).length) {
                    if (!this.media || this.media.error)
                        return this.segments = [],
                        void u.b.error("trying to append although a media error occured, flush segment and abort");
                    if (!this.appending) {
                        var a = r.shift();
                        if (a)
                            try {
                                var n = i[a.type];
                                if (!n)
                                    return void this._onSBUpdateEnd();
                                if (n.updating)
                                    return void r.unshift(a);
                                n.ended = !1,
                                this.parent = a.parent,
                                n.appendBuffer(a.data),
                                this.appendError = 0,
                                this.appended++,
                                this.appending = !0
                            } catch (i) {
                                u.b.error("error while trying to append buffer:" + i.message),
                                r.unshift(a);
                                var s = {
                                    type: o.b.MEDIA_ERROR,
                                    parent: a.parent,
                                    details: "",
                                    fatal: !1
                                };
                                22 === i.code ? (this.segments = [],
                                s.details = o.a.BUFFER_FULL_ERROR) : (this.appendError++,
                                s.details = o.a.BUFFER_APPEND_ERROR,
                                this.appendError > e.appendErrorMaxRetry && (u.b.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"),
                                this.segments = [],
                                s.fatal = !0)),
                                t.trigger(d.a.ERROR, s)
                            }
                    }
                }
            }
            ,
            a.flushBuffer = function(e, t, r) {
                var i = this.sourceBuffer;
                if (!Object.keys(i).length)
                    return !0;
                var a = "null";
                if (this.media && (a = this.media.currentTime.toFixed(3)),
                u.b.log("flushBuffer,pos/start/end: " + a + "/" + e + "/" + t),
                this.flushBufferCounter >= this.appended)
                    return u.b.warn("abort flushing too many retries"),
                    !0;
                var n = i[r];
                if (n) {
                    if (n.ended = !1,
                    n.updating)
                        return u.b.warn("cannot flush, sb updating in progress"),
                        !1;
                    if (this.removeBufferRange(r, n, e, t))
                        return this.flushBufferCounter++,
                        !1
                }
                return u.b.log("buffer flushed"),
                !0
            }
            ,
            a.removeBufferRange = function(e, t, r, i) {
                try {
                    for (var a = 0; a < t.buffered.length; a++) {
                        var n = t.buffered.start(a)
                          , s = t.buffered.end(a)
                          , o = Math.max(n, r)
                          , l = Math.min(s, i);
                        if (Math.min(l, s) - o > .5) {
                            var d = "null";
                            return this.media && (d = this.media.currentTime.toString()),
                            u.b.log("sb remove " + e + " [" + o + "," + l + "], of [" + n + "," + s + "], pos:" + d),
                            t.remove(o, l),
                            !0
                        }
                    }
                } catch (e) {
                    u.b.warn("removeBufferRange failed", e)
                }
                return !1
            }
            ,
            i
        }(h);
        function Ce(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var Pe = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.FPS_DROP_LEVEL_CAPPING, d.a.MEDIA_ATTACHING, d.a.MANIFEST_PARSED, d.a.BUFFER_CODECS, d.a.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY,
                r.firstLevel = null,
                r.levels = [],
                r.media = null,
                r.restrictedLevels = [],
                r.timer = null,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, o = i.prototype;
            return o.destroy = function() {
                this.hls.config.capLevelToPlayerSize && (this.media = null,
                this.stopCapping())
            }
            ,
            o.onFpsDropLevelCapping = function(e) {
                i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
            }
            ,
            o.onMediaAttaching = function(e) {
                this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
            }
            ,
            o.onManifestParsed = function(e) {
                var t = this.hls;
                this.restrictedLevels = [],
                this.levels = e.levels,
                this.firstLevel = e.firstLevel,
                t.config.capLevelToPlayerSize && e.video && this.startCapping()
            }
            ,
            o.onBufferCodecs = function(e) {
                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
            }
            ,
            o.onLevelsUpdated = function(e) {
                this.levels = e.levels
            }
            ,
            o.onMediaDetaching = function() {
                this.stopCapping()
            }
            ,
            o.detectPlayerSize = function() {
                if (this.media) {
                    var e = this.levels ? this.levels.length : 0;
                    if (e) {
                        var t = this.hls;
                        t.autoLevelCapping = this.getMaxLevel(e - 1),
                        t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
                        this.autoLevelCapping = t.autoLevelCapping
                    }
                }
            }
            ,
            o.getMaxLevel = function(e) {
                var t = this;
                if (!this.levels)
                    return -1;
                var r = this.levels.filter(function(r, a) {
                    return i.isLevelAllowed(a, t.restrictedLevels) && a <= e
                });
                return i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
            }
            ,
            o.startCapping = function() {
                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY,
                this.hls.firstLevel = this.getMaxLevel(this.firstLevel),
                clearInterval(this.timer),
                this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3),
                this.detectPlayerSize())
            }
            ,
            o.stopCapping = function() {
                this.restrictedLevels = [],
                this.firstLevel = null,
                this.autoLevelCapping = Number.POSITIVE_INFINITY,
                this.timer && (this.timer = clearInterval(this.timer),
                this.timer = null)
            }
            ,
            i.isLevelAllowed = function(e, t) {
                return void 0 === t && (t = []),
                -1 === t.indexOf(e)
            }
            ,
            i.getMaxLevelByMediaSize = function(e, t, r) {
                if (!e || e && !e.length)
                    return -1;
                for (var i, a, n = e.length - 1, s = 0; s < e.length; s += 1) {
                    var o = e[s];
                    if ((o.width >= t || o.height >= r) && (i = o,
                    !(a = e[s + 1]) || i.width !== a.width || i.height !== a.height)) {
                        n = s;
                        break
                    }
                }
                return n
            }
            ,
            a = i,
            s = [{
                key: "contentScaleFactor",
                get: function() {
                    var e = 1;
                    try {
                        e = window.devicePixelRatio
                    } catch (e) {}
                    return e
                }
            }],
            (n = [{
                key: "mediaWidth",
                get: function() {
                    var e, t = this.media;
                    return t && (e = t.width || t.clientWidth || t.offsetWidth,
                    e *= i.contentScaleFactor),
                    e
                }
            }, {
                key: "mediaHeight",
                get: function() {
                    var e, t = this.media;
                    return t && (e = t.height || t.clientHeight || t.offsetHeight,
                    e *= i.contentScaleFactor),
                    e
                }
            }]) && Ce(a.prototype, n),
            s && Ce(a, s),
            i
        }(h);
        var xe = window.performance
          , Fe = function(e) {
            var t, r;
            function i(t) {
                return e.call(this, t, d.a.MEDIA_ATTACHING) || this
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.destroy = function() {
                this.timer && clearInterval(this.timer),
                this.isVideoPlaybackQualityAvailable = !1
            }
            ,
            a.onMediaAttaching = function(e) {
                var t = this.hls.config;
                t.capLevelOnFPSDrop && ("function" == typeof (this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                clearInterval(this.timer),
                this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
            }
            ,
            a.checkFPS = function(e, t, r) {
                var i = xe.now();
                if (t) {
                    if (this.lastTime) {
                        var a = i - this.lastTime
                          , n = r - this.lastDroppedFrames
                          , s = t - this.lastDecodedFrames
                          , o = 1e3 * n / a
                          , l = this.hls;
                        if (l.trigger(d.a.FPS_DROP, {
                            currentDropped: n,
                            currentDecoded: s,
                            totalDroppedFrames: r
                        }),
                        o > 0 && n > l.config.fpsDroppedMonitoringThreshold * s) {
                            var c = l.currentLevel;
                            u.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
                            c > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= c) && (c -= 1,
                            l.trigger(d.a.FPS_DROP_LEVEL_CAPPING, {
                                level: c,
                                droppedLevel: l.currentLevel
                            }),
                            l.autoLevelCapping = c,
                            l.streamController.nextLevelSwitch())
                        }
                    }
                    this.lastTime = i,
                    this.lastDroppedFrames = r,
                    this.lastDecodedFrames = t
                }
            }
            ,
            a.checkFPSInterval = function() {
                var e = this.video;
                if (e)
                    if (this.isVideoPlaybackQualityAvailable) {
                        var t = e.getVideoPlaybackQuality();
                        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                    } else
                        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
            }
            ,
            i
        }(h)
          , Me = window
          , Ne = Me.performance
          , Ue = Me.XMLHttpRequest
          , Be = function() {
            function e(e) {
                e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
            }
            var t = e.prototype;
            return t.destroy = function() {
                this.abort(),
                this.loader = null
            }
            ,
            t.abort = function() {
                var e = this.loader;
                e && 4 !== e.readyState && (this.stats.aborted = !0,
                e.abort()),
                window.clearTimeout(this.requestTimeout),
                this.requestTimeout = null,
                window.clearTimeout(this.retryTimeout),
                this.retryTimeout = null
            }
            ,
            t.load = function(e, t, r) {
                this.context = e,
                this.config = t,
                this.callbacks = r,
                this.stats = {
                    trequest: Ne.now(),
                    retry: 0
                },
                this.retryDelay = t.retryDelay,
                this.loadInternal()
            }
            ,
            t.loadInternal = function() {
                var e, t = this.context;
                e = this.loader = new Ue;
                var r = this.stats;
                r.tfirst = 0,
                r.loaded = 0;
                var i = this.xhrSetup;
                try {
                    if (i)
                        try {
                            i(e, t.url)
                        } catch (r) {
                            e.open("GET", t.url, !0),
                            i(e, t.url)
                        }
                    e.readyState || e.open("GET", t.url, !0)
                } catch (r) {
                    return void this.callbacks.onError({
                        code: e.status,
                        text: r.message
                    }, t, e)
                }
                t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
                e.onreadystatechange = this.readystatechange.bind(this),
                e.onprogress = this.loadprogress.bind(this),
                e.responseType = t.responseType,
                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                e.send()
            }
            ,
            t.readystatechange = function(e) {
                var t = e.currentTarget
                  , r = t.readyState
                  , i = this.stats
                  , a = this.context
                  , n = this.config;
                if (!i.aborted && r >= 2)
                    if (window.clearTimeout(this.requestTimeout),
                    0 === i.tfirst && (i.tfirst = Math.max(Ne.now(), i.trequest)),
                    4 === r) {
                        var s = t.status;
                        if (s >= 200 && s < 300) {
                            var o, l;
                            i.tload = Math.max(i.tfirst, Ne.now()),
                            l = "arraybuffer" === a.responseType ? (o = t.response).byteLength : (o = t.responseText).length,
                            i.loaded = i.total = l;
                            var d = {
                                url: t.responseURL,
                                data: o
                            };
                            this.callbacks.onSuccess(d, i, a, t)
                        } else
                            i.retry >= n.maxRetry || s >= 400 && s < 499 ? (u.b.error(s + " while loading " + a.url),
                            this.callbacks.onError({
                                code: s,
                                text: t.statusText
                            }, a, t)) : (u.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."),
                            this.destroy(),
                            this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                            this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay),
                            i.retry++)
                    } else
                        this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
            }
            ,
            t.loadtimeout = function() {
                u.b.warn("timeout while loading " + this.context.url),
                this.callbacks.onTimeout(this.stats, this.context, null)
            }
            ,
            t.loadprogress = function(e) {
                var t = e.currentTarget
                  , r = this.stats;
                r.loaded = e.loaded,
                e.lengthComputable && (r.total = e.total);
                var i = this.callbacks.onProgress;
                i && i(r, this.context, null, t)
            }
            ,
            e
        }();
        function Ge(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var Ke = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.AUDIO_TRACK_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.LEVEL_LOADED, d.a.ERROR) || this)._trackId = -1,
                r._selectDefaultTrack = !0,
                r.tracks = [],
                r.trackIdBlacklist = Object.create(null),
                r.audioGroupId = null,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, l = i.prototype;
            return l.onManifestLoading = function() {
                this.tracks = [],
                this._trackId = -1,
                this._selectDefaultTrack = !0
            }
            ,
            l.onManifestParsed = function(e) {
                var t = this.tracks = e.audioTracks || [];
                this.hls.trigger(d.a.AUDIO_TRACKS_UPDATED, {
                    audioTracks: t
                })
            }
            ,
            l.onAudioTrackLoaded = function(e) {
                if (e.id >= this.tracks.length)
                    u.b.warn("Invalid audio track id:", e.id);
                else {
                    if (u.b.log("audioTrack " + e.id + " loaded"),
                    this.tracks[e.id].details = e.details,
                    e.details.live && !this.hasInterval()) {
                        var t = 1e3 * e.details.targetduration;
                        this.setInterval(t)
                    }
                    !e.details.live && this.hasInterval() && this.clearInterval()
                }
            }
            ,
            l.onAudioTrackSwitched = function(e) {
                var t = this.tracks[e.id].groupId;
                t && this.audioGroupId !== t && (this.audioGroupId = t)
            }
            ,
            l.onLevelLoaded = function(e) {
                var t = this.hls.levels[e.level];
                if (t.audioGroupIds) {
                    var r = t.audioGroupIds[t.urlId];
                    this.audioGroupId !== r && (this.audioGroupId = r,
                    this._selectInitialAudioTrack())
                }
            }
            ,
            l.onError = function(e) {
                e.type === o.b.NETWORK_ERROR && (e.fatal && this.clearInterval(),
                e.details === o.a.AUDIO_TRACK_LOAD_ERROR && (u.b.warn("Network failure on audio-track id:", e.context.id),
                this._handleLoadError()))
            }
            ,
            l._setAudioTrack = function(e) {
                if (this._trackId === e && this.tracks[this._trackId].details)
                    u.b.debug("Same id as current audio-track passed, and track details available -> no-op");
                else if (e < 0 || e >= this.tracks.length)
                    u.b.warn("Invalid id passed to audio-track controller");
                else {
                    var t = this.tracks[e];
                    u.b.log("Now switching to audio-track index " + e),
                    this.clearInterval(),
                    this._trackId = e;
                    var r = t.url
                      , i = t.type
                      , a = t.id;
                    this.hls.trigger(d.a.AUDIO_TRACK_SWITCHING, {
                        id: a,
                        type: i,
                        url: r
                    }),
                    this._loadTrackDetailsIfNeeded(t)
                }
            }
            ,
            l.doTick = function() {
                this._updateTrack(this._trackId)
            }
            ,
            l._selectInitialAudioTrack = function() {
                var e = this
                  , t = this.tracks;
                if (t.length) {
                    var r = this.tracks[this._trackId]
                      , i = null;
                    if (r && (i = r.name),
                    this._selectDefaultTrack) {
                        var a = t.filter(function(e) {
                            return e.default
                        });
                        a.length ? t = a : u.b.warn("No default audio tracks defined")
                    }
                    var n = !1
                      , s = function() {
                        t.forEach(function(t) {
                            n || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id),
                            n = !0)
                        })
                    };
                    s(),
                    n || (i = null,
                    s()),
                    n || (u.b.error("No track found for running audio group-ID: " + this.audioGroupId),
                    this.hls.trigger(d.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0
                    }))
                }
            }
            ,
            l._needsTrackLoading = function(e) {
                var t = e.details
                  , r = e.url;
                return !(t && !t.live) && !!r
            }
            ,
            l._loadTrackDetailsIfNeeded = function(e) {
                if (this._needsTrackLoading(e)) {
                    var t = e.url
                      , r = e.id;
                    u.b.log("loading audio-track playlist for id: " + r),
                    this.hls.trigger(d.a.AUDIO_TRACK_LOADING, {
                        url: t,
                        id: r
                    })
                }
            }
            ,
            l._updateTrack = function(e) {
                if (!(e < 0 || e >= this.tracks.length)) {
                    this.clearInterval(),
                    this._trackId = e,
                    u.b.log("trying to update audio-track " + e);
                    var t = this.tracks[e];
                    this._loadTrackDetailsIfNeeded(t)
                }
            }
            ,
            l._handleLoadError = function() {
                this.trackIdBlacklist[this._trackId] = !0;
                var e = this._trackId
                  , t = this.tracks[e]
                  , r = t.name
                  , i = t.language
                  , a = t.groupId;
                u.b.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
                for (var n = e, s = 0; s < this.tracks.length; s++) {
                    if (!this.trackIdBlacklist[s])
                        if (this.tracks[s].name === r) {
                            n = s;
                            break
                        }
                }
                n !== e ? (u.b.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId),
                this._setAudioTrack(n)) : u.b.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
            }
            ,
            a = i,
            (n = [{
                key: "audioTracks",
                get: function() {
                    return this.tracks
                }
            }, {
                key: "audioTrack",
                get: function() {
                    return this._trackId
                },
                set: function(e) {
                    this._setAudioTrack(e),
                    this._selectDefaultTrack = !1
                }
            }]) && Ge(a.prototype, n),
            s && Ge(a, s),
            i
        }(fe);
        function je(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var He = window.performance
          , Ve = function(e) {
            var t, r;
            function i(t, r) {
                var i;
                return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.AUDIO_TRACKS_UPDATED, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_LOADED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.BUFFER_RESET, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED, d.a.INIT_PTS_FOUND) || this).fragmentTracker = r,
                i.config = t.config,
                i.audioCodecSwap = !1,
                i._state = ge.STOPPED,
                i.initPTS = [],
                i.waitingFragment = null,
                i.videoTrackCC = null,
                i
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, c = i.prototype;
            return c.onInitPtsFound = function(e) {
                var t = e.id
                  , r = e.frag.cc
                  , i = e.initPTS;
                "main" === t && (this.initPTS[r] = i,
                this.videoTrackCC = r,
                u.b.log("InitPTS for cc: " + r + " found from video track: " + i),
                this.state === ge.WAITING_INIT_PTS && this.tick())
            }
            ,
            c.startLoad = function(e) {
                if (this.tracks) {
                    var t = this.lastCurrentTime;
                    this.stopLoad(),
                    this.setInterval(100),
                    this.fragLoadError = 0,
                    t > 0 && -1 === e ? (u.b.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)),
                    this.state = ge.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e,
                    this.state = ge.STARTING),
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
                    this.tick()
                } else
                    this.startPosition = e,
                    this.state = ge.STOPPED
            }
            ,
            c.doTick = function() {
                var e, t, r, i = this.hls, a = i.config;
                switch (this.state) {
                case ge.ERROR:
                case ge.PAUSED:
                case ge.BUFFER_FLUSHING:
                    break;
                case ge.STARTING:
                    this.state = ge.WAITING_TRACK,
                    this.loadedmetadata = !1;
                    break;
                case ge.IDLE:
                    var n = this.tracks;
                    if (!n)
                        break;
                    if (!this.media && (this.startFragRequested || !a.startFragPrefetch))
                        break;
                    if (this.loadedmetadata)
                        e = this.media.currentTime;
                    else if (void 0 === (e = this.nextLoadPosition))
                        break;
                    var s = this.mediaBuffer ? this.mediaBuffer : this.media
                      , o = this.videoBuffer ? this.videoBuffer : this.media
                      , c = H.bufferInfo(s, e, a.maxBufferHole)
                      , h = H.bufferInfo(o, e, a.maxBufferHole)
                      , f = c.len
                      , g = c.end
                      , p = this.fragPrevious
                      , v = Math.min(a.maxBufferLength, a.maxMaxBufferLength)
                      , m = Math.max(v, h.len)
                      , y = this.audioSwitch
                      , b = this.trackId;
                    if ((f < m || y) && b < n.length) {
                        if (void 0 === (r = n[b].details)) {
                            this.state = ge.WAITING_TRACK;
                            break
                        }
                        if (!y && this._streamEnded(c, r))
                            return this.hls.trigger(d.a.BUFFER_EOS, {
                                type: "audio"
                            }),
                            void (this.state = ge.ENDED);
                        var E, T = r.fragments, S = T.length, _ = T[0].start, A = T[S - 1].start + T[S - 1].duration;
                        if (y)
                            if (r.live && !r.PTSKnown)
                                u.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                                g = 0;
                            else if (g = e,
                            r.PTSKnown && e < _) {
                                if (!(c.end > _ || c.nextStart))
                                    return;
                                u.b.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                this.media.currentTime = _ + .05
                            }
                        if (r.initSegment && !r.initSegment.data)
                            E = r.initSegment;
                        else if (g <= _) {
                            if (E = T[0],
                            null !== this.videoTrackCC && E.cc !== this.videoTrackCC && (E = function(e, t) {
                                return j.search(e, function(e) {
                                    return e.cc < t ? 1 : e.cc > t ? -1 : 0
                                })
                            }(T, this.videoTrackCC)),
                            r.live && E.loadIdx && E.loadIdx === this.fragLoadIdx) {
                                var R = c.nextStart ? c.nextStart : _;
                                return u.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (R + .05)),
                                void (this.media.currentTime = R + .05)
                            }
                        } else {
                            var L, D = a.maxFragLookUpTolerance, w = p ? T[p.sn - T[0].sn + 1] : void 0, k = function(e) {
                                var t = Math.min(D, e.duration);
                                return e.start + e.duration - t <= g ? 1 : e.start - t > g && e.start ? -1 : 0
                            };
                            g < A ? (g > A - D && (D = 0),
                            L = w && !k(w) ? w : j.search(T, k)) : L = T[S - 1],
                            L && (E = L,
                            _ = L.start,
                            p && E.level === p.level && E.sn === p.sn && (E.sn < r.endSN ? (E = T[E.sn + 1 - r.startSN],
                            u.b.log("SN just loaded, load next one: " + E.sn)) : E = null))
                        }
                        E && (E.encrypted ? (u.b.log("Loading key for " + E.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + b),
                        this.state = ge.KEY_LOADING,
                        i.trigger(d.a.KEY_LOADING, {
                            frag: E
                        })) : (u.b.log("Loading " + E.sn + ", cc: " + E.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + b + ", currentTime:" + e + ",bufferEnd:" + g.toFixed(3)),
                        this.fragCurrent = E,
                        (y || this.fragmentTracker.getState(E) === N) && ("initSegment" !== E.sn && (this.startFragRequested = !0),
                        Object(l.a)(E.sn) && (this.nextLoadPosition = E.start + E.duration),
                        i.trigger(d.a.FRAG_LOADING, {
                            frag: E
                        }),
                        this.state = ge.FRAG_LOADING)))
                    }
                    break;
                case ge.WAITING_TRACK:
                    (t = this.tracks[this.trackId]) && t.details && (this.state = ge.IDLE);
                    break;
                case ge.FRAG_LOADING_WAITING_RETRY:
                    var I = He.now()
                      , O = this.retryDate
                      , C = (s = this.media) && s.seeking;
                    (!O || I >= O || C) && (u.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),
                    this.state = ge.IDLE);
                    break;
                case ge.WAITING_INIT_PTS:
                    var P = this.videoTrackCC;
                    if (void 0 === this.initPTS[P])
                        break;
                    var x = this.waitingFragment;
                    if (x) {
                        var F = x.frag.cc;
                        P !== F ? (t = this.tracks[this.trackId]).details && t.details.live && (u.b.warn("Waiting fragment CC (" + F + ") does not match video track CC (" + P + ")"),
                        this.waitingFragment = null,
                        this.state = ge.IDLE) : (this.state = ge.FRAG_LOADING,
                        this.onFragLoaded(this.waitingFragment),
                        this.waitingFragment = null)
                    } else
                        this.state = ge.IDLE;
                    break;
                case ge.STOPPED:
                case ge.FRAG_LOADING:
                case ge.PARSING:
                case ge.PARSED:
                case ge.ENDED:
                }
            }
            ,
            c.onMediaAttached = function(e) {
                var t = this.media = this.mediaBuffer = e.media;
                this.onvseeking = this.onMediaSeeking.bind(this),
                this.onvended = this.onMediaEnded.bind(this),
                t.addEventListener("seeking", this.onvseeking),
                t.addEventListener("ended", this.onvended);
                var r = this.config;
                this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
            }
            ,
            c.onMediaDetaching = function() {
                var e = this.media;
                e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"),
                this.startPosition = this.lastCurrentTime = 0),
                e && (e.removeEventListener("seeking", this.onvseeking),
                e.removeEventListener("ended", this.onvended),
                this.onvseeking = this.onvseeked = this.onvended = null),
                this.media = this.mediaBuffer = this.videoBuffer = null,
                this.loadedmetadata = !1,
                this.fragmentTracker.removeAllFragments(),
                this.stopLoad()
            }
            ,
            c.onAudioTracksUpdated = function(e) {
                u.b.log("audio tracks updated"),
                this.tracks = e.audioTracks
            }
            ,
            c.onAudioTrackSwitching = function(e) {
                var t = !!e.url;
                this.trackId = e.id,
                this.fragCurrent = null,
                this.state = ge.PAUSED,
                this.waitingFragment = null,
                t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(),
                this.demuxer = null),
                t && (this.audioSwitch = !0,
                this.state = ge.IDLE),
                this.tick()
            }
            ,
            c.onAudioTrackLoaded = function(e) {
                var t = e.details
                  , r = e.id
                  , i = this.tracks[r]
                  , a = t.totalduration
                  , n = 0;
                if (u.b.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a),
                t.live) {
                    var s = i.details;
                    s && t.fragments.length > 0 ? (re(s, t),
                    n = t.fragments[0].start,
                    t.PTSKnown ? u.b.log("live audio playlist sliding:" + n.toFixed(3)) : u.b.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1,
                    u.b.log("live audio playlist - first load, unknown sliding"))
                } else
                    t.PTSKnown = !1;
                if (i.details = t,
                !this.startFragRequested) {
                    if (-1 === this.startPosition) {
                        var o = t.startTimeOffset;
                        Object(l.a)(o) ? (u.b.log("start time offset found in playlist, adjust startPosition to " + o),
                        this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(n, t),
                        u.b.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
                    }
                    this.nextLoadPosition = this.startPosition
                }
                this.state === ge.WAITING_TRACK && (this.state = ge.IDLE),
                this.tick()
            }
            ,
            c.onKeyLoaded = function() {
                this.state === ge.KEY_LOADING && (this.state = ge.IDLE,
                this.tick())
            }
            ,
            c.onFragLoaded = function(e) {
                var t = this.fragCurrent
                  , r = e.frag;
                if (this.state === ge.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                    var i = this.tracks[this.trackId]
                      , a = i.details
                      , n = a.totalduration
                      , s = t.level
                      , o = t.sn
                      , l = t.cc
                      , c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2"
                      , h = this.stats = e.stats;
                    if ("initSegment" === o)
                        this.state = ge.IDLE,
                        h.tparsed = h.tbuffered = He.now(),
                        a.initSegment.data = e.payload,
                        this.hls.trigger(d.a.FRAG_BUFFERED, {
                            stats: h,
                            frag: t,
                            id: "audio"
                        }),
                        this.tick();
                    else {
                        this.state = ge.PARSING,
                        this.appended = !1,
                        this.demuxer || (this.demuxer = new J(this.hls,"audio"));
                        var f = this.initPTS[l]
                          , g = a.initSegment ? a.initSegment.data : [];
                        if (a.initSegment || void 0 !== f) {
                            this.pendingBuffering = !0,
                            u.b.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);
                            this.demuxer.push(e.payload, g, c, null, t, n, !1, f)
                        } else
                            u.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s),
                            this.waitingFragment = e,
                            this.state = ge.WAITING_INIT_PTS
                    }
                }
                this.fragLoadError = 0
            }
            ,
            c.onFragParsingInitSegment = function(e) {
                var t = this.fragCurrent
                  , r = e.frag;
                if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === ge.PARSING) {
                    var i, a = e.tracks;
                    if (a.video && delete a.video,
                    i = a.audio) {
                        i.levelCodec = i.codec,
                        i.id = e.id,
                        this.hls.trigger(d.a.BUFFER_CODECS, a),
                        u.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                        var n = i.initSegment;
                        if (n) {
                            var s = {
                                type: "audio",
                                data: n,
                                parent: "audio",
                                content: "initSegment"
                            };
                            this.audioSwitch ? this.pendingData = [s] : (this.appended = !0,
                            this.pendingBuffering = !0,
                            this.hls.trigger(d.a.BUFFER_APPENDING, s))
                        }
                        this.tick()
                    }
                }
            }
            ,
            c.onFragParsingData = function(e) {
                var t = this
                  , r = this.fragCurrent
                  , i = e.frag;
                if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === ge.PARSING) {
                    var a = this.trackId
                      , n = this.tracks[a]
                      , s = this.hls;
                    Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration,
                    e.endDTS = e.startDTS + r.duration),
                    r.addElementaryStream(p.AUDIO),
                    u.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb),
                    te(n.details, r, e.startPTS, e.endPTS);
                    var c = this.audioSwitch
                      , h = this.media
                      , f = !1;
                    if (c)
                        if (h && h.readyState) {
                            var g = h.currentTime;
                            u.b.log("switching audio track : currentTime:" + g),
                            g >= e.startPTS && (u.b.log("switching audio track : flushing all audio"),
                            this.state = ge.BUFFER_FLUSHING,
                            s.trigger(d.a.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: Number.POSITIVE_INFINITY,
                                type: "audio"
                            }),
                            f = !0,
                            this.audioSwitch = !1,
                            s.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                id: a
                            }))
                        } else
                            this.audioSwitch = !1,
                            s.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                id: a
                            });
                    var v = this.pendingData;
                    if (!v)
                        return u.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                        void s.trigger(d.a.ERROR, {
                            type: o.b.MEDIA_ERROR,
                            details: null,
                            fatal: !0
                        });
                    this.audioSwitch || ([e.data1, e.data2].forEach(function(t) {
                        t && t.length && v.push({
                            type: e.type,
                            data: t,
                            parent: "audio",
                            content: "data"
                        })
                    }),
                    !f && v.length && (v.forEach(function(e) {
                        t.state === ge.PARSING && (t.pendingBuffering = !0,
                        t.hls.trigger(d.a.BUFFER_APPENDING, e))
                    }),
                    this.pendingData = [],
                    this.appended = !0)),
                    this.tick()
                }
            }
            ,
            c.onFragParsed = function(e) {
                var t = this.fragCurrent
                  , r = e.frag;
                t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === ge.PARSING && (this.stats.tparsed = He.now(),
                this.state = ge.PARSED,
                this._checkAppendedParsed())
            }
            ,
            c.onBufferReset = function() {
                this.mediaBuffer = this.videoBuffer = null,
                this.loadedmetadata = !1
            }
            ,
            c.onBufferCreated = function(e) {
                var t = e.tracks.audio;
                t && (this.mediaBuffer = t.buffer,
                this.loadedmetadata = !0),
                e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
            }
            ,
            c.onBufferAppended = function(e) {
                if ("audio" === e.parent) {
                    var t = this.state;
                    t !== ge.PARSING && t !== ge.PARSED || (this.pendingBuffering = e.pending > 0,
                    this._checkAppendedParsed())
                }
            }
            ,
            c._checkAppendedParsed = function() {
                if (!(this.state !== ge.PARSED || this.appended && this.pendingBuffering)) {
                    var e = this.fragCurrent
                      , t = this.stats
                      , r = this.hls;
                    if (e) {
                        this.fragPrevious = e,
                        t.tbuffered = He.now(),
                        r.trigger(d.a.FRAG_BUFFERED, {
                            stats: t,
                            frag: e,
                            id: "audio"
                        });
                        var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                        i && u.b.log("audio buffered : " + ne.toString(i.buffered)),
                        this.audioSwitch && this.appended && (this.audioSwitch = !1,
                        r.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                            id: this.trackId
                        })),
                        this.state = ge.IDLE
                    }
                    this.tick()
                }
            }
            ,
            c.onError = function(e) {
                var t = e.frag;
                if (!t || "audio" === t.type)
                    switch (e.details) {
                    case o.a.FRAG_LOAD_ERROR:
                    case o.a.FRAG_LOAD_TIMEOUT:
                        var r = e.frag;
                        if (r && "audio" !== r.type)
                            break;
                        if (!e.fatal) {
                            var i = this.fragLoadError;
                            i ? i++ : i = 1;
                            var a = this.config;
                            if (i <= a.fragLoadingMaxRetry) {
                                this.fragLoadError = i;
                                var n = Math.min(Math.pow(2, i - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
                                u.b.warn("AudioStreamController: frag loading failed, retry in " + n + " ms"),
                                this.retryDate = He.now() + n,
                                this.state = ge.FRAG_LOADING_WAITING_RETRY
                            } else
                                u.b.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."),
                                e.fatal = !0,
                                this.state = ge.ERROR
                        }
                        break;
                    case o.a.AUDIO_TRACK_LOAD_ERROR:
                    case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
                    case o.a.KEY_LOAD_ERROR:
                    case o.a.KEY_LOAD_TIMEOUT:
                        this.state !== ge.ERROR && (this.state = e.fatal ? ge.ERROR : ge.IDLE,
                        u.b.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
                        break;
                    case o.a.BUFFER_FULL_ERROR:
                        if ("audio" === e.parent && (this.state === ge.PARSING || this.state === ge.PARSED)) {
                            var s = this.mediaBuffer
                              , l = this.media.currentTime;
                            if (s && H.isBuffered(s, l) && H.isBuffered(s, l + .5)) {
                                var c = this.config;
                                c.maxMaxBufferLength >= c.maxBufferLength && (c.maxMaxBufferLength /= 2,
                                u.b.warn("AudioStreamController: reduce max buffer length to " + c.maxMaxBufferLength + "s")),
                                this.state = ge.IDLE
                            } else
                                u.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                                this.fragCurrent = null,
                                this.state = ge.BUFFER_FLUSHING,
                                this.hls.trigger(d.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                })
                        }
                    }
            }
            ,
            c.onBufferFlushed = function() {
                var e = this
                  , t = this.pendingData;
                t && t.length ? (u.b.log("AudioStreamController: appending pending audio data after buffer flushed"),
                t.forEach(function(t) {
                    e.hls.trigger(d.a.BUFFER_APPENDING, t)
                }),
                this.appended = !0,
                this.pendingData = [],
                this.state = ge.PARSED) : (this.state = ge.IDLE,
                this.fragPrevious = null,
                this.tick())
            }
            ,
            a = i,
            (n = [{
                key: "state",
                set: function(e) {
                    if (this.state !== e) {
                        var t = this.state;
                        this._state = e,
                        u.b.log("audio stream:" + t + "->" + e)
                    }
                },
                get: function() {
                    return this._state
                }
            }]) && je(a.prototype, n),
            s && je(a, s),
            i
        }(pe)
          , We = function() {
            if ("undefined" != typeof window && window.VTTCue)
                return window.VTTCue;
            var e = "auto"
              , t = {
                "": !0,
                lr: !0,
                rl: !0
            }
              , r = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
            function i(e) {
                return "string" == typeof e && (!!r[e.toLowerCase()] && e.toLowerCase())
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                        e[i] = r[i]
                }
                return e
            }
            function n(r, n, s) {
                var o = this
                  , l = {
                    enumerable: !0
                };
                o.hasBeenReset = !1;
                var d = ""
                  , u = !1
                  , c = r
                  , h = n
                  , f = s
                  , g = null
                  , p = ""
                  , v = !0
                  , m = "auto"
                  , y = "start"
                  , b = 50
                  , E = "middle"
                  , T = 50
                  , S = "middle";
                Object.defineProperty(o, "id", a({}, l, {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        d = "" + e
                    }
                })),
                Object.defineProperty(o, "pauseOnExit", a({}, l, {
                    get: function() {
                        return u
                    },
                    set: function(e) {
                        u = !!e
                    }
                })),
                Object.defineProperty(o, "startTime", a({}, l, {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        if ("number" != typeof e)
                            throw new TypeError("Start time must be set to a number.");
                        c = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "endTime", a({}, l, {
                    get: function() {
                        return h
                    },
                    set: function(e) {
                        if ("number" != typeof e)
                            throw new TypeError("End time must be set to a number.");
                        h = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "text", a({}, l, {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        f = "" + e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "region", a({}, l, {
                    get: function() {
                        return g
                    },
                    set: function(e) {
                        g = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "vertical", a({}, l, {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        var r = function(e) {
                            return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
                        }(e);
                        if (!1 === r)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        p = r,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "snapToLines", a({}, l, {
                    get: function() {
                        return v
                    },
                    set: function(e) {
                        v = !!e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "line", a({}, l, {
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        if ("number" != typeof t && t !== e)
                            throw new SyntaxError("An invalid number or illegal string was specified.");
                        m = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "lineAlign", a({}, l, {
                    get: function() {
                        return y
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        y = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "position", a({}, l, {
                    get: function() {
                        return b
                    },
                    set: function(e) {
                        if (e < 0 || e > 100)
                            throw new Error("Position must be between 0 and 100.");
                        b = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "positionAlign", a({}, l, {
                    get: function() {
                        return E
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        E = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "size", a({}, l, {
                    get: function() {
                        return T
                    },
                    set: function(e) {
                        if (e < 0 || e > 100)
                            throw new Error("Size must be between 0 and 100.");
                        T = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "align", a({}, l, {
                    get: function() {
                        return S
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        S = t,
                        this.hasBeenReset = !0
                    }
                })),
                o.displayState = void 0
            }
            return n.prototype.getCueAsHTML = function() {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            }
            ,
            n
        }()
          , Ye = function() {
            return {
                decode: function(e) {
                    if (!e)
                        return "";
                    if ("string" != typeof e)
                        throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(e))
                }
            }
        };
        function qe() {
            this.window = window,
            this.state = "INITIAL",
            this.buffer = "",
            this.decoder = new Ye,
            this.regionList = []
        }
        function ze() {
            this.values = Object.create(null)
        }
        function Xe(e, t, r, i) {
            var a = i ? e.split(i) : [e];
            for (var n in a)
                if ("string" == typeof a[n]) {
                    var s = a[n].split(r);
                    if (2 === s.length)
                        t(s[0], s[1])
                }
        }
        ze.prototype = {
            set: function(e, t) {
                this.get(e) || "" === t || (this.values[e] = t)
            },
            get: function(e, t, r) {
                return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
            },
            has: function(e) {
                return e in this.values
            },
            alt: function(e, t, r) {
                for (var i = 0; i < r.length; ++i)
                    if (t === r[i]) {
                        this.set(e, t);
                        break
                    }
            },
            integer: function(e, t) {
                /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
            },
            percent: function(e, t) {
                return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
                !0)
            }
        };
        var Qe = new We(0,0,0)
          , $e = "middle" === Qe.align ? "middle" : "center";
        function Je(e, t, r) {
            var i = e;
            function a() {
                var t = function(e) {
                    function t(e, t, r, i) {
                        return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
                    }
                    var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                }(e);
                if (null === t)
                    throw new Error("Malformed timestamp: " + i);
                return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
                t
            }
            function n() {
                e = e.replace(/^\s+/, "")
            }
            if (n(),
            t.startTime = a(),
            n(),
            "--\x3e" !== e.substr(0, 3))
                throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            e = e.substr(3),
            n(),
            t.endTime = a(),
            n(),
            function(e, t) {
                var i = new ze;
                Xe(e, function(e, t) {
                    switch (e) {
                    case "region":
                        for (var a = r.length - 1; a >= 0; a--)
                            if (r[a].id === t) {
                                i.set(e, r[a].region);
                                break
                            }
                        break;
                    case "vertical":
                        i.alt(e, t, ["rl", "lr"]);
                        break;
                    case "line":
                        var n = t.split(",")
                          , s = n[0];
                        i.integer(e, s),
                        i.percent(e, s) && i.set("snapToLines", !1),
                        i.alt(e, s, ["auto"]),
                        2 === n.length && i.alt("lineAlign", n[1], ["start", $e, "end"]);
                        break;
                    case "position":
                        n = t.split(","),
                        i.percent(e, n[0]),
                        2 === n.length && i.alt("positionAlign", n[1], ["start", $e, "end", "line-left", "line-right", "auto"]);
                        break;
                    case "size":
                        i.percent(e, t);
                        break;
                    case "align":
                        i.alt(e, t, ["start", $e, "end", "left", "right"])
                    }
                }, /:/, /\s/),
                t.region = i.get("region", null),
                t.vertical = i.get("vertical", "");
                var a = i.get("line", "auto");
                "auto" === a && -1 === Qe.line && (a = -1),
                t.line = a,
                t.lineAlign = i.get("lineAlign", "start"),
                t.snapToLines = i.get("snapToLines", !0),
                t.size = i.get("size", 100),
                t.align = i.get("align", $e);
                var n = i.get("position", "auto");
                "auto" === n && 50 === Qe.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
                t.position = n
            }(e, t)
        }
        function Ze(e) {
            return e.replace(/<br(?: \/)?>/gi, "\n")
        }
        qe.prototype = {
            parse: function(e) {
                var t = this;
                function r() {
                    var e = t.buffer
                      , r = 0;
                    for (e = Ze(e); r < e.length && "\r" !== e[r] && "\n" !== e[r]; )
                        ++r;
                    var i = e.substr(0, r);
                    return "\r" === e[r] && ++r,
                    "\n" === e[r] && ++r,
                    t.buffer = e.substr(r),
                    i
                }
                e && (t.buffer += t.decoder.decode(e, {
                    stream: !0
                }));
                try {
                    var i;
                    if ("INITIAL" === t.state) {
                        if (!/\r\n|\n/.test(t.buffer))
                            return this;
                        var a = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!a || !a[0])
                            throw new Error("Malformed WebVTT signature.");
                        t.state = "HEADER"
                    }
                    for (var n = !1; t.buffer; ) {
                        if (!/\r\n|\n/.test(t.buffer))
                            return this;
                        switch (n ? n = !1 : i = r(),
                        t.state) {
                        case "HEADER":
                            /:/.test(i) ? Xe(i, function(e, t) {}, /:/) : i || (t.state = "ID");
                            continue;
                        case "NOTE":
                            i || (t.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(i)) {
                                t.state = "NOTE";
                                break
                            }
                            if (!i)
                                continue;
                            if (t.cue = new We(0,0,""),
                            t.state = "CUE",
                            -1 === i.indexOf("--\x3e")) {
                                t.cue.id = i;
                                continue
                            }
                        case "CUE":
                            try {
                                Je(i, t.cue, t.regionList)
                            } catch (e) {
                                t.cue = null,
                                t.state = "BADCUE";
                                continue
                            }
                            t.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var s = -1 !== i.indexOf("--\x3e");
                            if (!i || s && (n = !0)) {
                                t.oncue && t.oncue(t.cue),
                                t.cue = null,
                                t.state = "ID";
                                continue
                            }
                            t.cue.text && (t.cue.text += "\n"),
                            t.cue.text += i;
                            continue;
                        case "BADCUE":
                            i || (t.state = "ID");
                            continue
                        }
                    }
                } catch (e) {
                    "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
                    t.cue = null,
                    t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                try {
                    if (this.buffer += this.decoder.decode(),
                    (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n",
                    this.parse()),
                    "INITIAL" === this.state)
                        throw new Error("Malformed WebVTT signature.")
                } catch (e) {
                    throw e
                }
                return this.onflush && this.onflush(),
                this
            }
        };
        var et = qe;
        function tt(e, t, r, i) {
            for (var a, n, s, o, l, d = window.VTTCue || TextTrackCue, u = 0; u < i.rows.length; u++)
                if (s = !0,
                o = 0,
                l = "",
                !(a = i.rows[u]).isEmpty()) {
                    for (var c = 0; c < a.chars.length; c++)
                        a.chars[c].uchar.match(/\s/) && s ? o++ : (l += a.chars[c].uchar,
                        s = !1);
                    a.cueStartTime = t,
                    t === r && (r += 1e-4),
                    n = new d(t,r,Ze(l.trim())),
                    o >= 16 ? o-- : o++,
                    navigator.userAgent.match(/Firefox\//) ? n.line = u + 1 : n.line = u > 7 ? u - 2 : u + 1,
                    n.align = "left",
                    n.position = Math.max(0, Math.min(100, o / 32 * 100)),
                    e.addCue(n)
                }
        }
        var rt, it = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            128: 174,
            129: 176,
            130: 189,
            131: 191,
            132: 8482,
            133: 162,
            134: 163,
            135: 9834,
            136: 224,
            137: 32,
            138: 232,
            139: 226,
            140: 234,
            141: 238,
            142: 244,
            143: 251,
            144: 193,
            145: 201,
            146: 211,
            147: 218,
            148: 220,
            149: 252,
            150: 8216,
            151: 161,
            152: 42,
            153: 8217,
            154: 9473,
            155: 169,
            156: 8480,
            157: 8226,
            158: 8220,
            159: 8221,
            160: 192,
            161: 194,
            162: 199,
            163: 200,
            164: 202,
            165: 203,
            166: 235,
            167: 206,
            168: 207,
            169: 239,
            170: 212,
            171: 217,
            172: 249,
            173: 219,
            174: 171,
            175: 187,
            176: 195,
            177: 227,
            178: 205,
            179: 204,
            180: 236,
            181: 210,
            182: 242,
            183: 213,
            184: 245,
            185: 123,
            186: 125,
            187: 92,
            188: 94,
            189: 95,
            190: 124,
            191: 8764,
            192: 196,
            193: 228,
            194: 214,
            195: 246,
            196: 223,
            197: 165,
            198: 164,
            199: 9475,
            200: 197,
            201: 229,
            202: 216,
            203: 248,
            204: 9487,
            205: 9491,
            206: 9495,
            207: 9499
        }, at = function(e) {
            var t = e;
            return it.hasOwnProperty(e) && (t = it[e]),
            String.fromCharCode(t)
        }, nt = 15, st = 100, ot = {
            17: 1,
            18: 3,
            21: 5,
            22: 7,
            23: 9,
            16: 11,
            19: 12,
            20: 14
        }, lt = {
            17: 2,
            18: 4,
            21: 6,
            22: 8,
            23: 10,
            19: 13,
            20: 15
        }, dt = {
            25: 1,
            26: 3,
            29: 5,
            30: 7,
            31: 9,
            24: 11,
            27: 12,
            28: 14
        }, ut = {
            25: 2,
            26: 4,
            29: 6,
            30: 8,
            31: 10,
            27: 13,
            28: 15
        }, ct = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
        !function(e) {
            e[e.ERROR = 0] = "ERROR",
            e[e.TEXT = 1] = "TEXT",
            e[e.WARNING = 2] = "WARNING",
            e[e.INFO = 2] = "INFO",
            e[e.DEBUG = 3] = "DEBUG",
            e[e.DATA = 3] = "DATA"
        }(rt || (rt = {}));
        var ht = {
            verboseFilter: {
                DATA: 3,
                DEBUG: 3,
                INFO: 2,
                WARNING: 2,
                TEXT: 1,
                ERROR: 0
            },
            time: null,
            verboseLevel: 0,
            setTime: function(e) {
                this.time = e
            },
            log: function(e, t) {
                this.verboseFilter[e];
                this.verboseLevel
            }
        }
          , ft = function(e) {
            for (var t = [], r = 0; r < e.length; r++)
                t.push(e[r].toString(16));
            return t
        }
          , gt = function() {
            function e(e, t, r, i, a) {
                this.foreground = void 0,
                this.underline = void 0,
                this.italics = void 0,
                this.background = void 0,
                this.flash = void 0,
                this.foreground = e || "white",
                this.underline = t || !1,
                this.italics = r || !1,
                this.background = i || "black",
                this.flash = a || !1
            }
            var t = e.prototype;
            return t.reset = function() {
                this.foreground = "white",
                this.underline = !1,
                this.italics = !1,
                this.background = "black",
                this.flash = !1
            }
            ,
            t.setStyles = function(e) {
                for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                    var i = t[r];
                    e.hasOwnProperty(i) && (this[i] = e[i])
                }
            }
            ,
            t.isDefault = function() {
                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
            }
            ,
            t.equals = function(e) {
                return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
            }
            ,
            t.copy = function(e) {
                this.foreground = e.foreground,
                this.underline = e.underline,
                this.italics = e.italics,
                this.background = e.background,
                this.flash = e.flash
            }
            ,
            t.toString = function() {
                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
            }
            ,
            e
        }()
          , pt = function() {
            function e(e, t, r, i, a, n) {
                this.uchar = void 0,
                this.penState = void 0,
                this.uchar = e || " ",
                this.penState = new gt(t,r,i,a,n)
            }
            var t = e.prototype;
            return t.reset = function() {
                this.uchar = " ",
                this.penState.reset()
            }
            ,
            t.setChar = function(e, t) {
                this.uchar = e,
                this.penState.copy(t)
            }
            ,
            t.setPenState = function(e) {
                this.penState.copy(e)
            }
            ,
            t.equals = function(e) {
                return this.uchar === e.uchar && this.penState.equals(e.penState)
            }
            ,
            t.copy = function(e) {
                this.uchar = e.uchar,
                this.penState.copy(e.penState)
            }
            ,
            t.isEmpty = function() {
                return " " === this.uchar && this.penState.isDefault()
            }
            ,
            e
        }()
          , vt = function() {
            function e() {
                this.chars = void 0,
                this.pos = void 0,
                this.currPenState = void 0,
                this.cueStartTime = void 0,
                this.chars = [];
                for (var e = 0; e < st; e++)
                    this.chars.push(new pt);
                this.pos = 0,
                this.currPenState = new gt
            }
            var t = e.prototype;
            return t.equals = function(e) {
                for (var t = !0, r = 0; r < st; r++)
                    if (!this.chars[r].equals(e.chars[r])) {
                        t = !1;
                        break
                    }
                return t
            }
            ,
            t.copy = function(e) {
                for (var t = 0; t < st; t++)
                    this.chars[t].copy(e.chars[t])
            }
            ,
            t.isEmpty = function() {
                for (var e = !0, t = 0; t < st; t++)
                    if (!this.chars[t].isEmpty()) {
                        e = !1;
                        break
                    }
                return e
            }
            ,
            t.setCursor = function(e) {
                this.pos !== e && (this.pos = e),
                this.pos < 0 ? (ht.log("ERROR", "Negative cursor position " + this.pos),
                this.pos = 0) : this.pos > st && (ht.log("ERROR", "Too large cursor position " + this.pos),
                this.pos = st)
            }
            ,
            t.moveCursor = function(e) {
                var t = this.pos + e;
                if (e > 1)
                    for (var r = this.pos + 1; r < t + 1; r++)
                        this.chars[r].setPenState(this.currPenState);
                this.setCursor(t)
            }
            ,
            t.backSpace = function() {
                this.moveCursor(-1),
                this.chars[this.pos].setChar(" ", this.currPenState)
            }
            ,
            t.insertChar = function(e) {
                e >= 144 && this.backSpace();
                var t = at(e);
                this.pos >= st ? ht.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState),
                this.moveCursor(1))
            }
            ,
            t.clearFromPos = function(e) {
                var t;
                for (t = e; t < st; t++)
                    this.chars[t].reset()
            }
            ,
            t.clear = function() {
                this.clearFromPos(0),
                this.pos = 0,
                this.currPenState.reset()
            }
            ,
            t.clearToEndOfRow = function() {
                this.clearFromPos(this.pos)
            }
            ,
            t.getTextString = function() {
                for (var e = [], t = !0, r = 0; r < st; r++) {
                    var i = this.chars[r].uchar;
                    " " !== i && (t = !1),
                    e.push(i)
                }
                return t ? "" : e.join("")
            }
            ,
            t.setPenStyles = function(e) {
                this.currPenState.setStyles(e),
                this.chars[this.pos].setPenState(this.currPenState)
            }
            ,
            e
        }()
          , mt = function() {
            function e() {
                this.rows = void 0,
                this.currRow = void 0,
                this.nrRollUpRows = void 0,
                this.lastOutputScreen = void 0,
                this.rows = [];
                for (var e = 0; e < nt; e++)
                    this.rows.push(new vt);
                this.currRow = nt - 1,
                this.nrRollUpRows = null,
                this.reset()
            }
            var t = e.prototype;
            return t.reset = function() {
                for (var e = 0; e < nt; e++)
                    this.rows[e].clear();
                this.currRow = nt - 1
            }
            ,
            t.equals = function(e) {
                for (var t = !0, r = 0; r < nt; r++)
                    if (!this.rows[r].equals(e.rows[r])) {
                        t = !1;
                        break
                    }
                return t
            }
            ,
            t.copy = function(e) {
                for (var t = 0; t < nt; t++)
                    this.rows[t].copy(e.rows[t])
            }
            ,
            t.isEmpty = function() {
                for (var e = !0, t = 0; t < nt; t++)
                    if (!this.rows[t].isEmpty()) {
                        e = !1;
                        break
                    }
                return e
            }
            ,
            t.backSpace = function() {
                this.rows[this.currRow].backSpace()
            }
            ,
            t.clearToEndOfRow = function() {
                this.rows[this.currRow].clearToEndOfRow()
            }
            ,
            t.insertChar = function(e) {
                this.rows[this.currRow].insertChar(e)
            }
            ,
            t.setPen = function(e) {
                this.rows[this.currRow].setPenStyles(e)
            }
            ,
            t.moveCursor = function(e) {
                this.rows[this.currRow].moveCursor(e)
            }
            ,
            t.setCursor = function(e) {
                ht.log("INFO", "setCursor: " + e),
                this.rows[this.currRow].setCursor(e)
            }
            ,
            t.setPAC = function(e) {
                ht.log("INFO", "pacData = " + JSON.stringify(e));
                var t = e.row - 1;
                if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
                this.nrRollUpRows && this.currRow !== t) {
                    for (var r = 0; r < nt; r++)
                        this.rows[r].clear();
                    var i = this.currRow + 1 - this.nrRollUpRows
                      , a = this.lastOutputScreen;
                    if (a) {
                        var n = a.rows[i].cueStartTime;
                        if (n && ht.time && n < ht.time)
                            for (var s = 0; s < this.nrRollUpRows; s++)
                                this.rows[t - this.nrRollUpRows + s + 1].copy(a.rows[i + s])
                    }
                }
                this.currRow = t;
                var o = this.rows[this.currRow];
                if (null !== e.indent) {
                    var l = e.indent
                      , d = Math.max(l - 1, 0);
                    o.setCursor(e.indent),
                    e.color = o.chars[d].penState.foreground
                }
                var u = {
                    foreground: e.color,
                    underline: e.underline,
                    italics: e.italics,
                    background: "black",
                    flash: !1
                };
                this.setPen(u)
            }
            ,
            t.setBkgData = function(e) {
                ht.log("INFO", "bkgData = " + JSON.stringify(e)),
                this.backSpace(),
                this.setPen(e),
                this.insertChar(32)
            }
            ,
            t.setRollUpRows = function(e) {
                this.nrRollUpRows = e
            }
            ,
            t.rollUp = function() {
                if (null !== this.nrRollUpRows) {
                    ht.log("TEXT", this.getDisplayText());
                    var e = this.currRow + 1 - this.nrRollUpRows
                      , t = this.rows.splice(e, 1)[0];
                    t.clear(),
                    this.rows.splice(this.currRow, 0, t),
                    ht.log("INFO", "Rolling up")
                } else
                    ht.log("DEBUG", "roll_up but nrRollUpRows not set yet")
            }
            ,
            t.getDisplayText = function(e) {
                e = e || !1;
                for (var t = [], r = "", i = -1, a = 0; a < nt; a++) {
                    var n = this.rows[a].getTextString();
                    n && (i = a + 1,
                    e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()))
                }
                return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
                r
            }
            ,
            t.getTextAndFormat = function() {
                return this.rows
            }
            ,
            e
        }()
          , yt = function() {
            function e(e, t) {
                this.chNr = void 0,
                this.outputFilter = void 0,
                this.mode = void 0,
                this.verbose = void 0,
                this.displayedMemory = void 0,
                this.nonDisplayedMemory = void 0,
                this.lastOutputScreen = void 0,
                this.currRollUpRow = void 0,
                this.writeScreen = void 0,
                this.cueStartTime = void 0,
                this.lastCueEndTime = void 0,
                this.chNr = e,
                this.outputFilter = t,
                this.mode = null,
                this.verbose = 0,
                this.displayedMemory = new mt,
                this.nonDisplayedMemory = new mt,
                this.lastOutputScreen = new mt,
                this.currRollUpRow = this.displayedMemory.rows[nt - 1],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null
            }
            var t = e.prototype;
            return t.reset = function() {
                this.mode = null,
                this.displayedMemory.reset(),
                this.nonDisplayedMemory.reset(),
                this.lastOutputScreen.reset(),
                this.currRollUpRow = this.displayedMemory.rows[nt - 1],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null
            }
            ,
            t.getHandler = function() {
                return this.outputFilter
            }
            ,
            t.setHandler = function(e) {
                this.outputFilter = e
            }
            ,
            t.setPAC = function(e) {
                this.writeScreen.setPAC(e)
            }
            ,
            t.setBkgData = function(e) {
                this.writeScreen.setBkgData(e)
            }
            ,
            t.setMode = function(e) {
                e !== this.mode && (this.mode = e,
                ht.log("INFO", "MODE=" + e),
                "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory,
                this.writeScreen.reset()),
                "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null,
                this.nonDisplayedMemory.nrRollUpRows = null),
                this.mode = e)
            }
            ,
            t.insertChars = function(e) {
                for (var t = 0; t < e.length; t++)
                    this.writeScreen.insertChar(e[t]);
                var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                ht.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)),
                "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (ht.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                this.outputDataUpdate())
            }
            ,
            t.ccRCL = function() {
                ht.log("INFO", "RCL - Resume Caption Loading"),
                this.setMode("MODE_POP-ON")
            }
            ,
            t.ccBS = function() {
                ht.log("INFO", "BS - BackSpace"),
                "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(),
                this.writeScreen === this.displayedMemory && this.outputDataUpdate())
            }
            ,
            t.ccAOF = function() {}
            ,
            t.ccAON = function() {}
            ,
            t.ccDER = function() {
                ht.log("INFO", "DER- Delete to End of Row"),
                this.writeScreen.clearToEndOfRow(),
                this.outputDataUpdate()
            }
            ,
            t.ccRU = function(e) {
                ht.log("INFO", "RU(" + e + ") - Roll Up"),
                this.writeScreen = this.displayedMemory,
                this.setMode("MODE_ROLL-UP"),
                this.writeScreen.setRollUpRows(e)
            }
            ,
            t.ccFON = function() {
                ht.log("INFO", "FON - Flash On"),
                this.writeScreen.setPen({
                    flash: !0
                })
            }
            ,
            t.ccRDC = function() {
                ht.log("INFO", "RDC - Resume Direct Captioning"),
                this.setMode("MODE_PAINT-ON")
            }
            ,
            t.ccTR = function() {
                ht.log("INFO", "TR"),
                this.setMode("MODE_TEXT")
            }
            ,
            t.ccRTD = function() {
                ht.log("INFO", "RTD"),
                this.setMode("MODE_TEXT")
            }
            ,
            t.ccEDM = function() {
                ht.log("INFO", "EDM - Erase Displayed Memory"),
                this.displayedMemory.reset(),
                this.outputDataUpdate(!0)
            }
            ,
            t.ccCR = function() {
                ht.log("INFO", "CR - Carriage Return"),
                this.writeScreen.rollUp(),
                this.outputDataUpdate(!0)
            }
            ,
            t.ccENM = function() {
                ht.log("INFO", "ENM - Erase Non-displayed Memory"),
                this.nonDisplayedMemory.reset()
            }
            ,
            t.ccEOC = function() {
                if (ht.log("INFO", "EOC - End Of Caption"),
                "MODE_POP-ON" === this.mode) {
                    var e = this.displayedMemory;
                    this.displayedMemory = this.nonDisplayedMemory,
                    this.nonDisplayedMemory = e,
                    this.writeScreen = this.nonDisplayedMemory,
                    ht.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                }
                this.outputDataUpdate(!0)
            }
            ,
            t.ccTO = function(e) {
                ht.log("INFO", "TO(" + e + ") - Tab Offset"),
                this.writeScreen.moveCursor(e)
            }
            ,
            t.ccMIDROW = function(e) {
                var t = {
                    flash: !1
                };
                if (t.underline = e % 2 == 1,
                t.italics = e >= 46,
                t.italics)
                    t.foreground = "white";
                else {
                    var r = Math.floor(e / 2) - 16;
                    t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                }
                ht.log("INFO", "MIDROW: " + JSON.stringify(t)),
                this.writeScreen.setPen(t)
            }
            ,
            t.outputDataUpdate = function(e) {
                void 0 === e && (e = !1);
                var t = ht.time;
                null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen),
                e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t,
                this.lastOutputScreen.copy(this.displayedMemory))
            }
            ,
            t.cueSplitAtTime = function(e) {
                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
                this.cueStartTime = e))
            }
            ,
            e
        }()
          , bt = function() {
            function e(e, t, r) {
                this.field = void 0,
                this.outputs = void 0,
                this.channels = void 0,
                this.currChNr = void 0,
                this.lastCmdA = void 0,
                this.lastCmdB = void 0,
                this.lastTime = void 0,
                this.dataCounters = void 0,
                this.field = e || 1,
                this.outputs = [t, r],
                this.channels = [new yt(1,t), new yt(2,r)],
                this.currChNr = -1,
                this.lastCmdA = null,
                this.lastCmdB = null,
                this.lastTime = null,
                this.dataCounters = {
                    padding: 0,
                    char: 0,
                    cmd: 0,
                    other: 0
                }
            }
            var t = e.prototype;
            return t.getHandler = function(e) {
                return this.channels[e].getHandler()
            }
            ,
            t.setHandler = function(e, t) {
                this.channels[e].setHandler(t)
            }
            ,
            t.addData = function(e, t) {
                var r, i, a, n = !1;
                this.lastTime = e,
                ht.setTime(e);
                for (var s = 0; s < t.length; s += 2)
                    if (i = 127 & t[s],
                    a = 127 & t[s + 1],
                    0 !== i || 0 !== a) {
                        if (ht.log("DATA", "[" + ft([t[s], t[s + 1]]) + "] -> (" + ft([i, a]) + ")"),
                        (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)),
                        r || (r = this.parsePAC(i, a)),
                        r || (r = this.parseBackgroundAttributes(i, a)),
                        !r)
                            if (n = this.parseChars(i, a))
                                if (this.currChNr && this.currChNr >= 0)
                                    this.channels[this.currChNr - 1].insertChars(n);
                                else
                                    ht.log("WARNING", "No channel found yet. TEXT-MODE?");
                        r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2,
                        ht.log("WARNING", "Couldn't parse cleaned data " + ft([i, a]) + " orig: " + ft([t[s], t[s + 1]])))
                    } else
                        this.dataCounters.padding += 2
            }
            ,
            t.parseCmd = function(e, t) {
                var r = null;
                if (!((20 === e || 28 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 33 && t <= 35))
                    return !1;
                if (e === this.lastCmdA && t === this.lastCmdB)
                    return this.lastCmdA = null,
                    this.lastCmdB = null,
                    ht.log("DEBUG", "Repeated command (" + ft([e, t]) + ") is dropped"),
                    !0;
                r = 20 === e || 23 === e ? 1 : 2;
                var i = this.channels[r - 1];
                return 20 === e || 28 === e ? 32 === t ? i.ccRCL() : 33 === t ? i.ccBS() : 34 === t ? i.ccAOF() : 35 === t ? i.ccAON() : 36 === t ? i.ccDER() : 37 === t ? i.ccRU(2) : 38 === t ? i.ccRU(3) : 39 === t ? i.ccRU(4) : 40 === t ? i.ccFON() : 41 === t ? i.ccRDC() : 42 === t ? i.ccTR() : 43 === t ? i.ccRTD() : 44 === t ? i.ccEDM() : 45 === t ? i.ccCR() : 46 === t ? i.ccENM() : 47 === t && i.ccEOC() : i.ccTO(t - 32),
                this.lastCmdA = e,
                this.lastCmdB = t,
                this.currChNr = r,
                !0
            }
            ,
            t.parseMidrow = function(e, t) {
                var r = null;
                return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (ht.log("ERROR", "Mismatch channel in midrow parsing"),
                !1) : (this.channels[r - 1].ccMIDROW(t),
                ht.log("DEBUG", "MIDROW (" + ft([e, t]) + ")"),
                !0))
            }
            ,
            t.parsePAC = function(e, t) {
                var r, i = null;
                if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127) && !((16 === e || 24 === e) && t >= 64 && t <= 95))
                    return !1;
                if (e === this.lastCmdA && t === this.lastCmdB)
                    return this.lastCmdA = null,
                    this.lastCmdB = null,
                    !0;
                r = e <= 23 ? 1 : 2,
                i = t >= 64 && t <= 95 ? 1 === r ? ot[e] : dt[e] : 1 === r ? lt[e] : ut[e];
                var a = this.interpretPAC(i, t);
                return this.channels[r - 1].setPAC(a),
                this.lastCmdA = e,
                this.lastCmdB = t,
                this.currChNr = r,
                !0
            }
            ,
            t.interpretPAC = function(e, t) {
                var r = t
                  , i = {
                    color: null,
                    italics: !1,
                    indent: null,
                    underline: !1,
                    row: e
                };
                return r = t > 95 ? t - 96 : t - 64,
                i.underline = 1 == (1 & r),
                r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0,
                i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2),
                i
            }
            ,
            t.parseChars = function(e, t) {
                var r = null
                  , i = null
                  , a = null;
                if (e >= 25 ? (r = 2,
                a = e - 8) : (r = 1,
                a = e),
                a >= 17 && a <= 19) {
                    var n = t;
                    n = 17 === a ? t + 80 : 18 === a ? t + 112 : t + 144,
                    ht.log("INFO", "Special char '" + at(n) + "' in channel " + r),
                    i = [n]
                } else
                    e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
                if (i) {
                    var s = ft(i);
                    ht.log("DEBUG", "Char codes =  " + s.join(",")),
                    this.lastCmdA = null,
                    this.lastCmdB = null
                }
                return i
            }
            ,
            t.parseBackgroundAttributes = function(e, t) {
                var r, i, a;
                return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {},
                16 === e || 24 === e ? (i = Math.floor((t - 32) / 2),
                r.background = ct[i],
                t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black",
                47 === t && (r.underline = !0)),
                a = e < 24 ? 1 : 2,
                this.channels[a - 1].setBkgData(r),
                this.lastCmdA = null,
                this.lastCmdB = null,
                !0)
            }
            ,
            t.reset = function() {
                for (var e = 0; e < this.channels.length; e++)
                    this.channels[e] && this.channels[e].reset();
                this.lastCmdA = null,
                this.lastCmdB = null
            }
            ,
            t.cueSplitAtTime = function(e) {
                for (var t = 0; t < this.channels.length; t++)
                    this.channels[t] && this.channels[t].cueSplitAtTime(e)
            }
            ,
            e
        }()
          , Et = function() {
            function e(e, t) {
                this.timelineController = void 0,
                this.trackName = void 0,
                this.startTime = void 0,
                this.endTime = void 0,
                this.screen = void 0,
                this.timelineController = e,
                this.trackName = t,
                this.startTime = null,
                this.endTime = null,
                this.screen = null
            }
            var t = e.prototype;
            return t.dispatchCue = function() {
                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen),
                this.startTime = null)
            }
            ,
            t.newCue = function(e, t, r) {
                (null === this.startTime || this.startTime > e) && (this.startTime = e),
                this.endTime = t,
                this.screen = r,
                this.timelineController.createCaptionsTrack(this.trackName)
            }
            ,
            e
        }()
          , Tt = function(e, t, r) {
            return e.substr(r || 0, t.length) === t
        }
          , St = function(e) {
            for (var t = 5381, r = e.length; r; )
                t = 33 * t ^ e.charCodeAt(--r);
            return (t >>> 0).toString()
        }
          , _t = {
            parse: function(e, t, r, i, a, n) {
                var s, o = Object(Te.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"), d = "00:00.000", u = 0, c = 0, h = 0, f = [], g = !0, p = !1, v = new et;
                v.oncue = function(e) {
                    var t = r[i]
                      , a = r.ccOffset;
                    t && t.new && (void 0 !== c ? a = r.ccOffset = t.start : function(e, t, r) {
                        var i = e[t]
                          , a = e[i.prevCC];
                        if (!a || !a.new && i.new)
                            return e.ccOffset = e.presentationOffset = i.start,
                            void (i.new = !1);
                        for (; a && a.new; )
                            e.ccOffset += i.start - a.start,
                            i.new = !1,
                            a = e[(i = a).prevCC];
                        e.presentationOffset = r
                    }(r, i, h)),
                    h && (a = h - r.presentationOffset),
                    p && (e.startTime += a - c,
                    e.endTime += a - c),
                    e.id = St(e.startTime.toString()) + St(e.endTime.toString()) + St(e.text),
                    e.text = decodeURIComponent(encodeURIComponent(e.text)),
                    e.endTime > 0 && f.push(e)
                }
                ,
                v.onparsingerror = function(e) {
                    s = e
                }
                ,
                v.onflush = function() {
                    s && n ? n(s) : a(f)
                }
                ,
                o.forEach(function(e) {
                    if (g) {
                        if (Tt(e, "X-TIMESTAMP-MAP=")) {
                            g = !1,
                            p = !0,
                            e.substr(16).split(",").forEach(function(e) {
                                Tt(e, "LOCAL:") ? d = e.substr(6) : Tt(e, "MPEGTS:") && (u = parseInt(e.substr(7)))
                            });
                            try {
                                t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592),
                                u -= t,
                                c = function(e) {
                                    var t = parseInt(e.substr(-3))
                                      , r = parseInt(e.substr(-6, 2))
                                      , i = parseInt(e.substr(-9, 2))
                                      , a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
                                    if (!(Object(l.a)(t) && Object(l.a)(r) && Object(l.a)(i) && Object(l.a)(a)))
                                        throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
                                    return t += 1e3 * r,
                                    t += 6e4 * i,
                                    t += 36e5 * a
                                }(d) / 1e3,
                                h = u / 9e4
                            } catch (e) {
                                p = !1,
                                s = e
                            }
                            return
                        }
                        "" === e && (g = !1)
                    }
                    v.parse(e + "\n")
                }),
                v.flush()
            }
        };
        function At(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Rt(e, t) {
            return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
        }
        var Lt = function(e) {
            var t, r;
            function i(t) {
                var r;
                if ((r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_USERDATA, d.a.FRAG_DECRYPTED, d.a.MANIFEST_LOADING, d.a.MANIFEST_LOADED, d.a.FRAG_LOADED, d.a.INIT_PTS_FOUND) || this).media = null,
                r.config = void 0,
                r.enabled = !0,
                r.Cues = void 0,
                r.textTracks = [],
                r.tracks = [],
                r.initPTS = [],
                r.unparsedVttFrags = [],
                r.cueRanges = [],
                r.captionsTracks = {},
                r.captionsProperties = void 0,
                r.cea608Parser = void 0,
                r.lastSn = -1,
                r.prevCC = -1,
                r.vttCCs = null,
                r.hls = t,
                r.config = t.config,
                r.Cues = t.config.cueHandler,
                r.captionsProperties = {
                    textTrack1: {
                        label: r.config.captionsTextTrack1Label,
                        languageCode: r.config.captionsTextTrack1LanguageCode
                    },
                    textTrack2: {
                        label: r.config.captionsTextTrack2Label,
                        languageCode: r.config.captionsTextTrack2LanguageCode
                    }
                },
                r.config.enableCEA708Captions) {
                    var i = new Et(At(r),"textTrack1")
                      , a = new Et(At(r),"textTrack2");
                    r.cea608Parser = new bt(0,i,a)
                }
                return r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.addCues = function(e, t, r, i) {
                for (var a, n, s, o, l = this.cueRanges, d = !1, u = l.length; u--; ) {
                    var c = l[u]
                      , h = (a = c[0],
                    n = c[1],
                    s = t,
                    o = r,
                    Math.min(n, o) - Math.max(a, s));
                    if (h >= 0 && (c[0] = Math.min(c[0], t),
                    c[1] = Math.max(c[1], r),
                    d = !0,
                    h / (r - t) > .5))
                        return
                }
                d || l.push([t, r]),
                this.Cues.newCue(this.captionsTracks[e], t, r, i)
            }
            ,
            a.onInitPtsFound = function(e) {
                var t = this
                  , r = e.frag
                  , i = e.id
                  , a = e.initPTS
                  , n = this.unparsedVttFrags;
                "main" === i && (this.initPTS[r.cc] = a),
                n.length && (this.unparsedVttFrags = [],
                n.forEach(function(e) {
                    t.onFragLoaded(e)
                }))
            }
            ,
            a.getExistingTrack = function(e) {
                var t = this.media;
                if (t)
                    for (var r = 0; r < t.textTracks.length; r++) {
                        var i = t.textTracks[r];
                        if (i[e])
                            return i
                    }
                return null
            }
            ,
            a.createCaptionsTrack = function(e) {
                var t = this.captionsProperties
                  , r = this.captionsTracks
                  , i = this.media
                  , a = t[e]
                  , n = a.label
                  , s = a.languageCode;
                if (!r[e]) {
                    var o = this.getExistingTrack(e);
                    if (o)
                        r[e] = o,
                        _e(r[e]),
                        Se(r[e], i);
                    else {
                        var l = this.createTextTrack("captions", n, s);
                        l && (l[e] = !0,
                        r[e] = l)
                    }
                }
            }
            ,
            a.createTextTrack = function(e, t, r) {
                var i = this.media;
                if (i)
                    return i.addTextTrack(e, t, r)
            }
            ,
            a.destroy = function() {
                e.prototype.destroy.call(this)
            }
            ,
            a.onMediaAttaching = function(e) {
                this.media = e.media,
                this._cleanTracks()
            }
            ,
            a.onMediaDetaching = function() {
                var e = this.captionsTracks;
                Object.keys(e).forEach(function(t) {
                    _e(e[t]),
                    delete e[t]
                })
            }
            ,
            a.onManifestLoading = function() {
                this.lastSn = -1,
                this.prevCC = -1,
                this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !1
                    }
                },
                this._cleanTracks()
            }
            ,
            a._cleanTracks = function() {
                var e = this.media;
                if (e) {
                    var t = e.textTracks;
                    if (t)
                        for (var r = 0; r < t.length; r++)
                            _e(t[r])
                }
            }
            ,
            a.onManifestLoaded = function(e) {
                var t = this;
                if (this.textTracks = [],
                this.unparsedVttFrags = this.unparsedVttFrags || [],
                this.initPTS = [],
                this.cueRanges = [],
                this.config.enableWebVTT) {
                    this.tracks = e.subtitles || [];
                    var r = this.media ? this.media.textTracks : [];
                    this.tracks.forEach(function(e, i) {
                        var a;
                        if (i < r.length) {
                            for (var n = null, s = 0; s < r.length; s++)
                                if (Rt(r[s], e)) {
                                    n = r[s];
                                    break
                                }
                            n && (a = n)
                        }
                        a || (a = t.createTextTrack("subtitles", e.name, e.lang)),
                        e.default ? a.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : a.mode = "disabled",
                        t.textTracks.push(a)
                    })
                }
            }
            ,
            a.onFragLoaded = function(e) {
                var t = e.frag
                  , r = e.payload
                  , i = this.cea608Parser
                  , a = this.initPTS
                  , n = this.lastSn
                  , s = this.unparsedVttFrags;
                if ("main" === t.type) {
                    var o = t.sn;
                    t.sn !== n + 1 && i && i.reset(),
                    this.lastSn = o
                } else if ("subtitle" === t.type)
                    if (r.byteLength) {
                        if (!Object(l.a)(a[t.cc]))
                            return s.push(e),
                            void (a.length && this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: t
                            }));
                        var u = t.decryptdata;
                        null != u && null != u.key && "AES-128" === u.method || this._parseVTTs(t, r)
                    } else
                        this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t
                        })
            }
            ,
            a._parseVTTs = function(e, t) {
                var r = this.hls
                  , i = this.prevCC
                  , a = this.textTracks
                  , n = this.vttCCs;
                n[e.cc] || (n[e.cc] = {
                    start: e.start,
                    prevCC: i,
                    new: !0
                },
                this.prevCC = e.cc),
                _t.parse(t, this.initPTS[e.cc], n, e.cc, function(t) {
                    var i = a[e.level];
                    "disabled" !== i.mode ? (t.forEach(function(e) {
                        if (!i.cues.getCueById(e.id))
                            try {
                                if (i.addCue(e),
                                !i.cues.getCueById(e.id))
                                    throw new Error("addCue is failed for: " + e)
                            } catch (r) {
                                u.b.debug("Failed occurred on adding cues: " + r);
                                var t = new window.TextTrackCue(e.startTime,e.endTime,e.text);
                                t.id = e.id,
                                i.addCue(t)
                            }
                    }),
                    r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: e
                    })) : r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: e
                    })
                }, function(t) {
                    u.b.log("Failed to parse VTT cue: " + t),
                    r.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: e
                    })
                })
            }
            ,
            a.onFragDecrypted = function(e) {
                var t = e.frag
                  , r = e.payload;
                if ("subtitle" === t.type) {
                    if (!Object(l.a)(this.initPTS[t.cc]))
                        return void this.unparsedVttFrags.push(e);
                    this._parseVTTs(t, r)
                }
            }
            ,
            a.onFragParsingUserdata = function(e) {
                if (this.enabled && this.cea608Parser)
                    for (var t = 0; t < e.samples.length; t++) {
                        var r = e.samples[t].bytes;
                        if (r) {
                            var i = this.extractCea608Data(r);
                            this.cea608Parser.addData(e.samples[t].pts, i)
                        }
                    }
            }
            ,
            a.extractCea608Data = function(e) {
                for (var t, r, i, a = 31 & e[0], n = 2, s = [], o = 0; o < a; o++)
                    t = e[n++],
                    r = 127 & e[n++],
                    i = 127 & e[n++],
                    0 === r && 0 === i || 0 != (4 & t) && 0 === (3 & t) && (s.push(r),
                    s.push(i));
                return s
            }
            ,
            i
        }(h);
        function Dt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function wt(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var i = e[r];
                "subtitles" === i.kind && i.label && t.push(e[r])
            }
            return t
        }
        var kt = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADED, d.a.SUBTITLE_TRACK_LOADED) || this).tracks = [],
                r.trackId = -1,
                r.media = null,
                r.stopped = !0,
                r.subtitleDisplay = !0,
                r.queuedDefaultTrack = null,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, o = i.prototype;
            return o.destroy = function() {
                h.prototype.destroy.call(this)
            }
            ,
            o.onMediaAttached = function(e) {
                var t = this;
                this.media = e.media,
                this.media && (Object(l.a)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack,
                this.queuedDefaultTrack = null),
                this.trackChangeListener = this._onTextTracksChanged.bind(this),
                this.useTextTrackPolling = !(this.media.textTracks && "onchange"in this.media.textTracks),
                this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                    t.trackChangeListener()
                }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
            }
            ,
            o.onMediaDetaching = function() {
                this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener),
                Object(l.a)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack),
                wt(this.media.textTracks).forEach(function(e) {
                    _e(e)
                }),
                this.subtitleTrack = -1,
                this.media = null)
            }
            ,
            o.onManifestLoaded = function(e) {
                var t = this
                  , r = e.subtitles || [];
                this.tracks = r,
                this.hls.trigger(d.a.SUBTITLE_TRACKS_UPDATED, {
                    subtitleTracks: r
                }),
                r.forEach(function(e) {
                    e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                })
            }
            ,
            o.onSubtitleTrackLoaded = function(e) {
                var t = this
                  , r = e.id
                  , i = e.details
                  , a = this.trackId
                  , n = this.tracks
                  , s = n[a];
                if (r >= n.length || r !== a || !s || this.stopped)
                    this._clearReloadTimer();
                else if (u.b.log("subtitle track " + r + " loaded"),
                i.live) {
                    var o = ae(s.details, i, e.stats.trequest);
                    u.b.log("Reloading live subtitle playlist in " + o + "ms"),
                    this.timer = setTimeout(function() {
                        t._loadCurrentTrack()
                    }, o)
                } else
                    this._clearReloadTimer()
            }
            ,
            o.startLoad = function() {
                this.stopped = !1,
                this._loadCurrentTrack()
            }
            ,
            o.stopLoad = function() {
                this.stopped = !0,
                this._clearReloadTimer()
            }
            ,
            o._clearReloadTimer = function() {
                this.timer && (clearTimeout(this.timer),
                this.timer = null)
            }
            ,
            o._loadCurrentTrack = function() {
                var e = this.trackId
                  , t = this.tracks
                  , r = this.hls
                  , i = t[e];
                e < 0 || !i || i.details && !i.details.live || (u.b.log("Loading subtitle track " + e),
                r.trigger(d.a.SUBTITLE_TRACK_LOADING, {
                    url: i.url,
                    id: e
                }))
            }
            ,
            o._toggleTrackModes = function(e) {
                var t = this.media
                  , r = this.subtitleDisplay
                  , i = this.trackId;
                if (t) {
                    var a = wt(t.textTracks);
                    if (-1 === e)
                        [].slice.call(a).forEach(function(e) {
                            e.mode = "disabled"
                        });
                    else {
                        var n = a[i];
                        n && (n.mode = "disabled")
                    }
                    var s = a[e];
                    s && (s.mode = r ? "showing" : "hidden")
                }
            }
            ,
            o._setSubtitleTrackInternal = function(e) {
                var t = this.hls
                  , r = this.tracks;
                !Object(l.a)(e) || e < -1 || e >= r.length || (this.trackId = e,
                u.b.log("Switching to subtitle track " + e),
                t.trigger(d.a.SUBTITLE_TRACK_SWITCH, {
                    id: e
                }),
                this._loadCurrentTrack())
            }
            ,
            o._onTextTracksChanged = function() {
                if (this.media) {
                    for (var e = -1, t = wt(this.media.textTracks), r = 0; r < t.length; r++)
                        if ("hidden" === t[r].mode)
                            e = r;
                        else if ("showing" === t[r].mode) {
                            e = r;
                            break
                        }
                    this.subtitleTrack = e
                }
            }
            ,
            a = i,
            (n = [{
                key: "subtitleTracks",
                get: function() {
                    return this.tracks
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    return this.trackId
                },
                set: function(e) {
                    this.trackId !== e && (this._toggleTrackModes(e),
                    this._setSubtitleTrackInternal(e))
                }
            }]) && Dt(a.prototype, n),
            s && Dt(a, s),
            i
        }(h)
          , It = r(7);
        var Ot, Ct = window.performance, Pt = function(e) {
            var t, r;
            function i(t, r) {
                var i;
                return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.ERROR, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.SUBTITLE_TRACKS_UPDATED, d.a.SUBTITLE_TRACK_SWITCH, d.a.SUBTITLE_TRACK_LOADED, d.a.SUBTITLE_FRAG_PROCESSED, d.a.LEVEL_UPDATED) || this).fragmentTracker = r,
                i.config = t.config,
                i.state = ge.STOPPED,
                i.tracks = [],
                i.tracksBuffered = [],
                i.currentTrackId = -1,
                i.decrypter = new It.a(t,t.config),
                i.lastAVStart = 0,
                i._onMediaSeeking = i.onMediaSeeking.bind(function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(i)),
                i
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a = i.prototype;
            return a.onSubtitleFragProcessed = function(e) {
                var t = e.frag
                  , r = e.success;
                if (this.fragPrevious = t,
                this.state = ge.IDLE,
                r) {
                    var i = this.tracksBuffered[this.currentTrackId];
                    if (i) {
                        for (var a, n = t.start, s = 0; s < i.length; s++)
                            if (n >= i[s].start && n <= i[s].end) {
                                a = i[s];
                                break
                            }
                        var o = t.start + t.duration;
                        a ? a.end = o : (a = {
                            start: n,
                            end: o
                        },
                        i.push(a))
                    }
                }
            }
            ,
            a.onMediaAttached = function(e) {
                var t = e.media;
                this.media = t,
                t.addEventListener("seeking", this._onMediaSeeking),
                this.state = ge.IDLE
            }
            ,
            a.onMediaDetaching = function() {
                var e = this;
                this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking),
                this.fragmentTracker.removeAllFragments(),
                this.currentTrackId = -1,
                this.tracks.forEach(function(t) {
                    e.tracksBuffered[t.id] = []
                }),
                this.media = null,
                this.state = ge.STOPPED)
            }
            ,
            a.onError = function(e) {
                var t = e.frag;
                t && "subtitle" === t.type && (this.state = ge.IDLE)
            }
            ,
            a.onSubtitleTracksUpdated = function(e) {
                var t = this;
                u.b.log("subtitle tracks updated"),
                this.tracksBuffered = [],
                this.tracks = e.subtitleTracks,
                this.tracks.forEach(function(e) {
                    t.tracksBuffered[e.id] = []
                })
            }
            ,
            a.onSubtitleTrackSwitch = function(e) {
                if (this.currentTrackId = e.id,
                this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
                    var t = this.tracks[this.currentTrackId];
                    t && t.details && this.setInterval(500)
                } else
                    this.clearInterval()
            }
            ,
            a.onSubtitleTrackLoaded = function(e) {
                var t = e.id
                  , r = e.details
                  , i = this.currentTrackId
                  , a = this.tracks
                  , n = a[i];
                t >= a.length || t !== i || !n || (r.live && function(e, t, r) {
                    void 0 === r && (r = 0);
                    var i = -1;
                    ie(e, t, function(e, t, r) {
                        t.start = e.start,
                        i = r
                    });
                    var a = t.fragments;
                    if (i < 0)
                        a.forEach(function(e) {
                            e.start += r
                        });
                    else
                        for (var n = i + 1; n < a.length; n++)
                            a[n].start = a[n - 1].start + a[n - 1].duration
                }(n.details, r, this.lastAVStart),
                n.details = r,
                this.setInterval(500))
            }
            ,
            a.onKeyLoaded = function() {
                this.state === ge.KEY_LOADING && (this.state = ge.IDLE)
            }
            ,
            a.onFragLoaded = function(e) {
                var t = this.fragCurrent
                  , r = e.frag.decryptdata
                  , i = e.frag
                  , a = this.hls;
                if (this.state === ge.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
                    var n = Ct.now();
                    this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, function(e) {
                        var t = Ct.now();
                        a.trigger(d.a.FRAG_DECRYPTED, {
                            frag: i,
                            payload: e,
                            stats: {
                                tstart: n,
                                tdecrypt: t
                            }
                        })
                    })
                }
            }
            ,
            a.onLevelUpdated = function(e) {
                var t = e.details.fragments;
                this.lastAVStart = t.length ? t[0].start : 0
            }
            ,
            a.doTick = function() {
                if (this.media)
                    switch (this.state) {
                    case ge.IDLE:
                        var e = this.config
                          , t = this.currentTrackId
                          , r = this.fragmentTracker
                          , i = this.media
                          , a = this.tracks;
                        if (!a || !a[t] || !a[t].details)
                            break;
                        var n, s = e.maxBufferHole, o = e.maxFragLookUpTolerance, l = Math.min(e.maxBufferLength, e.maxMaxBufferLength), c = H.bufferedInfo(this._getBuffered(), i.currentTime, s), h = c.end, f = c.len, g = a[t].details, p = g.fragments, v = p.length, m = p[v - 1].start + p[v - 1].duration;
                        if (f > l)
                            return;
                        var y = this.fragPrevious;
                        h < m ? (y && g.hasProgramDateTime && (n = le(p, y.endProgramDateTime, o)),
                        n || (n = de(y, p, h, o))) : n = p[v - 1],
                        n && n.encrypted ? (u.b.log("Loading key for " + n.sn),
                        this.state = ge.KEY_LOADING,
                        this.hls.trigger(d.a.KEY_LOADING, {
                            frag: n
                        })) : n && r.getState(n) === N && (this.fragCurrent = n,
                        this.state = ge.FRAG_LOADING,
                        this.hls.trigger(d.a.FRAG_LOADING, {
                            frag: n
                        }))
                    }
                else
                    this.state = ge.IDLE
            }
            ,
            a.stopLoad = function() {
                this.lastAVStart = 0,
                e.prototype.stopLoad.call(this)
            }
            ,
            a._getBuffered = function() {
                return this.tracksBuffered[this.currentTrackId] || []
            }
            ,
            a.onMediaSeeking = function() {
                this.fragPrevious = null
            }
            ,
            i
        }(pe);
        !function(e) {
            e.WIDEVINE = "com.widevine.alpha",
            e.PLAYREADY = "com.microsoft.playready"
        }(Ot || (Ot = {}));
        var xt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
        function Ft(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var Mt = function(e) {
            var t, r;
            function i(t) {
                var r;
                return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHED, d.a.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0,
                r._licenseXhrSetup = void 0,
                r._emeEnabled = void 0,
                r._requestMediaKeySystemAccess = void 0,
                r._config = void 0,
                r._mediaKeysList = [],
                r._media = null,
                r._hasSetMediaKeys = !1,
                r._requestLicenseFailureCount = 0,
                r._onMediaEncrypted = function(e) {
                    u.b.log('Media is encrypted using "' + e.initDataType + '" init data type'),
                    r._attemptSetMediaKeys(),
                    r._generateRequestWithPreferredKeySession(e.initDataType, e.initData)
                }
                ,
                r._config = t.config,
                r._widevineLicenseUrl = r._config.widevineLicenseUrl,
                r._licenseXhrSetup = r._config.licenseXhrSetup,
                r._emeEnabled = r._config.emeEnabled,
                r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r;
            var a, n, s, l = i.prototype;
            return l.getLicenseServerUrl = function(e) {
                switch (e) {
                case Ot.WIDEVINE:
                    if (!this._widevineLicenseUrl)
                        break;
                    return this._widevineLicenseUrl
                }
                throw new Error('no license server URL configured for key-system "' + e + '"')
            }
            ,
            l._attemptKeySystemAccess = function(e, t, r) {
                var i = this
                  , a = function(e, t, r) {
                    switch (e) {
                    case Ot.WIDEVINE:
                        return function(e, t) {
                            var r = {
                                videoCapabilities: []
                            };
                            return t.forEach(function(e) {
                                r.videoCapabilities.push({
                                    contentType: 'video/mp4; codecs="' + e + '"'
                                })
                            }),
                            [r]
                        }(0, r);
                    default:
                        throw new Error("Unknown key-system: " + e)
                    }
                }(e, 0, r);
                u.b.log("Requesting encrypted media key-system access"),
                this.requestMediaKeySystemAccess(e, a).then(function(t) {
                    i._onMediaKeySystemAccessObtained(e, t)
                }).catch(function(t) {
                    u.b.error('Failed to obtain key-system "' + e + '" access:', t)
                })
            }
            ,
            l._onMediaKeySystemAccessObtained = function(e, t) {
                var r = this;
                u.b.log('Access for key-system "' + e + '" obtained');
                var i = {
                    mediaKeysSessionInitialized: !1,
                    mediaKeySystemAccess: t,
                    mediaKeySystemDomain: e
                };
                this._mediaKeysList.push(i),
                t.createMediaKeys().then(function(t) {
                    i.mediaKeys = t,
                    u.b.log('Media-keys created for key-system "' + e + '"'),
                    r._onMediaKeysCreated()
                }).catch(function(e) {
                    u.b.error("Failed to create media-keys:", e)
                })
            }
            ,
            l._onMediaKeysCreated = function() {
                var e = this;
                this._mediaKeysList.forEach(function(t) {
                    t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(),
                    e._onNewMediaKeySession(t.mediaKeysSession))
                })
            }
            ,
            l._onNewMediaKeySession = function(e) {
                var t = this;
                u.b.log("New key-system session " + e.sessionId),
                e.addEventListener("message", function(r) {
                    t._onKeySessionMessage(e, r.message)
                }, !1)
            }
            ,
            l._onKeySessionMessage = function(e, t) {
                u.b.log("Got EME message event, creating license request"),
                this._requestLicense(t, function(t) {
                    u.b.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"),
                    e.update(t)
                })
            }
            ,
            l._attemptSetMediaKeys = function() {
                if (!this._media)
                    throw new Error("Attempted to set mediaKeys without first attaching a media element");
                if (!this._hasSetMediaKeys) {
                    var e = this._mediaKeysList[0];
                    if (!e || !e.mediaKeys)
                        return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                        void this.hls.trigger(d.a.ERROR, {
                            type: o.b.KEY_SYSTEM_ERROR,
                            details: o.a.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                    u.b.log("Setting keys for encrypted media"),
                    this._media.setMediaKeys(e.mediaKeys),
                    this._hasSetMediaKeys = !0
                }
            }
            ,
            l._generateRequestWithPreferredKeySession = function(e, t) {
                var r = this
                  , i = this._mediaKeysList[0];
                if (!i)
                    return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                    void this.hls.trigger(d.a.ERROR, {
                        type: o.b.KEY_SYSTEM_ERROR,
                        details: o.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                if (i.mediaKeysSessionInitialized)
                    u.b.warn("Key-Session already initialized but requested again");
                else {
                    var a = i.mediaKeysSession;
                    if (!a)
                        return u.b.error("Fatal: Media is encrypted but no key-session existing"),
                        void this.hls.trigger(d.a.ERROR, {
                            type: o.b.KEY_SYSTEM_ERROR,
                            details: o.a.KEY_SYSTEM_NO_SESSION,
                            fatal: !0
                        });
                    if (!t)
                        return u.b.warn("Fatal: initData required for generating a key session is null"),
                        void this.hls.trigger(d.a.ERROR, {
                            type: o.b.KEY_SYSTEM_ERROR,
                            details: o.a.KEY_SYSTEM_NO_INIT_DATA,
                            fatal: !0
                        });
                    u.b.log('Generating key-session request for "' + e + '" init data type'),
                    i.mediaKeysSessionInitialized = !0,
                    a.generateRequest(e, t).then(function() {
                        u.b.debug("Key-session generation succeeded")
                    }).catch(function(e) {
                        u.b.error("Error generating key-session request:", e),
                        r.hls.trigger(d.a.ERROR, {
                            type: o.b.KEY_SYSTEM_ERROR,
                            details: o.a.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                        })
                    })
                }
            }
            ,
            l._createLicenseXhr = function(e, t, r) {
                var i = new XMLHttpRequest
                  , a = this._licenseXhrSetup;
                try {
                    if (a)
                        try {
                            a(i, e)
                        } catch (t) {
                            i.open("POST", e, !0),
                            a(i, e)
                        }
                    i.readyState || i.open("POST", e, !0)
                } catch (e) {
                    throw new Error("issue setting up KeySystem license XHR " + e)
                }
                return i.responseType = "arraybuffer",
                i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r),
                i
            }
            ,
            l._onLicenseRequestReadyStageChange = function(e, t, r, i) {
                switch (e.readyState) {
                case 4:
                    if (200 === e.status)
                        this._requestLicenseFailureCount = 0,
                        u.b.log("License request succeeded"),
                        "arraybuffer" !== e.responseType && u.b.warn("xhr response type was not set to the expected arraybuffer for license request"),
                        i(e.response);
                    else {
                        if (u.b.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"),
                        this._requestLicenseFailureCount++,
                        this._requestLicenseFailureCount > 3)
                            return void this.hls.trigger(d.a.ERROR, {
                                type: o.b.KEY_SYSTEM_ERROR,
                                details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0
                            });
                        var a = 3 - this._requestLicenseFailureCount + 1;
                        u.b.warn("Retrying license request, " + a + " attempts left"),
                        this._requestLicense(r, i)
                    }
                }
            }
            ,
            l._generateLicenseRequestChallenge = function(e, t) {
                switch (e.mediaKeySystemDomain) {
                case Ot.WIDEVINE:
                    return t
                }
                throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
            }
            ,
            l._requestLicense = function(e, t) {
                u.b.log("Requesting content license for key-system");
                var r = this._mediaKeysList[0];
                if (!r)
                    return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                    void this.hls.trigger(d.a.ERROR, {
                        type: o.b.KEY_SYSTEM_ERROR,
                        details: o.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                try {
                    var i = this.getLicenseServerUrl(r.mediaKeySystemDomain)
                      , a = this._createLicenseXhr(i, e, t);
                    u.b.log("Sending license request to URL: " + i);
                    var n = this._generateLicenseRequestChallenge(r, e);
                    a.send(n)
                } catch (e) {
                    u.b.error("Failure requesting DRM license: " + e),
                    this.hls.trigger(d.a.ERROR, {
                        type: o.b.KEY_SYSTEM_ERROR,
                        details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })
                }
            }
            ,
            l.onMediaAttached = function(e) {
                if (this._emeEnabled) {
                    var t = e.media;
                    this._media = t,
                    t.addEventListener("encrypted", this._onMediaEncrypted)
                }
            }
            ,
            l.onMediaDetached = function() {
                this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted),
                this._media = null)
            }
            ,
            l.onManifestParsed = function(e) {
                if (this._emeEnabled) {
                    var t = e.levels.map(function(e) {
                        return e.audioCodec
                    })
                      , r = e.levels.map(function(e) {
                        return e.videoCodec
                    });
                    this._attemptKeySystemAccess(Ot.WIDEVINE, t, r)
                }
            }
            ,
            a = i,
            (n = [{
                key: "requestMediaKeySystemAccess",
                get: function() {
                    if (!this._requestMediaKeySystemAccess)
                        throw new Error("No requestMediaKeySystemAccess function configured");
                    return this._requestMediaKeySystemAccess
                }
            }]) && Ft(a.prototype, n),
            s && Ft(a, s),
            i
        }(h);
        function Nt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var Ut = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                i.forEach(function(t) {
                    Nt(e, t, r[t])
                })
            }
            return e
        }({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            maxBufferSize: 6e7,
            maxBufferHole: .5,
            lowBufferWatchdogPeriod: .5,
            highBufferWatchdogPeriod: 3,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            liveDurationInfinity: !1,
            liveBackBufferLength: 1 / 0,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            startLevel: void 0,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: Be,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            abrController: ke,
            bufferController: Oe,
            capLevelController: Pe,
            fpsController: Fe,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            requestMediaKeySystemAccessFunc: xt
        }, function() {
            0;
            return {
                cueHandler: i,
                enableCEA708Captions: !0,
                enableWebVTT: !0,
                captionsTextTrack1Label: "English",
                captionsTextTrack1LanguageCode: "en",
                captionsTextTrack2Label: "Spanish",
                captionsTextTrack2LanguageCode: "es"
            }
        }(), {
            subtitleStreamController: Pt,
            subtitleTrackController: kt,
            timelineController: Lt,
            audioStreamController: Ve,
            audioTrackController: Ke,
            emeController: Mt
        });
        function Bt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Gt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Kt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function jt(e, t, r) {
            return t && Kt(e.prototype, t),
            r && Kt(e, r),
            e
        }
        r.d(t, "default", function() {
            return Ht
        });
        var Ht = function(e) {
            var t, r;
            function i(t) {
                var r;
                void 0 === t && (t = {}),
                (r = e.call(this) || this).config = void 0,
                r._autoLevelCapping = void 0,
                r.abrController = void 0,
                r.capLevelController = void 0,
                r.levelController = void 0,
                r.streamController = void 0,
                r.networkControllers = void 0,
                r.audioTrackController = void 0,
                r.subtitleTrackController = void 0,
                r.emeController = void 0,
                r.coreComponents = void 0,
                r.media = null,
                r.url = null;
                var a = i.DefaultConfig;
                if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))
                    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                r.config = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {}
                          , i = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))),
                        i.forEach(function(t) {
                            Bt(e, t, r[t])
                        })
                    }
                    return e
                }({}, a, t);
                var n = Gt(r).config;
                if (void 0 !== n.liveMaxLatencyDurationCount && n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount)
                    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                if (void 0 !== n.liveMaxLatencyDuration && (void 0 === n.liveSyncDuration || n.liveMaxLatencyDuration <= n.liveSyncDuration))
                    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                Object(u.a)(n.debug),
                r._autoLevelCapping = -1;
                var s = r.abrController = new n.abrController(Gt(r))
                  , o = new n.bufferController(Gt(r))
                  , l = r.capLevelController = new n.capLevelController(Gt(r))
                  , d = new n.fpsController(Gt(r))
                  , c = new x(Gt(r))
                  , h = new F(Gt(r))
                  , f = new M(Gt(r))
                  , g = new Ae(Gt(r))
                  , p = r.levelController = new Ee(Gt(r))
                  , v = new K(Gt(r))
                  , m = [p, r.streamController = new me(Gt(r),v)]
                  , y = n.audioStreamController;
                y && m.push(new y(Gt(r),v)),
                r.networkControllers = m;
                var b = [c, h, f, s, o, l, d, g, v];
                if (y = n.audioTrackController) {
                    var E = new y(Gt(r));
                    r.audioTrackController = E,
                    b.push(E)
                }
                if (y = n.subtitleTrackController) {
                    var T = new y(Gt(r));
                    r.subtitleTrackController = T,
                    m.push(T)
                }
                if (y = n.emeController) {
                    var S = new y(Gt(r));
                    r.emeController = S,
                    b.push(S)
                }
                return (y = n.subtitleStreamController) && m.push(new y(Gt(r),v)),
                (y = n.timelineController) && b.push(new y(Gt(r))),
                r.coreComponents = b,
                r
            }
            r = e,
            (t = i).prototype = Object.create(r.prototype),
            t.prototype.constructor = t,
            t.__proto__ = r,
            i.isSupported = function() {
                return function() {
                    var e = q();
                    if (!e)
                        return !1;
                    var t = SourceBuffer || window.WebKitSourceBuffer
                      , r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                      , i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                    return !!r && !!i
                }()
            }
            ,
            jt(i, null, [{
                key: "version",
                get: function() {
                    return "0.13.0"
                }
            }, {
                key: "Events",
                get: function() {
                    return d.a
                }
            }, {
                key: "ErrorTypes",
                get: function() {
                    return o.b
                }
            }, {
                key: "ErrorDetails",
                get: function() {
                    return o.a
                }
            }, {
                key: "DefaultConfig",
                get: function() {
                    return i.defaultConfig ? i.defaultConfig : Ut
                },
                set: function(e) {
                    i.defaultConfig = e
                }
            }]);
            var a = i.prototype;
            return a.destroy = function() {
                u.b.log("destroy"),
                this.trigger(d.a.DESTROYING),
                this.detachMedia(),
                this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                    e.destroy()
                }),
                this.url = null,
                this.removeAllListeners(),
                this._autoLevelCapping = -1
            }
            ,
            a.attachMedia = function(e) {
                u.b.log("attachMedia"),
                this.media = e,
                this.trigger(d.a.MEDIA_ATTACHING, {
                    media: e
                })
            }
            ,
            a.detachMedia = function() {
                u.b.log("detachMedia"),
                this.trigger(d.a.MEDIA_DETACHING),
                this.media = null
            }
            ,
            a.loadSource = function(e) {
                e = s.buildAbsoluteURL(window.location.href, e, {
                    alwaysNormalize: !0
                }),
                u.b.log("loadSource:" + e),
                this.url = e,
                this.trigger(d.a.MANIFEST_LOADING, {
                    url: e
                })
            }
            ,
            a.startLoad = function(e) {
                void 0 === e && (e = -1),
                u.b.log("startLoad(" + e + ")"),
                this.networkControllers.forEach(function(t) {
                    t.startLoad(e)
                })
            }
            ,
            a.stopLoad = function() {
                u.b.log("stopLoad"),
                this.networkControllers.forEach(function(e) {
                    e.stopLoad()
                })
            }
            ,
            a.swapAudioCodec = function() {
                u.b.log("swapAudioCodec"),
                this.streamController.swapAudioCodec()
            }
            ,
            a.recoverMediaError = function() {
                u.b.log("recoverMediaError");
                var e = this.media;
                this.detachMedia(),
                e && this.attachMedia(e)
            }
            ,
            jt(i, [{
                key: "levels",
                get: function() {
                    return this.levelController.levels
                }
            }, {
                key: "currentLevel",
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(e) {
                    u.b.log("set currentLevel:" + e),
                    this.loadLevel = e,
                    this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel",
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(e) {
                    u.b.log("set nextLevel:" + e),
                    this.levelController.manualLevel = e,
                    this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel",
                get: function() {
                    return this.levelController.level
                },
                set: function(e) {
                    u.b.log("set loadLevel:" + e),
                    this.levelController.manualLevel = e
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(e) {
                    this.levelController.nextLoadLevel = e
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(e) {
                    u.b.log("set firstLevel:" + e),
                    this.levelController.firstLevel = e
                }
            }, {
                key: "startLevel",
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(e) {
                    u.b.log("set startLevel:" + e),
                    -1 !== e && (e = Math.max(e, this.minAutoLevel)),
                    this.levelController.startLevel = e
                }
            }, {
                key: "capLevelToPlayerSize",
                set: function(e) {
                    var t = !!e;
                    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(),
                    this.autoLevelCapping = -1,
                    this.streamController.nextLevelSwitch()),
                    this.config.capLevelToPlayerSize = t)
                }
            }, {
                key: "autoLevelCapping",
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(e) {
                    u.b.log("set autoLevelCapping:" + e),
                    this._autoLevelCapping = e
                }
            }, {
                key: "bandwidthEstimate",
                get: function() {
                    var e = this.abrController._bwEstimator;
                    return e ? e.getEstimate() : NaN
                }
            }, {
                key: "autoLevelEnabled",
                get: function() {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel",
                get: function() {
                    for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++) {
                        if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t)
                            return i
                    }
                    return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function() {
                    var e = this.levels
                      , t = this.autoLevelCapping;
                    return -1 === t && e && e.length ? e.length - 1 : t
                }
            }, {
                key: "nextAutoLevel",
                get: function() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                },
                set: function(e) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var e = this.audioTrackController;
                    return e ? e.audioTracks : []
                }
            }, {
                key: "audioTrack",
                get: function() {
                    var e = this.audioTrackController;
                    return e ? e.audioTrack : -1
                },
                set: function(e) {
                    var t = this.audioTrackController;
                    t && (t.audioTrack = e)
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this.streamController.liveSyncPosition
                }
            }, {
                key: "subtitleTracks",
                get: function() {
                    var e = this.subtitleTrackController;
                    return e ? e.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    var e = this.subtitleTrackController;
                    return e ? e.subtitleTrack : -1
                },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleTrack = e)
                }
            }, {
                key: "subtitleDisplay",
                get: function() {
                    var e = this.subtitleTrackController;
                    return !!e && e.subtitleDisplay
                },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleDisplay = e)
                }
            }]),
            i
        }(X);
        Ht.defaultConfig = void 0
    }
    ]).default
});


