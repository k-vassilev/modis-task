const baseUrl = "https://github.com/web-steel/koa.api.skeleton"; // base of end point

export default async function createUser(userData) {
	const settings = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	};

	let response = await fetch(`${baseUrl}`, settings);
	if (response.status === 200) {
		return response.json();
	} else {
		const errorMessage = {
			message: "There has been a problem in creating the user",
		};
		throw errorMessage;
	}
}
