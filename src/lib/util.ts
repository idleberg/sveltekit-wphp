export function randomResponse(min = 10, max = 2000) {
	const multiplier = isDev() ? 0.1 : 1;

	return Math.floor(Math.random() * (max - min + 1) + min) * multiplier;
}

export function isDev() {
	return import.meta.env.MODE === 'development';
}
