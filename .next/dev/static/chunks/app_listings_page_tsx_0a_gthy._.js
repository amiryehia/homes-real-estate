(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/listings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const locations = [
    "All Locations",
    "Maadi",
    "New Cairo",
    "Nasr City",
    "Heliopolis",
    "Downtown Cairo",
    "6th of October",
    "Sheikh Zayed"
];
const types = [
    "All Types",
    "Office",
    "Administrative Office",
    "Corporate Office",
    "Medical Office"
];
const listings = [
    {
        id: 1,
        title: "Premium Office in Maadi",
        location: "Maadi",
        area: "Maadi Corniche",
        price: 45000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 2,
        title: "Modern Corporate Office",
        location: "New Cairo",
        area: "5th Settlement",
        price: 65000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 3,
        title: "Executive Office Space",
        location: "Heliopolis",
        area: "Korba",
        price: 38000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 4,
        title: "Luxury Administrative Office",
        location: "New Cairo",
        area: "North 90th Street",
        price: 72000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 5,
        title: "Fully Finished Office",
        location: "Maadi",
        area: "Degla",
        price: 32000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 6,
        title: "Business Center Office",
        location: "Downtown Cairo",
        area: "Tahrir",
        price: 29000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 7,
        title: "Premium Business Office",
        location: "Nasr City",
        area: "Makram Ebeid",
        price: 41000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 8,
        title: "Large Corporate Headquarters",
        location: "New Cairo",
        area: "Golden Square",
        price: 95000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 9,
        title: "Modern Office Suite",
        location: "Sheikh Zayed",
        area: "ZED Area",
        price: 55000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 10,
        title: "Professional Office Space",
        location: "6th of October",
        area: "Mall of Arabia Area",
        price: 36000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 11,
        title: "Elegant Executive Office",
        location: "Maadi",
        area: "Maadi Gardens",
        price: 47000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 12,
        title: "Prime Administrative Office",
        location: "New Cairo",
        area: "Business District",
        price: 68000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 13,
        title: "Medical Office Suite",
        location: "New Cairo",
        area: "Medical Park",
        price: 52000,
        type: "Medical Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 14,
        title: "High-End Office",
        location: "Heliopolis",
        area: "El Merghany",
        price: 43000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 15,
        title: "Modern Business Office",
        location: "Nasr City",
        area: "Abbas El Akkad",
        price: 35000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 16,
        title: "Premium Office Floor",
        location: "New Cairo",
        area: "Downtown Katameya",
        price: 88000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 17,
        title: "Furnished Executive Office",
        location: "Maadi",
        area: "Zahraa Maadi",
        price: 30000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 18,
        title: "Contemporary Office",
        location: "Sheikh Zayed",
        area: "Beverly Hills",
        price: 62000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 19,
        title: "Corporate Office Suite",
        location: "6th of October",
        area: "Smart Village",
        price: 74000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 20,
        title: "Premium Medical Office",
        location: "New Cairo",
        area: "Medical District",
        price: 59000,
        type: "Medical Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 21,
        title: "Executive Business Center",
        location: "Downtown Cairo",
        area: "Garden City",
        price: 44000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 22,
        title: "Luxury Office Suite",
        location: "Maadi",
        area: "New Maadi",
        price: 51000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 23,
        title: "Prime Office Location",
        location: "Heliopolis",
        area: "Roxy",
        price: 39000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 24,
        title: "Large Administrative Space",
        location: "New Cairo",
        area: "Cairo Festival Area",
        price: 79000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 25,
        title: "Modern Office Hub",
        location: "Nasr City",
        area: "City Stars Area",
        price: 33000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 26,
        title: "Premium Corporate Office",
        location: "New Cairo",
        area: "90th Street",
        price: 85000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 27,
        title: "Professional Office Suite",
        location: "Maadi",
        area: "Sarayat El Maadi",
        price: 46000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 28,
        title: "Executive Medical Office",
        location: "New Cairo",
        area: "New Cairo Medical Zone",
        price: 57000,
        type: "Medical Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 29,
        title: "Contemporary Corporate Space",
        location: "Sheikh Zayed",
        area: "Arkan Area",
        price: 69000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 30,
        title: "Premium Office Center",
        location: "6th of October",
        area: "October Gardens",
        price: 42000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 31,
        title: "Elegant Business Office",
        location: "Heliopolis",
        area: "Salah Salem",
        price: 48000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 32,
        title: "Large Corporate Office",
        location: "New Cairo",
        area: "One Ninety",
        price: 98000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 33,
        title: "Fully Equipped Office",
        location: "Maadi",
        area: "Degla Square",
        price: 37000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 34,
        title: "Modern Administrative Suite",
        location: "Nasr City",
        area: "Mostashfa El Sadr",
        price: 40000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 35,
        title: "Prime Business Office",
        location: "Downtown Cairo",
        area: "Zamalek Area",
        price: 58000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 36,
        title: "Luxury Office Floor",
        location: "New Cairo",
        area: "Financial District",
        price: 105000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 37,
        title: "Executive Office",
        location: "Sheikh Zayed",
        area: "Galleria Area",
        price: 61000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 38,
        title: "Premium Medical Suite",
        location: "Heliopolis",
        area: "Al Ahram Street",
        price: 53000,
        type: "Medical Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 39,
        title: "Professional Corporate Office",
        location: "6th of October",
        area: "Industrial Area",
        price: 49000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 40,
        title: "Modern Office Space",
        location: "Maadi",
        area: "Maadi Corniche",
        price: 34000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 41,
        title: "High-End Administrative Office",
        location: "New Cairo",
        area: "Sodic Area",
        price: 76000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 42,
        title: "Corporate Headquarters",
        location: "New Cairo",
        area: "Business Plus",
        price: 92000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 43,
        title: "Executive Office Suite",
        location: "Nasr City",
        area: "Moustafa El Nahas",
        price: 45000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 44,
        title: "Modern Medical Office",
        location: "New Cairo",
        area: "Point 90 Area",
        price: 63000,
        type: "Medical Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 45,
        title: "Premium Business Space",
        location: "Maadi",
        area: "Laselky",
        price: 39000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 46,
        title: "Luxury Corporate Office",
        location: "Sheikh Zayed",
        area: "Capital Business Park",
        price: 83000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 47,
        title: "Prime Administrative Space",
        location: "Heliopolis",
        area: "Cleopatra",
        price: 47000,
        type: "Administrative Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 48,
        title: "Large Professional Office",
        location: "6th of October",
        area: "Dreamland",
        price: 54000,
        type: "Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 49,
        title: "Executive Corporate Suite",
        location: "New Cairo",
        area: "Cairo Festival City",
        price: 89000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    },
    {
        id: 50,
        title: "HOMES Premium Headquarters",
        location: "New Cairo",
        area: "Financial District",
        price: 115000,
        type: "Corporate Office",
        image: "/images/office-main.jpg"
    }
];
function ListingsPage() {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Locations");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Types");
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120000);
    const filteredListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingsPage.useMemo[filteredListings]": ()=>{
            return listings.filter({
                "ListingsPage.useMemo[filteredListings]": (listing)=>{
                    const text = search.toLowerCase();
                    const matchesSearch = listing.title.toLowerCase().includes(text) || listing.location.toLowerCase().includes(text) || listing.area.toLowerCase().includes(text);
                    const matchesLocation = location === "All Locations" || listing.location === location;
                    const matchesType = type === "All Types" || listing.type === type;
                    const matchesPrice = listing.price <= maxPrice;
                    return matchesSearch && matchesLocation && matchesType && matchesPrice;
                }
            }["ListingsPage.useMemo[filteredListings]"]);
        }
    }["ListingsPage.useMemo[filteredListings]"], [
        search,
        location,
        type,
        maxPrice
    ]);
    function clearFilters() {
        setSearch("");
        setLocation("All Locations");
        setType("All Types");
        setMaxPrice(120000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-28e7697fddf88d64" + " " + "listings-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-28e7697fddf88d64" + " " + "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28e7697fddf88d64" + " " + "hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28e7697fddf88d64" + " " + "badge",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/listings/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this),
                                "HOMES REAL ESTATE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/listings/page.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "jsx-28e7697fddf88d64",
                            children: [
                                "Find Your",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-28e7697fddf88d64",
                                    children: "Perfect Office"
                                }, void 0, false, {
                                    fileName: "[project]/app/listings/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/listings/page.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-28e7697fddf88d64",
                            children: "Premium commercial office spaces across Cairo. Find the right workplace for your business."
                        }, void 0, false, {
                            fileName: "[project]/app/listings/page.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/listings/page.tsx",
                    lineNumber: 540,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/listings/page.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-28e7697fddf88d64" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28e7697fddf88d64" + " " + "search-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28e7697fddf88d64" + " " + "search-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search offices, locations or areas...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "jsx-28e7697fddf88d64"
                                    }, void 0, false, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28e7697fddf88d64" + " " + "filters",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-28e7697fddf88d64",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: location,
                                                onChange: (e)=>setLocation(e.target.value),
                                                className: "jsx-28e7697fddf88d64",
                                                children: locations.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: item
                                                    }, item, false, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-28e7697fddf88d64",
                                                children: "Office Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: type,
                                                onChange: (e)=>setType(e.target.value),
                                                className: "jsx-28e7697fddf88d64",
                                                children: types.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: item
                                                    }, item, false, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28e7697fddf88d64" + " " + "price",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-28e7697fddf88d64",
                                                children: [
                                                    "Maximum Monthly Rent:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: [
                                                            maxPrice.toLocaleString(),
                                                            " EGP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "20000",
                                                max: "120000",
                                                step: "5000",
                                                value: maxPrice,
                                                onChange: (e)=>setMaxPrice(Number(e.target.value)),
                                                className: "jsx-28e7697fddf88d64"
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 598,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearFilters,
                                        className: "jsx-28e7697fddf88d64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 619,
                                                columnNumber: 15
                                            }, this),
                                            "Clear"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 618,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/listings/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28e7697fddf88d64" + " " + "results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28e7697fddf88d64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: "AVAILABLE OFFICES"
                                    }, void 0, false, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: [
                                            filteredListings.length,
                                            " Commercial Office",
                                            filteredListings.length !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 626,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28e7697fddf88d64" + " " + "experience",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: "25+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 636,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-28e7697fddf88d64",
                                        children: "Years Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/listings/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    filteredListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28e7697fddf88d64" + " " + "empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                size: 50
                            }, void 0, false, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-28e7697fddf88d64",
                                children: "No offices found"
                            }, void 0, false, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-28e7697fddf88d64",
                                children: "Try changing your search or filters."
                            }, void 0, false, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearFilters,
                                className: "jsx-28e7697fddf88d64",
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 651,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/listings/page.tsx",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28e7697fddf88d64" + " " + "grid",
                        children: filteredListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "jsx-28e7697fddf88d64" + " " + "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28e7697fddf88d64" + " " + "image",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: listing.image,
                                                alt: listing.title,
                                                fill: true,
                                                sizes: "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-28e7697fddf88d64" + " " + "type",
                                                children: listing.type
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-28e7697fddf88d64" + " " + "number",
                                                children: [
                                                    "#",
                                                    String(listing.id).padStart(2, "0")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28e7697fddf88d64" + " " + "content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-28e7697fddf88d64" + " " + "location",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 21
                                                    }, this),
                                                    listing.area,
                                                    ", ",
                                                    listing.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-28e7697fddf88d64",
                                                children: listing.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-28e7697fddf88d64" + " " + "price-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: "Starting from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: [
                                                            listing.price.toLocaleString(),
                                                            " EGP"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-28e7697fddf88d64",
                                                        children: "/ month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-28e7697fddf88d64" + " " + "actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+201000000000",
                                                        className: "jsx-28e7697fddf88d64" + " " + "call",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/listings/page.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Call"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://wa.me/201000000000",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "jsx-28e7697fddf88d64" + " " + "whatsapp",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/listings/page.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 23
                                                            }, this),
                                                            "WhatsApp"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/listings/page.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/listings/page.tsx",
                                                lineNumber: 697,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/listings/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, listing.id, true, {
                                fileName: "[project]/app/listings/page.tsx",
                                lineNumber: 658,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/listings/page.tsx",
                        lineNumber: 656,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/listings/page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/201000000000",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "jsx-28e7697fddf88d64" + " " + "floating",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/app/listings/page.tsx",
                    lineNumber: 729,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/listings/page.tsx",
                lineNumber: 723,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "28e7697fddf88d64",
                children: ".jsx-28e7697fddf88d64{box-sizing:border-box}.listings-page.jsx-28e7697fddf88d64{color:#102a47;background:#f5f8fc;min-height:100vh}.hero.jsx-28e7697fddf88d64{text-align:center;background:linear-gradient(135deg,#051d3df7,#105291e6),url(/images/hero.jpg) 50%/cover;justify-content:center;align-items:center;min-height:430px;display:flex}.hero-content.jsx-28e7697fddf88d64{color:#fff;width:min(900px,92%);padding:80px 0}.badge.jsx-28e7697fddf88d64{letter-spacing:1.5px;background:#ffffff14;border:1px solid #ffffff4d;border-radius:50px;align-items:center;gap:8px;padding:10px 17px;font-size:12px;font-weight:800;display:inline-flex}.hero.jsx-28e7697fddf88d64 h1.jsx-28e7697fddf88d64{letter-spacing:-3px;margin:25px 0 0;font-size:max(45px,min(7vw,78px));line-height:.98}.hero.jsx-28e7697fddf88d64 h1.jsx-28e7697fddf88d64 span.jsx-28e7697fddf88d64{color:#a8d1f7;display:block}.hero.jsx-28e7697fddf88d64 p.jsx-28e7697fddf88d64{color:#fffc;max-width:650px;margin:25px auto 0;font-size:18px;line-height:1.7}.container.jsx-28e7697fddf88d64{width:min(1250px,92%);margin:-55px auto 80px;position:relative}.search-panel.jsx-28e7697fddf88d64{background:#fff;border:1px solid #e3eaf2;border-radius:20px;padding:25px;box-shadow:0 20px 60px #14325a21}.search-box.jsx-28e7697fddf88d64{color:#56718e;background:#f8fafc;border:1px solid #dce5ee;border-radius:12px;align-items:center;gap:12px;padding:15px 18px;display:flex}.search-box.jsx-28e7697fddf88d64 input.jsx-28e7697fddf88d64{color:#102a47;background:0 0;border:0;outline:0;width:100%;font-size:15px}.filters.jsx-28e7697fddf88d64{grid-template-columns:1fr 1fr 1.5fr auto;align-items:end;gap:15px;margin-top:18px;display:grid}label.jsx-28e7697fddf88d64{color:#738399;text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;font-size:11px;font-weight:800;display:block}select.jsx-28e7697fddf88d64{color:#183552;background:#fff;border:1px solid #dce5ee;border-radius:10px;outline:none;width:100%;height:46px;padding:0 12px}.price.jsx-28e7697fddf88d64 strong.jsx-28e7697fddf88d64{color:#145ca8;font-size:13px}.price.jsx-28e7697fddf88d64 input.jsx-28e7697fddf88d64{accent-color:#145ca8;width:100%}.filters.jsx-28e7697fddf88d64 button.jsx-28e7697fddf88d64,.empty.jsx-28e7697fddf88d64 button.jsx-28e7697fddf88d64{color:#63758b;cursor:pointer;background:#fff;border:1px solid #dce5ee;border-radius:10px;justify-content:center;align-items:center;gap:7px;height:46px;padding:0 16px;font-weight:700;display:flex}.results.jsx-28e7697fddf88d64{justify-content:space-between;align-items:center;margin:55px 0 25px;display:flex}.results.jsx-28e7697fddf88d64 small.jsx-28e7697fddf88d64{color:#3972a8;letter-spacing:1.5px;font-size:11px;font-weight:800}.results.jsx-28e7697fddf88d64 h2.jsx-28e7697fddf88d64{margin:8px 0 0;font-size:30px}.experience.jsx-28e7697fddf88d64{background:#fff;border:1px solid #e3eaf2;border-radius:12px;align-items:center;gap:12px;padding:13px 18px;display:flex}.experience.jsx-28e7697fddf88d64 strong.jsx-28e7697fddf88d64{color:#145ca8;font-size:28px}.experience.jsx-28e7697fddf88d64 span.jsx-28e7697fddf88d64{color:#74869b;font-size:12px;font-weight:700}.grid.jsx-28e7697fddf88d64{grid-template-columns:repeat(3,1fr);gap:25px;display:grid}.card.jsx-28e7697fddf88d64{background:#fff;border:1px solid #e2e9f1;border-radius:18px;transition:all .25s;overflow:hidden;box-shadow:0 8px 30px #14325a0f}.card.jsx-28e7697fddf88d64:hover{transform:translateY(-7px);box-shadow:0 20px 45px #14325a24}.image.jsx-28e7697fddf88d64{background:#dfe7ef;height:235px;position:relative;overflow:hidden}.image.jsx-28e7697fddf88d64 img.jsx-28e7697fddf88d64{object-fit:cover;transition:all .5s}.card.jsx-28e7697fddf88d64:hover .image.jsx-28e7697fddf88d64 img.jsx-28e7697fddf88d64{transform:scale(1.06)}.type.jsx-28e7697fddf88d64,.number.jsx-28e7697fddf88d64{border-radius:8px;padding:7px 10px;font-size:10px;font-weight:800;position:absolute;top:14px}.type.jsx-28e7697fddf88d64{color:#fff;background:#072344e6;left:14px}.number.jsx-28e7697fddf88d64{color:#183552;background:#ffffffeb;right:14px}.content.jsx-28e7697fddf88d64{padding:20px}.location.jsx-28e7697fddf88d64{color:#678099;align-items:center;gap:6px;font-size:12px;font-weight:600;display:flex}.location.jsx-28e7697fddf88d64 svg.jsx-28e7697fddf88d64{color:#145ca8}.content.jsx-28e7697fddf88d64 h3.jsx-28e7697fddf88d64{margin:11px 0 18px;font-size:19px;line-height:1.3}.price-text.jsx-28e7697fddf88d64{border-bottom:1px solid #edf1f5;padding-bottom:17px}.price-text.jsx-28e7697fddf88d64 small.jsx-28e7697fddf88d64{color:#8998a9;text-transform:uppercase;font-size:10px;display:block}.price-text.jsx-28e7697fddf88d64 strong.jsx-28e7697fddf88d64{color:#145ca8;font-size:20px}.price-text.jsx-28e7697fddf88d64 span.jsx-28e7697fddf88d64{color:#8493a3;margin-left:5px;font-size:11px}.actions.jsx-28e7697fddf88d64{grid-template-columns:1fr 1fr;gap:9px;margin-top:16px;display:grid}.actions.jsx-28e7697fddf88d64 a.jsx-28e7697fddf88d64{border-radius:9px;justify-content:center;align-items:center;gap:7px;min-height:42px;font-size:13px;font-weight:800;text-decoration:none;display:flex}.call.jsx-28e7697fddf88d64{color:#145ca8;background:#edf5fc}.whatsapp.jsx-28e7697fddf88d64{color:#fff;background:#145ca8}.floating.jsx-28e7697fddf88d64{color:#fff;z-index:100;background:#1da851;border-radius:50%;justify-content:center;align-items:center;width:58px;height:58px;display:flex;position:fixed;bottom:24px;right:24px;box-shadow:0 12px 30px #1da85159}.empty.jsx-28e7697fddf88d64{text-align:center;background:#fff;border-radius:18px;padding:80px 20px}.empty.jsx-28e7697fddf88d64 svg.jsx-28e7697fddf88d64{color:#145ca8}.empty.jsx-28e7697fddf88d64 h3.jsx-28e7697fddf88d64{margin:18px 0 5px;font-size:24px}.empty.jsx-28e7697fddf88d64 p.jsx-28e7697fddf88d64{color:#708198}.empty.jsx-28e7697fddf88d64 button.jsx-28e7697fddf88d64{color:#fff;background:#145ca8;border:0;margin:15px auto 0}@media (width<=1000px){.grid.jsx-28e7697fddf88d64{grid-template-columns:repeat(2,1fr)}.filters.jsx-28e7697fddf88d64{grid-template-columns:1fr 1fr}.price.jsx-28e7697fddf88d64{grid-column:span 2}}@media (width<=650px){.hero.jsx-28e7697fddf88d64{min-height:390px}.hero.jsx-28e7697fddf88d64 h1.jsx-28e7697fddf88d64{font-size:45px}.hero.jsx-28e7697fddf88d64 p.jsx-28e7697fddf88d64{font-size:15px}.container.jsx-28e7697fddf88d64{width:94%;margin-top:-30px}.filters.jsx-28e7697fddf88d64{grid-template-columns:1fr}.price.jsx-28e7697fddf88d64{grid-column:auto}.results.jsx-28e7697fddf88d64{flex-direction:column;align-items:flex-start;gap:15px}.experience.jsx-28e7697fddf88d64{width:100%}.grid.jsx-28e7697fddf88d64{grid-template-columns:1fr}.image.jsx-28e7697fddf88d64{height:250px}.floating.jsx-28e7697fddf88d64{bottom:18px;right:18px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/listings/page.tsx",
        lineNumber: 538,
        columnNumber: 5
    }, this);
}
_s(ListingsPage, "QufyzBUXcZeBilujAL74Ucuy/9U=");
_c = ListingsPage;
var _c;
__turbopack_context__.k.register(_c, "ListingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_listings_page_tsx_0a_gthy._.js.map