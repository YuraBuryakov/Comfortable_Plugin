export var smalltime = (() => {
  var e = {
      213: function (e, t, a) {
        var s, n, i;
        (n = []),
          void 0 ===
            (i =
              "function" ==
              typeof (s = function () {
                function t(e, t) {
                  return (
                    void 0 === t
                      ? (t = { autoBom: !1 })
                      : "object" != typeof t &&
                        (console.warn(
                          "Deprecated: Expected third argument to be a object"
                        ),
                        (t = { autoBom: !t })),
                    t.autoBom &&
                    /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                      e.type
                    )
                      ? new Blob(["\ufeff", e], { type: e.type })
                      : e
                  );
                }
                function s(e, t, a) {
                  var s = new XMLHttpRequest();
                  s.open("GET", e),
                    (s.responseType = "blob"),
                    (s.onload = function () {
                      c(s.response, t, a);
                    }),
                    (s.onerror = function () {
                      console.error("could not download file");
                    }),
                    s.send();
                }
                function n(e) {
                  var t = new XMLHttpRequest();
                  t.open("HEAD", e, !1);
                  try {
                    t.send();
                  } catch (e) {}
                  return 200 <= t.status && 299 >= t.status;
                }
                function i(e) {
                  try {
                    e.dispatchEvent(new MouseEvent("click"));
                  } catch (a) {
                    var t = document.createEvent("MouseEvents");
                    t.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      window,
                      0,
                      0,
                      0,
                      80,
                      20,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      e.dispatchEvent(t);
                  }
                }
                var o =
                    "object" == typeof window && window.window === window
                      ? window
                      : "object" == typeof self && self.self === self
                      ? self
                      : "object" == typeof a.g && a.g.global === a.g
                      ? a.g
                      : void 0,
                  r =
                    o.navigator &&
                    /Macintosh/.test(navigator.userAgent) &&
                    /AppleWebKit/.test(navigator.userAgent) &&
                    !/Safari/.test(navigator.userAgent),
                  c =
                    o.saveAs ||
                    ("object" != typeof window || window !== o
                      ? function () {}
                      : "download" in HTMLAnchorElement.prototype && !r
                      ? function (e, t, a) {
                          var r = o.URL || o.webkitURL,
                            c = document.createElement("a");
                          (t = t || e.name || "download"),
                            (c.download = t),
                            (c.rel = "noopener"),
                            "string" == typeof e
                              ? ((c.href = e),
                                c.origin === location.origin
                                  ? i(c)
                                  : n(c.href)
                                  ? s(e, t, a)
                                  : i(c, (c.target = "_blank")))
                              : ((c.href = r.createObjectURL(e)),
                                setTimeout(function () {
                                  r.revokeObjectURL(c.href);
                                }, 4e4),
                                setTimeout(function () {
                                  i(c);
                                }, 0));
                        }
                      : "msSaveOrOpenBlob" in navigator
                      ? function (e, a, o) {
                          if (
                            ((a = a || e.name || "download"),
                            "string" != typeof e)
                          )
                            navigator.msSaveOrOpenBlob(t(e, o), a);
                          else if (n(e)) s(e, a, o);
                          else {
                            var r = document.createElement("a");
                            (r.href = e),
                              (r.target = "_blank"),
                              setTimeout(function () {
                                i(r);
                              });
                          }
                        }
                      : function (e, t, a, n) {
                          if (
                            ((n = n || open("", "_blank")) &&
                              (n.document.title = n.document.body.innerText =
                                "downloading..."),
                            "string" == typeof e)
                          )
                            return s(e, t, a);
                          var i = "application/octet-stream" === e.type,
                            c = /constructor/i.test(o.HTMLElement) || o.safari,
                            l = /CriOS\/[\d]+/.test(navigator.userAgent);
                          if (
                            (l || (i && c) || r) &&
                            "undefined" != typeof FileReader
                          ) {
                            var d = new FileReader();
                            (d.onloadend = function () {
                              var e = d.result;
                              (e = l
                                ? e
                                : e.replace(
                                    /^data:[^;]*;/,
                                    "data:attachment/file;"
                                  )),
                                n ? (n.location.href = e) : (location = e),
                                (n = null);
                            }),
                              d.readAsDataURL(e);
                          } else {
                            var h = o.URL || o.webkitURL,
                              m = h.createObjectURL(e);
                            n ? (n.location = m) : (location.href = m),
                              (n = null),
                              setTimeout(function () {
                                h.revokeObjectURL(m);
                              }, 4e4);
                          }
                        });
                (o.saveAs = c.saveAs = c), (e.exports = c);
              })
                ? s.apply(t, n)
                : s) || (e.exports = i);
      },
    },
    t = {};
  function a(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var i = (t[s] = { exports: {} });
    return e[s].call(i.exports, i, i.exports, a), i.exports;
  }
  (a.d = (e, t) => {
    for (var s in t)
      a.o(t, s) &&
        !a.o(e, s) &&
        Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
  }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = {};
      a.r(e),
        a.d(e, {
          Calendars: () => c,
          DateSelector: () => at,
          DateSelectorPositions: () => M,
          Icons: () => f,
          LeapYearRules: () => h,
          MoonYearResetOptions: () => y,
          NoteRepeat: () => l,
          PresetTimeOfDay: () => b,
          YearNamingRules: () => m,
          activateFullCalendarListeners: () => st,
          addNote: () => nt,
          addSidebarButton: () => it,
          advanceTimeToPreset: () => ot,
          changeDate: () => rt,
          chooseRandomDate: () => ct,
          clockStatus: () => lt,
          configureCalendar: () => dt,
          currentDateTime: () => ht,
          currentDateTimeDisplay: () => mt,
          dateToTimestamp: () => ut,
          formatDateTime: () => pt,
          formatTimestamp: () => gt,
          getAllCalendars: () => ft,
          getAllMonths: () => yt,
          getAllMoons: () => bt,
          getAllSeasons: () => Ct,
          getAllThemes: () => St,
          getAllWeekdays: () => wt,
          getCurrentCalendar: () => vt,
          getCurrentDay: () => Dt,
          getCurrentMonth: () => kt,
          getCurrentSeason: () => Tt,
          getCurrentTheme: () => Mt,
          getCurrentWeekday: () => jt,
          getCurrentYear: () => It,
          getLeapYearConfiguration: () => Nt,
          getNotes: () => Lt,
          getNotesForDay: () => Ot,
          getTimeConfiguration: () => Pt,
          isOpen: () => At,
          isPrimaryGM: () => xt,
          pauseClock: () => Ft,
          removeNote: () => Et,
          runMigration: () => Rt,
          searchNotes: () => Yt,
          secondsToInterval: () => Wt,
          setDate: () => $t,
          setTheme: () => qt,
          showCalendar: () => Gt,
          startClock: () => zt,
          stopClock: () => Ht,
          timestamp: () => Ut,
          timestampPlusInterval: () => Vt,
          timestampToDate: () => _t,
        });
      const t = "foundryvtt-simple-calendar",
        s = `module.${t}`;
      var n;
      !(function (e) {
        (e.Theme = "theme"),
          (e.OpenOnLoad = "open-on-load"),
          (e.OpenCompact = "open-compact"),
          (e.RememberPosition = "remember-position"),
          (e.RememberCompactPosition = "remember-compact-position"),
          (e.AppPosition = "app-position"),
          (e.AppCompactPosition = "app-compact-position"),
          (e.NoteReminderNotification = "note-reminder-notification"),
          (e.NoteListOpenDirection = "note-list-open-direction"),
          (e.AlwaysShowNoteList = "always-show-note-list"),
          (e.PersistentOpen = "persistent-open"),
          (e.CompactViewScale = "compact-view-scale"),
          (e.CalendarMainApp = "calendar-main-app"),
          (e.CalendarConfigurationMenu = "calendar-configuration-menu"),
          (e.CalendarConfiguration = "calendar-configuration"),
          (e.ActiveCalendar = "active-calendar"),
          (e.GlobalConfiguration = "global-configuration"),
          (e.YearConfiguration = "year-config"),
          (e.WeekdayConfiguration = "weekday-config"),
          (e.MonthConfiguration = "month-config"),
          (e.CurrentDate = "current-date"),
          (e.Notes = "notes"),
          (e.AllowPlayersToAddNotes = "allow-players-add-notes"),
          (e.DefaultNoteVisibility = "default-note-visibility"),
          (e.LeapYearRule = "leap-year-rule"),
          (e.TimeConfiguration = "time-configuration"),
          (e.GeneralConfiguration = "general-configuration"),
          (e.SeasonConfiguration = "season-configuration"),
          (e.MoonConfiguration = "moon-configuration"),
          (e.NoteCategories = "note-categories");
      })(n || (n = {}));
      const i = [
        {
          key: "dark",
          name: "FSC.Configuration.Theme.Dark",
          system: !1,
          module: !1,
        },
        {
          key: "light",
          name: "FSC.Configuration.Theme.Light",
          system: !1,
          module: !1,
        },
        {
          key: "classic",
          name: "FSC.Configuration.Theme.Classic",
          system: !1,
          module: !1,
        },
        {
          key: "wfrp4e",
          name: "FSC.Configuration.Theme.WFRP4E",
          system: !0,
          module: !1,
          images: {
            "--wfrp4e-window-app-header-blank":
              "/systems/wfrp4e/ui/frames/window-app-header-blank.webp",
            "--wfrp4e-window-app-background-bookshelf":
              "/systems/wfrp4e/ui/frames/window-app-background-bookshelf.webp",
            "--wfrp4e-window-app-dialog-content":
              "/systems/wfrp4e/ui/window-app-dialog-content.webp",
            "--wfrp4e-parchment-texture":
              "/systems/wfrp4e/ui/frames/parchment-texture.webp",
            "--wfrp4e-chat-message-border-private":
              "/systems/wfrp4e/ui/frames/chat-message-border-private.webp",
            "--wfrp4e-footer-button": "/systems/wfrp4e/ui/footer-button.webp",
            "--wfrp4e-button-close":
              "/systems/wfrp4e/ui/buttons/button-close.webp",
            "--wfrp4e-button-configure-sheet":
              "/systems/wfrp4e/ui/buttons/button-configure-sheet.webp",
            "--wfrp4e-button-show-players":
              "/systems/wfrp4e/ui/buttons/button-show-players.webp",
            "--wfrp4e-players-border": "/systems/wfrp4e/ui/players-border.webp",
            "--wfrp4e-button-blank":
              "/systems/wfrp4e/ui/buttons/button-blank.webp",
            "--wfrp4e-sidebar_button-background_grey":
              "/systems/wfrp4e/ui/sidebar_button-background_grey.webp",
            "--wfrp4e-sidebar_button-background_red":
              "/systems/wfrp4e/ui/sidebar_button-background_red.webp",
            "--wfrp4e-window-app-journal-sheet-content":
              "/systems/wfrp4e/ui/frames/window-app-journal-sheet-content.webp",
          },
        },
        {
          key: "forbidden-lands",
          name: "FSC.Predefined.ForbiddenLands",
          system: !0,
          module: !1,
          images: {
            "--forbidden-lands-box-border-large":
              "/systems/forbidden-lands/assets/journal-art/box-border-large.webp",
          },
        },
        {
          key: "dsa5",
          name: "FSC.Predefined.DSA-TDE5e",
          system: !0,
          module: !1,
          images: {
            "--dsa5-blackhat": "/systems/dsa5/icons/backgrounds/blackhat.webp",
            "--dsa5-blackbook":
              "/systems/dsa5/icons/backgrounds/blackbook.webp",
            "--dsa5-journalentry":
              "/systems/dsa5/icons/backgrounds/journalentry.webp",
            "--dsa5-actor": "/systems/dsa5/icons/backgrounds/actor.webp",
          },
        },
        {
          key: "sfrpg",
          name: "FSC.Predefined.Starfinder",
          system: !0,
          module: !1,
          images: {
            "--sfrpg-hexellence": "/systems/sfrpg/images/hexellence.webp",
          },
        },
        {
          key: "wrath-and-glory",
          name: "FSC.Predefined.Warhammer40kWG",
          system: !0,
          module: !1,
          images: {
            "--wrath-and-glory-header":
              "/systems/wrath-and-glory/asset/image/header.webp",
            "--wrath-and-glory-journal-border":
              "/systems/wrath-and-glory/asset/image/journal-border.webp",
            "--wrath-and-glory-background":
              "/systems/wrath-and-glory/asset/image/background.webp",
            "--wrath-and-glory-border":
              "/systems/wrath-and-glory/asset/image/border.webp",
            "--wrath-and-glory-input":
              "/systems/wrath-and-glory/asset/image/input.webp",
            "--wrath-and-glory-button":
              "/systems/wrath-and-glory/asset/image/button.webp",
          },
        },
        {
          key: "eclipsephase",
          name: "FSC.Predefined.EclipsePhase",
          system: !0,
          module: !1,
          images: {
            "--eclipsephase-background2":
              "/systems/eclipsephase/resources/img/background2.jpg",
          },
        },
        {
          key: "cyberpunk-red-core",
          name: "FSC.Configuration.Theme.Cyberpunk-Red",
          system: !0,
          module: !1,
        },
      ];
      var o, r, c, l;
      !(function (e) {
        (e.Active = "active"), (e.Current = "current");
      })(o || (o = {})),
        (function (e) {
          (e.none = "none"), (e.v1To2 = "v1-v2");
        })(r || (r = {})),
        (function (e) {
          (e.Gregorian = "gregorian"),
            (e.DarkSun = "darksun"),
            (e.Eberron = "eberron"),
            (e.Exandrian = "exandrian"),
            (e.ForbiddenLands = "forbidden-lands"),
            (e.Harptos = "harptos"),
            (e.GolarianPF1E = "golarianpf1e"),
            (e.GolarianPF2E = "golarianpf2e"),
            (e.Greyhawk = "greyhawk"),
            (e.TravellerImperialCalendar = "traveller-ic"),
            (e.WarhammerImperialCalendar = "warhammer");
        })(c || (c = {})),
        (function (e) {
          (e[(e.Never = 0)] = "Never"),
            (e[(e.Weekly = 1)] = "Weekly"),
            (e[(e.Monthly = 2)] = "Monthly"),
            (e[(e.Yearly = 3)] = "Yearly");
        })(l || (l = {}));
      var d, h, m, u, p, g, f, y, b, C, S, w, v, D, k, T, M, j, I, N, L;
      !(function (e) {
        (e.None = "none"),
          (e.Start = "start"),
          (e.End = "end"),
          (e.Middle = "mid"),
          (e.Exact = "exact");
      })(d || (d = {})),
        (function (e) {
          (e.None = "none"), (e.Gregorian = "gregorian"), (e.Custom = "custom");
        })(h || (h = {})),
        (function (e) {
          (e.Default = "default"), (e.Repeat = "repeat"), (e.Random = "random");
        })(m || (m = {})),
        (function (e) {
          (e.mainAppUpdate = "main-app-update"),
            (e.primary = "primary"),
            (e.clock = "clock"),
            (e.checkClockRunning = "check-clock-running"),
            (e.journal = "journal"),
            (e.dateTimeChange = "date-time-change"),
            (e.noteUpdate = "note-update"),
            (e.emitHook = "emit-hook"),
            (e.setActiveCalendar = "set-calendar"),
            (e.renderChatLog = "render-chat-log");
        })(u || (u = {})),
        (function (e) {
          (e.setDate = "set-date"),
            (e.changeDateTime = "change-date-time"),
            (e.advanceTimeToPreset = "advance-time-to-preset");
        })(p || (p = {})),
        (function (e) {
          (e.None = "none"),
            (e.Self = "self"),
            (e.ThirdParty = "third-party"),
            (e.Mixed = "mixed");
        })(g || (g = {})),
        (function (e) {
          (e.None = "none"),
            (e.Logo = "logo"),
            (e.Clock = "clock"),
            (e.Midday = "midday"),
            (e.Midnight = "midnight"),
            (e.Sunrise = "sunrise"),
            (e.Sunset = "sunset"),
            (e.NewMoon = "new"),
            (e.WaxingCrescent = "waxing-crescent"),
            (e.FirstQuarter = "first-quarter"),
            (e.WaxingGibbous = "waxing-gibbous"),
            (e.Full = "full"),
            (e.WaningGibbous = "waning-gibbous"),
            (e.LastQuarter = "last-quarter"),
            (e.WaningCrescent = "waning-crescent"),
            (e.Spring = "spring"),
            (e.Summer = "summer"),
            (e.Fall = "fall"),
            (e.Winter = "winter");
        })(f || (f = {})),
        (function (e) {
          (e.None = "none"), (e.LeapYear = "leap-year"), (e.XYears = "x-years");
        })(y || (y = {})),
        (function (e) {
          (e.Midnight = "midnight"),
            (e.Sunrise = "sunrise"),
            (e.Midday = "midday"),
            (e.Sunset = "sunset");
        })(b || (b = {})),
        (function (e) {
          (e.DateTimeChange = "simple-calendar-date-time-change"),
            (e.ClockStartStop = "simple-calendar-clock-start-stop"),
            (e.PrimaryGM = "simple-calendar-primary-gm"),
            (e.Ready = "simple-calendar-ready"),
            (e.Init = "simple-calendar-init");
        })(C || (C = {})),
        (function (e) {
          (e.Started = "started"),
            (e.Stopped = "stopped"),
            (e.Paused = "paused");
        })(S || (S = {})),
        (function (e) {
          (e.Full = "full"), (e.QuickIncrement = "quick-increment");
        })(w || (w = {})),
        (function (e) {
          (e.Month = "Month"), (e.Year = "year");
        })(v || (v = {})),
        (function (e) {
          (e.calendar = "calendar"),
            (e.previous = "previous"),
            (e.next = "next"),
            (e.day = "day"),
            (e.dayContext = "datContext"),
            (e.year = "year");
        })(D || (D = {})),
        (function (e) {
          (e.wheel = "wheel"),
            (e.change = "change"),
            (e.dropdownClick = "dropdown-click");
        })(k || (k = {})),
        (function (e) {
          (e.seasonStartingDate = "ssd"),
            (e.seasonSunriseSunsetTime = "ssst"),
            (e.moonFirstNewMoonDate = "mfnmd");
        })(T || (T = {})),
        (function (e) {
          (e.Auto = "auto"),
            (e.LeftDown = "left-down"),
            (e.LeftUp = "left-up"),
            (e.RightDown = "right-down"),
            (e.RightUp = "right-up");
        })(M || (M = {})),
        (function (e) {
          (e.Day = "day"),
            (e.Month = "month"),
            (e.Year = "year"),
            (e.Hour = "hour"),
            (e.Minute = "minute"),
            (e.Round = "round"),
            (e.Second = "seconds");
        })(j || (j = {})),
        (function (e) {
          (e.whisper = "whisper"), (e.render = "render");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Date = 0)] = "Date"),
            (e[(e.Time = 1)] = "Time"),
            (e[(e.DateTime = 2)] = "DateTime"),
            (e[(e.Year = 3)] = "Year"),
            (e[(e.Month = 4)] = "Month"),
            (e[(e.Day = 5)] = "Day");
        })(N || (N = {})),
        (function (e) {
          (e[(e.Equal = 0)] = "Equal"),
            (e[(e.Before = 1)] = "Before"),
            (e[(e.After = 2)] = "After"),
            (e[(e.Nth = 3)] = "Nth");
        })(L || (L = {}));
      class O {
        static on(e) {
          const t = game.socket;
          t && t.on(s, e);
        }
        static async emit(e) {
          const t = game.socket;
          return !!t && (await t.emit(s, e), !0);
        }
      }
      class P {
        static debugMode = !1;
        static info(e) {
          e && console.info("%cSimple Calendar", "color:blue;", ` | ${e}`);
        }
        static warn(e) {
          e && console.warn("%cSimple Calendar", "color:orange;", ` | ${e}`);
        }
        static error(e) {
          e instanceof Error
            ? console.error(
                "%cSimple Calendar",
                "color:red;",
                ` | Error "${e.message}"\n${e.stack}`
              )
            : console.error("%cSimple Calendar", "color:red;", ` | ${e}`);
        }
        static debug(e) {
          e &&
            P.debugMode &&
            console.debug("%cSimple Calendar", "color:green;", ` | ${e}`);
        }
      }
      class A {
        constructor() {}
        async initialize() {
          return !0;
        }
        async process(e, t) {
          return !1;
        }
      }
      function x(e) {
        return e && "object" == typeof e && !Array.isArray(e);
      }
      function F(e) {
        return (
          e &&
          0 === Object.keys(e).length &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function E(e, ...t) {
        if (!t.length) return e;
        const a = t.shift();
        if (x(e) && x(a))
          for (const t in a)
            x(a[t])
              ? (e[t] || Object.assign(e, { [t]: {} }), E(e[t], a[t]))
              : Object.assign(e, { [t]: a[t] });
        return E(e, ...t);
      }
      let R, Y, W, q, G, z;
      class H {
        static IsGm() {
          const e = game.user;
          return !!e && e.isGM;
        }
        static UserName() {
          const e = game.user;
          return e && e.name ? e.name : "";
        }
        static UserID() {
          const e = game.user;
          return e && e.id ? e.id : "";
        }
        static GetUser(e) {
          const t = game.users;
          if (t) return t.find((t) => t.id === e);
        }
        static GetModuleVersion() {
          const e = game.modules.get(t);
          return e ? e.version : "";
        }
        static Localize(e) {
          if (game.i18n) return game.i18n.localize(e);
          {
            const t = e.split(".");
            return t[t.length - 1];
          }
        }
        static GetBooleanSettings(e) {
          return game.settings.get(t, e);
        }
        static GetObjectSettings(e) {
          return game.settings.get(t, e);
        }
        static GetStringSettings(e) {
          return game.settings.get(t, e);
        }
        static GetNumericSettings(e) {
          return game.settings.get(t, e);
        }
        static async SaveBooleanSetting(e, a, s = !0) {
          let n = !1;
          return (
            s ? this.IsGm() && (n = !0) : (n = !0),
            !!n && (await game.settings.set(t, e, a).then(() => !0))
          );
        }
        static async SaveStringSetting(e, a, s = !0) {
          let n = !1;
          return (
            s ? this.IsGm() && (n = !0) : (n = !0),
            !!n && (await game.settings.set(t, e, a).then(() => !0))
          );
        }
        static async SaveNumericSetting(e, a, s = !0) {
          let n = !1;
          return (
            s ? this.IsGm() && (n = !0) : (n = !0),
            !!n && (await game.settings.set(t, e, a).then(() => !0))
          );
        }
        static async SaveObjectSetting(e, a, s = !0) {
          let n = !1;
          if ((s ? this.IsGm() && (n = !0) : (n = !0), n)) {
            const s = H.GetObjectSettings(e);
            if (JSON.stringify(a) !== JSON.stringify(s))
              return await game.settings.set(t, e, a).then(() => !0);
          }
          return !1;
        }
        static UiNotification(e, t = "info", a = !1) {
          ui.notifications
            ? "info" === t
              ? ui.notifications.info(e, {
                  permanent: a,
                  console: !1,
                  localize: !0,
                })
              : "warn" === t
              ? ui.notifications.warn(e, {
                  permanent: a,
                  console: !1,
                  localize: !0,
                })
              : "error" === t &&
                ui.notifications.error(e, {
                  permanent: a,
                  console: !1,
                  localize: !0,
                })
            : P.error("The UI class is not initialized.");
        }
        static GetSceneForCombatCheck() {
          let e = null;
          const t = game.scenes;
          return (
            t &&
              (G.globalConfiguration.combatPauseRule === o.Active
                ? (e = t.active || null)
                : G.globalConfiguration.combatPauseRule === o.Current &&
                  (e = t.current || null)),
            e
          );
        }
      }
      function U() {
        return window.crypto
          .getRandomValues(new Uint32Array(1))[0]
          .toString(16);
      }
      function V(e) {
        return (
          [
            void 0,
            H.Localize("FSC.OrdinalSuffix.st"),
            H.Localize("FSC.OrdinalSuffix.nd"),
            H.Localize("FSC.OrdinalSuffix.rd"),
          ][(e % 100 >> 3) ^ 1 && e % 10] || H.Localize("FSC.OrdinalSuffix.th")
        );
      }
      function _(e, t) {
        const a = e.split("."),
          s = t.split("."),
          n = Math.max(a.length, s.length);
        for (let e = 0; e < n; e++) {
          if (
            (a[e] && !s[e] && parseInt(a[e]) > 0) ||
            parseInt(a[e]) > parseInt(s[e])
          )
            return 1;
          if (
            (s[e] && !a[e] && parseInt(s[e]) > 0) ||
            parseInt(a[e]) < parseInt(s[e])
          )
            return -1;
        }
        return 0;
      }
      function B(e, t = 1) {
        if (e < Math.pow(10, t)) {
          const a = t - ((Math.log(e) * Math.LOG10E) | 0);
          return `${"0".repeat(a)}${e}`;
        }
        return `${e}`;
      }
      class Z {
        static get worldId() {
          return game.world.id;
        }
        static get systemID() {
          return game.system.id;
        }
        static get systemVersion() {
          return game.system.version || game.system.data.version;
        }
      }
      class J {
        static pf2eVersion214 = "2.14.4.8167";
        static pf2eVersion3 = "3.0.1";
        static pf2eVersionCompare214 = 0;
        static pf2eVersionCompare3 = 0;
        static worldCreatedOn = 0;
        static dateTheme = "AR";
        static updatePF2EVariables(e = !1) {
          e &&
            ((this.worldCreatedOn = Math.floor(
              game.pf2e.worldClock.worldCreatedOn / 1e3
            )),
            (this.pf2eVersionCompare214 = _(Z.systemVersion, J.pf2eVersion214)),
            (this.pf2eVersionCompare3 = _(Z.systemVersion, J.pf2eVersion3))),
            (this.dateTheme = game.pf2e.worldClock.dateTheme);
        }
        static get isPF2E() {
          return "pf2e" === Z.systemID;
        }
        static getWorldCreateSeconds(e, t = !0) {
          let a = 0;
          if (Object.prototype.hasOwnProperty.call(game, "pf2e")) {
            let s = this.worldCreatedOn;
            ("AR" !== this.dateTheme && "IC" !== this.dateTheme) ||
              (s += 62167219200),
              (a += s),
              !t &&
              this.pf2eVersionCompare214 > 0 &&
              this.pf2eVersionCompare3 <= 0
                ? (a += e.time.secondsPerDay)
                : t &&
                  (this.pf2eVersionCompare214 <= 0 ||
                    this.pf2eVersionCompare3 >= 0) &&
                  (a -= e.time.secondsPerDay);
          }
          return a;
        }
        static newYearZero() {
          let e;
          return (
            Object.prototype.hasOwnProperty.call(game, "pf2e") &&
              ("AD" === this.dateTheme
                ? (e =
                    this.pf2eVersionCompare214 > 0 &&
                    this.pf2eVersionCompare3 <= 0
                      ? 1970
                      : 1875)
                : "CE" === this.dateTheme
                ? (e = 1970)
                : "AR" === this.dateTheme &&
                  (e =
                    this.pf2eVersionCompare214 > 0 &&
                    this.pf2eVersionCompare3 <= 0
                      ? 0
                      : 2700)),
            e
          );
        }
        static checkLeapYearRules(e) {
          ("AD" !== this.dateTheme &&
            "CE" !== this.dateTheme &&
            "AR" !== this.dateTheme) ||
            (e.rule = h.Gregorian);
        }
        static weekdayAdjust() {
          let e;
          return (
            "CE" === this.dateTheme || "AD" === this.dateTheme
              ? (e = 4)
              : "AR" === this.dateTheme &&
                (e = this.pf2eVersionCompare3 > 0 ? 6 : 5),
            e
          );
        }
      }
      function K(e, t, a, s = {}) {
        s = E({ year: !1, month: !1 }, s);
        const n = /DO|d{1,4}|M{1,4}|YN|YA|YZ|YY(?:YY)?|([HhMmsD])\1?|[aA]/g,
          i = {
            D: (e) =>
              String(
                a.months[e.month]?.days[e.day]?.numericRepresentation || 0
              ),
            DD: (e) =>
              B(a.months[e.month]?.days[e.day]?.numericRepresentation || 0),
            DO: (e) =>
              `${String(
                a.months[e.month]?.days[e.day]?.numericRepresentation || 0
              )}${V(
                0 | a.months[e.month]?.days[e.day]?.numericRepresentation
              )}`,
            d: (e) =>
              String(
                a.weekdays[a.dayOfTheWeek(e.year, e.month, e.day)]
                  ?.numericRepresentation || 0
              ),
            dd: (e) =>
              B(
                a.weekdays[a.dayOfTheWeek(e.year, e.month, e.day)]
                  ?.numericRepresentation || 0
              ),
            ddd: (e) =>
              `${
                a.weekdays[a.dayOfTheWeek(e.year, e.month, e.day)]
                  ?.abbreviation || ""
              }`,
            dddd: (e) =>
              `${
                a.weekdays[a.dayOfTheWeek(e.year, e.month, e.day)]?.name || ""
              }`,
            M: (e) => String(a.months[e.month]?.numericRepresentation || 0),
            MM: (e) => B(a.months[e.month]?.numericRepresentation || 0),
            MMM: (e) => a.months[e.month]?.abbreviation || "",
            MMMM: (e) => a.months[e.month]?.name || "",
            YN: (e) => a.year.getYearName(e.year),
            YA: () => a.year.prefix,
            YZ: () => a.year.postfix,
            YY: (e) =>
              s.year
                ? `<input type="number" class="fsc-a" style="width:4ch;" value="${B(
                    e.year,
                    2
                  ).substring(2)}" />`
                : B(e.year, 2).substring(2),
            YYYY: (e) =>
              s.year
                ? `<input type="number" class="fsc-a" style="width:${
                    String(e.year).length + 2
                  }ch;" value="${e.year}" />`
                : String(e.year),
            H: (e) => String(e.hour),
            HH: (e) => B(e.hour),
            h: (e) => {
              const t = Math.floor(a.time.hoursInDay / 2),
                s = e.hour % t || t;
              return String(s);
            },
            hh: (e) => {
              const t = Math.floor(a.time.hoursInDay / 2);
              return B(e.hour % t || t);
            },
            m: (e) => String(e.minute),
            mm: (e) => B(e.minute),
            s: (e) => String(e.seconds),
            ss: (e) => B(e.seconds),
            A: (e) => {
              const t = Math.floor(a.time.hoursInDay / 2);
              return e.hour >= t ? "PM" : "AM";
            },
            a: (e) => {
              const t = Math.floor(a.time.hoursInDay / 2);
              return e.hour >= t ? "pm" : "am";
            },
          },
          o = [];
        t = t.replace(/\[([^]*?)\]/gm, function (e, t) {
          return o.push(t), "@@@";
        });
        try {
          return (t = t.replace(n, (t) => i[t](e))).replace(/@@@/g, () =>
            o.shift()
          );
        } catch (e) {
          return P.error(e), "";
        }
      }
      function X(e, t = null, a = null) {
        const s = a?.getMonthAndDayIndex("current"),
          n = a?.time.getCurrentTime();
        return (
          void 0 === e.year &&
            (e.year = t?.year || a?.year.numericRepresentation || 0),
          void 0 === e.month && (e.month = t?.month || s?.month || 0),
          void 0 === e.day && (e.day = t?.day || s?.day || 0),
          void 0 === e.hour && (e.hour = t?.hour || n?.hour || 0),
          void 0 === e.minute && (e.minute = t?.minute || n?.minute || 0),
          void 0 === e.seconds && (e.seconds = t?.seconds || n?.seconds || 0),
          e
        );
      }
      function Q(e, t, a, s, n = !0) {
        let i = e.dateToDays(t, a, s, !0),
          o = e.time.getTotalSeconds(i, n);
        if (J.isPF2E && e.generalSettings.pf2eSync) {
          const r = J.newYearZero();
          void 0 !== r &&
            ((e.year.yearZero = r), (i = e.dateToDays(t, a, s, !0))),
            i++,
            (o = e.time.getTotalSeconds(i, n) - J.getWorldCreateSeconds(e, !1));
        }
        return o;
      }
      function ee(e, t, a, s, n = !1, i = !0, o = "-") {
        const r = e.generalSettings.dateFormat.time.replace(/:?[s]/g, "");
        let c = e.generalSettings.dateFormat.date;
        i || (c = c.replace(/[,./\\\s]*?(YN|YA|YZ|YY(?:YY)?)/g, ""));
        let l = "",
          d = "";
        return (
          te(t, a) ? n || (l = `${c}`) : ((l = `${c}`), (d = `${c}`)),
          s || (l += ` ${r}`),
          s || (t.hour === a.hour && t.minute === a.minute) || (d += ` ${r}`),
          "" !== d && (d = ` ${o} ${d}`),
          `${K(t, l, e)}${K(a, d, e)}`
        );
      }
      function te(e, t) {
        return e.year === t.year && e.month === t.month && e.day === t.day;
      }
      function ae(e, t, a) {
        const s = e.dateToDays(t.year, t.month, t.day);
        return e.dateToDays(a.year, a.month, a.day) - s;
      }
      function se(e, t, a, s) {
        let n = d.None;
        const i = Q(e, t.year, t.month, t.day, !1),
          o = Q(e, a.year, a.month, a.day, !1),
          r = Q(e, s.year, s.month, s.day, !1);
        return (
          i === o && i === r
            ? (n = d.Exact)
            : i === o
            ? (n = d.Start)
            : i === r
            ? (n = d.End)
            : i < r && i > o && (n = d.Middle),
          n
        );
      }
      function ne(e, t) {
        const a = {
          year: 0,
          month: 0,
          dayOffset: 0,
          day: 0,
          dayOfTheWeek: 0,
          hour: 0,
          minute: 0,
          second: 0,
          yearZero: 0,
          sunrise: 0,
          sunset: 0,
          midday: 0,
          weekdays: [],
          showWeekdayHeadings: !0,
          currentSeason: {
            id: "",
            name: "",
            description: "",
            color: "",
            icon: f.None,
            sunsetTime: 0,
            sunriseTime: 0,
            startingDay: 0,
            startingMonth: 0,
          },
          isLeapYear: !1,
          display: {
            date: "",
            day: "",
            daySuffix: "",
            weekday: "",
            monthName: "",
            month: "",
            year: "",
            yearName: "",
            yearPrefix: "",
            yearPostfix: "",
            time: "",
          },
        };
        J.isPF2E &&
          t.generalSettings.pf2eSync &&
          (e += J.getWorldCreateSeconds(t));
        const s = t.secondsToDate(e);
        (a.year = s.year),
          (a.month = s.month),
          (a.day = s.day),
          (a.hour = s.hour),
          (a.minute = s.minute),
          (a.second = s.seconds);
        const n = t.months[s.month],
          i = n.days[s.day];
        return (
          (a.dayOffset = n.numericRepresentationOffset),
          (a.yearZero = t.year.yearZero),
          (a.dayOfTheWeek = t.dayOfTheWeek(a.year, a.month, a.day)),
          (a.currentSeason = t.getSeason(a.month, a.day + 1)),
          (a.weekdays = t.weekdays.map((e) => e.name)),
          (a.showWeekdayHeadings = t.year.showWeekdayHeadings),
          (a.isLeapYear = t.year.leapYearRule.isLeapYear(a.year)),
          (a.sunrise = t.getSunriseSunsetTime(a.year, a.month, a.day, !0)),
          (a.sunset = t.getSunriseSunsetTime(a.year, a.month, a.day, !1)),
          (a.midday =
            ie(
              {
                year: a.year,
                month: a.month,
                day: a.day,
                hour: 0,
                minute: 0,
                seconds: 0,
              },
              t
            ) + Math.floor(t.time.secondsPerDay / 2)),
          (a.display.year = s.year.toString()),
          (a.display.yearName = t.year.getYearName(a.year)),
          (a.display.yearPrefix = t.year.prefix),
          (a.display.yearPostfix = t.year.postfix),
          (a.display.month = n.numericRepresentation.toString()),
          (a.display.monthName = n.name),
          t.weekdays.length > a.dayOfTheWeek &&
            (a.display.weekday = t.weekdays[a.dayOfTheWeek].name),
          (a.display.day = i.numericRepresentation.toString()),
          (a.display.daySuffix = V(i.numericRepresentation)),
          (a.display.time = K(
            {
              year: a.year,
              month: a.month,
              day: a.day,
              hour: a.hour,
              minute: a.minute,
              seconds: a.second,
            },
            t.generalSettings.dateFormat.time,
            t
          )),
          (a.display.date = K(
            {
              year: a.year,
              month: a.month,
              day: a.day,
              hour: a.hour,
              minute: a.minute,
              seconds: a.second,
            },
            t.generalSettings.dateFormat.date,
            t
          )),
          a
        );
      }
      function ie(e, t) {
        const a = t.clone(!1),
          s = X(e, null, a);
        return (
          a.updateMonth(s.month, "current", !0, s.day),
          (a.year.numericRepresentation = s.year),
          a.time.setTime(s.hour, s.minute, s.seconds),
          a.toSeconds()
        );
      }
      function oe(e, t, a) {
        const s = { hour: 0, minute: 0, seconds: 0 };
        let n = 0;
        e === b.Midday
          ? (n = t.time.secondsPerDay / 2)
          : (e !== b.Sunrise && e !== b.Sunset) ||
            (n = t.getSunriseSunsetTime(
              a.year,
              a.month,
              a.day,
              e === b.Sunrise,
              !1
            ));
        const i = t.secondsToDate(n);
        return (
          (s.hour = i.hour), (s.minute = i.minute), (s.seconds = i.seconds), s
        );
      }
      async function re(e, t) {
        if (t) {
          let a = 0,
            s = 0;
          if (e === b.Sunrise || e === b.Sunset) {
            const n = t.getMonthAndDayIndex();
            (a = t.getSunriseSunsetTime(
              t.year.numericRepresentation,
              n.month || 0,
              n.day || 0,
              e === b.Sunrise,
              !1
            )),
              (s = a - t.time.seconds);
          } else
            e === b.Midday
              ? (s = Math.floor(t.time.secondsPerDay / 2) - t.time.seconds)
              : e === b.Midnight && (s = t.time.secondsPerDay - t.time.seconds);
          if (
            (s <= 0 && (s += t.time.secondsPerDay),
            t.changeDateTime(
              { seconds: s },
              { updateApp: !1, showWarning: !0 }
            ),
            e === b.Sunrise || e === b.Sunset)
          ) {
            const n = t.getMonthAndDayIndex();
            (a = t.getSunriseSunsetTime(
              t.year.numericRepresentation,
              n.month || 0,
              n.day || 0,
              e === b.Sunrise,
              !1
            )),
              a !== t.time.seconds &&
                ((s = a - t.time.seconds),
                t.changeDateTime(
                  { seconds: s },
                  { updateApp: !1, showWarning: !0 }
                ));
          }
        }
      }
      const ce = parseInt(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("font-size")
      );
      function le(e) {
        let t = "#000000";
        if (
          (0 === e.indexOf("#") && (e = e.slice(1)),
          3 === e.length || 6 === e.length)
        ) {
          3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
          t =
            0.299 * parseInt(e.slice(0, 2), 16) +
              0.587 * parseInt(e.slice(2, 4), 16) +
              0.114 * parseInt(e.slice(4, 6), 16) >
            186
              ? "#000000"
              : "#FFFFFF";
        }
        return t;
      }
      function de(e, t = "#000000", a = "#000000") {
        let s = "",
          n = /fill="#000000"/g;
        switch (e) {
          case f.Logo:
            s =
              '<?xml version="1.0" encoding="utf-8"?>\n<svg viewBox="0 0 163.632 179.888" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">\n  <g style="" transform="matrix(1.109639, 0, 0, 1.109639, -25.722576, 0.588635)">\n    <path style="paint-order: fill; stroke: rgb(0, 0, 0); stroke-width: 0.901194px; fill: rgb(26, 51, 68);" d="M 27.687 51.087 H 165.041 V 138.185 A 18.993 18.993 0 0 1 146.048 157.178 H 49.975 A 22.288 22.288 0 0 1 27.687 134.89 V 51.087 Z" bx:shape="rect 27.687 51.087 137.354 106.091 0 0 18.993 22.288 1@cbaa1f8b"/>\n    <path style="fill: rgb(60, 118, 158); stroke: rgb(0, 0, 0); stroke-width: 0.901194px;" d="M 38.13 15.855 H 154.421 A 10.683 10.683 0 0 1 165.104 26.538 V 51.06 H 27.721 V 26.264 A 10.409 10.409 0 0 1 38.13 15.855 Z" bx:shape="rect 27.721 15.855 137.383 35.205 10.409 10.683 0 0 1@30307c42"/>\n    <ellipse style="fill: rgb(26, 70, 112);" cx="53.467" cy="33.021" rx="6.84" ry="6.498"/>\n    <ellipse style="fill: rgb(26, 70, 112);" cx="139.291" cy="33.007" rx="6.84" ry="6.498"/>\n    <rect x="49.037" y="3.983" width="9.076" height="31.905" style="fill: rgb(216, 216, 216); stroke-width: 0.930572px; stroke: rgb(0, 0, 0);" rx="3.013" ry="3.013"/>\n    <rect x="134.781" y="3.975" width="9.076" height="31.905" style="fill: rgb(216, 216, 216); stroke-width: 0.930572px; stroke: rgb(0, 0, 0);" rx="3.013" ry="3.013"/>\n    <g transform="matrix(0.006346, 0, 0, -0.006346, 72.998573, 44.807747)" fill="#000000" stroke="none" style="">\n      <path d="M 2062 3457.803 C 2046 3441.803 2045 1808.803 2060 1762.803 C 2074 1722.803 2113 1702.803 2305 1634.803 C 2393 1603.803 2502 1558.803 2548 1533.803 L 2630 1489.803 L 4945 1488.803 L 5030 1530.803 C 5083 1555.803 5162 1582.803 5240 1600.803 C 5309 1616.803 5377 1634.803 5391 1640.803 C 5427 1654.803 5465 1697.803 5479 1738.803 C 5495 1788.803 5495 3440.803 5478 3457.803 C 5469 3466.803 5355 3469.803 5028 3469.803 L 4590 3469.803 L 4430 3469.803 L 3785 3469.803 L 3140 3469.803 L 2990 3469.803 L 2532 3469.803 C 2189 3469.803 2071 3466.803 2062 3457.803 Z" style=""/>\n      <path d="M 440 3270.803 C 392 3265.803 384 3260.803 367 3231.803 C 348 3198.803 348 3194.803 364 3066.803 C 382 2927.803 496 2346.803 511 2317.803 C 534 2274.803 629 2241.803 1140 2104.803 C 1412 2030.803 1950 1899.803 1979 1899.803 C 1990 1899.803 2000 1908.803 2004 1922.803 C 2007 1934.803 2010 2237.803 2010 2596.803 C 2010 3175.803 2008 3249.803 1994 3263.803 C 1980 3277.803 1899 3279.803 1237 3277.803 C 829 3276.803 470 3273.803 440 3270.803 Z" style=""/>\n      <path d="M 5572 3257.803 C 5556 3241.803 5554 1858.803 5571 1827.803 C 5585 1801.803 5582 1801.803 5927 1899.803 C 6490 2058.803 6711 2137.803 7060 2305.803 C 7378 2457.803 7619 2604.803 7840 2782.803 C 8106 2996.803 8216 3187.803 8107 3246.803 C 8077 3263.803 7999 3264.803 6830 3267.803 C 5861 3269.803 5582 3267.803 5572 3257.803 Z" style=""/>\n      <path d="M 2740 1352 C 2629 1135 2469 950 2268 810 C 2209 769 2158 727 2155 717 C 2137 668 2055 670 3789 670 C 5450 670 5430 670 5430 707 C 5430 713 5352 781 5258 857 C 4985 1075 4902 1166 4810 1350 C 4792 1386 4777 1416 4775 1418 C 4774 1419 2795 1440 2791 1440 C 2788 1440 2765 1401 2740 1352 Z" style=""/>\n      <path d="M1902 628 c-17 -17 -17 -529 0 -546 9 -9 447 -12 1909 -12 1735 0 1899 1 1914 16 14 14 16 48 13 276 -3 217 -5 260 -18 268 -24 15 -3803 13 -3818 -2z" style=""/>\n    </g>\n    <path d="M 76.481 119.745 C 76.481 117.167 75.57 115.183 73.753 113.807 C 71.935 112.429 68.656 110.971 63.928 109.443 C 59.194 107.905 55.449 106.397 52.691 104.911 C 45.171 100.847 41.411 95.378 41.411 88.491 C 41.411 84.913 42.415 81.725 44.436 78.917 C 46.454 76.114 49.346 73.918 53.123 72.34 C 56.9 70.767 61.136 69.975 65.838 69.975 C 70.568 69.975 74.783 70.833 78.483 72.547 C 82.18 74.26 85.055 76.679 87.101 79.804 C 89.148 82.927 90.173 86.472 90.173 90.446 L 76.527 90.446 C 76.527 87.415 75.57 85.056 73.663 83.373 C 71.752 81.692 69.064 80.85 65.61 80.85 C 62.275 80.85 59.681 81.554 57.833 82.963 C 55.982 84.377 55.058 86.233 55.058 88.534 C 55.058 90.69 56.14 92.495 58.311 93.95 C 60.476 95.404 63.67 96.766 67.885 98.046 C 75.649 100.377 81.304 103.275 84.85 106.728 C 88.402 110.188 90.173 114.5 90.173 119.648 C 90.173 125.383 88.005 129.874 83.673 133.136 C 79.33 136.398 73.493 138.029 66.151 138.029 C 61.06 138.029 56.424 137.098 52.237 135.23 C 48.05 133.367 44.855 130.812 42.659 127.568 C 40.462 124.324 39.361 120.559 39.361 116.284 L 53.055 116.284 C 53.055 123.593 57.422 127.249 66.151 127.249 C 69.401 127.249 71.935 126.587 73.753 125.267 C 75.57 123.953 76.481 122.11 76.481 119.745 Z M 151.384 115.057 C 150.87 122.184 148.235 127.794 143.49 131.888 C 138.748 135.982 132.493 138.029 124.724 138.029 C 116.234 138.029 109.553 135.171 104.69 129.454 C 99.822 123.736 97.391 115.886 97.391 105.914 L 97.391 101.865 C 97.391 95.497 98.512 89.886 100.753 85.032 C 103 80.18 106.209 76.459 110.378 73.866 C 114.546 71.277 119.39 69.975 124.909 69.975 C 132.547 69.975 138.709 72.024 143.376 76.116 C 148.048 80.213 150.746 85.956 151.476 93.357 L 137.826 93.357 C 137.493 89.084 136.305 85.979 134.258 84.055 C 132.209 82.128 129.095 81.169 124.909 81.169 C 120.359 81.169 116.959 82.795 114.699 86.054 C 112.435 89.317 111.277 94.372 111.218 101.228 L 111.218 106.236 C 111.218 113.389 112.304 118.619 114.469 121.924 C 116.634 125.231 120.056 126.881 124.724 126.881 C 128.94 126.881 132.088 125.921 134.165 123.996 C 136.241 122.069 137.434 119.091 137.738 115.057 Z" style="fill: rgb(225, 180, 56); line-height: 25.051px; stroke: rgb(0, 0, 0); white-space: pre;"/>\n  </g>\n</svg>';
            break;
          case f.Clock:
            s =
              '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n    <path fill="#000000" d="M50 92.5C26.6 92.5 7.5 73.4 7.5 50S26.6 7.5 50 7.5 92.5 26.6 92.5 50 73.4 92.5 50 92.5zm0-79.3c-20.3 0-36.8 16.5-36.8 36.8S29.7 86.8 50 86.8 86.8 70.3 86.8 50 70.3 13.2 50 13.2z"/>\n    <path id="c_arm_s" fill="#000000" d="M65.7 26.4c.5-.9.2-2-.7-2.5s-2-.2-2.5.6l-15 24c0 .1-.1.1-.1.2-.4.7-.4 1.6-.1 2.3.2.6.7 1.1 1.2 1.4.2.1.3.2.5.2 1.3.4 2.8-.2 3.5-1.5l13.2-24.7z"/>\n    <path id="c_arm_m" fill="#000000" d="M60.02350382678833,34.42733963723822 C60.37102334373321,33.801804506737426 60.16251163356629,33.03726156945868 59.53697650306549,32.68974205251379 S58.14689843528595,32.55073424573584 57.79937891834106,33.106765472847655 L47.373793409994505,49.78770228620215 C47.373793409994505,49.857206189591125 47.30428950660553,49.857206189591125 47.30428950660553,49.9267100929801 C47.02627389304962,50.41323741670294 47.02627389304962,51.038772547203735 47.23478560321655,51.525299870926574 C47.373793409994505,51.942323291260436 47.72131292693939,52.28984280820532 48.068832443884276,52.49835451837225 C48.20784025066223,52.56785842176123 48.27734415405121,52.63736232515021 48.41635196082916,52.63736232515021 C49.31990270488586,52.915377938706115 50.36246125572052,52.49835451837225 50.84898857944336,51.59480377431555 L60.02350382678833,34.42733963723822 z"/>\n</svg>';
            break;
          case f.Midday:
            s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">\n    <circle cx="24.534" cy="24.483" r="10.5" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" fill="#000000"/>\n    <path d="M 24.5 8.21 L 24.5 2 M 24.5 47 L 24.5 40.79 M 36.02 12.98 L 40.41 8.59 M 8.59 40.41 L 12.98 36.02 M 12.98 13.02 L 8.59 8.63 M 40.41 40.41 L 36.02 36.02 M 8.21 24.5 L 2 24.5 M 47 24.5 L 40.79 24.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>\n</svg>';
            break;
          case f.Midnight:
            s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">\n    <path d="M 38.767 28.7 C 29.562 28.767 22.048 21.355 21.987 12.15 C 21.991 10.749 22.176 9.354 22.537 8 C 9.887 9.573 3.682 24.25 11.369 34.42 C 19.057 44.589 34.87 42.624 39.833 30.882 C 40.146 30.141 40.405 29.379 40.607 28.6 C 39.997 28.66 39.387 28.7 38.767 28.7 Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" fill="#000000"/>\n</svg>';
            break;
          case f.Sunrise:
            s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">\n    <defs>\n        <clipPath id="a">\n            <rect y="7.5" width="64" height="32" fill="none"/>\n        </clipPath>\n    </defs>\n    <g clip-path="url(#a)" transform="matrix(1, 0, 0, 1, -7.5, -12.5)">\n        <circle cx="32" cy="39" r="10.5" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" fill="#000000"/>\n        <path d="M32,22.71V16.5m0,45V55.29M43.52,27.48l4.39-4.39M16.09,54.91l4.39-4.39m0-23-4.39-4.39M47.91,54.91l-4.39-4.39M15.71,39H9.5m45,0H48.29" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>\n    </g>\n    <line x1="8.33" y1="30.091" x2="40.692" y2="30.091" fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2"/>\n    <path d="M 18.308 40.395 L 22.673 40.395 L 22.673 45.795 L 30.632 38.595 L 22.673 31.396 L 22.673 36.793 L 18.308 36.793 L 18.308 40.395 Z" fill="#000000" stroke="#000000" style="" transform="matrix(0, -1, 1, 0, -14.125499, 63.065498)"/>\n</svg>';
            break;
          case f.Sunset:
            s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">\n    <defs>\n        <clipPath id="a">\n            <rect y="7.5" width="64" height="32" fill="none"/>\n        </clipPath>\n    </defs>\n    <g clip-path="url(#a)" transform="matrix(1, 0, 0, 1, -7.5, -12.5)">\n        <circle cx="32" cy="39" r="10.5" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" fill="#000000"/>\n        <path d="M32,22.71V16.5m0,45V55.29M43.52,27.48l4.39-4.39M16.09,54.91l4.39-4.39m0-23-4.39-4.39M47.91,54.91l-4.39-4.39M15.71,39H9.5m45,0H48.29" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>\n    </g>\n    <line x1="8.33" y1="30.091" x2="40.692" y2="30.091" fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2"/>\n    <path d="M 18.308 40.395 L 22.673 40.395 L 22.673 45.795 L 30.632 38.595 L 22.673 31.396 L 22.673 36.793 L 18.308 36.793 L 18.308 40.395 Z" fill="#000000" stroke="#000000" style="" transform="matrix(0, 1, -1, 0, 63.065498, 14.125499)"/>\n</svg>';
            break;
          case f.FirstQuarter:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="16.218" cy="42.249" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, -0.000001, 0.000001, 1, 3.281975, -22.748966)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 19 2.001 C 19.041 36.978 19.02 29.71 19.041 36.978 C 28.782 37.057 36.752 29.24 36.862 19.499 C 36.762 9.734 28.765 1.9 19 2.001 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.Full:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="19.5" cy="19.5" r="17.5" fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.LastQuarter:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="-16.218" cy="-42.249" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, -0.000001, 0.000001, 1, 35.718063, 61.749001)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 19.861 36.978 C 19.821 2.001 19.842 9.269 19.821 2.001 C 10.08 1.922 2.11 9.739 2 19.48 C 2.1 29.245 10.097 37.079 19.861 36.978 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.NewMoon:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="19.5" cy="19.5" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.WaningCrescent:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="42.249" cy="16.218" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, 0.000001, -0.000001, 1, -22.748966, 3.281975)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 21.962 36.805 C 6.511 30.451 6.506 8.556 21.966 2.205 L 22.063 2.183 C 21.227 2.064 20.384 2.003 19.539 2 C 6.061 1.996 -2.367 16.584 4.369 28.258 C 7.496 33.678 13.279 37.018 19.537 37.017 C 20.38 37.015 21.223 36.955 22.058 36.837 L 21.962 36.805 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.WaningGibbous:
            (s =
              '<svg viewBox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="42.249" cy="16.218" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, 0.000001, -0.000001, 1, -22.748966, 3.281975)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 25.68 31.849 C 18.455 25.516 18.025 16.023 24.098 8.578 C 26.607 6.154 27.463 5.954 28.652 5.111 C 21.501 0.02 11.634 1.301 6.02 8.05 C -0.076 15.514 0.863 26.472 8.141 32.791 C 13.994 37.998 22.666 38.479 29.058 33.949 L 25.68 31.849 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.WaxingCrescent:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="-42.249" cy="-16.218" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, 0.000001, -0.000001, 1, 61.749001, 35.718063)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 17.1 2.212 C 32.552 8.566 32.557 30.461 17.097 36.812 L 17 36.834 C 17.836 36.953 18.679 37.014 19.524 37.017 C 33.001 37.021 41.429 22.433 34.694 10.759 C 31.567 5.338 25.784 1.999 19.526 2 C 18.683 2.002 17.84 2.062 17.005 2.18 L 17.1 2.212 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.WaxingGibbous:
            (s =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">\n    <circle cx="-42.249" cy="-16.218" r="17.5" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="matrix(1, 0.000001, -0.000001, 1, 61.749001, 35.718063)"/>\n    <path fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M 13.378 7.199 C 20.603 13.531 21.034 23.025 14.96 30.469 C 12.452 32.894 11.596 33.093 10.406 33.937 C 17.557 39.028 27.424 37.746 33.038 30.998 C 39.134 23.533 38.195 12.575 30.918 6.256 C 25.064 1.049 16.392 0.569 10 5.098 L 13.378 7.199 Z"/>\n</svg>\n'),
              (n = /fill="#ffffff"/g);
            break;
          case f.Spring:
            s = `<span class="fa fa-seedling" style="color:${t};"></span>`;
            break;
          case f.Summer:
            s = `<span class="fa fa-sun" style="color:${t};"></span>`;
            break;
          case f.Fall:
            s = `<span class="fa fa-leaf" style="color:${t};"></span>`;
            break;
          case f.Winter:
            s = `<span class="fa fa-snowflake" style="color:${t};"></span>`;
        }
        return (
          (s = s.replace(/stroke="#000000"/g, `stroke="${t}"`)),
          (s = s.replace(n, `fill="${a}"`)),
          s
        );
      }
      function he() {
        let e = H.GetStringSettings(`${Z.worldId}.${n.Theme}`);
        if (!e) {
          e = H.GetStringSettings(n.Theme);
          const t = i.find((t) => t.key === e);
          if (t)
            if (t.system && Z.systemID !== t.key) e = i[0].key;
            else if (t.module) {
              const a = game.modules.get(t.key);
              (a && a.active) || (e = i[0].key);
            }
        }
        return e;
      }
      function me() {
        const e = {};
        for (let t = 0; t < i.length; t++)
          if (
            (!i[t].system && !i[t].module) ||
            (i[t].system && Z.systemID === i[t].key)
          )
            e[i[t].key] = i[t].name;
          else if (i[t].module) {
            const a = game.modules.get(i[t].key);
            a && a.active && (e[i[t].key] = i[t].name);
          }
        return e;
      }
      function ue(e) {
        return e * (ce / 16);
      }
      function pe(e, t, a = !1) {
        let s = !1;
        return (
          e &&
            !e.classList.contains("fsc-b") &&
            (e.classList.contains("fsc-c") || a
              ? (e.classList.add("fsc-b"),
                e.classList.remove("fsc-c"),
                (s = !1),
                setTimeout(ge.bind(null, e, !0, "fsc-d"), t))
              : (e.classList.add("fsc-b", "fsc-c"),
                e.classList.remove("fsc-d"),
                (s = !0)),
            setTimeout(ge.bind(null, e, !1, "fsc-b"), t)),
          s
        );
      }
      function ge(e, t, a) {
        t ? e.classList.add(a) : e.classList.remove(a);
      }
      function fe(e, t, a = document) {
        const s = a.querySelector(e)?.closest(".form-group");
        s &&
          ((s.classList.contains("fsc-d") && t) ||
          (s.classList.contains("fsc-c") && !t)
            ? pe(s, 200)
            : t
            ? (s.classList.remove("fsc-d"), s.classList.add("fsc-c"))
            : (s.classList.add("fsc-d"), s.classList.remove("fsc-c")));
      }
      class ye {
        static GenerateNoteIconTitle(e, t) {
          let a = `${e} ${H.Localize("FSC.Configuration.General.Notes")}`;
          if (t.length < 3) {
            a = H.Localize("FSC.Configuration.General.Notes") + ":\n";
            for (let e = 0; e < t.length; e++) {
              0 !== e && (a += "\n");
              a += `${t[e].title.replace(/"/g, "&quot;")}`;
            }
          }
          return a;
        }
      }
      function be(e, t) {
        return (
          null !== e &&
          !!(
            e.isGM ||
            (t.player && e.hasRole(1)) ||
            (t.trustedPlayer && e.hasRole(2)) ||
            (t.assistantGameMaster && e.hasRole(3)) ||
            (t.users && t.users.includes(e.id ? e.id : ""))
          )
        );
      }
      class Ce {
        static defaultOptions = {
          id: "",
          allowChangeMonth: !0,
          allowSelectDateRange: !1,
          colorToMatchSeason: !0,
          cssClasses: "",
          editYear: !1,
          showCurrentDate: !0,
          showSeasonName: !0,
          showNoteCount: !0,
          showMoonPhases: !0,
          showYear: !0,
          showDescriptions: !0,
          showDayDetails: !0,
          theme: "auto",
          view: v.Month,
        };
        static Render(e, t = { id: "" }) {
          let a = "";
          if ((t = E({}, this.defaultOptions, t)).view === v.Month)
            a = this.Build(e, t);
          else if (t.view === v.Year) {
            const s = t.date ? t.date.year : e.year.visibleYear;
            (a = `<div class="fsc-e" id="${t.id}"><div class="fsc-f">`),
              t.allowChangeMonth &&
                (a += `<a class="fa fa-chevron-left" data-tooltip="${H.Localize(
                  "FSC.ChangePreviousMonth"
                )}"></a>`),
              (a += `<span>${s}</span>`),
              t.allowChangeMonth &&
                (a += `<a class="fa fa-chevron-right" data-tooltip="${H.Localize(
                  "FSC.ChangeNextMonth"
                )}"></a>`),
              (a += "</div>"),
              (a += '<div  class="fsc-g">'),
              (t.showYear = !1),
              (t.allowChangeMonth = !1);
            const n = t.id;
            for (let i = 0; i < e.months.length; i++)
              (t.date = { year: s, month: i, day: 0 }),
                (t.id = `${n}-${i}`),
                (a += this.Build(e, t));
            (a += "</div>"), (a += "</div>");
          }
          if ("none" !== t.theme) {
            a = `<div class="simple-calendar ${
              "auto" === t.theme ? G.clientSettings.theme : t.theme
            }">${a}</div>`;
          }
          return a;
        }
        static Build(e, t) {
          let a = e.generalSettings.dateFormat.monthYear;
          t.showYear || (a = a.replace(/YN|YA|YZ|YY(?:YY)?/g, ""));
          let s,
            n,
            i,
            o,
            r,
            c,
            l,
            h = 0,
            m = [],
            u = "",
            p = "",
            g = "",
            f = "",
            y = [];
          if (
            (t.date
              ? (t.date.month >= 0 &&
                  t.date.month < e.months.length &&
                  (h = t.date.month),
                (s = t.date.year))
              : ((s = e.year.visibleYear), (h = e.getMonthIndex("visible"))),
            (m = e.daysIntoWeeks(h, s, e.weekdays.length)),
            t.selectedDates
              ? ((n = t.selectedDates.start.year),
                (r = t.selectedDates.end.year),
                (i =
                  t.selectedDates.start.month > 0 &&
                  t.selectedDates.start.month < e.months.length
                    ? t.selectedDates.start.month
                    : 0),
                (c =
                  t.selectedDates.end.month > 0 &&
                  t.selectedDates.end.month < e.months.length
                    ? t.selectedDates.end.month
                    : 0),
                (o = t.selectedDates.start.day || 0),
                (l = t.selectedDates.end.day || 0))
              : ((n = r = e.year.selectedYear),
                (i = c = e.getMonthIndex("selected")),
                i > -1 && (o = l = e.months[i].getDayIndex("selected"))),
            t.showSeasonName || t.colorToMatchSeason)
          ) {
            const t = e.getSeason(h, o || 0);
            (g = t.name),
              (f = t.description),
              (p = de(t.icon, t.color, t.color)),
              (u = `border-color: ${t.color};`);
          }
          const b = e.months[h].description,
            C = b && t.showDescriptions,
            S = f && t.showDescriptions;
          let w = `<div id="${t.id}" class="fsc-h" data-calendar="${e.id}">`;
          (w += `<div  class="fsc-i ${t.cssClasses}" style="${
            t.colorToMatchSeason ? u : ""
          }" >`),
            (w += `<input class="fsc-j" type="hidden" value="${encodeURIComponent(
              JSON.stringify(t)
            )}"/>`),
            (w += '<div class="fsc-k">'),
            (w += '<div class="fsc-l">'),
            t.allowChangeMonth
              ? (w += `<a class="fa fa-chevron-left" data-tooltip="${H.Localize(
                  "FSC.ChangePreviousMonth"
                )}"></a>`)
              : (w += "<span></span>"),
            (w += `<span class="fsc-m ${
              C ? "fsc-n" : ""
            }" data-visible="${h}/${s}">${K(
              { year: s, month: h, day: 0, hour: 0, minute: 0, seconds: 0 },
              a,
              e,
              { year: t.editYear }
            )}</span>`),
            t.allowChangeMonth
              ? (w += `<a class="fa fa-chevron-right" data-tooltip="${H.Localize(
                  "FSC.ChangeNextMonth"
                )}"></a>`)
              : (w += "<span></span>"),
            (w += "</div>"),
            t.showSeasonName &&
              (w += `<div class="fsc-o">${p}<span class="fsc-p ${
                S ? "fsc-n" : ""
              }">${g}</span></div>`),
            e.year.showWeekdayHeadings &&
              ((w += `<div class="fsc-q">${e.weekdays
                .map(
                  (e) =>
                    `<div class="fsc-r ${e.restday ? "fsc-s" : ""} ${
                      e.description && t.showDescriptions ? "fsc-n" : ""
                    }" data-tooltip="${e.name}">${e.abbreviation}</div>`
                )
                .join("")}</div>`),
              (y = e.weekdays.map((e) => e.description))),
            (w += "</div>"),
            (w += '<div class="fsc-t">');
          for (let a = 0; a < m.length; a++)
            if (m[a]) {
              w += `<div class="fsc-u ${
                e.year.showWeekdayHeadings ? "" : "fsc-v"
              }">`;
              for (let u = 0; u < m[a].length; u++) {
                if (
                  ((w += `<div class="fsc-w ${
                    e.weekdays[u].restday ? "fsc-s" : ""
                  }">`),
                  m[a][u])
                ) {
                  let p = "fsc-x";
                  const g = e.months[h].days.findIndex(
                    (e) =>
                      e.numericRepresentation === m[a][u].numericRepresentation
                  );
                  if (
                    void 0 !== i &&
                    void 0 !== o &&
                    void 0 !== c &&
                    void 0 !== l
                  ) {
                    switch (
                      se(
                        e,
                        {
                          year: t.showYear ? s : 0,
                          month: h,
                          day: g,
                          hour: 0,
                          minute: 0,
                          seconds: 0,
                        },
                        {
                          year: n,
                          month: i,
                          day: o,
                          hour: 0,
                          minute: 0,
                          seconds: 0,
                        },
                        {
                          year: r,
                          month: c,
                          day: l,
                          hour: 0,
                          minute: 0,
                          seconds: 0,
                        }
                      )
                    ) {
                      case d.Exact:
                        (p += " fsc-y"), (m[a][u].selected = !0);
                        break;
                      case d.Start:
                        p += " fsc-y fsc-z";
                        break;
                      case d.Middle:
                        p += " fsc-y fsc-_";
                        break;
                      case d.End:
                        p += " fsc-y fsc-aa";
                    }
                  }
                  t.showCurrentDate &&
                    s === e.year.numericRepresentation &&
                    m[a][u].current &&
                    (p += " fsc-ba"),
                    (w += `<div class="${p}" data-day="${g}">`),
                    t.showNoteCount &&
                      (w += `<div class="fsc-ca">${Ce.NoteIndicator(
                        e,
                        s,
                        h,
                        g
                      )}</div>`),
                    (w += m[a][u].name),
                    t.showMoonPhases &&
                      (w += `<div class="fsc-da">${Ce.MoonPhaseIcons(
                        e,
                        s,
                        h,
                        g,
                        0 !== u && u === m[a].length - 1,
                        a === m.length - 1
                      )}</div>`),
                    (w += "</div>");
                } else w += '<div class="fsc-ea"></div>';
                w += "</div>";
              }
              w += "</div>";
            }
          if (
            ((w += "</div>"),
            (w += "</div>"),
            t.showDescriptions || t.showDayDetails)
          ) {
            if (((w += '<div class="fsc-ga">'), t.showDescriptions)) {
              if (
                (b &&
                  (w += `<div class="fsc-ha fsc-ia" data-type="month"><div class="fsc-ja">${b}</div></div>`),
                y.length)
              )
                for (let e = 0; e < y.length; e++)
                  y[e] &&
                    (w += `<div class="fsc-ha fsc-ia" data-type="week${e}"><div class="fsc-ja">${y[e]}</div></div>`);
              f &&
                (w += `<div class="fsc-ha fsc-ia" data-type="season"><div class="fsc-ja">${f}</div></div>`);
            }
            if (t.showDayDetails) {
              const e = be(
                  game.user,
                  G.globalConfiguration.permissions.changeDateTime
                ),
                t = be(game.user, G.globalConfiguration.permissions.addNotes);
              (w +=
                '<div class="fsc-ha fsc-ia" data-type="day"><div class="fsc-ka" data-date=""><div class="fsc-la"></div>'),
                (w += `<div class="fsc-ma fsc-na"><span class="fa fa-sun"></span>${H.Localize(
                  "FSC.Configuration.Season.SunriseSunset"
                )}<span class="fa fa-caret-right"></span><div class="fsc-oa"><div class="fsc-pa"><strong>${H.Localize(
                  "FSC.Sunrise"
                )}</strong>: <span class="fsc-qa"></span></div><div class="fsc-pa"><strong>${H.Localize(
                  "FSC.Sunset"
                )}</strong>: <span class="fsc-ra"></span></div></div></div>`),
                (e || t) &&
                  ((w += '<div class="fsc-sa"></div>'),
                  e &&
                    (w += `<div class="fsc-ta" data-action="current"><span class="fa fa-calendar-check"></span>${H.Localize(
                      "FSC.SetCurrentDate"
                    )}</div>`),
                  t &&
                    (w += `<div class="fsc-ta" data-action="note"><span class="fa fa-sticky-note"></span>${H.Localize(
                      "FSC.Notes.AddNew"
                    )}</div>`)),
                (w += "</div></div>");
            }
            w += "</div>";
          }
          return (w += "</div>"), w;
        }
        static ActivateListeners(e, t = null, a = null, s = null) {
          const n = document.getElementById(e);
          if (n) {
            const i = n.querySelector(".fsc-k .fsc-l .fa-chevron-left");
            i &&
              i.addEventListener(
                "click",
                Ce.EventListener.bind(Ce, e, D.previous, {
                  onMonthChange: t,
                  onDayClick: a,
                  onYearChange: s,
                })
              );
            const o = n.querySelector(".fsc-k .fsc-l .fa-chevron-right");
            o &&
              o.addEventListener(
                "click",
                Ce.EventListener.bind(Ce, e, D.next, {
                  onMonthChange: t,
                  onDayClick: a,
                  onYearChange: s,
                })
              );
            const r = n.querySelector(
              ".fsc-k .fsc-l .fsc-m input[type=number]"
            );
            r &&
              (r.addEventListener("click", (e) => e.stopPropagation()),
              r.addEventListener(
                "change",
                Ce.EventListener.bind(Ce, e, D.year, {
                  onMonthChange: t,
                  onDayClick: a,
                  onYearChange: s,
                })
              )),
              n.querySelectorAll(".fsc-t .fsc-x").forEach((n) => {
                n.addEventListener(
                  "click",
                  Ce.EventListener.bind(Ce, e, D.day, {
                    onMonthChange: t,
                    onDayClick: a,
                    onYearChange: s,
                  })
                ),
                  n.addEventListener(
                    "contextmenu",
                    Ce.ShowDescription.bind(Ce, "day")
                  );
              }),
              n.addEventListener(
                "click",
                Ce.EventListener.bind(Ce, e, D.calendar, {
                  onMonthChange: t,
                  onDayClick: a,
                  onYearChange: s,
                })
              ),
              n.querySelectorAll(".fsc-ta").forEach((e) => {
                e.addEventListener("click", Ce.DayContextClick);
              }),
              n
                .querySelector(".fsc-m")
                ?.addEventListener(
                  "click",
                  Ce.ShowDescription.bind(Ce, "month")
                ),
              n
                .querySelector(".fsc-p")
                ?.addEventListener(
                  "click",
                  Ce.ShowDescription.bind(Ce, "season")
                ),
              n.querySelectorAll(".fsc-q .fsc-r").forEach((e, t) => {
                e.addEventListener(
                  "click",
                  Ce.ShowDescription.bind(Ce, `week${t}`)
                );
              });
          }
        }
        static EventListener(e, t, a, s) {
          s.stopPropagation(), s.preventDefault();
          const n = document.getElementById(e);
          if (n) {
            const e = n.getAttribute("data-calendar") || "",
              i = R.getCalendar(e);
            if (i) {
              let e = { id: "" };
              const o = n.querySelector(".fsc-j");
              o && (e = JSON.parse(decodeURIComponent(o.value)));
              const r = n.querySelector(".fsc-m");
              if (r) {
                const a = r.getAttribute("data-visible");
                if (a) {
                  const n = a.split("/");
                  if (2 === n.length) {
                    let a = parseInt(n[0]),
                      o = parseInt(n[1]);
                    if (!isNaN(o) && !isNaN(a)) {
                      if (t === D.previous || t === D.next) {
                        let e = !0,
                          s = 0;
                        for (; e && s < i.months.length; ) {
                          t === D.previous
                            ? 0 === a
                              ? ((a = i.months.length - 1), o--)
                              : a--
                            : a === i.months.length - 1
                            ? ((a = 0), o++)
                            : a++;
                          const n = i.year.leapYearRule.isLeapYear(o);
                          ((n && i.months[a].numberOfLeapYearDays > 0) ||
                            (!n && i.months[a].numberOfDays > 0)) &&
                            (e = !1),
                            s++;
                        }
                      } else if (t === D.day || t === D.dayContext) {
                        let t = s.target;
                        const n = t.closest(".fsc-x");
                        n && (t = n);
                        const i = t.getAttribute("data-day");
                        if (i) {
                          const t = parseInt(i);
                          if (!isNaN(t)) {
                            const s = { year: 0, month: 0, day: 0 },
                              n = { year: 0, month: 0, day: 0 };
                            e.allowSelectDateRange
                              ? e.selectedDates &&
                                null === e.selectedDates.end.year
                                ? ((s.year = e.selectedDates.start.year),
                                  (s.month = e.selectedDates.start.month),
                                  (s.day = e.selectedDates.start.day || 0),
                                  (n.year = o),
                                  (n.month = a),
                                  (n.day = t),
                                  ((s.day > t &&
                                    s.month === a &&
                                    s.year === o) ||
                                    (s.month > a && s.year === o) ||
                                    s.year > o) &&
                                    ((n.year = e.selectedDates.start.year),
                                    (n.month = e.selectedDates.start.month),
                                    (n.day = e.selectedDates.start.day || 0),
                                    (s.year = o),
                                    (s.month = a),
                                    (s.day = t)))
                                : ((s.year = o),
                                  (s.month = a),
                                  (s.day = t),
                                  (n.year = NaN),
                                  (n.month = NaN),
                                  (n.day = NaN))
                              : ((s.year = o),
                                (s.month = a),
                                (s.day = t),
                                (n.year = o),
                                (n.month = a),
                                (n.day = t)),
                              (e.selectedDates = { start: s, end: n });
                          }
                        }
                      } else if (t === D.year) {
                        const e = r.querySelector("input[type=number]");
                        if (e) {
                          const t = parseInt(e.value);
                          isNaN(t) || (o = t);
                        }
                      }
                      e.date = { year: o, month: a, day: 0 };
                    }
                  }
                }
              }
              const c = Ce.Render(i, e),
                l = document.createElement("div");
              (l.innerHTML = c),
                l.firstChild &&
                  (n.replaceWith(l.firstChild),
                  Ce.ActivateListeners(e.id, a.onMonthChange, a.onDayClick)),
                null === a.onMonthChange || (t !== D.previous && t !== D.next)
                  ? null !== a.onDayClick && t === D.day
                    ? a.onDayClick(e)
                    : null !== a.onYearChange &&
                      t === D.year &&
                      a.onYearChange(e)
                  : a.onMonthChange(t, e);
            }
          }
          return !1;
        }
        static DayContextClick(e) {
          const t = e.target;
          if (t) {
            const e = t.getAttribute("data-action"),
              a = t.closest(".fsc-ka")?.getAttribute("data-date");
            if (e && a) {
              const s = a.split("/");
              if (3 === s.length) {
                const a = parseInt(s[0]),
                  n = parseInt(s[1]),
                  i = parseInt(s[2]);
                if (!isNaN(a) && !isNaN(n) && !isNaN(i))
                  if ("current" === e) Y.setCurrentDate(a, n, i);
                  else if ("note" === e) {
                    const e = t
                      .closest(".fsc-h")
                      ?.getAttribute("data-calendar");
                    if (e) {
                      const t = R.getCalendar(e);
                      t &&
                        z
                          .createNote(
                            "New Note",
                            "",
                            {
                              calendarId: e,
                              startDate: {
                                year: a,
                                month: n,
                                day: i,
                                hour: 0,
                                minute: 0,
                                seconds: 0,
                              },
                              endDate: {
                                year: a,
                                month: n,
                                day: i,
                                hour: 0,
                                minute: 0,
                                seconds: 0,
                              },
                              allDay: !0,
                              repeats: l.Never,
                              order: 0,
                              categories: [],
                              remindUsers: [],
                            },
                            t
                          )
                          .catch((e) => console.error(e));
                    }
                  }
              }
            }
          }
        }
        static ShowDescription(e, t) {
          t.preventDefault(), t.stopPropagation();
          const a = t.target;
          if (a) {
            const t = a.closest(".fsc-h"),
              s = t?.querySelector(".fsc-ga");
            if (t && s) {
              s.querySelectorAll("div[data-type]").forEach((e) =>
                e.classList.add("fsc-ia")
              );
              const n = s.querySelector(`div[data-type="${e}"]`);
              if (
                n &&
                (n.classList.remove("fsc-ia"),
                (s.style.top = `${a.offsetTop + a.offsetHeight}px`),
                (s.style.left = `${a.offsetLeft}px`),
                "day" === e)
              ) {
                const e = t.getAttribute("data-calendar"),
                  s = a.closest(".fsc-x")?.getAttribute("data-day"),
                  n = a
                    .closest(".fsc-i")
                    ?.querySelector(".fsc-k .fsc-m")
                    ?.getAttribute("data-visible")
                    ?.split("/"),
                  i = t.querySelector(".fsc-ka");
                if (e && s && n && n.length >= 2 && i) {
                  const t = R.getCalendar(e),
                    a = parseInt(s),
                    o = parseInt(n[0]),
                    r = parseInt(n[1]);
                  if (t && !isNaN(a) && !isNaN(o) && !isNaN(r)) {
                    i.setAttribute("data-date", `${r}/${o}/${a}`);
                    const e = i.querySelector(".fsc-la");
                    e &&
                      (e.textContent = K(
                        {
                          year: r,
                          month: o,
                          day: a,
                          hour: 0,
                          minute: 0,
                          seconds: 0,
                        },
                        t.generalSettings.dateFormat.date,
                        t
                      ));
                    const s = i.querySelector(".fsc-na .fsc-qa"),
                      n = i.querySelector(".fsc-na .fsc-ra");
                    s &&
                      n &&
                      ((s.textContent = K(
                        {
                          year: 0,
                          month: 0,
                          day: 0,
                          ...oe(b.Sunrise, t, { year: r, month: o, day: a }),
                        },
                        t.generalSettings.dateFormat.time,
                        t
                      )),
                      (n.textContent = K(
                        {
                          year: 0,
                          month: 0,
                          day: 0,
                          ...oe(b.Sunset, t, { year: r, month: o, day: a }),
                        },
                        t.generalSettings.dateFormat.time,
                        t
                      )));
                  }
                }
              }
            }
          }
          return !1;
        }
        static HideDescription() {
          const e = document.querySelector(".simple-calendar .fsc-h .fsc-ga");
          e &&
            e
              .querySelectorAll("div[data-type]")
              .forEach((e) => e.classList.add("fsc-ia"));
        }
        static NoteIndicator(e, t, a, s) {
          let n = "";
          const i = z.getNotesForDay(e.id, t, a, s);
          if (i.length) {
            const e = i.filter((e) => !e.userReminderRegistered),
              t = i.filter((e) => e.userReminderRegistered);
            if (e.length) {
              const t = e.length < 100 ? e.length : 99;
              n = `<span class="fsc-ua" data-tooltip="${ye.GenerateNoteIconTitle(
                t,
                e
              )}">${t}</span>`;
            }
            if (t.length) {
              const e = t.length < 100 ? t.length : 99;
              n += `<span class="fsc-ua fsc-va" data-tooltip="${ye.GenerateNoteIconTitle(
                e,
                t
              )}">${e}</span>`;
            }
          }
          return n;
        }
        static MoonPhaseIcons(e, t, a, s, n = !1, i = !1) {
          let o;
          const r = [];
          for (let n = 0; n < e.moons.length; n++) {
            const i = e.moons[n].getDateMoonPhase(e, t, a, s),
              o = e.months[a].days[s];
            if (i && (i.singleDay || o.selected || o.current)) {
              const t = de(i.icon, "#000000", e.moons[n].color);
              r.push(
                `<span class="fsc-wa ${i.icon}" data-tooltip="${e.moons[n].name} - ${i.name}">${t}</span>`
              );
            }
          }
          return (
            (o =
              r.length < 3
                ? r.join("")
                : `<div class="fsc-xa">${
                    r[0]
                  }<span class="fsc-wa fa fa-caret-down"></span><div class="fsc-ya ${
                    n ? "fsc-za" : "fsc-_a"
                  } ${i ? "fsc-ab" : "fsc-bb"}">${r.join("")}</div></div>`),
            o
          );
        }
      }
      class Se {
        static defaultOptions = {
          id: "",
          allowTimeRange: !0,
          disableSelfUpdate: !1,
          timeDelimiter: "-",
          useCalendarClones: !1,
        };
        static Render(e, t = { id: "" }) {
          let a = `<div id="${
            (t = E({}, this.defaultOptions, t)).id
          }" class="fsc-cb" data-calendar="${R.getAllCalendars(
            t.useCalendarClones
          ).findIndex((t) => t.id === e.id)}">`;
          return (
            (a += `<input class="fsc-j" type="hidden" value="${encodeURIComponent(
              JSON.stringify(t)
            )}"/><span class="far fa-clock"></span>`),
            t.allowTimeRange
              ? ((a += this.RenderTimeInputGroup(
                  e,
                  "fsc-db",
                  t.selectedTime?.start
                )),
                (a += `<span class="fsc-eb">${t.timeDelimiter}</span>`),
                (a += this.RenderTimeInputGroup(
                  e,
                  "fsc-fb",
                  t.selectedTime?.end
                )))
              : (a += this.RenderTimeInputGroup(e, "", t.selectedTime?.start)),
            (a += "</div>"),
            a
          );
        }
        static RenderTimeInputGroup(e, t = "", a = { hour: 0, minute: 0 }) {
          let s = `<div class="fsc-gb ${t}">`;
          s += `<input class="fsc-hb" data-list="fsc-ib" type="number" value="${B(
            a.hour
          )}" /><ul class="fsc-jb fsc-ia fsc-ib">`;
          for (let t = 0; t < e.time.hoursInDay; t++) s += `<li>${B(t)}</li>`;
          (s += "</ul>"),
            (s += `<span class="fsc-eb">:</span><input class="fsc-kb" data-list="fsc-lb" type="number" value="${B(
              a.minute
            )}" /><ul class="fsc-jb fsc-ia fsc-lb">`);
          for (let t = 0; t < e.time.minutesInHour; t += 5)
            s += `<li>${B(t)}</li>`;
          return (s += "</ul>"), (s += "</div>"), s;
        }
        static ActivateListeners(e, t = null) {
          const a = document.getElementById(e);
          a &&
            (a.parentElement &&
              a.parentElement.addEventListener(
                "click",
                Se.HideTimeDropdown.bind(Se, e)
              ),
            a.querySelectorAll(".fsc-gb .fsc-hb").forEach((a) => {
              a.addEventListener(
                "change",
                Se.ChangeEventListener.bind(Se, e, k.change, t)
              ),
                a.addEventListener(
                  "click",
                  Se.InputClickEventListener.bind(Se, e)
                ),
                a.addEventListener(
                  "wheel",
                  Se.ChangeEventListener.bind(Se, e, k.wheel, t)
                );
            }),
            a.querySelectorAll(".fsc-gb .fsc-kb").forEach((a) => {
              a.addEventListener(
                "change",
                Se.ChangeEventListener.bind(Se, e, k.change, t)
              ),
                a.addEventListener(
                  "click",
                  Se.InputClickEventListener.bind(Se, e)
                ),
                a.addEventListener(
                  "wheel",
                  Se.ChangeEventListener.bind(Se, e, k.wheel, t)
                );
            }),
            a.querySelectorAll(".fsc-gb .fsc-jb").forEach((a) => {
              a.addEventListener(
                "click",
                Se.ChangeEventListener.bind(Se, e, k.dropdownClick, t)
              );
            }));
        }
        static HideTimeDropdown(e) {
          const t = document.getElementById(e);
          t &&
            t.querySelectorAll(".fsc-jb").forEach((e) => {
              e.classList.add("fsc-ia");
            });
        }
        static ChangeEventListener(e, t, a, s) {
          s.stopPropagation(), s.preventDefault();
          const n = document.getElementById(e);
          if (n) {
            let e = { id: "" };
            const i = n.querySelector(".fsc-j");
            i && (e = JSON.parse(decodeURIComponent(i.value)));
            const o = parseInt(n.getAttribute("data-calendar") || ""),
              r = R.getAllCalendars(e.useCalendarClones);
            if (!isNaN(o) && o >= 0 && o < r.length) {
              const i = r[o];
              e.selectedTime ||
                (e.selectedTime = {
                  start: { hour: 0, minute: 0, seconds: 0 },
                  end: { hour: 0, minute: 0, seconds: 0 },
                });
              const c = s.target;
              let l = 0,
                d = !0,
                h = !0;
              if (
                (t === k.change || t === k.wheel
                  ? ((l = parseInt(c.value)),
                    isNaN(l)
                      ? (l = 0)
                      : ((d = c.classList.contains("fsc-hb")),
                        c.parentElement &&
                          (h = c.parentElement.classList.contains("fsc-db"))),
                    t === k.wheel && (l += s.deltaY < 0 ? 1 : -1))
                  : t === k.dropdownClick &&
                    ((l = parseInt(c.innerText)),
                    !isNaN(l) &&
                      c.parentElement &&
                      ((d = c.parentElement.classList.contains("fsc-ib")),
                      c.parentElement.parentElement &&
                        (h =
                          c.parentElement.parentElement.classList.contains(
                            "fsc-db"
                          )))),
                e.allowTimeRange
                  ? h
                    ? d
                      ? (e.selectedTime.start.hour = l)
                      : (e.selectedTime.start.minute = l)
                    : d
                    ? (e.selectedTime.end.hour = l)
                    : (e.selectedTime.end.minute = l)
                  : d
                  ? ((e.selectedTime.start.hour = l),
                    (e.selectedTime.end.hour = l))
                  : ((e.selectedTime.start.minute = l),
                    (e.selectedTime.end.minute = l)),
                e.selectedTime.start.hour < 0 &&
                  (e.selectedTime.start.hour = 0),
                e.selectedTime.start.minute < 0 &&
                  (e.selectedTime.start.minute = 0),
                e.selectedTime.end.hour < 0 && (e.selectedTime.end.hour = 0),
                e.selectedTime.end.minute < 0 &&
                  (e.selectedTime.end.minute = 0),
                e.selectedTime.start.hour >= i.time.hoursInDay &&
                  (e.selectedTime.start.hour = i.time.hoursInDay - 1),
                e.selectedTime.start.minute >= i.time.minutesInHour &&
                  (e.selectedTime.start.minute = i.time.minutesInHour - 1),
                e.selectedTime.end.hour >= i.time.hoursInDay &&
                  (e.selectedTime.end.hour = i.time.hoursInDay - 1),
                e.selectedTime.end.minute >= i.time.minutesInHour &&
                  (e.selectedTime.end.minute = i.time.minutesInHour - 1),
                !e.disableSelfUpdate)
              ) {
                const t = Se.Render(i, e),
                  s = document.createElement("div");
                (s.innerHTML = t),
                  s.firstChild &&
                    (n.replaceWith(s.firstChild),
                    Se.ActivateListeners(e.id, a));
              }
              a && a(e);
            }
          }
        }
        static InputClickEventListener(e, t) {
          t.stopPropagation(), Se.HideTimeDropdown(e);
          const a = t.target;
          if (a && a.parentElement) {
            const e = a.getAttribute("data-list");
            e &&
              a.parentElement
                .querySelector(`.${e}`)
                ?.classList.remove("fsc-ia");
          }
        }
      }
      class we {
        static defaultOptions = { id: "", cssClasses: "", theme: "auto" };
        static Render(e, t = { id: "" }) {
          t = E({}, this.defaultOptions, t);
          const a = e.timeKeeper.getStatus();
          t.cssClasses += ` ${a}`;
          let s = `<div id="${t.id}" class="fsc-mb ${t.cssClasses} ${
            a === S.Started ? "fsc-b" : ""
          }" data-calendar="${e.id}">`;
          if (
            ((s += `<input class="fsc-j" type="hidden" value="${encodeURIComponent(
              JSON.stringify(t)
            )}"/>`),
            (s += `<div class="fsc-nb">${de(f.Clock)}</div>`),
            (s += this.RenderTime(e)),
            (s += "</div>"),
            "none" !== t.theme)
          ) {
            s = `<div class="simple-calendar ${
              "auto" === t.theme ? G.clientSettings.theme : t.theme
            }">${s}</div>`;
          }
          return s;
        }
        static RenderTime(e) {
          return `<div class="fsc-ob">${e.time.toString()}</div>`;
        }
        static ActivateListeners(e) {
          const t = document.getElementById(e);
          if (t) {
            const a = t.getAttribute("data-calendar") || "",
              s = R.getCalendar(a);
            s &&
              s.timeKeeper.registerUpdateListener(
                e,
                we.UpdateListener.bind(we, e)
              );
          }
        }
        static UpdateListener(e, t) {
          const a = document.getElementById(e);
          if (a) {
            const e = a.getAttribute("data-calendar") || "",
              s = R.getCalendar(e);
            if (s) {
              const e = we.RenderTime(s),
                n = document.createElement("div");
              if (((n.innerHTML = e), n.firstChild)) {
                const e = a.querySelector(".fsc-ob");
                e &&
                  (e.replaceWith(n.firstChild),
                  a.classList.contains(t) ||
                    (a.classList.remove(
                      S.Started,
                      S.Stopped,
                      S.Paused,
                      "fsc-b"
                    ),
                    a.classList.add(t),
                    t === S.Started && a.classList.add("fsc-b")));
              }
            }
          }
        }
      }
      class ve {
        static defaultOptions = { id: "", options: [] };
        static clickedElement = "";
        static Render(e = { id: "", options: [] }, t = !1) {
          const a = (e = E({}, this.defaultOptions, e)).options
              .filter((e) => e.selected)
              .map((e) => e.value)
              .join("|"),
            s =
              e.options
                .filter((e) => e.selected)
                .map((e) => e.text)
                .join(", ") || "None Selected";
          let n = `<div class="fsc-pb"><input class="fsc-qb" id="${e.id}" value="${a}" type="hidden" />`;
          (n += `<input class="fsc-j" type="hidden" value="${encodeURIComponent(
            JSON.stringify(e)
          )}"/>`),
            (n += `<button><div class="fsc-rb">${s}</div><i class="fa fa-chevron-down"></i></button><ul class="fsc-sb ${
              t ? "fsc-tb" : ""
            }">`);
          for (let t = 0; t < e.options.length; t++)
            n += `<li class="${e.options[t].disabled ? "fsc-ub" : ""} ${
              e.options[t].selected ? "fsc-y" : ""
            }" data-value="${e.options[t].value}"><span class="fa-solid ${
              e.options[t].selected ? "fa-square-check" : "fa-square"
            }"></span>${e.options[t].text}</li>`;
          return (n += "</ul></div>"), n;
        }
        static ActivateListeners(e, t) {
          const a = document.getElementById(e)?.parentElement;
          a &&
            (a
              .querySelector("button")
              ?.addEventListener(
                "click",
                ve.EventListener.bind(ve, e, "button", t)
              ),
            a.querySelectorAll("li").forEach((a) => {
              a.addEventListener(
                "click",
                ve.EventListener.bind(ve, e, "option", t)
              );
            }));
        }
        static EventListener(e, t, a, s) {
          const n = document.getElementById(e)?.parentElement;
          if (n)
            if ("button" === t) {
              ve.clickedElement = e;
              const t = n.querySelector(".fsc-sb");
              t &&
                (t.classList.contains("fsc-tb")
                  ? t.classList.remove("fsc-tb")
                  : t.classList.add("fsc-tb"));
            } else if ("option" === t) {
              s.stopPropagation();
              const t = s.target?.closest("li");
              let i = { id: "", options: [] };
              const o = n.querySelector(".fsc-j")?.value;
              if (t && !t.classList.contains("fsc-ub") && o) {
                i = JSON.parse(decodeURIComponent(o));
                const s = t.getAttribute("data-value"),
                  r = !t.classList.contains("fsc-y"),
                  c = i.options.findIndex((e) => e.value === s);
                c > -1 &&
                  ((i.options[c].selected = r),
                  i.options[c].makeOthersMatch &&
                    i.options.forEach((e, t) => {
                      e.static ||
                        t === c ||
                        ((e.selected = r), (e.disabled = r));
                    }));
                const l = ve.Render(i, !0),
                  d = document.createElement("div");
                (d.innerHTML = l),
                  d.firstChild &&
                    (n.replaceWith(d.firstChild), ve.ActivateListeners(e, a)),
                  a && a(e, s, r);
              }
            }
        }
        static BodyEventListener() {
          document.querySelectorAll(".fsc-pb").forEach((e) => {
            const t = e.querySelector(".fsc-qb")?.id;
            if (t)
              if (t !== ve.clickedElement) {
                const t = e.querySelector(".fsc-sb");
                t && t.classList.remove("fsc-tb");
              } else ve.clickedElement = "";
          });
        }
      }
      class De {
        static defaultOptions = {
          showDateControls: !0,
          showTimeControls: !0,
          showPresetTimeOfDay: !0,
          displayType: w.Full,
          fullDisplay: { unit: "", unitText: "", dateTimeUnitOpen: !1 },
          reverseTime: !1,
          largerSteps: !1,
        };
        static Render(e = {}) {
          let t = '<div class="fsc-vb fsc-wb">';
          if ((e = E({}, this.defaultOptions, e)).displayType === w.Full)
            (t += `<div class="fsc-xb">\n                        <button class="fsc-yb fsc-zb" data-tooltip="${H.Localize(
              "FSC.MoveBackwardFive"
            )}" data-type="${
              e.fullDisplay?.unit
            }" data-amount="-5"><span class="fa fa-angle-double-left"></span></button>\n                        <button class="fsc-yb fsc-zb" data-tooltip="${H.Localize(
              "FSC.MoveBackwardOne"
            )}" data-type="${
              e.fullDisplay?.unit
            }" data-amount="-1"><span class="fa fa-angle-left"></span></button>\n                        <button class="fsc-yb fsc-zb fsc-_b" data-unit="time">${H.Localize(
              e.fullDisplay?.unitText || ""
            )}&nbsp;</button>\n                        <button class="fsc-yb fsc-zb" data-tooltip="${H.Localize(
              "FSC.MoveForwardOne"
            )}" data-type="${
              e.fullDisplay?.unit
            }" data-amount="1"><span class="fa fa-angle-right"></span></button>\n                        <button class="fsc-yb fsc-zb" data-tooltip="${H.Localize(
              "FSC.MoveForwardFive"
            )}" data-type="${
              e.fullDisplay?.unit
            }" data-amount="5"><span class="fa fa-angle-double-right"></span></button>\n                        <ul class="fsc-ac fsc-bc fsc-zb ${
              e.fullDisplay?.dateTimeUnitOpen ? "fsc-c" : "fsc-d"
            }">`),
              e.showTimeControls &&
                (t += `<li class="${
                  "seconds" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="seconds">${H.Localize(
                  "FSC.Second"
                )}</li>\n                        <li class="${
                  "round" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="round">${H.Localize(
                  "FSC.Round"
                )}</li>\n                        <li class="${
                  "minute" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="minute">${H.Localize(
                  "FSC.Minute"
                )}</li>\n                        <li class="${
                  "hour" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="hour">${H.Localize("FSC.Hour")}</li>`),
              e.showDateControls &&
                (t += `<li class="${
                  "day" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="day">${H.Localize(
                  "FSC.Day"
                )}</li>\n                        <li class="${
                  "month" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="month">${H.Localize(
                  "FSC.Month"
                )}</li>\n                        <li class="${
                  "year" === e.fullDisplay?.unit ? "fsc-y" : ""
                }" data-unit="year">${H.Localize("FSC.Year")}</li>`),
              (t += "</ul></div>");
          else if (e.displayType === w.QuickIncrement) {
            let a = [];
            e.showTimeControls
              ? (a = [
                  {
                    type: "round",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Round"),
                    text: H.Localize("FSC.RoundShorthand"),
                  },
                  {
                    type: "minute",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Minute"),
                    text: H.Localize("FSC.MinuteShorthand"),
                  },
                  {
                    type: "minute",
                    amount: (e.largerSteps ? 20 : 5) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Minute"),
                    text: H.Localize("FSC.MinuteShorthand"),
                  },
                  {
                    type: "minute",
                    amount:
                      (e.largerSteps ? 45 : 15) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Minute"),
                    text: H.Localize("FSC.MinuteShorthand"),
                  },
                  {
                    type: "hour",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Hour"),
                    text: H.Localize("FSC.HourShorthand"),
                  },
                ])
              : e.showDateControls &&
                (a = [
                  {
                    type: "day",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Day"),
                    text: H.Localize("FSC.Day"),
                  },
                  {
                    type: "month",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Month"),
                    text: H.Localize("FSC.Month"),
                  },
                  {
                    type: "year",
                    amount: (e.largerSteps ? 5 : 1) * (e.reverseTime ? -1 : 1),
                    tooltip: H.Localize("FSC.Year"),
                    text: H.Localize("FSC.Year"),
                  },
                ]),
              (t += '<div class="fsc-xb fsc-cc">');
            for (let e = 0; e < a.length; e++)
              t += `<button class="fsc-yb fsc-zb" data-tooltip="${a[e].amount} ${a[e].tooltip}" data-type="${a[e].type}" data-amount="${a[e].amount}">${a[e].amount}&nbsp;${a[e].text}</button>`;
            t += "</div>";
          }
          return (
            e.showTimeControls &&
              e.showPresetTimeOfDay &&
              (t += `<div class="fsc-xb">\n                            <button class="fsc-yb fsc-dc" data-type="sunrise" data-tooltip="${H.Localize(
                "FSC.Dawn"
              )}">${de(
                f.Sunrise
              )}</button>\n                            <button class="fsc-yb fsc-dc" data-type="midday" data-tooltip="${H.Localize(
                "FSC.Midday"
              )}">${de(
                f.Midday
              )}</button>\n                            <button class="fsc-yb fsc-dc" data-type="sunset" data-tooltip="${H.Localize(
                "FSC.Dusk"
              )}">${de(
                f.Sunset
              )}</button>\n                            <button class="fsc-yb fsc-dc" data-type="midnight" data-tooltip="${H.Localize(
                "FSC.Midnight"
              )}">${de(f.Midnight)}</button>\n                        </div>`),
            (t += "</div>"),
            t
          );
        }
      }
      class ke {
        static CalendarFull = Ce;
        static Clock = we;
        static TimeSelector = Se;
        static MultiSelect = ve;
        static DateTimeControls = De;
      }
      class Te extends A {
        constructor() {
          super();
        }
        async process(e, t) {
          return (
            e.type === u.clock &&
            (t.timeKeeper.setStatus(e.data),
            (Y.clockClass = e.data),
            t.generalSettings.gameWorldTimeIntegration === g.None &&
              ke.Clock.UpdateListener(`sc_${t.id}_clock`, e.data),
            !0)
          );
        }
      }
      class Me extends A {
        constructor() {
          super();
        }
        async initialize() {
          return O.emit({ type: u.checkClockRunning, data: {} });
        }
        async process(e, t) {
          return (
            !(e.type !== u.checkClockRunning || !H.IsGm() || !G.primary) &&
            O.emit({ type: u.clock, data: t.timeKeeper.getStatus() })
          );
        }
      }
      class je extends A {
        constructor() {
          super();
        }
        async process(e, t) {
          if (e.type === u.dateTimeChange && H.IsGm() && G.primary) {
            const a = e.data;
            return (
              a.type === p.setDate
                ? Y.setCurrentDate(
                    a.interval.year || 0,
                    a.interval.month || 0,
                    a.interval.day || 0
                  )
                : a.type === p.changeDateTime
                ? t.changeDateTime(a.interval, { updateMonth: !1 })
                : a.type === p.advanceTimeToPreset &&
                  a.presetTimeOfDay &&
                  (await re(a.presetTimeOfDay, t)),
              !0
            );
          }
          return !1;
        }
      }
      class Ie {
        static emit(e, t, a = void 0) {
          let s = {};
          if (e === C.DateTimeChange) {
            (s.date = ne(t.toSeconds(), t)), (s.diff = a), (s.moons = []);
            for (let e = 0; e < t.moons.length; e++) {
              const a = t.moons[e].getMoonPhase(t);
              s.moons.push({
                name: t.moons[e].name,
                color: t.moons[e].color,
                cycleLength: t.moons[e].cycleLength,
                cycleDayAdjust: t.moons[e].cycleDayAdjust,
                currentPhase: a,
              });
            }
          } else if (e === C.ClockStartStop) {
            const e = t.timeKeeper.getStatus();
            s = {
              started: e === S.Started,
              stopped: e === S.Stopped,
              paused: e === S.Paused,
            };
          } else e === C.PrimaryGM && (s.isPrimaryGM = G.primary);
          Hooks.callAll(e, s);
        }
      }
      class Ne extends A {
        constructor() {
          super();
        }
        async process(e, t) {
          if (e.type === u.emitHook) {
            const a = e.data.hook;
            return a && Ie.emit(a, t, e.data.param), !0;
          }
          return !1;
        }
      }
      class Le extends A {
        constructor() {
          super();
        }
        async process(e) {
          if (e.type === u.noteUpdate) {
            const a = e.data,
              s = game.journal?.get(a.journalId || "");
            if (s && a.userId) {
              const e = s.getFlag(t, "noteData");
              if (e) {
                const n = e.remindUsers.indexOf(a.userId);
                -1 === n
                  ? e.remindUsers.push(a.userId)
                  : e.remindUsers.splice(n, 1);
                const i = {};
                (i[t] = { noteData: e }),
                  await s.update({ flags: i }),
                  await O.emit({
                    type: u.mainAppUpdate,
                    data: { userId: a.userId },
                  });
              }
            } else
              a.calendarId &&
                a.newOrder &&
                a.date &&
                (await z.orderNotesOnDay(a.calendarId, a.newOrder, a.date),
                await O.emit({ type: u.mainAppUpdate, data: {} }),
                Y.updateApp());
            return !0;
          }
          return !1;
        }
      }
      class Oe extends A {
        checkDuration = 5e3;
        otherPrimaryFound = !1;
        constructor() {
          super();
        }
        async primaryCheckTimeoutCall() {
          const e = R.getActiveCalendar();
          G.primary = !0;
          const t = { type: u.primary, data: { amPrimary: G.primary } };
          await O.emit(t);
          const a = { type: u.clock, data: S.Stopped };
          await O.emit(a), await Y.timeKeepingCheck(), Ie.emit(C.PrimaryGM, e);
        }
        async initialize() {
          if (H.IsGm()) {
            const e = game.users;
            if ((e ? e.filter((e) => e.isGM).length : 0) > 1) {
              const e = { type: u.primary, data: { primaryCheck: !0 } };
              return O.emit(e).then(
                () =>
                  new Promise((e) => {
                    window.setTimeout(
                      ((e) => {
                        this.otherPrimaryFound ||
                          this.primaryCheckTimeoutCall(),
                          (Y.uiElementStates.primaryCheckRunning = !1),
                          e(!0);
                      }).bind(this, e),
                      this.checkDuration
                    );
                  })
              );
            }
            return await this.primaryCheckTimeoutCall(), !0;
          }
          return (Y.uiElementStates.primaryCheckRunning = !1), !0;
        }
        async process(e) {
          return (
            e.type === u.primary &&
            (H.IsGm() &&
              (e.data.primaryCheck
                ? await O.emit({
                    type: u.primary,
                    data: { amPrimary: G.primary },
                  })
                : void 0 !== e.data.amPrimary &&
                  e.data.amPrimary &&
                  ((this.otherPrimaryFound = !0), (G.primary = !1))),
            !0)
          );
        }
      }
      class Pe extends A {
        constructor() {
          super();
        }
        async process(e) {
          if (e.type === u.mainAppUpdate) {
            const t = e.data;
            return (
              t.userId
                ? H.UserID() === t.userId && Y.updateApp()
                : Y.updateApp(),
              !0
            );
          }
          return !1;
        }
      }
      class Ae extends A {
        constructor() {
          super();
        }
        async process(e) {
          return (
            !(e.type !== u.setActiveCalendar || !H.IsGm() || !G.primary) &&
            (R.setActiveCalendar(e.data.calendarId), !0)
          );
        }
      }
      class xe {
        static get isD35E() {
          return "D35E" === Z.systemID;
        }
      }
      class Fe {
        static addGameTimeToMessage(e) {
          console.log("ChatTimestamp.addGameTimeToMessage");
          const a = R.getActiveCalendar(),
            s = { id: a.id, timestamp: a.toSeconds() };
          if (xe.isD35E) e._source.flags[t] = { "sc-timestamps": s };
          else {
            const a = e.flags;
            Object.prototype.hasOwnProperty.call(a, t) || (a[t] = {}),
              (a[t]["sc-timestamps"] = s),
              e.updateSource({ flags: a });
          }
        }
        static getFormattedChatTimestamp(e) {
          const a = e.getFlag(t, "sc-timestamps");
          let s = "";
          if (a) {
            const e = R.getCalendar(a.id);
            if (e) {
              let t = a.timestamp;
              J.isPF2E &&
                e.generalSettings.pf2eSync &&
                (t += J.getWorldCreateSeconds(e));
              s = K(
                e.secondsToDate(t),
                `${e.generalSettings.dateFormat.chatTime}`,
                e
              );
            }
          }
          return s;
        }
        static renderTimestamp(e, t) {
          if (G.globalConfiguration.inGameChatTimestamp) {
            const a = this.getFormattedChatTimestamp(e);
            if (a) {
              const e = t[0].querySelector(
                ".message-header .message-metadata .message-timestamp"
              );
              if (e) {
                e.style.display = "none";
                const t = document.createElement("time");
                t.classList.add("sc-timestamp"), (t.innerText = a), e.after(t);
              }
            }
          }
          return Promise.resolve();
        }
        static updateChatMessageTimestamps() {
          const e = document.getElementById("chat");
          e &&
            e.querySelectorAll("#chat-log .message").forEach((e) => {
              const t = game.messages?.get(e.dataset.messageId || "");
              if (t) {
                const a = this.getFormattedChatTimestamp(t),
                  s = e.querySelector(
                    ".message-header .message-metadata .message-timestamp"
                  ),
                  n = e.querySelector(".sc-timestamp");
                if (a && s)
                  if (G.globalConfiguration.inGameChatTimestamp)
                    if (((s.style.display = "none"), n)) n.innerText = a;
                    else {
                      const e = document.createElement("time");
                      e.classList.add("sc-timestamp"),
                        (e.innerText = a),
                        s.after(e);
                    }
                  else (s.style.display = ""), n?.remove();
                else a && n && (n.innerText = a);
              }
            });
        }
      }
      class Ee extends A {
        constructor() {
          super();
        }
        async process(e) {
          return (
            e.type === u.renderChatLog &&
            (e.data && Fe.updateChatMessageTimestamps(), !0)
          );
        }
      }
      class Re {
        sockets = [];
        constructor() {
          this.sockets.push(new Pe()),
            this.sockets.push(new Oe()),
            this.sockets.push(new Me()),
            this.sockets.push(new Te()),
            this.sockets.push(new je()),
            this.sockets.push(new Ne()),
            this.sockets.push(new Le()),
            this.sockets.push(new Ae()),
            this.sockets.push(new Ee());
        }
        initialize() {
          O.on(this.process.bind(this)),
            Promise.all(this.sockets.map((e) => e.initialize())).catch(P.error);
        }
        async process(e) {
          const t = R.getActiveCalendar();
          for (
            let a = 0;
            a < this.sockets.length && !(await this.sockets[a].process(e, t));
            a++
          );
        }
      }
      class Ye {
        id;
        numericRepresentation;
        name;
        abbreviation;
        description;
        showAdvanced = !1;
        constructor(e = "", t = NaN) {
          (this.id = U()),
            (this.name = e),
            (this.numericRepresentation = t),
            (this.description = ""),
            (this.abbreviation = "");
        }
        clone() {
          const e = new Ye(this.name, this.numericRepresentation);
          return (
            (e.id = this.id),
            (e.description = this.description),
            (e.abbreviation = this.abbreviation),
            (e.showAdvanced = this.showAdvanced),
            e
          );
        }
        toConfig() {
          return {
            id: this.id,
            name: this.name,
            numericRepresentation: this.numericRepresentation,
            description: this.description,
            abbreviation: this.abbreviation,
          };
        }
        toTemplate() {
          return {
            id: this.id,
            name: this.name,
            numericRepresentation: this.numericRepresentation,
            description: this.description,
            abbreviation: this.abbreviation,
            showAdvanced: this.showAdvanced,
          };
        }
        loadFromSettings(e) {
          Object.prototype.hasOwnProperty.call(e, "id") && (this.id = e.id),
            Object.prototype.hasOwnProperty.call(e, "name") &&
              e.name &&
              (this.name = e.name),
            Object.prototype.hasOwnProperty.call(e, "numericRepresentation") &&
              e.numericRepresentation &&
              (this.numericRepresentation = e.numericRepresentation),
            Object.prototype.hasOwnProperty.call(e, "description") &&
              e.description &&
              (this.description = e.description),
            Object.prototype.hasOwnProperty.call(e, "abbreviation") &&
              e.abbreviation &&
              (this.abbreviation = e.abbreviation);
        }
      }
      class We extends Ye {
        current = !1;
        selected = !1;
        constructor(e, t = "") {
          super(t, e),
            "" === this.name &&
              this.numericRepresentation &&
              (this.name = this.numericRepresentation.toString());
        }
        toConfig() {
          return {
            ...super.toTemplate(),
            name: this.name,
            numericRepresentation: this.numericRepresentation,
          };
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            name: this.name,
            numericRepresentation: this.numericRepresentation,
            current: this.current,
            selected: this.selected,
          };
        }
        clone() {
          const e = new We(this.numericRepresentation, this.name);
          return (
            (e.id = this.id),
            (e.current = this.current),
            (e.selected = this.selected),
            e
          );
        }
      }
      class $e extends Ye {
        days = [];
        numberOfDays = 0;
        numberOfLeapYearDays = 0;
        numericRepresentationOffset = 0;
        intercalary = !1;
        intercalaryInclude = !1;
        current = !1;
        visible = !1;
        selected = !1;
        startingWeekday = null;
        constructor(e = "", t = NaN, a = 0, s = 0, n = null) {
          super(e, t),
            (this.numericRepresentationOffset = a),
            "" === this.name && (this.name = t.toString()),
            (this.abbreviation = this.name.substring(0, 3)),
            (this.numberOfLeapYearDays = null === n ? s : n),
            (this.numberOfDays = s),
            this.populateDays(
              this.numberOfLeapYearDays > this.numberOfDays
                ? this.numberOfLeapYearDays
                : this.numberOfDays
            );
        }
        populateDays(e, t = null) {
          for (let a = 1; a <= e; a++) {
            const e = new We(a + this.numericRepresentationOffset);
            a === t && (e.current = !0), this.days.push(e);
          }
        }
        toConfig() {
          return {
            id: this.id,
            name: this.name,
            description: this.description,
            abbreviation: this.abbreviation,
            numericRepresentation: this.numericRepresentation,
            numericRepresentationOffset: this.numericRepresentationOffset,
            numberOfDays: this.numberOfDays,
            numberOfLeapYearDays: this.numberOfLeapYearDays,
            intercalary: this.intercalary,
            intercalaryInclude: this.intercalaryInclude,
            startingWeekday: this.startingWeekday,
          };
        }
        toTemplate(e = null) {
          let t = !1;
          return (
            e && (t = e.year.leapYearRule.isLeapYear(e.year.visibleYear)),
            {
              ...super.toTemplate(),
              abbreviation: this.abbreviation,
              name: this.name,
              numericRepresentation: this.numericRepresentation,
              showAdvanced: this.showAdvanced,
              numericRepresentationOffset: this.numericRepresentationOffset,
              current: this.current,
              visible: this.visible,
              selected: this.selected,
              days: this.getDaysForTemplate(t),
              numberOfDays: this.numberOfDays,
              numberOfLeapYearDays: this.numberOfLeapYearDays,
              intercalary: this.intercalary,
              intercalaryInclude: this.intercalaryInclude,
              startingWeekday: this.startingWeekday,
            }
          );
        }
        clone() {
          const e = new $e(
            this.name,
            this.numericRepresentation,
            this.numericRepresentationOffset
          );
          return (
            (e.id = this.id),
            (e.name = this.name),
            (e.description = this.description),
            (e.abbreviation = this.abbreviation),
            (e.current = this.current),
            (e.selected = this.selected),
            (e.visible = this.visible),
            (e.days = this.days.map((e) => e.clone())),
            (e.numberOfDays = this.numberOfDays),
            (e.numberOfLeapYearDays = this.numberOfLeapYearDays),
            (e.intercalary = this.intercalary),
            (e.intercalaryInclude = this.intercalaryInclude),
            (e.showAdvanced = this.showAdvanced),
            (e.startingWeekday = this.startingWeekday),
            e
          );
        }
        loadFromSettings(e) {
          if (e && Object.keys(e).length) {
            super.loadFromSettings(e),
              (this.numericRepresentationOffset =
                e.numericRepresentationOffset);
            let t = parseInt(e.numberOfDays.toString()),
              a =
                void 0 === e.numberOfLeapYearDays
                  ? 0
                  : parseInt(e.numberOfLeapYearDays.toString());
            isNaN(t) && (t = 1),
              isNaN(a) && (a = 1),
              (this.numberOfDays = t),
              (this.numberOfLeapYearDays = a),
              (this.intercalary = e.intercalary),
              (this.intercalaryInclude = e.intercalaryInclude),
              Object.prototype.hasOwnProperty.call(e, "startingWeekday") &&
                (this.startingWeekday = e.startingWeekday),
              Object.prototype.hasOwnProperty.call(e, "abbreviation")
                ? (this.abbreviation = e.abbreviation)
                : (this.abbreviation = this.name.substring(0, 3)),
              (this.days = []),
              this.populateDays(
                this.numberOfLeapYearDays > this.numberOfDays
                  ? this.numberOfLeapYearDays
                  : this.numberOfDays
              );
          }
        }
        getDay(e = "current") {
          const t = e.toLowerCase();
          return this.days.find((e) => e[t]);
        }
        getDayIndex(e = "current") {
          const t = e.toLowerCase();
          return this.days.findIndex((e) => e[t]);
        }
        getDaysForTemplate(e = !1) {
          const t = this.days.map((e) => e.toTemplate());
          if (this.numberOfDays !== this.numberOfLeapYearDays) {
            const a = this.numberOfLeapYearDays - this.numberOfDays;
            if (a > 0 && !e) return t.slice(0, t.length - a);
            if (a < 0 && e) return t.slice(0, t.length - Math.abs(a));
          }
          return t;
        }
        changeDay(e, t = !1, a = "current") {
          const s = this.getDayIndex(a);
          let n = 0;
          const i = t ? this.numberOfLeapYearDays : this.numberOfDays;
          if (s > -1) {
            const o = s + e;
            (e > 0 && o >= i) || (e < 0 && o < 0) || o < 0
              ? (this.resetDays(a), (n = e > 0 ? 1 : -1))
              : this.updateDay(o, t, a);
          }
          return n;
        }
        resetDays(e = "current") {
          const t = e.toLowerCase();
          this.days.forEach((e) => {
            e[t] = !1;
          });
        }
        updateDay(e, t = !1, a = "current") {
          const s = a.toLowerCase(),
            n = t ? this.numberOfLeapYearDays : this.numberOfDays;
          this.resetDays(a),
            e < 0 || e >= n
              ? (this.days[n - 1][s] = !0)
              : this.days[e] && (this.days[e][s] = !0);
        }
      }
      class qe extends Ye {
        restday;
        constructor(e = NaN, t = "") {
          super(t, e),
            (this.abbreviation = t.substring(0, 2)),
            (this.restday = !1);
        }
        toConfig() {
          return {
            abbreviation: this.abbreviation,
            id: this.id,
            name: this.name,
            description: this.description,
            numericRepresentation: this.numericRepresentation,
            restday: this.restday,
          };
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            abbreviation: this.abbreviation,
            name: this.name,
            numericRepresentation: this.numericRepresentation,
            showAdvanced: this.showAdvanced,
            restday: this.restday,
          };
        }
        clone() {
          const e = new qe(this.numericRepresentation, this.name);
          return (
            (e.id = this.id),
            (e.abbreviation = this.abbreviation),
            (e.description = this.description),
            (e.showAdvanced = this.showAdvanced),
            (e.restday = this.restday),
            e
          );
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (super.loadFromSettings(e),
            Object.prototype.hasOwnProperty.call(e, "abbreviation")
              ? (this.abbreviation = e.abbreviation)
              : (this.abbreviation = this.name.substring(0, 2)),
            Object.prototype.hasOwnProperty.call(e, "restday") &&
              (this.restday = e.restday));
        }
      }
      class Ge extends Ye {
        color = "#ffffff";
        startingMonth = -1;
        startingDay = -1;
        sunriseTime = 0;
        sunsetTime = 0;
        icon = f.None;
        constructor(e = "", t = 0, a = 0) {
          super(e), (this.startingMonth = t), (this.startingDay = a);
        }
        clone() {
          const e = new Ge(this.name, this.startingMonth, this.startingDay);
          return (
            (e.id = this.id),
            (e.description = this.description),
            (e.color = this.color),
            (e.icon = this.icon),
            (e.sunriseTime = this.sunriseTime),
            (e.sunsetTime = this.sunsetTime),
            e
          );
        }
        toConfig() {
          return {
            id: this.id,
            name: this.name,
            description: this.description,
            startingMonth: this.startingMonth,
            startingDay: this.startingDay,
            color: this.color,
            icon: this.icon,
            sunriseTime: this.sunriseTime,
            sunsetTime: this.sunsetTime,
          };
        }
        toTemplate() {
          const e = `sc_season_start_date_${this.id}`,
            t = `sc_season_sunrise_time_${this.id}`;
          let a = 0,
            s = 0,
            n = 0,
            i = 0;
          const o = R.getActiveCalendar();
          return (
            (s = Math.floor(this.sunriseTime / o.time.secondsInMinute)),
            (i = Math.floor(this.sunsetTime / o.time.secondsInMinute)),
            s >= o.time.minutesInHour &&
              ((a = Math.floor(s / o.time.minutesInHour)),
              (s -= a * o.time.minutesInHour)),
            i >= o.time.minutesInHour &&
              ((n = Math.floor(i / o.time.minutesInHour)),
              (i -= n * o.time.minutesInHour)),
            {
              ...super.toTemplate(),
              name: this.name,
              description: this.description,
              startingMonth: this.startingMonth,
              startingDay: this.startingDay,
              color: this.color,
              icon: this.icon,
              startDateSelectorId: e,
              startDateSelectedDate: {
                year: 0,
                month: this.startingMonth,
                day: this.startingDay,
                hour: 0,
                minute: 0,
                seconds: 0,
              },
              sunriseSelectorId: t,
              sunriseSelectorSelectedDates: {
                start: {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: a,
                  minute: s,
                  seconds: 0,
                },
                end: {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: n,
                  minute: i,
                  seconds: 0,
                },
              },
            }
          );
        }
        loadFromSettings(e) {
          if (e && Object.keys(e).length) {
            super.loadFromSettings(e),
              (this.startingMonth = e.startingMonth),
              (this.startingDay = e.startingDay);
            const t = e.customColor;
            (this.color = "custom" === e.color && t ? t : e.color),
              Object.prototype.hasOwnProperty.call(e, "sunriseTime") &&
                (this.sunriseTime = e.sunriseTime),
              Object.prototype.hasOwnProperty.call(e, "sunsetTime") &&
                (this.sunsetTime = e.sunsetTime),
              Object.prototype.hasOwnProperty.call(e, "icon") &&
                (this.icon = e.icon);
          }
        }
      }
      class ze extends Ye {
        cycleLength;
        phases = [];
        firstNewMoon = {
          yearReset: y.None,
          yearX: 0,
          year: 0,
          month: 1,
          day: 1,
        };
        color = "#ffffff";
        cycleDayAdjust = 0;
        constructor(e = "", t = 0) {
          super(e),
            (this.cycleLength = t),
            this.phases.push({
              name: H.Localize("FSC.Moon.Phase.New"),
              length: 3.69,
              icon: f.NewMoon,
              singleDay: !0,
            });
        }
        clone() {
          const e = new ze(this.name, this.cycleLength);
          return (
            (e.id = this.id),
            (e.phases = this.phases.map((e) => ({
              name: e.name,
              length: e.length,
              icon: e.icon,
              singleDay: e.singleDay,
            }))),
            (e.firstNewMoon.yearReset = this.firstNewMoon.yearReset),
            (e.firstNewMoon.yearX = this.firstNewMoon.yearX),
            (e.firstNewMoon.year = this.firstNewMoon.year),
            (e.firstNewMoon.month = this.firstNewMoon.month),
            (e.firstNewMoon.day = this.firstNewMoon.day),
            (e.color = this.color),
            (e.cycleDayAdjust = this.cycleDayAdjust),
            e
          );
        }
        toConfig() {
          return {
            id: this.id,
            name: this.name,
            cycleLength: this.cycleLength,
            firstNewMoon: {
              yearReset: this.firstNewMoon.yearReset,
              yearX: this.firstNewMoon.yearX,
              year: this.firstNewMoon.year,
              month: this.firstNewMoon.month,
              day: this.firstNewMoon.day,
            },
            phases: this.phases.map((e) => ({
              name: e.name,
              length: e.length,
              icon: e.icon,
              singleDay: e.singleDay,
            })),
            color: this.color,
            cycleDayAdjust: this.cycleDayAdjust,
          };
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            name: this.name,
            cycleLength: this.cycleLength,
            firstNewMoon: this.firstNewMoon,
            phases: this.phases,
            color: this.color,
            cycleDayAdjust: this.cycleDayAdjust,
            firstNewMoonDateSelectorId: `sc_first_new_moon_date_${this.id}`,
            firstNewMoonSelectedDate: {
              year: 0,
              month: this.firstNewMoon.month,
              day: this.firstNewMoon.day,
              hour: 0,
              minute: 0,
              seconds: 0,
            },
          };
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (super.loadFromSettings(e),
            (this.cycleLength = e.cycleLength),
            (this.phases = e.phases),
            (this.firstNewMoon = {
              yearReset: e.firstNewMoon.yearReset,
              yearX: e.firstNewMoon.yearX,
              year: e.firstNewMoon.year,
              month: e.firstNewMoon.month,
              day: e.firstNewMoon.day,
            }),
            (this.color = e.color),
            (this.cycleDayAdjust = e.cycleDayAdjust));
        }
        updatePhaseLength() {
          let e = 0,
            t = 0;
          for (let a = 0; a < this.phases.length; a++)
            this.phases[a].singleDay ? t++ : e++;
          const a = Number(((this.cycleLength - t) / e).toPrecision(6));
          this.phases.forEach((e) => {
            e.singleDay ? (e.length = 1) : (e.length = a);
          });
        }
        getDateMoonPhase(e, t, a, s) {
          let n = e.dateToDays(
              this.firstNewMoon.year,
              this.firstNewMoon.month,
              this.firstNewMoon.day,
              !0
            ),
            i = 0;
          if (this.firstNewMoon.yearReset === y.LeapYear) {
            const a = e.year.leapYearRule.previousLeapYear(t);
            null !== a &&
              ((n = e.dateToDays(
                a,
                this.firstNewMoon.month,
                this.firstNewMoon.day,
                !0
              )),
              t !== a && (i += e.year.leapYearRule.fraction(t)));
          } else if (this.firstNewMoon.yearReset === y.XYears) {
            const a = t % this.firstNewMoon.yearX;
            if (0 !== a) {
              const s = t - a;
              (n = e.dateToDays(
                s,
                this.firstNewMoon.month,
                this.firstNewMoon.day,
                !0
              )),
                (i += a / this.firstNewMoon.yearX);
            }
          }
          const o = (e.dateToDays(t, a, s, !0) - n + i) / this.cycleLength,
            r = (o - Math.floor(o)) * this.cycleLength + this.cycleDayAdjust;
          let c = 0,
            l = null;
          for (let e = 0; e < this.phases.length; e++) {
            const t = c + this.phases[e].length;
            if (r >= c && r < t) {
              l = this.phases[e];
              break;
            }
            c = t;
          }
          return null !== l ? l : this.phases[0];
        }
        getMoonPhase(e, t = "current", a = 0) {
          const s =
              "current" === (t = t.toLowerCase())
                ? e.year.numericRepresentation
                : "selected" === t
                ? e.year.selectedYear
                : e.year.visibleYear,
            n = e.getMonthIndex(t);
          if (n > -1) {
            const i = "visible" !== t ? e.months[n].getDayIndex(t) : a;
            return this.getDateMoonPhase(e, s, n, i);
          }
          return this.phases[0];
        }
      }
      var He = a(213);
      function Ue(e, t, a, s) {
        return foundry && foundry.utils && foundry.utils.mergeObject
          ? foundry.utils.mergeObject(e, t, a, s)
          : mergeObject(e, t, a, s);
      }
      function Ve(e, { prefix: t } = {}) {
        return foundry && foundry.utils && foundry.utils.getRoute
          ? foundry.utils.getRoute(e, { prefix: t })
          : getRoute(e, { prefix: t });
      }
      class _e {
        static async setToPredefined(e, a, s = !0) {
          let n = !1;
          const i = await fetch(
              Ve(`modules/${t}/predefined-calendars/${a}.json`)
            ),
            o = await i.json();
          if (o && o.calendar) {
            const i = e.id.replace("_temp", "");
            if ((delete o.calendar.name, a === c.Gregorian)) {
              const e = new Date();
              (o.calendar.currentDate.year = e.getFullYear()),
                (o.calendar.currentDate.month = e.getMonth()),
                (o.calendar.currentDate.day = e.getDate() - 1),
                (o.calendar.year.numericRepresentation = e.getFullYear());
            }
            e.loadFromSettings(o.calendar);
            const r = z.getNotes(i);
            for (let e = 0; e < r.length; e++)
              if (r[e].fromPredefined) {
                const t = game.journal?.get(r[e].entryId);
                t && (z.removeNoteStub(t), await t.delete());
              }
            if (s && o.notes) {
              const e = {};
              game.users?.forEach(
                (t) => (e[t.id] = game.user?.id === t.id ? 3 : 2)
              ),
                (e.default = 2);
              for (let a = 0; a < o.notes.length; a++) {
                const s = o.notes[a];
                (s.flags[t].noteData.calendarId = i),
                  (s.flags[t].noteData.fromPredefined = !0),
                  (s.folder = z.noteDirectory?.id),
                  (s.permission = e),
                  await JournalEntry.create(s, { keepId: !1 });
              }
            }
            n = !0;
          }
          return n;
        }
      }
      class Be {
        id;
        showDateSelector;
        showCalendarYear = !0;
        showTimeSelector;
        addTime = !1;
        timeDelimiter = "-";
        allowDateRangeSelection = !1;
        allowTimeRangeSelection = !0;
        secondDaySelect = !1;
        selectedDate;
        onDateSelect = null;
        position = M.Auto;
        calendar = R.getActiveCalendar();
        calendarId;
        timeSelectorId;
        editYear = !1;
        useCloneCalendars = !1;
        constructor(e, t) {
          (this.id = e),
            (this.calendarId = `${this.id}_calendar`),
            (this.timeSelectorId = `${this.id}_time_selector`),
            (this.showDateSelector = !0),
            (this.showTimeSelector = !1),
            (this.selectedDate = {
              visible: {
                year: 0,
                month: 1,
                day: 1,
                hour: 0,
                minute: 0,
                seconds: 0,
              },
              start: {
                year: 0,
                month: 1,
                day: 1,
                hour: 0,
                minute: 0,
                seconds: 0,
              },
              end: {
                year: 0,
                month: 1,
                day: 1,
                hour: 0,
                minute: 0,
                seconds: 0,
              },
              allDay: !0,
            }),
            this.applyOptions(t),
            void 0 === t.selectedEndDate &&
              (this.selectedDate.end = {
                year: this.selectedDate.start.year,
                month: this.selectedDate.start.month,
                day: this.selectedDate.start.day,
                hour: this.selectedDate.start.hour,
                minute: this.selectedDate.start.minute,
                seconds: this.selectedDate.start.seconds,
              }),
            this.selectedDate.allDay || (this.addTime = !0);
        }
        applyOptions(e) {
          void 0 !== e.calendar && (this.calendar = e.calendar),
            void 0 !== e.showDateSelector &&
              (this.showDateSelector = e.showDateSelector),
            void 0 !== e.showTimeSelector &&
              (this.showTimeSelector = e.showTimeSelector),
            void 0 !== e.showCalendarYear &&
              (this.showCalendarYear = e.showCalendarYear),
            e.onDateSelect && (this.onDateSelect = e.onDateSelect),
            e.position && (this.position = e.position),
            void 0 !== e.allowDateRangeSelection &&
              (this.allowDateRangeSelection = e.allowDateRangeSelection),
            void 0 !== e.allowTimeRangeSelection &&
              (this.allowTimeRangeSelection = e.allowTimeRangeSelection),
            void 0 !== e.editYear && (this.editYear = e.editYear),
            void 0 !== e.timeDelimiter &&
              (this.timeDelimiter = e.timeDelimiter),
            void 0 !== e.selectedStartDate &&
              ((this.selectedDate.start = {
                year: e.selectedStartDate.year,
                month: e.selectedStartDate.month,
                day: e.selectedStartDate.day,
                hour: e.selectedStartDate.hour,
                minute: e.selectedStartDate.minute,
                seconds: e.selectedStartDate.seconds,
              }),
              (this.selectedDate.visible = {
                year: this.selectedDate.start.year,
                month: this.selectedDate.start.month,
                day: this.selectedDate.start.day,
                hour: this.selectedDate.start.hour,
                minute: this.selectedDate.start.minute,
                seconds: this.selectedDate.start.seconds,
              })),
            void 0 !== e.selectedEndDate &&
              (this.selectedDate.end = {
                year: e.selectedEndDate.year,
                month: e.selectedEndDate.month,
                day: e.selectedEndDate.day,
                hour: e.selectedEndDate.hour,
                minute: e.selectedEndDate.minute,
                seconds: e.selectedEndDate.seconds,
              }),
            void 0 !== e.timeSelected
              ? (this.selectedDate.allDay = !e.timeSelected)
              : (this.selectedDate.allDay = !this.showTimeSelector),
            e.useCloneCalendars &&
              (this.useCloneCalendars = e.useCloneCalendars);
        }
        build(e = !0, t = !0) {
          let a;
          const s = `<div id="${this.id}" class="fsc-ec">`;
          let n = "",
            i = "";
          this.showDateSelector &&
            (n = ke.CalendarFull.Render(this.calendar, {
              id: this.calendarId,
              allowChangeMonth: !0,
              allowSelectDateRange: this.allowDateRangeSelection,
              cssClasses: "fsc-fc",
              colorToMatchSeason: !1,
              editYear: this.editYear,
              showCurrentDate: !1,
              showDayDetails: !1,
              showDescriptions: !1,
              showMoonPhases: !1,
              showNoteCount: !1,
              showSeasonName: !1,
              showYear: this.showCalendarYear,
              date: {
                month: this.selectedDate.visible.month,
                year: this.selectedDate.visible.year,
                day: 0,
              },
              theme: "none",
              selectedDates: {
                start: {
                  year: this.selectedDate.start.year,
                  month: this.selectedDate.start.month,
                  day: this.selectedDate.start.day,
                },
                end: {
                  year: this.selectedDate.end.year,
                  month: this.selectedDate.end.month,
                  day: this.selectedDate.end.day,
                },
              },
            })),
            this.showTimeSelector &&
              ((i = '<div class="fsc-gc">'),
              this.addTime
                ? ((i += ke.TimeSelector.Render(this.calendar, {
                    id: this.timeSelectorId,
                    allowTimeRange: this.allowTimeRangeSelection,
                    disableSelfUpdate: !0,
                    selectedTime: {
                      start: {
                        hour: this.selectedDate.start.hour,
                        minute: this.selectedDate.start.minute,
                        seconds: this.selectedDate.start.seconds,
                      },
                      end: {
                        hour: this.selectedDate.end.hour,
                        minute: this.selectedDate.end.minute,
                        seconds: this.selectedDate.end.seconds,
                      },
                    },
                    timeDelimiter: this.timeDelimiter,
                    useCalendarClones: this.useCloneCalendars,
                  })),
                  this.showDateSelector &&
                    (i += `<div class="fsc-hc"><button class="fsc-yb fsc-ic"><i class="fa fa-times"></i> ${H.Localize(
                      "FSC.RemoveTime"
                    )}</button></div>`))
                : (i += `<div class="fsc-jc"><button class="fsc-yb fsc-zb"><i class="fa fa-clock"></i> ${H.Localize(
                    "FSC.Notes.DateTime.AllDay"
                  )}</button></div>`),
              (i += "</div>"));
          let o = {
            year: this.selectedDate.end.year,
            month: this.selectedDate.end.month,
            day: this.selectedDate.end.day,
            hour: this.selectedDate.end.hour,
            minute: this.selectedDate.end.minute,
            seconds: this.selectedDate.end.seconds,
          };
          (isNaN(o.year) ||
            isNaN(o.month) ||
            isNaN(o.day) ||
            isNaN(o.hour) ||
            isNaN(o.minute) ||
            isNaN(o.seconds)) &&
            (o = {
              year: this.selectedDate.start.year,
              month: this.selectedDate.start.month,
              day: this.selectedDate.start.day,
              hour: this.selectedDate.start.hour,
              minute: this.selectedDate.start.minute,
              seconds: this.selectedDate.start.seconds,
            });
          return (
            (a = `<input class="fsc-kc" value="${ee(
              this.calendar,
              this.selectedDate.start,
              o,
              this.selectedDate.allDay,
              this.showTimeSelector && !this.showDateSelector,
              this.showCalendarYear,
              this.timeDelimiter
            )}" tabindex="0" type="text" readonly="readonly"><div class="fsc-lc" style="display:${
              e ? "none" : "block"
            };">${n}${i}</div>`),
            t && (a = `${s}${a}</div>`),
            a
          );
        }
        setPosition(e) {
          if (e) {
            e.classList.remove(M.LeftUp),
              e.classList.remove(M.LeftDown),
              e.classList.remove(M.RightUp),
              e.classList.remove(M.RightDown);
            let t = this.position;
            if (this.position === M.Auto) {
              const a = e.closest(".window-app");
              if (a) {
                const s = e.getBoundingClientRect(),
                  n = a.getBoundingClientRect();
                (t = s.right > n.right ? "right-" : "left-"),
                  s.bottom > n.bottom && s.top - s.height > n.top
                    ? (t += "up")
                    : (t += "down");
              }
            }
            e.classList.add(t);
          }
        }
        update(e = !1) {
          const t = this.build(e, !1),
            a = document.querySelector(`#${this.id}`);
          a &&
            ((a.innerHTML = t),
            this.activateListeners(a, !0, !0, !1),
            (a.style.display = "block"),
            this.setPosition(a.querySelector(".fsc-lc")));
        }
        activateListeners(e = null, t = !0, a = !0, s = !0) {
          if ((e || (e = document.querySelector(`#${this.id}`)), e)) {
            if (
              (s && document.addEventListener("click", this.hideCalendar),
              t && a)
            ) {
              const t = e.querySelector(".fsc-kc");
              t &&
                t.addEventListener("click", this.toggleCalendar.bind(this, e));
            }
            if (
              (t &&
                this.showDateSelector &&
                ke.CalendarFull.ActivateListeners(
                  this.calendarId,
                  this.changeMonthClick.bind(this),
                  this.dayClick.bind(this),
                  this.changeYear.bind(this)
                ),
              this.showDateSelector)
            ) {
              const t = e.querySelector(".fsc-fc");
              t && t.addEventListener("click", this.calendarClick.bind(this));
            }
            if (
              (a &&
                this.showTimeSelector &&
                ke.TimeSelector.ActivateListeners(
                  this.timeSelectorId,
                  this.timeChange.bind(this)
                ),
              this.showTimeSelector)
            ) {
              const t = e.querySelector(".fsc-jc button");
              t && t.addEventListener("click", this.addTimeClick.bind(this));
              const a = e.querySelector(".fsc-hc button");
              a && a.addEventListener("click", this.removeTimeClick.bind(this));
            }
          }
        }
        deactivateListeners() {
          document.removeEventListener("click", this.hideCalendar);
        }
        callOnDateSelect() {
          if (this.onDateSelect) {
            isNaN(this.selectedDate.end.year) &&
              ((this.selectedDate.end.year = this.selectedDate.start.year),
              (this.selectedDate.end.month = this.selectedDate.start.month),
              (this.selectedDate.end.day = this.selectedDate.start.day),
              (this.selectedDate.end.hour = this.selectedDate.start.hour),
              (this.selectedDate.end.minute = this.selectedDate.start.minute),
              (this.selectedDate.end.seconds =
                this.selectedDate.start.seconds));
            const e = {
              startDate: {
                year: this.selectedDate.start.year,
                month: this.selectedDate.start.month,
                day: this.selectedDate.start.day,
                hour: this.selectedDate.start.hour,
                minute: this.selectedDate.start.minute,
              },
              endDate: {
                year: this.selectedDate.end.year,
                month: this.selectedDate.end.month,
                day: this.selectedDate.end.day,
                hour: this.selectedDate.end.hour,
                minute: this.selectedDate.end.minute,
              },
              timeSelected: !this.selectedDate.allDay,
            };
            this.onDateSelect(e);
          }
        }
        toggleCalendar(e, t) {
          t.stopPropagation();
          const a = e.querySelector(".fsc-lc");
          a &&
            ("none" === a.style.display
              ? ((a.style.display = "block"), this.setPosition(a))
              : (a.style.display = "none"));
        }
        hideCalendar = () => {
          this.secondDaySelect = !1;
          const e = document.getElementById(this.id);
          if (e) {
            const t = e.querySelector(".fsc-lc");
            t && ((t.style.display = "none"), this.callOnDateSelect());
          }
        };
        calendarClick(e) {
          e.stopPropagation(),
            ke.TimeSelector.HideTimeDropdown(this.timeSelectorId);
          const t = document.getElementById(this.id);
          if (t) {
            const e = t.getElementsByClassName("fsc-mc");
            for (let t = 0; t < e.length; t++) e[t].classList.add("hide");
          }
        }
        dayClick(e) {
          if (e.selectedDates) {
            let t = !0;
            this.secondDaySelect
              ? ((this.selectedDate.start.year = e.selectedDates.start.year),
                (this.selectedDate.start.month = e.selectedDates.start.month),
                (this.selectedDate.start.day = e.selectedDates.start.day || 0),
                (this.selectedDate.end.year = e.selectedDates.end.year),
                (this.selectedDate.end.month = e.selectedDates.end.month),
                (this.selectedDate.end.day = e.selectedDates.end.day || 0))
              : ((this.selectedDate.start.year = e.selectedDates.start.year),
                (this.selectedDate.start.month = e.selectedDates.start.month),
                (this.selectedDate.start.day = e.selectedDates.start.day || 0),
                this.allowDateRangeSelection
                  ? ((this.selectedDate.end.year = e.selectedDates.end.year),
                    (this.selectedDate.end.month = e.selectedDates.end.month),
                    (this.selectedDate.end.day = e.selectedDates.end.day))
                  : ((this.selectedDate.start.year =
                      e.selectedDates.start.year),
                    (this.selectedDate.start.month =
                      e.selectedDates.start.month),
                    (this.selectedDate.start.day =
                      e.selectedDates.start.day || 0),
                    (this.selectedDate.end.year = e.selectedDates.end.year),
                    (this.selectedDate.end.month = e.selectedDates.end.month),
                    (this.selectedDate.end.day = e.selectedDates.end.day || 0)),
                (this.secondDaySelect = !0),
                (t = !this.allowDateRangeSelection)),
              t
                ? ((this.secondDaySelect = !1),
                  this.update(t),
                  this.callOnDateSelect())
                : this.showTimeSelector &&
                  ke.TimeSelector.HideTimeDropdown(this.timeSelectorId);
          }
        }
        changeMonthClick(e, t) {
          t.date &&
            ((this.selectedDate.visible.year = t.date.year),
            (this.selectedDate.visible.month = t.date.month)),
            this.update(!1),
            this.showTimeSelector &&
              ke.TimeSelector.HideTimeDropdown(this.timeSelectorId);
        }
        changeYear(e) {
          e.date && (this.selectedDate.visible.year = e.date.year),
            this.update(!1),
            this.showTimeSelector &&
              ke.TimeSelector.HideTimeDropdown(this.timeSelectorId);
        }
        addTimeClick(e) {
          e.stopPropagation(),
            (this.addTime = !0),
            (this.selectedDate.allDay = !1),
            (this.selectedDate.start.hour = 0),
            (this.selectedDate.start.minute = 0),
            (this.selectedDate.start.seconds = 0),
            (this.selectedDate.end.hour = 0),
            (this.selectedDate.end.minute = 0),
            (this.selectedDate.end.seconds = 0),
            this.update();
        }
        removeTimeClick(e) {
          e.stopPropagation(),
            (this.addTime = !1),
            (this.selectedDate.allDay = !0),
            (this.selectedDate.start.hour = 0),
            (this.selectedDate.start.minute = 0),
            (this.selectedDate.start.seconds = 0),
            (this.selectedDate.end.hour = 0),
            (this.selectedDate.end.minute = 0),
            (this.selectedDate.end.seconds = 0),
            this.update();
        }
        timeChange(e) {
          e.selectedTime &&
            (te(this.selectedDate.start, this.selectedDate.end) &&
              e.selectedTime.end.hour <= e.selectedTime.start.hour &&
              ((e.selectedTime.end.hour = e.selectedTime.start.hour),
              e.selectedTime.end.minute < e.selectedTime.start.minute &&
                (e.selectedTime.end.minute = e.selectedTime.start.minute)),
            (this.selectedDate.start.hour = e.selectedTime.start.hour),
            (this.selectedDate.start.minute = e.selectedTime.start.minute),
            (this.selectedDate.end.hour = e.selectedTime.end.hour),
            (this.selectedDate.end.minute = e.selectedTime.end.minute),
            this.update(),
            this.showTimeSelector &&
              !this.showDateSelector &&
              this.callOnDateSelect());
        }
      }
      class Ze {
        static Selectors = {};
        static GetSelector(e, t) {
          if (Object.prototype.hasOwnProperty.call(this.Selectors, e))
            return this.Selectors[e].applyOptions(t), this.Selectors[e];
          {
            const a = new Be(e, t);
            return (this.Selectors[e] = a), a;
          }
        }
        static RemoveSelector(e) {
          Object.prototype.hasOwnProperty.call(this.Selectors, e) &&
            (this.Selectors[e].deactivateListeners(), delete this.Selectors[e]);
        }
        static ActivateSelector(e) {
          Object.prototype.hasOwnProperty.call(this.Selectors, e) &&
            this.Selectors[e].activateListeners();
        }
        static DeactivateSelector(e) {
          Object.prototype.hasOwnProperty.call(this.Selectors, e) &&
            this.Selectors[e].deactivateListeners();
        }
      }
      class Je extends Ye {
        viewCalendar;
        addNotes;
        reorderNotes;
        changeDateTime;
        changeActiveCalendar;
        constructor() {
          super(),
            (this.viewCalendar = {
              player: !0,
              trustedPlayer: !0,
              assistantGameMaster: !0,
              users: void 0,
            }),
            (this.addNotes = {
              player: !1,
              trustedPlayer: !1,
              assistantGameMaster: !1,
              users: void 0,
            }),
            (this.reorderNotes = {
              player: !1,
              trustedPlayer: !1,
              assistantGameMaster: !1,
              users: void 0,
            }),
            (this.changeDateTime = {
              player: !1,
              trustedPlayer: !1,
              assistantGameMaster: !1,
              users: void 0,
            }),
            (this.changeActiveCalendar = {
              player: !1,
              trustedPlayer: !1,
              assistantGameMaster: !1,
              users: void 0,
            });
        }
        static clonePermissions(e) {
          return {
            player: e.player,
            trustedPlayer: e.trustedPlayer,
            assistantGameMaster: e.assistantGameMaster,
            users: e.users,
          };
        }
        clone() {
          const e = new Je();
          return (
            (e.id = this.id),
            (e.viewCalendar = Je.clonePermissions(this.viewCalendar)),
            (e.addNotes = Je.clonePermissions(this.addNotes)),
            (e.reorderNotes = Je.clonePermissions(this.reorderNotes)),
            (e.changeDateTime = Je.clonePermissions(this.changeDateTime)),
            (e.changeActiveCalendar = Je.clonePermissions(
              this.changeActiveCalendar
            )),
            e
          );
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            viewCalendar: this.viewCalendar,
            addNotes: this.addNotes,
            reorderNotes: this.reorderNotes,
            changeDateTime: this.changeDateTime,
            changeActiveCalendar: this.changeActiveCalendar,
          };
        }
        toConfig() {
          return {
            id: this.id,
            addNotes: this.addNotes,
            changeDateTime: this.changeDateTime,
            reorderNotes: this.reorderNotes,
            viewCalendar: this.viewCalendar,
            changeActiveCalendar: this.changeActiveCalendar,
          };
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (Object.prototype.hasOwnProperty.call(e, "viewCalendar") &&
              this.validateUserPermissionMatrix(e.viewCalendar) &&
              (this.viewCalendar = e.viewCalendar),
            Object.prototype.hasOwnProperty.call(e, "addNotes") &&
              this.validateUserPermissionMatrix(e.addNotes) &&
              (this.addNotes = e.addNotes),
            Object.prototype.hasOwnProperty.call(e, "changeDateTime") &&
              this.validateUserPermissionMatrix(e.changeDateTime) &&
              (this.changeDateTime = e.changeDateTime),
            Object.prototype.hasOwnProperty.call(e, "reorderNotes") &&
              this.validateUserPermissionMatrix(e.reorderNotes) &&
              (this.reorderNotes = e.reorderNotes),
            Object.prototype.hasOwnProperty.call(e, "changeActiveCalendar") &&
              this.validateUserPermissionMatrix(e.changeActiveCalendar) &&
              (this.changeActiveCalendar = e.changeActiveCalendar));
        }
        validateUserPermissionMatrix(e) {
          return !!(
            e &&
            x(e) &&
            Object.prototype.hasOwnProperty.call(e, "player") &&
            Object.prototype.hasOwnProperty.call(e, "trustedPlayer") &&
            Object.prototype.hasOwnProperty.call(e, "assistantGameMaster")
          );
        }
      }
      function Ke(e, t, a = document) {
        const s = a.querySelector(e);
        return s ? s.value : t;
      }
      function Xe(e, t, a = !1, s = document) {
        const n = s.querySelector(e);
        if (n) {
          const e = a ? parseFloat(n.value) : parseInt(n.value);
          if (!isNaN(e)) return e;
        }
        return t;
      }
      function Qe(e, t, a = document) {
        const s = a.querySelector(e);
        return s ? s.checked : t;
      }
      class et extends FormApplication {
        static appWindowId = "fsc-nc";
        appWindow = null;
        calendars = [];
        predefindCalendars = [];
        globalConfiguration = {
          id: "",
          version: "",
          calendarsSameTimestamp: !1,
          combatPauseRule: o.Active,
          permissions: new Je(),
          secondsInCombatRound: 6,
          syncCalendars: !1,
          showNotesFolder: !1,
          inGameChatTimestamp: !1,
        };
        clientSettings = {
          id: "",
          theme: i[0].key,
          openOnLoad: !0,
          openCompact: !1,
          rememberPosition: !0,
          rememberCompactPosition: !1,
          appPosition: {},
          noteReminderNotification: I.whisper,
          sideDrawerDirection: "sc-right",
          alwaysShowNoteList: !1,
          persistentOpen: !1,
          compactViewScale: 100,
        };
        uiElementStates = {
          chatFormatExample: "",
          dateFormatExample: "",
          dateFormatTableExpanded: !1,
          monthYearFormatExample: "",
          qsNextClicked: !1,
          qsAddNotes: !0,
          selectedPredefinedCalendar: "",
          timeFormatExample: "",
          disabledControls: { pf2e: !1 },
        };
        constructor() {
          super({});
        }
        render(e, t) {
          return F(this.object)
            ? void W.initializeAndShowDialog().catch(P.error)
            : (((t = t || {}).classes = ["simple-calendar", "fsc-oc", he()]),
              super.render(e, t));
        }
        async initializeAndShowDialog() {
          if (
            ((this.calendars = R.cloneCalendars()),
            (this.object = this.calendars[0]),
            G.load(),
            (this.globalConfiguration.permissions =
              G.globalConfiguration.permissions.clone()),
            (this.globalConfiguration.secondsInCombatRound =
              G.globalConfiguration.secondsInCombatRound),
            (this.globalConfiguration.calendarsSameTimestamp =
              G.globalConfiguration.calendarsSameTimestamp),
            (this.globalConfiguration.syncCalendars =
              G.globalConfiguration.syncCalendars),
            (this.globalConfiguration.showNotesFolder =
              G.globalConfiguration.showNotesFolder),
            (this.globalConfiguration.combatPauseRule =
              G.globalConfiguration.combatPauseRule),
            (this.globalConfiguration.inGameChatTimestamp =
              G.globalConfiguration.inGameChatTimestamp),
            (this.clientSettings = E({}, G.clientSettings)),
            (this._tabs[0].active = "globalSettings"),
            0 === this.predefindCalendars.length)
          )
            try {
              const e = await fetch(
                Ve(`modules/${t}/predefined-calendars/calendar-list.json`)
              );
              this.predefindCalendars = await e.json();
            } catch (e) {
              P.error(e), (this.predefindCalendars = []);
            }
          this.rendered ? this.bringToTop() : this.showApp();
        }
        static get defaultOptions() {
          const e = super.defaultOptions;
          return (
            (e.template =
              "modules/foundryvtt-simple-calendar/templates/configuration.html"),
            (e.title = "FSC.Configuration.Title"),
            (e.id = this.appWindowId),
            (e.classes = ["simple-calendar", "fsc-oc"]),
            (e.resizable = !0),
            (e.tabs = [
              {
                navSelector: ".tabs",
                contentSelector: "form",
                initial: "yearSettings",
              },
            ]),
            (e.height = ue(700)),
            (e.width = ue(1005)),
            (e.scrollY = [".fsc-pc", ".fsc-qc"]),
            e
          );
        }
        showApp() {
          this.render(!0);
        }
        closeApp() {
          this.close().catch(P.error);
        }
        close(e) {
          return (
            R.clearClones(),
            this.object.seasons.forEach((e) => {
              Ze.RemoveSelector(`sc_season_start_date_${e.id}`),
                Ze.RemoveSelector(`sc_season_sunrise_time_${e.id}`);
            }),
            Ze.DeactivateSelector("quick-setup-predefined-calendar"),
            (this.appWindow = null),
            super.close(e)
          );
        }
        updateApp() {
          this.render(!1);
        }
        getData(e) {
          const t = this.object.getCurrentDate();
          (this.uiElementStates.dateFormatExample = K(
            {
              year: t.year,
              month: t.month,
              day: t.day,
              hour: 13,
              minute: 36,
              seconds: 42,
            },
            this.object.generalSettings.dateFormat.date,
            this.object
          )),
            (this.uiElementStates.timeFormatExample = K(
              {
                year: t.year,
                month: t.month,
                day: t.day,
                hour: 13,
                minute: 36,
                seconds: 42,
              },
              this.object.generalSettings.dateFormat.time,
              this.object
            )),
            (this.uiElementStates.monthYearFormatExample = K(
              {
                year: t.year,
                month: t.month,
                day: t.day,
                hour: 13,
                minute: 36,
                seconds: 42,
              },
              this.object.generalSettings.dateFormat.monthYear,
              this.object
            )),
            (this.uiElementStates.chatFormatExample = K(
              {
                year: t.year,
                month: t.month,
                day: t.day,
                hour: 13,
                minute: 36,
                seconds: 42,
              },
              this.object.generalSettings.dateFormat.chatTime,
              this.object
            )),
            (this.uiElementStates.disabledControls.pf2e =
              J.isPF2E && this.object.generalSettings.pf2eSync);
          const a = {
            ...super.getData(e),
            activeCalendarId: this.object.id,
            images: {
              compactViewLayoutFull: Ve(
                "/modules/foundryvtt-simple-calendar/assets/sc-v2-theme-dark-comp.png"
              ),
              compactViewLayoutQuickIncrement: Ve(
                "/modules/foundryvtt-simple-calendar/assets/sc-v2-theme-dark-comp-qi.png"
              ),
            },
            calendars: this.calendars,
            clientSettings: {
              openOnLoad: this.clientSettings.openOnLoad,
              openInCompact: this.clientSettings.openCompact,
              rememberPos: this.clientSettings.rememberPosition,
              rememberCompactPos: this.clientSettings.rememberCompactPosition,
              theme: this.clientSettings.theme,
              themes: me(),
              noteReminderNotification:
                this.clientSettings.noteReminderNotification,
              noteReminderNotifications: {
                whisper:
                  "FSC.Configuration.Client.NoteReminderNotification.Whisper",
                render:
                  "FSC.Configuration.Client.NoteReminderNotification.Render",
              },
              sideDrawerDirection: this.clientSettings.sideDrawerDirection,
              sideDrawerDirections: {
                "sc-right": "FSC.Right",
                "sc-left": "FSC.Left",
                "sc-down": "FSC.Down",
              },
              alwaysShowNoteList: this.clientSettings.alwaysShowNoteList,
              persistentOpen: this.clientSettings.persistentOpen,
              compactViewScale: this.clientSettings.compactViewScale,
            },
            combatPauseRules: {
              active: "FSC.Configuration.CombatPauseRule.Active",
              current: "FSC.Configuration.CombatPauseRule.Current",
            },
            currentYear: this.object.year,
            gameSystem: Z.systemID,
            generalSettings: this.object.generalSettings,
            globalConfiguration: this.globalConfiguration,
            isGM: H.IsGm(),
            leapYearRule: this.object.year.leapYearRule,
            leapYearRules: {
              none: "FSC.Configuration.LeapYear.Rules.None",
              gregorian: "FSC.Configuration.LeapYear.Rules.Gregorian",
              custom: "FSC.Configuration.LeapYear.Rules.Custom",
            },
            months: this.object.months.map((e) => e.toTemplate()),
            monthStartingWeekdays: {},
            moons: this.object.moons.map((e) => e.toTemplate()),
            moonIcons: {},
            moonYearReset: {
              none: "FSC.Configuration.Moon.YearResetNo",
              "leap-year": "FSC.Configuration.Moon.YearResetLeap",
              "x-years": "FSC.Configuration.Moon.YearResetX",
            },
            noteCategories: [],
            predefined: this.predefindCalendars,
            qsCalDate: {
              year: 1,
              month: 0,
              day: 0,
              hour: 0,
              minute: 0,
              allDay: !0,
            },
            seasonColors: [
              {
                value: "#ffffff",
                display: H.Localize("FSC.Configuration.Season.ColorWhite"),
              },
              {
                value: "#46B946",
                display: H.Localize("FSC.Configuration.Season.ColorSpring"),
              },
              {
                value: "#E0C40B",
                display: H.Localize("FSC.Configuration.Season.ColorSummer"),
              },
              {
                value: "#FF8E47",
                display: H.Localize("FSC.Configuration.Season.ColorFall"),
              },
              {
                value: "#479DFF",
                display: H.Localize("FSC.Configuration.Season.ColorWinter"),
              },
            ],
            seasonIcons: {},
            seasons: this.object.seasons.map((e) => e.toTemplate()),
            showLeapYearCustomMod:
              this.object.year.leapYearRule.rule === h.Custom,
            showLeapYearMonths: this.object.year.leapYearRule.rule !== h.None,
            time: this.object.time,
            timeTrackers: {
              none: "FSC.Configuration.General.None",
              self: "FSC.Configuration.General.Self",
              "third-party": "FSC.Configuration.General.ThirdParty",
              mixed: "FSC.Configuration.General.Mixed",
            },
            uiElementStates: this.uiElementStates,
            weekdays: this.object.weekdays.map((e) => e.toTemplate()),
            yearNameBehaviourOptions: {
              default: "Default",
              repeat: "PLAYLIST.SoundRepeat",
              random: "FSC.Random",
            },
          };
          (a.seasonIcons[f.None] = H.Localize(
            "FSC.Configuration.LeapYear.Rules.None"
          )),
            (a.seasonIcons[f.Spring] = H.Localize(
              "FSC.Configuration.Season.ColorSpring"
            )),
            (a.seasonIcons[f.Summer] = H.Localize(
              "FSC.Configuration.Season.ColorSummer"
            )),
            (a.seasonIcons[f.Fall] = H.Localize(
              "FSC.Configuration.Season.ColorFall"
            )),
            (a.seasonIcons[f.Winter] = H.Localize(
              "FSC.Configuration.Season.ColorWinter"
            )),
            (a.seasonIcons[f.Sunrise] = H.Localize("FSC.Dawn")),
            (a.seasonIcons[f.Sunset] = H.Localize("FSC.Dusk")),
            (a.moonIcons[f.NewMoon] = H.Localize("FSC.Moon.Phase.New")),
            (a.moonIcons[f.WaxingCrescent] = H.Localize(
              "FSC.Moon.Phase.WaxingCrescent"
            )),
            (a.moonIcons[f.FirstQuarter] = H.Localize(
              "FSC.Moon.Phase.FirstQuarter"
            )),
            (a.moonIcons[f.WaxingGibbous] = H.Localize(
              "FSC.Moon.Phase.WaxingGibbous"
            )),
            (a.moonIcons[f.Full] = H.Localize("FSC.Moon.Phase.Full")),
            (a.moonIcons[f.WaningGibbous] = H.Localize(
              "FSC.Moon.Phase.WaningGibbous"
            )),
            (a.moonIcons[f.LastQuarter] = H.Localize(
              "FSC.Moon.Phase.LastQuarter"
            )),
            (a.moonIcons[f.WaningCrescent] = H.Localize(
              "FSC.Moon.Phase.WaningCrescent"
            )),
            (a.monthStartingWeekdays.null = H.Localize("Default"));
          for (let e = 0; e < this.object.weekdays.length; e++)
            a.monthStartingWeekdays[
              this.object.weekdays[e].numericRepresentation.toString()
            ] = this.object.weekdays[e].name;
          return (
            (a.qsCalDate.year = t.year),
            (a.qsCalDate.month = t.month),
            (a.qsCalDate.day = t.day),
            (a.noteCategories = this.object.noteCategories),
            a
          );
        }
        _updateObject() {
          return Promise.resolve(void 0);
        }
        activateListeners(e) {
          super.activateListeners(e),
            this.object.seasons.forEach((e) => {
              Ze.GetSelector(`sc_season_start_date_${e.id}`, {
                onDateSelect: this.dateSelectorChange.bind(
                  this,
                  e.id,
                  T.seasonStartingDate
                ),
              }).activateListeners(),
                Ze.GetSelector(`sc_season_sunrise_time_${e.id}`, {
                  onDateSelect: this.dateSelectorChange.bind(
                    this,
                    e.id,
                    T.seasonSunriseSunsetTime
                  ),
                }).activateListeners();
            }),
            this.object.moons.forEach((e) => {
              Ze.GetSelector(`sc_first_new_moon_date_${e.id}`, {
                onDateSelect: this.dateSelectorChange.bind(
                  this,
                  e.id,
                  T.moonFirstNewMoonDate
                ),
              }).activateListeners();
            }),
            (this.appWindow = document.getElementById(et.appWindowId)),
            this.appWindow &&
              (Ze.ActivateSelector("quick-setup-predefined-calendar"),
              this.appWindow.addEventListener(
                "click",
                this.toggleCalendarSelector.bind(this, !0)
              ),
              this.appWindow
                .querySelector(".tabs .fsc-rc .fsc-sc")
                ?.addEventListener(
                  "click",
                  this.toggleCalendarSelector.bind(this, !1)
                ),
              this.appWindow
                .querySelectorAll(".tabs .fsc-rc ul li[data-calendar]")
                .forEach((e) => {
                  e.addEventListener("click", this.calendarClick.bind(this));
                }),
              this.appWindow
                .querySelectorAll(".tabs .fsc-rc ul li[data-calendar] .fsc-yb")
                .forEach((e) => {
                  e.addEventListener(
                    "click",
                    this.removeCalendarClick.bind(this)
                  );
                }),
              this.appWindow
                .querySelector(".fsc-pc .fsc-tc .fsc-uc")
                ?.addEventListener("click", this.addNewCalendar.bind(this)),
              this.appWindow
                .querySelectorAll(".fsc-vc .fsc-wc .fsc-xc")
                .forEach((e) => {
                  e.addEventListener(
                    "click",
                    this.predefinedCalendarClick.bind(this)
                  );
                }),
              this.appWindow
                .querySelector(".fsc-vc .fsc-yc .fsc-zc")
                ?.addEventListener(
                  "click",
                  this.quickSetupNextClick.bind(this)
                ),
              this.appWindow
                .querySelector(".fsc-vc .fsc-yc .fsc-_c")
                ?.addEventListener(
                  "click",
                  this.quickSetupBackClick.bind(this)
                ),
              this.appWindow
                .querySelector(".fsc-vc .fsc-yc .fsc-ad")
                ?.addEventListener(
                  "click",
                  this.quickSetupSaveClick.bind(this)
                ),
              this.appWindow.querySelectorAll(".fsc-bd").forEach((e) => {
                e.addEventListener("click", this.toggleShowAdvanced.bind(this));
              }),
              this.appWindow
                .querySelectorAll("input, select, textarea")
                .forEach((e) => {
                  e.addEventListener("change", this.inputChange.bind(this)),
                    e.addEventListener("keyup", this.inputChange.bind(this));
                }),
              this.appWindow
                .querySelector(".fsc-cd")
                ?.addEventListener(
                  "click",
                  this.dateFormatTableClick.bind(this)
                ),
              this.appWindow
                .querySelectorAll(".fsc-dd .fsc-uc")
                .forEach((e) => {
                  e.addEventListener("click", this.addToTable.bind(this));
                }),
              this.appWindow.querySelectorAll(".fsc-yb.fsc-ic").forEach((e) => {
                e.addEventListener("click", this.removeFromTable.bind(this));
              }),
              this.appWindow
                .querySelector("#exportCalendar")
                ?.addEventListener("click", this.exportCalendar.bind(this)),
              this.appWindow
                .querySelector("#scImportCalendarPicker")
                ?.addEventListener(
                  "change",
                  this.importCalendarFileChange.bind(this)
                ),
              this.appWindow
                .querySelector("#scSave")
                ?.addEventListener("click", this.saveClick.bind(this, !0)));
        }
        inputChange() {
          this.writeInputValuesToObjects(), this.updateUIFromObject();
        }
        toggleCalendarSelector(e = !1) {
          if (this.appWindow) {
            const t = this.appWindow.querySelector(".tabs .fsc-rc ul");
            t && pe(t, 500, e);
          }
        }
        calendarClick(e) {
          const t = e.currentTarget;
          if (t) {
            const e = t.getAttribute("data-calendar");
            if (e && e !== this.object.id) {
              const t = this.calendars.find((t) => t.id === e);
              t &&
                ((this.object = t),
                (this._tabs[0].active = "generalSettings"),
                this.updateApp());
            }
          }
        }
        removeCalendarClick(e) {
          e.preventDefault(), e.stopPropagation();
          const t = e.currentTarget;
          if (t) {
            const e = t.getAttribute("data-calendar");
            if (e) {
              const t = this.calendars.find((t) => t.id === e);
              t &&
                this.confirmationDialog("remove-calendar", "remove-calendar", {
                  id: t.id,
                  name: t.name,
                });
            }
          }
        }
        removeCalendarConfirm(e) {
          e.id &&
            (R.removeCalendar(e.id),
            (this.calendars = R.getAllCalendars(!0)),
            (this.object = this.calendars[0]),
            this.updateApp());
        }
        async addNewCalendar(e) {
          e.preventDefault();
          const t = document.getElementById("scAddCalendarName");
          if (t && t.value) {
            const e = R.addTempCalendar(t.value);
            await _e.setToPredefined(e, c.Gregorian),
              this.calendars.push(e),
              (this.object = e),
              (this._tabs[0].active = "quickSetup"),
              this.updateApp();
          }
        }
        predefinedCalendarClick(e) {
          const t = e.target?.closest(".fsc-xc");
          if (t && this.appWindow) {
            const e = t.classList.contains("fsc-y");
            this.appWindow
              .querySelectorAll(".fsc-vc .fsc-wc .fsc-xc")
              .forEach((e) => {
                e.classList.remove("fsc-y");
              });
            const a = this.appWindow.querySelector(".fsc-vc .fsc-yc .fsc-zc");
            if (e)
              (this.uiElementStates.selectedPredefinedCalendar = ""),
                a && (a.style.display = "none");
            else {
              t.classList.add("fsc-y");
              const e = t.getAttribute("data-calendar");
              e &&
                ((this.uiElementStates.selectedPredefinedCalendar = e),
                a && (a.style.display = "block"));
            }
          }
        }
        quickSetupNextClick(e) {
          e.preventDefault(),
            this.confirmationDialog("overwrite", "predefined", {
              name: this.object.name,
            });
        }
        async quickSetupNextConfirm() {
          (this.uiElementStates.qsNextClicked =
            !this.uiElementStates.qsNextClicked),
            await _e.setToPredefined(
              this.object,
              this.uiElementStates.selectedPredefinedCalendar,
              this.uiElementStates.qsAddNotes
            ),
            this.updateApp();
        }
        quickSetupBackClick(e) {
          if (
            (e.preventDefault(),
            (this.uiElementStates.qsNextClicked =
              !this.uiElementStates.qsNextClicked),
            this.appWindow)
          ) {
            const e = this.appWindow.querySelector(".fsc-vc .fsc-ed"),
              t = this.appWindow.querySelector(".fsc-vc .fsc-fd");
            e && t && (pe(e, 500), pe(t, 500));
          }
        }
        quickSetupSaveClick(e) {
          e.preventDefault(),
            (this.uiElementStates.selectedPredefinedCalendar = ""),
            (this.uiElementStates.qsNextClicked = !1),
            (this.uiElementStates.qsAddNotes = !0);
          const t = Ze.GetSelector("quick-setup-predefined-calendar", {});
          (this.object.year.numericRepresentation = t.selectedDate.start.year),
            (this.object.year.visibleYear = t.selectedDate.start.year),
            (this.object.year.selectedYear = t.selectedDate.start.year),
            this.object.updateMonth(
              t.selectedDate.start.month,
              "current",
              !0,
              t.selectedDate.start.day
            ),
            (this._tabs[0].active = "generalSettings"),
            this.save(!1, !1).catch(P.error);
        }
        toggleShowAdvanced(e) {
          e.preventDefault();
          const t = e.currentTarget;
          if (t) {
            const e = t.closest(".fsc-gd");
            if (e) {
              const t = parseInt(e.getAttribute("data-index") || ""),
                a = e.getAttribute("data-type");
              !isNaN(t) &&
                t >= 0 &&
                ("month" === a && t < this.object.months.length
                  ? (this.object.months[t].showAdvanced =
                      !this.object.months[t].showAdvanced)
                  : "weekday" === a && t < this.object.weekdays.length
                  ? (this.object.weekdays[t].showAdvanced =
                      !this.object.weekdays[t].showAdvanced)
                  : "season" === a &&
                    t < this.object.seasons.length &&
                    (this.object.seasons[t].showAdvanced =
                      !this.object.seasons[t].showAdvanced),
                this.updateUIFromObject());
            }
          }
        }
        writeInputValuesToObjects() {
          this.appWindow &&
            ((this.globalConfiguration.secondsInCombatRound = Xe(
              "#scSecondsInCombatRound",
              6,
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.combatPauseRule = Ke(
              "#scCombatPauseClockRule",
              o.Active,
              this.appWindow
            )),
            (this.globalConfiguration.calendarsSameTimestamp = Qe(
              "#scCalendarsSameTimestamp",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.syncCalendars = Qe(
              "#scSyncCalendars",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.showNotesFolder = Qe(
              "#scShowNoteFolder",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.inGameChatTimestamp = Qe(
              "#scInGameChatTimestamp",
              !1,
              this.appWindow
            )),
            (this.clientSettings.theme = Ke(
              "#scTheme",
              i[0].key,
              this.appWindow
            )),
            (this.clientSettings.openOnLoad = Qe(
              "#scOpenOnLoad",
              !0,
              this.appWindow
            )),
            (this.clientSettings.openCompact = Qe(
              "#scOpenInCompact",
              !1,
              this.appWindow
            )),
            (this.clientSettings.rememberPosition = Qe(
              "#scRememberPos",
              !0,
              this.appWindow
            )),
            (this.clientSettings.rememberCompactPosition = Qe(
              "#scRememberCompactPos",
              !0,
              this.appWindow
            )),
            (this.clientSettings.noteReminderNotification = Ke(
              "#scNoteReminderNotification",
              I.whisper,
              this.appWindow
            )),
            (this.clientSettings.sideDrawerDirection = Ke(
              "#scSideDrawerDirection",
              "sc-right",
              this.appWindow
            )),
            (this.clientSettings.alwaysShowNoteList = Qe(
              "#scAlwaysOpenNoteList",
              !1,
              this.appWindow
            )),
            (this.clientSettings.persistentOpen = Qe(
              "#scPersistentOpen",
              !1,
              this.appWindow
            )),
            (this.clientSettings.compactViewScale =
              Xe('input[name="scCompactViewScale"]', 100, !1, this.appWindow) ||
              100),
            (this.globalConfiguration.permissions.viewCalendar.player = Qe(
              "#scCalendarVisibleP",
              !0,
              this.appWindow
            )),
            (this.globalConfiguration.permissions.viewCalendar.trustedPlayer =
              Qe("#scCalendarVisibleTP", !0, this.appWindow)),
            (this.globalConfiguration.permissions.viewCalendar.assistantGameMaster =
              Qe("#scCalendarVisibleAGM", !0, this.appWindow)),
            (this.globalConfiguration.permissions.addNotes.player = Qe(
              "#scAddNotesP",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.permissions.addNotes.trustedPlayer = Qe(
              "#scAddNotesTP",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.permissions.addNotes.assistantGameMaster =
              Qe("#scAddNotesAGM", !1, this.appWindow)),
            (this.globalConfiguration.permissions.changeDateTime.player = Qe(
              "#scChangeDateTimeP",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.permissions.changeDateTime.trustedPlayer =
              Qe("#scChangeDateTimeTP", !1, this.appWindow)),
            (this.globalConfiguration.permissions.changeDateTime.assistantGameMaster =
              Qe("#scChangeDateTimeAGM", !1, this.appWindow)),
            (this.globalConfiguration.permissions.reorderNotes.player = Qe(
              "#scReorderNotesP",
              !1,
              this.appWindow
            )),
            (this.globalConfiguration.permissions.reorderNotes.trustedPlayer =
              Qe("#scReorderNotesTP", !1, this.appWindow)),
            (this.globalConfiguration.permissions.reorderNotes.assistantGameMaster =
              Qe("#scReorderNotesAGM", !1, this.appWindow)),
            (this.globalConfiguration.permissions.changeActiveCalendar.player =
              Qe("#scChangeActiveCalP", !1, this.appWindow)),
            (this.globalConfiguration.permissions.changeActiveCalendar.trustedPlayer =
              Qe("#scChangeActiveCalTP", !1, this.appWindow)),
            (this.globalConfiguration.permissions.changeActiveCalendar.assistantGameMaster =
              Qe("#scChangeActiveCalAGM", !1, this.appWindow)),
            (this.uiElementStates.qsAddNotes = Qe(
              "#scQSAddNotes",
              !0,
              this.appWindow
            )),
            (this.object.name = Ke(
              "#scCalendarName",
              "New Calendar",
              this.appWindow
            )),
            (this.object.generalSettings.gameWorldTimeIntegration = Ke(
              "#scGameWorldTime",
              g.Mixed,
              this.appWindow
            )),
            (this.object.generalSettings.pf2eSync = Qe(
              "#scPF2ESync",
              !0,
              this.appWindow
            )),
            (this.object.generalSettings.dateFormat.date = Ke(
              "#scDateFormatsDate",
              "MMMM DD, YYYY",
              this.appWindow
            )),
            (this.object.generalSettings.dateFormat.time = Ke(
              "#scDateFormatsTime",
              "HH:mm:ss",
              this.appWindow
            )),
            (this.object.generalSettings.dateFormat.monthYear = Ke(
              "#scDateFormatsMonthYear",
              "MMMM YAYYYYYZ",
              this.appWindow
            )),
            (this.object.generalSettings.dateFormat.chatTime = Ke(
              "#scDateFormatsChatTime",
              "MMM DD, YYYY HH:mm",
              this.appWindow
            )),
            (this.object.generalSettings.compactViewOptions.controlLayout =
              (function (e, t = document) {
                return Array.from(
                  t.querySelectorAll(`input[name=${e}]:checked`)
                ).map((e) => e.value);
              })("scCompactControlLayout", this.appWindow)[0] || "full"),
            (this.object.year.numericRepresentation = Xe(
              "#scCurrentYear",
              0,
              !1,
              this.appWindow
            )),
            (this.object.year.prefix = Ke("#scYearPreFix", "", this.appWindow)),
            (this.object.year.postfix = Ke(
              "#scYearPostFix",
              "",
              this.appWindow
            )),
            (this.object.year.yearZero = Xe(
              "#scYearZero",
              0,
              !1,
              this.appWindow
            )),
            (this.object.year.yearNamingRule = Ke(
              "#scYearNameBehaviour",
              m.Default,
              this.appWindow
            )),
            (this.object.year.yearNamesStart = Xe(
              "#scYearNamesStart",
              0,
              !1,
              this.appWindow
            )),
            this.appWindow
              .querySelectorAll(".fsc-hd .fsc-id>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                !isNaN(t) &&
                  t >= 0 &&
                  t < this.object.year.yearNames.length &&
                  (this.object.year.yearNames[t] = Ke(
                    ".fsc-kd",
                    "New Named Year",
                    e
                  ));
              }),
            this.appWindow
              .querySelectorAll(".fsc-ld .fsc-md>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                if (!isNaN(t) && t >= 0 && t < this.object.months.length) {
                  const a = Ke(".fsc-nd", "New Month", e);
                  a !== this.object.months[t].name
                    ? (this.object.months[t].abbreviation = a.substring(0, 3))
                    : (this.object.months[t].abbreviation = Ke(
                        ".fsc-od",
                        "New Month",
                        e
                      )),
                    (this.object.months[t].description = Ke(".fsc-pd", "", e)),
                    (this.object.months[t].name = a);
                  const s = Xe(".fsc-qd", 1, !1, e);
                  s !== this.object.months[t].numberOfDays &&
                    ((this.object.months[t].numberOfDays = s),
                    this.object.year.leapYearRule.rule === h.None &&
                      (this.object.months[t].numberOfLeapYearDays = s),
                    this.updateMonthDays(this.object.months[t]));
                  const n = Qe(".fsc-rd", !1, e);
                  n !== this.object.months[t].intercalary &&
                    ((this.object.months[t].intercalary = n),
                    this.rebaseMonthNumbers());
                  const i = Qe(".fsc-sd", !1, e);
                  i !== this.object.months[t].intercalaryInclude &&
                    ((this.object.months[t].intercalaryInclude = i),
                    this.rebaseMonthNumbers()),
                    (this.object.months[t].numericRepresentationOffset = Xe(
                      ".fsc-td",
                      0,
                      !1,
                      e
                    )),
                    (this.object.months[t].startingWeekday = Xe(
                      ".fsc-ud",
                      null,
                      !1,
                      e
                    ));
                }
              }),
            (this.object.year.showWeekdayHeadings = Qe(
              "#scShowWeekdayHeaders",
              !0,
              this.appWindow
            )),
            (this.object.year.firstWeekday = Xe(
              "#scWeekdayFirstDay",
              0,
              !1,
              this.appWindow
            )),
            this.appWindow
              .querySelectorAll(".fsc-vd .fsc-q>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                if (!isNaN(t) && t >= 0 && t < this.object.weekdays.length) {
                  const a = Ke(".fsc-wd", "New Weekday", e);
                  a !== this.object.weekdays[t].name
                    ? ((this.object.weekdays[t].name = a),
                      (this.object.weekdays[t].abbreviation = a.substring(
                        0,
                        2
                      )))
                    : (this.object.weekdays[t].abbreviation = Ke(
                        ".fsc-xd",
                        "New",
                        e
                      )),
                    (this.object.weekdays[t].description = Ke(
                      ".fsc-yd",
                      "",
                      e
                    )),
                    (this.object.weekdays[t].restday = Qe(".fsc-zd", !1, e));
                }
              }),
            (this.object.year.leapYearRule.rule = Ke(
              "#scLeapYearRule",
              "none",
              this.appWindow
            )),
            (this.object.year.leapYearRule.customMod = Xe(
              "#scLeapYearCustomMod",
              0,
              !1,
              this.appWindow
            )),
            (this.object.year.leapYearRule.startingYear = Xe(
              "#scLeapStartingYear",
              0,
              !1,
              this.appWindow
            )),
            this.appWindow
              .querySelectorAll(".fsc-_d .fsc-md>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                if (!isNaN(t) && t >= 0 && t < this.object.months.length) {
                  const a = Xe(".fsc-ae", 0, !1, e);
                  a !== this.object.months[t].numberOfLeapYearDays &&
                    ((this.object.months[t].numberOfLeapYearDays = a),
                    this.updateMonthDays(this.object.months[t]));
                }
              }),
            this.appWindow
              .querySelectorAll(".fsc-be .fsc-ce>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                !isNaN(t) &&
                  t >= 0 &&
                  t < this.object.seasons.length &&
                  ((this.object.seasons[t].name = Ke(
                    ".fsc-p",
                    "New Season",
                    e
                  )),
                  (this.object.seasons[t].icon = Ke(".fsc-de", f.None, e)),
                  (this.object.seasons[t].color = Ke(".fsc-ee", "#FFFFFF", e)),
                  (this.object.seasons[t].description = Ke(".fsc-fe", "", e)));
              }),
            this.appWindow
              .querySelectorAll(".fsc-ge .fsc-da>.fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                !isNaN(t) &&
                  t >= 0 &&
                  t < this.object.moons.length &&
                  ((this.object.moons[t].name = Ke(".fsc-he", "New Moon", e)),
                  (this.object.moons[t].cycleLength = Xe(
                    ".fsc-ie",
                    29.53059,
                    !0,
                    e
                  )),
                  (this.object.moons[t].cycleDayAdjust = Xe(
                    ".fsc-je",
                    0,
                    !0,
                    e
                  )),
                  (this.object.moons[t].color = Ke(".fsc-ke", "#FFFFFF", e)),
                  (this.object.moons[t].firstNewMoon.yearReset = Ke(
                    ".fsc-le",
                    "none",
                    e
                  )),
                  (this.object.moons[t].firstNewMoon.year = Xe(
                    ".fsc-me",
                    0,
                    !1,
                    e
                  )),
                  (this.object.moons[t].firstNewMoon.yearX = Xe(
                    ".fsc-ne",
                    0,
                    !1,
                    e
                  )),
                  e
                    .querySelectorAll(".fsc-oe>.fsc-gd:not(.fsc-jd)")
                    .forEach((e) => {
                      const a = parseInt(e.getAttribute("data-index") || "");
                      !isNaN(a) &&
                        a >= 0 &&
                        a < this.object.moons[t].phases.length &&
                        ((this.object.moons[t].phases[a].name = Ke(
                          ".fsc-pe",
                          "New Phase",
                          e
                        )),
                        (this.object.moons[t].phases[a].singleDay = Qe(
                          ".fsc-qe",
                          !1,
                          e
                        )),
                        (this.object.moons[t].phases[a].icon = Ke(
                          ".fsc-re",
                          "new",
                          e
                        )));
                    }),
                  this.object.moons[t].updatePhaseLength());
              }),
            (this.object.time.hoursInDay = Xe(
              "#scHoursInDay",
              24,
              !1,
              this.appWindow
            )),
            (this.object.time.minutesInHour = Xe(
              "#scMinutesInHour",
              60,
              !1,
              this.appWindow
            )),
            (this.object.time.secondsInMinute = Xe(
              "#scSecondsInMinute",
              60,
              !1,
              this.appWindow
            )),
            (this.object.generalSettings.showClock = Qe(
              "#scShowClock",
              !0,
              this.appWindow
            )),
            (this.object.time.gameTimeRatio = Xe(
              "#scGameTimeRatio",
              1,
              !0,
              this.appWindow
            )),
            (this.object.time.updateFrequency = Xe(
              "#scTimeUpdateFrequency",
              1,
              !0,
              this.appWindow
            )),
            (this.object.time.unifyGameAndClockPause = Qe(
              "#scUnifyClockWithFoundryPause",
              !1,
              this.appWindow
            )),
            this.object.time.hoursInDay <= 0 &&
              (this.object.time.hoursInDay = 1),
            this.object.time.minutesInHour <= 0 &&
              (this.object.time.minutesInHour = 1),
            this.object.time.secondsInMinute <= 0 &&
              (this.object.time.secondsInMinute = 1),
            this.object.time.updateFrequency <= 0 &&
              (this.object.time.updateFrequency = 1),
            (this.object.generalSettings.noteDefaultVisibility = Qe(
              "#scDefaultPlayerVisibility",
              !0,
              this.appWindow
            )),
            (this.object.generalSettings.postNoteRemindersOnFoundryLoad = Qe(
              "#scPostNoteRemindersOnFoundryLoad",
              !0,
              this.appWindow
            )),
            this.appWindow
              .querySelectorAll(".fsc-se .fsc-te .fsc-gd:not(.fsc-jd)")
              .forEach((e) => {
                const t = parseInt(e.getAttribute("data-index") || "");
                !isNaN(t) &&
                  t >= 0 &&
                  t < this.object.noteCategories.length &&
                  ((this.object.noteCategories[t].name = Ke(
                    ".fsc-ue",
                    "New Category",
                    e
                  )),
                  (this.object.noteCategories[t].color = Ke(
                    ".fsc-ve",
                    "New Category",
                    e
                  )),
                  (this.object.noteCategories[t].textColor = le(
                    this.object.noteCategories[t].color
                  )));
              }));
        }
        updateUIFromObject() {
          if (this.appWindow) {
            const e = this.object.getCurrentDate();
            (this.uiElementStates.dateFormatExample = K(
              {
                year: e.year,
                month: e.month,
                day: e.day,
                hour: 13,
                minute: 36,
                seconds: 42,
              },
              this.object.generalSettings.dateFormat.date,
              this.object
            )),
              (this.uiElementStates.timeFormatExample = K(
                {
                  year: e.year,
                  month: e.month,
                  day: e.day,
                  hour: 13,
                  minute: 36,
                  seconds: 42,
                },
                this.object.generalSettings.dateFormat.time,
                this.object
              )),
              (this.uiElementStates.monthYearFormatExample = K(
                {
                  year: e.year,
                  month: e.month,
                  day: e.day,
                  hour: 13,
                  minute: 36,
                  seconds: 42,
                },
                this.object.generalSettings.dateFormat.monthYear,
                this.object
              )),
              (this.uiElementStates.chatFormatExample = K(
                {
                  year: e.year,
                  month: e.month,
                  day: e.day,
                  hour: 13,
                  minute: 36,
                  seconds: 42,
                },
                this.object.generalSettings.dateFormat.chatTime,
                this.object
              ));
            let t = this.appWindow
              .querySelector("#scDateFormatsDate")
              ?.closest(".form-group")
              ?.querySelector(".fsc-we");
            t &&
              (t.innerHTML = `<strong>${H.Localize("FSC.Example")}</strong>: ${
                this.uiElementStates.dateFormatExample
              }`),
              (t = this.appWindow
                .querySelector("#scDateFormatsTime")
                ?.closest(".form-group")
                ?.querySelector(".fsc-we")),
              t &&
                (t.innerHTML = `<strong>${H.Localize(
                  "FSC.Example"
                )}</strong>: ${this.uiElementStates.timeFormatExample}`),
              (t = this.appWindow
                .querySelector("#scDateFormatsMonthYear")
                ?.closest(".form-group")
                ?.querySelector(".fsc-we")),
              t &&
                (t.innerHTML = `<strong>${H.Localize(
                  "FSC.Example"
                )}</strong>: ${this.uiElementStates.monthYearFormatExample}`),
              (t = this.appWindow
                .querySelector("#scDateFormatsChatTime")
                ?.closest(".form-group")
                ?.querySelector(".fsc-we")),
              t &&
                (t.innerHTML = `<strong>${H.Localize(
                  "FSC.Example"
                )}</strong>: ${this.uiElementStates.chatFormatExample}`),
              fe(
                "#scYearNamesStart",
                this.object.year.yearNamingRule !== m.Random
              );
            for (let e = 0; e < this.object.months.length; e++) {
              const t = this.appWindow.querySelector(
                `.fsc-ld .fsc-md>.fsc-gd[data-index="${e}"]`
              );
              if (t) {
                this.showAdvancedSection(t, this.object.months[e].showAdvanced),
                  fe(".fsc-sd", this.object.months[e].intercalary, t);
                const a = t.querySelector(".fsc-xe");
                a &&
                  (a.innerText =
                    this.object.months[e].numericRepresentation < 0
                      ? "IC"
                      : this.object.months[e].numericRepresentation.toString());
              }
            }
            for (let e = 0; e < this.object.weekdays.length; e++) {
              const t = this.appWindow.querySelector(
                `.fsc-vd .fsc-q>.fsc-gd[data-index="${e}"]`
              );
              t &&
                this.showAdvancedSection(
                  t,
                  this.object.weekdays[e].showAdvanced
                );
            }
            fe(
              "#scLeapYearCustomMod",
              this.object.year.leapYearRule.rule === h.Custom
            );
            const a = this.appWindow.querySelector("#scLeapYearMonthList");
            a &&
              ((a.classList.contains("fsc-d") &&
                this.object.year.leapYearRule.rule !== h.None) ||
              (a.classList.contains("fsc-c") &&
                this.object.year.leapYearRule.rule === h.None)
                ? pe(a, 400)
                : this.object.year.leapYearRule.rule !== h.None
                ? (a.classList.remove("fsc-d"), a.classList.add("fsc-c"))
                : (a.classList.add("fsc-d"), a.classList.remove("fsc-c")));
            for (let e = 0; e < this.object.seasons.length; e++) {
              const t = this.appWindow.querySelector(
                `.fsc-be .fsc-ce>.fsc-gd[data-index="${e}"]`
              );
              t &&
                this.showAdvancedSection(
                  t,
                  this.object.seasons[e].showAdvanced
                );
            }
            for (let e = 0; e < this.object.moons.length; e++) {
              const t = this.appWindow.querySelector(
                `.fsc-ge .fsc-da>.fsc-gd[data-index="${e}"]`
              );
              if (t) {
                fe(
                  ".fsc-me",
                  this.object.moons[e].firstNewMoon.yearReset === y.None,
                  t
                ),
                  fe(
                    ".fsc-ne",
                    this.object.moons[e].firstNewMoon.yearReset === y.XYears,
                    t
                  );
                for (let a = 0; a < this.object.moons[e].phases.length; a++) {
                  const s = t.querySelector(
                    `.fsc-oe>.fsc-gd[data-index="${a}"] .fsc-ye`
                  );
                  s &&
                    (s.innerText = `${
                      this.object.moons[e].phases[a].length
                    } ${H.Localize("FSC.Days")}`);
                }
              }
            }
          }
        }
        showAdvancedSection(e, t) {
          const a = e.querySelector(".fsc-bd"),
            s = e.querySelector(".fsc-ze");
          a &&
            s &&
            (((s.classList.contains("fsc-d") && t) ||
              (s.classList.contains("fsc-c") && !t)) &&
              pe(s, 400),
            (a.innerHTML = t
              ? `<i class="fa fa-chevron-up"></i><span>${H.Localize(
                  "FSC.HideAdvanced"
                )}</span>`
              : `<i class="fa fa-chevron-down"></i><span>${H.Localize(
                  "FSC.ShowAdvanced"
                )}</span>`));
        }
        dateFormatTableClick() {
          if (
            ((this.uiElementStates.dateFormatTableExpanded =
              !this.uiElementStates.dateFormatTableExpanded),
            this.appWindow)
          ) {
            const e = this.appWindow.querySelector(".fsc-_e .fsc-af .fsc-bf");
            e &&
              (e.style.display = this.uiElementStates.dateFormatTableExpanded
                ? "block"
                : "none");
            const t = this.appWindow.querySelector(
              ".fsc-_e .fsc-af .fsc-cd .fa"
            );
            t &&
              (t.className =
                "fa " +
                (this.uiElementStates.dateFormatTableExpanded
                  ? "fa-chevron-up"
                  : "fa-chevron-down"));
          }
        }
        rebaseMonthNumbers() {
          let e = 0,
            t = 0;
          for (let a = 0; a < this.object.months.length; a++) {
            const s = this.object.months[a];
            s.intercalary
              ? (t++, (s.numericRepresentation = -1 * t))
              : ((s.numericRepresentation = e + 1),
                (e = s.numericRepresentation));
          }
        }
        addToTable(e) {
          e.preventDefault();
          const t = e.currentTarget;
          if (t) {
            switch (t.getAttribute("data-type")) {
              case "month":
                this.object.months.push(
                  new $e("New Month", this.object.months.length + 1, 0, 30)
                ),
                  this.rebaseMonthNumbers();
                break;
              case "weekday":
                this.object.weekdays.push(
                  new qe(this.object.weekdays.length + 1, "New Weekday")
                );
                break;
              case "season":
                this.object.seasons.push(new Ge("New Season", 1, 1));
                break;
              case "moon": {
                const e = new ze("Moon", 29.53059);
                e.firstNewMoon = {
                  yearReset: y.None,
                  yearX: 0,
                  year: 0,
                  month: 1,
                  day: 1,
                };
                const t = Number(((e.cycleLength - 4) / 4).toPrecision(5));
                (e.phases = [
                  {
                    name: H.Localize("FSC.Moon.Phase.New"),
                    length: 1,
                    icon: f.NewMoon,
                    singleDay: !0,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.WaxingCrescent"),
                    length: t,
                    icon: f.WaxingCrescent,
                    singleDay: !1,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.FirstQuarter"),
                    length: 1,
                    icon: f.FirstQuarter,
                    singleDay: !0,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.WaxingGibbous"),
                    length: t,
                    icon: f.WaxingGibbous,
                    singleDay: !1,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.Full"),
                    length: 1,
                    icon: f.Full,
                    singleDay: !0,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.WaningGibbous"),
                    length: t,
                    icon: f.WaningGibbous,
                    singleDay: !1,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.LastQuarter"),
                    length: 1,
                    icon: f.LastQuarter,
                    singleDay: !0,
                  },
                  {
                    name: H.Localize("FSC.Moon.Phase.WaningCrescent"),
                    length: t,
                    icon: f.WaningCrescent,
                    singleDay: !1,
                  },
                ]),
                  this.object.moons.push(e);
                break;
              }
              case "moon-phase": {
                const t = e.currentTarget.getAttribute("data-moon-index");
                if (t) {
                  const e = parseInt(t);
                  !isNaN(e) &&
                    e < this.object.moons.length &&
                    (this.object.moons[e].phases.push({
                      name: "Phase",
                      length: 1,
                      icon: f.NewMoon,
                      singleDay: !1,
                    }),
                    this.object.moons[e].updatePhaseLength());
                }
                break;
              }
              case "year-name":
                this.object.year.yearNames.push("New Named Year");
                break;
              case "note-category":
                this.object.noteCategories.push({
                  id: U(),
                  name: "New Category",
                  color: "#b13737 ",
                  textColor: "#ffffff",
                });
            }
            this.updateApp();
          }
        }
        removeFromTable(e) {
          e.preventDefault();
          const t = e.currentTarget;
          if (t) {
            const a = t.getAttribute("data-type"),
              s = t.closest(".fsc-gd"),
              n = t.getAttribute("data-index");
            if (s && !n) {
              const e = s.getAttribute("data-index");
              if (e) {
                const s = parseInt(e);
                if (!isNaN(s)) {
                  switch (a) {
                    case "month":
                      if (s < this.object.months.length) {
                        this.object.months.splice(s, 1),
                          0 === this.object.months.length &&
                            this.object.months.push(
                              new $e("New Month", 1, 0, 30)
                            );
                        for (let e = 0; e < this.object.months.length; e++)
                          this.object.months[e].numericRepresentation = e + 1;
                        this.rebaseMonthNumbers();
                      }
                      break;
                    case "weekday":
                      if (s < this.object.weekdays.length) {
                        this.object.weekdays.splice(s, 1);
                        for (let e = 0; e < this.object.weekdays.length; e++)
                          this.object.weekdays[e].numericRepresentation = e + 1;
                      }
                      break;
                    case "season":
                      s < this.object.seasons.length &&
                        this.object.seasons.splice(s, 1);
                      break;
                    case "moon":
                      s < this.object.moons.length &&
                        this.object.moons.splice(s, 1);
                      break;
                    case "moon-phase": {
                      const e = t.getAttribute("data-moon-index");
                      if (e) {
                        const t = parseInt(e);
                        !isNaN(t) &&
                          t < this.object.moons.length &&
                          s < this.object.moons[t].phases.length &&
                          (this.object.moons[t].phases.splice(s, 1),
                          this.object.moons[t].updatePhaseLength());
                      }
                      break;
                    }
                    case "year-name":
                      s < this.object.year.yearNames.length &&
                        this.object.year.yearNames.splice(s, 1);
                      break;
                    case "note-category":
                      s < this.object.noteCategories.length &&
                        this.object.noteCategories.splice(s, 1);
                  }
                  this.updateApp();
                }
              }
            } else if (n && "all" === n) {
              switch (a) {
                case "month":
                  this.object.months = [new $e("New Month", 1, 0, 30)];
                  break;
                case "weekday":
                  this.object.weekdays = [];
                  break;
                case "season":
                  this.object.seasons = [];
                  break;
                case "moon":
                  this.object.moons = [];
                  break;
                case "moon-phase": {
                  const t = e.currentTarget.getAttribute("data-moon-index");
                  if (t) {
                    const e = parseInt(t);
                    !isNaN(e) &&
                      e < this.object.moons.length &&
                      (this.object.moons[e].phases = []);
                  }
                  break;
                }
                case "year-name":
                  this.object.year.yearNames = [];
                  break;
                case "note-category":
                  this.object.noteCategories = [];
              }
              this.updateApp();
            }
          }
        }
        dateSelectorChange(e, t, a) {
          if (t === T.seasonStartingDate) {
            const t = this.object.seasons.find((t) => t.id === e);
            if (t) {
              const e =
                  !a.startDate.month || a.startDate.month < 0
                    ? 0
                    : a.startDate.month,
                s =
                  !a.startDate.day || a.startDate.day < 0 ? 0 : a.startDate.day;
              (t.startingMonth = e), (t.startingDay = s);
            }
          } else if (t === T.seasonSunriseSunsetTime) {
            const t = this.object.seasons.find((t) => t.id === e);
            if (t) {
              const e = R.getActiveCalendar();
              (t.sunriseTime =
                (a.startDate.hour || 0) *
                  e.time.minutesInHour *
                  e.time.secondsInMinute +
                (a.startDate.minute || 0) * e.time.secondsInMinute),
                (t.sunsetTime =
                  (a.endDate.hour || 0) *
                    e.time.minutesInHour *
                    e.time.secondsInMinute +
                  (a.endDate.minute || 0) * e.time.secondsInMinute);
            }
          } else if (t === T.moonFirstNewMoonDate) {
            const t = this.object.moons.find((t) => t.id === e);
            t &&
              ((t.firstNewMoon.month =
                !a.startDate.month || a.startDate.month < 0
                  ? 0
                  : a.startDate.month),
              (t.firstNewMoon.day =
                !a.startDate.day || a.startDate.day < 0 ? 0 : a.startDate.day));
          }
        }
        updateMonthDays(e) {
          e.numberOfDays < 0 && (e.numberOfDays = 0),
            e.numberOfLeapYearDays < 0 &&
              (e.numberOfLeapYearDays = e.numberOfDays);
          const t =
              e.numberOfLeapYearDays > e.numberOfDays
                ? e.numberOfLeapYearDays
                : e.numberOfDays,
            a = e.getDay();
          let s = null;
          a &&
            (s =
              a.numericRepresentation >= e.numberOfDays
                ? 1
                : a.numericRepresentation),
            (e.days = []),
            e.populateDays(t, s);
        }
        confirmationDialog(e, t, a) {
          let s = "",
            n = "";
          "overwrite" === e
            ? ((s = H.Localize("FSC.ApplyPredefined")),
              (n = H.Localize("FSC.ApplyPredefinedText").replace(
                "${CAL_NAME}",
                a.name
              )))
            : "remove-calendar" === e &&
              ((s = H.Localize("FSC.RemoveCalendar")),
              (n = H.Localize("FSC.RemoveCalendarConfirmText").replace(
                "${CAL_NAME}",
                a.name
              )));
          new Dialog({
            title: s,
            content: n,
            buttons: {
              yes: {
                icon: '<i class="fas fa-check"></i>',
                label: H.Localize("FSC.Confirm"),
                callback: this.confirmationDialogYes.bind(this, t, a),
              },
              no: {
                icon: '<i class="fas fa-times"></i>',
                label: H.Localize("FSC.Cancel"),
              },
            },
            default: "no",
          }).render(!0);
        }
        async confirmationDialogYes(e, t) {
          "predefined" === e
            ? this.quickSetupNextConfirm()
            : "remove-calendar" === e && this.removeCalendarConfirm(t);
        }
        async saveClick(e, t) {
          t.preventDefault(), await this.save(e);
        }
        async save(e, t = !0) {
          t && this.writeInputValuesToObjects(),
            H.IsGm()
              ? (R.mergeClonedCalendars(),
                G.save(this.globalConfiguration, this.clientSettings),
                await R.getActiveCalendar().syncTime(!0))
              : G.save(null, this.clientSettings),
            e
              ? this.closeApp()
              : ((this.calendars = R.cloneCalendars()),
                (this.object = this.calendars[0]),
                this.updateApp());
        }
        exportCalendar(e) {
          e.preventDefault();
          const a = {};
          this.appWindow
            ?.querySelectorAll(".fsc-cf .fsc-df input")
            .forEach((e) => {
              const t = e.getAttribute("data-id");
              t && (a[t] = e.checked);
            });
          const s = {
            exportVersion: 2,
            globalConfig: a.global
              ? {
                  secondsInCombatRound:
                    this.globalConfiguration.secondsInCombatRound,
                  calendarsSameTimestamp:
                    this.globalConfiguration.calendarsSameTimestamp,
                  syncCalendars: this.globalConfiguration.syncCalendars,
                  showNotesFolder: this.globalConfiguration.showNotesFolder,
                }
              : {},
            permissions: a.permissions
              ? this.globalConfiguration.permissions.toConfig()
              : {},
            calendars: [],
            notes: {},
          };
          for (let e = 0; e < this.calendars.length; e++) {
            const n = this.calendars[e].toConfig(),
              i = n.id.replace("_temp", "");
            a[`${n.id}-notes`] &&
              ((s.notes[i] = []),
              game.journal?.forEach((e) => {
                const a = e.getFlag(t, "noteData");
                a &&
                  a.calendarId &&
                  a.calendarId === i &&
                  s.notes[i].push(e.toObject());
              })),
              a[n.id] && ((n.id = i), s.calendars.push(n));
          }
          (0, He.saveAs)(
            new Blob([JSON.stringify(s)], { type: "application/json" }),
            "simple-calendar-export.json"
          );
        }
        importCalendarFileChange(e) {
          const t = e.target;
          if (
            t &&
            t.files &&
            t.files.length &&
            "application/json" === t.files[0].type
          ) {
            this.appWindow
              ?.querySelector(".fsc-cf .fsc-ef")
              ?.classList.remove("fsc-ia");
            const e = new FileReader();
            (e.onprogress = this.importCalendarProgress.bind(this)),
              (e.onload = this.importCalendarRead.bind(this)),
              e.readAsText(t.files[0]);
          }
        }
        importCalendarProgress(e) {
          const t = this.appWindow?.querySelector(".fsc-cf .fsc-ef .fsc-ff");
          t && (t.style.width = (e.loaded / e.total) * 100 + "%");
        }
        importCalendarRead(e) {
          this.importCalendarProgress(e),
            this.appWindow
              ?.querySelector(".fsc-cf .fsc-ef")
              ?.classList.add("fsc-ia");
          const t = e.target;
          if (t && t.result && this.appWindow) {
            const e = this.appWindow.querySelector(".fsc-cf .fsc-gf .fsc-hf");
            if (e) {
              let a = `<p>${H.Localize(
                "FSC.Configuration.ImportExport.ImportDetailsText"
              )}</p><ul class="fsc-df">`;
              const s = JSON.parse(t.result.toString());
              if (!Object.prototype.hasOwnProperty.call(s, "exportVersion")) {
                if (
                  ((s.calendars = [{ id: "default", name: "Default" }]),
                  (s.globalConfig = {}),
                  Object.prototype.hasOwnProperty.call(s, "generalSettings") &&
                    (Object.prototype.hasOwnProperty.call(
                      s.generalSettings,
                      "permissions"
                    ) &&
                      ((s.permissions = s.permissions || {}),
                      (s.permissions.viewCalendar =
                        s.generalSettings.permissions.viewCalendar),
                      (s.permissions.addNotes =
                        s.generalSettings.permissions.addNotes),
                      (s.permissions.reorderNotes =
                        s.generalSettings.permissions.reorderNotes),
                      (s.permissions.changeDateTime =
                        s.generalSettings.permissions.changeDateTime),
                      delete s.generalSettings.permissions),
                    (s.calendars[0].general = s.generalSettings),
                    delete s.generalSettings),
                  Object.prototype.hasOwnProperty.call(s, "currentDate") &&
                    (s.currentDate.day--,
                    s.currentDate.month--,
                    (s.calendars[0].currentDate = s.currentDate),
                    delete s.currentDate),
                  Object.prototype.hasOwnProperty.call(s, "leapYearSettings") &&
                    ((s.calendars[0].leapYear = s.leapYearSettings),
                    delete s.leapYearSettings),
                  Object.prototype.hasOwnProperty.call(s, "monthSettings") &&
                    ((s.calendars[0].months = s.monthSettings),
                    delete s.monthSettings),
                  Object.prototype.hasOwnProperty.call(s, "moonSettings"))
                ) {
                  for (let e = 0; e < s.moonSettings.length; e++)
                    s.moonSettings[e].firstNewMoon.month--,
                      s.moonSettings[e].firstNewMoon.day--;
                  (s.calendars[0].moons = s.moonSettings),
                    delete s.moonSettings;
                }
                if (
                  (Object.prototype.hasOwnProperty.call(s, "noteCategories") &&
                    ((s.calendars[0].noteCategories = s.noteCategories),
                    delete s.noteCategories),
                  Object.prototype.hasOwnProperty.call(s, "seasonSettings"))
                ) {
                  for (let e = 0; e < s.seasonSettings.length; e++)
                    s.seasonSettings[e].startingMonth--,
                      s.seasonSettings[e].startingDay--;
                  (s.calendars[0].seasons = s.seasonSettings),
                    delete s.seasonSettings;
                }
                Object.prototype.hasOwnProperty.call(s, "timeSettings") &&
                  ((s.globalConfig.secondsInCombatRound =
                    s.timeSettings.secondsInCombatRound),
                  delete s.timeSettings.secondsInCombatRound,
                  (s.calendars[0].time = s.timeSettings),
                  delete s.timeSettings),
                  Object.prototype.hasOwnProperty.call(s, "weekdaySettings") &&
                    ((s.calendars[0].weekdays = s.weekdaySettings),
                    delete s.weekdaySettings),
                  Object.prototype.hasOwnProperty.call(s, "yearSettings") &&
                    ((s.calendars[0].year = s.yearSettings),
                    delete s.yearSettings);
              }
              if (
                (Object.prototype.hasOwnProperty.call(s, "globalConfig") &&
                  !F(s.globalConfig) &&
                  (a += `<li><label><input type="checkbox" data-id="global" checked /><span class="fa fa-cog"></span>&nbsp;${H.Localize(
                    "FSC.Configuration.Global.Title"
                  )}</label></li>`),
                Object.prototype.hasOwnProperty.call(s, "permissions") &&
                  !F(s.permissions) &&
                  (a += `<li><label><input type="checkbox" data-id="permissions" checked /><span class="fa fa-key"></span>&nbsp;${H.Localize(
                    "Permissions"
                  )}</label></li>`),
                Object.prototype.hasOwnProperty.call(s, "calendars") &&
                  s.calendars.length)
              )
                for (let e = 0; e < s.calendars.length; e++) {
                  a += `<li><label><input type="checkbox" data-id="${
                    s.calendars[e].id
                  }" checked /><strong><span class="fa fa-calendar"></span> ${
                    s.calendars[e].name
                  }</strong>: ${H.Localize(
                    "FSC.CalendarConfiguration"
                  )}</label><label>${H.Localize(
                    "FSC.ImportInto"
                  )}:&nbsp;<select data-for-cal="${s.calendars[e].id}">`;
                  const t = this.calendars.findIndex(
                    (t) => 0 === t.id.indexOf(s.calendars[e].id)
                  );
                  a += `<option value="new" ${
                    -1 === t ? "selected" : ""
                  }>${H.Localize("FSC.NewCalendar")}</option>`;
                  for (let e = 0; e < this.calendars.length; e++)
                    a += `<option value="${this.calendars[e].id}" ${
                      t === e ? "selected" : ""
                    }>${this.calendars[e].name}</option>`;
                  (a += "</select></label></li>"),
                    Object.prototype.hasOwnProperty.call(s, "notes") &&
                      Object.prototype.hasOwnProperty.call(
                        s.notes,
                        s.calendars[e].id
                      ) &&
                      (a += `<li><label><input type="checkbox" data-id="${
                        s.calendars[e].id
                      }-notes" checked /><strong><span class="fa fa-sticky-note"></span> ${
                        s.calendars[e].name
                      }</strong>: ${H.Localize(
                        "FSC.CalendarNotes"
                      )}</label></label></li>`);
                }
              if (Object.hasOwn(s, "notes"))
                for (const e in s.notes)
                  if (Object.hasOwn(s.notes, e)) {
                    (a += `<li><label><input type="checkbox" data-id="${e}-notes" checked /><strong><span class="fa fa-sticky-note"></span> ${
                      this.calendars.find((t) => 0 === t.id.indexOf(e))?.name ||
                      e
                    }</strong>: ${H.Localize(
                      "FSC.CalendarNotes"
                    )}</label></label>`),
                      (a += `<label>${H.Localize(
                        "FSC.ImportInto"
                      )}:&nbsp;<select data-for-cal="">`);
                    const t = this.calendars.findIndex(
                      (t) => 0 === t.id.indexOf(e)
                    );
                    for (let e = 0; e < this.calendars.length; e++)
                      a += `<option value="${this.calendars[e].id}" ${
                        t === e ? "selected" : ""
                      }>${this.calendars[e].name}</option>`;
                    a += "</select></label></li>";
                  }
              (a += `</ul><button class="fsc-yb fsc-uc" id="importCalendar"><i class="fa fa-file-import"></i> ${H.Localize(
                "FSC.Import"
              )}</button>`),
                (e.innerHTML = a),
                e
                  .querySelector("#importCalendar")
                  ?.addEventListener(
                    "click",
                    this.importCalendarSave.bind(this, s)
                  );
            }
          }
        }
        async importCalendarSave(e, a) {
          if ((a.preventDefault(), this.appWindow)) {
            if (
              (Object.prototype.hasOwnProperty.call(e, "globalConfig") &&
                !F(e.globalConfig) &&
                Qe(
                  '.fsc-cf .fsc-gf .fsc-hf input[data-id="global"]',
                  !0,
                  this.appWindow
                ) &&
                ((this.globalConfiguration.secondsInCombatRound =
                  e.globalConfig.secondsInCombatRound),
                (this.globalConfiguration.calendarsSameTimestamp =
                  e.globalConfig.calendarsSameTimestamp),
                (this.globalConfiguration.syncCalendars =
                  e.globalConfig.syncCalendars),
                (this.globalConfiguration.showNotesFolder =
                  e.globalConfig.showNotesFolder)),
              Object.prototype.hasOwnProperty.call(e, "permissions") &&
                !F(e.permissions) &&
                Qe(
                  '.fsc-cf .fsc-gf .fsc-hf input[data-id="permissions"]',
                  !0,
                  this.appWindow
                ) &&
                this.globalConfiguration.permissions.loadFromSettings(
                  e.permissions
                ),
              Object.prototype.hasOwnProperty.call(e, "calendars") &&
                e.calendars.length)
            ) {
              await z.createJournalDirectory();
              for (let a = 0; a < e.calendars.length; a++) {
                const s = e.calendars[a].id;
                let n = "";
                if (
                  Qe(
                    `.fsc-cf .fsc-gf .fsc-hf input[data-id="${e.calendars[a].id}"]`,
                    !0,
                    this.appWindow
                  )
                ) {
                  const t = Ke(
                      `.fsc-cf .fsc-gf .fsc-hf select[data-for-cal="${e.calendars[a].id}"]`,
                      "new",
                      this.appWindow
                    ),
                    s = this.calendars.find((e) => e.id === t);
                  if ((delete e.calendars[a].id, s))
                    s.loadFromSettings(e.calendars[a]);
                  else {
                    const t = R.addTempCalendar(e.calendars[a].name);
                    t.loadFromSettings(e.calendars[a]), (n = t.id);
                  }
                }
                if (
                  Object.prototype.hasOwnProperty.call(e, "notes") &&
                  Object.prototype.hasOwnProperty.call(e.notes, s) &&
                  Qe(
                    `.fsc-cf .fsc-gf .fsc-hf input[data-id="${s}-notes"]`,
                    !0,
                    this.appWindow
                  )
                ) {
                  const a = Ke(
                      `.fsc-cf .fsc-gf .fsc-hf select[data-for-cal="${s}"]`,
                      "new",
                      this.appWindow
                    ),
                    i = this.calendars.find((e) => e.id === a),
                    o = (n || i?.id || s).replace("_temp", "");
                  for (let a = 0; a < e.notes[s].length; a++) {
                    const n = e.notes[s][a],
                      i = !(n.flags[t].noteData.calendarId === o);
                    (n.flags[t].noteData.calendarId = o),
                      (n.folder = z.noteDirectory?.id),
                      i || !game.journal?.has(n._id)
                        ? await JournalEntry.create(n, { keepId: !i })
                        : game.journal?.get(n._id)?.update(n);
                  }
                }
              }
            }
            (this._tabs[0].active = "generalSettings"),
              this.save(!1, !1).catch(P.error);
          }
        }
      }
      class MainApp extends FormApplication {
        static appWindowId = "fsc-if";
        get activeCalendar() {
          return R.getActiveCalendar();
        }
        get visibleCalendar() {
          return R.getVisibleCalendar();
        }
        clockClass = "stopped";
        opening = !0;
        uiElementStates = {
          "fsc-df": !1,
          "fsc-jf": !1,
          "fsc-kf": !1,
          compactView: !1,
          dateTimeUnitOpen: !1,
          dateTimeUnit: j.Day,
          dateTimeUnitText: "FSC.Day",
          searchOptionsOpen: !1,
          calendarListOpen: !1,
          primaryCheckRunning: !0,
          cvReverseTime: !1,
          cvLargerSteps: !1,
        };
        search = {
          term: "",
          results: [],
          options: {
            fields: {
              date: !0,
              title: !0,
              details: !0,
              author: !0,
              categories: !0,
            },
          },
        };
        addonButtons = [];
        constructor() {
          super({});
        }
        initialize() {
          (this.uiElementStates["fsc-jf"] = H.GetBooleanSettings(
            n.AlwaysShowNoteList
          )),
            document.addEventListener("keydown", this.keyClick.bind(this)),
            document.addEventListener("keyup", this.keyClick.bind(this));
        }
        static get defaultOptions() {
          const e = super.defaultOptions;
          return (
            (e.template =
              "modules/foundryvtt-simple-calendar/templates/main.html"),
            (e.title = "FSC.Title"),
            (e.classes = ["simple-calendar"]),
            (e.id = this.appWindowId),
            (e.resizable = !1),
            e
          );
        }
        getData() {
          const e = {
            ...super.getData(),
            compactViewDisplay: {
              currentSeasonName: "",
              currentSeasonIcon: "",
              selectedDayMoons: [],
              dateTimeControlDisplay:
                this.activeCalendar.generalSettings.compactViewOptions
                  .controlLayout,
            },
            mainViewDisplay: {
              calendarList: [],
              search: this.search,
              showChangeCalendarControls: !1,
              addonButtons: "",
              addonButtonSidePanels: "",
            },
            addNotes: be(game.user, G.globalConfiguration.permissions.addNotes),
            activeCalendarId: this.activeCalendar.id,
            calendar: this.visibleCalendar.toTemplate(),
            changeDateTime: be(
              game.user,
              G.globalConfiguration.permissions.changeDateTime
            ),
            clockClass: this.clockClass,
            isGM: H.IsGm(),
            isPrimary: G.primary,
            message: "",
            uiElementStates: this.uiElementStates,
            reorderNotes: be(
              game.user,
              G.globalConfiguration.permissions.reorderNotes
            ),
            showClock: this.visibleCalendar.generalSettings.showClock,
            showDateControls: !1,
            showSetCurrentDate: !1,
            showTimeControls: !1,
            dateTimeFullDisplay: {
              unit: this.uiElementStates.dateTimeUnit,
              unitText: this.uiElementStates.dateTimeUnitText,
              dateTimeUnitOpen: this.uiElementStates.dateTimeUnitOpen,
            },
            sideDrawerDirection: H.GetStringSettings(n.NoteListOpenDirection),
          };
          if (this.activeCalendar.id === this.visibleCalendar.id) {
            (e.showDateControls =
              this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
              g.ThirdParty),
              (e.showTimeControls =
                this.activeCalendar.generalSettings.showClock &&
                this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
                  g.ThirdParty);
            const t = this.visibleCalendar.getMonthAndDayIndex("selected");
            void 0 !== t.month &&
              void 0 !== t.day &&
              (this.visibleCalendar.months[t.month].days[t.day].current ||
                (e.showSetCurrentDate = be(
                  game.user,
                  G.globalConfiguration.permissions.changeDateTime
                )));
          } else
            e.changeDateTime &&
              (e.message = H.Localize("FSC.ViewingDifferentCalendar"));
          if (this.uiElementStates.compactView) {
            const t = this.visibleCalendar.getCurrentSeason();
            if (
              ((e.compactViewDisplay.currentSeasonName = t.name),
              (e.compactViewDisplay.currentSeasonIcon = de(
                t.icon,
                t.color,
                t.color
              )),
              "" === e.compactViewDisplay.currentSeasonIcon &&
                (e.compactViewDisplay.currentSeasonIcon = `<span style="color:${
                  t.color
                };">${t.name.slice(0, 2)}</span>`),
              this.visibleCalendar.moons.length)
            )
              for (let t = 0; t < this.visibleCalendar.moons.length; t++) {
                const a = this.visibleCalendar.moons[t].getMoonPhase(
                  this.visibleCalendar,
                  "current"
                );
                e.compactViewDisplay.selectedDayMoons.push({
                  name: this.visibleCalendar.moons[t].name,
                  color: this.visibleCalendar.moons[t].color,
                  phase: a,
                  iconSVG: de(
                    a.icon,
                    "#000000",
                    this.visibleCalendar.moons[t].color
                  ),
                });
              }
          } else {
            for (let t = 0; t < this.addonButtons.length; t++)
              (e.mainViewDisplay.addonButtons += `<button class="fsc-yb fsc-lf fsc-mf ${this.addonButtons[t].customClass}" data-sc-abi="${t}" data-tooltip="${this.addonButtons[t].title}"><span class="fa ${this.addonButtons[t].iconClass}"></span></button>`),
                this.addonButtons[t].showSidePanel &&
                  (void 0 === this.uiElementStates[`fsc-nf${t}`] &&
                    (this.uiElementStates[`fsc-nf${t}`] = !1),
                  (e.mainViewDisplay.addonButtonSidePanels += `<div class="fsc-of fsc-nf${t} fsc-pf ${
                    e.sideDrawerDirection
                  } ${
                    this.uiElementStates[`fsc-nf${t}`] ? "fsc-c" : "fsc-d"
                  }" data-sc-abi="${t}"></div>`));
            (e.mainViewDisplay.showChangeCalendarControls = be(
              game.user,
              G.globalConfiguration.permissions.changeActiveCalendar
            )),
              (e.mainViewDisplay.calendarList = R.getAllCalendars().map((e) => {
                const t = e.getCurrentDate(),
                  a = e.time.getCurrentTime();
                return {
                  id: e.id,
                  name: e.name,
                  date: K(
                    {
                      year: t.year,
                      month: t.month,
                      day: t.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    e.generalSettings.dateFormat.date,
                    e
                  ),
                  time: e.generalSettings.showClock
                    ? K(
                        {
                          year: 0,
                          month: 1,
                          day: 1,
                          hour: a.hour,
                          minute: a.minute,
                          seconds: a.seconds,
                        },
                        e.generalSettings.dateFormat.time,
                        e
                      )
                    : "",
                  clockRunning: e.timeKeeper.getStatus() === S.Started,
                };
              }));
          }
          return e;
        }
        render(e, t) {
          if (
            (void 0 === e && (e = !0),
            be(game.user, G.globalConfiguration.permissions.viewCalendar))
          ) {
            this.visibleCalendar.timeKeeper.getStatus(), S.Started;
            const a = E({}, t);
            this.opening &&
              ((this.uiElementStates.compactView = H.GetBooleanSettings(
                n.OpenCompact
              )),
              (this.opening = !1));
            const s = G.clientSettings.persistentOpen ? "fsc-qf" : "";
            let i = "";
            return (
              this.uiElementStates.compactView &&
                (i = `sc-scale-${G.clientSettings.compactViewScale}`),
              (a.classes = ["simple-calendar", he(), s, i]),
              super.render(e, a)
            );
          }
        }
        sceneControlButtonClick() {
          G.clientSettings.persistentOpen ? this.toggleWindow() : this.render();
        }
        close(e) {
          if (!G.clientSettings.persistentOpen)
            return (this.opening = !0), super.close(e);
          if (game.release.generation < 12) {
            if (Object.keys(ui.windows).length > 1)
              return (
                Object.values(ui.windows).forEach((e) => {
                  e.id !== this.id && e.close();
                }),
                Promise.resolve()
              );
            if (
              H.IsGm() &&
              canvas.activeLayer &&
              canvas.activeLayer?.controlled.length
            )
              return (
                canvas.activeLayer?.preview?.children.length ||
                  canvas.activeLayer?.releaseAll(),
                Promise.resolve()
              );
            ui.menu?.toggle(), canvas.ready && canvas.fog.save();
          }
          return Promise.resolve();
        }
        toggleCompactView(e) {
          e.preventDefault(),
            e.stopPropagation(),
            (this.uiElementStates.compactView =
              !this.uiElementStates.compactView),
            this.visibleCalendar.resetMonths("selected"),
            this.hideDrawers(),
            this.render(!0);
        }
        _activateHeaderButtons(e, t) {
          e[0].querySelectorAll(".header-button").forEach((e) => {
            e.addEventListener("click", (e) => {
              e.preventDefault();
              const a = e.currentTarget;
              if (a) {
                const s = t.headerButtons.find((e) =>
                  a.classList.contains(e.class)
                );
                s?.onclick(e);
              }
            });
          });
        }
        async _renderOuter() {
          const e = this.options.classes,
            t = {
              id: this.id,
              classes: e.join(" "),
              appId: this.appId,
              title: this.title,
              headerButtons: this._getHeaderButtons(),
            },
            a = await renderTemplate("templates/app-window.html", t);
          let s = $(a);
          setTimeout(this._activateHeaderButtons.bind(this, s, t), 500);
          const n = s.find("header")[0];
          new Draggable(this, s, n, this.options.resizable);
          const i = new Draggable(this, s, n, this.options.resizable);
          return (
            (i.handlers.dragMove = [
              game.release.generation < 11 ? "mousemove" : "pointermove",
              this.appDragMove.bind(i),
              !1,
            ]),
            (i.handlers.dragUp = [
              game.release.generation < 11 ? "mouseup" : "pointerup",
              this.appDragEnd.bind(i),
              !1,
            ]),
            this.options.minimizable &&
              n.addEventListener("dblclick", this.toggleCompactView.bind(this)),
            0 === Object.keys(ui.windows).length && (_maxZ = 99),
            (this.position.zIndex = Math.min(++_maxZ, 9999)),
            s.css({ zIndex: this.position.zIndex }),
            (ui.activeWindow = this),
            s
          );
        }
        static setWidthHeight(e) {
          let t = 0,
            a = 0;
          const s = document.querySelector(`#${MainApp.appWindowId}`);
          if (s) {
            const i = s.querySelector(".window-header");
            i && (a += i.offsetHeight);
            const o = s.querySelector(".fsc-rf");
            if (o) {
              if (e.uiElementStates.compactView) {
                o.querySelectorAll(".fsc-sf").forEach((e) => {
                  a += e.offsetHeight;
                });
                const e = 225,
                  s = o.querySelector(".fsc-tf .fsc-uf"),
                  n = o.querySelectorAll(".fsc-wb .fsc-xb");
                let i = 0,
                  r = 0;
                s && (i = s.offsetWidth),
                  n.length &&
                    n.forEach((e) => {
                      r += e.offsetWidth;
                    }),
                  (t = Math.max(e, i, r));
              } else {
                o.querySelectorAll(".fsc-sf").forEach((e) => {
                  a += e.offsetHeight;
                });
                const e = 200,
                  s = o.querySelector(".fsc-i .fsc-k .fsc-l"),
                  n = o.querySelector(".fsc-i .fsc-t .fsc-u"),
                  i = o.querySelector(".fsc-vf .fsc-mb"),
                  r = o.querySelector(".fsc-g");
                let c = 0,
                  l = 0,
                  d = 0;
                r && ((d = r.offsetWidth), (d += 16)),
                  n
                    ? ((c = n.offsetWidth < e ? e : n.offsetWidth),
                      s && (s.style.maxWidth = `${c}px`))
                    : s &&
                      (Array.from(s.children).forEach((e) => {
                        c += e.offsetWidth;
                      }),
                      (c += 20)),
                  i &&
                    (Array.from(i.children).forEach((e) => {
                      l += e.offsetWidth;
                    }),
                    (l += 8)),
                  (t = Math.max(c, l, d)),
                  (t += 10),
                  (t += 70);
              }
              const n = parseInt(window.getComputedStyle(s).borderWidth);
              isNaN(n) || ((a += 2 * n), (t += 2 * n));
              const i = window.getComputedStyle(o),
                r = parseInt(i.paddingTop),
                c = parseInt(i.paddingBottom),
                l = parseInt(i.paddingLeft),
                d = parseInt(i.paddingRight);
              (a += (r || 0) + (c || 0)), (t += (l || 0) + (d || 0));
              const h = s.querySelector(".window-content");
              if (h) {
                const e = window.getComputedStyle(h),
                  s = parseInt(e.paddingTop),
                  n = parseInt(e.paddingBottom),
                  i = parseInt(e.paddingLeft),
                  o = parseInt(e.paddingRight),
                  r = parseInt(e.borderTop),
                  c = parseInt(e.borderBottom),
                  l = parseInt(e.borderLeft),
                  d = parseInt(e.borderRight);
                (a += (s || 0) + (n || 0) + (r || 0) + (c || 0)),
                  (t += (i || 0) + (o || 0) + (l || 0) + (d || 0));
              }
            }
            const r = {};
            if (
              e.uiElementStates.compactView &&
              H.GetBooleanSettings(n.RememberCompactPosition)
            ) {
              const e = H.GetObjectSettings(n.AppCompactPosition);
              void 0 !== e.top && e.top >= 0 && (r.top = e.top),
                void 0 !== e.left && e.left >= 0 && (r.left = e.left);
            } else if (H.GetBooleanSettings(n.RememberPosition)) {
              const e = H.GetObjectSettings(n.AppPosition);
              void 0 !== e.top && e.top >= 0 && (r.top = e.top),
                void 0 !== e.left && e.left >= 0 && (r.left = e.left);
            }
            e.uiElementStates.compactView
              ? (e.setPosition({ height: a, width: t }),
                H.GetBooleanSettings(n.RememberCompactPosition) &&
                  e.setPosition(r))
              : (H.GetBooleanSettings(n.RememberPosition) && e.setPosition(r),
                e.setPosition({ height: a, width: t }),
                e.addonButtonSidePanelContentRender(s));
          }
        }
        ensureCurrentDateIsVisible() {
          const e = document.querySelector(`#${this.id} .fsc-i`),
            t = e?.offsetHeight;
          if (e && t && t >= 500) {
            const a = e.querySelector(".fsc-x.fsc-ba"),
              s = e.querySelector(".fsc-x.fsc-y");
            let n = null;
            if ((s ? (n = s) : a && (n = a), null !== n)) {
              const a = e.getBoundingClientRect(),
                s = n.getBoundingClientRect();
              (s.top >= a.top &&
                s.left >= a.left &&
                s.bottom <= a.bottom &&
                s.right <= a.right) ||
                (e.scrollTop = s.top - a.top - t / 2);
            }
          }
        }
        appDragMove(e) {
          game.release.generation < 11 && this._onDragMouseMove(e);
        }
        appDragEnd(e) {
          this._onDragMouseUp(e);
          const t = document.getElementById(MainApp.appWindowId);
          if (t) {
            const e = {};
            t.classList.contains("fsc-wf")
              ? ((e.top = parseFloat(t.style.top)),
                (e.left = parseFloat(t.style.left)),
                H.SaveObjectSetting(n.AppCompactPosition, e, !1).catch(P.error))
              : ((e.top = parseFloat(t.style.top)),
                (e.left = parseFloat(t.style.left)),
                H.SaveObjectSetting(n.AppPosition, e, !1).catch(P.error));
          }
        }
        activateListeners() {
          this.ensureCurrentDateIsVisible();
          const e = document.getElementById(MainApp.appWindowId);
          if (e) {
            e.addEventListener("click", this.toggleUnitSelector.bind(this, !0)),
              this.uiElementStates.compactView
                ? e.classList.add("fsc-wf")
                : (e.classList.remove("fsc-wf"),
                  ke.CalendarFull.ActivateListeners(
                    `sc_${this.visibleCalendar.id}_calendar`,
                    this.changeMonth.bind(this),
                    this.dayClick.bind(this)
                  )),
              ke.Clock.ActivateListeners(`sc_${this.visibleCalendar.id}_clock`),
              e
                .querySelector(".fsc-xf .fsc-yf")
                ?.addEventListener(
                  "click",
                  this.toggleDrawer.bind(this, "fsc-df")
                ),
              e
                .querySelector(".fsc-xf .fsc-zf")
                ?.addEventListener("click", this.configurationClick.bind(this)),
              e
                .querySelector(".fsc-xf .fsc-_f")
                ?.addEventListener(
                  "click",
                  this.toggleDrawer.bind(this, "fsc-kf")
                ),
              e
                .querySelector(".fsc-ag")
                ?.addEventListener("click", this.addNote.bind(this)),
              e
                .querySelector(".fsc-bg")
                ?.addEventListener(
                  "click",
                  this.toggleDrawer.bind(this, "fsc-jf")
                ),
              e
                .querySelector(".fsc-cg")
                ?.addEventListener(
                  "click",
                  this.toggleDrawer.bind(this, "fsc-jf")
                ),
              e
                .querySelector(".fsc-xf .fsc-dg")
                ?.addEventListener("click", this.todayClick.bind(this)),
              e
                .querySelector(".fsc-xf .fsc-eg")
                ?.addEventListener("click", this.dateControlApply.bind(this)),
              e
                .querySelector(".fsc-fg")
                ?.addEventListener("click", this.startTime.bind(this)),
              e
                .querySelector(".fsc-gg")
                ?.addEventListener("click", this.stopTime.bind(this));
            const t = e.querySelectorAll(".fsc-df .fsc-hg .fsc-ig .fsc-uc");
            t.length &&
              t.forEach((e) => {
                e.addEventListener("click", this.changeCalendar.bind(this, !1));
              }),
              e.querySelectorAll(".fsc-df .fsc-hg").forEach((e) => {
                e.addEventListener("click", this.changeCalendar.bind(this, !0));
              }),
              e.querySelectorAll(".fsc-jf .fsc-jg").forEach((e) => {
                e.addEventListener("click", this.viewNote.bind(this)),
                  e.addEventListener("drag", this.noteDrag.bind(this)),
                  e.addEventListener("dragend", this.noteDragEnd.bind(this)),
                  e.addEventListener(
                    "contextmenu",
                    this.noteContext.bind(this)
                  );
              }),
              e.querySelectorAll(".fsc-kf .fsc-jf .fsc-jg").forEach((e) => {
                e.addEventListener("click", this.viewNote.bind(this));
              }),
              e
                .querySelector(".fsc-kf .fsc-kg .fa-search")
                ?.addEventListener("click", this.searchClick.bind(this)),
              e
                .querySelector(".fsc-kf .fsc-kg .fa-times")
                ?.addEventListener("click", this.searchClearClick.bind(this)),
              e
                .querySelector(".fsc-kf .fsc-kg input")
                ?.addEventListener("keyup", this.searchBoxChange.bind(this)),
              e
                .querySelector(".fsc-kf .fsc-lg")
                ?.addEventListener(
                  "click",
                  this.searchOptionsToggle.bind(this, !1)
                ),
              e.querySelectorAll(".fsc-kf .fsc-mg input").forEach((e) => {
                e.addEventListener(
                  "change",
                  this.searchOptionsFieldsChange.bind(this)
                );
              }),
              e.querySelectorAll(".fsc-sf > .fsc-ha .fsc-ta").forEach((e) => {
                e.addEventListener("click", this.noteContextClick.bind(this));
              }),
              e.querySelectorAll(".fsc-wb .fsc-_b").forEach((e) => {
                e.addEventListener(
                  "click",
                  this.toggleUnitSelector.bind(this, !1)
                );
              }),
              e.querySelectorAll(".fsc-wb .fsc-ac li").forEach((e) => {
                e.addEventListener("click", this.changeUnit.bind(this));
              }),
              e.querySelectorAll(".fsc-vb .fsc-yb").forEach((e) => {
                e.addEventListener("click", this.timeUnitClick.bind(this));
              }),
              e.querySelectorAll(".fsc-mf").forEach((e) => {
                e.addEventListener("click", this.addonButtonClick.bind(this));
              });
          }
        }
        async addonButtonClick(e) {
          const t = e.target
            ?.closest("button")
            ?.attributes.getNamedItem("data-sc-abi");
          if (t && t.value) {
            const a = parseInt(t.value);
            if (!isNaN(a) && a >= 0 && a < this.addonButtons.length) {
              const t = this.addonButtons[a];
              if (t.showSidePanel) this.toggleDrawer(`fsc-nf${a}`);
              else
                try {
                  await t.onRender(e, null);
                } catch (e) {
                  P.error(`Button Click Render Error: ${e}`);
                }
            }
          }
        }
        addonButtonSidePanelContentRender(e) {
          e.querySelectorAll(".fsc-pf").forEach(async (e) => {
            const t = e.attributes.getNamedItem("data-sc-abi");
            if (t && t.value) {
              const a = parseInt(t.value);
              if (!isNaN(a) && a >= 0 && a < this.addonButtons.length) {
                const t = this.addonButtons[a];
                if (t.showSidePanel)
                  try {
                    await t.onRender(null, e);
                  } catch (e) {
                    P.error(`Side Panel Render Error: ${e}`);
                  }
              }
            }
          });
        }
        toggleDrawer(e) {
          const t = H.GetBooleanSettings(n.AlwaysShowNoteList),
            a = [e];
          t && !this.uiElementStates["fsc-jf"] && a.push("fsc-jf"),
            this.hideDrawers(a),
            this.searchOptionsToggle(!0);
          const s = document.querySelector(`#${MainApp.appWindowId} .${e}`);
          if (s) {
            const a = e.toLowerCase();
            if (t)
              if ("fsc-jf" !== a || this.uiElementStates["fsc-jf"]) {
                if (
                  "fsc-jf" !== a &&
                  ((this.uiElementStates[a] = pe(s, 500, !1)),
                  !this.uiElementStates[a] && !this.uiElementStates["fsc-jf"])
                ) {
                  const e = document.querySelector(
                    `#${MainApp.appWindowId} .fsc-jf`
                  );
                  e && (this.uiElementStates["fsc-jf"] = pe(e, 500, !1));
                }
              } else this.uiElementStates[a] = pe(s, 500, !1);
            else this.uiElementStates[a] = pe(s, 500, !1);
          }
        }
        hideDrawers(e = []) {
          document.querySelectorAll(".fsc-of").forEach((t) => {
            let a = !0;
            for (let s = 0; s < e.length; s++)
              t.classList.contains(e[s]) && (a = !1);
            if (a) {
              pe(t, 500, !0);
              let e = "";
              const a = ["fsc-df", "fsc-jf", "fsc-kf"];
              for (let e = 0; e < this.addonButtons.length; e++)
                a.push(`fsc-nf${e}`);
              t.classList.forEach((t) => {
                a.includes(t) && (e = t);
              }),
                e && (this.uiElementStates[e] = !1);
            }
          });
        }
        toggleUnitSelector(e = !1, t = null) {
          t?.stopPropagation();
          const a = document.querySelector(".fsc-rf .fsc-ac");
          if (
            a &&
            ((this.uiElementStates.dateTimeUnitOpen = pe(a, 500, e)),
            this.uiElementStates.compactView)
          ) {
            a.getBoundingClientRect().top < window.innerHeight / 2
              ? a.classList.add("fsc-ng")
              : a.classList.remove("fsc-ng");
          }
        }
        changeUnit(e) {
          const t = e.currentTarget.getAttribute("data-unit");
          if (t) {
            let e = !1;
            "year" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Year),
                (this.uiElementStates.dateTimeUnitText = "FSC.Year"),
                (e = !0))
              : "month" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Month),
                (this.uiElementStates.dateTimeUnitText = "FSC.Month"),
                (e = !0))
              : "day" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Day),
                (this.uiElementStates.dateTimeUnitText = "FSC.Day"),
                (e = !0))
              : "hour" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Hour),
                (this.uiElementStates.dateTimeUnitText = "FSC.Hour"),
                (e = !0))
              : "minute" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Minute),
                (this.uiElementStates.dateTimeUnitText = "FSC.Minute"),
                (e = !0))
              : "round" === t
              ? ((this.uiElementStates.dateTimeUnit = j.Round),
                (this.uiElementStates.dateTimeUnitText = "FSC.Round"),
                (e = !0))
              : "seconds" === t &&
                ((this.uiElementStates.dateTimeUnit = j.Second),
                (this.uiElementStates.dateTimeUnitText = "FSC.Second"),
                (e = !0)),
              e && this.updateApp();
          }
        }
        changeCalendar(e, t) {
          const a = t.currentTarget;
          if (a) {
            const t = a.closest(".fsc-hg");
            if (t) {
              const a = t.getAttribute("data-calid");
              if (a)
                if (e || this.activeCalendar.id === a)
                  e && this.visibleCalendar.id !== a && R.setVisibleCalendar(a);
                else if (H.IsGm() && G.primary) R.setActiveCalendar(a);
                else if (game.users?.find((e) => e.isGM && e.active)) {
                  const e = { calendarId: a };
                  O.emit({ type: u.setActiveCalendar, data: e }).catch(P.error);
                } else
                  H.UiNotification(
                    game.i18n.localize("FSC.Warn.Calendar.NotGM"),
                    "warn"
                  );
            }
          }
        }
        changeMonth(e) {
          this.toggleUnitSelector(!0),
            this.visibleCalendar.changeMonth(e === D.previous ? -1 : 1),
            MainApp.setWidthHeight(this);
        }
        dayClick(e) {
          if (
            (this.toggleUnitSelector(!0),
            e.selectedDates &&
              e.selectedDates.start.day >= 0 &&
              e.selectedDates.start.month >= 0 &&
              e.selectedDates.start.month < this.visibleCalendar.months.length)
          ) {
            const t = e.selectedDates.start.day;
            let a = !1;
            const s = this.visibleCalendar.getMonth("selected");
            if (s) {
              a =
                s.getDayIndex("selected") === t &&
                this.visibleCalendar.year.selectedYear ===
                  e.selectedDates.start.year;
            }
            if ((this.visibleCalendar.resetMonths("selected"), !a)) {
              const a =
                this.visibleCalendar.months[e.selectedDates.start.month];
              t > -1 &&
                ((a.selected = !0),
                (a.days[t].selected = !0),
                (this.visibleCalendar.year.selectedYear =
                  this.visibleCalendar.year.visibleYear));
            }
            this.updateApp();
          }
        }
        todayClick() {
          this.visibleCalendar.resetMonths("selected"),
            this.visibleCalendar.resetMonths("visible");
          const e = this.visibleCalendar.getMonth();
          if (e) {
            const t = e.getDay();
            t &&
              ((this.visibleCalendar.year.selectedYear =
                this.visibleCalendar.year.numericRepresentation),
              (this.visibleCalendar.year.visibleYear =
                this.visibleCalendar.year.numericRepresentation),
              (e.visible = !0),
              (e.selected = !0),
              (t.selected = !0),
              this.updateApp());
          }
        }
        timeUnitClick(e) {
          const t = e.currentTarget,
            a = t.getAttribute("data-type"),
            s = t.getAttribute("data-amount");
          if (a && s) {
            const e = parseInt(s);
            if (!isNaN(e)) {
              const t = {};
              if (
                ("round" === a
                  ? (t.seconds = e * G.globalConfiguration.secondsInCombatRound)
                  : ("seconds" !== a &&
                      "minute" !== a &&
                      "hour" !== a &&
                      "day" !== a &&
                      "month" !== a &&
                      "year" !== a) ||
                    (t[a] = e),
                H.IsGm() && G.primary)
              )
                this.activeCalendar.changeDateTime(t, {
                  updateMonth: !1,
                  showWarning: !0,
                });
              else if (game.users?.find((e) => e.isGM && e.active)) {
                const e = { type: p.changeDateTime, interval: t };
                O.emit({ type: u.dateTimeChange, data: e }).catch(P.error);
              } else
                H.UiNotification(
                  game.i18n.localize("FSC.Warn.Calendar.NotGM"),
                  "warn"
                );
            }
          } else if (
            a &&
            ("sunrise" === a ||
              "midday" === a ||
              "sunset" === a ||
              "midnight" === a)
          )
            if (H.IsGm() && G.primary)
              re(a, this.activeCalendar).catch(P.error);
            else if (game.users?.find((e) => e.isGM && e.active)) {
              const e = {
                type: p.advanceTimeToPreset,
                interval: {},
                presetTimeOfDay: a,
              };
              O.emit({ type: u.dateTimeChange, data: e }).catch(P.error);
            } else
              H.UiNotification(
                game.i18n.localize("FSC.Warn.Calendar.NotGM"),
                "warn"
              );
        }
        dateControlApply() {
          if (be(game.user, G.globalConfiguration.permissions.changeDateTime)) {
            const e = this.activeCalendar.year.selectedYear,
              t = this.activeCalendar.getMonthAndDayIndex("selected"),
              a = this.activeCalendar.getMonth("selected");
            if (a)
              if (e === this.activeCalendar.year.visibleYear && a.visible)
                this.setCurrentDate(e, t.month || 0, t.day || 0);
              else {
                new Dialog({
                  title: H.Localize("FSC.SetCurrentDateDialog.Title"),
                  content: H.Localize(
                    "FSC.SetCurrentDateDialog.Content"
                  ).replace(
                    "{DATE}",
                    K(
                      {
                        year: e,
                        month: t.month || 0,
                        day: t.day || 0,
                        hour: 0,
                        minute: 0,
                        seconds: 0,
                      },
                      "MMMM DD, YYYY",
                      this.activeCalendar
                    )
                  ),
                  buttons: {
                    yes: {
                      label: H.Localize("Yes"),
                      callback: this.setCurrentDate.bind(
                        this,
                        e,
                        t.month || 0,
                        t.day || 0
                      ),
                    },
                    no: { label: H.Localize("No") },
                  },
                  default: "no",
                }).render(!0);
              }
          } else
            H.UiNotification(
              H.Localize("FSC.Error.Calendar.GMCurrent"),
              "warn"
            );
        }
        setCurrentDate(e, t, a) {
          if (H.IsGm() && G.primary)
            this.activeCalendar.setDateTime(
              { year: e, month: t, day: a },
              { updateApp: !1, showWarning: !0 }
            );
          else if (game.users?.find((e) => e.isGM && e.active)) {
            const s = {
              type: p.setDate,
              interval: { year: e, month: t, day: a },
            };
            O.emit({ type: u.dateTimeChange, data: s }).catch(P.error);
          } else
            H.UiNotification(
              game.i18n.localize("FSC.Warn.Calendar.NotGM"),
              "warn"
            );
        }
        searchClick() {
          const e = document.getElementById("simpleCalendarSearchBox");
          e &&
            ((this.search.term = e.value),
            (this.search.results = []),
            this.search.term &&
              (this.search.results = z.searchNotes(
                this.visibleCalendar.id,
                this.search.term,
                this.search.options.fields
              )),
            this.updateApp());
        }
        searchClearClick() {
          (this.search.term = ""), (this.search.results = []), this.updateApp();
        }
        searchBoxChange(e) {
          "Enter" === e.key
            ? this.searchClick()
            : (this.search.term = e.target.value);
        }
        searchOptionsToggle(e = !1) {
          const t = document.querySelector(".fsc-kf .fsc-og");
          t && (this.uiElementStates.searchOptionsOpen = pe(t, 500, e));
        }
        searchOptionsFieldsChange(e) {
          const t = e.target;
          if (t) {
            const e = t.getAttribute("data-field");
            e &&
              Object.prototype.hasOwnProperty.call(
                this.search.options.fields,
                e
              ) &&
              (this.search.options.fields[e] = t.checked);
          }
        }
        configurationClick() {
          W.initializeAndShowDialog().catch(P.error);
        }
        addNote() {
          z.addNewNote(this.visibleCalendar, "New Note").catch(P.error);
        }
        viewNote(e) {
          const t = e.currentTarget.getAttribute("data-index");
          t ? z.showNote(t) : P.error("No Data index on note element found.");
        }
        noteContext(e) {
          const t = e.target?.closest(".fsc-jg"),
            a = t?.getAttribute("data-index");
          if (t && a) {
            const s = game.journal?.get(a);
            if (s) {
              const n = t.closest(".fsc-sf")?.querySelector(":scope > .fsc-ha"),
                i = document.getElementById(MainApp.appWindowId);
              if (i && n) {
                n.classList.remove("fsc-ia");
                const t = e.y - i.offsetTop;
                n.style.top = `${t}px`;
                const o = z.getNoteStub(s);
                if ((n.setAttribute("data-id", a), o)) {
                  n.querySelectorAll(
                    'div[data-action="edit"], div[data-action="delete"], .fsc-sa'
                  ).forEach((e) => {
                    o.canEdit
                      ? e.classList.remove("fsc-ia")
                      : e.classList.add("fsc-ia");
                  });
                  const e = n.querySelectorAll(".fsc-ka div:not(.fsc-ia)");
                  e.length &&
                    (e.forEach((e) => (e.style.marginBottom = "")),
                    (e[e.length - 1].style.marginBottom = "0"));
                  const t = n.querySelector('.fsc-ta[data-action="remind"]');
                  t &&
                    (t.innerHTML = `<span class="fa ${
                      o.userReminderRegistered ? "fa-bell-slash" : "fa-bell"
                    }"></span>${
                      o.userReminderRegistered
                        ? H.Localize("FSC.Notes.ReminderCancel")
                        : H.Localize("FSC.Notes.Reminder")
                    }`);
                }
              }
            }
          }
          return !1;
        }
        noteContextClick(e) {
          const t = e.target,
            a = t?.getAttribute("data-action");
          if (t && a) {
            const s = t.closest(".fsc-ha"),
              n = s?.getAttribute("data-id");
            if (n) {
              const t = game.journal?.get(n);
              t &&
                ("showPlayers" === a
                  ? Journal.showDialog(t).catch((e) => console.error(e))
                  : "delete" === a
                  ? t.sheet?.delete(e)
                  : "edit" === a
                  ? t.sheet?.render(!0, {}, !0)
                  : "remind" === a &&
                    t.sheet?.reminderChange(!1).catch((e) => console.error(e)));
            }
          }
        }
        updateApp() {
          this.rendered && this.render(!0, {});
        }
        startTime() {
          const e = H.GetSceneForCombatCheck(),
            t = game.combats;
          t &&
          t.size > 0 &&
          t.find(
            (t) =>
              t.started &&
              ((null !== e && t.scene && t.scene.id === e.id) || null === e)
          )
            ? H.UiNotification(
                game.i18n.localize("FSC.Warn.Time.ActiveCombats"),
                "warn"
              )
            : (this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
                g.None &&
                this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
                  g.Self &&
                this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
                  g.Mixed) ||
              (this.activeCalendar.timeKeeper.start(),
              (this.clockClass = this.activeCalendar.timeKeeper.getStatus()),
              this.updateApp());
        }
        stopTime() {
          this.activeCalendar.timeKeeper.stop(),
            (this.clockClass = this.activeCalendar.timeKeeper.getStatus()),
            this.updateApp();
        }
        async timeKeepingCheck() {
          this.activeCalendar.generalSettings.gameWorldTimeIntegration !==
            g.None &&
            H.IsGm() &&
            (await this.activeCalendar.syncTime());
        }
        noteDrag(e) {
          const t = e.target,
            a = t.parentNode,
            s = e.clientX,
            n = e.clientY;
          t.classList.add("drag-active");
          let i =
            null === document.elementFromPoint(s, n)
              ? t
              : document.elementFromPoint(s, n);
          null !== a &&
            null !== i &&
            a === i.parentNode &&
            ((i = i !== t.nextSibling ? i : i.nextSibling),
            a.insertBefore(t, i));
        }
        noteDragEnd(e) {
          const t = e.target,
            a = t.parentNode,
            s = t.getAttribute("data-index");
          if ((t.classList.remove("drag-active"), s && a)) {
            const e = [];
            for (let t = 0; t < a.children.length; t++) {
              const s = a.children[t].getAttribute("data-index");
              s && e.push(s);
            }
            if (H.IsGm() && G.primary)
              z.orderNotesOnDay(
                this.visibleCalendar.id,
                e,
                this.visibleCalendar.getDateTime()
              ).catch(P.error);
            else if (game.users?.find((e) => e.isGM && e.active)) {
              const t = {
                calendarId: this.visibleCalendar.id,
                date: this.visibleCalendar.getDateTime(),
                newOrder: e,
              };
              O.emit({ type: u.noteUpdate, data: t }).catch(P.error);
            } else
              H.UiNotification(
                game.i18n.localize("FSC.Warn.Calendar.NotGM"),
                "warn"
              );
          }
        }
        _updateObject() {
          return Promise.resolve(void 0);
        }
        keyClick(e) {
          this.rendered &&
            this.uiElementStates.compactView &&
            !e.repeat &&
            ((this.uiElementStates.cvLargerSteps = e.shiftKey),
            (this.uiElementStates.cvReverseTime = e.ctrlKey),
            this.render(!1));
        }
        toggleWindow() {
          this.rendered ? super.close().catch(P.error) : this.render();
        }
      }
      class tt {
        primary = !1;
        get activeCalendar() {
          return R.getActiveCalendar();
        }
        sockets;
        clientSettings;
        globalConfiguration;
        constructor() {
          (this.sockets = new Re()),
            (this.clientSettings = {
              id: "",
              theme: i[0].key,
              openOnLoad: !0,
              openCompact: !1,
              rememberPosition: !0,
              rememberCompactPosition: !1,
              appPosition: {},
              noteReminderNotification: I.whisper,
              sideDrawerDirection: "sc-right",
              alwaysShowNoteList: !1,
              persistentOpen: !1,
              compactViewScale: 100,
            }),
            (this.globalConfiguration = {
              id: "",
              version: "",
              calendarsSameTimestamp: !1,
              combatPauseRule: o.Active,
              permissions: new Je(),
              secondsInCombatRound: 6,
              syncCalendars: !1,
              showNotesFolder: !1,
              inGameChatTimestamp: !1,
            });
        }
        static ThemeChange() {
          this.LoadThemeCSS();
          const e = he(),
            t = i.map((e) => e.key),
            a = document.getElementById(MainApp.appWindowId);
          a && (a.classList.remove(...t), a.classList.add(e));
          const s = document.getElementById(et.appWindowId);
          s && (s.classList.remove(...t), s.classList.add(e)),
            document
              .querySelectorAll(".journal-sheet.simple-calendar")
              .forEach((a) => {
                a.classList.remove(...t), a.classList.add(e);
              });
        }
        static LoadThemeCSS(e = "") {
          const a = e || he();
          this.addCSSImageURLPaths(a);
          if (null === document.head.querySelector(`#theme-${a}`)) {
            const e = document.createElement("link");
            e.setAttribute("id", `theme-${a}`),
              e.setAttribute("rel", "stylesheet"),
              e.setAttribute("type", "text/css"),
              e.setAttribute("href", Ve(`modules/${t}/styles/themes/${a}.css`)),
              document.head.append(e);
          }
        }
        static addCSSImageURLPaths(e) {
          const t = document.head.querySelector("#sc-image-urls"),
            a = [
              `--ui-denim075: url("${Ve("/ui/denim075.png")}");`,
              `--ui-parchment: url("${Ve("/ui/parchment.jpg")}");`,
            ],
            s = i.find((t) => t.key === e);
          if (s && s.images)
            for (const [e, t] of Object.entries(s.images))
              a.push(`${e}: url("${Ve(t)}");`);
          const n = `.simple-calendar {${a.join("")}`;
          if (t) t.textContent = n;
          else {
            const e = document.createElement("style");
            e.setAttribute("id", "sc-image-urls"),
              e.appendChild(document.createTextNode(n)),
              document.head.append(e);
          }
        }
        PersistenceChange() {
          this.clientSettings.persistentOpen = H.GetBooleanSettings(
            n.PersistentOpen
          );
          const e = document.getElementById(MainApp.appWindowId);
          e &&
            (this.clientSettings.persistentOpen
              ? e.classList.add("fsc-qf")
              : e.classList.remove("fsc-qf"));
        }
        CompactScaleChange() {
          this.clientSettings.compactViewScale = H.GetNumericSettings(
            n.CompactViewScale
          );
          const e = document.getElementById(MainApp.appWindowId);
          if (e) {
            for (let t = e.classList.length - 1; t >= 0; t--)
              e.classList[t].startsWith("sc-scale") &&
                e.classList.remove(e.classList[t]);
            e.classList.add(`sc-scale-${G.clientSettings.compactViewScale}`);
          }
        }
        static SideDrawerDirectionChange() {
          Y.updateApp();
        }
        static AlwaysShowNoteListChange() {
          Y.initialize(), Y.updateApp();
        }
        initialize() {
          this.sockets.initialize(),
            z.checkNoteTriggers(this.activeCalendar.id, !0),
            document.body.addEventListener("click", ve.BodyEventListener),
            this.checkCombatActive(),
            Ie.emit(C.Init, R.getActiveCalendar());
        }
        load() {
          tt.LoadThemeCSS();
          const e = H.GetObjectSettings(n.GlobalConfiguration);
          this.globalConfiguration.permissions.loadFromSettings(e.permissions),
            (this.globalConfiguration.secondsInCombatRound =
              e.secondsInCombatRound),
            (this.globalConfiguration.calendarsSameTimestamp =
              e.calendarsSameTimestamp),
            (this.globalConfiguration.syncCalendars = e.syncCalendars),
            (this.globalConfiguration.showNotesFolder = e.showNotesFolder),
            Object.prototype.hasOwnProperty.call(e, "combatPauseRule") &&
              (this.globalConfiguration.combatPauseRule = e.combatPauseRule),
            Object.prototype.hasOwnProperty.call(e, "inGameChatTimestamp") &&
              (this.globalConfiguration.inGameChatTimestamp =
                e.inGameChatTimestamp),
            (this.clientSettings.theme = he()),
            (this.clientSettings.openOnLoad = H.GetBooleanSettings(
              n.OpenOnLoad
            )),
            (this.clientSettings.openCompact = H.GetBooleanSettings(
              n.OpenCompact
            )),
            (this.clientSettings.rememberPosition = H.GetBooleanSettings(
              n.RememberPosition
            )),
            (this.clientSettings.rememberCompactPosition = H.GetBooleanSettings(
              n.RememberCompactPosition
            )),
            (this.clientSettings.appPosition = H.GetObjectSettings(
              n.AppPosition
            )),
            (this.clientSettings.noteReminderNotification = H.GetStringSettings(
              n.NoteReminderNotification
            )),
            (this.clientSettings.sideDrawerDirection = H.GetStringSettings(
              n.NoteListOpenDirection
            )),
            (this.clientSettings.alwaysShowNoteList = H.GetBooleanSettings(
              n.AlwaysShowNoteList
            )),
            (this.clientSettings.persistentOpen = H.GetBooleanSettings(
              n.PersistentOpen
            )),
            (this.clientSettings.compactViewScale = H.GetNumericSettings(
              n.CompactViewScale
            ));
        }
        reload() {
          tt.LoadThemeCSS(), (this.clientSettings.theme = he());
        }
        save(e = null, t = null) {
          if (
            (R.saveCalendars().catch(P.error),
            t &&
              (H.SaveStringSetting(`${Z.worldId}.${n.Theme}`, t.theme, !1)
                .then(this.reload.bind(this))
                .catch(P.error),
              H.SaveBooleanSetting(n.OpenOnLoad, t.openOnLoad, !1).catch(
                P.error
              ),
              H.SaveBooleanSetting(n.OpenCompact, t.openCompact, !1).catch(
                P.error
              ),
              H.SaveBooleanSetting(
                n.RememberPosition,
                t.rememberPosition,
                !1
              ).catch(P.error),
              H.SaveBooleanSetting(
                n.RememberCompactPosition,
                t.rememberCompactPosition,
                !1
              ).catch(P.error),
              H.SaveObjectSetting(n.AppPosition, t.appPosition, !1).catch(
                P.error
              ),
              H.SaveStringSetting(
                n.NoteReminderNotification,
                t.noteReminderNotification,
                !1
              ).catch(P.error),
              H.SaveStringSetting(
                n.NoteListOpenDirection,
                t.sideDrawerDirection,
                !1
              ).catch(P.error),
              H.SaveBooleanSetting(
                n.AlwaysShowNoteList,
                t.alwaysShowNoteList,
                !1
              ).catch(P.error),
              H.SaveBooleanSetting(
                n.PersistentOpen,
                t.persistentOpen,
                !1
              ).catch(P.error),
              H.SaveNumericSetting(
                n.CompactViewScale,
                t.compactViewScale,
                !1
              ).catch(P.error)),
            e)
          ) {
            const t = {
              id: "",
              version: H.GetModuleVersion(),
              permissions: e.permissions,
              secondsInCombatRound: e.secondsInCombatRound,
              calendarsSameTimestamp: e.calendarsSameTimestamp,
              syncCalendars: e.syncCalendars,
              showNotesFolder: e.showNotesFolder,
              combatPauseRule: e.combatPauseRule,
              inGameChatTimestamp: e.inGameChatTimestamp,
            };
            H.SaveObjectSetting(n.GlobalConfiguration, t)
              .then(
                ((e) => (
                  e &&
                    (Fe.updateChatMessageTimestamps(),
                    O.emit({ type: u.renderChatLog, data: e }).catch(P.error)),
                  O.emit({ type: u.mainAppUpdate, data: {} })
                )).bind(
                  this,
                  this.globalConfiguration.inGameChatTimestamp !==
                    e.inGameChatTimestamp
                )
              )
              .catch(P.error);
          }
        }
        static HideContextMenus() {
          document.querySelectorAll(".fsc-ha").forEach((e) => {
            e.classList.add("fsc-ia");
          });
        }
        checkCombatActive() {
          const e = H.GetSceneForCombatCheck(),
            t = game.combats?.find(
              (t) => !(!t.scene || !e) && t.scene.id === e.id
            );
          t && t.started && (this.activeCalendar.time.combatRunning = !0);
        }
        getSceneControlButtons(e) {
          if (
            be(game.user, this.globalConfiguration.permissions.viewCalendar)
          ) {
            const t = e.find((e) => "notes" === e.name);
            t &&
              Object.prototype.hasOwnProperty.call(t, "tools") &&
              t.tools.push({
                name: "calendar",
                title: "FSC.Title",
                icon: "fas fa-calendar simple-calendar-icon",
                button: !0,
                onClick: Y.sceneControlButtonClick.bind(Y),
              });
          }
        }
        async renderJournalDirectory(e, t) {
          if (
            (await z.createJournalDirectory(),
            !this.globalConfiguration.showNotesFolder && z.noteDirectory)
          ) {
            const e = t.find(`.folder[data-folder-id='${z.noteDirectory.id}']`);
            e && e.remove();
          }
        }
        renderJournalSheet(e, t) {
          if (!this.globalConfiguration.showNotesFolder && z.noteDirectory) {
            const e = t.find(`option[value='${z.noteDirectory.id}']`);
            e && e.remove();
          }
        }
        renderSceneConfig(e, a, s) {
          if (!this.globalConfiguration.showNotesFolder && s.journals)
            for (let e = 0; e < s.journals.length; e++) {
              const n = game.journal?.get(s.journals[e].id);
              if (n) {
                if (n.getFlag(t, "noteData")) {
                  const t = a.find(`option[value='${s.journals[e].id}']`);
                  t && t.remove();
                }
              }
            }
        }
        gamePaused() {
          this.activeCalendar.time.unifyGameAndClockPause &&
            (game.paused
              ? this.activeCalendar.timeKeeper.setStatus(S.Paused)
              : this.activeCalendar.timeKeeper.start(!0));
        }
        worldTimeUpdate(e, t) {
          this.activeCalendar.setFromTime(e, t);
        }
        createCombatant(e) {
          const t = game.combats;
          if (!this.activeCalendar.time.combatRunning && t) {
            const a = t.find((t) => t.id === e.parent?.id),
              s = H.GetSceneForCombatCheck();
            a &&
              a.started &&
              ((null !== s && a.scene && a.scene.id === s.id) || null === s) &&
              (this.activeCalendar.time.combatRunning = !0);
          }
        }
        combatUpdate(e, t, a) {
          const s = H.GetSceneForCombatCheck();
          e.started &&
            ((null !== s && e.scene && e.scene.id === s.id) || null === s) &&
            ((this.activeCalendar.time.combatRunning = !0),
            a &&
              Object.prototype.hasOwnProperty.call(a, "advanceTime") &&
              (0 !== a.advanceTime
                ? (this.activeCalendar.combatChangeTriggered = !0)
                : this.activeCalendar.processOwnCombatRoundTime(e)));
        }
        combatDelete(e) {
          const t = H.GetSceneForCombatCheck();
          null !== t &&
            e.scene &&
            e.scene.id === t.id &&
            (this.activeCalendar.time.combatRunning = !1);
        }
        canvasInit(e) {
          if (
            H.IsGm() &&
            this.primary &&
            this.globalConfiguration.combatPauseRule === o.Current
          ) {
            const t = e.scene ? e.scene.id : null,
              a = game.combats?.filter((e) => e.started && e.scene?.id === t);
            this.activeCalendar.time.combatRunning = !(!a || !a.length);
          }
        }
      }
      const at = {
        Activate: Ze.ActivateSelector.bind(Ze),
        Get: Ze.GetSelector.bind(Ze),
        Remove: Ze.RemoveSelector.bind(Ze),
      };
      function st(e, t = null, a = null) {
        ke.CalendarFull.ActivateListeners(e, t, a);
      }
      async function nt(
        e,
        t,
        a,
        s,
        n,
        i = l.Never,
        o = [],
        r = "active",
        c = null,
        d = [],
        h = []
      ) {
        const m = "active" === r ? R.getActiveCalendar() : R.getCalendar(r);
        if (m) {
          const r = await z.createNote(
            e,
            t,
            {
              calendarId: m.id,
              startDate: X(a, null, m),
              endDate: X(s, null, m),
              allDay: n,
              order: 0,
              categories: o,
              repeats: i,
              remindUsers: Array.isArray(h) ? h : [],
              macro: c || "none",
            },
            m,
            !1
          );
          if (r && Array.isArray(d) && d.length) {
            const e = {};
            d.indexOf("default") > -1
              ? (game.users?.forEach(
                  (t) => (e[t.id] = game.user?.id === t.id ? 3 : 2)
                ),
                (e.default = 2))
              : d.forEach((t) => (e[t] = game.user?.id === t ? 3 : 2)),
              await r.update({ ownership: e }, { render: !1, renderSheet: !1 });
          }
          return r;
        }
        return null;
      }
      function it(e, t, a, s, n) {
        Y.addonButtons.push({
          title: e,
          iconClass: t,
          customClass: a,
          showSidePanel: s,
          onRender: n,
        }),
          Y.updateApp();
      }
      function ot(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        if (a) {
          if (be(game.user, G.globalConfiguration.permissions.changeDateTime))
            return re(e, a).catch(P.error), !0;
        } else
          P.error(
            `SimpleCalendar.api.advanceTimeToPreset - Unable to find a calendar with the passed in ID of "${t}"`
          );
        return !1;
      }
      function rt(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        return a
          ? a.changeDateTime(e, { updateMonth: !1, showWarning: !0 })
          : (P.error(
              `SimpleCalendar.api.changeDate - Unable to find a calendar with the passed in ID of "${t}"`
            ),
            !1);
      }
      function ct(e = {}, t = {}, a = "active") {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        let n = 0,
          i = 0,
          o = 0,
          r = 0,
          c = 0,
          l = 0;
        if (s) {
          (n =
            void 0 !== e.year && void 0 !== t.year
              ? e.year === t.year
                ? e.year
                : Math.floor(Math.random() * (t.year - e.year + 1)) + e.year
              : Math.floor(1e4 * Math.random())),
            (i =
              void 0 !== e.month && void 0 !== t.month
                ? e.month === t.month
                  ? e.month
                  : Math.floor(Math.random() * (t.month - e.month + 1)) +
                    e.month
                : Math.floor(Math.random() * s.months.length)),
            (i < 0 || i >= s.months.length) && (i = s.months.length - 1);
          const a = s.months[i];
          (o =
            void 0 !== e.day && void 0 !== t.day
              ? e.day === t.day
                ? e.day
                : Math.floor(Math.random() * (t.day - e.day + 1)) + e.day
              : Math.floor(Math.random() * a.days.length)),
            (o < 0 || o >= a.days.length) && (o = a.days.length - 1),
            (r =
              void 0 !== e.hour && void 0 !== t.hour
                ? e.hour === t.hour
                  ? e.hour
                  : Math.floor(Math.random() * (t.hour - e.hour + 1)) + e.hour
                : Math.floor(Math.random() * s.time.hoursInDay)),
            (c =
              void 0 !== e.minute && void 0 !== t.minute
                ? e.minute === t.minute
                  ? e.minute
                  : Math.floor(Math.random() * (t.minute - e.minute + 1)) +
                    e.minute
                : Math.floor(Math.random() * s.time.minutesInHour)),
            (l =
              void 0 !== e.seconds && void 0 !== t.seconds
                ? e.seconds === t.seconds
                  ? e.seconds
                  : Math.floor(Math.random() * (t.seconds - e.seconds + 1)) +
                    e.seconds
                : Math.floor(Math.random() * s.time.secondsInMinute));
        } else
          P.error(
            `SimpleCalendar.api.chooseRandomDate - Unable to find a calendar with the passed in ID of "${a}"`
          );
        return { year: n, month: i, day: o, hour: r, minute: c, seconds: l };
      }
      function lt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.timeKeeper.getStatus();
          return {
            started: e === S.Started,
            stopped: e === S.Stopped,
            paused: e === S.Paused,
          };
        }
        return (
          P.error(
            `SimpleCalendar.api.clockStatus - Unable to find a calendar with the passed in ID of "${e}"`
          ),
          { started: !1, stopped: !1, paused: !1 }
        );
      }
      async function dt(e, t = "active") {
        let a = !1;
        if (H.IsGm()) {
          const s = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
          s
            ? ("string" == typeof e
                ? (a = await _e.setToPredefined(s, e))
                : Object.keys(e).length && (s.loadFromSettings(e), (a = !0)),
              R.saveCalendars().catch(P.error))
            : P.error(
                `SimpleCalendar.api.configureCalendar - Unable to find a calendar with the passed in ID of "${t}"`
              );
        }
        return a;
      }
      function ht(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonthAndDayIndex(),
            a = t.time.getCurrentTime();
          return {
            year: t.year.numericRepresentation,
            month: e.month || 0,
            day: e.day || 0,
            hour: a.hour,
            minute: a.minute,
            seconds: a.seconds,
          };
        }
        return null;
      }
      function mt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonthAndDayIndex(),
            a = t.months[e.month || 0],
            s = a.days[e.day || 0],
            n = t.dayOfTheWeek(
              t.year.numericRepresentation,
              e.month || 0,
              e.day || 0
            ),
            i = t.time.getCurrentTime();
          return {
            date: K(
              {
                year: t.year.numericRepresentation,
                month: e.month || 0,
                day: e.day || 0,
                hour: i.hour,
                minute: i.minute,
                seconds: i.seconds,
              },
              t.generalSettings.dateFormat.date,
              t
            ),
            day: s.numericRepresentation.toString(),
            daySuffix: V(s.numericRepresentation),
            weekday: t.weekdays.length > n ? t.weekdays[n].name : "",
            monthName: a.name,
            month: a.numericRepresentation.toString(),
            year: t.year.numericRepresentation.toString(),
            yearName: t.year.getYearName(t.year.numericRepresentation),
            yearPrefix: t.year.prefix,
            yearPostfix: t.year.postfix,
            time: K(
              {
                year: t.year.numericRepresentation,
                month: e.month || 0,
                day: e.day || 0,
                hour: i.hour,
                minute: i.minute,
                seconds: i.seconds,
              },
              t.generalSettings.dateFormat.time,
              t
            ),
          };
        }
        return null;
      }
      function ut(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        return a
          ? ie(e, a)
          : (P.error(
              `SimpleCalendar.api.dateToTimestamp - Unable to find a calendar with the passed in ID of "${t}"`
            ),
            0);
      }
      function pt(e, t = "", a = "active") {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        if (s) {
          const a = e.year ? e.year : 0;
          let n = e.month && e.month >= 0 ? e.month : 0;
          n >= s.months.length && (n = s.months.length - 1);
          const i = s.months[n];
          let o = e.day && e.day >= 0 ? e.day : 0;
          o >= i.days.length && (o = i.days.length - 1);
          let r = e.hour && e.hour >= 0 ? e.hour : 0;
          r >= s.time.hoursInDay && (r = s.time.hoursInDay - 1);
          let c = e.minute && e.minute >= 0 ? e.minute : 0;
          c >= s.time.minutesInHour && (c = s.time.minutesInHour - 1);
          let l = e.seconds && e.seconds >= 0 ? e.seconds : 0;
          return (
            l >= s.time.secondsInMinute && (l = s.time.secondsInMinute - 1),
            t
              ? K(
                  { year: a, month: n, day: o, hour: r, minute: c, seconds: l },
                  t,
                  s
                )
              : {
                  date: K(
                    {
                      year: a,
                      month: n,
                      day: o,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    s.generalSettings.dateFormat.date,
                    s
                  ),
                  time: K(
                    {
                      year: 0,
                      month: 0,
                      day: 0,
                      hour: r,
                      minute: c,
                      seconds: l,
                    },
                    s.generalSettings.dateFormat.time,
                    s
                  ),
                }
          );
        }
        return (
          P.error(
            `SimpleCalendar.api.formatDateTime - Unable to find a calendar with the passed in ID of "${a}"`
          ),
          ""
        );
      }
      function gt(e, t = "", a = "active") {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        if (s) {
          J.isPF2E &&
            s.generalSettings.pf2eSync &&
            (e += J.getWorldCreateSeconds(s));
          const a = s.secondsToDate(e);
          return t
            ? K(a, t, s)
            : {
                date: K(a, s.generalSettings.dateFormat.date, s),
                time: K(a, s.generalSettings.dateFormat.time, s),
              };
        }
        return (
          P.error(
            `SimpleCalendar.api.formatTimestamp - Unable to find a calendar with the passed in ID of "${a}"`
          ),
          ""
        );
      }
      function ft() {
        const e = R.getAllCalendars(),
          t = [];
        for (let a = 0; a < e.length; a++) t.push(e[a].toConfig());
        return t;
      }
      function yt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.months.map((e) => e.toConfig())
          : (P.error(
              `SimpleCalendar.api.getAllMonths - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            []);
      }
      function bt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.moons.map((e) => {
              const a = e.toConfig();
              return (a.currentPhase = e.getMoonPhase(t)), a;
            })
          : (P.error(
              `SimpleCalendar.api.getAllMoons - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            []);
      }
      function Ct(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.seasons.map((e) => e.toConfig())
          : (P.error(
              `SimpleCalendar.api.getAllSeasons - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            []);
      }
      function St() {
        const e = me();
        for (const t in e) e[t] = H.Localize(e[t]);
        return e;
      }
      function wt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.weekdays.map((e) => e.toConfig())
          : (P.error(
              `SimpleCalendar.api.getAllWeekdays - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            []);
      }
      function vt() {
        return R.getActiveCalendar().toConfig();
      }
      function Dt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonth();
          if (e) {
            const t = e.getDay();
            if (t) return t.toConfig();
          }
        } else
          P.error(
            `SimpleCalendar.api.getCurrentDay - Unable to find a calendar with the passed in ID of "${e}"`
          );
        return null;
      }
      function kt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonth();
          if (e) return e.toConfig();
        } else
          P.error(
            `SimpleCalendar.api.getCurrentMonth - Unable to find a calendar with the passed in ID of "${e}"`
          );
        return null;
      }
      function Tt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonthAndDayIndex();
          return t.getSeason(e.month || 0, e.day || 0).toConfig();
        }
        return (
          P.error(
            `SimpleCalendar.api.getCurrentSeason - Unable to find a calendar with the passed in ID of "${e}"`
          ),
          {
            id: "",
            name: "",
            description: "",
            icon: f.None,
            color: "",
            startingMonth: 0,
            startingDay: 0,
            sunriseTime: 0,
            sunsetTime: 0,
          }
        );
      }
      function Mt() {
        return he();
      }
      function jt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        if (t) {
          const e = t.getMonthAndDayIndex(),
            a = t.dayOfTheWeek(
              t.year.numericRepresentation,
              e.month || 0,
              e.day || 0
            );
          return t.weekdays[a].toConfig();
        }
        return (
          P.error(
            `SimpleCalendar.api.getCurrentWeekday - Unable to find a calendar with the passed in ID of "${e}"`
          ),
          null
        );
      }
      function It(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.year.toConfig()
          : (P.error(
              `SimpleCalendar.api.getCurrentYear - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            null);
      }
      function Nt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.year.leapYearRule.toConfig()
          : (P.error(
              `SimpleCalendar.api.getLeapYearConfiguration - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            null);
      }
      function Lt(e = "active") {
        return (
          (e = "active" === e ? R.getActiveCalendar().id : e),
          z.getNotes(e).map((e) => game.journal?.get(e.entryId))
        );
      }
      function Ot(e, t, a, s = "active") {
        return (
          (s = "active" === s ? R.getActiveCalendar().id : s),
          z.getNotesForDay(s, e, t, a).map((e) => game.journal?.get(e.entryId))
        );
      }
      function Pt(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.time.toConfig()
          : (P.error(
              `SimpleCalendar.api.getTimeConfiguration - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            null);
      }
      function At() {
        return Y.rendered;
      }
      function xt() {
        return G.primary;
      }
      function Ft(e = "active") {
        if (G.primary) {
          const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
          if (t) {
            const e = t.timeKeeper.getStatus();
            if (e === S.Started)
              return (
                t.timeKeeper.start(), t.timeKeeper.getStatus() === S.Paused
              );
            if (e === S.Paused) return !0;
          } else
            P.error(
              `SimpleCalendar.api.pauseClock - Unable to find a calendar with the passed in ID of "${e}"`
            );
        }
        return !1;
      }
      async function Et(e) {
        const t = game.journal?.get(e);
        if (t) {
          const e = z.getNoteStub(t);
          if (e?.isVisible)
            return (
              z.removeNoteStub(t),
              Y.updateApp(),
              await t.delete(),
              await O.emit({ type: u.mainAppUpdate, data: {} }),
              !0
            );
        } else
          P.error(
            `SimpleCalendar.api.removeNote - Unable to find a journal entry with the passed in ID of "${e}"`
          );
        return !1;
      }
      function Rt() {
        if (H.IsGm() && G.primary) {
          new Dialog({
            title: H.Localize("FSC.Migration.APIDialog.Title"),
            content: H.Localize("FSC.Migration.APIDialog.Content"),
            buttons: {
              yes: {
                icon: '<i class="fas fa-check"></i>',
                label: H.Localize("FSC.Confirm"),
                callback: q.run.bind(q, !0),
              },
              no: {
                icon: '<i class="fas fa-times"></i>',
                label: H.Localize("FSC.Cancel"),
              },
            },
            default: "no",
          }).render(!0);
        }
      }
      function Yt(
        e,
        t = { date: !0, title: !0, details: !0, categories: !0, author: !0 },
        a = "active"
      ) {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        let n = [];
        return (
          s
            ? (n = z
                .searchNotes(s.id, e, t)
                .map((e) => game.journal?.get(e.entryId)))
            : P.error(
                `SimpleCalendar.api.searchNotes - Unable to find a calendar with the passed in ID of "${a}"`
              ),
          n
        );
      }
      function Wt(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        return a
          ? a.secondsToInterval(e)
          : (P.error(
              `SimpleCalendar.api.secondsToInterval - Unable to find a calendar with the passed in ID of "${t}"`
            ),
            {});
      }
      function $t(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        return a
          ? a.setDateTime(e, { showWarning: !0 })
          : (P.error(
              `SimpleCalendar.api.setDate - Unable to find a calendar with the passed in ID of "${t}"`
            ),
            !1);
      }
      async function qt(e) {
        e = e.toLowerCase();
        const t = me();
        return void 0 !== t[e]
          ? (e !== he() &&
              (await H.SaveStringSetting(`${game.world.id}.${n.Theme}`, e, !1),
              H.UiNotification(
                H.Localize("FSC.Info.ThemeChange").replace(
                  "{THEME}",
                  H.Localize(t[e])
                ),
                "info",
                !0
              )),
            !0)
          : (console.error(
              `SimpleCalendar.api.setTheme - Unable to find a theme with the ID of "${e}"`
            ),
            !1);
      }
      function Gt(e = null, t = !1, a = "active") {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        if (s) {
          if ((R.setVisibleCalendar(s.id), null !== e)) {
            const t = X(e, null, s);
            if (
              Number.isInteger(t.year) &&
              Number.isInteger(t.month) &&
              Number.isInteger(t.day)
            ) {
              const e = s.year.leapYearRule.isLeapYear(t.year);
              (s.year.visibleYear = t.year),
                (-1 === t.month || t.month > s.months.length) &&
                  (t.month = s.months.length - 1),
                s.resetMonths("visible"),
                (s.months[t.month].visible = !0);
              const a = e
                ? s.months[t.month].numberOfLeapYearDays
                : s.months[t.month].numberOfDays;
              (-1 === t.day || t.day > a) && (t.day = a - 1),
                s.resetMonths("selected"),
                (s.months[t.month].days[t.day].selected = !0),
                (s.months[t.month].selected = !0),
                (s.year.selectedYear = s.year.visibleYear);
            } else P.error("Main.api.showCalendar: Invalid date passed in.");
          }
        } else
          P.error(
            `SimpleCalendar.api.showCalendar - Unable to find a calendar with the passed in ID of "${a}"`
          );
        (Y.uiElementStates.compactView = t),
          Y.rendered ? Y.updateApp() : Y.render();
      }
      function zt(e = "active") {
        if (G.primary) {
          const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
          if (t) return t.timeKeeper.start(), !0;
          P.error(
            `SimpleCalendar.api.startClock - Unable to find a calendar with the passed in ID of "${e}"`
          );
        }
        return !1;
      }
      function Ht(e = "active") {
        if (G.primary) {
          const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
          if (t) return t.timeKeeper.stop(), !0;
          P.error(
            `SimpleCalendar.api.stopClock - Unable to find a calendar with the passed in ID of "${e}"`
          );
        }
        return !1;
      }
      function Ut(e = "active") {
        const t = "active" === e ? R.getActiveCalendar() : R.getCalendar(e);
        return t
          ? t.toSeconds()
          : (P.error(
              `SimpleCalendar.api.timestamp - Unable to find a calendar with the passed in ID of "${e}"`
            ),
            NaN);
      }
      function Vt(e, t, a = "active") {
        const s = "active" === a ? R.getActiveCalendar() : R.getCalendar(a);
        if (s) {
          const a = s.clone(!1);
          J.isPF2E &&
            s.generalSettings.pf2eSync &&
            (e += J.getWorldCreateSeconds(s));
          const n = a.secondsToDate(e);
          if (
            (a.updateTime(n),
            t.year && a.changeYear(t.year, !1, "current"),
            t.month)
          ) {
            if (t.month > a.months.length) {
              const e = Math.floor(t.month / a.months.length);
              (t.month = t.month - e * a.months.length),
                a.changeYear(e, !1, "current");
            }
            a.changeMonth(t.month, "current");
          }
          if (
            (t.day && a.changeDayBulk(t.day),
            t.hour && t.hour > a.time.hoursInDay)
          ) {
            const e = Math.floor(t.hour / a.time.hoursInDay);
            (t.hour = t.hour - e * a.time.hoursInDay), a.changeDayBulk(e);
          }
          if (t.minute && t.minute > a.time.hoursInDay * a.time.minutesInHour) {
            const e = Math.floor(
              t.minute / (a.time.hoursInDay * a.time.minutesInHour)
            );
            (t.minute =
              t.minute - e * (a.time.hoursInDay * a.time.minutesInHour)),
              a.changeDayBulk(e);
          }
          if (t.seconds && t.seconds > a.time.secondsPerDay) {
            const e = Math.floor(t.seconds / a.time.secondsPerDay);
            (t.seconds = t.seconds - e * a.time.secondsPerDay),
              a.changeDayBulk(e);
          }
          const i = a.time.changeTime(t.hour, t.minute, t.seconds);
          return 0 !== i && a.changeDay(i), a.toSeconds();
        }
        return (
          P.error(
            `SimpleCalendar.api.timestampPlusInterval - Unable to find a calendar with the passed in ID of "${a}"`
          ),
          NaN
        );
      }
      function _t(e, t = "active") {
        const a = "active" === t ? R.getActiveCalendar() : R.getCalendar(t);
        return a
          ? ne(e, a)
          : (P.error(
              `SimpleCalendar.api.stopClock - Unable to find a calendar with the passed in ID of "${t}"`
            ),
            null);
      }
      class Bt {
        static Register() {
          Handlebars.registerHelper("sc-date-selector", Bt.DateSelector),
            Handlebars.registerHelper("sc-full-calendar", Bt.FullCalendar),
            Handlebars.registerHelper("sc-clock", Bt.Clock),
            Handlebars.registerHelper("sc-icon", Bt.Icon),
            Handlebars.registerHelper("sc-multi-select", Bt.MultiSelect),
            Handlebars.registerHelper(
              "sc-date-time-controls",
              Bt.DateTimeControls
            );
        }
        static DateSelector(e) {
          if (Object.prototype.hasOwnProperty.call(e.hash, "id")) {
            const t = {};
            Object.prototype.hasOwnProperty.call(
              e.hash,
              "allowDateRangeSelection"
            ) && (t.allowDateRangeSelection = e.hash.allowDateRangeSelection),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "allowTimeRangeSelection"
              ) && (t.allowTimeRangeSelection = e.hash.allowTimeRangeSelection),
              Object.prototype.hasOwnProperty.call(e.hash, "calendar")
                ? (t.calendar =
                    R.getCalendar(e.hash.calendar) || R.getActiveCalendar())
                : (t.calendar = R.getActiveCalendar()),
              Object.prototype.hasOwnProperty.call(e.hash, "editYear") &&
                (t.editYear = e.hash.editYear),
              Object.prototype.hasOwnProperty.call(e.hash, "onDateSelect") &&
                (t.onDateSelect = e.hash.onDateSelect),
              Object.prototype.hasOwnProperty.call(e.hash, "position") &&
                (t.position = e.hash.position),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "showCalendarYear"
              ) && (t.showCalendarYear = e.hash.showCalendarYear),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "showDateSelector"
              ) && (t.showDateSelector = e.hash.showDateSelector),
              Object.prototype.hasOwnProperty.call(e.hash, "selectedEndDate") &&
                (t.selectedEndDate = e.hash.selectedEndDate),
              Object.prototype.hasOwnProperty.call(e.hash, "timeSelected") &&
                (t.timeSelected = e.hash.timeSelected),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "selectedStartDate"
              ) && (t.selectedStartDate = e.hash.selectedStartDate),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "showTimeSelector"
              ) && (t.showTimeSelector = e.hash.showTimeSelector),
              Object.prototype.hasOwnProperty.call(e.hash, "timeDelimiter") &&
                (t.timeDelimiter = e.hash.timeDelimiter),
              Object.prototype.hasOwnProperty.call(
                e.hash,
                "useCloneCalendars"
              ) && (t.useCloneCalendars = e.hash.useCloneCalendars);
            const a = e.hash.id,
              s = Ze.GetSelector(a, t);
            return new Handlebars.SafeString(s.build());
          }
          return "";
        }
        static FullCalendar(e) {
          const t = { id: "" };
          let a = "";
          Object.prototype.hasOwnProperty.call(e.hash, "allowChangeMonth") &&
            (t.allowChangeMonth = e.hash.allowChangeMonth),
            Object.prototype.hasOwnProperty.call(
              e.hash,
              "colorToMatchSeason"
            ) && (t.colorToMatchSeason = e.hash.colorToMatchSeason),
            Object.prototype.hasOwnProperty.call(e.hash, "cssClasses") &&
              (t.cssClasses = e.hash.cssClasses),
            Object.prototype.hasOwnProperty.call(e.hash, "date") &&
              (t.date = Object.assign({}, e.hash.date)),
            Object.prototype.hasOwnProperty.call(e.hash, "editYear") &&
              (t.editYear = e.hash.editYear),
            Object.prototype.hasOwnProperty.call(e.hash, "id") &&
              (t.id = e.hash.id),
            Object.prototype.hasOwnProperty.call(e.hash, "calendarId") &&
              (a = e.hash.calendarId),
            Object.prototype.hasOwnProperty.call(e.hash, "showCurrentDate") &&
              (t.showCurrentDate = e.hash.showCurrentDate),
            Object.prototype.hasOwnProperty.call(e.hash, "showDayDetails") &&
              (t.showDayDetails = e.hash.showDayDetails),
            Object.prototype.hasOwnProperty.call(e.hash, "showDescriptions") &&
              (t.showDescriptions = e.hash.showDescriptions),
            Object.prototype.hasOwnProperty.call(e.hash, "showSeasonName") &&
              (t.showSeasonName = e.hash.showSeasonName),
            Object.prototype.hasOwnProperty.call(e.hash, "showNoteCount") &&
              (t.showNoteCount = e.hash.showNoteCount),
            Object.prototype.hasOwnProperty.call(e.hash, "showMoonPhases") &&
              (t.showMoonPhases = e.hash.showMoonPhases),
            Object.prototype.hasOwnProperty.call(e.hash, "showYear") &&
              (t.showYear = e.hash.showYear),
            Object.prototype.hasOwnProperty.call(e.hash, "theme") &&
              ((t.theme = e.hash.theme),
              "none" !== t.theme &&
                "auto" !== t.theme &&
                tt.LoadThemeCSS(t.theme));
          let s = R.getCalendar(a);
          return (
            s || (s = R.getActiveCalendar()),
            new Handlebars.SafeString(ke.CalendarFull.Render(s, t))
          );
        }
        static Clock(e) {
          const t = { id: "" };
          let a = "";
          Object.prototype.hasOwnProperty.call(e.hash, "id") &&
            (t.id = e.hash.id),
            Object.prototype.hasOwnProperty.call(e.hash, "calendarId") &&
              (a = e.hash.calendarId),
            Object.prototype.hasOwnProperty.call(e.hash, "theme") &&
              ((t.theme = e.hash.theme),
              "none" !== t.theme &&
                "auto" !== t.theme &&
                tt.LoadThemeCSS(t.theme));
          let s = R.getCalendar(a);
          return (
            s || (s = R.getActiveCalendar()),
            new Handlebars.SafeString(ke.Clock.Render(s, t))
          );
        }
        static Icon(e) {
          if (Object.prototype.hasOwnProperty.call(e.hash, "name")) {
            let t = "#000000",
              a = "#000000";
            return (
              Object.prototype.hasOwnProperty.call(e.hash, "stroke") &&
                (t = e.hash.stroke),
              Object.prototype.hasOwnProperty.call(e.hash, "fill") &&
                (a = e.hash.fill),
              new Handlebars.SafeString(de(e.hash.name, t, a))
            );
          }
          return "";
        }
        static MultiSelect(e) {
          const t = { id: "", options: [] };
          return (
            Object.prototype.hasOwnProperty.call(e.hash, "id") &&
              (t.id = e.hash.id),
            Object.prototype.hasOwnProperty.call(e.hash, "options") &&
              (t.options = e.hash.options),
            new Handlebars.SafeString(ke.MultiSelect.Render(t))
          );
        }
        static DateTimeControls(e) {
          const t = {};
          return (
            Object.prototype.hasOwnProperty.call(e.hash, "showDateControls") &&
              (t.showDateControls = e.hash.showDateControls),
            Object.prototype.hasOwnProperty.call(e.hash, "showTimeControls") &&
              (t.showTimeControls = e.hash.showTimeControls),
            Object.prototype.hasOwnProperty.call(
              e.hash,
              "showPresetTimeOfDay"
            ) && (t.showPresetTimeOfDay = e.hash.showPresetTimeOfDay),
            Object.prototype.hasOwnProperty.call(e.hash, "displayType") &&
              (t.displayType = e.hash.displayType),
            Object.prototype.hasOwnProperty.call(e.hash, "fullDisplay") &&
              (t.fullDisplay = e.hash.fullDisplay),
            Object.prototype.hasOwnProperty.call(e.hash, "largeSteps") &&
              (t.largerSteps = e.hash.largeSteps),
            Object.prototype.hasOwnProperty.call(e.hash, "reverseTime") &&
              (t.reverseTime = e.hash.reverseTime),
            new Handlebars.SafeString(ke.DateTimeControls.Render(t))
          );
        }
      }
      class Zt extends FormApplication {
        constructor() {
          return super({}), Y;
        }
      }
      class Jt {
        static Register() {
          game.settings.register(t, `${game.world.id}.${n.Theme}`, {
            name: "FSC.Configuration.Theme.Title",
            hint: "FSC.Configuration.Theme.Description",
            scope: "client",
            config: !0,
            type: String,
            choices: me(),
            default: "",
            onChange: tt.ThemeChange.bind(tt),
          }),
            game.settings.register(t, n.Theme, {
              name: "FSC.Configuration.Theme.Title",
              hint: "FSC.Configuration.Theme.Description",
              scope: "client",
              config: !1,
              type: String,
              default: "dark",
            }),
            game.settings.register(t, n.OpenOnLoad, {
              name: "FSC.Configuration.Client.OpenOnLoad.Title",
              hint: "FSC.Configuration.Client.OpenOnLoad.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !0,
            }),
            game.settings.register(t, n.OpenCompact, {
              name: "FSC.Configuration.Client.OpenCompact.Title",
              hint: "FSC.Configuration.Client.OpenCompact.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !1,
            }),
            game.settings.register(t, n.RememberPosition, {
              name: "FSC.Configuration.Client.RememberPosition.Title",
              hint: "FSC.Configuration.Client.RememberPosition.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !0,
            }),
            game.settings.register(t, n.RememberCompactPosition, {
              name: "FSC.Configuration.Client.RememberCompactPosition.Title",
              hint: "FSC.Configuration.Client.RememberCompactPosition.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !1,
            }),
            game.settings.register(t, n.AppPosition, {
              name: "Application Position",
              hint: "",
              scope: "client",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.AppCompactPosition, {
              name: "Application Compact Position",
              hint: "",
              scope: "client",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.NoteReminderNotification, {
              name: "FSC.Configuration.Client.NoteReminderNotification.Title",
              hint: "FSC.Configuration.Client.NoteReminderNotification.Description",
              scope: "client",
              config: !0,
              type: String,
              choices: {
                whisper: H.Localize(
                  "FSC.Configuration.Client.NoteReminderNotification.Whisper"
                ),
                render: H.Localize(
                  "FSC.Configuration.Client.NoteReminderNotification.Render"
                ),
              },
              default: "whisper",
            }),
            game.settings.register(t, n.NoteListOpenDirection, {
              name: "FSC.Configuration.Client.NoteListOpenDirection.Title",
              hint: "FSC.Configuration.Client.NoteListOpenDirection.Description",
              scope: "client",
              config: !0,
              type: String,
              choices: {
                "sc-right": H.Localize("FSC.Right"),
                "sc-left": H.Localize("FSC.Left"),
                "sc-down": H.Localize("FSC.Down"),
              },
              default: "sc-right",
              onChange: tt.SideDrawerDirectionChange.bind(tt),
            }),
            game.settings.register(t, n.AlwaysShowNoteList, {
              name: "FSC.Configuration.Client.AlwaysShowNoteList.Title",
              hint: "FSC.Configuration.Client.AlwaysShowNoteList.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !1,
              onChange: tt.AlwaysShowNoteListChange.bind(tt),
            }),
            game.settings.register(t, n.PersistentOpen, {
              name: "FSC.Configuration.Client.PersistentOpen.Title",
              hint: "FSC.Configuration.Client.PersistentOpen.Description",
              scope: "client",
              config: !0,
              type: Boolean,
              default: !1,
              onChange: G.PersistenceChange.bind(G),
            }),
            game.settings.register(t, n.CompactViewScale, {
              name: "FSC.Configuration.Client.CompactViewScale.Title",
              hint: "FSC.Configuration.Client.CompactViewScale.Description",
              scope: "client",
              config: !0,
              type: Number,
              range: { min: 70, max: 200, step: 10 },
              default: 100,
              onChange: G.CompactScaleChange.bind(G),
            }),
            game.settings.registerMenu(t, n.CalendarMainApp, {
              name: "",
              label: "FSC.Title",
              hint: "",
              icon: "fa fa-calendar",
              type: Zt,
            }),
            game.settings.registerMenu(t, n.CalendarConfigurationMenu, {
              name: "",
              label: "FSC.Configuration.Title",
              hint: "",
              icon: "fa fa-cog",
              type: et,
            }),
            game.settings.register(t, n.CalendarConfiguration, {
              name: "Calendar Configuration",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
              onChange: R.loadCalendars.bind(R),
            }),
            game.settings.register(t, n.ActiveCalendar, {
              name: "Active Calendar",
              scope: "world",
              config: !1,
              type: String,
              default: "default",
              onChange: R.loadActiveCalendar.bind(R),
            }),
            game.settings.register(t, n.GlobalConfiguration, {
              name: "Global Configuration",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
              onChange: G.load.bind(G),
            }),
            game.settings.register(t, n.GeneralConfiguration, {
              name: "General Configuration",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.YearConfiguration, {
              name: "Year Configuration",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.WeekdayConfiguration, {
              name: "Weekday Configuration",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
            }),
            game.settings.register(t, n.MonthConfiguration, {
              name: "Month Configuration",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
            }),
            game.settings.register(t, n.CurrentDate, {
              name: "Current Date",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.LeapYearRule, {
              name: "Leap Year Rule",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.DefaultNoteVisibility, {
              name: "FSC.Configuration.DefaultNoteVisibility",
              hint: "FSC.Configuration.DefaultNoteVisibilityHint",
              scope: "world",
              type: Boolean,
              default: !1,
            }),
            game.settings.register(t, n.Notes, {
              name: "Notes",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
            }),
            game.settings.register(t, n.TimeConfiguration, {
              name: "Time",
              scope: "world",
              config: !1,
              type: Object,
              default: {},
            }),
            game.settings.register(t, n.SeasonConfiguration, {
              name: "Season Configuration",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
            }),
            game.settings.register(t, n.MoonConfiguration, {
              name: "Moon Configuration",
              scope: "world",
              config: !1,
              type: Array,
              default: [],
            }),
            game.settings.register(t, n.NoteCategories, {
              name: "Note Categories",
              scope: "world",
              config: !1,
              type: Array,
              default: [
                { name: "Holiday", color: "#148e94", textColor: "#FFFFFF" },
              ],
            });
        }
      }
      class Kt extends Ye {
        rule = h.None;
        customMod = 1;
        startingYear = 0;
        constructor() {
          super();
        }
        clone() {
          const e = new Kt();
          return (
            (e.id = this.id),
            (e.rule = this.rule),
            (e.customMod = this.customMod),
            (e.startingYear = this.startingYear),
            e
          );
        }
        toConfig() {
          return {
            id: this.id,
            rule: this.rule,
            customMod: this.customMod,
            startingYear: this.startingYear,
          };
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            rule: this.rule,
            customMod: this.customMod,
            startingYear: this.startingYear,
          };
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (super.loadFromSettings(e),
            Object.prototype.hasOwnProperty.call(e, "rule") &&
              (this.rule = e.rule),
            Object.prototype.hasOwnProperty.call(e, "customMod") &&
              (this.customMod = e.customMod),
            Object.prototype.hasOwnProperty.call(e, "startingYear") &&
              (this.startingYear = e.startingYear),
            this.rule === h.Custom &&
              this.customMod <= 0 &&
              (this.rule = h.None));
        }
        isLeapYear(e) {
          const t = R.getActiveCalendar();
          return (
            (e -= this.startingYear),
            J.isPF2E &&
              t.generalSettings.pf2eSync &&
              J.checkLeapYearRules(this),
            this.rule === h.Gregorian
              ? e % 4 == 0 && (e % 100 != 0 || (e % 100 == 0 && e % 400 == 0))
              : this.rule === h.Custom && e % this.customMod == 0
          );
        }
        howManyLeapYears(e) {
          let t = e - this.startingYear,
            a = 0;
          return (
            this.rule === h.Gregorian
              ? (a =
                  Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400))
              : this.rule === h.Custom &&
                0 !== this.customMod &&
                (a = Math.floor(t / this.customMod)),
            this.isLeapYear(e) && a > 0 && (a -= 1),
            a
          );
        }
        previousLeapYear(e) {
          if (
            this.rule === h.Gregorian ||
            (this.rule === h.Custom && 0 !== this.customMod)
          ) {
            let t = e - this.startingYear;
            for (; Number.isInteger(t) && !this.isLeapYear(t); ) t--;
            return t;
          }
          return null;
        }
        fraction(e) {
          const t = this.previousLeapYear(e);
          if (null !== t && 0 !== t) {
            const a = (e - this.startingYear) % t;
            return this.rule === h.Gregorian ? a / 4 : a / this.customMod;
          }
          return 0;
        }
      }
      class Xt extends Ye {
        prefix = "";
        postfix = "";
        selectedYear;
        visibleYear;
        showWeekdayHeadings = !0;
        firstWeekday = 0;
        yearZero = 0;
        leapYearRule;
        yearNames = [];
        yearNamesStart = 0;
        yearNamingRule = m.Default;
        constructor(e) {
          super("", e),
            (this.selectedYear = e),
            (this.visibleYear = e),
            (this.leapYearRule = new Kt());
        }
        toConfig() {
          return {
            id: this.id,
            numericRepresentation: this.numericRepresentation,
            prefix: this.prefix,
            postfix: this.postfix,
            showWeekdayHeadings: this.showWeekdayHeadings,
            firstWeekday: this.firstWeekday,
            yearZero: this.yearZero,
            yearNames: this.yearNames,
            yearNamingRule: this.yearNamingRule,
            yearNamesStart: this.yearNamesStart,
          };
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            firstWeekday: this.firstWeekday,
            numericRepresentation: this.numericRepresentation,
            yearZero: this.yearZero,
            yearNames: this.yearNames,
            yearNamesStart: this.yearNamesStart,
            yearNamingRule: this.yearNamingRule,
          };
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (Object.prototype.hasOwnProperty.call(e, "id") && (this.id = e.id),
            (this.numericRepresentation = e.numericRepresentation),
            (this.prefix = e.prefix),
            (this.postfix = e.postfix),
            Object.prototype.hasOwnProperty.call(e, "showWeekdayHeadings") &&
              (this.showWeekdayHeadings = e.showWeekdayHeadings),
            Object.prototype.hasOwnProperty.call(e, "firstWeekday") &&
              (this.firstWeekday = e.firstWeekday),
            Object.prototype.hasOwnProperty.call(e, "yearZero") &&
              (this.yearZero = e.yearZero),
            Object.prototype.hasOwnProperty.call(e, "yearNames") &&
              (this.yearNames = e.yearNames),
            Object.prototype.hasOwnProperty.call(e, "yearNamingRule") &&
              (this.yearNamingRule = e.yearNamingRule),
            Object.prototype.hasOwnProperty.call(e, "yearNamesStart") &&
              (this.yearNamesStart = e.yearNamesStart));
        }
        clone() {
          const e = new Xt(this.numericRepresentation);
          return (
            (e.id = this.id),
            (e.postfix = this.postfix),
            (e.prefix = this.prefix),
            (e.yearZero = this.yearZero),
            (e.selectedYear = this.selectedYear),
            (e.visibleYear = this.visibleYear),
            (e.leapYearRule = this.leapYearRule.clone()),
            (e.showWeekdayHeadings = this.showWeekdayHeadings),
            (e.firstWeekday = this.firstWeekday),
            (e.yearNames = this.yearNames.map((e) => e)),
            (e.yearNamesStart = this.yearNamesStart),
            (e.yearNamingRule = this.yearNamingRule),
            e
          );
        }
        getDisplayName(e = !1) {
          let t;
          const a = this.getYearName(e ? this.selectedYear : this.visibleYear);
          return (
            (t = a
              ? `${this.prefix} ${a} (${
                  e ? this.selectedYear.toString() : this.visibleYear.toString()
                }) ${this.postfix}`
              : `${"" !== this.prefix ? this.prefix + " " : ""}${
                  e ? this.selectedYear.toString() : this.visibleYear.toString()
                }${"" !== this.postfix ? " " + this.postfix : ""}`),
            t
          );
        }
        getYearName(e) {
          let t = "";
          if (this.yearNames.length) {
            let a = 0;
            if (this.yearNamingRule === m.Repeat)
              a =
                (((e - this.yearNamesStart) % this.yearNames.length) +
                  this.yearNames.length) %
                this.yearNames.length;
            else if (this.yearNamingRule === m.Random) {
              a =
                ((((function (e) {
                  let t = 0;
                  if (0 === e.length) return t;
                  for (let a = 0; a < e.length; a++)
                    (t = (t << 5) - t + e.charCodeAt(a)), (t &= t);
                  return t;
                })(`${e}-AbCxYz`) -
                  this.yearNamesStart) %
                  this.yearNames.length) +
                  this.yearNames.length) %
                this.yearNames.length;
            } else
              (a = Math.abs(this.yearNamesStart - e)),
                a >= this.yearNames.length && (a = this.yearNames.length - 1);
            t = this.yearNames[a];
          }
          return t;
        }
      }
      class Qt extends Ye {
        gameWorldTimeIntegration = g.Mixed;
        showClock = !0;
        noteDefaultVisibility = !0;
        postNoteRemindersOnFoundryLoad = !0;
        pf2eSync = !0;
        dateFormat = {
          date: "MMMM DD, YYYY",
          time: "HH:mm:ss",
          monthYear: "MMMM YAYYYYYZ",
          chatTime: "MMM DD, YYYY HH:mm",
        };
        compactViewOptions = { controlLayout: w.Full };
        constructor() {
          super();
        }
        clone() {
          const e = new Qt();
          return (
            (e.id = this.id),
            (e.gameWorldTimeIntegration = this.gameWorldTimeIntegration),
            (e.showClock = this.showClock),
            (e.noteDefaultVisibility = this.noteDefaultVisibility),
            (e.postNoteRemindersOnFoundryLoad =
              this.postNoteRemindersOnFoundryLoad),
            (e.pf2eSync = this.pf2eSync),
            (e.dateFormat.date = this.dateFormat.date),
            (e.dateFormat.time = this.dateFormat.time),
            (e.dateFormat.monthYear = this.dateFormat.monthYear),
            (e.dateFormat.chatTime = this.dateFormat.chatTime),
            (e.compactViewOptions.controlLayout =
              this.compactViewOptions.controlLayout),
            e
          );
        }
        toTemplate() {
          return {
            ...super.toTemplate(),
            gameWorldTimeIntegration: this.gameWorldTimeIntegration,
            showClock: this.showClock,
            noteDefaultVisibility: this.noteDefaultVisibility,
            postNoteRemindersOnFoundryLoad: this.postNoteRemindersOnFoundryLoad,
            pf2eSync: this.pf2eSync,
            dateFormat: this.dateFormat,
            compactViewOptions: this.compactViewOptions,
          };
        }
        toConfig() {
          return {
            id: this.id,
            gameWorldTimeIntegration: this.gameWorldTimeIntegration,
            showClock: this.showClock,
            noteDefaultVisibility: this.noteDefaultVisibility,
            postNoteRemindersOnFoundryLoad: this.postNoteRemindersOnFoundryLoad,
            pf2eSync: this.pf2eSync,
            dateFormat: this.dateFormat,
            compactViewOptions: this.compactViewOptions,
          };
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            ((this.id = e.id),
            (this.gameWorldTimeIntegration = e.gameWorldTimeIntegration),
            (this.showClock = e.showClock),
            (this.noteDefaultVisibility = e.noteDefaultVisibility),
            Object.prototype.hasOwnProperty.call(e, "pf2eSync") &&
              (this.pf2eSync = e.pf2eSync),
            Object.prototype.hasOwnProperty.call(e, "dateFormat") &&
              ((this.dateFormat = e.dateFormat),
              Object.prototype.hasOwnProperty.call(e.dateFormat, "chatTime") ||
                (this.dateFormat.chatTime = "MMM DD, YYYY HH:mm")),
            Object.prototype.hasOwnProperty.call(e, "compactViewOptions") &&
              (this.compactViewOptions = e.compactViewOptions),
            Object.prototype.hasOwnProperty.call(
              e,
              "postNoteRemindersOnFoundryLoad"
            ) &&
              (this.postNoteRemindersOnFoundryLoad =
                e.postNoteRemindersOnFoundryLoad));
        }
      }
      class ea {
        calendarId;
        intervalNumber;
        saveIntervalNumber;
        status = S.Stopped;
        pauseClicked = !1;
        uf;
        updateListeners = [];
        constructor(e, t) {
          (this.calendarId = e), (this.uf = t);
        }
        get updateFrequency() {
          return this.uf;
        }
        set updateFrequency(e) {
          (this.uf = e),
            void 0 !== this.intervalNumber &&
              (window.clearInterval(this.intervalNumber),
              (this.intervalNumber = window.setInterval(
                this.interval.bind(this),
                1e3 * this.updateFrequency
              )));
        }
        start(e = !1) {
          this.pauseClicked = !1;
          const t = R.getCalendar(this.calendarId);
          t &&
            (this.status !== S.Started
              ? ((this.pauseClicked = !1),
                t.time.unifyGameAndClockPause && !e && game.togglePause(!1, !0),
                void 0 === this.intervalNumber
                  ? ((this.intervalNumber = window.setInterval(
                      this.interval.bind(this),
                      1e3 * this.updateFrequency
                    )),
                    this.updateStatus(),
                    H.IsGm() &&
                      G.primary &&
                      (this.saveInterval(),
                      (this.saveIntervalNumber = window.setInterval(
                        this.saveInterval.bind(this),
                        1e4
                      ))))
                  : this.updateStatus())
              : ((this.pauseClicked = !0),
                this.updateStatus(S.Paused),
                t.time.unifyGameAndClockPause && game.togglePause(!0, !0)));
        }
        stop() {
          if (((this.pauseClicked = !1), void 0 !== this.intervalNumber)) {
            window.clearInterval(this.intervalNumber),
              window.clearInterval(this.saveIntervalNumber);
            const e = R.getCalendar(this.calendarId);
            e && e.time.unifyGameAndClockPause && game.togglePause(!0, !0),
              H.IsGm() && G.primary && this.saveInterval(),
              (this.intervalNumber = void 0),
              (this.saveIntervalNumber = void 0),
              this.updateStatus();
          }
        }
        pause() {
          this.status === S.Started &&
            ((this.pauseClicked = !0), (this.status = S.Paused));
        }
        getStatus() {
          return this.status;
        }
        setStatus(e) {
          this.updateStatus(e);
        }
        interval() {
          if ((this.updateStatus(), this.status === S.Started)) {
            const e = R.getCalendar(this.calendarId);
            if (e) {
              const t = e.time.gameTimeRatio * this.updateFrequency;
              e.changeDateTime({ seconds: t }, { updateApp: !1, save: !1 }),
                H.IsGm() &&
                  G.primary &&
                  e.generalSettings.gameWorldTimeIntegration === g.None &&
                  O.emit({ type: u.clock, data: this.status }).catch(P.error),
                this.callListeners();
            }
          }
        }
        saveInterval() {
          if (this.status === S.Started) {
            const e = R.getCalendar(this.calendarId);
            e &&
              H.IsGm() &&
              G.primary &&
              (e.generalSettings.gameWorldTimeIntegration === g.None
                ? O.emit({ type: u.clock, data: this.status }).catch(P.error)
                : e.syncTime().catch(P.error),
              R.saveCalendars().catch(P.error));
          }
        }
        updateStatus(e = null) {
          const t = R.getCalendar(this.calendarId);
          if (t) {
            const a = this.status;
            null !== e
              ? (this.status = e)
              : void 0 !== this.intervalNumber
              ? this.pauseClicked || game.paused || t.time.combatRunning
                ? (this.status = S.Paused)
                : (this.status = S.Started)
              : (this.status = S.Stopped),
              a !== this.status &&
                (Ie.emit(C.ClockStartStop, t),
                this.callListeners(),
                this.emitSocket());
          }
        }
        emitSocket() {
          if (H.IsGm() && G.primary) {
            const e = { type: u.clock, data: this.status };
            O.emit(e).catch(P.error);
          }
        }
        registerUpdateListener(e, t) {
          const a = this.updateListeners.findIndex((t) => t.key === e);
          -1 === a
            ? this.updateListeners.push({ key: e, func: t })
            : (this.updateListeners[a].func = t);
        }
        callListeners() {
          for (let e = 0; e < this.updateListeners.length; e++)
            this.updateListeners[e].func(this.status);
        }
      }
      class ta extends Ye {
        hoursInDay;
        minutesInHour;
        secondsInMinute;
        gameTimeRatio;
        seconds = 0;
        secondsPerDay;
        combatRunning = !1;
        unifyGameAndClockPause = !1;
        updateFrequency = 1;
        constructor(e = 24, t = 60, a = 60) {
          super(),
            (this.hoursInDay = e),
            (this.minutesInHour = t),
            (this.secondsInMinute = a),
            (this.gameTimeRatio = 1),
            (this.secondsPerDay =
              this.hoursInDay * this.minutesInHour * this.secondsInMinute);
        }
        toConfig() {
          return {
            id: this.id,
            hoursInDay: this.hoursInDay,
            minutesInHour: this.minutesInHour,
            secondsInMinute: this.secondsInMinute,
            gameTimeRatio: this.gameTimeRatio,
            unifyGameAndClockPause: this.unifyGameAndClockPause,
            updateFrequency: this.updateFrequency,
          };
        }
        clone() {
          const e = new ta(
            this.hoursInDay,
            this.minutesInHour,
            this.secondsInMinute
          );
          return (
            (e.id = this.id),
            (e.seconds = this.seconds),
            (e.gameTimeRatio = this.gameTimeRatio),
            (e.combatRunning = this.combatRunning),
            (e.unifyGameAndClockPause = this.unifyGameAndClockPause),
            (e.updateFrequency = this.updateFrequency),
            e
          );
        }
        loadFromSettings(e) {
          e &&
            Object.keys(e).length &&
            (Object.prototype.hasOwnProperty.call(e, "id") && (this.id = e.id),
            (this.hoursInDay = e.hoursInDay),
            (this.minutesInHour = e.minutesInHour),
            (this.secondsInMinute = e.secondsInMinute),
            (this.gameTimeRatio = e.gameTimeRatio),
            (this.secondsPerDay =
              this.hoursInDay * this.minutesInHour * this.secondsInMinute),
            Object.prototype.hasOwnProperty.call(e, "unifyGameAndClockPause") &&
              (this.unifyGameAndClockPause = e.unifyGameAndClockPause),
            Object.prototype.hasOwnProperty.call(e, "updateFrequency") &&
              (this.updateFrequency = e.updateFrequency));
        }
        getCurrentTime() {
          let e = this.seconds,
            t = 0,
            a = 0;
          return (
            e >= this.secondsInMinute &&
              ((t = Math.floor(e / this.secondsInMinute)),
              (e -= t * this.secondsInMinute)),
            t >= this.minutesInHour &&
              ((a = Math.floor(t / this.minutesInHour)),
              (t -= a * this.minutesInHour)),
            (e = Math.floor(e)),
            { hour: a, minute: t, seconds: e }
          );
        }
        toString() {
          const e = this.getCurrentTime(),
            t = R.getActiveCalendar(),
            a = t.getMonthAndDayIndex();
          return K(
            {
              year: t.year.numericRepresentation,
              month: a.month || 0,
              day: a.day || 0,
              ...e,
            },
            t.generalSettings.dateFormat.time,
            t
          );
        }
        setTime(e = 0, t = 0, a = 0) {
          this.seconds =
            e * this.minutesInHour * this.secondsInMinute +
            t * this.secondsInMinute +
            a;
        }
        changeTime(e = 0, t = 0, a = 0) {
          a = +a.toFixed(3);
          const s =
              e * this.minutesInHour * this.secondsInMinute +
              t * this.secondsInMinute +
              a,
            n = this.seconds + s;
          if (n >= this.secondsPerDay) {
            this.seconds = 0;
            return this.changeTime(0, 0, n - this.secondsPerDay) + 1;
          }
          if (n < 0) {
            this.seconds = this.secondsPerDay;
            return this.changeTime(0, 0, n) + -1;
          }
          return (this.seconds = n), 0;
        }
        getTotalSeconds(e, t = !0) {
          return (
            e * this.hoursInDay * this.minutesInHour * this.secondsInMinute +
            (t ? this.seconds : 0)
          );
        }
        async setWorldTime(e) {
          const t = e - game.time.worldTime;
          await game.time.advance(t);
        }
      }
      class aa {
        static get isPF1E() {
          return "pf1" === Z.systemID;
        }
      }
      class sa extends Ye {
        generalSettings = new Qt();
        year;
        months = [];
        weekdays = [];
        seasons = [];
        moons = [];
        time;
        notes = [];
        noteCategories = [];
        timeKeeper;
        timeChangeTriggered = !1;
        combatChangeTriggered = !1;
        constructor(e, t, a = { id: "" }) {
          super(t),
            (this.id = e || U()),
            (this.time = new ta()),
            (this.year = new Xt(0)),
            (this.timeKeeper = new ea(this.id, this.time.updateFrequency)),
            Object.keys(a).length > 1 && this.loadFromSettings(a);
        }
        clone(e = !0) {
          const t = new sa(this.id, this.name);
          return (
            (t.id = this.id),
            (t.name = this.name),
            (t.generalSettings = this.generalSettings.clone()),
            (t.year = this.year.clone()),
            (t.months = this.months.map((e) => e.clone())),
            (t.weekdays = this.weekdays.map((e) => e.clone())),
            (t.seasons = this.seasons.map((e) => e.clone())),
            (t.moons = this.moons.map((e) => e.clone())),
            (t.time = this.time.clone()),
            e &&
              (t.noteCategories = this.noteCategories.map((e) => ({
                id: e.id,
                name: e.name,
                textColor: e.textColor,
                color: e.color,
              }))),
            t
          );
        }
        toTemplate() {
          let e,
            t,
            a = this.year.selectedYear;
          const s = this.getMonthAndDayIndex(),
            n = this.getMonthAndDayIndex("selected"),
            i = this.getMonthAndDayIndex("visible");
          void 0 !== n.month
            ? ((e = n.month), (t = n.day || 0))
            : ((a = this.year.numericRepresentation),
              (e = s.month || 0),
              (t = s.day || 0));
          const o = z.getNoteCountsForDay(this.id, a, e, t);
          return {
            ...super.toTemplate(),
            calendarDisplayId: `sc_${this.id}_calendar`,
            clockDisplayId: `sc_${this.id}_clock`,
            currentYear: this.year.toTemplate(),
            id: this.id,
            name: this.name,
            selectedDay: {
              dateDisplay: K(
                { year: a, month: e, day: t, hour: 0, minute: 0, seconds: 0 },
                this.generalSettings.dateFormat.date,
                this
              ),
              noteCount: o.count,
              noteReminderCount: o.reminderCount,
              notes: z.getNotesForDay(this.id, a, e, t),
            },
            visibleDate: { year: this.year.visibleYear, month: i.month || 0 },
          };
        }
        toConfig() {
          return {
            id: this.id,
            name: this.name,
            currentDate: this.getCurrentDate(),
            general: this.generalSettings.toConfig(),
            leapYear: this.year.leapYearRule.toConfig(),
            months: this.months.map((e) => e.toConfig()),
            moons: this.moons.map((e) => e.toConfig()),
            noteCategories: this.noteCategories,
            seasons: this.seasons.map((e) => e.toConfig()),
            time: this.time.toConfig(),
            weekdays: this.weekdays.map((e) => e.toConfig()),
            year: this.year.toConfig(),
          };
        }
        loadFromSettings(e) {
          e.id && ((this.id = e.id), (this.timeKeeper.calendarId = this.id)),
            e.name && (this.name = e.name),
            e.year
              ? this.year.loadFromSettings(e.year)
              : e.yearSettings
              ? this.year.loadFromSettings(e.yearSettings)
              : (P.warn(
                  `Invalid year configuration found when loading calendar "${this.name}", setting year to default configuration`
                ),
                (this.year = new Xt(0)));
          const t = e.months || e.monthSettings;
          if (Array.isArray(t)) {
            this.months = [];
            for (let e = 0; e < t.length; e++) {
              const a = new $e();
              a.loadFromSettings(t[e]), this.months.push(a);
            }
            0 === this.months.length &&
              this.months.push(new $e("New Month", 1, 0, 30));
          }
          const a = e.weekdays || e.weekdaySettings;
          if (Array.isArray(a)) {
            this.weekdays = [];
            for (let e = 0; e < a.length; e++) {
              const t = new qe();
              t.loadFromSettings(a[e]), this.weekdays.push(t);
            }
          }
          e.leapYear
            ? this.year.leapYearRule.loadFromSettings(e.leapYear)
            : e.leapYearSettings &&
              this.year.leapYearRule.loadFromSettings(e.leapYearSettings),
            e.time
              ? (this.time.loadFromSettings(e.time),
                (this.timeKeeper.updateFrequency = this.time.updateFrequency))
              : e.timeSettings &&
                (this.time.loadFromSettings(e.timeSettings),
                (this.timeKeeper.updateFrequency = this.time.updateFrequency));
          const s = e.seasons || e.seasonSettings;
          if (Array.isArray(s)) {
            this.seasons = [];
            for (let e = 0; e < s.length; e++) {
              const t = new Ge();
              t.loadFromSettings(s[e]), this.seasons.push(t);
            }
          }
          const n = e.moons || e.moonSettings;
          if (Array.isArray(n)) {
            this.moons = [];
            for (let e = 0; e < n.length; e++) {
              const t = new ze();
              t.loadFromSettings(n[e]), this.moons.push(t);
            }
          }
          e.general
            ? this.generalSettings.loadFromSettings(e.general)
            : e.generalSettings &&
              this.generalSettings.loadFromSettings(e.generalSettings),
            e.noteCategories && (this.noteCategories = e.noteCategories),
            e.currentDate
              ? ((this.year.numericRepresentation = e.currentDate.year),
                (this.year.selectedYear = e.currentDate.year),
                (this.year.visibleYear = e.currentDate.year),
                this.resetMonths("current"),
                this.resetMonths("visible"),
                e.currentDate.month > -1 &&
                e.currentDate.month < this.months.length
                  ? ((this.months[e.currentDate.month].current = !0),
                    (this.months[e.currentDate.month].visible = !0),
                    e.currentDate.day > -1 &&
                    e.currentDate.day <
                      this.months[e.currentDate.month].days.length
                      ? (this.months[e.currentDate.month].days[
                          e.currentDate.day
                        ].current = !0)
                      : (P.warn(
                          "Saved current day could not be found in this month, perhaps number of days has changed. Setting current day to first day of month"
                        ),
                        (this.months[e.currentDate.month].days[0].current =
                          !0)))
                  : this.months.length &&
                    (P.warn(
                      "Saved current month could not be found, perhaps months have changed. Setting current month to the first month"
                    ),
                    (this.months[0].current = !0),
                    (this.months[0].visible = !0),
                    (this.months[0].days[0].current = !0)),
                (this.time.seconds = e.currentDate.seconds),
                void 0 === this.time.seconds && (this.time.seconds = 0))
              : this.months.length
              ? (P.warn(
                  "No current date setting found, setting default current date."
                ),
                (this.months[0].current = !0),
                (this.months[0].visible = !0),
                (this.months[0].days[0].current = !0))
              : P.error("Error setting the current date.");
        }
        getCurrentDate() {
          const e = this.getMonthAndDayIndex();
          return {
            year: this.year.numericRepresentation,
            month: e.month || 0,
            day: e.day || 0,
            seconds: this.time.seconds,
          };
        }
        getDateTime() {
          const e = {
              year: 0,
              month: 0,
              day: 0,
              hour: 0,
              minute: 0,
              seconds: 0,
            },
            t = this.getMonthAndDayIndex("selected"),
            a = this.getMonthAndDayIndex();
          if (void 0 !== t.month)
            (e.year = this.year.selectedYear),
              (e.month = t.month),
              (e.day = t.day || 0);
          else {
            (e.year = this.year.numericRepresentation),
              (e.month = a.month || 0),
              (e.day = a.day || 0);
            const t = this.time.getCurrentTime();
            (e.hour = t.hour), (e.minute = t.minute), (e.seconds = t.seconds);
          }
          return e;
        }
        getCurrentSeason() {
          let e = this.getMonthIndex("visible");
          -1 === e && (e = 0);
          let t = this.months[e].getDayIndex("selected");
          -1 === t && ((t = this.months[e].getDayIndex()), -1 === t && (t = 0));
          const a = this.getSeason(e, t);
          return { name: a.name, color: a.color, icon: a.icon };
        }
        getMonth(e = "current") {
          const t = e.toLowerCase();
          return this.months.find((e) => e[t]);
        }
        getMonthIndex(e = "current") {
          const t = e.toLowerCase();
          return this.months.findIndex((e) => e[t]);
        }
        getMonthAndDayIndex(e = "current") {
          const t = e.toLowerCase(),
            a = { month: 0, day: 0 },
            s = this.months.findIndex((e) => e[t]);
          if (s > -1) {
            a.month = s;
            const e = this.months[s].getDayIndex(t);
            e > -1 && (a.day = e);
          } else a.month = void 0;
          return a;
        }
        getSeason(e, t) {
          let a = new Ge("", 0, 0);
          if (t >= 0 && e >= 0) {
            let s = null;
            const n = this.seasons.sort(
              (e, t) =>
                e.startingMonth - t.startingMonth ||
                e.startingDay - t.startingDay
            );
            for (let a = 0; a < n.length; a++)
              ((n[a].startingMonth === e && n[a].startingDay <= t) ||
                n[a].startingMonth < e) &&
                (s = n[a]);
            null === s && (s = n[n.length - 1]), s && (a = s.clone());
          }
          return a;
        }
        getSunriseSunsetTime(e, t, a, s = !0, n = !0) {
          const i = R.getActiveCalendar(),
            o = this.seasons.sort(
              (e, t) =>
                e.startingMonth - t.startingMonth ||
                e.startingDay - t.startingDay
            );
          let r = o.length - 1;
          for (let e = 0; e < o.length; e++)
            ((o[e].startingMonth === t && o[e].startingDay <= a) ||
              o[e].startingMonth < t) &&
              (r = e);
          const c = (r + 1) % this.seasons.length;
          if (r < o.length && c < o.length) {
            const l = o[r],
              d = o[c];
            let h = e,
              m = h;
            r === o.length - 1 &&
              ((t < o[r].startingMonth ||
                (o[r].startingMonth === t && a < o[r].startingDay)) &&
                (h = e - 1),
              (m = h + 1));
            const u = ae(
                i,
                {
                  year: h,
                  month: l.startingMonth,
                  day: l.startingDay,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                },
                { year: e, month: t, day: a, hour: 0, minute: 0, seconds: 0 }
              ),
              p = ae(
                i,
                {
                  year: h,
                  month: l.startingMonth,
                  day: l.startingDay,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                },
                {
                  year: m,
                  month: d.startingMonth,
                  day: d.startingDay,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                }
              ),
              g =
                u *
                ((s
                  ? d.sunriseTime - l.sunriseTime
                  : d.sunsetTime - l.sunsetTime) /
                  p),
              f = Math.round((s ? l.sunriseTime : l.sunsetTime) + g);
            return n
              ? ie(
                  { year: e, month: t, day: a, hour: 0, minute: 0, seconds: 0 },
                  i
                ) + f
              : f;
          }
          return 0;
        }
        daysIntoWeeks(e, t, a) {
          const s = [],
            n = this.monthStartingDayOfWeek(e, t),
            i = this.year.leapYearRule.isLeapYear(t),
            o = this.months[e].getDaysForTemplate(i);
          if (o.length && a > 0) {
            const e = [];
            let t = 0;
            for (let s = 0; s < a; s++)
              if (s < n) e.push(!1);
              else {
                const a = s - n;
                a < o.length ? (e.push(o[a]), t++) : e.push(!1);
              }
            s.push(e);
            const i = Math.ceil((o.length - t) / a);
            for (let e = 0; e < i; e++) {
              const n = [];
              for (let s = 0; s < a; s++) {
                const i = t + e * a + s;
                i < o.length ? n.push(o[i]) : n.push(!1);
              }
              s.push(n);
            }
          }
          return s;
        }
        dayOfTheWeek(e, t, a) {
          if (this.weekdays.length) {
            const s = R.getActiveCalendar();
            if (J.isPF2E && s.generalSettings.pf2eSync) {
              const e = J.weekdayAdjust();
              void 0 !== e && (this.year.firstWeekday = e);
            }
            const n = this.months[t];
            let i;
            return (
              (i =
                n && null !== n.startingWeekday
                  ? a + n.startingWeekday - 1
                  : this.dateToDays(e, t, a) + this.year.firstWeekday),
              ((i % this.weekdays.length) + this.weekdays.length) %
                this.weekdays.length
            );
          }
          return 0;
        }
        monthStartingDayOfWeek(e, t) {
          return e > -1 &&
            e < this.months.length &&
            (!this.months[e].intercalary || this.months[e].intercalaryInclude)
            ? this.dayOfTheWeek(t, e, 0)
            : 0;
        }
        resetMonths(e = "current") {
          const t = e.toLowerCase();
          this.months.forEach((a) => {
            "visible" !== e && a.resetDays(e), (a[t] = !1);
          });
        }
        setCurrentToVisible() {
          (this.year.visibleYear = this.year.numericRepresentation),
            this.resetMonths("visible");
          const e = this.getMonth();
          e && (e.visible = !0);
        }
        updateMonth(e, t, a, s = null) {
          const n = t.toLowerCase(),
            i =
              "current" === n
                ? this.year.numericRepresentation
                : "visible" === n
                ? this.year.visibleYear
                : this.year.selectedYear,
            o = this.year.leapYearRule.isLeapYear(i);
          let r;
          if (
            ((-1 === e || e >= this.months.length) &&
              (e = this.months.length - 1),
            null !== s)
          )
            r = s;
          else {
            r = this.getMonthAndDayIndex().day || 0;
          }
          if (
            (this.resetMonths(t),
            (o && 0 === this.months[e].numberOfLeapYearDays) ||
              (!o && 0 === this.months[e].numberOfDays))
          )
            return (this.months[e][n] = !0), this.changeMonth(a ? 1 : -1, t, s);
          (this.months[e][n] = !0),
            "current" === n && this.months[e].updateDay(r, o);
        }
        changeYear(e, t = !0, a = "visible", s = null) {
          const n = a.toLowerCase();
          if (
            ("visible" === n
              ? (this.year.visibleYear = this.year.visibleYear + e)
              : "selected" === n
              ? (this.year.selectedYear = this.year.selectedYear + e)
              : (this.year.numericRepresentation =
                  this.year.numericRepresentation + e),
            this.months.length && t)
          ) {
            let t = 0;
            -1 === e && (t = this.months.length - 1),
              this.updateMonth(t, a, e > 0, s);
          }
        }
        changeMonth(e, t = "visible", a = null) {
          const s = t.toLowerCase(),
            n = e > 0;
          for (let i = 0; i < this.months.length; i++) {
            if (this.months[i][s]) {
              if (n && i + e >= this.months.length) {
                this.changeYear(1, !0, s, a);
                const t = e - (this.months.length - i);
                t > 0 && this.changeMonth(t, s, a);
              } else if (!n && i + e < 0) {
                this.changeYear(-1, !0, s, a);
                const t = e + i + 1;
                t < 0 && this.changeMonth(t, s, a);
              } else this.updateMonth(i + e, t, n, a);
              break;
            }
          }
        }
        changeDay(e, t = "current") {
          const a = t.toLowerCase(),
            s =
              "current" === a
                ? this.year.numericRepresentation
                : this.year.selectedYear,
            n = this.year.leapYearRule.isLeapYear(s),
            i = this.getMonth(a);
          if (i) {
            const t = e > 0,
              s = i.getDayIndex(a),
              o = n ? i.numberOfLeapYearDays : i.numberOfDays;
            t && s + e >= o
              ? (this.changeMonth(1, a, 0), this.changeDay(e - (o - s), a))
              : !t && s + e < 0
              ? (this.changeMonth(-1, a, -1), this.changeDay(e + s + 1, a))
              : i.changeDay(e, n, a);
          }
        }
        changeDayBulk(e, t = "current") {
          let a = this.year.leapYearRule.isLeapYear(
              this.year.numericRepresentation
            ),
            s = this.totalNumberOfDays(a, !0);
          for (; e > s; )
            this.changeYear(1, !1, t),
              (e -= s),
              (a = this.year.leapYearRule.isLeapYear(
                this.year.numericRepresentation
              )),
              (s = this.totalNumberOfDays(a, !0));
          this.changeDay(e, t);
        }
        totalNumberOfDays(e = !1, t = !1) {
          let a = 0;
          return (
            this.months.forEach((s) => {
              ((s.intercalary && s.intercalaryInclude) ||
                !s.intercalary ||
                t) &&
                (a += e ? s.numberOfLeapYearDays : s.numberOfDays);
            }),
            a
          );
        }
        dateToDays(e, t, a, s = !1) {
          const n = e < this.year.yearZero,
            i = this.totalNumberOfDays(!1, s),
            o = this.totalNumberOfDays(!0, s) - i,
            r = this.year.leapYearRule.isLeapYear(e),
            c = this.year.leapYearRule.howManyLeapYears(e),
            l = this.year.leapYearRule.howManyLeapYears(this.year.yearZero);
          let d,
            m = Math.abs(e - this.year.yearZero);
          t < 0
            ? (t = 0)
            : t >= this.months.length && (t = this.months.length - 1),
            n && (m -= 1);
          let u = a + 1,
            p = i * m;
          if ((u < 1 && (u = 1), n)) {
            (d = r ? (l - (c + 1)) * o : (l - c) * o), (p += d);
            for (let e = this.months.length - 1; e >= 0; e--)
              e > t &&
                (s ||
                  !this.months[e].intercalary ||
                  (this.months[e].intercalary &&
                    this.months[e].intercalaryInclude)) &&
                (p += r
                  ? this.months[e].numberOfLeapYearDays
                  : this.months[e].numberOfDays);
            p +=
              (r
                ? this.months[t].numberOfLeapYearDays
                : this.months[t].numberOfDays) - u;
          } else {
            (d = Math.abs(c - l) * o), (p += d);
            for (let e = 0; e < this.months.length; e++)
              e < t &&
                (s ||
                  !this.months[e].intercalary ||
                  (this.months[e].intercalary &&
                    this.months[e].intercalaryInclude)) &&
                (p += r
                  ? this.months[e].numberOfLeapYearDays
                  : this.months[e].numberOfDays);
            p += u;
          }
          return (
            n
              ? ((p += 1),
                e <= 0 &&
                  this.year.leapYearRule.rule !== h.None &&
                  (0 !== this.year.yearZero || r
                    ? 0 !== this.year.yearZero && r && (p += o)
                    : (p -= o)))
              : (p -= 1),
            e > 0 &&
              0 === this.year.yearZero &&
              this.year.leapYearRule.rule !== h.None &&
              (p += o),
            n ? -1 * p : p
          );
        }
        secondsToDate(e) {
          const t = e < 0;
          let a, s, n, i;
          (e = Math.abs(e)),
            (s = Math.floor(e / this.time.secondsPerDay)),
            (e -= s * this.time.secondsPerDay);
          let o = t ? this.time.secondsPerDay - e : e;
          const r =
            Math.floor(
              o / (this.time.secondsInMinute * this.time.minutesInHour)
            ) % this.time.hoursInDay;
          o -= r * (this.time.secondsInMinute * this.time.minutesInHour);
          const c =
            Math.floor(o / this.time.secondsInMinute) %
            this.time.secondsInMinute;
          o -= c * this.time.secondsInMinute;
          const l = o % 60;
          if (t) {
            i = this.year.yearZero - 1;
            let e = this.year.leapYearRule.isLeapYear(i);
            for (
              n = this.months.length - 1,
                a = e
                  ? this.months[n].numberOfLeapYearDays - 1
                  : this.months[n].numberOfDays - 1,
                0 === l && 0 === c && 0 === r && s--;
              s > 0;

            ) {
              const t = this.totalNumberOfDays(e, !0);
              let o = e
                ? this.months[n].numberOfLeapYearDays
                : this.months[n].numberOfDays;
              if (s >= t)
                (i -= 1),
                  (e = this.year.leapYearRule.isLeapYear(i)),
                  (o = e
                    ? this.months[n].numberOfLeapYearDays
                    : this.months[n].numberOfDays),
                  (s -= t);
              else if (s >= o) {
                n -= 1;
                let t = e
                    ? this.months[n].numberOfLeapYearDays
                    : this.months[n].numberOfDays,
                  i = 0;
                for (; 0 === t && i <= this.months.length; )
                  n--,
                    (t = e
                      ? this.months[n].numberOfLeapYearDays
                      : this.months[n].numberOfDays),
                    i++;
                (a = e
                  ? this.months[n].numberOfLeapYearDays - 1
                  : this.months[n].numberOfDays - 1),
                  (s -= o);
              } else (a -= 1), (s -= 1);
            }
          } else {
            i = this.year.yearZero;
            let e = this.year.leapYearRule.isLeapYear(i);
            for (n = 0, a = 0; s > 0; ) {
              const t = this.totalNumberOfDays(e, !0),
                o = e
                  ? this.months[n].numberOfLeapYearDays
                  : this.months[n].numberOfDays;
              if (s >= t)
                (i += 1), (e = this.year.leapYearRule.isLeapYear(i)), (s -= t);
              else if (s >= o) {
                n += 1;
                let t = e
                    ? this.months[n].numberOfLeapYearDays
                    : this.months[n].numberOfDays,
                  a = 0;
                for (; 0 === t && a <= this.months.length; )
                  n++,
                    (t = e
                      ? this.months[n].numberOfLeapYearDays
                      : this.months[n].numberOfDays),
                    a++;
                s -= o;
              } else (a += 1), (s -= 1);
            }
            i < 0 && a++;
          }
          return { year: i, month: n, day: a, hour: r, minute: c, seconds: l };
        }
        secondsToInterval(e) {
          let t,
            a = e,
            s = 0,
            n = 0;
          a >= this.time.secondsInMinute &&
            ((s = Math.floor(a / this.time.secondsInMinute)),
            (a -= s * this.time.secondsInMinute)),
            s >= this.time.minutesInHour &&
              ((n = Math.floor(s / this.time.minutesInHour)),
              (s -= n * this.time.minutesInHour));
          let i = 0;
          n >= this.time.hoursInDay &&
            ((i = Math.floor(n / this.time.hoursInDay)),
            (n -= i * this.time.hoursInDay));
          const o =
            this.totalNumberOfDays(!1, !1) /
            this.months.map((e) => !e.intercalary).length;
          t = Math.floor(i / o);
          const r = i - Math.round(t * o),
            c = Math.floor(t / this.months.length);
          return (
            (t -= Math.round(c * this.months.length)),
            { seconds: a, minute: s, hour: n, day: r, month: t, year: c }
          );
        }
        toSeconds() {
          const e = this.getMonthAndDayIndex();
          return Q(
            this,
            this.year.numericRepresentation,
            e.month || 0,
            e.day || 0,
            !0
          );
        }
        changeDateTime(e, t = {}) {
          if (
            ((t = E(
              {},
              {
                updateMonth: !0,
                updateApp: !0,
                save: !0,
                sync: !0,
                showWarning: !1,
              },
              t
            )),
            be(game.user, G.globalConfiguration.permissions.changeDateTime))
          ) {
            const a = this.toSeconds();
            let s = !1;
            if (
              (e.year &&
                (this.changeYear(e.year, t.updateMonth, "current"), (s = !0)),
              e.month && (this.changeMonth(e.month, "current"), (s = !0)),
              e.day && (this.changeDay(e.day), (s = !0)),
              e.hour || e.minute || e.seconds)
            ) {
              const t = this.time.changeTime(e.hour, e.minute, e.seconds);
              0 !== t && this.changeDay(t), (s = !0);
            }
            if (s) {
              if (R.isActiveCalendar(this.id)) {
                const e = this.toSeconds() - a;
                Ie.emit(C.DateTimeChange, this, e),
                  t.fromCalSync ||
                    !R.syncWithAllCalendars ||
                    isNaN(a) ||
                    R.syncWithCalendars({ seconds: e });
              }
              t.save && R.saveCalendars().catch(P.error),
                t.sync && this.syncTime().catch(P.error),
                t.updateApp && Y.updateApp();
            }
            return !0;
          }
          return (
            t.showWarning &&
              H.UiNotification(H.Localize("FSC.Warn.Macros.GMUpdate"), "warn"),
            !1
          );
        }
        setDateTime(e, t = {}) {
          if (
            ((t = E(
              {},
              {
                updateMonth: !0,
                updateApp: !0,
                save: !0,
                sync: !0,
                showWarning: !1,
                bypassPermissionCheck: !1,
              },
              t
            )),
            be(game.user, G.globalConfiguration.permissions.changeDateTime) ||
              t.bypassPermissionCheck)
          ) {
            const a = this.toSeconds(),
              s = {
                year: e.year || 0,
                month: e.month || 0,
                day: e.day || 0,
                hour: e.hour || 0,
                minute: e.minute || 0,
                seconds: e.seconds || 0,
              },
              n = this.getMonthAndDayIndex(),
              i = this.time.getCurrentTime();
            void 0 === e.seconds && (s.seconds = i.seconds),
              void 0 === e.minute && (s.minute = i.minute),
              void 0 === e.hour && (s.hour = i.hour),
              void 0 === e.year && (s.year = this.year.numericRepresentation),
              void 0 === e.month && (s.month = n.month || 0),
              void 0 === e.day && (s.day = n.day || 0),
              this.updateTime(s);
            const o = this.toSeconds() - a;
            return (
              R.isActiveCalendar(this.id) && Ie.emit(C.DateTimeChange, this, o),
              t.fromCalSync ||
                !R.syncWithAllCalendars ||
                isNaN(a) ||
                R.syncWithCalendars({ seconds: o }),
              t.save && R.saveCalendars().catch(P.error),
              t.sync && this.syncTime().catch(P.error),
              t.updateApp && Y.updateApp(),
              !0
            );
          }
          return (
            t.showWarning &&
              H.UiNotification(H.Localize("FSC.Warn.Macros.GMUpdate"), "warn"),
            !1
          );
        }
        async syncTime(e = !1) {
          let t = NaN;
          !be(game.user, G.globalConfiguration.permissions.changeDateTime) ||
            (this.generalSettings.gameWorldTimeIntegration !== g.Self &&
              this.generalSettings.gameWorldTimeIntegration !== g.Mixed) ||
            ((t = this.toSeconds()),
            (t !== game.time.worldTime || e) &&
              ((this.timeChangeTriggered = !0),
              H.IsGm() && (await this.time.setWorldTime(t))));
        }
        setFromTime(e, t) {
          if (
            (J.isPF2E &&
              this.generalSettings.pf2eSync &&
              (e += J.getWorldCreateSeconds(this)),
            0 !== t)
          )
            if (
              (this.generalSettings.gameWorldTimeIntegration !== g.Self &&
                this.generalSettings.gameWorldTimeIntegration !== g.Mixed) ||
              this.timeKeeper.getStatus() !== S.Started
            ) {
              if (
                (this.generalSettings.gameWorldTimeIntegration !== g.Self &&
                  this.generalSettings.gameWorldTimeIntegration !== g.Mixed) ||
                (!this.timeChangeTriggered && !this.combatChangeTriggered)
              ) {
                if (
                  (this.generalSettings.gameWorldTimeIntegration ===
                    g.ThirdParty ||
                    this.generalSettings.gameWorldTimeIntegration ===
                      g.Mixed) &&
                  !this.timeChangeTriggered
                ) {
                  const t = this.secondsToDate(e);
                  this.setDateTime(t, {
                    updateApp: !1,
                    sync: !1,
                    save: H.IsGm() && G.primary,
                  });
                }
              } else if (!this.timeChangeTriggered) {
                const t = this.secondsToDate(e);
                this.setDateTime(t, {
                  updateApp: !1,
                  sync: !1,
                  save: H.IsGm() && G.primary,
                });
              }
            } else if (!this.timeChangeTriggered) {
              const a = this.secondsToDate(e);
              this.setDateTime(a, {
                updateApp:
                  this.time.updateFrequency * this.time.gameTimeRatio !== t,
                sync: !1,
                save: !1,
                bypassPermissionCheck: !0,
              }),
                ke.Clock.UpdateListener(
                  `sc_${this.id}_clock`,
                  this.timeKeeper.getStatus()
                );
            }
          (this.timeChangeTriggered = !1), (this.combatChangeTriggered = !1);
        }
        processOwnCombatRoundTime(e) {
          const t = G.globalConfiguration.secondsInCombatRound;
          let a = 1;
          Object.prototype.hasOwnProperty.call(e, "previous") &&
          e.previous.round
            ? (a = e.round - e.previous.round)
            : aa.isPF1E && (a = 0),
            0 !== t &&
              0 !== a &&
              this.changeDateTime(
                { seconds: t * a },
                { updateApp: !1, sync: !0, save: H.IsGm() && G.primary }
              );
        }
        updateTime(e) {
          const t = this.year.leapYearRule.isLeapYear(e.year);
          (this.year.numericRepresentation = e.year),
            this.updateMonth(e.month, "current", !0),
            this.months[e.month].updateDay(e.day, t),
            this.time.setTime(e.hour, e.minute, e.seconds);
        }
      }
      class na {
        calendars = {};
        activeId = "";
        visibleId = "";
        get syncWithAllCalendars() {
          return (
            G.globalConfiguration.syncCalendars &&
            Object.keys(this.calendars).length > 1
          );
        }
        async initialize() {
          if (this.loadCalendars()) this.loadActiveCalendar();
          else {
            const e = await this.getDefaultCalendar();
            (this.activeId = e.id), (this.visibleId = e.id);
          }
        }
        async saveCalendars() {
          const e = [];
          for (const [, t] of Object.entries(this.calendars))
            e.push(t.toConfig());
          await H.SaveStringSetting(
            n.ActiveCalendar,
            this.calendars[this.activeId].id
          ),
            await H.SaveObjectSetting(n.CalendarConfiguration, e);
        }
        loadCalendars() {
          const e = H.GetObjectSettings(n.CalendarConfiguration);
          if ((1 !== e.length || e[0] || e.shift(), e.length))
            for (let t = 0; t < e.length; t++)
              if (e[t].id) {
                let a = this.getCalendar(e[t].id);
                a
                  ? a.loadFromSettings(e[t])
                  : (a = this.addCalendar(
                      e[t].id,
                      e[t].name || `Calendar ${t}`,
                      e[t]
                    )),
                  0 === t &&
                    "" === this.activeId &&
                    ((this.activeId = e[t].id), (this.visibleId = e[t].id));
              }
          z.checkNoteTriggers(this.activeId);
          const t = this.getVisibleCalendar();
          return (
            t && t.timeKeeper.getStatus() !== S.Started && Y.updateApp(),
            Object.keys(this.calendars).length
          );
        }
        loadActiveCalendar() {
          const e = H.GetStringSettings(n.ActiveCalendar),
            t = this.getCalendar(e);
          t && ((this.activeId = t.id), (this.visibleId = t.id)), Y.updateApp();
        }
        isActiveCalendar(e) {
          return e === this.activeId;
        }
        addCalendar(e, t, a) {
          const s = new sa(e, t, a);
          return (this.calendars[s.id] = s), this.calendars[s.id];
        }
        addTempCalendar(e) {
          const t = new sa("", e);
          return (
            (t.id += "_temp"), (this.calendars[t.id] = t), this.calendars[t.id]
          );
        }
        async getDefaultCalendar() {
          let e = this.getCalendar("default");
          return (
            e ||
              ((e = this.addCalendar("default", "Default", { id: "" })),
              await _e.setToPredefined(e, c.Gregorian)),
            e
          );
        }
        getCalendar(e) {
          return Object.prototype.hasOwnProperty.call(this.calendars, e)
            ? this.calendars[e]
            : null;
        }
        static sortCalendars(e, t) {
          return "default" === e.id || "default_temp" === e.id
            ? -1
            : "default" === t.id || "default_temp" === t.id
            ? 1
            : 0;
        }
        getAllCalendars(e = !1) {
          const t = [];
          for (const [a, s] of Object.entries(this.calendars))
            ((!e && !a.endsWith("_temp")) || (e && a.endsWith("_temp"))) &&
              t.push(s);
          return t.sort(na.sortCalendars);
        }
        getActiveCalendar() {
          return this.calendars[this.activeId];
        }
        getVisibleCalendar() {
          return this.calendars[this.visibleId];
        }
        setCalendars(e) {
          if (e.length) {
            for (const [t] of Object.entries(this.calendars)) {
              e.findIndex((e) => e.id === t) > -1 || delete this.calendars[t];
            }
            for (let t = 0; t < e.length; t++)
              this.calendars[e[t].id]
                ? this.calendars[e[t].id].loadFromSettings(e[t].toConfig())
                : (this.calendars[e[t].id] = e[t]);
            this.setActiveCalendar(e[0].id), this.setVisibleCalendar(e[0].id);
          }
        }
        setActiveCalendar(e) {
          const t = this.getCalendar(e);
          if (t) {
            for (const [, e] of Object.entries(this.calendars))
              e.timeKeeper.pause();
            (this.activeId = t.id),
              (this.visibleId = t.id),
              t.timeKeeper.getStatus() === S.Paused && t.timeKeeper.start(!0),
              game.socket?.emit(u.clock),
              (Y.clockClass = t.timeKeeper.getStatus()),
              H.SaveStringSetting(n.ActiveCalendar, t.id).catch(P.error),
              t.syncTime(!0).catch(P.error),
              Ie.emit(C.DateTimeChange, t);
          }
        }
        setVisibleCalendar(e) {
          const t = this.getCalendar(e);
          t &&
            ((this.visibleId = t.id),
            (Y.clockClass = t.timeKeeper.getStatus()),
            Y.updateApp());
        }
        removeCalendar(e) {
          Object.prototype.hasOwnProperty.call(this.calendars, e) &&
            (this.calendars[e].timeKeeper.stop(), delete this.calendars[e]);
        }
        cloneCalendars() {
          const e = [];
          for (const [, t] of Object.entries(this.calendars))
            if (t.id.endsWith("_temp")) e.push(t);
            else {
              const a = t.clone();
              (a.id += "_temp"), (this.calendars[a.id] = a), e.push(a);
            }
          return e.sort(na.sortCalendars);
        }
        mergeClonedCalendars() {
          const e = [];
          for (const [t, a] of Object.entries(this.calendars))
            t.endsWith("_temp") &&
              ((a.id = a.id.replace("_temp", "")),
              e.push({ key: t.replace("_temp", ""), value: a }));
          for (let t = 0; t < e.length; t++) {
            const a = this.getCalendar(e[t].key);
            a
              ? a.loadFromSettings(e[t].value.toConfig())
              : (this.calendars[e[t].key] = e[t].value);
          }
          for (const [t] of Object.entries(this.calendars)) {
            e.findIndex((e) => e.value.id === t) > -1 ||
              delete this.calendars[t];
          }
          this.getActiveCalendar() || this.setActiveCalendar(e[0].key),
            this.getVisibleCalendar() || this.setVisibleCalendar(e[0].key);
        }
        clearClones() {
          for (const [e, t] of Object.entries(this.calendars))
            t.id.endsWith("_temp") && delete this.calendars[e];
        }
        syncWithCalendars(e) {
          const t = this.getActiveCalendar();
          for (const [a, s] of Object.entries(this.calendars))
            a !== t.id &&
              s.changeDateTime(e, {
                sync: !1,
                save: !1,
                updateApp: !1,
                fromCalSync: !0,
              });
        }
      }
      class ia {
        static runCalendarMigration() {
          const e = {
            id: "default",
            name: "Default",
            currentDate: H.GetObjectSettings(n.CurrentDate),
            general: H.GetObjectSettings(n.GeneralConfiguration),
            leapYear: H.GetObjectSettings(n.LeapYearRule),
            months: H.GetObjectSettings(n.MonthConfiguration),
            moons: H.GetObjectSettings(n.MoonConfiguration),
            noteCategories: H.GetObjectSettings(n.NoteCategories),
            seasons: H.GetObjectSettings(n.SeasonConfiguration),
            time: H.GetObjectSettings(n.TimeConfiguration),
            weekdays: H.GetObjectSettings(n.WeekdayConfiguration),
            year: H.GetObjectSettings(n.YearConfiguration),
          };
          if (e.months) {
            if (
              (e.currentDate &&
                !foundry.utils.isEmpty(e.currentDate) &&
                ((e.currentDate.month = e.months.findIndex(
                  (t) => t.numericRepresentation === e.currentDate?.month
                )),
                e.currentDate.month < 0 && (e.currentDate.month = 0),
                e.currentDate.day--),
              e.seasons)
            )
              for (let t = 0; t < e.seasons.length; t++) {
                const a = e.seasons[t].startingMonth;
                switch (
                  ((e.seasons[t].startingMonth = e.months.findIndex(
                    (e) => e.numericRepresentation === a
                  )),
                  e.seasons[t].startingMonth < 0 &&
                    (e.seasons[t].startingMonth = 0),
                  e.seasons[t].startingDay--,
                  e.seasons[t].color)
                ) {
                  case "#fffce8":
                    e.seasons[t].color = "#46B946";
                    break;
                  case "#f3fff3":
                    e.seasons[t].color = "#E0C40B";
                    break;
                  case "#fff7f2":
                    e.seasons[t].color = "#FF8E47";
                    break;
                  case "#f2f8ff":
                    e.seasons[t].color = "#479DFF";
                }
              }
            if (e.moons)
              for (let t = 0; t < e.moons.length; t++) {
                const a = e.moons[t].firstNewMoon.month;
                (e.moons[t].firstNewMoon.month = e.months.findIndex(
                  (e) => e.numericRepresentation === a
                )),
                  e.moons[t].firstNewMoon.month < 0 &&
                    (e.moons[t].firstNewMoon.month = 0),
                  e.moons[t].firstNewMoon.day--;
              }
          }
          const t = new sa("default", "Default", e);
          let a = !1;
          return t.year && t.months.length && (a = !0), a ? t : null;
        }
        static runGlobalConfigurationMigration() {
          const e = H.GetObjectSettings(n.GeneralConfiguration),
            t = H.GetObjectSettings(n.TimeConfiguration);
          if (
            Object.prototype.hasOwnProperty.call(e, "permissions") &&
            e.permissions
          ) {
            const t = new Je();
            t.loadFromSettings(e.permissions),
              (t.changeActiveCalendar = {
                player: !1,
                trustedPlayer: !1,
                assistantGameMaster: !1,
                users: void 0,
              }),
              (G.globalConfiguration.permissions = t);
          } else
            P.info(
              "No old permissions found, using default permission values!"
            );
          if (
            Object.prototype.hasOwnProperty.call(t, "secondsInCombatRound") &&
            Number.isInteger(t.secondsInCombatRound)
          ) {
            const e = parseInt(t.secondsInCombatRound.toString());
            isNaN(e) || (G.globalConfiguration.secondsInCombatRound = e);
          } else
            P.info(
              "No old seconds in combat round setting found, using default value!"
            );
          return !0;
        }
        static async runNoteMigration() {
          const e = H.GetObjectSettings(n.Notes),
            t = R.getActiveCalendar();
          for (let a = 0; a < e.length; a++) {
            const s = e[a],
              n = {
                year: s.year || t.year.numericRepresentation,
                month: t.months.findIndex(
                  (e) => e.numericRepresentation === s.month
                ),
                day: (s.day || 1) - 1,
                hour: s.hour || 0,
                minute: s.minute || 0,
                seconds: 0,
              },
              i = {
                allDay: void 0 === s.allDay || s.allDay,
                calendarId: t.id,
                repeats: s.repeats || 0,
                order: s.order || 0,
                categories: s.categories || [],
                remindUsers: s.remindUsers || [],
                startDate: n,
                endDate: n,
              };
            Object.prototype.hasOwnProperty.call(s, "endDate") &&
              (i.endDate = {
                year: s.endDate.year || n.year,
                month: t.months.findIndex(
                  (e) => e.numericRepresentation === s.endDate.month
                ),
                day: (s.endDate.day || 1) - 1,
                hour: s.endDate.hour || 0,
                minute: s.endDate.minute || 0,
                seconds: 0,
              }),
              i.startDate.month < 0 && (i.startDate.month = 0),
              i.endDate.month < 0 && (i.endDate.month = 0);
            const o = await z.createNote(s.title, s.content, i, t, !1, !1);
            if (o) {
              const e = {};
              Object.keys(o.ownership).forEach((t) => {
                e[t] = t === s.author ? 3 : s.playerVisible ? 2 : 0;
              }),
                await o.update({ ownership: e });
            }
          }
          return !0;
        }
        static async cleanUpOldData() {
          const e = await H.SaveObjectSetting(n.GeneralConfiguration, {}),
            t = await H.SaveObjectSetting(n.YearConfiguration, {}),
            a = await H.SaveObjectSetting(n.WeekdayConfiguration, []),
            s = await H.SaveObjectSetting(n.MonthConfiguration, []),
            i = await H.SaveObjectSetting(n.CurrentDate, {}),
            o = await H.SaveObjectSetting(n.LeapYearRule, {}),
            r = await H.SaveObjectSetting(n.TimeConfiguration, {}),
            c = await H.SaveObjectSetting(n.SeasonConfiguration, []),
            l = await H.SaveObjectSetting(n.MoonConfiguration, []),
            d = await H.SaveObjectSetting(n.Notes, []),
            h = await H.SaveObjectSetting(n.NoteCategories, []);
          return e && t && a && s && i && o && r && c && l && d && h;
        }
      }
      class oa extends Application {
        static appWindowId = "fsc-pg";
        MigrationType = r.none;
        displayData = {
          calendarMigrationStatusIcon: "fa-sync fa-spin fsc-qg",
          globalConfigMigrationStatusIcon: "fa-sync fa-spin fsc-qg",
          notesMigrationStatusIcon: "fa-sync fa-spin fsc-qg",
          enableCleanUp: !1,
          migrationDone: !1,
        };
        constructor() {
          super();
        }
        static get defaultOptions() {
          const e = super.defaultOptions;
          return (
            (e.template =
              "modules/foundryvtt-simple-calendar/templates/migration.html"),
            (e.title = "FSC.Migration.Title"),
            (e.classes = ["simple-calendar"]),
            (e.id = this.appWindowId),
            (e.resizable = !1),
            (e.width = 500),
            e
          );
        }
        showApp() {
          this.render(!0, { classes: ["simple-calendar", he()] });
        }
        getData(e) {
          return {
            ...super.getData(e),
            display: this.displayData,
            headingTitle: this.headingTitle,
            description: this.description,
          };
        }
        get headingTitle() {
          let e = "";
          if (this.MigrationType === r.v1To2) e = "FSC.Migration.v1v2.Title";
          else e = "Migration";
          return e;
        }
        get description() {
          let e = "";
          if (this.MigrationType === r.v1To2) e = "FSC.Migration.v1v2.Help";
          else
            e = "This dialog has not loaded property. Try refreshing the page.";
          return e;
        }
        initialize() {
          H.IsGm() && this.determineMigrationType();
        }
        activateListeners() {
          const e = document.getElementById(oa.appWindowId);
          e &&
            e
              .querySelector(".fsc-rg")
              ?.addEventListener("click", this.runCleanData.bind(this));
        }
        determineMigrationType() {
          const e = H.GetObjectSettings(n.GlobalConfiguration),
            t = H.GetObjectSettings(n.YearConfiguration);
          F(t) && F(e)
            ? (this.MigrationType = r.none)
            : F(t) ||
              Object.prototype.hasOwnProperty.call(e, "version") ||
              (P.info(
                "Migration required from Simple Calendar v1 to Version 2"
              ),
              (this.MigrationType = r.v1To2));
        }
        get showMigration() {
          return this.MigrationType !== r.none;
        }
        async run(e = !1) {
          e && (this.MigrationType = r.v1To2),
            P.info("Running Migration!"),
            this.showApp();
          const t = this.runCalendarMigration();
          this.showApp();
          const a = await this.runNoteMigration();
          this.showApp(),
            t &&
              a &&
              ((this.displayData.enableCleanUp = !0),
              (this.displayData.migrationDone = !0),
              Y.render(),
              this.showApp());
        }
        runCalendarMigration() {
          if (
            (P.info("Migrating Calendar Configuration..."),
            this.MigrationType === r.v1To2)
          ) {
            let e = !1,
              t = !1;
            const a = ia.runCalendarMigration();
            return (
              null !== a
                ? (R.setCalendars([a]),
                  (this.displayData.calendarMigrationStatusIcon =
                    "fa-check-circle fsc-sg"),
                  P.info("Calendar Configuration successfully migrated!"),
                  P.info("Migrating Permissions and General Settings..."),
                  (e = !0))
                : (P.error(
                    "There was an error converting the existing calendar configuration to the new calendar data model."
                  ),
                  (this.displayData.calendarMigrationStatusIcon =
                    "fa-times-circle fsc-tg"),
                  (this.displayData.globalConfigMigrationStatusIcon =
                    "fa-ban fsc-ug")),
              ia.runGlobalConfigurationMigration()
                ? (P.info(
                    "Permissions and General Settings successfully migrated!"
                  ),
                  (this.displayData.globalConfigMigrationStatusIcon =
                    "fa-check-circle fsc-sg"),
                  this.saveMigratedData(),
                  (t = !0))
                : (P.error(
                    "There was an error converting the existing permissions and general settings to the new permissions and general settings data model."
                  ),
                  (this.displayData.globalConfigMigrationStatusIcon =
                    "fa-times-circle fsc-tg")),
              e && t
            );
          }
          return !1;
        }
        saveMigratedData() {
          G.save(G.globalConfiguration, {
            id: "",
            theme: i[0].key,
            openOnLoad: !0,
            openCompact: !1,
            rememberPosition: !0,
            rememberCompactPosition: !1,
            appPosition: {},
            noteReminderNotification: I.whisper,
            sideDrawerDirection: "sc-right",
            alwaysShowNoteList: !1,
            persistentOpen: !1,
            compactViewScale: 100,
          });
        }
        async runNoteMigration() {
          if (
            (P.info("Migrating Calendar Notes..."),
            this.MigrationType === r.v1To2)
          ) {
            if (await ia.runNoteMigration())
              return (
                P.info("Calendar Notes successfully migrated!"),
                (this.displayData.notesMigrationStatusIcon =
                  "fa-check-circle fsc-sg"),
                !0
              );
            P.error(
              "There was an error converting the existing notes to journal entries."
            ),
              (this.displayData.notesMigrationStatusIcon =
                "fa-times-circle fsc-tg");
          }
          return !1;
        }
        runCleanData() {
          P.info("Clearing all old data..."),
            this.MigrationType === r.v1To2 &&
              (ia
                .cleanUpOldData()
                .then(() => {
                  H.UiNotification(
                    H.Localize("FSC.Migration.v1v2.CleanupSuccess"),
                    "info"
                  );
                })
                .catch((e) => {
                  console.log(e),
                    H.UiNotification(
                      H.Localize("FSC.Migration.v1v2.CleanupFail"),
                      "warning"
                    );
                }),
              P.info("All old data has been cleared."));
        }
      }
      class NoteSheet extends JournalSheet {
        dirty = !1;
        resized = !1;
        editMode = !1;
        dateSelectorId;
        categoryMultiSelectId;
        playerMultiSelectId;
        static appWindowId = "fsc-vg";
        journalData = { _id: "", name: "", flags: {}, ownership: {} };
        journalPages = [];
        appWindow = null;
        uiElementStates = {
          "fsc-wg": !1,
          selectedPageIndex: 0,
          search: { term: "" },
        };
        inputChangeRedrawNames = [
          "src",
          "image.caption",
          "video.width",
          "video.height",
        ];
        static SetHeight(e) {
          if (e.appWindow && e.appWindow instanceof Element) {
            const t = window.getComputedStyle(e.appWindow, ":after");
            if (!e.resized) {
              const a = e.appWindow.getElementsByTagName("form");
              if (a && a.length) {
                let s = 0;
                const n = e.appWindow.getElementsByTagName("header");
                n && n.length && (s += n[0].offsetHeight);
                const i = e.appWindow.querySelector(".window-content");
                if (i) {
                  const e = window.getComputedStyle(i);
                  s +=
                    (parseInt(e.borderTop) || 0) +
                    (parseInt(e.borderBottom) || 0);
                }
                if (e.editMode) s += a[0].scrollHeight;
                else {
                  const t = window.getComputedStyle(a[0]);
                  t &&
                    (s +=
                      (parseInt(t.paddingTop) || 0) +
                      (parseInt(t.paddingBottom) || 0));
                  const n = e.appWindow.querySelector(".fsc-xg"),
                    i = e.appWindow.querySelector(".fsc-yg"),
                    o = e.appWindow.querySelector(".fsc-zg");
                  if (n) {
                    const e = window.getComputedStyle(n);
                    s +=
                      n.offsetHeight +
                      parseInt(e.marginTop) +
                      parseInt(e.marginBottom);
                  }
                  if (i) {
                    const e = window.getComputedStyle(i);
                    s +=
                      i.scrollHeight +
                      parseInt(e.marginTop) +
                      parseInt(e.marginBottom) +
                      (parseInt(e.borderTop) || 0) +
                      (parseInt(e.borderBottom) || 0);
                  }
                  if (o) {
                    const e = window.getComputedStyle(o);
                    s +=
                      o.offsetHeight +
                      parseInt(e.marginTop) +
                      parseInt(e.marginBottom);
                  }
                }
                t && (s += parseInt(t.height) || 0),
                  e.editMode && s < 740 && (s = 740);
                const o = 0.95 * window.outerHeight;
                s > o && (s = o),
                  e.setPosition({ height: ue(s), width: ue(720) });
              }
            }
            const a = e.appWindow.querySelector(".fsc-wg"),
              s = e.appWindow.querySelector(".fsc-_g, .fsc-xg");
            a &&
              s &&
              ((a.style.top = s.offsetTop + "px"),
              (a.style.height = `calc(100% - ${s.offsetTop}px - ${t.height})`));
          }
        }
        constructor(e, t = {}) {
          super(e, t),
            (this.dateSelectorId = `scNoteDate_${this.object.id}`),
            (this.categoryMultiSelectId = `scNoteCategories_${this.object.id}`),
            (this.playerMultiSelectId = `scUserPermissions_${this.object.id}`),
            this.copyData();
        }
        static get defaultOptions() {
          const e = super.defaultOptions;
          return (
            (e.template =
              "modules/foundryvtt-simple-calendar/templates/note-sheet.html"),
            (e.title = "Simple Calendar Note"),
            (e.id = this.appWindowId),
            (e.classes = ["sheet", "journal-sheet", "simple-calendar"]),
            (e.resizable = !0),
            (e.closeOnSubmit = !1),
            game.settings && e.classes.push(he()),
            e
          );
        }
        static get defaultObject() {
          return {};
        }
        get template() {
          return this.options.template || "";
        }
        get type() {
          return "simplecalendarnote";
        }
        copyData() {
          (this.journalData._id = this.object.id || ""),
            (this.journalData.name = this.object.name || ""),
            (this.journalData.flags = Ue({}, this.object.flags)),
            (this.journalData.ownership = Ue({}, this.object.ownership)),
            (this.journalPages = []);
          for (let e = 0; e < this.object.pages.contents.length; e++)
            this.journalPages.push({
              show: !0,
              _id: this.object.pages.contents[e]._id,
              name: this.object.pages.contents[e].name,
              type: this.object.pages.contents[e].type,
              text: { content: this.object.pages.contents[e].text.content },
              src: this.object.pages.contents[e].src,
              image: { caption: this.object.pages.contents[e].image.caption },
              video: this.object.pages.contents[e].video,
            });
        }
        get title() {
          return this.object.name || "Note";
        }
        close() {
          if (this.dirty) {
            return (
              new Dialog({
                title: H.Localize("FSC.NoteDirty"),
                content: H.Localize("FSC.NoteDirtyText"),
                buttons: {
                  yes: {
                    icon: '<i class="fas fa-trash"></i>',
                    label: H.Localize("FSC.DiscardChanges"),
                    callback: this.isDirtyDialogClose.bind(this, !1),
                  },
                  save: {
                    icon: '<i class="fas fa-save"></i>',
                    label: H.Localize("FSC.Save"),
                    callback: this.isDirtyDialogClose.bind(this, !0),
                  },
                },
                default: "save",
              }).render(!0),
              Promise.resolve()
            );
          }
          return (
            (this.dirty = !1),
            (this.editMode = !1),
            (this.resized = !1),
            (this.uiElementStates["fsc-wg"] = !1),
            (this.uiElementStates.selectedPageIndex = 0),
            this.cleanUpProsemirror(),
            Ze.DeactivateSelector(this.dateSelectorId),
            super.close({ submit: !1 })
          );
        }
        cleanUpProsemirror() {
          Object.values(this.editors).forEach((e) => {
            e.instance && e.instance.destroy();
          });
        }
        async isDirtyDialogClose(e) {
          return (
            (this.dirty = !1),
            e ? await this.save(new Event("click")) : this.copyData(),
            this.close()
          );
        }
        render(e, t, a) {
          return void 0 !== a && (this.editMode = a), super.render(e, t);
        }
        async getData() {
          const e = {
              ...super.getData(),
              pages: this.journalPages,
              editMode: this.editMode,
              uiElementStates: this.uiElementStates,
              name: "",
              enrichedContent: "",
              display: {
                date: "",
                reminder: !1,
                repeats: 0,
                repeatsDisplay: "",
                author: { colorText: "", color: "", name: "" },
                categories: [],
                macro: "",
              },
              edit: {
                dateDisplay: "",
                repeats: l.Never,
                noteData: {},
                users: [],
                timeSelected: !1,
                dateSelectorId: this.dateSelectorId,
                dateSelectorSelect: this.dateSelectorSelect.bind(this),
                repeatOptions: {
                  0: "FSC.Notes.Repeat.Never",
                  1: "FSC.Notes.Repeat.Weekly",
                  2: "FSC.Notes.Repeat.Monthly",
                  3: "FSC.Notes.Repeat.Yearly",
                },
                allCategories: [],
                macroList: { none: "No Macro" },
                selectedMacro: "",
                categoryMultiSelectId: this.categoryMultiSelectId,
                playerMultiSelectId: this.playerMultiSelectId,
                reminder: !1,
                pageTypes: {
                  text: "JOURNALENTRYPAGE.TypeText",
                  image: "JOURNALENTRYPAGE.TypeImage",
                  pdf: "JOURNALENTRYPAGE.TypePDF",
                  video: "JOURNALENTRYPAGE.TypeVideo",
                },
                page: {
                  name: "",
                  type: "",
                  src: "",
                  image: { caption: "" },
                  video: {
                    width: void 0,
                    height: void 0,
                    controls: !1,
                    autoplay: !1,
                    loop: !1,
                    volume: 0.5,
                    volumeDisplay: "50%",
                    timestamp: 0,
                    timestampParts: {},
                  },
                },
              },
            },
            a = z.getNoteStub(this.object);
          if (a)
            if (
              ((e.name = this.journalData.name),
              "text" ===
              this.journalPages[this.uiElementStates.selectedPageIndex].type
                ? (e.enrichedContent = `<section>${await TextEditor.enrichHTML(
                    this.journalPages[this.uiElementStates.selectedPageIndex]
                      .text?.content || "",
                    { async: !0 }
                  )}</section>`)
                : "image" ===
                  this.journalPages[this.uiElementStates.selectedPageIndex].type
                ? (e.enrichedContent = this.generateImageHTML())
                : "pdf" ===
                  this.journalPages[this.uiElementStates.selectedPageIndex].type
                ? (e.enrichedContent = await this.generatePDFHTML(
                    void 0,
                    this.editMode
                  ))
                : "video" ===
                    this.journalPages[this.uiElementStates.selectedPageIndex]
                      .type && (e.enrichedContent = this.generateVideoHTML()),
              this.editMode)
            ) {
              (e.edit.page.name =
                this.journalPages[this.uiElementStates.selectedPageIndex].name),
                (e.edit.page.type =
                  this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].type),
                (e.edit.page.src =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .src || ""),
                (e.edit.page.image.caption =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .image?.caption || ""),
                (e.edit.page.video.width =
                  this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].video?.width),
                (e.edit.page.video.height =
                  this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].video?.height),
                (e.edit.page.video.controls =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.controls || !1),
                (e.edit.page.video.autoplay =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.autoplay || !1),
                (e.edit.page.video.loop =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.loop || !1),
                (e.edit.page.video.volume =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.volume || 0.5),
                (e.edit.page.video.volumeDisplay = `${Math.round(
                  100 * e.edit.page.video.volume
                )}%`),
                (e.edit.page.video.timestamp =
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.timestamp || 0);
              let s = 0,
                n = 0,
                i = 0;
              e.edit.page.video.timestamp &&
                ((s = Math.floor(e.edit.page.video.timestamp / 3600)),
                (n = Math.floor((e.edit.page.video.timestamp % 3600) / 60)),
                (i = e.edit.page.video.timestamp - 3600 * s - 60 * n)),
                (e.edit.page.video.timestampParts = { h: s, m: n, s: i }),
                (e.edit.noteData = a.noteData || {}),
                (e.edit.timeSelected = !a.allDay),
                (e.edit.repeats =
                  this.journalData.flags[t].noteData.repeats || a.repeats);
              const o = game.users;
              o &&
                ((e.edit.users = o.map((e) => ({
                  text: e.name || "",
                  value: e.id,
                  selected: 0 !== this.journalData.ownership[e.id],
                  static: e.id === game.user?.id,
                  disabled:
                    e.id === game.user?.id ||
                    (void 0 !== this.journalData.ownership.default &&
                      this.journalData.ownership.default >= 2),
                }))),
                e.edit.users.unshift({
                  text: H.Localize("FSC.Notes.Permissions.AllPlayers"),
                  value: "default",
                  makeOthersMatch: !0,
                  selected:
                    void 0 !== this.journalData.ownership.default &&
                    0 !== this.journalData.ownership.default,
                  disabled: !1,
                }));
              const r = a.noteData;
              if (r) {
                const s = R.getCalendar(r.calendarId);
                s &&
                  ((e.edit.dateDisplay = K(r.startDate, "MMMM DD, YYYY", s)),
                  te(r.startDate, r.endDate) ||
                    (e.edit.dateDisplay += ` - ${K(
                      r.endDate,
                      "MMMM DD, YYYY",
                      s
                    )}`),
                  (e.edit.allCategories = s.noteCategories.map((e) => ({
                    text: e.name,
                    value: e.name,
                    selected:
                      void 0 !==
                      this.journalData.flags[t].noteData.categories.find(
                        (t) => t === e.name
                      ),
                  })))),
                  (e.edit.reminder =
                    this.journalData.flags[t].noteData.remindUsers.indexOf(
                      game.user?.id || ""
                    ) > -1 || a.userReminderRegistered);
              }
              game.macros?.forEach((t) => {
                t.canExecute && t.name && (e.edit.macroList[t.id] = t.name);
              }),
                (e.edit.selectedMacro =
                  this.journalData.flags[t].noteData.macro || a.macro);
            } else
              (e.display.date = a.fullDisplayDate),
                (e.display.reminder = a.userReminderRegistered),
                (e.display.repeats = a.repeats),
                (e.display.repeatsDisplay = H.Localize(
                  e.edit.repeatOptions[a.repeats] || ""
                )),
                (e.display.author = a.authorDisplay || {
                  colorText: "",
                  color: "",
                  name: "",
                }),
                (e.display.categories = a.categories),
                this.isEditable &&
                  (e.display.macro = game.macros?.get(a.macro)?.name || "");
          return e;
        }
        _getYouTubeVars() {
          const e = { playsinline: 1, modestbranding: 1 };
          return (
            this.editMode ||
              ((e.controls = this.journalPages[
                this.uiElementStates.selectedPageIndex
              ].video?.controls
                ? 1
                : 0),
              (e.autoplay = this.journalPages[
                this.uiElementStates.selectedPageIndex
              ].video?.autoplay
                ? 1
                : 0),
              (e.loop = this.journalPages[
                this.uiElementStates.selectedPageIndex
              ].video?.loop
                ? 1
                : 0),
              this.journalPages[this.uiElementStates.selectedPageIndex].video
                ?.timestamp &&
                (e.start =
                  this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].video?.timestamp)),
            e
          );
        }
        _activateVideo() {
          if (this.appWindow) {
            const e =
                this.journalPages[this.uiElementStates.selectedPageIndex].video
                  ?.volume || 0,
              t =
                this.journalPages[this.uiElementStates.selectedPageIndex].video
                  ?.timestamp || 0,
              a = this.appWindow.querySelector("iframe");
            a &&
              game.video
                .getYouTubePlayer(a.id, {
                  events: {
                    onStateChange: this.youtubeOnStateChange.bind(this, e),
                  },
                })
                .then((e) => {
                  t && e.seekTo(t, !0);
                });
            const s = this.appWindow.querySelector("video");
            s &&
              (s.addEventListener(
                "loadeddata",
                NoteSheet.SetHeight.bind(null, this)
              ),
              s.addEventListener(
                "loadedmetadata",
                this.videoLoadMetadata.bind(this, s, e, t)
              ));
          }
        }
        youtubeOnStateChange(e, t) {
          t.data === YT.PlayerState.PLAYING && t.target?.setVolume(100 * e);
        }
        videoLoadMetadata(e, t, a) {
          (e.volume = t), a && (e.currentTime = a);
        }
        activateListeners() {
          if (
            ((this.appWindow = document.getElementById(`${this.id}`)),
            this.appWindow)
          ) {
            const e = i.map((e) => e.key);
            if (
              (this.appWindow.classList.remove(...e),
              this.appWindow.classList.add(G.clientSettings.theme),
              this.editMode)
            ) {
              if (
                "text" ===
                this.journalPages[this.uiElementStates.selectedPageIndex].type
              ) {
                const e = this.appWindow.querySelector(
                  ".editor-content[data-edit]"
                );
                e &&
                  (this.cleanUpProsemirror(),
                  (this.object.content =
                    this.journalPages[this.uiElementStates.selectedPageIndex]
                      .text?.content || ""),
                  this._activateEditor(e));
              } else this.object.content = "";
              this.appWindow
                .querySelectorAll("button.file-picker")
                .forEach((e) => {
                  e.onclick = this._activateFilePicker.bind(this);
                }),
                Ze.ActivateSelector(this.dateSelectorId),
                ve.ActivateListeners(
                  this.categoryMultiSelectId,
                  this.multiSelectOptionChange.bind(this)
                ),
                ve.ActivateListeners(
                  this.playerMultiSelectId,
                  this.multiSelectOptionChange.bind(this)
                ),
                this.updateNoteRepeatDropdown(),
                this.appWindow
                  .querySelectorAll("input:not(.fsc-a), select:not(.fsc-a)")
                  .forEach((e) => {
                    e.addEventListener("change", this.inputChange.bind(this));
                  }),
                this.appWindow
                  .querySelector(".fsc-ah")
                  ?.addEventListener("click", this.addPage.bind(this)),
                this.appWindow
                  .querySelectorAll(".fsc-bh .fsc-ic")
                  .forEach((e) => {
                    e.addEventListener("click", this.removePage.bind(this));
                  });
            } else
              this._activateVideo(),
                this.appWindow
                  .querySelector("img")
                  ?.addEventListener(
                    "load",
                    NoteSheet.SetHeight.bind(null, this)
                  ),
                this.appWindow
                  .querySelector(".fsc-ch")
                  ?.removeAttribute("disabled"),
                this.appWindow
                  .querySelector(".fsc-ch")
                  ?.addEventListener(
                    "click",
                    this.reminderChange.bind(this, !0)
                  ),
                this.appWindow
                  .querySelector(".load-pdf button")
                  ?.removeAttribute("disabled"),
                this.appWindow
                  .querySelector(".load-pdf button")
                  ?.addEventListener("click", this._loadPDF.bind(this));
            this.appWindow
              .querySelector(".fsc-uc")
              ?.addEventListener("click", this.save.bind(this)),
              this.appWindow
                .querySelector(".fsc-dh")
                ?.addEventListener("click", this.edit.bind(this)),
              this.appWindow
                .querySelector(".fsc-eh")
                ?.addEventListener("click", this.delete.bind(this)),
              this.appWindow
                .querySelector(".fsc-fh")
                ?.addEventListener(
                  "click",
                  this.toggleDrawer.bind(this, "fsc-wg")
                ),
              this.appWindow.querySelectorAll(".fsc-bh li").forEach((e) => {
                e.addEventListener("click", this.changePage.bind(this));
              }),
              this.appWindow
                .querySelector(".fsc-wg .fsc-kg input")
                ?.addEventListener("input", this.searchUpdate.bind(this)),
              this.appWindow
                .querySelector(".fsc-wg .fsc-kg .fsc-yb")
                ?.addEventListener("click", this.clearSearch.bind(this));
          }
        }
        _updateObject(e, t) {
          return (
            "text" ===
              this.journalPages[this.uiElementStates.selectedPageIndex].type &&
              ((this.journalPages[this.uiElementStates.selectedPageIndex].text =
                { content: t.content }),
              (this.dirty = !0)),
            Promise.resolve()
          );
        }
        toggleDrawer(e) {
          if (this.appWindow) {
            const t = this.appWindow.querySelector(`.${e}`);
            if (t) {
              const a = e.toLowerCase();
              this.uiElementStates[a] = pe(t, 500, !1);
              const s = t.querySelector(".fsc-fh");
              if (s) {
                s.setAttribute(
                  "data-tooltip",
                  this.uiElementStates[a]
                    ? H.Localize("JOURNAL.ViewCollapse")
                    : H.Localize("JOURNAL.ViewExpand")
                );
                const e = s.querySelector(".fa-solid");
                e &&
                  (e.classList.remove("fa-caret-left", "fa-caret-right"),
                  e.classList.add(
                    this.uiElementStates[a] ? "fa-caret-right" : "fa-caret-left"
                  ));
              }
            }
          }
        }
        async inputChange(e) {
          await this.writeInputValuesToObjects();
          const t = e.target,
            a = t?.closest(".fsc-gh")?.querySelector("figure, .fsc-hh");
          if (t && a && this.inputChangeRedrawNames.indexOf(t.name) > -1) {
            const e = document.createElement("div"),
              s = "src" === t.name ? t.value : void 0;
            "image" ===
            this.journalPages[this.uiElementStates.selectedPageIndex].type
              ? (e.innerHTML = this.generateImageHTML(s))
              : "pdf" ===
                this.journalPages[this.uiElementStates.selectedPageIndex].type
              ? (e.innerHTML = await this.generatePDFHTML(s, this.editMode))
              : "video" ===
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .type && (e.innerHTML = this.generateVideoHTML(s)),
              e.innerHTML && a.replaceWith(e.childNodes[0]);
          } else if (t && "video.volume" === t.name) {
            const e = this.appWindow?.querySelector(
              `label[for="scPageVideoVolume_${this.object.id}"] span`
            );
            e && (e.innerHTML = `${Math.round(100 * parseFloat(t.value))}%`);
          }
        }
        _loadPDF(e) {
          const t = e.currentTarget?.parentElement;
          if (t) {
            const e = document.createElement("iframe");
            (e.src = `scripts/pdfjs/web/viewer.html?file=${foundry.utils.getRoute(
              this.journalPages[this.uiElementStates.selectedPageIndex].src ||
                ""
            )}`),
              e.classList.add("fsc-ih"),
              t.replaceWith(e),
              NoteSheet.SetHeight(this);
          }
        }
        _onResize(e) {
          (this.resized = !0), super._onResize(e);
        }
        generateImageHTML(e) {
          const t =
            e || this.journalPages[this.uiElementStates.selectedPageIndex].src;
          let a;
          return (
            (a = t
              ? `<figure><img src="${t}" alt="${
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .image?.caption || ""
                }" /><figcaption>${
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .image?.caption || ""
                }</figcaption></figure><div class="fsc-jh"></div>`
              : '<div class="fsc-hh flex-ratio"><i class="fa-solid fa-image"></i></div>'),
            a
          );
        }
        async generatePDFHTML(e, t = !1) {
          const a =
            e || this.journalPages[this.uiElementStates.selectedPageIndex].src;
          let s;
          if (a)
            if (t)
              s = `<iframe class="fsc-ih" src="scripts/pdfjs/web/viewer.html?file=${foundry.utils.getRoute(
                a
              )}"></iframe>`;
            else {
              const e = await fetch(a, { method: "HEAD" }),
                t = Number(e?.headers.get("content-length"));
              let n = "";
              isNaN(t) || (n = ` (${(t / 1024 / 1024).toFixed(2)} MB)`),
                (s = `<div class="load-pdf"><button type="button" class="fsc-yb fsc-dc">${H.Localize(
                  "JOURNALENTRYPAGE.PDFLoad"
                )}${n}</button></div>`);
            }
          else
            s =
              '<div class="fsc-hh flex-ratio"><i class="fa-solid fa-file-pdf"></i></div>';
          return s;
        }
        generateVideoHTML(e) {
          const t =
            e || this.journalPages[this.uiElementStates.selectedPageIndex].src;
          let a;
          return (
            t
              ? ((a = `<figure class="${
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.width ||
                  this.journalPages[this.uiElementStates.selectedPageIndex]
                    .video?.height
                    ? ""
                    : "flex-ratio"
                }">`),
                game.video.isYouTubeURL(t)
                  ? (a += `<iframe id="youtube-${foundry.utils.randomID()}" src="${game.video.getYouTubeEmbedURL(
                      t,
                      this._getYouTubeVars()
                    )}" ${
                      this.journalPages[this.uiElementStates.selectedPageIndex]
                        .video?.width
                        ? `width="${
                            this.journalPages[
                              this.uiElementStates.selectedPageIndex
                            ].video?.width
                          }"`
                        : ""
                    } ${
                      this.journalPages[this.uiElementStates.selectedPageIndex]
                        .video?.height
                        ? `height="${
                            this.journalPages[
                              this.uiElementStates.selectedPageIndex
                            ].video?.height
                          }"`
                        : ""
                    }></iframe>`)
                  : (a += `<video src="${t}" controls ${
                      this.journalPages[this.uiElementStates.selectedPageIndex]
                        .video?.width
                        ? `width="${
                            this.journalPages[
                              this.uiElementStates.selectedPageIndex
                            ].video?.width
                          }"`
                        : ""
                    } ${
                      this.journalPages[this.uiElementStates.selectedPageIndex]
                        .video?.height
                        ? `height="${
                            this.journalPages[
                              this.uiElementStates.selectedPageIndex
                            ].video?.height
                          }"`
                        : ""
                    }></video>`),
                (a += "</figure>"))
              : (a =
                  '<div class="fsc-hh flex-ratio"><i class="fa-solid fa-video"></i></div>'),
            a
          );
        }
        async dateSelectorSelect(e) {
          if (R.getCalendar(this.journalData.flags[t].noteData.calendarId)) {
            const a =
                !e.startDate.month || e.startDate.month < 0
                  ? 0
                  : e.startDate.month,
              s = !e.startDate.day || e.startDate.day < 0 ? 0 : e.startDate.day;
            let n =
                !e.endDate.month || e.endDate.month < 0 ? 0 : e.endDate.month,
              i = !e.endDate.day || e.endDate.day < 0 ? 0 : e.endDate.day;
            (this.journalData.flags[t].noteData.allDay = !e.timeSelected),
              (this.journalData.flags[t].noteData.startDate = {
                year: e.startDate.year || 0,
                month: a,
                day: s,
                hour: e.startDate.hour || 0,
                minute: e.startDate.minute || 0,
                seconds: e.startDate.seconds || 0,
              }),
              (this.journalData.flags[t].noteData.endDate = {
                year: e.endDate.year || 0,
                month: n,
                day: i,
                hour: e.endDate.hour || 0,
                minute: e.endDate.minute || 0,
                seconds: e.endDate.seconds || 0,
              }),
              this.updateNoteRepeatDropdown();
          }
        }
        multiSelectOptionChange(e, a, s) {
          if (null !== a) {
            if (e === this.categoryMultiSelectId) {
              const e =
                this.journalData.flags[t].noteData.categories.indexOf(a);
              s
                ? this.journalData.flags[t].noteData.categories.push(a)
                : e > -1 &&
                  this.journalData.flags[t].noteData.categories.splice(e, 1),
                (this.dirty = !0);
            } else if (e === this.playerMultiSelectId) {
              if (s) {
                const e = this.journalData.ownership[a];
                void 0 === e || e < 2
                  ? (this.journalData.ownership[a] = 2)
                  : 3 === e && (this.journalData.ownership[a] = 3),
                  "default" === a &&
                    game.users?.forEach((e) => {
                      const t = this.journalData.ownership[e.id];
                      (void 0 === t || t < 2) &&
                        (this.journalData.ownership[e.id] = 2);
                    });
              } else
                (this.journalData.ownership[a] = 0),
                  "default" === a &&
                    game.users?.forEach((e) => {
                      2 === this.journalData.ownership[e.id] &&
                        (this.journalData.ownership[e.id] = 0);
                    });
              this.dirty = !0;
            }
            this.writeInputValuesToObjects().catch((e) => console.error(e));
          }
        }
        updateNoteRepeatDropdown() {
          if (this.appWindow) {
            const e = this.appWindow.querySelector(
                `#scNoteRepeats_${this.object.id}`
              ),
              a = this.journalData.flags[t].noteData;
            if (e && a) {
              const t = R.getCalendar(a.calendarId);
              if (t) {
                const s = ae(t, a.startDate, a.endDate),
                  n = {
                    0: "FSC.Notes.Repeat.Never",
                    1: "FSC.Notes.Repeat.Weekly",
                    2: "FSC.Notes.Repeat.Monthly",
                    3: "FSC.Notes.Repeat.Yearly",
                  };
                s >= t.totalNumberOfDays(!1, !0)
                  ? (delete n[1], delete n[2], delete n[3])
                  : s >= t.months[a.startDate.month].days.length
                  ? (delete n[1], delete n[2])
                  : s >= t.weekdays.length && delete n[1];
                let i = "";
                for (const e in n) {
                  i += `<option value="${e}" ${
                    a.repeats.toString() === e ? "selected" : ""
                  }>${H.Localize(n[e])}</option>`;
                }
                e.innerHTML = i;
              }
            }
          }
        }
        async writeInputValuesToObjects() {
          let e = !1;
          if (this.appWindow) {
            (this.journalData.name = Ke(".fsc-kh", "New Note", this.appWindow)),
              (this.journalData.flags[t].noteData.repeats = Xe(
                `#scNoteRepeats_${this.object.id}`,
                l.Never,
                !1,
                this.appWindow
              )),
              (this.journalData.flags[t].noteData.macro = Ke(
                `#scNoteMacro_${this.object.id}`,
                "none",
                this.appWindow
              ));
            const a = Qe(`#scRemindMe_${this.object.id}`, !1, this.appWindow),
              s = game.user;
            if (s) {
              const e =
                this.journalData.flags[t].noteData.remindUsers.indexOf(s.id) >
                -1;
              if (a && !e)
                this.journalData.flags[t].noteData.remindUsers.push(s.id);
              else if (!a && e) {
                const e = this.journalData.flags[
                  t
                ].noteData.remindUsers.indexOf(s.id);
                this.journalData.flags[t].noteData.remindUsers.splice(e, 1);
              }
            }
            this.journalPages[this.uiElementStates.selectedPageIndex].name = Ke(
              `#scPageName_${this.object.id}`,
              "New Page",
              this.appWindow
            );
            const n = Ke(
              `#scPageType_${this.object.id}`,
              "text",
              this.appWindow
            );
            switch (
              (this.journalPages[this.uiElementStates.selectedPageIndex]
                .type !== n &&
                ((this.journalPages[
                  this.uiElementStates.selectedPageIndex
                ].type = n),
                (e = !0)),
              n)
            ) {
              case "text":
                this.editors.content && (await this.saveEditor("content"));
                break;
              case "image":
                (this.journalPages[this.uiElementStates.selectedPageIndex].src =
                  Ke(`#scPageImageSrc_${this.object.id}`, "", this.appWindow)),
                  (this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].image = {
                    caption: Ke(
                      `#scPageImageCaption_${this.object.id}`,
                      "",
                      this.appWindow
                    ),
                  });
                break;
              case "pdf":
                this.journalPages[this.uiElementStates.selectedPageIndex].src =
                  Ke(`#scPagePDFSrc_${this.object.id}`, "", this.appWindow);
                break;
              case "video": {
                const e =
                  3600 *
                    (Xe(
                      `#scPageVideoHours_${this.object.id}`,
                      null,
                      !1,
                      this.appWindow
                    ) ||
                      null ||
                      0) +
                  60 *
                    (Xe(
                      `#scPageVideoMinutes_${this.object.id}`,
                      null,
                      !1,
                      this.appWindow
                    ) ||
                      null ||
                      0) +
                  (Xe(
                    `#scPageVideoSeconds_${this.object.id}`,
                    null,
                    !1,
                    this.appWindow
                  ) ||
                    null ||
                    0);
                (this.journalPages[this.uiElementStates.selectedPageIndex].src =
                  Ke(`#scPageVideoSrc_${this.object.id}`, "", this.appWindow)),
                  (this.journalPages[
                    this.uiElementStates.selectedPageIndex
                  ].video = {
                    controls: Qe(
                      `#scPageVideoControls_${this.object.id}`,
                      !1,
                      this.appWindow
                    ),
                    autoplay: Qe(
                      `#scPageVideoAutoplay_${this.object.id}`,
                      !1,
                      this.appWindow
                    ),
                    loop: Qe(
                      `#scPageVideoLoop_${this.object.id}`,
                      !1,
                      this.appWindow
                    ),
                    volume:
                      Xe(
                        `#scPageVideoVolume_${this.object.id}`,
                        0.5,
                        !0,
                        this.appWindow
                      ) || 0,
                    height: Xe(
                      `#scPageVideoHeight_${this.object.id}`,
                      null,
                      !1,
                      this.appWindow
                    ),
                    width: Xe(
                      `#scPageVideoWidth_${this.object.id}`,
                      null,
                      !1,
                      this.appWindow
                    ),
                    timestamp: e,
                  });
                break;
              }
            }
            (this.dirty = !0), e && this.render(!0);
          }
        }
        async reminderChange(e = !0) {
          const a = game.user;
          if (a) {
            const s = a.id;
            if (this.object.testUserPermission(a, 3)) {
              const e =
                this.journalData.flags[t].noteData.remindUsers.indexOf(s);
              "" !== s && -1 === e
                ? this.journalData.flags[t].noteData.remindUsers.push(s)
                : "" !== s &&
                  -1 !== e &&
                  this.journalData.flags[t].noteData.remindUsers.splice(e, 1),
                await this.object.update(this.journalData);
            } else {
              const e = {
                type: u.noteUpdate,
                data: { userId: s, journalId: this.object.id },
              };
              await O.emit(e);
            }
            e && this.render(!0), Y.updateApp();
          }
        }
        searchUpdate(e) {
          const t = e.target;
          t &&
            ((this.uiElementStates.search.term = t.value), this.searchPages());
        }
        clearSearch() {
          if (((this.uiElementStates.search.term = ""), this.appWindow)) {
            const e = this.appWindow.querySelector(".fsc-wg .fsc-kg input");
            e && (e.value = "");
          }
          this.searchPages();
        }
        searchPages() {
          const e = this.journalPages.filter(
            (e) => -1 === e.name.indexOf(this.uiElementStates.search.term)
          );
          if (
            (this.journalPages.forEach((e) => {
              e.show = !0;
            }),
            this.appWindow
              ?.querySelectorAll(".fsc-bh li")
              .forEach((e) => e.classList.remove("fsc-ia")),
            e.length)
          ) {
            for (let t = 0; t < e.length; t++)
              (e[t].show = !1),
                this.appWindow
                  ?.querySelector(`.fsc-bh li[data-index="${e[t]._id}"]`)
                  ?.classList.add("fsc-ia");
            this.appWindow
              ?.querySelector(".fsc-lh .fsc-kg .fsc-yb")
              ?.classList.remove("fsc-ia");
          } else
            this.appWindow
              ?.querySelector(".fsc-lh .fsc-kg .fsc-yb")
              ?.classList.add("fsc-ia");
        }
        async edit(e) {
          e.preventDefault(),
            (this.resized = !1),
            (this.editMode = !0),
            (this.uiElementStates["fsc-wg"] = !0),
            this.render(!0);
        }
        changePage(e) {
          const t = e.target?.closest("li");
          if (t) {
            const e = t.getAttribute("data-index");
            if (e) {
              const t = this.journalPages.findIndex((t) => t._id === e);
              t > -1 &&
                ((this.uiElementStates.selectedPageIndex = t), this.render(!0));
            }
          }
        }
        async addPage() {
          this.journalPages.push({
            _id: foundry.utils.randomID(),
            show: !0,
            name: "New Page",
            type: "text",
            text: { content: "" },
          }),
            (this.uiElementStates.selectedPageIndex =
              this.journalPages.length - 1),
            (this.dirty = !0),
            this.render(!0);
        }
        async removePage(e) {
          const t = e.target?.closest("li");
          if (t) {
            const e = t.getAttribute("data-index");
            if (e) {
              const t = this.journalPages.findIndex((t) => t._id === e);
              t > -1 &&
                (this.journalPages.splice(t, 1),
                this.uiElementStates.selectedPageIndex >=
                  this.journalPages.length &&
                  (this.uiElementStates.selectedPageIndex =
                    this.journalPages.length - 1)),
                (this.dirty = !0),
                this.render(!0);
            }
          }
        }
        async save(e) {
          e.preventDefault(),
            await this.writeInputValuesToObjects(),
            (this.journalData.flags[t].noteData.fromPredefined = !1),
            await this.object.update(this.journalData, {
              render: !1,
              renderSheet: !1,
            });
          const a =
            this.object.getEmbeddedCollection("JournalEntryPage").contents;
          for (let e = 0; e < a.length; e++) {
            -1 === this.journalPages.findIndex((t) => t._id === a[e].id) &&
              (await a[e].delete({ render: !1, renderSheet: !1 }));
          }
          for (let e = 0; e < this.journalPages.length; e++) {
            a.find((t) => t.id === this.journalPages[e]._id)
              ? await this.object.updateEmbeddedDocuments(
                  "JournalEntryPage",
                  [
                    {
                      _id: this.journalPages[e]._id,
                      name: this.journalPages[e].name,
                      type: this.journalPages[e].type,
                      text: {
                        content: this.journalPages[e].text?.content || "",
                        format: 1,
                        markdown: void 0,
                      },
                      src: this.journalPages[e].src || "",
                      image: {
                        caption: this.journalPages[e].image?.caption || "",
                      },
                      video: this.journalPages[e].video,
                    },
                  ],
                  { render: !1, renderSheet: !1 }
                )
              : await this.object.createEmbeddedDocuments(
                  "JournalEntryPage",
                  [
                    {
                      text: {
                        content: this.journalPages[e].text?.content || "",
                        format: 1,
                        markdown: void 0,
                      },
                      name: this.journalPages[e].name,
                      type: this.journalPages[e].type,
                      src: this.journalPages[e].src || "",
                      image: {
                        caption: this.journalPages[e].image?.caption || "",
                      },
                      video: {
                        autoplay: this.journalPages[e].video?.autoplay || !1,
                        controls: this.journalPages[e].video?.controls || !1,
                        height: this.journalPages[e].video?.height || null,
                        loop: this.journalPages[e].video?.loop || !1,
                        timestamp: this.journalPages[e].video?.timestamp || 0,
                        volume: this.journalPages[e].video?.volume || 0.5,
                        width: this.journalPages[e].video?.width || null,
                      },
                    },
                  ],
                  { render: !1, renderSheet: !1 }
                );
          }
          Y.updateApp(),
            await O.emit({ type: u.mainAppUpdate, data: {} }),
            (this.resized = !1),
            (this.editMode = !1),
            (this.dirty = !1),
            this.render(!0);
        }
        delete(e) {
          e.preventDefault();
          new Dialog({
            title: H.Localize("FSC.DeleteConfirm"),
            content: H.Localize("FSC.DeleteConfirmText"),
            buttons: {
              yes: {
                icon: '<i class="fas fa-trash"></i>',
                label: H.Localize("FSC.Delete"),
                callback: this.deleteConfirm.bind(this),
              },
              no: {
                icon: '<i class="fas fa-times"></i>',
                label: H.Localize("FSC.Cancel"),
              },
            },
            default: "no",
          }).render(!0);
        }
        async deleteConfirm() {
          (this.dirty = !1),
            z.removeNoteStub(this.object),
            Y.updateApp(),
            await this.object.delete(),
            await O.emit({ type: u.mainAppUpdate, data: {} }),
            await this.close();
        }
      }
      class ra {
        fireOnce = !0;
        fired = !1;
        onFire;
        constructor(e, t) {
          (this.fireOnce = t), (this.onFire = e);
        }
        fire(e, t = !1) {
          (!this.fireOnce || (this.fireOnce && !this.fired)) &&
            (this.fired = this.onFire(e, t));
        }
      }
      class ca {
        entryId;
        triggers = [];
        static reminderNoteTrigger(e, t) {
          const a = e.noteData;
          if (a && e.userReminderRegistered) {
            const s = R.getCalendar(a.calendarId);
            if (
              s &&
              (!t || (t && s.generalSettings.postNoteRemindersOnFoundryLoad))
            )
              return (
                G.clientSettings.noteReminderNotification === I.whisper
                  ? ChatMessage.create({
                      speaker: { alias: "Simple Calendar Reminder" },
                      whisper: [H.UserID()],
                      content: `<h2>${e.title}</h2><div style="display: flex;margin-bottom: 0.5rem;"><div class="note-category"><span class="fa fa-calendar"></span> ${e.fullDisplayDate}</div></div>${e.link}`,
                    }).catch(P.error)
                  : G.clientSettings.noteReminderNotification === I.render &&
                    e.render(),
                !0
              );
          }
          return !1;
        }
        static macroNoteTrigger(e, t) {
          const a = e.macro;
          if (!t && a && "none" !== a) {
            const e = game.macros?.get(a);
            if (e && e.canExecute) return e.execute(), !0;
          }
          return !1;
        }
        constructor(e) {
          (this.entryId = e),
            this.triggers.push(new ra(ca.reminderNoteTrigger, !0)),
            this.triggers.push(new ra(ca.macroNoteTrigger, !0));
        }
        get noteData() {
          const e = game.journal?.get(this.entryId);
          return e ? e.getFlag(t, "noteData") : null;
        }
        get ownership() {
          const e = game.journal?.get(this.entryId);
          return e ? e.ownership : {};
        }
        get allDay() {
          const e = this.noteData;
          return !e || e.allDay;
        }
        get link() {
          const e = game.journal?.get(this.entryId);
          return e ? e.link : "";
        }
        get title() {
          const e = game.journal?.get(this.entryId);
          return e?.name || "";
        }
        get pages() {
          const e = game.journal?.get(this.entryId);
          return e ? e.pages.contents : [];
        }
        get repeats() {
          const e = this.noteData;
          return e ? e.repeats : l.Never;
        }
        get order() {
          const e = this.noteData;
          return e ? e.order : 0;
        }
        async setOrder(e) {
          const a = game.journal?.get(this.entryId);
          if (a) {
            const s = a.getFlag(t, "noteData");
            s && ((s.order = e), await a.setFlag(t, "noteData", s));
          }
        }
        get authorDisplay() {
          const e = game.journal?.get(this.entryId);
          if (e) {
            const a = e.getFlag(t, "noteData");
            if (a && a.fromPredefined)
              return { name: "System", color: "", colorText: "" };
            {
              const e = this.ownership;
              for (const t in e)
                if (3 === e[t]) {
                  const e = game.users?.get(t);
                  if (e) {
                    let t = e.color?.toString() || "";
                    return {
                      name: e.name || "",
                      color: t || "",
                      colorText: le(t || ""),
                    };
                  }
                }
            }
          }
          return null;
        }
        get canEdit() {
          let e = H.IsGm();
          if (!e) {
            const t = game.journal?.get(this.entryId);
            if (t) {
              const t = this.ownership;
              for (const a in t)
                if (3 === t[a] && a === H.UserID()) {
                  e = !0;
                  break;
                }
            }
          }
          return e;
        }
        get categories() {
          const e = this.noteData;
          if (e) {
            const t = R.getCalendar(e.calendarId);
            if (t)
              return t.noteCategories.filter(
                (t) => e.categories.indexOf(t.name) > -1
              );
          }
          return [];
        }
        get displayDate() {
          return this.getDisplayDate(!1);
        }
        get fullDisplayDate() {
          return this.getDisplayDate(!0);
        }
        get playerVisible() {
          const e = game.journal?.get(this.entryId),
            t = { icon: "fa-eye-slash", color: "fsc-mh", players: "" };
          if (e) {
            const e = this.ownership,
              a = game.users?.filter((t) => void 0 !== e[t.id] && e[t.id] >= 2);
            a &&
              (a.length === game.users?.contents.length
                ? ((t.icon = "fa-eye"), (t.color = "fsc-nh"))
                : a.length > 1 &&
                  ((t.icon = "fa-eye-low-vision"), (t.color = "fsc-dc")),
              (t.players = `${H.Localize(
                "FSC.Notes.UserPermissionTitle"
              )}:<ul style="text-align: left;padding: 0;margin-bottom:0;list-style: none;"><li>${a
                .map((e) => e.name || "")
                .join("</li><li>")}</li></ul>`));
          }
          return t;
        }
        get userReminderRegistered() {
          let e = !1;
          if (this.canUserView()) {
            const t = this.noteData,
              a = game.user;
            t && a && (e = t.remindUsers.indexOf(a.id) > -1);
          }
          return e;
        }
        get fromPredefined() {
          const e = this.noteData;
          return !(!e || void 0 === e.fromPredefined) && e.fromPredefined;
        }
        get macro() {
          const e = this.noteData;
          return e && void 0 !== e.macro ? e.macro : "none";
        }
        render() {
          z.showNote(this.entryId);
        }
        canUserView() {
          const e = game.journal?.get(this.entryId),
            t = game.user;
          return (
            !(!e || !t) &&
            !(0 === this.ownership[t.id] || !e.testUserPermission(t, 2))
          );
        }
        getDisplayDate(e) {
          const t = this.noteData;
          if (t) {
            const a = R.getCalendar(t.calendarId);
            if (a) {
              const s = a.year.selectedYear || a.year.visibleYear;
              let n = a.getMonthAndDayIndex("selected");
              void 0 === n.month && (n = a.getMonthAndDayIndex());
              let i = t.startDate.year,
                o = t.startDate.month,
                r = t.startDate.day,
                c = t.endDate.year,
                d = t.endDate.month,
                h = t.endDate.day;
              if (t.repeats === l.Weekly) {
                (i = s), (c = s);
                const e = a.dayOfTheWeek(t.startDate.year, o, r),
                  l = a.dayOfTheWeek(t.endDate.year, d, h),
                  m = a.dayOfTheWeek(s, n.month || 0, n.day || 0);
                let u = l - e;
                u < 0 && (u = a.weekdays.length + u),
                  u++,
                  (o = n.month || 0),
                  (d = n.month || 0);
                let p = m - e,
                  g = l - m;
                if (
                  (p < 0 && (p = a.weekdays.length + p),
                  g < 0 && (g = a.weekdays.length + g),
                  p + g < u)
                ) {
                  (r = (n.day || 0) - p), (h = (n.day || 0) + g);
                  let e = 0;
                  for (; r < 0 && e < a.months.length; ) {
                    o--, o < 0 && (i--, (o = a.months.length - 1));
                    const t = a.year.leapYearRule.isLeapYear(i);
                    (r =
                      a.months[o][t ? "numberOfLeapYearDays" : "numberOfDays"] +
                      r),
                      e++;
                  }
                  let t = a.year.leapYearRule.isLeapYear(c);
                  for (
                    e = 0;
                    h >=
                      a.months[d][
                        t ? "numberOfLeapYearDays" : "numberOfDays"
                      ] && e < a.months.length;

                  )
                    (h -=
                      a.months[d][t ? "numberOfLeapYearDays" : "numberOfDays"]),
                      d++,
                      d >= a.months.length &&
                        (c++, (d = 0), (t = a.year.leapYearRule.isLeapYear(c))),
                      e++;
                }
              } else if (t.repeats === l.Monthly) {
                if (
                  ((i = s),
                  (c = s),
                  (o = n.month || 0),
                  (d = n.month || 0),
                  t.startDate.month !== t.endDate.month &&
                    (t.startDate.day <= (n.day || 0)
                      ? ((d = (n.month || 0) + 1),
                        d >= a.months.length && ((d = 0), (c = s + 1)))
                      : t.endDate.day >= (n.day || 0) &&
                        ((o = (n.month || 0) - 1),
                        o < 0 && ((o = a.months.length - 1), (i = s - 1)))),
                  t.startDate.day >= a.months[o].days.length)
                ) {
                  r =
                    (a.year.leapYearRule.isLeapYear(i)
                      ? a.months[o].numberOfLeapYearDays
                      : a.months[o].numberOfDays) - 1;
                }
                if (t.endDate.day >= a.months[d].days.length) {
                  h =
                    (a.year.leapYearRule.isLeapYear(c)
                      ? a.months[d].numberOfLeapYearDays
                      : a.months[d].numberOfDays) - 1;
                }
              } else if (t.repeats === l.Yearly)
                if (t.startDate.year !== t.endDate.year) {
                  const e = t.endDate.year - t.startDate.year;
                  t.startDate.month === (n.month || 0) &&
                  t.startDate.day <= (n.day || 0)
                    ? ((i = s), (c = s + e))
                    : t.endDate.month === (n.month || 0) &&
                      t.endDate.day >= (n.day || 0) &&
                      ((i = s - e), (c = s));
                } else (i = s), (c = s);
              return ee(
                a,
                {
                  year: i,
                  month: o,
                  day: r,
                  hour: t.startDate.hour,
                  minute: t.startDate.minute,
                  seconds: 0,
                },
                {
                  year: c,
                  month: d,
                  day: h,
                  hour: t.endDate.hour,
                  minute: t.endDate.minute,
                  seconds: 0,
                },
                t.allDay,
                !e
              );
            }
          }
          return "";
        }
        isVisible(e, t, a, s) {
          const n = R.getCalendar(e),
            i = this.noteData;
          let o = !1;
          if (i && n && this.canUserView()) {
            let e = d.None;
            if (i.repeats === l.Weekly) {
              const o = n.dayOfTheWeek(
                  i.startDate.year,
                  i.startDate.month,
                  i.startDate.day
                ),
                r = n.dayOfTheWeek(t, a, s),
                c = n.dayOfTheWeek(
                  i.endDate.year,
                  i.endDate.month,
                  i.endDate.day
                );
              o === r
                ? (e = d.Start)
                : c === r
                ? (e = d.End)
                : ((o < c && o < r && c > r) ||
                    (o > c && ((o < r && c < r) || (o > r && c > r)))) &&
                  (e = d.Middle);
            } else if (i.repeats === l.Monthly)
              if (i.startDate.month !== i.endDate.month) {
                let o = a - 1,
                  r = a + 1,
                  c = t,
                  l = t;
                o < 0 && ((o = n.months.length - 1), c--),
                  r >= n.months.length && ((r = 0), l++);
                const h = se(
                    n,
                    {
                      year: t,
                      month: a,
                      day: s,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: c,
                      month: o,
                      day: i.startDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: t,
                      month: a,
                      day: i.endDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    }
                  ),
                  m = se(
                    n,
                    {
                      year: t,
                      month: a,
                      day: s,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: t,
                      month: a,
                      day: i.startDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: l,
                      month: r,
                      day: i.endDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    }
                  );
                (h === d.None && m === d.None) || (e = d.Middle);
              } else
                e = se(
                  n,
                  { year: t, month: a, day: s, hour: 0, minute: 0, seconds: 0 },
                  {
                    year: t,
                    month: a,
                    day: i.startDate.day,
                    hour: 0,
                    minute: 0,
                    seconds: 0,
                  },
                  {
                    year: t,
                    month: a,
                    day: i.endDate.day,
                    hour: 0,
                    minute: 0,
                    seconds: 0,
                  }
                );
            else if (i.repeats === l.Yearly) {
              let o = t,
                r = t;
              if (i.startDate.year !== i.endDate.year) {
                const c = i.endDate.year - i.startDate.year;
                (o = t - c), (r = t + c);
                const l = se(
                    n,
                    {
                      year: t,
                      month: a,
                      day: s,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: t,
                      month: i.startDate.month,
                      day: i.startDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: r,
                      month: i.endDate.month,
                      day: i.endDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    }
                  ),
                  h = se(
                    n,
                    {
                      year: t,
                      month: a,
                      day: s,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: o,
                      month: i.startDate.month,
                      day: i.startDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    },
                    {
                      year: t,
                      month: i.endDate.month,
                      day: i.endDate.day,
                      hour: 0,
                      minute: 0,
                      seconds: 0,
                    }
                  );
                (l === d.None && h === d.None) || (e = d.Middle);
              } else
                e = se(
                  n,
                  { year: t, month: a, day: s, hour: 0, minute: 0, seconds: 0 },
                  {
                    year: t,
                    month: i.startDate.month,
                    day: i.startDate.day,
                    hour: 0,
                    minute: 0,
                    seconds: 0,
                  },
                  {
                    year: t,
                    month: i.endDate.month,
                    day: i.endDate.day,
                    hour: 0,
                    minute: 0,
                    seconds: 0,
                  }
                );
            } else
              e = se(
                n,
                { year: t, month: a, day: s, hour: 0, minute: 0, seconds: 0 },
                {
                  year: i.startDate.year,
                  month: i.startDate.month,
                  day: i.startDate.day,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                },
                {
                  year: i.endDate.year,
                  month: i.endDate.month,
                  day: i.endDate.day,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                }
              );
            o = e !== d.None;
          }
          return o;
        }
      }
      class la {
        k1 = 1.3;
        b = 0.75;
        totalDocumentTermCount = 0;
        averageDocumentTermCount = 0;
        documents = {};
        terms = {};
        stopWords = [
          "a",
          "about",
          "above",
          "after",
          "again",
          "against",
          "all",
          "am",
          "an",
          "and",
          "any",
          "are",
          "aren't",
          "as",
          "at",
          "be",
          "because",
          "been",
          "before",
          "being",
          "below",
          "between",
          "both",
          "but",
          "by",
          "can't",
          "cannot",
          "could",
          "couldn't",
          "did",
          "didn't",
          "do",
          "does",
          "doesn't",
          "doing",
          "don't",
          "down",
          "during",
          "each",
          "few",
          "for",
          "from",
          "further",
          "had",
          "hadn't",
          "has",
          "hasn't",
          "have",
          "haven't",
          "having",
          "he",
          "he'd",
          "he'll",
          "he's",
          "her",
          "here",
          "here's",
          "hers",
          "herself",
          "him",
          "himself",
          "his",
          "how",
          "how's",
          "i",
          "i'd",
          "i'll",
          "i'm",
          "i've",
          "if",
          "in",
          "into",
          "is",
          "isn't",
          "it",
          "it's",
          "its",
          "itself",
          "let's",
          "me",
          "more",
          "most",
          "mustn't",
          "my",
          "myself",
          "no",
          "nor",
          "not",
          "of",
          "off",
          "on",
          "once",
          "only",
          "or",
          "other",
          "ought",
          "our",
          "ours",
          "ourselves",
          "out",
          "over",
          "own",
          "same",
          "shan't",
          "she",
          "she'd",
          "she'll",
          "she's",
          "should",
          "shouldn't",
          "so",
          "some",
          "such",
          "than",
          "that",
          "that's",
          "the",
          "their",
          "theirs",
          "them",
          "themselves",
          "then",
          "there",
          "there's",
          "these",
          "they",
          "they'd",
          "they'll",
          "they're",
          "they've",
          "this",
          "those",
          "through",
          "to",
          "too",
          "under",
          "until",
          "up",
          "very",
          "was",
          "wasn't",
          "we",
          "we'd",
          "we'll",
          "we're",
          "we've",
          "were",
          "weren't",
          "what",
          "what's",
          "when",
          "when's",
          "where",
          "where's",
          "which",
          "while",
          "who",
          "who's",
          "whom",
          "why",
          "why's",
          "with",
          "won't",
          "would",
          "wouldn't",
          "you",
          "you'd",
          "you'll",
          "you're",
          "you've",
          "your",
          "yours",
          "yourself",
          "yourselves",
        ];
        constructor(e) {
          e.forEach((e) => this.addDocument(e)), this.calculateIdf();
        }
        addDocument(e) {
          const t = Array.isArray(e.content) ? e.content.join(" ") : e.content,
            a = this.tokenize(t),
            s = {
              id: e.id,
              content: t.toLowerCase(),
              score: 0,
              terms: {},
              tokens: a,
              termCount: a.length,
            };
          this.totalDocumentTermCount += a.length;
          for (let e = 0; e < a.length; e++) {
            const t = a[e];
            s.terms[t] || (s.terms[t] = { count: 0, freq: 0 }),
              s.terms[t].count++;
          }
          for (const e in s.terms)
            (s.terms[e].freq = s.terms[e].count / s.termCount),
              this.terms[e] || (this.terms[e] = { n: 0, idf: 0 }),
              this.terms[e].n++;
          (this.documents[s.id] = s),
            (this.averageDocumentTermCount =
              this.totalDocumentTermCount / Object.keys(this.documents).length);
        }
        calculateIdf() {
          const e = Object.keys(this.documents).length;
          for (const t in this.terms)
            this.terms[t].idf = Math.max(
              Math.log10((e - this.terms[t].n + 0.5) / (this.terms[t].n + 0.5)),
              0.01
            );
        }
        static _min(e, t, a, s, n) {
          return e < t || a < t ? (e > a ? a + 1 : e + 1) : s === n ? t : t + 1;
        }
        static levenshteinDistance(e, t) {
          if (e.length > t.length) {
            const a = e;
            (e = t), (t = a);
          }
          let a = e.length,
            s = t.length;
          for (; a > 0 && e.charCodeAt(a - 1) === t.charCodeAt(s - 1); )
            a--, s--;
          let n = 0;
          for (; n < a && e.charCodeAt(n) === t.charCodeAt(n); ) n++;
          if (((a -= n), (s -= n), 0 === a || s < 3)) return s;
          let i,
            o,
            r,
            c,
            l,
            d,
            h,
            m,
            u,
            p,
            g,
            f = 0,
            y = 1e3;
          const b = [];
          for (i = 0; i < a; i++) b.push(i + 1), b.push(e.charCodeAt(n + i));
          const C = b.length - 1;
          for (; f < s - 3; )
            for (
              m = t.charCodeAt(n + (o = f)),
                u = t.charCodeAt(n + (r = f + 1)),
                p = t.charCodeAt(n + (c = f + 2)),
                g = t.charCodeAt(n + (l = f + 3)),
                y = f += 4,
                i = 0;
              i < C;
              i += 2
            )
              (d = b[i]),
                (h = b[i + 1]),
                (o = la._min(d, o, r, m, h)),
                (r = la._min(o, r, c, u, h)),
                (c = la._min(r, c, l, p, h)),
                (y = la._min(c, l, y, g, h)),
                (b[i] = y),
                (l = c),
                (c = r),
                (r = o),
                (o = d);
          for (; f < s; )
            for (m = t.charCodeAt(n + (o = f)), y = ++f, i = 0; i < C; i += 2)
              (d = b[i]), (b[i] = y = la._min(d, o, y, m, b[i + 1])), (o = d);
          return y;
        }
        tokenize(e) {
          return e
            .toLowerCase()
            .replace(/\r?\n|\r/g, " ")
            .trim()
            .split(" ")
            .filter((e) => -1 === this.stopWords.indexOf(e));
        }
        search(e) {
          const t = this.tokenize(e),
            a = [];
          for (const e in this.documents) {
            this.documents[e].score = 0;
            for (let a = 0; a < t.length; a++) {
              const s = t[a];
              if (this.terms[s] && this.documents[e].terms[s]) {
                const t =
                  this.documents[e].terms[s].count +
                  this.k1 *
                    (1 -
                      this.b +
                      (this.b * this.documents[e].termCount) /
                        this.averageDocumentTermCount);
                this.documents[e].score +=
                  (this.terms[s].idf *
                    (this.documents[e].terms[s].count * (this.k1 + 1))) /
                  t;
              } else {
                const t = Object.keys(this.documents[e].terms).filter(
                    (e) => -1 !== e.indexOf(s)
                  ).length,
                  a = Object.keys(this.documents[e].terms)
                    .map((e) => la.levenshteinDistance(e, s) / 3)
                    .filter((e) => e < 1)
                    .reduce((e, t) => e + (1 - t), 0);
                this.documents[e].score += 0.00125 * t + 0.0025 * a;
              }
            }
            !isNaN(this.documents[e].score) &&
              this.documents[e].score > 0 &&
              a.push(this.documents[e]);
          }
          return (
            a.sort(function (e, t) {
              return t.score - e.score;
            }),
            a.map((e) => e.id)
          );
        }
      }
      class da {
        notes = {};
        noteDirectory;
        async initialize() {
          this.registerNoteSheets(),
            await this.createJournalDirectory(),
            await this.loadNotes();
        }
        registerNoteSheets() {
          Journal.registerSheet(t, NoteSheet, {
            types: ["base"],
            makeDefault: !1,
            label: "Simple Calendar: Note Sheet",
          });
        }
        async createJournalDirectory() {
          const e = game.journal?.directory;
          e &&
            ((this.noteDirectory = e.folders.find((e) => e.getFlag(t, "root"))),
            !this.noteDirectory &&
              H.IsGm() &&
              (await Folder.create({
                name: "_simple_calendar_notes_directory",
                type: "JournalEntry",
                parent: null,
                flags: { [t]: { root: !0 } },
              }),
              (this.noteDirectory = e.folders.find((e) =>
                e.getFlag(t, "root")
              ))));
        }
        async addNewNote(e, t) {
          const a = e.getDateTime(),
            s = {
              calendarId: e.id,
              startDate: a,
              endDate: a,
              allDay: !0,
              repeats: l.Never,
              order: 0,
              categories: [],
              remindUsers: [],
            };
          await this.createNote(t, "", s, e);
        }
        async createNote(e, a, s, n, i = !0, o = !0) {
          const r = {};
          game.users?.forEach(
            (e) =>
              (r[e.id] =
                game.user?.id === e.id
                  ? 3
                  : n.generalSettings.noteDefaultVisibility
                  ? 2
                  : 0)
          );
          const c = await JournalEntry.create({
            name: e,
            folder: this.noteDirectory?.id,
            flags: {
              core: { sheetClass: `${t}.${NoteSheet.name}` },
              [t]: { noteData: s },
            },
            ownership: r,
          });
          if (c) {
            if (
              (await c.createEmbeddedDocuments("JournalEntryPage", [
                { text: { content: a }, name: "Details" },
              ]),
              i)
            ) {
              new NoteSheet(c).render(!0, {}, !0);
            }
            return (
              o &&
                (Y.updateApp(),
                await O.emit({ type: u.mainAppUpdate, data: {} })),
              c
            );
          }
          return null;
        }
        journalEntryUpdate(e, a) {
          const s = a.getFlag(t, "noteData");
          s &&
            (0 === e
              ? this.addNoteStub(a, s.calendarId)
              : 2 === e
              ? this.removeNoteStub(a)
              : 1 === e && Y.updateApp());
        }
        addNoteStub(e, t) {
          Object.prototype.hasOwnProperty.call(this.notes, t) ||
            (this.notes[t] = []),
            this.notes[t].push(new ca(e.id || ""));
        }
        removeNoteStub(e) {
          const a = e.getFlag(t, "noteData");
          if (
            a &&
            Object.prototype.hasOwnProperty.call(this.notes, a.calendarId)
          ) {
            const t = this.notes[a.calendarId].findIndex(
              (t) => t.entryId === e.id
            );
            t >= 0 && this.notes[a.calendarId].splice(t, 1);
          }
        }
        async loadNotes() {
          if (this.noteDirectory) {
            (this.notes = {}),
              await this.loadNotesFromFolder(this.noteDirectory);
            const e = game.journal?.directory;
            if (e)
              for (let t = 0; t < e.folders.length; t++) {
                const a = e.folders[t];
                a.folder &&
                  a.folder.id === this.noteDirectory.id &&
                  (await this.loadNotesFromFolder(a));
              }
          }
        }
        async loadNotesFromFolder(e) {
          for (let a = 0; a < e.contents.length; a++) {
            const s = e.contents[a];
            0 === s.pages.contents.length &&
              (await s.createEmbeddedDocuments("JournalEntryPage", [
                { text: { content: "" }, name: "Details" },
              ]));
            const n = s.getFlag(t, "noteData");
            n && this.addNoteStub(s, n.calendarId);
          }
        }
        showNote(e) {
          const t = game.journal?.get(e);
          t &&
            t.sheet &&
            (t.sheet.rendered ? t.sheet.bringToTop() : t.sheet.render(!0));
        }
        getNoteStub(e) {
          const a = e.getFlag(t, "noteData");
          if (
            a &&
            Object.prototype.hasOwnProperty.call(this.notes, a.calendarId)
          )
            return this.notes[a.calendarId].find((t) => t.entryId === e.id);
        }
        getNotes(e) {
          return (this.notes[e] || []).filter((e) => e.canUserView());
        }
        getNotesForDay(e, t, a, s) {
          const n = (this.notes[e] || []).filter((n) =>
            n.isVisible(e, t, a, s)
          );
          return n.sort(da.dayNoteSort), n;
        }
        getNoteCountsForDay(e, t, a, s) {
          const n = z.getNotesForDay(e, t, a, s),
            i = { count: 0, reminderCount: 0 };
          for (let e = 0; e < n.length; e++)
            n[e].userReminderRegistered ? i.reminderCount++ : i.count++;
          return i;
        }
        async orderNotesOnDay(e, t, a) {
          const s = this.getNotesForDay(e, a.year, a.month, a.day);
          for (let e = 0; e < t.length; e++) {
            const a = s.find((a) => a.entryId === t[e]);
            a && (await a.setOrder(e));
          }
          await O.emit({ type: u.mainAppUpdate, data: {} });
        }
        static dayNoteSort(e, t) {
          const a = e.noteData,
            s = t.noteData;
          return a && s
            ? a.order - s.order ||
                a.startDate.hour - s.startDate.hour ||
                a.startDate.minute - s.startDate.minute
            : 0;
        }
        noteTriggered(e, t) {
          let a = !1;
          const s = e.noteData,
            n = t.getCurrentDate();
          if (s && e.isVisible(t.id, n.year, n.month, n.day))
            if (s.allDay) a = !0;
            else {
              const e = se(
                t,
                {
                  year: n.year,
                  month: n.month,
                  day: n.day,
                  hour: 0,
                  minute: 0,
                  seconds: 0,
                },
                s.startDate,
                s.endDate
              );
              if (e === d.Start) {
                const e =
                  s.startDate.hour *
                    t.time.minutesInHour *
                    t.time.secondsInMinute +
                  s.startDate.minute * t.time.secondsInMinute +
                  s.startDate.seconds;
                a = n.seconds >= e;
              } else if (e === d.Middle) a = !0;
              else if (e === d.End) {
                const e =
                  s.endDate.hour *
                    t.time.minutesInHour *
                    t.time.secondsInMinute +
                  s.endDate.minute * t.time.secondsInMinute +
                  s.endDate.seconds;
                a = n.seconds <= e;
              } else if (e === d.Exact) {
                const e =
                    s.startDate.hour *
                      t.time.minutesInHour *
                      t.time.secondsInMinute +
                    s.startDate.minute * t.time.secondsInMinute +
                    s.startDate.seconds,
                  i =
                    s.endDate.hour *
                      t.time.minutesInHour *
                      t.time.secondsInMinute +
                    s.endDate.minute * t.time.secondsInMinute +
                    s.endDate.seconds;
                a = n.seconds >= e && n.seconds <= i;
              }
            }
          return a;
        }
        checkNoteTriggers(e, t = !1) {
          const a = R.getCalendar(e);
          if (a && this.notes[e]) {
            const s = this.notes[e];
            for (let e = 0; e < s.length; e++)
              this.noteTriggered(s[e], a) &&
                s[e].triggers.forEach((a) => {
                  a.fire(s[e], t);
                });
          }
        }
        searchNotes(e, t, a) {
          const s = this.notes[e];
          let n = [];
          if (s) {
            const e = [];
            for (let t = 0; t < s.length; t++)
              if (s[t].canUserView()) {
                const n = [];
                if ((a.title && n.push(s[t].title), a.details)) {
                  const e = s[t].pages;
                  for (let t = 0; t < e.length; t++) {
                    let a = e[t].name || "";
                    if ("text" === e[t].type) {
                      const s = document.createElement("DIV");
                      (s.innerHTML = e[t].text.content),
                        (a += ` ${(s.textContent || s.innerText || "").replace(
                          /\r?\n|\r/g,
                          " "
                        )}`);
                    }
                    n.push(a);
                  }
                }
                a.date && n.push(s[t].fullDisplayDate),
                  a.author && n.push(s[t].authorDisplay?.name || ""),
                  a.categories &&
                    n.push(s[t].categories.map((e) => e.name).join(", ")),
                  e.push({ id: s[t].entryId, content: n });
              }
            const i = new la(e).search(t);
            n = s.filter((e) => -1 !== i.indexOf(e.entryId));
          }
          return n;
        }
      }
      class ha {
        static register() {
          game.keybindings.register(t, "toggleMainApp", {
            name: "FSC.KeyBinding.Toggle.Title",
            hint: "FSC.KeyBinding.Toggle.Hint",
            editable: [{ key: "Z", modifiers: [] }],
            onDown: Y.toggleWindow.bind(Y),
            precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
          });
        }
      }
      class ma {
        static init() {
          const e = {
            apply: function (e, t) {
              return e
                .apply(t)
                .replace(
                  "\n",
                  `\n{Game Time: ${Fe.getFormattedChatTimestamp(t)}}\n`
                );
            },
          };
          ChatMessage.prototype.export = new Proxy(
            ChatMessage.prototype.export,
            e
          );
        }
        static createChatMessage(e) {
          return Fe.addGameTimeToMessage(e), !0;
        }
        static onRenderChatMessage(e, t) {
          return Fe.renderTimestamp(e, t);
        }
      }
      var ua, pa, ga;
      (ua = new na()),
        (R = ua),
        (pa = new tt()),
        (G = pa),
        (ga = new MainApp()),
        (Y = ga),
        (function (e) {
          W = e;
        })(new et()),
        (function (e) {
          q = e;
        })(new oa()),
        (function (e) {
          z = e;
        })(new da()),
        document.body.addEventListener("click", tt.HideContextMenus),
        (window.SimpleCalendar = { api: e, Hooks: C }),
        16 !== ce && document.body.classList.add(`sc-scale-${ce}`),
        Hooks.on("init", async () => {
          Bt.Register(),
            Jt.Register(),
            await R.initialize(),
            G.load(),
            Y.initialize(),
            ha.register(),
            ma.init();
        }),
        Hooks.on("ready", async () => {
          J.isPF2E &&
            (J.updatePF2EVariables(!0), Fe.updateChatMessageTimestamps()),
            q.initialize(),
            q.showMigration
              ? (await q.run(), await z.initialize(), G.initialize())
              : (await z.initialize(),
                G.initialize(),
                G.clientSettings.openOnLoad && Y.render()),
            Ie.emit(C.Ready, R.getActiveCalendar());
        }),
        Hooks.on("canvasInit", G.canvasInit.bind(G)),
        Hooks.on("getSceneControlButtons", G.getSceneControlButtons.bind(G)),
        Hooks.on("renderJournalDirectory", G.renderJournalDirectory.bind(G)),
        Hooks.on("renderJournalSheet", G.renderJournalSheet.bind(G)),
        Hooks.on("updateWorldTime", G.worldTimeUpdate.bind(G)),
        Hooks.on("createCombatant", G.createCombatant.bind(G)),
        Hooks.on("updateCombat", G.combatUpdate.bind(G)),
        Hooks.on("deleteCombat", G.combatDelete.bind(G)),
        Hooks.on("pauseGame", G.gamePaused.bind(G)),
        Hooks.on("preCreateChatMessage", ma.createChatMessage),
        Hooks.on("renderChatMessage", ma.onRenderChatMessage),
        Hooks.on("renderMainApp", MainApp.setWidthHeight),
        Hooks.on("renderNoteSheet", NoteSheet.SetHeight),
        Hooks.on("createJournalEntry", z.journalEntryUpdate.bind(z, 0)),
        Hooks.on("updateJournalEntry", z.journalEntryUpdate.bind(z, 1)),
        Hooks.on("deleteJournalEntry", z.journalEntryUpdate.bind(z, 2)),
        Hooks.on("renderSceneConfig", G.renderSceneConfig.bind(G)),
        Hooks.on("closeWorldClockSettings", J.updatePF2EVariables.bind(J)),
        (P.debugMode = !1);
    })();
})();
