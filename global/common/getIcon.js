// 查找icon base
export default function(icon) {
  let a_icon = [{
      "name": "left-circle",
      "unicode": "\ue784"
    },
    {
      "name": "code",
      "unicode": "\ue884"
    },
    {
      "name": "weibo-square-fill",
      "unicode": "\ue984"
    },
    {
      "name": "down-circle",
      "unicode": "\ue785"
    },
    {
      "name": "column-width",
      "unicode": "\ue885"
    },
    {
      "name": "zhihu-square-fill",
      "unicode": "\ue985"
    },
    {
      "name": "EURO",
      "unicode": "\ue786"
    },
    {
      "name": "check",
      "unicode": "\ue886"
    },
    {
      "name": "zoom out",
      "unicode": "\ue986"
    },
    {
      "name": "copyright",
      "unicode": "\ue787"
    },
    {
      "name": "ellipsis",
      "unicode": "\ue887"
    },
    {
      "name": "apartment",
      "unicode": "\ue987"
    },
    {
      "name": "minus-circle",
      "unicode": "\ue788"
    },
    {
      "name": "dash",
      "unicode": "\ue888"
    },
    {
      "name": "audio",
      "unicode": "\ue988"
    },
    {
      "name": "meh",
      "unicode": "\ue789"
    },
    {
      "name": "close",
      "unicode": "\ue889"
    },
    {
      "name": "audio-fill",
      "unicode": "\ue989"
    },
    {
      "name": "plus-circle",
      "unicode": "\ue78a"
    },
    {
      "name": "enter",
      "unicode": "\ue88a"
    },
    {
      "name": "robot",
      "unicode": "\ue98a"
    },
    {
      "name": "play-circle",
      "unicode": "\ue78b"
    },
    {
      "name": "line",
      "unicode": "\ue88b"
    },
    {
      "name": "zoom in",
      "unicode": "\ue98b"
    },
    {
      "name": "question-circle",
      "unicode": "\ue78c"
    },
    {
      "name": "minus",
      "unicode": "\ue88c"
    },
    {
      "name": "robot-fill",
      "unicode": "\ue98c"
    },
    {
      "name": "Pound",
      "unicode": "\ue78d"
    },
    {
      "name": "question",
      "unicode": "\ue88d"
    },
    {
      "name": "bug-fill",
      "unicode": "\ue98d"
    },
    {
      "name": "right-circle",
      "unicode": "\ue78e"
    },
    {
      "name": "rollback",
      "unicode": "\ue88e"
    },
    {
      "name": "bug",
      "unicode": "\ue98e"
    },
    {
      "name": "smile",
      "unicode": "\ue78f"
    },
    {
      "name": "small-dash",
      "unicode": "\ue88f"
    },
    {
      "name": "audio static",
      "unicode": "\ue98f"
    },
    {
      "name": "trademark",
      "unicode": "\ue790"
    },
    {
      "name": "pause",
      "unicode": "\ue890"
    },
    {
      "name": "comment",
      "unicode": "\ue990"
    },
    {
      "name": "time-circle",
      "unicode": "\ue791"
    },
    {
      "name": "bg-colors",
      "unicode": "\ue891"
    },
    {
      "name": "signal-fill",
      "unicode": "\ue991"
    },
    {
      "name": "time out",
      "unicode": "\ue792"
    },
    {
      "name": "crown",
      "unicode": "\ue892"
    },
    {
      "name": "verified",
      "unicode": "\ue992"
    },
    {
      "name": "earth",
      "unicode": "\ue793"
    },
    {
      "name": "drag",
      "unicode": "\ue893"
    },
    {
      "name": "shortcut-fill",
      "unicode": "\ue993"
    },
    {
      "name": "YUAN",
      "unicode": "\ue794"
    },
    {
      "name": "desktop",
      "unicode": "\ue894"
    },
    {
      "name": "videocamera add",
      "unicode": "\ue994"
    },
    {
      "name": "up-circle",
      "unicode": "\ue795"
    },
    {
      "name": "gift",
      "unicode": "\ue895"
    },
    {
      "name": "switch user",
      "unicode": "\ue995"
    },
    {
      "name": "warning-circle",
      "unicode": "\ue796"
    },
    {
      "name": "stop",
      "unicode": "\ue896"
    },
    {
      "name": "whatsapp",
      "unicode": "\ue996"
    },
    {
      "name": "sync",
      "unicode": "\ue797"
    },
    {
      "name": "fire",
      "unicode": "\ue897"
    },
    {
      "name": "appstore add",
      "unicode": "\ue997"
    },
    {
      "name": "transaction",
      "unicode": "\ue798"
    },
    {
      "name": "thunderbolt",
      "unicode": "\ue898"
    },
    {
      "name": "caret-down",
      "unicode": "\ue998"
    },
    {
      "name": "undo",
      "unicode": "\ue799"
    },
    {
      "name": "check-circle-fill",
      "unicode": "\ue899"
    },
    {
      "name": "backward",
      "unicode": "\ue999"
    },
    {
      "name": "redo",
      "unicode": "\ue79a"
    },
    {
      "name": "left-circle-fill",
      "unicode": "\ue89a"
    },
    {
      "name": "caret-up",
      "unicode": "\ue99a"
    },
    {
      "name": "reload",
      "unicode": "\ue79b"
    },
    {
      "name": "down-circle-fill",
      "unicode": "\ue89b"
    },
    {
      "name": "caret-right",
      "unicode": "\ue99b"
    },
    {
      "name": "reload time",
      "unicode": "\ue79c"
    },
    {
      "name": "minus-circle-fill",
      "unicode": "\ue89c"
    },
    {
      "name": "caret-left",
      "unicode": "\ue99c"
    },
    {
      "name": "message",
      "unicode": "\ue79d"
    },
    {
      "name": "close-circle-fill",
      "unicode": "\ue89d"
    },
    {
      "name": "fast-backward",
      "unicode": "\ue99d"
    },
    {
      "name": "dashboard",
      "unicode": "\ue79e"
    },
    {
      "name": "info-circle-fill",
      "unicode": "\ue89e"
    },
    {
      "name": "forward",
      "unicode": "\ue99e"
    },
    {
      "name": "issues close",
      "unicode": "\ue79f"
    },
    {
      "name": "up-circle-fill",
      "unicode": "\ue89f"
    },
    {
      "name": "fast-forward",
      "unicode": "\ue99f"
    },
    {
      "name": "poweroff",
      "unicode": "\ue7a0"
    },
    {
      "name": "right-circle-fill",
      "unicode": "\ue8a0"
    },
    {
      "name": "search",
      "unicode": "\ue9a0"
    },
    {
      "name": "logout",
      "unicode": "\ue7a1"
    },
    {
      "name": "plus-circle-fill",
      "unicode": "\ue8a1"
    },
    {
      "name": "retweet",
      "unicode": "\ue9a1"
    },
    {
      "name": "pie chart",
      "unicode": "\ue7a2"
    },
    {
      "name": "question-circle-fill",
      "unicode": "\ue8a2"
    },
    {
      "name": "login",
      "unicode": "\ue9a2"
    },
    {
      "name": "setting",
      "unicode": "\ue7a3"
    },
    {
      "name": "EURO-circle-fill",
      "unicode": "\ue8a3"
    },
    {
      "name": "step-backward",
      "unicode": "\ue9a3"
    },
    {
      "name": "eye",
      "unicode": "\ue7a4"
    },
    {
      "name": "frown-fill",
      "unicode": "\ue8a4"
    },
    {
      "name": "step-forward",
      "unicode": "\ue9a4"
    },
    {
      "name": "location",
      "unicode": "\ue7a5"
    },
    {
      "name": "copyright-circle-fil",
      "unicode": "\ue8a5"
    },
    {
      "name": "swap-right",
      "unicode": "\ue9a5"
    },
    {
      "name": "edit-square",
      "unicode": "\ue7a6"
    },
    {
      "name": "CI-circle-fill",
      "unicode": "\ue8a6"
    },
    {
      "name": "swap-left",
      "unicode": "\ue9a6"
    },
    {
      "name": "export",
      "unicode": "\ue7a7"
    },
    {
      "name": "compass-fill",
      "unicode": "\ue8a7"
    },
    {
      "name": "woman",
      "unicode": "\ue9a7"
    },
    {
      "name": "save",
      "unicode": "\ue7a8"
    },
    {
      "name": "Dollar-circle-fill",
      "unicode": "\ue8a8"
    },
    {
      "name": "plus",
      "unicode": "\ue9a8"
    },
    {
      "name": "Import",
      "unicode": "\ue7a9"
    },
    {
      "name": "poweroff-circle-fill",
      "unicode": "\ue8a9"
    },
    {
      "name": "eye close-fill",
      "unicode": "\ue9a9"
    },
    {
      "name": "app store",
      "unicode": "\ue7aa"
    },
    {
      "name": "meh-fill",
      "unicode": "\ue8aa"
    },
    {
      "name": "eye-close",
      "unicode": "\ue9aa"
    },
    {
      "name": "close-square",
      "unicode": "\ue7ab"
    },
    {
      "name": "play-circle-fill",
      "unicode": "\ue8ab"
    },
    {
      "name": "clear",
      "unicode": "\ue9ab"
    },
    {
      "name": "down-square",
      "unicode": "\ue7ac"
    },
    {
      "name": "Pound-circle-fill",
      "unicode": "\ue8ac"
    },
    {
      "name": "collapse",
      "unicode": "\ue9ac"
    },
    {
      "name": "layout",
      "unicode": "\ue7ad"
    },
    {
      "name": "smile-fill",
      "unicode": "\ue8ad"
    },
    {
      "name": "expand",
      "unicode": "\ue9ad"
    },
    {
      "name": "left-square",
      "unicode": "\ue7ae"
    },
    {
      "name": "stop-fill",
      "unicode": "\ue8ae"
    },
    {
      "name": "delete column",
      "unicode": "\ue9ae"
    },
    {
      "name": "play-square",
      "unicode": "\ue7af"
    },
    {
      "name": "warning-circle-fill",
      "unicode": "\ue8af"
    },
    {
      "name": "merge-cells",
      "unicode": "\ue9af"
    },
    {
      "name": "control",
      "unicode": "\ue7b0"
    },
    {
      "name": "time-circle-fill",
      "unicode": "\ue8b0"
    },
    {
      "name": "subnode",
      "unicode": "\ue9b0"
    },
    {
      "name": "code library",
      "unicode": "\ue7b1"
    },
    {
      "name": "trademark-circle-fil",
      "unicode": "\ue8b1"
    },
    {
      "name": "rotate-left",
      "unicode": "\ue9b1"
    },
    {
      "name": "detail",
      "unicode": "\ue7b2"
    },
    {
      "name": "YUAN-circle-fill",
      "unicode": "\ue8b2"
    },
    {
      "name": "rotate-right",
      "unicode": "\ue9b2"
    },
    {
      "name": "minus-square",
      "unicode": "\ue7b3"
    },
    {
      "name": "heart-fill",
      "unicode": "\ue8b3"
    },
    {
      "name": "insert row below",
      "unicode": "\ue9b3"
    },
    {
      "name": "plus-square",
      "unicode": "\ue7b4"
    },
    {
      "name": "pie chart-circle-fil",
      "unicode": "\ue8b4"
    },
    {
      "name": "insert row above",
      "unicode": "\ue9b4"
    },
    {
      "name": "right-square",
      "unicode": "\ue7b5"
    },
    {
      "name": "dashboard-fill",
      "unicode": "\ue8b5"
    },
    {
      "name": "table",
      "unicode": "\ue9b5"
    },
    {
      "name": "project",
      "unicode": "\ue7b6"
    },
    {
      "name": "message-fill",
      "unicode": "\ue8b6"
    },
    {
      "name": "solit-cells",
      "unicode": "\ue9b6"
    },
    {
      "name": "wallet",
      "unicode": "\ue7b7"
    },
    {
      "name": "check-square-fill",
      "unicode": "\ue8b7"
    },
    {
      "name": "format painter",
      "unicode": "\ue9b7"
    },
    {
      "name": "up-square",
      "unicode": "\ue7b8"
    },
    {
      "name": "down-square-fill",
      "unicode": "\ue8b8"
    },
    {
      "name": "insert row right",
      "unicode": "\ue9b8"
    },
    {
      "name": "calculator",
      "unicode": "\ue7b9"
    },
    {
      "name": "minus-square-fill",
      "unicode": "\ue8b9"
    },
    {
      "name": "format painter-fill",
      "unicode": "\ue9b9"
    },
    {
      "name": "interation",
      "unicode": "\ue7ba"
    },
    {
      "name": "close-square-fill",
      "unicode": "\ue8ba"
    },
    {
      "name": "insert row left",
      "unicode": "\ue9ba"
    },
    {
      "name": "check-square",
      "unicode": "\ue7bb"
    },
    {
      "name": "code library-fill",
      "unicode": "\ue8bb"
    },
    {
      "name": "translate",
      "unicode": "\ue9bb"
    },
    {
      "name": "border",
      "unicode": "\ue7bc"
    },
    {
      "name": "left-square-fill",
      "unicode": "\ue8bc"
    },
    {
      "name": "delete row",
      "unicode": "\ue9bc"
    },
    {
      "name": "border-outer",
      "unicode": "\ue7bd"
    },
    {
      "name": "play-square-fill",
      "unicode": "\ue8bd"
    },
    {
      "name": "sisternode",
      "unicode": "\ue9bd"
    },
    {
      "name": "border-top",
      "unicode": "\ue7be"
    },
    {
      "name": "up-square-fill",
      "unicode": "\ue8be"
    },
    {
      "name": "Field-number",
      "unicode": "\ue9be"
    },
    {
      "name": "border-bottom",
      "unicode": "\ue7bf"
    },
    {
      "name": "right-square-fill",
      "unicode": "\ue8bf"
    },
    {
      "name": "Field-String",
      "unicode": "\ue9bf"
    },
    {
      "name": "border-left",
      "unicode": "\ue7c0"
    },
    {
      "name": "plus-square-fill",
      "unicode": "\ue8c0"
    },
    {
      "name": "Function",
      "unicode": "\ue9c0"
    },
    {
      "name": "border-right",
      "unicode": "\ue7c1"
    },
    {
      "name": "account book-fill",
      "unicode": "\ue8c1"
    },
    {
      "name": "Field-time",
      "unicode": "\ue9c1"
    },
    {
      "name": "border-inner",
      "unicode": "\ue7c2"
    },
    {
      "name": "carry out-fill",
      "unicode": "\ue8c2"
    },
    {
      "name": "GIF",
      "unicode": "\ue9c2"
    },
    {
      "name": "border-verticle",
      "unicode": "\ue7c3"
    },
    {
      "name": "calendar-fill",
      "unicode": "\ue8c3"
    },
    {
      "name": "Partition",
      "unicode": "\ue9c3"
    },
    {
      "name": "border-horizontal",
      "unicode": "\ue7c4"
    },
    {
      "name": "calculator-fill",
      "unicode": "\ue8c4"
    },
    {
      "name": "index",
      "unicode": "\ue9c4"
    },
    {
      "name": "radius-bottomleft",
      "unicode": "\ue7c5"
    },
    {
      "name": "interation-fill",
      "unicode": "\ue8c5"
    },
    {
      "name": "Stored procedure",
      "unicode": "\ue9c5"
    },
    {
      "name": "radius-bottomright",
      "unicode": "\ue7c6"
    },
    {
      "name": "project-fill",
      "unicode": "\ue8c6"
    },
    {
      "name": "Field-Binary",
      "unicode": "\ue9c6"
    },
    {
      "name": "radius-upleft",
      "unicode": "\ue7c7"
    },
    {
      "name": "detail-fill",
      "unicode": "\ue8c7"
    },
    {
      "name": "Console-SQL",
      "unicode": "\ue9c7"
    },
    {
      "name": "radius-upright",
      "unicode": "\ue7c8"
    },
    {
      "name": "save-fill",
      "unicode": "\ue8c8"
    },
    {
      "name": "1:1",
      "unicode": "\ue9c8"
    },
    {
      "name": "radius-setting",
      "unicode": "\ue7c9"
    },
    {
      "name": "wallet-fill",
      "unicode": "\ue8c9"
    },
    {
      "name": "aim",
      "unicode": "\ue9c9"
    },
    {
      "name": "add user",
      "unicode": "\ue7ca"
    },
    {
      "name": "control-fill",
      "unicode": "\ue8ca"
    },
    {
      "name": "compress",
      "unicode": "\ue9ca"
    },
    {
      "name": "delete team",
      "unicode": "\ue7cb"
    },
    {
      "name": "layout-fill",
      "unicode": "\ue8cb"
    },
    {
      "name": "expend",
      "unicode": "\ue9cb"
    },
    {
      "name": "delete user",
      "unicode": "\ue7cc"
    },
    {
      "name": "app store-fill",
      "unicode": "\ue8cc"
    },
    {
      "name": "folder-view",
      "unicode": "\ue9cc"
    },
    {
      "name": "addteam",
      "unicode": "\ue7cd"
    },
    {
      "name": "mobile-fill",
      "unicode": "\ue8cd"
    },
    {
      "name": "file-GIF",
      "unicode": "\ue9cd"
    },
    {
      "name": "user",
      "unicode": "\ue7ce"
    },
    {
      "name": "tablet-fill",
      "unicode": "\ue8ce"
    },
    {
      "name": "group",
      "unicode": "\ue9ce"
    },
    {
      "name": "team",
      "unicode": "\ue7cf"
    },
    {
      "name": "book-fill",
      "unicode": "\ue8cf"
    },
    {
      "name": "send",
      "unicode": "\ue9cf"
    },
    {
      "name": "area chart",
      "unicode": "\ue7d0"
    },
    {
      "name": "red envelope-fill",
      "unicode": "\ue8d0"
    },
    {
      "name": "Report",
      "unicode": "\ue9d0"
    },
    {
      "name": "line chart",
      "unicode": "\ue7d1"
    },
    {
      "name": "safety certificate-f",
      "unicode": "\ue8d1"
    },
    {
      "name": "View",
      "unicode": "\ue9d1"
    },
    {
      "name": "bar chart",
      "unicode": "\ue7d2"
    },
    {
      "name": "property safety-fill",
      "unicode": "\ue8d2"
    },
    {
      "name": "shortcut",
      "unicode": "\ue9d2"
    },
    {
      "name": "point map",
      "unicode": "\ue7d3"
    },
    {
      "name": "insurance-fill",
      "unicode": "\ue8d3"
    },
    {
      "name": "ungroup",
      "unicode": "\ue9d3"
    },
    {
      "name": "container",
      "unicode": "\ue7d4"
    },
    {
      "name": "security scan-fill",
      "unicode": "\ue8d4"
    },
    {
      "name": "database",
      "unicode": "\ue7d5"
    },
    {
      "name": "file-exclamation-fil",
      "unicode": "\ue8d5"
    },
    {
      "name": "sever",
      "unicode": "\ue7d6"
    },
    {
      "name": "file-add-fill",
      "unicode": "\ue8d6"
    },
    {
      "name": "mobile",
      "unicode": "\ue7d7"
    },
    {
      "name": "file-fill",
      "unicode": "\ue8d7"
    },
    {
      "name": "tablet",
      "unicode": "\ue7d8"
    },
    {
      "name": "file-excel-fill",
      "unicode": "\ue8d8"
    },
    {
      "name": "red envelope",
      "unicode": "\ue7d9"
    },
    {
      "name": "file-markdown-fill",
      "unicode": "\ue8d9"
    },
    {
      "name": "book",
      "unicode": "\ue7da"
    },
    {
      "name": "file-text-fill",
      "unicode": "\ue8da"
    },
    {
      "name": "file done",
      "unicode": "\ue7db"
    },
    {
      "name": "file-ppt-fill",
      "unicode": "\ue8db"
    },
    {
      "name": "reconciliation",
      "unicode": "\ue7dc"
    },
    {
      "name": "file-unknown-fill",
      "unicode": "\ue8dc"
    },
    {
      "name": "file -exception",
      "unicode": "\ue7dd"
    },
    {
      "name": "file-word-fill",
      "unicode": "\ue8dd"
    },
    {
      "name": "file sync",
      "unicode": "\ue7de"
    },
    {
      "name": "file-zip-fill",
      "unicode": "\ue8de"
    },
    {
      "name": "file search",
      "unicode": "\ue7df"
    },
    {
      "name": "file-pdf-fill",
      "unicode": "\ue8df"
    },
    {
      "name": "solution",
      "unicode": "\ue7e0"
    },
    {
      "name": "file-image-fill",
      "unicode": "\ue8e0"
    },
    {
      "name": "file protect",
      "unicode": "\ue7e1"
    },
    {
      "name": "diff-fill",
      "unicode": "\ue8e1"
    },
    {
      "name": "file-add",
      "unicode": "\ue7e2"
    },
    {
      "name": "file-copy-fill",
      "unicode": "\ue8e2"
    },
    {
      "name": "file-excel",
      "unicode": "\ue7e3"
    },
    {
      "name": "snippets-fill",
      "unicode": "\ue8e3"
    },
    {
      "name": "file-exclamation",
      "unicode": "\ue7e4"
    },
    {
      "name": "batch folding-fill",
      "unicode": "\ue8e4"
    },
    {
      "name": "file-pdf",
      "unicode": "\ue7e5"
    },
    {
      "name": "reconciliation-fill",
      "unicode": "\ue8e5"
    },
    {
      "name": "file-image",
      "unicode": "\ue7e6"
    },
    {
      "name": "folder-add-fill",
      "unicode": "\ue8e6"
    },
    {
      "name": "file-markdown",
      "unicode": "\ue7e7"
    },
    {
      "name": "folder-fill",
      "unicode": "\ue8e7"
    },
    {
      "name": "file-unknown",
      "unicode": "\ue7e8"
    },
    {
      "name": "folder-open-fill",
      "unicode": "\ue8e8"
    },
    {
      "name": "file-ppt",
      "unicode": "\ue7e9"
    },
    {
      "name": "database-fill",
      "unicode": "\ue8e9"
    },
    {
      "name": "file-word",
      "unicode": "\ue7ea"
    },
    {
      "name": "container-fill",
      "unicode": "\ue8ea"
    },
    {
      "name": "file",
      "unicode": "\ue7eb"
    },
    {
      "name": "sever-fill",
      "unicode": "\ue8eb"
    },
    {
      "name": "file-zip",
      "unicode": "\ue7ec"
    },
    {
      "name": "calendar-check-fill",
      "unicode": "\ue8ec"
    },
    {
      "name": "file-text",
      "unicode": "\ue7ed"
    },
    {
      "name": "image-fill",
      "unicode": "\ue8ed"
    },
    {
      "name": "file-copy",
      "unicode": "\ue7ee"
    },
    {
      "name": "id card-fill",
      "unicode": "\ue8ee"
    },
    {
      "name": "snippets",
      "unicode": "\ue7ef"
    },
    {
      "name": "credit card-fill",
      "unicode": "\ue8ef"
    },
    {
      "name": "audit",
      "unicode": "\ue7f0"
    },
    {
      "name": "fund-fill",
      "unicode": "\ue8f0"
    },
    {
      "name": "diff",
      "unicode": "\ue7f1"
    },
    {
      "name": "read-fill",
      "unicode": "\ue8f1"
    },
    {
      "name": "Batch folding",
      "unicode": "\ue7f2"
    },
    {
      "name": "contacts-fill",
      "unicode": "\ue8f2"
    },
    {
      "name": "security scan",
      "unicode": "\ue7f3"
    },
    {
      "name": "delete-fill",
      "unicode": "\ue8f3"
    },
    {
      "name": "property safety",
      "unicode": "\ue7f4"
    },
    {
      "name": "notification-fill",
      "unicode": "\ue8f4"
    },
    {
      "name": "safety certificate",
      "unicode": "\ue7f5"
    },
    {
      "name": "flag-fill",
      "unicode": "\ue8f5"
    },
    {
      "name": "insurance ",
      "unicode": "\ue7f6"
    },
    {
      "name": "money collect-fill",
      "unicode": "\ue8f6"
    },
    {
      "name": "alert",
      "unicode": "\ue7f7"
    },
    {
      "name": "medicine box-fill",
      "unicode": "\ue8f7"
    },
    {
      "name": "delete",
      "unicode": "\ue7f8"
    },
    {
      "name": "rest-fill",
      "unicode": "\ue8f8"
    },
    {
      "name": "hourglass",
      "unicode": "\ue7f9"
    },
    {
      "name": "shopping-fill",
      "unicode": "\ue8f9"
    },
    {
      "name": "bulb",
      "unicode": "\ue7fa"
    },
    {
      "name": "skin-fill",
      "unicode": "\ue8fa"
    },
    {
      "name": "experiment",
      "unicode": "\ue7fb"
    },
    {
      "name": "video-fill",
      "unicode": "\ue8fb"
    },
    {
      "name": "bell",
      "unicode": "\ue7fc"
    },
    {
      "name": "sound-fill",
      "unicode": "\ue8fc"
    },
    {
      "name": "trophy",
      "unicode": "\ue7fd"
    },
    {
      "name": "bulb-fill",
      "unicode": "\ue8fd"
    },
    {
      "name": "rest",
      "unicode": "\ue7fe"
    },
    {
      "name": "bell-fill",
      "unicode": "\ue8fe"
    },
    {
      "name": "USB",
      "unicode": "\ue7ff"
    },
    {
      "name": "filter-fill",
      "unicode": "\ue8ff"
    },
    {
      "name": "skin",
      "unicode": "\ue800"
    },
    {
      "name": "fire-fill",
      "unicode": "\ue900"
    },
    {
      "name": "home",
      "unicode": "\ue801"
    },
    {
      "name": "funnel plot-fill",
      "unicode": "\ue901"
    },
    {
      "name": "bank",
      "unicode": "\ue802"
    },
    {
      "name": "gift-fill",
      "unicode": "\ue902"
    },
    {
      "name": "filter",
      "unicode": "\ue803"
    },
    {
      "name": "hourglass-fill",
      "unicode": "\ue903"
    },
    {
      "name": "funnel plot",
      "unicode": "\ue804"
    },
    {
      "name": "home-fill",
      "unicode": "\ue904"
    },
    {
      "name": "like",
      "unicode": "\ue805"
    },
    {
      "name": "trophy-fill",
      "unicode": "\ue905"
    },
    {
      "name": "unlike",
      "unicode": "\ue806"
    },
    {
      "name": "location-fill",
      "unicode": "\ue906"
    },
    {
      "name": "unlock",
      "unicode": "\ue807"
    },
    {
      "name": "cloud-fill",
      "unicode": "\ue907"
    },
    {
      "name": "lock",
      "unicode": "\ue808"
    },
    {
      "name": "customerservice-fill",
      "unicode": "\ue908"
    },
    {
      "name": "customerservice",
      "unicode": "\ue809"
    },
    {
      "name": "experiment-fill",
      "unicode": "\ue909"
    },
    {
      "name": "flag",
      "unicode": "\ue80a"
    },
    {
      "name": "eye-fill",
      "unicode": "\ue90a"
    },
    {
      "name": "money collect",
      "unicode": "\ue80b"
    },
    {
      "name": "like-fill",
      "unicode": "\ue90b"
    },
    {
      "name": "medicinebox",
      "unicode": "\ue80c"
    },
    {
      "name": "lock-fill",
      "unicode": "\ue90c"
    },
    {
      "name": "shop",
      "unicode": "\ue80d"
    },
    {
      "name": "unlike-fill",
      "unicode": "\ue90d"
    },
    {
      "name": "rocket",
      "unicode": "\ue80e"
    },
    {
      "name": "star-fill",
      "unicode": "\ue90e"
    },
    {
      "name": "shopping",
      "unicode": "\ue80f"
    },
    {
      "name": "unlock-fill",
      "unicode": "\ue90f"
    },
    {
      "name": "folder",
      "unicode": "\ue810"
    },
    {
      "name": "alert-fill",
      "unicode": "\ue910"
    },
    {
      "name": "folder-open",
      "unicode": "\ue811"
    },
    {
      "name": "api-fill",
      "unicode": "\ue911"
    },
    {
      "name": "folder-add",
      "unicode": "\ue812"
    },
    {
      "name": "highlight-fill",
      "unicode": "\ue912"
    },
    {
      "name": "deployment unit",
      "unicode": "\ue813"
    },
    {
      "name": "phone-fill",
      "unicode": "\ue913"
    },
    {
      "name": "account book",
      "unicode": "\ue814"
    },
    {
      "name": "edit-fill",
      "unicode": "\ue914"
    },
    {
      "name": "contacts",
      "unicode": "\ue815"
    },
    {
      "name": "pushpin-fill",
      "unicode": "\ue915"
    },
    {
      "name": "carry out",
      "unicode": "\ue816"
    },
    {
      "name": "rocket-fill",
      "unicode": "\ue916"
    },
    {
      "name": "calendar-check",
      "unicode": "\ue817"
    },
    {
      "name": "thunderbolt-fill",
      "unicode": "\ue917"
    },
    {
      "name": "calendar",
      "unicode": "\ue818"
    },
    {
      "name": "tag-fill",
      "unicode": "\ue918"
    },
    {
      "name": "scan",
      "unicode": "\ue819"
    },
    {
      "name": "wrench-fill",
      "unicode": "\ue919"
    },
    {
      "name": "select",
      "unicode": "\ue81a"
    },
    {
      "name": "tags-fill",
      "unicode": "\ue91a"
    },
    {
      "name": "box plot",
      "unicode": "\ue81b"
    },
    {
      "name": "bank-fill",
      "unicode": "\ue91b"
    },
    {
      "name": "build",
      "unicode": "\ue81c"
    },
    {
      "name": "camera-fill",
      "unicode": "\ue91c"
    },
    {
      "name": "sliders",
      "unicode": "\ue81d"
    },
    {
      "name": "error-fill",
      "unicode": "\ue91d"
    },
    {
      "name": "laptop",
      "unicode": "\ue81e"
    },
    {
      "name": "crown-fill",
      "unicode": "\ue91e"
    },
    {
      "name": "barcode",
      "unicode": "\ue81f"
    },
    {
      "name": "mail-fill",
      "unicode": "\ue91f"
    },
    {
      "name": "camera",
      "unicode": "\ue820"
    },
    {
      "name": "car-fill",
      "unicode": "\ue920"
    },
    {
      "name": "cluster",
      "unicode": "\ue821"
    },
    {
      "name": "printer-fill",
      "unicode": "\ue921"
    },
    {
      "name": "gateway",
      "unicode": "\ue822"
    },
    {
      "name": "shop-fill",
      "unicode": "\ue922"
    },
    {
      "name": "car",
      "unicode": "\ue823"
    },
    {
      "name": "setting-fill",
      "unicode": "\ue923"
    },
    {
      "name": "printer",
      "unicode": "\ue824"
    },
    {
      "name": "USB-fill",
      "unicode": "\ue924"
    },
    {
      "name": "read",
      "unicode": "\ue825"
    },
    {
      "name": "golden-fill",
      "unicode": "\ue925"
    },
    {
      "name": "cloud-server",
      "unicode": "\ue826"
    },
    {
      "name": "build-fill",
      "unicode": "\ue926"
    },
    {
      "name": "cloud-upload",
      "unicode": "\ue827"
    },
    {
      "name": "box plot-fill",
      "unicode": "\ue927"
    },
    {
      "name": "cloud",
      "unicode": "\ue828"
    },
    {
      "name": "sliders-fill",
      "unicode": "\ue928"
    },
    {
      "name": "cloud-download",
      "unicode": "\ue829"
    },
    {
      "name": "alibaba",
      "unicode": "\ue929"
    },
    {
      "name": "cloud-sync",
      "unicode": "\ue82a"
    },
    {
      "name": "ant design",
      "unicode": "\ue92a"
    },
    {
      "name": "video",
      "unicode": "\ue82b"
    },
    {
      "name": "ant-cloud",
      "unicode": "\ue92b"
    },
    {
      "name": "notification",
      "unicode": "\ue82c"
    },
    {
      "name": "behance",
      "unicode": "\ue92c"
    },
    {
      "name": "sound",
      "unicode": "\ue82d"
    },
    {
      "name": "google plus",
      "unicode": "\ue92d"
    },
    {
      "name": "radar chart",
      "unicode": "\ue82e"
    },
    {
      "name": "medium",
      "unicode": "\ue92e"
    },
    {
      "name": "qrcode",
      "unicode": "\ue82f"
    },
    {
      "name": "google",
      "unicode": "\ue92f"
    },
    {
      "name": "fund",
      "unicode": "\ue830"
    },
    {
      "name": "IE",
      "unicode": "\ue930"
    },
    {
      "name": "image",
      "unicode": "\ue831"
    },
    {
      "name": "amazon",
      "unicode": "\ue931"
    },
    {
      "name": "mail",
      "unicode": "\ue832"
    },
    {
      "name": "slack",
      "unicode": "\ue932"
    },
    {
      "name": "table",
      "unicode": "\ue833"
    },
    {
      "name": "alipay",
      "unicode": "\ue933"
    },
    {
      "name": "id card",
      "unicode": "\ue834"
    },
    {
      "name": "taobao",
      "unicode": "\ue934"
    },
    {
      "name": "credit card",
      "unicode": "\ue835"
    },
    {
      "name": "zhihu",
      "unicode": "\ue935"
    },
    {
      "name": "heart",
      "unicode": "\ue836"
    },
    {
      "name": "HTML5",
      "unicode": "\ue936"
    },
    {
      "name": "block",
      "unicode": "\ue837"
    },
    {
      "name": "linkedin",
      "unicode": "\ue937"
    },
    {
      "name": "error",
      "unicode": "\ue838"
    },
    {
      "name": "yahoo",
      "unicode": "\ue938"
    },
    {
      "name": "star",
      "unicode": "\ue839"
    },
    {
      "name": "facebook",
      "unicode": "\ue939"
    },
    {
      "name": "gold",
      "unicode": "\ue83a"
    },
    {
      "name": "skype",
      "unicode": "\ue93a"
    },
    {
      "name": "heat map",
      "unicode": "\ue83b"
    },
    {
      "name": "CodeSandbox",
      "unicode": "\ue93b"
    },
    {
      "name": "wifi",
      "unicode": "\ue83c"
    },
    {
      "name": "chrome",
      "unicode": "\ue93c"
    },
    {
      "name": "attachment",
      "unicode": "\ue83d"
    },
    {
      "name": "codepen",
      "unicode": "\ue93d"
    },
    {
      "name": "edit",
      "unicode": "\ue83e"
    },
    {
      "name": "aliwangwang",
      "unicode": "\ue93e"
    },
    {
      "name": "key",
      "unicode": "\ue83f"
    },
    {
      "name": "apple",
      "unicode": "\ue93f"
    },
    {
      "name": "api",
      "unicode": "\ue840"
    },
    {
      "name": "android",
      "unicode": "\ue940"
    },
    {
      "name": "disconnect",
      "unicode": "\ue841"
    },
    {
      "name": "sketch",
      "unicode": "\ue941"
    },
    {
      "name": "highlight",
      "unicode": "\ue842"
    },
    {
      "name": "Gitlab",
      "unicode": "\ue942"
    },
    {
      "name": "monitor",
      "unicode": "\ue843"
    },
    {
      "name": "dribbble",
      "unicode": "\ue943"
    },
    {
      "name": "link",
      "unicode": "\ue844"
    },
    {
      "name": "instagram",
      "unicode": "\ue944"
    },
    {
      "name": "man",
      "unicode": "\ue845"
    },
    {
      "name": "reddit",
      "unicode": "\ue945"
    },
    {
      "name": "percentage",
      "unicode": "\ue846"
    },
    {
      "name": "windows",
      "unicode": "\ue946"
    },
    {
      "name": "pushpin",
      "unicode": "\ue847"
    },
    {
      "name": "yuque",
      "unicode": "\ue947"
    },
    {
      "name": "phone",
      "unicode": "\ue848"
    },
    {
      "name": "Youtube",
      "unicode": "\ue948"
    },
    {
      "name": "shake",
      "unicode": "\ue849"
    },
    {
      "name": "Gitlab-fill",
      "unicode": "\ue949"
    },
    {
      "name": "tag",
      "unicode": "\ue84a"
    },
    {
      "name": "dropbox",
      "unicode": "\ue94a"
    },
    {
      "name": "wrench",
      "unicode": "\ue84b"
    },
    {
      "name": "dingtalk",
      "unicode": "\ue94b"
    },
    {
      "name": "tags",
      "unicode": "\ue84c"
    },
    {
      "name": "android-fill",
      "unicode": "\ue94c"
    },
    {
      "name": "scissor",
      "unicode": "\ue84d"
    },
    {
      "name": "apple-fill",
      "unicode": "\ue94d"
    },
    {
      "name": "mr",
      "unicode": "\ue84e"
    },
    {
      "name": "HTML5-fill",
      "unicode": "\ue94e"
    },
    {
      "name": "share",
      "unicode": "\ue84f"
    },
    {
      "name": "windows-fill",
      "unicode": "\ue94f"
    },
    {
      "name": "branches",
      "unicode": "\ue850"
    },
    {
      "name": "QQ",
      "unicode": "\ue950"
    },
    {
      "name": "fork",
      "unicode": "\ue851"
    },
    {
      "name": "twitter",
      "unicode": "\ue951"
    },
    {
      "name": "shrink",
      "unicode": "\ue852"
    },
    {
      "name": "skype-fill",
      "unicode": "\ue952"
    },
    {
      "name": "arrawsalt",
      "unicode": "\ue853"
    },
    {
      "name": "weibo",
      "unicode": "\ue953"
    },
    {
      "name": "vertical right",
      "unicode": "\ue854"
    },
    {
      "name": "yuque-fill",
      "unicode": "\ue954"
    },
    {
      "name": "vertical left",
      "unicode": "\ue855"
    },
    {
      "name": "Youtube-fill",
      "unicode": "\ue955"
    },
    {
      "name": "right",
      "unicode": "\ue856"
    },
    {
      "name": "yahoo-fill",
      "unicode": "\ue956"
    },
    {
      "name": "left",
      "unicode": "\ue857"
    },
    {
      "name": "wechat-fill",
      "unicode": "\ue957"
    },
    {
      "name": "up",
      "unicode": "\ue858"
    },
    {
      "name": "chrome-fill",
      "unicode": "\ue958"
    },
    {
      "name": "down",
      "unicode": "\ue859"
    },
    {
      "name": "alipay-circle-fill",
      "unicode": "\ue959"
    },
    {
      "name": "fullscreen",
      "unicode": "\ue85a"
    },
    {
      "name": "aliwangwang-fill",
      "unicode": "\ue95a"
    },
    {
      "name": "fullscreen-exit",
      "unicode": "\ue85b"
    },
    {
      "name": "behance-circle-fill",
      "unicode": "\ue95b"
    },
    {
      "name": "doubleleft",
      "unicode": "\ue85c"
    },
    {
      "name": "amazon-circle-fill",
      "unicode": "\ue95c"
    },
    {
      "name": "double right",
      "unicode": "\ue85d"
    },
    {
      "name": "codepen-circle-fill",
      "unicode": "\ue95d"
    },
    {
      "name": "arrowright",
      "unicode": "\ue85e"
    },
    {
      "name": "CodeSandbox-circle-f",
      "unicode": "\ue95e"
    },
    {
      "name": "arrowup",
      "unicode": "\ue85f"
    },
    {
      "name": "dropbox-circle-fill",
      "unicode": "\ue95f"
    },
    {
      "name": "arrowleft",
      "unicode": "\ue860"
    },
    {
      "name": "github-fill",
      "unicode": "\ue960"
    },
    {
      "name": "arrowdown",
      "unicode": "\ue861"
    },
    {
      "name": "dribbble-circle-fill",
      "unicode": "\ue961"
    },
    {
      "name": "upload",
      "unicode": "\ue862"
    },
    {
      "name": "google plus-circle-f",
      "unicode": "\ue962"
    },
    {
      "name": "colum-height",
      "unicode": "\ue863"
    },
    {
      "name": "medium-circle-fill",
      "unicode": "\ue963"
    },
    {
      "name": "vertical-align-botto",
      "unicode": "\ue864"
    },
    {
      "name": "QQ-circle-fill",
      "unicode": "\ue964"
    },
    {
      "name": "vertical-align-middl",
      "unicode": "\ue865"
    },
    {
      "name": "IE-circle-fill",
      "unicode": "\ue965"
    },
    {
      "name": "totop",
      "unicode": "\ue866"
    },
    {
      "name": "google-circle-fill",
      "unicode": "\ue966"
    },
    {
      "name": "vertical-align-top",
      "unicode": "\ue867"
    },
    {
      "name": "dingtalk-circle-fill",
      "unicode": "\ue967"
    },
    {
      "name": "download",
      "unicode": "\ue868"
    },
    {
      "name": "sketch-circle-fill",
      "unicode": "\ue968"
    },
    {
      "name": "sort-descending",
      "unicode": "\ue869"
    },
    {
      "name": "slack-circle-fill",
      "unicode": "\ue969"
    },
    {
      "name": "sort-ascending",
      "unicode": "\ue86a"
    },
    {
      "name": "twitter-circle-fill",
      "unicode": "\ue96a"
    },
    {
      "name": "fall",
      "unicode": "\ue86b"
    },
    {
      "name": "taobao-circle-fill",
      "unicode": "\ue96b"
    },
    {
      "name": "swap",
      "unicode": "\ue86c"
    },
    {
      "name": "weibo-circle-fill",
      "unicode": "\ue96c"
    },
    {
      "name": "stock",
      "unicode": "\ue86d"
    },
    {
      "name": "zhihu-circle-fill",
      "unicode": "\ue96d"
    },
    {
      "name": "rise",
      "unicode": "\ue86e"
    },
    {
      "name": "reddit-circle-fill",
      "unicode": "\ue96e"
    },
    {
      "name": "indent",
      "unicode": "\ue86f"
    },
    {
      "name": "alipay-square-fill",
      "unicode": "\ue96f"
    },
    {
      "name": "outdent",
      "unicode": "\ue870"
    },
    {
      "name": "dingtalk-square-fill",
      "unicode": "\ue970"
    },
    {
      "name": "menu",
      "unicode": "\ue871"
    },
    {
      "name": "CodeSandbox-square-f",
      "unicode": "\ue971"
    },
    {
      "name": "unordered list",
      "unicode": "\ue872"
    },
    {
      "name": "behance-square-fill",
      "unicode": "\ue972"
    },
    {
      "name": "ordered list",
      "unicode": "\ue873"
    },
    {
      "name": "amazon-square-fill",
      "unicode": "\ue973"
    },
    {
      "name": "align-right",
      "unicode": "\ue874"
    },
    {
      "name": "codepen-square-fill",
      "unicode": "\ue974"
    },
    {
      "name": "align-center",
      "unicode": "\ue875"
    },
    {
      "name": "dribbble-square-fill",
      "unicode": "\ue975"
    },
    {
      "name": "align-left",
      "unicode": "\ue876"
    },
    {
      "name": "dropbox-square-fill",
      "unicode": "\ue976"
    },
    {
      "name": "pic-center",
      "unicode": "\ue877"
    },
    {
      "name": "facebook-fill",
      "unicode": "\ue977"
    },
    {
      "name": "pic-right",
      "unicode": "\ue878"
    },
    {
      "name": "google plus-square-f",
      "unicode": "\ue978"
    },
    {
      "name": "pic-left",
      "unicode": "\ue879"
    },
    {
      "name": "google-square-fill",
      "unicode": "\ue979"
    },
    {
      "name": "bold",
      "unicode": "\ue87a"
    },
    {
      "name": "instagram-fill",
      "unicode": "\ue97a"
    },
    {
      "name": "font-colors",
      "unicode": "\ue87b"
    },
    {
      "name": "IE-square-fill",
      "unicode": "\ue97b"
    },
    {
      "name": "exclaimination",
      "unicode": "\ue87c"
    },
    {
      "name": "medium-square-fill",
      "unicode": "\ue97c"
    },
    {
      "name": "check-circle",
      "unicode": "\ue77d"
    },
    {
      "name": "font-size",
      "unicode": "\ue87d"
    },
    {
      "name": "linkedin-fill",
      "unicode": "\ue97d"
    },
    {
      "name": "CI",
      "unicode": "\ue77e"
    },
    {
      "name": "infomation",
      "unicode": "\ue87e"
    },
    {
      "name": "QQ-square-fill",
      "unicode": "\ue97e"
    },
    {
      "name": "Dollar",
      "unicode": "\ue77f"
    },
    {
      "name": "line-height",
      "unicode": "\ue87f"
    },
    {
      "name": "reddit-square-fill",
      "unicode": "\ue97f"
    },
    {
      "name": "compass",
      "unicode": "\ue780"
    },
    {
      "name": "strikethrough",
      "unicode": "\ue880"
    },
    {
      "name": "twitter-square-fill",
      "unicode": "\ue980"
    },
    {
      "name": "close-circle",
      "unicode": "\ue781"
    },
    {
      "name": "underline",
      "unicode": "\ue881"
    },
    {
      "name": "sketch-square-fill",
      "unicode": "\ue981"
    },
    {
      "name": "frown",
      "unicode": "\ue782"
    },
    {
      "name": "number",
      "unicode": "\ue882"
    },
    {
      "name": "slack-square-fill",
      "unicode": "\ue982"
    },
    {
      "name": "info-circle",
      "unicode": "\ue783"
    },
    {
      "name": "italic",
      "unicode": "\ue883"
    },
    {
      "name": "taobao-square-fill",
      "unicode": "\ue983"
    }
  ]

  let find_icon = a_icon.find(function(item){
    return item.name == icon
  })
  
  if(find_icon) {
    return find_icon.unicode
  }else {
    return ''
  }
}
