import { useState } from "react";
import { useForm } from "react-hook-form";
const ContactForm = () => {
	const handleSubmit = () => {};
	return (
		<div>
			<form className="contact-form">
				<input
					type="text"
					name="name"
					placeholder="名前"
					className="contact-input"
				/>
				<input
					type="email"
					name="email"
					placeholder="メールアドレス"
					className="contact-input"
				/>
				<input
					type="text"
					name="message"
					placeholder="メッセージ"
					className="contact-email"
				/>
				<button type="submit" onClick={handleSubmit} className="contact-button">
					送信
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
