/* VimeoPlayer - v4.13.5 - 2022-11-10 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    u as t,
    a as n,
    i,
    s as o,
    L as r,
    r as a,
    m as s,
    g as l,
    p as c,
    b as d,
    P as u,
    V as p,
    T as v,
    c as m,
    d as f,
    e as h,
    f as _,
    C as g,
    h as b,
    j as y,
    F as w,
    k as E,
    Q as C,
    S as k,
    l as L,
    n as T,
    E as S,
    o as A,
    M as P,
    q as I,
    B as R,
    t as x,
    v as D,
    w as N,
    D as M,
    x as O,
    y as B,
    z as V,
    A as F,
    G as q,
    H,
    I as $,
    J as W,
    K as j,
    N as z,
    O as Y,
    R as G,
    U as K,
    W as Z,
    X,
    Y as J,
    Z as Q,
    $ as ee,
    a0 as te,
    a1 as ne,
    a2 as ie,
    a3 as oe,
    a4 as re,
    a5 as ae,
    a6 as se,
    a7 as le,
    a8 as ce,
    a9 as de,
    aa as ue,
    ab as pe,
    ac as ve,
    ad as me,
    ae as fe,
    af as he,
    ag as _e,
    ah as ge,
    ai as be,
    aj as ye,
    ak as we,
    al as Ee,
    am as Ce,
    an as ke,
    ao as Le,
    ap as Te,
    aq as Se,
    ar as Ae,
    as as Pe,
    at as Ie,
    au as Re,
    av as xe,
    aw as De,
    ax as Ne,
    ay as Me,
    az as Oe,
    aA as Be,
    aB as Ve,
    aC as Fe,
    aD as Ue,
    aE as qe,
    aF as He,
    aG as $e,
    aH as We,
    aI as je,
    aJ as ze,
    aK as Ye,
    aL as Ge,
    aM as Ke,
    aN as Ze,
    aO as Xe,
    aP as Je,
    aQ as Qe,
    aR as et,
    aS as tt,
    aT as nt,
    aU as it,
    aV as ot,
    aW as rt,
    aX as at,
    aY as st,
    aZ as lt,
    a_ as ct,
    a$ as dt,
    b0 as ut
} from "./vendor.module.js";
export {
    U as BigScreen, b0 as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let pt = {};

function vt(e) {
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? Math.floor(e / 1e3) + "." + Math.round(e % 1e3 / 100) + "K" : Math.floor(e / 1e6) + "." + Math.round(e % 1e6 / 1e5) + "M"
}

function mt(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}
const ft = function(t, ...n) {
        const i = n => n.length >= t.length ? t.apply(this, n) : (...t) => i([].concat(e(n), t));
        return i([])
    }((e, t) => Object.keys(e).every(n => e[n] === t[n])),
    ht = (e = []) => ({
        get: t => t ? e.find(ft(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(ft(t)), 1).pop()
    });

function _t(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (ke) {}
}

function gt(e = document.activeElement, t = null) {
    try {
        e.blur()
    } catch (ke) {
        t && t(ke)
    }
}

function bt(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function yt(e) {
    try {
        return new URL(e).origin
    } catch (ke) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function wt({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        s = n - i * a,
        l = i - n / a;
    if (s > 0 && s < o || l > 0 && l < o) {
        const e = n / (n - s),
            t = i / (i - l);
        r = St(Math.max(e, t), 3)
    }
    return {
        extraWidth: s,
        extraHeight: l,
        scaleFactor: r
    }
}

function Et(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function Ct(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let s = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        l = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${l},top=${s},${c}`)
}

function kt(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(vimeo(ws)?|vimeo-enterprise)\.(com|dev)(?=$|\/)/.test(e)
    }(e) ? yt(e) : ""
}

function Lt(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.(vimeo(ws)?|vimeo-enterprise)\.(com|dev)\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = function(e) {
            if (mt(e)) return parseInt(e, 10);
            const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
            if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
            return parseInt(t[2], 10)
        }(i),
        a = t(window.location.search),
        s = t(`${i}`.split("?")[1]),
        l = Object.assign(a, s, o);
    return n(`${e}/video/${r}/config`, l)
}

function Tt(e) {
    for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), o = [], r = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (o[r++] = t);
    var l = o.shift();
    l && (l.focus(), l.blur())
}

function St(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function At() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
}

function Pt(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function It(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) It(e, i, t[i])
}

function Rt(e, t, n) {
    n.forEach(n => {
        e(n, (...e) => {
            t.apply(void 0, [n].concat(e))
        })
    })
}

function xt(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function Dt(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce((e, t) => (...n) => e(t.apply(void 0, n)))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (;
        (null == (n = e) ? void 0 : n.parentElement) && !Pt(e, t);) {
        var n;
        e = e.parentElement
    }
    return Pt(e, t) ? e : null
}));
let Nt = 0;

function Mt(e = "p") {
    return `${e}${++Nt}`
}
const Ot = {
        _badPlayback: Mt(),
        _bufferStarted: Mt(),
        _spatialUnsupported: Mt(),
        _spatialFailure: Mt()
    },
    Bt = {
        "vimeo.web_global": 5,
        "workflow.copy_video_embed_code": 5,
        "vimeo.player_performance_measurement": 1
    },
    Vt = {
        "vimeo.web_global": ["user", "application", "platform"],
        "workflow.copy_video_embed_code": ["path", "entry_page", "page", "location", "video_id", "video_privacy", "video_embed_privacy", "is_preset_applied", "is_video_password_protected", "video_app_id", "team_owner_id", "team_size", "team_subscription_type", "actor_team_role", "video_status", "upload_id", "product", "sizing", "height", "width", "video_type", "actor_resource_role", "hash"],
        "vimeo.player_performance_measurement": ["module_player", "device_type", "browser", "device_os", "iframed", "measurement_type", "measurement_value"]
    },
    Ft = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    Ut = {
        _seek: Mt(),
        _changeVolume: Mt(),
        _changeMuted: Mt(),
        _hideOverlay: Mt(),
        _showOverlay: Mt(),
        _setActivePage: Mt(),
        _updateEmailCapture: Mt(),
        _updateWebinarStartTime: Mt(),
        _openPopup: Mt(),
        _reset: Mt(),
        _changeLoop: Mt(),
        _changeQuality: Mt(),
        _openVimeo: Mt(),
        _changeColor: Mt(),
        _disableVolume: Mt(),
        _enableVolume: Mt(),
        _disableCaptions: Mt(),
        _enableCaptions: Mt(),
        _forceFullscreen: Mt(),
        _turnCaptionsOn: Mt(),
        _turnCaptionsOff: Mt(),
        _changeCaptionsStyles: Mt(),
        _resetCaptionsStyles: Mt(),
        _toggleNativeControls: Mt(),
        _showOutro: Mt(),
        _hideOutro: Mt(),
        _setControlsVisibility: Mt(),
        _overrideControlbarBehavior: Mt(),
        _activatePictureInPicture: Mt(),
        _deactivatePictureInPicture: Mt(),
        _attachSpatialPlaybackEvents: Mt(),
        _toggleSpatialPlayback: Mt(),
        _revealSpatialControls: Mt(),
        _setTime: Mt(),
        _addCard: Mt(),
        _removeCard: Mt(),
        _changePlaybackRate: Mt(),
        _destroy: Mt()
    },
    qt = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    Ht = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    $t = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Wt = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    jt = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    zt = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Yt = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    Gt = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    Kt = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    Zt = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    },
    Xt = {
        _apiError: Mt(),
        _error: Mt(),
        _playRejected: Mt(),
        _playResolved: Mt(),
        _paused: Mt(),
        _pausedForAd: Mt(),
        _resumedAfterAd: Mt(),
        _ended: Mt(),
        _volumeChanged: Mt(),
        _qualityChanged: Mt(),
        _targetTimeReached: Mt(),
        _cuepoint: Mt(),
        _click: Mt(),
        _firstTimeUpdate: Mt(),
        _playbackRateChanged: Mt(),
        _nudgeAttempted: Mt(),
        _nudgeEnded: Mt(),
        _fragmentChanged: Mt(),
        _fullscreenButtonPressed: Mt(),
        _pauseButtonPressed: Mt(),
        _playButtonPressed: Mt(),
        _prefsButtonPressed: Mt(),
        _ccButtonPressed: Mt(),
        _chapterSeekAttempted: Mt(),
        _chapterSeek: Mt(),
        _chapterHoverStateOn: Mt(),
        _chapterHoverStateOff: Mt(),
        _chapterChanged: Mt(),
        _scrubbingStarted: Mt(),
        _scrubbingEnded: Mt(),
        _volumeScrubbingStarted: Mt(),
        _volumeScrubbingEnded: Mt(),
        _controlBarVisibilityChanged: Mt(),
        _sidedockVisibilityChanged: Mt(),
        _menuVisibilityChanged: Mt(),
        _captionsChanged: Mt(),
        _cuePointAdded: Mt(),
        _cuePointRemoved: Mt(),
        _stereoscopicButtonPressed: Mt(),
        _menuPanelOpened: Mt(),
        _menuPanelClosed: Mt(),
        _menuCentered: Mt(),
        _badgePressed: Mt(),
        _muteAutoplayed: Mt(),
        _willEnterFullscreen: Mt(),
        _didEnterFullscreen: Mt(),
        _willExitFullscreen: Mt(),
        _didExitFullscreen: Mt(),
        _likeButtonPressed: Mt(),
        _watchLaterButtonPressed: Mt(),
        _shareButtonPressed: Mt(),
        _embedButtonPressed: Mt(),
        _vodButtonPressed: Mt(),
        _collectionsButtonPressed: Mt(),
        _followButtonPressed: Mt(),
        _overlayOpened: Mt(),
        _overlayClosed: Mt(),
        _overlayCleared: Mt(),
        _overlayCloseButtonPressed: Mt(),
        _facebookButtonPressed: Mt(),
        _twitterButtonPressed: Mt(),
        _tumblrButtonPressed: Mt(),
        _emailButtonPressed: Mt(),
        _embedCodeCopied: Mt(),
        _popupOpened: Mt(),
        _debugButtonPressed: Mt(),
        _emailCaptureSubmitted: Mt(),
        _popupClosed: Mt(),
        _shareViewShown: Mt(),
        _embedViewShown: Mt(),
        _shareViewEnd: Mt(),
        _embedViewEnd: Mt(),
        _showAndroidVRDeepLink: Mt(),
        _showEmailCaptureForm: Mt(),
        _debugDataChange: Mt(),
        _debugPayloadCopied: Mt(),
        _mousedOut: Mt(),
        _mousedOver: Mt(),
        _mouseTimeout: Mt(),
        _liked: Mt(),
        _unliked: Mt(),
        _addedToWatchLater: Mt(),
        _removedFromWatchLater: Mt(),
        _userLogIn: Mt(),
        _userLoggedIn: Mt(),
        _userLoggedOut: Mt(),
        _loginFailure: Mt(),
        _colorChanged: Mt(),
        _configChanged: Mt(),
        _liveEventSettingsChanged: Mt(),
        _passwordUnlocked: Mt(),
        _privateUnlocked: Mt(),
        _enteredTinyMode: Mt(),
        _enteredMiniMode: Mt(),
        _enteredNormalMode: Mt(),
        _requestConfigReloaded: Mt(),
        _embedSettingChanged: Mt(),
        _ottMetadataSet: Mt(),
        _outroDisplayed: Mt(),
        _outroHidden: Mt(),
        _outroVideoPressed: Mt(),
        _becameActive: Mt(),
        _becameInactive: Mt(),
        _tipped: Mt(),
        _emailCaptureSuccess: Mt(),
        _emailCaptureFailure: Mt(),
        _webinarFormSuccess: Mt(),
        _loadVideo: Mt(),
        _swapVideo: Mt(),
        _outroLinkPressed: Mt(),
        _errorLinkPressed: Mt(),
        _followed: Mt(),
        _unfollowed: Mt(),
        _outroImagePressed: Mt(),
        _outroCtaPressed: Mt(),
        _cardDisplayed: Mt(),
        _cardPressed: Mt(),
        _spaceChanged: Mt(),
        _emailCaptureEnd: Mt(),
        _displayContextChanged: Mt(),
        _titleModuleReady: Mt(),
        _sidedockModuleReady: Mt(),
        _controlBarModuleReady: Mt(),
        _videoModuleReady: Mt(),
        _overlayModuleReady: Mt(),
        _notificationModuleReady: Mt(),
        _statsModuleReady: Mt(),
        _apiModuleReady: Mt(),
        _ready: Mt(),
        _notificationHidden: Mt(),
        _alertVisibilityChanged: Mt(),
        _airPlayAvailable: Mt(),
        _airPlayNotAvailable: Mt(),
        _airPlayActivated: Mt(),
        _airPlayDeactivated: Mt(),
        _airPlayButtonPressed: Mt(),
        _adBuffering: Mt(),
        _adComplete: Mt(),
        _adClicked: Mt(),
        _adError: Mt(),
        _adPaused: Mt(),
        _adResumed: Mt(),
        _adStarted: Mt(),
        _adSkipped: Mt(),
        _allAdsCompleted: Mt(),
        _logMetric: Mt(),
        _webinarRegistrantBlocked: Mt(),
        _webinarRegistrantUnblocked: Mt(),
        _interactiveReady: Mt(),
        _interactiveHotspotClicked: Mt(),
        _interactiveOverlayPanelClicked: Mt(),
        _interactiveMarkerClicked: Mt(),
        _interactiveSeekCall: Mt()
    },
    Jt = {
        _seek: Mt(),
        _play: Mt(),
        _pause: Mt(),
        _playbackRateChange: Mt()
    },
    Qt = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    en = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        webinarBlocked: 10,
        webinarLocked: 11,
        webinarUnlocked: 12,
        webinarFull: 13
    },
    tn = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        EMAIL_CAPTURE_FAILED: "emailcapturefailed",
        EMAIL_CAPTURE: "emailcapture",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting"
    },
    nn = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    on = {
        NOTHING: "nothing",
        BEGINNING: "beginning",
        EMAIL: "email",
        VOD: "vod",
        VIDEOS: "videos",
        LINK: "link",
        THREEVIDEOS: "threevideos",
        PROMOTED: "promoted",
        SHARE: "share"
    },
    rn = () => ({
        id: "error",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var an = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        id: "not-supported",
        title: "Unsupported viewing environment",
        message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.',
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        id: "drm-failure",
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        id: "not-supported",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        id: "not-supported",
        final: !1
    }),
    MediaDecodeError: () => ({
        id: "decode",
        final: !1
    }),
    MediaNetworkError: () => ({
        id: "network",
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    MediaUnknownError: () => ({
        id: "unknown",
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        id: "telecine-file-error",
        final: !1
    }),
    DownloadError: () => ({
        id: "telecine-download-error",
        final: !1
    }),
    MediaUrlExpired: () => ({
        id: "media-url-expired",
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        id: "scanner-error",
        final: !1
    }),
    PlayerError: rn
});

function sn(e) {
    return e.config.video.p2p ? "vimeo-live-ecdn" : e.config.embed.wirewax ? "vimeo-interactive-vod" : e.config.request.flags.ott ? "vimeo-ott-vod" : e.config.video.webinar && "ended" !== e.config.video.webinar.status ? "vimeo-live-webinar" : e.config.video.live_event ? "vimeo-live" : e.config.embed.context && -1 !== e.config.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.config.video.vod ? "vimeo-ondemand" : "vimeo-vod"
}
const ln = () => {
        const [e, t, n] = "4.13.5".split(".");
        return {
            full: "4.13.5",
            major: e,
            minor: t,
            patch: n
        }
    },
    cn = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function dn() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : cn && (e = "mobile"), e
}

function un() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function pn() {
    try {
        return window.self !== window.top
    } catch (ke) {
        return !0
    }
}

function vn(e) {
    return "dev" === e.request.build.js ? "dev" : "4.13.5"
}
let mn;
const fn = new Promise(e => {
        mn = e
    }),
    hn = !!window.newrelic;

function _n(e, t, n = .1) {
    return fn.then(i => (Math.random() <= n && i.captureException(function(e) {
        let t = e;
        return !e || e instanceof Error || (t = new Error(e.message || e), e.name && (t.name = e.name)), t
    }(e), t), i.lastEventId()))
}
window.addEventListener("unhandledrejection", e => {
    e.preventDefault(), e.reason && _n(e.reason).catch(e => {})
});
var gn = {
    setUp: function(e) {
        const t = "dev" === e.config.request.build.js ? "dev" : "production";
        if (hn) {
            const n = {
                environment: t,
                js_modules: !0,
                version_js: e.config.request.build.js,
                version_backend: e.config.request.build.backend,
                visibility_state: document.visibilityState,
                vimeo_session: e.config.request.session,
                locale: e.config.request.lang,
                product: sn(e),
                backend: e.config.request.build.backend,
                video_embed_permission: e.config.video.embed_permission,
                video_privacy: e.config.video.privacy
            };
            if (e.config.request.ab_tests)
                for (const t in e.config.request.ab_tests) {
                    const i = e.config.request.ab_tests[t];
                    n[`${t}_test`] = 1, n[`${t}_group`] = i.group;
                    for (const e in i.data) n[`${t}_data_${e}`] = i.data[e]
                }
            for (let e in n) newrelic.setCustomAttribute(e, n[e])
        }
        e.config.request.sentry.enabled &&
            import ("./sentry.module.js").then(({
                default: e
            }) => e).then(n => {
                const i = [new n.Integrations.Dedupe, new n.Integrations.ExtraErrorData, new n.Integrations.Breadcrumbs({
                    console: !1
                }), new n.Integrations.GlobalHandlers({
                    onunhandledrejection: !1
                })];
                return n.init({
                    dsn: e.config.request.sentry.url,
                    release: vn(e.config),
                    environment: t,
                    integrations: i,
                    ignoreErrors: ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image", "window.__withBuiltIn is not a function", "window.__timeSinceLastTimeout is not a function"],
                    blacklistUrls: [/^moz-extension/i, /^chrome-extension/i],
                    beforeSend(t, i) {
                        var r;
                        if (!e.config.request) return null;
                        if (o.appleMail) return null;
                        if (Dt("ReportingObserver", t.message) && Math.random() > .01) return null;
                        const a = null == (r = i.originalException) ? void 0 : r.error;
                        return Dt("Non-Error exception captured", t.message) && a ? (n.withScope(e => {
                            e.setExtra("nonErrorException", !0), n.captureException(a)
                        }), null) : (t.tags["document.visibilityState"] = document.visibilityState, e.config.request.sentry.enabled ? t : null)
                    }
                }), n.configureScope(t => {
                    if (t.setTag("session", e.config.request.session), t.setTag("locale", e.config.request.lang), t.setTag("debug_intent", e.config.request.sentry.debug_intent ? 1 : 0), t.setTag("product", sn(e)), t.setTag("backend", e.config.request.build.backend), t.setTag("video_embed_permission", e.config.video.embed_permission), t.setTag("video_privacy", e.config.video.privacy), e.config.user.logged_in && t.setUser({
                            id: e.config.user.id
                        }), e.config.request.ab_tests)
                        for (const n in e.config.request.ab_tests) {
                            const i = e.config.request.ab_tests[n];
                            t.setTag(`${n}_test`, 1), t.setTag(`${n}_group`, i.group);
                            for (const e in i.data) t.setTag(`${n}_data_${e}`, i.data[e])
                        }
                }), e.config.request.sentry.debug_intent && window.addEventListener("unload", () => {
                    n.captureMessage("Session debug", {
                        level: "info"
                    })
                }, !1), n
            }).then(mn).catch((function(e) {}))
    },
    captureException: _n,
    captureMessage: function(e, t) {
        return fn.then(n => (n.captureMessage(e, t), n.lastEventId()))
    },
    captureBreadcrumb: function(e, t, n = "player", i = "info") {
        return fn.then(o => o.addBreadcrumb({
            message: e,
            data: t,
            category: n,
            level: i
        }))
    }
};
let bn;

function yn({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        l = {
            video: {},
            request: {},
            embed: {}
        };

    function c() {
        return n && n - 6e4 <= Date.now()
    }

    function d(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout(() => {
            "onLine" in navigator && !navigator.onLine || o || (o = p().catch(gn.captureException))
        }, 1e3 * e - 6e4 - 5e3), t
    }

    function u(e, i = {}) {
        var o, c;
        clearTimeout(r);
        const u = t;
        if (isNaN(e) && "string" != typeof e) return t = e, n = d(t.request.expires), Promise.resolve({
            old: u,
            loaded: t
        });
        Date.now(), l = s(l, t);
        const p = l.request.referrer;
        p && (i.referrer = p), l.video.webinar && l.video.webinar.registrant && (i.webinar_registrant_uuid = l.video.webinar.registrant), bn || (bn = kt(e));
        const v = Lt(bn || ((null == (o = t) ? void 0 : o.player_url) ? `https://${null==(c=t)?void 0:c.player_url}` : ""), e, i);
        return a(v, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then(e => (t = e, t.view !== en.error && (n = d(t.request.expires), l.request.session && t.video.id === l.video.id && (t.request.session = l.request.session), p && (t.request.referrer = p), l.embed.player_id && (t.embed.player_id = l.embed.player_id), l.embed.on_site && (t.embed.on_site = 1, t.embed.context = l.embed.context)), Date.now(), {
            old: u,
            loaded: t
        })).catch(e => {
            gn.captureException(e)
        })
    }

    function p() {
        var i;
        clearTimeout(r), Date.now();
        const s = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: l,
                session: c,
                timestamp: u,
                expires: p
            } = t.request,
            v = t.request.ott_chromecast_token;
        let m = `https://${t.player_url}/video/${t.video.id}/config/request?session=${c}&signature=${l}&time=${u}&expires=${p}`;
        return v && (m = `${m}&ott_chromecast_token=${v}`), s && (m += `${-1===m.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(s)}`), a(m, {
            withCredentials: !0,
            retry: 3
        }).json().then(i => (t.request = i, s && (t.request.referrer = s), n = d(t.request.expires), Date.now(), o = null, e.fire(Xt._requestConfigReloaded), t.request)).catch(t => {
            const n = {
                id: "network",
                title: "Network error",
                message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
                final: !0
            };
            throw e.fire(Xt._error, n.id, n), t
        })
    }
    return window.addEventListener("online", () => {
        c() && (o = p().catch(gn.captureException))
    }), e.on(Xt._error, e => {
        o || "media-url-expired" !== e || (o = p().catch(gn.captureException))
    }), {
        get isExpired() {
            return c()
        },
        load: (e, t) => u(e, t),
        reload() {
            var e;
            return (null == (e = t) ? void 0 : e.video.id) ? u(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => c() ? (o || (o = p()), o) : Promise.resolve(t.request),
        loadRequest: () => p(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}

function wn(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function En({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const s = parseInt(e, 10),
        l = parseInt(t, 10);
    return 0 === s || isNaN(s) || (r ? a.w = s : a.mw = s), 0 === l || isNaN(l) || (r ? a.h = l : a.mh = l), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Cn(e) {
    return function(e) {
        return new Promise((t, n) => {
            const i = new Image;

            function o() {
                gn.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        })
    }(e).catch(t => (gn.captureException(t, {
        extra: {
            imageUrl: e
        }
    }), new Promise(() => {})))
}
const kn = {
        id: "7742C69E",
        name: "prod"
    },
    Ln = {
        id: "BA42D416",
        name: "prod"
    },
    Tn = {
        id: "78077C77",
        name: "prod"
    },
    Sn = {
        connected: Mt(),
        disconnected: Mt(),
        playing: Mt(),
        paused: Mt(),
        buffering: Mt(),
        idle: Mt(),
        ended: Mt(),
        sessionStateChanged: Mt(),
        timeUpdated: Mt(),
        mediaLoadedSuccess: Mt(),
        mediaLoadedFailed: Mt(),
        error: Mt()
    };
let An = function() {
    function e({
        player: e,
        textAlert: t = null
    }) {
        this._textAlert = t, this._player = e, this._onControlSeek = this.onControlSeek.bind(this), this._onChangeVolume = this.onChangeVolume.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onVolumeLevelChanged = this.onVolumeLevelChanged.bind(this), this._onIsMutedChanged = this.onIsMutedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = f(this._endVideo, 500)
    }
    var t = e.prototype;
    return t.calculateStartTime = function(e = null) {
        let t = Number(e) || this._player.backbone.currentTime - 7;
        return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
    }, t.loadMedia = function({
        contentId: e,
        currentTime: t = null,
        duration: n = null,
        token: i = null,
        bypassToken: o = null,
        autoRequest: r = !1,
        autoCaption: a = !0,
        autoDisconnect: s = !0,
        tracks: p = []
    } = {}) {
        if (Pn.isLoadingMedia) return Promise.resolve(!1);
        const v = this._player.config;
        e = e || v.video.id;
        const m = v.request,
            f = m.drm;
        let h;
        if (null == f ? void 0 : f.fastly) {
            const t = l(m, "files.dash.default_cdn");
            e = l(m, `files.dash.cdns.${t}.url`), h = l(f, "cdms.widevine.license_url"), p = (m.text_tracks || []).map(e => {
                const {
                    pathname: t,
                    search: n
                } = c(e.url);
                return d(d({}, e), {}, {
                    url: `https://player.vimeo.com${t}${n}`
                })
            })
        }
        const _ = this.calculateStartTime(t);
        n = Number(n) || this.duration, i = i || v.user.vimeo_api_client_token, o = o || v.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
        const g = {
            contentId: e,
            duration: n,
            autoRequest: r,
            tracks: p,
            currentTime: _,
            requestCustomData: {
                token: i,
                bypassToken: o,
                tokenType: "jwt"
            }
        };
        return this._player.config.request.ott_chromecast_token && (g.requestCustomData.ottChromecastToken = this._player.config.request.ott_chromecast_token), this._player.config.ottCastOptions && (g.ottCastOptions = this._player.config.ottCastOptions), (h ? this._getLicenseUrl(h).then(e => d(d({}, g), {}, {
            mediaCustomData: {
                widevineLicenseServerURL: e
            }
        })) : Promise.resolve(g)).then(e => Pn.loadMedia(e)).then(() => (Pn.fire(Sn.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._player.events.fire(u), this._player.events.fire(Ut._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._player.backbone.enabledTextTrack), this._player.backbone.paused || this._player.backbone.pause(), !0)).catch(e => (Pn.fire(Sn.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e)))
    }, t._getLicenseUrl = function(e) {
        return new Promise((t, n) => {
            const i = new XMLHttpRequest;
            i.open("GET", e), i.onload = () => {
                const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                if (i.status >= 200 && i.status < 300) try {
                    t(i.response)
                } catch (ke) {
                    n(e(ke))
                } else n(e(i.status))
            }, i.onerror = n, i.send()
        })
    }, t.init = function() {
        this.removeInitListeners(), this.addInitListeners()
    }, t.addInitListeners = function() {
        this.addSessionStateListener(), this.addIsConnectedListener()
    }, t.endCurrentSession = function(e = !0) {
        Pn.castContext && Pn.castContext.endCurrentSession(e)
    }, t.syncBackbone = function() {
        !this.isOutroRendered && this._player.backbone.paused && (this._player.backbone.currentTime = this.lastCurrentTime, this.syncTime())
    }, t.stopBackbone = function() {
        this._player.events.fire(Ut._reset)
    }, t.storeBackboneData = function() {
        this.lastCurrentTime = this._player.backbone.currentTime
    }, t.applyBackboneData = function() {
        this.lastCurrentTime && (this._player.backbone.currentTime = this.lastCurrentTime)
    }, t.enableUI = function() {
        if (this._textAlert) {
            var e;
            const t = null == (e = Pn.currentSessionObj) ? void 0 : e.receiver;
            t && this._textAlert.show("Casting on " + t.friendlyName)
        }
        this._player.preview.show(), this._player.element.classList.add("is-casting")
    }, t.disableUI = function() {
        this._textAlert && this._textAlert.hide(), this.isOutroRendered || (this._player.preview.hide(), this._player.backbone.element.classList.remove("invisible")), this._player.element.classList.remove("is-casting")
    }, t.syncTime = function() {
        const e = this.lastCurrentTime / this.duration;
        Pn.fire(Sn.timeUpdated, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            percent: e
        }), e > 0 && this._player.events.fire(p.TIME_UPDATE, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            timeProgress: e
        })
    }, t._endVideo = function() {
        return this._isEndOfVideo = !0, this._player.events.fire(Xt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch(() => {
            this.showOutro()
        }) : this.showOutro(), Pn.fire(Sn.ended), !0
    }, t.showOutro = function() {
        this.isOutroRendered || (this._isOutroRendered = !0, this._player.events.fire(Ut._showOutro))
    }, t.dispose = function() {
        this.endCurrentSession(), this.removeAllRemoteListeners()
    }, t.onIsMediaLoadedChanged = function(e) {
        !1 === e.value ? this.isTimeEnded && this.endVideo() : this._player.backbone.paused || this._player.backbone.pause()
    }, t.onPlayerStateChanged = function(e) {
        switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
            case Pn.PlayerState.PLAYING:
                Pn.fire(Sn.playing);
                break;
            case Pn.PlayerState.PAUSED:
                Pn.fire(Sn.paused);
                break;
            case Pn.PlayerState.BUFFERING:
                Pn.fire(Sn.buffering);
                break;
            case Pn.PlayerState.IDLE:
            default:
                Pn.fire(Sn.idle)
        }
    }, t.onVolumeLevelChanged = function(e) {
        this._player.events.fire(Ut._changeVolume, e.value, !0)
    }, t.onIsMutedChanged = function(e) {
        this._player.events.fire(Ut._changeVolume, e.value ? 0 : Pn.remotePlayer.volumeLevel, !0)
    }, t.onCurrentTimeChanged = function(e) {
        this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
    }, t.onChangeVolume = function(e) {
        this.volumeLevel = e
    }, t.onCaptionsChanged = function(e) {
        const t = Pn.currentSession;
        t && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
            action: "setActiveByLanguage",
            value: null == e ? void 0 : e.language
        })
    }, t.onSessionStateChanged = function(e) {
        switch (e.sessionState) {
            case Pn.SessionState.SESSION_STARTING:
                this.addPreventLocalPlayerEvents();
                break;
            case Pn.SessionState.SESSION_RESUMED:
            case Pn.SessionState.SESSION_STARTED:
                this.loadMedia();
                break;
            case Pn.SessionState.SESSION_ENDING:
            case Pn.SessionState.SESSION_ENDED:
                break;
            case Pn.SessionState.SESSION_START_FAILED:
                this.removePreventLocalPlayerEvents()
        }
        Pn.fire(Sn.sessionStateChanged, e.sessionState)
    }, t.onIsConnectedChanged = function(e) {
        e.value ? this.onConnected() : this.onDisconnected()
    }, t.onConnected = function() {
        this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), Pn.fire(Sn.connected)
    }, t.onDisconnected = function() {
        this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), Pn.fire(Sn.disconnected)
    }, t.onConfigChanged = function() {
        this.loadMedia()
    }, t.onReset = function() {
        this.loadMedia()
    }, t.onPlayOrPausePressed = function() {
        this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && Pn.remotePlayerController.playOrPause(), this._player.events.halt()
    }, t.onControlSeek = function(e) {
        this.currentTime = e, this._player.events.halt()
    }, t.addSessionStateListener = function() {
        Pn.castContext && Pn.castContext.addEventListener(Pn.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
    }, t.addMessageListener = function() {
        const e = Pn.currentSession;
        e && e.addMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.onMessageReceived = function(e, t) {
        "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), Pn.fire(Sn.error, new Error("Chromecast encountered an error and media finished."))))
    }, t.addIsConnectedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.addPreventLocalPlayerEvents = function() {
        this._player.events.prependOn([Xt._playButtonPressed, Xt._pauseButtonPressed, Xt._scrubbingStarted, Xt._scrubbingEnded, v.BUFFER_STARTED, v.BUFFER_ENDED, Ut._seek, Xt._volumeChanged, Xt._captionsChanged, Xt._configChanged, Ut._reset], this._preventPlayerDefaultEvent)
    }, t.addRemotePlayerListenersOnIdle = function() {
        this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
    }, t.addLocalPlayerListeners = function() {
        this._player.events.prependOn(Xt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Xt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Xt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.prependOn(Xt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.prependOn(v.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.prependOn(v.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.prependOn(Ut._seek, this._onControlSeek), this._player.events.prependOn(Xt._volumeChanged, this._onChangeVolume), this._player.events.on(Xt._captionsChanged, this._onCaptionsChanged), this._player.events.on(Xt._configChanged, this._onConfigChanged), this._player.events.on(Ut._reset, this._onReset)
    }, t.preventPlayerDefaultEvent = function() {
        this._player.events.halt()
    }, t.addCurrentTimeChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.addIsMediaLoadedChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.addPlayerStateChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.addVolumeLevelChangedListener = function() {
        Pn.remotePlayerController && (Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Pn.remotePlayerController.addEventListener(Pn.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.addRemotePlayerListenersOnPlaying = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
    }, t.removeRemotePlayerListenersOnIdle = function() {
        this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
    }, t.removeInitListeners = function() {
        Pn.castContext && Pn.castContext.removeEventListener(Pn.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), Pn.remotePlayerController && Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.removeRemotePlayerListenersOnPlaying = function() {
        this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
    }, t.removeMessageListener = function() {
        const e = Pn.currentSession;
        e && e.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.removeCurrentTimeChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.removeIsMediaLoadedChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.removePlayerStateChangedListener = function() {
        Pn.remotePlayerController && Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.removeVolumeLevelChangedListener = function() {
        Pn.remotePlayerController && (Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Pn.remotePlayerController.removeEventListener(Pn.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.removePreventLocalPlayerEvents = function() {
        this._player.events.off([Xt._playButtonPressed, Xt._pauseButtonPressed, Xt._scrubbingStarted, Xt._scrubbingEnded, v.BUFFER_STARTED, v.BUFFER_ENDED, Ut._seek, Xt._volumeChanged, Xt._captionsChanged, Xt._configChanged, Ut._reset], this._preventPlayerDefaultEvent)
    }, t.removeLocalPlayerListeners = function() {
        this._player.events.off(Xt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Xt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Xt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.off(Xt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.off(v.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.off(v.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.off(Ut._seek, this._onControlSeek), this._player.events.off(Xt._volumeChanged, this._onChangeVolume), this._player.events.off(Xt._captionsChanged, this._onCaptionsChanged), this._player.events.off(Xt._configChanged, this._onConfigChanged), this._player.events.off(Ut._reset, this._onReset)
    }, t.removeRemotePlayerListeners = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
    }, t.removeAllRemoteListeners = function() {
        this.removeRemotePlayerListeners(), this.removeInitListeners()
    }, m(e, [{
        key: "currentTime",
        get: function() {
            return this.lastCurrentTime || 0
        },
        set: function(e) {
            Pn.remotePlayer && Pn.remotePlayerController && (Pn.remotePlayer.currentTime = e, Pn.remotePlayerController.seek(), this.lastCurrentTime = e)
        }
    }, {
        key: "isTimeEnded",
        get: function() {
            return this.lastCurrentTime + .5 >= this.duration
        }
    }, {
        key: "isOutroRendered",
        get: function() {
            return this._isOutroRendered || !1
        }
    }, {
        key: "isLooped",
        get: function() {
            return this._player.config.embed.loop
        }
    }, {
        key: "isEndOfVideo",
        get: function() {
            return this._isEndOfVideo || !1
        }
    }, {
        key: "volumeLevel",
        set: function(e) {
            Pn.remotePlayer && Pn.remotePlayerController && (Pn.remotePlayer.volumeLevel = e, Pn.remotePlayerController.setVolumeLevel())
        },
        get: function() {
            return Pn.remotePlayer ? Pn.remotePlayer.volumeLevel : 0
        }
    }, {
        key: "duration",
        get: function() {
            return this._player.config.video.duration
        }
    }, {
        key: "isPlayingOrPaused",
        get: function() {
            return Pn.remotePlayer ? Pn.remotePlayer.playerState === Pn.PlayerState.PLAYING || Pn.remotePlayer.playerState === Pn.PlayerState.PAUSED : null
        }
    }, {
        key: "isIdle",
        get: function() {
            return Pn.remotePlayer ? null === Pn.remotePlayer.playerState || Pn.remotePlayer.playerState === Pn.PlayerState.IDLE : null
        }
    }, {
        key: "isMediaLoaded",
        get: function() {
            return !!Pn.remotePlayer && Pn.remotePlayer.isMediaLoaded
        }
    }]), e
}();
const Pn = h(new(function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    _(t, e);
    var n = t.prototype;
    return n.init = function({
        appId: t,
        chromecastPlayer: n = null
    } = {}) {
        var i, o;
        return t || (t = (null == n || null == (i = n._player) ? void 0 : i.config.request.flags.ott) ? (null == n || null == (o = n._player) ? void 0 : o.config.ottCastOptions) ? n._player.config.ottCastOptions.appId ? n._player.config.ottCastOptions.appId : Ln.id : Tn.id : kn.id), this.chromecastPlayer = n, this.setup().then(n => (n && (e.prototype.init.call(this, {
            receiverApplicationId: t,
            autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
        }), this.chromecastPlayer && this.chromecastPlayer.init()), n)).catch(e => (this.fire(Sn.error, e), Promise.reject(e)))
    }, n.dispose = function() {
        this.chromecastPlayer = null
    }, m(t, [{
        key: "chromecastPlayer",
        get: function() {
            return this._chromecastPlayer
        },
        set: function(e) {
            if (e && !(e instanceof An)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
            this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
        }
    }]), t
}(g)));

function In(e) {
    return e.replace(/(_\w)/g, e => e[1].toUpperCase())
}

function Rn(e) {
    return function e(t, n) {
        return Object.keys(n).reduce((i, o) => (n[o] && "object" == typeof n[o] ? i[t(o)] = e(t, n[o]) : i[t(o)] = n[o], i), {})
    }(In, e)
}
const xn = e => ({
        type: "CONFIG_LOAD",
        payload: d({}, Rn(e))
    }),
    Dn = e => ({
        type: "LIVE_SETTINGS_UPDATE",
        payload: e
    });

function Nn(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.liveEvent ? d(d({}, e), n.video.liveEvent) : null;
        case "LIVE_UPDATE":
            return d(d({}, e), n);
        case "LIVE_SET_START_TIME":
            return d(d({}, e), {}, {
                ingest: d(d({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return d(d({}, e), {}, {
                settings: d(d({}, e.settings), n)
            });
        default:
            return e
    }
}
const Mn = e => {
        var t;
        return !!(null == (t = e.liveEvent) ? void 0 : t.status)
    },
    On = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    Bn = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.scheduledStartTime) || null
    },
    Vn = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.startTime) || null
    },
    Fn = e => {
        var t;
        return "pending" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Un = e => {
        var t;
        return "active" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    qn = e => {
        var t;
        return "started" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Hn = e => {
        var t;
        return "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    $n = e => Mn(e) && !Hn(e),
    Wn = e => {
        var t, n;
        return "done" === (null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status)
    },
    jn = e => {
        var t, n;
        return null == e || null == (t = e.liveEvent) || null == (n = t.settings) ? void 0 : n.eventSchedule
    };
var zn = Object.freeze({
    __proto__: null,
    default: Nn,
    liveExists: Mn,
    liveStatus: On,
    liveArchiveStatus: e => {
        var t, n;
        return null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status
    },
    dashLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.dash_noredirect
    },
    hlsLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.hls
    },
    scheduledLiveStartTime: Bn,
    liveStartTime: Vn,
    isLivePending: Fn,
    isLiveActive: Un,
    isLiveStarted: qn,
    isLiveEnded: Hn,
    liveInProgress: $n,
    isLiveArchived: Wn,
    hasEventSchedule: jn
});

function Yn(e, t, n) {
    let i = null;

    function r() {
        return n.getAttribute("data-thumb")
    }

    function a() {
        return wn(t.get("ui.player.width") * o.devicePixelRatio, t.get("ui.player.height") * o.devicePixelRatio)
    }

    function s() {
        return t.get(Mn) && !t.get(qn) || !e.config.embed.autoplay || Pn.isCastConnected
    }

    function l() {
        if (!e.config.video.thumbs.base) return Promise.resolve();
        const {
            width: i,
            height: o
        } = a(), l = En({
            width: i,
            height: o,
            baseUrl: e.config.video.thumbs.base
        });
        n.setAttribute("data-thumb", l), n.setAttribute("data-thumb-width", i);
        const c = Cn(l).then(e => (t.dispatch(((e, t) => ({
            type: "PREVIEW_SET_SIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), s() && (n.style.backgroundImage = `url(${r()})`), e));
        return s() ? Promise.race([c, new Promise(e => setTimeout(e, 2e3))]) : Promise.resolve()
    }
    return i = l(), e.events.on(Xt._didEnterFullscreen, () => {
        n.classList.contains("vp-preview-invisible") && "beginning" !== e.config.embed.outro || (i = l())
    }), t.watch("ui.player.width", f(() => {
        i = i.then(() => function() {
            const {
                width: e
            } = a(), t = n.getAttribute("data-thumb-width");
            return e <= parseInt(t, 10) || 0 === e ? Promise.resolve() : l()
        }()).catch(e => {})
    }, 150)), t.watch("ui.preview.scaleFactor", e => {
        n.classList.toggle("vp-preview-cover", e > 1)
    }), {
        show: function() {
            n.style.backgroundImage = `url(${r()})`, n.classList.remove("vp-preview-invisible")
        },
        hide: function() {
            n.classList.add("vp-preview-invisible")
        },
        resetThumbnail: function() {
            n.setAttribute("data-thumb", ""), n.setAttribute("data-thumb-width", ""), n.style.backgroundImage = ""
        },
        getThumbnail: r,
        loadThumbnail: l,
        thumbnailPromise: i
    }
}
const Gn = e => ({
        type: "CAPTIONS_SET_FONT_SIZE",
        payload: e
    }),
    Kn = e => ({
        type: "CAPTIONS_SET_FONT_FAMILY",
        payload: e
    }),
    Zn = e => ({
        type: "CAPTIONS_SET_FONT_OPACITY",
        payload: e
    }),
    Xn = e => ({
        type: "CAPTIONS_SET_COLOR",
        payload: e
    }),
    Jn = e => ({
        type: "CAPTIONS_SET_BACKGROUND_OPACITY",
        payload: e
    }),
    Qn = e => ({
        type: "CAPTIONS_SET_BACKGROUND_COLOR",
        payload: e
    }),
    ei = e => ({
        type: "CAPTIONS_SET_WINDOW_OPACITY",
        payload: e
    }),
    ti = e => ({
        type: "CAPTIONS_SET_WINDOW_COLOR",
        payload: e
    }),
    ni = e => ({
        type: "CAPTIONS_SET_EDGE_STYLE",
        payload: e
    }),
    ii = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: Qn
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: Xn
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: Gn
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: Kn
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: Zn
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: ni
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: Jn
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: ti
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: ei
        }
    }),
    oi = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    };

function ri(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function ai(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (ke) {}
    return null
}
const si = ["quality", "volume", "captions", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity"];
let li = null;

function ci(e) {
    const t = ii(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = ai("player")
        } catch (ke) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = ri(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = ri(n), i && function(t, n) {
            if (li) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    li.then(n => {
                        const i = yt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    }).catch(t => {
                        gn.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    })
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            si.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            si.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(si);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=ri(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    document.cookie = a
                } catch (ke) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        switch (t) {
            case "sync_quality":
                e.events.fire(Ut._changeQuality, n, !0);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(Ut._changeVolume, n, !0);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(Ut._turnCaptionsOff, !0);
                    break
                }
                e.events.fire(Ut._turnCaptionsOn, n, !0);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Xt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(Xt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Xt._becameInactive)
        }
    }
    return e.events.on(Xt._qualityChanged, (function(e, t) {
        t || r("quality", e)
    })), e.events.on(Xt._volumeChanged, (function(t, n) {
        e.config.request.cookie.volume = ri(t), n || r("volume", t, !1)
    })), e.events.on(Xt._captionsChanged, (function(t, n) {
        if (t) {
            const i = `${t.language}.${t.kind}`;
            return e.config.request.cookie.captions = ri(i), void(n || r("captions", e.config.request.cookie.captions))
        }
        e.config.request.cookie.captions = null, n || r("captions", null)
    })), e.events.on(Ut._changeCaptionsStyles, (function(t, n) {
        const {
            dispatch: i,
            cookie: o
        } = t;
        e.store.dispatch(i(n)), r(`captions_${o}`, ri(n))
    })), e.events.on(Ut._resetCaptionsStyles, (function() {
        e.store.dispatch({
            type: "CAPTIONS_RESET"
        }), Object.keys(t).forEach(e => {
            const {
                cookie: n
            } = t[e];
            r(`captions_${n}`, null)
        })
    })), e.events.on(Xt._playButtonPressed, (function() {
        e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Xt._becameActive))
    })), e.events.on([Xt._pauseButtonPressed, Xt._ended], (function() {
        o("active") === e.config.request.session && r("active", null)
    })), e.events.on(Xt._userLoggedIn, (function() {
        r("login", !0)
    })), n && !li && (li = function(t) {
        return new Promise((n, i) => {
            document.createElement("a").href = e.config.request.urls.proxy;
            const o = document.createElement("iframe");
            o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                const n = yt(e.config.request.urls.proxy);
                o.contentWindow.postMessage({
                    method: "ping"
                }, n)
            }, o.onerror = function(e) {
                i(e)
            };
            const r = setTimeout(() => {
                i()
            }, 1e4);
            window.addEventListener("message", (function e(i) {
                0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
            }), !1), document.body.appendChild(o)
        })
    }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
        const n = yt(e.config.request.urls.proxy);
        t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
    }), !1) : window.addEventListener("storage", (function(e) {
        var t;
        if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
            try {
                if (window.localStorage.getItem(e.key) !== e.newValue) return
            } catch (n) {}
            try {
                a(e.key, JSON.parse(e.newValue))
            } catch (n) {
                gn.captureException(n, {
                    extra: {
                        key: e.key,
                        oldValue: e.oldValue,
                        newValue: e.newValue
                    }
                })
            }
        }
    }), !1), {
        reset: function() {
            r("login", !!e.config.user.logged_in)
        }
    }
}

function di(e, t) {
    return function(e, t = null) {
        const n = {
            feature: t,
            $deeplink_path: "app.vimeo.com/" + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        };
        let i = "",
            o = [];
        for (let r in n) o.push(`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`);
        return i = o.join("&"), `https://bnc.lt/a/key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d?${i}`
    }(`videos/${e}`, t)
}

function ui() {}
const pi = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144];

function vi(e, t, n) {
    const i = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t, n;
                    if (pi.includes(null == e || null == (t = e.config) || null == (n = t.user) ? void 0 : n.id)) return function(e, t) {
                        return e && e.then ? e.then(ui) : Promise.resolve()
                    }(O(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.loadConfigRequestObject()
            }))
        })),
        r = e.events;
    let a = e.backbone;
    const s = ii(),
        l = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad);
    var c = o.iOS >= 8 && !o.iPad,
        d = !1,
        m = !1,
        f = !1,
        h = !1,
        _ = null,
        g = !1,
        B = !1,
        V = !1,
        F = !1,
        U = !1,
        q = !1;

    function H(e) {
        a.element.classList.remove("invisible"), $()
    }

    function $() {
        let e = a.play();
        return q && (e = e.catch(W)), e.catch(z).then(Y)
    }

    function W(e) {
        if (q = !1, j(e)) return r.fire(Ut._changeMuted, !0), a.play();
        throw e
    }

    function j(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function z(e) {
        return r.fire(Xt._playRejected, e), new Promise(() => {})
    }

    function Y() {
        r.fire(Xt._playResolved)
    }

    function G(e) {
        try {
            a.currentTime = e
        } catch (t) {}
    }

    function K() {
        h || g || d && a.paused && $()
    }

    function Z() {
        let t = "none";
        ("metadata" === e.config.request.flags.preload_video || l || o.iOS >= 8) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === a.currentScannerName && (t = "auto")), a.preload = t, r.on(Xt._mousedOver, (function() {
            e.config.request && "metadata_on_hover" === e.config.request.flags.preload_video && !f && e.verifyConfig().then(() => (a.preload = "metadata", !0)).catch(e => {})
        }))
    }

    function X() {
        U = !1;
        const t = a.video;
        if (a.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (a.hasTextTrack(t)) {
                    const e = !0;
                    r.fire(Ut._turnCaptionsOn, t, e)
                }
            } else r.on(v.TEXT_TRACKS_AVAILABLE, () => {
                n(), i()
            }), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (a.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                r.fire(Ut._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach(t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some(e => e.id === r);
                e.store.dispatch(i(a ? r : oi[t]))
            })
        }
    }

    function J(e, t, n, i) {
        if (m) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), m = !1
        }
    }

    function Q() {
        if (e.config.embed.autoplay) {
            if (t.get(Mn) && !t.get(qn)) return;
            r.fire(Xt._playButtonPressed)
        }
    }
    a.element.classList.add("invisible"), c && a.element.classList.add("hide-webkit-controls"), e.config.video.live_event && n.classList.add("live-background"), e.config.embed.transparent && n.classList.add("transparent"), t.watch(On, (function(t) {
            if ("started" === t) {
                var n, i, o, s;
                const t = () => {
                    X(), a.element.classList.remove("invisible"), r.fire(Xt._playButtonPressed)
                };
                (null == e || null == (n = e.config) || null == (i = n.request) || null == (o = i.ab_tests) || null == (s = o.live_verify_duration) ? void 0 : s.group) ? t(): setTimeout(t, 12e3)
            }
        })), t.watch(Wn, i), t.watch("ui.video.scaleFactor", e => {
            a.element.classList.toggle("vp-telecine-cover", e > 1)
        }),
        function t() {
            r.once(Xt._swapVideo, t), a = e.backbone, Rt(a.on, r.fire, [b, y, w, E, u, C, k, L, T, S.ACTIVATED, S.AVAILABLE, S.DEACTIVATED, S.UNAVAILABLE, A.ARCHIVE_DONE, A.EVENT_ACTIVE, A.EVENT_ENDED, A.EVENT_STARTED, A.STREAM_OFFLINE, A.STREAM_ONLINE, A.BUFFER_GAP_JUMP, A.BUFFER_GAP_JUMP_PREVENT, A.STALL_JUMP, A.SETTINGS_UPDATED, A.LOW_LATENCY_FALLBACK, A.LIVE_STATS_SUCCESS, A.LIVE_STATS_FAILURE, P.MEDIASESSION_PAUSE, P.MEDIASESSION_PLAY, P.MEDIASESSION_SEEK_BACKWARD, P.MEDIASESSION_SEEK_FORWARD, v.AV_DURATION_MISMATCH, v.BANDWIDTH, v.BUFFER_ENDED, v.BUFFER_OCCUPANCY, v.BUFFER_STARTED, v.CHAPTER_CUES_UPDATED, v.CUE_POINT, v.CURRENT_FILE_CHANGE, v.DOWNLOAD_END, v.DOWNLOAD_TIMEOUT, v.DRM_AUTH_SUCCESS, v.DRM_KEY_SWITCH, v.DROPPED_FRAMES, v.MANIFEST_LOADED, v.MANIFEST_TIMEOUT, v.QUOTA_EXCEEDED_ERROR, v.SCANNER_CHANGE, v.STREAM_BUFFER_START, v.STREAM_CHANGE, v.STREAM_CHANGE_START, v.STREAM_TARGET_CHANGE, v.TEXT_TRACKS_AVAILABLE, v.DROPPED_FRAME_PERCENT_EXCEEDED, I.CAMERA_CHANGE, I.CAMERA_UPDATE, I.MOTION_END, I.MOTION_START, I.SPATIAL_UNSUPPORTED, I.WEBVR_ENTER, I.WEBVR_EXIT, I.WEBVR_HARDWARE_AVAILABLE, R.BRAIN_ML_SWITCH_TO_SKYFIRE, R.BRAIN_ML_MODEL_INPUTS, p.DURATION_CHANGE, p.ENDED, p.ERROR, p.LOAD_START, p.LOADED_DATA, p.LOADED_METADATA, p.PAUSE, p.PLAY, p.PLAYING, p.PROGRESS, p.RATE_CHANGE, p.RESIZE, p.SEEKED, p.SEEKING, p.STALLED, p.TIME_UPDATE, p.VOLUME_CHANGE, p.WAITING, p.ENTER_PICTURE_IN_PICTURE, p.LEAVE_PICTURE_IN_PICTURE, p.WEBKIT_BEGIN_FULLSCREEN, p.WEBKIT_END_FULLSCREEN])
        }(), Rt(Pn.on, r.fire, [Sn.connected, Sn.disconnected]), Z(), r.on(p.LOADED_METADATA, (function(t) {
            e.config.video.duration = a.duration, e.config.video.video_width = a.videoWidth, e.config.video.video_height = a.videoHeight
        })), r.on(p.DURATION_CHANGE, (function(t) {
            e.config.video.duration = a.duration
        })), r.on(v.SCANNER_CHANGE, () => {
            Z(), setTimeout(() => {
                r.fire(a.supportsSettingVolume ? Ut._enableVolume : Ut._disableVolume), r.fire(a.supportsTextTracks ? Ut._enableCaptions : Ut._disableCaptions)
            }, 0), gn.captureBreadcrumb(`Scanner changed to ${a.currentScannerName}`, {}, "video")
        }), r.on([A.EVENT_ACTIVE, A.EVENT_STARTED, A.EVENT_ENDED, A.ARCHIVE_DONE], n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: "LIVE_UPDATE",
                payload: e
            }))(n))
        }), r.on(Xt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                if ("disable" !== e.config.video.privacy && e.config.video.spatial && o.iOS && !U || a.element.classList.remove("invisible"), _) return r.fire(Xt._error, _), void e.preview.show();
                if (d = !0, g) e.preview.show();
                else {
                    if (a.off(p.PLAY, H), l && (B = !0, r.fire(Ut._forceFullscreen)), t.get(qn) && (q = !0), !f) return e.config.video.spatial && o.iOS && !U ? (U = !0, r.fire(Ut._showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? e.config.video.share_url : di(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }), void r.once(p.PLAY, H)) : void $().then(() => {
                        !a.muted || !t.get(qn) && a.supportsSettingVolume || r.fire(Xt._muteAutoplayed)
                    }).catch(console.error);
                    f && K()
                }
            }()
        })).on(Xt._pauseButtonPressed, () => {
            d = !1, e.displayContext.pause()
        }).on(Xt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !a.paused && !e.config.embed.settings.background || d) && (d = !1, r.fire(Xt._pauseButtonPressed))
        })), r.on(p.ERROR, (function(t) {
            if (j(t) && !q) {
                if (e.config.embed.autoplay = 0, a.pause(), e.config.embed.time) return G(e.config.embed.time), void r.fire(Xt._paused, a.currentTime);
                if (0 === a.currentTime) return void r.fire(Ut._reset);
                r.fire(Xt._paused, a.currentTime)
            }
        })), r.on(p.PLAY, (function(e) {
            a.element.classList.remove("invisible")
        })), r.on(p.PAUSE, (function(e, t) {
            h || r.fire(Xt._paused, e, t)
        })), r.on(p.TIME_UPDATE, (function({
            currentTime: e
        }) {})), r.on(p.ENDED, (function(t) {
            h || e.config.embed.loop || (B && r.fire(Xt._fullscreenButtonPressed), d = !1, r.fire(Xt._ended, t))
        })), r.on(v.DRM_AUTH_SUCCESS, () => {
            m = !0
        }), r.on(u, () => {
            f = !0, r.once(p.TIME_UPDATE, () => {
                r.fire(Xt._firstTimeUpdate)
            })
        }), r.on(v.BUFFER_STARTED, () => {
            h || r.fire(Ot._bufferStarted)
        }), r.on(R.BRAIN_ML_SWITCH_TO_SKYFIRE, () => {
            "ml_brain" in e.config.request.ab_tests && delete e.config.request.ab_tests.ml_brain
        }),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                if (t) return;
                if (o.name.includes(x)) return;
                if (o.name === D) return void r.fire(Ut._disableCaptions);
                gn.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let a = e.config.video.live_event ? .25 : .01;
                if (o.name === N && !n) {
                    n = !0, a = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        s = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        p = t.file_codecs,
                        v = e.config.video.file_codecs,
                        m = e.config.user.logged_in,
                        f = t.build.js;
                    gn.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: s,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: p,
                        video_file_codecs: v,
                        logged_in: m,
                        version: f
                    }, "MediaUrlBadRequest config", "error")
                } - 1 !== o.name.indexOf("Mimir") && (a = .5, gn.captureBreadcrumb(o.name, o, "ABR", "error"));
                const s = new Error(o.message);
                s.name = o.name, gn.captureException(s, null, a);
                const l = an[o.name];
                if ("function" != typeof l) return;
                const c = l();
                if (c.final && r.off(p.ERROR, i), _ = c.deferred ? c.id : null, o.name === M) {
                    let t = e.config.request.dynamic_drm_translation_map,
                        n = o.message.code;
                    t && n && t[n] && (c.title = t[n].title, c.message = t[n].msg), gn.captureBreadcrumb("DRM failure", o, "video")
                }
                r.fire(Xt._error, c.id, c)
            }
            window.addEventListener("unload", () => {
                t = !0
            }, !1), r.on(p.ERROR, i), r.on("test-error", i)
        }(), r.on(Ut._changeLoop, (function(t) {
            const n = !!t && (!o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, a.loop = n
        })), r.fire(Ut._changeLoop, e.config.embed.loop), r.on(Xt._chapterSeekAttempted, (t, n) => {
            e.events.fire(Xt._chapterSeek, n), e.events.fire(Ut._seek, t), f || r.fire(Xt._playButtonPressed)
        }), r.on(Xt._scrubbingStarted, (function() {
            g || (d = !a.paused, h = !0, a.pause())
        })), r.on(Xt._scrubbingEnded, (function(e) {
            h = !1, f ? e || K() : r.fire(Xt._playButtonPressed)
        })), r.on(Ut._seek, (function(e) {
            g || r.fire(Ut._setTime, e)
        })), r.on(Ut._setTime, (function(t) {
            f || e.fragmentsHandler.checkForNewFragment(t, a.duration), G(t)
        })),
        function() {
            r.on(Ut._changeVolume, (function(t, n, i) {
                i && (t += a.volume), t = St(t = Et(t, 0, 1)), e.displayContext !== a && (e.displayContext.volume = t), a.volume = t, a.muted = 0 === t, e.events.fire(Xt._volumeChanged, t, n)
            })), r.on(Ut._changeMuted, (function(t) {
                a.muted = !!t, e.events.fire(Xt._volumeChanged, a.volume, !0)
            })), r.on(p.VOLUME_CHANGE, () => {
                const e = a.muted ? 0 : a.volume;
                r.fire(Xt._volumeChanged, e, !0)
            });
            const t = e.config.request.cookie.volume;
            r.fire(Ut._changeVolume, t, !0), r.fire(Ut._changeMuted, e.config.embed.muted)
        }(),
        function() {
            let e;
            r.on(Ut._changeQuality, (function(n, i) {
                (a.video.currentFile.mime === Ft.dash || t.get(qn)) && (i = !0), e = i, a.quality = n
            })), r.on(C, (function(t) {
                r.fire(Xt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = a.playbackRate;
            r.on(p.RATE_CHANGE, (function(t) {
                a.playbackRate !== e && (r.fire(Xt._playbackRateChanged, a.playbackRate, e), e = a.playbackRate)
            })), r.on(Ut._changePlaybackRate, (function(e) {
                a.playbackRate = e
            })), r.on(Xt._loadVideo, (function() {
                try {
                    a.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                g = !0, "interactive" !== e && f && !F && (d = d || !a.paused, a.pause(), r.fire(Xt._paused, a.currentTime))
            }

            function t() {
                g = !1, d && !F && (B || V || !l || r.fire(Ut._forceFullscreen), K())
            }
            r.on(Xt._overlayOpened, e), r.on(Xt._overlayClosed, t), r.on(Xt._menuVisibilityChanged, (function(n, i) {
                i && "preact-menu" !== i && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), r.on(Xt._popupOpened, (function(e) {
            f && !F && (d = !a.paused, a.pause())
        })), r.on(Xt._popupClosed, (function(e) {
            F || K()
        })), r.on(Xt._didEnterFullscreen, (function(t, n) {
            a.element.classList.remove("hide-webkit-controls"), t && (V = !0), t || (f || o.browser.safari || (a.poster = e.preview.getThumbnail()), B = !0, setTimeout(() => {
                a.textTracks.forEach(e => {
                    "hidden" === e.mode && (e.mode = "showing")
                })
            }, 500)), n || !o.windowsPhone || o.browser.edge || r.fire(Ut._toggleNativeControls, !0)
        })), r.on(Xt._didExitFullscreen, (function(e) {
            a.poster = "", e || a.pause(), f || a.element.classList.add("invisible"), B = !1, V = !1, c && a.element.classList.add("hide-webkit-controls"), a.textTracks.forEach(e => {
                "showing" === e.mode && (e.mode = "hidden")
            })
        })), r.on(u, (function() {
            a.poster = ""
        })), r.on(Ut._toggleNativeControls, (function(e) {
            if (e) return a.controls = !0, void n.classList.add("native-controls");
            a.controls = !1, n.classList.remove("native-controls")
        })), r.on(Xt._requestConfigReloaded, (function() {
            X()
        })), r.on(Xt._configChanged, (function() {
            X(), Q()
        })), r.on(Ut._reset, (function() {
            a.unload(), r.fire(Xt._paused, a.currentTime), e.preview.show(), a.element.classList.add("invisible"), f = !1, d = !1, _ = null
        })),
        function() {
            let t;
            r.on(Ut._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    (e.config.request.flags.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && a.videoElement && a.videoElement.setAttribute("crossorigin", "anonymous"), a.enableTextTrack(n)
                } catch (o) {}
            })).on(Ut._turnCaptionsOff, (function(n = !1) {
                t = n, e.config.request.flags.ott && a.videoElement && a.videoElement.removeAttribute("crossorigin"), a.disableTextTrack()
            })), r.on(b, (function(e, n) {
                r.fire(Xt._captionsChanged, e, t || n)
            }))
        }(), r.on(S.AVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Xt._airPlayAvailable)
            }
        })), r.on(S.UNAVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Xt._airPlayNotAvailable)
            }
        })), r.on(S.ACTIVATED, (function({
            type: e
        }) {
            switch (F = !0, e) {
                case "AirPlay":
                    r.fire(Xt._airPlayActivated)
            }
        })), r.on(S.DEACTIVATED, (function({
            type: e
        }) {
            switch (F = !1, e) {
                case "AirPlay":
                    r.fire(Xt._airPlayDeactivated)
            }
        })), r.on(Xt._airPlayButtonPressed, (function() {
            a.showExternalDisplayPicker("AirPlay")
        })), r.on(Ut._activatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.requestPictureInPicture()
        }), r.on(Ut._deactivatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.exitPictureInPicture()
        }), X(), o.spatialPlayback ? (r.fire(Ut._attachSpatialPlaybackEvents), r.on([p.PLAY, p.SEEKED], () => {
            r.fire(Ut._revealSpatialControls)
        }), r.on(I.SPATIAL_UNSUPPORTED, () => {
            f ? r.fire(Ot._spatialFailure, g) : r.once(Xt._firstTimeUpdate, () => {
                r.fire(Ot._spatialFailure, g)
            })
        })) : r.once(Xt._firstTimeUpdate, () => {
            e.config.video.spatial && r.fire(Ot._spatialUnsupported, g)
        }), window.addEventListener("beforeunload", () => {
            const t = e.config.request.drm;
            t && J(t.hoover_url, t.user, t.asset, t.hoover_token)
        }, !1), r.on(Xt._loadVideo, () => {
            const t = e.config.request && e.config.request.drm;
            t && J(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), e.events.on(Ut._destroy, () => a.destroy()), e.ready().then(() => (setTimeout(() => Q(), 0), e.config.embed.time > 0 && r.fire(Ut._setTime, e.config.embed.time, e.config.embed.time / a.duration), null)).catch(e => {}), r.fire(Xt._videoModuleReady)
}
const mi = (e, t) => ({
    type: "WEBINAR_FORM_SUCCESS",
    payload: {
        formSuccess: e,
        registrantUuid: t
    }
});

function fi(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.webinar ? d(d({}, e), n.video.webinar) : null;
        case "WEBINAR_FORM_SUCCESS":
            return d(d({}, e), {}, {
                formSuccess: n.formSuccess,
                registrantUuid: n.registrantUuid
            });
        case "WEBINAR_REGISTRANT_UUID_AVAILABLE":
            return d(d({}, e), {}, {
                registrantUuid: n.registrantUuid
            });
        default:
            return e
    }
}
const hi = e => {
        var t;
        return !!(null == (t = e.webinar) ? void 0 : t.formSuccess)
    },
    _i = e => {
        var t;
        return null == (t = e.webinar) ? void 0 : t.registrantUuid
    };
var gi = Object.freeze({
    __proto__: null,
    default: fi,
    webinarFormSuccess: hi,
    webinarRegistrantUuid: _i
});

function bi(e, t) {
    var n, i, s, l, c, m, f = 0,
        h = {},
        _ = new r;

    function g() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function b() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function y() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, s = 0, l = 0, c = 0, m = !1
    }

    function w(t, n, i, o) {
        e.verifyConfig().then(() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (gn.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), gn.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const s = e.config.request.urls.player_telemetry_url + t;
            return _.logRequestPromiseWithUrl(s, a, !i).then(t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(Xt._requestConfigReloaded, () => {
                        w(s, n, i, o + 1)
                    });
                    setTimeout(() => {
                        w(s, n, i, o + 1)
                    }, 1e3)
                }
            }).catch(e => {
                throw e
            })
        }).catch(e => {})
    }

    function E(n, i, o) {
        const r = e.backbone.currentFile || {};
        let {
            id: l = 0,
            mime: c = Ft.h264,
            metadata: {
                profile: u = -1
            } = {}
        } = r;
        c === Ft.dash && ({
            id: l = 0,
            profile: u = -1
        } = h), e.performDelegateAction(Zt, (p, v = {}) => {
            let m = a => {
                var p, m;
                let f = d(d({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: v.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: (null == (p = e.config.video.vod) ? void 0 : p.id) ? e.config.video.vod.id : null,
                    vodSaleId: (null == (m = e.config.video.vod) ? void 0 : m.sale_id) ? e.config.video.vod.sale_id : null,
                    sessionTime: St(s),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: b(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(l)) ? l : "0",
                    delivery: Qt[c],
                    profileId: u,
                    quality: r.metadata ? r.metadata.quality : null,
                    duration: St(e.config.video.duration),
                    seconds: St(i)
                }, a), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: vn(e.config)
                });
                if (e.config.video.webinar) {
                    if (!t.get(_i)) {
                        const n = ai(`${e.config.video.webinar.id}_webinar_registrant`);
                        t.dispatch((e => ({
                            type: "WEBINAR_REGISTRANT_UUID_AVAILABLE",
                            payload: {
                                registrantUuid: e
                            }
                        }))(n))
                    }
                    f.webinarRegistrantUuid = t.get(_i)
                }
                w(n, f, o)
            };
            const f = t.get($n) ? 1 : 0;
            let h = t.get(Vn),
                _ = {
                    isLive: f
                };
            if (f) {
                if (!h) return void a(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then(e => (e && e.ingest && (t.dispatch((e => ({
                    type: "LIVE_SET_START_TIME",
                    payload: e
                }))(e.ingest.start_time)), h = t.get(Vn)), h && (_.liveStartTime = h), m(_), e)).catch(e => {});
                _.liveStartTime = h
            }
            m(_)
        })
    }

    function C(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled) {
            var r = g();
            o && l + 1e3 > r || (l = r, o && !e.config.request.flags.partials || n || E("/log/partial", t, i))
        }
    }

    function k(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
            vodSaleId: (null == (o = e.config.video.vod) ? void 0 : o.sale_id) ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: St(e.config.video.duration),
            seconds: St(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: vn(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        w("/log/" + t, r)
    }
    return y(),
        function() {
            e.events.on(p.TIME_UPDATE, (function({
                currentTime: e,
                duration: t,
                timeProgress: o,
                playbackRate: r
            }) {
                var a = Math.floor(e);
                !n && c + 1e3 < g() && (e > i && (s += (e - i) / r), i = e), a % 30 == 0 && C(e)
            })), e.events.on(Xt._playbackRateChanged, (function(t, n) {
                k("playback_rate_change", {
                    oldPlaybackRate: n
                }), C(e.backbone.currentTime)
            })), e.events.on(u, (function() {
                !m && e.playLoggingEnabled && (m = !0, E("/log/play", e.backbone.currentTime))
            })), e.events.on(Xt._paused, (function(t) {
                e.backbone.ended || C(t)
            })), e.events.on(p.SEEKED, (function({
                currentTime: e
            }) {
                f = e, n || C(f)
            })), e.events.on(Xt._scrubbingStarted, (function() {
                c = g(), n = !0
            })), e.events.on(Xt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, C(f)
            })), e.events.on(Xt._prefsButtonPressed, (function() {
                C(e.backbone.currentTime)
            })), e.events.on(Xt._ended, (function() {
                s += e.config.video.duration - i, C(e.config.video.duration, !1, !1)
            })), e.events.on(v.STREAM_CHANGE, (function(e) {
                h = e
            }));
            let t = [],
                o = !1;

            function r() {
                t.length && e.performDelegateAction(Zt, (n, i = {}) => {
                    var o, r;
                    w("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: (null == (o = e.config.video.vod) ? void 0 : o.id) ? e.config.video.vod.id : null,
                        vodSaleId: (null == (r = e.config.video.vod) ? void 0 : r.sale_id) ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: vn(e.config),
                        motionLog: JSON.stringify(t)
                    }, !1)
                })
            }
            e.events.on(I.MOTION_START, () => {
                o = !0,
                    function n() {
                        let i = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                            r = Math.round(100 * i.lat) / 100,
                            a = Math.round(100 * i.long) / 100;
                        const l = {
                            sessionTime: s,
                            videoTime: e.backbone.currentTime,
                            coordinates: {
                                lat: r,
                                lon: a
                            }
                        };
                        t.push(l), setTimeout(() => {
                            o && n()
                        }, 1e3)
                    }()
            }), e.events.on(I.MOTION_END, () => {
                o = !1, r()
            }), e.events.on(Xt._loadVideo, () => {
                r(), t = []
            }), window.addEventListener("unload", (function() {
                e.backbone && e.backbone.currentTime > 0 && (C(e.backbone.currentTime, !0, !1), r())
            }), !1)
        }(), [{
            type: "share_press",
            event: Xt._shareButtonPressed
        }, {
            type: "facebook_press",
            event: Xt._facebookButtonPressed
        }, {
            type: "twitter_press",
            event: Xt._twitterButtonPressed
        }, {
            type: "tumblr_press",
            event: Xt._tumblrButtonPressed
        }, {
            type: "email_press",
            event: Xt._emailButtonPressed
        }, {
            type: "embed_press",
            event: Xt._embedButtonPressed
        }, {
            type: "login_success",
            event: Xt._userLoggedIn
        }, {
            type: "airplay",
            event: Xt._airPlayActivated
        }, {
            type: "vod_press",
            event: Xt._vodButtonPressed
        }, {
            type: "collection_press",
            event: Xt._collectionsButtonPressed
        }, {
            type: "email_capture_submitted",
            event: Xt._emailCaptureSubmitted
        }].forEach((function(t) {
            e.events.on(t.event, function(e) {
                return function() {
                    k(e)
                }
            }(t.type))
        })), e.events.on(Xt._outroDisplayed, (function(t) {
            var n = {
                outroType: e.config.embed.outro,
                ownerAccountType: e.config.video.owner.account_type,
                playerWidth: e.element.clientWidth,
                playerHeight: e.element.clientHeight
            };
            (null == t ? void 0 : t.length) && (n.outroVideos = t.join(",")), k("outro_displayed", n)
        })).on(Xt._outroVideoPressed, (function(t) {
            k("outro_video_press", {
                ownerAccountType: e.config.video.owner.account_type,
                videoId: t
            })
        })).on(Xt._followButtonPressed, (function() {
            k("outro_follow_press", {
                add: !e.config.user.following
            })
        })).on(Xt._outroCtaPressed, (function(t) {
            k("outro_cta_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Xt._outroLinkPressed, (function(t) {
            k("outro_link_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Xt._outroImagePressed, (function(t) {
            k("outro_image_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Xt._likeButtonPressed, (function() {
            k("like_press", {
                add: !e.config.user.liked
            })
        })).on(Xt._watchLaterButtonPressed, (function() {
            k("watch_later_press", {
                add: !e.config.user.watch_later
            })
        })).on(Xt._popupOpened, (function(e) {
            0 === e.indexOf("login-") && k("login_attempt")
        })).on(Xt._captionsChanged, (function(e, t) {
            t || (e ? k("text_track_change", {
                textTrackLanguage: e.language,
                textTrackKind: e.kind
            }) : k("text_track_change"))
        })).on(Xt._badgePressed, (function(e) {
            1 !== e && 12 !== e || k("badge_press", {
                badgeId: e
            })
        })).on(Xt._overlayOpened, (function(e) {
            "email-capture" === e && k("email_capture_displayed")
        })).on(Xt._overlayClosed, (function(e) {
            "email-capture" === e && k("email_capture_dismissed")
        })).on(Xt._cardPressed, (function(t) {
            k("card_press", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: "link"
            })
        })).on(Xt._cardDisplayed, (function(t, n) {
            e.config.embed.editor || k("card_displayed", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: n.url ? "link" : "text"
            })
        })), e.events.on(Xt._configChanged, (function(e) {
            e && y()
        })), e.events.fire(Xt._statsModuleReady), {}
}
const yi = {
    settings: {}
};

function wi(e = yi, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return d(d({}, e), n.embed);
        default:
            return e
    }
}
var Ei = Object.freeze({
    __proto__: null,
    default: wi,
    transparent: e => e.embed.transparent
});

function Ci(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return d(d({}, e), n.video);
        default:
            return e
    }
}
const ki = e => e.video.height / e.video.width;
var Li = Object.freeze({
    __proto__: null,
    default: Ci,
    ratio: ki
});

function Ti(e = {}, t) {
    switch (t.type) {
        case "CONTAINER_RESIZE":
            return d(d({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
const Si = e => e.ui.container.width,
    Ai = e => e.ui.container.height;
var Pi = Object.freeze({
    __proto__: null,
    default: Ti,
    width: Si,
    height: Ai
});

function Ii(e = {}, t) {
    switch (t.type) {
        case "PREVIEW_SET_SIZE":
            return d(d({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Ri = Object.freeze({
    __proto__: null,
    default: Ii,
    scaleFactor: e => wt({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: ji(e),
        elementHeight: zi(e)
    }).scaleFactor
});

function xi(e = oi, t) {
    switch (t.type) {
        case "CAPTIONS_RESET":
            return d(d({}, e), oi);
        case "CAPTIONS_SET_FONT_SIZE":
            return d(d({}, e), {}, {
                fontSize: t.payload
            });
        case "CAPTIONS_SET_COLOR":
            return d(d({}, e), {}, {
                color: t.payload
            });
        case "CAPTIONS_SET_FONT_FAMILY":
            return d(d({}, e), {}, {
                fontFamily: t.payload
            });
        case "CAPTIONS_SET_FONT_OPACITY":
            return d(d({}, e), {}, {
                fontOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_OPACITY":
            return d(d({}, e), {}, {
                bgOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_COLOR":
            return d(d({}, e), {}, {
                bgColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_COLOR":
            return d(d({}, e), {}, {
                windowColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_OPACITY":
            return d(d({}, e), {}, {
                windowOpacity: t.payload
            });
        case "CAPTIONS_SET_EDGE_STYLE":
            return d(d({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var Di = Object.freeze({
    __proto__: null,
    default: xi,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * zi(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const Ni = e => Math.min(Ai(e) / ki(e), Si(e)),
    Mi = e => Math.min(Si(e) * ki(e), Ai(e)),
    Oi = e => wt({
        width: Ni(e),
        height: Mi(e),
        elementWidth: Si(e),
        elementHeight: Ai(e)
    }).scaleFactor,
    Bi = e => Oi(e) > 1,
    Vi = e => e.embed.transparent && !Bi(e) ? Ni(e) : Si(e),
    Fi = e => e.embed.transparent && !Bi(e) ? Mi(e) : Ai(e),
    Ui = e => e.embed.transparent && !Bi(e) ? "contain" : "100% 100%",
    qi = q.createSelector(Vi, Fi, (e, t) => ({
        width: e,
        height: t
    })),
    Hi = q.createSelector(ki, Ui, (e, t, n) => ({
        ratio: e,
        size: t
    }));
var $i = Object.freeze({
    __proto__: null,
    scaleFactor: Oi,
    width: Vi,
    height: Fi,
    size: Ui,
    boundingRect: qi,
    settings: Hi
});
const Wi = {
        xxs: 0,
        xs: 390,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    ji = e => Vi(e),
    zi = e => Fi(e),
    Yi = q.createSelector(ji, zi, (e, t) => ({
        width: e,
        height: t
    })),
    Gi = e => zi(e) > ji(e),
    Ki = e => {
        const t = ji(e),
            n = zi(e);
        if (Gi(e)) return t < 225;
        const i = H(e.embed.settings.customLogo) && t < 300 || n < 169,
            o = !H(e.embed.settings.customLogo) && (t < 338 || n < 190);
        return i || o
    },
    Zi = e => {
        const t = ji(e);
        if (Gi(e)) return t < 300;
        const n = H(e.embed.settings.customLogo) && t <= 375,
            i = !H(e.embed.settings.customLogo) && t <= 450;
        return n || i
    },
    Xi = e => {
        const t = ji(e);
        return t >= Wi.xxs && t < Wi.xs
    },
    Ji = e => {
        const t = ji(e);
        return t >= Wi.xs && t < Wi.sm
    },
    Qi = e => {
        const t = ji(e);
        return t >= Wi.sm && t < Wi.md
    },
    eo = e => {
        const t = ji(e);
        return t >= Wi.md && t < Wi.lg
    },
    to = e => {
        const t = ji(e);
        return t >= Wi.lg && t < Wi.xl
    },
    no = e => {
        const t = ji(e);
        return t >= Wi.xl && t < Wi.xxl
    },
    io = e => ji(e) >= Wi.xxl;
var oo = Object.freeze({
        __proto__: null,
        breakpoints: Wi,
        width: ji,
        height: zi,
        boundingRect: Yi,
        isVerticalVideo: Gi,
        isTinyMode: Ki,
        isMiniMode: Zi,
        mode: e => Ki(e) ? "tiny" : Zi(e) ? "mini" : "normal",
        xxs: Xi,
        xs: Ji,
        sm: Qi,
        md: eo,
        lg: to,
        xl: no,
        xxl: io,
        breakpoint: e => {
            const t = {
                xxs: Xi,
                xs: Ji,
                sm: Qi,
                md: eo,
                lg: to,
                xl: no,
                xxl: io
            };
            return Object.keys(Wi).find(n => t[n](e))
        }
    }),
    ro = Object.freeze({
        __proto__: null,
        scaleFactor: e => wt({
            width: e.video.width,
            height: e.video.height,
            elementWidth: ji(e),
            elementHeight: zi(e)
        }).scaleFactor
    }),
    ao = Object.freeze({
        __proto__: null,
        isLinkTitleVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 203 || e.container.width >= 415,
        isLinkDescriptionVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 340 || e.container.width >= 415 && e.container.height >= 234
    }),
    so = Object.freeze({
        __proto__: null,
        isEmailCaptureVisible: ({
            ui: e
        }) => e.container.width >= 300 && e.container.height >= 169
    });
const lo = e => Gi(e) ? Ki(e) : Zi(e) || Ki(e) || Ji(e) || Xi(e);
var co = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && ji(e) < 415,
    isMenuFullWidth: lo,
    isMenuVerticalVideoMode: e => !lo(e) && Gi(e) && Xi(e) && zi(e) > 300,
    doMenuItemsWrap: e => ji(e) < 240
});

function uo(e = {}, t, n) {
    return {
        container: Ti(e.container, t),
        preview: Ii(e.preview, t),
        captions: xi(e.captions, t)
    }
}
var po = Object.freeze({
    __proto__: null,
    default: uo,
    container: Pi,
    layout: $i,
    player: oo,
    preview: Ri,
    video: ro,
    outro: ao,
    overlay: so,
    controlbar: co,
    captions: Di
});

function vo(e = {}, t) {
    const n = d(d({}, function(e = {}, t) {
        switch (t.type) {
            case "CONFIG_LOAD":
                return d(d({}, e), t.payload);
            default:
                return e
        }
    }(e, t)), {}, {
        embed: wi(e.embed, t),
        video: Ci(e.video, t),
        liveEvent: Nn(e.liveEvent, t),
        webinar: fi(e.webinar, t)
    });
    return d(d({}, n), {}, {
        ui: uo(e.ui, t)
    })
}
var mo = Object.freeze({
    __proto__: null,
    default: vo,
    embed: Ei,
    video: Li,
    liveEvent: zn,
    ui: po,
    webinar: gi
});

function fo(e, t, n, i = {}) {
    const o = ii();
    let r = !1,
        a = !1;
    const s = n.querySelector(".vp-captions-window");

    function l(e) {
        n.style.fontSize = `${e}px`
    }

    function c(e) {
        n.style.fontVariant = "small_capitals" === e ? "small-caps" : "initial";
        const t = o.fontFamily.items.find(t => t.id === e);
        n.style.fontFamily = null == t ? void 0 : t.value
    }

    function d(e) {
        const i = t.get("ui.captions.color"),
            o = new $(i);
        o.alpha = e / 100, n.style.color = o.rgba, g(t.get("ui.captions.edgeStyle"))
    }

    function v(e) {
        const i = t.get("ui.captions.fontOpacity"),
            o = new $(e);
        o.alpha = i / 100, n.style.color = o.rgba
    }

    function m(e) {
        ["opacity-default", "opacity-100", "opacity-75", "opacity-50", "opacity-25", "opacity-0"].forEach(e => {
            n.classList.remove(e)
        }), n.classList.add(`opacity-${e}`)
    }

    function f(e) {
        ["color-white", "color-red", "color-green", "color-blue", "color-yellow", "color-black", "color-cyan", "color-magenta"].forEach(e => {
            n.classList.remove(e)
        }), n.classList.add(`color-${e}`)
    }

    function h(e) {
        const n = t.get("ui.captions.windowColor"),
            i = new $(n);
        i.alpha = e / 100, s.style["background-color"] = i.rgba
    }

    function _(e) {
        const n = t.get("ui.captions.windowOpacity"),
            i = new $(e);
        i.alpha = n / 100, s.style["background-color"] = i.rgba
    }

    function g(e) {
        const i = `0, 0, 0, ${t.get("ui.captions.fontOpacity")/100}`;
        switch (e) {
            case "shadow":
                n.style.textShadow = `2px 2px 2px rgba(${i})`;
                break;
            case "outline":
                n.style.textShadow = `1px 1px 0 rgba(${i}), -1px 1px 0 rgba(${i}), 1px -1px 0 rgba(${i}), -1px -1px 0 rgba(${i})`;
                break;
            case "raised":
                n.style.textShadow = `rgba(${i}) 1px 1px, rgba(${i}) 1.5px 1.5px`;
                break;
            case "depressed":
                n.style.textShadow = `rgba(${i}) -1px -1px, rgba(${i}) -1.5px -1.5px`;
                break;
            default:
                n.style.textShadow = "none"
        }
    }

    function b() {
        n.classList.add("hidden"), n.setAttribute("hidden", "")
    }

    function w() {
        e.backbone.pictureInPictureActive || e.config.embed.settings.background || (n.classList.remove("hidden"), n.removeAttribute("hidden"))
    }

    function E(e = []) {
        for (; s.firstChild;) s.removeChild(s.firstChild);
        if (e.length) {
            var t = "";
            e.forEach((function(e) {
                t += e.html
            })), s.innerHTML = t
        }
    }
    return i.stylesListenerOnly || (e.events.on(y, (function(e, t = []) {
            if (E(t), t.length) return r ? void w() : void(a = !0);
            b()
        })).on(Xt._captionsChanged, (function(e) {
            if (e) return n.setAttribute("lang", e.language), void n.setAttribute("dir", e.rtl ? "rtl" : "ltr");
            n.removeAttribute("dir"), n.removeAttribute("lang")
        })).on(u, (function() {
            r = !0, a && (a = !1, w())
        })).on(p.ENTER_PICTURE_IN_PICTURE, () => {
            b()
        }).on(p.LEAVE_PICTURE_IN_PICTURE, () => {
            w()
        }).on(Ut._reset, (function() {
            r = !1, b()
        })), e.events.on(Xt._controlBarVisibilityChanged, (function(e) {
            e ? n.classList.add("with-controls") : n.classList.remove("with-controls")
        })), e.events.on(Xt._overlayOpened, (function() {
            n.classList.add("invisible")
        })).on(Xt._overlayClosed, (function() {
            n.classList.remove("invisible")
        })), e.events.on(Xt._ended, (function() {
            "nothing" !== e.config.embed.outro && n.classList.add("invisible")
        })).on([p.PLAY, Xt._scrubbingStarted], (function() {
            n.classList.remove("invisible")
        }))),
        function() {
            const e = {
                calculatedFontSize: l,
                fontFamily: c,
                fontOpacity: d,
                color: v,
                backgroundOpacity: m,
                backgroundColor: f,
                windowOpacity: h,
                windowColor: _,
                edgeStyle: g
            };
            Object.keys(e).forEach(n => {
                t.watch(`ui.captions.${n}`, e[n]), e[n](t.get(`ui.captions.${n}`))
            })
        }(), {
            renderCues: E
        }
}
var ho = W((function(e) {
    ! function() {
        var t = {
            templates: {},
            render: function(e, n) {
                return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
            },
            map: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            },
            escape: function(e) {
                return null == e ? "" : String(e).replace(/[&<>"'\\/]/g, (function(e) {
                    return t.map[e]
                }))
            },
            helpers: {}
        };
        t.templates.adcountdown = function(e) {
            return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>'
        }, t.templates.buffer_pattern = function(e) {
            return '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>'
        }, t.templates.compass = function(e) {
            var t = "";
            return t += this.render("tooltip", {
                text: e.label
            }) || "", t += '<svg viewBox="0 0 36 36"> ', 1 == e.version ? t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ', t + "</svg>"
        }, t.templates.logo = function(e) {
            return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
        }, t.templates.nudge = function(e) {
            var t = '<div class="vp-nudge vp-nudge-backward invisible"><div class="vp-nudge-seconds"></div><div class="vp-nudge-symbol vp-nudge-backward-symbol"> ';
            return t += this.render("icon_fast_forward") || "", t += ' </div></div><div class="vp-nudge vp-nudge-forward invisible"><div class="vp-nudge-seconds"></div><div class="vp-nudge-symbol vp-nudge-forward-symbol"> ', (t += this.render("icon_fast_forward") || "") + " </div></div>"
        }, t.templates.outer = function(e) {
            var t = '<div class="vp-video-wrapper"><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview"></div><div class="vp-shade vp-shade-invisible"></div><div class="vp-nudge-shade vp-nudge-shade-left vp-nudge-shade-invisible"></div><div class="vp-nudge-shade vp-nudge-shade-right vp-nudge-shade-invisible"></div><div class="vp-spin vp-spin-invisible"> ';
            return t += this.render("icon_spin") || "", t += ' </div></div><div class="vp-text-alert-wrapper hidden"><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target"></div><div class="vp-captions hidden with-controls" hidden aria-live="assertive"><span class="vp-captions-window"></span></div><div class="vp-outro-wrapper hidden" hidden><div class="vp-outro" role="dialog"></div></div><div class="vp-player-ui-container"></div><div class="vp-player-ui-overlays"></div><div class="vp-controls-wrapper"><div class="vp-unmute hidden" hidden></div></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-modal="true" aria-labelledby="vp-overlay-labelledby" hidden><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', t += this.render("icon_prev") || "", t += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + e.strings.close + '">', (t += this.render("icon_close") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><div class="vp-nudge-wrapper hidden"></div><span id="new-window" hidden>This opens in a new window.</span>'
        }, t.templates.threesixty_reminder = function(e) {
            var t = '<div class="intro-wrap text-only"><div> ';
            return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), t + " <div>" + e.text + "</div></div></div>"
        }, t.templates.time_series_graph = function(e) {
            return '<svg width="' + e.width + '" height="' + e.height + '" viewBox="0 0 ' + e.width + " " + e.height + '"><g><polyline stroke="white" fill="none" points="' + e.points + '"></polyline></g><g> ' + e.markers + " </g></svg>"
        }, t.templates.unmute_button = function(e) {
            var t = '<button type="button" class="vp-unmute-button"> ';
            return (t += this.render("icon_muted") || "") + ' <span class="vp-unmute-button-title">' + e.title + "</span></button>"
        }, t.templates.notice = function(e) {
            return "<h3><span>" + e.strings.text + "<span></h3>"
        }, t.templates.stream_studder = function(e) {
            var t = "<h3> ";
            return (t += this.render("icon_warning") || "") + ' <span>Having issues? <button type="button" class="vp-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>'
        }, t.templates.warning_alert = function(e) {
            var t = "<h3> ";
            return (t += this.render("icon_warning") || "") + " <span>" + e.strings.text + "<span></h3>"
        }, t.templates.icon_airplay = function(e) {
            return '<svg class="airplay-icon" viewBox="0 0 44 36" focusable="false"><polygon class="fill" points="0,0 44,0 44,27 34.5,27 31,23 40,23 40,4 4,4 4,23 13,23 9.5,27 0,27"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>'
        }, t.templates.icon_back = function(e) {
            return '<svg class="icon-back" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M0 32l32 32v-20h32l0-24h-32v-20z"/></svg>'
        }, t.templates.icon_broken_heart = function(e) {
            return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
        }, t.templates.icon_cc = function(e) {
            return '<svg viewBox="0 0 20 14" focusable="false" aria-hidden="true"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>'
        }, t.templates.icon_chapters = function(e) {
            return '<svg class="icon-chapter" viewBox="7 7 18 18" focusable="false" aria-hidden="true"><g class="icon-chapter-group"><rect class="fill" x="11" y="9" width="14" height="2" rx="1"></rect><rect class="fill" x="7" y="9" width="2" height="2" rx="1"></rect><rect class="fill" x="7" y="15" width="2" height="2" rx="1"></rect><rect class="fill" x="11" y="15" width="14" height="2" rx="1"></rect><rect class="fill" x="11" y="21" width="14" height="2" rx="1"></rect><rect class="fill" x="7" y="21" width="2" height="2" rx="1"></rect></g></svg>'
        }, t.templates.icon_check = function(e) {
            return "<svg xmlns='http://www.w3.org/2000/svg' class='check-icon' viewBox='-4 -4 18 18'><path class='fill' fill='#ffffff' d='M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z'/></svg>"
        }, t.templates.icon_chevron_left = function(e) {
            return '<svg viewBox="0 0 24 24"><path class="fill" d="M10.4143 12L14.7072 7.70706L13.2929 6.29285L8.29294 11.2928C8.1054 11.4804 8.00005 11.7347 8.00005 12C8.00005 12.2652 8.1054 12.5195 8.29294 12.7071L13.2929 17.7071L14.7072 16.2928L10.4143 12Z"/></svg>'
        }, t.templates.icon_chevron_right = function(e) {
            return '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path class="fill" d="M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z" /></svg>'
        }, t.templates.icon_circle_info = function(e) {
            return '<svg viewBox="0 0 20 20"><g class="fill"><path d="M10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-11a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path><path d="M10 9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 10 9zm0-2a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5z"></path></g></svg>'
        }, t.templates.icon_clock = function(e) {
            return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
        }, t.templates.icon_close = function(e) {
            return '<svg viewBox="0 0 20 20" class="icon-close"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#fff" fill-rule="evenodd"></path></svg>'
        }, t.templates.icon_dolby_vision = function(e) {
            return '<svg viewBox="0 0 844 126" aria-labelledby="dv-logo-title"><title id="dv-logo-title">Dolby Vision</title><path d="M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z" fill="currentColor" fill-rule="nonzero"/></svg>'
        }, t.templates.icon_embed = function(e) {
            return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + e.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>'
        }, t.templates.icon_facebook = function(e) {
            return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + e.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>'
        }, t.templates.icon_fast_forward = function(e) {
            return '<svg viewBox="0 0 40 20" preserveAspectRatio="xMidYMid" focusable="false"><polygon class="fill" points="1,0 20,10 1,20" /><polygon class="fill" points="20,0 40,10 20,20" /></svg>'
        }, t.templates.icon_follow = function(e) {
            return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>'
        }, t.templates.icon_fullscreen = function(e) {
            return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" focusable="false" aria-hidden="true"><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>'
        }, t.templates.icon_gear = function(e) {
            return '<svg class="icon-gear" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false" aria-hidden="true"><defs><clipPath id="icon-gear-mask-hd"><polygon points="19 9.422 19 0 0 0 0 16 4.996 16 6 9.422 19 9.422"/></clipPath><clipPath id="icon-gear-mask-4k"><polygon points="19 0 0 0 0 16 .656 16 7.641 9.422 19 9.422"/></clipPath></defs><g class="icon-gear-group"><path class="icon-gear-cog fill" d="M8.75,0 L7.25,0 C6.69771525,0 6.25,0.44771525 6.25,1 L6.25,1.71 C6.24203899,2.03670262 6.03616565,2.32571712 5.73,2.44 C5.22486505,2.64787629 4.75048268,2.92375823 4.32,3.26 C4.06726048,3.46530794 3.71530155,3.4969447 3.43,3.34 L2.81,3 C2.57947626,2.86645499 2.30519371,2.83041629 2.04799634,2.89987835 C1.79079898,2.96934041 1.57195122,3.13856029 1.44,3.37 L1.44,3.37 L0.69,4.67 C0.438460777,5.14101477 0.601355467,5.72655514 1.06,6 L1.06,6 L1.68,6.36 C1.95609578,6.53006064 2.1022252,6.84996558 2.05,7.17 C1.97585362,7.71080372 1.97585362,8.25919628 2.05,8.8 C2.1022252,9.12003442 1.95609578,9.43993936 1.68,9.61 L1.06,10 C0.828560291,10.1319512 0.65934041,10.350799 0.589878348,10.6079963 C0.520416285,10.8651937 0.556454987,11.1394763 0.69,11.37 L0.69,11.37 L1.44,12.67 C1.72842942,13.137733 2.34023095,13.2851012 2.81,13 L2.81,13 L3.43,12.64 C3.71530155,12.4830553 4.06726048,12.5146921 4.32,12.72 C4.75048268,13.0562418 5.22486505,13.3321237 5.73,13.54 C6.03616565,13.6542829 6.24203899,13.9432974 6.25,14.27 L6.25,15 C6.25,15.5522847 6.69771525,16 7.25,16 L8.75,16 C9.30228475,16 9.75,15.5522847 9.75,15 L9.75,14.29 C9.75796101,13.9632974 9.96383435,13.6742829 10.27,13.56 C10.7751349,13.3521237 11.2495173,13.0762418 11.68,12.74 C11.9327395,12.5346921 12.2846984,12.5030553 12.57,12.66 L13.19,13.02 C13.4205237,13.153545 13.6948063,13.1895837 13.9520037,13.1201217 C14.209201,13.0506596 14.4280488,12.8814397 14.56,12.65 L14.56,12.65 L15.31,11.35 C15.5746773,10.8743026 15.4102265,10.2742794 14.94,10 L14.94,10 L14.32,9.64 C14.0439042,9.46993936 13.8977748,9.15003442 13.95,8.83 C14.0241464,8.28919628 14.0241464,7.74080372 13.95,7.2 C13.8977748,6.87996558 14.0439042,6.56006064 14.32,6.39 L14.94,6.03 C15.1714397,5.89804878 15.3406596,5.67920102 15.4101217,5.42200366 C15.4795837,5.16480629 15.443545,4.89052374 15.31,4.66 L15.31,4.66 L14.56,3.36 C14.426372,3.13025585 14.2067828,2.96315821 13.9497298,2.89561144 C13.6926768,2.82806466 13.4193087,2.86562606 13.19,3 L13.19,3 L12.57,3.36 C12.2846984,3.5169447 11.9327395,3.48530794 11.68,3.28 C11.2495173,2.94375823 10.7751349,2.66787629 10.27,2.46 C9.96383435,2.34571712 9.75796101,2.05670262 9.75,1.73 L9.75,1 C9.75,0.73478351 9.64464316,0.480429597 9.45710678,0.292893219 C9.2695704,0.10535684 9.01521649,-8.8817842e-16 8.75,0 Z M10.5,8 C10.5,9.38071187 9.38071187,10.5 8,10.5 C6.61928813,10.5 5.5,9.38071187 5.5,8 C5.5,6.61928813 6.61928813,5.5 8,5.5 C9.38071187,5.5 10.5,6.61928813 10.5,8 Z" /></g><g class="icon-gear-text icon-gear-text-hd"><polygon class="fill" points="10.17 12.38 10.46 10.43 12.22 10.43 11.36 16 9.6 16 9.95 13.76 8.09 13.76 7.77 16 6.01 16 6.85 10.43 8.61 10.43 8.32 12.38"/><path class="fill" d="M17.82,11.23 C17.65,10.98 17.32,10.43 15.93,10.43 L13.37,10.43 L12.51,16 L15.09,16 C16.1538092,16.0719871 17.159097,15.5065128 17.65,14.56 C18.1567595,13.5192032 18.2181336,12.3169925 17.82,11.23 Z M15.9,14.42 C15.6125419,14.6349311 15.2582986,14.7412041 14.9,14.72 L14.48,14.72 L14.9,11.72 L15.35,11.72 C15.6806309,11.6794538 16.0108877,11.7981978 16.24,12.04 C16.4818058,12.8447587 16.357466,13.7151373 15.9,14.42 Z"/></g><g class="icon-gear-text icon-gear-text-4k"><polygon class="fill" points="11.82 10.29 13.58 10.29 13.19 12.17 13.19 12.17 15.19 10.27 17.48 10.27 14.75 12.62 16.36 16 14.36 16 13.36 13.78 12.76 14.32 12.39 16 10.63 16"/><path class="fill" d="M7.86,14.9 L5.31,14.9 L5.61,13.41 L8.78,10.41 L10.36,10.41 L9.72,13.51 L10.44,13.51 L10.18,14.87 L9.45,14.87 L9.22,16 L7.63,16 L7.86,14.9 Z M8.19,13.54 L8.54,12 L8.54,12 L6.94,13.58 L8.19,13.54 Z"/></g></svg>'
        }, t.templates.icon_heart = function(e) {
            return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
        }, t.templates.icon_left_arrow = function(e) {
            return '<svg viewBox="0 0 20 20"><path class="fill" d="M4.56 9.437l4.377-4.376L7.877 4 2.22 9.657a.75.75 0 0 0 0 1.06l5.657 5.657 1.06-1.06-4.376-4.377h12.846v-1.5H4.56z" /></svg>'
        }, t.templates.icon_line_arrow = function(e) {
            return '<svg class="icon-lineArrow" viewBox="0 0 24 15"><polygon class="fill" points="21 0 24 3.057 12 15 0 3.057 3 0 12 9"/></svg>'
        }, t.templates.icon_lock = function(e) {
            return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
        }, t.templates.icon_mail = function(e) {
            return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + e.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>'
        }, t.templates.icon_muted = function(e) {
            return '<svg class="vp-icon-muted" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14 2.2002c1.1263 0.22862 2.1838 0.64652 3.1379 1.2191l-1.5866 1.4104c-0.4907-0.24348-1.0099-0.43808-1.5513-0.57743v-2.052zm7.1249 5.7029-1.5871 1.4107c0.2993 0.83961 0.4622 1.744 0.4622 2.6864 0 3.7276-2.5495 6.8598-6 7.7479v2.052c4.5645-0.9265 8-4.962 8-9.7999 0-1.4599-0.3128-2.8468-0.8751-4.0971zm-9.1249-3.8989v3.9822l-8.8219 7.8417c-0.69465-0.3135-1.1781-1.0122-1.1781-1.8239v-4c0-1.1045 0.89543-2 2-2h2.5858l3.7071-4.7071c0.63-0.62996 1.7071-0.18379 1.7071 0.70711zm0 6.6581-9.6644 8.5906c-0.41279 0.3669-0.44997 0.999-0.08305 1.4118 0.36692 0.4127 0.99899 0.4499 1.4118 0.083l18-16c0.4128-0.36691 0.4499-0.99899 0.083-1.4118s-0.999-0.44996-1.4118-0.08305l-8.3356 7.4094zm-1.7071 10.049-1.473-1.8704 3.1802-2.8267v3.99c0 0.8909-1.0771 1.3371-1.7071 0.7071zm3.7071-5.2462c1.0633-0.615 1.8172-1.7055 1.971-2.9807l1.9068-1.6949c0.0801 0.391 0.1222 0.796 0.1222 1.2108 0 2.6124-1.6696 4.8349-4 5.6585v-2.1937z" clip-rule="evenodd" fill="#000" fill-rule="evenodd"/></svg>'
        }, t.templates.icon_pause = function(e) {
            return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false" aria-hidden="true"><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>'
        }, t.templates.icon_pip = function(e) {
            return '<svg class="pip-icon" viewBox="0 0 16 12"><polygon class="fill" points="6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"/><rect class="fill" x="7" y="7" width="9" height="5"/><polyline class="fill enter" transform="translate(4, 4) rotate(180) translate(-4, -4)" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/><polyline class="fill return" points="5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"/></svg>'
        }, t.templates.icon_play = function(e) {
            return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false" aria-hidden="true"><polygon class="fill" points="1,0 20,10 1,20"/></svg>'
        }, t.templates.icon_prev = function(e) {
            return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>'
        }, t.templates.icon_replay = function(e) {
            return '<svg viewBox="-387 605 16 16" preserveAspectRatio="xMidYMid" focusable="false" aria-hidden="true"><path class="fill" d="M-387 606v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c1.1-1.2 2.7-2 4.5-2 3.3 0 6 2.7 6 6s-2.7 6-6 6c-2.3 0-4.4-1.3-5.4-3.4-.2-.5-.8-.7-1.3-.5-.5.2-.7.8-.5 1.3 1.3 2.8 4.2 4.6 7.2 4.6 4.4 0 8-3.6 8-8s-3.6-8-8-8c-2.3 0-4.5 1-6 2.7V606c0-.6-.4-1-1-1s-1 .4-1 1z"/></svg>'
        }, t.templates.icon_spin = function(e) {
            return '<svg class="vp-spin-trace" viewBox="0 0 50 50" focusable="false"><circle cx="50%" cy="50%" r="20"></circle></svg><svg class="vp-spin-circle" viewBox="0 0 50 50" focusable="false"><circle cx="50%" cy="50%" r="20"></circle></svg>'
        }, t.templates.icon_stereoscopic = function(e) {
            return '<svg viewBox="0 0 20 13" focusable="false"><path class="fill" d="M 18.74,0 1.2,0 C 0.55,0 0,0.57 0,1.27 L 0,11.73 C 0,12.43 0.55,13 1.23,13 L 6,13 c 0.54,0 1,-0.32 1.16,-0.79 L 8.55,8.74 C 8.79,8.16 9.35,7.75 10,7.75 c 0.65,0 1.21,0.41 1.45,0.99 l 1.39,3.47 c 0.19,0.47 0.62,0.79 1.11,0.79 l 4.79,0 C 19.45,13 20,12.43 20,11.73 L 20,1.27 C 20,0.57 19.45,0 18.74,0 M 5.22,8.58 C 4,8.58 3,7.55 3,6.29 3,5 4,4 5.22,4 6.44,4 7.43,5 7.43,6.29 7.43,7.55 6.44,8.58 5.22,8.58 m 9.56,0 C 13.56,8.58 12.57,7.55 12.57,6.29 12.57,5.03 13.56,4 14.78,4 16,4 17,5.03 17,6.29 17,7.55 16,8.58 14.78,8.58 Z" /></svg>'
        }, t.templates.icon_tumblr = function(e) {
            return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + e.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>'
        }, t.templates.icon_twitter = function(e) {
            return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + e.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>'
        }, t.templates.icon_unfullscreen = function(e) {
            return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="unfullscreen-icon-title" role="img"><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>'
        }, t.templates.icon_vod = function(e) {
            return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
        }, t.templates.icon_vod_download = function(e) {
            return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>'
        }, t.templates.icon_vod_rent = function(e) {
            return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>'
        }, t.templates.icon_vod_subscribe = function(e) {
            return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>'
        }, t.templates.icon_warning = function(e) {
            return '<svg class="warning-icon" focusable="false" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>'
        }, t.templates.app_redirect = function(e) {
            var t = '<div class="vp-overlay-content"> ';
            return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "), e.hideRedirectButton || (t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"', e.newWindow && (t += ' data-new-window="1" target="_blank" rel="noopener"'), t += ' aria-describedby="new-window">' + e.strings.buttonText + "</a></div> "), e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "), e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "), t + "</div>"
        }, t.templates.email_capture = function(e) {
            var t = '<div class="vp-email-capture-wrapper ';
            return e.showWebinarForm && (t += "vp-webinar-wrapper"), t += '"><div class="vp-email-capture ', e.registrationFull && (t += "hidden"), t += '"> ', e.text || (t += ' <div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> "), t += ' <form class="vp-email-capture-form" novalidate><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                url: e.customLogo
            }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                startTime: e.strings.webinar.event_is_live
            }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                startTime: e.webinarStartTime
            }) || "" : t += this.render("email_capture_start_time", {
                startTime: e.strings.webinar.unscheduled
            }) || ""), t += ' <div class="vp-email-capture-title" id="vp-overlay-labelledby"> ', e.showWebinarForm && e.showWebinarLogin ? t += this.render("email_capture_title", {
                title: e.reg_login_title
            }) || "" : e.text && (t += this.render("email_capture_title", {
                title: e.text
            }) || ""), t += ' </div></div><div class="vp-email-capture-form-fields-bubble-wrapper"><div class="vp-email-capture-form-fields-wrapper"><div class="vp-email-capture-form-fields-slider"> ', t += this.render("email_capture_fields", {
                customFields: e.customFields
            }) || "", t += ' </div></div><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-message"></div></div></div><div class="vp-email-capture-form-buttons"><input class="vp-email-capture-form-button vp-email-capture-form-button--back" tabIndex="-1" type="button" value="' + e.strings.back + '" aria-hidden="true"><div class="vp-email-capture-form-button--next-submit-wrapper"><div class="vp-email-capture-form-button--next-submit-slider"><input class="vp-email-capture-form-button vp-email-capture-form-button--next" tabIndex="-1" type="button" value="' + e.strings.next + '" aria-hidden="true"><input class="vp-email-capture-form-button vp-email-capture-form-button--submit" tabIndex="-1" type="submit" value="' + e.strings.submit + '" aria-hidden="true"></div></div></div> ', e.showWebinarForm ? t += this.render("webinar_disclaimer", {
                text: e.strings.webinar,
                url: e.privacyPolicy
            }) || "" : t += this.render("email_capture_disclaimer", {
                text: e.strings,
                url: e.privacyPolicy
            }) || "", e.showWebinarForm && (t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', t += this.render("webinar_registration_bypass_btn", {
                showWebinarLogin: e.showWebinarLogin,
                regBypass: e.strings.webinar.reg_bypass,
                getGoBack: e.strings.webinar.reg_go_back
            }) || "", t += " </div> "), t += ' </form><div class="vp-email-capture-form-skip"> ', e.allowSkip && (t += this.render("email_capture_skip", {
                position: e.position,
                skipText: e.strings.skip,
                skipToVideoText: e.strings.skip_to_video,
                positionIsAfter: e.positionIsAfter
            }) || ""), t += ' </div><div class="vp-email-capture-progress-wrapper"><div class="vp-email-capture-steps"> ' + e.strings.step + ' <span class="vp-email-capture-current-step"></span> ' + e.strings.of + ' <span class="vp-email-capture-total-steps">' + e.customFields.length + '</span></div><div class="vp-email-capture-progress-bar"><span class="vp-email-capture-progress-meter"></span></div></div></div><div class="vp-email-capture-thank-you hidden"><div class="vp-email-capture-thank-you-box"><h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.successful + "</p></div> ", e.positionIsAfter || (t += ' <div class="vp-email-capture-video-countdown vp-email-capture-video-countdown-meter-wrapper" aria-label="' + e.strings.video_starts + '"><div class="vp-email-capture-video-countdown-meter"></div><div class="vp-email-capture-video-countdown-meter-text"> ' + e.strings.video_starts + ' <span class="vp-email-capture-video-countdown-timer"></span></div></div> '), t += ' </div><div class="vp-email-capture-reg-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                url: e.customLogo
            }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                startTime: e.webinarStartTime
            }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.reg_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.reg_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-login-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                url: e.customLogo
            }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                startTime: e.webinarStartTime
            }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.login_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.login_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-reg-full ', e.registrationFull || (t += "hidden"), t += '"><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                url: e.customLogo
            }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                startTime: e.strings.webinar.event_is_live
            }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                startTime: e.webinarStartTime
            }) || "" : t += this.render("email_capture_start_time", {
                startTime: e.strings.webinar.unscheduled
            }) || ""), t += " </div> ", t += this.render("webinar_full", {
                text: e.strings.webinar.reg_full
            }) || "", t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', (t += this.render("webinar_registration_bypass_btn", {
                showWebinarLogin: e.showWebinarLogin,
                regBypass: e.strings.webinar.reg_bypass,
                getGoBack: e.strings.webinar.reg_go_back
            }) || "") + ' </div></div></div><div class="vp-email-capture-dropdown-overlay"></div>'
        }, t.templates.email_capture_disclaimer = function(e) {
            var t = '<div class="vp-email-capture-disclaimer-wrapper"><div class="vp-email-capture-disclaimer" value="';
            return t += this.escape(e.text.disclaimer) || "", t += '">', t += this.escape(e.text.disclaimer) || "", t += "</div> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.privacy_policy + "</a> "), t + "</div>"
        }, t.templates.email_capture_field = function(e) {
            var t = "";
            if ("dropdown" === e.field.field_type && e.field.field_metadata && e.field.field_metadata.options) {
                if (e.field.required) {
                    t += ' <div class="vp-email-capture-form-custom-field required vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly required /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option-disabled" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                    for (var n = 0; n < e.field.field_metadata.options.length; n++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[n].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[n].option_label + " </li> ";
                    t += " </ul></div></div> "
                } else {
                    t += ' <div class="vp-email-capture-form-custom-field vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                    for (var i = 0; i < e.field.field_metadata.options.length; i++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[i].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[i].option_label + " </li> ";
                    t += " </ul></div></div> "
                }
                t += ""
            } else e.field.required ? (t += ' <div class="vp-email-capture-form-custom-field required" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" maxlength="180" tabIndex="-1" required /></div> ') : (t += ' <div class="vp-email-capture-form-custom-field" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="180" /></div> '), t += "";
            return t + ""
        }, t.templates.email_capture_fields = function(e) {
            for (var t = "", n = 0; n < e.customFields.length; n++) t += this.render("email_capture_field", {
                field: e.customFields[n]
            }) || "", t += "";
            return t + ""
        }, t.templates.email_capture_logo = function(e) {
            var t = '<img src="';
            return (t += this.escape(e.url) || "") + '" alt="" class="vp-email-capture-logo">'
        }, t.templates.email_capture_skip = function(e) {
            var t = "";
            return e.positionIsAfter && (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipText + '">'), t += "", e.positionIsAfter || (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipToVideoText + '">'), t + ""
        }, t.templates.email_capture_start_time = function(e) {
            return '<div class="vp-email-capture-start-time"> ' + e.startTime + "</div>"
        }, t.templates.email_capture_title = function(e) {
            var t = "";
            return (t += this.escape(e.title) || "") + ""
        }, t.templates.error = function(e) {
            var t = '<div class="vp-overlay-content error"><div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> ";
            return e.title && (t += " <h1>" + e.title + "</h1> "), e.message && (t += " <p>" + e.message + "</p> "), t + "</div>"
        }, t.templates.help = function(e) {
            var t = '<div class="vp-overlay-content help"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><dl><div class="volume-up secondary"><dt class="arrow">↑</dt><dd>' + e.strings.volumeUp + '</dd></div><div class="volume-down secondary"><dt class="arrow">↓</dt><dd>' + e.strings.volumeDown + '</dd></div><div class="scrub-forward secondary"><dt class="arrow">→</dt><dd>' + e.strings.scrubForward + '</dd></div><div class="scrub-backwards secondary"><dt class="arrow">←</dt><dd>' + e.strings.scrubBackwards + "</dd></div> ";
            return e.strings.like && (t += ' <div class="like"><dt>L</dt><dd>' + e.strings.like + "</dd></div> "), e.strings.share && (t += ' <div class="share"><dt>S</dt><dd>' + e.strings.share + "</dd></div> "), e.strings.watchLater && (t += ' <div class="watch-later"><dt>W</dt><dd>' + e.strings.watchLater + "</dd></div> "), t += ' <div class="toggle-captions"><dt>C</dt><dd>' + e.strings.captions + '</dd></div><div class="toggle-prefs"><dt>H</dt><dd>' + e.strings.prefs + '</dd></div><div class="fullscreen"><dt>F</dt><dd>' + e.strings.fullscreen + "</dd></div> ", e.onSite || (t += '<div class="view-on-vimeo"><dt>V</dt><dd>' + e.strings.viewOnVimeo + "</dd></div>"), t + " </dl></div>"
        }, t.templates.outro_email = function(e) {
            var t = '<div class="vp-outro-bg"';
            return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>'
        }, t.templates.outro_image = function(e) {
            var t = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> ';
            return e.url && (t += '<a class="vp-outro-imageLink js-imageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), e.bgimage && (t += '<div class="vp-outro-image" style="background-image: url(' + e.bgimage + ');"', e.alt_text && (t += ' aria-label="', t += this.escape(e.alt_text) || "", t += '" role="img"'), t += "></div>"), e.url && (t += "</a>"), t + "</div>"
        }, t.templates.outro_link = function(e) {
            var t = '<div class="vp-outro-bg"';
            return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', e.title && (t += '<h1 class="vp-outro-textTitle js-outro-title">', t += this.escape(e.title) || "", t += "</h1>"), e.description && (t += '<p class="vp-outro-textDescription js-outro-text">', t += this.escape(e.description) || "", t += "</p>"), e.text && e.url && (t += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', t += this.escape(e.text) || "", t += "</span></a></div> "), e.text2 && e.url2 && (t += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + e.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', t += this.escape(e.text2) || "", t += "</a></div> "), t + " </div></div>"
        }, t.templates.outro_nothing = function(e) {
            return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>'
        }, t.templates.outro_share = function(e) {
            var t = '<div class="vp-outro-bg"';
            return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', (t += this.render("icon_prev") || "") + "</button></nav>"
        }, t.templates.outro_staticimage = function(e) {
            var t = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> ';
            return e.url && (t += '<a class="vp-outro-staticImageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t += ' <img class="vp-outro-staticImage" src="' + e.svg_url + '"> ', e.url && (t += "</a>"), t + " </div></div>"
        }, t.templates.outro_text = function(e) {
            return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + e.text + "</div></div></div>"
        }, t.templates.outro_videos = function(e) {
            var t = '<div class="vp-outro-bg"';
            e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
            for (var n = 0; n < e.contexts.length; n++) {
                var i = e.contexts[n];
                t += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + i.videos.length, i.promoted && (t += " vp-outro-videosSection--promoted"), t += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + i.context + "</h1> ", e.showFollowButton && !i.promoted && (t += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="', e.following ? t += "true" : t += "false", t += '"> ', t += this.render("icon_follow") || "", t += ' <span class="vp-outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '), t += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + i.videos.length + '"> ';
                for (var o = 0; o < i.videos.length; o++) t += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == n && (t += " hovered"), t += '" href="' + i.videos[o].url + '" ', e.target && (t += ' target="_blank" rel="noopener" '), t += ' data-video-id="' + i.videos[o].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + i.videos[o].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', t += this.escape(i.videos[o].title) || "", t += "</h1> ", i.videos[o].byline && (t += ' <h2 class="vp-outro-videoByline">', t += this.escape(i.videos[o].byline) || "", t += "</h2> "), t += " </header></a> ";
                t += " </ul></div> "
            }
            return t + "</div>"
        }, t.templates.outro_vod = function(e) {
            var t = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + e.url + '" target="_blank" rel="noopener">';
            t += this.escape(e.title) || "", t += "</a></h1> ";
            var n = e.countries,
                i = e.country;
            if (this.helpers.isAvailableInCountry(n, i))
                if (e.purchased) t += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.strings.watch + "</a> ";
                else {
                    if (!e.isComingSoon) {
                        t += ' <ul class="vp-outro-vod"> ';
                        for (var o = 0; o < e.buttons.length; o++) {
                            t += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + e.buttons[o].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[o].product_id + '" target="_blank" rel="noopener" data-product-id="' + e.buttons[o].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === e.buttons[o].type ? t += this.render("icon_vod_download") || "" : "rent" === e.buttons[o].type ? t += this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[o].type ? t += this.render("icon_vod_subscribe") || "" : t += this.render("icon_vod") || "", t += " </div> ";
                            var r = e.currency,
                                a = e.buttons[o];
                            t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", r, a) + "</p></a></li> "
                        }
                        t += " </ul> "
                    }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                }
            return t + " </div></div>"
        }, t.templates.password = function(e) {
            return '<div class="vp-overlay-content password form"><h1 class="header" id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>'
        }, t.templates.private_locked = function(e) {
            return '<div class="vp-overlay-content login"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + e.strings.logIn + "</a></div>"
        }, t.templates.private_unlocked = function(e) {
            return '<div class="vp-overlay-content form unlocked"><h1>' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><button class="js-watch" type="button">' + e.strings.watch + "</button></div>"
        }, t.templates.share = function(e) {
            var t = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share" id="vp-overlay-labelledby">' + e.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + e.playerShareUrl + "/facebook" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + e.playerShareUrl + "/twitter" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + e.playerShareUrl + "/tumblr" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.tumblrIcon + " </a> ";
            return e.shareUrl && (t += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" role="button" aria-describedby="new-window" > ' + e.emailIcon + " </a> "), t += " </ul> ", e.embed && (t += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + e.url + '#share" target="_blank" rel="noopener" role="button" > ' + e.embedIcon + " </a></li></ul> "), e.shareUrl && (t += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="vp-share-screen vp-share-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + e.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="vp-share-footnote vp-share-footnote--embed">' + e.strings.customize + "</p> "), t += " </div></section> "), t + "</div>"
        }, t.templates.webinar_confirmation = function(e) {
            var t = '<div class="vp-email-capture-reg-thank-you"><div class="vp-email-capture-thank-you-box"> ';
            return e.customLogo && (t += this.render("email_capture_logo", {
                url: e.customLogo
            }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                startTime: e.webinarStartTime
            }) || ""), t + ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.thank_you_subtitle + "</p></div></div>"
        }, t.templates.webinar_disclaimer = function(e) {
            var t = '<div class="vp-email-capture-disclaimer-wrapper vp-webinar-disclaimer-wrapper"> ';
            return t += ' <div class="vp-webinar-compliance-checkbox-border"><input type="checkbox" class="vp-disclaimer-checkbox"></div><div class="vp-disclaimer-text-wrapper"><label for="vp-disclaimer-checkbox" class="vp-email-capture-disclaimer vp-webinar-disclaimer"> ' + e.text.disclaimer + " </label> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.host_privacy_policy + "</a> "), t + ' <div class="vp-opt-in-bubble hidden"><p class="vp-opt-in-bubble-message">' + e.text.opt_in_error + "</p></div></div></div>"
        }, t.templates.webinar_ended = function(e) {
            var t = '<div class="vp-text-alert-wrapper "> ';
            return e.strings.title && (t += ' <div class="vp-alert-text">' + e.strings.title + "</div> "), t + "</div>"
        }, t.templates.webinar_full = function(e) {
            return '<div class="vp-reg-full-wrapper"><h2 class="vp-reg-full-text"> ' + e.text + " </h2></div>"
        }, t.templates.webinar_registration_bypass_btn = function(e) {
            var t = "";
            return e.showWebinarLogin ? e.showWebinarLogin && !e.registrationFull && (t += ' <button class="vp-email-capture-reg-go-back vp-webinar-email-capture-reg-go-back">' + e.regGoBack + "</button>") : t += ' <button class="vp-email-capture-reg-bypass">' + e.regBypass + "</button>", t + ""
        }, e.exports ? e.exports = t : window.Aftershave = t
    }()
}));

function _o(e, t) {
    const n = e.querySelector(".vp-shade"),
        i = e.querySelector(".vp-spin");
    let o;

    function r() {
        clearTimeout(o), n.classList.add("vp-shade-invisible"), i.classList.add("vp-spin-invisible")
    }
    return t.on(v.BUFFER_STARTED, (function() {
        clearTimeout(o), o = setTimeout(() => {
            n.classList.remove("vp-shade-invisible"), i.classList.remove("vp-spin-invisible")
        }, 600)
    })), t.on([v.BUFFER_ENDED, Xt._paused], r), Pn.on(Sn.buffering, () => {
        i.classList.remove("vp-spin-invisible")
    }), Pn.on([Sn.playing, Sn.paused], () => {
        clearTimeout(o), i.classList.add("vp-spin-invisible")
    }), Pn.on(Sn.connected, () => {
        n.classList.remove("vp-shade-invisible")
    }), Pn.on(Sn.disconnected, () => {
        r()
    }), {}
}
const go = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const i in n) {
                const o = Object.getOwnPropertyDescriptor(n, i);
                Object.defineProperty(t, i, Object.assign(o, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    bo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    yo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Eo() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Co(e) {
    return ko() - e
}

function ko() {
    return parseInt(Eo() / 1e3, 10)
}

function Lo(e) {
    return parseInt(Date.now() / 1e3, 10) - e
}

function To(e) {
    let t = e.getHours(),
        n = e.getMinutes();
    const i = t >= 12 ? "PM" : "AM";
    return t %= 12, t = t || 12, n = n < 10 ? "0" + n : n, t + ":" + n + " " + i
}

function So(e, t) {
    var n = Math.floor(e / 3600 % 60),
        i = Math.floor(e / 60 % 60);
    if (e = Math.floor(e % 60), t) {
        var o = e + " second" + (1 === e ? "" : "s");
        return i > 0 && (o = i + " minute" + (1 === i ? "" : "s") + ", " + o), n > 0 && (o = n + " hour" + (1 === n ? "" : "s") + ", " + o), o
    }
    return (n > 0 ? n + ":" : "") + Ao(i, 2) + ":" + Ao(e, 2)
}

function Ao(e, t, n) {
    return e = String(e), new Array(t - e.length + 1).join(n || "0") + e
}

function Po(e) {
    return `${wo[e.getDay()]}, ${yo[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()} at ${To(e)}`
}

function Io(e, t, n) {
    const i = a() ? n.parentElement : n,
        o = j(r, 150);

    function r() {
        const {
            width: e,
            height: n
        } = bt(i);
        t.dispatch(((e, t) => ({
            type: "CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function a() {
        return n.parentElement === document.body
    }

    function s({
        size: e,
        ratio: t,
        bottom: o
    }) {
        a() && (i.classList.toggle("vp-center", "contain" === e), function(e, t) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map(t => e.style.removeProperty(t))
        }(n), "contain" !== e ? o > 0 && It(n, {
            height: `calc(100% - ${o}px)`,
            bottom: `${o/2}px`
        }) : It(n, o > 0 ? {
            maxWidth: `calc((100vh - ${o}px) / ${t})`,
            maxHeight: `calc(100vh - ${o}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: `${o/2}px`
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.layout.settings", s), s(t.get("ui.layout.settings")), new z(o).observe(i), window.addEventListener("orientationchange", o), e.events.on(Xt._didEnterFullscreen, o), e.events.on(Xt._didExitFullscreen, o), r()
}
const Ro = /^(%20|\s)*(javascript|data)/im,
    xo = /[^\x20-\x7E]/gim,
    Do = /^([^:]+):/gm,
    No = [".", "/"];

function Mo(e) {
    const t = e.match(Do);
    return null == t ? void 0 : t[0]
}

function Oo(e) {
    return e ? decodeURI(encodeURI(function(e) {
        const t = Mo(e = e.trim());
        return e && !t && (e = `https://${e}`), e
    }(function(e) {
        let t = e.replace(xo, "");
        if (function(e) {
                return No.indexOf(e[0]) > -1
            }(t)) return t;
        const n = Mo(t);
        return n && Ro.test(n) ? "" : t
    }(e)))) : null
}

function Bo({
    url: e,
    embedded: t,
    ownerId: n,
    element: i
}) {
    let o = "?";
    return o = e && e.split("?")[1] ? "&" : o, `${e}${o}embedded=${t}&source=${i}&owner=${n}`
}

function Vo(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function Fo(e, t) {
    switch (e.view) {
        case en.privateLocked:
            throw new Y("The video is private.", "PrivacyError", t);
        case en.privatePassword:
            throw new Y("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case en.error:
            throw new Y(e.message, "NotFoundError", t)
    }
}

function Uo(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}

function qo(e) {
    const i = e.events;
    let o, r, a, s = h(),
        c = !1,
        u = !1,
        m = null,
        f = !1,
        _ = null,
        g = null;

    function b(t) {
        r !== t && (r = t, e.config.embed.api = t)
    }

    function w() {
        o && o.emit("exitFullscreen"), e.events.halt()
    }
    let E = {
        ping: () => e.config.video.id,
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t), t ? (e.events.prependOn(Xt._fullscreenButtonPressed, w), o.listeners.exitFullscreen = !0, e.events.fire(Xt._willEnterFullscreen), e.events.fire(Xt._didEnterFullscreen, !0, !0)) : (e.events.off(Xt._fullscreenButtonPressed, w), o.listeners.exitFullscreen = !1, e.events.fire(Xt._willExitFullscreen), e.events.fire(Xt._didExitFullscreen, !0))
        },
        on(e, t) {
            e in nn && (e = nn[e]);
            const n = xt(tn);
            if (n.indexOf(e) < 0) throw new Y(`“${e}” is not a valid event. Valid events are: ${n.join(", ")}.`, "TypeError", "on");
            t && s.on(e, t), o && (o.listeners[e] = !0), e === tn.LOADED && P()
        },
        off(e, t) {
            t && s.off(e, t), o && (o.listeners[e] = !1)
        },
        play: () => new Promise((t, n) => {
            i.once(Xt._playResolved, t), i.once(Xt._playRejected, e => {
                n(new Y(e.message, e.name, "play"))
            }), Fo(e.config, "play"), i.fire(Jt._play), i.fire(Xt._playButtonPressed)
        }),
        destroy() {
            i.fire(Ut._destroy)
        },
        pause() {
            Fo(e.config, "pause"), i.fire(Jt._pause), i.fire(Xt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: n,
                url: i,
                params: o
            } = function(e) {
                if (!e) return {};
                if (mt(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!mt(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!n && !i) throw new Y("The video id must be an integer.", "TypeError", "loadVideo");
            if (i && i.match(null === new RegExp(`^https?://${e.config.player_url}/video/([0-9]+)/config`))) throw new Y("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
            return e.loadVideo(i || n, o).then(() => t).catch(() => {
                throw Fo(e.config, "loadVideo"), new Y("An error occurred loading the video.", "Error", "loadVideo")
            })
        },
        unload() {
            e.config.view !== en.main && e.config.view !== en.privateUnlocked && e.config.view !== en.webinarUnlocked || i.fire(Ut._reset)
        },
        addCuePoint(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new Y(`Cue point time must be positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(t, n);
                return setTimeout(() => {
                    i.fire(Xt._cuePointAdded, o)
                }, 0), o.id
            } catch (ke) {
                if ("CuePointsNotSupported" === ke.name) throw new Y("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new Y("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(t) {
            const n = e.backbone.cuePoints.filter(e => e.id === t)[0];
            if (!n) throw new Y(`Cue point “${t}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(n), setTimeout(() => {
                i.fire(Xt._cuePointRemoved, n)
            }, 0)
        },
        enableTextTrack(t, n = null) {
            let o = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(e => (e.language = e.lang, e));
            if (!o.some(e => e.language.toLowerCase() === t.toLowerCase())) throw new Y(`There are no tracks for “${t.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const a = n ? `${t}.${n}` : t,
                {
                    track: s
                } = function(e, t = []) {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter(e => r && e.language === n || e.language === o).sort((e, t) => {
                        const r = 2 * (e.language === o && e.kind === i) + 2 * (e.language === n) + 1 * (e.kind === i);
                        return 2 * (t.language === o && t.kind === i) + 2 * (t.language === n) + 1 * (t.kind === i) - r
                    });
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                }(a, o);
            if (!s || n && s.kind !== n) throw new Y(`There are no ${n} tracks for “${t.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return i.fire(Ut._turnCaptionsOn, s.id), r < 3 ? null : new Promise((e, t) => {
                i.once(Xt._captionsChanged, (t, n) => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                })
            })
        },
        disableTextTrack() {
            i.fire(Ut._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const t = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise((n, o) => {
                if (!K.element === e) {
                    const r = () => {
                            K.off("enter", r), n()
                        },
                        a = (n, i) => {
                            K.off("error", a);
                            const r = t[i] || t.not_supported;
                            o(new Y(r.msg, r.name, `${e?"request":"exit"}Fullscreen`))
                        };
                    return K.on("enter", r), K.on("error", a), void i.fire(Xt._fullscreenButtonPressed)
                }
                n()
            })
        },
        requestFullscreen: () => E.toggleFullscreen(!0),
        exitFullscreen: () => E.toggleFullscreen(!1),
        get fullscreen() {
            return !!K.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        appendVideoMetadata: i => new Promise((o, r) => {
            try {
                const r = Array.from(e.backbone.chapters);
                (function(e, i, o) {
                    if ("anybody" !== e.video.privacy) return;
                    const {
                        duration: r,
                        id: a
                    } = e.video, s = function(e, i, o, r) {
                        if (i < 30 || 0 === r.length) return [];
                        const a = [];
                        return r.forEach((s, l) => {
                            const {
                                startTime: c,
                                text: u
                            } = s;
                            if (c < i) {
                                var p;
                                const i = null == r || null == (p = r[l + 1]) ? void 0 : p.startTime,
                                    s = `vimeo_t_${e}`,
                                    [v, m] = o.split("#"),
                                    [f, h] = v.split("?"),
                                    _ = m ? `#${m}` : "",
                                    g = d(d({}, t(h)), {}, {
                                        [s]: c
                                    }),
                                    b = `${n(f,g)}${_}`;
                                a.push({
                                    "@type": "Clip",
                                    name: u,
                                    startOffset: c,
                                    endOffset: i,
                                    url: b
                                })
                            }
                        }), a.length && (a[a.length - 1].endOffset = i), a
                    }(a, r, i, o), l = document.body.querySelector("script[type='application/ld+json']");
                    if (s.length && l) try {
                        const e = JSON.parse(l.textContent);
                        Object.assign(e, {
                            hasPart: s
                        }), l.textContent = JSON.stringify(e)
                    } catch (m) {
                        throw m
                    }
                })(e.config, i, r), o()
            } catch (a) {
                r(new Y((null == a ? void 0 : a.message) || "", (null == a ? void 0 : a.name) || "", "appendVideoMetadata"))
            }
        }),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!Pn.currentSession
        },
        get color() {
            return e.config.embed.color.replace("#", "")
        },
        set color(t) {
            if (e.config.embed.settings.color && !e.config.embed.on_site) throw new Y(`The creator of the video has chosen to always use ${new $(e.config.embed.color).hex}.`, "EmbedSettingsError", "setColor");
            try {
                var n = new $(t);
                i.fire(Ut._changeColor, n.hex)
            } catch (ke) {
                throw new Y("The color should be 3- or 6-digit hex value.", "TypeError", "setColor")
            }
            var o = new $(30, 30, 30, .9);
            if (o.contrast(n).ratio < 3) {
                var r = n.clone().lighten(5, 3, o);
                throw new Y(`${n.hex} does not meet minimum contrast ratio. We recommend using brighter colors. (You could try ${r.hex} instead.) See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast`, "ContrastError", "setColor")
            }
        },
        get cuePoints() {
            return e.backbone.cuePoints.map(e => ({
                time: e.time,
                data: e.data,
                id: e.id
            }))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(t) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new Y(`Seconds must be a positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return i.fire(Jt._seek), i.fire(Ut._seek, t), i.fire(Xt._mousedOver), r < 3 ? null : new Promise((e, t) => {
                i.once(p.SEEKED, ({
                    currentTime: t
                }) => {
                    e(t)
                })
            })
        },
        get duration() {
            return St(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            i.fire(Ut._changeLoop, e)
        },
        set muted(t) {
            e.backbone.muted = t
        },
        get muted() {
            return e.backbone.muted
        },
        get paused() {
            return !(e.backbone && "paused" in e.backbone && !e.backbone.paused)
        },
        get buffered() {
            return Uo(e.backbone.buffered)
        },
        get played() {
            return Uo(e.backbone.played)
        },
        get seekable() {
            return Uo(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(t) {
            if (!e.config.embed.settings.speed) throw new Y("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(t) || t > 2) throw new Y("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            i.fire(Ut._changePlaybackRate, t)
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map(e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            }))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new Y("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            var t = St(e.config.request.cookie.volume);
            return 1 === r ? Math.round(100 * t) : t
        },
        set volume(e) {
            if (e = parseFloat(e), 1 === r && (e /= 100), isNaN(e) || e < 0 || e > 1) throw new Y("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            g = e, i.fire(Ut._changeVolume, e, !0)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!Vo(e.config.video.owner)) throw new Y("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map(e => e.id);
            if (!n.includes(t)) throw new Y(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideo(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(t) {
            if (e.config.embed.on_site) {
                if (e.config.user.liked === t) return;
                i.fire(Xt._likeButtonPressed, t)
            }
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(t) {
            if (e.config.embed.on_site) {
                if (e.config.user.watch_later === t) return;
                i.fire(Xt._watchLaterButtonPressed, t)
            }
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex(e => t === e.id);
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            }))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new Y(`Chapter timecode must be positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new Y(ke.message, "UnsupportedError", "_addChapter");
                throw new Y("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (ke) {
                throw new Y("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new Y("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new Y("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new Y("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            i.fire(Ut._addCard, e)
        },
        _removeCard(e) {
            i.fire(Ut._removeCard, e)
        },
        _setOutro(t, n) {
            e.config.embed.outro !== t ? (i.fire(Ut._hideOutro), setTimeout(() => {
                e.config.embed.outro = t, i.fire(Ut._showOutro, t, n)
            }, 400)) : i.fire(Ut._showOutro, t, n)
        },
        _hideOutro() {
            i.fire(Ut._hideOutro)
        },
        _setEmailCapture(t) {
            if (!t) return void E._unsetEmailCapture();
            let n = t.customFields ? e.config.embed.email_capture_form || {} : e.config.embed.email || {};
            n.position = t.position.toLowerCase(), n.timecode = t.timecode, t.nohide = !0, t.noblur = !0, t.nofocus = l(t, "nofocus", !0), E._showOverlay("email-capture", t)
        },
        _updateEmailCapture(t) {
            var n;
            t.custom_fields ? (H(null == (n = e.config.video.webinar) ? void 0 : n.registration_form) || (e.config.video.webinar.registration_form = t), i.fire(Ut._updateEmailCapture, t)) : this._setEmailCapture(t)
        },
        _updateWebinarStartTime(t) {
            e.config.video.webinar && (e.config.video.webinar.scheduled_start_time = t), i.fire(Ut._updateWebinarStartTime, t)
        },
        _setActiveEmailCapturePage(e) {
            i.fire(Ut._setActivePage, e)
        },
        _unsetEmailCapture() {
            e.config.embed.outro && (i.fire(Ut._hideOutro), delete e.config.embed.outro), e.config.embed.email && (i.fire(Ut._hideOverlay, {
                unmakeModal: !0
            }), delete e.config.embed.email)
        },
        _hideOverlay(e) {
            i.fire(Ut._hideOverlay, {
                name: e,
                unmakeModal: !0
            })
        },
        _showOverlay(e, t) {
            i.fire(Ut._showOverlay, e, t)
        },
        _fireEvent(...e) {
            i.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(t) {
            e.config.embed.on_site && e.config.video.live_event && (Object.keys(t).forEach(n => {
                let o = t[n];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[n] = o, i.fire(Xt._liveEventSettingsChanged, n, o), i.fire(A.SETTINGS_UPDATED, n, o)
            }), i.fire(Xt._configChanged, !1, e.config))
        },
        _setEmbedSettings(t) {
            e.config.embed.on_site && (Object.keys(t).forEach(n => {
                let o = t[n];
                o = "object" == typeof o ? o : Number(o), "badge" === n && (o ? o = a : a = e.config.embed.settings.badge), e.config.embed.settings[n] = o, i.fire(Xt._embedSettingChanged, n, o)
            }), i.fire(Xt._configChanged, !1, e.config))
        },
        _setEmbedSetting(t, n) {
            e.config.embed.on_site && (n = "object" == typeof n ? n : Number(n), "badge" === t && (n ? n = a : a = e.config.embed.settings.badge), e.config.embed.settings[t] = n, i.fire(Xt._embedSettingChanged, t, n), i.fire(Xt._configChanged, !1, e.config))
        },
        _setOTTVideoMetadata(t) {
            e.config.request.flags.ott && (e.ottVideoMetadata = t, i.fire(Xt._ottMetadataSet, t))
        },
        _toggleDebugPanel() {
            i.fire(Xt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            i.fire(Ut._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            i.fire(Ut._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Y("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Y("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (ke) {
                throw new Y(ke.message, ke.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Y("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Y("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Y("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Y("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (ke) {
                throw new Y(ke.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = Pn.currentSession;
            t && Z(e) && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = {
                    get details() {
                        const e = bt(document.querySelector(".headers > h1")),
                            t = bt(document.querySelector(".sub-title")),
                            n = bt(document.querySelector(".vp-portrait")),
                            i = Math.max(e.width, t.width) + n.width,
                            o = Math.max(n.height, e.height + t.height);
                        return {
                            top: 10,
                            left: 10,
                            width: Math.max(200, i),
                            height: Math.max(60, o)
                        }
                    },
                    get sidedock() {
                        return {
                            top: 10,
                            left: t - 10 - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = i.customLogo,
                            o = Math.max(60, e.height);
                        return {
                            height: o,
                            top: n - 10 - o,
                            left: 10,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            i = e ? bt(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - 10 - i.height,
                            left: t - 10 - i.width,
                            width: i.width,
                            height: i.height
                        }
                    }
                };
            return i
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            E.on.apply(E, e)
        },
        removeEventListener(...e) {
            E.off.apply(E, e)
        },
        seekTo(e) {
            E.currentTime = e
        },
        changeColor(e) {
            E.color = e
        }
    };
    const C = {
        addCuePoint: ({
            time: e,
            data: t
        }) => E.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            E.enableTextTrack(e, t)
        }
    };

    function k(e, t) {
        o && o.emit(e, t), s.fire(e, t)
    }
    const L = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        k(e, i)
    };

    function T({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: St(e),
            percent: St(n),
            duration: St(t)
        }
    }

    function S(e) {
        return {
            playbackRate: e
        }
    }

    function P() {
        k(tn.LOADED, f ? null : (f = !0, {
            id: e.config.video.id
        }))
    }

    function R(e) {
        return m = e, x(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new Y("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new Y("There was an error loading the files for this video.", "FileError")
            }
            return new Y("An error occurred during playback.", "PlaybackError")
        }(m))
    }

    function x(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            if (e.config.embed.on_site) return;
            b(e.config.embed.api);
            const t = e.config.request.referrer;
            o = new G(t), o.listeners = xt(tn).reduce((e, t) => d(d({}, e), {}, {
                [t]: !1
            }), {}), o.listeners[tn.READY] = !0, o.listeners[tn.ERROR] = !0, o.filter(e => o.listeners[e])
        }(),
        function() {
            if (!o) return;
            const t = go({}, E, C);
            o.extendMethods(t), o.hooks({
                logError(e) {
                    k(tn.ERROR, x(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (Z(e)) return b(3), e;
                    try {
                        const t = JSON.parse(e);
                        return b(2), t
                    } catch (t) {
                        return b(null), k(tn.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    (null == (n = e.config.embed) ? void 0 : n.player_id) && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === r && (t = function(e) {
                            if (e.event) {
                                for (const t in nn)
                                    if (nn[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), Z(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (ke) {}
                    return t
                }
            })
        }(), i.on(v.BUFFER_STARTED, L(tn.BUFFER_START)), i.on(v.BUFFER_ENDED, L(tn.BUFFER_END)), i.on(v.CUE_POINT, L(tn.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), i.on(y, L(tn.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), i.on(Xt._chapterChanged, L(tn.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex(e => t === e.id);
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), i.on(Xt._ended, L(tn.ENDED, (function() {
            return u = !1, {
                seconds: St(e.config.video.duration),
                percent: 1,
                duration: St(e.config.video.duration)
            }
        }))), i.on(Xt._paused, L(tn.PAUSE, (function(t) {
            return u = !1, {
                seconds: St(t),
                percent: St(t / e.config.video.duration),
                duration: St(e.config.video.duration)
            }
        }))), i.on(Xt._playbackRateChanged, L(tn.PLAYBACK_RATE_CHANGE, S)), i.on(Xt._playbackRateChanged, L(tn.RATE_CHANGE, S)), i.on(Xt._captionsChanged, L(tn.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), i.on(Xt._volumeChanged, L(tn.VOLUME_CHANGE, (function(e) {
            return {
                volume: St(e)
            }
        }))), i.on(Xt._controlBarVisibilityChanged, L(tn.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), i.on(Xt._configChanged, (function(e) {
            g && setTimeout((function() {
                i.fire(Ut._changeVolume, g, !0)
            }), 0), e && P()
        })), i.on(Xt._error, (function(e) {
            const t = R(e);
            c && k(tn.ERROR, t)
        })), i.on(Xt._didEnterFullscreen, L(tn.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), i.on(Xt._didExitFullscreen, L(tn.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), i.on(Xt._qualityChanged, L(tn.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), i.on(Xt._adStarted, L(tn.AD_STARTED)), i.on(Xt._adComplete, L(tn.AD_COMPLETED)), i.on(Xt._adError, L(tn.AD_ERROR)), i.on(Xt._adSkipped, L(tn.AD_SKIPPED)), i.on(Xt._allAdsCompleted, L(tn.AD_ALL_COMPLETED)), i.on(Xt._adClicked, L(tn.AD_CLICKED)), i.on(Xt._interactiveHotspotClicked, L(tn.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), i.on(Xt._interactiveOverlayPanelClicked, L(tn.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), i.once(Xt._ready, (function() {
            c = !0, k(tn.READY), m && (k(tn.ERROR, R(m)), m = null)
        })), i.on(A.EVENT_ENDED, L(tn.LIVE_EVENT_ENDED)), i.on(A.EVENT_STARTED, L(tn.LIVE_EVENT_STARTED)), i.on(A.STREAM_OFFLINE, L(tn.LIVE_STREAM_OFFLINE)), i.on(A.STREAM_ONLINE, L(tn.LIVE_STREAM_ONLINE)), i.on(I.CAMERA_CHANGE, L(tn.CAMERA_CHANGE, (function(e) {
            return e
        }))), i.on(I.MOTION_END, L(tn.MOTION_END)), i.on(I.MOTION_START, L(tn.MOTION_START)), i.on(I.WEBVR_HARDWARE_AVAILABLE, L(tn.WEBVR_HARDWARE_AVAILABLE)), i.on(I.WEBVR_ENTER, L(tn.ENTER_WEBVR)), i.on(I.WEBVR_EXIT, L(tn.EXIT_WEBVR)), i.on(I.SPATIAL_UNSUPPORTED, L(tn.SPATIAL_UNSUPPORTED)), i.on(p.PLAY, L(tn.PLAY, (function(t) {
            return u ? null : (u = !0, {
                seconds: St(t),
                percent: St(t / e.config.video.duration),
                duration: St(e.config.video.duration)
            })
        }))), i.on(p.PLAYING, L(tn.PLAYING, (function() {
            return u ? {
                seconds: St(e.currentTime),
                percent: St(e.currentTime / e.config.video.duration),
                duration: St(e.config.video.duration)
            } : null
        }))), i.on(p.PROGRESS, L(tn.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let i = {
                seconds: St(e),
                percent: St(n),
                duration: St(t)
            };
            return r < 3 && (i.bytesLoaded = -1, i.bytesTotal = -1), i
        }))), i.on(p.SEEKING, L(tn.SEEKING, T)), i.on(p.SEEKED, L(tn.SEEKED, T)), i.on(p.TIME_UPDATE, L(tn.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: St(e),
                percent: St(n),
                duration: St(t)
            }
        }))), i.on(p.LOADED_METADATA, L(tn.LOADED_METADATA)), i.on(p.DURATION_CHANGE, L(tn.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), i.on(p.WAITING, L(tn.WAITING)), i.on(p.LOADED_DATA, L(tn.LOADED_DATA)), i.on(p.LOAD_START, L(tn.LOAD_START)), i.on(p.RESIZE, L(tn.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), i.on(p.ENTER_PICTURE_IN_PICTURE, L(tn.ENTER_PICTURE_IN_PICTURE)), i.on(p.LEAVE_PICTURE_IN_PICTURE, L(tn.LEAVE_PICTURE_IN_PICTURE)), i.on(Sn.connected, L(tn.CHROMECAST_CONNECTED)), i.on(Ut._reset, (function() {
            m = null, f = !1
        })), e.doNotTrackEnabled || (i.on(Xt._emailCaptureSuccess, () => {
            k(tn.EMAIL_CAPTURE)
        }), i.on(Xt._emailCaptureFailure, () => {
            k(tn.EMAIL_CAPTURE_FAILED)
        })), i.on(Xt._spaceChanged, (function(e = {}) {
            o && (o.listeners[tn.SPACE_CHANGE] = !0, k(tn.SPACE_CHANGE, e))
        })), i.fire(Xt._apiModuleReady), E
}
let Ho = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
    }
    var t = e.prototype;
    return t.show = function(e) {
        this.alertContentElement.innerHTML = e, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
const $o = d(d({}, X), {}, {
    ALERT_DISPLAYED: "alert-displayed",
    ALERT_HIDDEN: "alert-hidden",
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    ERROR_LINK_PRESSED: "error-link-pressed",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    OUTRO_VIDEO_SELECTED: "outro-video-selected",
    WEBVR_HARDWARE_AVAILABLE: "webvr-hardware-available",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr",
    WEBINAR_REGISTRANT_BLOCKED: "webinar-registrant-blocked",
    WEBINAR_REGISTRANT_UNBLOCKED: "webinar-registrant-unblocked"
});

function Wo(e) {
    return Dt("av01", e) ? "AV1" : Dt("dvh1", e) ? "HEVC_DVH1" : Dt("hvc1", e) ? "HEVC" : Dt("avc1", e) ? "AVC" : null
}

function jo(e) {
    return Dt("mp4a", e) ? "AAC" : Dt("opus", e) ? "OPUS" : null
}

function zo(e, t) {
    var n, i;
    return (null == e || null == (n = e.request) || null == (i = n.ab_tests) ? void 0 : i[t]) ? e.request.ab_tests[t] : {}
}

function Yo(t, n, i, a) {
    const s = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const a = i.headers;
        return function(e, t, n) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(s) {
            if ("video" === e.type) {
                const a = t.backbone.representations.reverse(),
                    l = a[e.stream];
                if (!l) return;
                const c = function(e, n, i, o, r, a) {
                    const s = i.headers;
                    delete s[""];
                    let l = {};
                    Object.keys(s).forEach(e => {
                        const t = s[e],
                            n = e.replace(h, "_");
                        l[n] = t
                    });
                    let c = a.slice();
                    return c.forEach(e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    }), {
                        host: ie(n.data.url),
                        product: sn(t),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        video_file_id: String(r.id || "") || null,
                        headers: l,
                        buffered: St(ee(t.backbone.currentTime, t.backbone.buffered), 2),
                        ttfb: we(i),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, s, l, a);
                let d = c;
                o && (d = oe({
                    extraContext: o
                }, c)), t.events.fire(Xt._logMetric, {
                    name: $o.CHUNK_DOWNLOADED,
                    data: d
                });
                const u = {
                    ak_reference_id: c.headers.akamai_reference_id || null,
                    akamai_edge_ip: c.headers.akamai_edge_ip || null,
                    content_length: c.headers.content_length || null,
                    content_type: c.headers.content_type || null,
                    x_vim_cachebc: c.headers.x_vim_cachebc || null,
                    x_cache: c.headers.x_cache || null,
                    x_cache_hits: c.headers.x_cache_hits || null
                };
                c.headers = u, zo(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: At(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new r(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", c, vn(t.config)), he += s.byteLength
            }
            "akamai-edge-ip" in a && (Z = a["akamai-edge-ip"]), "quic-version" in a && (X = a["quic-version"]), "x-vim-cachebc" in a && (re = a["x-vim-cachebc"]), "x-akamai-request-id" in a && (ae = a["x-akamai-request-id"]), "ak-reference-id" in a && (se = a["ak-reference-id"]),
                function({
                    headers: e,
                    url: t
                }) {
                    if ("x-cache-hits" in e) {
                        let n = e["x-cache-hits"].match(/(0|1)(?:, (0|1))?/);
                        null !== n && (le = {
                            url: t,
                            servedBy: e["x-served-by"],
                            edge: n[1] ? !!parseInt(n[1], 10) : null,
                            tier1: n[2] ? !!parseInt(n[2], 10) : null,
                            tier2: null
                        })
                    } else if ("x-vim-cachebc" in e) {
                        let n = e["x-vim-cachebc"].match(/E:(m|h)(?:,TD0:(m|h))?(?:,TD1:(m|h))?(?:,TD2:(m|h))?/);
                        if (null !== n) {
                            le = {
                                url: t,
                                edge: n[1] ? n[1] : null,
                                tier1: n[2] ? n[2] : null,
                                tier2: n[3] ? n[3] : null
                            };
                            for (let e in le) "edge" !== e && "tier1" !== e && "tier2" !== e || ("h" === le[e] ? le[e] = !0 : "m" === le[e] && (le[e] = !1))
                        }
                    }
                }(i);
            let l = {};
            Z && (l.akamai_edge_ip = Z), X && (l.quic_version = X), re && (l.akamai_cache_debug = re), ae && (l.akamai_request_id = ae), se && (l.akamai_reference_id = se), l.manifest_load_durations = t.backbone.manifestLoadDurations, l.successful_segment_count = t.backbone.successfulSegments.length, l.failed_segment_count = t.backbone.failedSegments.length, ue = l
        }))
    }));
    let c, d, m;
    const f = new WeakMap,
        h = new RegExp("-", "g");
    let _, g, b = null,
        y = null,
        E = !1,
        C = !0,
        k = !1,
        L = !1,
        S = "auto",
        x = {},
        D = {},
        N = null,
        M = null,
        O = null,
        B = [],
        V = null,
        F = {},
        U = !1,
        q = !1,
        $ = "none",
        W = !1,
        j = !1,
        z = 0,
        Y = 0,
        G = 0,
        K = 0,
        Z = null,
        X = null,
        re = null,
        ae = null,
        se = null,
        le = null,
        ce = !1,
        de = null,
        ue = null,
        pe = null,
        ve = null,
        me = !1,
        fe = !1,
        he = 0;

    function _e() {
        const e = f.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: d,
            _metricsBufferTracker: m
        } = e) : (m = new te, d = new Q(t.backbone.videoElement, be), ge(), f.set(t.backbone.videoElement, {
            _videoMonitor: d,
            _metricsBufferTracker: m
        }))
    }

    function ge() {
        const e = m;
        d.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(v.BUFFER_STARTED, () => {
                    E && (me || ce || (ce = !0, e.trackBufferStart(d.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                }), t.events.on(v.BUFFER_ENDED, () => {
                    E && ce && (ce = !1, e.trackBufferEnd(d.logBufferEnd, {
                        cdn_data: le
                    }), e.resetLastBufferTime())
                })
            },
            addEventData(e) {
                const t = fe;
                switch (fe = !1, e) {
                    case $o.VIDEO_START_TIME:
                        return ue;
                    case $o.VIDEO_SEEK:
                        const e = pe;
                        return pe = null, e;
                    case $o.VIDEO_EXIT:
                        return {
                            tti: de
                        };
                    case $o.VIDEO_PLAYED:
                    case $o.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            }
        }), d.initHooks()
    }

    function be(n, r = {}) {
        (function(e) {
            var n, i, o, r;
            switch (e) {
                case $o.VIDEO_SEEK:
                case $o.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (o = i.settings) ? void 0 : o.background);
                case $o.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (r = t.config.video.live_event) ? void 0 : r.low_latency;
                default:
                    return !1
            }
        })(n) || ((r = Object.assign(d ? d.globalProperties() : {}, Object.assign(function() {
            var e, n, r, a, s;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                logged_in: !!t.config.user.logged_in,
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (n = e.owner) ? void 0 : n.id,
                product: sn(t),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                stayed_on_auto: C,
                version: vn(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (s = t.config.user) ? void 0 : s.team_origin_user_id,
                vuid: ai("vuid")
            };
            var c;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), i.get($n) && (l.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), o.webvr && t.config.video.spatial && (l.webvr_support = !0), o.webxr && t.config.video.spatial && (l.webxr_support = !0), t.config.request.drm && t.config.request.drm.fallback_asset && (l.has_sd_drm_fallback = !0), t.config.video.webinar && (l.webinar_uuid = t.config.video.webinar.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = Eo(),
                        o = ne("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        s = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let c = [];
                    a && (c = l(t.config, "request.files.progressive") || l(t.config, "request.files.hls") || []), r && (c = l(t.config, "request.files.dash.streams", [])), s && (c = t.backbone.video.currentFile.mime === Ft.dashMpd ? l(t.config, "request.files.dash.streams", []) : l(t.config, "request.files.hls.streams", []));
                    const d = Array.from(c).sort(o).map(e => e.profile);
                    let u = -1,
                        p = 0,
                        v = null;
                    if (Object.keys(D).forEach(e => {
                            const t = d.indexOf(parseInt(e, 10));
                            t > u && (u = t);
                            const n = D[e].reduce((e, t) => ((t.end || i) - t.start) / 1e3 + e, 0);
                            n > p && (p = n, v = e)
                        }), n.highest_profile = d[u], n.highest_available_profile = d[d.length - 1], n.most_used_profile = v, (r || s) && B) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(B))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(B))) / 1e3;
                        const t = B.reduce((e, t) => e + t, 0);
                        n.average_speed = Math.round(t / B.length) / 1e3
                    }
                    return n
                }();
            let {
                id: a = 0,
                mime: s = Ft.h264,
                metadata: {
                    profile: c = null
                } = {}
            } = o, d = !1, u = !1;
            switch (s) {
                case Ft.dash:
                    0 === o.restrictedStreamIndexes.length && (d = !0), l(t.config, "request.files.dash.separate_av") && (u = !0), c = x ? x.profile : null;
                    break;
                case Ft.hls:
                    d = !0
            }
            let p = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3,
                auto: d,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== Qt[s] ? Qt[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : null,
                dropped_frames: K,
                dropped_frame_percent: G,
                event_time: b + Co(y),
                ended: q,
                forced_embed_quality: $,
                fullscreen: W,
                picture_in_picture: j,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                origin: o.metadata ? o.metadata.origin : "",
                profile_id: c ? String(c) : null,
                codec: H(x) ? "" : Wo(x.codecs),
                audio_codec: jo(null == (n = t.backbone) || null == n.getCurrentStream || null == (i = n.getCurrentStream("audio")) ? void 0 : i.codecs) || null,
                quality: x ? x.quality : null,
                quality_downswitch_count: Y,
                quality_upswitch_count: z,
                quality_switch_count: z + Y,
                separate_av: u,
                target_profile_id: ve,
                ttfb: ye(),
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3,
                video_duration: St(t.config.video.duration),
                video_file_id: Number.isInteger(Number(a)) ? parseInt(a, 10) : null
            };
            var v;
            return t.backbone.isLive && (p.ecdn = !!t.config.video.ecdn_provider, p.ecdn && (p.ecdn_peers = null == (v = window.Streamroot) ? void 0 : v.instances[0].stats.realtime.dnaSources, p.ecdn_provider = t.config.video.ecdn_provider), void 0 !== t.backbone.latency && (p.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (p.is_low_latency = t.backbone.lowLatencyMode)), t.config.request.drm && (p.drm_mode = _), p
        }(), function() {
            let e = {};
            if (t.config.request.ab_tests)
                for (const n in t.config.request.ab_tests) {
                    const i = t.config.request.ab_tests[n];
                    e[`${n}_test`] = 1, e[`${n}_group`] = i.group;
                    for (const t in i.data) e[`${n}_data_${t}`] = i.data[t]
                }
            return e
        }()), r)).name = n, t.events.fire(Xt._logMetric, {
            name: n,
            data: r
        }), c.log(r).catch(e => {}))
    }

    function ye() {
        let e = -1;
        if (void 0 !== window.performance && "function" == typeof window.performance.getEntriesByType) {
            const t = window.performance.getEntriesByType("resource");
            if (t) {
                const n = t.filter(e => null !== e.name.split("?")[0].match(/\.m4s$|\.ts$/));
                e = n.map(e => e.responseStart - e.connectStart).reduce((e, t) => e + t, 0) / (n.length || 1)
            }
        }
        return St(e, 2)
    }

    function we({
        url: e
    }) {
        let t = -1;
        if (window.performance) {
            const n = window.performance.getEntriesByType("resource");
            if (n.length) {
                const i = n.filter(t => t.name === e).sort((e, t) => e.connectStart - t.connectStart);
                if (i.length) {
                    const e = i[i.length - 1];
                    t = e.responseStart - e.connectStart
                }
            }
        }
        return St(t, 2)
    }

    function Ee(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        d.handleExternalError(i, t)
    }
    y = ko(), b = t.config.request.timestamp, _ = t.config.request.drm ? "default" : null, c = new r(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Xt._error, Ee), t.events.on(Ut._reset, (function() {
        U = !1
    })), t.events.on(Ut._seek, (function() {
        me = !0
    })), t.events.on(Xt._errorLinkPressed, (function(e, t) {
        be($o.ERROR_LINK_PRESSED, {
            error_type: t,
            error_url: e
        })
    })), t.events.on(Xt._didEnterFullscreen, (function() {
        W = !0, be($o.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(Xt._didExitFullscreen, (function() {
        W = !1, be($o.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(p.ENTER_PICTURE_IN_PICTURE, (function() {
        j = !0, be($o.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(p.LEAVE_PICTURE_IN_PICTURE, (function() {
        j = !1, be($o.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Xt._alertVisibilityChanged, (function(e, t) {
        be(e ? $o.ALERT_DISPLAYED : $o.ALERT_HIDDEN)
    })), t.events.on(Xt._configChanged, (function() {
        b = t.config.request.timestamp, y = ko(), E = !1, C = !0, k = !1, L = !1, S = "auto", x = {}, D = {}, N = null, M = null, O = null, B = [], V = null, F = {}, U = !1, q = !1, $ = "none", W = !1, z = 0, Y = 0, G = 0, K = 0, Z = null, X = null, re = null, le = null, de = null, ve = null, he = 0, _ = t.config.request.drm ? "default" : null, d && (d.reset(), ge())
    })), t.events.on(Xt._nudgeAttempted, (function() {
        pe = {
            seek_type: "nudge"
        }
    })), t.events.on(Xt._scrubbingStarted, (function(e, t) {
        pe = {
            seek_type: t
        }
    })), t.events.on(Xt._chapterSeek, (function(e) {
        pe = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Xt._interactiveSeekCall, (function(e) {
        pe = {
            seek_type: e.type
        }
    })), t.events.on(Xt._interactiveMarkerClicked, (function(e) {
        pe = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(Xt._outroVideoPressed, (function(e) {
        be($o.OUTRO_VIDEO_SELECTED, {
            selected_video_id: e
        })
    })), t.events.on(u, (function() {
        U || Pn.isCastConnected || (t.performDelegateAction(Zt, (e, t = {}) => {
            U = !0, g.then(() => d.logStartRequest()).catch(() => {})
        }), zo(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                a = [{
                    uuid: At(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new r(e).logRequestPromiseWithUrl(e, JSON.stringify(a), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, vn(t.config)))
    })), t.events.on(Xt._overlayOpened, (function(e) {
        "email-capture" === e && be($o.SLATE_DISPLAYED, {
            slate_type: "email"
        }), "interactive" === e && be($o.SLATE_DISPLAYED, {
            slate_type: "interactive"
        })
    })), t.events.on(Xt._playbackRateChanged, (function(e, t) {
        be($o.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(Xt._click, (function(e) {
        be($o.CLICK, {
            click_target: e
        })
    })), t.events.on(Ut._changeQuality, (function(e) {
        "auto" !== e && (C = !1), t.backbone.video.currentFile.mime === Ft.dash && ("auto" === e || k ? "auto" === e && k && !L && (be($o.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: S,
            auto: 1
        }), L = !0) : (be($o.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), k = !0), S = e)
    })), t.events.on(Ut._turnCaptionsOn, (function(e) {
        V !== e && (V = e, be($o.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(Ut._turnCaptionsOff, (function() {
        V && (V = null, be($o.CAPTIONS_DISABLED))
    })), t.events.on(Sn.connected, (function() {
        be($o.CHROMECAST_CONNECTED)
    })), t.events.on(Sn.disconnected, (function() {
        be($o.CHROMECAST_DISCONNECTED)
    })), t.events.on(v.STREAM_CHANGE, (function(e, t, n, i) {
        x = e;
        const o = e.profile ? e.profile : e.id,
            r = Eo();
        if (D[o] = D[o] || [], N) {
            const e = D[N].length - 1;
            D[N][e] && (D[N][e].end = r)
        }
        M && (n[t].bitrate > M ? z += 1 : Y += 1), D[o].push({
            start: r
        }), F[o] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        }, be($o.VIDEO_STREAM_CHANGE, {
            previous_audio_bitrate: O / 1e3,
            previous_video_bitrate: M / 1e3,
            previous_profile_id: String(N),
            reason: null == i ? void 0 : i.reasonForSwitch
        }), N = o, M = n[t].bitrate, O = n[t].audioBitrate
    })), t.events.on(v.STREAM_TARGET_CHANGE, (function(e) {
        e && (ve = String(e.profile || "") || null)
    })), t.events.on(w, (function(e) {
        $ = e
    })), t.events.on(p.PLAYING, (function() {
        me = !1
    })), t.events.once(Xt._firstTimeUpdate, (function() {
        E = !0
    })), t.events.on(Xt._adBuffering, (function() {
        be($o.AD_BUFFERING)
    })), t.events.on(Xt._adComplete, (function() {
        be($o.AD_COMPLETE)
    })), t.events.on(Xt._adClicked, (function() {
        be($o.AD_CLICKED)
    })), t.events.on(Xt._adError, (function(e) {
        be($o.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Xt._adPaused, (function() {
        be($o.AD_PAUSED)
    })), t.events.on(Xt._adResumed, (function() {
        be($o.AD_RESUMED)
    })), t.events.on(Xt._adStarted, (function(e) {
        be($o.AD_STARTED, {
            startup_duration: e.time ? St(e.time / 1e3, 2) : null
        })
    })), t.events.on(Xt._adSkipped, (function() {
        be($o.AD_SKIPPED)
    })), t.events.on(Xt._pausedForAd, (function() {
        o.iPhone && d.setDisplayContext(1)
    })), t.events.on(Xt._resumedAfterAd, (function() {
        o.iPhone && d.setDisplayContext(0)
    })), t.events.on(Xt._webinarRegistrantBlocked, (function() {
        be($o.WEBINAR_REGISTRANT_BLOCKED)
    })), t.events.on(Xt._webinarRegistrantUnblocked, (function() {
        be($o.WEBINAR_REGISTRANT_UNBLOCKED)
    })), t.events.on(v.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        G = Math.round(100 * t) / 100, K = e.dropped
    })), t.events.on(v.BANDWIDTH, (function({
        speed: e
    }) {
        B.push(e), B.length > 500 && B.shift()
    })), t.events.on(v.MANIFEST_TIMEOUT, (function() {
        be($o.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(v.MANIFEST_LOADED, (function() {
        be($o.VIDEO_MANIFEST_LOADED)
    })), t.events.on(v.DOWNLOAD_END, s), t.events.on(v.DOWNLOAD_TIMEOUT, (function() {
        be($o.DOWNLOAD_TIMEOUT)
    })), t.events.on(v.DRM_KEY_SWITCH, (function() {
        _ = "sd-fallback", be($o.DRM_KEY_SWITCH)
    })), t.events.on(v.SCANNER_CHANGE, (function() {
        le = null
    })), t.events.on(v.AV_DURATION_MISMATCH, (function(e) {
        be($o.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(v.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: v.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = St(ee(0, e), 2), t.bytes_loaded = he, be($o.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(v.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: v.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        be($o.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(P.MEDIASESSION_PLAY, (function() {
        be($o.MEDIASESSION_PLAY)
    })), t.events.on(P.MEDIASESSION_PAUSE, (function() {
        be($o.MEDIASESSION_PAUSE)
    })), t.events.on(P.MEDIASESSION_SEEK_FORWARD, (function() {
        be($o.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(P.MEDIASESSION_SEEK_BACKWARD, (function() {
        be($o.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(Jt._seek, (function() {
        pe = {
            seek_type: "api"
        }
    })), t.events.on(Jt._play, (function() {
        fe = !0
    })), t.events.on(Jt._pause, (function() {
        fe = !0
    })), t.events.on(I.WEBVR_HARDWARE_AVAILABLE, (function(e) {
        be($o.WEBVR_HARDWARE_AVAILABLE, {
            vr_hardware: e.displayName
        })
    })), t.events.on(I.WEBVR_ENTER, (function() {
        be($o.ENTER_WEBVR, !0)
    })), t.events.on(I.WEBVR_EXIT, (function() {
        be($o.EXIT_WEBVR, !0)
    })), t.events.on(R.BRAIN_ML_MODEL_INPUTS, (function(e) {
        var n;
        (null == (n = e.geolocation) ? void 0 : n.length) && e.geolocation[0].length ? e.geolocation = e.geolocation[0][0] : e.geolocation = "", t.config.request.urls.fresnel_mimir_inputs_url && function(e, t, n, i) {
            const o = {
                    chunk_request_id: n.chunkRequestID,
                    duration: n.duration,
                    available_qualities: n.availableQualities,
                    next_chunk_sizes: n.nextChunkSizes,
                    last_buffer_sizes: n.lastBufferSizes,
                    last_chunk_download_times: n.lastChunkDownloadTimes,
                    last_chunk_sizes: n.lastChunkSizes,
                    last_chunk_qualities: n.lastChunkQualities,
                    num_remaining_chunks: n.numRemainingChunks,
                    last_playback_heads: n.lastPlaybackHeads,
                    geolocation: n.geolocation,
                    session_id: t
                },
                a = Date.now(),
                s = [{
                    uuid: At(),
                    created_at: a,
                    event: {
                        name: "mimir_inputs",
                        version: 1,
                        ts_ms: a,
                        fields: o
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new r(e).logRequestPromiseWithUrl(e, JSON.stringify(s), !0)
        }(t.config.request.urls.fresnel_mimir_inputs_url + "?beacon=1", t.config.request.session, e, vn(t.config))
    })), t.events.on(A.STALL_JUMP, (function({
        msg: e
    }) {
        Ee("livestall", {
            final: !1
        }, e)
    })), t.events.on(A.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        Ee("livefallback", {
            final: !1
        }, e)
    })), g = new Promise((e, n) => {
        var i;
        (null == (i = t.backbone) ? void 0 : i.video) && e(), t.events.on(T, e)
    }), g.then(_e).catch(() => {}), t.events.on(Xt._swapVideo, _e), J.getFirstConsistentlyInteractive().then(e => {
        de = St(e)
    }).catch(() => {})
}
let Go = function() {
    function e(e) {
        this.player = e, this._configure()
    }
    return e.prototype._configure = function() {
        const e = re.Service.FRESNEL_PROD,
            t = Ko("vimeo.web_global", this.player),
            n = new re.Configuration(e, t);
        re.BigPictureClient.configure(n)
    }, e
}();

function Ko(e, t, n = {}) {
    const i = function(e, t, n = {}) {
        let i = Object.assign({}, function(e, t) {
            var n, i;
            const {
                user: r = {},
                request: a = {},
                video: s = {},
                embed: l = {}
            } = t.config;
            switch (e) {
                case "vimeo.web_global":
                    return {
                        user: {
                            subscription_type: r.account_type || null,
                            is_mod: !!r.mod,
                            session_id: a.session || null,
                            teams: r.team || null,
                            user_id: r.id || null,
                            vuid: ai("vuid") || null,
                            flags: a.flags ? Object.keys(a.flags) : null,
                            is_free_trial: !1
                        },
                        application: {
                            application: "vimeo",
                            vimeo_language: a.lang || "en",
                            product: sn(t),
                            build_environment: "production",
                            version: ln()
                        },
                        platform: {
                            device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                            screen: {
                                dpi: screen.pixelDepth,
                                height: screen.height,
                                width: screen.width,
                                size: `${screen.width} x ${screen.height}`
                            },
                            network: null,
                            platform: "web"
                        }
                    };
                case "workflow.copy_video_embed_code":
                    return {
                        hash: s.unlisted_hash,
                        height: s.height,
                        is_video_password_protected: "password" === s.privacy,
                        product: "Workflow",
                        sizing: l.playsinline ? "fixed" : "responsive",
                        video_embed_privacy: s.embed_permission,
                        video_id: `${s.id||""}`,
                        video_privacy: s.privacy,
                        width: s.width
                    };
                case "vimeo.player_performance_measurement":
                    return {
                        module_player: !0,
                        device_type: dn(),
                        browser: Object.keys(o.browser).find(e => o.browser[e]),
                        device_os: un(),
                        iframed: pn()
                    };
                default:
                    return {}
            }
        }(e, t), n);
        const r = Vt[e];
        return r && (Object.keys(i).forEach(e => {
            r.includes(e) || delete i[e]
        }), r.forEach(e => {
            i.hasOwnProperty(e) || (i[e] = null)
        })), i
    }(e, t, n);
    return new re.Event(e, Bt[e] || 1, i)
}

function Zo(e, t, n = {}) {
    const i = Ko(e, t, n);
    re.BigPictureClient.sendEvent(i)
}
let Xo = function() {
    function e(e, t, n) {
        this.player = e, this.element = t, this.store = n, this.shouldSample = !0, this.muxClient = null, this._canTrack() && (this.shouldSample && Math.random() > .5 || this._loadMuxEmbed())
    }
    var t = e.prototype;
    return t._isVimeoOTT = function() {
        return !!this.player.config.request.flags.ott
    }, t._canTrack = function() {
        var e;
        return !(this.player.doNotTrackEnabled || !this._isVimeoOTT() && ((null == (e = this.player.config.video.live_event) ? void 0 : e.low_latency) && (this.shouldSample = !1), !this.store.get($n)))
    }, t._loadMuxEmbed = function() {
        if (!document.getElementById("vp-mux-client")) {
            var e = document.createElement("script");
            e.setAttribute("id", "vp-mux-client"), e.setAttribute("src", this.player.config.request.urls.mux_url), e.onreadystatechange = e.onload = () => {
                this._setUpPlayerEvents(), this.store.get($n) || this._monitor()
            }, document.getElementsByTagName("head")[0].appendChild(e)
        }
    }, t._setUpPlayerEvents = function() {
        this.player.events.on(Xt._configChanged, e => {
            if (this._canTrack() && e && "undefined" != typeof mux) {
                const e = this.player.backbone.video ? this.player.backbone.video.currentFile : {};
                mux.emit(this.player.backbone.videoElement, "videochange", d({
                    video_title: this.player.config.video.title,
                    video_id: this.player.config.video.id,
                    video_duration: 1e3 * this.player.config.video.duration,
                    video_cdn: e.metadata ? e.metadata.cdn : "akamai",
                    video_stream_type: this._getCurrentStreamType(),
                    viewer_user_id: this.player.config.request.session,
                    view_session_id: this.player.config.request.session,
                    sub_property_id: this._isVimeoOTT() ? this.player.config.ott.site_id : this.player.config.video.owner.id
                }, this._getExperiment()))
            }
        }), this.player.events.on(A.STREAM_ONLINE, () => {
            this._monitor()
        }), this.player.events.on(A.STREAM_OFFLINE, () => {
            var e;
            null == (e = mux) || e.emit(this.player.backbone.videoElement, "ended")
        }), this.player.events.on(v.STREAM_CHANGE, e => {
            var t;
            (null == e ? void 0 : e.bitrate) && (null == (t = mux) || t.emit(this.player.backbone.videoElement, "renditionchange", {
                video_source_bitrate: e.bitrate
            }))
        })
    }, t._monitor = function() {
        if ("undefined" == typeof mux) return;
        const e = this.player.backbone.video ? this.player.backbone.video.currentFile : {};
        null !== this.muxClient && mux.destroyMonitor(this.player.backbone.videoElement);
        let t = "dev" === this.player.config.request.build.js ? "6eq01ih8u9u8fkk4hbindded5" : "73cngs5ov03sbnck36isdkndt";
        this.store.get(qn) && (t = "dev" === this.player.config.request.build.js ? "kghblrf3bb9uk33lv58ompm3k" : "md0ig7ssl8unl2kpl0h6p0drn");
        let n = d({
            property_key: t,
            player_name: "Vimeo Player",
            player_init_time: Date.now(),
            player_version: vn(this.player.config),
            video_title: this.player.config.video.title,
            video_id: this.player.config.video.id,
            video_duration: 1e3 * this.player.config.video.duration,
            video_cdn: e.metadata ? e.metadata.cdn : "akamai",
            video_stream_type: this._getCurrentStreamType(),
            viewer_user_id: this.player.config.request.session,
            view_session_id: this.player.config.request.session,
            sub_property_id: this.player.config.video.owner.id
        }, this._getExperiment());
        this._isVimeoOTT() && (n.property_key = "dev" === this.player.config.request.build.js ? "3tb8rggvj5m71caj9jfpiidos" : "lrc6o7kvhc6npvqq2r5iks5u4", this.player.config.ott && (n.sub_property_id = this.player.config.ott.site_id, n = Object.assign(n, this.player.config.ott))), this.muxClient = mux.monitor(this.player.backbone.videoElement, {
            debug: !1,
            minimumRebufferDuration: 500,
            data: n
        })
    }, t._getExperiment = function() {
        const e = this.player.config.request.ab_tests || {},
            t = Object.keys(e).find(t => e[t].mux);
        return t ? {
            experiment_name: t
        } : null
    }, t._getCurrentStreamType = function() {
        var e;
        return this.store.get($n) ? (null == (e = this.player.config.video.live_event) ? void 0 : e.low_latency) ? "low_latency_live" : this.player.config.video.p2p ? "ecdn_live" : "live" : "vod"
    }, e
}();

function Jo(e) {
    let t, i, o = e.config.ott || {};
    const a = o.analytics_url || "https://collector.vhx.tv/events.gif",
        s = new r(a),
        l = j((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        c = j((function() {
            u("seeking")
        }), 500);

    function d() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, r) {
        (r = Object.assign({}, r, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: Pn.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === r.timestamp && (r.timestamp = Math.round(.001 * Date.now()));
        const l = n(a, r);
        return s.logRequestPromiseWithUrl(l, {}, !0, "GET").catch(e => {})
    }

    function v() {
        e.events.on(p.ENDED, m), e.events.on(p.ERROR, f), e.events.on(p.PAUSE, h), e.events.on(p.PLAY, _), e.events.on(p.TIME_UPDATE, l), e.events.on(p.SEEKING, c), e.events.on(p.SEEKED, g), e.events.on(p.WAITING, b), e.events.on(Xt._didEnterFullscreen, y), e.events.on(Xt._didExitFullscreen, w), e.events.on(Xt._adComplete, E), e.events.on(Xt._adClicked, C), e.events.on(Xt._adError, k), e.events.on(Xt._adStarted, L), e.events.on(Xt._adSkipped, T)
    }

    function m() {
        l.cancel(), u("ended")
    }

    function f() {
        l.cancel(), u("error")
    }

    function h() {
        l.cancel(), u("pause")
    }

    function _() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function g() {
        c.cancel(), u("seeked")
    }

    function b() {
        u("waiting")
    }

    function y() {
        t = !0
    }

    function w() {
        t = !1
    }

    function E() {
        u($o.AD_COMPLETE)
    }

    function C() {
        u($o.AD_CLICKED)
    }

    function k() {
        u($o.AD_ERROR)
    }

    function L() {
        u($o.AD_STARTED)
    }

    function T() {
        u($o.AD_SKIPPED)
    }
    e.events.on(Xt._configChanged, d), d(), e.config.ott ? v() : new Promise((t, n) => {
        e.ottVideoMetadata ? t() : e.events.on(Xt._ottMetadataSet, e => {
            t()
        })
    }).then(() => {
        o = e.ottVideoMetadata, v()
    }).catch(e => {})
}

function Qo(e, t) {
    let n, i, r, a, s, l, c, d, v, m, f, _, g = !1;
    const b = h();
    let y = {};

    function w() {
        i && (D(), i = null), a && (a.destroy(), a = null), r && clearInterval(r), s = null, l = !1, c = !1, v = !1, d = !1, m = !1, g = !1, _ = new Promise((e, t) => {
            f = e
        }), e.events.once(u, () => {
            m = !0
        }), e.events.on(p.ERROR, (function(e) {
            !e || "NotAllowedError" !== e.name && "AbortError" !== e.name || (m = !1)
        })), n = document.querySelector(".vp-ads-wrapper"), n || (n = document.createElement("div"), n.classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(n), n.innerHTML = ho.render("adcountdown")), i = n.querySelector(".vp-ads-tag"), y = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, a = new ae(n, y), a.on(se.ADS_MANAGER_LOADED, () => {
            a.on(se.AD_BUFFERING, E), a.on(se.AD_COMPLETE, k), a.on(se.AD_CLICK, C), a.on(se.AD_ERROR, L), a.on(se.AD_STARTED, T), a.on(se.AD_SKIPPED, S), a.on(se.ALL_ADS_COMPLETED, A), a.on(se.CONTENT_PAUSE_REQUESTED, P), a.on(se.CONTENT_RESUME_REQUESTED, I),
                function() {
                    if (!m) {
                        if (g) return;
                        e.events.once(u, () => {
                            f(), m = !0
                        })
                    }
                    _.then(M).catch(e => {}), e.events.on(p.ENDED, () => {
                        g || (l = !0, a.setContentComplete())
                    })
                }(), e.store.watch("ui.player.width", O), e.events.on(Xt._didEnterFullscreen, O, !0), e.events.on(Xt._didExitFullscreen, O, !1), m && f()
        })
    }

    function E() {
        c && e.events.fire(Xt._adBuffering)
    }

    function C() {
        e.events.fire(Xt._adClicked)
    }

    function k() {
        o.iPhone && e.backbone.addVideoEventListeners(), r && clearInterval(r), c = !1, e.events.fire(Xt._adComplete)
    }

    function L(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Xt._adError, n), "adPlayError" === n.errorType && e.events.fire(Xt._resumedAfterAd)
    }

    function T(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let i = t.getAd();
        i.isLinear() && (r = setInterval(() => {
            let e = "AD " + function(e) {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            }(a.remainingTime);
            n.querySelector(".vp-ads-countdown").innerHTML = e
        }, 1e3), setTimeout(x, 1e3)), c = !0;
        let l = {
            type: i.isLinear() ? "linear" : "nonlinear"
        };
        s && (l.time = Date.now() - s, s = null), e.events.fire(Xt._adStarted, l)
    }

    function S(t) {
        e.events.fire(Xt._adSkipped, t)
    }

    function A(t) {
        v = !0, o.iPhone || a.destroy(), e.events.fire(Xt._allAdsCompleted, t)
    }

    function P() {
        e.events.fire(Xt._pausedForAd), s = Date.now(), l || (d = !0, e.backbone.paused ? e.events.once(p.PLAYING, () => {
            e.backbone.pause()
        }) : e.backbone.pause())
    }

    function I() {
        D(), e.events.fire(Xt._resumedAfterAd), o.iPhone && v && a.destroy(), l || R()
    }

    function R() {
        d = !1, e.backbone.play()
    }

    function x() {
        i = n.querySelector(".vp-ads-tag"), i.classList.remove("hidden"), i.removeAttribute("hidden")
    }

    function D() {
        i.classList.add("hidden"), i.setAttribute("hidden", "")
    }

    function N() {
        return {
            width: t.getBoundingClientRect().width,
            height: t.getBoundingClientRect().height
        }
    }

    function M() {
        const {
            width: t,
            height: n
        } = N();
        try {
            a.start(t, n)
        } catch (i) {
            l && e.events.fire(Xt._adComplete), d && R()
        }
    }

    function O(e) {
        const {
            width: t,
            height: n
        } = N();
        a.resize(t, n, e)
    }
    const B = {
        pause: () => (e.events.fire(Xt._adPaused), a.pause()),
        play: () => (e.events.fire(Xt._adResumed), a.play()),
        get volume() {
            return a.volume
        },
        set volume(e) {
            a.volume = e
        },
        toggleCastingState(e) {
            g = !!e, g && a.destroy()
        },
        events: b
    };
    return w(), e.events.on(Xt._configChanged, w), B
}
const er = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"];
let tr = function() {
        function e(e) {
            this._player = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._player.events.fire(Xt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._player.events.fire(Xt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._player.events.fire(Xt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = s({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            if (e === $o.CHUNK_DOWNLOADED) {
                let e = {};
                e.host = t.host, e.duration = St(t.duration, 2), e.size = t.size, e.index = t.index, e.profile_id = t.profile_id, e.quality = t.quality, e.buffered = St(t.buffered, 2), e.ttfb = St(t.ttfb, 2), e.extraContext = t.extraContext, e.headers = le(t.headers, ["x_vim_cachebc", "x_cache", "akamai_edge_ip", "x_akamai_request_id", "ak_reference_id", "content_type"]);
                let n = 0,
                    i = 0,
                    o = 0;
                const r = e.headers.x_vim_cachebc,
                    a = e.headers.x_cache;
                return r ? r.split(",").forEach(e => {
                    let [t, n] = e.split(":");
                    "E" !== t || "h" !== n ? "h" !== n || (i = 1) : o = 1
                }) : a && (i = "HIT" === a.substr(0, 3), o = "HIT" === a.substr(-3)), o ? n = 2 : i && (n = 1), e.cache_hit = n, e
            }
            if (e === $o.VIDEO_PLAYBACK_ERROR || e === $o.VIDEO_LOAD_FAILURE || e === $o.VIDEO_START_FAILURE || e === $o.VIDEO_READY) return t;
            if (void 0 !== t.autoplay && void 0 !== t.looping) {
                let e = {};
                return e.cdn = t.cdn, e.quality = t.quality, e
            }
            return t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._player.backbone.currentTime,
                o = Date.now(),
                r = St(ee(i, this._player.backbone.buffered), 2);
            this._addToSeries("markers", {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._player.events.on(Xt._configChanged, () => {
                this.reset()
            }), this._player.events.on(v.BANDWIDTH, this._onBandwidthChange.bind(this)), this._player.events.on(v.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._player.events.on(v.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._player.events.on(v.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._player.events.on(v.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._player.events.on(v.STREAM_CHANGE, this._onStreamChange.bind(this)), this._player.events.on(v.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._player.events.on(p.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._player.events.on(I.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._player.events.on(Xt._logMetric, this._onLogMetric.bind(this)), this._player.events.on(A.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._player.events.on(A.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._player.events.on(A.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries("vr_headset", e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval(() => {
                const e = this._player.backbone.buffered,
                    t = this._player.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._player.backbone.latency;
                    this._setToSeries("live_latency", e)
                } else this._setToSeries("live_latency", 0)
            }, 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._player.store.watch("ui.player.boundingRect", e => {
                const t = this.getCurrent("video_dims"),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries("video_dims", n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            })
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${St(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = er.reduce((e, t) => (e[t] = [], e), {})
        }, t._setDefaults = function() {
            const e = this._player.backbone.currentFile;
            this._addToSeries("files", e), this._addToSeries("scanner", this._player.backbone.currentScannerName), "HLSLiveScanner" === this._player.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries("min_bandwidth", 0), this._setToSeries("max_badwidth", 0);
            const t = this._player.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries("video_dims", n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries("bandwidth", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent("max_badwidth"),
                i = this.getCurrent("min_bandwidth");
            (!i || t < i) && this._setToSeries("min_bandwidth", t), (!n || t > n) && this._setToSeries("max_badwidth", t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries("total_frames", n), this._setToSeries("dropped_frames", t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._player.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i;
            const o = n[t],
                r = this._getResolutionString(o),
                a = Wo(o.codecs),
                s = null == (i = this._player.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                l = jo(null == s ? void 0 : s.codecs),
                c = `${a}${l?` / ${l}`:""}`;
            this._addMarker("switchcomplete", `Completed switch to ${r}`), this._addToSeries("streams", {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${o.height}p`,
                bitrate: o.bitrate,
                audioBitrate: null == s ? void 0 : s.bitrate,
                audioChannels: null == s ? void 0 : s.channels,
                framerate: o.framerate,
                height: o.height,
                width: o.width,
                id: o.id,
                codec: c
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent("files"),
                t = this._player.backbone.currentFile;
            this._addToSeries("files", t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? Qt[e.mime] : null,
                r = Qt[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries("buffer_occupancy", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent("scanner"),
                t = this._player.backbone.currentScannerName;
            this._setToSeries("scanner", t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._player.events.fire(Xt._debugDataChange)
        }, e
    }(),
    nr = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._player.events.on(Ut._reset, () => {
                this.reset()
            })
        }, t._getFragment = function(e, t, n) {
            if (H(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                }),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                s = n[o + 1],
                l = r ? t : (s - 1) / 1e3;
            return {
                startTime: a,
                endTime: l,
                duration: l - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Xt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(p.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !H(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(p.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, m(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !H(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return H(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }]), e
    }();
var ir;
! function(e) {
    e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint"
}(ir || (ir = {}));
const or = 4e-4 / Object.keys(ir).length,
    rr = {};

function ar({
    element: t,
    delegate: n = {},
    cssLoadedPromise: i = Promise.resolve(null),
    name: s = null
}) {
    pe.set(gn);
    let c = !1;
    const u = ve(vo, fe(e => (...t) => {
            const n = e.apply(void 0, t),
                i = ht();

            function o(e, t) {
                return (e = [].concat(e)).map(e => t(n.createGetter(e)))
            }
            return d(d({}, n), {}, {
                watch: function(e, t) {
                    return o(e, e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    })
                },
                unwatch: function(e, t) {
                    return o(e, e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    })
                }
            })
        }, function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = B(e => {
                    if (V(e)) return e;
                    const t = l(o(), e);
                    return V(t) ? t : t => l(t, e)
                });
                return d(d({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = F(n, t)), n
                    }
                })
            }
        }(mo), me.apply(void 0, []))),
        m = new Map,
        f = h(),
        _ = new yn({
            events: f
        }),
        g = At();
    t.classList.add(`player-${g}`), t.classList.add("loading"), t.id || (t.id = `player${g}`), t.innerHTML = ho.render("outer", {
        strings: {
            back: "Back",
            close: "Close overlay"
        }
    });
    const b = t.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        b.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (ke) {
            gn.captureException(ke)
        }
    }
    let y, w, E, C, k, L = null,
        T = null,
        S = null,
        A = null,
        P = null,
        I = null,
        R = null,
        x = null,
        D = {};
    const N = new Promise((e, t) => {
        k = e
    }).then(() => (f.fire(Xt._ready), null));
    let M = {
        get config() {
            return _.config
        },
        set config(e) {
            _.config = e
        },
        get delegate() {
            return n
        },
        set delegate(e) {
            n = e
        },
        ready(e) {
            if (!e) return N;
            N.then(() => e()).catch(e => {
                gn.captureException(e)
            })
        },
        get sessionId() {
            return _.config.request.session
        },
        get name() {
            return s
        }
    };

    function O(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), (null == (t = i.request) ? void 0 : t.urls.js) && _e(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== en.main && i.view !== en.privateUnlocked && i.view !== en.webinarUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, (null == (o = history) ? void 0 : o.replaceState) && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== en.main && i.view !== en.privateUnlocked && i.view !== en.webinarUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        (null == n ? void 0 : n.embed) && n.embed.color !== i.embed.color && f.fire(Ut._changeColor, i.embed.color), A && A.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return y = null, E = L, f.fire(Ut._reset), u.dispatch(xn(i)), f.fire(Xt._configChanged, r, i), e
    }

    function U(e) {
        if ("opacity" === e.propertyName) {
            const e = document.querySelector(".vp-placeholder");
            e && (be(e).off("transitionend", U), e.parentNode.removeChild(e))
        }
    }

    function q() {
        ! function() {
            const e = document.querySelector(".vp-placeholder");
            e && (be(e).on("transitionend", U), e.classList.add("vp-placeholder-fadeout"))
        }(), t.classList.remove("loading"), k()
    }

    function H(e) {
        return i.then(() => {
            if (j(e), T && T.resetThumbnail(), "function" != typeof D.authorizationHandler) throw new Error("Config was not authorized.");
            return D.authorizationHandler(q)
        }).then(e => (_.config = e, y = null, u.dispatch(xn(_.config)), f.fire(Ut._reset), f.fire(Xt._configChanged, !0, _.config), e))
    }

    function $() {
        c || (f.on(Xt._userLogIn, (function(e) {
            _.reload().then(t => {
                if (!_.config.user.logged_in) return f.fire(Xt._loginFailure), t;
                switch (f.fire(Xt._userLoggedIn, e), e) {
                    case "like":
                        _.config.user.liked && f.fire(Xt._liked);
                        break;
                    case "watch-later":
                        _.config.user.watch_later && f.fire(Xt._addedToWatchLater);
                        break;
                    case "private":
                        f.fire(Xt._privateUnlocked, t.loaded)
                }
                return t
            }).catch(e => {
                gn.captureException(e)
            })
        })), f.on(Xt._userLoggedOut, () => {
            _.reload().catch(e => {
                gn.captureException(e)
            })
        }), c = !0)
    }

    function W(e) {
        (function() {
            const e = function(e, t) {
                    const n = new RegExp(`[?&]vimeo_t_${t}=([^&#]*)`).exec(e.href);
                    let i;
                    return n && (i = decodeURI(n[1])), i ? `#t=${i}` : e.hash
                }(document.location, _.config.video.id),
                t = function(e) {
                    var t;
                    let n = e.match(/\ba?t=([0-9hms:]+)/);
                    null !== n && (e = n[1]);
                    let i = !1,
                        o = 0,
                        r = 0,
                        a = 0;
                    return n = e.match(/^([0-9]+)$/), (null == (t = n) ? void 0 : t.length) && (i = !0, a = n[1]), !1 === i && (n = e.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = 0, r = 0, a = 0] = n)), !1 === i && (n = e.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = 0, o = 0] = e.split(":").reverse())), i ? 60 * parseInt(o, 10) * 60 + 60 * parseInt(r, 10) + parseInt(a, 10) : null
                }(e);
            null !== t && (_.config.embed.time = Et(t, 0, _.config.video.duration), -1 !== e.indexOf("at=") && history && history.replaceState && history.replaceState("", "", window.location.pathname + window.location.search))
        })(), $(),
            function(e) {
                var n, i;
                T = new Yn(e, u, t.querySelector(".vp-preview")), f.on([v.BUFFER_ENDED, p.PLAYING], () => {
                    T.hide()
                }), L = new he(b, _.config), E = L, R = new tr(e), new vi(e, u, t.querySelector(".vp-video-wrapper")), new fo(e, u, t.querySelector(".vp-captions")), new _o(t, f), z(e), e.doNotTrackEnabled || (_.config.request.urls.test_imp && function(e, t) {
                    if (!e.config.request.ab_tests) return;
                    const n = new r(t);
                    for (const i in e.config.request.ab_tests) {
                        const t = e.config.request.ab_tests[i];
                        if (!t.track) continue;
                        const o = {
                            session_id: e.config.request.session,
                            test_id: i,
                            test_group: String(t.group)
                        };
                        n.log(o, !0, !1).catch(e => {})
                    }
                }(e, `${_.config.request.urls.test_imp}?beacon=1`), new Yo(e, t, u, _.config.request.urls.fresnel), new Go(e), new bi(e, u), new Xo(e, t, u), new Jo(e), function(e) {
                    function t(t) {
                        return function({
                            value: n
                        }) {
                            rr[t] || (rr[t] = !0, function(t, n) {
                                Zo("vimeo.player_performance_measurement", e, {
                                    measurement_type: t,
                                    measurement_value: n
                                })
                            }(t, n))
                        }
                    }
                    Math.random() <= or && (ce(t(ir.FIRST_INPUT_DELAY)), de(t(ir.CUMULATIVE_LAYOUT_SHIFT)), ue(t(ir.LARGEST_CONTENTFUL_PAINT)))
                }(e)), A = new ci(e), (e.config.request.flags.ott || (null == (n = e.config.request.ab_tests) || null == (i = n.chromecast) ? void 0 : i.group)) && function(e) {
                    if (e.config.video.spatial || "stock" === e.config.video.privacy) return;
                    const n = new An({
                        textAlert: new Ho(t),
                        player: e
                    });
                    Pn.init({
                        chromecastPlayer: n
                    }), Pn.on([Sn.error, Sn.mediaLoadedFailed], e => {
                        gn.captureException(e)
                    })
                }(e), j(e)
            }(e)
    }

    function j(e) {
        S || (S = new qo(e), go(M, S), ge.set(gn))
    }

    function z(e) {
        const n = _.config.request.ads;
        n && (n.adcode && n.adunit || n.adurl) && (P = new Qo(e, t.querySelector(".vp-video-wrapper")), f.on(Xt._pausedForAd, () => {
            E = P, f.fire(Xt._displayContextChanged)
        }), f.on(Xt._resumedAfterAd, () => {
            E = L, f.fire(Xt._displayContextChanged)
        }), Pn && (Pn.on(Sn.connected, () => {
            P.toggleCastingState(!0)
        }), Pn.on(Sn.disconnected, () => {
            P.toggleCastingState(!1)
        })))
    }

    function Y(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = Lt(kt(e), e, t)), n
    }
    let G = {
        get store() {
            return u
        },
        get config() {
            return _.config
        },
        get element() {
            return t
        },
        get events() {
            return f
        },
        get uuid() {
            return g
        },
        get expose() {
            return M
        },
        get backbone() {
            return L
        },
        get adHandler() {
            return P
        },
        get displayContext() {
            return E
        },
        get preview() {
            return T
        },
        get doNotTrackEnabled() {
            return _.config.embed.dnt || _.config.request.flags.dnt
        },
        get playLoggingEnabled() {
            return _.config.embed.log_plays && _.config.request.flags.plays
        },
        get currentTime() {
            return Pn.isCastConnected ? Pn.chromecastPlayer.currentTime : L.currentTime
        },
        get debugCollector() {
            return R
        },
        get fragmentsHandler() {
            return x
        },
        get ottVideoMetadata() {
            return I
        },
        set ottVideoMetadata(e) {
            I = e
        },
        init: (e, n) => w || (x = new nr(G), new Io(G, u, t), D = n, w = _.load(e).then(O).catch(e => ($(), H(G))).then(() => "function" == typeof D.initializationHandler ? Promise.resolve(n.initializationHandler()) : null).then(() => (W(G), "function" == typeof D.postInitializationHandler ? Promise.resolve(n.postInitializationHandler()) : null)).then(() => Promise.all([T.thumbnailPromise, i])).then(q).then(() => (gn.setUp(G), null)).catch(e => {
            gn.captureException(e)
        }), w),
        loadVideo(e, n) {
            if (C === e && y) return y;
            if (T && T.resetThumbnail(), null == n ? void 0 : n.video_version) {
                let e = _.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map(e => e.id), -1 === e.indexOf(n.video_version)) return Promise.reject("Invalid version id specified")
            }
            f.fire(Xt._loadVideo), C = e, t.classList.add("loading");
            const i = Y(e, n),
                o = m.get(i);
            return e = o ? o._config.loaded : e, y = _.load(e, n).then(e => {
                if (o) {
                    const e = L.element;
                    L = o._backbone, L.element.style.visibility = "visible", e.parentNode.replaceChild(L.element, e), f.fire(Xt._swapVideo)
                }
                return e = O(e), P || z(G), e
            }).catch(e => H(G)).then(e => {
                let t = T.loadThumbnail();
                return Promise.resolve(t)
            }).then(q), y
        },
        preloadVideo(e, t, n) {
            const i = Y(t, n),
                o = m.get(i);
            return o ? Promise.resolve(o) : new yn({
                events: f
            }).load(t, n).then(t => {
                const n = L.element.cloneNode(!1);
                n.style.visibility = "hidden", L.element.parentNode.insertBefore(n, L.element);
                const o = new he(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return m.set(i, r), r
            })
        },
        performDelegateAction(t, i = (() => {}), o = []) {
            var r, a;
            let s;
            var l;
            null != (r = n) && r[t.will] && (s = (l = n)[t.will].apply(l, [_.config.video.id].concat(e(o))), !1 === s) || (i.apply(void 0, [_.config.video.id].concat(e(o), [s])), (null == (a = n) ? void 0 : a[t.did]) && n[t.did]())
        },
        ready: () => N,
        verifyConfig: () => _.verify(),
        loadConfigRequestObject: () => _.loadRequest().then(e => {
            const t = d(d({}, _.config), {}, {
                request: e
            });
            return O({
                old: _.config,
                loaded: t
            })
        }).catch(e => H(G)),
        updatePhpTokens: () => new Promise((e, t) => {
            const {
                vimeo_api_client_token: n,
                vimeo_api_interaction_tokens: i,
                vimeo_live_client_token: o,
                vimeo_bucketed_live_client_token: r
            } = _.config.user;
            let s = !1;
            if (n) try {
                s = Lo(JSON.parse(atob(n.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP client token expiration"))
            }
            if (i) try {
                const e = JSON.parse(atob(i.likes.split(".")[1])).exp,
                    t = JSON.parse(atob(i.watch_later.split(".")[1])).exp,
                    n = JSON.parse(atob(i.following.split(".")[1])).exp;
                s = Lo(e) >= 0 || Lo(t) >= 0 || Lo(n) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP interaction tokens expiration"))
            }
            if (o) try {
                s = Lo(JSON.parse(atob(o.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (r) try {
                s = Lo(JSON.parse(atob(r.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (s) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = _.config.request, s = `https://${_.config.player_url}/video/${_.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                a(s, {
                    withCredentials: !0
                }).json().then(t => (_.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, _.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, _.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, _.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e())).catch(e => {
                    gn.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                })
            } else e()
        })
    };
    return G
}
let sr = function() {
    function e(e, t, n = 1) {
        h(this), this.version = n, this.visible = !1;
        var i = this._wrap = document.createElement("div");
        i.classList.add("compass-wrapper"), i.innerHTML = ho.render("compass", {
            version: n,
            label: "Reset view"
        }), i.classList.add("cloaked"), e.appendChild(i), t && i.addEventListener("click", t), this._layerSlice = i.querySelector(".compass-slice"), this._lineSlice = i.querySelector(".compass-line");
        const o = () => {
                this._mouseIn = !0
            },
            r = e => () => {
                setTimeout(() => {
                    this._mouseIn || (this.fade(), this._mouseIn = !1)
                }, e)
            };
        be(this._wrap).on("mousein", o).on("pointerin", o).on("mouseout", r(1e3)).on("pointerout", r(1e3)), r(2500)()
    }
    var t = e.prototype;
    return t.setAngle = function(e, t) {
        this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
        let n = 0;
        1 === this.version ? n = -45 : 2 === this.version && (n = -30);
        const i = `${n+t}`,
            o = (e + 85) / 170;
        this._animationFrame = window.requestAnimationFrame(() => {
            this._layerSlice.setAttribute("transform", `rotate(${i}, 18, 18)`), this._lineSlice && this._lineSlice.setAttribute("d", this._getLinePath(o, 18))
        })
    }, t._getLinePath = function(e, t) {
        const n = 2 * t - Math.round(2 * t * e),
            i = (2 * t - 2 * Math.sqrt(2 * n * t - Math.pow(n, 2))) / 2;
        return `M${i+5},${n} L${2*t-i-5},${n} z`
    }, t.reveal = function() {
        this._wrap.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            this._wrap.classList.add("in")
        }), this.visible = !0
    }, t.fade = function() {
        this._wrap.classList.add("fade"), this.visible = !0
    }, t.hide = function() {
        this._wrap.classList.remove("in"), this._wrap.classList.remove("fade"), this._wrap.classList.add("leaving");
        const e = () => {
            "opacity" === event.propertyName && (this._wrap.classList.remove("leaving"), this._wrap.classList.add("cloaked"), this.visible = !1), be(this._wrap).off("transitionend", e)
        };
        be(this._wrap).on("transitionend", e)
    }, t.updatePosition = function(e) {
        if (!e) return;
        const t = bt(e);
        return t.height < 265 ? (this._wrap.classList.remove("align-bottom"), void this._wrap.classList.add("hidden")) : t.height < 336 ? (this._wrap.classList.remove("hidden"), void this._wrap.classList.add("align-bottom")) : (this._wrap.classList.remove("hidden"), void this._wrap.classList.remove("align-bottom"))
    }, t.getWrapper = function() {
        return this._wrap
    }, e
}();

function lr(e, t, n) {
    var i = null,
        r = o.touch ? 4500 : 2e3,
        a = !0,
        s = !0,
        l = !1,
        c = null,
        d = null,
        m = [],
        f = !1,
        h = null,
        _ = null,
        g = null,
        b = !0,
        y = !1,
        w = !1,
        E = !1,
        C = !1,
        L = !1,
        T = n.querySelector(".vp-target"),
        S = n.querySelector(".vp-controls"),
        A = n.querySelector(".vp-title"),
        P = n.querySelector(".vp-video");
    let R = n.querySelector(".vp-sidedock"),
        x = n.querySelectorAll(".vp-menu"),
        D = n.querySelector(".vp-ads-wrapper");
    var N = Array.from(n.querySelectorAll(".vp-nudge")),
        M = !!o.touch && N.some(e => !e.classList.contains("invisible"));
    const O = e.config.embed.autoplay && e.config.request.flags.autohide_controls,
        B = o.touch ? 300 : 0;
    let V = null;
    const F = zo(e.config, "webvr").group || !1;

    function U() {
        clearTimeout(i), i = null
    }

    function q() {
        "preact-menu" !== g && (g && g.isNewMenu && g.isFullwidth() || L && (clearTimeout(i), i = setTimeout(() => $(!1, !0), r)))
    }

    function H() {
        K.element && K.element.classList.contains("js-player-fullscreen") && (l || (n.classList.add("player-cursor-hide"), s = !0, l = !0))
    }

    function $(t, i) {
        var r, l;
        if ("preact-menu" === g && i) return;
        if (g && g.isNewMenu && g.isFullwidth()) return;
        if (!y && !b && !n.classList.contains("player-ad")) return;
        if (E) return;
        U(), S = ee(), R = Q(), x = n.querySelectorAll(".vp-menu");
        const c = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = R) ? void 0 : r.contains(document.activeElement)) || (null == (l = S) ? void 0 : l.contains(document.activeElement))),
            d = document.activeElement && "preact-menu" === g && Array.from(x).find(e => null == e ? void 0 : e.contains(document.activeElement));
        c || d || (e.events.fire(t ? Xt._mousedOut : Xt._mouseTimeout), s = !0, o.spatialPlayback && e.config.video.spatial || (T.classList.add("hidden"), T.setAttribute("hidden", "")), a = !0, H())
    }

    function W() {
        q(), M || C || y && b && !n.classList.contains("player-ad") || (e.events.fire(Xt._mousedOver), T.classList.remove("hidden"), T.removeAttribute("hidden"))
    }

    function j() {
        y || b ? n.removeAttribute("tabindex") : y || b || w || n.setAttribute("tabindex", "0")
    }

    function z() {
        e.events.on([p.TIME_UPDATE, p.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === i && (e.events.fire(Xt._targetTimeReached), e.events.off([p.TIME_UPDATE, p.SEEKED], t))
        }))
    }

    function Y() {
        P.classList.remove("threesixty-video"), e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing"), c && c.hide()
    }

    function G() {
        m.forEach(e => clearTimeout(e)), m = []
    }

    function Z(e) {
        e && (e.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            e.classList.add("in")
        }))
    }

    function X(e) {
        e && (e.classList.add("leaving"), window.requestAnimationFrame(() => {
            be(e).on("transitionend", (function t(n) {
                "opacity" === n.propertyName && (e.classList.remove("in"), e.classList.remove("leaving"), e.classList.add("cloaked"), be(e).off("transitionend", t))
            }))
        }))
    }

    function J(e) {
        R = Q(), bt(R).width > 60 ? e.classList.add("vp-alert-bumpdown") : e.classList.remove("vp-alert-bumpdown")
    }

    function Q() {
        return R || (R = n.querySelector(".vp-sidedock"), R)
    }

    function ee() {
        return S || (S = n.querySelector(".vp-controls"))
    }
    return function() {
            var t = !0;

            function i() {
                W()
            }

            function d(i) {
                var c;
                if (r = 2e3, s) s = !1;
                else if (l && (n.classList.remove("player-cursor-hide"), l = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                    if (t = !0, o.spatialPlayback && (null == (c = e.config.video) ? void 0 : c.spatial)) {
                        const t = bt(e.element),
                            n = i.clientX - t.left,
                            o = i.clientY - t.top,
                            r = 180,
                            a = o > e.element.clientHeight - 55,
                            s = n > e.element.clientWidth - 45 && o < r;
                        if (f || !a && !s) return
                    }
                    a && W(), q()
                } else U(), H(), t && ($(!0), t = !1)
            }

            function u(e) {
                var t;
                D = D || (D = n.querySelector(".vp-ads-wrapper"), D), null != (t = D) && t.contains(e.target) || $(!0)
            }

            function p(e) {
                var t, n;
                S = ee(), R = Q();
                var i = (null == (t = S) ? void 0 : t.contains(e.target)) || (null == (n = R) ? void 0 : n.contains(e.target));
                let o = c && c.getWrapper().contains(e.target);
                y && b || o ? i || !y && !b || $(!0) : (clearTimeout(V), V = setTimeout(W, B))
            }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return d(e)
            }
            o.pointerEvents ? be(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return r = 2e3, i();
                r = 4500, p(e)
            })).on("pointermove", v).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return u(e)
            })) : be(n).on("touchmove", (function() {
                r = 4500, q()
            })).on("touchend", p).on("mouseenter", i).on("mousemove", d).on("mouseleave", u), e.events.on(Xt._didEnterFullscreen, (function() {
                o.pointerEvents ? be(K.element).on("pointermove", v) : be(K.element).on("mousemove", d)
            })), e.events.on(Xt._didExitFullscreen, (function() {
                o.pointerEvents ? be(K.element).off("pointermove", v) : be(K.element).off("mousemove", d)
            }))
        }(), e.events.on(p.PLAY, (function(e) {
            O || 0 === e || W()
        })).on(Xt._paused, W).on([v.BUFFER_ENDED, p.SEEKED, Xt._scrubbingEnded, Xt._volumeChanged, Xt._menuPanelOpened], q).on(u, (function() {
            L = !0
        })), e.events.on(Xt._menuVisibilityChanged, (function(e) {
            e && q()
        })), e.events.on(Xt._overlayOpened, j).on(Xt._controlBarVisibilityChanged, (function(e) {
            b = e, j()
        })).on(Xt._sidedockVisibilityChanged, (function(e) {
            y = e, j()
        })), e.events.on(Xt._outroDisplayed, (function() {
            E = !0, W()
        })).on(Xt._outroHidden, (function() {
            E = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Xt._menuVisibilityChanged, (function(e, t) {
                g = "preact-menu" === e ? e : e ? t : null
            })), be(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (g) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return R = Q(), A = A || (A = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = A) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || P.contains(e)) && !(null == (i = R) ? void 0 : i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const s = L && o.spatialPlayback && e.config.video.spatial && d;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!s) {
                        if (L && t) return;
                        return void e.events.fire(Xt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (s) {
                        let t = _ && _.x === i.clientX && _.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Xt._playButtonPressed : Xt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Mn) && !t.get(qn)) return;
                        e.events.fire(e.backbone.paused ? Xt._playButtonPressed : Xt._pauseButtonPressed)
                    } else e.events.fire(Xt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), be(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return T.classList.remove("hidden"), T.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), T.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return T.classList.remove("hidden"), T.removeAttribute("hidden"), !1
            })), e.events.on(Ut._toggleNativeControls, (function(e) {
                if (e) return i = !0, void T.classList.add("hidden");
                i = !1, T.classList.remove("hidden")
            }))
        }(),
        function() {
            var t, i;
            o.touch || (be(n).on("focus", "a, button, input, [tabindex]", (function() {
                i = this, clearTimeout(t), t = null, document.activeElement === this && W()
            })), be(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (t = setTimeout($, 50))
            })), n.addEventListener("focus", (function(e) {
                W(), i && i.focus()
            }), !1), e.events.on(Xt._overlayOpened, (function() {
                w = !0, n.removeAttribute("tabindex")
            })), e.events.on(Xt._overlayClosed, (function() {
                w = !1, j()
            })))
        }(), e.events.on(Xt._didEnterFullscreen, (function(e) {
            H(), d && d.adjustRenderSize(), E && W()
        })).on(Xt._didExitFullscreen, (function(e) {
            a = !0, d && d.adjustRenderSize(), e ? $() : (W(), U())
        })), z(), e.events.on(Ut._reset, (function() {
            a = !0, s = !0, b = !0, y = !1, C = !1, L = !1, z(), U()
        })), e.events.on(Ut._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    d && e.apply(void 0, t)
                },
                i = t(t => {
                    const n = e.element.classList.contains("webvr");
                    d && n && d.toggleVR()
                }),
                r = t(t => {
                    d.isVRPresenting ? setTimeout(() => {
                        e.events.fire(I.WEBVR_ENTER)
                    }, 100) : setTimeout(() => {
                        e.events.fire(I.WEBVR_EXIT)
                    }, 100)
                });
            e.events.on(Ut._revealSpatialControls, t(() => {
                const t = e.element.classList.contains("webvr");
                t || e.element.classList.add("grabbable"), c && c.updatePosition(e.element), !c || c.visible || t || c.reveal()
            })), e.events.on(Xt._ended, t(() => {
                Y(), o.webvr && d.isVRPresenting && F && d.toggleVR()
            })), e.events.on(I.CAMERA_UPDATE, t(e => {
                c && c.setAngle(e.pitch, e.yaw)
            })), e.events.on(u, t(() => {
                e.config.video.spatial ? function() {
                    function t(e) {
                        h && (h.innerHTML = ho.render("threesixty_reminder", e))
                    }
                    let i = e.backbone.getEffectByName("ThreeSixtyEffect");
                    e.config.embed.settings.spatial_compass ? (c || (c = new sr(e.element.querySelector(".vp-controls-wrapper"), () => {
                            i.snapToCenter()
                        })), c.updatePosition(e.element), c.reveal()) : c && c.hide(), e.events.once(Xt._firstTimeUpdate, () => {
                            const n = e.config.embed.cards;
                            (null == n ? void 0 : n.length) && n[0].timecode < 15 || (m.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Click and drag to look around"
                                }), J(h), Z(h), setTimeout(() => X(h), 3e3)
                            }, 7e3)), o.android || m.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Use arrow keys to see more"
                                }), J(h), Z(h), setTimeout(() => X(h), 3e3)
                            }, 14e3)))
                        }),
                        function() {
                            const e = n;
                            if (h) return;
                            let t = h = document.createElement("div");
                            t.classList.add("cloaked"), t.classList.add("vp-alert-round"), t.classList.add("vp-alert-round--top"), t.classList.add("vp-alert-round--threesixty"), e.appendChild(t)
                        }()
                }() : !e.config.video.spatial && c && (Y(), G())
            })), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Xt._stereoscopicButtonPressed, t(() => {
                G(), o.webvr && d.hasVRHeadset && F ? d.toggleVR() : e.events.fire(Xt._showAndroidVRDeepLink)
            })), e.events.on(I.WEBVR_HARDWARE_AVAILABLE, t(e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && F && t.classList.remove("off")
            })), e.events.on(I.WEBVR_ENTER, t(t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), c && c.hide(), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), d.isUserInteracting = !1
            })), e.events.on(I.WEBVR_EXIT, t(t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), c && c.reveal(), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), d.isUserInteracting = !0
            })));
            let a = null;
            const s = t(t => {
                    const n = e.element.classList.contains("webvr");
                    f || n || (f = !0, t.preventDefault(), e.element.classList.add("grabbing"), _ = {
                        x: t.clientX,
                        y: t.clientY
                    }, d.makeContact(_))
                }),
                l = t(t => {
                    const n = e.element.classList.contains("webvr");
                    f && !n && (G(), d.move({
                        x: t.clientX,
                        y: t.clientY
                    }))
                }),
                p = t(t => {
                    const n = e.element.classList.contains("webvr");
                    f && !n && (e.element.classList.remove("grabbing"), d.releaseContact(!1), f = !1)
                }),
                v = t(t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (d.isUserInteracting || (d.isUserInteracting = !0), null !== a && clearTimeout(a), G(), a = setTimeout(() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), d.isUserInteracting = !1
                    }, 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), d.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                }),
                g = t(e => {
                    f || (f = !0, d.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                b = t(e => {
                    f && (e.preventDefault(), G(), d.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                y = t(e => {
                    d.releaseContact(!0), f = !1
                }),
                w = t(e => {
                    f || G(), d.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                }),
                E = t(t => {
                    f = !1, e.element.classList.remove("grabbing"), d.abandonMotion()
                });
            e.events.on(u, () => {
                o.android && d && window.addEventListener("deviceorientation", w, !1)
            }), e.events.once(u, () => {
                e.store.watch("ui.player.boundingRect", () => {
                    c && c.updatePosition(e.element), d && d.adjustRenderSize(), f = !1
                }), o.pointerEvents ? (be(T).on("pointerdown", s), window.addEventListener("pointermove", l), window.addEventListener("pointerup", p), window.addEventListener("pointerleave", E)) : (be(T).on("mousedown", s).on("wheel", v), window.addEventListener("touchstart", g, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", b, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", y, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", l), window.addEventListener("mouseup", p), window.addEventListener("mouseleave", E))
            })
        })), e.events.on(k, e => {
            Y(), d = e, G()
        }), e.events.on(Xt._nudgeAttempted, () => {
            C = !0, clearTimeout(V), V = null
        }), e.events.on(Xt._nudgeEnded, () => {
            C = !1
        }), {}
}
let cr = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
    }
    var t = e.prototype;
    return t.show = function(e = "", t = "", n = "") {
        this.alertContentTitle.innerHTML = e, this.alertContentTime.innerHTML = t, this.alertContentFooter.innerHTML = n, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
let dr = function() {
    function e(e, t, n) {
        this.textAlert = new Ho(e), this.timeAlert = new cr(e), this.player = t, this.store = n, this.startTime = new Date(this.store.get(Bn, null)), this._disabled = !1, this._setUpLiveEvents(), this._checkStatus()
    }
    var t = e.prototype;
    return t.disable = function() {
        this.hide(), this._disabled = !0
    }, t.hide = function() {
        this.textAlert.hide(), this.timeAlert.hide()
    }, t._checkStatus = function() {
        (this.store.get(Fn) || this.store.get(Un)) && this._onLiveEventActive(), this.store.get(Hn) && this._onLiveStreamEnded()
    }, t._setUpLiveEvents = function() {
        this.player.events.on(A.EVENT_ACTIVE, this._onLiveEventActive.bind(this)), this.player.events.on(A.STREAM_ONLINE, this._onLiveStreamOnline.bind(this)), this.player.events.on(A.STREAM_OFFLINE, this._onLiveStreamOffline.bind(this)), this.player.events.on(A.SETTINGS_UPDATED, this._onLiveSettingsUpdate.bind(this)), this.player.events.once(A.EVENT_ENDED, this._onLiveStreamEnded.bind(this)), this.player.events.on(Xt._webinarRegistrantBlocked, this._onLiveStreamEnded.bind(this)), this.player.events.on(Xt._webinarRegistrantUnblocked, this._onLiveStreamOnline.bind(this))
    }, t._onLiveSettingsUpdate = function(e, t) {
        "event_schedule" === e && this.store.dispatch(Dn({
            eventSchedule: t
        })), "hide_live_label" === e && this.store.dispatch(Dn({
            hideLiveLabel: t
        }))
    }, t._onLiveEventActive = function() {
        this._setLiveEventSchedule(this.store.get(jn))
    }, t._displayTimeAlert = function() {
        const e = this._timeToDisplayText();
        this.timeAlert.show(e[0], e[1], e[2]), !this.store.get(Fn) && !this.store.get(Un) || this._disabled || setTimeout(this._checkStatus.bind(this), 3e4)
    }, t._timeToEventStart = function() {
        return this.startTime - new Date
    }, t._timeToDisplayText = function() {
        const e = this._timeToEventStart(),
            t = (e / 6e4).toFixed(0),
            n = (e / 36e5).toFixed(0),
            i = (e / 864e5).toFixed(0),
            o = (new Date).toDateString() === this.startTime.toDateString();
        return i > 1 || !o ? ("This event is scheduled for\n" + `${function(e="",t={}){var n;if((null==(n=pt.en)?void 0:n[e])&&(e=pt.en[e]),Object.keys(t).forEach(n=>{e=e.replace(new RegExp(` {
                $ {
                    n
                }
            }
            `,"g"),t[n])}),e.match(/\{\w+}/))throw new Error("Missing token definition.");return e}(bo[this.startTime.getMonth()])}` + " " + `${this.startTime.getDate()}` + "\nat " + `${To(this.startTime)}`).split("\n") : n > 1 && o ? ("This event is scheduled for\nToday\nat " + `${To(this.startTime)}`).split("\n") : ("This event will start in\n" + `${t}` + " " + `${t>1?"minutes":"minute"}`).split("\n")
    }, t._onLiveStreamOnline = function() {
        this.hide()
    }, t._onLiveStreamOffline = function() {
        this.textAlert.show("Live stream offline"), o.iOS && K.element && (this.player.events.fire(Xt._willExitFullscreen), K.exit())
    }, t._onLiveStreamEnded = function() {
        this.textAlert.show("Live event ended")
    }, t._setLiveEventSchedule = function(e) {
        e ? this._timeToEventStart() > 6e4 ? (this.textAlert.hide(), this._displayTimeAlert()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) : (this.timeAlert.hide(), this.textAlert.show(""))
    }, e
}();

function ur(e, t) {
    var n, i = t.querySelector(".vp-notification");

    function r(e, r) {
        if (null !== t.parentElement.offsetParent) {
            t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
            var s = function(e) {
                    var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                        i = t.clientHeight;
                    return t.clientHeight > t.clientWidth && (i = t.clientWidth), {
                        height: Math.round(i * n),
                        width: Math.round(i * n * 1.6)
                    }
                }(e),
                l = "width:" + s.width + "px;height:" + s.height + "px";
            i.style.cssText = l, i.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || function(e, t) {
                var n = e.querySelector(".hour-hand"),
                    i = e.querySelector(".minute-hand");
                if (n && i) {
                    var r = t ? 1 : -1,
                        a = new Date,
                        s = Math.abs(a.getHours() - 12),
                        l = a.getMinutes(),
                        c = l / 60 * 360 - 135,
                        d = s / 12 * 360 + l / 60 * 5,
                        u = d + 45 * r,
                        p = c + 540 * r;
                    n.style[o.transformProperty] = "rotate(" + d + "deg)", i.style[o.transformProperty] = "rotate(" + c + "deg)", window.requestAnimationFrame((function() {
                        e.classList.add("animate"), o.browser.firefox || o.browser.opera || window.requestAnimationFrame((function() {
                            n.style[o.transformProperty] = "rotate(" + u + "deg)", i.style[o.transformProperty] = "rotate(" + p + "deg)"
                        }))
                    }))
                }
            }(i, "watchlater" === e), clearTimeout(n), t.classList.remove("animate"), window.requestAnimationFrame((function() {
                t.classList.remove("invisible"), n = setTimeout(a, 750)
            }))
        }
    }

    function a() {
        t.classList.add("animate"), t.classList.add("invisible")
    }

    function s() {
        t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), i.innerHTML = "", i.classList.remove("filled"), i.classList.remove("animate"), e.events.fire(Xt._notificationHidden)
    }
    return be(t).on("transitionend", (function(e) {
        i.contains(e.target) && "height" === e.propertyName ? setTimeout(a, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(s)
    })), e.events.on(Xt._liked, (function(e) {
        e || r("like", ho.render("icon_heart"))
    })), e.events.on(Xt._unliked, (function(e) {
        e || r("unlike", ho.render("icon_broken_heart"))
    })), e.events.on(Xt._addedToWatchLater, (function(e) {
        e || r("watchlater", ho.render("icon_clock"))
    })), e.events.on(Xt._removedFromWatchLater, (function(e) {
        e || r("unwatchlater", ho.render("icon_clock"))
    })), e.events.fire(Xt._notificationModuleReady), {}
}

function pr(e, t, n, i) {
    var o = !1;
    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
    var r = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var r = e.changedTouches[0].pageX - window.pageXOffset,
                    a = e.changedTouches[0].pageY - window.pageYOffset,
                    s = document.elementFromPoint(r, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e), o = !0, t
        },
        a = function(e) {
            if (!o) return n.call(this, e);
            o = !1
        };
    (t = "function" == typeof t ? null : t) ? be(e).on("click", t, a).on("touchend", t, r): be(e).on("click", a).on("touchend", r)
}

function vr(t, n) {
    const i = h();
    let r = !1,
        a = !1;

    function s(e) {
        Ct(e, "facebook", {
            width: 580,
            height: 400
        })
    }

    function l(e) {
        Ct(e, "twitter", {
            width: 550,
            height: 420
        })
    }

    function c(e) {
        Ct(e, "tumblr", {
            width: 540,
            height: 600
        })
    }

    function d(e) {
        const n = t.element.querySelector(".vp-outro-wrapper");
        return "player_embed" + (n && n.classList.contains("in") ? "_end_screen" : "_share_overlay") + (e ? "_button" : "_keyboard")
    }
    let u = {
        get events() {
            return i
        },
        setup() {
            var i;
            n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
            const o = n.querySelector(".js-embedCopy");
            o && (o.style.width = function(t, n, i = 2) {
                n = Object.keys(n).map(e => n[e]);
                const o = t.cloneNode();
                o.style.visibility = "hidden", o.style.padding = 0, t.parentElement.appendChild(o);
                let r = n.map(e => (o.innerText = e, o.clientWidth));
                const a = Math.max.apply(Math, e(r)),
                    s = window.getComputedStyle(t),
                    l = parseFloat(s.fontSize);
                return t.parentElement.removeChild(o), `${(a+i)/l}em`
            }(o, ["Copy", "Copied!"])), t.events.on(Xt._facebookButtonPressed, s).on(Xt._twitterButtonPressed, l).on(Xt._tumblrButtonPressed, c)
        },
        destroy() {
            t.events.off(Xt._facebookButtonPressed, s).off(Xt._twitterButtonPressed, l).off(Xt._tumblrButtonPressed, c)
        },
        getShareData(e = {}, n) {
            var i, a;
            const s = t.config.video.title,
                l = t.config.video.owner.name,
                c = t.config.video.share_url;
            r = document.queryCommandSupported && document.queryCommandSupported("copy");
            const d = t.config.video.unlisted_hash ? `?h=${t.config.video.unlisted_hash}` : "";
            return e.template = ho.render("share", {
                url: t.config.video.url,
                shareUrl: c,
                playerShareUrl: `https://${t.config.player_url}/video/${t.config.video.id}/share`,
                unlistedHashParam: d,
                title: s,
                owner: l,
                embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed,
                embedOnly: null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only,
                embedCode: ye(t.config.video.embed_code),
                copyButton: r,
                customizeEmbed: !!t.config.video.url,
                readOnly: !o.touch,
                facebookIcon: ho.render("icon_facebook", {
                    title: "Share on Facebook"
                }),
                twitterIcon: ho.render("icon_twitter", {
                    title: "Share on Twitter"
                }),
                tumblrIcon: ho.render("icon_tumblr", {
                    title: "Share on Tumblr"
                }),
                emailIcon: ho.render("icon_mail", {
                    title: "Share via Email"
                }),
                embedIcon: ho.render("icon_embed", {
                    title: "Get embed code"
                }),
                strings: {
                    share: "Share",
                    emailSubject: "Check out “" + s + "” from " + l + " on Vimeo",
                    emailBody: "Check out “" + s + "” from " + l + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + c + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                    embedTitle: "Embed",
                    embedSubtitle: "Add this video to your site with the embed code below.",
                    copy: "Copy",
                    copySuccess: "Copied!",
                    customize: `<a href="${t.config.video.url}#embed" target="_blank" rel="noopener" aria-describedby="new-window">` + "Customize this embed</a> on Vimeo"
                }
            }), e._firstFocusElement = ".js-facebook", (null == (a = t.config.embed.settings.share) ? void 0 : a.embed_only) && (e.wrapperClass = "embed-only", e._firstFocusElement = ".js-embed-input"), e
        },
        showShareView() {
            n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Xt._shareViewShown)
        },
        showEmbedView() {
            t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Xt._embedViewShown)
        },
        buildBPLocationString: d
    };
    return function() {
        var e;
        be(n).on("transitionend", ".js-share-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Xt._embedViewEnd), this.classList.add("cloaked"))
        })).on("transitionend", ".js-embed-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Xt._shareViewEnd), this.classList.add("cloaked"), Tt(n))
        })).on(["copy", "cut"], "input[name=embed_code]", (function() {
            Zo("workflow.copy_video_embed_code", t, {
                location: d(a),
                path: window.location.pathname
            }), a = !1, t.events.fire(Xt._embedCodeCopied)
        })), pr(n, ".js-facebook", (function() {
            return t.events.fire(Xt._facebookButtonPressed, this.href), gt(), !1
        })), pr(n, ".js-twitter", (function() {
            return t.events.fire(Xt._twitterButtonPressed, this.href), gt(), !1
        })), pr(n, ".js-tumblr", (function() {
            return t.events.fire(Xt._tumblrButtonPressed, this.href), gt(), !1
        })), pr(n, ".js-email", (function() {
            return t.events.fire(Xt._emailButtonPressed), window.top.location = this.href, gt(), !1
        })), pr(n, ".js-embed", (function() {
            return t.events.fire(Xt._embedButtonPressed), u.showEmbedView(), gt(), !1
        })), pr(n, ".js-embedCopy", (function() {
            if (r) {
                n.querySelector("input[name=embed_code]").select(), a = !0;
                try {
                    document.execCommand("copy") && function() {
                        t.events.fire(Xt._embedCodeCopied);
                        var i = n.querySelector(".js-embedCopy");
                        i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(e), e = setTimeout((function() {
                            i.innerHTML = i.getAttribute("data-label")
                        }), 2e3)
                    }()
                } catch (ke) {
                    a = !1
                }
                return document.activeElement.blur(), !1
            }
        })), o.touch ? be(n).on("focus", "input[name=embed_code]", (function() {
            var e = this;
            setTimeout((function() {
                e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly")
            }), 0)
        })).on("blur", "input", (function() {
            this.removeAttribute("readonly")
        })) : be(n).on("click", "input[name=embed_code]", (function() {
            this.setSelectionRange(0, 9999)
        }))
    }(), u
}

function mr(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var i = Promise.resolve(e());
        return t ? i.then(t) : i
    } catch (ke) {
        return Promise.reject(ke)
    }
}

function fr() {}

function hr(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function _r(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function gr(e, t, n) {
    const i = hr((function() {
            return m = !0, l === on.BEGINNING ? (d.innerHTML = "", void e.events.fire(Ut._reset)) : function(e, t) {
                var n = function() {
                    if (L()) return mr(r, (function() {
                        i()
                    }))
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                let i = function() {
                    if ([on.VIDEOS, on.THREEVIDEOS, on.PROMOTED].includes(l)) {
                        var t;
                        if (0 === ((null == (t = v) ? void 0 : t.contexts) || []).reduce((function(e, t) {
                                return e + t.videos.length
                            }), 0)) return null;
                        v.showFollowButton = !e.config.user.owner && e.config.user.logged_in, v.strings = {
                            follow: "Follow",
                            following: "Following",
                            unfollow: "Unfollow"
                        }
                    }
                    return v && (v.target = !e.config.embed.on_site), E = l, [on.THREEVIDEOS, on.PROMOTED].includes(l) && (E = on.VIDEOS), ho.render("outro_" + E, v)
                }();
                i && (d.innerHTML = i, d.setAttribute("data-type", E), n.classList.remove("hidden"), n.removeAttribute("hidden"), h = !0, [on.VIDEOS, on.THREEVIDEOS].includes(l) ? function() {
                    const e = document.querySelector(".js-outro-followWrap");
                    if (e) {
                        const t = window.getComputedStyle(e),
                            n = parseFloat(t.fontSize);
                        e.style.width = `${e.clientWidth/n}em`
                    }
                }() : l === on.LINK ? (t.watch("ui.outro.isLinkTitleVisible", S), t.watch("ui.outro.isLinkDescriptionVisible", A), S(t.get("ui.outro.isLinkTitleVisible")), A(t.get("ui.outro.isLinkDescriptionVisible"))) : l === on.SHARE && function() {
                    const e = n.querySelector(".js-outro-content"),
                        t = s.getShareData();
                    e.innerHTML = t.template, s.setup()
                }(), window.requestAnimationFrame((function() {
                    window.requestAnimationFrame((function() {
                        n.classList.add("in"), I()
                    }))
                })))
            }))
        })),
        r = hr((function() {
            if (e.config.embed.outro === on.VOD) return l = on.VOD, void(v = T(l));
            b = !0;
            const t = e.config.embed.email_capture_form || e.config.embed.email || {},
                n = e.config.video.unlisted_hash ? `h=${e.config.video.unlisted_hash}&` : "",
                i = `https://${e.config.player_url}/video/${e.config.video.id}/outro?${n}on_site=${e.config.embed.on_site}&type=${e.config.embed.outro}&email=${t?1:0}`;
            return function(e) {
                if (e && e.then) return e.then(fr)
            }(function(t, n) {
                try {
                    var o = _r(a(i, {
                        withCredentials: !0
                    }), (function(t) {
                        return _r(t.json(), (function(t) {
                            l = t.type, (v = T(l, t.data)) && (v.bgimage && Cn(v.bgimage), v.contexts && v.contexts.forEach(e => {
                                e.videos.forEach(e => {
                                    Cn(e.thumbnail)
                                })
                            })), Vo(e.config.video.owner) && function(t, n) {
                                [on.VIDEOS, on.THREEVIDEOS, on.PROMOTED].includes(t) && n.contexts && n.contexts.forEach(t => {
                                    t.videos.reduce((t, n) => t.then(function(t) {
                                        return () => e.preloadVideo("auto", t.id, {
                                            autoplay: !0
                                        }).catch(e => {})
                                    }(n)), Promise.resolve())
                                })
                            }(l, v)
                        }))
                    }))
                } catch (ke) {
                    return
                }
                return o && o.then ? o.then(void 0, n) : o
            }(0, (function(e) {})))
        }));
    var s, l, c, d = n.querySelector(".vp-outro"),
        v = null,
        m = !1,
        h = !1,
        _ = !1,
        g = !1,
        b = !1,
        y = f(I, 250);
    let w = !1,
        E = null,
        C = e.config.request.ads instanceof Object,
        k = !1;
    const L = () => !b && null === v && !e.config.embed.loop;

    function T(t, n = {}) {
        const {
            width: i,
            height: r
        } = wn(e.element.clientWidth * o.devicePixelRatio, e.element.clientHeight * o.devicePixelRatio);
        if (n.img_base && (n.bgimage = En({
                width: i,
                height: r,
                baseUrl: n.img_base
            })), t === on.VOD) {
            const t = void 0 !== e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                i = e.config.video.vod.is_coming_soon,
                o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available;
            let r = "Coming soon to Vimeo On Demand.";
            i && o && (r = "Coming soon to Vimeo On Demand on " + o + "."), t && (r = "Pre-order now. Watch on " + o + "."), n = {
                purchased: e.config.user.purchased,
                title: e.config.video.vod.feature_title,
                url: e.config.video.vod.url,
                currency: e.config.request.currency,
                countries: e.config.video.vod.countries,
                country: e.config.request.country,
                buttons: e.config.video.vod.purchase_options,
                translationMap: e.config.request.dynamic_translation_map,
                isPreorder: t,
                isComingSoon: i,
                releaseDate: o,
                strings: {
                    watch: t ? "Watch on " + o : "Watch Now",
                    preRelease: r
                }
            }
        }
        return [on.VIDEOS, on.THREEVIDEOS, on.PROMOTED].includes(t) && (e.config.user.following = n.following, (n = {
            contexts: Array.isArray(n) ? n : [n],
            owner: e.config.video.owner.id,
            bgimage: n.bgimage,
            following: n.following
        }).contexts && n.contexts.forEach(e => {
            e.videos.forEach(t => {
                if (t.fullTitle = t.title, t.byline = "", t.owner.id !== n.owner && (t.fullTitle = t.title + " from " + t.owner.name, t.byline = "from " + t.owner.name), t.thumbnail_base) {
                    const n = Math.round(i / e.videos.length);
                    t.thumbnail = En({
                        width: n,
                        height: Math.round(n / 1.778),
                        baseUrl: t.thumbnail_base
                    })
                }
            })
        })), t === on.LINK && (n.url = Oo(n.url), n.url2 = Oo(n.url2)), t === on.SHARE && (n.strings = {
            back: "Back"
        }), n
    }

    function S(e) {
        d.classList.toggle("vp-outro--link-medium", e)
    }

    function A(e) {
        d.classList.toggle("vp-outro--link-large", e)
    }

    function P() {
        if (h) return s.destroy(), m = !1, _ = !1, h = !1, void window.requestAnimationFrame((function() {
            n.classList.remove("in"), e.events.fire(Xt._outroHidden), x()
        }));
        m && (m = !1, e.events.fire(Xt._outroHidden))
    }

    function I() {
        var t;
        if (!_ && n.clientWidth) {
            be(window).off("resize", y), _ = !0;
            var i = [];
            (null == (t = v) ? void 0 : t.contexts) && v.contexts.forEach(e => {
                e.videos && e.videos.forEach(e => {
                    var t = e.id,
                        n = d.querySelector('[data-video-id="' + t + '"]');
                    n && n.clientWidth > 0 && i.push(t)
                })
            }), e.events.fire(Xt._outroDisplayed, i)
        }
    }

    function R() {
        const t = e.config.embed.email_capture_form || e.config.embed.email || {};
        "after-video" !== t.position && "after" !== t.position || w ? e.events.fire(Ut._showOutro) : (w = !0, c = setTimeout(() => {
            e.events.fire(Xt._showEmailCaptureForm), e.events.once(Xt._emailCaptureEnd, () => {
                e.events.fire(Ut._showOutro)
            })
        }, 250))
    }

    function x() {
        be(window).off("resize", y), be(window).on("resize", y)
    }
    return e.events.on(u, (function() {
        [on.NOTHING, on.BEGINNING, on.EMAIL].includes(e.config.embed.outro) && (l = e.config.embed.outro, v = !1)
    })), e.events.on(Xt._allAdsCompleted, () => {
        k = !0
    }), e.events.on(p.TIME_UPDATE, hr((function({
        currentTime: e,
        duration: t
    }) {
        return g = !1, w = !1,
            function(n) {
                var i = function() {
                    if (e >= t - 10 && L()) return mr(r, (function() {
                        g && R()
                    }))
                }();
                if (i && i.then) return i.then(fr)
            }()
    }))), e.events.on(Xt._ended, () => {
        if (g = !0, C && !k) return e.events.once(Xt._allAdsCompleted, R), void(C = !1);
        R()
    }), e.events.on(Xt._loadVideo, () => {
        clearTimeout(c)
    }), e.events.on(Xt._webinarRegistrantBlocked, () => {
        e.config.video.webinar && clearTimeout(c)
    }), e.events.on(Ut._showOutro, (function(t, n) {
        e.performDelegateAction(Kt, () => {
            t && (l = t, v = null, b = !1), n && n.data && (v = T(t, n.data)), i()
        })
    })), be(n).on("click", ".js-videoLink", (function(t) {
        const n = parseInt(this.getAttribute("data-video-id"), 10);
        e.events.fire(Xt._outroVideoPressed, n), Vo(e.config.video.owner) && (t.preventDefault(), e.loadVideo(n, {
            autoplay: !0
        }))
    })), be(n).on("click", ".js-cta", (function(t) {
        e.events.fire(Xt._outroCtaPressed, this.href)
    })), be(n).on("click", ".js-link", (function(t) {
        e.events.fire(Xt._outroLinkPressed, this.href)
    })), be(n).on("click", ".js-imageLink", (function(t) {
        e.events.fire(Xt._outroImagePressed, this.href)
    })), be(n).on("transitionend", (function(e) {
        n.classList.contains("in") || (n.classList.add("hidden"), n.setAttribute("hidden", ""))
    }), !1), e.events.on([Ut._hideOutro, Ut._reset, p.PLAY, p.SEEKED, Xt._scrubbingStarted], P), e.events.on(Xt._outroDisplayed, (function() {
        e.element.classList.add("player-outroVisible")
    })).on(Xt._outroHidden, (function() {
        e.element.classList.remove("player-outroVisible")
    })), pr(n, ".js-outro-follow", (function() {
        e.events.fire(Xt._followButtonPressed)
    })), be(n).on("mouseleave", ".js-outro-follow", (function(e) {
        const t = document.querySelector(".js-outro-follow");
        t && t.classList.remove("vp-outro-follow--activated")
    })), e.events.on(Xt._followed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && (e.setAttribute("aria-pressed", !0), e.classList.add("vp-outro-follow--activated"))
    })), e.events.on(Xt._unfollowed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && e.setAttribute("aria-pressed", !1)
    })), e.events.on(Ut._showOverlay, (function() {
        setTimeout((function() {
            n.classList.add("hidden")
        }), 150)
    })), e.events.on(Xt._overlayClosed, (function() {
        n.classList.contains("in") && n.classList.remove("hidden")
    })), e.events.on(Ut._reset, (function() {
        v = null, b = !1, C = e.config.request.ads instanceof Object
    })), pr(n, ".js-vod-button", (function() {
        var t = this.getAttribute("data-product-id");
        return e.events.fire(Xt._vodButtonPressed, t), !1
    })), pr(n, ".js-vod-watch", (function() {
        if (!("date_available" in e.config.video.vod)) return P(), e.events.fire(Xt._vodButtonPressed), !1
    })), d && ((s = new vr(e, d)).events.on(Xt._embedViewShown, (function() {
        e.config.embed.settings.share.embed_only || (n.querySelector(".js-back").classList.remove("cloaked"), n.classList.add("embed-active"))
    })).on(Xt._shareViewShown, (function() {
        n.classList.remove("embed-active")
    })), pr(n, ".js-back", (function() {
        return s.showShareView(), !1
    })), s.events.on(Xt._shareViewEnd, (function() {
        n.querySelector(".js-back").classList.add("cloaked")
    }))), x(), {}
}
let br = 0;

function yr(e = "b") {
    return `${e}${++br}`
}
yr(), yr(), yr(), yr(), yr(), yr(), yr();
const wr = yr(),
    Er = yr(),
    Cr = yr(),
    kr = yr(),
    Lr = yr(),
    Tr = yr(),
    Sr = yr(),
    Ar = yr(),
    Pr = yr(),
    Ir = yr();
var Rr = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: wr,
        TELECINE_READY: Er,
        TELECINE_VIDEO_INIT: Cr,
        PLAY_INITIATED: kr,
        QUALITY_CHANGED: Lr,
        FORCED_QUALITY: Tr,
        CUE_CHANGED: Sr,
        CAPTIONS_CHANGED: Ar,
        SPATIAL_PLAYBACK_TOGGLED: Pr,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: Ir
    }),
    xr = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
const Dr = (d(d(d(d(d(d(d(d(d({}, p), v), we), xr), I), S), P), R), Rr), d(d({}, we), xr));

function Nr(e, t = null) {
    return "after-video" === (t = t || e.position) || "after" === t
}

function Mr(e) {
    return En({
        height: 72 * o.devicePixelRatio,
        width: 640 * o.devicePixelRatio,
        baseUrl: e
    })
}
let Or = function() {
    function e(e) {
        this.element = e, this.cachedElements = {}
    }
    var t = e.prototype;
    return t.getElement = function(e) {
        return this.cachedElements[e] || (this.cachedElements[e] = this.element.querySelector(e)), this.cachedElements[e]
    }, t.removeElement = function(e) {
        this.getElement(e) && (this.cachedElements[e].remove(), this.cachedElements[e] = null)
    }, t.updateAll = function(e, t) {
        this.updateTitle(e.text || e.custom_message), this.updateSkipBtn(e.allow_skip || e.skippable, e.position), this.updatePrivacyPolicy(e.privacy_policy), this.updateCustomLogo(e.custom_logo), this.updateFields(e.custom_fields, t)
    }, t.updateTitle = function(e) {
        const t = this.getElement(".vp-email-capture-title");
        e && t ? t.textContent = zr(e) : !e && t && (t.textContent = "")
    }, t.updateSkipBtn = function(e, t) {
        const n = this.getElement(".vp-email-capture-form-button--cancel");
        if (e && n) n.value = Nr(null, t) ? "Skip" : "Skip to video";
        else if (e && !n) {
            const e = this.getElement(".vp-email-capture-form-skip");
            let n = ho.render("email_capture_skip", {
                position: t,
                skipText: "Skip",
                skipToVideoText: "Skip to video",
                positionIsAfter: Nr(null, t)
            });
            e.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-form-button--cancel")
    }, t.updatePrivacyPolicy = function(e) {
        const t = this.getElement(".vp-email-capture-privacy-policy");
        if (e && t) t.href = encodeURI(e);
        else if (e && !t) {
            const t = this.getElement(".vp-email-capture-disclaimer-wrapper"),
                n = ho.render("email_capture_privacy_policy", {
                    text: "Privacy policy",
                    url: e
                });
            t.insertAdjacentHTML("beforeend", n)
        } else !e && t && this.removeElement(".vp-email-capture-privacy-policy")
    }, t.updateCustomLogo = function(e) {
        const t = this.getElement(".vp-email-capture-title-logo-wrap"),
            n = this.getElement(".vp-email-capture-logo");
        if (e && n) n.src = Mr(e);
        else if (e && !n && t) {
            const n = ho.render("email_capture_logo", {
                url: Mr(e)
            });
            t.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-logo")
    }, t.updateFields = function(e, t) {
        if (e) {
            let n = this.getElement(".vp-email-capture-form-fields-slider").children;
            n.length && Array.from(n).forEach(t => {
                e.some(e => t.dataset.id === String(e.id)) || t.remove()
            }), e.forEach(e => {
                this.updateField(e, t)
            })
        }
        t()
    }, t.updateField = function(e) {
        const {
            id: t,
            position_in_form: n
        } = e, i = this.getElement(".vp-email-capture-form-fields-slider");
        let o = this.element.querySelector(`[for=custom-field-${t}]`),
            r = this.element.querySelector(`#custom-field-${t}`);
        if (o && r) {
            let t = r.parentElement,
                o = i.children;
            const s = Array.from(o).indexOf(t),
                l = ho.render("email_capture_field", {
                    field: e
                });
            var a = document.createElement("div");
            a.innerHTML = l, i.children[s].replaceWith(a.children[0]), s !== n && i.insertBefore(o[s], o[n])
        } else {
            const t = ho.render("email_capture_field", {
                field: e
            });
            n === i.children.length ? i.insertAdjacentHTML("beforeend", t) : i.children[n].insertAdjacentHTML("beforebegin", t)
        }
    }, t.updateWebinarStartTime = function(e) {
        const t = this.getElement(".vp-email-capture-wrapper"),
            n = t.querySelectorAll(".vp-email-capture-start-time"),
            i = Po(new Date(e));
        if (e && n.length) Array.from(n).forEach(e => {
            e.textContent = i
        });
        else if (e && !n.length) {
            const e = this.getElement(".vp-email-capture-title-logo-wrap"),
                n = t.querySelectorAll(".vp-email-capture-thank-you-title");
            let o = ho.render("email_capture_start_time", {
                startTime: i
            });
            e.insertAdjacentHTML("afterbegin", o), Array.from(n).forEach(e => {
                o = ho.render("email_capture_start_time", {
                    startTime: i
                }), e.insertAdjacentHTML("afterbegin", o)
            })
        } else !e && n.length && Array.from(n).forEach(e => {
            e.parentNode.removeChild(e)
        })
    }, t.clearCachedElements = function() {
        this.cachedElements = {}
    }, e
}();

function Br(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Vr(e, t) {
    try {
        var n = e()
    } catch (ke) {
        return t(ke)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Fr() {}
const Ur = "vp-email-capture-form-dropdown-option-active";

function qr(e) {
    if (e && e.then) return e.then(Fr)
}

function Hr(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}
const $r = {
    skip_to_video: "Skip to video",
    skip: "Skip",
    next: "Next",
    back: "Back",
    submit: "Submit",
    disclaimer: "Share your information with the owner of this video",
    privacy_policy: "Privacy policy",
    thank_you: "Thank you!",
    video_starts: "Video starts in",
    successful: "Your information was successfully submitted.",
    step: "Step",
    of: "of",
    aria_label: "Email capture form",
    webinar: {
        disclaimer: 'I agree that the host will see my viewing activities for this webinar, and I agree to <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/terms" target="_blank" rel="noopener">Vimeo\'s Terms of Service</a> and <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
        host_privacy_policy: "and the webinar host's Privacy Policy",
        reg_full: "Sorry, registration is full.",
        reg_login_title: "Enter your email to see if you’re registered",
        reg_thank_you: "Thanks for registering!",
        reg_thank_you_subtitle: "Check your email for your registration confirmation. We'll also send you a reminder and a link to the event 24 hours before it begins.",
        reg_bypass: "Already registered?",
        reg_go_back: "Register for this event",
        login_thank_you: "Great news! You’re already registered.",
        login_thank_you_subtitle: "Check your email for your registration confirmation.",
        email_not_valid: "Email address not valid. Please try another email address.",
        email_not_registered: "Email not registered for this event",
        opt_in: "Opt into emails from this event host",
        event_is_live: "This event is live",
        unscheduled: "Unscheduled",
        add_to_calendar: "Add to calendar",
        opt_in_error: "Opting in is required to register for this webinar.",
        opt_in_login_error: "Opting in is required to check your registration status."
    }
};

function Wr(e = []) {
    return e.map(e => d(d({}, e), {}, {
        field_label: jr(e.field_name)
    })).sort((e, t) => e.position_in_form - t.position_in_form)
}

function jr(e) {
    switch (e) {
        case "Email address":
            return "Email address";
        case "First name":
            return "First name";
        case "Last name":
            return "Last name";
        default:
            return e
    }
}

function zr(e) {
    switch (e) {
        case "Sign up for our mailing list":
            return "Sign up for our mailing list";
        case "Register to watch live":
            return "Register to watch live";
        default:
            return e
    }
}

function Yr(e, t, n) {
    var i, o, r, s;
    const l = Hr((function() {
            Tt(n);
            const i = Z(y),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function s(t) {
                A.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? Y(!1) : (k.setCustomValidity("Uh oh. There was a problem. Please try again."), k.setAttribute("aria-invalid", "true"), e.events.fire(Xt._emailCaptureFailure), F())
            }
            const l = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/login?context=${encodeURIComponent(v)}&time=${o}&expires=${r}`;
            return A.classList.add("loading"), qr(Vr((function() {
                return Br(a(l, {
                    method: "POST",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Br(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(mi(!0, n.video.webinar.registrant)), e.events.fire(Xt._webinarFormSuccess, n), p ? (z(), e.events.fire(Xt._playButtonPressed)) : Y(!1)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return qr(Vr((function() {
                    return Br(e.response.json(), (function(e) {
                        s(e)
                    }))
                }), (function() {
                    s()
                })))
            })))
        })),
        c = Hr((function() {
            Tt(n);
            const i = Z(y, {
                    isRegistration: !0
                }),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function s(t) {
                A.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? Y(!0) : 3158 === (null == t ? void 0 : t.error_code) ? G() : (k.setCustomValidity("Uh oh. There was a problem. Please try again."), k.setAttribute("aria-invalid", "true"), e.events.fire(Xt._emailCaptureFailure), F())
            }
            const l = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/registration?context=${encodeURIComponent(v)}&time=${o}&expires=${r}`;
            return A.classList.add("loading"), qr(Vr((function() {
                return Br(a(l, {
                    method: "PUT",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Br(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(mi(!0, n.video.webinar.registrant)), e.events.fire(Xt._webinarFormSuccess, n), p ? (z(), e.events.fire(Xt._playButtonPressed)) : Y(!0)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return qr(Vr((function() {
                    return Br(e.response.json(), (function(e) {
                        s(e)
                    }))
                }), (function() {
                    s()
                })))
            })))
        })),
        d = h(),
        u = !H(null == (i = e.config.video.webinar) ? void 0 : i.registration_form),
        p = "started" === (null == (o = e.config.video.webinar) ? void 0 : o.status),
        v = e.config.embed.context,
        m = ["Vimeo\\Controller\\VideoSettings\\ServiceController.getInteractions", "Vimeo\\Controller\\Api\\Resources\\Webinar\\WebinarController."].includes(v);
    let f, _, g, b, y, w, E, C, k, L, T, S, A, P, I, R, x = new Or(n),
        D = !1,
        N = !1,
        M = V(e.config),
        O = null == (r = M) || null == (s = r.custom_fields) ? void 0 : s[E - 1],
        B = e.config.view === en.webinarFull;

    function V(e) {
        var t, n, i;
        return u ? (null == (i = e.video.webinar) ? void 0 : i.registration_form) || {} : (null == (t = e.embed) ? void 0 : t.email_capture_form) || (null == (n = e.embed) ? void 0 : n.email) || {}
    }

    function F() {
        var e;
        const t = T.querySelector(".vp-validation-bubble-message"),
            n = null == (e = O) ? void 0 : e.field_type;
        t.innerHTML = k.validationMessage || ("dropdown" === n ? "This field is required." : "There is an error with this input."), T.classList.remove("hidden"), T.classList.remove("vp-validation-bubble-animate"), window.requestAnimationFrame((function() {
            T.classList.add("vp-validation-bubble-animate")
        })), k.focus()
    }

    function U() {
        C.classList.add("vp-email-capture-input-invalid"), F()
    }

    function q() {
        T.classList.remove("vp-validation-bubble-animate"), C.classList.remove("vp-email-capture-input-invalid"), S && (I.classList.remove("vp-webinar-compliance-checkbox-invalid"), S.classList.remove("vp-opt-in-bubble-animate"), S.classList.add("hidden"))
    }
    const $ = ({
        target: e
    }) => {
        e === g && (g.removeEventListener("transitionend", $), k.focus())
    };

    function W(e, t = !0) {
        var i, o;
        const r = n.querySelector(".vp-email-capture-disclaimer-wrapper"),
            a = n.querySelector(".vp-email-capture-current-step"),
            s = n.querySelector(".vp-email-capture");
        C && (C.setAttribute("aria-hidden", !0), k.tabIndex = -1), E && (!_ && !m || m) && (_ = bt(f).height), E = e, O = null == (i = M) || null == (o = i.custom_fields) ? void 0 : o[E - 1], C = b[E - 1], k = y[E - 1], C && k && (C.setAttribute("aria-hidden", !1), k.tabIndex = 0), window.requestAnimationFrame(() => {
                g.style.transform = `translateY(-${_*(E-1)}px)`, a.textContent = E, L.style.width = `${E/b.length*100}%`
            }), t && g.addEventListener("transitionend", $), s.classList.toggle("vp-email-capture-first-step", 1 === E), u && (r.classList.toggle("hidden", E < b.length), N ? r.classList.add("vp-email-capture-login-disclaimer-wrapper") : (P.classList.toggle("hidden", E === b.length), r.classList.remove("vp-email-capture-login-disclaimer-wrapper"))),
            function() {
                const e = n.querySelector(".vp-email-capture-form-button--back"),
                    t = n.querySelector(".vp-email-capture-form-button--next");
                1 === E && (w.classList.remove("half"), e.classList.remove("show"), e.classList.add("hidden"), e.tabIndex = -1), E > 1 && (w.classList.add("half"), e.classList.remove("hidden"), e.tabIndex = 0, e.setAttribute("aria-hidden", !1), window.requestAnimationFrame(() => {
                    e.classList.add("show")
                })), E < b.length ? (t.tabIndex = 0, t.setAttribute("aria-hidden", !1), A.tabIndex = -1, A.setAttribute("aria-hidden", !0), w.classList.remove("showSubmitBtn")) : (A.tabIndex = 0, A.setAttribute("aria-hidden", !1), t.tabIndex = 1, t.setAttribute("aria-hidden", !0), w.classList.add("showSubmitBtn"))
            }()
    }

    function j() {
        if (!k.required) return !0;
        var e;
        if (u && "dropdown" === (null == (e = O) ? void 0 : e.field_type)) return !(O.required && !k.value.length && (k.setCustomValidity("This field is required."), 1));
        return "email" !== k.type || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(k.value) ? !(k.checkValidity && !k.checkValidity() && ((k.validity.valueMissing || k.validity.typeMismatch) && k.setCustomValidity("This field is required."), k.validity.typeMismatch && k.setCustomValidity("Please enter a valid response."), 1)) : (k.setCustomValidity("Please enter a valid email address."), !1)
    }
    const z = () => {
        be(n).off(["click", "touchend"], ".vp-email-capture-form-button--cancel"), be(n).off(["click", "keydown"], ".vp-email-capture-form-button--next"), be(n).off(["click", "keydown"], ".vp-email-capture-form-button--back"), be(n).off(["click"], ".vp-email-capture-form-button--submit"), be(n).off(["keyup", "blur"], ".vp-email-capture-form-button--next-submit-wrapper"), be(n).off("click", ".vp-email-capture-wrapper"), be(n).off(["keyup", "input", "focus", "blur"], ".vp-email-capture-form-input"), be(n).off("submit", ".vp-email-capture-form"), be(n).off(["keyup", "click", "focus", "blur"], ".vp-disclaimer-checkbox"), be(window).off("resize"), D = !1, d.fire(Xt._emailCaptureEnd)
    };

    function Y(t = !0) {
        let i;
        const o = n.querySelector(".vp-email-capture");
        i = t ? n.querySelector(".vp-email-capture-reg-thank-you") : n.querySelector(".vp-email-capture-login-thank-you"), o.classList.add("hidden"), i.classList.remove("hidden"), e.events.once(Dr.EVENT_STARTED, () => {
            z()
        })
    }

    function G(e = !1) {
        const t = n.querySelector(".vp-email-capture"),
            i = n.querySelector(".vp-email-capture-reg-full");
        e ? (t.classList.remove("hidden"), i.classList.add("hidden")) : (t.classList.add("hidden"), i.classList.remove("hidden")), B = !0
    }

    function K() {
        function t(t) {
            A.classList.remove("loading"), k.setCustomValidity("Uh oh. There was a problem. Please try again."), k.setAttribute("aria-invalid", "true"), e.events.fire(Xt._emailCaptureFailure), F()
        }
        A.classList.add("loading"),
            function(i, o) {
                Tt(n);
                const r = Array.from(y),
                    a = new XMLHttpRequest,
                    {
                        referrer: s,
                        signature: l,
                        timestamp: c,
                        expires: d
                    } = e.config.request,
                    u = `https://${e.config.player_url}/video/${e.config.video.id}/submit-email?signature=${l}&time=${c}&expires=${d}&referrer=${s}`;
                a.open("POST", u + window.location.search, !0);
                const p = {};
                r.forEach(e => {
                    p[e.name] = e.value
                });
                const v = JSON.stringify(p);
                a.setRequestHeader("Content-Type", "application/json"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                    var i;
                    try {
                        i = JSON.parse(a.responseText)
                    } catch (ke) {}! function(i, o) {
                        !1 !== i ? (e.config.embed.email_capture_form = null, e.config.embed.email = null, e.events.fire(Xt._emailCaptureSuccess), function() {
                            const e = n.querySelector(".vp-email-capture"),
                                t = n.querySelector(".vp-email-capture-thank-you");
                            e.classList.add("hidden"), t.classList.remove("hidden"), window.requestAnimationFrame(() => {
                                const e = n.querySelector(".vp-email-capture-video-countdown-timer"),
                                    i = n.querySelector(".vp-email-capture-video-countdown-meter");
                                t.classList.add("in"), e && (i.classList.add("vp-email-capture-video-countdown-meter--active"), e.textContent = 3);
                                let o = 2;
                                const r = setInterval(() => {
                                    o <= 0 ? (z(), clearInterval(r)) : (e && (e.textContent = o), o -= 1)
                                }, 1e3)
                            })
                        }()) : t(o.status)
                    }(i, a)
                }, a.onerror = function(e) {
                    o(e)
                }, a.send(v)
            }(0, t)
    }

    function Z(e, t = {}) {
        const n = {},
            {
                isRegistration: i
            } = t;
        if (Array.from(e).forEach(e => {
                const t = e.name,
                    i = e.value;
                switch (t) {
                    case "email":
                        n.email = i;
                        break;
                    case "First name":
                        n.first_name = i;
                        break;
                    case "Last name":
                        n.last_name = i;
                        break;
                    default:
                        n.data || (n.data = {}), n.data[t] = i
                }
            }), i) {
            const {
                timeZone: e
            } = (new Intl.DateTimeFormat).resolvedOptions(), {
                ancestorOrigins: t
            } = window.location;
            let i;
            n.time_zone = e, i = t && t.length > 0 ? t[t.length - 1] : window === window.parent ? window.location.href : document.referrer, i && (n.webinarRegistrantSource = {
                metadata: {
                    url: i
                },
                type: "Player"
            })
        }
        return JSON.stringify(n)
    }
    const X = e => j() ? (q(), W(E + 1), !0) : (U(), !1),
        J = () => {
            var t, i;
            return E === b.length && (u && !R.getAttribute("checked") ? (R.classList.add("vp-disclaimer-checkbox-invalid"), n.querySelector(".vp-opt-in-bubble-message").innerText = N ? $r.webinar.opt_in_login_error : $r.webinar.opt_in_error, S.classList.remove("hidden"), S.classList.remove("vp-opt-in-bubble-animate"), window.requestAnimationFrame((function() {
                S.classList.add("vp-opt-in-bubble-animate")
            })), I.classList.add("vp-webinar-compliance-checkbox-invalid"), R.focus(), !1) : j() ? ((function(e, t = null) {
                return "before-video" === (t = t || e.position) || "before" === t
            }(M) && !e.config.video.live_event || "started" === (null == (t = e.config.video.live_event) ? void 0 : t.status)) && (e.events.fire(Xt._playButtonPressed), e.events.fire(Xt._pauseButtonPressed)), q(), e.events.fire(Xt._emailCaptureSubmitted), u ? N ? l() : c() : (K(), (Nr(M) || e.config.video.live_event) && "started" !== (null == (i = e.config.video.live_event) ? void 0 : i.status) || e.events.fire(Xt._playButtonPressed)), !1) : (U(), !1))
        };

    function Q(e) {
        N = e;
        let t = M.custom_fields;
        N && (t = [{
                field_name: "Email address",
                required: 1,
                position_in_form: 0,
                id: 1,
                locked: 1
            }]),
            function(e) {
                const t = ho.render("email_capture_fields", {
                    customFields: Wr(e),
                    strings: $r
                });
                document.querySelector(".vp-email-capture-form-fields-slider").innerHTML = t, n.querySelector(".vp-email-capture-total-steps").innerText = e.length, b = n.querySelectorAll(".vp-email-capture-form-custom-field"), y = n.querySelectorAll(".vp-email-capture-form-input"), C = b[E - 1], k = y[E - 1], _ = null, oe(), W(E > b.length ? b.length : E, !1)
            }(t), P.innerHTML = ho.render("webinar_registration_bypass_btn", {
                showWebinarLogin: N,
                regBypass: $r.webinar.reg_bypass,
                regGoBack: $r.webinar.reg_go_back,
                registrationFull: B
            });
        let i = N ? $r.webinar.reg_login_title : M.custom_message;
        document.querySelector(".vp-email-capture-title").innerHTML = ho.render("email_capture_title", {
            title: i
        }), q(), B && G(N), N || ne()
    }
    const ee = () => {
            const e = n.querySelectorAll(".vp-email-capture-form-dropdown-options"),
                t = n.querySelector(".vp-email-capture-form-custom-field");
            e.forEach(e => {
                if ((null == t ? void 0 : t.offsetWidth) && e) {
                    const n = `${Math.ceil(.85*t.offsetWidth)}px`;
                    e.style.width !== n && (e.style.width = n)
                }
            })
        },
        te = e => {
            const t = n.querySelector(`.vp-email-capture-form-dropdown-${e}`),
                i = n.querySelector(`#custom-field-${e}`),
                o = n.querySelector(".vp-email-capture-dropdown-overlay"),
                r = n.querySelector(`#custom-field-options-overlay-${e}`),
                a = n.querySelector(`#custom-field-options-${e}`),
                s = null == a ? void 0 : a.querySelectorAll(".vp-email-capture-form-dropdown-option");
            if (!(i && o && a && s && r)) return;
            let l = -1,
                c = !1;
            ee();
            const d = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.remove(t)
                },
                u = (e, t) => {
                    d(e, t), e[l].classList.add(t), e[l].focus()
                },
                p = () => {
                    c && (c = !1, o.classList.remove("active"), o.setAttribute("aria-expanded", "false"), o.removeChild(a), r.appendChild(a), k.focus(), k.readOnly = !0)
                },
                v = (e, t) => {
                    ! function(e) {
                        e.forEach((function(e) {
                            e.classList.remove("selected")
                        }))
                    }(s), 0 !== t || O.required ? (i.value = e.innerText, C.classList.add("active"), e.classList.add("selected")) : (i.value = "", C.classList.remove("focus"), C.classList.remove("active")), p()
                },
                m = () => {
                    var e;
                    T.classList.add("hidden"), C.classList.remove("vp-email-capture-input-invalid"), o.classList.contains("active") ? (i.value.length ? C.classList.add("focus") : C.classList.remove("focus"), o.classList.remove("active"), o.removeChild(a), r.appendChild(a)) : (o.classList.add("active"), o.appendChild(a), null == (e = s[0]) || e.focus()), c = !0, k.readOnly = !0, o.setAttribute("aria-expanded", "true");
                    const t = Array.from(s).findIndex(e => e.classList.contains("selected"));
                    l = t < 0 ? 0 : t, u(s, Ur)
                },
                f = e => {
                    (null == a ? void 0 : a.contains(e.target)) || p()
                };
            o.removeEventListener("click", f), o.addEventListener("click", f), t.removeEventListener("click", m), t.addEventListener("click", m);
            const h = e => {
                if (c && s.length > 0) {
                    switch (e.code) {
                        case "Escape":
                            p();
                            break;
                        case "ArrowUp":
                            l--, l < 0 && (l = s.length - 1), u(s, Ur);
                            break;
                        case "ArrowDown":
                        case "Tab":
                            l++, l > s.length - 1 && (l = 0), u(s, Ur);
                            break;
                        case "Enter":
                        case "Space":
                            d(s, Ur), l > -1 && (s[l].click(), l = -1)
                    }
                    e.preventDefault()
                }
            };
            a.removeEventListener("keydown", h), a.addEventListener("keydown", h);
            const _ = e => {
                c || "Enter" !== e.code && "Space" !== e.code || (m(), e.preventDefault(), e.stopPropagation())
            };
            i.removeEventListener("keydown", _), i.addEventListener("keydown", _), s.forEach((function(e, t) {
                const n = () => {
                        v(e, t)
                    },
                    i = n => {
                        "Enter" === n.key && v(e, t)
                    };
                e.removeEventListener("click", n), e.addEventListener("click", n), e.removeEventListener("keydown", i), e.addEventListener("keydown", i)
            }))
        };

    function ne() {
        M.custom_fields.forEach(e => {
            "dropdown" === e.field_type && te(e.id)
        })
    }
    let ie = {
        get events() {
            return d
        },
        getData(t = {}, n = {}) {
            var i;
            M = V(e.config);
            const o = n.custom_logo || M.custom_logo,
                r = n.custom_fields || M.custom_fields || [{
                    field_name: "Email address",
                    required: 1,
                    position_in_form: 0,
                    id: 1,
                    locked: 1
                }, {
                    field_name: "Name",
                    required: 0,
                    position_in_form: 1,
                    id: 2,
                    static_field: 1
                }];
            r.sort((e, t) => e.position_in_form - t.position_in_form);
            const a = n.privacy_policy || M.privacy_policy,
                s = (null == (i = e.config.video.webinar) ? void 0 : i.scheduled_start_time) || null,
                l = s ? Po(new Date(s)) : "";
            return t.template = ho.render("email_capture", {
                allowSkip: n.allow_skip || M.skippable || M.allow_skip,
                customLogo: o ? Mr(o) : null,
                text: zr(n.text || M.custom_message || M.text),
                customFields: Wr(r),
                privacyPolicy: a,
                positionIsAfter: Nr(M),
                strings: $r,
                showWebinarForm: u,
                showWebinarLogin: N,
                webinarStartTime: l,
                isWebinarStarted: p,
                registrationFull: n.registration_full || B
            }), x.clearCachedElements(), t._firstFocusElement = ".vp-email-capture-form-input", t.modal = !0, t.logo = !1, t.preventBackgroundClose = !0, t.noblur = n.noblur, t.nofocus = n.nofocus, t
        }
    };

    function oe() {
        const e = n.querySelector(".locked_field"),
            t = n.querySelectorAll(".static_field");
        e && (e.type = "email", e.name = "email"), t && Array.from(t).forEach(e => {
            "Name" === e.name && (e.name = "name")
        })
    }
    return e.events.on(Xt._overlayOpened, i => {
                if ("email-capture" === i) {
                    if (f = n.querySelector(".vp-email-capture-form-fields-wrapper"), g = n.querySelector(".vp-email-capture-form-fields-slider"), b = n.querySelectorAll(".vp-email-capture-form-custom-field"), y = n.querySelectorAll(".vp-email-capture-form-input"), w = n.querySelector(".vp-email-capture-form-button--next-submit-wrapper"), L = n.querySelector(".vp-email-capture-progress-meter"), T = n.querySelector(".vp-validation-bubble"), S = n.querySelector(".vp-opt-in-bubble"), A = n.querySelector(".vp-email-capture-form-button--submit"), P = document.querySelector(".vp-email-capture-reg-bypass-wrapper"), I = document.querySelector(".vp-webinar-compliance-checkbox-border"), R = n.querySelector(".vp-disclaimer-checkbox"), R) {
                        const e = function(e) {
                                return `${(e=(e=(e=e.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g,"")).replace(/[\r\n%#()<>?\\[\\\]^` { |
                                }] / g,
                            encodeURIComponent)
                }
                `}(ho.render("icon_check"));R.style.backgroundImage=`
                url("data:image/svg+xml;,${e}")
                `}oe(),W(1,!1),function(){var i;if(D)return;t.watch("ui.player.breakpoint",()=>{_=bt(f).height,window.requestAnimationFrame(()=>{g.style.transform=`
                translateY(-$ {
                        _ * (E - 1)
                    }
                    px)
                `})});let o=!1;pr(n,".vp-email-capture-form-button--cancel",()=>{var t;z(),(Nr(M)||e.config.video.live_event)&&"started"!==(null==(t=e.config.video.live_event)?void 0:t.status)||e.events.fire(Xt._playButtonPressed)}),be(n).on("click",".vp-email-capture-form-button--next",X),be(n).on("click",".vp-email-capture-form-button--back",e=>{q(),W(E-1)}),be(n).on("keyup",".vp-email-capture-form-button--next-submit-wrapper",e=>{w.classList.add("showfocus")}),be(n).on("blur",".vp-email-capture-form-button--next-submit-wrapper",e=>{w.classList.remove("showfocus")}),be(n).on("click",".vp-email-capture-wrapper",()=>{w.classList.remove("showfocus"),k.classList.remove("showfocus")}),be(n).on("keydown",".vp-email-capture-form-button--back",e=>{o=!0}),be(n).on("keydown",".vp-email-capture-form-button--next",e=>{o=!0}),be(n).on("keyup",".vp-email-capture-form-input",e=>{var t;"dropdown"!==(null==(t=O)?void 0:t.field_type)&&("Enter"===e.key&&E<b.length&&!o&&X(),9!==e.which||k.classList.contains("showfocus")||k.classList.add("showfocus"),o=!1)}),be(n).on("submit",".vp-email-capture-form",e=>!1),be(n).on("click",".vp-email-capture-form-button--submit",J),be(n).on("input",".vp-email-capture-form-input",()=>{k.value.length?(C.classList.add("active"),k.setCustomValidity(""),j()&&q()):C.classList.remove("active")}),be(n).on("focus",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");if(null==e?void 0:e.classList.contains("active")){const t=O.id,i=n.querySelector(`#
                custom - field - options - overlay - $ {
                    t
                }
                `),o=n.querySelector(`#
                custom - field - options - $ {
                    t
                }
                `);e.classList.remove("active"),e.removeChild(o),i.appendChild(o)}C.classList.add("focus")}),be(n).on("blur",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");e&&e.classList.contains("active")||C.classList.remove("focus"),k.value.length?C.classList.add("active"):C.classList.remove("active")}),be(n).on("focus",".vp-disclaimer-checkbox",()=>{I.classList.add("showFocus")}),be(n).on("blur",".vp-disclaimer-checkbox",()=>{I.classList.remove("showFocus")}),be(n).on("click",".vp-disclaimer-checkbox",()=>{if(R.getAttribute("checked"))return R.removeAttribute("checked"),void q();R.setAttribute("checked","checked"),q()}),u&&(be(n).on("click",".vp-email-capture-reg-bypass",()=>{Q(!0)}),be(n).on("click",".vp-email-capture-reg-go-back",()=>{Q(!1)})),null==(i=M.custom_fields)||i.forEach(e=>{"dropdown"===e.field_type&&be(window).on("resize",ee)}),D=!0}(),u&&ne()}}),u&&e.events.on(Ut._updateWebinarStartTime,e=>{x.updateWebinarStartTime(e)}),e.events.on(Ut._setActivePage,e=>{W(e,!1)}),e.events.on(Ut._updateEmailCapture,e=>{if(!n.querySelector(".vp-email-capture-form"))return;u&&N&&Q(!1);const t=Object.assign(e,{custom_fields:Wr(e.custom_fields)});x.updateAll(t,()=>{const e=n.querySelector(".vp-email-capture-form-fields-slider").children;e.length&&Array.from(e).forEach(e=>{"dropdown"===e.dataset.type&&te(e.dataset.id)}),b=n.querySelectorAll(".vp-email-capture-form-custom-field"),y=n.querySelectorAll(".vp-email-capture-form-input"),n.querySelector(".vp-email-capture-total-steps").innerText=b.length,C=b[E-1],k=y[E-1],W(E>b.length?b.length:E,!1)})}),e.events.on(Xt._configChanged,()=>{const n=V(e.config);t.get(hi)||!H(M)&&!H(n)&&M.id===n.id||e.events.fire(Ut._hideOverlay,{name:"email-capture",unmakeModal:!0})}),ie}function Gr(e,t,n){var i,r,a,s=n.querySelector(".vp-overlay-cell"),l=n.querySelector(".vp-overlay"),c=n.querySelector(".vp-overlay-icon-wrapper"),d=c.querySelector(".vp-overlay-icon"),u=n.querySelector(".vp-overlay-logo"),v=!1,m=null,f=null;const h=new vr(e,l),_=new Yr(e,t,l);let g=!1,b=!1;function y(){var e=bt(n),t=bt(l),i=bt(u),o=t.bottom+(e.height-t.bottom)/2;return e.height-o-i.height/2+"px"}function w(){var e=bt(n),t=bt(l),i=bt(c),o=e.height/2,r=e.height-(e.bottom-t.bottom)/2;return{top:o-i.height/2+"px",transform:"translateY("+(r-o)+"px)"}}function E(t,i){n.setAttribute("data-name",t),l.innerHTML=i.template,o.iOS&&K.element&&(e.events.fire(Xt._willExitFullscreen),K.exit()),i.noblur||gt(a=document.activeElement),i.modal&&(n.classList.add("modal"),n.setAttribute("data-modal","true")),i.preventBackgroundClose&&n.setAttribute("data-background-close","false"),i.wrapperClass&&n.classList.add(i.wrapperClass),i.icon.type&&(i.logo?(u.classList.remove("hidden"),c.classList.add("cloaked"),window.requestAnimationFrame((function(){u.innerHTML=ho.render("logo"),u.style.bottom=y()}))):c.classList.remove("cloaked"),c.classList.remove("hidden"),d.innerHTML=i.icon.html,window.requestAnimationFrame((function(){var e=w();c.style.top=e.top,c.style[o.transformProperty]=e.transform})),n.setAttribute("data-icon",i.icon.type),c.setAttribute("data-icon",i.icon.type),d.setAttribute("data-icon",i.icon.type),"private-unlocked"===t&&d.classList.add("open")),n.classList.add("invisible"),n.classList.remove("hidden"),n.removeAttribute("hidden"),n.classList.remove("out"),n.classList.add("in"),f=i,m=t,v=!0,e.events.fire(Xt._overlayOpened,t),e.element.classList.add("player-overlayVisible"),window.requestAnimationFrame((function(){n.classList.remove("invisible"),!i.nofocus&&e.element.contains(a)&&function(e){if(e){const t=n.querySelector(e);t&&t.focus()}}(i._firstFocusElement),window.requestAnimationFrame((function(){l.classList.add("in"),s.classList.add("in")}))}))}function C(){l.classList.remove("in"),l.classList.add("out")}function k(t){if("true"!==n.getAttribute("data-modal")&&v){n.removeAttribute("data-background-close"),s.classList.remove("in"),s.classList.add("out"),C(),n.classList.remove("in"),n.classList.add("out"),clearTimeout(i),i=setTimeout(L,200),(null==t?void 0:t.preventDefault)&&t.preventDefault();var o=n.querySelector(".js-back");o&&o.classList.add("cloaked"),h.destroy(),e.events.fire(Xt._overlayClosed,m),e.element.classList.remove("player-overlayVisible"),v=!1,m=null,f=null,window.requestAnimationFrame((function(){a&&(function(e=document.activeElement,t=null){try{e.focus()}catch(ke){t&&t(ke)}}(a),a=null)}))}}function L(){v||(n.setAttribute("hidden",""),n.removeAttribute("data-name"),n.removeAttribute("data-icon"),n.classList.add("hidden"),n.classList.remove("out"),n.classList.remove("embed-active"),n.classList.remove("modal"),n.classList.remove("embed-only"),s.classList.remove("out"),s.classList.remove("in"),c.removeAttribute("data-icon"),c.classList.add("hidden"),c.classList.remove("animate"),d.removeAttribute("data-icon"),d.innerHTML="",u.classList.add("hidden"),l.classList.remove("out"),l.innerHTML="",e.events.fire(Xt._overlayCleared))}function T(){n.classList.remove("modal"),n.setAttribute("data-modal","false")}function S(e){if("yes"===e.form.getAttribute("data-bubble")){e.form.setAttribute("data-bubble","no");var t=n.querySelector(".vp-validation-bubble");t.querySelector(".vp-validation-bubble-message").innerHTML=e.validationMessage||"There is an error with this input.";var i=bt(e),o=bt(e.form);t.style.left=i.left-o.left+"px",t.style.top=i.height+1+"px",t.classList.remove("hidden"),e.focus(),window.requestAnimationFrame((function(){t.classList.add("vp-validation-bubble-animate")})),P()}}function P(e){var t=n.querySelector(".vp-validation-bubble");if(t){if(e)return clearTimeout(r),void t.classList.remove("vp-validation-bubble-animate");clearTimeout(r),r=setTimeout((function(){t.classList.remove("vp-validation-bubble-animate")}),5e3)}}function I(e){var t=n.querySelector("input[type=password]");return t.form.classList.contains("submitted")?(t.setAttribute("aria-invalid","false"),t.setCustomValidity(""),t.checkValidity&&!t.checkValidity()?(t.setAttribute("aria-invalid","true"),t.validity.valueMissing&&t.setCustomValidity("Please enter the password."),e||S(t),!1):(P(!0),!0)):null}function R(){x(),c.classList.remove("cloaked"),c.classList.add("animate"),window.requestAnimationFrame((function(){c.style[o.transformProperty]="translateY(-10px)"})),T(),C()}function x(){u.classList.add("animate")}function D(){d.classList.add("open")}function N(){d.classList.add("pulled-back")}function M(){const t=e.config.embed.email_capture_form||e.config.embed.email||{};if(e.backbone){const n=t.timecode||0;g=e.backbone.currentTime>n}("before-video"===t.position||"before"===t.position)&&!g&&O()}function O(){t.get("ui.overlay.isEmailCaptureVisible")?e.events.fire(Ut._showOverlay,"email-capture"):b=!0}return e.events.on(Ut._hideOverlay,(function(e={}){e.name&&m!==e.name||(e.unmakeModal&&T(),k())})),e.events.on(Ut._showOverlay,(function(t,n={}){var i=function(){var i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};switch(t){case"share":return E(t,h.getShareData(i,n)),void h.setup();case"private-locked":return void E(t,function(t){return t.icon={type:"lock",html:ho.render("icon_lock")},t._firstFocusElement=".js-login",t.modal=!0,t.logo=!0,t.template=ho.render("private_locked",{action:`
                https: //${e.config.vimeo_url}/log_in`,strings:{title:"Private Video",subtitle:"Log in to watch (if you have permission)",logIn:"Log in"}}),t}(i));case"password":return void E(t,function(t){return t.icon={type:"lock",html:ho.render("icon_lock")},t.template=ho.render("password",{action:`https://${e.config.player_url}/video/${e.config.video.id}/check-password?referrer=${e.config.request.referrer}`,strings:{title:"Password Required",subtitle:"If you’ve got it, enter it below.",password:"Password",watch:"Watch Video"}}),t._firstFocusElement=".js-password",t.modal=!0,t.logo=!!e.config.embed.settings.logo,t}(i));case"private-unlocked":return void E(t,function(e){return e.icon={type:"lock",html:ho.render("icon_lock")},e.template=ho.render("private_unlocked",{strings:{title:"Private Video",subtitle:"You are logged in and have permission to watch (congrats).",watch:"Watch Video"}}),e._firstFocusElement=".js-watch",e}(i));case"error":return void E(t,function(e,t){return e.template=ho.render("error",{title:t.title,message:t.message,aria_label:"Error"}),e._firstFocusElement=".js-close",e.modal=!!t.modal,e.logo=!!t.logo,t.icon&&"lock"===t.icon&&(e.icon={type:"lock",html:ho.render("icon_lock")}),e}(i,n));case"help":return void E(t,function(t){const{like:n,watch_later:i,share:o}=e.config.embed.settings,r={title:"Keyboard Shortcuts",volumeUp:"Volume up",volumeDown:"Volume down",scrubForward:"Scrub forward",scrubBackwards:"Scrub backwards",captions:"Toggle Captions",prefs:"Toggle Preferences Menu",fullscreen:"Toggle fullscreen",viewOnVimeo:"View on Vimeo"};return n&&(r.like="Like"),i&&(r.watchLater="Watch Later"),o&&(r.share="Share"),t.template=ho.render("help",{onSite:e.config.embed.on_site,strings:r}),t._firstFocusElement=".js-close",t}(i));case"email-capture":return void E(t,_.getData(i,n));case"app-redirect":return void E(t,function(t,{redirectUrl:n,title:i,buttonText:o,ignoreText:r,bottomText:a,newWindow:s}={}){const l=Pt(e.config.video.privacy,["disable","unlisted"]);return t.template=ho.render("app_redirect",{hideRedirectButton:l,redirectUrl:n,newWindow:s,strings:{title:i,buttonText:o,ignoreText:r,bottomText:a}}),t.modal=!1,t.logo=!1,t.preventBackgroundClose=!0,t}(i,n));case"webinar-confirmation":return void E(t,function(t){var n,i;const o=(null==(n=e.config.video.webinar)?void 0:n.scheduled_start_time)||null,r=o?Po(new Date(o)):"",a=null==(i=e.config.video.webinar)?void 0:i.custom_logo;return t.template=ho.render("webinar_confirmation",{customLogo:a?Mr(a):null,webinarStartTime:r,strings:{thank_you:$r.webinar.login_thank_you,thank_you_subtitle:$r.webinar.login_thank_you_subtitle}}),t.modal=!0,t}(i));case"webinar-blocked":E(t,function(e){return e.template=ho.render("webinar_ended",{strings:{title:"Live event ended"}}),e.modal=!0,e}(i))}};if(v&&!n.nohide)return"share"!==m&&"help"!==m||m!==t?(e.events.once(Xt._overlayCleared,i),T(),void k()):void k();i()})),be(n).on("input","input",(function(){this.form.classList.add("interacted")})).on("transitionend",".vp-validation-bubble",(function(e){"opacity"===e.propertyName&&"0"===window.getComputedStyle(this,"").opacity&&this.classList.add("hidden")})),e.events.on([Xt._overlayCloseButtonPressed,p.PLAY],k),e.events.on(Xt._privateUnlocked,(function(){"private-locked"===m&&(T(),k())})),e.events.on(Xt._configChanged,(function(){"share"===m&&(f=h.getShareData({modal:!1,template:null,logo:!1,icon:{type:null,html:null}}),l.innerHTML=f.template,h.setup())})),be(window).on("resize",(function(){if(v){u.style.bottom=y();var e=w();c.style.top=e.top,c.style[o.transformProperty]=e.transform}})),be(n).on("transitionend",".vp-overlay-logo",(function(e){"opacity"===e.propertyName&&this.classList.contains("animate")&&(u.classList.add("hidden"),u.classList.remove("animate"))})),be(n).on("transitionend",".vp-overlay-icon-wrapper",(function(e){e.propertyName.indexOf("transform")>-1&&(""===this.style[o.transformProperty]?(this.classList.remove("centered"),"lock"!==this.getAttribute("data-icon")||d.classList.contains("open")||d.querySelector("canvas")?N():setTimeout(D,100)):"translateY(-10px)"===this.style[o.transformProperty]&&(c.classList.add("centered"),c.style[o.transformProperty]=""))})),be(n).on("transitionend",".vp-overlay-icon",(function(e){e.propertyName.indexOf("transform")>-1&&(this.classList.contains("out")?(T(),k()):this.classList.contains("pulled-back")?(d.classList.add("out"),d.classList.remove("pulled-back")):this.classList.contains("open")&&N())})),t.watch("ui.overlay.isEmailCaptureVisible",(function(t){!t&&v&&"email-capture"===m?(b=v,T(),k()):t&&b&&(b=!1,e.events.fire(Ut._showOverlay,"email-capture"))})),e.events.on(Xt._ready,M),e.events.on(Xt._configChanged,M),e.events.on(p.TIME_UPDATE,(function({currentTime:t=0}){const n=e.config.embed.email_capture_form||e.config.embed.email||{};("during-video"===n.position||"during"===n.position)&&(t<n.timecode&&(g=!1),t>=n.timecode&&!g&&(g=!0,O()))})),e.events.on(Xt._showEmailCaptureForm,(function(){O()})),_.events.on(Xt._emailCaptureEnd,()=>{e.events.fire(Xt._emailCaptureEnd),T(),k()}),h.events.on(Xt._embedViewShown,(function(){e.config.embed.settings.share.embed_only||(n.querySelector(".js-back").classList.remove("cloaked"),n.classList.add("embed-active"))})).on(Xt._shareViewShown,(function(){n.classList.remove("embed-active")})),pr(n,".js-back",(function(){return h.showShareView(),!1})),h.events.on(Xt._shareViewEnd,(function(){n.querySelector(".js-back").classList.add("cloaked")})),o.stereoscopic&&(e.events.on(Xt._showAndroidVRDeepLink,(function(){e.events.fire(Ut._showOverlay,"app-redirect",{redirectUrl:e.doNotTrackEnabled?e.config.video.share_url:di(e.config.video.id,"player-spatial-redirect"),title:"Headset viewing isn’t currently supported in your mobile browser.",buttonText:"Watch in the Vimeo app",ignoreText:null,bottomText:null,newWindow:!e.config.embed.on_site})})),be(l).on("click",".app-redirect-ignore",(function(){k()})),be(l).on("click","[data-new-window]",(function(e){return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),!1}))),be(l).on("click",".popup",(function(){return e.events.fire(Ut._openPopup,"login-private-locked"),!1})),be(l).on("click",".password input[type=submit]",(function(){this.form.classList.add("submitted"),this.form.setAttribute("data-bubble","yes"),I(!0)})).on("submit",".password form",(function(){return function(t){if(!I())return!1;var i=t.querySelector("input[type=password]"),o=t.querySelector("input[type=submit]");function r(e){o.classList.remove("loading"),i.setCustomValidity("Uh oh. There was a problem. Please try again."),i.setAttribute("aria-invalid","true"),S(i)}o.classList.add("loading"),function(e,t,i){Tt(n);var o=Array.from(e.querySelectorAll("input")).map((function(e){return e.name?encodeURIComponent(e.name)+"="+encodeURIComponent(window.btoa(function(e){return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(e,t)=>String.fromCharCode("0x"+t))}(e.value))):encodeURIComponent(e.value)})).join("&"),r=new XMLHttpRequest;r.open(e.method,e.action+window.location.search,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.withCredentials=!0,r.timeout=3e3,r.onload=function(){var e;try{e=JSON.parse(r.responseText)}catch(ke){}t(e,r)},r.onerror=function(e){i(e)},r.send(o)}(t,(function(t,n){if(!1!==t){if(e.events.fire(Xt._passwordUnlocked,t),"icon-hidden"===window.getComputedStyle(s,":after").content)return T(),void k();R()}else r(n.status)}),r)}(this),!1})).on(["focus","input"],[".password input[type=email]",".password input[type=password]"],(function(){I()})),pr(l,".unlocked button",(function(){0===bt(d).width?(x(),T(),k()):R(),o.iPad||o.iPhone||e.events.once(Xt._overlayCleared,(function(){e.events.fire(Xt._playButtonPressed)}))})),function(){let t;e.events.on(Xt._error,(function(n,i={modal:!0,final:!0}){if(!1===i.final)return;t=n;let o={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if(o.modal=i.modal,o.template=ho.render("error",{title:i.title,message:i.message}),o._firstFocusElement=".js-close",v)return k(),void e.events.once(Xt._overlayCleared,()=>E(n,o));E(n,o)})),be(l).on("click",".error",(function(n){e.events.fire(Xt._errorLinkPressed,n.target.href,t)}))}(),e.events.on(Xt._configChanged,(function(){window.requestAnimationFrame((function(){"private-unlocked"!==m&&"email-capture"!==m&&"webinar-confirmation"!==m&&(T(),k())}))})),pr(n,".js-close",(function(){e.events.fire(Xt._overlayCloseButtonPressed)})),be(n).on(["click","touchend"],[".vp-overlay-content",".js-share",".vp-overlay-logo"],(function(e){e.stopPropagation()})).on(["click","touchend"],[".vp-overlay-cell","nav"],(function(){return"false"===n.getAttribute("data-background-close")||(e.events.fire(Xt._overlayCloseButtonPressed),!1)})),e.events.on(Ut._showOutro,(function(){n.classList.add("hidden")})),e.events.on(Xt._outroHidden,(function(){n.classList.contains("in")&&n.classList.remove("hidden")})),function(){var t;e.config.view!==en.webinarUnlocked||(null==(t=e.config.video.webinar)?void 0:t.status)||(e.events.fire(Ut._showOverlay,"webinar-confirmation"),e.events.once(A.EVENT_STARTED,()=>{e.events.fire(Ut._hideOverlay,{unmakeModal:!0})}))}(),e.events.fire(Xt._overlayModuleReady),{}}const Kr=["a",".button-link",".vp-overlay-wrapper .footnote.share a:hover",".menu li:hover",".menu li.active",".vp-outro-link:hover",".vp-outro-videosTitle a:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-share-footnote a:hover",".card-link span",".vp-panel-collapsible button.vp-panel-button:hover"],Zr=["a:hover",".button-link:hover"],Xr=[".vp-overlay-wrapper .close:hover .fill",".vp-overlay-wrapper .back:hover .fill",".stats-debug-close:hover .fill",".stats-debug-copy:hover",".card-link:hover .fill"],Jr=[".play-bar .on .fill",".play-bar a:hover .fill",".play-bar button:not(.toggle):hover .fill",".tiny-bars .fill",".vp-sidedock .on .fill",".controls-outro a:hover .fill",".card-link .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill",'.vp-controls button[class*="_controlBarButton_"]:hover svg path',".vp-controls .on .fill"],Qr=[".vp-controls .play-bar .vp-cast-button"],ea=[".vp-sidedock .on:hover .fill"],ta=[".play-bar .on .stroke",".vp-sidedock .on .stroke"],na=[".vp-sidedock .on:hover .stroke"],ia=['.vp-title [class*="_headerText_"]:hover',".vp-sidedock button:hover",".vp-sidedock button.selected","&.touch-support .vp-sidedock button:active",".vp-controls .play:hover",'button[class*="_playButton_"]:hover','.vp-controls div[class*="_played_"]',"&.no-playbar .play-bar > button:not(.toggle):hover",".vp-controls.tiny .play-bar button:not(.toggle):hover",".vp-overlay .buttons li",".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',"li.vp-panel-item-on:before",".vp-controls .replay:hover",".vp-share-buttons li","button.vp-share-embedCopy",".vp-outro-button","a.vp-outro-vodButton",".vp-email-capture-progress-meter",".chapter-marker",".vp-chapters-active-indicator",'div[class*="_volumeBarFill_"]'],oa=[".vp-title img:hover","li.vp-panel-item-on:before",".vp-interactive-marker"],ra=[".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',".vp-sidedock button:hover",".vp-sidedock button.selected",".vp-sidedock button:hover .vod-label",".vp-sidedock button.selected .vod-label",".play:hover",".vp-share-footnote--embed a",".vp-outro-button",".vp-outro-button:hover",".vp-outro-wrapper .vp-outro-link:hover","button.vp-share-embedCopy",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-panel-collapsible button.vp-panel-button:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],aa=[".vp-controls .play:hover .fill",".vp-sidedock button:hover .fill",".vp-sidedock button.selected .fill",".play-bar a:hover .fill",".play-bar button:not(.toggle):hover .fill","&.no-playbar .play-bar > button:not(.toggle):hover .fill",".vp-controls.tiny .play-bar button:not(.toggle):hover .fill",".vp-sidedock .on .fill",'.vp-share-wrapper a[role="button"] .fill',".vp-outro-vodButton .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],sa=[".vp-controls .play:hover .stroke",".vp-sidedock button:hover .stroke",".vp-sidedock button.selected .stroke",".vp-sidedock .on .stroke"],la=["li.vp-panel-item-on:before"],ca=["li.vp-panel-item-on:before"],da=['.vp-overlay-wrapper .vp-overlay a[role="button"]',".vp-sidedock button:hover",".vp-sidedock button.selected",".play:hover","button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],ua=[".vp-controls .play:hover .fill",".vp-sidedock button:hover .fill",".vp-sidedock button.selected .fill",".vp-controls .play-bar .fullscreen.tiny:hover .fill",".vp-share-button .fill",".vp-outro-vodButton .fill"],pa=[".vp-sidedock button:hover .stroke",".vp-sidedock button.selected .stroke"],va=["li.vp-panel-item-on:before",".vp-email-capture-form-fields-slider .vp-email-capture-form-custom-field.focus",".vp-email-capture-disclaimer-wrapper .vp-webinar-compliance-checkbox-border.showFocus"],ma=['.vp-overlay .vp-overlay-content input[type="submit"]:active','.vp-overlay a[role="button"]:active',".vp-sidedock button:active",".vp-outro-vodWrapper a.vp-outro-vodButton:active",".vp-email-capture-form-button--next:hover",".vp-email-capture-form-button--next:focus",".vp-email-capture-form-button--submit:hover",".vp-email-capture-form-button--submit:focus"],fa=[".vp-email-capture-form-button--next",".vp-email-capture-form-button--submit"],ha=['.vp-title [class*="_headerText_"]:hover','.vp-overlay-wrapper .vp-overlay a[role="button"]',".vp-sidedock button:hover",".vp-sidedock button.selected",".play:hover",".play:hover span",'button[class*="_playButton_"]:hover','button[class*="_playButton_"]:hover > span:not(.vp-tooltip)',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],_a=[".vp-sidedock button:hover .fill",".vp-sidedock button.selected .fill",".vp-controls .play:hover .fill",'button[class*="_playButton_"]:hover .fill',".vp-controls .play-bar .fullscreen.tiny:hover .fill",".vp-share-button .fill",".vp-outro-vodButton .fill"],ga=[".vp-sidedock button:hover .stroke",".vp-sidedock button.selected .stroke"];function ba(e,{uuid:t,id:n,isMobileDevice:i}){var o=null;function r(e,o){var r=`.player-${t} `,a=r+e.join(","+r);if(o){var s=`${n} `;a+=`,${s}${e.join(","+s)}`}return i&&(a=a.replace(/:hover/g,":active")),a.replace(/ &/g,"")}return e.events.on(Ut._changeColor,(function(n){var i;try{i=new $(n)}catch(ke){i=new $("00adef")}var a=function(e){o?function(){for(;o.cssRules.length>0;)o.deleteRule(0)}():function(){var e=document.createElement("style");e.setAttribute("data-player",t),document.querySelector("head").appendChild(e),o=e.sheet}();var n=e.complement,i=new $(30,30,30,.9),a=new $(0,0,0,.15).overlayOn(e);i.contrast(n).ratio<3&&n.lighten(5,3,i);var s,l=e.lightness<40?e.clone().lighten(15,3,e):e.clone().darken(15,3,e),c=$.white.contrast(e).ratio<4.5?$.black:$.white;_t(r(va),"border-color:"+a.hex,o),_t(r(Kr),"color:"+e.hex,o),_t(r(Jr),"fill:"+e.hex,o),_t(r(Qr),"--connected-color:"+e.hex,o),_t(r(ta),"stroke:"+e.hex,o),_t(r(ia),"background-color:"+e.hex,o),_t(r(oa),"border-color:"+e.hex,o),_t(r(Zr),"color:"+n.hex,o),_t(r(Xr),"fill:"+n.hex,o),_t(r(ea),"fill:"+l.hex,o),_t(r(na),"stroke:"+l.hex,o),_t(r(ma),"background-color:"+a.hex,o),e.luminance>.95&&(n=e.clone().darken(15,3,e),_t(r(ra),"color:"+n.hex,o),_t(r(aa),"fill:"+n.hex,o),_t(r(sa),"stroke:"+n.hex,o),_t(r(la),"background-color:"+n.hex,o),_t(r(ca),"border-color:"+n.hex,o),l=n.clone().darken(15,3,n),_t(r(ea),"fill:"+l.hex,o),_t(r(na),"stroke:"+l.hex,o)),e.yiq>175&&e.luminance<.95&&(s=l.clone().darken(15,3,l),_t(r(ea),"fill:"+s.hex,o),_t(r(na),"stroke:"+s.hex,o),_t(r(da),"color:"+l.hex,o),_t(r(ua),"fill:"+l.hex,o),_t(r(pa),"stroke:"+l.hex,o));let d=new $(e.hex);return d.alpha=.8,_t(r(fa),"background-color:"+d.rgba,o),_t(r(ha),"color:"+c.hex,o),_t(r(_a),"fill:"+c.hex,o),_t(r(ga),"stroke:"+c.hex,o),{main:e.hex,selected:l.hex,sidedockHover:s?l.hex:e.luminance>.95?n.hex:$.white.hex,sidedockSelected:e.luminance>.95?n.hex:e.hex,sidedockSelectedHover:s?s.hex:l.hex}}(i);e.config._colors=a,e.config.embed.color=a.main.replace("#",""),e.events.fire(Xt._colorChanged,e.config.embed.color)})),e.events.fire(Ut._changeColor,e.config.embed.color),{}}function ya(e){let t=null;return e.events.on(Ut._openPopup,(function(n,i){let o=`https://${e.config.player_url}`,r=`${o}/video/${e.config.video.id}`;switch(n){case"login-like":t=Ct(`${r}/login/like`,"login",{width:670,height:545}),e.events.fire(Xt._popupOpened,n);break;case"login-watch-later":t=Ct(`${r}/login/watch-later`,"login",{width:670,height:545}),e.events.fire(Xt._popupOpened,n);break;case"login-private-locked":t=Ct(`${r}/login/private`,"login",{width:670,height:545}),e.events.fire(Xt._popupOpened,n);break;case"purchase":let a=`${o}/video/${e.config.video.vod.feature_id||e.config.video.id}/purchase/vod`;(null==i?void 0:i.productId)&&(a+=`/${i.productId}`),a+=`?referrer=${encodeURIComponent(e.config.request.referrer)}`,t=Ct(a,"purchase",{width:790,height:670}),e.events.fire(Xt._popupOpened,n)}})),window.closePopup=function(n){if(t){try{t.close(),e.events.fire(Xt._popupClosed,n)}catch(ke){}t=null}},e.config.embed.on_site||(window.confirmPurchase=function(t,n,i){n?e.loadVideo(t):i&&e.events.fire(Xt._playButtonPressed)}),e.config.embed.on_site||(window.confirmLoginAction=function(t,n){e.events.fire(Xt._userLogIn,n)}),{}}function wa(e,t){const n=e.events;function i(e){e.preventDefault(),n.fire(Ut._changeMuted,!1)}function r(){t.classList.add("invisible"),t.classList.remove("hidden"),t.removeAttribute("hidden"),setTimeout(()=>{t.classList.remove("invisible")},0),n.once(Xt._volumeChanged,a)}function a(e){e>0&&!t.classList.contains("invisible")&&s()}function s(){be(t).on("transitionend",l),t.classList.add("invisible")}function l(){be(t).off("transitionend",l),t.classList.add("hidden"),t.setAttribute("hidden","")}return function(){const e={title:o.touch?"Tap to Unmute":"Click to Unmute"};t.innerHTML=ho.render("unmute_button",e),pr(t,i),pr(t,".vp-unmute-button",i),n.once(Xt._muteAutoplayed,r),n.on(A.EVENT_ENDED,s)}(),{}}function Ea(e,t){!function(){const n=t.querySelector(".vp-unmute");new wa(e,n)}()}const Ca={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"};function ka(e,t,n){var i,r=!!e.config.embed.on_site,a=n.querySelector(".volume"),s=!1,l=null,c=e.config.video.fps/5,d=Math.max(c,.618*e.config.video.duration),u=c,p=0,v=!1,m=j(y,80);function f(){return!r&&(e.config.view===en.main||e.config.view===en.privateUnlocked||e.config.view===en.webinarUnlocked)}function h(){s&&"help"===i&&e.events.fire(Xt._overlayCloseButtonPressed)}function _(e){return"number"!=typeof e.which&&(e.which=e.keyCode),e}function g(e){if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Ca?Ca[e.which]:String.fromCharCode(e.which).toLowerCase()}function b(t){if(e.config.embed.settings.background)return!0;var n=t.target||t.srcElement;return"INPUT"===n.tagName||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable}function y(n,i){var o,r;if(!(t.get(Mn)||null!=(o=e.backbone)&&null!=(r=o.telecine)&&r.ended&&"right"===n)){v||(i&&!e.backbone.paused&&e.events.fire(Xt._pauseButtonPressed),e.events.fire(Xt._scrubbingStarted,!0,"keyboard"),v=!0),!function(e){var t=e,n=Math.ceil(c),i=Math.ceil(d-c);u=function(e,t,n,i){return e/=100,n*(--e*e*e+1)+t}(t,n,i)}(p),1==++p&&(u=5*e.config.video.fps);var a=i?1:u,s="right"===n?a:-a;!function(t){const{startTime:n,endTime:i}=e.fragmentsHandler.currentFragment;let o=t/e.config.video.fps;o<n?o=n:o>=i&&(o=i-.001),e.events.fire(Ut._seek,o)}(Math["right"===n?"ceil":"floor"](e.currentTime*e.config.video.fps)+s)}}function w(e){if("preact-menu"===l)return!1;var t=l.getTabIndexItems(),n=t.indexOf(document.activeElement),i="up"===e?n-1:n+1,o=null;return!(o=i>=t.length?t[0]:i<0?t[t.length-1]:t[i])||(o.focus(),!1)}function E(){if(l)return!0;if(t.get(Mn)&&!t.get(qn))return!0;if(!document.activeElement||document.activeElement===document.body){const t=e.backbone.paused?Xt._playButtonPressed:Xt._pauseButtonPressed;return e.events.fire(t),h(),!1}}function C(){return"preact-menu"!==l&&(l?(l.element.contains(document.activeElement)&&l.button.focus(),l.hide(),!1):s?(e.events.fire(Xt._overlayCloseButtonPressed),!1):void 0)}function k(){return"preact-menu"===l||(l?!l.element.contains(document.activeElement)||w("up"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(Ut._changeVolume,.05,!1,!0),!1))}function L(){return"preact-menu"===l||(l?!l.element.contains(document.activeElement)||w("down"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(Ut._changeVolume,-.05,!1,!0),!1))}function T(t,n){if("preact-menu"===l)return!0;if(l)return!l.element.contains(document.activeElement)||w("left"===n?"up":"down");if(h(),o.spatialPlayback&&e.config.video.spatial)return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n),!1;if(document.activeElement&&document.activeElement===a){var i="left"===n?-.05:.05;return e.events.fire(Ut._changeVolume,i,!1,!0),!1}t.shiftKey||0===p?y(n,t.shiftKey):m(n,t.shiftKey)}return e.events.on(Xt._overlayOpened,(function(e){s=!0,i=e,"not-supported"!==e&&"email-capture"!==e||(r=!0)})),e.events.on(Xt._overlayClosed,(function(){s=!1,i=null})),e.events.on(Xt._menuVisibilityChanged,(function(e,t){l=e?t||e:null})),e.events.on(Xt._configChanged,(function(e){e&&(r=!1)})),function(){const{like:n,watch_later:r,share:a}=e.config.embed.settings;var d={c:[Xt._ccButtonPressed,!0],h:[Xt._prefsButtonPressed,!0],f:Xt._fullscreenButtonPressed,d:Xt._debugButtonPressed,space:E,up:k,down:L,left:T,right:T,esc:C,"?":[Ut._showOverlay,"help"]};function m(t){if(_(t),function(e){return!(e.ctrlKey||e.metaKey||e.altKey)&&(e.which in Ca?"keydown"===e.type:"keypress"===e.type)}(t)&&!b(t)&&f()){var n=g(t);if(n in d){if("function"==typeof d[n])return void(!1===d[n](t,n)&&(t.preventDefault(),t.stopPropagation()));!1===function(t){if(t=Array.isArray(t)?t:[t],s&&"help"===i){if(e.events.fire(Xt._overlayCloseButtonPressed),t[0]===Ut._showOverlay&&"help"===t[1])return!1;if(t[0]!==Ut._openVimeo)return setTimeout((function(){e.events.fire.apply(null,t)}),250),!1}return e.events.fire.apply(null,t),!1}(d[n])&&(t.preventDefault(),t.stopPropagation())}}}e.config.embed.on_site||(d.v=Ut._openVimeo),n&&(d.l=Xt._likeButtonPressed),r&&(d.w=Xt._watchLaterButtonPressed),a&&(d.s=Xt._shareButtonPressed),e.config.embed.keyboard&&(document.addEventListener("keydown",m,!1),document.addEventListener("keypress",m,!1),document.addEventListener("keyup",(function(n){if("preact-menu"!==l&&(_(n),!b(n)&&f())){var i=g(n);!o.spatialPlayback||!e.config.video.spatial||"left"!==i&&"right"!==i&&"up"!==i&&"down"!==i?t.get(Mn)||"left"!==i&&"right"!==i||function(t){u=c,p=0;var n=t.shiftKey;e.events.fire(Xt._scrubbingEnded,n),v=!1}(n):e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(i)}}),!1))}(),e.events.on(Xt._becameActive,(function(){r=!1})).on(Xt._becameInactive,(function(){r=!0})),e.config.embed.on_site&&document.querySelector(".player")===n&&(r=!1),function(){let e,t=!1;document.body.addEventListener("keyup",e=>{9!==e.which||document.body.classList.contains("showfocus")||document.body.classList.add("showfocus")}),document.body.addEventListener("keydown",n=>{32!==n.which&&13!==n.which||(t=!0,clearTimeout(e),e=setTimeout(()=>{t=!1},200))}),document.body.addEventListener("click",e=>{t||document.body.classList.remove("showfocus")})}(),{pause:function(){r=!0},unpause:function(){r=!1}}}function La(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}function Ta(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}var Sa=Object.freeze({__proto__:null,formatVodLabel:function(e,t,n,i){var o=i[t];return o?(o=La(o=Ta(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null},getDisplayPrice:La,isAvailableInCountry:function(e,t){return!e||0===e.length||-1!==e.indexOf(t)},translateFromRequest:Ta});function Aa(){}let Pa=function(){function e(e,t){this._player=e,this._store=t,this._playbackBlocked=!1,this._disabled=!1,this._setupPolling()}var t=e.prototype;return t.disable=function(){this._disabled=!0},t._blockRegistrant=function(){this._player.backbone.endLive(),this._player.events.fire(Xt._webinarRegistrantBlocked),this._player.events.fire(Ut._showOverlay,"webinar-blocked"),this._playbackBlocked=!0},t._unblockRegistrant=function(){this._player.backbone.reactivate(),this._player.events.fire(Xt._webinarRegistrantUnblocked),this._player.events.fire(Ut._hideOverlay,{unmakeModal:!0}),this._playbackBlocked=!1},t._pollRegistrantStatus=function(){try{const e=this,t=e._player.config.video.webinar.id,n=e._store.get(_i),i=`https://${e._player.config.player_url}/video/${e._player.config.video.id}/webinar/${t}/registrant/${n}/status`;return function(e){if(e&&e.then)return e.then(Aa)}(function(t,n){try{var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(a(i,{withCredentials:!0}).json(),(function(t){t.is_blocked&&!e._playbackBlocked?e._blockRegistrant():e._playbackBlocked&&!t.is_blocked&&e._unblockRegistrant()}))}catch(ke){return n(ke)}return o&&o.then?o.then(void 0,n):o}(0,(function(e){gn.captureException(e)})))}catch(ke){return Promise.reject(ke)}},t._shouldPoll=function(){return!!(this._player.config.video.webinar&&this._player.config.video.webinar.id&&"ended"!==this._player.config.video.webinar.status&&this._store.get(_i))},t._setupPolling=function(){this._disabled||(this._shouldPoll()&&this._pollRegistrantStatus(),setTimeout(this._setupPolling.bind(this),this._playbackBlocked?6e4:3e4))},e}(),Ia=function(){function e(e,{displayTimeout:t=0,label:n="Alert"}={}){h(this),this._container=e,this._visible=!1,this._message=null,this._alert=null,this._alertLabel=n;const i=Math.round(t/1e3);0!==i&&(this._alertLabel=`${n} Will be dismissed in ${i} seconds`),this._displayTimer=null,this._displayTimeout=t,this._renderTemplate(),this._attachEvents()}var t=e.prototype;return t.show=function(e,t=this._displayTimeout){!0!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.remove("hidden"),this._alert.removeAttribute("hidden"),window.requestAnimationFrame(()=>{this._alert.classList.add("in")}),(this._alert.querySelector("[data-alert-autofocus]")||this._alert).focus(),this._visible=!0,this.fire("show",e),0!==t&&(this._displayTimer=setTimeout(()=>{this.hide("timeout")},t)))},t.hide=function(e){!1!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.add("leaving"),window.requestAnimationFrame(()=>{const e=this;this._setHideAttributes(),be(this._alert).on("transitionend",(function t(n){"opacity"===n.propertyName&&(e._alert.classList.remove("leaving"),e._alert.classList.add("hidden"),e._alert.setAttribute("hidden",""),be(e._alert).off("transitionend",t))}))}),this._visible=!1,this.fire("hide",e))},t._setHideAttributes=function(){this._alert.classList.remove("in")},t._renderTemplate=function(){this._alert||(this._alert=document.createElement("div"),this._alert.classList.add("vp-alert"),this._alert.setAttribute("role","alertdialog"),this._alert.setAttribute("aria-atomic","true"),this._alert.classList.add("hidden"),this._alert.setAttribute("hidden",""),this._container.appendChild(this._alert),this._setHideAttributes()),this._message instanceof HTMLElement?(this._alert.innerHTML="",this._alert.appendChild(this._message)):(this._alert.textContent=this._message,this._alert.innerHTML=this._message);const e=document.createElement("button");e.setAttribute("data-close",""),e.setAttribute("aria-label","Close alert"),e.classList.add("close"),e.innerHTML=ho.render("icon_close"),this._alert.appendChild(e)},t._attachEvents=function(){be(this._alert).on("click","[data-close]",e=>{this.hide(e)})},m(e,[{key:"visible",get:function(){return this._visible}},{key:"message",get:function(){return this._message},set:function(e){e instanceof HTMLElement&&this._message&&e.textContent===this._message.textContent||e!==this._message&&(this._message=e,this._renderTemplate())}}]),e}(),Ra=function(){function e(e,t,n){this.player=e,this.backbone=t,this.isBufferingTooLong=!1,this.isBufferingTooFrequent=!1,this.autoAlertWasDismissed=!1,this.bufferCount=-1,this.badPlaybackTimer=null,this._setUpAlertUI(n),this._attachEventHandlers()}var t=e.prototype;return t.handleBufferStarted=function(){this.bufferCount+=1,this._startBadPlaybackTimer()},t.handleBufferEnded=function(){clearTimeout(this.badPlaybackTimer),this.badPlaybackTimer=null,this.isBufferingTooLong=!1},t._attachEventHandlers=function(){this.player.events.on(Xt._debugPayloadCopied,()=>{this._showDebugPayloadCopied()}),this.player.events.on(Ot._spatialUnsupported,e=>{this._showSpatialUnsupportedAlert(e)}),this.player.events.on(Ot._spatialFailure,e=>{this._showSpatialFailureAlert(e)}),this.player.events.on(Ot._bufferStarted,this.handleBufferStarted.bind(this)),this.player.events.on(v.BUFFER_ENDED,this.handleBufferEnded.bind(this)),this.player.events.on(Ot._badPlayback,()=>{this.autoAlertWasDismissed||(this.showAlert("stream_studder"),gn.captureBreadcrumb("Alert shown",{message:"stream_studder"},"video"))}),this.player.events.on(Xt._qualityChanged,e=>{"auto"===e&&this.alertUI.hide("qualitymenuauto")})},t._showSpatialUnsupportedAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.'}})},t._showDebugPayloadCopied=function(){this.showAlert("notice",{strings:{text:"Debug Payload Copied"}},5e3)},t._showSpatialFailureAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.'}})},t.showAlert=function(e,t=null,n){this.alertUI&&!this.player.config.embed.settings.background&&(this.alertUI.message=ho.render(e,t),this.alertUI.show(null,n))},t._setUpAlertUI=function(e){this.alertUI=new Ia(e,{displayTimeout:1e3}),this.alertUI.on("show",e=>{this.player.events.fire(Xt._alertVisibilityChanged,!0,e)}),this.alertUI.on("hide",e=>{const t=e.target,n=t&&"function"==typeof t.getAttribute;if(n)switch(t.getAttribute("data-context")){case"suggestion":this.player.events.fire(Ut._changeQuality,"auto"),e="suggestion";break;default:e="close"}(n||"qualitymenuauto"===e)&&(this.autoAlertWasDismissed=!0),this.player.events.fire(Xt._alertVisibilityChanged,!1,e)})},t._startBadPlaybackTimer=function(){null===this.badPlaybackTimer&&0!==this.bufferCount&&(this.badPlaybackTimer=setTimeout(()=>{this.isBufferingTooLong=!0,this._notifyBadPlayback()},1e4))},t._notifyBadPlayback=function(){"MediaSourceScanner"===this.backbone.currentScannerName&&(this.isBufferingTooLong||this.isBufferingTooFrequent)&&(this.backbone.video.currentFile.restrictedStreamIndexes.length<=0||(this.isBufferingTooLong,this.isBufferingTooFrequent,this.player.events.fire(Ot._badPlayback),this.bufferCount=0,this.badPlaybackTimer=null,this.isBufferingTooFrequent=!1,this.isBufferingTooLong=!1))},e}();function xa(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Da(e,t){try{var n=e()}catch(ke){return t(ke)}return n&&n.then?n.then(void 0,t):n}function Na(){}let Ma=function(){function e(e,t){this._player=e,this._store=t,this._failedRequests=0,this._viewerCount=0,this._setUpEvents()}var t=e.prototype;return t._setUpEvents=function(){this._player.events.on(A.STREAM_ONLINE,()=>{this._getViewerCount()})},t._getViewerCount=function(){try{const e=this;if(!e._store.get(qn)||!e._player.config.video.live_event.show_viewer_count)return;const t=setTimeout(()=>{e._getViewerCount()},3e4);let n=`${e._player.config.video.id}`;"unlisted"===e._player.config.video.privacy&&(n+=`:${e._player.config.video.unlisted_hash}`);let i=`https://${e._player.config.vimeo_api_url}/videos/${n}/stats/live`,o={jwt_token:e._player.config.user.vimeo_bucketed_live_client_token};return Oa(Da((function(){return xa(e._player.updatePhpTokens(),(function(){return Oa(Da((function(){return xa(a({url:i,searchParams:o}).json(),(function(t){t.viewers?(e._failedRequests=0,e._viewerCount=t.viewers.current,e._player.events.fire(A.LIVE_STATS_SUCCESS,{viewerCount:e._viewerCount})):e._failedRequests++}))}),(function(){e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(A.LIVE_STATS_FAILURE)})))}))}),(function(n){gn.captureException(n),e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(A.LIVE_STATS_FAILURE)})))}catch(ke){return Promise.reject(ke)}},t._hideViewerCount=function(){return this._failedRequests>3},e}();function Oa(e){if(e&&e.then)return e.then(Na)}function Ba(e){let t,n=0,i=!1,r=null,a=null,s=null;function l(){if(!o.touch||e.store.get($n)||e.config.video.spatial)return;let t=null,l=0,u=10;function p(e){if(!["left","right"].includes(e))return;const i="right"===e?c:d,o="right"===e?a:s;n++,clearTimeout(t),n>=2&&(v(o,e,u),2===n&&i(10),l=10*(n-2),i(l),n>2&&(u+=10,v(o,e,u),n=2))}function m(){n>=2&&e.events.fire(Xt._nudgeEnded),n=0,l=0,u=10}r=e.element.querySelector(".vp-nudge-wrapper"),r.classList.remove("hidden"),r.innerHTML=ho.render("nudge"),a=e.element.querySelector(".vp-nudge-forward"),s=e.element.querySelector(".vp-nudge-backward"),pr(a,e=>{e.preventDefault(),p("right"),t=setTimeout(m,250)}),pr(s,e=>{e.preventDefault(),p("left"),t=setTimeout(m,250)}),e.events.on(Xt._firstTimeUpdate,()=>{i=!0})}function c(t){u((e.currentTime||0)+t)}function d(t){const n=(e.currentTime||0)-t;u(n>=0?n:0)}function u(t){const{startTime:n,endTime:o}=e.fragmentsHandler.currentFragment;t<n?t=n:t>=o&&(t=o-.001),e.events.fire(Xt._nudgeAttempted),e.events.fire(Ut._seek,t),i||e.events.fire(Xt._playButtonPressed)}function p(t,n){const i=e.currentTime||0,o="right"===n?"+":"-";return"right"===n&&i>e.config.video.duration-10||i<=10&&"left"===n?null:`${o} ${t}`}function v(n,i,o){if(!["left","right"].includes(i))return;const r=e.element.querySelector(`.vp-nudge-shade-${i}`),a=n.querySelector(".vp-nudge-seconds");p(o,i)&&(a.innerHTML=p(o,i),clearTimeout(t),n.classList.remove("invisible"),r.classList.remove("vp-nudge-shade-invisible"),t=setTimeout(()=>{r.classList.add("vp-nudge-shade-invisible"),n.classList.add("invisible")},500))}return e.events.on(Xt._configChanged,(function(){[a,s].forEach(e=>{e&&be(e).off("click").off("touchend")}),l()})),l(),{}}const{VIMEO_URL:Va,SVV_RECIPIENT_URL:Fa,SVV_MANAGE_URL:Ua,CLIP_URL:qa,PROFILE_URL:Ha,VOD_URL:$a,VOD_VIDEO_MANAGE_URL:Wa}={VIMEO_URL:"vimeoUrl",SVV_RECIPIENT_URL:"svvRecipientUrl",SVV_MANAGE_URL:"svvManageUrl",CLIP_URL:"clipUrl",PROFILE_URL:"profileUrl",VOD_URL:"vodUrl",VOD_VIDEO_MANAGE_URL:"vodVideoManageUrl"},ja={"vimeo-logo":{viewer:{unlisted:qa,password:qa,disable:Va,nobody:qa,anybody:qa,ptv:$a,privateMode:Va},creator:{unlisted:Ua,password:Ua,disable:Ua,nobody:Ua,anybody:Ua,ptv:Wa,privateMode:Ua}},"video-title":{viewer:{unlisted:Fa,password:qa,disable:Ha,nobody:Ua,anybody:qa,ptv:$a,privateMode:Va},creator:{unlisted:Ua,password:Ua,disable:Ua,nobody:Ua,anybody:Ua,ptv:Wa,privateMode:Ua}},"video-portrait":{viewer:{unlisted:Ha,password:Ha,disable:Ha,nobody:Ha,anybody:Ha,ptv:Ha,privateMode:Va},creator:{unlisted:Ha,password:Ha,disable:Ha,nobody:Ha,anybody:Ha,ptv:Wa,privateMode:Ua}},"video-byline":{viewer:{unlisted:Ha,password:Ha,disable:Ha,nobody:Ha,anybody:Ha,ptv:Ha,privateMode:Va},creator:{unlisted:Ha,password:Ha,disable:Ha,nobody:Ha,anybody:Ha,ptv:Wa,privateMode:Ua}}};function za(e,t){let n="";const i=function(e={}){const t={selectDestination(e){const n=ja[e];if(!n)return"";const i=t.isOwner?n.creator:n.viewer;return t.isPrivateMode?i.privateMode:i[t.videoPrivacy]},get[qa](){return function(e,t){var n,i;const o=null==(n=t.video)?void 0:n.id,r=null==(i=t.video)?void 0:i.unlisted_hash;return`${e}/${o}${r?"/"+r:""}`}(t[Va],e)},get[Fa](){var n,i;return function(e,t,n){return`${e}/${t}/${n}`}(t[Va],null==(n=e.video)?void 0:n.id,null==(i=e.video)?void 0:i.unlisted_hash)},get[Ua](){var n;return function(e,t){return`${e}/manage/videos/${t}`}(t[Va],null==(n=e.video)?void 0:n.id)},get[Va](){return`https://${e.vimeo_url}`},get[Ha](){var t,n;return null==(t=e.video)||null==(n=t.owner)?void 0:n.url},get[$a](){var t,n;return null==(t=e.video)||null==(n=t.vod)?void 0:n.url},get[Wa](){var t,n;return`https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(n=t.vod)?void 0:n.id}/settings/basic`},get videoPrivacy(){var t;return null==(t=e.video)?void 0:t.privacy},get isPrivateMode(){var t;return!!(null==(t=e.user)?void 0:t.private_mode_enabled)},get isOwner(){var t,n,i;return(null==(t=e.user)?void 0:t.id)===(null==(n=e.video)||null==(i=n.owner)?void 0:i.id)}};return t}(t),o=i.selectDestination(e);return i[o]&&(n=i[o]),n}let Ya=function(){function e(e){let t;t="PROD"===function(e){switch(e.player_url){case"player.vimeo.com":return"PROD";case"player-backend-ci.vimeows.com":case"master.playerci-py.vimeows.com":return"CI";case"player2.vimeo.dev":return"DEV";default:return}}(e.config)?"https://embedder-sdk.wirewax.com/latest/wirewax-embedder-sdk@beta.umd.js":"https://embedder-sdk.wirewax.tv/latest/wirewax-embedder-sdk@beta.umd.js";const n=window.createWirewaxEmbedder?Promise.resolve():(e=>new Promise((t,n)=>{const i=document.createElement("script");i.src=e,i.addEventListener("load",t),i.addEventListener("error",e=>n(e.error)),document.head.appendChild(i)}))(t);this.embedders={},this.player=e,this.playerContainer=e.element,this.wirewaxContainer=(()=>{const e=document.createElement("div");return e.classList.add("vp-wirewax-container"),e})(),this.playerContainer.appendChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.playHandler=this.handlePlay.bind(this),this.pauseHandler=this.handlePause.bind(this),this.seekedHandler=this.handleSeeked.bind(this),n.then(()=>{this.init()}).catch(e=>{})}var t=e.prototype;return t.init=function(){var e;this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params)},t.setupEmbedder=function(e,t){return this.embedder=window.WIREWAX("vp-wirewax-container",{vidId:e,interactiveParams:t?JSON.parse(t):null}),this.embedder.ready().then(()=>{this.registerWIREWAX();const e=this.embedder.getInteractiveData("hotspots");this.player.events.fire(Xt._interactiveReady,{hotspots:e})}).catch(e=>{})},t.registerWIREWAX=function(){this.setWIREWAXCurrentTime=()=>{this.embedder.setCurrentTime(this.player.backbone.currentTime),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},this.player.events.on(p.PLAY,this.playHandler),this.player.events.on(p.PAUSE,this.pauseHandler),this.player.events.on(p.SEEKED,this.seekedHandler),this.player.events.once(p.TIME_UPDATE,()=>{this.playHandlerCalled||this.playHandler()}),this.player.config.embed.autoplay&&(this.startTimeUpdate(),this.embedder.play()),this.addWIREWAXListeners(),this.embedders[this.player.backbone.element.id]=this.embedder},t.addWIREWAXListeners=function(){this.embedder.on("play",()=>{this.player.backbone.play()}),this.embedder.on("pause",()=>{this.player.backbone.pause()}),this.embedder.on("seeked",({seekTo:e,seekType:t})=>{this.player.events.fire(Xt._interactiveSeekCall,{type:t}),this.player.backbone.currentTime=e}),this.embedder.on("hotspotClick",this.handleHotspotClick.bind(this)),this.embedder.on("overlayPanelClick",this.handleOverlayPanelClick.bind(this)),this.embedder.on("toggleOverlay",this.handleToggleOverlay.bind(this))},t.destroyWirewax=function(){this.stopTimeUpdate(),this.embedder.destroy(),this.embedders[this.player.backbone.element.id]={},this.playerContainer.removeChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.player.events.off(p.PLAY,this.playHandler),this.player.events.off(p.PAUSE,this.pauseHandler),this.player.events.off(p.SEEKED,this.seekedHandler)},t.resetWirewax=function(){var e;this.destroyWirewax(),this.player.config.embed.wirewax&&(this.playerContainer.appendChild(this.wirewaxContainer),this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params))},t.handlePlay=function(){this.startTimeUpdate(),this.embedder.play(),this.playHandlerCalled=!0},t.handlePause=function(){this.stopTimeUpdate(),this.embedder.pause()},t.handleSeeked=function(e){const{currentTime:t}=e;this.embedder.setCurrentTime(t)},t.startTimeUpdate=function(){window.cancelAnimationFrame(this.animationId),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},t.stopTimeUpdate=function(){window.cancelAnimationFrame(this.animationId)},t.handleHotspotClick=function(e){this.player.events.fire(Xt._interactiveHotspotClicked,e)},t.handleOverlayPanelClick=function(e){this.player.events.fire(Xt._interactiveOverlayPanelClicked,e)},t.handleToggleOverlay=function(e){e.overlayOnDisplay?(this.player.events.fire(Xt._overlayOpened,"interactive"),this.wirewaxContainer.classList.add("vp-interactive-overlay-open")):(this.player.events.fire(Xt._overlayClosed,"interactive"),this.wirewaxContainer.classList.remove("vp-interactive-overlay-open"))},e}();let Ga,Ka,Za,Xa,Ja,Qa,es,ts,ns,is,os,rs,as,ss;function ls({config:e,debugCollector:t,currentTime:n,backbone:i}){var r,a,s,c;const d=e.request.session,u=t.getCurrent(Xa.FIELD_VIDEO_DIMS),p=t.getCurrent(Xa.FIELD_TOTAL_FRAMES)||0,v=t.getCurrent(Xa.FIELD_DROPPED_FRAMES)||0,m=t.getCurrent(Xa.FIELD_FILES),f=t.getCurrent(Xa.FIELD_STREAMS),h=t.getCurrent(Xa.FIELD_SCANNERS),_=t.getCurrent(Xa.FIELD_BANDWIDTH),g=h===es.HLS_LIVE_SCANNER,b=h===es.MEDIA_SOURCE_SCANNER,y=Ee(n,i.buffered),w=n+y,E=function(e){if(!e)return null;const t=e.length;let n=0,i=[];for(;n<t;n++){const t=e.start(n),o=e.end(n);i.push({i:n,start:t,end:o})}return i}(i.buffered),C=e.embed.dnt||e.request.flags.dnt,k={isLive:g,isDash:b,embedSize:u,sessionId:d,testGroup:Object.keys(e.request.ab_tests).map(t=>{var n;return`${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`}).join(", "),isDNTEnabled:C,totalFrames:p,droppedFrames:v,ua:null==(r=navigator)?void 0:r.userAgent,clipId:e.video.id,readyState:i.readyState,support:JSON.stringify(o),bufferEnd:St(w,3),bufferAhead:St(y,3),currentTime:St(n,3),clientIp:null==(a=e.request)||null==(s=a.client)?void 0:s.ip,playerVersion:vn(e),bufferedRanges:JSON.stringify(E),brainDebug:JSON.stringify(i.brainDebug),codec:f?f.codec:null,hideCloseButton:!!e.embed.settings.background,isCopyDisabled:!!C||!!e.embed.settings.background,vrHeadsetName:t.getCurrent(Xa.FIELD_VR_HEADSET),droppedFramesPercent:0!==p?`${(v/p*100).toFixed(2)}%`:0,resolution:f?`${f.width}×${f.height}@${Math.round(f.framerate)} ${Math.round(f.bitrate/1e3).toLocaleString()} Kbps ${f.audioBitrate?` / ${Math.round(f.audioBitrate/1e3).toLocaleString()} Kbps ${f.audioChannels}ch`:""}`:null,payloadId:`${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,bandwidthKbps:_?`${Math.floor(_.value/1e3).toLocaleString()} Kbps`:0,bandwidthMinKbps:`${Math.floor(t.getCurrent(Xa.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,bandwidthMaxKbps:`${Math.floor(t.getCurrent(Xa.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,separateAudioVideo:!(null==(c=e.request.files)||!c.dash||!e.request.files.dash.separate_av)};return m&&(k.delivery=m.mime),e.request.drm&&Object.assign(k,{drmEnabled:!0,drmFastly:!!e.request.drm.fastly}),e.video.p2p&&Object.assign(k,function(){const e=l(window,"Streamroot.instances[0].stats"),t=l(e,"realtime.dnaSources");if(void 0===t)return null;const n=l(e,"currentContent.cdnDownload"),i=l(e,"currentContent.dnaDownload");return{p2pSources:t,p2pOffload:`${St(i/(n+i)*100,1)}%`}}()),g&&Object.assign(k,function(e,t){var n;const i=(null==(n=e.video.live_event)?void 0:n.id)||null;let o="";try{o=`${t.getCurrent(Xa.FIELD_LIVE_LATENCY).toFixed(2)} seconds`}catch(ke){}return{liveLatency:o,liveSessionID:i}}(e,t)),b||g?Object.assign(k,{bandwidthSeriesData:cs(t)}):Object.assign(k,{bandwidthSeriesData:{max:1,debugMarkers:[],timeSeries:[]}}),k}function cs(e){const t=e.getSeries(Xa.FIELD_BANDWIDTH),n=e.getCurrent(Xa.FIELD_MAX_BANDWIDTH);return{debugMarkers:e.getSeries(Xa.FIELD_MARKERS),timeSeries:t,max:n}}!function(e){e.VimeoPlayer="VimeoPlayer",e.ChromelessPlayer="Chromeless"}(Ga||(Ga={})),function(e){e.INLINE="inline",e.PICTURE_IN_PICTURE="picture-in-picture"}(Ka||(Ka={})),function(e){e.NORMAL="normal",e.MINI="mini",e.TINY="tiny"}(Za||(Za={})),function(e){e.FIELD_MARKERS="markers",e.FIELD_CLIP_ID="clip_id",e.FIELD_PROFILE_ID="profile_id",e.FIELD_PLAYER_SIZE="player_size",e.FIELD_DROPPED_FRAMES="dropped_frames",e.FIELD_TOTAL_FRAMES="total_frames",e.FIELD_BANDWIDTH="bandwidth",e.FIELD_STREAMS="streams",e.FIELD_FILES="files",e.FIELD_VIDEO_DIMS="video_dims",e.FIELD_MIN_BANDWIDTH="min_bandwidth",e.FIELD_MAX_BANDWIDTH="max_badwidth",e.FIELD_BUFFER_OCCUPANCY="buffer_occupancy",e.FIELD_LIVE_LATENCY="live_latency",e.FIELD_SCANNERS="scanner",e.FIELD_VR_HEADSET="vr_headset"}(Xa||(Xa={})),function(e){e.AUTO="auto"}(Ja||(Ja={})),function(e){e.PRIVACY_PUBLIC="anybody",e.PRIVACY_NOBODY="nobody",e.PRIVACY_FOLLOW="contacts",e.PRIVACY_PASSWORD="password",e.PRIVACY_USER="users",e.PRIVACY_PURGATORY="purgatory",e.PRIVACY_HIDE_FROM_VIMEO="disable",e.PRIVACY_PAYTOVIEW="ptv",e.PRIVACY_PAYTOVIEWEXTRA="ptv_extra",e.PRIVACY_UNLISTED="unlisted",e.PRIVACY_STOCK="stock"}(Qa||(Qa={})),function(e){e.MEDIA_SOURCE_SCANNER="MediaSourceScanner",e.HLS_LIVE_SCANNER="HLSLiveScanner"}(es||(es={})),function(e){e.PLAY="play",e.PAUSE="pause",e.REPLAY="replay",e.TRAILER="trailer"}(ts||(ts={})),function(e){e.PREFS="prefs",e.CHAPTERS="chapters",e.CC="cc"}(ns||(ns={})),function(e){e.EMPTY="empty",e.PREFS="prefs",e.QUALITY="quality",e.SPEED="speed",e.CHAPTERS="chapters",e.LANGUAGES="languages",e.CUSTOMIZE="customize",e.FONT="font",e.BACKGROUND="background",e.WINDOW="window",e.PREVIEW="preview"}(is||(is={})),function(e){e.FONT_SIZE="fontSize",e.FONT_FAMILY="fontFamily",e.FONT_OPACITY="fontOpacity",e.COLOR="color",e.EDGE_STYLE="edgeStyle"}(os||(os={})),function(e){e.BG_OPACITY="bgOpacity",e.BG_COLOR="bgColor"}(rs||(rs={})),function(e){e.WINDOW_OPACITY="windowOpacity",e.WINDOW_COLOR="windowColor"}(as||(as={})),function(e){e[e.FONT_SIZE=os.FONT_SIZE]="FONT_SIZE",e[e.FONT_FAMILY=os.FONT_FAMILY]="FONT_FAMILY",e[e.FONT_OPACITY=os.FONT_OPACITY]="FONT_OPACITY",e[e.COLOR=os.COLOR]="COLOR",e[e.EDGE_STYLE=os.EDGE_STYLE]="EDGE_STYLE",e[e.BG_OPACITY=rs.BG_OPACITY]="BG_OPACITY",e[e.BG_COLOR=rs.BG_COLOR]="BG_COLOR",e[e.WINDOW_OPACITY=as.WINDOW_OPACITY]="WINDOW_OPACITY",e[e.WINDOW_COLOR=as.WINDOW_COLOR]="WINDOW_COLOR"}(ss||(ss={}));let ds=function(){function e(e=((e,t)=>e<t)){this._data={},this._sortedKeys=[],this._sort=e}var t=e.prototype;return t._insert=function(e){var t=this._sortedKeys.length;if(0===t)this._sortedKeys.push(e);else{for(var n=0;n<t;n++)if(this._sort(e,this._sortedKeys[n])){this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e);break}n===t&&this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e)}},t._binarySearch=function(e,t,n,i){if(i<n)return-1;let o=parseInt(n+(i-n)/2,10);return e[o]>t?this._binarySearch(e,t,n,o-1):e[o]<t?this._binarySearch(e,t,o+1,i):o},t.delete=function(e){const t=this._binarySearch(this._sortedKeys,e,0,this._sortedKeys.length);if(-1===t)throw new Error("key does not exist");this._sortedKeys.splice(t,1),delete this._data[e]},t.set=function(e,t){return this._data[e]=t,this._insert(e),this},t.get=function(e){return this._data[e]},t.keys=function(){return this._sortedKeys.slice()},t.values=function(){return this.keys().map(e=>this._data[e])},t.forEach=function(e){const t=this._sortedKeys.length;for(let n=0;n<t&&!1!==e(this._data[this._sortedKeys[n]],this._sortedKeys[n],this);n++);},m(e,[{key:"size",get:function(){return this._sortedKeys.length}}]),e}();const us=e=>{var t,n;const i=new ds;return(null==(t=e.embed)||null==(n=t.cards)?void 0:n.length)&&e.embed.cards.forEach(e=>{const t=e.url?d(d({},e),{},{url:Oo(e.url)}):e;i.set(e.timecode,Rn(t))}),i},ps=e=>{const{events:t,set:n}=e,i=function(e){return{cardsMap:us(e.config),activeCard:null,hoveredCard:null,displayedCard:null,cardPressed:void 0}}(e),o=e=>{const{hoveredCard:t,activeCard:n}=e,i=null!==t?t:n;return{cards:d(d({},e),{},{displayedCard:i})}},r=e=>{e&&t.fire(Xt._cardDisplayed,e.id,e)},a=e=>e.timecode;return t.on(Xt._configChanged,(e,t)=>{n(e=>{const n=d(d({},e.cards),{},{cardsMap:us(t),activeCard:null,hoveredCard:null});return o(n)})}),t.on(Ut._addCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.set(e.timecode,e),r(e);const i=d(d({},t.cards),{},{cardsMap:n,activeCard:e.timecode});return o(i)})}),t.on(Ut._removeCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.delete(e.timecode);const i=d(d({},t.cards),{},{cardsMap:n,activeCard:null,hoveredCard:null});return o(i)})}),t.on(p.TIME_UPDATE,({currentTime:e})=>{n(t=>{const n=((e,t)=>{const{cardsMap:n}=e.cards;let i=n.values().filter(e=>((e,t)=>t>=a(e)&&t<(e=>a(e)+(e.displayTime||6))(e))(e,t)).slice(-1)[0];return(null==i?void 0:i.timecode)||null})(t,e),i=t.cards.cardsMap.get(n);if(n===t.cards.activeCard)return{};const s=d(d({},t.cards),{},{activeCard:n});return r(i),o(s)})}),t.on(Xt._ended,()=>{n(e=>{const t=d(d({},e.cards),{},{activeCard:null,hoveredCard:null});return o(t)})}),{cards:i,setCards:(e,i)=>{"cardPressed"!==e?((e,t)=>{n(n=>{const i=d(d({},n.cards),{},{[e]:t});return o(i)})})(e,i):t.fire(Xt._cardPressed,i)}}};function vs({config:e}){var t,n,i,r;const{title:a}=e.video,{title:s,portrait:l}=e.embed.settings,c=0===e.embed.on_site,u=e.embed.settings.spatial_label,p=!(!e.video.spatial||!u),v=e.request.file_codecs||e.video.file_codecs,m=!H(v),f=m&&(null==(t=v.hevc)||null==(n=t.dvh1)?void 0:n.length)>0,h=e.video.channel_layout||"stereo",_=e.video.owner[o.devicePixelRatio>1?"img_2x":"img"],g=m&&(null==(i=v.hevc)||null==(r=i.hdr)?void 0:r.length)>0,b=e.video.owner.name,y=za("video-portrait",e),w=za("video-title",e),E=za("video-byline",e),C=function(e){let t={displayByline:!1,displayBadge:!1};if(e.embed.settings.byline){const{type:n,url:i}=e.embed.settings.byline_badge||{};Object.assign(t,{displayByline:!0,displayBadge:!e.video.live_event,bylineBadgeType:n,bylineBadgeUrl:i})}return t}(e);return d({ownerLinkUrl:ms(y,"owner_portrait",e),titleLinkUrl:ms(w,"video_title",e),bylineLinkUrl:ms(E,"owner_name",e),displayTitle:!!s,displayPortrait:!!l,ownerName:b,targetBlank:c,portraitImg:_,title:a,is360:p,hasHDR:g,hasDolbyVision:f,channelLayout:h},C)}function ms(e,t,n){return Bo({url:e,embedded:!n.embed.on_site,ownerId:`${n.video.owner.id}`,element:t})}function fs(e){var t;const{embed:n,request:i,video:o}=e.config,{backbone:r}=e,a=Bo({url:za("vimeo-logo",e.config),embedded:!n.on_site,ownerId:`${o.owner.id}`,element:"vimeo_logo"});return{overrideBehavior:!1,trailerButtonText:null==(t=o.vod)?void 0:t.button_text,vimeoLogoUrl:a,supportsSettingVolume:hs(e),currentVolume:r.volume&&!r.muted?r.volume:0,thumbnailPreview:i.thumb_preview}}function hs(e){const{backbone:t}=e;return!t||t.supportsSettingVolume}let _s,gs;!function(e){e.XXS="xxs",e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e.XL="xl",e.XXL="xxl"}(_s||(_s={})),function(e){e.EMPTY="empty",e.SHARE="share",e.HELP="help",e.ERROR="error",e.APP_REDIRECT="app-redirect",e.PRIVATE_LOCKED="private-locked",e.PRIVATE_UNLOCKED="private-unlocked",e.WEBINAR_BLOCKED="webinar-blocked",e.WEBINAR_CONFIRMATION="webinar-confirmation",e.EMAIL_CAPTURE="email-capture",e.NOT_SUPPORTED="not-supported"}(gs||(gs={}));const bs=e=>e.querySelector(".vp-overlay-wrapper"),ys=e=>{if(e){const t=bs(e);if(t&&!t.classList.contains("hidden")&&!t.classList.contains("out"))return!0}return!1},ws=e=>{const t=bs(e);return t&&ys(e)?t.getAttribute("name"):gs.EMPTY},Es=(e,t={},n)=>(e=>void 0!==e)(t[e])?t[e]:n[e];function Cs(e,t){return!e||0===e.length||-1!==e.indexOf(t)}const ks=e=>[en.main,en.privateUnlocked,en.webinarUnlocked].includes(e),Ls=(e,t)=>e&&(e.contains(t.target)||e===t.target),Ts=({config:e,element:t})=>{var n;return!(t.classList.contains("player-tiny")||ys(t)||e.view&&!ks(e.view)||null!=(n=e.embed)&&n.autoplay)},Ss=e=>({onClick:e,onKeyDown:t=>{"Enter"===t.key&&e(t)}}),As=e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n},Ps=(...e)=>e.reduce((e,t)=>t?`${e} ${t}`:e,""),Is={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},Rs=(e=[],t)=>e.map(e=>(e.active=`${e.id}`===t,e)),xs=e=>{let{clientX:t}=e;return e.targetTouches&&e.targetTouches.length>0&&(t=e.targetTouches[0].clientX,e.preventDefault()),t},Ds=(e,t)=>e-t.startTime,Ns=(e,t)=>{const{startTime:n,endTime:i,duration:o}=t;return e<n?0:e>i?1:Ds(e,t)/o},Ms=(e,t=!0)=>{const n=100*(t?St(e,2):e);return`${Math.min(n,100)}%`},Os=(e,t)=>{const{startTime:n,duration:i}=t;return n+i*e},Bs=e=>{var t;const{view:n,video:i,embed:r,request:a}=e.config,{vod:s}=i,l=n!==en.main&&n!==en.privateUnlocked&&n!==en.webinarUnlocked,c=!!r.settings.instant_sidedock,d=(null==(t=e.store)?void 0:t.get("ui.player.mode"))===Za.TINY,u=s&&"purchase_options"in s&&!!s.purchase_options.length,p=s&&Cs(s.countries,a.country);return!ys(e.element)&&!d&&(o.touch||l||c||u&&p)},Vs=e=>{var t;const{view:n,embed:i,request:o}=e.config;return!(ys(e.element)||n&&!ks(n)||i.autoplay&&(null==(t=o.flags)?void 0:t.autohide_controls)||i.settings.background||0===i.settings.controls)};function Fs({element:e}){return{purpose:ws(e)}}const Us=({element:e,config:t})=>{if(e.classList.contains("player-mini")||e.classList.contains("player-tiny"))return!1;const{embed:n}=t;return!(!n.settings.badge||n.autoplay&&16!==n.settings.badge.id)},qs=e=>({displayList:function(e){const t=Bs(e),n=Ts(e),i=(e=>Fs(e).purpose!==gs.EMPTY)(e),o=(({store:e,config:t,events:n,set:i})=>{var o,r;return n.on(Xt._configChanged,(e,t)=>{i(e=>{var n,i;return{displayList:d(d({},e.displayList),{},{cards:!!(null==(n=t.embed)||null==(i=n.cards)?void 0:i.length)&&!e.appearance.isMenuBlockingUI})}})}),!!(null==(o=t.embed)||null==(r=o.cards)?void 0:r.length)&&!e.get("ui.controlbar.isMenuFullWidth")})(e),r=Us(e),a=Vs(e);return(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:d(d({},e.displayList),{},{outro:t})}))};t.on(Xt._outroDisplayed,()=>n(!0)),t.on([Xt._outroHidden,p.PLAY,p.SEEKED,Xt._scrubbingStarted,Ut._reset],()=>n(!1))})(e),(({store:e,config:t,set:n})=>{e.watch("ui.controlbar.isMenuFullWidth",e=>{n(n=>{var i,o;return{displayList:d(d({},n.displayList),{},{cards:!!(null==(i=t.embed)||null==(o=i.cards)?void 0:o.length)&&!e})}})})})(e),(({set:e,events:t,store:n})=>{n.watch("ui.player.mode",t=>{t===Za.TINY&&e(e=>({displayList:d(d({},e.displayList),{},{debugPanel:!1})}))}),t.on(Xt._debugButtonPressed,()=>{e(e=>n.get("ui.player.mode")===Za.TINY?{}:{displayList:d(d({},e.displayList),{},{debugPanel:!e.displayList.debugPanel})})})})(e),(({set:e,get:t,store:n,subscribe:i,events:o})=>{function r(n={}){t().displayList.sideDock&&e(e=>{const{playback:t,displayList:i,appearance:r,embed:a}=e,{overlay:s,alert:l,menu:c}=i,{playInitiated:u,targetTimeReached:p}=t,{forceExitedFullscreen:v}=r,m=Es("mousedOverSidedock",n,r),f=s||l||c&&r.isMenuBlockingUI;return v?{}:u&&p||f||a.autoHideControls?m?{}:!r.externalDisplay&&!r.pictureInPictureActive||f?(o.fire(Xt._sidedockVisibilityChanged,!1),{appearance:d(d({},e.appearance),{},{mousedOverSidedock:m}),displayList:d(d({},e.displayList),{},{sideDock:!1})}):{}:{}})}function a(i={}){t().displayList.sideDock||e(e=>{const{displayList:t,appearance:r}=e,{menu:a,overlay:s,alert:l}=t;return s||l||a&&r.isMenuBlockingUI||n.get("ui.player.mode")===Za.TINY?{}:(o.fire(Xt._sidedockVisibilityChanged,!0),{appearance:d(d({},e.appearance),{},{shouldRestoreSidedock:!1,mousedOverSidedock:Es("mousedOverSidedock",i,e.appearance)}),displayList:d(d({},e.displayList),{},{sideDock:!0})})})}function s(){return r({mousedOverSidedock:!1})}function l(e,t){e&&t&&s()}function c(e,t){!e&&t&&a()}o.on([Xt._mousedOut,Xt._mouseTimeout,Xt._nudgeAttempted],r),o.on([Xt._mousedOver,Xt._airPlayActivated,p.ENTER_PICTURE_IN_PICTURE],a),o.on(Xt._configChanged,(function(t,n){const i=Bs({config:n});e(e=>({displayList:d(d({},e.displayList),{},{sideDock:i})}))})),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>!e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.alert},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?l(e,t().appearance.isMenuBlockingUI):c(e,t().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?l(t().displayList.menu,e):c(t().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>e?s():a()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},n=>{n?e(e=>({displayList:d(d({},e.displayList),{},{sideDock:!1})})):t().displayList.sideDock||a()}),n.watch("ui.player.mode",n=>{n===Za.TINY&&t().displayList.sideDock?e(e=>({displayList:d(d({},e.displayList),{},{sideDock:!1}),appearance:d(d({},e.appearance),{},{shouldRestoreSidedock:!0})})):t().appearance.shouldRestoreSidedock&&a()})})(e),(e=>{const{set:t,get:n,subscribe:i,events:o,config:r,element:a}=e;function s(){t(e=>{const{displayList:t,appearance:n,playback:i}=e,{menu:o,overlay:a,outro:s}=t,{isMenuBlockingUI:l,externalDisplay:c}=n,{scrubbing:u,paused:p}=i,v=a||s||o&&l,{embed:m}=r;return n.sizeMode===Za.TINY?{}:m.settings.title?v?{}:c?{displayList:d(d({},e.displayList),{},{title:!0})}:!p||u?{}:{displayList:d(d({},e.displayList),{},{title:!0})}:{}})}function l(){t(e=>{const{displayList:t,appearance:n,playback:i}=e,{menu:o,overlay:r,outro:a}=t,{isMenuBlockingUI:s,externalDisplay:l}=n,{playInitiated:c}=i,u=r||a||o&&s;return n.sizeMode===Za.TINY||u?{displayList:d(d({},e.displayList),{},{title:!1})}:l||!c?{}:{displayList:d(d({},e.displayList),{},{title:!1})}})}function c(e,t){e&&t&&l()}function u(e,t){!e&&t&&s()}i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.fullscreen},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?c(e,n().appearance.isMenuBlockingUI):u(e,n().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?c(n().displayList.menu,e):u(n().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},e=>{[gs.NOT_SUPPORTED,gs.PRIVATE_UNLOCKED,gs.HELP,gs.EMPTY].includes(e)||l()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.sizeMode},e=>{e===Za.TINY?l():s()}),o.on(Xt._ended,l).on(Ut._reset,s).on(Xt._configChanged,e=>{t(t=>({displayList:d(d({},t.displayList),{},{title:Ts({config:e,element:a})})}))})})(e),(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:d(d({},e.displayList),{},{overlay:t})}))};t.on(Xt._overlayOpened,()=>n(!0)),t.on(Xt._overlayClosed,()=>n(!1))})(e),(({set:e,events:t})=>{t.on(Xt._alertVisibilityChanged,t=>{e(e=>({displayList:d(d({},e.displayList),{},{alert:t})}))})})(e),(({events:e,subscribe:t,set:n})=>{e.on(Ut._reset,()=>{n(e=>({displayList:d(d({},e.displayList),{},{menu:!1})}))}),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},t=>{const n=t?"preact-menu":"";e.fire(Xt._menuVisibilityChanged,n)})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:d(d({},e.displayList),{},{ad:t})}));t.on(Xt._pausedForAd,()=>n(!0)),t.on([Xt._resumedAfterAd,Ut._reset],()=>n(!1))})(e),(({set:e,get:t,config:n,events:i,subscribe:o,store:r,element:a})=>{let s=n;const l=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>({displayList:d(d({},e.displayList),{},{badge:!1})}))},c=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>{const{appearance:t}=e;return[Za.MINI,Za.TINY].includes(t.sizeMode)?{}:s.embed.settings.badge?{displayList:d(d({},e.displayList),{},{badge:!0}),appearance:d(d({},e.appearance),{},{shouldRestoreBadge:!1})}:{}})};function u(t){e(e=>({displayList:d(d({},e.displayList),{},{badge:Us({config:t,element:a})})}))}i.on(Xt._controlBarVisibilityChanged,e=>{var t,n,i;16===(null==(t=s.embed)||null==(n=t.settings)||null==(i=n.badge)?void 0:i.id)&&(e?c({isStockBadgeBehavior:!0}):l({isStockBadgeBehavior:!0}))}),i.on(Xt._ended,l),i.on(Xt._configChanged,(e,t)=>{s=t,u(t)}),i.on(Ut._reset,()=>{u(s)}),r.watch("ui.player.mode",n=>{n!==Za.TINY&&n!==Za.MINI||!t().displayList.badge?t().appearance.shouldRestoreBadge&&c():e(e=>({displayList:d(d({},e.displayList),{},{badge:!1}),appearance:d(d({},e.appearance),{},{shouldRestoreBadge:!0})}))}),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>!e&&l()),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{(function(e){return[gs.NOT_SUPPORTED,gs.PRIVATE_UNLOCKED,gs.HELP,null].includes(e)})(e)||l(),e||t().playback.playInitiated||c()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:d(d({},e.displayList),{},{notification:t})}));t.on([Xt._liked,Xt._unliked,Xt._addedToWatchLater,Xt._removedFromWatchLater],e=>{e||n(!0)}),t.on([Xt._notificationHidden,Ut._reset],()=>n(!1))})(e),(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:d(d({},e.displayList),{},{pipOverlay:t})}))};t.on(p.ENTER_PICTURE_IN_PICTURE,()=>n(!0)),t.on(p.LEAVE_PICTURE_IN_PICTURE,()=>n(!1))})(e),(({set:e,events:t,config:n,subscribe:i,element:o})=>{function r(n={}){e(e=>{const{controlBar:i,embed:o,playback:r,displayList:a,appearance:s,overlay:l}=e,c=Es("mousedOverControlBar",n,s);return i.overrideBehavior||s.forceExitedFullscreen?{}:r.playInitiated&&r.targetTimeReached||a.overlay||o.autoHideControls||a.ad?c?{}:!s.externalDisplay&&!s.pictureInPictureActive||a.overlay?a.overlay&&l.purpose===gs.PRIVATE_UNLOCKED||r.buffering||r.scrubbing?{}:(t.fire(Xt._controlBarVisibilityChanged,!1),{appearance:d(d({},e.appearance),{},{mousedOverControlBar:c}),displayList:d(d({},e.displayList),{},{controlBar:!1})}):{}:{}})}function a(){e(e=>{const{displayList:n,controlBar:i}=e;return i.overrideBehavior||n.overlay?{}:(t.fire(Xt._controlBarVisibilityChanged,!0),{displayList:d(d({},e.displayList),{},{controlBar:!0})})})}function s(){return r({mousedOverControlBar:!1})}function l(t){const n=Vs({config:t,element:o});e(e=>({displayList:d(d({},e.displayList),{},{controlBar:n})}))}t.on([Xt._mousedOver,Xt._scrubbingStarted,Ut._changeVolume,Ut._reset],a),t.on(Xt._mousedOut,s),t.on(Xt._mouseTimeout,r),t.on(Xt._configChanged,(function(e,t){l(t)})),t.on([A.STREAM_ONLINE,A.STREAM_OFFLINE,A.EVENT_ENDED],(function(){l(n)})),t.on(Ut._setControlsVisibility,(function(t){e(e=>e.controlBar.overrideBehavior?{displayList:d(d({},e.displayList),{},{controlBar:t})}:{})})),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>e&&a()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?s():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?r():a()})})(e),{debugPanel:!1,cards:o,sideDock:t,title:n,controlBar:a,outro:!1,overlay:i,alert:!1,menu:!1,ad:!1,badge:r,notification:!1,pipOverlay:!1}}(e),setDisplayList:(t,n)=>{e.set(e=>({displayList:d(d({},e.displayList),{},{[t]:n})}))}});function Hs(e){return{breakpoint:e.store.get("ui.player.breakpoint"),sizeMode:e.store.get("ui.player.mode"),fullscreen:!1,forceExitedFullscreen:!1,pictureInPictureActive:!1,externalDisplay:!1,mousedOverSidedock:!1,mousedOverControlBar:!1,isMenuBlockingUI:e.store.get("ui.controlbar.isMenuFullWidth"),isMenuVerticalVideoMode:e.store.get("ui.controlbar.isMenuVerticalVideoMode"),shouldRestoreSidedock:!1,shouldRestoreBadge:!1,isVerticalVideo:e.store.get("ui.player.isVerticalVideo"),boundingClientRect:bt(e.element),isDisplayContextBackbone:e.displayContext===e.backbone,showAirPlayPicker:!1,shouldMenuItemsWrap:e.store.get("ui.controlbar.doMenuItemsWrap"),stereoscopicEnabled:!1,height:e.store.get("ui.player.height")}}const $s=(e,t)=>{Ce(()=>{!function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(t.ready(),(function(){e()}))}))()})},Ws=e=>`opacity ${e}ms ease-out`,js=({children:e,visible:t,duration:n=250,styleOverrides:i={},onFaded:o})=>{const r=Ws(n),a={enter:{opacity:0},enterActive:{opacity:1,transition:r},exit:{opacity:1},exitActive:{opacity:0,transition:r},exitDone:{display:"none"}};return Object.keys(i).forEach(e=>{e in a&&Object.assign(a[e],i[e])}),ke(Le,{in:t,duration:n,styles:a,alwaysMounted:!0,onExited:()=>{o&&o()},children:e})},zs=({isMenuDisplayed:e,defaultPanel:t,setPanel:n})=>{Ce(()=>{e||setTimeout(()=>{n(t)},250)},[e])};const Ys=e=>{let{href:t,children:n,element:i="div",className:o="",targetBlank:r=!0}=e,a=Te(e,["href","children","element","className","targetBlank"]);const s=Se(i,d(d({},a),{},{className:o}),n);return t?ke(Ae,d(d(d({href:t,variant:"minimal",className:`${o} Link_module_link__f62f9475`},r?{target:"_blank",rel:"noreferrer"}:{}),a),{},{children:n})):s},Gs=({children:e})=>{const t=Pe(null);return e.ref=t,Ce(()=>{if(t.current){const e=t.current.querySelectorAll("path, polygon");Array.from(e).forEach(e=>e.classList.add("fill"))}},[e]),ke(Ie,{children:e})},Ks={close:e=>{let t=Object.assign({},e);return ke("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",fill:"#fff",fillRule:"evenodd"})}))},airPlay:({className:e})=>ke("svg",{className:e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-airplay-icon":!0,children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"})}),dolbyVision:e=>{let t=Object.assign({},e);return ke("svg",d(d({viewBox:"0 0 844 126","aria-labelledby":"dv-logo-title"},t),{},{children:[ke("title",{id:"dv-logo-title",children:"Dolby Vision"}),ke("path",{d:"M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",fill:"currentColor",fillRule:"nonzero"})]}))},pip:e=>{let{direction:t="enter"}=e,n=Te(e,["direction"]);return ke("svg",d(d({className:"pip-icon",viewBox:"0 0 16 12"},n),{},{children:[ke("polygon",{className:"fill",points:"6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"}),ke("rect",{className:"fill",x:"7",y:"7",width:"9",height:"5"}),ke("polyline",{className:"fill",transform:"enter"===t?"translate(4, 4) rotate(180) translate(-4, -4)":"",points:"5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"})]}))},enterFullscreen:()=>ke("svg",{className:"enter-fullscreen-icon",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"})}),exitFullscreen:()=>ke("svg",{className:"exit-fullscreen-icon",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"})]}),gear:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"})}))},vimeo:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"54",height:"18",viewBox:"0 0 54 18",role:"img",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"})}))},vimeoSmall:e=>{let t=Object.assign({},e);return ke("svg",d(d({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"})}))},enterPictureInPicture:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{"data-enter-pip":!0,children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",fill:"white"})}))},exitPictureInPicture:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-exit-pip":!0},t),{},{children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"})}))},pause:({className:e})=>ke("svg",{className:e,width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-pause-icon":!0,children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",className:"fill",d:"M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"})}),play:({className:e})=>ke("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:e,"data-play-icon":!0,children:ke("path",{d:"M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",className:"fill"})}),replay:({className:e})=>ke("svg",{className:e,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:ke("path",{className:"fill",d:"M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"})}),chapters:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"})}))},point:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("circle",{className:"fill",cx:"4",cy:"4",r:"4"})}))},cc:e=>{let t=Object.assign({},e);return ke("svg",d(d({viewBox:"0 0 24 24","data-cc-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"})}))},ccFilled:e=>{let t=Object.assign({},e);return ke("svg",d(d({viewBox:"0 0 24 24","data-cc-filled-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"})}))},checkmark:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",fill:"white"})}))},stereoscopic:()=>ke("svg",{viewBox:"0 0 64 64",children:ke("path",{className:"fill",d:"M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"})}),personFilled:e=>{let t=Object.assign({},e);return ke("svg",d(d({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fill:"white",fillRule:"evenodd",clipRule:"evenodd",d:"M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"})}))}};let Zs;!function(e){e.DOLBY_VISION="dolbyVision",e.CLOSE="close",e.PIP="pip",e.AIRPLAY="airPlay",e.ENTER_FULLSCREEN="enterFullscreen",e.EXIT_FULLSCREEN="exitFullscreen",e.GEAR="gear",e.VIMEO="vimeo",e.VIMEO_SMALL="vimeoSmall",e.ENTER_PICTURE_IN_PICTURE="enterPictureInPicture",e.EXIT_PICTURE_IN_PICTURE="exitPictureInPicture",e.PAUSE="pause",e.PLAY="play",e.REPLAY="replay",e.CHAPTERS="chapters",e.POINT="point",e.CC="cc",e.CC_FILLED="ccFilled",e.CHECKMARK="checkmark",e.STEREOSCOPIC="stereoscopic",e.PERSON_FILLED="personFilled"}(Zs||(Zs={}));const Xs=e=>{let{name:t,className:n}=e,i=Te(e,["name","className"]);const o=Ks[t];return o&&ke(o,d({className:n},i))},Js=Re({menuEventFromKeyboard:!1,isAccordionToggling:!1,activeAccordion:"",setMenuEventFromKeyboard:()=>{},setAccordionToggling:()=>{},setActiveAccordion:()=>{}}),Qs=({children:t,menuRef:n,panelRef:i,headerRef:o,buttonRef:r,panel:a,isMenuDisplayed:s,setMenuDisplayed:l})=>{const{menuEventFromKeyboard:c}=xe(Js),d=Bl(e=>e.embed.keyboard),u=(t,n)=>{let i=[];const o=(null==t?void 0:t.children)||[],r=(null==n?void 0:n.children)||[];return[].concat(e(o),e(r)).forEach(e=>{var t;const n=window.getComputedStyle(e);!n.display||"none"===n.display||(e.tabIndex>-1&&i.push(e),(null==(t=e.children)?void 0:t.length)&&(i=i.concat(u(e,[]))))}),i},p=()=>{var e,t;((null==o||null==(e=o.current)?void 0:e.contains(document.activeElement))||(null==i||null==(t=i.current)?void 0:t.contains(document.activeElement)))&&(null==r?void 0:r.current)&&r.current.focus()},v=e=>{let t=u(o.current,i.current),n=t.indexOf(document.activeElement),r="up"===e?n-1:n+1,a=null;a=r>=t.length?t[0]:r<0?t[t.length-1]:t[r],a&&a.focus()},m=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&v("up")},f=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&v("down")},h=()=>{(null==n?void 0:n.current)&&(p(),l(!1))},_=e=>{const t=(e=>{if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Is?Is[e.which]:String.fromCharCode(e.which).toLowerCase()})(e),n={up:m,down:f,left:m,right:f,esc:h};"function"==typeof n[t]&&n[t]()};return Ce(()=>(d&&(document.addEventListener("keydown",_,!1),document.addEventListener("keypress",_,!1)),()=>{document.removeEventListener("keydown",_,!1),document.removeEventListener("keypress",_,!1)}),[d]),Ce(()=>{c&&s&&(()=>{const e=u(o.current,i.current);e.length>0&&e[0].focus()})()},[i,o,a,s]),Ce(()=>{s||p()},[s]),ke(Ie,{children:t})};const el=({isMenuDisplayed:e,setMenuDisplayed:t,panel:n,buttonRef:i,progressBarAndButtonsRef:o,panelContent:r,headerContent:a})=>{const s=Pe(null),l=Pe(null),c=Pe(null),u=Pe(null),p=Pe(null),[v,m]=De({height:"auto"}),[h,_]=De({}),[g,b]=De(!1),[y,w]=De(!1),E=Bl(e=>e.appearance.isMenuBlockingUI),C=Bl(e=>e.appearance.isMenuVerticalVideoMode),k=Bl(e=>e.appearance.boundingClientRect),L=Bl(e=>e.displayList.controlBar),{isAccordionToggling:T}=xe(Js),S=e=>{const t=window.getComputedStyle(e);return parseFloat(t.fontSize)},A=()=>{b(!1),cancelAnimationFrame(null==p?void 0:p.current)},P=()=>{if(!(null==s?void 0:s.current))return;if(E)return w(!1),void m(e=>d(d({},e),{},{height:"100%"}));let e="auto";const t=bt(s.current),n=S(s.current),i=t.bottom-s.current.scrollHeight,o=Math.max(k.top,0)-i;if(o>0){let t=s.current.scrollHeight-o-n;e=`${t/n}em`}m(t=>d(d({},t),{},{height:e})),w(o>0)},I=()=>{if(!(null==c?void 0:c.current))return;if(E)return void _({});if(!e)return void _({height:"0"});const t=S(c.current),n=`${(c.current.scrollHeight+16)/t}em`;_({height:n})},R=()=>{P(),g&&(p.current=requestAnimationFrame(R))},x=()=>{A(),I(),P()},D=f(n=>{(null==s?void 0:s.current)&&(null==i?void 0:i.current)&&e&&(i.current.contains(n.target)||s.current.contains(n.target)||!document.contains(n.target)||E||t(!1))},200),N=f(()=>{E||t(!1)},200);Ce(()=>(document.addEventListener("click",D,!1),window.addEventListener("blur",N,!1),()=>{document.removeEventListener("click",D,!1),window.removeEventListener("blur",N,!1)}),[s,i,e]),Ce(()=>((()=>{if(!(null==s?void 0:s.current)||!(null==i?void 0:i.current)||!(null==o?void 0:o.current))return;if(E||C)return void m(e=>d(d({},e),{},{right:""}));const e=bt(i.current),t=bt(o.current),n=bt(s.current);let r=-8;const a=e.right-e.width/2+n.width/2+8;a<t.right&&(r=t.right-a);const l=S(s.current);m(e=>d(d({},e),{},{right:`${r/l}em`}))})(),!e||E?x():(I(),b(!0),R()),()=>{A()}),[e,n,null==k?void 0:k.width,E]),Ce(()=>{L||t(!1)},[L]),Ce(()=>{(null==l?void 0:l.current)&&(T?E?P():(_(e=>d(d({},e),{},{height:"auto"})),b(!0),R()):E?(b(!1),x()):(I(),R()))},[T]);const M=Ps("vp-menu","Menu_module_menu__376b0d95",y&&"Menu_module_scroll__376b0d95",E&&"Menu_module_fullWidth__376b0d95",C&&"Menu_module_verticalVideo__376b0d95");return ke(Qs,{menuRef:s,panelRef:c,headerRef:u,buttonRef:i,panel:n,isMenuDisplayed:e,setMenuDisplayed:t,children:ke(js,{visible:e,children:ke("div",{className:M,ref:s,style:v,onTransitionEnd:e=>{e.target===(null==l?void 0:l.current)&&"height"===e.propertyName&&(P(),A())},children:[ke("div",{ref:u,children:a}),ke("div",{ref:l,className:"Menu_module_menuBody__376b0d95",style:h,children:ke("div",{className:"Menu_module_menuPanel__376b0d95",ref:c,children:r})})]})})})};const tl=({buffer:e=!1})=>ke("div",{className:`Divider_module_divider__0570d402 ${e?"Divider_module_buffer__0570d402":""}`});const nl=({onBack:e=null,title:t,setMenuDisplayed:n})=>{const{isMenuBlockingUI:i}=Bl(e=>e.appearance),o=Ps("MenuHeader_module_menuHeader__6e1aef22",i&&"MenuHeader_module_fullWidth__6e1aef22",e&&"MenuHeader_module_hasBack__6e1aef22");return ke("div",{className:o,children:[ke("header",{className:"MenuHeader_module_header__6e1aef22",children:[ke("div",{className:"MenuHeader_module_backButtonWrapper__6e1aef22",children:ke(Ne,{className:"vp-iris-button MenuHeader_module_backButton__6e1aef22",onClick:e,"aria-label":"Back",format:"alternative",icon:ke(Me,{})})}),ke(Oe,{size:"6",element:"span",className:"MenuHeader_module_title__6e1aef22",children:t}),ke("div",{className:"MenuHeader_module_closeButtonWrapper__6e1aef22",children:ke(Ne,{className:"vp-iris-button MenuHeader_module_closeButton__6e1aef22",onClick:()=>n(!1),format:"alternative",icon:ke(Be,{})})})]}),ke(tl,{})]})};const il=e=>{let{className:t,id:n,active:i,withActive:o=!0,onSelect:r,element:a="div",styled:s=!0,children:l}=e,c=Te(e,["className","id","active","withActive","onSelect","element","styled","children"]);const{onClick:u,onKeyDown:p}=hl(r),v=Ps("MenuOption_module_option__4f5c004b",o&&"MenuOption_module_withActive__4f5c004b",s&&"MenuOption_module_styled__4f5c004b",t),m=d({className:v,role:"menuitemradio","aria-checked":i,"data-id":n,tabIndex:0,onClick:u,onKeyDown:p},c);return Se(a,m,l)};const ol=({className:e,onSelect:t,label:n,value:i,id:o,small:r=!1,isAccordion:a=!1,isOpened:s=!1})=>{const l=a?Fe:Me;return ke(il,{className:`MenuOptionButton_module_optionButton__94d24843 ${r?"MenuOptionButton_module_small__94d24843":""} ${e}`,onSelect:t,id:o,withActive:!1,children:[ke(dl,{size:a?1:2,element:"span",className:"MenuOptionButton_module_label__94d24843",children:n}),i&&ke(Ve,{element:"span",size:100,format:"basic",className:"MenuOptionButton_module_value__94d24843",children:i}),ke("div",{className:`MenuOptionButton_module_icon__94d24843 ${s?"MenuOptionButton_module_open__94d24843":""}`,children:ke(l,{})})]})};const rl=({onSelect:e,label:t,active:n,id:i,ordered:o=!1,index:r,isAccordion:a=!1,tabIndex:s})=>{const l=Ps("MenuOptionListItem_module_listItem__3beda195",o&&"MenuOptionListItem_module_ordered__3beda195",n&&"MenuOptionListItem_module_active__3beda195",a&&"MenuOptionListItem_module_accordion__3beda195");return ke(il,{element:"li",className:l,onSelect:e,active:n,id:i,tabIndex:s,children:[ke("div",o?{className:"MenuOptionListItem_module_number__3beda195",children:r}:{className:`MenuOptionListItem_module_check__3beda195 ${n?"MenuOptionListItem_module_activeCheck__3beda195":""}`,children:ke(Xs,{name:Zs.CHECKMARK})}),ke(Ve,{element:"span",size:a?150:200,children:t}),o&&n&&ke("div",{className:"MenuOptionListItem_module_point__3beda195",children:ke(Xs,{name:Zs.POINT})})]})};const al=({items:e,onSelect:t,ordered:n=!1,isAccordion:i=!1,listItemTabIndex:o=0})=>{const r=n?"ol":"ul",a={className:"MenuOptionList_module_list__13700c82",role:"group"},s=e.map(e=>ke(rl,{id:e.id,active:e.active,label:e.label,onSelect:t,ordered:n,index:e.index,isAccordion:i,tabIndex:o},e.id));return Se(r,a,s)};var sl="shared_module_focusable__e3c144e7";const ll=({className:e=""})=>{const t=Bl(e=>e.setCaptions);return ke(il,{element:"button",className:`iris-button ResetButton_module_resetButton__b05b35a4 ${sl} ${e}`,onSelect:()=>t("fontSize",null),withActive:!1,styled:!1,children:ke("span",{children:"Reset all"})})};const cl=({label:e,items:t=[],onSelect:n})=>{var i;const o=Pe(null),r=Pe(null),{setAccordionToggling:a,activeAccordion:s,setActiveAccordion:l}=xe(Js),[c,d]=De(!1),[u,p]=De({}),v=null==(i=t.find(e=>e.active))?void 0:i.label,m=t=>{const n=void 0!==t?t:!c;d(n),a(!0),n&&l(e)},f=e=>{e.target===r.current&&"height"===e.propertyName&&a(!1)},h=e=>{(null==o?void 0:o.current)&&!o.current.contains(e.target)&&o.current!==e.target&&m(!1)};return Ce(()=>(document.addEventListener("click",h),document.addEventListener("transitionend",f),()=>{l(""),document.removeEventListener("click",h),document.removeEventListener("transitionend",f)}),[]),Ce(()=>{p((()=>{let e={};if(c&&(null==r?void 0:r.current)){const t=window.getComputedStyle(r.current),n=parseFloat(t.fontSize);e={height:`${r.current.scrollHeight/n}em`}}return e})())},[c,r]),Ce(()=>{s&&s!==e&&m(!1)},[s]),t.length&&ke("div",{className:"Accordion_module_accordion__824571a1",role:"menu",ref:o,children:[ke(ol,{label:e,value:v,onSelect:()=>m(),isAccordion:!0,isOpened:c}),ke("div",{className:"Accordion_module_content__824571a1",ref:r,style:u,children:ke(al,{items:t,onSelect:n,isAccordion:!0,listItemTabIndex:c?0:-1})})]})};const dl=({element:e="span",children:t,size:n=1,weight:i=1,className:o=""})=>{const r=Ps("Header_module_header__47e5f79f",{1:"Header_module_sm__47e5f79f",2:"Header_module_md__47e5f79f"}[n],{1:"Header_module_bold__47e5f79f"}[i],o);return Se(e,{className:r},t)};const ul=({label:e,className:t=""})=>ke("div",{className:`MenuFieldLabel_module_menuField__920c408e ${t}`,children:ke(dl,{size:1,element:"span",weight:1,className:"MenuFieldLabel_module_label__920c408e",children:e})}),pl=({items:e=[],label:t,onSelect:n})=>{const i=Bl(e=>e.appearance.shouldMenuItemsWrap);return ke(Ie,{children:[ke(ul,{label:t}),ke("ul",{className:`ButtonRow_module_buttonRow__e7d63775 ${i?"ButtonRow_module_wrap__e7d63775":""}`,role:"menu","aria-label":t,children:e.map(e=>ke(il,{element:"li",className:`ButtonRow_module_filledButton__e7d63775 ${e.active?"ButtonRow_module_active__e7d63775":""}`,active:e.active,id:e.id,onSelect:n,styled:!1,children:ke(dl,{size:1,weight:1,element:"span",className:"ButtonRow_module_label__e7d63775",children:e.label})},e.id))})]})};const vl=({items:e=[],label:t,onSelect:n})=>{const i=Bl(e=>e.appearance.shouldMenuItemsWrap);return ke(Ie,{children:[ke(ul,{label:t}),ke("ul",{className:`ColorSwabs_module_colorSwabs__ff6f39bf ${i?"ColorSwabs_module_wrap__ff6f39bf":""}`,role:"menu","aria-label":t,children:e.map(e=>ke(il,{id:e.id,element:"li",className:`ColorSwabs_module_colorSwab__ff6f39bf ${e.active?"ColorSwabs_module_active__ff6f39bf":""}`,active:e.active,"aria-label":e.label,onSelect:n,styled:!1,children:ke("div",{className:"ColorSwabs_module_inner__ff6f39bf",style:{backgroundColor:e.id}})},e.id))})]})};const ml=({children:t,tooltipText:n,className:i="",forceHide:o=!1})=>{var r,a,s;const[,l]=De(!1);let c=null==t?void 0:t.ref;const u=Pe(null);c=c||u;const p=Pe(null),v=d(d({},null==t?void 0:t.props),{},{className:`Tooltip_module_tooltipContainer__925de7a6 ${null==t||null==(r=t.props)?void 0:r.className}`,ref:c,onMouseEnter:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseEnter(e),l(!0)},onMouseLeave:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseLeave(e),l(!1)}}),m=((e,t)=>{const[n,i]=De("50%"),{left:o,right:r}=Bl(e=>e.appearance.boundingClientRect),a=Bl(e=>e.appearance.breakpoint);if(e&&t){const{left:n,right:s,width:l}=bt(t),{width:c}=bt(e),d=(c-l)/2,u=n-d,p=s+d,v=["xl","xxl"].includes(a)?16:8;i(`calc(50% + ${Math.max(o-v-u,0)-Math.max(p+v-r,0)}px)`)}return n})(null==p?void 0:p.current,null==(a=c)?void 0:a.current),f=Ps("Tooltip_module_tooltip__925de7a6","vp-tooltip",i),h=!o&&ke("span",{ref:p,style:{left:m},className:f,children:n}),_=(null==t||null==(s=t.props)?void 0:s.children)?[h].concat(e(t.props.children)):[h];return Ue(t,v,_)},fl=e=>ke(Ys,{className:e.classNames,href:e.url,tabIndex:e.url?"0":"-1","aria-describedby":"new-window",style:e.style,children:ke("img",{className:e.imgClassNames,src:e.img,alt:e.imgAlt})}),hl=e=>{const{setMenuEventFromKeyboard:t}=xe(Js);return{onClick:n=>{t(!1),n.preventDefault(),n.stopPropagation(),e(n)},onKeyDown:n=>{t(!0),["Enter"," "].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),e(n))}}};function _l(e){var t,n,i,r,a,s;const{embed:l,request:c,video:d}=e.config;return{autoPlay:!!l.autoplay,autoHideControls:!!(l.autoplay&&(null==(t=c.flags)?void 0:t.autohide_controls)),playbar:!!l.settings.playbar,like:!!l.settings.like,share:!!l.settings.share,embedOnlyShare:!!(null==(n=l.settings.share)?void 0:n.embed_only),collections:!!l.settings.collections,watchLater:!!l.settings.watch_later,isTrailer:!(null==(i=l.settings)||!i.watch_trailer||l.autoplay||!l.on_site),speedChangeEnabled:!(!l.settings.speed||!e.backbone.supportsPlaybackRate),keyboard:!!l.keyboard,showVimeoLogo:!!l.settings.logo,volume:!!l.settings.volume,fullscreen:!!l.settings.fullscreen,hideLiveLabel:!!(null==(r=d.live_event)||null==(a=r.settings)?void 0:a.hide_live_label),showViewerCount:!!(null==(s=d.live_event)?void 0:s.show_viewer_count),customLogo:!!l.settings.custom_logo,customLogoFields:function(e){var t;const{config:n}=e;let i={customLogoUrl:null,customLogoImg:null,customLogoSticky:!1,customLogoWidth:null,customLogoHeight:null};if(!(null==(t=n.embed.settings.custom_logo)?void 0:t.img))return i;const r=n.embed.settings.custom_logo;let a=r.img;return o.devicePixelRatio>=2&&(a=a.replace(/(mw|mh)=(\d+)/g,(function(e,t,n){return t+"="+2*parseInt(n,10)}))),i={customLogoUrl:Oo(r.url),customLogoImg:a,customLogoSticky:r.sticky,customLogoWidth:r.width,customLogoHeight:r.height},i}(e),background:!!l.settings.background,controls:0!==l.settings.controls}}const gl=[{id:.5,label:"0.5x"},{id:.75,label:"0.75x"},{id:1,label:"Normal"},{id:1.25,label:"1.25x"},{id:1.5,label:"1.5x"},{id:2,label:"2x"}],bl=Pn;function yl(e){const{config:t,backbone:n,fragmentsHandler:i}=e,r=wl(e),a=!!o.airPlay,s=!n||n.supportsTextTracks,l=t.embed.quality?Rs(n.qualities,t.embed.quality):n.qualities,c=El(n.qualities,t.embed.quality);return{playInitiated:!1,targetTimeReached:!1,scrubbing:!1,paused:!t.embed.autoplay,buffering:!1,loadedTime:0,currentTime:n.currentTime,currentFragment:i.currentFragment,duration:t.video.duration,qualities:l,currentQuality:c,playbackRates:r,loadedMetadata:!1,pictureInPictureEnabled:null==n?void 0:n.pictureInPictureEnabled,supportsAirPlay:a,supportsTextTracks:s,supportsStereoscopic:Cl(e),supportsChromecast:kl(e),isChromecastConnected:!1,isChromecastPlaying:!1,isAdPlaying:!1}}function wl(e){const{backbone:t,config:n}=e;let i=[];return t.supportsPlaybackRate&&n.embed.settings.speed&&(i=Rs(gl,`${t.playbackRate}`)),i}function El(e,t){var n;if(t){var i;const n="string"==typeof t?t:t.quality||`${t.height}p`,o=null==e||null==(i=e.find(e=>e.id===n))?void 0:i.label;if(o)return o}return null==e||null==(n=e.find(e=>e.active))?void 0:n.label}function Cl(e){const{config:t}=e;return"disable"!==t.video.privacy&&(o.webvr||o.stereoscopic)&&t.video.spatial&&zo(t,"webvr").group}function kl(e){const{config:t}=e;return zo(t,"chromecast").group&&o.browser.chrome&&(void 0===t.embed.settings.chromecast||t.embed.settings.chromecast)&&!t.video.spatial&&"stock"!==t.video.privacy}function Ll({config:e}){const{user:t,video:n}=e;return{liked:t.liked,loggedIn:t.logged_in,watchLater:t.watch_later,ownerName:n.owner.name,collected:!1,shared:!1}}const Tl={isVOD:!1,vodButtonVisible:!1};function Sl(e){const{video:t,embed:n,user:i,request:o}=e.config;let r=d({},Tl);if(t.vod&&"purchase_options"in t.vod&&t.vod.purchase_options.length){const e=!0,a=t.vod.is_coming_soon,s="ondemand.main"===n.context||"Vimeo\\Controller\\OnDemandController.main"===n.context,l=t.vod&&i.purchased;let c=n.settings.vod&&Cs(t.vod.countries,o.country);c&&a&&s&&(c=!1);const[d]=t.vod.purchase_options;let u=null;d&&(u=function(e,t,n,i){var o=i.label_string;return o?(o=function(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}(o=function(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null}(o.dynamic_translation_map,0,o.currency,d)),r.isVOD=e,r.vodLabel=u,r.purchased=!!l,r.productId=d.product_id,r.isExpiring=!!d.expiring,r.vodButtonVisible=c}return r}function Al({config:e}){const{badge:t}=e.embed.settings;let n=o.devicePixelRatio>1?"img_2x":"img";return o.svg&&t.svg&&(n="svg"),{link:t.link,img:t[n],margin:t.margin||!1,width:t.width,height:t.height,name:t.name,shadow:!!t.shadow,id:t.id}}function Pl(e){return{chapters:Array.from(e.backbone.chapters),activeChapterId:null}}function Il(e){const{backbone:t}=e,n=t.enabledTextTrack,{textTracks:i,activeTextTrack:o}=Rl(e,null==n?void 0:n.id),r=xl(e);return d({textTracks:i,activeTextTrack:o},r)}function Rl(e,t=null){var n;const{backbone:i,config:o}=e;let r=[],a=t;return(null==(n=i.textTracks)?void 0:n.length)&&(a||(a="off"),r.push({label:"Off",id:"off",active:"off"===a}),i.textTracks.forEach(e=>{let n="CC"===e.label.substring(e.label.length-2),i="captions"!==e.kind||n?"":" CC",a=o.video.live_event?"Display Captions":e.label+i;const s=`${e.id}`,l={label:a,id:s,active:t===s};r.push(l)})),{textTracks:r,activeTextTrack:a}}function xl(e){const{store:t}=e,n=ii();return Object.keys(n).forEach(e=>{const i=t.get(`ui.captions.${e}`);n[e]=i}),n}let Dl,Nl;function Ml(e){var t;const{config:n}=e,i=n.video.live_event,o=null==i?void 0:i.status,r=!!o,a=o!==Nl.ended,s=o===Nl.started,l=o===Nl.pending,c=o===Nl.ended,d=null==i||null==(t=i.archive)?void 0:t.status;return{liveEventStatus:o,isLiveEvent:r,isInProgress:a,hasStarted:s,isPending:l,hasEnded:c,liveEventArchiveStatus:d,archiveDone:"done"===d,viewerCount:vt(0),liveStatsRequestSucceeded:null}}!function(e){e.started="started",e.done="done",e.error="error"}(Dl||(Dl={})),function(e){e.pending="pending",e.active="active",e.started="started",e.ended="ended"}(Nl||(Nl={}));const{Provider:Ol,useStore:Bl}=qe(),Vl=({player:e,children:t})=>{const[n,i]=De(!1);return $s(()=>i(!0),e),n?ke(Ol,{createStore:()=>He($e((t,n,{subscribe:i})=>{const o=d(d({set:t,get:n,subscribe:i},e),{},{get backbone(){return e.backbone},get displayContext(){return e.displayContext},get config(){return e.config}}),{config:r,element:a,expose:s,verifyConfig:l}=e;return d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d({},(e=>{const{set:t,events:n}=e,i=ls(e);return n.on(Xt._debugDataChange,()=>{t(()=>({debug:ls(e)}))}),{debug:i}})(o)),(e=>{const{set:t,events:n}=e,i=fs(e),o=(e,n)=>{t(t=>({controlBar:d(d({},t.controlBar),{},{[e]:n})}))};return n.on(Xt._configChanged,()=>{t(()=>({controlBar:fs(e)}))}),n.on(Ut._overrideControlbarBehavior,e=>{o("overrideBehavior",e)}),n.on(Xt._volumeChanged,e=>{t(t=>({controlBar:d(d({},t.controlBar),{},{currentVolume:e})}))}),{controlBar:i,setControlBar:(e,t)=>{"currentVolume"!==e?o(e,t):n.fire(Ut._changeVolume,t)}}})(o)),qs(o)),(e=>{const{store:t,set:n,events:i,element:o,backbone:r}=e,a=Hs(e),s=(e,t)=>n(n=>({appearance:d(d({},n.appearance),{},{[e]:t})}));return t.watch("ui.player.breakpoint",e=>s("breakpoint",e)),t.watch("ui.player.mode",e=>s("sizeMode",e)),t.watch("ui.controlbar.isMenuFullWidth",e=>s("isMenuBlockingUI",e)),t.watch("ui.player.isVerticalVideo",e=>{s("isVerticalVideo",e)}),t.watch("ui.controlbar.isMenuVerticalVideoMode",e=>s("isMenuVerticalVideoMode",e)),t.watch("ui.player.width",()=>{s("boundingClientRect",bt(o))}),t.watch("ui.controlbar.doMenuItemsWrap",e=>{s("shouldMenuItemsWrap",e)}),t.watch("ui.player.height",e=>{s("height",e)}),i.on(Xt._menuCentered,e=>{e&&s("menuCentered",!0)}),i.on(Xt._willEnterFullscreen,()=>s("fullscreen",!0)),i.on(Xt._didExitFullscreen,e=>{n(t=>{const n={fullscreen:!1,forceExitedFullscreen:t.appearance.forceExitedFullscreen};return e||(n.forceExitedFullscreen=!0),{appearance:d(d({},t.appearance),n)}})}),i.on(p.WEBKIT_END_FULLSCREEN,()=>{s("fullscreen",!1)}),i.on(Xt._airPlayActivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{showAirPlayPicker:!0})}))}),i.on(Xt._airPlayDeactivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{showAirPlayPicker:!1})}))}),i.on(Ut._reset,()=>{n(()=>({appearance:Hs(e)}))}),i.on(Xt._airPlayActivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{externalDisplay:!0})}))}),i.on(Xt._airPlayDeactivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{externalDisplay:!1})}))}),i.on(p.ENTER_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:d(d({},e.appearance),{},{pictureInPictureActive:!0})}))}),i.on(p.LEAVE_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:d(d({},e.appearance),{},{pictureInPictureActive:!1})}))}),i.on(I.WEBVR_ENTER,()=>{n(e=>({appearance:d(d({},e.appearance),{},{stereoscopicEnabled:!0})}))}),i.on(I.WEBVR_EXIT,()=>{n(e=>({appearance:d(d({},e.appearance),{},{stereoscopicEnabled:!1})}))}),{appearance:a,setAppearance:(e,t)=>{"fullscreen"!==e?"pictureInPictureActive"!==e?"showAirPlayPicker"!==e?("stereoscopicEnabled"===e&&i.fire(Xt._stereoscopicButtonPressed),s(e,t)):i.fire(Xt._airPlayButtonPressed):i.fire(r.pictureInPictureActive?Ut._deactivatePictureInPicture:Ut._activatePictureInPicture):i.fire(Xt._fullscreenButtonPressed)}}})(o)),(e=>{const{set:t,events:n}=e,i=_l(e);return n.on(Xt._configChanged,()=>{t(()=>({embed:_l(e)}))}),{embed:i}})(o)),ps(o)),(e=>{const{events:t,set:n,get:i,fragmentsHandler:o,backbone:r}=e,a=(e,t)=>{n(n=>({playback:d(d({},n.playback),{},{[e]:t})}))},s=yl(e);return t.on(Ut._reset,()=>{n(()=>({playback:yl(e)}))}),t.on(Xt._configChanged,()=>{n(()=>({playback:yl(e)}))}),t.on(u,()=>a("playInitiated",!0)),t.on(p.PLAY,()=>{n(e=>({playback:d(d({},e.playback),{},{scrubbing:!1,paused:!1,playInitiated:!0})}))}),t.on(Xt._playButtonPressed,()=>a("paused",!1)),t.on([p.PAUSE,Xt._paused,Xt._pauseButtonPressed],()=>a("paused",!0)),t.on(Xt._targetTimeReached,()=>a("targetTimeReached",!0)),t.on(v.BUFFER_STARTED,()=>a("buffering",!0)),t.on(v.BUFFER_ENDED,()=>a("buffering",!1)),t.on(Xt._scrubbingStarted,()=>a("scrubbing",!0)),t.on(Xt._scrubbingEnded,()=>a("scrubbing",!1)),t.on(Xt._scrubbingStarted,()=>a("scrubbing",!0)),t.on(Xt._scrubbingEnded,()=>a("scrubbing",!1)),t.on(Ut._setTime,e=>{n(t=>{const n=Et(e,0,t.playback.duration);return{playback:d(d({},t.playback),{},{currentTime:n})}})}),t.on(p.TIME_UPDATE,({currentTime:e,timeProgress:t})=>{n(n=>{const i=Math.min(St(100*t),100);return e=e||n.playback.duration*i||0,{playback:d(d({},n.playback),{},{currentTime:e})}})}),t.on(Xt._ended,()=>{n(e=>({playback:d(d({},e.playback),{},{currentTime:e.playback.currentFragment.duration})}))}),t.on(p.PROGRESS,({loaded:e})=>{n(t=>({playback:d(d({},t.playback),{},{loadedTime:e})}))}),t.on([Xt._fragmentChanged,p.DURATION_CHANGE],()=>{n(e=>({playback:d(d({},e.playback),{},{currentFragment:o.currentFragment})}))}),t.on(p.LOADED_METADATA,()=>{n(e=>({playback:d(d({},e.playback),{},{loadedMetadata:!0})}))}),t.on(v.STREAM_CHANGE,e=>{const t={currentQuality:El(r.qualities,e)};i().liveEvent.isLiveEvent&&Object.assign(t,{qualities:r.qualities}),n(e=>({playback:d(d({},e.playback),t)}))}),t.on(Xt._qualityChanged,e=>{n(t=>({playback:d(d({},t.playback),{},{qualities:r.qualities,currentQuality:El(r.qualities,e)})}))}),t.once(E,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsPictureInPicture:r.pictureInPictureEnabled})}))}),t.on(Xt._airPlayAvailable,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsAirPlay:!0})}))}),t.on(Xt._airPlayNotAvailable,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsAirPlay:!1})}))}),t.on(Xt._playbackRateChanged,()=>{n(t=>({playback:d(d({},t.playback),{},{playbackRates:wl(e)})}))}),bl.on(Sn.connected,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastConnected:!0})}))}),bl.on(Sn.disconnected,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastConnected:!1})}))}),bl.on(Sn.playing,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastPlaying:!0})}))}),bl.on([Sn.error,Sn.idle,Sn.paused,Sn.ended,Sn.disconnected],()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastPlaying:!1})}))}),t.on([Xt._adClicked,Xt._adPaused,Xt._adComplete,Xt._adError,Xt._adSkipped,Xt._allAdsCompleted],()=>{n(e=>({playback:d(d({},e.playback),{},{isAdPlaying:!1})}))}),t.on([Xt._adStarted,Xt._adResumed],()=>{n(e=>({playback:d(d({},e.playback),{},{isAdPlaying:!0})}))}),{playback:s,setPlayback:(e,i,o)=>{if("paused"!==e){if("qualities"===e)return t.fire(Ut._changeQuality,i),void n(e=>{const t=Rs(e.playback.qualities,i);return{playback:d(d({},e.playback),{},{qualities:t,currentQuality:El(t)})}});if("playbackRates"===e)return t.fire(Ut._changePlaybackRate,i),void n(e=>{const t=Rs(e.playback.playbackRates,i);return{playback:d(d({},e.playback),{},{playbackRates:t})}});if("scrubbing"!==e)return"currentTime"===e?(t.fire(Ut._seek,i),"interactive-marker"===(null==o?void 0:o.seekType)?(t.fire(Xt._playButtonPressed),void t.fire(Xt._interactiveMarkerClicked,{type:"interactive-marker",action:null==o?void 0:o.action})):void 0):void a(e,i);i?t.fire(Xt._scrubbingStarted):t.fire(Xt._scrubbingEnded)}else!1===i?t.fire(Xt._playButtonPressed):t.fire(Xt._pauseButtonPressed)}}})(o)),(e=>{const{events:t}=e,n=(t,n)=>{e.set(e=>({user:d(d({},e.user),{},{[t]:n})}))};return t.on(Xt._liked,()=>n("liked",!0)),t.on(Xt._unliked,()=>n("liked",!1)),t.on(Xt._addedToWatchLater,()=>n("watchLater",!0)),t.on(Xt._removedFromWatchLater,()=>n("watchLater",!1)),t.on(Xt._configChanged,(t,n)=>{e.set(()=>({user:Ll({config:n})}))}),{user:Ll(e),setUser:(i,o)=>{if("liked"!==i||!0!==o)if("watchLater"!==i||!0!==o)if("collected"!==i)if("shared"!==i)n(i,o);else{const{share:n}=e.config.embed.settings,i=(null==n?void 0:n.embed_only)?Xt._embedButtonPressed:Xt._shareButtonPressed;t.fire(i)}else t.fire(Xt._collectionsButtonPressed);else t.fire(Xt._watchLaterButtonPressed);else t.fire(Xt._likeButtonPressed)}}})(o)),(e=>{const{set:t,get:n,events:i,config:o,subscribe:r}=e,a=Sl(e);function s(e){e&&n().vod.vodButtonVisible?t(e=>({vod:d(d({},e.vod),{},{vodButtonVisible:!1})})):e||!n().vod.isVOD||n().vod.vodButtonVisible||t(e=>({vod:d(d({},e.vod),{},{vodButtonVisible:!0})}))}return r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{s(e)}),r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>s(e)),i.on(Xt._configChanged,(n,i)=>{t(()=>({vod:Sl(d(d({},e),{},{config:i}))}))}),{vod:a,setVod:(e,n)=>{if("purchased"!==e||!0!==n)t(t=>({vod:d(d({},t.vod),{},{[e]:n})}));else{const[e]=o.video.vod.purchase_options;i.fire(Xt._vodButtonPressed,e.product_id)}}}})(o)),(e=>{const{set:t,get:n,events:i,config:o}=e,r=Fs(e),a=(e,i)=>{"purpose"!==e||n().overlay.purpose===i?t(t=>({overlay:d(d({},t.overlay),{},{[e]:i})})):t(e=>({overlay:d(d({},e.overlay),{},{purpose:i}),displayList:d(d({},e.displayList),{},{overlay:i!==gs.EMPTY})}))};return i.on(Xt._overlayOpened,e=>a("purpose",e)),i.on(Xt._overlayClosed,()=>a("purpose",gs.EMPTY)),{overlay:r,setOverlay:(t,n)=>{if("purpose"!==t||n!==gs.SHARE)"purpose"===t&&n===gs.EMPTY&&(n=ws(e.element)),a(t,n);else{var r;const{embed:e}=o,t=(null==(r=e.settings.share)?void 0:r.embed_only)?Xt._embedButtonPressed:Xt._shareButtonPressed;i.fire(t)}}}})(o)),(e=>{const{set:t,events:n}=e,i=vs(e);return n.on(Xt._configChanged,(n,i)=>{t(()=>({title:vs(d(d({},e),{},{config:i}))}))}),{title:i}})(o)),(e=>{const{events:t,set:n}=e,i=Al(e);return t.on(Xt._configChanged,(e,t)=>{n(()=>({badge:Al({config:t})}))}),{badge:i,setBadge:(e,i)=>{"id"!==e?((e,t)=>{n(n=>({badge:d(d({},n.badge),{},{[e]:t})}))})(e,i):t.fire(Xt._badgePressed,i)}}})(o)),(e=>{const{set:t,events:n}=e,i=(e,n)=>{t(t=>({chapters:d(d({},t.chapters),{},{[e]:n})}))},o=Pl(e),r=({backbone:e})=>{if(e.chaptersTrack){const t=()=>n.fire(Xt._chapterChanged,null==e?void 0:e.currentChapterID);e.chaptersTrack.addEventListener("cuechange",t)}};return r(e),n.on(Xt._chapterChanged,e=>{t(t=>({chapters:d(d({},t.chapters),{},{activeChapterId:e})}))}),n.on(v.CHAPTER_CUES_UPDATED,()=>i("chapters",Array.from(e.backbone.chapters))),n.on(Xt._configChanged,()=>{t(()=>({chapters:Pl(e)})),r(e)}),{chapters:o,setChapters:(e,t,o)=>{"activeChapterId"!==e?i(e,t):n.fire(Xt._chapterSeekAttempted,parseFloat(t)+.001,null==o?void 0:o.type)}}})(o)),(e=>{const{set:t,events:n}=e,i=ii(),o=n=>{const{textTracks:i,activeTextTrack:o}=Rl(e,n);t(e=>({captions:d(d({},e.captions),{},{textTracks:i,activeTextTrack:o})}))},r=Il(e);return n.on(Xt._captionsChanged,e=>{o(null==e?void 0:e.id)}),n.on(v.TEXT_TRACKS_AVAILABLE,()=>{o()}),n.on(Xt._configChanged,()=>{t(()=>({captions:Il(e)}))}),{captions:r,setCaptions:(o,r)=>{if("activeTextTrack"===o)return"off"!==r&&r?void n.fire(Ut._turnCaptionsOn,r):void n.fire(Ut._turnCaptionsOff);if(ss.hasOwnProperty(o)){if(null===r)return n.fire(Ut._resetCaptionsStyles),void t(t=>({captions:d(d({},t.captions),xl(e))}));const a=i[o];return n.fire(Ut._changeCaptionsStyles,a,r),void t(t=>({captions:d(d({},t.captions),xl(e))}))}((e,n)=>{t(t=>({captions:d(d({},t.captions),{},{[e]:n})}))})(o,r)}}})(o)),(e=>{const{events:t,set:n}=e,i=Ml(e);t.on(Xt._configChanged,()=>{n(()=>({liveEvent:Ml(e)}))});const{EVENT_ACTIVE:o,EVENT_PENDING:r,EVENT_STARTED:a,EVENT_ENDED:s}=A,l={[o]:Nl.active,[r]:Nl.pending,[a]:Nl.started,[s]:Nl.ended};Object.keys(l).forEach(e=>t.on(e,()=>n(t=>({liveEvent:d(d({},t.liveEvent),{},{liveEventStatus:l[e]})}))));const{ARCHIVE_STARTED:c,ARCHIVE_DONE:u,ARCHIVE_ERROR:p}=A,v={[c]:Dl.started,[u]:Dl.done,[p]:Dl.error};return Object.keys(v).forEach(e=>t.on(e,()=>n(t=>({liveEvent:d(d({},t.liveEvent),{},{liveEventArchiveStatus:v[e]})})))),t.on(A.LIVE_STATS_SUCCESS,({viewerCount:e})=>{n(t=>({liveEvent:d(d({},t.liveEvent),{},{viewerCount:vt(e),liveStatsRequestSucceeded:!0})}))}),t.on(A.LIVE_STATS_FAILURE,()=>{n(e=>({liveEvent:d(d({},e.liveEvent),{},{liveStatsRequestSucceeded:!1})}))}),{liveEvent:i,setLiveEvent:(e,t)=>{n(n=>({liveEvent:d(d({},n.liveEvent),{},{[e]:t})}))}}})(o)),(e=>{const{events:t,set:n}=e;return t.on(Xt._webinarRegistrantBlocked,()=>{n(e=>({webinar:d(d({},e.webinar),{},{webinarRegistrantBlocked:!0})}))}),t.on(Xt._webinarRegistrantUnblocked,()=>{n(e=>({webinar:d(d({},e.webinar),{},{webinarRegistrantBlocked:!1})}))}),{webinar:{webinarRegistrantBlocked:!1},setWebinar:(e,t)=>{n(n=>({webinar:d(d({},n.webinar),{},{[e]:t})}))}}})(o)),(e=>{const{set:t,events:n}=e,i=(e,n)=>{t(t=>({interactive:d(d({},t.interactive),{},{[e]:n})}))},o=e=>{e.embed.wirewax&&n.once(Xt._interactiveReady,({hotspots:e})=>i("hotspots",e))};return o(e.config),n.on(Xt._configChanged,(e,n)=>{e&&(e=>{o(e),t(()=>({interactive:{hotspots:[]}}))})(n)}),{interactive:{hotspots:[]},setInteractive:i}})(o)),(e=>{const{set:t,events:n,config:i}=e;return n.on(Xt._configChanged,()=>{t(()=>({cuePoints:{cuePoints:[]}}))}),i.embed.on_site&&(n.on(Xt._cuePointAdded,e=>{t(t=>{const n=t.cuePoints.cuePoints.concat(e);return{cuePoints:d(d({},t.cuePoints),{},{cuePoints:n})}})}),n.on(Xt._cuePointRemoved,e=>{t(t=>{const n=t.cuePoints.cuePoints.filter(t=>t.id!==e.id);return{cuePoints:d(d({},t.cuePoints),{},{cuePoints:n})}})})),{cuePoints:{cuePoints:[]},setCuePoints:(e,n)=>{t(t=>({cuePoints:d(d({},t.cuePoints),{},{[e]:n})}))}}})(o)),{},{config:r,element:a,name:(null==s?void 0:s.name)||Ga.VimeoPlayer,verifyConfig:l})})),children:t}):null};const Fl=({children:e,text:t})=>{const n=Pe(t),[i,o]=De(!1),[r,a]=De(!1),s=Pe(null),l=Pe(null),c=()=>{r||a(!0)},u=()=>{i&&(c(),o(!1))},p=()=>{i||(c(),o(!0))},v=We(()=>{r&&a(!1)},[r]),m=d({className:"LabeledButton_module_box__ae67e231",onMouseEnter:p,onMouseLeave:u,onFocus:p,onBlur:u,onTouchStart:()=>{s.current=setTimeout(p,150)},onTouchEnd:()=>{l.current=setTimeout(u,150)}},Ss(u)),f=d({className:"LabeledButton_module_labeledButton__ae67e231"},Ss(t=>{u(),e.props.onClick&&e.props.onClick(t)})),h=`${Ws(250)} transform 250 ease-out`,_={enterActive:{transform:"translateX(0)",transition:h},exitActive:{transform:"translateX(5px)",transition:h}};Ce(()=>()=>{clearTimeout(s.current),clearTimeout(l.current)});const g={visible:i,styleOverrides:_};return n.current!==t&&(r?g.onFaded=v:n.current=t),ke("div",d(d({},m),{},{children:[ke(js,d(d({},g),{},{children:ke("label",d(d({},f),{},{role:"presentation",children:ke("span",{children:n.current})}))})),e]}))},Ul=je((e,t)=>{let{on:n,label:i,icon:o,onClick:r,className:a="",children:s}=e,l=Te(e,["on","label","icon","onClick","className","children"]);return ke(Ne,d(d({ref:t,size:"sm",icon:o,"aria-label":i,onClick:r,className:`iris-button ${n?"on":""} ${a}`},l),{},{children:s}))}),ql=()=>{const e=Bl(e=>e.embed.collections),t=Bl(e=>e.setUser);return e&&ke(Fl,{text:"Add to collections",children:ke(Ul,{label:"Add to collections",className:"collections-button",onClick:()=>t("collected",!0),icon:ke(Gs,{children:ke(ze,{className:"collections-icon",focusable:"false"})})})})},Hl=()=>{const e=Bl(e=>e.setUser),t=Bl(e=>e.user.liked);let n=t?"Unlike":"Like",i=n;return Bl(e=>e.user.loggedIn)||(i="Like (this opens in a new window)"),Bl(e=>e.embed.like)&&ke(Fl,{text:n,children:ke(Ul,{label:i,className:"like-button",on:t,icon:ke(Gs,{children:ke(t?Ye:Ge,{className:"like-icon",focusable:"false"})}),"data-like-button":!0,onClick:()=>e("liked",!0)})})};const $l=()=>{const e=Bl(e=>e.setOverlay),t={share:Bl(e=>e.embed.embedOnlyShare)?"Embed":"Share"};return Bl(e=>e.embed.share)&&ke(Fl,{text:t.share,children:ke(Ul,{label:t.share,"data-share-button":!0,onClick:()=>e("purpose",gs.SHARE),icon:ke(Gs,{children:ke(Ke,{className:"share-icon ShareButton_module_shareIcon__da819942",focusable:"false"})})})})};const Wl=()=>{const{vodLabel:e,purchased:t,isExpiring:n,vodButtonVisible:i}=Bl(e=>e.vod),o=Bl(e=>e.setVod),r=Ss(()=>o("purchased",!0));return i&&ke("div",d(d({},r),{},{className:`VODButton_module_vodButtonContainer__3181e727 ${n?"VODButton_module_expiring__3181e727":""}`,"data-vod-expiring":n,"data-vod-purchased":t,"data-vod-button":!0,children:ke(Ne,{format:"basic",variant:"transparent",size:"sm",iconPosition:"action",className:`iris-button vod-button VODButton_module_vodButton__3181e727 ${t?"on":""}`,"data-vod-button":!0,icon:ke(Gs,{children:ke(Ze,{className:"vod-icon"})}),children:ke("span",{"data-vod-button-label":!0,children:e})})}))},jl=()=>{const e=Bl(e=>e.embed.watchLater),t=Bl(e=>e.user.watchLater),n=Bl(e=>e.user.loggedIn),i=Bl(e=>e.setUser);let o=t?"Remove from Watch Later":"Add to Watch Later",r=o;return n||(r="Add to Watch Later (this opens in a new window)"),e&&ke(Fl,{text:o,children:ke(Ul,{label:r,className:"watch-later-button",on:t,onClick:()=>i("watchLater",!0),icon:ke(Gs,{children:t?ke("svg",{width:"20",height:"20",className:"watch-later-icon",focusable:"false",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"})}):ke(Xe,{className:"watch-later-icon",focusable:"false"})}),"data-watchlater-button":!0})})},zl=()=>{const e=Bl(e=>e.displayList.sideDock),t=Bl(e=>e.setAppearance),n=Bl(e=>e.appearance.fullscreen),i=Bl(e=>e.displayList.outro),o=Bl(e=>e.vod.vodButtonVisible),r=Bl(e=>e.vod.purchased),a={className:`vp-sidedock SideDock_module_root__33c9db1d ${i?"SideDock_module_outroVisible__33c9db1d":""} ${n?"SideDock_module_fullscreen__33c9db1d":""}`,onPointerEnter:()=>t("mousedOverSidedock",!0),onMouseEnter:()=>t("mousedOverSidedock",!0),onPointerLeave:()=>t("mousedOverSidedock",!1),onMouseLeave:()=>t("mousedOverSidedock",!1)};return o&&!r?ke("div",d(d({},a),{},{children:[ke(Wl,{}),ke(js,{visible:e,children:ke("div",{className:"SideDock_module_sidedockInner__33c9db1d",children:[ke(Hl,{}),ke(jl,{}),ke(ql,{}),ke($l,{})]})})]})):ke(js,{visible:e,children:ke("div",d(d({},a),{},{children:[o&&r&&ke(Wl,{}),ke(Hl,{}),ke(jl,{}),ke(ql,{}),ke($l,{})]}))})};let Yl,Gl;!function(e){e.MARKER_SEEKED="seeked",e.MARKER_ENDED="ended",e.MARKER_UPSWITCH="upswitch",e.MARKER_DOWNSWITCH="downswitch",e.MARKER_SWITCH_COMPLETE="switchcomplete",e.MARKER_RESIZE="resize",e.MARKER_SCANNER_CHANGE="scannerchange",e.MARKER_FILE_CHANGE="filechange",e.MARKER_STALLED="stalled",e.MARKER_BUFFER_GAP_JUMP="buffergapjump",e.MARKER_BUFFER_GAP_JUMP_PREVENT="buffergapjumpprevent",e.MARKER_STALL_JUMP="stalljump"}(Yl||(Yl={})),function(e){e.MARKER_SEEKED="#0088cc",e.MARKER_ENDED="#503873",e.MARKER_UPSWITCH="#5a9e02",e.MARKER_DOWNSWITCH="#d93636",e.MARKER_RESIZE="#FF8A00",e.MARKER_SCANNER_CHANGE="#e9ff00",e.MARKER_FILE_CHANGE="#b5d3e2",e.MARKER_STALLED="#f44283"}(Gl||(Gl={}));const Kl=Object.entries(Yl).reduce((e,[t,n])=>(e[n]=Gl[t],e),{}),Zl=({max:e=1,timeSeries:t=[],debugMarkers:n=[]})=>{const i=t.length,o=i<100?0:i-100,r=t[o],a=t[i-1],s=r?r.time:0,l=a?a.time:0,c=t.slice(o).map(t=>{let n=(t.time-s)/(l-s)*250,i=14-14*t.value/e;return isNaN(i)&&(i=0),isNaN(n)&&(n=0),`${n},${function(e,t,n){return Math.min(Math.max(e,0),14)}(i)}`}).join(" ");return ke("svg",{width:250,height:14,viewBox:"0 0 250 14",children:[ke("g",{children:ke("polyline",{stroke:"white",fill:"none",points:c})}),ke("g",{children:!!n.length&&n.filter(e=>e.t>=s&&e.t<=l).map((e,t)=>{let n=(e.t-s)/(l-s)*250;return isNaN(n)&&(n=0),ke("g",{children:[ke("title",{children:e.title}),ke("line",{className:"BandwidthSeriesDisplay_module_marker__718ed0d2",x1:n,y1:"0",x2:n,y2:14,strokeWidth:"1",stroke:Kl[e.type]})]},`${e.t}-${t}`)})})]})};const Xl=({title:e="",children:t})=>ke("p",{children:[ke("span",{children:e}),ke("b",{children:t})]}),Jl=({payloadId:e,showSessionId:t})=>{const{codec:n,isLive:i,isDash:o,delivery:r,resolution:a,embedSize:s,drmEnabled:l,drmFastly:c,sessionId:d,p2pSources:u,p2pOffload:p,totalFrames:v,liveLatency:m,currentTime:f,bufferEnd:h,bufferAhead:_,droppedFrames:g,vrHeadsetName:b,liveSessionID:y,bandwidthKbps:w,bandwidthMinKbps:E,bandwidthMaxKbps:C,separateAudioVideo:k,bandwidthSeriesData:L,droppedFramesPercent:T}=Bl(e=>e.debug),{max:S,debugMarkers:A,timeSeries:P}=L;return ke("div",{className:"DebugValues_module_values__67b77d0f",children:[!!r&&ke(Xl,{title:"Delivery:",children:r}),!!n&&ke(Xl,{title:"Codec:",children:n}),!!a&&ke(Xl,{title:"Playing:",children:a}),!!s&&ke(Xl,{title:"Embed Size:",children:s}),o&&ke(Xl,{title:"Separate AV:",children:`${k}`}),(o||i)&&ke(Xl,{title:"Dropped Frames:",children:[g," / ",v," - ",T]}),!!b&&ke(Xl,{title:"VR Hardware:",children:b}),i&&ke(Xl,{title:"Live Latency:",children:m}),i&&!!y&&ke(Xl,{title:"Live Session ID:",children:y}),!!u&&ke(Xl,{title:"P2P:",children:[u," - ",p]}),l&&ke(Xl,{title:"DRM:",children:["Enabled; Fastly DRM: ",`${c}`]}),ke(Xl,{title:"Playhead / Buffer:",children:[f," / ",h," / ",_]}),(o||i)&&ke(Ie,{children:[ke("p",{children:[ke("span",{children:"Bandwidth:"}),ke("b",{children:w}),ke("div",{className:"DebugValues_module_bandwidthMinMax__67b77d0f",children:["(",ke("b",{className:"DebugValues_module_bandwidthMin__67b77d0f",children:E}),ke("b",{className:"DebugValues_module_bandwidthMax__67b77d0f",children:C}),")"]})]}),ke("div",{className:"DebugValues_module_timeSeries__67b77d0f",children:ke(Zl,{max:S,debugMarkers:A,timeSeries:P})})]}),d&&t&&ke("p",{children:[ke("span",{children:"Debug Key:"}),ke("br",{}),ke("b",{className:"DebugValues_module_sessionId__67b77d0f",children:d})]}),e&&ke("p",{children:[ke("span",{children:"Debug Key:"}),ke("br",{}),ke("b",{className:"DebugValues_module_payloadId__67b77d0f",children:e})]})]})};let Ql;const ec=({onCopyFailed:e,labelResetDelay:t,className:n})=>{const[i,o]=De(!1),r=Bl(e=>e.debug),{bandwidthSeriesData:a}=r,s=Te(r,["bandwidthSeriesData"]);return ke(Ne,{className:n,onClick:()=>{const n={version:2,tpl:s,mark:a.debugMarkers};clearTimeout(Ql);try{const i=btoa(JSON.stringify(n));As(i)?(o(!0),Ql=setTimeout(()=>{clearTimeout(Ql),o(!1)},t)):e()}catch(ke){e()}},children:i?"Copied":"Copy Debug Payload"})};let tc;function nc(){}const ic=({onSendSuccess:e,labelResetDelay:t,className:n})=>{const{player_url:i,request:o}=Bl(e=>e.config),[r,a]=De(!1),[s,l]=De(!1),c=Bl(e=>e.debug),{bandwidthSeriesData:d}=c,u=Te(c,["bandwidthSeriesData"]),{signature:p,expires:v,timestamp:m}=o,f=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){const{clipId:n,payloadId:o}=u,r=`https://${i}${`/debug_payload/${n}/${o}?s=${p}&expires=${v}&time=${m}`}`,s={version:2,tpl:u,mark:d.debugMarkers};return clearTimeout(tc),function(e){if(e&&e.then)return e.then(nc)}(function(t,n){try{var i=function(t,n){try{var i=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(Je({url:r,method:"post",json:s,timeout:1e4}).json(),(function({ID:t}){e(t),a(!0)}))}catch(ke){return n()}return i&&i.then?i.then(void 0,n):i}(0,(function(){l(!0)}))}catch(ke){return n(!0,ke)}return i&&i.then?i.then(n.bind(null,!1),n.bind(null,!0)):n(!1,i)}(0,(function(e,n){return tc=setTimeout(()=>{clearTimeout(tc),a(!1),l(!1)},t),function(e,t){if(e)throw t;return t}(e,n)})))}));let h="Send Debug Payload";return r?h="Sent":s&&(h="Something Went Wrong"),ke(Ne,{className:n,onClick:f,children:h})},oc=()=>{const e=Bl(e=>e.name),t=Bl(e=>e.appearance.breakpoint),n=Bl(e=>e.displayList.debugPanel),i=Bl(e=>e.setDisplayList),{isDNTEnabled:o,hideCloseButton:r,isCopyDisabled:a,clipId:s}=Bl(e=>e.debug),[l,c]=De(void 0),[u,p]=De(!1),v=!r&&e!==Ga.ChromelessPlayer,m=!a&&e!==Ga.ChromelessPlayer,f={hidden:!1,className:"DebugPanel_module_root__fec2796b shared_module_roundedBox__e3c144e7"};return t!==_s.XS&&t!==_s.XXS||(f.className=`${f.className} DebugPanel_module_smallPlayer__fec2796b`),n||(f["aria-hidden"]="true",f.className=`${f.className} shared_module_hidden__e3c144e7`,f.hidden=!0),ke("div",d(d({},f),{},{children:[s&&ke("p",d(d({},Ss(()=>{As(`${s}`)})),{},{children:[ke("span",{children:"Clip ID: "}),ke("b",{className:"DebugPanel_module_clipId__fec2796b",children:s})]})),ke(Jl,{payloadId:l,showSessionId:u}),v&&ke("button",d(d({},Ss(()=>i("debugPanel",!1))),{},{className:"DebugPanel_module_closeButton__fec2796b","aria-label":"Close stats debug panel",children:ke(Be,{})})),ke("input",{type:"text",className:"DebugPanel_module_debugCode__fec2796b"}),m&&ke(Ie,{children:[ke(ec,{labelResetDelay:1500,onCopyFailed:()=>p(!0),className:"DebugPanel_module_button__fec2796b"}),ke(ic,{labelResetDelay:1500,onSendSuccess:e=>c(e),className:"DebugPanel_module_button__fec2796b"})]}),!!o&&"No Debug Key available as Do Not Track is enabled."]}))};const rc=()=>{const{link:e,img:t,margin:n,width:i,height:o,name:r,id:a}=Bl(e=>e.badge),s=Bl(e=>e.setBadge),l=Bl(e=>e.displayList.badge),c={};return n&&Object.assign(c,{margin:n}),ke(js,{visible:l,children:ke("div",{className:"vp-badge Badge_module_badge__d0bf6372",children:ke(Ys,{href:e,onClick:()=>s("id",a),targetBlank:!0,children:ke("img",{src:t,style:c,width:i,height:o,alt:`${r} Badge`})})})})};var ac={badgesWrapper:"TitleBadges_module_badgesWrapper__675b5212",badge:"TitleBadges_module_badge__675b5212",titleBadge:"TitleBadges_module_titleBadge__675b5212",dolbyVisionBadge:"TitleBadges_module_dolbyVisionBadge__675b5212",bylineBadge:"TitleBadges_module_bylineBadge__675b5212",lonerBadge:"TitleBadges_module_lonerBadge__675b5212"};const sc=({is360:e,hasHDR:t,hasDolbyVision:n,channelLayout:i,className:o})=>{const r="5.1"===i||"7.1"===i;return ke("div",{className:ac.badgesWrapper,children:[e&&ke(Qe,{className:`${ac.badge} ${ac[o]}`,children:"360"}),t&&ke(Qe,{className:`${ac.badge} ${ac[o]}`,children:"HDR"}),n&&ke(Qe,{className:`${ac.badge} ${ac.dolbyVisionBadge} ${ac[o]}`,children:ke(Xs,{name:Zs.DOLBY_VISION})}),r&&ke(Qe,{className:`${ac.badge} ${ac[o]}`,children:i})]})};const lc=()=>{const{displayTitle:e,displayPortrait:t,ownerLinkUrl:n,targetBlank:i,portraitImg:o,titleLinkUrl:r,title:a,ownerName:s,is360:l,hasHDR:c,hasDolbyVision:d,channelLayout:u,bylineLinkUrl:p,displayByline:v}=Bl(e=>e.title),m=Bl(e=>e.displayList.title),f=Bl(e=>e.displayList.badge),[h,_]=De(t&&!f);return Ce(()=>{let e;return!f&&t?e=setTimeout(()=>_(!0),250):_(!1),()=>clearTimeout(e)},[f,t]),ke(Ie,{children:[ke(rc,{}),ke(js,{visible:m,children:ke("div",{className:"vp-title Title_module_title__ad373b09",children:ke("header",{className:"Title_module_header__ad373b09",children:[h&&ke("div",{className:"Title_module_portrait__ad373b09","aria-hidden":"true",children:ke(Ys,{href:n,targetBlank:i,variant:"minimal",className:"Title_module_focusablePortrait__ad373b09",children:ke("img",{src:o,alt:"Link to video owner's profile",width:"60",height:"60","data-trackClick":"video-portrait"})})}),ke("div",{className:"Title_module_headers__ad373b09",children:[e&&ke(Ys,{href:r,targetBlank:i,"data-track-click":"video-title",variant:"minimal",className:sl,children:ke(Oe,{size:"6",element:"span",className:"Title_module_headerText__ad373b09 Title_module_mainTitle__ad373b09",children:[a,ke(sc,{is360:l,hasHDR:c,hasDolbyVision:d,channelLayout:u,className:"titleBadge"})]})}),v&&ke(Ys,{href:p,targetBlank:i,variant:"minimal",className:`Title_module_subtitleLink__ad373b09 ${sl}`,children:ke(Oe,{size:"7",element:"span",className:"Title_module_headerText__ad373b09 Title_module_subtitle__ad373b09",children:[s,!a&&ke(sc,{is360:l,hasHDR:c,hasDolbyVision:d,channelLayout:u,className:"bylineBadge"})]})}),!a&&!v&&ke(sc,{is360:l,hasHDR:c,hasDolbyVision:d,channelLayout:u,className:"lonerBadge"})]})]})})})]})};const cc=({id:e,timecode:t,className:n,teaser:i,url:o,imageUrl:r,headline:a,inView:s})=>{const l=Bl(e=>e.setCards),c=Bl(e=>e.setPlayback),d=Ps("Card_module_card__1ed7fa1c",n,s&&"Card_module_active__1ed7fa1c",r&&"Card_module_hasThumbnail__1ed7fa1c");return ke(nt,{className:d,onMouseEnter:()=>l("hoveredCard",t),onMouseLeave:()=>l("hoveredCard",null),onClick:()=>{l("hoveredCard",null),l("cardPressed",e),o&&c("paused",!0)},children:ke(Ys,{href:o,className:"Card_module_inner__1ed7fa1c",children:[!!r&&ke("div",{className:"Card_module_imageWrap__1ed7fa1c",children:ke("img",{className:"Card_module_image__1ed7fa1c",src:r,alt:a})}),ke("div",{className:"Card_module_body__1ed7fa1c",children:[ke(Oe,{size:"6",className:"Card_module_text__1ed7fa1c Card_module_title__1ed7fa1c",children:a}),!!i&&ke(et,{size:"3",className:"Card_module_text__1ed7fa1c Card_module_detail__1ed7fa1c",children:i})]}),!!o&&ke("div",{className:"Card_module_popOutWrapper__1ed7fa1c",children:ke(tt,{className:"Card_module_popOut__1ed7fa1c"})})]})})};const dc=()=>{const e=Bl(e=>e.cards.cardsMap),t=Bl(e=>e.cards.displayedCard),n=Bl(e=>e.displayList.cards),i=Bl(e=>e.displayList.overlay),o=e=>t===e&&!i;return n&&ke("div",{className:"Cards_module_cardsWrapper__a7bf7649",children:e.values().map(e=>ke(cc,{id:e.id,timecode:e.timecode,className:e.className,teaser:e.teaser,url:e.url,imageUrl:e.imageUrl,headline:e.headline,inView:o(e.timecode)},e.id))})};const uc=()=>{const{buffering:e,currentTime:t,loadedTime:n,currentFragment:i}=Bl(e=>e.playback),o=Ns(t,i),r=Ns(n,i);return ke("div",{className:"TinyProgressBar_module_tinyBar__d399454c",children:ke("svg",{className:"TinyProgressBar_module_tinyBarSVG__d399454c",width:"100%",height:"100%",viewBox:"0 0 70 40",focusable:"false",children:[ke("defs",{children:[ke("clipPath",{id:"rounded-border",children:ke("rect",{height:"100%",width:"100%",x:"0",y:"0",rx:"5"})}),ke("pattern",{id:"tiny-buffer",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10",viewBox:"0 0 10 10",children:[ke("line",{x1:"5",y1:"-1",x2:"-5",y2:"10",strokeWidth:"2",stroke:"#666",strokeLinecap:"butt"}),ke("line",{x1:"10",y1:"-1",x2:"0",y2:"10",strokeWidth:"2",stroke:"#666",strokeLinecap:"butt"}),ke("line",{x1:"15",y1:"-1",x2:"5",y2:"10",strokeWidth:"2",stroke:"#666",strokeLinecap:"butt"})]})]}),ke("g",{clipPath:"url(#rounded-border)",children:e?ke("rect",{className:"TinyProgressBar_module_buffer__d399454c",height:"3",width:"110%",x:"0",y:"37",fill:"url(#tiny-buffer)"}):ke(Ie,{children:[ke("rect",{className:"TinyProgressBar_module_loaded__d399454c",height:"3",width:Ms(r),x:"0",y:"37",fill:"#666"}),ke("rect",{className:"TinyProgressBar_module_played__d399454c fill",height:"3",width:Ms(o),x:"0",y:"37"})]})})]})})};const pc=({className:e})=>{const t=Bl(e=>e.displayList.controlBar),n=Bl(e=>e.liveEvent.isLiveEvent),i=Bl(e=>e.liveEvent.hasStarted),o=Bl(e=>e.liveEvent.archiveDone),r=Bl(e=>e.displayList.menu),a=Bl(e=>e.setPlayback),s=Bl(e=>e.embed.playbar),l=Bl(e=>e.appearance.sizeMode),c=Bl(e=>e.controlBar.trailerButtonText),d=l===Za.TINY||!s,u=!n||i||o,{buttonState:p,setButtonState:v}=(()=>{const e=Bl(e=>e.playback.paused),t=Bl(e=>e.playback.scrubbing),n=Bl(e=>e.playback.playInitiated),i=Bl(e=>e.playback.isChromecastPlaying),o=Bl(e=>e.playback.isChromecastConnected),r=Bl(e=>e.playback.buffering),a=Bl(e=>e.playback.isAdPlaying),s=Bl(e=>e.embed.isTrailer),l=Bl(e=>e.embed.autoPlay),c=Bl(e=>e.displayList.outro),d=Bl(e=>e.displayList.ad),u=s&&!n;let p=ts.PLAY;u?p=ts.TRAILER:l&&(p=ts.PAUSE);const[v,m]=De(p);return Ce(()=>{u&&m(ts.TRAILER)},[u]),Ce(()=>{o&&m(i?ts.PAUSE:ts.PLAY)},[o,i]),Ce(()=>{d&&m(a?ts.PAUSE:ts.PLAY)},[d,a]),Ce(()=>{c?m(ts.REPLAY):t&&!c&&m(e?ts.PLAY:ts.PAUSE)},[c]),Ce(()=>{n&&m(ts.PAUSE)},[n]),Ce(()=>{t||r||u||o||c||d||m(e?ts.PLAY:ts.PAUSE)},[e,r,u,o,c,d]),{buttonState:v,setButtonState:m}})(),m=p===ts.TRAILER,f={[ts.PLAY]:{icon:Zs.PLAY,onClick:()=>{a("paused",!1),v(ts.PAUSE)},label:"Play",className:"PlayButton_module_playIcon__c7d2eed2"},[ts.PAUSE]:{icon:Zs.PAUSE,onClick:()=>{a("paused",!0),v(ts.PLAY)},label:"Pause",className:"PlayButton_module_pauseIcon__c7d2eed2"},[ts.REPLAY]:{icon:Zs.REPLAY,onClick:()=>{a("paused",!1),v(ts.PAUSE)},label:"Play",className:"PlayButton_module_replayIcon__c7d2eed2"},[ts.TRAILER]:{icon:Zs.PLAY,onClick:()=>{a("paused",!1)},label:"Play",className:"PlayButton_module_trailerIcon__c7d2eed2"}}[p],h=Ps("PlayButton_module_playButton__c7d2eed2",d&&"PlayButton_module_center__c7d2eed2",m&&"PlayButton_module_trailer__c7d2eed2",sl,e||"");return u&&ke(js,{visible:t,children:ke("div",{children:ke(ml,{tooltipText:f.label,forceHide:r,className:`Tooltip_module_playTooltip__925de7a6 ${m?"Tooltip_module_trailerPlayTooltip__925de7a6":""}`,children:ke("button",{className:h,"aria-label":f.label,onClick:f.onClick,children:[ke(uc,{}),ke(Xs,{className:f.className,name:f.icon}),m&&ke("span",{className:"PlayButton_module_text__c7d2eed2",children:c||"Watch Trailer"})]})})})})};const vc=je((e,t)=>{let{className:n="",icon:i,children:o,tooltipLabel:r,hasTooltip:a=!0}=e,s=Te(e,["className","icon","children","tooltipLabel","hasTooltip"]);const l=Bl(e=>e.displayList.menu);return a?ke(ml,{tooltipText:r,forceHide:l,children:ke("button",d(d({ref:t,className:`ControlBarButton_module_controlBarButton__82196dbd ${sl} ${n}`},s),{},{children:[o,i]}))}):ke("button",d(d({ref:t,className:`ControlBarButton_module_controlBarButton__82196dbd ${sl} ${n}`},s),{},{children:i}))});const mc=()=>{const e=Bl(e=>e.appearance.fullscreen),t=Bl(e=>e.setAppearance),n=Bl(e=>e.embed.fullscreen),i=Ps("fullscreen","FullscreenButton_module_fullscreen__ec6a4dee"),o={tooltip:e?"Exit full screen":"Fullscreen",exitFullscreen:"Exit full screen",enterFullscreen:"Enter full screen"},r=e?o.exitFullscreen:o.enterFullscreen,a=e?Zs.EXIT_FULLSCREEN:Zs.ENTER_FULLSCREEN;return(n||e)&&ke(vc,{onClick:()=>t("fullscreen",!e),className:i,"aria-label":r,icon:ke(Xs,{name:a}),tooltipLabel:o.tooltip})};const fc=je(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=Bl(e=>e.appearance.isDisplayContextBackbone),o=Bl(e=>e.embed.speedChangeEnabled),r=Bl(e=>e.embed.playbar),a=Bl(e=>e.playback.qualities),s=Bl(e=>e.playback.isChromecastConnected),l=Bl(e=>e.displayList.ad),c=i&&!!(o||(null==a?void 0:a.length))&&!s&&!l&&r,{onClick:d,onKeyDown:u}=hl(()=>t(!e));return c&&ke(vc,{ref:n,className:"vp-prefs PrefsButton_module_prefsButton__4c2f0b4c","aria-expanded":e,"aria-label":"Settings",icon:ke(Xs,{name:Zs.GEAR,className:"PrefsButton_module_gearIcon__4c2f0b4c"}),onClick:d,onKeyDown:u,tooltipLabel:"Settings"})}),hc=()=>{const e=Bl(e=>e.appearance.pictureInPictureActive),t=Bl(e=>e.playback.pictureInPictureEnabled),n=Bl(e=>e.displayList.ad),i=Bl(e=>e.setAppearance),o=e?"Exit Picture-in-Picture":"Enter Picture-in-Picture",r=e?Zs.EXIT_PICTURE_IN_PICTURE:Zs.ENTER_PICTURE_IN_PICTURE;return t&&!n&&ke(vc,{className:"pip","aria-label":o,icon:ke(Xs,{name:r,className:e?"on":""}),onClick:()=>i("pictureInPictureActive",!e),tooltipLabel:"Picture-in-Picture"})};const _c=({children:e,volumeButtonRef:t})=>{const n=Pe(null),i=Bl(e=>e.setControlBar),r=Bl(e=>e.setDisplayList),a=Bl(e=>e.controlBar.currentVolume),s=Bl(e=>e.controlBar.supportsSettingVolume),l=Bl(e=>e.displayList.controlBar),c=Bl(e=>e.appearance.sizeMode),u=c===Za.TINY||c===Za.MINI,[p,v]=De(!1),m=100*a,[f,h]=De(!1),[_,g]=De(!1),b=p&&s&&!u;Ce(()=>{l||v(!1)},[l]);const y=e=>{S(e)},w=()=>{v(!0),r("menu",!1)},E=e=>{Ls(n.current,e)||Ls(null==t?void 0:t.current,e)||v(!1),h(!1),document.removeEventListener("mouseup",E),document.removeEventListener("mousemove",y),document.removeEventListener("pointerup",E),document.removeEventListener("pointermove",y)},C=e=>{h(!0),S(e),o.pointerEvents?(document.addEventListener("pointerup",E),document.addEventListener("pointermove",y)):(document.addEventListener("mouseup",E),document.addEventListener("mousemove",y))},k=()=>{f||v(!1)},L=()=>g(!0),T=()=>g(!1);function S(e){let t=e.clientY;e.targetTouches&&e.targetTouches.length&&(t=e.targetTouches[0].clientY,e.preventDefault());const o=function(e){const t=bt(n.current).top,i=bt(n.current).bottom;return Et((i-e)/(i-t),0,1)}(t);i("currentVolume",o)}const A=Ps("VolumeControl_module_volumeControl__bdd9f98f","volume",sl),P=Ps("VolumeControl_module_volumeBar__bdd9f98f",_||f?"VolumeControl_module_mouseEnteredSlider__bdd9f98f":""),I=o.pointerEvents?{onPointerEnter:w,onPointerLeave:k}:{onMouseEnter:w,onMouseLeave:k},R=o.pointerEvents?{onPointerDown:C,onPointerEnter:L,onPointerLeave:T}:{onMouseDown:C,onMouseEnter:L,onMouseLeave:T};return ke("div",d(d({className:"VolumeControl_module_volumeControlContainer__bdd9f98f",onFocus:()=>{v(!0),r("menu",!1)}},I),{},{children:[e,ke(js,{visible:b,children:ke("div",d(d({role:"slider",className:A,ref:n,tabIndex:0,"aria-valuenow":a,"aria-valuetext":Math.round(100*a)+"%","aria-label":"Volume (use up/down arrow keys to change)","aria-valuemin":0,"aria-valuemax":1,onBlur:()=>{f||v(!1)},onTouchMove:S},R),{},{children:ke("div",{className:P,children:[ke("div",{className:"VolumeControl_module_volumeBarFill__bdd9f98f",style:{height:`${m}%`}}),ke("div",{className:"VolumeControl_module_sliderHandle__bdd9f98f",style:{bottom:`${m}%`}})]})}))})]}))},gc=()=>{const e=Pe(),t=Bl(e=>e.setControlBar),n=Bl(e=>e.controlBar.currentVolume),i=Bl(e=>e.embed.volume),[o,r]=De(n);return i&&ke(_c,{volumeButtonRef:e,children:ke(vc,{ref:e,onClick:()=>{if(n>0)return r(n),void t("currentVolume",0);t("currentVolume",o||1)},icon:n?ke(it,{"data-volume-icon":!0}):ke(ot,{"data-muted-volume-icon":!0}),"aria-label":"Volume (use up/down arrow keys to change)","data-volume-button":!0,hasTooltip:!1})})};const bc=()=>{const e=Bl(e=>e.embed.showVimeoLogo),t=Bl(e=>e.controlBar.vimeoLogoUrl),n=Bl(e=>e.appearance.breakpoint),i=Bl(e=>e.appearance.sizeMode),o=Bl(e=>e.displayList.ad),r=[Za.MINI,Za.TINY].includes(i)||[_s.XS,_s.XXS].includes(n),a=ke(Xs,r?{name:Zs.VIMEO_SMALL,"data-vimeo-small-icon":!0}:{name:Zs.VIMEO,"data-vimeo-icon":!0});return e&&!o&&ke(Ys,{tabIndex:"-1",href:t,variant:"minimal",children:ke(vc,{className:"VimeoLogoButton_module_vimeoLogoButton__559febaa logo",icon:a,"aria-label":"Watch on vimeo.com",hasTooltip:!1})})},yc=()=>{const e=Bl(e=>e.appearance.showAirPlayPicker),t=Bl(e=>e.setAppearance),n=Bl(e=>e.playback.supportsAirPlay),i=Bl(e=>e.displayList.ad),o=Bl(e=>e.playback.loadedMetadata);return n&&o&&!i&&ke(vc,{onClick:()=>t("showAirPlayPicker",!e),className:"airplay","aria-label":e?"Turn off AirPlay":"Choose an AirPlay device",tooltipLabel:"AirPlay",icon:ke(Xs,{name:Zs.AIRPLAY,className:e?"on":""})})},wc=je(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=Bl(e=>e.chapters.chapters),o=Bl(e=>e.displayList.ad),r=!!(null==i?void 0:i.length)&&!o,{onClick:a,onKeyDown:s}=hl(()=>t(!e));return r&&ke(vc,{ref:n,className:"vp-chapter-button",onClick:a,onKeyDown:s,"aria-expanded":e,"aria-label":"Chapters",icon:ke(Xs,{name:Zs.CHAPTERS}),tooltipLabel:"Chapters"})}),Ec=je(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=Bl(e=>e.captions.textTracks),o=Bl(e=>e.captions.activeTextTrack),r=Bl(e=>e.playback.supportsTextTracks),a=Bl(e=>e.appearance.isDisplayContextBackbone),s=Bl(e=>e.displayList.ad),{onClick:l,onKeyDown:c}=hl(()=>t(!e)),d=r&&!!i.length&&a&&!s,u=o&&"off"!==o?Zs.CC_FILLED:Zs.CC;return d&&ke(vc,{ref:n,className:"cc","aria-label":"Choose captions","aria-haspopup":!0,icon:ke(Xs,{name:u}),onClick:l,onKeyDown:c,tooltipLabel:"CC/Subtitles"})}),Cc=()=>{const e=Bl(e=>e.setAppearance),t=Bl(e=>e.appearance.stereoscopicEnabled),n=Bl(e=>e.playback.supportsStereoscopic),i=Bl(e=>e.displayList.ad);return!!n&&!i&&ke(vc,{className:"stereoscopic",onClick:()=>e("stereoscopicEnabled",!t),"aria-label":t?"Disable stereoscopic playback":"Enable stereoscopic playback",icon:ke(Xs,{name:Zs.STEREOSCOPIC}),tooltipLabel:"Stereoscopic"})};const kc=()=>{const e=Bl(e=>e.playback.supportsChromecast),t=Bl(e=>e.displayList.ad),n=Bl(e=>e.displayList.menu),i=Ps("ChromecastButton_module_chromecastButton__204c3f82","ControlBarButton_module_controlBarButton__82196dbd",sl,"vp-cast-button");return(()=>{const[e,t]=De(!1);Ce(()=>{setTimeout(()=>t(!0),500)},[])})(),e&&!t&&ke(ml,{tooltipText:"GoogleCast",forceHide:n,children:ke("button",{className:i,"aria-label":"Cast",is:"google-cast-button","data-chromecast-button":!0})})},Lc={[is.EMPTY]:()=>ke(Ie,{}),[is.PREFS]:({setPanel:e})=>{const t=Bl(e=>e.embed.speedChangeEnabled),n=Bl(e=>e.playback.qualities),i=Bl(e=>e.playback.currentQuality),o=Bl(e=>e.playback.playbackRates),r=(null==n?void 0:n.length)>0,a={quality:{label:"Quality",value:i,onSelect:()=>e(is.QUALITY)},speed:{label:"Speed",value:((e=[])=>{var t;return null==(t=e.find(e=>e.active))?void 0:t.label})(o),onSelect:()=>e(is.SPEED)}};return ke(Ie,{children:[r&&ke(ol,d({},a.quality)),t&&ke(ol,d({},a.speed))]})},[is.QUALITY]:()=>{const{qualities:e}=Bl(e=>e.playback),t=Bl(e=>e.setPlayback);return ke(al,{items:e,onSelect:e=>t("qualities",e.currentTarget.dataset.id)})},[is.SPEED]:()=>{const{playbackRates:e}=Bl(e=>e.playback),t=Bl(e=>e.setPlayback);return ke(al,{items:e,onSelect:e=>t("playbackRates",e.currentTarget.dataset.id)})}},Tc={[is.EMPTY]:()=>ke(Ie,{}),[is.QUALITY]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Quality",onBack:()=>e(is.PREFS),setMenuDisplayed:t}),[is.SPEED]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Speed",onBack:()=>e(is.PREFS),setMenuDisplayed:t}),[is.PREFS]:({setMenuDisplayed:e})=>{const{isMenuBlockingUI:t,isMenuVerticalVideoMode:n}=Bl(e=>e.appearance);return(t||n)&&ke(nl,{title:"Settings",setMenuDisplayed:e})}},Sc=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>{const o=is.PREFS,[r,a]=De(o);zs({isMenuDisplayed:e,defaultPanel:o,setPanel:a});const s=(e=>Lc[e]||Lc[is.EMPTY])(r),l=(e=>Tc[e]||Tc[is.EMPTY])(r);return ke(el,{isMenuDisplayed:e,setMenuDisplayed:t,panel:r,buttonRef:n,progressBarAndButtonsRef:i,panelContent:ke(s,{setPanel:a,setMenuDisplayed:t}),headerContent:ke(l,{setPanel:a,setMenuDisplayed:t})})},Ac=({setMenuDisplayed:e})=>{const{isMenuBlockingUI:t,isMenuVerticalVideoMode:n}=Bl(e=>e.appearance);return(t||n)&&ke(nl,{title:"Chapters",setMenuDisplayed:e})},Pc=()=>{const{chapters:e,activeChapterId:t}=Bl(e=>e.chapters),n=Bl(e=>e.setChapters),i=e.map((e,n)=>({index:n+1,label:e.text,id:e.id,active:e.id===t}));return ke(al,{items:i,onSelect:e=>{n("activeChapterId",e.currentTarget.dataset.id,{type:"menu"})},ordered:!0})},Ic=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>ke(el,{isMenuDisplayed:e,setMenuDisplayed:t,panel:is.CHAPTERS,buttonRef:n,progressBarAndButtonsRef:i,panelContent:ke(Pc,{}),headerContent:ke(Ac,{setMenuDisplayed:t})});const Rc=({externalCues:e=[],preview:t=!1})=>{const{fontSize:n,fontFamily:i,fontOpacity:o,color:r,bgOpacity:a,bgColor:s,windowOpacity:l,windowColor:c,edgeStyle:u}=Bl(e=>e.captions),p=ii(),v=Bl(e=>e.appearance.height),m=(e,t)=>{const n=new $(e);return n.alpha=t/100,n.rgba},f=d(d(d(d({},{fontSize:`${(e=>Math.max(10,Math.round(.045*v*e)))(n)}px`}),(()=>{const e=((e,t)=>p.fontFamily.items.find(e=>e.id===t))(0,i);return{fontVariant:"small_capitals"===e.id?"small-caps":"initial",fontFamily:e.value}})()),{color:m(r,o)}),(()=>{const e=`0, 0, 0, ${Number(o)/100}`;let t="none";switch(u){case"shadow":t=`2px 2px 2px rgba(${e})`;break;case"outline":t=`1px 1px 0 rgba(${e}), -1px 1px 0 rgba(${e}), 1px -1px 0 rgba(${e}), -1px -1px 0 rgba(${e})`;break;case"raised":t=`rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;break;case"depressed":t=`rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;break;default:t="none"}return{textShadow:t}})()),h=d({},{backgroundColor:m(c,l)}),_=Ps("vp-captions","Captions_module_captions__9cdd7b34",t&&"Captions_module_preview__9cdd7b34",s?`color-${s}`:"",a?`opacity-${a}`:"");return ke("div",{className:_,"aria-live":"assertive",style:f,children:ke("span",{className:"Captions_module_captionsWindow__9cdd7b34",style:h,dangerouslySetInnerHTML:(()=>{let t="";return e.forEach(e=>{t+=e.html}),{__html:t}})()})})};const xc=()=>{const e=[{html:rt("This is a preview\n of a caption")}];return ke("div",{className:"PreviewWindow_module_previewWindow__14c35f63",children:ke("div",{className:"PreviewWindow_module_checkeredBackground__14c35f63",children:ke(Rc,{externalCues:e,preview:!0})})})},Dc={[is.EMPTY]:()=>ke(Ie,{}),[is.LANGUAGES]:({setPanel:e})=>{const t=Bl(e=>e.captions.textTracks),n=Bl(e=>e.setCaptions),{isMenuBlockingUI:i,isMenuVerticalVideoMode:o}=Bl(e=>e.appearance),r=i||o,a={customize:{label:"Customize",onSelect:()=>e(is.CUSTOMIZE)},preview:{label:"Preview",onSelect:()=>e(is.PREVIEW)}};return ke(Ie,{children:[ke(al,{items:t,onSelect:e=>n("activeTextTrack",e.currentTarget.dataset.id)}),ke(tl,{buffer:!0}),ke(ol,d({},a.customize)),r&&ke(Ie,{children:[ke(tl,{buffer:!0}),ke(ol,d({},a.preview))]})]})},[is.CUSTOMIZE]:({setPanel:e})=>{const{isMenuBlockingUI:t,isMenuVerticalVideoMode:n}=Bl(e=>e.appearance),i=t||n,o={font:{label:"Font",onSelect:()=>e(is.FONT),small:!0},background:{label:"Background",onSelect:()=>e(is.BACKGROUND),small:!0},window:{label:"Window",onSelect:()=>e(is.WINDOW),small:!0},preview:{label:"Preview",onSelect:()=>e(is.PREVIEW)}};return ke(Ie,{children:[ke(ol,d({},o.font)),ke(ol,d({},o.background)),ke(ol,d({},o.window)),ke(ll,{}),i&&ke(Ie,{children:[ke(tl,{buffer:!0}),ke(ol,d({},o.preview))]})]})},[is.FONT]:({setPanel:e})=>{const t=Bl(e=>e.setCaptions),{fontFamily:n,color:i,fontSize:o,fontOpacity:r,edgeStyle:a}=Bl(e=>e.captions),{isMenuBlockingUI:s,isMenuVerticalVideoMode:l}=Bl(e=>e.appearance),c=s||l,u=ii(),p={fontFamily:{label:u.fontFamily.title,items:Rs(u.fontFamily.items,n),onSelect:e=>t("fontFamily",e.currentTarget.dataset.id)},color:{label:u.color.title,items:Rs(u.color.items,i),onSelect:e=>t("color",e.currentTarget.dataset.id)},fontSize:{label:u.fontSize.title,items:Rs(u.fontSize.items,`${o}`),onSelect:e=>t("fontSize",e.currentTarget.dataset.id)},fontOpacity:{label:u.fontOpacity.title,items:Rs(u.fontOpacity.items,r),onSelect:e=>t("fontOpacity",e.currentTarget.dataset.id)},edgeStyle:{label:u.edgeStyle.title,items:Rs(u.edgeStyle.items,a),onSelect:e=>t("edgeStyle",e.currentTarget.dataset.id)},preview:{label:"Preview",onSelect:()=>e(is.PREVIEW)}};return ke(Ie,{children:[ke(cl,d({},p.fontFamily)),ke(vl,d({},p.color)),ke(pl,d({},p.fontSize)),ke(pl,d({},p.fontOpacity)),ke(cl,d({},p.edgeStyle)),ke(ll,{}),c&&ke(Ie,{children:[ke(tl,{}),ke(ol,d({},p.preview))]})]})},[is.BACKGROUND]:({setPanel:e})=>{const t=Bl(e=>e.setCaptions),{bgColor:n,bgOpacity:i}=Bl(e=>e.captions),{isMenuBlockingUI:o,isMenuVerticalVideoMode:r}=Bl(e=>e.appearance),a=o||r,s=ii(),l={bgColor:{label:s.bgColor.title,items:Rs(s.bgColor.items,n),onSelect:e=>t("bgColor",e.currentTarget.dataset.id)},bgOpacity:{label:s.bgOpacity.title,items:Rs(s.bgOpacity.items,i),onSelect:e=>t("bgOpacity",e.currentTarget.dataset.id)},preview:{label:"Preview",onSelect:()=>e(is.PREVIEW)}};return ke(Ie,{children:[ke(vl,d({},l.bgColor)),ke(pl,d({},l.bgOpacity)),ke(ll,{}),a&&ke(Ie,{children:[ke(tl,{}),ke(ol,d({},l.preview))]})]})},[is.WINDOW]:({setPanel:e})=>{const t=Bl(e=>e.setCaptions),{windowColor:n,windowOpacity:i}=Bl(e=>e.captions),{isMenuBlockingUI:o,isMenuVerticalVideoMode:r}=Bl(e=>e.appearance),a=o||r,s=ii(),l={windowColor:{label:s.windowColor.title,items:Rs(s.windowColor.items,n),onSelect:e=>t("windowColor",e.currentTarget.dataset.id)},windowOpacity:{label:s.windowOpacity.title,items:Rs(s.windowOpacity.items,i),onSelect:e=>t("windowOpacity",e.currentTarget.dataset.id)},preview:{label:"Preview",onSelect:()=>e(is.PREVIEW)}};return ke(Ie,{children:[ke(vl,d({},l.windowColor)),ke(pl,d({},l.windowOpacity)),ke(ll,{}),a&&ke(Ie,{children:[ke(tl,{}),ke(ol,d({},l.preview))]})]})},[is.PREVIEW]:()=>ke(Ie,{children:[ke(xc,{}),ke(ll,{})]})},Nc={[is.EMPTY]:()=>ke(Ie,{}),[is.LANGUAGES]:({setMenuDisplayed:e})=>ke(nl,{title:"CC/Subtitles",setMenuDisplayed:e}),[is.CUSTOMIZE]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Customize",onBack:()=>e(is.LANGUAGES),setMenuDisplayed:t}),[is.FONT]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Font",onBack:()=>e(is.CUSTOMIZE),setMenuDisplayed:t}),[is.BACKGROUND]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Background",onBack:()=>e(is.CUSTOMIZE),setMenuDisplayed:t}),[is.WINDOW]:({setPanel:e,setMenuDisplayed:t})=>ke(nl,{title:"Window",onBack:()=>e(is.CUSTOMIZE),setMenuDisplayed:t}),[is.PREVIEW]:({previousPanel:e,setPanel:t,setMenuDisplayed:n})=>ke(nl,{title:"Preview",onBack:()=>t(e),setMenuDisplayed:n})},Mc=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>{const o=is.LANGUAGES,[r,a]=De(o),[s,l]=De(o),c=e=>{l(r),a(e)};zs({isMenuDisplayed:e,defaultPanel:o,setPanel:a});const d=(e=>Dc[e]||Dc[is.EMPTY])(r),u=(e=>Nc[e]||Nc[is.EMPTY])(r);return ke(el,{isMenuDisplayed:e,setMenuDisplayed:t,panel:r,buttonRef:n,progressBarAndButtonsRef:i,panelContent:ke(d,{setPanel:c,setMenuDisplayed:t,previousPanel:s}),headerContent:ke(u,{setPanel:c,setMenuDisplayed:t,previousPanel:s})})};const Oc=({className:e})=>{const t=Bl(e=>e.displayList.controlBar),n=Bl(e=>e.appearance.sizeMode)===Za.TINY,i=Bl(e=>e.embed.customLogo),o=Bl(e=>e.displayList.ad),{customLogoUrl:r,customLogoImg:a,customLogoSticky:s}=Bl(e=>e.embed.customLogoFields),l=Bl(e=>e.user.ownerName),c=i&&!n&&!o,d=Ps("custom-logo","CustomLogo_module_customLogo__f27b555b",r?"CustomLogo_module_link__f27b555b":"",sl,e);return c&&ke(js,{visible:s||t,children:ke(fl,{classNames:d,imgClassNames:"CustomLogo_module_customLogoImg__f27b555b",url:r,img:a,imgAlt:l})})},Bc=({className:e,marker:t})=>{const n=Bl(e=>e.setPlayback),i=Bl(e=>e.playback.currentFragment),o=(t.startTime-i.startTime)/i.duration*100,r=e=>n("currentTime",e.path[0].dataset.time),a="Seek to "+Math.round(100*t.startTime)/100+" seconds.";return ke("div",{id:`cuepoint-${t.id}`,className:e,style:{left:`${o}%`},"data-time":t.startTime,role:"button","aria-label":a,tabIndex:0,onClick:r,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&r(e)}})};const Vc=()=>{const e=Bl(e=>e.playback.currentFragment),t=Bl(e=>e.cuePoints.cuePoints),n=Ps("CuePointMarkers_module_cuePoints__ef8c49b1","shared_module_focusableMarker__e3c144e7","cuepoint"),i=t.filter(t=>e.startTime<=t.time&&t.time<=e.endTime).map(e=>({id:e.id,startTime:e.time}));return ke(Ie,{children:!!i.length&&i.map(e=>ke(Bc,{className:n,marker:e},e.startTime))})};const Fc=()=>{const{currentTime:e,currentFragment:t}=Bl(e=>e.playback),n=Ds(e,t),i={progressBar:"Progress Bar",ariaText:So(n)+" of "+So(t.duration)};return ke("div",{className:`FocusTarget_module_focusTarget__d904bf5c ${sl}`,role:"slider","aria-label":i.progressBar,"aria-valuemin":0,"aria-valuemax":t.duration,"aria-valuenow":Math.round(n),"aria-valuetext":i.ariaText,tabIndex:0})};function Uc(e,t,n){return e/t*n}const qc=({hotspot:e,setTabFocusedHotspotMarker:t,setHoverFocusedHotspotMarker:n})=>{const i=Bl(e=>e.setPlayback),o=Bl(e=>e.playback.currentFragment),r=(e.start-o.startTime)/o.duration,a={label:e.name,id:e.hotspotId,startTime:e.start,left:r},s=Ps("HotspotMarker_module_interactiveMarker__7cd4cf0d","vp-interactive-marker","shared_module_focusableMarker__e3c144e7");function l(e){i("currentTime",e.path[0].dataset.time,{action:e.type,seekType:"interactive-marker"})}return ke("div",{className:s,role:"button",style:{left:Ms(r,!1)},"aria-label":null==e?void 0:e.ariaLabel,"data-time":e.start,tabIndex:0,onClick:l,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&l(e)},onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),onFocus:()=>t(a),onBlur:()=>t(null)})},Hc=({progressBarWidth:t,setHoverFocusedHotspotMarker:n,setTabFocusedHotspotMarker:i})=>{const o=Bl(e=>e.playback.currentFragment),r=function(t,n,i){let o=1;return(e(t).sort((e,t)=>e.start-t.start).reduce((e,t)=>{let r=Object.assign({},t);if(!(n.startTime<=r.start&&r.start<=n.endTime))return e;let a=r.name,s=r.start,l=a+". Seek to "+Math.round(100*s)/100+" seconds.";if(r.ariaLabel=l,r.leftPositionInProgressBar=(r.start-n.startTime)/n.duration*100,!e.length)return e.push(r),e;const c=e.length-1,d=function(e,t,n,i){const o=Uc(e,n,i),r=Uc(t,n,i);return Math.floor(r-o)}(e[c].start-n.startTime,r.start-n.startTime,n.duration,i);return!isNaN(d)&&d<=5?(o+=1,a=o+" hotspots",s=e[c].start,e[c].name=a,l=a+". Seek to "+Math.round(100*s)/100+" seconds.",e[c].ariaLabel=l):isNaN(d)||(o=1,e.push(r)),e},[]))}(Bl(e=>e.interactive.hotspots),o,t);return ke(Ie,{children:!!r.length&&r.map(e=>ke(qc,{hotspot:e,setTabFocusedHotspotMarker:i,setHoverFocusedHotspotMarker:n},e.start))})};const $c=()=>{const{loadedTime:e,currentFragment:t}=Bl(e=>e.playback),n=Bl(e=>e.liveEvent.isLiveEvent),i=Bl(e=>e.liveEvent.hasStarted),o=n?i?1:0:Ns(e,t),r=Ms(o);return ke("div",{className:`LoadedBar_module_loaded__0e80b5f9 ${t.duration<60?"LoadedBar_module_shortVideo__0e80b5f9":""}`,style:{width:r}})};const Wc=()=>{const{currentTime:e,currentFragment:t}=Bl(e=>e.playback),n=Bl(e=>e.liveEvent.isLiveEvent),i=Bl(e=>e.liveEvent.archiveDone),o=Ns(e,t),r=Ms(o,!1);return(!n||i)&&ke("div",{className:"PlayedBar_module_played__17706d96",style:{width:r}})};const jc=({time:e,left:t,visible:n=!0,disabled:i=!1})=>ke(js,{visible:n,children:ke("div",{className:"Timecode_module_timecodeContainer__86d38fc4",role:"presentation",style:{left:t},children:ke("div",{className:`Timecode_module_timecode__86d38fc4 ${i?"Timecode_module_disabled__86d38fc4":""}`,children:So(e)})})}),zc=()=>{const{currentTime:e,currentFragment:t,playInitiated:n,paused:i,buffering:o}=Bl(e=>e.playback),r=Bl(e=>e.liveEvent.isLiveEvent),a=Bl(e=>e.liveEvent.archiveDone),[s,l]=De(t.duration),c=r&&!a?1:0,[d,u]=De(c);Ce(()=>{n||0!==e?(l(Ds(e,t)),r&&!a||u(Ns(e,t))):(l(t.duration),u(c))},[e,n,t,r,a]);const p=!r||a||!i&&!o;return ke(jc,{time:s,left:Ms(d,!1),disabled:r,visible:p})};const Yc=({marker:e,setTabFocusedChapterMarker:t,setHoverFocusedChapterMarker:n})=>{const i=Bl(e=>e.setChapters),o=Ps("chapter-marker","js-chapter-marker"),r=Ps("ChapterMarker_module_chapter__8b88b3f6",e.active?"ChapterMarker_module_active__8b88b3f6":"","shared_module_focusableMarker__e3c144e7",o),a=e=>{i("activeChapterId",e.currentTarget.dataset.time,{type:"marker"})};return ke("div",{className:r,role:"button",style:{left:Ms(e.left,!1)},"aria-label":e.label,"data-time":e.startTime,tabIndex:0,onClick:a,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&a(e)},onBlur:()=>t(null),onMouseEnter:()=>n(e),onMouseLeave:()=>n(null),onFocus:()=>t(e)})},Gc=({setTabFocusedChapterMarker:e,setHoverFocusedChapterMarker:t})=>{const n=Bl(e=>e.playback.currentFragment),{chapters:i,activeChapterId:o}=Bl(e=>e.chapters),r=[];for(let a=0;a<i.length;a++)n.startTime<=i[a].startTime&&i[a].startTime<=n.endTime&&r.push({id:i[a].id,active:i[a].id===o,startTime:i[a].startTime,endTime:i[a].endTime,label:i[a].text,left:(i[a].startTime-n.startTime)/n.duration});return ke(Ie,{children:!!r.length&&r.map(n=>ke(Yc,{marker:n,setTabFocusedChapterMarker:e,setHoverFocusedChapterMarker:t},n.startTime))})};const Kc=({visible:e=!1,mousePercent:t=0,progressBarWidth:n,isMousedOverProgress:i=!1,tabOrHoverFocusedChapterMarker:o=null,tabOrHoverFocusedHotspotMarker:r=null})=>{const a=Bl(e=>e.displayList.menu),s=Bl(e=>e.playback.currentFragment),l=Bl(e=>e.playback.duration),c=Bl(e=>e.liveEvent.isLiveEvent),{boundingClientRect:u,isVerticalVideo:p,breakpoint:v}=Bl(e=>e.appearance),m=Bl(e=>e.verifyConfig),f=Bl(e=>e.chapters.chapters),h=Bl(e=>e.controlBar.thumbnailPreview),[_,g]=De({width:0,height:0,backgroundImage:"",backgroundSize:"",backgroundPosition:""}),[b,y]=De(!1),w=u.height>300&&n>=185;let E=w&&!a&&!c&&e;const[C,k]=De(0);i?k(t):o?k(o.left):r?k(r.left):E=!1;const L=Os(C,s),T=((e,t)=>{const{duration:n}=t;return n*e||0})(C,s);let S="";if(o)S=null==o?void 0:o.label;else if(f.length){const e=f.find(e=>e.startTime<=L&&e.endTime>=L);S=(null==e?void 0:e.text)||""}const A=(null==r?void 0:r.label)||"",P=p?(null==h?void 0:h.frame_width)/160:160/(null==h?void 0:h.frame_width),I=p?(null==h?void 0:h.frame_width)/200:200/(null==h?void 0:h.frame_width),R=p?(null==h?void 0:h.frame_width)/120:120/(null==h?void 0:h.frame_width),x=u.width>=Wi.xl?I:u.width>=Wi.sm?P:R;return Ce(()=>{!b&&w&&e&&h&&m().then(()=>Cn(h.url).then(()=>{y(!0),g({width:h.frame_width*x,height:h.frame_height*x,backgroundImage:`url(${h.url})`,backgroundSize:`${h.width*x}px ${h.height*x}px`,backgroundPosition:""})})).catch(()=>{})},[e,b,w,h,x,m]),Ce(()=>{y(!1)},[h]),Ce(()=>{h&&g(e=>d(d({},e),{},{width:h.frame_width*x,height:h.frame_height*x,backgroundSize:`${h.width*x}px ${h.height*x}px`}))},[v]),Ce(()=>{if(h&&w){let e=0,t=0;if(h){const n=l/h.frames,i=Math.min(h.frames-1,Math.ceil(L/n)),o=i%h.columns,r=Math.floor(i/h.columns);e=-o*h.frame_width*x,t=-r*h.frame_height*x}g(n=>d(d({},n),{},{backgroundPosition:`${e}px ${t}px`}))}},[C,u,h,w,l,x,L]),ke(js,{visible:E,children:ke("div",{className:`thumb-preview ThumbnailPreview_module_thumbnailPreview__443b9fb5 ${p?"ThumbnailPreview_module_vertical__443b9fb5":""}`,role:"presentation","aria-hidden":"true",style:{left:Ms(C,!1),maxWidth:[_s.XL,_s.XXL].includes(v)?200:[_s.SM,_s.MD,_s.LG].includes(v)?160:120},children:[!!_.backgroundImage&&b&&ke("div",{className:"thumb ThumbnailPreview_module_thumbnailPreviewImage__443b9fb5",style:{width:`${_.width}px`,height:`${_.height}px`,backgroundImage:_.backgroundImage,backgroundSize:_.backgroundSize,backgroundPosition:_.backgroundPosition}}),ke("div",{className:"ThumbnailPreview_module_thumbnailPreviewText__443b9fb5",children:[A&&ke("span",{className:"ThumbnailPreview_module_text__443b9fb5",children:A}),A&&S&&ke("span",{className:"ThumbnailPreview_module_separator__443b9fb5"}),S&&ke("span",{className:"ThumbnailPreview_module_text__443b9fb5",children:S}),ke("span",{className:"ThumbnailPreview_module_time__443b9fb5",children:So(T)})]})]})})},Zc=()=>{const e=Bl(e=>e.playback.currentFragment),t=Bl(e=>e.displayList.ad),n=Bl(e=>e.liveEvent.isLiveEvent),i=Bl(e=>e.liveEvent.archiveDone),r=Bl(e=>e.setPlayback),a=Bl(e=>e.element),s=Bl(e=>e.embed.playbar),l=Bl(e=>e.appearance.sizeMode)===Za.TINY||!s||t,[c,u]=De(!1),[p,v]=De(!1),[m,f]=De(0),[h,_]=De(null),[g,b]=De(!1),[y,w]=De(!1),[E,C]=De(!1),[k,L]=De(null),[T,S]=De(null),[A,P]=De(null),[I,R]=De(null),x=Pe(null),{left:D,right:N}=((e,t)=>{const[n,i]=De({left:0,right:0}),o=Pe(new z(j(e=>{const{rightOffsetValue:t,leftOffsetValue:n}=(e=>{let t=0,n=0;if(e){const{left:i,right:o}=bt(e),{borderLeftWidth:r,borderRightWidth:a}=window.getComputedStyle(e,"");t=i+parseInt(r,10),n=o-parseInt(a,10)}return{leftOffsetValue:t,rightOffsetValue:n}})(e[0].target);i({right:t,left:n})},150)));return Ce(()=>{const t=o.current,n=e.current;return n&&t.observe(n),()=>{n&&t.unobserve(n)}},[e,o,t]),n})(x,l),M=N-D,O=e=>Et((e-D)/M,0,1),B=e=>{e?a.classList.add("scrubbing"):a.classList.remove("scrubbing")},V=t=>{if(2===(null==t?void 0:t.button))return;if(r("scrubbing",!0),B(!0),"pointerdown"===t.type||"MSPointerDown"===t.type){_(t.pointerId);try{t.target.msSetPointerCapture?t.target.msSetPointerCapture(h):t.target.setPointerCapture(h)}catch(ke){}b(!0)}else"touchstart"===t.type?w(!0):C(!0);const n=xs(t),i=O(n),o=Os(i,e);r("currentTime",o)},F=t=>{if(h&&h!==t.pointerId||!1===t.isPrimary)return;const n=xs(t),i=O(n),o=Os(i,e);r("currentTime",o),f(i)},U=e=>{const t=e.type;"pointerup"===t||"MSPointerUp"===t?(b(!1),_(null)):"touchend"===t?w(!1):C(!1),r("scrubbing",!1),B(!1)};Ce(()=>(y?(document.addEventListener("touchmove",F),document.addEventListener("touchend",U)):(document.removeEventListener("touchmove",F),document.removeEventListener("touchend",U)),E?(document.addEventListener("mousemove",F),document.addEventListener("mouseup",U)):(document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",U)),g?(document.addEventListener("pointermove",F),document.addEventListener("pointerup",U)):(document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",U)),()=>{document.removeEventListener("touchmove",F),document.removeEventListener("touchend",U),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",U),document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",U)}),[y,E,g]);const q=!n||i;let H={};return q&&(H=o.pointerEvents?{onPointerDown:V}:{onTouchStart:V,onMouseDown:V}),!l&&ke("div",d(d({className:`ProgressBar_module_progressBarContainer__030be791 ${q?"":"ProgressBar_module_disabled__030be791"}`,ref:x,onMouseEnter:()=>v(!0),onMouseMove:e=>{const{clientX:t}=e,n=O(t);f(n),u(!1),P(null),L(null)},onMouseLeave:()=>v(!1),onFocus:()=>u(!0),onBlur:()=>u(!1),role:"presentation"},H),{},{children:ke("div",{className:"vp-progress ProgressBar_module_progressBar__030be791",children:[ke(Fc,{}),ke(Vc,{}),ke(Gc,{setTabFocusedChapterMarker:P,setHoverFocusedChapterMarker:R}),ke(Hc,{progressBarWidth:M,setTabFocusedHotspotMarker:L,setHoverFocusedHotspotMarker:S}),ke($c,{}),ke(Wc,{}),ke(Kc,{visible:p||c,mousePercent:m,isMousedOverProgress:p,progressBarWidth:M,tabOrHoverFocusedHotspotMarker:k||T,tabOrHoverFocusedChapterMarker:A||I}),ke(zc,{})]})}))};const Xc=()=>{const e=Pe(null),t=Pe(null),n=Pe(null),i=Pe(null),o=Bl(e=>e.displayList.controlBar),r=Bl(e=>e.displayList.outro),a=Bl(e=>e.displayList.ad),s=Bl(e=>e.displayList.menu),l=Bl(e=>e.playback.playInitiated),c=Bl(e=>e.embed.isTrailer),u=Bl(e=>e.embed.playbar),p=Bl(e=>e.embed.background),v=Bl(e=>e.embed.controls),m=Bl(e=>e.appearance.sizeMode)===Za.TINY,f=Bl(e=>e.appearance.isMenuBlockingUI),h=Bl(e=>e.setAppearance),_=Bl(e=>e.setDisplayList),[g,b]=De(!1),[y,w]=De(!1),[E,C]=De(!1),k=e=>t=>{e(t),_("menu",t),[b,w,C].forEach(t=>{e!==t&&t(!1)})};s||(b(!1),w(!1),C(!1));const L=k(b),T=k(C),S=k(w),[A,P]=De(!1),[I,R]=De(!1),[x,D]=De(!1),[N,M]=De(""),O={menuEventFromKeyboard:I,isAccordionToggling:x,activeAccordion:N,setMenuEventFromKeyboard:R,setAccordionToggling:D,setActiveAccordion:M},B={onMouseEnter:()=>{A||h("mousedOverControlBar",!0),P(!1)},onMouseLeave:()=>{A||h("mousedOverControlBar",!1),P(!1)},onTouchStart:()=>{h("mousedOverControlBar",!0),P(!0)},onTouchEnd:()=>{h("mousedOverControlBar",!1),P(!0)}},V=c&&!l,F=m||!u||a,U=!p&&v,q=Ps("ControlBar_module_controlBarWrapper__f1d423a5",F&&"ControlBar_module_noPlaybar__f1d423a5"),H=Ps("vp-controls","ControlBar_module_controls__f1d423a5",F&&"ControlBar_module_noPlaybar__f1d423a5",V&&"ControlBar_module_trailer__f1d423a5"),$=Ps("ControlBar_module_progressBarAndButtons__f1d423a5",F&&"ControlBar_module_noPlaybar__f1d423a5");return U&&ke(Js.Provider,{value:O,children:[ke("div",{className:q,children:[ke(pc,{}),ke(js,{visible:o,children:ke("div",d(d({className:H},B),{},{children:!r&&!V&&ke("div",{className:$,ref:e,children:[ke(od,{className:"ControlBar_module_liveStatusLabelProgressBar__f1d423a5"}),ke(rd,{}),ke(Zc,{}),ke(gc,{}),ke(kc,{}),ke(Ec,{ref:i,isMenuDisplayed:y,setMenuDisplayed:S}),!f&&ke(Mc,{buttonRef:i,progressBarAndButtonsRef:e,isMenuDisplayed:y,setMenuDisplayed:S}),ke(fc,{ref:t,isMenuDisplayed:g,setMenuDisplayed:L}),!f&&ke(Sc,{buttonRef:t,progressBarAndButtonsRef:e,isMenuDisplayed:g,setMenuDisplayed:L}),ke(wc,{ref:n,isMenuDisplayed:E,setMenuDisplayed:T}),!f&&ke(Ic,{buttonRef:n,progressBarAndButtonsRef:e,isMenuDisplayed:E,setMenuDisplayed:T}),ke(yc,{}),ke(Cc,{}),ke(hc,{}),ke(mc,{}),ke(bc,{})]})}))}),ke(Oc,{})]}),f&&ke(Ie,{children:[ke(Sc,{buttonRef:t,progressBarAndButtonsRef:e,isMenuDisplayed:g,setMenuDisplayed:L}),ke(Ic,{buttonRef:n,progressBarAndButtonsRef:e,isMenuDisplayed:E,setMenuDisplayed:T}),ke(Mc,{buttonRef:i,progressBarAndButtonsRef:e,isMenuDisplayed:y,setMenuDisplayed:S})]})]})};const Jc=()=>{const e=Bl(e=>e.displayList.notification);return ke("div",{className:`Notification_module_root__784f9865 ${e?"Notification_module_active__784f9865":""}`})},Qc=({player:e,children:t})=>(at(e=>{}),ke(Vl,{player:e,children:ke(st,{theme:lt.dark,children:t})})),ed=({element:e,children:t})=>ct(ke(Ie,{children:t}),e),td=()=>null;const nd=()=>{const{pipOverlay:e}=Bl(e=>e.displayList);return ke(js,{visible:e,children:ke("div",{className:"vp-pip-overlay PipOverlay_module_overlay__9b30a09f",children:[ke(Xs,{name:Zs.PIP}),ke("div",{className:"PipOverlay_module_title__9b30a09f",children:"Playing in picture-in-picture"})]})})};const id=()=>{const e=Bl(e=>e.liveEvent.isInProgress),t=Bl(e=>e.webinar.webinarRegistrantBlocked),n=e&&!t,i=Bl(e=>e.displayList.controlBar),o=Bl(e=>e.playback.paused),r=Bl(e=>e.appearance.sizeMode)===Za.TINY;return n&&ke(js,{visible:!i&&!o||i&&r,children:ke("div",{className:"LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__b31261b2",children:[ke(od,{className:"LiveStatusLabel_module_playerUI__e0f8bd5d"}),ke(rd,{className:"LiveViewerCounter_module_playerUI__cf577b69"})]})})},od=({className:e})=>{const t=Bl(e=>e.liveEvent.isLiveEvent),n=Bl(e=>e.liveEvent.hasStarted),i=Bl(e=>e.liveEvent.archiveDone),o=Bl(e=>e.embed.hideLiveLabel),r=Bl(e=>e.webinar.webinarRegistrantBlocked),a=Ps("vp-live-status","LiveStatusLabel_module_liveStatusLabel__e0f8bd5d",e),s=Ps("vp-live-status-circle","LiveStatusLabel_module_liveStatusCircle__e0f8bd5d",n?"LiveStatusLabel_module_live__e0f8bd5d":"LiveStatusLabel_module_offline__e0f8bd5d"),l=Ps("LiveStatusLabel_module_liveStatusText__e0f8bd5d",n?"LiveStatusLabel_module_live__e0f8bd5d":"LiveStatusLabel_module_offline__e0f8bd5d");return t&&!i&&!o&&!r&&ke("div",{className:a,children:[ke("div",{className:s}),ke("span",{className:l,children:"LIVE"})]})},rd=({className:e=""})=>{const t=Bl(e=>e.liveEvent.hasStarted),n=Bl(e=>e.embed.showViewerCount),i=Bl(e=>e.liveEvent.viewerCount),o=Bl(e=>e.webinar.webinarRegistrantBlocked),r=Bl(e=>e.liveEvent.liveStatsRequestSucceeded),a=Ps("vp-live-viewer-count","LiveViewerCounter_module_liveViewerCounter__cf577b69",e);return t&&n&&!o&&r&&ke("div",{className:a,children:[ke(Xs,{className:"LiveViewerCounter_module_liveViewerCounterIcon__cf577b69",name:Zs.PERSON_FILLED}),ke("span",{className:"LiveViewerCounter_module_liveViewerCountValue__cf577b69",children:i})]})};function ad(e,t){const n=t.querySelector(".vp-player-ui-container"),i=t.querySelector(".vp-player-ui-overlays");dt(ke(Qc,{player:e,children:[ke(nd,{}),ke(ed,{element:i,children:[ke(id,{}),ke(lc,{}),ke(zl,{}),ke(oc,{}),ke(dc,{}),ke(Jc,{}),ke(td,{}),ke(Xc,{})]})]}),n)}function sd(e,t,n,i){ho.helpers=Sa;const r=function(e){if(!0===e)return Promise.resolve(null);let t=!1;return new Promise((n,i)=>{e.link.addEventListener("load",()=>{if(!t){t=!0;const i=(new Date).getTime()-e.startTime;setTimeout(()=>n(i),100)}},!1)})}(n),s=new ar({element:e,delegate:i,cssLoadedPromise:r}),l=s.store;e.classList.add("js-player-fullscreen");let c=s.expose,d=null,u=null,v=null,m=null,f=null,h=null,_=null,g=null,b=null;const y=e.querySelector(".vp-controls"),w={tiny:Xt._enteredTinyMode,mini:Xt._enteredMiniMode,normal:Xt._enteredNormalMode,none:Xt._enteredNormalMode};function E(t){t&&void 0!==w[t]&&(s.events.fire(w[t]),e.classList.toggle("player-normal","normal"===t),e.classList.toggle("player-mini","mini"===t),e.classList.toggle("player-tiny","tiny"===t))}function C(t){Object.keys(Wi).forEach(n=>e.classList.toggle(`player-${n}`,t===n))}function k(){const t=s.config.embed.settings,n=(s.config.view===en.main||s.config.view===en.privateUnlocked||en.webinarUnlocked)&&t&&!t.playbar;e.classList.toggle("no-playbar",n),e.classList.toggle("with-fullscreen",!!t.fullscreen);const i=t.custom_logo;e.classList.toggle("with-custom-logo",!!i),e.classList.toggle("with-sticky-custom-logo",i&&i.sticky),e.classList.toggle("hide-controls-mode",!!t.background||0===t.controls),e.classList.toggle("touch-support",o.touch)}function L(e,t=s.config.video.url){if(!(!t||e&&e.metaKey)){if(-1===t.indexOf("#")&&s.backbone.currentTime>0&&s.backbone.currentTime<s.config.video.duration-30&&!s.backbone.paused&&(t+=`#at=${Math.floor(s.backbone.currentTime)}`),!s.config.embed.on_site)return window.open(t),function(e){if(e&&e.detail>0)try{document.activeElement.blur()}catch(ke){}}(e),s.events.fire(Xt._pauseButtonPressed),!1;window.location=t}}function T(){h||(E(l.get("ui.player.mode")),h=l.watch("ui.player.mode",E))}function S(){f||(C(l.get("ui.player.breakpoint")),f=l.watch("ui.player.breakpoint",C))}function A(){s.config.video.live_event?l.get(Hn)||l.get(Wn)?g&&(g.disable(),g=null):(g=new dr(e,s,l),new Ma(s,l)):g&&(g.disable(),g=null)}function P(){k(),_=new Promise((e,t)=>{let n=null;const i=()=>{clearTimeout(n),window.innerWidth>0&&window.innerHeight>0?e():n=setTimeout(i,250)};s.events.once(Xt._ready,i),s.events.once(Xt._error,i)}),function(){const e=(e,t)=>s.verifyConfig().then(()=>{const{signature:n,session:i,timestamp:o,expires:r}=s.config.request,l=`https://${s.config.player_url}/video/${s.config.video.id}/${e}?signature=${n}&session=${i}&time=${o}&expires=${r}`;return a(l,{method:t,withCredentials:!0})}).catch(n=>{gn.captureException(n,{extra:{action:e,method:t}})}),t=(e,t)=>s.updatePhpTokens().then(()=>{const n="following"===e?s.config.video.owner.id:s.config.video.id,i=s.config.user.vimeo_api_interaction_tokens;let o="";if(i)switch(o="?auth=",e){case"likes":o+=i.likes;break;case"watchlater":o+=i.watch_later;break;case"following":o+=i.following}const r=s.config.video.unlisted_hash&&"following"!==e?`:${s.config.video.unlisted_hash}`:"",l=`https://${s.config.vimeo_api_url}/users/${s.config.user.id}/${e}/${n}${r}${o}`;return a(l,{method:t,jwt:s.config.user.vimeo_api_client_token}).catch(n=>{gn.captureException(n,{extra:{action:e,method:t}})})}).catch(e=>{gn.captureException(e)});s.events.on(Xt._vodButtonPressed,e=>{if(s.config.user.purchased)return!s.config.video.vod.is_feature&&s.config.video.vod.feature_id?void s.loadVideo(s.config.video.vod.feature_id).then(()=>(s.events.fire(Xt._playButtonPressed),s.config.video.vod.feature_id)).catch(e=>{gn.captureException(e),s.events.fire(Ut._showOverlay,"error",{title:"Sorry",message:"There was a problem. Please try again."})}):void s.events.fire(Xt._playButtonPressed);s.config.video.vod&&s.config.video.vod.is_coming_soon?L(null,s.config.video.vod.url):s.performDelegateAction(jt,()=>{s.events.fire(Ut._openPopup,"purchase",{productId:e})},[e])}),s.events.on(Xt._likeButtonPressed,()=>{s.config.user.logged_in?s.config.user.id!==s.config.video.owner.id&&(s.config.user.liked?s.performDelegateAction(Ht,(function(){"disable"!==s.config.video.privacy?t("likes","DELETE"):e("like","DELETE"),s.config.user.liked=!1,s.events.fire(Xt._unliked)})):s.performDelegateAction(qt,(function(){"disable"!==s.config.video.privacy?t("likes","PUT"):e("like","PUT"),s.config.user.liked=!0,s.events.fire(Xt._liked)}))):s.performDelegateAction(Yt,()=>{s.events.fire(Ut._openPopup,"login-like")})}),s.events.on(Xt._watchLaterButtonPressed,()=>{(s.config.video.url||"unlisted"===s.config.video.privacy)&&(s.config.user.logged_in?s.config.user.watch_later?s.performDelegateAction(Wt,()=>{t("watchlater","DELETE"),s.config.user.watch_later=!1,s.events.fire(Xt._removedFromWatchLater)}):s.performDelegateAction($t,()=>{t("watchlater","PUT"),s.config.user.watch_later=!0,s.events.fire(Xt._addedToWatchLater)}):s.performDelegateAction(Yt,()=>{s.events.fire(Ut._openPopup,"login-watch-later")}))}),s.events.on(Xt._collectionsButtonPressed,()=>{s.performDelegateAction(Gt,()=>{s.config.video.vod&&s.config.video.vod.url?L(null,`${s.config.video.vod.url}#collections`):s.config.video.url&&L(null,`${s.config.video.url}#collections`)})}),s.events.on(Xt._shareButtonPressed,()=>{const e=s.config.embed.settings.share&&s.config.embed.settings.share.embed_only,t=()=>{s.events.fire(Ut._showOverlay,"share",e)};K.element?t():s.performDelegateAction(zt,t)}),s.events.on(Xt._embedButtonPressed,()=>{s.config.embed.settings.share.embed_only&&s.performDelegateAction(zt,()=>{s.events.fire(Ut._showOverlay,"share",!0)})}),s.events.on(Xt._followButtonPressed,()=>{if(s.config.user.logged_in&&s.config.user.id!==s.config.video.owner.id){if(s.config.user.following)return t("following","DELETE"),s.config.user.following=!1,void s.events.fire(Xt._unfollowed);t("following","PUT"),s.config.user.following=!0,s.events.fire(Xt._followed)}})}(),s.events.on(Xt._pausedForAd,()=>{e.classList.add("player-ad")}),s.events.on([Xt._resumedAfterAd,Ut._reset],()=>{e.classList.remove("player-ad")}),function(){const t=function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(_,(function(){const t=function(){const{width:t,height:n}=bt(e);return cn?n<=200?"10px":t<450?"12px":t<=1024?"11px":"10px":"10px"}();y&&(y.style.fontSize=t);const n=e.querySelector(".vp-sidedock");n&&(n.style.fontSize=t)}))};s.events.on(Xt._didEnterFullscreen,t),s.events.on(Xt._didExitFullscreen,t),window.addEventListener("orientationchange",t),cn&&(e.classList.add("mobile"),t())}(),T(),S(),function(){function t(){let t=e;if(i&&i.getFullscreenElement&&"function"==typeof i.getFullscreenElement){const n=i.getFullscreenElement();n&&n instanceof HTMLElement&&n.contains(e)&&n.classList.contains("js-player-fullscreen")&&(t=n)}return t}s.config.embed.fullscreen=!0,o.iPad&&e.classList.add("no-fullscreen-api-support");const n=s.config.embed.playsinline&&o.iOS>=10,r=o.iPad||n;K.enabled||r||(e.classList.add("no-fullscreen-support"),o.iOS||(s.config.embed.fullscreen=!1));let a=!1,l=!1,c=!1;s.events.on([p.ENTER_PICTURE_IN_PICTURE,p.LEAVE_PICTURE_IN_PICTURE],()=>{c=!0}),s.events.on(Ut._forceFullscreen,(function(){K.enabled||K.videoEnabled(e)?(s.events.fire(Xt._willEnterFullscreen),l=!1,K.request(t())):s.events.fire(Ut._toggleNativeControls,!0)})),s.events.on(Xt._fullscreenButtonPressed,(function(){s.backbone.pictureInPictureActive&&s.backbone.exitPictureInPicture(),K.element?(s.events.fire(Xt._willExitFullscreen),K.exit()):(s.events.fire(Xt._willEnterFullscreen),l=!0,K.request(t()))}));var d=K.onenter,u=K.onexit;if(K.onenter=function(e){a||(t().contains(e)?function(e,n){c?c=!1:a||(a=!0,s.events.fire(Xt._didEnterFullscreen,t()===e,l))}(e):"function"==typeof d&&d(e))},K.onexit=function(){a?c?c=!1:a&&(a=!1,s.events.fire(Xt._didExitFullscreen,l),l||s.events.fire(Ut._toggleNativeControls,!1),l=!1):"function"==typeof u&&u()},be(e).on("click","a",(function(e){K.element===t()&&K.exit()})),be(e).on("gestureend",(function(e){e.scale>1&&s.events.fire(Xt._fullscreenButtonPressed)})),"undefined"!=typeof MSGesture){var v=1,m=new MSGesture;m.target=e,be(e).on("pointerdown",(function(e){m.addPointer(e.pointerId)})).on(["MSGestureChange"],(function(e){v*=e.scale})).on(["MSGestureEnd"],(function(){(!a&&v>=2||a&&v<1)&&s.events.fire(Xt._fullscreenButtonPressed),v=1}))}}(),function(){const t=Bo({url:za("vimeo-logo",s.config),embedded:!s.config.embed.on_site,ownerId:s.config.video.owner.id,element:"vimeo_logo"});pr(e,"a[data-clip-link]",e=>L(e,t)),s.events.on(Ut._openVimeo,L)}(),pr(e,"[data-track-click]",e=>{const t=e.target.dataset.trackClick;s.events.fire(Xt._click,t)}),A(),s.config.video.webinar?b=new Pa(s,l):b&&(b.disable(),b=null),s.events.on(Xt._configChanged,()=>{k(),A()}),s.events.on(Ut._destroy,()=>{g.disable()})}function I(){d||(d=new Gr(s,l,e.querySelector(".vp-overlay-wrapper")))}function R(){u||(u=new ba(s,{uuid:s.uuid,id:e.id,isMobileDevice:!1}))}function x(){v||(v=new ya(s))}function D(e){return!!e.embed.wirewax&&!!e.embed.interactive_id}const N={initializationHandler:()=>(function(){I(),R(),x(),o.browser.ie||(D(s.config)&&(m=new Ya(s)),s.events.on(Xt._configChanged,e=>{e&&(!m&&D(s.config)?m=new Ya(s):m&&D(s.config)?m.resetWirewax():m&&!D(s.config)&&(m.destroyWirewax(),m=null))})),new Ba(s),new lr(s,l,e);const t=new ka(s,l,e);new ur(s,e.querySelector(".vp-notification-wrapper")),new gr(s,l,e.querySelector(".vp-outro-wrapper")),new Ea(s,e),new ad(s,e),Object.defineProperties(c,{pauseKeyboard:{enumerable:!0,value:t.pause},unpauseKeyboard:{enumerable:!0,value:t.unpause}})}(),P(),Promise.resolve()),postInitializationHandler:()=>(s.backbone&&new Ra(s,s.backbone,e),Promise.resolve()),authorizationHandler(e){var t,n;S(),T(),e(),I(),R();let i="Error",o="Unhandled video privacy";switch(s.config.view){case en.privatePassword:return new Promise((e,t)=>{s.events.fire(Ut._showOverlay,"password"),s.events.once(Xt._passwordUnlocked,t=>{e(t)})});case en.privateLocked:x();const e={loggedIn:{name:"error",data:{title:"Private Video",message:"Sorry, you don’t have permission to watch.",modal:!0,logo:!!s.config.embed.settings.logo,icon:"lock"}},notLoggedIn:{name:"private-locked",data:null}};let r,a;return s.config.user.logged_in?(r=e.loggedIn,a=Promise.reject()):(r=e.notLoggedIn,a=new Promise((t,n)=>{s.events.once(Xt._privateUnlocked,i=>{if(i.view===en.privateLocked)return r=e.loggedIn,s.events.fire(Ut._showOverlay,r.name,r.data),void n();t(i)})})),s.events.fire(Ut._showOverlay,r.name,r.data),a;case en.error:i=s.config.title,o=s.config.message;break;case en.webinarBlocked:return x(),s.events.fire(Ut._showOverlay,"webinar-confirmation"),Promise.reject();case en.webinarLocked:if(null==(t=s.config.video.webinar)?void 0:t.registration_form)return new Promise((e,t)=>{s.events.fire(Ut._showOverlay,"email-capture"),s.events.once(Xt._webinarFormSuccess,t=>{e(t)})});break;case en.webinarFull:if(null==(n=s.config.video.webinar)?void 0:n.registration_form)return new Promise((e,t)=>{s.events.fire(Ut._showOverlay,"email-capture",{registration_full:!0}),s.events.once(Xt._webinarFormSuccess,t=>{e(t)})})}return s.events.fire(Ut._showOverlay,"error",{title:i,message:o,modal:!0}),Promise.reject()}};return s.init(t,N).then(()=>(s.config.view!==en.privateUnlocked||s.config.embed.autoplay||s.events.fire(Ut._showOverlay,"private-unlocked"),!0)).catch(t=>{gn.captureException(t),I(),R(),e.classList.remove("loading"),s.events.fire(Xt._error,rn.id,rn)}),c}window.requestModule=window.requestModule||ut,window.BigScreen=window.BigScreen||K;export{sd as VimeoPlayer};