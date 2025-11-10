import { useState } from "react";
import Footer from "../components/footer";
import type { ContactForm } from "../type";

//フォーム作成の続きをしていく
const ContactForm = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "name") {
			setName(e.target.value);
			console.log(name);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
			console.log("email");
		} else if (e.target.name === "message") {
			setMessage(e.target.value);
			console.log("message");
		}
	};

	return (
		<div>
			<h1>Contact</h1>
			<p>以下のフォームに必要事項を入力してください。</p>
			<form className="contact-form">
				<input
					name="name"
					value={name}
					onChange={handleChange}
					placeholder="名前"
					className="contact-input"
				/>
				<input
					name="email"
					value={email}
					onChange={handleChange}
					placeholder="メールアドレス"
					className="contact-input"
				/>
				<input
					name="message"
					value={message}
					onChange={handleChange}
					placeholder="メッセージ"
					className="contact-email"
				/>
				<input type="submit" className="submit-button" />
			</form>
			<Footer />
		</div>
	);
};

export default ContactForm;
