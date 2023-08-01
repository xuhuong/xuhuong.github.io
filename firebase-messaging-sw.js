// Scripts for firebase and firebase messaging
importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: 'AIzaSyD1KuEyGhDPD-fZ8zABZCqQwhFKWIvB0SE',
	authDomain: 'koolyard-a7d0e.firebaseapp.com',
	projectId: 'koolyard-a7d0e',
	storageBucket: 'koolyard-a7d0e.appspot.com',
	messagingSenderId: '605848801648',
	appId: '1:605848801648:web:c48808d1f960b00d223fb5',
	measurementId: 'G-J25HN3JGSE',
};

let messaging;

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

if (firebase.messaging.isSupported()) {
	messaging = firebase.messaging();
}

// Background notifications will be received here
messaging.onBackgroundMessage(async (message) => {
	// save to indexdb, no matter what
	const response = await idbKeyval.get('inoty');
	const oldNoti = JSON.parse(response);
	console.log('response notification', message?.notification);
	await idbKeyval.set(
		'inoty',
		JSON.stringify([
			{
				link: message?.notification?.link || '#',
				img: message?.notification?.image || '/img/avatar/kimthiendung.jpg',
				title: message?.notification?.title,
				body: message?.notification?.body,
				isSeen: false,
			},
			...oldNoti?.state.noties,
		])
	);

	if (Notification.permission === 'granted') {
		console.log('message.notification', message);
		if (navigator.serviceWorker)
			navigator.serviceWorker.getRegistration().then(async function (reg) {
				if (reg)
					await reg.showNotification(message.notification.title, {
						body: message.notification.body,
						icon: '/img/svg/logo.svg',
					});
			});
	}
});
