# VeniceBeachStats

## Technisch

= ANMELDUNG =

URL:
	https://oauth.actinate.com/v4/oauth/token

Request Headers:
	grant_type: password
	username: julien.midedji@gmail.com
	password: blabla...
	client_id: venicebeachV2
	client_secret: @?Udu.YUS+ecZWJHQ(+rLcnGyM:e8p6p
	app_version: 6.1.5
	os_version: 34
	os: android

Response Body:
	{
	  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZW5pY2ViZWFjaFYyIiwianRpIjoiZDg2NjRkM2QtMDhlNS00ZTQ4LWFiNmMtMmE4YTdkNDRkMDA4Iiwic3ViIjozNDM0MTcsImV4dGVybmFsQXV0aFRva2VuIjpudWxsLCJpYXQiOjE3MTYzOTc4NzcsImV4cCI6MTcxNjM5OTU1N30.pk4N_Sly1aLyyXv8UE1Hx8sQq5CejPVLNrYIt_oC3io",
	  "token_type": "Bearer",
	  "expires_in": 1617,
	  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZW5pY2ViZWFjaFYyIiwianRpIjoiODQ0ZjI2OTYtNzVmNy00N2M2LWE2YmItODA3ZDQyMTY0NjU2Iiwic3ViIjozNDM0MTcsImlhdCI6MTcxNjM5Nzg3NywiZXhwIjoxNzMyMTY1ODc3fQ.eB3amLBxFQBAd0KrQF8Gc3-aL4vlKRP1FgMFjg1iGRI"
	}

= REFRESH =

client_id=venicebeachV2&
client_secret=%40%3FUdu.YUS%2BecZWJHQ%28%2BrLcnGyM%3Ae8p6p&
app_version=6.1.5&
os_version=34&
os=android&
grant_type=refresh_token&
refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZW5pY2ViZWFjaFYyIiwianRpIjoiNWQ1MzQ3ODQtMmVmMC00MmMxLWEzOTUtY2U3MWZjNjZmOTQ1Iiwic3ViIjozNDM0MTcsImlhdCI6MTcxNjQ1NjE4NywiZXhwIjoxNzMyMjI0MTg3fQ.wm8FnyRZcbc4X_1euKpc6CrKTsfuiPblAzi_-kjc5w4&
expired_access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZW5pY2ViZWFjaFYyIiwianRpIjoiMWQ4MDUzOWUtMTVmMy00NjA1LTgyMjgtNzQ1NTViNGEwYjRkIiwic3ViIjozNDM0MTcsImV4dGVybmFsQXV0aFRva2VuIjpudWxsLCJpYXQiOjE3MTY0NTYxODgsImV4cCI6MTcxNjQ1Nzg2OH0.ECbIp1DEhTRnBBYEV2p5y2IZR-mGTt3JygAD0wQVJtc


= INFOS HOLEN =

URL: 
	https://venicebeach.api.actinate.com/gym/v1/studios/43?lang=en

authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZW5pY2ViZWFjaFYyIiwianRpIjoiYWJkMGM5YTktODNjMy00YTVkLWEwZmQtNjEzZDE3NjEzYzkyIiwic3ViIjozNDM0MTcsImV4dGVybmFsQXV0aFRva2VuIjpudWxsLCJpYXQiOjE3MTYzOTY4MjQsImV4cCI6MTcxNjM5ODUwNH0.gn3MaTOTPwenFBCjRC7FnPswwYJMuug1USJ2QXlDXDw
Host: venicebeach.api.actinate.com

Response Body:
	{
	  "studio": {
		"id": 43,
		"name": "VeniceBeach Karlsruhe Südstadt",
		"street": "Rüppurrer Straße 1",
		"postcode": "76131",
		"city": "Karlsruhe",
		"phone": "0721-3544690",
		"enableCourseJoin": true,
		"enableCourses": true,
		"enableCheckinTimeslots": false,
		"subscribed": true,
		"favorited": true,
		"homeStudio": true,
		"email": "karlsruhe.suedstadt@venicebeach-fitness.de",
		"videoUrl": null,
		"shopUrl": null,
		"profileIconUrl": null,
		"appointmentUrl": null,
		"externalCoursesUrl": null,
		"phone_booking": null,
		"order": null,
		"checkedInUsers": {
		  "current": 195,
		  "max": null,
		  "min": null
		},
		"links": [
		  {
			"rel": "getStudio",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43",
			"method": "GET"
		  },
		  {
			"rel": "getStudioTimeline",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/timeline/studios/43",
			"method": "GET"
		  },
		  {
			"rel": "sendStudioFeedback",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/feedback",
			"method": "POST"
		  },
		  {
			"rel": "getStudioServices",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/services",
			"method": "GET"
		  },
		  {
			"rel": "subscribe",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/subscription",
			"method": "PUT"
		  },
		  {
			"rel": "unsubscribe",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/subscription",
			"method": "DELETE"
		  },
		  {
			"rel": "favorite",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/favorite",
			"method": "PUT"
		  },
		  {
			"rel": "unfavorite",
			"uri": "https://venicebeach.api.actinate.com/gym/v1/studios/43/favorite",
			"method": "DELETE"
		  },
		  {
			"rel": "setHomeStudio",
			"uri": "https://venicebeach.api.actinate.com/gym/v2/studios/43/homestudio",
			"method": "POST"
		  }
		],
		"openingHours": [
		  {
			"day": "monday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "tuesday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "wednesday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "thursday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "friday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "saturday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "sunday",
			"from": "00:00:00",
			"to": "24:00:00"
		  },
		  {
			"day": "holiday",
			"from": "00:00:00",
			"to": "00:00:00"
		  }
		],
		"images": [
		  {
			"id": 63,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/qwqJyfdy8kBYCqe27SXv.jpg-small",
			"image": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/qwqJyfdy8kBYCqe27SXv.jpg"
		  },
		  {
			"id": 64,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/vmDauNOdbL61N4bLl8yD.jpg-small",
			"image": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/vmDauNOdbL61N4bLl8yD.jpg"
		  },
		  {
			"id": 65,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/pgHeTcLibJGe1nJ0phhe.jpg-small",
			"image": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/pgHeTcLibJGe1nJ0phhe.jpg"
		  },
		  {
			"id": 66,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/WDto1zU3GLTnJVwllvYD.jpg-small",
			"image": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/WDto1zU3GLTnJVwllvYD.jpg"
		  },
		  {
			"id": 67,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/Cnv2qJvIXr9JlUuVeKa0.jpg-small",
			"image": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/Cnv2qJvIXr9JlUuVeKa0.jpg"
		  }
		],
		"employees": [
		  {
			"id": 253,
			"firstname": "Tobi",
			"lastname": "",
			"manager": false,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/employees/evL62aAEdOcN27bUOgp5.JPG-small"
		  },
		  {
			"id": 254,
			"firstname": "Julia",
			"lastname": "",
			"manager": false,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/employees/yoBUYLuOLqSZtDpgBol8.JPG-small"
		  },
		  {
			"id": 256,
			"firstname": "Betty",
			"lastname": "",
			"manager": false,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/employees/NAQUabAmJI7dtNvDBY5e.JPG-small"
		  },
		  {
			"id": 257,
			"firstname": "Julian",
			"lastname": "",
			"manager": false,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/employees/7RUrbniOMdtX31yE2m6m.JPG-small"
		  },
		  {
			"id": 258,
			"firstname": "Ivan",
			"lastname": "",
			"manager": true,
			"thumbnail": "https://drhn9iurmlr4k.cloudfront.net/gym/production/venicebeach/media/studios/43/employees/JRMK7bYGUMQdQHUkjNUC.JPG-small"
		  }
		]
	  }
	}

