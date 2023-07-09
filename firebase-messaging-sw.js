// Scripts for firebase and firebase messaging
importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: 'AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4',
	authDomain: 'koolyard-84a4a.firebaseapp.com',
	projectId: 'koolyard-84a4a',
	storageBucket: 'koolyard-84a4a.appspot.com',
	messagingSenderId: '669707854180',
	appId: '1:669707854180:web:8a5e8aa2dd09025df95a71',
	measurementId: 'G-PG9PCKGMHY',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Background notifications will be received here
messaging.onBackgroundMessage(async (message) => {
	// save to indexdb, no matter what
	const response = await idbKeyval.get('inoty');
	if (response) {
		const oldNoti = JSON.parse(response);
		await idbKeyval.set(
			'inoty',
			JSON.stringify([
				{
					link: '/student',
					img: message?.notification?.image || '/avatar/kimthiendung.jpg',
					title: message?.notification?.title,
					body: message?.notification?.body,
					isSeen: false,
				},
				...oldNoti.state.noties,
			])
		);
	} else {
		await idbKeyval.set(
			'inoty',
			JSON.stringify([
				{
					link: '#',
					img: message?.notification?.image || '/avatar/kimthiendung.jpg',
					title: message?.notification?.title,
					body: message?.notification?.body,
					isSeen: false,
				},
			])
		);
	}

	if (Notification.permission === 'granted') {
		if (navigator.serviceWorker)
			navigator.serviceWorker.getRegistration().then(async function (reg) {
				if (reg)
					await reg.showNotification(message.notification.title, {
						body: message.notification.body,
						icon: '/favicon.ico',
					});
			});
	}
});
