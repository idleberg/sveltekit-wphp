/// <reference types="@sveltejs/kit" />
interface CallbackPayload {
	form: string;
	user: string;
	password?: string;
	timestamp: number;
}
