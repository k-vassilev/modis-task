import { useState } from "react";
import createUser from "../service/createUser";

const SubmissionForm = () => {
	const [color, setColor] = useState("#000000");
	const [btnBg, setBtnBg] = useState();
	const [validUser, setValidUser] = useState(true);

	const onRegisterSubmitHandler = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const { firstName, lastName, email } = Object.fromEntries(formData);

		const userData = {
			firstName,
			lastName,
			email,
		};

		if (validUser) {
			setBtnBg("#00ff00"); // mock logic as the backend is not working
			try {
				await createUser(userData);
				setBtnBg("#00ff00"); // green on server status code 200
			} catch (err) {
				setBtnBg("#FF5733"); // red on any other server status
			}
		} else {
			setBtnBg("#FF5733"); // mock logic as the backend is not working
		}
	};

	const emailChangeHandler = () => {
		setColor("#" + Math.floor(Math.random() * 0xffffff).toString(16));
	};

	const firstNameChangeHandler = (e) => {
		setColor("#" + Math.floor(Math.random() * 0xffffff).toString(16));
		let currentName = e.target.value;
		if (currentName.length < 5) {
			setValidUser(false);
		} else {
			setValidUser(true);
		}
	};

	const lastNameChangeHandler = (e) => {
		setColor("#" + Math.floor(Math.random() * 0xffffff).toString(16));
		let currentName = e.target.value;
		if (currentName.length < 5) {
			setValidUser(false);
		} else {
			setValidUser(true);
		}
	};

	return (
		<section>
			<form
				id="submission-form"
				method="POST"
				onSubmit={onRegisterSubmitHandler}
			>
				<fieldset>
					<legend>Submission Form</legend>
					<span className="field">
						<label htmlFor="firstName">First Name</label>
						<span className="input">
							<input
								type="text"
								style={{ borderColor: color }}
								name="firstName"
								id="firstName"
								placeholder="First Name"
								onBlur={firstNameChangeHandler}
							/>
						</span>
					</span>
					<span className="field">
						<label htmlFor="username">Last Name</label>
						<span className="input">
							<input
								type="text"
								style={{ borderColor: color }}
								name="lastName"
								id="lastName"
								placeholder="Last Name"
								onBlur={lastNameChangeHandler}
							/>
						</span>
					</span>
					<span className="field">
						<label htmlFor="email">Email</label>
						<span className="input">
							<input
								type="text"
								style={{ borderColor: color }}
								name="email"
								id="email"
								placeholder="Email"
								onBlur={emailChangeHandler}
							/>
						</span>
					</span>
					<input
						className="button submit"
						type="submit"
						style={{ background: btnBg }}
						value="Submit"
					/>
				</fieldset>
			</form>
		</section>
	);
};

export default SubmissionForm;
