'use strict'

const data = {}

const dataRefresh = {
  "venues": [{
      "id": "58ba11200aac755b15fc5456",
      "name": "Tuscan Kitchen Portsmouth",
      "contact": {},
      "location": {
        "lat": 43.05686,
        "lng": -70.769508,
        "labeledLatLngs": [{
          "label": "display",
          "lat": 43.05686,
          "lng": -70.769508
        }],
        "cc": "US",
        "city": "Portsmouth",
        "state": "NH",
        "country": "United States",
        "formattedAddress": [
          "Portsmouth, NH",
          "United States"
        ]
      },
      "categories": [{
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
          "suffix": ".png"
        },
        "primary": true
      }],
      "verified": false,
      "stats": {
        "checkinsCount": 109,
        "usersCount": 58,
        "tipCount": 1
      },
      "hasMenu": true,
      "menu": {
        "type": "Menu",
        "label": "Menu",
        "anchor": "View Menu",
        "url": "https://foursquare.com/v/tuscan-kitchen-portsmouth/58ba11200aac755b15fc5456/menu",
        "mobileUrl": "https://foursquare.com/v/58ba11200aac755b15fc5456/device_menu"
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1508539431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "5452b8bd498e788df9dd7d98",
      "name": "Patty B's Ristorante",
      "contact": {
        "phone": "6037494181",
        "formattedPhone": "(603) 749-4181"
      },
      "location": {
        "address": "34 Dover Point Rd",
        "lat": 43.1733692236702,
        "lng": -70.86117170399773,
        "labeledLatLngs": [{
          "label": "display",
          "lat": 43.1733692236702,
          "lng": -70.86117170399773
        }],
        "postalCode": "03820",
        "cc": "US",
        "city": "Dover",
        "state": "NH",
        "country": "United States",
        "formattedAddress": [
          "34 Dover Point Rd",
          "Dover, NH 03820",
          "United States"
        ]
      },
      "categories": [{
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
          "suffix": ".png"
        },
        "primary": true
      }],
      "verified": false,
      "stats": {
        "checkinsCount": 213,
        "usersCount": 74,
        "tipCount": 2
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1508539431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b549aa7f964a5203ac227e3",
      "name": "Olive Garden",
      "contact": {
        "phone": "6034368400",
        "formattedPhone": "(603) 436-8400",
        "twitter": "olivegarden"
      },
      "location": {
        "address": "2048 Woodbury Ave",
        "lat": 43.096182579637485,
        "lng": -70.79821828952909,
        "labeledLatLngs": [{
          "label": "display",
          "lat": 43.096182579637485,
          "lng": -70.79821828952909
        }],
        "postalCode": "03801",
        "cc": "US",
        "city": "Newington",
        "state": "NH",
        "country": "United States",
        "formattedAddress": [
          "2048 Woodbury Ave",
          "Newington, NH 03801",
          "United States"
        ]
      },
      "categories": [{
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
          "suffix": ".png"
        },
        "primary": true
      }],
      "verified": true,
      "stats": {
        "checkinsCount": 2802,
        "usersCount": 1443,
        "tipCount": 23
      },
      "url": "http://www.olivegarden.com/italian-restaurant/nh/newington/1435/",
      "hasMenu": true,
      "menu": {
        "type": "Menu",
        "label": "Menu",
        "anchor": "View Menu",
        "url": "https://foursquare.com/v/olive-garden/4b549aa7f964a5203ac227e3/menu",
        "mobileUrl": "https://foursquare.com/v/4b549aa7f964a5203ac227e3/device_menu"
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "1435",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1508539431",
      "venueChains": [{
        "id": "556d1777aceaff43eb09d1f1"
      }],
      "hasPerk": false
    }
  ],
}

module.exports = {
  data,
  dataRefresh
}
